import { theme } from 'antd';

export default function SidebarLogo() {
  const { colorBgContainer } = theme.useToken().token;

  return (
    <div style={{ background: colorBgContainer }} className="p-4">
      <div className="h-8 rounded-md bg-slate-500 opacity-20"></div>
    </div>
  );
}
