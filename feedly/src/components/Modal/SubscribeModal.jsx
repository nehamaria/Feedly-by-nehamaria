import React from "react";
import ReactDOM from "react-dom";
import subscribeImage from "../../Assets/Orange.png";
import { Formik, Form } from "formik";
import { Button, Toastr, Typography } from "@bigbinary/neetoui/v2";
import { Input } from "@bigbinary/neetoui/v2/formik";
import * as yup from "yup";
import axios from "axios";

function SubscribeModal({ isModalOpen, setIsModalOpen }) {
  const handleSubmit = async (values) => {
    axios.post(
      "https://webhook.site/9f54337a-cb5f-43e8-bb10-6caa824fb55a",
      values
    );
    setIsModalOpen(false);
    Toastr.success("Subscribed successfully");
  };
  if (!isModalOpen) return null;
  return ReactDOM.createPortal(
    <>
      <div className="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-transparent">
        <div
          className="fixed inset-0 w-full backdrop-filter z-10"
          onClick={() => setIsModalOpen(false)}
          style={{
            backgroundColor: "rgba(27, 31, 35, 0.867)",
            backdropFilter: "blur(2px)",
          }}
        ></div>
        <div className="z-20  w-72 bg-white">
          <div class="flex flex-col items-start p-4 ">
            <img src={subscribeImage} />
            <div class="text-gray-900 font-medium text-lg text-center">
              Subscribe to Feed.ly
            </div>
            <Typography style="body2" className="pb-6 pt-2">
              We don’t spam, but, we deliver the latest news in short.
            </Typography>
            <Formik
              initialValues={{
                email: "",
              }}
              onSubmit={handleSubmit}
              validationSchema={yup.object({
                email: yup.string().email().required("Email Required"),
              })}
            >
              {({ isSubmitting }) => (
                <Form className="w-full">
                  <Input
                    name="email"
                    className="mb-6 "
                    placeholder="oliversmith@example.com"
                  />
                  <div class="ml-auto space-x-3">
                    <Button
                      label="Sign Up"
                      type="submit"
                      disabled={isSubmitting}
                      loading={isSubmitting}
                    >
                      Sign Up
                    </Button>
                    <Button
                      onClick={() => setIsModalOpen(false)}
                      label="Cancel"
                      style="text"
                    >
                      Cancel
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("SubscribePortal")
  );
}

export default SubscribeModal;
