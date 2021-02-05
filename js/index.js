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
        <img width="40%" src="//www.flaticon.es/svg/vstatic/svg/104/104702.svg?token=exp=1612509930~hmac=158824771d818c39c4e9bc038264894c" alt="">
        </span>
        <p class="bottom-text">Inicio</p>
        </a>
        </li>
        <li>
        <a href="go:eventos">
        <span>
        <img width="40%" src="//www.flaticon.es/svg/vstatic/svg/833/833593.svg?token=exp=1612510022~hmac=5f7fb5692a5e035868efa22b9f4e9f17" alt="">
        </span>
        <p class="bottom-text">Eventos</p>
        </a>
        </li>
        <li>
        <a href="go:futbol">
        <span>
        <img width="40%" src="//www.flaticon.com/svg/vstatic/svg/53/53283.svg?token=exp=1612510062~hmac=e621819242187477bd5a6aa2f09a1cb4" alt="">
        </span>
        <p class="bottom-text">Fútbol</p>
        </a>
        </li>
        <li>
        <a href="go:basket">
        <span>
        <img width="40%" src="images/basket.png" alt="">
        </span>
        <p class="bottom-text">Basket</p>
        </a>
        </li>
        <li>
        <a href="go:livetv">
        <span>
        <img width="40%" src="//www.flaticon.es/svg/vstatic/svg/88/88056.svg?token=exp=1612509459~hmac=661d57a311243d89f5b8108e7ba74e6d" alt="">
        </span>
        <p class="bottom-text">TV</p>
        </a>
        </li>
      </ul>
      </center>
       </div>
`;
for(const ele of document.getElementsByClassName("bottom-bar")){ele.innerHTML=(bottombar)};

