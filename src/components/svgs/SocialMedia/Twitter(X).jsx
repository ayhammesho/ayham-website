import React from "react";

const Twitter = ({ polygonClass, iconClass, className }) => {
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
        d="M15 17H17.8409L34.8861 41.9997H32.0453L15 17Z"
        fill="currentColor"
      />
      <path
        className={iconClass}
        d="M20.1143 17H22.9551L40.0004 41.9997H37.1595L20.1143 17Z"
        fill="currentColor"
      />
      <path
        className={iconClass}
        d="M17.2725 17H22.9542V19.5H17.2725V17Z"
        fill="currentColor"
      />
      <path
        className={iconClass}
        d="M32.0449 42H37.7267V39.5H32.0449V42Z"
        fill="currentColor"
      />
      <path
        className={iconClass}
        d="M34.8863 17H38.8635L19.5456 41.9997H15.5684L34.8863 17Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Twitter;
