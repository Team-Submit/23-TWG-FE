import styled from "styled-components";
import { color } from "../../../styles/theme";

const Input1 = ({ error = false, width = "auto", height = "auto" }) => {
  return (
    <_Input1
      error={error}
      width={width}
      height={height}
      placeholder="입력하세요"
      disabled={error}
    />
  );
};

export default Input1;

const _Input1 = styled.input`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: 1px solid ${({ error }) => (error ? "red" : "#D9D9D9")};

  ::placeholder {
    color: ${({ error }) => (error ? "red" : "#D9D9D9")};
  }

  &:hover {
    border-color: "#a3a3a3";
    ::placeholder {
      color: "#a3a3a3";
    }
  }

  &:disabled {
    border-color: "#d9d9d9";
    cursor: not-allowed;
    ::placeholder {
      color: "#d9d9d9";
    }
  }

  &:focus {
    border-color: ${color.Base[1]};
    outline: none;
    ::placeholder {
      color: "transparent";
    }
  }
`;
