import { Button, Dropdown, MenuProps } from 'antd';
import { SunOutlined, MoonFilled, DesktopOutlined } from '@ant-design/icons';
import { useTheme } from '@/contexts/theme';
import { ACTION_TYPE } from '@/contexts/theme/reducer';

const items: MenuProps['items'] = [
  {
    key: 'light',
    label: (
      <div className="flex gap-2">
        <SunOutlined />
        Light
      </div>
    ),
  },
  {
    key: 'system',
    label: (
      <div className="flex gap-2">
        <DesktopOutlined />
        System
      </div>
    ),
  },
  {
    key: 'dark',
    label: (
      <div className="flex gap-2">
        <MoonFilled />
        Dark
      </div>
    ),
  },
];

export default function DarkModeTrigger() {
  const {
    data: { darkModeStatus },
    dispatch,
  } = useTheme();

  const onClick: MenuProps['onClick'] = ({ key }) => {
    dispatch({
      type: ACTION_TYPE.CHANGE_DARKMODE_STATUS,
      payload: key,
    });
  };

  return (
    <Dropdown menu={{ items, onClick }} placement="bottomRight">
      <Button
        type="text"
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
        icon={
          darkModeStatus === 'dark' ? (
            <MoonFilled />
          ) : darkModeStatus === 'light' ? (
            <SunOutlined />
          ) : (
            <DesktopOutlined />
          )
        }
      />
    </Dropdown>
  );
}
