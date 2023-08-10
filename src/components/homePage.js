
export default function homePageComponent() {
  return (
      <div className="h-full w-full flex items-center">
        <div className=" fixed h-[200%] w-full left-[-83%] top-[-50%] bg-[#ffb400]" id="home-decor"></div>
        <div className=" flex h-full w-full py-5 items-center justify-between">
          <img src="./placeholder.jpg" className="h-4/5 rounded-3xl z-[111] left-10 ms-20"/>
          <div className="flex flex-col items-center justify-center w-full ms-10 mt-10 text-xl text-[#f5f6f7]">
            <p className="text-lg">Hello there, I'm</p>
            <p className="heading font-bold text-7xl mt-3">Soham Raut</p>
            <p className="mt-5 mx-40">
              I'm a Junior studying <span className="font-semibold">Computer Science</span> at the University of Washington in Seattle.
              Apart form technology and science, I love reading, swimming, and sports.
              I am passionate about building software that helps improve the world!
            </p>
            <ul className="flex space-x-6 mt-10">
              <li><a href="mailto:sohamsraut97@gmail.com" target="_blank" className="bg-white p-1 flex rounded-md" ><img src="./envelope-solid.svg" className="w-[40px] h-[40px]"/></a></li>
              <li><a href="https://github.com/sohamsraut" target="_blank" className="bg-white p-1 flex rounded-md"><img src="./square-github.svg" className="w-[40px] h-[40px]"/></a></li>
              <li><a href="https://linkedin.com/in/sohamsraut" target="_blank" className="bg-white p-1 flex rounded-md"><img src="./linkedin.svg" className="w-[40px] h-[40px]"/></a></li>
              <li><a href="./Resume_SohamRaut.pdf" target="_blank" className="bg-white p-1 flex rounded-md" ><img src="./cv.png" className="w-[40px] h-[40px]"/></a></li>
            </ul>
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-[#ffb400] h-[80px] mt-5" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
          </div>
        </div>
      </div>
  );

}