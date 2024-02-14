namespace Crypt {
    const crypto = require('crypto');

    class Encryption {
        private algo = 'aes-256-cbc';
        private encoding = 'hex';
        private secret = 'a@123'
        encrypt(string: string): string {
            let cipher = crypto.createCipher(this.algo, this.secret)
            let encrypted = cipher.update(string, 'utf-8', this.encoding);
            encrypted += cipher.final(this.encoding);
            return encrypted;
        }
        decrypt(string: string): string {
            let decipher = crypto.createDecipher(this.algo, this.secret)
            let decrypted = decipher.update(string, this.encoding, 'utf-8');
            decrypted += decipher.final('utf-8');
            return decrypted;
        }
        hash(text: string) {
            const hash = crypto.createHash('sha256');
            hash.update(text);
            return hash.digest('hex');
        }
    }
    const encryption = new Encryption();
    const encrypt = encryption.encrypt('test');
    console.log('encrypted string : ' + encrypt)
    console.log('Decrypted string : ' + encryption.decrypt(encrypt))

}