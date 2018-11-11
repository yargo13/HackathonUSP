new Vue({
    el: '#app',
    data () {
      return {
        dados: null
      }
    },
    mounted () {
      axios
        .get('https://api.myjson.com/bins/hpsam')
        .then(response => (this.dados = response.data))
    },
    updated(){
        $('#dataTable').DataTable();
    }
  })