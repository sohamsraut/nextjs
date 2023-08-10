export default function aboutSection() {
  return (
    <div className="h-screen min-h-fit w-full z-10 bg-[#111] rounded-md border-4 border-[#ffb400] flex-justify-center py-5">
      <h1 className="text-4xl heading font-semibold text-center">About Me</h1>
      <div className="w-full flex flex-wrap justify-center basis-1/2 mt-5">
        <div className="border-2 rounded-md mx-5 my-2 px-5 py-2  w-[30%] min-w-[350px] flex items-center border-[#ffb400]">
          <img src="./icons/earth-asia.svg" className="h-[36px] w-[36px]"/>
          <div className="ms-5 my-1">
              <p className="text-2xl text-[#4db5ff] heading font-semibold mt-1">Mr. Worldwide</p>
              <p className="para text-sm">Born in India, grew up in Oman, now in Seattle, USA!</p>
          </div>
        </div>
        <div className="border-2 rounded-md mx-5 my-2 px-5 py-2  w-[30%]  min-w-[350px] flex items-center border-[#ffb400]">
        <img src="./icons/magnifying-glass-chart.svg" className="h-[36px] w-[36px]"/>
          <div className="ms-5 my-1">
            <p className="text-2xl text-[#4db5ff] heading font-semibold mt-1">Researcher</p>
            <p className="para text-sm">At the UW Interactive Data Lab, working on the Decomposing D3 project!</p>
          </div>
        </div>
        <div className="border-2 rounded-md mx-5 my-2 px-5 py-2  w-[30%] min-w-[350px] flex items-center border-[#ffb400]">
        <img src="./icons/book-open-reader.svg" className="h-[36px] w-[36px]"/>
          <div className="ms-5 my-1">
            <p className="text-2xl text-[#4db5ff] heading font-semibold mt-1">Academic Weapon</p>
            <p className="para text-sm">Current GPA: 3.90/4.0, 6x Dean's List Awardee</p>
          </div>
        </div>
        <div className="border-2 rounded-md mx-5 my-2 px-5 py-2  w-[30%] min-w-[350px] flex items-center border-[#ffb400]">
        <img src="./icons/microchip.svg" className="h-[36px] w-[36px]"/>
          <div className="ms-5 my-1">
            <p className="text-2xl text-[#4db5ff] heading font-semibold mt-1">Hacker</p>
            <p className="para text-sm">Winner, DubHacks 2022 Most Commercially Viable App</p>
          </div>
        </div>
        <div className="border-2 rounded-md mx-5 my-2 px-5  w-[30%] min-w-[350px] flex items-center border-[#ffb400]">
        <img src="./icons/gears.svg" className="h-[36px] w-[36px]"/>
          <div className="ms-5 my-1">
            <p className="text-2xl text-[#4db5ff] heading font-semibold mt-1">Ground Digger</p>
            <p className="para text-sm">Engineer, Controls Team at Washington Hyperloop</p>
          </div>
        </div>
        <div className="border-2 rounded-md mx-5 my-2 px-5 py-2 w-[30%] min-w-[350px] flex items-center border-[#ffb400]">
        <img src="./icons/world.svg" className="h-[36px] w-[36px]"/>
          <div className="ms-5">
            <p className="text-2xl text-[#4db5ff] heading font-semibold">Fluent in 4</p>
            <p className="para text-sm">English, Marathi, Hindi, and French</p>
          </div>
        </div>
      </div>
    </div>
  );
}

