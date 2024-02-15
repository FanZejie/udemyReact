import { useRef } from "react";
import Input from "./Input";
export default function NewProject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    //然后这里要把这些数据传到app.jsx中管理，要用到状态提升
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }
  return (
    <div className="w-[35rem]">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-6 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}>
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={title} label="Title"></Input>
        <Input ref={description} label="Description" isTestArea={true}></Input>
        <Input type="date" ref={dueDate} label="Due Date"></Input>
      </div>
    </div>
  );
}
