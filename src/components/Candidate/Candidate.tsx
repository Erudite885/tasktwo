// import React from "react";
import { Avatar, Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";

interface CandidateProps {
  selected?: boolean;
  onSelect?: (e: CheckboxChangeEvent) => void;
  name: string;
  location: string;
  education: string;
  tags: string[];
  cities: string[];
}

const Candidate = ({
  selected,
  onSelect,
  name,
  location,
  education,
  tags,
  cities,
}: CandidateProps) => {
  return (
    <div className="grid grid-flow-col gap-[24px] grid-cols-[max-content_max-content_auto] py-[16px] items-center border-b-[1px] border-b-[#c5cfde]">
      <Checkbox checked={selected} className="w-[30px]" onChange={onSelect} />

      <Avatar
        size={56}
        className="!bg-[#EDF4FF] !text-[#D0E1FF] font-[600] !text-[20px]"
      >
        {name.charAt(0).toUpperCase()}
      </Avatar>

      <div className="grid gap-[8px]">
        <h3 className="text-[14px] font-[600] text-black">{name}</h3>
        <h5 className="text-[10px] font-[500] text-black">{location}</h5>
        <p className="text-[10px] font-[300] text-black">{education}</p>
        <div className="flex flex-wrap -ml-[8px] -mt-[4px] mb-[8px]">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-[8px] text-[#1D4ED8] ml-[8px] mt-[4px]"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap -ml-[8px] -mt-[8px]">
          {cities.map((category, index) => (
            <span
              key={index}
              className="text-[8px] text-[#037092] ml-[8px] mt-[8px] py-[2px] px-[10px] bg-[#F3FAFC] rounded-3xl font-[500]"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Candidate;
