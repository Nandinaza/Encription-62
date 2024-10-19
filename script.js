      // Dummy encryption function (Caesar Cipher as example)
      function encryptText() {
        const plaintext = document.getElementById('plaintext').value;
        const shift = 3; // Example shift for Caesar Cipher
        let ciphertext = '';
        for (let i = 0; i < plaintext.length; i++) {
            let charCode = plaintext.charCodeAt(i);
            // Shift for A-Z and a-z
            if (charCode >= 65 && charCode <= 90) {
                ciphertext += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
            } else if (charCode >= 97 && charCode <= 122) {
                ciphertext += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
            } else {
                ciphertext += plaintext[i]; // Non-alphabet characters remain the same
            }
        }
        document.getElementById('ciphertext').innerText = ciphertext;
    }
    function decryptText() {
        const plaintext = document.getElementById('plaintext').value;
        const shift = 3; // Example shift for Caesar Cipher
        let ciphertext = '';
        for (let i = 0; i < plaintext.length; i++) {
            let charCode = plaintext.charCodeAt(i);
            // Shift for A-Z and a-z
            if (charCode >= 65 && charCode <= 90) {
                ciphertext += String.fromCharCode(((charCode - 65 - shift) % 26) + 65);
            } else if (charCode >= 97 && charCode <= 122) {
                ciphertext += String.fromCharCode(((charCode - 97 - shift) % 26) + 97);
            } else {
                ciphertext += plaintext[i]; // Non-alphabet characters remain the same
            }
        }
        document.getElementById('ciphertext').innerText = ciphertext;
    }
