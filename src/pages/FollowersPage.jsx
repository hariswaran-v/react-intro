import React from "react";
import FollowersCard from "../components/FollowersCard";

const FollowersPage = () => {
  return (
    <div className="m-10">
      <h4 className="text-2xl font-semibold mb-5">My team !</h4>
      <div className="grid grid-cols-4 gap-5">
        {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((iteration) => (
         
        ))} */}
        <FollowersCard
          name="Bruce Lee"
          role="Acting roles in several influential martial arts films."
          image="https://i.pinimg.com/736x/4d/e4/df/4de4dfdbff4e0c52e92dea6f3467c552.jpg"
        />
        <FollowersCard
          name="Cristiano Ronaldo "
          role="Football player"
          image="https://i.pinimg.com/736x/01/e5/de/01e5de8cc2feb59601ab5a0c9470e8a3.jpg"
        />
        <FollowersCard
          name="Ajith"
          role="Actor, Racer, Creator"
          image="https://i.pinimg.com/736x/a1/78/8b/a1788b65e2eeda6c91e1678634926708.jpg"
        />
        <FollowersCard
          name="Hariswaran"
          role="MERN Stack Developer"
          image="https://github.com/hariswaran-v.png"
        />
      </div>
    </div>
  );
};

export default FollowersPage;
