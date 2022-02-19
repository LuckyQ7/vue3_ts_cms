class Cache {
  setCache(key: string, value: any): void {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  getCache(key: string): string {
    const value = window.localStorage.getItem(key)
    let result = ''
    if (value) {
      result = JSON.parse(value)
    }
    return result
  }
  deleteCache(key: string): void {
    window.localStorage.removeItem(key)
  }
}
export default new Cache()
