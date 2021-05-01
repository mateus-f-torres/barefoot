// TODO: get a working Interface for Options
//       adding options to make a POST request breaks compilation
async function request(url: string, options: any): Promise<unknown> {
  const res = await fetch(url, options)
  if (!res.ok) {
    throw new Error("HTTP request error, ".concat(String(res.status)))
  } else if (res.status == 204) {
    return null
  } else {
    return await res.json()
  }
}

export default request
