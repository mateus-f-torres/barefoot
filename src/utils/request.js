// @flow

// TODO: make class similar to axios, but with fetch

function request(url) {
  return fetch(url, {method: 'GET'})
    .then((res) => {
      if (!res.ok) { throw new Error('failed', res.status) }
      return res.json();
    });
}

export default request;
