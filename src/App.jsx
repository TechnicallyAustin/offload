import "./App.css";
import { useState } from "react";
import { Button, NextUIProvider } from "@nextui-org/react";
import { Badge, Avatar } from "@nextui-org/react";
import LinkIcon from "./assets/icons/LinkIcon";
import AddIcon from "./assets/icons/AddIcon";
import SearchIcon from "./assets/icons/SearchIcon";
import AlertIcon from "./assets/icons/AlertIcon";
import ShareIcon from "./assets/icons/ShareIcon";
import TrashIcon from "./assets/icons/TrashIcon";
import WarningIcon from "./assets/icons/WarningIcon";
import MenuIcon from "./assets/icons/MenuIcon";
import EditIcon from "./assets/icons/EditIcon";
import MoreIcon from "./assets/icons/MoreIcon";
import OpenIcon from "./assets/icons/OpenIcon";
import PowerIcon from "./assets/icons/PowerIcon";
import SavedIcon from "./assets/icons/SavedIcon";
import ImageIcon from "./assets/icons/ImageIcon";
import IdeaIcon from "./assets/icons/IdeaIcon";
import FinanceIcon from "./assets/icons/FinanceIcon";
import Notes from "./components/notes/Notes";
import Toolbar from "./components/toolbar/Toolbar";
import ProfileMenu from "./components/profileMenu/ProfileMenu";
import OptionMenu from "./components/optionMenu/OptionMenu";
import FocusNode from "./components/nodes/FocusNode";
import BusinessNode from "./components/nodes/BusinessNode";
import ProjectNode from "./components/nodes/ProjectNode";
import TravelNode from "./components/nodes/TravelNode";
import HealthNode from "./components/nodes/HealthNode";
import FinanceNode from "./components/nodes/FinanceNode";
import CareerNode from "./components/nodes/CareerNode";

function App() {
  const [count, setCount] = useState(0);

  return (
    <NextUIProvider>
      <div id="App" className="w-full h-screen flex flex-col text-white">
        <header className="flex w-full h-auto flex justify-between p-2 items-center text-black">
          <ProfileMenu />
          <OptionMenu />
        </header>

        <main className="w-full h-full">
          <section id="nodes" className="w-full h-full px-2 flex flex-col gap-2">
            <FocusNode />

            <section id="node-block-1" className="w-full h-1/4 flex gap-1">
              <BusinessNode />
              <ProjectNode />
            </section>

            <section id="node-block-2" className="w-full h-1/4 flex gap-1">
              <TravelNode />
              <HealthNode />
            </section>

            <section id="node-block-3" className="w-full h-1/4 flex gap-1">
              <FinanceNode />
              <CareerNode />
            </section>
          </section>
        </main>

        <footer className="w-full h-20 flex justify-between items-center p-2 text-black">
          <Toolbar />
          <Notes />
        </footer>
      </div>
    </NextUIProvider>
  );
}

export default App;
