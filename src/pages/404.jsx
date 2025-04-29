import { Result, Button } from "antd"
import { useNavigate } from "react-router-dom"

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div
      style={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center" }}
    >
      <Result
        status="404"
        title="404"
        subTitle="La página que buscas no existe."
        extra={
          <Button type="primary" onClick={() => navigate("/pokemon")}>
            Volver al inicio
          </Button>
        }
      />
    </div>
  )
}
