const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }

  encrypt(message, key) {
    if(!message || !key) {
      throw new Error('Not implemented');
    }
    
    message = message.toUpperCase();
    key = key.toUpperCase();

    let keyIndex = 0;

    const encryptedMessageArray = message.split('').reduce((agr, val) => {
      if (!(/[A-Z]/i.test(val))) {
        agr.push(val);
      } else {
        agr.push(this.alphabet[(this.alphabet.indexOf(val) + this.alphabet.indexOf(key[keyIndex % key.length])) % 26]);
        keyIndex++;
      }

      return agr;
    }, []);

    return this.isDirect ? encryptedMessageArray.join('') : encryptedMessageArray.reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if(!encryptedMessage || !key) {
      throw new Error('Not implemented');
    }
    
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let keyIndex = 0;

    const decryptedMessageArray = encryptedMessage.split('').reduce((agr, val) => {
      if (!(/[a-z]/i.test(val))) {
        agr.push(val);
      } else {
        agr.push(this.alphabet[(((this.alphabet.indexOf(val)) - (this.alphabet.indexOf(key[keyIndex % key.length])) + 26) % 26)]);
        keyIndex++;
      }

      return agr;
    }, []);

    return this.isDirect ? decryptedMessageArray.join('') : decryptedMessageArray.reverse().join('');

  }
}

module.exports = VigenereCipheringMachine;
