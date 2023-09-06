import { styled } from "styled-components";
import SelectMbti from "./SelectMbti";

const Header = ({ selectMbti, setSelectMbti }) => {
  return (
    <HeaderDiv style={{ position: "sticky" }}>
      <Title>
        MBTI별 <br />
        <span className="accent">좋아하는 컬러</span>
      </Title>
      {selectMbti && (
        <SelectMbti mbti={selectMbti} setSelectMbti={setSelectMbti} />
      )}
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
  @media (min-width: 944px) {
    width: 297px;
    height: 256px;
    text-align: right;
  }
  border-radius: 32px;
  background-color: #f5f7fb;
  padding: 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #464e5e;
  margin-bottom: 16px;
  position: sticky;
  top: 24px;
  z-index: 1;
`;

const Title = styled.h1`
  > .accent {
    font-weight: 800;
  }
  font-size: 40px;
  font-weight: 400;
`;

export default Header;
