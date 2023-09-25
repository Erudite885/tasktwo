import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";

import { Candidate } from "..";
import { cardData } from "../../constants";

interface ResultInfoProps {
  label: string;
  count?: number;
  className?: string;
  active?: boolean;
}

const ResultInfo: React.FC<ResultInfoProps> = ({
  label,
  count,
  className,
  active,
}) => {
  return (
    <span
      className={twMerge(
        "flex px-[16px] border-r-[1px] border-r-[#c5cfde] cursor-pointer justify-center items-center ",
        className
      )}
    >
      <span className={active ? "text-primary" : ""}>{label}</span>
      <span className="w-[25px] h-[25px] bg-[#F7F8FD] flex m-0 ml-[8px] justify-center items-center text-[10px] rounded-3xl">
        {count}
      </span>
    </span>
  );
};

const SearchResult: React.FC = () => {
  const [candidateSelection, setCandidateSelection] = useState<number[]>([]);
  const [checkAll, setCheckAll] = useState(false);

  const onCandidateSelect = (index: number) => {
    let newCandidateSelection = [...candidateSelection];
    if (!candidateSelection.includes(index)) {
      newCandidateSelection = [...candidateSelection, index];
    } else {
      newCandidateSelection = candidateSelection.filter(
        (item) => item !== index
      );
    }

    setCandidateSelection(newCandidateSelection);
    setCheckAll(cardData.length === newCandidateSelection.length);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCandidateSelection(
      e.target.checked ? cardData.map((_, index) => index) : []
    );
    setCheckAll(e.target.checked);
  };

  return (
    <div className="w-full bg-white rounded-[16px] py-[8px] px-[16px]">
      <div className="w-full grid grid-flow-col gap-2 justify-between items-center grid-cols-[auto_max-content] border-b-[1px] border-b-[#c5cfde] ">
        <div className="grid grid-flow-col gap-[32px] py-[16px] items-center">
          <Checkbox onChange={onCheckAllChange} checked={checkAll} />
          <span className="text-primary font-[600]">247 Candidates</span>
        </div>

        <div className="flex">
          {/* Render ResultInfo components here */}
          <ResultInfo
            label="Qualified"
            active
            // count={0}
          />
          <ResultInfo label="Task" count={25} />
          <ResultInfo
            label="Disqualified"
            count={78}
            className="!border-r-0 pr-0"
          />
        </div>
      </div>

      <div>
        {cardData.map((data, index) => {
          return (
            <Candidate
              key={index}
              selected={candidateSelection.includes(index)}
              onSelect={() => onCandidateSelect(index)}
              {...data}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchResult;
