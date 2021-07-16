
// F O X

var fsoul = "//lnc-fox-soul-scte.tubi.video/index.m3u8";
let fseattle = "//lnc-kcpq-fox-aws.tubi.video/index.m3u8";
let fdallas = "//lnc-kdfw-fox-aws.tubi.video/index.m3u8";
let fminneapolis = "//lnc-kmsp-fox-aws.tubi.video/index.m3u8";
let fhouston = "//lnc-kriv-fox-aws.tubi.video/index.m3u8";
let fphoenix = "//lnc-ksaz-fox-aws.tubi.video/index.m3u8";
let faustin = "//lnc-ktbc-fox-aws.tubi.video/index.m3u8";
let flosangeles = "//lnc-kttv-fox-aws.tubi.video/index.m3u8";
let fsanfrancisco = "//lnc-ktvu-fox-aws.tubi.video/index.m3u8";
let fatlanta = "//lnc-waga-fox-aws.tubi.video/index.m3u8";
let fchicago = "//lnc-wfld-fox-aws.tubi.video/index.m3u8";
let fmilwaukee = "//lnc-witi-fox-aws.tubi.video/index.m3u8";
let fdetroit = "//lnc-wjbk-fox-aws.tubi.video/index.m3u8";
let fnewyork = "//lnc-wnyw-fox-aws.tubi.video/index.m3u8";
let forlando = "//lnc-wofl-fox-aws.tubi.video/index.m3u8";
let fsacannah = "http://content.uplynk.com/channel/e56ba52a1b9d45ad8c8a033fd83fe480.m3u8";
let ftulsa = "//d3nzocdfkx2ybv.cloudfront.net/in/cmg-kokitv-hls-v3/live.m3u8";
let fmiami = "//bcsecurelivehls-i.akamaihd.net/hls/live/598043/4368278029001_1/onair/master.m3u8";
let fwashington = "//lnc-wttg-fox-aws.tubi.video/index.m3u8";
let ftampa = "//lnc-wtvt-fox-aws.tubi.video/index.m3u8";
let fphiladelphia = "//lnc-wtxf-fox-aws.tubi.video/index.m3u8";



function getParameterByName(name) {
              name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
              var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                  results = regex.exec(location.search);
              return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
          }

var getURL = getParameterByName('get');
        if (getURL == "#") {alert('El canal se encuentra Offline');}
        if (getURL == "") {alert('El canal se encuentra Offline');}
        if (getURL == "fsoul") {getURL = fsoul;}
        if (getURL == "fseattle") {getURL = fseattle;}
        if (getURL == "fdallas") {getURL = fdallas;}
        if (getURL == "fminneapolis") {getURL = fminneapolis;}
        if (getURL == "fhouston") {getURL = fhouston;}
        if (getURL == "fphoenix") {getURL = fphoenix;}
        if (getURL == "faustin") {getURL = faustin;}
        if (getURL == "flosangeles") {getURL = flosangeles;}
        if (getURL == "fsanfrancisco") {getURL = fsanfrancisco;}
        if (getURL == "fatlanta") {getURL = fatlanta;}
        if (getURL == "fchicago") {getURL = fchicago;}
        if (getURL == "fmilwaukee") {getURL = fmilwaukee;}
        if (getURL == "fdetroit") {getURL = fdetroit;}
        if (getURL == "fnewyork") {getURL = fnewyork;}
        if (getURL == "forlando") {getURL = forlando;}
        if (getURL == "fsacannah") {getURL = fsacannah;}
        if (getURL == "ftulsa") {getURL = ftulsa;}
        if (getURL == "fmiami") {getURL = fmiami;}
        if (getURL == "fwashington") {getURL = fwashington;}
        if (getURL == "ftampa") {getURL = ftampa;}
        if (getURL == "fphiladelphia") {getURL = fphiladelphia;}