const retryLimit = 10;
const numRetries = 9;

const messageStatus = numRetries < retryLimit ? "Processing" : "Failed";

console.log(messageStatus);
