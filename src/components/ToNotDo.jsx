
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

export const ToNotDo = ({ text, updateMode, deleteToNotDo }) => {
  return (
    <div className="to-not-do">
      <div className="text">{text}</div>
      <div className="icons">
        <BiEdit className="icon" onClick={updateMode}></BiEdit>
        <AiFillDelete className="icon" onClick={deleteToNotDo}></AiFillDelete>
      </div>
    </div>
  );
};
