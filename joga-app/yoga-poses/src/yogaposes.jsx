import React, { useState } from "react";

const poses = [
  { name: "Downward Dog", image: "/poses/headroll.png" },
  { name: "Warrior II", image: "/poses/warrior-2.jpg" },
  { name: "Tree Pose", image: "/poses/tree-pose.jpg" },
  { name: "Child’s Pose", image: "/poses/childs-pose.jpg" },
];

const YogaPoses = () => {
  const [pose, setPose] = useState(poses[0]);

  const getRandomPose = () => {
    const randomIndex = Math.floor(Math.random() * poses.length);
    setPose(poses[randomIndex]);
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg max-w-sm mx-auto text-center bg-white">
      <h2 className="text-xl font-semibold">{pose.name}</h2>
      <img
        src={pose.image}
        alt={pose.name}
        className="w-full h-48 object-cover my-2 rounded-md"
      />
      <button
        onClick={getRandomPose}
        className="mt-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-700"
      >
        New Pose
      </button>
    </div>
  );
};

export default YogaPoses;
