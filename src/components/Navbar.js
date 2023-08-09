export default function Navbar() {
  return (
    <nav className="bg-[#0c0032]/[0.5] relative backdrop-opacity-10 backdrop-blur-lg">
    <div className="max-w-screen-3xl flex items-center justify-between ml-2 h-[60px]">
      <div className="self-center text-xl font-semibold whitespace-nowrap dark:text-white m-2 ">
        Soham Raut
      </div>
      <div className="md:block md:w-auto m-2 justify-self-end">
        <ul className="font-medium flex flex-row rounded-full justify-end md:justify-end p-1 md:p-0.25rem md:flex-row md:space-x-0 md:mt-0 md:border-0">
          <li>Home</li>
          <li>Courses</li>
          <li>Projects</li>
        </ul>
      </div>
    </div>
    <div className="absolute z-[999]">
    </div>
  </nav>
  );
}