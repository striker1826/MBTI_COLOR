import { styled } from "styled-components";
import repeatIcon from "assets/repeat.svg";
import generateColorCode from "utils/generate";
import { useState } from "react";

const AddColor = ({ colorCode, setColorCode }) => {
  const changeColorCode = () => {
    setColorCode(generateColorCode);
  };

  return (
    <Container>
      <Top>
        <H3Tag>컬러</H3Tag>
        <Repeat onClick={changeColorCode}>
          <img src={repeatIcon} alt="새로고침 아이콘" />
        </Repeat>
      </Top>
      <ColorBox>
        <ColorInput placeholder={colorCode} />
        <Color color={colorCode} />
      </ColorBox>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 48px;
  width: 100%;
`;

const Top = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
`;

const H3Tag = styled.h3`
  color: #464e5e;
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
`;

const Repeat = styled.div`
  padding: 8px;
  border-radius: 8px;
  background: #f5f7fb;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ColorBox = styled.form`
  display: flex;
  position: relative;
`;

const ColorInput = styled.input`
  width: 100%;
  padding: 26px 25px 27px 32px;
  border-radius: 16px;
  border: 2px solid #e7ebf2;
  color: #8892a6;
  font-size: 24px;
  font-weight: 500;
`;

const Color = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.color};
  position: absolute;
  top: 50%;
  right: 35px;
  transform: translate(0, -50%);
  border-radius: 8px;
`;

export default AddColor;
