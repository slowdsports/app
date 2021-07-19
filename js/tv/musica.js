let tituloMusica = `
<h4 class="text-white">Canales de Música</h4>
`
for(const ele of document.getElementsByClassName("titulo-musica")){ele.innerHTML=(tituloMusica)};

// CANALES RECOPILADOS BRASIL

let canalesTVMusica = `
<div class="row card-canal px-2">
   

   <!--CANAL-->
  <div class="col-6 col-sm-4">  
    <span class="tv-comedyc"></span>
  </div>
   <!--/CANAL-->
  
</div>
`
for(const ele of document.getElementsByClassName("tv-canales-musica")){ele.innerHTML=(canalesTVMusica)};