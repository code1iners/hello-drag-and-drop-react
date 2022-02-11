import { DraggableProvided } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.li`
  background-color: white;
  list-style: none;
  padding: 20px;
`;

interface ICardViewProps {
  provided: DraggableProvided;
  item: string;
}

/**
 * Simply card view.
 */
const CardView = ({ provided, item }: ICardViewProps) => {
  return (
    <Container
      ref={provided.innerRef}
      {...provided.dragHandleProps}
      {...provided.draggableProps}
    >
      {item}
    </Container>
  );
};

export default CardView;
