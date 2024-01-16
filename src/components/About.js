import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about-page h-screen">
      <h1>welcome from About Page</h1>
      <User name={"Ajinkya Ashok (function)"} location={"Pune"} />
      <UserClass name={"Ajinkya Ashok(class)"} location={"Galway"} />
    </div>
  );
};

export default About;
