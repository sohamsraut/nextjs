export default function footer() {
  return (
    <footer
    className="bg-[#ffb400] w-full backdrop-opacity-10 text-[#1b1b2b]" style={{backgroundImage: "linear-gradient(#ffb400, #4da5ff)"}}
    >
      <div className="max-w-screen-3xl flex flex-col items-center justify-between">
        <div className="text-4xl mt-16 font-bold heading">Soham Raut</div>
        <ul className="my-7">
          Tabs here
        </ul>
        <ul className="flex space-x-6 mb-16">
          <li><a href="mailto:sohamsraut97@gmail.com" target="_blank"><img src="./envelope-solid.svg" className="w-[40px] h-[40px]"/></a></li>
          <li><a href="https://github.com/sohamsraut" target="_blank"><img src="./square-github.svg" className="w-[40px] h-[40px]"/></a></li>
          <li><a href="https://linkedin.com/in/sohamsraut" target="_blank"><img src="./linkedin.svg" className="w-[40px] h-[40px]"/></a></li>
        </ul>
        <div className="text-sm mb-16">Thank you! &copy; Soham Raut, 2023</div>
      </div>
    </footer>
  );
}