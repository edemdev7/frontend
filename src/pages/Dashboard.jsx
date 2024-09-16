import  { useState } from "react";
import profileImage from "../assets/2148747966.jpg";
import InputYoutube from "../components/Youtube/InputYoutube";
import UserPreferences from "./Welcome";
import MenuButton from "../components/MenuButton";
import Weather from "../components/Weather";
import HomePage from "./Home";

function Dashboard() {

    const [activeComponent, setActiveComponent] = useState("home");
    const currentDate = new Date().toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });

  const renderComponent = () => {
    switch (activeComponent) {
      case "YouTube":
        return <InputYoutube/>;
      case "Redit":
        return <HomePage/>;
      case "Weather":
        return <Weather/>;
      default:
        return <UserPreferences />;    }
  };


    return (
        <div className="flex w-screen h-screen">
            <div className="bg-white w-1/5 h-full">
                <div className="h-full flex flex-col">
                    <div className=" flex place-content-center place-items-center h-24">
                        <h1 className="text-black font-black text-2xl">Logo</h1>
                    </div>
                    <div className="flex-grow-[5] px-6 space-y-4">
                    <MenuButton onClick={() => setActiveComponent("YouTube")} title="YouTube" iconTitle="youtube_activity" />
                    <MenuButton onClick={() => setActiveComponent("Redit")} title="Reddit" iconTitle="rss_feed" />
                    <MenuButton onClick={() => setActiveComponent("Weather")} title="Weather" iconTitle="cloud" />
                    </div>
                    <div className="flex-grow-[2]">

                    </div>
                </div>
            </div>
            <div className="bg-[#ebf1f2] px-16 py-2 w-4/5 h-full flex flex-col space-y-6">
                <div className="border rounded-md flex justify-between place-content-center place-items-center px-6 h-20">
                    <div>
                        <p className="text-2xl font-bold">Dashboard</p>
                        <p className="text-sm font-light italic">{currentDate}</p>
                    </div>
                    <div className="flex place-content-center place-items-center space-x-2">
                        <button className="border w-10 h-10 rounded-lg border-gray-500">
                            <span className="material-symbols-outlined text-gray-500">sms</span>
                        </button>
                        <button className="border w-10 h-10 rounded-lg border-gray-500">
                            <span className="material-symbols-outlined text-gray-500">notifications</span>            
                        </button>
                        <div className="flex place-content-center place-items-center space-x-2">
                            <div>
                                <img
                                    src={profileImage}
                                    alt=""
                                    className="w-12 h-12 rounded-full"
                                />
                            </div>
                            <div className="w-full">
                                <p className="text-md font-bold">Nora Waston</p>
                                <p className="text-sm font-light italic">Sale manager</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    {renderComponent()}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
