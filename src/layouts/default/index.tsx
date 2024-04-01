import { Layout } from 'antd';
import LayoutHeader from './header';
import LayoutContent from './content';
import LayoutSidebar from './sidebar';
import LayoutFooter from './footer';

export default function DefaultLayout(props: { children: React.ReactNode }) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <LayoutSidebar />
      <Layout>
        <LayoutHeader />
        <LayoutContent>{props.children}</LayoutContent>
        <LayoutFooter />
      </Layout>
    </Layout>
  );
}
