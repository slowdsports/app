let live = `
<i class="fa fa-circle faa-tada animated status live-green"></i>
`;
for(const ele of document.getElementsByClassName("tv-live")){ele.innerHTML=(live)};

let down = `
<i class="fa fa-exclamation-triangle faa-nothing animated status down-red"></i>
`;
for(const ele of document.getElementsByClassName("tv-down")){ele.innerHTML=(down)};

let medium = `
<i class="fa fa-circle faa-tada animated status medium-yellow"></i>
`;
for(const ele of document.getElementsByClassName("tv-medium")){ele.innerHTML=(medium)};

