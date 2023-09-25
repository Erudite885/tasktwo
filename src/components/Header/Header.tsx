import React, { useState } from "react";
import {Avatar, Dropdown, Button} from "antd";
import ChevronDownSolid from "../../assets/chevron-down-solid.svg";
import ChevronDownWhite from "../../assets/chevron-down-white.svg";
import Clip from "../../assets/clip.svg";
import ContactBuss from "../../assets/contact-buss.svg";
import ContactCheck from "../../assets/contact-check.svg";
import ContactClose from "../../assets/contact-close.svg";
import Message from "../../assets/message.svg";
// import Button from "../../Button/Button.tsx";
import { headerfilters } from "../../constants/index.ts";

const Header = () => {
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  // const filters = [
  //   {
  //     label: "Applied",
  //     count: 1745,
  //   },
  //   {
  //     label: "Shortlisted",
  //     count: 453,
  //   },
  //   {
  //     label: "Technical Interview",
  //     count: 123,
  //   },
  //   {
  //     label: "Opportunity Browsing",
  //     count: 243,
  //   },
  //   {
  //     label: "Video Interview I",
  //     count: 25,
  //   },
  //   {
  //     label: "Video Interview II",
  //     count: 25,
  //   },
  //   {
  //     label: "Video Interview III",
  //     count: 25,
  //   },
  //   {
  //     label: "Offer",
  //     count: 25,
  //   },
  //   {
  //     label: "Withdrawn",
  //     count: 25,
  //   },
  // ];

  return (
    <header className="w-full py-[24px] px-[32px] grid grid-flow-col grid-cols-[30%_auto] gap-[32px]">
      <div>
        <h1 className="text-[20px] font-[600] text-primary">
          London Internship Program
        </h1>
        <span className="block mt-[8px] text-[12px] font-[300]">London</span>
      </div>

      <div className="w-full grid grid-flow-col gap-2 items-center grid-cols-[auto_max-content]">
        <Dropdown
          className="py-[8px] block px-[16px] bg-white text-primary w-full max-w-[321px] cursor-pointer text-[16px] rounded-[16px]"
          overlayClassName="header-program-filter-dropdown"
          openClassName="rounded-b-none shadow-[0px_4px_25px_0px_rgba(29,78,216,0.05)]"
          menu={{
            items: headerfilters.map((filter, index) => {
              return {
                key: filter.label,
                label: (
                  <div
                    className={`
                      px-[16px] py-[23.5px] flex justify-between items-center 
                      ${
                        categoryFilter === filter.label
                          ? "bg-[#EDF2FF] shadow-[0px_4px_25px_0px_rgba(29,78,216,0.05)] text-primary"
                          : ""
                      } 
                      ${
                        index === headerfilters.length - 1
                          ? ""
                          : "border-b-[1px] border-[#EEE]"
                      }
                    `}
                  >
                    <span className="text-[16px]">{filter.label}</span>
                    <span
                      className={`bg-[#F8F8F8] py-[2px] px-[10px] rounded-3xl ${
                        categoryFilter === filter.label ? "bg-[#D1DDFF]" : ""
                      }`}
                    >
                      {filter.count}
                    </span>
                  </div>
                ),
                className: "!p-0",
                onClick: (ev) => {
                  setCategoryFilter(ev.key);
                },
              };
            }),
            onSelect: (ev) => {
              alert("dude");
              setCategoryFilter(ev.selectedKeys[0]);
            },
          }}
          trigger={["click"]}
        >
          <button className="flex justify-between items-center text-[16px]">
            {categoryFilter || (
              <span className="text-[#dadada]">Select a category</span>
            )}

            <img src={ChevronDownSolid} alt='ChevronDownSolid icon' />
          </button>
        </Dropdown>

        <div className="grid grid-flow-col gap-[8px] justify-between items-center">
          <Button>
            <img src={Clip} alt=' Clip icon' /> 
          </Button>
          <Button>
            <img src={ContactClose} alt='ContactClose icon' />
          </Button>
          <Button>
            <img src={ContactCheck} alt='ContactCheck icon' /> 
          </Button>
          <Button>
            <img src={ContactBuss} alt='ContactBuss icon' />
          </Button>
          <Button>
            <img src={Message} alt='Message icon' /> 
          </Button>

          <Dropdown
            trigger={["click"]}
            className="bg-primary "
            menu={{
              items: [
                {
                  label: "Item 1",
                  key: "1",
                },
                {
                  label: "Item 2",
                  key: "2",
                },
                {
                  label: "Item 3",
                  key: "3",
                },
                {
                  label: "Item 4",
                  key: "4",
                },
              ],
            }}
          >
            <Button className="flex items-center p-0 h-full text-white">
              <div className="px-[16px] text-[13px]">
                Move To Video Interview I
              </div>
              <div className="flex items-center justify-center border-l-[1px] p-[10px] h-full">
                 <img src={ChevronDownWhite} alt='ChevronDownWhite icon' />
              </div>
            </Button>
          </Dropdown>
        </div>
      </div>
    </header>
  );
}

export default Header