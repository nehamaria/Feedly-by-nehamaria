import React from "react";
import { Button, Toastr } from "@bigbinary/neetoui/v2";
import { Input, Textarea } from "@bigbinary/neetoui/v2/formik";
import { Formik, Form } from "formik";
import axios from "axios";
import * as yup from "yup";
import feedbackApi from "../../../api/feedbackApi";

const FeedBackForm = ({ setShowFeedBack }) => {
  const handleSubmit = async (values) => {
    try {
      await feedbackApi.feedback(values);
      Toastr.success("Feedback submitted successfully");
    } catch (error) {
      console.log(error);
      Toastr.error(error);
    } finally {
      setShowFeedBack(false);
    }
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={yup.object({
        name: yup.string().required("Name is required"),
        email: yup.string().email().required("Email Required"),
        message: yup.string().required("Message is required"),
      })}
    >
      {({ isSubmitting }) => (
        <Form className="w-full space-y-3 mb-6">
          <div className="flex space-x-6  ml-3">
            <Input label="Name" name="name" />
            <Input
              label="Email"
              name="email"
              placeholder="oliversmith@example.com"
            />
          </div>
          <Textarea
            label="Message"
            name="message"
            placeholder="Enter note description"
            className="ml-3"
          />
          <div class="flex ml-3 space-x-3 ">
            <Button
              label="Submit"
              type="submit"
              disabled={isSubmitting}
              loading={isSubmitting}
            />

            <Button
              onClick={() => setShowFeedBack(false)}
              label="Cancel"
              style="text"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FeedBackForm;
