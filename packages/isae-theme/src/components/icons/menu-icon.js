import React from "react";

const HamburgerIcon = ({ size, color }) => {
  return (
    <svg
      height={size}
      width={size}
      color={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Open menu</title>
      <g fill="currentColor">
        <rect height="3" width="23" rx="1" ry="1" x=".5" y="2.5" />
        <rect height="3" width="23" rx="1" ry="1" x=".5" y="10.5" />
        <rect height="3" width="23" rx="1" ry="1" x=".5" y="18.5" />
      </g>
    </svg>
  );
};

export default HamburgerIcon;