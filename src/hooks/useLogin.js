import { Form } from "antd"
import { errorAlert, successAlert } from "../utils/alerts"
import { useNavigate } from "react-router-dom"

const AUTHORIZED_USERNAME = "admin@admin.com"
const AUTHORIZED_PASSWORD = "Admin"

export const useLogin = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()

  const onFinish = (values) => {
    if (values.username !== AUTHORIZED_USERNAME || values.password !== AUTHORIZED_PASSWORD) {
      errorAlert("Usuario o contraseña incorrectos")
      return
    }

    successAlert("Bienvenido al sistema")
    navigate("/")
  }

  const handleCaptchaChange = (value) => {
    form.setFieldsValue({ captcha: value })
  }

  return {
    form,
    onFinish,
    handleCaptchaChange,
  }
}
