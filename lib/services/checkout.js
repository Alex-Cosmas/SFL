// import uuid from "uuid/v4";
import { assign, createMachine, sendParent, spawn, send } from "xstate";
import Swal from "sweetalert2";

export const cartItemMachine = createMachine({
  id: "cartItem",
  initial: "reading",
  context: {
    id: undefined,
    name: "",
    categoryId: "",
    amount: "",
    quantity: undefined,
  },
  on: {
    DELETE: "deleted",
    INC: "increase",
    DEC: "decrease",
  },
  states: {
    reading: {},
    deleted: {
      onEntry: sendParent((ctx) => ({ type: "REMOVEITEM", id: ctx.id })),
    },
    increase: {
      entry: sendParent((ctx) => ({
        type: "UPDATEITEM",
        product: { ...ctx, quantity: ctx.quantity++ },
        direction: "inc",
      })),
      actions: sendParent((ctx) => ({
        type: "UPDATEITEM",
        product: { ...ctx, quantity: ctx.quantity++ },
        direction: "inc",
      })),
    },
    decrease: {
      entry: sendParent((ctx) => ({
        type: "UPDATEITEM",
        product: { ...ctx, quantity: ctx.quantity++ },
        direction: "dec",
      })),
      actions: sendParent((ctx) => ({
        type: "UPDATEITEM",
        product: { ...ctx, quantity: ctx.quantity++ },
        direction: "dec",
      })),
    },
  },
});

const updateCartItem = assign({
  items: (ctx, e) => {
    console.log(e, "update");
    const data = ctx.items.map((item) => {
      if (item.ref.initialState.context.id === e.product.id) {
        item = {
          ref: spawn(
            cartItemMachine.withContext({
              ...e.product,
              quantity:
                e.direction === "inc"
                  ? e.product.quantity + 1
                  : e.product.quantity - 1,
            })
          ),
        };
        return item;
      }
      return item;
    });
    send("CALCULATETOTAL");
    return data;
  },
});

const addCartItem = assign({
  items: (ctx, e) => {
    console.log(
      ctx.items.filter(
        (item) => item.ref.initialState.context.id === e.product.id
      )
    );
    if (
      ctx.items.filter(
        (item) => item.ref.initialState.context.id === e.product.id
      ).length > 0
    ) {
      /* vendors contains the element we're looking for */
      //   Swal.fire({
      //     title: "Hey There!",
      //     text: "Item already exists Checkout the cart 👍",
      //     icon: "warning",
      //     confirmButtonText: "Ok",
      //   });
      return ctx.items;
    }

    const data = [
      ...ctx.items,
      {
        ref: spawn(
          cartItemMachine.withContext({
            ...e.product,
            quantity: 1,
          })
        ),
      },
    ];
    // Swal.fire({
    //   title: "Success!",
    //   text: `${e.product.name} Added`,
    //   icon: "success",
    //   confirmButtonText: "Ok",
    // });
    return data;
  },
});

const removeCartItem = assign({
  items: (ctx, e) => {
    return ctx.items.filter(
      (item) => item.ref.initialState.context.id !== e.id
    );
  },
});

const calculateTotal = assign({
  total: (context) => {
    function amount(item) {
      return (
        parseFloat(item?.ref?.machine?.context?.amount) *
        item?.ref?.machine?.context?.quantity
      );
    }
    function sum(prev, next) {
      return prev + next;
    }
    console.log(context.items);
    return context?.items?.map(amount)?.reduce(sum);
  },
});

export const cartMachine = createMachine(
  {
    id: "cart",
    context: {
      items: [],
      currency: "$",
      total: 0,
    },
    initial: "no-items",
    states: {
      "no-items": {
        entry: assign({
          items: (ctx, e) => {
            return ctx.items.map((item) => ({
              ...item,
              ref: spawn(cartItemMachine.withContext(item)),
            }));
          },
        }),
        on: {
          ADDITEM: {
            target: "has-items",
            actions: ["addCartItem"],
          },
          CALCULATETOTAL: {
            target: "has-items",
            actions: ["calculateTotal"],
          },
          CHANGE_CURRENCY: {
            actions: assign({
              currency: (context) => {
                console.log("switching currency ", context.currency);
                if (context.currency == "$") {
                  return "BTC";
                } else {
                  return "$";
                }
              },
            }),
          },
        },
      },
      "has-items": {
        on: {
          ADDITEM: {
            actions: ["addCartItem", "calculateTotal"],
          },
          REMOVEITEM: {
            actions: ["removeCartItem", "calculateTotal"],
          },
          UPDATEITEM: {
            actions: ["updateCartItem", "calculateTotal"],
          },
          CHANGE_CURRENCY: {
            actions: assign({
              currency: (context) => {
                console.log("switching currency ", context.currency);
                if (context.currency == "$") {
                  return "BTC";
                } else {
                  return "$";
                }
              },
            }),
          },
        },
        entry: {
          actions: assign({
            total: (context) => {
              function amount(item) {
                return parseFloat(item?.ref?.machine?.context?.amount);
              }
              function sum(prev, next) {
                return prev + next;
              }
              console.log(context.items);
              return context?.items?.map(amount)?.reduce(sum);
            },
          }),
        },
      },
    },
  },
  {
    actions: { addCartItem, removeCartItem, updateCartItem, calculateTotal },
  }
);
