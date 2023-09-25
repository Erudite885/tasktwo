import React from "react";
import { Input, Collapse } from "antd";
import ChevronDown from "../../assets/chevron-down.svg";
import FileMini from "../../assets/file-little.svg";
import Info from "../../assets/infoicon.svg";
import Search from "../../assets/search.svg";
import { filterPagefilters } from "../../constants/index.ts";

const Filters = () => {
  const { Panel } = Collapse;

  const onChange = (key) => {
    console.log(key);
  };

  // const filters = [
  //   {
  //     label: "Personal Information",
  //     dropdown: true,
  //   },
  //   {
  //     label: "Education",
  //     dropdown: true,
  //   },
  //   {
  //     label: "Work Experience",
  //     dropdown: true,
  //   },
  //   {
  //     label: "Activity Filter",
  //     dropdown: true,
  //   },
  //   {
  //     label: "Advanced Filter",
  //     dropdown: false,
  //   },
  // ];

  return (
    <div>
      <Input
        placeholder="Search by name, edu, exp or #tag"
        className="!py-[13px] !px-[16px] rounded-[8px] border-[#F3F3F3] mb-[24px]"
        prefix={ <img src={Search} alt='Search icon' />}
        suffix={ <img src={Info} alt='Info icon' />}
      />

      <div className="bg-white rounded-[8px]">
        <div className="grid grid-flow-col gap-3 justify-between items-center py-[18px] px-[16px] border-[#F2F2F2] border-b-[1px]">
          <span className="font-bold">Filters</span>
          <span className="text-[12px]">0 Selected</span>
        </div>

        <Collapse
          accordion
          defaultActiveKey={["1"]}
          onChange={onChange}
          expandIcon={() => { <img src={FileMini} alt='FileMini icon' />}}
          className="!bg-white !border-[0px]"
        >
          {filterPagefilters.map((filter, index) => (
            <Panel
              key={index.toString()}
              header={filter.label}
              extra= { <img src={ChevronDown} alt='ChevronDown icon' />}
            >
              <p className="text-[#d5d5d5]">Filter options come here</p>
            </Panel>
          ))}
        </Collapse>
      </div>
    </div>
  );
};

export default Filters;
