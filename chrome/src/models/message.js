class Message {
  constructor(message, data = '') {
    this.message = message;
    this.data = data;
  }

  static new(props) {
    return new this(props.name);
  }
}

export default Message;
