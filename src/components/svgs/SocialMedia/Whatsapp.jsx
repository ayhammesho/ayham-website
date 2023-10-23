import React from "react";

const Whatsapp = ({ polygonClass, iconClass, className }) => {
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
        d="M36.3568 20.6559C35.205 19.4924 33.8331 18.57 32.3212 17.9423C30.8092 17.3147 29.1873 16.9944 27.5502 17.0001C20.691 17.0001 15.1005 22.5905 15.1005 29.4498C15.1005 31.6483 15.6784 33.784 16.7588 35.6684L15 42.1257L21.5955 40.392C23.4171 41.3845 25.4648 41.9121 27.5502 41.9121C34.4095 41.9121 40 36.3217 40 29.4624C40 26.1332 38.706 23.0051 36.3568 20.6559ZM27.5502 39.8016C25.691 39.8016 23.8693 39.2991 22.2739 38.3569L21.897 38.1307L17.9774 39.1609L19.0201 35.3418L18.7688 34.9523C17.7359 33.3028 17.1874 31.3961 17.1859 29.4498C17.1859 23.7463 21.8342 19.0981 27.5377 19.0981C30.3015 19.0981 32.902 20.1785 34.8492 22.1383C35.8134 23.098 36.5775 24.2396 37.0972 25.4968C37.6169 26.7541 37.8819 28.102 37.8769 29.4624C37.902 35.1659 33.2538 39.8016 27.5502 39.8016ZM33.2286 32.0629C32.9146 31.9121 31.3819 31.1584 31.1055 31.0453C30.8166 30.9448 30.6156 30.8945 30.402 31.1961C30.1884 31.5101 29.598 32.2136 29.4221 32.4146C29.2462 32.6282 29.0578 32.6533 28.7437 32.49C28.4296 32.3393 27.4246 32.0001 26.2437 30.9448C25.3141 30.1157 24.6985 29.0981 24.51 28.784C24.3342 28.4699 24.4849 28.3066 24.6482 28.1433C24.7864 28.0051 24.9623 27.779 25.1131 27.6031C25.2638 27.4272 25.3266 27.289 25.4271 27.088C25.5276 26.8744 25.4774 26.6986 25.402 26.5478C25.3266 26.3971 24.6985 24.8644 24.4472 24.2363C24.196 23.6332 23.9322 23.7086 23.7437 23.6961H23.1407C22.9271 23.6961 22.6005 23.7714 22.3116 24.0855C22.0352 24.3996 21.2312 25.1533 21.2312 26.686C21.2312 28.2187 22.3492 29.7011 22.5 29.9021C22.6508 30.1157 24.6985 33.2564 27.8141 34.6006C28.5553 34.9272 29.1332 35.1157 29.5854 35.2538C30.3266 35.4925 31.005 35.4548 31.5452 35.3795C32.1482 35.2915 33.392 34.6257 33.6432 33.8971C33.907 33.1684 33.907 32.5528 33.8191 32.4146C33.7312 32.2765 33.5427 32.2136 33.2286 32.0629Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Whatsapp;
