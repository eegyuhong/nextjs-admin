import { Layout } from 'antd';
import LayoutHeader from './header';
import LayoutContent from './content';
import LayoutSidebar from './sidebar';
import LayoutFooter from './footer';
import LayoutTopLoader from './topLoader';

export default function DefaultLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <LayoutTopLoader />
      <Layout style={{ minHeight: '100vh' }}>
        <LayoutSidebar />
        <Layout>
          <LayoutHeader />
          <LayoutContent>{props.children}</LayoutContent>
          <LayoutFooter />
        </Layout>
      </Layout>
    </>
  );
}
