import { Button, Card, Divider, Empty, Form, Input, Modal, Steps } from "antd";
import { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

const description = "description";

const MaintenancePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState("Not Found");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>

      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setData(result.getText());
          else setData("Not Found");
        }}
      />
      <p>{data}</p>
      <Card>
        <Empty
          image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          imageStyle={{
            height: 200,
          }}
          description={<span>Aún no hay mantenimientos en curso</span>}
        >
          <Button type="primary">Empezar mantenimiento ahora</Button>
        </Empty>
      </Card>
      <Card>
        <Steps
          current={1}
          items={[
            {
              title: "Inicio",
              description: "5 de enero de 2022, 05:55 pm",
            },
            {
              title: "En progreso",
              description: "Mantenimiento en progreso",
            },
            {
              title: "Finalizado",
              description: "Mantenimiento finalizado",
            },
          ]}
        />
        <Divider />
        <Button type="primary" onClick={showModal}>
          Finalizar mantenimiento ahora
        </Button>
      </Card>

      <Modal
        title="Finalizar mantenimiento"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default MaintenancePage;
