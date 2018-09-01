// Service Worker

if('serviceWorker' in navigator) {
  console.log('Puedes usar el Service Worker');

  navigator.serviceWorker.register('./service.js')
                         //Si se cumple esta condicion (promesa) ejecuta lo siguiente
                         .then(res => console.log('Service Worker cargado correctamente', res))
                         //Si hay un error se ejecuta lo siguiente
                         .catch(err => console.log('Service Worker no se ha podido registrar', err));

} else {
  console.log('No puedes usar SW');
}

//Scroll suavizado
$(document).ready(function(){
  $("#menu a").click(function(e){
    e.preventDefault();
    //probar el offset
    //console.log($('#footer').offset().top);
    $("html, body").animate({
      scrollTop: $($(this).attr('href')).offset().top
    });

    return false;
  });
});
