let BASE_URL = ''
if (process.env.NODE_env === 'production') {
  BASE_URL = 'http://152.136.185.210:5000'
} else {
  BASE_URL = 'http://152.136.185.210:5000'
}

export { BASE_URL }
