let tituloUK = `
<h4 class="text-white">Canales de UK <i class="flag england"></i></h4>
`
for(const ele of document.getElementsByClassName("titulo-uk")){ele.innerHTML=(tituloUK)};

// CANALES RECOPILADOS PORTUGAL

let canalesTVUK = `
<div class="row card-canal px-2">
   
   <!--CANAL-->
  <div class="col-6 col-sm-4">  
    <span class="tv-btsport1"></span>
  </div>
   <!--/CANAL-->
   
   <!--CANAL-->
  <div class="col-6 col-sm-4">  
    <span class="tv-btsport2"></span>
  </div>
   <!--/CANAL-->
   
   <!--CANAL-->
  <div class="col-6 col-sm-4">  
    <span class="tv-lfctv"></span>
  </div>
   <!--/CANAL-->
   
   <!--CANAL-->
  <div class="col-6 col-sm-4">  
    <span class="tv-mtveur"></span>
  </div>
   <!--/CANAL-->
   
   <!--CANAL-->
  <div class="col-6 col-sm-4">  
    <span class="tv-sky-racing1"></span>
  </div>
   <!--/CANAL-->
   
   <!--CANAL-->
  <div class="col-6 col-sm-4">  
    <span class="tv-sky-racing2"></span>
  </div>
   <!--/CANAL-->
   
   <!--CANAL-->
  <div class="col-6 col-sm-4">  
    <span class="tv-sky-thouroughb"></span>
  </div>
   <!--/CANAL-->
  
</div>
`
for(const ele of document.getElementsByClassName("tv-canales-uk")){ele.innerHTML=(canalesTVUK)};