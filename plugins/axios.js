export default function ({ $axios, store }) {
  $axios.setHeader('clientId', '1')
  $axios.onRequest((config) => {
    config.headers.common.accessToken = 'Mxx0ZENOZVoxbEptdlVUenFvU3NnSmVWVlJBVUUwbVppVXwyMDIyLTExLTAxIDAzOjMxOjM0'
  })
  $axios.onError((error) => {
    console.log('error')
  })
}
