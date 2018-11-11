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
        $('#dataTable').DataTable( {
          "language": {
            "lengthMenu": "Mostrar _MENU_ resultados",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ resultados",
            "search": "Busca:",
            "paginate": {
              "previous": "Anterior",
              "next": "Próxima"
            }
          }
        } );
    }
  })