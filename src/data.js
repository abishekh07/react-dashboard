import BugIcon from "./assets/icons/bug.svg";
import UserIcon from "./assets/icons/user.svg";
import BroadcastIcon from "./assets/icons/broadcast.svg";

import Avatar01 from "./assets/images/activity-01.png";
import Avatar02 from "./assets/images/activity-02.png";
import Avatar03 from "./assets/images/activity-03.png";
import Avatar04 from "./assets/images/activity-04.png";
import Avatar05 from "./assets/images/activity-05.png";

import NataliAvatar from "./assets/images/natali.png";
import DrewAvatar from "./assets/images/drew.png";
import OrlandoAvatar from "./assets/images/orlando.png";
import AndiAvatar from "./assets/images/andi.png";
import KateAvatar from "./assets/images/kate.png";
import KorayAvatar from "./assets/images/koray.png";

export const menu = [
  {
    id: 1,
    title: "Dashboards",
    listItems: [
      {
        id: 1,
        title: "Default",
        url: "/",
        icon: "pie-chart.svg",
      },
      {
        id: 2,
        title: "eCommerce",
        url: "/",
        icon: "shopping-bag.svg",
        menuItems: ["Products", "Orders", "Customers"],
      },
      {
        id: 3,
        title: "Projects",
        url: "/",
        icon: "folder.svg",
        menuItems: ["Active Projects", "Archived Projects", "Create New"],
      },
      {
        id: 4,
        title: "Online Courses",
        url: "/",
        icon: "book.svg",
        menuItems: ["All Courses", "My Learning", "Certificates"],
      },
    ],
  },
  {
    id: 2,
    title: "Pages",
    listItems: [
      {
        id: 1,
        title: "User Profile",
        url: "/",
        icon: "id-badge.svg",
        menuItems: [
          "Overview",
          "Projects",
          "Campaigns",
          "Documents",
          "Followers",
        ],
      },
      {
        id: 2,
        title: "Account",
        url: "/",
        icon: "id-card.svg",
        menuItems: ["Settings", "Billing", "Security"],
      },
      {
        id: 3,
        title: "Corporate",
        url: "/",
        icon: "users.svg",
        menuItems: ["Teams", "Departments", "Announcements"],
      },
      {
        id: 4,
        title: "Blog",
        url: "/",
        icon: "notebook.svg",
        menuItems: ["Posts", "Categories", "Tags"],
      },
      {
        id: 5,
        title: "Social",
        url: "/",
        icon: "chat-teardrops.svg",
        menuItems: ["Feed", "Messages", "Groups"],
      },
    ],
  },
];

export const notifications = [
  {
    id: "notification-1",
    icon: BugIcon,
    iconBg: "#e3f5ff",
    text: "You have a bug that needs to be fixed",
    subtext: "Just now",
  },
  {
    id: "notification-2",
    icon: UserIcon,
    iconBg: "#E5ECF6",
    text: "New user registered",
    subtext: "59 minutes ago",
  },
  {
    id: "notification-3",
    icon: BugIcon,
    iconBg: "#e3f5ff",
    text: "You have a bug that needs to be fixed",
    subtext: "12 hours ago",
  },
  {
    id: "notification-4",
    icon: BroadcastIcon,
    iconBg: "#E5ECF6",
    text: "Andi Lane subscribed to you",
    subtext: "Today, 11:59 AM",
  },
];

export const activities = [
  {
    id: "activity-1",
    avatar: Avatar01,
    text: "You have a bug that needs to be fixed",
    subtext: "Just now",
  },
  {
    id: "activity-2",
    avatar: Avatar02,
    text: "Released new version",
    subtext: "59 minutes ago",
  },
  {
    id: "activity-3",
    avatar: Avatar03,
    text: "Submitted a bug",
    subtext: "12 hours ago",
  },
  {
    id: "activity-4",
    avatar: Avatar04,
    text: "Modified A data in Page X",
    subtext: "Today, 11:59 AM",
  },
  {
    id: "activity-5",
    avatar: Avatar05,
    text: "Deleted a page in Project X",
    subtext: "Feb 2, 2023",
  },
];

export const contacts = [
  {
    id: "natali",
    avatar: NataliAvatar,
    text: "Natali Craig",
  },
  {
    id: "drew",
    avatar: DrewAvatar,
    text: "Drew Cano",
  },
  {
    id: "orlando",
    avatar: OrlandoAvatar,
    text: "Orlando Diggs",
  },
  {
    id: "andi",
    avatar: AndiAvatar,
    text: "Andi Lane",
  },
  {
    id: "kate",
    avatar: KateAvatar,
    text: "Kate Morrison",
  },
  {
    id: "koray",
    avatar: KorayAvatar,
    text: "Koray Okumus",
  },
];
