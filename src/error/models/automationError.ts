export class AutomationError extends Error {
    constructor(message: string) {
      super(message);
      this.name = "AutomationError";
      Error.captureStackTrace(this, AutomationError);
    }
  }



  