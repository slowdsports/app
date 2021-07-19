let tituloHistoria = `
<h4 class="text-white">Canales de Historia</h4>
`
for(const ele of document.getElementsByClassName("titulo-historia")){ele.innerHTML=(tituloHistoria)};

// CANALES RECOPILADOS BRASIL

let canalesTVHistoria = `
<div class="row card-canal px-2">
   

   <!--CANAL-->
  <div class="col-6 col-sm-4">  
    <span class="tv-comedyc"></span>
  </div>
   <!--/CANAL-->
  
</div>
`
for(const ele of document.getElementsByClassName("tv-canales-historia")){ele.innerHTML=(canalesTVHistoria)};