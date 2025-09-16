import "./ActivityPanel.scss";

function ListItem({
  avatar = null,
  icon = null,
  iconBg = "",
  text = "",
  subtext = "",
}) {
  const hasIcon = icon && !avatar;

  return (
    <li className={`list__item ${subtext ? "" : "no-subtext"}`}>
      <div
        className={`list__item-avatar ${hasIcon ? "icon" : ""}`}
        style={{ backgroundColor: `${hasIcon ? iconBg : "transparent"}` }}
      >
        <img src={avatar || icon} alt="" />
      </div>

      <div className="list__item-info">
        <p className="list__item-info--text">{text}</p>

        {subtext && <span className="list__item-info--subtext">{subtext}</span>}
      </div>
    </li>
  );
}

export default ListItem;
