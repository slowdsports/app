let tituloNegocios = `
<h4 class="text-white">Canales de Negocios</h4>
`
for(const ele of document.getElementsByClassName("titulo-negocios")){ele.innerHTML=(tituloNegocios)};

// CANALES RECOPILADOS BRASIL

let canalesTVNegocios = `
<div class="row card-canal px-2">
   

   <!--CANAL-->
  <div class="col-6 col-sm-4">  
    <span class="tv-comedyc"></span>
  </div>
   <!--/CANAL-->
  
</div>
`
for(const ele of document.getElementsByClassName("tv-canales-negocios")){ele.innerHTML=(canalesTVNegocios)};