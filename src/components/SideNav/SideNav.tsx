import { Avatar } from "antd";
import { Button } from "..";
import {
  ChevronRight,
  Calender,
  File,
  Folder,
  Heart,
  Home,
  Settings,
  Share,
  Users,
} from "../../assets";

const SideNav = () => {
  return (
    <aside className="sticky top-0 left-0 h-screen bg-white w-max shadow-[0px_4px_23px_0px_rgba(0,0,0,0.05)] py-[24px] px-[12px]">
      <nav className="grid gap-[32px] h-full grid-rows-[max-content_max-content_auto] w-max">
        <Button className="p-0">
          <Avatar size={40}>L</Avatar>
        </Button>

        <div className="grid gap-[24px]">
          <Button className="bg-[#E9EFFF]">
            <img src={Home} alt="home icon" />
          </Button>

          <Button>
            <img src={Users} alt="Users icon" />
          </Button>

          <Button>
            <img src={Calender} alt="calender icon" />
          </Button>

          <Button>
            <img src={Share} alt="share icon" />
          </Button>

          <Button>
            <img src={File} alt="File icon" />
          </Button>

          <Button>
            <img src={Folder} alt="Folder icon" />
          </Button>

          <Button>
            <img src={Heart} alt="Heart icon" />
          </Button>

          <Button>
            <img src={ChevronRight} alt="ChevronRight icon" />
          </Button>
        </div>

        <div className="grid gap-[24px] self-end grid-rows-[max-content_max-content]">
          <Button>
            <img src={Settings} alt="Setting icon" />
          </Button>

          <Button>
            <Avatar size={24} className="!bg-[#EDF4FF] !text-[#D0E1FF]">
              AS
            </Avatar>
          </Button>
        </div>
      </nav>
    </aside>
  );
};
export default SideNav;
