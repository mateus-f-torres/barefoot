// @flow

// TODO: better request | response .then & .catch
// TODO: or pass an arg object {method, body, ...etc}
const request = {
  get(url: string) {
    return fetch(url, {method: 'GET'})
      .then((res) => {
        if (!res.ok) throw new Error(`failed with status ${res.status}`);
        return res.json();
      });
  },
  post(url: string, data: any) {
    return fetch(url, {method: 'POST', body: data})
      .then((res) => {
        if (!res.ok) throw new Error(`failed with status ${res.status}`);
        return res.json();
      });
  },
  put(url: string, data: any) {
    return fetch(url, {method: 'PUT', body: data})
      .then((res) => {
        if (!res.ok) throw new Error(`failed with status ${res.status}`);
        return res.json();
      });
  },
  delete(url: string, data: any) {
    return fetch(url, {method: 'DELETE', body: data})
      .then((res) => {
        if (!res.ok) throw new Error(`failed with status ${res.status}`);
        return res.json();
      });
  },
}

export default request;
