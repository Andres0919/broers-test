import { useEffect } from "react"
import { Table, Card, Typography, Spin } from "antd"
import { usePokemon } from "../hooks/usePokemon"

const { Title } = Typography

const OFFSET = 0

export default function Home() {
  const { pokemonList, loading, fetchPokemon, pagination, total, handleTableChange } = usePokemon()

  useEffect(() => {
    fetchPokemon(pagination.current, pagination.pageSize)
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
      render: (text) => <strong>{text.toUpperCase()}</strong>,
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
          onRow={(record) => ({
            onClick: () => {
              console.log("Row clicked:", record)
            },
          })}
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
