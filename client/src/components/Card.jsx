import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1em;
  cursor: pointer;
`;

function Cards(props) {
  return <Card onClick={props.onClick}>{props.children}</Card>;
}

export default Cards;
