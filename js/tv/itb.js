let tituloIT = `
<h4 class="text-white">Canales de Italia <i class="flag it"></i></h4>
`
for(const ele of document.getElementsByClassName("titulo-it")){ele.innerHTML=(tituloIT)};

// CANALES RECOPILADOS ITALIA

let canalesTVIT = `
<div class="row card-canal px-2">
   
   <!--CANAL-->
  <div class="col-6 col-sm-4">  
    <span class="tv-motortrend"></span>
  </div>
   <!--/CANAL-->
   
   <!--CANAL-->
  <div class="col-6 col-sm-4">  
    <span class="tv-raisport2"></span>
  </div>
   <!--/CANAL-->
   
   <!--CANAL-->
  <div class="col-6 col-sm-4">  
    <span class="tv-sportitalia"></span>
  </div>
   <!--/CANAL-->
  
</div>
`
for(const ele of document.getElementsByClassName("tv-canales-it")){ele.innerHTML=(canalesTVIT)};