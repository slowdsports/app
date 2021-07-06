let tituloAR = `
<h4 class="text-white">Canales de Argentina <i class="flag ar"></i></h4>
`
for(const ele of document.getElementsByClassName("titulo-ar")){ele.innerHTML=(tituloAR)};

// CANALES RECOPILADOS ARGENTINA

let canalesTVAR = `
<div class="row card-canal px-2">
   
   <!--CANAL-->
  <div class="col-6 col-sm-4">  
    <span class="tv-espnsur"></span>
  </div>
   <!--/CANAL-->
   
   <!--CANAL-->
  <div class="col-6 col-sm-4">  
    <span class="tv-espnsurif"></span>
  </div>
   <!--/CANAL-->
   
   <!--CANAL-->
  <div class="col-6 col-sm-4">  
    <span class="tv-espn2sur"></span>
  </div>
   <!--/CANAL-->
   
   <!--CANAL-->
  <div class="col-6 col-sm-4">  
    <span class="tv-espn2surif"></span>
  </div>
   <!--/CANAL-->
   
   <!--CANAL-->
  <div class="col-6 col-sm-4">  
    <span class="tv-espn3sur"></span>
  </div>
   <!--/CANAL-->
   
   <!--CANAL-->
  <div class="col-6 col-sm-4">  
    <span class="tv-espn3surif"></span>
  </div>
   <!--/CANAL-->
  
</div>
`
for(const ele of document.getElementsByClassName("tv-canales-ar")){ele.innerHTML=(canalesTVAR)};