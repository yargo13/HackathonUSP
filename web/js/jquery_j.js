$(document).ready(function() {
  var servico = $("#Modalidade").val();
  var unidade = $("#Unidade").val();
  var departamento = $("#Departamento").val();
  var quantidade = "#";
  var item;
  var valor_unitario;
  var valor_total;
  var dia = 25;
  var mes = 11;
  var ano = 2018;


    $("#botao_like").click(function(event) {
        confirm( "Obrigado por contribuir com o Cronos! Gostaria de fazer outra grade?" );
        location.reload();
      });
      $("#botao_proximo").click(function(event) {
            var modalidade = $("#Modalidade").val();
            console.log(modalidade);
            var objeto = $("#Objeto").val();
            console.log(objeto);
            var unidade = $("#Unidade").val();
            console.log(unidade);

        });

      $("#botao_final").click(function(event) {
        var edital = "37/2018";
        unidade = $("#Unidade").val();
        item = $("#Objeto").val();
        valor_total = Math.min($("#valor1").val(), $("#valor2").val(), $("#valor3").val());
        edital = "37/2018";
        servico = $("#Modalidade").val();

        var doc = new jsPDF();
        var customText = `
        EDITAL DE PREGÃO ELETRÔNICO PARA SISTEMA DE
         REGISTRO DE PREÇOS ${edital} - PUSP-C 
        
        Registro de Preços para prestação de serviço ${servico}
     
     
        |  Quantidade        |       Item        |       Valor Total     |
        |  ${quantidade}     |       ${item}     |        ${valor_total} |
        
        
        VALOR TOTAL: R$ ${valor_total}
        
        OBSERVAÇÃO:  Nos valores acima deverão estar inclusos,
        além do lucro, todas e quaisquer despesas de responsabilidade
        do Proponente que, direta ou indiretamente, decorram do
        fornecimento do objeto licitado. Não será admitida a
        proposta parcial, isto é, a oferta devera abranger a
        integralidade do objeto.
        
        Prazo de Execução: 30 dias
        Validade da Proposta (nao inferior a 60 (sessenta) dias corridos).
    
        Condigao de Pagamento (nao inferior a  30 (trinta) dias corridos).
        
        Declaramos total concordância com os termos da Minuta de
        Contrato, e das condições da presente licitação.
        Dia ${dia} de ${mes} de ${ano}
        Sao Paulo/SP
        contatos: 11 3091-4997/2648-0367 ou pusp.c.sc@usp.br
        `;
        doc.text(customText, 15, 15);
        doc.save('sample-file.pdf');
        //confirm( "Respostas recebidas! Licitação aberta!", () => {location.reload();} );       
          });
    $( ".login" ).click(function() {

             if ($("#user").val() == 8610203 && $("#pass").val() == 123456){
               window.location.href = "./aluno.html";
             }
             else if ($("#user").val() == 123456 && $("#pass").val() == 123456){
               window.location.href = "./prof_tabela.html";
             }
           });

    $("#botao_grade").click(function(event) {
        var yourArray = [];
        //alert( "Handler for .submit() called." );
        $(".vermelho").each(function() {

            yourArray.push($(this).text());


            if (0 <= $.inArray($(this).text(), materias) && $.inArray($(this).text(), materias)  <= 4) {
                if ($("#1").text() == "") {
                    $("#1").html($(this).text());
                } else if (($("#8").text() == "")) {
                    $("#8").html($(this).text());
                } else if (($("#3").text() == "")) {
                    $("#3").html($(this).text());
                } else if (($("#10").text() == "")) {
                    $("#10").html($(this).text());
                } else if (($("#5").text() == "")) {
                    $("#5").html($(this).text());
                } else if (($("#7").text() == "")) {
                    $("#7").html($(this).text());
                } else if (($("#2").text() == "")) {
                    $("#2").html($(this).text());
                } else if (($("#9").text() == "")) {
                    $("#9").html($(this).text());
                } else if (($("#4").text() == "")) {
                    $("#4").html($(this).text());
                } else if (($("#11").text() == "")) {
                    $("#11").html($(this).text());
                }
            } else if (5 <= $.inArray($(this).text(), materias) && $.inArray($(this).text(), materias) <= 9) {
                if ($("#19").text() == "") {
                    $("#19").html($(this).text());
                } else if (($("#26").text() == "")) {
                    $("#26").html($(this).text());
                } else if (($("#21").text() == "")) {
                    $("#21").html($(this).text());
                } else if (($("#28").text() == "")) {
                    $("#28").html($(this).text());
                } else if (($("#23").text() == "")) {
                    $("#23").html($(this).text());
                } else if (($("#25").text() == "")) {
                    $("#25").html($(this).text());
                } else if (($("#20").text() == "")) {
                    $("#20").html($(this).text());
                } else if (($("#27").text() == "")) {
                    $("#27").html($(this).text());
                } else if (($("#22").text() == "")) {
                    $("#22").html($(this).text());
                } else if (($("#29").text() == "")) {
                    $("#29").html($(this).text());
                }

            } else if (10 <= $.inArray($(this).text(), materias) && $.inArray($(this).text(), materias) <= 14) {
                if ($("#1").text() == "") {
                    $("#1").html($(this).text());
                } else if (($("#8").text() == "")) {
                    $("#8").html($(this).text());
                } else if (($("#3").text() == "")) {
                    $("#3").html($(this).text());
                } else if (($("#10").text() == "")) {
                    $("#10").html($(this).text());
                } else if (($("#5").text() == "")) {
                    $("#5").html($(this).text());
                } else if (($("#7").text() == "")) {
                    $("#7").html($(this).text());
                } else if (($("#2").text() == "")) {
                    $("#2").html($(this).text());
                } else if (($("#9").text() == "")) {
                    $("#9").html($(this).text());
                } else if (($("#4").text() == "")) {
                    $("#4").html($(this).text());
                } else if (($("#11").text() == "")) {
                    $("#11").html($(this).text());
                }

            } else if (15 <= $.inArray($(this).text(), materias) && $.inArray($(this).text(), materias) <= 19) {
              if ($("#19").text() == "") {
                  $("#19").html($(this).text());
              } else if (($("#26").text() == "")) {
                  $("#26").html($(this).text());
              } else if (($("#21").text() == "")) {
                  $("#21").html($(this).text());
              } else if (($("#28").text() == "")) {
                  $("#28").html($(this).text());
              } else if (($("#23").text() == "")) {
                  $("#23").html($(this).text());
              } else if (($("#25").text() == "")) {
                  $("#25").html($(this).text());
              } else if (($("#20").text() == "")) {
                  $("#20").html($(this).text());
              } else if (($("#27").text() == "")) {
                  $("#27").html($(this).text());
              } else if (($("#22").text() == "")) {
                  $("#22").html($(this).text());
              } else if (($("#29").text() == "")) {
                  $("#29").html($(this).text());
              }

            } else if (20 <= $.inArray($(this).text(), materias) && $.inArray($(this).text(), materias) <= 24) {
                if ($("#1").text() == "") {
                    $("#1").html($(this).text());
                } else if (($("#8").text() == "")) {
                    $("#8").html($(this).text());
                } else if (($("#3").text() == "")) {
                    $("#3").html($(this).text());
                } else if (($("#10").text() == "")) {
                    $("#10").html($(this).text());
                } else if (($("#5").text() == "")) {
                    $("#5").html($(this).text());
                } else if (($("#7").text() == "")) {
                    $("#7").html($(this).text());
                } else if (($("#2").text() == "")) {
                    $("#2").html($(this).text());
                } else if (($("#9").text() == "")) {
                    $("#9").html($(this).text());
                } else if (($("#4").text() == "")) {
                    $("#4").html($(this).text());
                } else if (($("#11").text() == "")) {
                    $("#11").html($(this).text());
                }

            } else if (25 <= $.inArray($(this).text(), materias) && $.inArray($(this).text(), materias) <= 29) {

              if ($("#19").text() == "") {
                  $("#19").html($(this).text());
              } else if (($("#26").text() == "")) {
                  $("#26").html($(this).text());
              } else if (($("#21").text() == "")) {
                  $("#21").html($(this).text());
              } else if (($("#28").text() == "")) {
                  $("#28").html($(this).text());
              } else if (($("#23").text() == "")) {
                  $("#23").html($(this).text());
              } else if (($("#25").text() == "")) {
                  $("#25").html($(this).text());
              } else if (($("#20").text() == "")) {
                  $("#20").html($(this).text());
              } else if (($("#27").text() == "")) {
                  $("#27").html($(this).text());
              } else if (($("#22").text() == "")) {
                  $("#22").html($(this).text());
              } else if (($("#29").text() == "")) {
                  $("#29").html($(this).text());
              }

  //Ao concluir uma licitação gera um PDF
//   $("#botao_final").click(function(event) {

//     });

  $(".login").click(function() {
    if ($("#user").val() == 8610203 && $("#pass").val() == 123456) {
      window.location.href = "./aluno.html";
    } else if ($("#user").val() == 123456 && $("#pass").val() == 123456) {
      window.location.href = "./prof_tabela.html";
    }
  });

  $("#botao_grade").click(function(event) {
    var yourArray = [];
    //alert( "Handler for .submit() called." );
    $(".vermelho").each(function() {
      yourArray.push($(this).text());

      if (
        0 <= $.inArray($(this).text(), materias) &&
        $.inArray($(this).text(), materias) <= 4
      ) {
        if ($("#1").text() == "") {
          $("#1").html($(this).text());
        } else if ($("#8").text() == "") {
          $("#8").html($(this).text());
        } else if ($("#3").text() == "") {
          $("#3").html($(this).text());
        } else if ($("#10").text() == "") {
          $("#10").html($(this).text());
        } else if ($("#5").text() == "") {
          $("#5").html($(this).text());
        } else if ($("#7").text() == "") {
          $("#7").html($(this).text());
        } else if ($("#2").text() == "") {
          $("#2").html($(this).text());
        } else if ($("#9").text() == "") {
          $("#9").html($(this).text());
        } else if ($("#4").text() == "") {
          $("#4").html($(this).text());
        } else if ($("#11").text() == "") {
          $("#11").html($(this).text());
        }
      } else if (
        5 <= $.inArray($(this).text(), materias) &&
        $.inArray($(this).text(), materias) <= 9
      ) {
        if ($("#19").text() == "") {
          $("#19").html($(this).text());
        } else if ($("#26").text() == "") {
          $("#26").html($(this).text());
        } else if ($("#21").text() == "") {
          $("#21").html($(this).text());
        } else if ($("#28").text() == "") {
          $("#28").html($(this).text());
        } else if ($("#23").text() == "") {
          $("#23").html($(this).text());
        } else if ($("#25").text() == "") {
          $("#25").html($(this).text());
        } else if ($("#20").text() == "") {
          $("#20").html($(this).text());
        } else if ($("#27").text() == "") {
          $("#27").html($(this).text());
        } else if ($("#22").text() == "") {
          $("#22").html($(this).text());
        } else if ($("#29").text() == "") {
          $("#29").html($(this).text());
        }
      } else if (
        10 <= $.inArray($(this).text(), materias) &&
        $.inArray($(this).text(), materias) <= 14
      ) {
        if ($("#1").text() == "") {
          $("#1").html($(this).text());
        } else if ($("#8").text() == "") {
          $("#8").html($(this).text());
        } else if ($("#3").text() == "") {
          $("#3").html($(this).text());
        } else if ($("#10").text() == "") {
          $("#10").html($(this).text());
        } else if ($("#5").text() == "") {
          $("#5").html($(this).text());
        } else if ($("#7").text() == "") {
          $("#7").html($(this).text());
        } else if ($("#2").text() == "") {
          $("#2").html($(this).text());
        } else if ($("#9").text() == "") {
          $("#9").html($(this).text());
        } else if ($("#4").text() == "") {
          $("#4").html($(this).text());
        } else if ($("#11").text() == "") {
          $("#11").html($(this).text());
        }
      } else if (
        15 <= $.inArray($(this).text(), materias) &&
        $.inArray($(this).text(), materias) <= 19
      ) {
        if ($("#19").text() == "") {
          $("#19").html($(this).text());
        } else if ($("#26").text() == "") {
          $("#26").html($(this).text());
        } else if ($("#21").text() == "") {
          $("#21").html($(this).text());
        } else if ($("#28").text() == "") {
          $("#28").html($(this).text());
        } else if ($("#23").text() == "") {
          $("#23").html($(this).text());
        } else if ($("#25").text() == "") {
          $("#25").html($(this).text());
        } else if ($("#20").text() == "") {
          $("#20").html($(this).text());
        } else if ($("#27").text() == "") {
          $("#27").html($(this).text());
        } else if ($("#22").text() == "") {
          $("#22").html($(this).text());
        } else if ($("#29").text() == "") {
          $("#29").html($(this).text());
        }
    } else if (20 <= $.inArray($(this).text(), materias) && $.inArray($(this).text(), materias) <= 24) {

        if ($("#1").text() == "") {
          $("#1").html($(this).text());
        } else if ($("#8").text() == "") {
          $("#8").html($(this).text());
        } else if ($("#3").text() == "") {
          $("#3").html($(this).text());
        } else if ($("#10").text() == "") {
          $("#10").html($(this).text());
        } else if ($("#5").text() == "") {
          $("#5").html($(this).text());
        } else if ($("#7").text() == "") {
          $("#7").html($(this).text());
        } else if ($("#2").text() == "") {
          $("#2").html($(this).text());
        } else if ($("#9").text() == "") {
          $("#9").html($(this).text());
        } else if ($("#4").text() == "") {
          $("#4").html($(this).text());
        } else if ($("#11").text() == "") {
          $("#11").html($(this).text());
        }
      } else if (
        25 <= $.inArray($(this).text(), materias) &&
        $.inArray($(this).text(), materias) <= 29
      ) {
        if ($("#19").text() == "") {
          $("#19").html($(this).text());
        } else if ($("#26").text() == "") {
          $("#26").html($(this).text());
        } else if ($("#21").text() == "") {
          $("#21").html($(this).text());
        } else if ($("#28").text() == "") {
          $("#28").html($(this).text());
        } else if ($("#23").text() == "") {
          $("#23").html($(this).text());
        } else if ($("#25").text() == "") {
          $("#25").html($(this).text());
        } else if ($("#20").text() == "") {
          $("#20").html($(this).text());
        } else if ($("#27").text() == "") {
          $("#27").html($(this).text());
        } else if ($("#22").text() == "") {
          $("#22").html($(this).text());
        } else if ($("#29").text() == "") {
          $("#29").html($(this).text());
        }
      } else if (
        30 <= $.inArray($(this).text(), materias) &&
        $.inArray($(this).text(), materias) <= 34
      ) {
        if ($("#1").text() == "") {
          $("#1").html($(this).text());
        } else if ($("#8").text() == "") {
          $("#8").html($(this).text());
        } else if ($("#3").text() == "") {
          $("#3").html($(this).text());
        } else if ($("#10").text() == "") {
          $("#10").html($(this).text());
        } else if ($("#5").text() == "") {
          $("#5").html($(this).text());
        } else if ($("#7").text() == "") {
          $("#7").html($(this).text());
        } else if ($("#2").text() == "") {
          $("#2").html($(this).text());
        } else if ($("#9").text() == "") {
          $("#9").html($(this).text());
        } else if ($("#4").text() == "") {
          $("#4").html($(this).text());
        } else if ($("#11").text() == "") {
          $("#11").html($(this).text());
        }
      } else if (
        35 <= $.inArray($(this).text(), materias) &&
        $.inArray($(this).text(), materias) <= 39
      ) {
        if ($("#19").text() == "") {
          $("#19").html($(this).text());
        } else if ($("#26").text() == "") {
          $("#26").html($(this).text());
        } else if ($("#21").text() == "") {
          $("#21").html($(this).text());
        } else if ($("#28").text() == "") {
          $("#28").html($(this).text());
        } else if ($("#23").text() == "") {
          $("#23").html($(this).text());
        } else if ($("#25").text() == "") {
          $("#25").html($(this).text());
        } else if ($("#20").text() == "") {
          $("#20").html($(this).text());
        } else if ($("#27").text() == "") {
          $("#27").html($(this).text());
        } else if ($("#22").text() == "") {
          $("#22").html($(this).text());
        } else if ($("#29").text() == "") {
          $("#29").html($(this).text());
        }
      }

      //alert($(this).text());
    });
    //alert(yourArray)
  });

//   $(".celula_grade").click(function() {
//     if ($(this).hasClass("vermelho")) {
//       $(this).removeClass("vermelho");
//     } else {
//       $(this).addClass("vermelho");
//     }
//   });
// });
            }
        })
    });
});
