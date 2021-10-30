import React from "react";
import { Checkbox, Typography } from "@bigbinary/neetoui/v2";

const FilterForm = ({
  submittedFormCategories,
  onHandleChecked,
  toggleArchived,
  category,
  archived,
}) => {
  return (
    <div className="capitalize w-full ">
      <Typography> Categories</Typography>
      <div className="px-4 space-y-8 mt-4">
        {category.map((item, index) => {
          return (
            <Checkbox
              key={index}
              checked={submittedFormCategories.includes(item)}
              id={item}
              label={item}
              onChange={() => onHandleChecked(item)}
            />
          );
        })}
      </div>
      <hr className="my-6 " />

      <div className="mb-5">
        <Checkbox
          checked={archived}
          id="archived"
          name="archived"
          label="Include archived articles"
          onChange={toggleArchived}
        />
      </div>
    </div>
  );
};

export default FilterForm;
