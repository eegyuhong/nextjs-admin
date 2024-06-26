import { Button } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { useTheme } from '@/contexts/theme';
import { ACTION_TYPE } from '@/contexts/theme/reducer';

export default function SiderTrigger() {
  const {
    data: { collapsedSidebar },
    dispatch,
  } = useTheme();

  function handleClick() {
    dispatch({
      type: ACTION_TYPE.CHANGE_COLLAPSED_SIDEBAR,
      payload: !collapsedSidebar,
    });
  }

  return (
    <Button
      type="text"
      icon={collapsedSidebar ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      onClick={() => handleClick()}
      style={{
        fontSize: '16px',
        width: 64,
        height: 64,
      }}
    />
  );
}
