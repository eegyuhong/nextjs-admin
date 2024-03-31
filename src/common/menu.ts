export interface ISideMenu {
  label: string;
  path: string;
  icon?: string;
  children?: ISideMenu[];
}

export const sideMenu: ISideMenu[] = [
  {
    label: '홈',
    path: '/',
    icon: 'AppstoreOutlined',
  },
  {
    label: '테스트1',
    path: '/test1',
    icon: 'ContainerOutlined',
    children: [
      {
        label: '1',
        path: '/test1_1',
      },
      {
        label: '2',
        path: '/test1_2',
        children: [
          {
            label: '1',
            path: '/test1_2_1',
          },
          {
            label: '2',
            path: '/test1_2_2',
          },
        ],
      },
    ],
  },
  {
    label: '테스트2',
    path: '/test2',
    icon: 'PieChartOutlined',
  },
];
