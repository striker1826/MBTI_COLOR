import { useState } from "react";
import AddColor from "components/addNewColor/AddColor";
import Header from "components/addNewColor/Header";
import ItemList from "components/addNewColor/ItemList";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { MBTI_DATA } from "config";
import { createSurvey } from "api";

const AddColorPage = () => {
  const [active, setActive] = useState([1, 3, 5, 7]);
  const [colorCode, setColorCode] = useState("#9441FF");
  const navigate = useNavigate();

  const changeActive = active.map((id) => {
    return MBTI_DATA.find((data) => id === data.id);
  });

  const sortedActive = changeActive.sort((a, b) => a.id - b.id);

  const submitMbtiData = sortedActive.map((data) => data.value).join("");

  console.log(submitMbtiData);
  const handleSubmit = async () => {
    const submitData = {
      mbti: submitMbtiData,
      colorCode: colorCode,
      password: "0000",
    };
    await createSurvey(submitData);
    navigate("/");
  };

  return (
    <Container>
      <Header />
      <H2Tag>MBTI</H2Tag>
      <ItemList active={active} setActive={setActive} />
      <AddColor colorCode={colorCode} setColorCode={setColorCode} />
      <SubmitBtn onClick={handleSubmit}>컬러 등록</SubmitBtn>
    </Container>
  );
};

const Container = styled.div`
  @media (min-width: 994px) {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 560px;
  }
  margin: 0 24px;
  color: #464e5e;
  font-size: 24px;
  font-weight: 500;
`;

const H2Tag = styled.h2`
  margin-top: 48px;
  line-height: 0;
  cursor: pointer;
`;

const SubmitBtn = styled.div`
  display: flex;
  width: 327px;
  padding: 22px 0px 21px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: #464e5e;
  color: white;
  width: 100%;
  margin-top: 24px;
  cursor: pointer;
`;

export default AddColorPage;
