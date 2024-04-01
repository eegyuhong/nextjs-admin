import { Button } from 'antd';
import { SunOutlined, MoonFilled } from '@ant-design/icons';
import { useTheme } from '@/contexts/theme';
import { ACTION_TYPE } from '@/contexts/theme/reducer';

export default function DarkModeTrigger() {
  const {
    data: { darkModeStatus },
    dispatch,
  } = useTheme();
  const isDarkMode = darkModeStatus == 'dark';

  function handleClick() {
    dispatch({
      type: ACTION_TYPE.CHANGE_DARKMODE_STATUS,
      payload: isDarkMode ? 'light' : 'dark',
    });
  }

  return (
    <Button
      type="text"
      icon={isDarkMode ? <MoonFilled /> : <SunOutlined />}
      onClick={() => handleClick()}
      style={{
        fontSize: '16px',
        width: 64,
        height: 64,
      }}
    />
  );
}
