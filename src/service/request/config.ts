let BASE_URL = ''
if (process.env.NODE_env === 'production') {
  BASE_URL = 'http://123.207.32.32:8000/'
} else {
  BASE_URL = 'http://123.207.32.32:8000/'
}

export { BASE_URL }
