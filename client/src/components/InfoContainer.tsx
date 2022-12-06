import InfoSquare from "./InfoSquare";
/*
this component should handle squares dynamically, maybe resize squares depending on how many you want to display
*/
const InfoContainer = () => {
  return (
    <div className="info-container">
      <InfoSquare />
      <InfoSquare />
      <InfoSquare />
      <InfoSquare />
    </div>
  );
};

export default InfoContainer;
