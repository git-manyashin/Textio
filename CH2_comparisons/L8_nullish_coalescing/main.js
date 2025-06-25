const name = "James Holden";
const provider = "AT&T";
const phoneNumber = "555-123-4567";
const subscriptionType = null;

// don't touch above this line

console.log(
  `Creating ${subscriptionType ?? "Guest"} Profile for ${name} with ${provider} at ${phoneNumber}.`,
);

//or

/*
const name = "James Holden";
const provider = "AT&T";
const phoneNumber = "555-123-4567";
let subscriptionType = null;

// don't touch above this line
subscriptionType = subscriptionType ?? "Guest";

console.log(
  `Creating ${subscriptionType} Profile for ${name} with ${provider} at ${phoneNumber}.`,
);
*/