function reformat(message, formatter) {
    let formattedMessage = formatter(formatter(formatter(message)));
    return `TEXTIO: ${formattedMessage}`;

    
}

export { reformat };