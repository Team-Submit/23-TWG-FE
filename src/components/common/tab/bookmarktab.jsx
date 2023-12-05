import { Tabbookmark_Clicked } from "../../../assets";
import { Tabbookmark_Hover } from "../../../assets";
import { Tabbookmark } from "../../../assets";
import { color } from "../../../styles/theme";
import styled from "styled-components";
import { useState } from "react";

export const Bookmarktab = ({}) => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <StyledDiv clicked={clicked} onClick={() => setClicked(!clicked)}>
        <InnerDiv>
          <Position>
            <img
              src={clicked ? Tabbookmark_Clicked : Tabbookmark}
              alt="아이콘"
            ></img>
          </Position>
          <Position>
            <Innertext clicked={clicked}>저장</Innertext>
          </Position>
        </InnerDiv>
      </StyledDiv>
    </>
  );
};

export default Bookmarktab;
//사용법
//</Tab>

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 74px;
  height: 74px;
  background-color: ${(props) => (props.clicked ? color.Base[3] : "initial")};
  &:hover {
    img {
      content: ${(props) =>
        props.clicked ? "initial" : `url(${Tabbookmark_Hover})`};
    }

    p {
      color: ${(props) => (props.clicked ? "white" : `${color.Base[2]}`)};
    }
  }
`;

const InnerDiv = styled.div``;

const Innertext = styled.p`
  font-size: 12px;
  color: ${(props) => (props.clicked ? "white" : "initial")};
`;

const Position = styled.div`
  display: flex;
  justify-content: center;
`;
