import React from "react";

const Menu = (props) => {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path fill="currentColor" d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z" />
    </svg>
  );
};
// Cross SVG
{
  /* <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
>
  <path
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-width="2"
    d="M20 20L4 4m16 0L4 20"
  />
</svg>; */
}
export default Menu;
