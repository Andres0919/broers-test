import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Card, Typography, Row, Col, Image, Tag, Descriptions, Button, Spin } from "antd"
import { usePokemon } from "../hooks/usePokemon"

const { Title } = Typography

export default function Detail() {
  const { name } = useParams()
  const navigate = useNavigate()
  const { pokemon, getPokemonByName, loading } = usePokemon(null)

  useEffect(() => {
    getPokemonByName(name)
  }, [name])

  if (loading) {
    return (
      <Row justify="center" style={{ marginTop: "20%" }}>
        <Spin size="large" />
      </Row>
    )
  }

  if (!pokemon) return null

  return (
    <Card style={{ margin: 24, minHeight: "90vh" }} justify="center">
      <Button onClick={() => navigate(-1)}>← Volver</Button>
      <Row gutter={[24, 24]} align="middle">
        <Col xs={24} md={8} style={{ textAlign: "center" }}>
          <Image width={200} src={pokemon.sprites.front_default} alt={pokemon.name} />
          <Title level={3}>{pokemon.name.toUpperCase()}</Title>
          {pokemon.types.map((type) => (
            <Tag key={type.type.name} color="blue">
              {type.type.name.toUpperCase()}
            </Tag>
          ))}
        </Col>
        <Col xs={24} md={16}>
          <Descriptions title="Información" bordered column={{ xs: 1, md: 2 }} size="small">
            <Descriptions.Item label="Altura">{pokemon.height}</Descriptions.Item>
            <Descriptions.Item label="Peso">{pokemon.weight}</Descriptions.Item>
            <Descriptions.Item label="Experiencia base">
              {pokemon.base_experience}
            </Descriptions.Item>
            <Descriptions.Item label="Habilidades">
              {pokemon.abilities.map((a) => a.ability.name).join(", ")}
            </Descriptions.Item>
            <Descriptions.Item label="Movimientos principales" span={2}>
              {pokemon.moves
                .slice(0, 5)
                .map((m) => m.move.name)
                .join(", ")}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </Card>
  )
}
