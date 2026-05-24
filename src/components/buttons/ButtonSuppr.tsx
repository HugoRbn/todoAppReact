const ButtonSuppr = ({ removeTask }: { removeTask?: () => void}) => {
    return (
        <button className="button suppr" onClick={removeTask}>
            Supprimer
        </button>
    );
};

export default ButtonSuppr;