import { useState } from "react";
import { MBTI_DATA } from "config";
import { styled } from "styled-components";
import Item from "components/addNewColor/Item";

const ItemList = ({ active, setActive }) => {
  return (
    <Container>
      {MBTI_DATA.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            active={active}
            setActive={setActive}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template: repeat(4, 1fr) / repeat(2, 1fr);
  gap: 16px;
`;

export default ItemList;
