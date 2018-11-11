new Vue({
    el: '#app',
    data () {
      return {
        licitacoes: []
      }
    },
    mounted () {
      axios
        .get('https://api.myjson.com/bins/15neta')
        .then(response => (this.licitacoes = response.data.licitacoes))
    },
    updated(){
        $('#dataTable').DataTable();
    }
  })