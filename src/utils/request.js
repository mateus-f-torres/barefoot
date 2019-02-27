// @flow

// TODO: make class similar to axios, but with fetch

function request(url: string) {
  return fetch(url, {method: 'GET'})
    .then((res) => {
      if (!res.ok) { throw new Error(`failed with status = ${res.status}`) }
      return res.json();
    });
}

export default request;
