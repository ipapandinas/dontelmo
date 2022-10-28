import React, { useRef, useState } from "react";

const PortalButton = () => {
  const buttonRef = useRef(null);
  const [isPortalOpen, setPortalOpen] = useState(false);

  const handleClick = () => {
    setPortalOpen(true);
  };

  return (
    <>
      <button
        className="SideMenu__button"
        type="button"
        onClick={handleClick}
        ref={buttonRef}
      >
        Resume
      </button>
      {/* {isPortalOpen && buttonRef?.current && (
        <MorphPortal
          destination="/resume"
          top={buttonRef.current.getBoundingClientRect().top}
          left={buttonRef.current.getBoundingClientRect().left}
        />
      )} */}
    </>
  );
};

export default PortalButton;
