import axios from "axios"

const DEFAULT_API_CONFIG = {
  baseURL: "https://pokeapi.co/api/v2/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
}

const setupAxios = (config = DEFAULT_API_CONFIG) => {
  const httpService = axios.create({
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })

  const getPokemonList = async (options = { limit: 20, offset: 0 }) => {
    try {
      const res = await httpService.get(`pokemon?limit=${options.limit}&offset=${options.offset}`)
      return {
        pokemons: res.data.results,
        total: res.data.count,
      }
    } catch (error) {
      console.error("Error fetching Pokémon list", error)
      throw error
    }
  }

  const getPokemonDetails = async (url) => {
    try {
      const res = await httpService.get(url)
      return {
        id: res.data.id,
        name: res.data.name,
        sprite: res.data.sprites.front_default,
        experience: res.data.base_experience,
        height: res.data.height,
        weight: res.data.weight,
      }
    } catch (error) {
      console.error("Error fetching Pokémon details", error)
      throw error
    }
  }

  const getPokemonByName = async (name) => {
    try {
      const res = await httpService.get(`pokemon/${name}`)
      return res.data
    } catch (error) {
      console.error("Error fetching Pokémon by ID", error)
      throw error
    }
  }

  return {
    getPokemonList,
    getPokemonDetails,
    getPokemonByName,
  }
}

export const api = setupAxios()
