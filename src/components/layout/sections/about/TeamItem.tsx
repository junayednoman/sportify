type TTeamItemProps = {
  image: string;
  name: string;
  designation: string;
};

const TeamItem = ({ image, name, designation }: TTeamItemProps) => {
  return (
    <div className="text-center">
      <img className="lg:w-[220px] w-[155px] rounded-full mx-auto" src={image} alt="" />
      <h4 className="lg:text-2xl font-semibold mt-4">{name}</h4>
      <p>{designation}</p>
    </div>
  );
};

export default TeamItem;
