let tituloFamiliar = `
<h4 class="text-white">Canales Familiares</h4>
`
for(const ele of document.getElementsByClassName("titulo-familiar")){ele.innerHTML=(tituloFamiliar)};

// CANALES RECOPILADOS BRASIL

let canalesTVFamiliar = `
<div class="row card-canal px-2">
   

   <!--CANAL-->
  <div class="col-6 col-sm-4">  
    <span class="tv-comedyc"></span>
  </div>
   <!--/CANAL-->
  
</div>
`
for(const ele of document.getElementsByClassName("tv-canales-familiar")){ele.innerHTML=(canalesTVFamiliar)};