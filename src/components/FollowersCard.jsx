import PropTypes from "prop-types";

const FollowersCard = ({
  name = "User",
  image = "https://i.pinimg.com/736x/9f/f4/c8/9ff4c8c1b48e12a663e42fbcce7054a2.jpg",
  role = "unknwon",
}) => {
  return (
    <div
      className="bg-gray-600 p-10 rounded shadow text-white text-center mb-4"
      //   key={iteration}
    >
      <img
        src={image}
        alt={name}
        className="w-40 h-40 rounded-full mx-auto object-cover  shadow"
      />

      <div className="mt-2">
        <h4 className="text-lg font-semibold">{name}</h4>
        <p className="text-sm">{role}</p>
      </div>
    </div>
  );
};
FollowersCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default FollowersCard;
