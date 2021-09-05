export default function Cart() {
    return (
        <>
<div class="grid grid-cols-2 gap-10">
    <div>
      <h3 class="text-xl mt-4 font-bold px-0 py-4">Order Summary</h3>
      
      <div class="flex">
        <div class="flex-none w-48 relative">
          <img src="https://images.pexels.com/photos/1302883/pexels-photo-1302883.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" class="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div class="bg-primary flex-auto p-6">
          <div class="flex flex-wrap">
            <h1 class="flex-auto text-xl font-semibold">Red Velvet</h1>
            <div class="w-full flex-none text-sm font-medium text-gray-500 my-1">Extra Details: With Extra Cream</div>
          </div>
          <div class="flex justify-between mt-10">
            <!-- Counter -->
            <div class="inline-flex">
              <div class="flex items-center space-x-4 justify-between">
                <button class="px-2 py-1 flex items-center justify-center rounded-md border border-gray-300" type="button">+</button>
                <div>2</div>
                <button class="px-2 py-1 flex items-center justify-center rounded-md border border-gray-300" type="button">-</button>
              </div>
            </div>
            <!-- Price -->
            <div class="text-xl font-semibold text-gray-500">$49.00</div>
          </div>
        </div>
      </div>
      
      <div class="flex my-10">
        <div class="flex-none w-48 relative">
          <img src="https://images.pexels.com/photos/1302883/pexels-photo-1302883.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" class="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div class="bg-primary flex-auto p-6">
          <div class="flex flex-wrap">
            <h1 class="flex-auto text-xl font-semibold">Red Velvet</h1>
            <div class="w-full flex-none text-sm font-medium text-gray-500 my-1">Extra Details: With Extra Cream</div>
          </div>
          <div class="flex justify-between mt-10">
            <!-- Counter -->
            <div class="inline-flex">
              <div class="flex items-center space-x-4 justify-between">
                <button class="px-2 py-1 flex items-center justify-center rounded-md border border-gray-300" type="button">+</button>
                <div>2</div>
                <button class="px-2 py-1 flex items-center justify-center rounded-md border border-gray-300" type="button">-</button>
              </div>
            </div>
            <!-- Price -->
            <div class="text-xl font-semibold text-gray-500">$49.00</div>
          </div>
        </div>
      </div>
     
    </div>

    <div>
      <div class="bg-white rounded shadow px-8 py-4">
        <!-- Order Summary  -->
        <div>
          <h3 class="text-xl mt-4 font-bold">Order Summary</h3>
         
          <div class="border-b-2 w-full rounded mt-5 flex p-4 justify-between items-center flex-wrap">
            <div class="w-2/3">
              <h3 class="text-lg font-medium">Red Velvt</h3>
              <p class="text-gray-600 text-xs">Extra Details: <b class="text-red-700 text-xs font-bold">with extra cream</b></p>
            </div>
            <div>
              <h4 class="text-3xl font-medium"><sup class="text-lg text-purple-800">$</sup> 89</h4>
            </div>
          </div>
         
          <div class="border-b-2 first w-full rounded flex p-4 justify-between items-center flex-wrap">
            <div class="w-2/3">
              <h3 class="text-lg font-medium">Black Forest Velvt</h3>
              <p class="text-gray-600 text-xs">Extra Details: <b class="text-red-700 text-xs font-bold">with extra cream</b></p>
            </div>
            <div>
              <h4 class="text-3xl font-medium"><sup class="text-lg text-purple-800">$</sup> 89</h4>
            </div>
          </div>

        
          <div class="border-b-2 first w-full rounded flex p-4 justify-between items-center flex-wrap">
            <div class="w-2/3">
              <h3 class="text-lg font-medium">Chocolate Fudge Cake</h3>
              <p class="text-gray-600 text-xs">Extra Details: <b class="text-red-700 text-xs font-bold">with extra cream</b></p>
            </div>
            <div>
              <h4 class="text-3xl font-medium"><sup class="text-lg text-purple-800">$</sup> 89</h4>
            </div>
          </div>
        </div>
        <div class="flex p-4 justify-between mt-3">
          <div class="text-xl text-orange-900 font-bold">Total Amount</div>
          <div class="text-2xl text-orange-900 font-bold">$114</div>
        </div>
        <button class="px-4 py-4 bg-secondary text-beige hover:text-secondary w-full mt-3 rounded shadow font-bold hover:bg-primary">PROCEED TO CHECKOUT SCREEN</button>
      </div>
    </div>
  </div>
        </>
    )
}