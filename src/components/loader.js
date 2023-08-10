export default function loaderComponent() {
  return (
    <div className="flex justify-center items-center h-screen w-screen backdrop-blur shadow-xl">
      <div className="flex flex-col justify-center items-center">
        <svg id="triangle" width="100px" height="100px" viewBox="-3 -4 39 39">
          <polygon className="stroke-[#ffb400] " fill="transparent" stroke="#ffb400" strokeWidth="2" points="16,0 32,32 0,32">
          </polygon>
        </svg>
        <p className="text-3xl mt-3">Loading...</p>
      </div>
    </div>
  );
}