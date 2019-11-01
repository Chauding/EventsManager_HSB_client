import axios from "axios";

export default {
  get(url, value) {
    return new Promise(function(resolve, reject) {
      // Try to make the request to the server
      axios
        .get(url, { params: value })
        .then(function(res) {
          // If all is well return the data from the server
          resolve(res.data);
        })
        .catch(function(err) {
          reject(new Error(err));
        });
    });
  },
  post(url, value) {
    // Try to make the request to the server
    return new Promise(function(resolve, reject) {
      // Post
      axios
        .post(url, value)
        .then(function(res) {
          resolve(res.data);
        })
        .catch(function(err) {
          reject(new Error(err));
        });
    });
  },
  put(url, value) {
    // Try to make the request to the server
    return new Promise(function(resolve, reject) {
      // Post
      axios
        .put(url, value)
        .then(function(res) {
          resolve(res.data);
        })
        .catch(function(err) {
          reject(new Error(err));
        });
    });
  },
  delete(url, value) {
    return new Promise(function(resolve, reject) {
      axios
        .delete(url, {
          params: value
        })
        .then(function(res) {
          resolve(res.data);
        })
        .catch(function(err) {
          reject(new Error(err));
        });
    });
  }
};
