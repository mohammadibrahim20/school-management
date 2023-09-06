import GenaralInfo from "../Box/GenaralInfo";
import AboutCollege from "./AboutCollege";
import Notice from "./Notice";

const LeftSide = () => {
  return (
    <>
      <AboutCollege />
      <Notice />
      <div className="grid md:grid-cols-2 gap-5 my-10">
        <GenaralInfo />
        <GenaralInfo />
        <GenaralInfo />
        <GenaralInfo />
        <GenaralInfo />
        <GenaralInfo />
      </div>
    </>
  );
};

export default LeftSide;
