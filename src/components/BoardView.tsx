import {
  Draggable,
  DroppableProvided,
  DroppableStateSnapshot,
} from "react-beautiful-dnd";
import styled from "styled-components";
import CardView from "./CardView";

const Container = styled.ul<{
  draggingFromThisWith: boolean;
  draggingOverWith: boolean;
}>`
  background-color: ${(props) =>
    props.draggingFromThisWith
      ? "#ff7979"
      : props.draggingOverWith
      ? "#f6e58d"
      : "#c7ecee"};
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  padding: 10px;
  border-radius: 5px;
  min-width: 250px;
`;

interface IBoardView {
  provided: DroppableProvided;
  snapshot: DroppableStateSnapshot;
  items: string[];
}

/**
 * ### Card's board view.
 */
const BoardView = ({ provided, snapshot, items }: IBoardView) => {
  return (
    <Container
      ref={provided.innerRef}
      {...provided.droppableProps}
      draggingFromThisWith={Boolean(snapshot.draggingFromThisWith)}
      draggingOverWith={Boolean(snapshot.draggingOverWith)}
    >
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
