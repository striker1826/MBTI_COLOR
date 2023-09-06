import { styled } from "styled-components";
import cancelIcon from "assets/cacle_icon.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <H1Tag>새 컬러 등록하기</H1Tag>
      <NavLink to="/">
        <Cancel>
          <img src={cancelIcon} alt="취소 아이콘" width="24px" height="24px" />
        </Cancel>
      </NavLink>
    </Container>
  );
};

const Container = styled.div`
  @media (min-width: 944px) {
    align-items: space-between;
    justify-content: space-between;
  }
  margin-top: 45px;
  margin-bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const H1Tag = styled.h1`
  color: #464e5e;
  font-size: 32px;
  font-weight: 800;
  line-height: 0;
`;

const Cancel = styled.div`
  &:hover {
    background-color: #edf0f5;
  }
  padding: 12px;
  border-radius: 50%;
  background-color: #f5f7fb;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Header;
