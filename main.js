new Vue({
    el: '#app',
    data () {
      return {
        dados: null
      }
    },
    mounted () {
      axios
        .get('http://localhost:3000/licitacoes')
        .then(response => (this.dados = response.data))
    },
    updated(){
        $('#dataTable').DataTable();
    }
  })