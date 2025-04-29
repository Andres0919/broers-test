import { useState } from "react"
import { api } from "../services/pockeapi"
import { useNavigate } from "react-router-dom"

const LIMIT = 10

export const usePokemon = () => {
  const navigate = useNavigate()
  const [pokemon, setPokemon] = useState(null)
  const [pokemonList, setPokemonList] = useState([])
  const [loading, setLoading] = useState(true)
  const [total, setTotal] = useState(0)
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: LIMIT,
  })

  const fetchPokemonList = async (page = 1, pageSize = LIMIT) => {
    try {
      setLoading(true)
      const offset = (page - 1) * pageSize
      const { pokemons, total } = await api.getPokemonList({
        offset,
        limit: pageSize,
      })

      const detailed = await Promise.all(
        pokemons.map((pokemon) => api.getPokemonDetails(pokemon.url)),
      )

      setTotal(total)
      setPokemonList(detailed)
    } catch (error) {
      console.error("Error fetching Pokémon data", error)
    } finally {
      setLoading(false)
    }
  }

  const handleTableChange = (pagination) => {
    setPagination({
      current: pagination.current,
      pageSize: pagination.pageSize,
    })
  }

  const handleRowClick = (record) => {
    console.log("Row clicked:", record)
    navigate(`/pokemon/${record.id}`, {
      state: { pokemon: record },
    })
  }

  const getPokemonById = async (id) => {
    try {
      setLoading(true)
      const pokemon = await api.getPokemonById(id)
      setPokemon(pokemon)
    } catch (error) {
      console.error("Error fetching Pokémon by ID", error)
      navigate("/not-found")
    }

    setLoading(false)
  }

  return {
    pokemon,
    pokemonList,
    loading,
    fetchPokemonList,
    total,
    pagination,
    handleTableChange,
    handleRowClick,
    getPokemonById,
  }
}
