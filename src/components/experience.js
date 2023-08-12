export default function experienceSection() {
  return (
    <section id="experience" className="w-full z-10 bg-[#111]/[.95] flex flex-col justify-center md:p-5 pt-10">
      <div className="relative my-5">
        <h1 className="text-4xl heading font-semibold text-center">Experience</h1>
        <p className="w-full text-center heading2 cla">Experience</p>
      </div>
      <ol className="relative border-l border-[#ffb400] flex flex-col mx-auto my-10">
          <li className="mb-10 ml-6 rounded-md hover:shadow-md hover:bg-[#1b1b1b]">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-4 ring-[#ffb400] bg-[#111]">
            </span>
            <div className="flex items-center ">
              <img src="./candent.jpg" className="h-[100px] ms-3 me-7"/>
              <div>
                <h3 className="flex items-center text-lg font-semibold">Candent Technologies Pvt. Ltd. </h3>
                <h3 className="flex items-center mb-1 text-base italic">Software Engineer Intern</h3>
                <time className="block mb-2 font-normal leading-none para">July 2023 - Present</time>
                <p className=" text-base font-normal">Pune, India</p>
                <p className="text-base mb-4 font-normal max-w-[630px]">Worked with a team of skilled developers on a full-stack application in a scrum-based environment using Next.js, MongoDB, and Google APIs.</p>
              </div>
            </div>
          </li>
          <li className="ml-6 rounded-md hover:shadow-md hover:bg-[#1b1b1b]">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-4 ring-[#ffb400] bg-[#111]">
            </span>
            <div className="flex items-center">
              <img src="./hyperloop.jpg" className="h-[100px] ms-3 me-7"/>
              <div>
                <h3 className="flex items-center text-lg font-semibold">Washington Hyperloop</h3>
                <h3 className="flex items-center mb-1 text-base italic">Controls Team Member</h3>
                <time className="block mb-2 font-normal leading-none para">November 2022 - Present</time>
                <p className=" text-base font-normal">Seattle, WA</p>
                <p className="text-base font-normal max-w-[630px] mb-4">Worked with a team of engineers and developers to craft a robotic navigation system for a Tunnel Boring Machine built for the Not-A-Boring Competition</p>
              </div>
            </div>
          </li>
      </ol>
    </section>
  )
}