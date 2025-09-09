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
