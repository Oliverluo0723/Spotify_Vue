export function truncateName(name: string, length = 12) {
  return name.length > length ? `${name.slice(0, length)}...` : name
}
