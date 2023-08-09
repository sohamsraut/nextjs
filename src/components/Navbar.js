export default function Navbar() {
  return (
    <nav className="bg-[#4da5ff] relative backdrop-opacity-10 backdrop-blur-lg z-[999] text-black" style={{backgroundImage: "linear-gradient(#4da5ff, #4db5ff)"}}>
    <div className="max-w-screen-3xl flex items-center justify-between ml-2 h-[60px]">
      <div className="self-center text-xl font-semibold whitespace-nowrap m-2 ">
        Soham Raut
      </div>
      <div className="md:block md:w-auto m-2 justify-self-end">
        <ul className="font-medium flex flex-row rounded-full justify-end md:justify-end p-1 md:p-0.25rem md:flex-row md:space-x-0 md:mt-0 md:border-0">

        </ul>
      </div>
    </div>
  </nav>
  );
}