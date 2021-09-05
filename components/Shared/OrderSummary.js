import Toggle from "~/components/Shared/Toggle";
import OrderButton from "~/components/Shared/OrderButton";
import { useMachine, useService } from "@xstate/react";

export default function OrderSummary({ current, addItem }) {
 
  return (
    <>
      <div className="px-8 py-4 bg-white rounded shadow">
        <div>
          <div className="flex items-center justify-between mt-4">
            <h3 className="text-xl font-bold">Order Summary</h3>
            {/* Toogle Price  */}
            <Toggle priceToggle="Currency Switch" />
          </div>

          {current.context.items.map((item, idx) => {
             // eslint-disable-next-line react-hooks/rules-of-hooks
             const [state, send] = useService(item.ref);
             const itemCtx = state;
            return (
              <div
                key={idx}
                className="flex flex-wrap items-center justify-between w-full p-4 mt-5 border-b-2 rounded"
              >
                <div className="w-2/3">
                  <h3 className="text-lg font-medium">
                    {itemCtx.context.name}
                  </h3>
                  <p className="text-xs text-gray-600">
                    Extra Details:{" "}
                    <b className="text-xs font-bold text-red-700">
                      with extra cream
                    </b>
                  </p>
                </div>
                <div>
                  <h4 className="text-3xl font-medium">
                    <sup className="text-lg text-purple-800">{current.context.currency}</sup>{" "}
                    {parseFloat(itemCtx.context.amount) * itemCtx.context.quantity}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between p-4 mt-3">
          <div className="text-xl font-bold text-orange-900">Total Amount</div>
          <div className="text-2xl font-bold text-orange-900">$114</div>
        </div>

        <OrderButton buttonState="ADD CONTACT DETAILS" />
      </div>
    </>
  );
}
