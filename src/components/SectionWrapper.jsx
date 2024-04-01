import React from "react";

const SectionWrapper = ({ children, background, id, custom }) => {
  return (
    <div className={`${background} h-screen ${custom}`} id={id}>
      {children}
    </div>
  );
};

export default SectionWrapper;
