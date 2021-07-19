let tituloEducacion = `
<h4 class="text-white">Canales de Educación</h4>
`
for(const ele of document.getElementsByClassName("titulo-educacion")){ele.innerHTML=(tituloEducacion)};

// CANALES RECOPILADOS BRASIL

let canalesTVEducacion = `
<div class="row card-canal px-2">
   

   <!--CANAL-->
  <div class="col-6 col-sm-4">  
    <span class="tv-comedyc"></span>
  </div>
   <!--/CANAL-->
  
</div>
`
for(const ele of document.getElementsByClassName("tv-canales-educacion")){ele.innerHTML=(canalesTVEducacion)};