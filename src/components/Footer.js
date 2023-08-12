export default function footer() {
  return (
    <footer
    className="bg-[#ffb400] w-full backdrop-opacity-10 text-[#1b1b2b]" style={{backgroundImage: "linear-gradient(#ffb400, #ffb400)"}}
    >
      <div className="max-w-screen-3xl flex flex-col items-center justify-between">
        <div className="text-4xl mt-16 font-bold heading">Soham Raut</div>
        <ul className="my-7 flex space-x-7">
          <li><a href="#home" className="hover:underline hover:underline-offset-4">Home</a></li>
          <li><a href="#about" className="hover:underline hover:underline-offset-4">About</a></li>
          <li><a href="#skills" className="hover:underline hover:underline-offset-4">Skills</a></li>
          <li><a href="#education" className="hover:underline hover:underline-offset-4">Education</a></li>
          <li><a href="#experience" className="hover:underline hover:underline-offset-4">Experience</a></li>
          <li><a href="#projects" className="hover:underline hover:underline-offset-4">Projects</a></li>
          <li><a href="#contact" className="hover:underline hover:underline-offset-4">Contact</a></li>
        </ul>
        <ul className="flex space-x-6 mb-10">
          <li><a href="mailto:sohamsraut97@gmail.com" target="_blank"><img src="./envelope-solid.svg" className="w-[40px] h-[40px]"/></a></li>
          <li><a href="https://github.com/sohamsraut" target="_blank"><img src="./square-github.svg" className="w-[40px] h-[40px]"/></a></li>
          <li><a href="https://linkedin.com/in/sohamsraut" target="_blank"><img src="./linkedin.svg" className="w-[40px] h-[40px]"/></a></li>
        </ul>
        <div className="text-sm mb-20">Thank you! &copy; Soham Raut, 2023</div>
      </div>
    </footer>
  );
}