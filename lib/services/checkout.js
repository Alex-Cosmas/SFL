// import uuid from "uuid/v4";
import { assign, createMachine, sendParent, spawn } from "xstate";
// import { useLocalStorage } from "../services/storage";

export const cartItemMachine = createMachine({
  id: "cartItem",
  initial: "reading",
  context: {
    id: undefined,
    name: "",
    categoryId: "",
    amount: "",
  },
  on: {
    DELETE: "deleted",
  },
  states: {
    reading: {},
    deleted: {
      onEntry: sendParent((ctx) => ({ type: "REMOVEITEM", id: ctx.id })),
    },
  },
});

const addCartItem = assign({
  items: (ctx, e) => {
    console.log("adding");
    const data = [
      ...ctx.items,
      {
        ref: spawn(
          cartItemMachine.withContext({
            ...e.product,
          })
        ),
      },
    ];
    // storage.setItem("cart", data);
    return data;
  },
});

const removeCartItem = assign({
  items: (ctx, e) => {
    console.log(e.id);
    console.log(ctx.items);
    return ctx.items.filter(
      (item) => item.ref.initialState.context.id !== e.id
    );
  },
});

export const cartMachine = createMachine(
  {
    id: "cart",
    context: {
      items: [],
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
        },
      },
      "has-items": {
        on: {
          ADDITEM: {
            actions: ["addCartItem"],
          },
          REMOVEITEM: {
            actions: ["removeCartItem"],
          },
        },
      },
    },
  },
  {
    actions: { addCartItem, removeCartItem },
  }
);
