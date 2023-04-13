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
      <h2>HEADING</h2>
      <label htmlFor="activity">activity</label>
      <input type="text" name="activity" id="activity" />
      <Checkbox htmlFor="weather">
        is the activity for good weather?{" "}
        <input type="checkbox" name="weather" id="weather" />
      </Checkbox>

      <button>submit</button>
    </Form>
  );
}

const Form = styled.form`
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 20% 1fr;
  gap: 0.4rem;

  h2 {
    grid-column: 1 / 3;
  }
`;

const Checkbox = styled.label`
  grid-column: 1 / 3;
`;
