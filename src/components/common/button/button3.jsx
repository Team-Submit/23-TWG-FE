import styled from "styled-components";
import { color } from "../../../styles/theme";
import { useState } from "react";

export const Button3 = ({ disabled }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <_Button
      disabled={disabled}
      onClick={handleClick}
      clicked={clicked}
    ></_Button>
  );
};

export default Button3;

const _Button = styled.button`
  width: 95px;
  height: 33px;
  border-radius: 7px;
  background-color: ${({ clicked }) => (clicked ? "#F2F2F2" : "#e8e8e8")};
  border: none;

  &:hover {
    background-color: "#cfcfcf";
    border: none;
  }
  &:disabled {
    border: 1.5px solid #cecece;
    background-color: "white";
  }
`;
