import { pair } from "config";
import { MBTI_DATA } from "config";
import { styled } from "styled-components";

const Item = ({ item, active, setActive }) => {
  const handleClick = () => {
    // 눌려있는 Item 비활성화
    if (active.includes(item.id)) {
      setActive(active.filter((id) => id !== item.id));
      return;
    }
    if (active.includes(pair[item.id])) {
      const newActive = active.map((id) => {
        if (id === pair[item.id]) return item.id;
        else return id;
      });
      setActive(newActive);
      return newActive;
    }

    // Pair가 활성화 되어 있지 않으면 그대로 추가
    setActive([...active, item.id]);
  };

  const isActive = active.includes(item.id);

  return (
    <Wrap onClick={handleClick} className={isActive ? "clicked" : "unClicked"}>
      <Accent className="accent">{item.value}</Accent>
      {item.label}
    </Wrap>
  );
};

const Wrap = styled.div`
  @media (min-width: 994px) {
    width: 200px;
    height: 76px;
  }
  &:hover {
    background-color: #464e5e;
    .accent {
      color: #ffffff;
    }
  }
  &.clicked {
    background-color: #464e5e;
    .accent {
      color: #ffffff;
    }
  }
  &.unClicked {
    background-color: #ffffff;
    &:hover {
      .accent {
        color: #464e5e;
      }
    }
  }
  display: flex;
  padding: 12px 34px 12px 32px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 16px;
  border: 2px solid #e7ebf2;
  color: #8892a6;
  font-size: 20px;
  font-weight: 400;
  gap: 16px;
  cursor: pointer;
`;

const Accent = styled.span`
  line-height: 1;
  color: #464e5e;
  font-size: 36px;
  font-weight: 500;
`;

export default Item;
