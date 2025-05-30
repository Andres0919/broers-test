import { Button, Card, Form, Input, Typography, Row, Col, Space } from "antd"
const { Title, Text } = Typography
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import ReCAPTCHA from "react-google-recaptcha"
import { useLogin } from "../hooks/useLogin"

const captchaKey = import.meta.env.VITE_CAPTCHA_KEY

export default function Login() {
  const { form, onFinish, handleCaptchaChange } = useLogin()

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh", background: "#f0f2f5" }}>
      <Col xs={22} sm={16} md={12} lg={8} xl={6}>
        <Card style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <div style={{ textAlign: "center" }}>
              <Title level={2}>Iniciar sesión</Title>
              <Text type="secondary">Por favor, ingresa tus credenciales para continuar.</Text>
            </div>

            <Form form={form} name="login" onFinish={onFinish} layout="vertical">
              <Form.Item
                name="username"
                label="Usuario"
                rules={[{ required: true, message: "El usuario es requerido" }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Ingresa usuario" />
              </Form.Item>

              <Form.Item
                name="password"
                label="Contraseña"
                rules={[{ required: true, message: "La contraseña es requerida" }]}
              >
                <Input.Password prefix={<LockOutlined />} placeholder="Ingresa contraseña" />
              </Form.Item>
              <Form.Item
                name="captcha"
                rules={[{ required: true, message: "Por favor valida el captcha" }]}
                style={{ textAlign: "center" }}
              >
                <Row justify="center" align="middle" style={{ marginTop: 16 }}>
                  <ReCAPTCHA sitekey={captchaKey} onChange={handleCaptchaChange} />
                </Row>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block size="large">
                  Iniciar sesión
                </Button>
              </Form.Item>
            </Form>
          </Space>
        </Card>
      </Col>
    </Row>
  )
}
