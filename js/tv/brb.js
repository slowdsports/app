let tituloBR = `
<h4 class="text-white">Canales de Brasil <i class="flag br"></i></h4>
`
for(const ele of document.getElementsByClassName("titulo-br")){ele.innerHTML=(tituloBR)};

// CANALES RECOPILADOS BRASIL

let canalesTVBR = `
<div class="row card-canal px-2">
   
   <!--CANAL-->
  <div class="col-6 col-sm-4">  
    <span class="tv-espnbr"></span>
  </div>
   <!--/CANAL-->
   
   <!--CANAL-->
  <div class="col-6 col-sm-4">  
    <span class="tv-tntsportsbr"></span>
  </div>
   <!--/CANAL-->
   
   <!--CANAL-->
  <div class="col-6 col-sm-4">  
    <span class="tv-uclshow"></span>
  </div>
  
</div>
`
for(const ele of document.getElementsByClassName("tv-canales-br")){ele.innerHTML=(canalesTVBR)};