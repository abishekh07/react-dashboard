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
        icon: "pie-chart",
      },
      {
        id: 2,
        title: "eCommerce",
        url: "/",
        icon: "shopping-bag",
        menuItems: ["Products", "Orders", "Customers"],
      },
      {
        id: 3,
        title: "Projects",
        url: "/",
        icon: "folder",
        menuItems: ["Active Projects", "Archived Projects", "Create New"],
      },
      {
        id: 4,
        title: "Online Courses",
        url: "/",
        icon: "book",
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
        icon: "id-badge",
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
        icon: "id-card",
        menuItems: ["Settings", "Billing", "Security"],
      },
      {
        id: 3,
        title: "Corporate",
        url: "/",
        icon: "users",
        menuItems: ["Teams", "Departments", "Announcements"],
      },
      {
        id: 4,
        title: "Blog",
        url: "/",
        icon: "notebook",
        menuItems: ["Posts", "Categories", "Tags"],
      },
      {
        id: 5,
        title: "Social",
        url: "/",
        icon: "chat-teardrops",
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

export const revenueByLocation = [
  {
    id: "new-york",
    title: "New York",
    revenue: "72K",
    progress: 74,
  },
  {
    id: "san-francisco",
    title: "San Francisco",
    revenue: "39K",
    progress: 41,
  },
  {
    id: "sydney",
    title: "Sydney",
    revenue: "25K",
    progress: 48,
  },
  {
    id: "singapore",
    title: "Singapore",
    revenue: "61K",
    progress: 61,
  },
];

export const topSellingProducts = [
  {
    id: "product-1",
    title: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: 82,
    amount: "$6,518.18",
  },
  {
    id: "product-2",
    title: "Marco Lightweight Shirt",
    price: "$128.50",
    quantity: 37,
    amount: "$4,754.50",
  },
  {
    id: "product-3",
    title: "Half Sleeve Shirt",
    price: "$39.99",
    quantity: 64,
    amount: "$2,559.36",
  },
  {
    id: "product-4",
    title: "Lightweight Jacket",
    price: "$20.00",
    quantity: 184,
    amount: "$3,680.00",
  },
  {
    id: "product-5",
    title: "Marco Shoes",
    price: "$79.49",
    quantity: 64,
    amount: "$1,965.81",
  },
];

export const totalSales = [
  {
    id: "tot-sales-1",
    title: "Direct",
    amount: 300.56,
    color: "#1c1c1c",
  },
  {
    id: "tot-sales-2",
    title: "Affiliate",
    amount: 135.18,
    color: "#BAEDBD",
  },
  {
    id: "tot-sales-3",
    title: "Sponsored",
    amount: 154.02,
    color: "#95A4FC",
  },
  {
    id: "tot-sales-4",
    title: "E-mail",
    amount: 48.96,
    color: "#B1E3FF",
  },
];
