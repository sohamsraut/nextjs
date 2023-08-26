export default function aboutSection() {
  return (
    <section className="w-full z-10 bg-[#111]/[.99] rounded-md border-t-4 border-[#ffb400] flex-justify-center py-10" id="about">
      <div className="relative my-5">
        <h1 className="text-4xl heading font-semibold text-center">Get To Know Me!</h1>
        <p className="w-full text-center heading2 cla">ABOUT</p>
      </div>
      <div className="w-full flex flex-wrap justify-center basis-1/2 my-5">
        <div className="border-2 rounded-md mx-5 my-2 px-5 py-2  w-[30%] sm:min-w-[350px] min-w-[80%] flex items-center border-[#ffb400]">
          <img src="./icons/earth-asia.svg" className="h-[36px] w-[36px]"/>
          <div className="ms-5 my-1">
              <p className="md:text-2xl text-xl text-[#4db5ff] heading mt-1 font-semibold">Mr. Worldwide</p>
              <p className="para text-sm">Born in India, grew up in Oman, now in Seattle, USA!</p>
          </div>
        </div>
        <div className="border-2 rounded-md mx-5 my-2 px-5 py-2  w-[30%]  sm:min-w-[350px] min-w-[80%] flex items-center border-[#ffb400]">
        <img src="./icons/magnifying-glass-chart.svg" className="h-[36px] w-[36px]"/>
          <div className="ms-5 my-1">
            <p className="md:text-2xl text-xl text-[#4db5ff] heading mt-1 font-semibold">Researcher</p>
            <p className="para text-sm">At the UW Interactive Data Lab, working on the Decomposing D3 project!</p>
          </div>
        </div>
        <div className="border-2 rounded-md mx-5 my-2 px-5 py-2  w-[30%] sm:min-w-[350px] min-w-[80%] flex items-center border-[#ffb400]">
        <img src="./icons/book-open-reader.svg" className="h-[36px] w-[36px]"/>
          <div className="ms-5 my-1">
            <p className="md:text-2xl text-xl text-[#4db5ff] heading mt-1 font-semibold">Academic Weapon</p>
            <p className="para text-sm">Current GPA: 3.90/4.0, 6x Dean's List Awardee</p>
          </div>
        </div>
        <div className="border-2 rounded-md mx-5 my-2 px-5 py-2  w-[30%] sm:min-w-[350px] min-w-[80%] flex items-center border-[#ffb400]">
        <img src="./icons/microchip.svg" className="h-[36px] w-[36px]"/>
          <div className="ms-5 my-1">
            <p className="md:text-2xl text-xl text-[#4db5ff] heading mt-1 font-semibold">Hacker</p>
            <p className="para text-sm">Winner, DubHacks 2022 Most Commercially Viable App</p>
          </div>
        </div>
        <div className="border-2 rounded-md mx-5 my-2 px-5  w-[30%] sm:min-w-[350px] min-w-[80%] flex items-center border-[#ffb400]">
        <img src="./icons/gears.svg" className="h-[36px] w-[36px]"/>
          <div className="ms-5 my-1">
            <p className="md:text-2xl text-xl text-[#4db5ff] heading mt-1 font-semibold">Ground Digger</p>
            <p className="para text-sm">Engineer, Controls Team at Washington Hyperloop</p>
          </div>
        </div>
        <div className="border-2 rounded-md mx-5 my-2 px-5 py-2 w-[30%] sm:min-w-[350px] min-w-[80%] flex items-center border-[#ffb400]">
        <img src="./icons/world.svg" className="h-[36px] w-[36px]"/>
          <div className="ms-5">
            <p className="md:text-2xl text-xl text-[#4db5ff] heading mt-1 font-semibold">Multilingual</p>
            <p className="para text-sm">Fluent in English, Marathi, Hindi, and French</p>
          </div>
        </div>
      </div>
    </section>
  );
}

