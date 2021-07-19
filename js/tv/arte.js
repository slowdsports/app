let tituloArte = `
<h4 class="text-white">Canales de Arte</h4>
`
for(const ele of document.getElementsByClassName("titulo-arte")){ele.innerHTML=(tituloArte)};

// CANALES RECOPILADOS BRASIL

let canalesTVArte = `
    <h3 class="blancolor">Actualmente no hay canales en esta categoría.</h3>
<div class="row card-canal px-2">
   

   <!--CANAL--
  <div class="col-6 col-sm-4">  
    <span class="tv-la1"></span>
  </div>
   <!--/CANAL-->
   
   <!--CANAL--
  <div class="col-6 col-sm-4">  
    <span class="tv-la2"></span>
  </div>
   <!--/CANAL-->
   
   <!--CANAL--
  <div class="col-6 col-sm-4">  
    <span class="tv-a3media"></span>
  </div>
   <!--/CANAL-->
  
</div>
`
for(const ele of document.getElementsByClassName("tv-canales-arte")){ele.innerHTML=(canalesTVArte)};