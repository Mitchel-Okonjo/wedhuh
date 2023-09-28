class BadRequest extends Error {
  constructor(err) {
    super(`This is a ${err.statusText}`);
    this.status = err.status;
    this.errName = err.statusText;
  }
}

export { BadRequest };
