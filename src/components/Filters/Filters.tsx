import { Input, Collapse } from "antd";
import { filterPagefilters } from "../../constants/index.ts";
import { ChevronDown, FileMini, Info, Search } from "../../assets/index.ts";

const Filters = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <div>
      <Input
        placeholder="Search by name, edu, exp or #tag"
        className="!py-[13px] !px-[16px] rounded-[8px] border-[#F3F3F3] mb-[24px]"
        prefix={<img src={Search} alt="Search icon" />}
        suffix={<img src={Info} alt="Info icon" />}
      />

      <div className="bg-white rounded-[8px]">
        <div className="grid grid-flow-col gap-3 justify-between items-center py-[18px] px-[16px] border-[#F2F2F2] border-b-[1px]">
          <span className="font-bold">Filters</span>
          <span className="text-[12px]">0 Selected</span>
        </div>

        <Collapse
          items={filterPagefilters.map((filter, index) => {
            return {
              key: index,
              label: filter.label,
              children: (
                <p className="text-[#D5D5D5]">Filter options comes here</p>
              ),
              extra: <img src={ChevronDown} alt="chevron down" />,
              className: "!border-[#F2F2F2] rounded-0",
              onClick: () => {},
            };
          })}
          defaultActiveKey={[]}
          onChange={onChange}
          expandIcon={() => <img src={FileMini} alt="file icon" />}
          className="!bg-white !border-[0px]"
        />
      </div>
    </div>
  );
};

export default Filters;
