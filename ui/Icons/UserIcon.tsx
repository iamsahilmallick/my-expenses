const UserIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* outer circle / head + shoulders container */}
      <circle cx="12" cy="8" r="3.2" stroke="#000000" strokeWidth="1.6" />
      {/* shoulders / torso */}
      <path
        d="M4 20c0-3.3137 2.6863-6 6-6h4c3.3137 0 6 2.6863 6 6"
        stroke="#000000"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

export default UserIcon;
