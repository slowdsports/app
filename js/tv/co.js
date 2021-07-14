let Win = `
<div class="card darkolorbg text-white card-canal">
       <a class="card-link text-white" href="go:win">           
        <div class="card-body">
            <div class="d-flex justify-content-center">
                <img class="canal-img win" src="https://i.ibb.co/w0qg9JF/trans.png" alt="">
            </div>
            
            <div class="d-flex justify-content-center"><h5><span class="hidden">Sports</span>Win</h5></div>
        </div>
       </a>
    </div>
`
for(const ele of document.getElementsByClassName("tv-win")){ele.innerHTML=(Win)};

let WinPlus = `
<div class="card darkolorbg text-white card-canal">
       <a class="card-link text-white" href="go:winp">           
        <div class="card-body">
            <div class="d-flex justify-content-center">
                <img class="canal-img win" src="https://i.ibb.co/w0qg9JF/trans.png" alt="">
            </div>
            
            <div class="d-flex justify-content-center"><h5><span class="hidden">Sports</span>Win+</h5></div>
        </div>
       </a>
    </div>
`
for(const ele of document.getElementsByClassName("tv-winp")){ele.innerHTML=(WinPlus)};