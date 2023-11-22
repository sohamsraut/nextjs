export default function projectSection() {
  return (
    <section id="projects" className="w-full z-10 bg-[#111]/[.99] flex flex-col justify-center md:p-5 pt-10">
      <div className="relative my-5">
        <h1 className="text-4xl heading font-semibold text-center">My Work</h1>
        <p className="w-full text-center heading2 cla">Projects</p>
      </div>
      <ol className="flex flex-wrap justify-center">
      <li className="mx-5 my-2 rounded-xl border-faint  w-[350px] lg:w-[400px] hover:bg-[#1b1b1b]">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-4 ring-[#ffb400] bg-[#111]">
            </span>
            <div className="flex flex-col items-center justify-center mx-4 my-3">
              <img src="./spam-filter.jpg" className="my-3 h-[170px] overflow-hidden mx-3 rounded-xl"/>
              <div className="flex flex-col items-center">
                <h3 className="flex items-center text-center text-lg font-semibold mb-1">Spot</h3>
                <time className="block mb-2 font-normal leading-none para">DubHacks, October 2023</time>
                <p className=" text-base font-normal para"><span className="font-semibold text-[#ffb400]">Skills: </span> React-Native, LLMs, Cloud Infra</p>
                <a target="_blank" href="https://github.com/rituraj8503/SPOT" className="text-base py-3 px-4 rounded-md border-2 border-[#ffb400] text-[#ffb400] hover:bg-[#ffb400] hover:text-[#111] my-4 heading font-semibold">GitHub</a>
              </div>
            </div>
          </li>
          <li className="mx-5 my-2 rounded-xl border-faint  w-[350px] lg:w-[400px] hover:bg-[#1b1b1b]">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-4 ring-[#ffb400] bg-[#111]">
            </span>
            <div className="flex flex-col items-center justify-center mx-4 my-3">
              <img src="./spam-filter.jpg" className="my-3 h-[170px] overflow-hidden mx-3 rounded-xl"/>
              <div className="flex flex-col items-center">
                <h3 className="flex items-center text-center text-lg font-semibold mb-1">SMS Spam Filter</h3>
                <time className="block mb-2 font-normal leading-none para">September 2023</time>
                <p className=" text-base font-normal para"><span className="font-semibold text-[#ffb400]">Skills: </span> Python, Scikit-Learn, Pandas</p>
                <a target="_blank" href="https://github.com/sohamsraut/sms-spam-filter" className="text-base py-3 px-4 rounded-md border-2 border-[#ffb400] text-[#ffb400] hover:bg-[#ffb400] hover:text-[#111] my-4 heading font-semibold">GitHub</a>
              </div>
            </div>
          </li>
          <li className="mx-5 my-2 rounded-xl border-faint  w-[350px] lg:w-[400px] hover:bg-[#1b1b1b]">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-4 ring-[#ffb400] bg-[#111]">
            </span>
            <div className="flex flex-col items-center justify-center mx-4 my-3">
              <img src="./phaser.png" className="my-3 h-[170px] overflow-hidden mx-3 rounded-xl"/>
              <div className="flex flex-col items-center">
                <h3 className="flex items-center text-center text-lg font-semibold mb-1">Phaser Game</h3>
                <time className="block mb-2 font-normal leading-none para">August 2023</time>
                <p className=" text-base font-normal para"><span className="font-semibold text-[#ffb400]">Skills: </span> HTML, JavaScript, Phaser</p>
                <div className="flex space-x-5 justify-center">
                  <a target="_blank" href="https://github.com/sohamsraut/phaser-game" className="text-base py-3 px-4 rounded-md border-2  border-[#ffb400] text-[#ffb400] hover:bg-[#ffb400] hover:text-[#111] my-4 heading font-semibold">GitHub</a>
                  <a target="_blank" href="https://sohamsraut.github.io/phaser-game" className="text-base py-3 px-4 rounded-md border-2 border-[#ffb400] text-[#ffb400] hover:bg-[#ffb400] hover:text-[#111] my-4 heading font-semibold">Demo</a>
                </div>
              </div>
            </div>
          </li>
          <li className="mx-5 my-2 rounded-xl border-faint  w-[350px] lg:w-[400px] hover:bg-[#1b1b1b]">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-4 ring-[#ffb400] bg-[#111]">
            </span>
            <div className="flex flex-col items-center justify-center mx-4 my-3">
              <img src="./ml.png" className="my-3 h-[170px] overflow-hidden mx-3 rounded-xl"/>
              <div className="flex flex-col items-center">
                <h3 className="flex items-center text-center text-lg font-semibold mb-1">COVID-19 Hospital Capabilities</h3>
                <time className="block mb-2 font-normal leading-none para">DubsTech Datathon, March 2023</time>
                <p className=" text-base font-normal para"><span className="font-semibold text-[#ffb400]">Skills: </span> Python, TensorFlow</p>
                <a target="_blank" href="https://github.com/sohamsraut/datathon-ml-project" className="text-base py-3 px-4 rounded-md border-2 border-[#ffb400] text-[#ffb400] hover:bg-[#ffb400] hover:text-[#111] my-4 heading font-semibold">GitHub</a>
              </div>
            </div>
          </li>
          <li className="mx-5 my-2 rounded-xl border-faint w-[350px] lg:w-[400px] hover:bg-[#1b1b1b]">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-4 ring-[#ffb400] bg-[#111]">
            </span>
            <div className="flex flex-col items-center justify-center mx-4 my-3">
              <img src="./oldwebsite.png" className="my-3 h-[170px] overflow-hidden mx-3 rounded-xl"/>
              <div className="flex flex-col items-center">
                <h3 className="flex items-center text-lg text-center font-semibold mb-1">Website 2.0</h3>
                <time className="block mb-2 font-normal leading-none para">December 2022</time>
                <p className=" text-base font-normal para"><span className="font-semibold text-[#ffb400]">Skills: </span>HTML, CSS, JavaScript, Bootstrap</p>
                <div className="flex space-x-5 justify-center">
                  <a target="_blank" href="https://github.com/sohamsraut/old-website" className="text-base py-3 px-4 rounded-md border-2  border-[#ffb400] text-[#ffb400] hover:bg-[#ffb400] hover:text-[#111] my-4 heading font-semibold">GitHub</a>
                  <a target="_blank" href="https://sohamsraut.github.io/old-website" className="text-base py-3 px-4 rounded-md border-2 border-[#ffb400] text-[#ffb400] hover:bg-[#ffb400] hover:text-[#111] my-4 heading font-semibold">Demo</a>
                </div>
              </div>
            </div>
          </li>
          <li className="mx-5 my-2 rounded-xl border-faint w-[350px] lg:w-[400px] hover:bg-[#1b1b1b]">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-4 ring-[#ffb400] bg-[#111]">
            </span>
            <div className="flex flex-col items-center justify-center mx-4 my-3">
              <img src="./thrifteats.png" className="my-3 h-[170px] overflow-hidden mx-3 rounded-xl"/>
              <div className="flex flex-col items-center">
                <h3 className="flex items-center text-lg text-center font-semibold mb-1">ThriftEats</h3>
                <time className="block mb-2 font-normal leading-none para">DubHacks, October 2022</time>
                <p className=" text-base font-normal para"><span className="font-semibold text-[#ffb400]">Skills: </span>Figma, JavaScript, React</p>
                <div className="flex space-x-5 justify-center">
                  <a target="_blank" href="https://github.com/rsrika/DubHacks" className="text-base py-3 px-4 rounded-md border-2 border-[#ffb400] text-[#ffb400] hover:bg-[#ffb400] hover:text-[#111] my-4 heading font-semibold">GitHub</a>
                  <a target="_blank" href="https://devpost.com/software/thrifteats" className="text-base py-3 px-4 rounded-md border-2 border-[#ffb400] text-[#ffb400] hover:bg-[#ffb400] hover:text-[#111] my-4 heading font-semibold">Devpost</a>
                </div>
              </div>
            </div>
          </li>
          <li className="mx-5 my-2 rounded-xl border-faint w-[350px] lg:w-[400px] hover:bg-[#1b1b1b]">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-4 ring-[#ffb400] bg-[#111]">
            </span>
            <div className="flex flex-col items-center justify-center mx-4 my-3">
              <img src="./tictactoe.png" className="my-3 h-[170px] overflow-hidden mx-3 rounded-xl"/>
              <div className="flex flex-col items-center">
                <h3 className="flex items-center text-lg text-center font-semibold mb-1">Tic-Tac-Toe Web Edition</h3>
                <time className="block mb-2 font-normal leading-none para">June 2022</time>
                <p className=" text-base font-normal para"><span className="font-semibold text-[#ffb400]">Skills: </span>HTML, CSS, JavaScript</p>
                <div className="flex space-x-5 justify-center">
                  <a target="_blank" href="https://github.com/sohamsraut/tic-tac-toe-webapp" className="text-base py-3 px-4 rounded-md border-2  border-[#ffb400] text-[#ffb400] hover:bg-[#ffb400] hover:text-[#111] font-semibold heading my-4">GitHub</a>
                  <a target="_blank" href="https://sohamsraut.github.io/tic-tac-toe-webapp" className="text-base py-3 px-4 rounded-md border-2 border-[#ffb400] text-[#ffb400] hover:bg-[#ffb400] hover:text-[#111] font-semibold heading my-4">Demo</a>
                </div>
              </div>
            </div>
          </li>
          <li className="mx-5 my-2 rounded-xl border-faint w-[350px] lg:w-[400px] hover:bg-[#1b1b1b]">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-4 ring-[#ffb400] bg-[#111]">
            </span>
            <div className="flex flex-col items-center justify-center mx-4 my-3">
              <img src="./gamezone.png" className="my-3 h-[170px] overflow-hidden mx-3 rounded-xl"/>
              <div className="flex flex-col items-center">
                <h3 className="flex items-center text-lg text-center font-semibold mb-1">GameZone</h3>
                <time className="block mb-2 font-normal leading-none para">January 2022</time>
                <p className=" text-base font-normal para"><span className="font-semibold text-[#ffb400]">Skills: </span>Python</p>
                <div className="flex space-x-5 justify-center">
                  <a target="_blank" href="https://github.com/sohamsraut" className="text-base py-3 px-4 rounded-md border-2  border-[#ffb400] text-[#ffb400] hover:bg-[#ffb400] hover:text-[#111] my-4 heading font-semibold">GitHub</a>
                </div>
              </div>
            </div>
          </li>
      </ol>
    </section>
  );
}