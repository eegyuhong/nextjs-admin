import { Layout } from 'antd';
import LayoutHeader from './header';
import LayoutContent from './content';
import LayoutSidebar from './sidebar';

export default function DefaultLayout(props: { children: React.ReactNode }) {
  return (
    <Layout>
      <LayoutSidebar />
      <Layout style={{ minHeight: '100vh' }}>
        <LayoutHeader />
        <LayoutContent>{props.children}</LayoutContent>
      </Layout>
    </Layout>
  );
}
