// PORTUGAL
let NBCSN = `
<div class="card darkolorbg text-white card-canal">
       <a class="card-link text-white" href="go:nbcsn">           
        <div class="card-body">
            <div class="d-flex justify-content-center">
                <img class="canal-img nbc" src="https://i.ibb.co/w0qg9JF/trans.png" alt="">
            </div>
            
            <div class="d-flex justify-content-center"><h5>NBCSN </h5></div>
        </div>
       </a>
    </div>
`
for(const ele of document.getElementsByClassName("tv-nbcsn")){ele.innerHTML=(NBCSN)};