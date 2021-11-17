import Url from "./url.js";

/**
 * @class
 */
export default class UrlBuilder {
  /**
   *
   * @param {string} protocol
   */
  setProtocol(protocol) {
    this.protocol = protocol;
    return this;
  }

  /**
   *
   * @param {string} username
   */
  setUsername(username) {
    this.username = username;
    return this;
  }

  /**
   *
   * @param {string} password
   */
  setPassword(password) {
    this.password = password;
    return this;
  }

  /**
   *
   * @param {string}  uri
   */
  setPath(path) {
    this.path = path;
    return this;
  }

  /**
   *
   * @param {number} port
   */
  setPort(port) {
    this.port = port;
    return this;
  }

  /**
   *
   * @param {string} host
   */
  setHost(host) {
    this.host = host;
    return this;
  }

  /**
   * 
   * @param {string} query 
   */
  setQuery(query){
    this.query = query;
    return this;
  }

  build() {
    return new Url(
      this.protocol,
      this.host,
      this.port,
      this.path,
      this.query
    );
  }
}
