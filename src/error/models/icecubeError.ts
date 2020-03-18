export class IcecubeError extends Error {
    constructor(message: string) {
      super(message);
      this.name = "IcecubeError";
      Error.captureStackTrace(this, IcecubeError);
    }
  }
  