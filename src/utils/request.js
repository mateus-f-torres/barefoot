// @flow

// TODO: better request | response .then & .catch
function request(url: string, options) {
  if (!options) {
    return fetch(url, {method: 'GET'})
      .then((res) => {
        if (!res.ok) throw new Error(`failed with status ${res.status}`);
        return res.json();
      });

  } else {
    return fetch(url, options)
      .then((res) => {
        if (!res.ok) throw new Error(`failed with status ${res.status}`);
        return res.json();
      });
  }
}

export default request;
