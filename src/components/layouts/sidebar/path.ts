import { sidebarConfigs } from "@/components/layouts/sidebar/app-sidebar";

type SidebarItem = {
  title: string;
  url: string;
  items?: SidebarItem[];
};

/**
 * Duyệt đệ quy để tìm đường dẫn breadcrumb đầy đủ theo pathname.
 * @param pathname - đường dẫn hiện tại (vd: /notes/my-notes)
 */
export function findSidebarPath(pathname: string): SidebarItem[] {
  const allSections = [
    ...sidebarConfigs.navMain,
    ...sidebarConfigs.projects,
    ...sidebarConfigs.navSecondary,
  ];

  return findPathRecursive(allSections, pathname);
}

function findPathRecursive(
  items: SidebarItem[],
  pathname: string,
  parentTrail: SidebarItem[] = []
): SidebarItem[] {
  for (const item of items) {
    // Nếu URL khớp chính xác -> trả về breadcrumb từ cha đến con
    if (item.url === pathname) {
      return [...parentTrail, item];
    }

    // Nếu có children -> duyệt tiếp
    if (item.items?.length) {
      const found = findPathRecursive(item.items, pathname, [
        ...parentTrail,
        item,
      ]);
      if (found.length) return found;
    }
  }

  return [];
}
