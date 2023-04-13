import styled from "styled-components";

type ListProps = {
  todos: {
    [k: string]: FormDataEntryValue;
  }[];
};

export default function List({ todos }: ListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <ListItems key={todo.id as string}>
          <p>{todo.activity as string}</p>
        </ListItems>
      ))}
    </ul>
  );
}

const ListItems = styled.li`
  display: flex;
  margin: 0.5rem;
  padding: 0.3rem 0.3rem 0.3rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #f1eaf0;
`;
