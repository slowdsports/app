let tituloComedia = `
<h4 class="text-white">Canales de Comedia</h4>
`
for(const ele of document.getElementsByClassName("titulo-comedia")){ele.innerHTML=(tituloComedia)};

// CANALES RECOPILADOS BRASIL

let canalesTVComedia = `
<div class="row card-canal px-2">
   

   <!--CANAL-->
  <div class="col-6 col-sm-4">  
    <span class="tv-comedyc"></span>
  </div>
   <!--/CANAL-->
  
</div>
`
for(const ele of document.getElementsByClassName("tv-canales-comedia")){ele.innerHTML=(canalesTVComedia)};