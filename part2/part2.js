$( "form" ).submit(function( event ) {
  event.preventDefault();
  const result = $( this ).serializeArray();
  $('form').after(JSON.stringify(result));

  $.ajax({
    type: "GET",
    url: "./server.php",
    data: result,
    success: function () {
      alert('Ура! Данные пришли!');
    },
    error: function () {
      alert('Упс! Ошибочка вышла.');
    }
  });
  $(this).find("input[type=text]").val("");
  $(this).find("select").val("1");
});