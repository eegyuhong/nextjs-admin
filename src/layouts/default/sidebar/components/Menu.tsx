import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Menu, MenuProps } from 'antd';
import { sideMenu, ISideMenu } from '@/common/menu';

type MenuItem = Required<MenuProps>['items'][number];
type IconModules = { [key: string]: any };

const items = getItem(sideMenu);

function getDynamicIcon(icon?: string) {
  if (!icon) return undefined;

  const DynamicIcon = dynamic(async () => {
    const res = (await import('@ant-design/icons')) as IconModules;
    return res[icon];
  });

  return <DynamicIcon />;
}

function getItem(menu: ISideMenu[], parenKey?: string): MenuItem[] {
  return menu.map(({ path, label, icon, children }) => {
    const key = parenKey ? parenKey + path : path;

    return {
      key,
      label: children ? label : <Link href={key}>{label}</Link>,
      icon: getDynamicIcon(icon),
      children: children && getItem(children, key),
    };
  });
}

export default function SidebarMenu() {
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const path = usePathname();

  const keys = path.split('/').reduce((pre: string[], cur) => {
    cur && pre.push(pre + '/' + cur);
    return pre;
  }, []);

  useEffect(() => setOpenKeys(keys), []);

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
