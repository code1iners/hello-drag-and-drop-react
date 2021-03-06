import { useRecoilState } from "recoil";
import styled from "styled-components";
import { atomItems } from "../utils/atoms";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import BoardView from "../components/BoardView";

const Container = styled.div`
  height: 100vh;
  background-color: #686de0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  margin-bottom: 50px;

  h1 {
    color: white;
  }
`;

const BoardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
`;

const HomeView = () => {
  // Recoil state.
  const [items, setItems] = useRecoilState(atomItems);

  /**
   * ### On drag end event handler.
   */
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    // Has destination.
    if (!destination) return;

    setItems((previousItems) => {
      // Copy previous items.
      const copiedObjects = { ...previousItems };

      // Delete moved item.
      const removeList = [...copiedObjects[source.droppableId]];
      const [removedItem] = removeList.splice(source.index, 1);
      copiedObjects[source.droppableId] = removeList;

      // Append moved item.
      const targetList = [...copiedObjects[destination.droppableId]];
      targetList.splice(destination.index, 0, removedItem);
      copiedObjects[destination.droppableId] = targetList;

      return copiedObjects;
    });
  };

  return (
    <Container>
      <Header>
        <h1>Drag and Drop</h1>
      </Header>
      <BoardContainer>
        {/* Drag and Drop context */}
        <DragDropContext onDragEnd={onDragEnd}>
          {/* All item objects looping */}
          {Object.keys(items).map((boardId, index) => (
            // Declared droppable area.
            <Droppable key={index} droppableId={boardId}>
              {(provided, snapshot) => (
                // Board View.
                <BoardView
                  key={index}
                  provided={provided}
                  snapshot={snapshot}
                  items={items[boardId]}
                />
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </BoardContainer>
    </Container>
  );
};

export default HomeView;
