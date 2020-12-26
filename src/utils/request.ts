async function request(url: string, options = {method: "GET"}) {
  const res = await fetch(url, options)
  if (!res.ok) {
    throw new Error("HTTP request error, ".concat(String(res.status)))
  } else if (res.status == 204) {
    return null
  } else {
    return res.json()
  }
}

export default request
