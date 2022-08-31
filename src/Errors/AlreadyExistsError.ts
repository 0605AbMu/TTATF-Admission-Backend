export default class AlreadyExistsError extends Error {
  stack?: string | undefined;
  message: string;
  code: number;
  constructor(message: string, code: number, stack: string) {
    super(message);
    this.message = message;
    this.code = code;
    this.stack = stack;
  }
}
