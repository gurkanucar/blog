import React, { useState } from "react";

const SocialContactButton = (props) => {
  const [hoverLockIcon, setHoverLockIcon] = useState(false);
  return (
    <div
      onMouseOver={() => setHoverLockIcon(true)}
      onMouseOut={() => setHoverLockIcon(false)}
      style={{}}
    >
      <input
        src={props.image}
        type="image"
        onClick={() => {
          console.log(props.info, props.link);
          var win = window.open(props.link, "_blank");
          win.focus();
        }}
        style={{
          marginLeft: 50,
          marginRight: 50,
          marginTop: 50,
          height: props.height ? props.height : "42px",
          // width: props.width ? props.height : "40px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter:
            hoverLockIcon === true
              ? "drop-shadow(0 0 0.75rem rgb(255, 255, 255))"
              : null,
          transform: hoverLockIcon === true ? "scale(1.5,1.5)" : "scale(1,1)",
        }}
        alt="..."
      />
    </div>
  );
};

export default SocialContactButton;
