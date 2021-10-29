import React, { useEffect, useState } from "react";
import { Button, Typography, Pane, Checkbox } from "@bigbinary/neetoui/v2";
import { Check, Filter } from "@bigbinary/neeto-icons";
import { PANELLIST } from "./constants";
import News from ".";
function FilterPane({ submittedCategories, setSubmittedCategories }) {
  const [showPane, setShowPane] = useState(false);
  const category = PANELLIST;
  const [submittedFormCategories, setSubmittedFormCategories] =
    useState(submittedCategories);
  useEffect(() => {
    setSubmittedFormCategories(submittedCategories);
  }, [submittedCategories]);
  const onHandleSave = () => {
    setSubmittedCategories(submittedFormCategories);
    setShowPane(false);
  };
  const handleAll=()=>{

  }
  return (
    <div className="w-full">
      <div className="space-y-6">
        <div className="w-1/2 space-y-8">
          <div className="flex flex-row items-center justify-start space-x-6">
            <Button
              label="Filter"
              size="large"
              style="secondary"
              icon={() => <Filter className="ml-3" size={15} />}
              onClick={() => setShowPane(true)}
            />
          </div>
        </div>
      </div>
      <Pane isOpen={showPane} onClose={() => setShowPane(false)}>
        <Pane.Header className="space-y-2">
          <Typography style="h2" weight="semibold">
            Filter Articles
          </Typography>
          <Typography style="h4" weight="semibold">
            Category
          </Typography>
        </Pane.Header>
        <Pane.Body>
          {/* <div className="mb-5">
            <Checkbox id="checkbox_name" label="All" onChange={handleAll}/>
          </div> */}
          {category.map((item) => {
            return (
              <div className="mb-5 capitalize">
                <Checkbox
                  checked={submittedFormCategories.includes(item)}
                  id="checkbox_name"
                  label={item}
                  onChange={() => {
                    if (!submittedFormCategories.includes(item)) {
                      setSubmittedFormCategories((prevState) => [
                        ...prevState,
                        item,
                      ]);
                    } else {
                      setSubmittedFormCategories(
                        submittedFormCategories.filter(
                          (category) => category !== item
                        )
                      );
                    }
                  }}
                />
              </div>
            );
          })}
          {console.log(submittedFormCategories)}
        </Pane.Body>
        <Pane.Footer className=" space-x-2 -mt-4">
          <Button
            icon={Check}
            size="large"
            label="Save Changes"
            onClick={onHandleSave}
          />
          <Button
            style="text"
            size="large"
            label="Cancel"
            onClick={() => setShowPane(false)}
          />
        </Pane.Footer>
      </Pane>
    </div>
  );
}

export default FilterPane;
