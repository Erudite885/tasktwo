import React from "react";
import { Avatar } from "antd";
import Calendar from "../../assets/calendar.svg";
import ChevronRight from "../../assets/chevron-right.svg";
import File from "../../assets/file.svg";
import Folder from "../../assets/folder.svg";
import Heart from "../../assets/heart.svg";
import Home from "../../assets/home.svg";
import Setting from "../../assets/settings.svg";
import Share from "../../assets/share.svg";
import Users from "../../assets/users.svg";
import Button from "../Button/Button.tsx";


const SideNav= () => {
  return (
    <aside className="sticky top-0 left-0 h-screen bg-white w-max shadow-md py-24 px-12">
      <nav className="grid gap-32 h-full grid-rows-max-content_max-content_auto w-max">
        <Button className="p-0">
          <Avatar size={40}>L</Avatar>
        </Button>

        <div className="grid gap-24">
          <Button className="bg-[#E9EFFF]">
            <img src={Home} alt='home icon' />
          </Button>

          <Button>
            <img src={Users} alt='Users icon' />
          </Button>

          <Button>
            <img src={Calendar} alt='calender icon' />
          </Button>

          <Button>
            <img src={Share} alt='share icon' />
          </Button>

          <Button>
            <img src={File} alt='File icon' />
          </Button>

          <Button>
           <img src={Folder} alt='Folder icon' />
          </Button>

          <Button>
           <img src={Heart} alt='Heart icon' />
          </Button>

          <Button>
           <img src={ChevronRight} alt='ChevronRight icon' />
          </Button>
        </div>

        <div className="grid gap-24 self-end grid-rows-max-content_max-content">
          <Button>
           <img src={Setting} alt='Setting icon' />
          </Button>

          <Button>
            <Avatar size={24} className="bg-[#EDF4FF] text-[#D0E1FF]">
              AS
            </Avatar>
          </Button>
        </div>
      </nav>
    </aside>
  );
}
export default SideNav