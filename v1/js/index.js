// APP MENU
let logo = `
<div class="menu-toggle">
		<a href="go:" class="menu-link">
      
      <span class="menu-logo">
        <img src="https://i.ibb.co/PNytkmd/logob-1.png" alt="">
        <p class="text-menu"></p>
      </span>
      
			<span class="menu-icon">
				<span class="menu-line menu-line-1"></span>
				<span class="menu-line menu-line-2"></span>
			</span>

      <span class="menu-circle">
        <span class="menu-pulse first-pulse"></span>
        <span class="menu-pulse second-pulse"></span>
      </span>
      
    </a>
  </div>
   <br><br><br><br><hr>
`;
for(const ele of document.getElementsByClassName("app-logo")){ele.innerHTML=(logo)};

// BOTTOM BAR
let bottombar = `
<div style="position: fixed;" class="altmenu">
      <center>
      <ul class="list-group-horizontal">
        <li class="list-grup-item">
        <a href="go:home">
        <span class="activo">
        <img width="40%" src="https://slowdsports.github.io/app/js/images/home.png" alt="">
        </span>
        <p class="bottom-text">Inicio</p>
        </a>
        </li>
        <li>
        <a href="go:futbol">
        <span>
        <img width="40%" src="https://slowdsports.github.io/app/js/images/futbol.png" alt="">
        </span>
        <p class="bottom-text">Fútbol</p>
        </a>
        </li>
        <li>
        <a href="go:basket">
        <span>
        <img width="40%" src="https://slowdsports.github.io/app/js/images/basket.png" alt="">
        </span>
        <p class="bottom-text">Basket</p>
        </a>
        </li>
      </ul>
      </center>
       </div>
`;
for(const ele of document.getElementsByClassName("bottom-bar")){ele.innerHTML=(bottombar)};
// BOTTOM BAR
let bottombar2 = `
<div style="position: fixed;" class="altmenu">
      <center>
      <ul class="list-group-horizontal">
        <li class="list-grup-item">
        <a href="go:home">
        <span class="activo">
        <img width="40%" src="https://slowdsports.github.io/app/js/images/home.png" alt="">
        </span>
        <p class="bottom-text">Inicio</p>
        </a>
        </li>
        <li>
        <a href="go:eventos">
        <span>
        <img width="40%" src="https://slowdsports.github.io/app/js/images/eventos.png" alt="">
        </span>
        <p class="bottom-text">Eventos</p>
        </a>
        </li>
        <li>
        <a href="go:futbol">
        <span>
        <img width="40%" src="https://slowdsports.github.io/app/js/images/futbol.png" alt="">
        </span>
        <p class="bottom-text">Fútbol</p>
        </a>
        </li>
        <li>
        <a href="go:basket">
        <span>
        <img width="40%" src="https://slowdsports.github.io/app/js/images/basket.png" alt="">
        </span>
        <p class="bottom-text">Basket</p>
        </a>
        </li>
        <li>
        <a href="go:livetv">
        <span>
        <img width="40%" src="https://slowdsports.github.io/app/js/images/tv.png" alt="">
        </span>
        <p class="bottom-text">TV</p>
        </a>
        </li>
      </ul>
      </center>
       </div>
`;
for(const ele of document.getElementsByClassName("bottom-bar2")){ele.innerHTML=(bottombar2)};

