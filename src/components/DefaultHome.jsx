import noProjectImage from "../assets/no-projects.png";
import CustomButton from "./CustomButton";
export default function DefaultHome({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={noProjectImage}
        alt="No projects"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or create a new one
      </p>
      <p>
        <CustomButton onClick={onStartAddProject} label="Creat new project" />
      </p>
    </div>
  );
}
