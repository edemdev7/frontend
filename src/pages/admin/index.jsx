import { useState } from "react";
import profileImage from "../../assets/2148747966.jpg";
import UserPreferences from "./userPreferences";
import Services from "./services"; 
import Widgets from "./widgets"; 
import Users from "./users"; 
import MenuButton from "../../components/MenuButton";

function Dashboard() {
  const [activeComponent, setActiveComponent] = useState("UserPreferences");
  const currentDate = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const renderComponent = () => {
    switch (activeComponent) {
      case "Users":
        return <Users />;
      case "Services":
        return <Services />;
      case "Widgets":
        return <Widgets />;
      default:
        return <UserPreferences />;
    }
  };

  return (
    <div className="flex h-screen">
      <aside className="w-1/4 bg-[#CDF463] p-4">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-24 bg-white shadow-md rounded mb-4">
            <h1 className="text-2xl font-bold text-gray-800">Logo</h1>
          </div>
          <nav className="flex flex-col space-y-2">
            <MenuButton onClick={() => setActiveComponent("UserPreferences")} title="Préférences" iconTitle="settings" />
            <MenuButton onClick={() => setActiveComponent("Users")} title="Utilisateurs" iconTitle="people" />
            <MenuButton onClick={() => setActiveComponent("Services")} title="Services" iconTitle="settings" />
            <MenuButton onClick={() => setActiveComponent("Widgets")} title="Widgets" iconTitle="widgets" />
          </nav>
        </div>
      </aside>
      <main className="w-3/4 bg-gray-100 p-6 flex flex-col">
        <header className="flex justify-between items-center mb-6 bg-white shadow-md rounded p-4">
          <div>
            <p className="text-2xl font-bold text-gray-800">Dashboard</p>
            <p className="text-sm text-gray-600 italic">{currentDate}</p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-200">
              <span className="material-icons text-gray-700">sms</span>
            </button>
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-200">
              <span className="material-icons text-gray-700">notifications</span>
            </button>
            <div className="flex items-center space-x-2">
              <img src={profileImage} alt="Profile" className="w-12 h-12 rounded-full border border-gray-300" />
              <div>
                <p className="text-md font-semibold text-gray-800">Nora Waston</p>
                <p className="text-sm text-gray-600 italic">Sale manager</p>
              </div>
            </div>
          </div>
        </header>
        <section className="flex-1 bg-[#CDF463] p-4 rounded shadow-md">
          {renderComponent()}
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
