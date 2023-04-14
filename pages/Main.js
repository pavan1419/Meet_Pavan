// import { Main } from "next/document";

export default function Main1() {
  return (
    <main className="bg-teal-500 flex ">
      <div className='  py-20 pl-10'>
        <div className='text-6xl'> PAVAN </div>
        <div className='py-3 w-1/2'>
          Eiusmod Lorem veniam eiusmod ex sit mollit culpa voluptate qui. In
          cupidatat Lorem et occaecat nisi adipisicing laboris irure tempor
          fugiat cillum velit. Dolor in cupidatat elit et minim amet. Irure et
          consectetur ut laboris. Duis fugiat quis officia mollit duis anim non
          adipisicing.
        </div>
        <div className='my-2 space-x-1'>
          <button className='bg-teal-950 text-white hover:bg-slate-50 hover:text-black  rounded-xl p-1'>
            Click Me
          </button>
          <button className='bg-teal-950 text-white hover:bg-slate-50 hover:text-black  rounded-xl p-1'>
            Contact Us
          </button>
        </div>
      </div>
      <div className=" flex items-center">
        <img className="pr-14" src="https://i.pinimg.com/564x/2d/6a/20/2d6a20990d3200368fd48f347ddff6c6.jpg" alt=""></img>
      </div>
    </main>
  );
}
