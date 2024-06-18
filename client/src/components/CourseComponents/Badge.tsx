interface Props {
  text: string;
  color: string;
}

const Badge = ({ text, color }: Props) => {
  const btnStyle = {
    border: `1px solid ${color}`,
    borderRadius:`15px`,
    padding:`.25rem 1rem`,
    fontSize:".75rem",
    marginBottom:".5rem",
  };
  return (
    <>
      <button style={btnStyle}>{text}</button>
    </>
  );
};

export default Badge;
