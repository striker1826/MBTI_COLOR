import { styled } from "styled-components";
import MbtiItem from "components/homePage/MbtiItem";
import { NavLink } from "react-router-dom";

const MbtiList = ({ items, setSelectMbti, selectMbti }) => {
  const filtering = (mbti) => items.filter((item) => item.mbti === mbti);
  const filteredItems = selectMbti ? filtering(selectMbti) : items;

  return (
    <Container>
      <NavLink
        to="addColor"
        style={{ textDecoration: "none", color: "#464e5e" }}
      >
        <AddItem>+ 새 컬러 등록하기</AddItem>
      </NavLink>
      <ul style={{ padding: "0" }}>
        {filteredItems.map((item) => (
          <MbtiItem key={item.id} item={item} setSelectMbti={setSelectMbti} />
        ))}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  @media (min-width: 944px) {
    display: flex;
    flex-direction: column;
    width: 528px;
    margin-left: 40px;
  }
`;

const AddItem = styled.div`
  &:hover {
    background-color: #f5f7fb;
  }
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 20px 0 20px 24px;
  border-radius: 8px;
  border: 2px dashed #dee3ec;
`;

export default MbtiList;
