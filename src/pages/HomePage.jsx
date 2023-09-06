import MbtiList from "components/homePage/MbtiList";
import Header from "components/homePage/Header";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import { styled } from "styled-components";

const BASE_URL = "https://learn.codeit.kr";

const HomePage = () => {
  const [selectMbti, setSelectMbti] = useState(null);
  const [items, setItems] = useState([]);
  const [next, setNext] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [ref, inView] = useInView();
  const isInitialRender = useRef(true);

  const handleLoad = async () => {
    setIsLoading(true);
    const res = await axios.get(`${BASE_URL}/api/color-surveys`, {
      params: { mbti: selectMbti, limit: 10 },
    });

    setItems(res.data.results);
    setNext(res.data.next);
    setIsLoading(false);
  };

  const handleLoadMore = async () => {
    setIsLoading(true);
    const res = await axios.get(next);
    setItems((prevItem) => [...prevItem, ...res.data.results]);
    setNext(res.data.next);
    setIsLoading(false);
  };

  useEffect(() => {
    handleLoad();
  }, [selectMbti]);

  useEffect(() => {
    if (inView && next && !isLoading) {
      handleLoadMore();
    }
  }, [inView]);

  return (
    <>
      <Container>
        <Header selectMbti={selectMbti} setSelectMbti={setSelectMbti} />
        <MbtiList
          items={items}
          setSelectMbti={setSelectMbti}
          selectMbti={selectMbti}
        />
      </Container>
      <div ref={ref}></div>
    </>
  );
};

const Container = styled.div`
  @media (min-width: 944px) {
    display: flex;
    margin-top: 80px;
    justify-content: center;
    ref: ${(props) => props.ref};
  }
`;
export default HomePage;
