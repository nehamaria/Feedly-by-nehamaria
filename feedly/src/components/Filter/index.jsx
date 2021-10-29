import React, { useState } from "react";
import { useHistory } from "react-router";

import FilterPane from "./FilterPane";
import { PANELLIST } from "../NewsFeed/constants";

const Filter = ({
  showPane,
  setShowPane,
  submittedCategories,
  setSubmittedCategories,
  showArchivedNews,
  setShowArchivedNews,
}) => {
  const category = PANELLIST;
  const history = useHistory();
  const [submittedFormCategories, setSubmittedFormCategories] =
    useState(submittedCategories);

  const [archived, setArchived] = useState(showArchivedNews);

  const onHandleSave = () => {
    setSubmittedCategories(submittedFormCategories);
    setShowArchivedNews(archived);
    setShowPane(false);
    history.push("/");
  };
  const onHandleCancel = () => {
    setSubmittedFormCategories(submittedCategories);
    setArchived(showArchivedNews);
    setShowPane(false);
  };
  const onHandleChecked = (item) => {
    if (!submittedFormCategories.includes(item)) {
      setSubmittedFormCategories((prevState) => [...prevState, item]);
    } else {
      setSubmittedFormCategories(
        submittedFormCategories.filter((category) => category !== item)
      );
    }
  };

  const toggleArchived = () => {
    setArchived(!archived);
  };
  return (
    <FilterPane
      submittedFormCategories={submittedFormCategories}
      onHandleChecked={onHandleChecked}
      toggleArchived={toggleArchived}
      category={category}
      onHandleCancel={onHandleCancel}
      showPane={showPane}
      onHandleSave={onHandleSave}
      archived={archived}
    />
  );
};

export default Filter;
