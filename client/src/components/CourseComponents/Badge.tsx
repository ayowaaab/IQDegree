interface Props {
  text: string;
}

const Badge = ({ text }: Props) => {
  return (
    <>
      <button className="text-xs rounded-3xl mb-2 border-[1px] border-sky-500 px-[1rem] py-[0.25rem]">
        {text}
      </button>
    </>
  );
};

export default Badge;
