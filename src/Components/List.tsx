import styled from "styled-components";

type ListProps = {
  todos: {
    [k: string]: FormDataEntryValue;
  }[];
  onDelete: (id: string) => void;
};

export default function List({ todos, onDelete }: ListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <ListItems key={todo.id as string}>
          <p>{todo.activity as string}</p>
          <button onClick={() => onDelete(todo.id as string)}>x</button>
        </ListItems>
      ))}
    </ul>
  );
}

const ListItems = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem;
  padding: 0.3rem 0.3rem 0.3rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #f1eaf0;

  button {
    font-size: 1.5rem;
    width: 2rem;
    background-color: transparent;
    border: none;
  }

  p {
    display: flex;
    align-items: center;
  }
`;
