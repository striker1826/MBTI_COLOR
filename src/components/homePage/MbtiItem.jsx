import { styled } from "styled-components";
import arrowImg from "assets/arrow.jpg";

const MbtiItem = ({ item, setSelectMbti }) => {
  const { id, mbti, colorCode } = item;

  const handleMbti = (mbti) => {
    setSelectMbti(mbti);
  };

  return (
    <Item onClick={() => handleMbti(mbti)}>
      <ItemId>{id}</ItemId>
      <ItemMbti>{mbti}</ItemMbti>
      <ArrowDiv>
        <ArrowImg src={arrowImg} alt="arrow Img" />
      </ArrowDiv>
      <Color color={colorCode} />
      <ColorCode>{colorCode}</ColorCode>
    </Item>
  );
};

const Item = styled.li`
  &:hover {
    background-color: #f5f7fb;
  }
  cursor: pointer;
  display: flex;
  align-items: center;
  list-style: none;
  padding: 16px;
`;

const ItemMbti = styled.div`
  padding: 8px;
  border-radius: 8px;
  background: rgba(178, 189, 204, 0.2);
  color: #464e5e;
  font-size: 16px;
  font-weight: 600;
`;

const ItemId = styled.div`
  color: #bfc8da;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  width: 37px;
`;

const ArrowDiv = styled.div`
  position: relative;
  flex-grow: 1;
  margin: 16px;
  border-bottom: 2px dashed #bfc8da;
`;

const ArrowImg = styled.img`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -44%);
`;

const Color = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 8px;
  border: 3px solid #e8e8e8;
  width: 40px;
  height: 40px;
  margin-right: 8px;
`;

const ColorCode = styled.div`
  color: #bfc8da;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  width: 72px;
`;

export default MbtiItem;
