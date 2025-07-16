const ProjectCard = ({ title, description }) => {
  return (
    <div className="border rounded-md p-4 bg-white">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-600">{description}</p>
      {/*Add image, links, and tech stack tags */}
    </div>
  );
};

export default ProjectCard;
