import cancelIcon from "assets/cacle_icon.png";
import { styled } from "styled-components";

const SelectMbti = ({ mbti, setSelectMbti }) => {
  const cancelMbti = () => setSelectMbti(null);

  return (
    <Mbti onClick={cancelMbti}>
      <MbtiText>{mbti}</MbtiText>
      {mbti && <CancelIcon src={cancelIcon} />}
    </Mbti>
  );
};

const Mbti = styled.div`
  padding: 4px 8px;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  gap: 6px;
  cursor: pointer;
`;

const MbtiText = styled.div`
  font-size: 16px;
  font-weight: 500;
  // margin-left: 16px;
`;

const CancelIcon = styled.img`
  // margin: 0 24px;
  width: 12px;
  height: 12px;
  cursor: pointer;
`;

export default SelectMbti;
