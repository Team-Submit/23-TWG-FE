import { tabsearch } from "../../../assets/images/icon";
import { tabsearch_Hover } from "../../../assets/images/icon";
import { tabsearch_Clicked } from "../../../assets/images/icon";
import { color } from "../../../styles/theme";
import styled from "styled-components";
import { useState } from "react";

export const Searchtab = ({}) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      <StyledDiv clicked={clicked} onClick={() => setClicked(!clicked)}>
        <InnerDiv>
          <img src={clicked ? tabsearch_Clicked : tabsearch} alt="아이콘"></img>
          <Innertext clicked={clicked}>검색</Innertext>
        </InnerDiv>
      </StyledDiv>
    </div>
  );
};

export default Searchtab;
//사용법
//</Tab>

const StyledDiv = styled.div`
  width: 74px;
  height: 74px;
  background-color: ${(props) => (props.clicked ? color.Base[3] : "initial")};
  &:hover {
    img {
      content: ${(props) =>
        props.clicked ? "initial" : `url(${tabsearch_Hover})`};
    }

    p {
      color: ${(props) => (props.clicked ? "white" : `${color.Base[2]}`)};
    }
  }
`;

const InnerDiv = styled.div`
  padding-left: 26px;
`;

const Innertext = styled.p`
  font-size: 12px;
  padding-left: 2px;
  color: ${(props) => (props.clicked ? "white" : "initial")};
`;
