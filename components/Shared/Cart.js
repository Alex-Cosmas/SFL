/* eslint-disable react-hooks/rules-of-hooks */
import Toggle from "./Toggle";
import OrderSummary from "~/components/Shared/OrderSummary";
import { useMachine, useService } from "@xstate/react";
import CartItem from "./CartItem";

export default function CartComponent({ current, addItem }) {
  console.log(addItem)
  return (
    <>
      <div className="grid grid-cols-2 gap-10">
        <div>
          <h3 className="px-0 py-4 mt-4 text-xl font-bold">Basket</h3>
          {current.context.items.map((item, idx) => {
            // console.log(item.ref.machine.context.name)
            const [state, send] = useService(item.ref);
            const itemCtx = state;
            return (
              <div key={idx} className="flex my-5">
                <div className="relative flex-none w-48">
                  <img
                    src="https://images.pexels.com/photos/1302883/pexels-photo-1302883.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                    alt=""
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                </div>

                <div className="flex-auto p-6 bg-white shadow-md">
                  <div className="flex flex-wrap">
                    <h1 className="flex-auto text-xl font-semibold">
                      {itemCtx.context.name}
                    </h1>
                    <div className="flex-none w-full my-1 text-sm font-medium text-gray-500">
                      Extra Details: With Extra Cream
                    </div>
                  </div>
                  <div className="flex justify-between mt-10">
                    <div className="inline-flex">
                      <div className="flex items-center justify-between space-x-4">
                        <button
                          className="flex items-center justify-center px-2 py-1 border border-gray-300 rounded-md"
                          type="button"
                          onClick={() => {
                            send("INC", { ...itemCtx });
                            send("CALCULATETOTAL");
                            // itemCtx.context.quantity++
                          }}
                        >
                          +
                        </button>
                        <div>{itemCtx.context.quantity}</div>
                        <button
                          className="flex items-center justify-center px-2 py-1 border border-gray-300 rounded-md"
                          type="button"
                          onClick={() => {
                            send("DEC", { ...itemCtx });
                            send("CALCULATETOTAL");
                          }}
                        >
                          -
                        </button>
                      </div>
                    </div>

                    <div className="text-xl font-semibold text-gray-500">
                      {current.context.currency} {itemCtx.context.amount}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <OrderSummary current={current}  addItem={addItem}/>
        </div>
      </div>
    </>
  );
}
