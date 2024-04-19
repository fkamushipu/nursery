import Image from "next/image";
import Plant1 from '../public/plant.jpeg'

export default function Home() {
  return (
  <>
    <div className=" bg-zinc-100">
      
      <div className=" ">
        {/* Navigation goes hear */}
        <div className="py-10 px-20 shadow-sm"> 
          <div className="flex justify-between">
            <div>image</div>
            <div className="space-x-6 font-bold font-serif text-xs ">
              <span>Home</span>
              <span>Home</span>
              <span>Home</span>
              <span>Home</span>
              <span>Home</span>
              <span>Home</span>
            </div>
          </div>
        </div>
        {/* The rest of the content goes here */}
        <div>
          {/* Landing content */}
          <div className=" flex bg-gray-200 py-20">
            <div className="flex-1 px-10 py-10 ">
              <div>
                <span className="text-green-600 block px-10 py-2 italic ">DISCOVER OUR PLANTS</span>
                <span className="text-2xl px-10 font-bold uppercase  font-serif  ">Bring your next plant home</span>
              <p className="text-sm px-10 py-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a augue id nisi sodales iaculis. Maecenas facilisis felis vel risus maximus, ut facilisis nunc varius. Sed et risus scelerisque, venenatis elit quis, mattis arcu. Aliquam dui augue, lobortis ac est eu, consequat rutrum nisi. Praesent vestibulum elit id semper hendrerit.</p>
              <div className="mx-10 my-10 flex items-center ">
                <span className="uppercase rounded-full py-2 px-8 bg-green-900 text-gray-100 font-bold text-sm">
      Continue....
                </span>
                </div>
              </div>
            </div>
            <div className="flex-1 justify-center items center flex">
              <Image
              src={Plant1}
              alt="Ipsom lorem"
      className="h-full w-auto max-w-full max-h-full"/>
            </div>
          </div>

          {/*Highlights  */}
          <div className="mx-72 py-20  ">
            <div className="flex justify-between">
              <div className="flex ">
                <div>
                <Image
              src={Plant1}
              alt="Ipsom lorem"
      className="h-auto w-3/4 max-w-full max-h-full"/>
    
                </div>
                <div className="flex items-center ">
                  <div className="justify-center px-2">
                    <h3 className="block text-xs font-bold ">ONLINE SHOPPING</h3>
                    <span className="block text-sm">Shop with us</span>
                  </div>
                </div>
              </div>
              <div className="flex ">
                <div>
                <Image
              src={Plant1}
              alt="Ipsom lorem"
      className="h-auto w-3/4 max-w-full max-h-full"/>
    
                </div>
                <div className="flex items-center ">
                  <div className="justify-center px-2">
                    <h3 className="block text-xs font-bold ">ONLINE SHOPPING</h3>
                    <span className="block text-sm">Shop with us</span>
                  </div>
                </div>
              </div>
              <div className="flex  ">
                <div>
                <Image
              src={Plant1}
              alt="Ipsom lorem"
      className="h-auto w-3/4 max-w-full max-h-full"/>
    
                </div>
                <div className="flex items-center ">
                  <div className="justify-center px-2">
                    <h3 className="block text-xs font-bold ">ONLINE SHOPPING</h3>
                    <span className="block text-sm">Shop with us</span>
                  </div>
                </div>
              </div>
            </div>

            {/* More highlights */}
            <div className="pt-6">
              <div>
                <h5 className="py-8 text-2xl uppercase font-bold font-serif text-center">Top Categories</h5>
                <div className="flex justify-between space-x-2">
                  {/* The first category */}
                  <div className="flex justify-between bg-zinc-200 px-4 py-4">
                    <div className="bg-gray-100 flex justify-center items-center px-1 py-1 ">
                      <div className=" bg-gray-200 px-4 py-4">
                        <h5 className="font-bold text-base text-center py-4">Monstera plant</h5>
                        <Image
                src={Plant1}
                alt="Ipsom lorem"
        className="h-full w-auto max-w-full max-h-full"/>
                        
                      </div>

                    </div>
                  </div>

                  {/* The second category */}
                  <div className="flex justify-between bg-zinc-200 px-4 py-4">
                    <div className="bg-gray-100 flex justify-center items-center px-1 py-1 ">
                      <div className=" bg-gray-200 px-4 py-4">
                        <h5 className="font-bold text-base text-center py-4">Monstera plant</h5>
                        <Image
                src={Plant1}
                alt="Ipsom lorem"
        className="h-full w-auto max-w-full max-h-full"/>
                        
                      </div>

                    </div>
                  </div>

                  {/* The three category */}
                  <div className="flex justify-between bg-zinc-200 px-4 py-4">
                    <div className="bg-gray-100 flex justify-center items-center px-1 py-1 ">
                      <div className=" bg-gray-200 px-4 py-4">
                        <h5 className="font-bold text-base text-center py-4">Monstera plant</h5>
                        <Image
                src={Plant1}
                alt="Ipsom lorem"
        className="h-full w-auto max-w-full max-h-full"/>
                        
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

{/* trending products
 */}
          <div className="bg-zinc-200 py-20">
            <h3 className="font-bold font-serif uppercase text-2xl pb-6 text-center">Trending Products</h3>
            <div className=" flex justify-between mx-96 py-4"> 
            {/* Sub labels for the trending products */}
              <div className="bg-green-900 rounded-full">
                <span className="text-white font-bold px-4 py-2">Featured</span>
              </div>
              <div className="bg-zinc-100 rounded-full">
                <span className=" font-bold px-4 py-2">Latest</span>
              </div>
              <div className="bg-zinc-100 rounded-full">
                <span className=" font-bold px-4 py-2">Local</span>
              </div>
              <div className="bg-zinc-100 rounded-full">
                <span className=" font-bold px-4 py-2">Favourite </span>
              </div>
            </div>

            {/* The actual products */}
            <div className="flex justify-between mx-20 pb-20 pt-6">
              <div className="bg-gray-100 px-8 py-6">
                <div className="">
                  <div className="my-2">
                    <span className=" rounded-full py-2 px-2 bg-green-900 text-gray-100 font-bold text-xs">
      20%
                  </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div>
                  
                    <div>
                      <Image
                  src={Plant1}
                  alt="Ipsom lorem"
          className="h-3/4 w-auto max-w-full max-h-full"/>
                    </div>
                    <div><span className="font-bold text-base pt-8 flex justify-center">Birds of paradise</span></div>
                    <div ><span className="font-bold text-lg py-2  flex justify-center"> * * * * *</span></div>
                    <div className="flex justify-center items-center pb-8"><span className="font-bold text-xs">N$199.99 / </span> <span className="italics text-xs "> per plant</span></div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 px-8 py-6">
                <div className="">
                  <div className="my-2">
                    <span className=" rounded-full py-2 px-2 bg-green-900 text-gray-100 font-bold text-xs">
      20%
                  </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div>
                  
                    <div>
                      <Image
                  src={Plant1}
                  alt="Ipsom lorem"
          className="h-3/4 w-auto max-w-full max-h-full"/>
                    </div>
                    <div><span className="font-bold text-base pt-8 flex justify-center">Birds of paradise</span></div>
                    <div ><span className="font-bold text-lg py-2  flex justify-center"> * * * * *</span></div>
                    <div className="flex justify-center items-center pb-8"><span className="font-bold text-xs">N$199.99 / </span> <span className="italics text-xs "> per plant</span></div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 px-8 py-6">
                <div className="">
                  <div className="my-2">
                    <span className=" rounded-full py-2 px-2 bg-green-900 text-gray-100 font-bold text-xs">
      20%
                  </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div>
                  
                    <div>
                      <Image
                  src={Plant1}
                  alt="Ipsom lorem"
          className="h-3/4 w-auto max-w-full max-h-full"/>
                    </div>
                    <div><span className="font-bold text-base pt-8 flex justify-center">Birds of paradise</span></div>
                    <div ><span className="font-bold text-lg py-2  flex justify-center"> * * * * *</span></div>
                    <div className="flex justify-center items-center pb-8"><span className="font-bold text-xs">N$199.99 / </span> <span className="italics text-xs "> per plant</span></div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 px-8 py-6">
                <div className="">
                  <div className="my-2">
                    <span className=" rounded-full py-2 px-2 bg-green-900 text-gray-100 font-bold text-xs">
      20%
                  </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div>
                  
                    <div>
                      <Image
                  src={Plant1}
                  alt="Ipsom lorem"
          className="h-3/4 w-auto max-w-full max-h-full"/>
                    </div>
                    <div><span className="font-bold text-base pt-8 flex justify-center">Birds of paradise</span></div>
                    <div ><span className="font-bold text-lg py-2  flex justify-center"> * * * * *</span></div>
                    <div className="flex justify-center items-center pb-8"><span className="font-bold text-xs">N$199.99 / </span> <span className="italics text-xs "> per plant</span></div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 px-8 py-6">
                <div className="">
                  <div className="my-2">
                    <span className=" rounded-full py-2 px-2 bg-green-900 text-gray-100 font-bold text-xs">
      20%
                  </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div>
                  
                    <div>
                      <Image
                  src={Plant1}
                  alt="Ipsom lorem"
          className="h-3/4 w-auto max-w-full max-h-full"/>
                    </div>
                    <div><span className="font-bold text-base pt-8 flex justify-center">Birds of paradise</span></div>
                    <div ><span className="font-bold text-lg py-2  flex justify-center"> * * * * *</span></div>
                    <div className="flex justify-center items-center pb-8"><span className="font-bold text-xs">N$199.99 / </span> <span className="italics text-xs "> per plant</span></div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
{/* Top 2  */}
          <div className="flex justify-between mx-64  space-x-6 py-28 ">
            <div className=" flex bg-gray-200">
              <div className="flex-1 px-10 py-10 flex items-center
               ">
                <div>
                  <span className="text-green-600 block  py-2 text-xs  ">DISCOVER OUR PLANTS</span>
                  <span className="text-sm font-bold uppercase  font-serif  my-16">Lorem ipsum dolor sit amet</span>
                
                <div className="my-6">
                  <span className="uppercase rounded-full py-2 px-2 bg-green-900 text-gray-100 font-bold text-xs">
       SHOP NOW
                  </span>
                  </div>
                </div>
              </div>
              <div className="flex-1 justify-center items center flex">
                <Image
                src={Plant1}
                alt="Ipsom lorem"
        className="h-full w-auto"/>
              </div>
            </div>
            <div className=" flex bg-gray-200">
              <div className="flex-1 px-10 py-10 flex items-center
               ">
                <div>
                  <span className="text-green-600 block  py-2 text-xs  ">DISCOVER OUR PLANTS</span>
                  <span className="text-sm font-bold uppercase  font-serif  my-16">Lorem ipsum dolor sit amet</span>
                
                <div className="my-6">
                  <span className="uppercase rounded-full py-2 px-2 bg-green-900 text-gray-100 font-bold text-xs">
       SHOP NOW
                  </span>
                  </div>
                </div>
              </div>
              <div className="flex-1 justify-center items center flex">
                <Image
                src={Plant1}
                alt="Ipsom lorem"
        className="h-full w-auto"/>
              </div>
            </div>
            
          </div>

        </div>
        {/* The footer */}
        <div className="shadow-lg bg-zinc-200 flex justify-center py-4 ">
          <span>All rights reserved copyright &copy; 2024 Feni </span>
        </div>
      </div>
    </div>
  </>
  );
}
