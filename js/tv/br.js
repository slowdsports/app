// BRASIL

let ESPNBR = `
<div class="card darkolorbg text-white card-canal">
       <a class="card-link text-white" href="go:espnbr">           
        <div class="card-body">
            <div class="d-flex justify-content-center">
                <img class="canal-img espn" src="https://i.ibb.co/w0qg9JF/trans.png" alt="">
            </div>
            
            <div class="d-flex justify-content-center"><h5>ESPN <i class="flag br"></i></h5></div>
        </div>
       </a>
    </div>
`
for(const ele of document.getElementsByClassName("tv-espnbr")){ele.innerHTML=(ESPNBR)};

let TNTSports = `
<div class="card darkolorbg text-white card-canal">
       <a class="card-link text-white" href="go:tntsportsb">           
        <div class="card-body">
            <div class="d-flex justify-content-center">
                <img class="canal-img tntsports" src="https://i.ibb.co/w0qg9JF/trans.png" alt="">
            </div>
            
            <div class="d-flex justify-content-center"><h5>TNT Sports <i class="flag br"></i></h5></div>
        </div>
       </a>
    </div>
`
for(const ele of document.getElementsByClassName("tv-tntsportsbr")){ele.innerHTML=(TNTSports)};

let UCLShow = `
<div class="card darkolorbg text-white card-canal">
       <a class="card-link text-white" href="go:uclshow">           
        <div class="card-body">
            <div class="d-flex justify-content-center">
                <img class="canal-img ucl" src="https://i.ibb.co/w0qg9JF/trans.png" alt="">
            </div>
            
            <div class="d-flex justify-content-center"><h5>UCL Show <i class="flag br"></i></h5></div>
        </div>
       </a>
    </div>
`
for(const ele of document.getElementsByClassName("tv-uclshow")){ele.innerHTML=(UCLShow)};