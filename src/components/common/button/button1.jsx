import styled from "styled-components";
import { color } from "../../../styles/theme";
import { useState } from "react";

export const Button1 = ({ disabled }) => {
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

export default Button1;

const _Button = styled.button`
  width: 95px;
  height: 33px;
  border-radius: 7px;
  background-color: ${({ clicked }) =>
    clicked ? color.Base[1] : color.Base[2]};
  border: none;

  &:hover {
    background-color: ${color.Base[3]};
  }
  &:disabled {
    background-color: ${color.Base[0]};
  }
`;
