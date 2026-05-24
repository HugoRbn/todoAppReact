const ButtonAdd = ({ addTask, type }: { addTask?: () => void, type: "submit" | "reset" | "button" }) => {
  return (
    <button className="button button-add" type={type} onClick={addTask}>
      Ajouter
    </button>
  );
};

export default ButtonAdd;
