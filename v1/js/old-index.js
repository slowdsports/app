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
        <img width="40%" src="https://image.flaticon.com/icons/svg/149/149412.svg" alt="">
        </span>
        </a>
        </li>
        <li>
        <a href="go:eventos">
        <span>
        <img width="40%" src="https://image.flaticon.com/icons/svg/149/149363.svg" alt="">
        </span>
        </a>
        </li>
        <li>
        <a href="go:futbol">
        <span>
        <img width="40%" src="https://image.flaticon.com/icons/svg/606/606077.svg" alt="">
        </span>
        </a>
        </li>
        <li>
        <a href="go:livetv">
        <span>
        <img width="40%" src="https://image.flaticon.com/icons/svg/149/149096.svg" alt="">
        </span>
        </a>
        </li>
      </ul>
      </center>
       </div>
`;
for(const ele of document.getElementsByClassName("bottom-bar")){ele.innerHTML=(bottombar)};

