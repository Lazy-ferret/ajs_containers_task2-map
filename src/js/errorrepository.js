export default class ErrorRepository {
  constructor(code, value) {
    this.error = new Map();
    this.code = code;
    this.value = value;
    this.error.set(code, value);
  }

  translate(code) {
    if (!this.error.get(code)) {
      return 'Unknown error';
    } return this.error.get(code);
  }
}
