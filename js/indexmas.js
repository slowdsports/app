// APP MENU
let logo = `
<div class="menu-toggle">
		<a href="go:" class="menu-link">
      
      <span class="menu-logo">
        <img style="width: 43px;" src="https://i.ibb.co/F7TZMKD/logo-43.png" alt="">
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
        <img width="40%" src="https://www.flaticon.es/svg/static/icons/svg/3778/3778757.svg" alt="">
        </span>
        <h6><b>Inicio</b></h6>
        </a>
        </li>
        <li>
        <a href="go:eventos">
        <span>
        <img width="40%" src="https://www.flaticon.es/svg/static/icons/svg/3778/3778916.svg" alt="">
        </span>
        <h6><b>Eventos</b></h6>
        </a>
        </li>
        <li>
        <a href="go:futbol">
        <span>
        <img width="40%" src="https://www.flaticon.es/svg/static/icons/svg/3697/3697055.svg" alt="">
        </span>
        <h6><b>Fútbol</b></h6>
        </a>
        </li>
        <li>
        <a href="go:livetv">
        <span>
        <img width="40%" src="https://www.flaticon.es/svg/static/icons/svg/3778/3778336.svg" alt="">
        </span>
        <h6><b>TV</b></h6>
        </a>
        </li>
      </ul>
      </center>
       </div>
`;
for(const ele of document.getElementsByClassName("bottom-bar")){ele.innerHTML=(bottombar)};

