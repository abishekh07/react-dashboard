import { PieChartIcon } from "../../icons/PieChartIcon";
import { ShoppingBagIcon } from "../../icons/ShoppingBagIcon";
import { FolderIcon } from "../../icons/FolderIcon";
import { BookIcon } from "../../icons/BookIcon";
import { IDBadgeIcon } from "../../icons/IDBadgeIcon";
import { IDCardIcon } from "../../icons/IDCardIcon";
import { UsersIcon } from "../../icons/UsersIcon";
import { NotebookIcon } from "../../icons/NotebookIcon";
import { ChatIcon } from "../../icons/ChatIcon";

export function IconComponent({ listItem }) {
  const iconMap = {
    "pie-chart": PieChartIcon,
    "shopping-bag": ShoppingBagIcon,
    folder: FolderIcon,
    book: BookIcon,
    "id-badge": IDBadgeIcon,
    "id-card": IDCardIcon,
    users: UsersIcon,
    notebook: NotebookIcon,
    "chat-teardrops": ChatIcon,
  };

  const Icon = iconMap[listItem?.icon] || "";
  const size = listItem?.icon === "shopping-bag" ? 24 : 20;

  return <>{Icon && <Icon width={size} height={size} />}</>;
}
