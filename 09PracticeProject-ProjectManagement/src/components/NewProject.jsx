import { useRef } from "react";
import Input from "./Input";
import Modal from "./Model";
export default function NewProject({ onAdd, onCancle }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    //然后这里要把这些数据传到app.jsx中管理，要用到状态提升
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate === ""
    ) {
      //展示错误界面
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }
  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">you forgot to enter a value.</p>
        <p className="text-stone-600 mb-4">
          please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem]">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancle}>
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
          <Input
            ref={description}
            label="Description"
            isTestArea={true}></Input>
          <Input type="date" ref={dueDate} label="Due Date"></Input>
        </div>
      </div>
    </>
  );
}
