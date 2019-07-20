export default function request(url, options = {method: 'GET'}) {
  return fetch(url, options)
    .then((res) => {
      if (!res.ok) {
        throw new Error('HTTP request error, status = '.concat(res.status))
      } else if (res.status == 204) return null
      return res
        .json()
        .then((body) => body)
        .catch((e) => {
          throw e
        })
    })
    .catch((e) => {
      throw e
    })
}
