import styled from "styled-components";
import { color } from "../../../styles/theme";
import { useState } from "react";

export const Button2 = ({ disabled }) => {
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

export default Button2;

const _Button = styled.button`
  width: 95px;
  height: 33px;
  border-radius: 7px;
  background-color: white;
  border: 1.5px solid;
  border-color: ${({ clicked }) => (clicked ? color.Base[1] : color.Base[2])};

  &:hover {
    border-color: ${color.Base[3]};
  }
  &:disabled {
    border-color: ${color.Base[0]};
  }
`;
