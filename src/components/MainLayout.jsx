import { Layout, Menu } from "antd";
import { useLocation, Outlet } from "react-router-dom";
import items from "./MenuItems";
import styles from "./MainLayout.module.css";

const { Content, Sider } = Layout;

function MainLayout() {
  const location = useLocation();
  const selectedKey = location.pathname;

  return (
    <Layout>
      <Sider
        className={styles.sider}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
        collapsible
        breakpoint="lg"
        collapsedWidth="80"
      >
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          items={items}
        />
      </Sider>
      <Layout className={styles.layout}>
        <Content className={styles.content}>
          <div className={styles.innerContent}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
