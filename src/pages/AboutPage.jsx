import { useParams } from "react-router-dom";
import FollowersCard from "../components/FollowersCard";

const AboutPage = () => {
  const { name } = useParams();
  return (
    <div className="m-10 ">
      <h4 className="font-semibold text-xl mb-3">About</h4>
      <div className="bg-white p-10 rounded">
        <h5>Welcome {name ? name : "Guest"}, this is About page!</h5>
      </div>
      <FollowersCard />
    </div>
  );
};
export default AboutPage;
