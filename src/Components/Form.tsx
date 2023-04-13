import { FormEvent } from "react";

type FormProps = {
  onAddActivity: (activity: string) => void;
};

export default function From() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    event.currentTarget.reset();

    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>HEADING</h2>
      <label htmlFor="activity">activity</label>
      <input type="text" name="activity" id="activity" />
      <label htmlFor="weather">is the activity for good weather?</label>
      <input type="checkbox" name="weather" id="weather" />
      <button>submit</button>
    </form>
  );
}
