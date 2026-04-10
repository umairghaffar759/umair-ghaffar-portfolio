import Scene from "./Scene";
import { useLoading } from "../../context/LoadingProvider";

const CharacterModel = () => {
  const { isLoading } = useLoading();

  return (
    <div 
      style={{ 
        opacity: isLoading ? 0 : 1, 
        transition: "opacity 1.5s ease-in-out",
        width: "100%",
        height: "100%"
      }}
    >
      {/* Scene ko humesha render karna hai taake 0% aage barhe */}
      <Scene />
    </div>
  );
};

export default CharacterModel;