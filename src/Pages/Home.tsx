import launch_Rocket from "../Assets/Images/Svg/rocket_launch_new.svg";
import logo from "../Assets/Images/Png/logo.png";
// import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import Rocket_Launch from "../Assets/Other/Rocket_launch.json";
function Home() {
  const navigate = useNavigate();
  return (
    <section className="pb-5">
      <header className="w-full bg-gray-900 p-2 ">
        <img className="w-24 h-9" src={logo} alt="space-x" />
      </header>
      <div className="bg-gray-900 w-full flex flex-col items-center justify-center gap-y-7 lg:flex-row min-h-screen">
        <div className="w-full lg:min-h-screen flex  items-center">
          <Lottie animationData={Rocket_Launch} loop={true} />;
        </div>

        <div className="w-full flex flex-col gap-y-2  justify-center items-center">
          <div className="w-full  flex flex-row justify-center items-center">
            <img className="w-[50%]" src={launch_Rocket} alt="launch_rocket" />
          </div>

          <div className="w-full text-white flex flex-col justify-center items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
              Welcome to SpaceX Explorer
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-center">
              Explore the universe with SpaceX!
            </p>
            <div className=" flex flex-row gap-x-2">
              <a
                href="https://www.spacex.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md text-lg md:text-xl lg:text-2xl transition duration-300 ease-in-out"
              >
                Visit SpaceX
              </a>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md text-lg md:text-xl lg:text-2xl transition duration-300 ease-in-out"
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
