const app = Vue.createApp({
  data() {
      return {
          plaintext: '', // Teks yang diinput
          shift: 3 // Caesar Cipher shift (Anda dapat mengubah ini sesuai kebutuhan)
      };
  },
  computed: {
      // Melakukan enkripsi teks secara realtime
      encryptedText() {
          let ciphertext = '';
          for (let i = 0; i < this.plaintext.length; i++) {
              let charCode = this.plaintext.charCodeAt(i);

              // Enkripsi A-Z
              if (charCode >= 65 && charCode <= 90) {
                  ciphertext += String.fromCharCode(((charCode - 65 + this.shift) % 26) + 65);
              }
              // Enkripsi a-z
              else if (charCode >= 97 && charCode <= 122) {
                  ciphertext += String.fromCharCode(((charCode - 97 + this.shift) % 26) + 97);
              }
              // Karakter lainnya tetap sama
              else {
                  ciphertext += this.plaintext[i];
              }
          }
          return ciphertext;
      }
  }
});

app.mount('#app');