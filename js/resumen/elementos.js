let elementoFutbol = `
<div class="card darkolorbg text-white card-canal">
       <a class="card-link text-white" href="go:futbolr">           
        <div class="card-body">
            <div class="d-flex justify-content-center">
                <img class="canal-img" src="https://image.flaticon.com/icons/svg/3099/3099380.svg" alt="">
            </div>
            
            <div class="d-flex justify-content-center"><h5>Fútbol</h5></div>
        </div>
       </a>
    </div>
`
for(const ele of document.getElementsByClassName("resumen-futbol")){ele.innerHTML=(elementoFutbol)};

let futbolrEurocopa = `
<div class="card darkolorbg text-white card-canal">
       <a class="card-link text-white" href="eurocopa/main.html">           
        <div class="card-body">
            <div class="d-flex justify-content-center">
                <img class="canal-img competition eurocopa" src="https://i.ibb.co/w0qg9JF/trans.png" alt="">
            </div>
            
            <div class="d-flex justify-content-center"><h5>Eurocopa</h5></div>
        </div>
       </a>
    </div>
`
for(const ele of document.getElementsByClassName("futbolr-eurocopa")){ele.innerHTML=(futbolrEurocopa)};

let futbolrCopaAmerica = `
<div class="card darkolorbg text-white card-canal">
       <a class="card-link text-white" href="camerica/main.html">           
        <div class="card-body">
            <div class="d-flex justify-content-center">
                <img class="canal-img competition copaamerica" src="https://i.ibb.co/w0qg9JF/trans.png" alt="">
            </div>
            
            <div class="d-flex justify-content-center"><h5>Copa América</h5></div>
        </div>
       </a>
    </div>
`
for(const ele of document.getElementsByClassName("futbolr-copaamerica")){ele.innerHTML=(futbolrCopaAmerica)};

let elementoBasket = `
<div class="card darkolorbg text-white card-canal">
       <a class="card-link text-white" href="go:basketr">           
        <div class="card-body">
            <div class="d-flex justify-content-center">
                <img class="canal-img" src="https://image.flaticon.com/icons/svg/3076/3076850.svg" alt="">
            </div>
            
            <div class="d-flex justify-content-center"><h5>Basket</h5></div>
        </div>
       </a>
    </div>
`
for(const ele of document.getElementsByClassName("resumen-basket")){ele.innerHTML=(elementoBasket)};