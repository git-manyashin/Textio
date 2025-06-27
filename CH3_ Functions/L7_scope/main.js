function getMessageStatus(message) {
    let messageStatus = "processing";

    function isValidLength(message) {
        let messageStatus = "invalid";

        if (message.length > 0) {
            messageStatus = "valid";
        }

        return messageStatus;
    }

    messageStatus = isValidLength(message);
    return messageStatus;
}

export { getMessageStatus };