//criaçao de ul na nav
$('nav').append('<ul id="nav"></ul>');

//para cada h2, captura em variaveis o titulo sob atributo "titulo_menu" e o id do elemento e em seguida cria as <li> endereçadas e nomeadas corretamente
$("h2").each(function(){
  let titulo = $(this).attr("titulo_menu");
  let end = $(this).attr("id");
  console.log(titulo, end);
  $('ul#nav').append('<li><a href="#' + end + '">' + titulo + '</a></li>');
});
