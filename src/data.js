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

/* Chart Data */

const actualValues = [17, 20, 18, 22, 15, 19];
const projectedValues = actualValues.map((v) => v + 5);

export const barGraphData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Projections",
      data: projectedValues,
      backgroundColor: "rgba(168, 197, 218, 0.5)",
      borderRadius: 4,
      barPercentage: 0.7,
      categoryPercentage: 0.8,
      grouped: false,
    },
    {
      label: "Actuals",
      data: actualValues,
      backgroundColor: "rgba(168, 197, 218, 1)",
      borderRadius: 0,
      barPercentage: 0.7,
      categoryPercentage: 0.8,
      grouped: false,
    },
  ],
};

export const barGraphOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
  scales: {
    x: {
      offset: true,
      ticks: {
        color: "rgba(28, 28, 28, 0.4)",
        font: {
          size: 12,
        },
      },
      grid: { display: false },
    },
    y: {
      beginAtZero: true,
      ticks: {
        color: "rgba(28, 28, 28, 0.4)",
        font: {
          size: 12,
        },
        callback: (value) => (value > 0 ? value + "M" : value),
      },
      grid: {
        color: "rgba(0,0,0,0.05)",
      },
    },
  },
};

export const doughnutChartData = {
  labels: ["Direct", "Affiliate", "E-mail", "Sponsored"],
  datasets: [
    {
      data: [34, 38, 10, 18],
      backgroundColor: ["#1c1c1c", "#BAEDBD", "#B1E3FF", "#95A4FC"],
      borderRadius: 10,
      spacing: 4,
    },
  ],
};

export const doughnutChartOptions = {
  cutout: "55%",
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
      backgroundColor: "#3a3a3a",
      bodyColor: "#fff",
      padding: 10,
      bodyFont: {
        size: 16,
      },
      borderRadius: 8,
      callbacks: {
        label: function (context) {
          return `${context.parsed}%`;
        },
      },
    },
  },
};

export const revenueChartLegends = [
  {
    id: "current-week",
    color: "#1C1C1C",
    title: "Current Week",
    info: "$58,211",
  },
  {
    id: "previous-week",
    color: "#A8C5DA",
    title: "Previous Week",
    info: "$68,768",
  },
];
