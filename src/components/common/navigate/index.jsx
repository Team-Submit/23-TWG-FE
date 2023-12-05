import styled from "styled-components";
import Bookmarktab from "../tab/bookmarktab";
import Penciltab from "../tab/penciltab";
import Profiletab from "../tab/profiletab";
import Searchtab from "../tab/searchtab";

export const Navigate = ({}) => {
  return (
    <Container>
      <Profilecontainer>
        <Searchtab />
        <Penciltab />
        <Bookmarktab />
      </Profilecontainer>
      <Profiletab />
    </Container>
  );
};

export default Navigate;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 74px;
  height: 98vh;
  border-right: 3px solid #e0e0e0;
  justify-content: space-between;
`;

const Profilecontainer = styled.div``;
