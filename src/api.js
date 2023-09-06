import axios from "axios";

const BASE_URL = "https://learn.codeit.kr";

const getManyMbtis = async (options) => {
  const limit = 10;
  const { mbti } = options;
  const response = await axios.get(`${BASE_URL}/api/color-surveys/`, {
    params: { mbti, limit },
  });
  return response.data;
};

const createSurvey = async (data) => {
  console.log(data);
  const response = await axios.post(`${BASE_URL}/api/color-surveys`, data);
  return response.data;
};

export { getManyMbtis, createSurvey };
