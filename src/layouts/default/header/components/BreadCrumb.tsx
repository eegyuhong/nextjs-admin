import { Breadcrumb } from 'antd';
import { usePathname } from 'next/navigation';
import { sideMenu, SideMenu } from '@/common/menu';
import { getPathArray } from '@/utils/path';

export default function BreadCrumb() {
  const path = usePathname();
  const pathArr = getPathArray(path);
  const items = getItem(pathArr, sideMenu);

  function getItem(pathArr: string[], menu: SideMenu[]) {
    const result = [];
    let parent = [...menu];

    for (const path of pathArr) {
      const self = parent.filter((el) => el.path === path)[0];
      if (self.children) parent = [...self.children];
      result.push(self.label);
    }

    return result;
  }

  return <Breadcrumb items={items.map((el) => ({ title: el }))} />;
}
