/**
 * @class
 */
export default class Url {
  /**
   *
   * @param {string} protocol
   * @param {string} username
   * @param {string} password
   * @param {string} hostname
   * @param {number} port
   * @param {string} uri
   */
  constructor(protocol, hostname, port, path = "", parameters ="") {
    this.protocol = protocol;
    this.hostname = hostname;
    this.port = port;
    this.path = path;
    this.parameters = parameters;
    this.validate();
  }

  validate() {
    if (!this.hostname || !this.protocol || !this.port) {
      throw new Error(
        "Must specify at least a protocol, hostname and port",
      );
    }
  }

  toString() {
    const search = this.parameters ? `?${this.parameters}` : "";
    const url = `${this.protocol}://${this.hostname}:${this.port}${this.path}${search}`;
    return url;
  }
}
