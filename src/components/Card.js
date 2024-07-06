import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export const Card = ({ todo }) => {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: todo.id,
      });
      const style = {
        transform: CSS.Translate.toString(transform),
        border: "1px solid black",
        padding: "10px",
        margin: "5px 0",
        
      };
    return (
      <div
      ref={setNodeRef} 
      style={style} 
      {...listeners} 
      {...attributes}
      >
        {todo.text}
      </div>
    );
  };