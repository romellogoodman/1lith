import {isClientSide, isDev} from 'common';

export const getDomain = (req) => {
  if (isClientSide) {
    return window.location.origin;
  }

  if (req) {
    return `http://${req.headers.host}`;
  }

  return '';
};

const error = (error) => {
  if (isDev) {
    console.log('Error:', error);
  }

  return {error: true};
};

const json = (res) => res.json();

const status = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
};

const client = (url, config) => {
  return fetch(url, config).then(status).then(json).catch(error);
};

export const get = (url, options = {}) => {
  if (isDev) {
    console.log('GET:', url);
  }

  return client(url, options);
};

export const post = (url, body = {}, options = {}) => {
  if (isDev) {
    console.log(`POST:`, url);
    console.log(`POST Body:`, body);
  }

  const config = {
    ...options,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  return client(url, config);
};
