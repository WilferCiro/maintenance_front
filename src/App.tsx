import { useState } from "react";
import { Breadcrumb, Button, ConfigProvider, Layout, Menu } from "antd";
import MaintenancePage from "./pages/maintenance/Maintenance";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b96b",
          borderRadius: 10,
        },
      }}
    >
      <Layout>
        <Header
          style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}
        >
          <div
            style={{
              float: "left",
              width: 120,
              height: 31,
              margin: "16px 24px 16px 0",
              background: "rgba(255, 255, 255, 0.2)",
            }}
          />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={new Array(3).fill(null).map((_, index) => ({
              key: String(index + 1),
              label: `nav ${index + 1}`,
            }))}
          />
        </Header>
        <Content className="site-layout" style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <main>            
            <MaintenancePage />
          </main>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          &copy; Copyright 2022
        </Footer>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
