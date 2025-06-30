function createContact(phoneNumber, name = "Anonymous", avatar = "default.jpg") {
  if (!phoneNumber) {
    return "Invalid phone number";
  } else {
    const avatarPath = "/public/pictures/" + avatar;
    return `Contact saved! Name: ${name}, Phone number: ${phoneNumber}, Avatar: ${avatarPath}`;
  }
}


export { createContact };
