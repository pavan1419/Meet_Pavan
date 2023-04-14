export default function Navbar() {
  return (
    <div>
      <nav className='bg-slate-900 text-white flex justify-between '>
          <p className=" py-4 pl-5  ">Meet Pavan</p>
        <ul className='pr-7 py-4 space-x-10 flex '>
          <li className='cursor-pointer'> Home </li>
          <li className='cursor-pointer'> About </li>
          <li className='cursor-pointer'> Contact Us </li>
          <li className='cursor-pointer'> Catalog </li>
        </ul>
      </nav>
    </div>
  );
}
