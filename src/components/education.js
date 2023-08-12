export default function educationSection() {
  return (
    <section id="education" className="relative w-full z-10 bg-[#111]/[.99] flex flex-col justify-center md:p-5 pt-10">
      <div className="relative my-5">
        <h1 className="text-4xl heading font-semibold text-center">Source of My Knowledge</h1>
        <p className="w-full text-center heading2 cla">Education</p>
      </div>
      <ol className="relative border-l border-[#ffb400] mx-auto my-10">
          <li className="mb-10 ml-6 rounded-md hover:shadow-md hover:bg-[#1b1b1b]">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-4 ring-[#ffb400] bg-[#111]">
            </span>
            <div className="flex items-center">
              <img src="./allen.png" className="h-[100px] ms-3 me-7"/>
              <div className="my-2 me-3">
                <h3 className="flex items-center mb-1 text-lg font-semibold">University of Washington, Seattle </h3>
                <time className="block mb-2 font-normal leading-none para">September 2021 - Present</time>
                <p className=" text-base font-normal">Bachelor of Science, Computer Science</p>
                <p className="mb-2 text-base font-normal">Junior at the Paul G. Allen School of Computer Science and Engineering</p>
              </div>
            </div>
          </li>
          <li className="ml-6 rounded-md hover:shadow-md hover:bg-[#1b1b1b]">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-4 ring-[#ffb400] bg-[#111]">
            </span>
            <div className="flex items-center">
              <img src="./ismoman.jpg" className="h-[100px] ms-3 me-7"/>
              <div className="my-2 me-3">
                <h3 className="flex items-center mb-1 text-lg font-semibold">Indian School Muscat</h3>
                <time className="block mb-2 font-normal leading-none para">January 2007 - June 2021</time>
                <p className=" text-base font-normal">Science Stream: PCM with Computer Science</p>
                <p className="mb-2 text-base font-normal">Awarded the Principal's Honors Award and Merit Award as one of the top 5% scorers</p>
              </div>
            </div>
          </li>
      </ol>
    </section>
  )
}