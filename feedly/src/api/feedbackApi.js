import axios from "axios";

const feedback = async (payload) =>
  axios.post(
    "https://webhook.site/9f54337a-cb5f-43e8-bb10-6caa824fb55a",
    payload
  );

const subscribe = async (payload) =>
  axios.post(
    "https://webhook.site/9f54337a-cb5f-43e8-bb10-6caa824fb55a",
    payload
  );

const feedbackApi = { feedback, subscribe };

export default feedbackApi;
    