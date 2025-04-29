import { useState } from "react"
import { api } from "../services/pockeapi"

const LIMIT = 10

export const usePokemon = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [loading, setLoading] = useState(true)
  const [total, setTotal] = useState(0)
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: LIMIT,
  })

  const fetchPokemon = async (page = 1, pageSize = LIMIT) => {
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

  return {
    pokemonList,
    loading,
    fetchPokemon,
    total,
    pagination,
    handleTableChange,
  }
}
