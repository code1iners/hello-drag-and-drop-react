import { Draggable, DroppableProvided } from "react-beautiful-dnd";
import styled from "styled-components";
import CardView from "./CardView";

const Container = styled.ul`
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  padding: 10px;
  border-radius: 5px;
  min-width: 250px;
`;

interface IBoardView {
  provided: DroppableProvided;
  items: string[];
}

/**
 * ### Card's board view.
 */
const BoardView = ({ provided, items }: IBoardView) => {
  return (
    <Container ref={provided.innerRef} {...provided.droppableProps}>
      {items.map((item, index) => (
        <Draggable key={item} draggableId={item} index={index}>
          {(provided) => (
            // Card view component.
            <CardView key={index} provided={provided} item={item} />
          )}
        </Draggable>
      ))}
      {provided.placeholder}
    </Container>
  );
};

export default BoardView;
