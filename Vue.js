new Vue({
    el: '#app',
    data: {
      plaintext: 0,
      ciphertextText: 0
    },
    computed: {
      sum() {
        return Number(this.plaintext) + Number(this.ciphertextText);
      }
    }
  });