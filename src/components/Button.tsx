type ButtonProps = {
  onClick: () => void;
  title: string;
};

export const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      style={{
        backgroundColor: "blue",
        color: "white",
        padding: "0.5rem",
        width: "100%",
        height: "2rem",
      }}
    >
      {title}
    </button>
  );
};
