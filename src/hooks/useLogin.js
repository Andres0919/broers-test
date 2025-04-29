import { Form } from "antd"
import { errorAlert, successAlert } from "../utils/alerts"

const AUTHORIZED_USERNAME = "admin@admin.com"
const AUTHORIZED_PASSWORD = "Admin"

export const useLogin = () => {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log("Received values of form: ", values)
    if (values.username !== AUTHORIZED_USERNAME || values.password !== AUTHORIZED_PASSWORD) {
      errorAlert("Usuario o contraseña incorrectos")
      return
    }

    successAlert("Bienvenido al sistema")
  }

  const handleCaptchaChange = (value) => {
    console.log("Captcha value:", value)
    form.setFieldsValue({ captcha: value })
  }

  return {
    form,
    onFinish,
    handleCaptchaChange,
  }
}
