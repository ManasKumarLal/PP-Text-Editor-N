import React from "react";
import TextForm from "../Components/TextForm";
import KeyFeatures from "../Components/KeyFeatures";

const Home = (props) => {
  return (
    <div>
      <TextForm heading="Try TextUtils - Customize your text✍✍" mode={props.mode} />
      <KeyFeatures heading="Key Features" mode={props.mode} />
    </div>
  );
};

export default Home;
