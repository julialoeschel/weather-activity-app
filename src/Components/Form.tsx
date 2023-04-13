import { FormEvent } from "react";
import styled from "styled-components";
import { uid } from "uid";

type FormProps = {
  onAddActivity: (activity: { [k: string]: FormDataEntryValue }) => void;
};

export default function From({ onAddActivity }: FormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: { [k: string]: FormDataEntryValue } =
      Object.fromEntries(formData);
    event.currentTarget.reset();

    const fullEntry: { [k: string]: FormDataEntryValue } = {
      ...data,
      id: uid(),
    };

    onAddActivity(fullEntry);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Create your activity</h2>
      <label htmlFor="activity">activity: </label>
      <input
        type="text"
        name="activity"
        id="activity"
        placeholder="e.g.Beach Volleyball"
      />
      <Checkbox htmlFor="weather">
        is the activity for good weather?{" "}
        <input type="checkbox" name="weather" id="weather" />
      </Checkbox>

      <button>submit</button>
    </Form>
  );
}

const Form = styled.form`
  margin: 2rem 0;
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 20% 1fr;
  gap: 1rem;
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: #f1eaf0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  h2 {
    grid-column: 1 / 3;
  }
`;

const Checkbox = styled.label`
  grid-column: 1 / 3;
`;
