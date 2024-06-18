interface Props {
  name: string;
  email: string;
  role: string;
}

const Card = ({ email, name, role }: Props) => {
  return (
    <div>
      <h1 className="text-2xl text-fuchsia-800 font-medium">{name}</h1>
      <h2 className="text-2xl font-medium text-sky-700">{email}</h2>
      <p className="text-2xl font-bold">{role}</p>
    </div>
  );
};

export default Card;
