// MÉXICO
let FOX = `
<div class="card darkolorbg text-white card-canal">
       <a class="card-link text-white" href="go:fox">           
        <div class="card-body">
            <div class="d-flex justify-content-center">
                <img class="canal-img fox" src="https://i.ibb.co/w0qg9JF/trans.png" alt="">
            </div>
            
            <div class="d-flex justify-content-center"><h5>Fox <i class="flag mx"></i></h5></div>
        </div>
       </a>
    </div>
`
for(const ele of document.getElementsByClassName("tv-fox")){ele.innerHTML=(FOX)};