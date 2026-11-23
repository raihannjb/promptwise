export const VISITED_KEY = 'pw-visited'

export function loadVisited() {
  try {
    const visited = JSON.parse(localStorage.getItem(VISITED_KEY))
    return Array.isArray(visited) ? visited : []
  } catch {
    return []
  }
}
