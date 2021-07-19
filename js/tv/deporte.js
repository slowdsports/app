let tituloDeporte = `
<h4 class="text-white">Canales de Deporte</h4>
`
for(const ele of document.getElementsByClassName("titulo-deporte")){ele.innerHTML=(tituloDeporte)};

// CANALES RECOPILADOS BRASIL

let canalesTVDeporte = `
<div class="row card-canal px-2">
   

   <!--CANAL-->
  <div class="col-6 col-sm-4">  
    <span class="tv-comedyc"></span>
  </div>
   <!--/CANAL-->
  
</div>
`
for(const ele of document.getElementsByClassName("tv-canales-deporte")){ele.innerHTML=(canalesTVDeporte)};