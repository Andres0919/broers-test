import { useEffect } from "react"
import { Table, Card, Typography, Spin } from "antd"
import { usePokemon } from "../hooks/usePokemon"
import { useNavigate } from "react-router-dom"

const { Title } = Typography

export default function Home() {
  const navigate = useNavigate()
  const { pokemonList, loading, fetchPokemonList, pagination, total, handleTableChange } =
    usePokemon()

  useEffect(() => {
    fetchPokemonList(pagination.current, pagination.pageSize)
  }, [pagination])

  const columns = [
    {
      title: "Imagen",
      dataIndex: "sprite",
      key: "sprite",
      render: (src) => <img src={src} alt="pokemon" width={50} />,
    },
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <a onClick={() => navigate(`/pokemon/${text}`)}>
          <strong>{text.toUpperCase()}</strong>
        </a>
      ),
    },
    {
      title: "Experiencia",
      dataIndex: "experience",
      key: "experience",
    },
    {
      title: "Altura",
      dataIndex: "height",
      key: "height",
    },
    {
      title: "Peso",
      dataIndex: "weight",
      key: "weight",
    },
  ]

  return (
    <Card style={{ margin: 24 }}>
      <Title level={2}>Lista de Pokémon </Title>
      {loading ? (
        <Spin size="large" />
      ) : (
        <Table
          columns={columns}
          dataSource={pokemonList}
          scroll={{ x: true }}
          key="id"
          rowKey={(record) => record.id}
          pagination={{
            current: pagination.current,
            pageSize: pagination.pageSize,
            total: total,
          }}
          onChange={handleTableChange}
        />
      )}
    </Card>
  )
}
