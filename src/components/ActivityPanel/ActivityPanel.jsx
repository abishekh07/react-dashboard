import "./ActivityPanel.scss";

import ListItem from "./ListItem";
import { activities, contacts, notifications } from "../../data";

function ActivityPanel() {
  return (
    <div className="activity-panel">
      <div className="notifications">
        <h2 className="list__heading">Notifications</h2>

        <ul className="list">
          {notifications.map((notification) => (
            <ListItem
              key={notification.id}
              icon={notification.icon}
              iconBg={notification.iconBg}
              text={notification.text}
              subtext={notification.subtext}
            />
          ))}
        </ul>
      </div>

      <div className="activities">
        <h2 className="list__heading">Activities</h2>

        <ul className="list">
          {activities.map((activity) => (
            <ListItem
              key={activity.id}
              avatar={activity.avatar}
              text={activity.text}
              subtext={activity.subtext}
            />
          ))}
        </ul>
      </div>

      <div className="contacts">
        <h2 className="list__heading">Contacts</h2>

        <ul className="list">
          {contacts.map((contact) => (
            <ListItem
              key={contact.id}
              avatar={contact.avatar}
              text={contact.text}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ActivityPanel;
