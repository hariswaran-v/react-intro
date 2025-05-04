import { useParams } from "react-router-dom";
import Accrodion from "../components/Accordion";

const AboutPage = () => {
  const { name } = useParams();

  return (
    <div className="m-10 ">
      <h4 className="font-semibold text-xl mb-3">About</h4>
      <div className="bg-white p-10 rounded">
        <h5>Welcome {name ? name : "Guest"}, this is About page!</h5>
      </div>
      <div className="bg-white my-10 p-10 rounded">
        <h4 className="font-semibold text-2xl ">FAQs</h4>
        <div className="my-5 space-y-3">
          <Accrodion
            title="Is your internship free for all?"
            desc="Yes, it is!"
          />
          <Accrodion
            title="Is your internship free for all?"
            desc="Yes, it is!"
          />
          <Accrodion
            title="Is your internship free for all?"
            desc="Yes, our internship program is completely free and open to students, freshers, and professionals across all fields."
          />
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
