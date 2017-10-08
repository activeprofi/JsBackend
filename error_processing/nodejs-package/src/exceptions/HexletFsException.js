class HexletFsException extends Error {
  constructor(code, path) {
    super(code);
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.code = code;
    this.path = path;
  }
}

export default HexletFsException;
