import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, MenuProps } from 'antd';
import { sideMenu, ISideMenu } from '@/common/menu';
import { getPathArray } from '@/utils/path';

type MenuItem = Required<MenuProps>['items'][number];

const items = getItem(sideMenu);

function getItem(menu: ISideMenu[], parenKey?: string): MenuItem[] {
  return menu.map(({ path, label, icon: Icon, children }) => {
    const key = parenKey ? parenKey + path : path;

    return {
      key,
      label: children ? label : <Link href={key}>{label}</Link>,
      icon: Icon ? <Icon /> : undefined,
      children: children && getItem(children, key),
    };
  });
}

export default function SidebarMenu() {
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const path = usePathname();
  const pathArr = getPathArray(path);

  useEffect(() => setOpenKeys(pathArr), []);

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={[path]}
      openKeys={openKeys}
      onOpenChange={(keys: string[]) => {
        setOpenKeys(keys);
      }}
      items={items}
    />
  );
}
