import Wrapper from '@/components/Wrapper'


const checkOut = ()=>{
    return (
          <div className='w-full md:py-4 bg-gray-200'>
             <Wrapper className='grid grid-cols-12 items-start gap-2 '>
                  <div className='col-span-12 md:col-span-5 shadow-md rounded-md bg-white p-4'>
                      <h3 className='text-lg font-medium capitalize'>Checkout</h3> 

                      <div>
                         <label htmlFor="" className='block  text-gray-600 mb-2 '>Mobile <span className='text-red-400'>*</span></label>
                         <input type="text" className='w-full block border border-gray-400 rounded-md px-4 py-3' placeholder='Enter mobile number'/>
                      </div>
                      <div>
                         <label htmlFor="" className='block  text-gray-600 mb-2'>Name <span className='text-red-400'>*</span></label>
                         <input type="text" className='w-full block border border-gray-400 rounded-md px-4 py-3' placeholder='Enter your name'/>
                      </div>

                      <div>
                        <label htmlFor="" className='block  text-gray-600 mb-2 '>Address <span className='text-red-400'>*</span></label>
                        <textarea id="message" rows="2" className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border
                         border-gray-300  dark:bg-gray-700  " 
                        placeholder="Write your address here..."></textarea>
                      </div>

                      <div className='flex justify-between items-center mb-2'>
                            <div className="inline-flex items-center">
                                <input type="radio" className=" h-5 w-5 cursor-pointer focus:border-red-300 checked:border-red-300" name="radio-option"/>
                                <span className="ml-2 text-gray-700">Inside Dhaka - 60 Tk</span>
                            </div>

                            <div className="inline-flex items-center ">
                                <input type="radio" className=" h-5 w-5 cursor-pointer focus:border-red-300" name="radio-option"/>
                                <span className="ml-2 text-gray-700">Outside Dhaka - 120 Tk</span>
                            </div>

                      </div>
                      <div>
                        <button className='w-full block bg-red-400 rounded-md p-2 uppercase text-xl font-semibold text-white '>Confirmed Order</button>
                      </div>
                  </div>

                  <div className='col-span-12 md:col-span-7 shadow-md rounded bg-white p-4'>
                      <h3 className='text-lg font-medium capitalize'>Order Summary</h3> 
                      <div className='space-y-2 divide-y'>
                         <div className='flex justify-between items-center'>
                             <div className='flex items-center gap-2 basis-3/5 md:basis-1/2'>
                                <img src="p1.png" alt="" className='basis-1/3 w-16 h-16 rounded-md'/>
                                 <div>
                                    <h5>Nike senakers german Version Nike senakers german Version</h5>
                                    <p>Size:M, Color:Red</p>
                                 </div>
                             </div>
                             <p className='text-gray-600'>x 3</p>
                             <p className='text-gray-800 font-medium'>BDT 12,00</p>
                         </div>

                         <div className='flex justify-between items-center'>
                             <div className='flex items-center gap-2 basis-3/5 md:basis-1/2'>
                                <img src="p1.png" alt="" className='basis-1/3 w-16 h-16 rounded-md'/>
                                 <div >
                                    <h5>Nike senakers german Version Nike senakers german Version</h5>
                                    <p>Size:M, Color:Green</p>
                                 </div>
                             </div>
                             <p className='text-gray-600 '>x 3</p>
                             <p className='text-gray-800 font-medium'>BDT 12,00</p>
                         </div>
                      <div className='space-y-2 divide-y'> 
                      <div className='flex justify-between items-center gap-2 '>
                            <p className=' basis-3/5 md:basis-1/2'></p>
                            <p className='uppercase '>Sub Total</p>
                            <p className='uppercase'>24,00 BDT </p>
                         </div>

                         <div className='flex justify-between items-center gap-2 '>
                            <p className=' basis-3/5 md:basis-1/2'></p>
                            <p className='uppercase '>Shipping Cost</p>
                            <p className='uppercase'>120 BDT </p>
                         </div>

                         <div className='flex justify-between items-center gap-2 '>
                            <p className=' basis-3/5 md:basis-1/2'></p>
                            <p className='uppercase '>Grand Total</p>
                            <p className='uppercase'>2500 BDT </p>
                         </div>
                      </div>
                        

                      </div>

                  </div>
             </Wrapper>
          </div>
    )
}


export default checkOut;