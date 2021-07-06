let tituloPT = `
<h4 class="text-white">Canales de Portugal <i class="flag pt"></i></h4>
`
for(const ele of document.getElementsByClassName("titulo-pt")){ele.innerHTML=(tituloPT)};

// CANALES RECOPILADOS PORTUGAL

let canalesTVPT = `
<div class="row card-canal px-2">
   
   <!--CANAL-->
  <div class="col-6 col-sm-4">  
    <span class="tv-sporttv1"></span>
  </div>
   <!--/CANAL-->
   
   <!--CANAL-->
  <div class="col-6 col-sm-4">  
    <span class="tv-sporttv2"></span>
  </div>
   <!--/CANAL-->
   
   <!--CANAL-->
  <div class="col-6 col-sm-4">  
    <span class="tv-sporttv3"></span>
  </div>
   <!--/CANAL-->
   
   <!--CANAL-->
  <div class="col-6 col-sm-4">  
    <span class="tv-sporttv4"></span>
  </div>
   <!--/CANAL-->
   
   <!--CANAL-->
  <div class="col-6 col-sm-4">  
    <span class="tv-sporttv5"></span>
  </div>
   <!--/CANAL-->
  
</div>
`
for(const ele of document.getElementsByClassName("tv-canales-pt")){ele.innerHTML=(canalesTVPT)};