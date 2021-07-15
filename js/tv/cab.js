let tituloCA = `
<h4 class="text-white">Canales de Canadá <i class="flag ca"></i></h4>
`
for(const ele of document.getElementsByClassName("titulo-ca")){ele.innerHTML=(tituloCA)};

// CANALES RECOPILADOS PORTUGAL

let canalesTVCA = `
<div class="row card-canal px-2">
   
   <!--CANAL-->
  <div class="col-6 col-sm-4">  
    <span class="tv-tsn1if"></span>
  </div>
   <!--/CANAL-->
   
   <!--CANAL-->
  <div class="col-6 col-sm-4">  
    <span class="tv-tsn2if"></span>
  </div>
   <!--/CANAL-->
   
   <!--CANAL-->
  <div class="col-6 col-sm-4">  
    <span class="tv-tsn3if"></span>
  </div>
   <!--/CANAL-->
  
</div>
`
for(const ele of document.getElementsByClassName("tv-canales-ca")){ele.innerHTML=(canalesTVCA)};