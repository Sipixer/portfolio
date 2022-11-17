import "./badge.css";

export const Badge = ({ children, icon }) => {
  return (
    <div className="badge">
      <img src={icon} alt="React Icon" className="badgeicon" />
      <p className="badgename">{children}</p>
    </div>
  );
};
