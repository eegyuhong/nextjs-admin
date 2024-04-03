import { signOut, useSession } from 'next-auth/react';
import { Avatar, Button, Dropdown, MenuProps } from 'antd';
import { PoweroffOutlined, UserOutlined } from '@ant-design/icons';

const items: MenuProps['items'] = [
  {
    key: 'signout',
    label: (
      <div className="flex gap-2">
        <PoweroffOutlined />
        Sign out
      </div>
    ),
  },
];

export default function UserDropdown() {
  const { data } = useSession();

  const onClick: MenuProps['onClick'] = ({ key }) => {
    if (key === 'signout') signOut();
  };

  return (
    <Dropdown menu={{ items, onClick }} placement="bottomRight">
      <Button
        type="text"
        style={{
          fontSize: '16px',
          height: 64,
        }}
      >
        <Avatar icon={<UserOutlined />} />
        <span className="ml-2">{data?.user?.email ?? ''}</span>
      </Button>
    </Dropdown>
  );
}
