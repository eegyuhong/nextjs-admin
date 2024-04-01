import {
  AppstoreOutlined,
  ContainerOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

export interface SideMenu {
  label: string;
  path: string;
  icon?: React.ForwardRefExoticComponent<any>;
  children?: SideMenu[];
}

export const sideMenu: SideMenu[] = [
  {
    label: 'about',
    path: '/about',
    icon: AppstoreOutlined,
  },
  {
    label: '테스트1',
    path: '/test1',
    icon: ContainerOutlined,
    children: [
      {
        label: 'test1_1',
        path: '/test1_1',
      },
      {
        label: 'test1_2',
        path: '/test1_2',
        children: [
          {
            label: 'test1_2_1',
            path: '/test1_2_1',
          },
          {
            label: 'test1_2_2',
            path: '/test1_2_2',
          },
        ],
      },
    ],
  },
  {
    label: '테스트2',
    path: '/test2',
    icon: PieChartOutlined,
  },
];
