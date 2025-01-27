

const Square = ({ children, isSelected, onClick }) => {
  const className = `square ${isSelected ? "selected" : ""}`;
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export default Square;
