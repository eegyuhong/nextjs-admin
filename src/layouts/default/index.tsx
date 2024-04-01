import { Layout } from 'antd';
import LayoutHeader from './header';
import LayoutContent from './content';
import LayoutSidebar from './sidebar';
import LayoutFooter from './footer';

export default function DefaultLayout(props: { children: React.ReactNode }) {
  return (
    <Layout>
      <LayoutSidebar />
      <Layout style={{ minHeight: '100vh' }}>
        <LayoutHeader />
        <LayoutContent>{props.children}</LayoutContent>
        <LayoutFooter />
      </Layout>
    </Layout>
  );
}
