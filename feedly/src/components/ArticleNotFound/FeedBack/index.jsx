import React from "react";
import { Modal ,Typography} from "@bigbinary/neetoui/v2";

import FeedBackForm from "./FeedBackForm";


const FeedBack = ({showFeedBack,setShowFeedBack}) => {
  return (
    <div>
      <Modal isOpen={showFeedBack} onClose={() => setShowFeedBack(false)} size="md">
        <Modal.Header>
          <div className="flex flex-col ml-3">
            <Typography style="h2" className="flex justify-start pb-2">
              Can’t find what you came for?
            </Typography>
            <Typography style="body2" className=" flex justify-start pb-5">
              Write to us about which category interests you and we will fetch
              them for you daily, for free.
            </Typography>
          </div>
        </Modal.Header>
        <Modal.Body>
          <FeedBackForm showFeedBack={showFeedBack} setShowFeedBack={setShowFeedBack}/>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FeedBack;
