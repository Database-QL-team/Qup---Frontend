import styled from "styled-components";
import RankingBox from "./RankingBox";
import React, { useEffect, useState } from "react";

const RankingBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  transition: visibility 0s, opacity 0.5s linear;
`;

const RankingBoxWrap = ({ RankingBoxData }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const ewhaRanking = RankingBoxData?.ewhaRank + "위";
  const nextGroup = `${RankingBoxData?.rivalRank}위 : ${RankingBoxData?.rivalName}와의 차이`;
  const gapProblem = RankingBoxData?.solvedNumGap + "문제";

  return (
    <RankingBoxContainer
      className={isVisible ? "slide-up" : ""}
      style={{
        visibility: isVisible ? "visible" : "hidden",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <RankingBox title="현재 백준 단체 랭킹 순위" rankingNum={ewhaRanking} />
      <RankingBox title={nextGroup} rankingNum={gapProblem} />
    </RankingBoxContainer>
  );
};

export default RankingBoxWrap;
