import React from "react";

const Facebook = ({ polygonClass, iconClass, className }) => {
  return (
    <svg
      className={className}
      width="55"
      height="59"
      viewBox="0 0 55 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={polygonClass}
        d="M25.3983 2.47324C26.6865 1.67769 28.3135 1.67769 29.6017 2.47324L48.4174 14.0928C49.5974 14.8215 50.3157 16.1094 50.3157 17.4962V41.3332C50.3157 42.72 49.5974 44.0079 48.4174 44.7366L29.6017 56.3562C28.3135 57.1517 26.6865 57.1517 25.3983 56.3562L6.58257 44.7366C5.40262 44.0079 4.6843 42.72 4.6843 41.3332V17.4962C4.6843 16.1094 5.40262 14.8215 6.58257 14.0928L25.3983 2.47324Z"
        stroke="currentColor"
        fill="none"
        stroke-width="2"
      />
      <path
        className={iconClass}
        d="M40 29.5C40 22.6 34.4 17 27.5 17C20.6 17 15 22.6 15 29.5C15 35.55 19.3 40.5875 25 41.75V33.25H22.5V29.5H25V26.375C25 23.9625 26.9625 22 29.375 22H32.5V25.75H30C29.3125 25.75 28.75 26.3125 28.75 27V29.5H32.5V33.25H28.75V41.9375C35.0625 41.3125 40 35.9875 40 29.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Facebook;
