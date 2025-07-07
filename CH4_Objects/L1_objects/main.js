function createMessage(phoneNumber, message) {
  const messageToSend = {
    phoneNumber: phoneNumber,
    message: message,
    messageLength: message.length,
  };
  return messageToSend;
}

export { createMessage };