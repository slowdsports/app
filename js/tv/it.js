// ITALIA
let SportItalia = `
<div class="card darkolorbg text-white card-canal">
       <a class="card-link text-white" href="go:sportitali">           
        <div class="card-body">
            <div class="d-flex justify-content-center">
                <img class="canal-img sportitalia" src="https://i.ibb.co/w0qg9JF/trans.png" alt="">
            </div>
            
            <div class="d-flex justify-content-center"><h5>Sport Italia </h5></div>
        </div>
       </a>
    </div>
`
for(const ele of document.getElementsByClassName("tv-sportitalia")){ele.innerHTML=(SportItalia)};

let RaiSport2 = `
<div class="card darkolorbg text-white card-canal">
       <a class="card-link text-white" href="go:raisport2">           
        <div class="card-body">
            <div class="d-flex justify-content-center">
                <img class="canal-img raisport" src="https://i.ibb.co/w0qg9JF/trans.png" alt="">
            </div>
            
            <div class="d-flex justify-content-center"><h5>Rai Sport 2 </h5></div>
        </div>
       </a>
    </div>
`
for(const ele of document.getElementsByClassName("tv-raisport2")){ele.innerHTML=(RaiSport2)};
