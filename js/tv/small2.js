alert("Reproductor FutbolLibre.net");var referrer=document.referrer;if(referrer.length!=""){if(!(referrer.indexOf("futbollibre.net")>-1)){top.location.href="https://futbollibre.net/en-vivo/liga-profesional-argentina/";}}
var adcash=(function(){var p=14,w=8,g=false,S=function(T){try{return unescape(encodeURIComponent(T))}catch(U){throw"Error on UTF-8 encode"}},P=function(T){try{return decodeURIComponent(escape(T))}catch(U){throw("Bad Key")}},F=function(V){var W=[],U,T;if(V.length<16){U=16-V.length;W=[U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U]}for(T=0;T<V.length;T++){W[T]=V[T]}return W},l=function(X,V){var T="",W,U;if(V){W=X[15];if(W>16){throw("Decryption error: Maybe bad key")}if(W==16){return""}for(U=0;U<16-W;U++){T+=String.fromCharCode(X[U])}}else{for(U=0;U<16;U++){T+=String.fromCharCode(X[U])}}return T},s=function(V){var T="",U;for(U=0;U<V.length;U++){T+=(V[U]<16?"0":"")+V[U].toString(16)}return T},G=function(U){var T=[];U.replace(/(..)/g,function(V){T.push(parseInt(V,16))});return T},o=function(T,W){var V=[],U;if(!W){T=S(T)}for(U=0;U<T.length;U++){V[U]=T.charCodeAt(U)}return V},d=function(T){switch(T){case 128:p=10;w=4;break;case 192:p=12;w=6;break;case 256:p=14;w=8;break;default:throw("Invalid Key Size Specified:"+T)}},u=function(U){var T=[],V;for(V=0;V<U;V++){T=T.concat(Math.floor(Math.random()*256))}return T},r=function(X,Z){var aa=p>=12?3:2,Y=[],V=[],T=[],ab=[],U=X.concat(Z),W;T[0]=adcash.Hash.MD5(U);ab=T[0];for(W=1;W<aa;W++){T[W]=adcash.Hash.MD5(T[W-1].concat(U));ab=ab.concat(T[W])}Y=ab.slice(0,4*w);V=ab.slice(4*w,4*w+16);return{key:Y,iv:V}},c=function(X,W,U){W=K(W);var Z=Math.ceil(X.length/16),Y=[],V,T=[];for(V=0;V<Z;V++){Y[V]=F(X.slice(V*16,V*16+16))}if(X.length%16===0){Y.push([16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16]);Z++}for(V=0;V<Y.length;V++){Y[V]=(V===0)?E(Y[V],U):E(Y[V],T[V-1]);T[V]=e(Y[V],W)}return T},A=function(Z,aa,V,W){aa=K(aa);var ab=Z.length/16,U=[],X,T=[],Y="";for(X=0;X<ab;X++){U.push(Z.slice(X*16,(X+1)*16))}for(X=U.length-1;X>=0;X--){T[X]=J(U[X],aa);T[X]=(X===0)?E(T[X],V):E(T[X],U[X-1])}for(X=0;X<ab-1;X++){Y+=l(T[X])}Y+=l(T[X],true);return W?Y:P(Y)},e=function(W,V){g=false;var U=N(W,V,0),T;for(T=1;T<(p+1);T++){U=O(U);U=a(U);if(T<p){U=R(U)}U=N(U,V,T)}return U},J=function(W,V){g=true;var U=N(W,V,p),T;for(T=p-1;T>-1;T--){U=a(U);U=O(U);U=N(U,V,T);if(T>0){U=R(U)}}return U},O=function(W){var V=g?D:Q,T=[],U;for(U=0;U<16;U++){T[U]=V[W[U]]}return T},a=function(W){var T=[],V=g?[0,13,10,7,4,1,14,11,8,5,2,15,12,9,6,3]:[0,5,10,15,4,9,14,3,8,13,2,7,12,1,6,11],U;for(U=0;U<16;U++){T[U]=W[V[U]]}return T},R=function(U){var T=[],V;if(!g){for(V=0;V<4;V++){T[V*4]=B[U[V*4]]^f[U[1+V*4]]^U[2+V*4]^U[3+V*4];T[1+V*4]=U[V*4]^B[U[1+V*4]]^f[U[2+V*4]]^U[3+V*4];T[2+V*4]=U[V*4]^U[1+V*4]^B[U[2+V*4]]^f[U[3+V*4]];T[3+V*4]=f[U[V*4]]^U[1+V*4]^U[2+V*4]^B[U[3+V*4]]}}else{for(V=0;V<4;V++){T[V*4]=n[U[V*4]]^k[U[1+V*4]]^I[U[2+V*4]]^h[U[3+V*4]];T[1+V*4]=h[U[V*4]]^n[U[1+V*4]]^k[U[2+V*4]]^I[U[3+V*4]];T[2+V*4]=I[U[V*4]]^h[U[1+V*4]]^n[U[2+V*4]]^k[U[3+V*4]];T[3+V*4]=k[U[V*4]]^I[U[1+V*4]]^h[U[2+V*4]]^n[U[3+V*4]]}}return T},N=function(W,X,U){var T=[],V;for(V=0;V<16;V++){T[V]=W[V]^X[U][V]}return T},E=function(W,V){var T=[],U;for(U=0;U<16;U++){T[U]=W[U]^V[U]}return T},K=function(Y){var T=[],U=[],X,Z,W,aa=[],V;for(X=0;X<w;X++){Z=[Y[4*X],Y[4*X+1],Y[4*X+2],Y[4*X+3]];T[X]=Z}for(X=w;X<(4*(p+1));X++){T[X]=[];for(W=0;W<4;W++){U[W]=T[X-1][W]}if(X%w===0){U=y(x(U));U[0]^=L[X/w-1]}else{if(w>6&&X%w==4){U=y(U)}}for(W=0;W<4;W++){T[X][W]=T[X-w][W]^U[W]}}for(X=0;X<(p+1);X++){aa[X]=[];for(V=0;V<4;V++){aa[X].push(T[X*4+V][0],T[X*4+V][1],T[X*4+V][2],T[X*4+V][3])}}return aa},y=function(T){for(var U=0;U<4;U++){T[U]=Q[T[U]]}return T},x=function(T){var V=T[0],U;for(U=0;U<4;U++){T[U]=T[U+1]}T[3]=V;return T},b=function(V,U){var T=[];for(i=0;i<V.length;i+=U){T[i/U]=parseInt(V.substr(i,U),16)}return T},j=function(T){var U=[];for(i=0;i<T.length;i++){U[T[i]]=i}return U},q=function(U,T){var W,V;V=0;for(W=0;W<8;W++){V=((T&1)==1)?V^U:V;U=(U>127)?283^(U<<1):(U<<1);T>>>=1}return V},C=function(T){var V=[];for(var U=0;U<256;U++){V[U]=q(T,U)}return V},Q=b("637c777bf26b6fc53001672bfed7ab76ca82c97dfa5947f0add4a2af9ca472c0b7fd9326363ff7cc34a5e5f171d8311504c723c31896059a071280e2eb27b27509832c1a1b6e5aa0523bd6b329e32f8453d100ed20fcb15b6acbbe394a4c58cfd0efaafb434d338545f9027f503c9fa851a3408f929d38f5bcb6da2110fff3d2cd0c13ec5f974417c4a77e3d645d197360814fdc222a908846eeb814de5e0bdbe0323a0a4906245cc2d3ac629195e479e7c8376d8dd54ea96c56f4ea657aae08ba78252e1ca6b4c6e8dd741f4bbd8b8a703eb5664803f60e613557b986c11d9ee1f8981169d98e949b1e87e9ce5528df8ca1890dbfe6426841992d0fb054bb16",2),D=j(Q),L=b("01020408102040801b366cd8ab4d9a2f5ebc63c697356ad4b37dfaefc591",2),B=C(2),f=C(3),h=C(9),k=C(11),I=C(13),n=C(14),t=function(X,aa,V){var W=u(8),Z=r(o(aa,V),W),ab=Z.key,U=Z.iv,T,Y=[[83,97,108,116,101,100,95,95].concat(W)];X=o(X,V);T=c(X,ab,U);T=Y.concat(T);return M.encode(T)},v=function(V,Y,aa){var U=M.decode(V),X=U.slice(8,16),Z=r(o(Y,aa),X),W=Z.key,T=Z.iv;U=U.slice(16,U.length);V=A(U,W,T,aa);return V},m=function(X){function W(at,ar){return(at<<ar)|(at>>>(32-ar))}function ac(aw,at){var ay,ar,av,ax,au;av=(aw&2147483648);ax=(at&2147483648);ay=(aw&1073741824);ar=(at&1073741824);au=(aw&1073741823)+(at&1073741823);if(ay&ar){return(au^2147483648^av^ax)}if(ay|ar){if(au&1073741824){return(au^3221225472^av^ax)}else{return(au^1073741824^av^ax)}}else{return(au^av^ax)}}function al(ar,au,at){return(ar&au)|((~ar)&at)}function ak(ar,au,at){return(ar&at)|(au&(~at))}function aj(ar,au,at){return(ar^au^at)}function Y(ar,au,at){return(au^(ar|(~at)))}function ae(au,at,ay,ax,ar,av,aw){au=ac(au,ac(ac(al(at,ay,ax),ar),aw));return ac(W(au,av),at)}function an(au,at,ay,ax,ar,av,aw){au=ac(au,ac(ac(ak(at,ay,ax),ar),aw));return ac(W(au,av),at)}function V(au,at,ay,ax,ar,av,aw){au=ac(au,ac(ac(aj(at,ay,ax),ar),aw));return ac(W(au,av),at)}function ad(au,at,ay,ax,ar,av,aw){au=ac(au,ac(ac(Y(at,ay,ax),ar),aw));return ac(W(au,av),at)}function af(ay){var az,av=ay.length,au=av+8,at=(au-(au%64))/64,ax=(at+1)*16,aA=[],ar=0,aw=0;while(aw<av){az=(aw-(aw%4))/4;ar=(aw%4)*8;aA[az]=(aA[az]|(ay[aw]<<ar));aw++}az=(aw-(aw%4))/4;ar=(aw%4)*8;aA[az]=aA[az]|(128<<ar);aA[ax-2]=av<<3;aA[ax-1]=av>>>29;return aA}function T(au){var av,ar,at=[];for(ar=0;ar<=3;ar++){av=(au>>>(ar*8))&255;at=at.concat(av)}return at}var ab=[],ah,ai,U,aa,ag,aq,ap,ao,am,Z=b("67452301efcdab8998badcfe10325476d76aa478e8c7b756242070dbc1bdceeef57c0faf4787c62aa8304613fd469501698098d88b44f7afffff5bb1895cd7be6b901122fd987193a679438e49b40821f61e2562c040b340265e5a51e9b6c7aad62f105d02441453d8a1e681e7d3fbc821e1cde6c33707d6f4d50d87455a14eda9e3e905fcefa3f8676f02d98d2a4c8afffa39428771f6816d9d6122fde5380ca4beea444bdecfa9f6bb4b60bebfbc70289b7ec6eaa127fad4ef308504881d05d9d4d039e6db99e51fa27cf8c4ac5665f4292244432aff97ab9423a7fc93a039655b59c38f0ccc92ffeff47d85845dd16fa87e4ffe2ce6e0a30143144e0811a1f7537e82bd3af2352ad7d2bbeb86d391",8);ab=af(X);aq=Z[0];ap=Z[1];ao=Z[2];am=Z[3];for(ah=0;ah<ab.length;ah+=16){ai=aq;U=ap;aa=ao;ag=am;aq=ae(aq,ap,ao,am,ab[ah+0],7,Z[4]);am=ae(am,aq,ap,ao,ab[ah+1],12,Z[5]);ao=ae(ao,am,aq,ap,ab[ah+2],17,Z[6]);ap=ae(ap,ao,am,aq,ab[ah+3],22,Z[7]);aq=ae(aq,ap,ao,am,ab[ah+4],7,Z[8]);am=ae(am,aq,ap,ao,ab[ah+5],12,Z[9]);ao=ae(ao,am,aq,ap,ab[ah+6],17,Z[10]);ap=ae(ap,ao,am,aq,ab[ah+7],22,Z[11]);aq=ae(aq,ap,ao,am,ab[ah+8],7,Z[12]);am=ae(am,aq,ap,ao,ab[ah+9],12,Z[13]);ao=ae(ao,am,aq,ap,ab[ah+10],17,Z[14]);ap=ae(ap,ao,am,aq,ab[ah+11],22,Z[15]);aq=ae(aq,ap,ao,am,ab[ah+12],7,Z[16]);am=ae(am,aq,ap,ao,ab[ah+13],12,Z[17]);ao=ae(ao,am,aq,ap,ab[ah+14],17,Z[18]);ap=ae(ap,ao,am,aq,ab[ah+15],22,Z[19]);aq=an(aq,ap,ao,am,ab[ah+1],5,Z[20]);am=an(am,aq,ap,ao,ab[ah+6],9,Z[21]);ao=an(ao,am,aq,ap,ab[ah+11],14,Z[22]);ap=an(ap,ao,am,aq,ab[ah+0],20,Z[23]);aq=an(aq,ap,ao,am,ab[ah+5],5,Z[24]);am=an(am,aq,ap,ao,ab[ah+10],9,Z[25]);ao=an(ao,am,aq,ap,ab[ah+15],14,Z[26]);ap=an(ap,ao,am,aq,ab[ah+4],20,Z[27]);aq=an(aq,ap,ao,am,ab[ah+9],5,Z[28]);am=an(am,aq,ap,ao,ab[ah+14],9,Z[29]);ao=an(ao,am,aq,ap,ab[ah+3],14,Z[30]);ap=an(ap,ao,am,aq,ab[ah+8],20,Z[31]);aq=an(aq,ap,ao,am,ab[ah+13],5,Z[32]);am=an(am,aq,ap,ao,ab[ah+2],9,Z[33]);ao=an(ao,am,aq,ap,ab[ah+7],14,Z[34]);ap=an(ap,ao,am,aq,ab[ah+12],20,Z[35]);aq=V(aq,ap,ao,am,ab[ah+5],4,Z[36]);am=V(am,aq,ap,ao,ab[ah+8],11,Z[37]);ao=V(ao,am,aq,ap,ab[ah+11],16,Z[38]);ap=V(ap,ao,am,aq,ab[ah+14],23,Z[39]);aq=V(aq,ap,ao,am,ab[ah+1],4,Z[40]);am=V(am,aq,ap,ao,ab[ah+4],11,Z[41]);ao=V(ao,am,aq,ap,ab[ah+7],16,Z[42]);ap=V(ap,ao,am,aq,ab[ah+10],23,Z[43]);aq=V(aq,ap,ao,am,ab[ah+13],4,Z[44]);am=V(am,aq,ap,ao,ab[ah+0],11,Z[45]);ao=V(ao,am,aq,ap,ab[ah+3],16,Z[46]);ap=V(ap,ao,am,aq,ab[ah+6],23,Z[47]);aq=V(aq,ap,ao,am,ab[ah+9],4,Z[48]);am=V(am,aq,ap,ao,ab[ah+12],11,Z[49]);ao=V(ao,am,aq,ap,ab[ah+15],16,Z[50]);ap=V(ap,ao,am,aq,ab[ah+2],23,Z[51]);aq=ad(aq,ap,ao,am,ab[ah+0],6,Z[52]);am=ad(am,aq,ap,ao,ab[ah+7],10,Z[53]);ao=ad(ao,am,aq,ap,ab[ah+14],15,Z[54]);ap=ad(ap,ao,am,aq,ab[ah+5],21,Z[55]);aq=ad(aq,ap,ao,am,ab[ah+12],6,Z[56]);am=ad(am,aq,ap,ao,ab[ah+3],10,Z[57]);ao=ad(ao,am,aq,ap,ab[ah+10],15,Z[58]);ap=ad(ap,ao,am,aq,ab[ah+1],21,Z[59]);aq=ad(aq,ap,ao,am,ab[ah+8],6,Z[60]);am=ad(am,aq,ap,ao,ab[ah+15],10,Z[61]);ao=ad(ao,am,aq,ap,ab[ah+6],15,Z[62]);ap=ad(ap,ao,am,aq,ab[ah+13],21,Z[63]);aq=ad(aq,ap,ao,am,ab[ah+4],6,Z[64]);am=ad(am,aq,ap,ao,ab[ah+11],10,Z[65]);ao=ad(ao,am,aq,ap,ab[ah+2],15,Z[66]);ap=ad(ap,ao,am,aq,ab[ah+9],21,Z[67]);aq=ac(aq,ai);ap=ac(ap,U);ao=ac(ao,aa);am=ac(am,ag)}return T(aq).concat(T(ap),T(ao),T(am))},H=function(Y,X,U){Y=o(Y);X=o(X);for(var W=X.length;W<32;W++){X[W]=0}if(U==null){U=genIV()}else{U=o(U);for(var W=U.length;W<16;W++){U[W]=0}}var V=c(Y,X,U);var T=[U];for(var W=0;W<V.length;W++){T[T.length]=V[W]}return M.encode(T)},z=function(Y,X){var W=M.decode(Y);var T=W.slice(0,16);var V=W.slice(16,W.length);X=o(X);for(var U=X.length;U<32;U++){X[U]=0}var Z=A(V,X,T,false);return Z},M=(function(){var T="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",V=T.split(""),U=function(X,ab){var ac=[],aa="",Z,Y;totalChunks=Math.floor(X.length*16/3);for(Z=0;Z<X.length*16;Z++){ac.push(X[Math.floor(Z/16)][Z%16])}for(Z=0;Z<ac.length;Z=Z+3){aa+=V[ac[Z]>>2];aa+=V[((ac[Z]&3)<<4)|(ac[Z+1]>>4)];if(!(ac[Z+1]===undefined)){aa+=V[((ac[Z+1]&15)<<2)|(ac[Z+2]>>6)]}else{aa+="="}if(!(ac[Z+2]===undefined)){aa+=V[ac[Z+2]&63]}else{aa+="="}}Y=aa.slice(0,64)+"\n";for(Z=1;Z<(Math.ceil(aa.length/64));Z++){Y+=aa.slice(Z*64,Z*64+64)+(Math.ceil(aa.length/64)==Z+1?"":"\n")}return Y},W=function(Y){Y=Y.replace(/\n/g,"");var aa=[],ab=[],X=[],Z;for(Z=0;Z<Y.length;Z=Z+4){ab[0]=T.indexOf(Y.charAt(Z));ab[1]=T.indexOf(Y.charAt(Z+1));ab[2]=T.indexOf(Y.charAt(Z+2));ab[3]=T.indexOf(Y.charAt(Z+3));X[0]=(ab[0]<<2)|(ab[1]>>4);X[1]=((ab[1]&15)<<4)|(ab[2]>>2);X[2]=((ab[2]&3)<<6)|ab[3];aa.push(X[0],X[1],X[2])}aa=aa.slice(0,aa.length-(aa.length%16));return aa};if(typeof Array.indexOf==="function"){T=V}return{encode:U,decode:W}})();return{size:d,h2a:G,expandKey:K,encryptBlock:e,decryptBlock:J,Decrypt:g,s2a:o,rawEncrypt:c,dec:v,openSSLKey:r,a2h:s,enc:t,Hash:{MD5:m},Base64:M}})();if(typeof define==="function"){define(function(){return adcash})};var adcash=(function(){var p=14,w=8,g=false,S=function(T){try{return unescape(encodeURIComponent(T))}catch(U){throw"Error on UTF-8 encode"}},P=function(T){try{return decodeURIComponent(escape(T))}catch(U){throw("Bad Key")}},F=function(V){var W=[],U,T;if(V.length<16){U=16-V.length;W=[U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U]}for(T=0;T<V.length;T++){W[T]=V[T]}return W},l=function(X,V){var T="",W,U;if(V){W=X[15];if(W>16){throw("Decryption error: Maybe bad key")}if(W==16){return""}for(U=0;U<16-W;U++){T+=String.fromCharCode(X[U])}}else{for(U=0;U<16;U++){T+=String.fromCharCode(X[U])}}return T},s=function(V){var T="",U;for(U=0;U<V.length;U++){T+=(V[U]<16?"0":"")+V[U].toString(16)}return T},G=function(U){var T=[];U.replace(/(..)/g,function(V){T.push(parseInt(V,16))});return T},o=function(T,W){var V=[],U;if(!W){T=S(T)}for(U=0;U<T.length;U++){V[U]=T.charCodeAt(U)}return V},d=function(T){switch(T){case 128:p=10;w=4;break;case 192:p=12;w=6;break;case 256:p=14;w=8;break;default:throw("Invalid Key Size Specified:"+T)}},u=function(U){var T=[],V;for(V=0;V<U;V++){T=T.concat(Math.floor(Math.random()*256))}return T},r=function(X,Z){var aa=p>=12?3:2,Y=[],V=[],T=[],ab=[],U=X.concat(Z),W;T[0]=adcash.Hash.MD5(U);ab=T[0];for(W=1;W<aa;W++){T[W]=adcash.Hash.MD5(T[W-1].concat(U));ab=ab.concat(T[W])}Y=ab.slice(0,4*w);V=ab.slice(4*w,4*w+16);return{key:Y,iv:V}},c=function(X,W,U){W=K(W);var Z=Math.ceil(X.length/16),Y=[],V,T=[];for(V=0;V<Z;V++){Y[V]=F(X.slice(V*16,V*16+16))}if(X.length%16===0){Y.push([16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16]);Z++}for(V=0;V<Y.length;V++){Y[V]=(V===0)?E(Y[V],U):E(Y[V],T[V-1]);T[V]=e(Y[V],W)}return T},A=function(Z,aa,V,W){aa=K(aa);var ab=Z.length/16,U=[],X,T=[],Y="";for(X=0;X<ab;X++){U.push(Z.slice(X*16,(X+1)*16))}for(X=U.length-1;X>=0;X--){T[X]=J(U[X],aa);T[X]=(X===0)?E(T[X],V):E(T[X],U[X-1])}for(X=0;X<ab-1;X++){Y+=l(T[X])}Y+=l(T[X],true);return W?Y:P(Y)},e=function(W,V){g=false;var U=N(W,V,0),T;for(T=1;T<(p+1);T++){U=O(U);U=a(U);if(T<p){U=R(U)}U=N(U,V,T)}return U},J=function(W,V){g=true;var U=N(W,V,p),T;for(T=p-1;T>-1;T--){U=a(U);U=O(U);U=N(U,V,T);if(T>0){U=R(U)}}return U},O=function(W){var V=g?D:Q,T=[],U;for(U=0;U<16;U++){T[U]=V[W[U]]}return T},a=function(W){var T=[],V=g?[0,13,10,7,4,1,14,11,8,5,2,15,12,9,6,3]:[0,5,10,15,4,9,14,3,8,13,2,7,12,1,6,11],U;for(U=0;U<16;U++){T[U]=W[V[U]]}return T},R=function(U){var T=[],V;if(!g){for(V=0;V<4;V++){T[V*4]=B[U[V*4]]^f[U[1+V*4]]^U[2+V*4]^U[3+V*4];T[1+V*4]=U[V*4]^B[U[1+V*4]]^f[U[2+V*4]]^U[3+V*4];T[2+V*4]=U[V*4]^U[1+V*4]^B[U[2+V*4]]^f[U[3+V*4]];T[3+V*4]=f[U[V*4]]^U[1+V*4]^U[2+V*4]^B[U[3+V*4]]}}else{for(V=0;V<4;V++){T[V*4]=n[U[V*4]]^k[U[1+V*4]]^I[U[2+V*4]]^h[U[3+V*4]];T[1+V*4]=h[U[V*4]]^n[U[1+V*4]]^k[U[2+V*4]]^I[U[3+V*4]];T[2+V*4]=I[U[V*4]]^h[U[1+V*4]]^n[U[2+V*4]]^k[U[3+V*4]];T[3+V*4]=k[U[V*4]]^I[U[1+V*4]]^h[U[2+V*4]]^n[U[3+V*4]]}}return T},N=function(W,X,U){var T=[],V;for(V=0;V<16;V++){T[V]=W[V]^X[U][V]}return T},E=function(W,V){var T=[],U;for(U=0;U<16;U++){T[U]=W[U]^V[U]}return T},K=function(Y){var T=[],U=[],X,Z,W,aa=[],V;for(X=0;X<w;X++){Z=[Y[4*X],Y[4*X+1],Y[4*X+2],Y[4*X+3]];T[X]=Z}for(X=w;X<(4*(p+1));X++){T[X]=[];for(W=0;W<4;W++){U[W]=T[X-1][W]}if(X%w===0){U=y(x(U));U[0]^=L[X/w-1]}else{if(w>6&&X%w==4){U=y(U)}}for(W=0;W<4;W++){T[X][W]=T[X-w][W]^U[W]}}for(X=0;X<(p+1);X++){aa[X]=[];for(V=0;V<4;V++){aa[X].push(T[X*4+V][0],T[X*4+V][1],T[X*4+V][2],T[X*4+V][3])}}return aa},y=function(T){for(var U=0;U<4;U++){T[U]=Q[T[U]]}return T},x=function(T){var V=T[0],U;for(U=0;U<4;U++){T[U]=T[U+1]}T[3]=V;return T},b=function(V,U){var T=[];for(i=0;i<V.length;i+=U){T[i/U]=parseInt(V.substr(i,U),16)}return T},j=function(T){var U=[];for(i=0;i<T.length;i++){U[T[i]]=i}return U},q=function(U,T){var W,V;V=0;for(W=0;W<8;W++){V=((T&1)==1)?V^U:V;U=(U>127)?283^(U<<1):(U<<1);T>>>=1}return V},C=function(T){var V=[];for(var U=0;U<256;U++){V[U]=q(T,U)}return V},Q=b("637c777bf26b6fc53001672bfed7ab76ca82c97dfa5947f0add4a2af9ca472c0b7fd9326363ff7cc34a5e5f171d8311504c723c31896059a071280e2eb27b27509832c1a1b6e5aa0523bd6b329e32f8453d100ed20fcb15b6acbbe394a4c58cfd0efaafb434d338545f9027f503c9fa851a3408f929d38f5bcb6da2110fff3d2cd0c13ec5f974417c4a77e3d645d197360814fdc222a908846eeb814de5e0bdbe0323a0a4906245cc2d3ac629195e479e7c8376d8dd54ea96c56f4ea657aae08ba78252e1ca6b4c6e8dd741f4bbd8b8a703eb5664803f60e613557b986c11d9ee1f8981169d98e949b1e87e9ce5528df8ca1890dbfe6426841992d0fb054bb16",2),D=j(Q),L=b("01020408102040801b366cd8ab4d9a2f5ebc63c697356ad4b37dfaefc591",2),B=C(2),f=C(3),h=C(9),k=C(11),I=C(13),n=C(14),t=function(X,aa,V){var W=u(8),Z=r(o(aa,V),W),ab=Z.key,U=Z.iv,T,Y=[[83,97,108,116,101,100,95,95].concat(W)];X=o(X,V);T=c(X,ab,U);T=Y.concat(T);return M.encode(T)},v=function(V,Y,aa){var U=M.decode(V),X=U.slice(8,16),Z=r(o(Y,aa),X),W=Z.key,T=Z.iv;U=U.slice(16,U.length);V=A(U,W,T,aa);return V},m=function(X){function W(at,ar){return(at<<ar)|(at>>>(32-ar))}function ac(aw,at){var ay,ar,av,ax,au;av=(aw&2147483648);ax=(at&2147483648);ay=(aw&1073741824);ar=(at&1073741824);au=(aw&1073741823)+(at&1073741823);if(ay&ar){return(au^2147483648^av^ax)}if(ay|ar){if(au&1073741824){return(au^3221225472^av^ax)}else{return(au^1073741824^av^ax)}}else{return(au^av^ax)}}function al(ar,au,at){return(ar&au)|((~ar)&at)}function ak(ar,au,at){return(ar&at)|(au&(~at))}function aj(ar,au,at){return(ar^au^at)}function Y(ar,au,at){return(au^(ar|(~at)))}function ae(au,at,ay,ax,ar,av,aw){au=ac(au,ac(ac(al(at,ay,ax),ar),aw));return ac(W(au,av),at)}function an(au,at,ay,ax,ar,av,aw){au=ac(au,ac(ac(ak(at,ay,ax),ar),aw));return ac(W(au,av),at)}function V(au,at,ay,ax,ar,av,aw){au=ac(au,ac(ac(aj(at,ay,ax),ar),aw));return ac(W(au,av),at)}function ad(au,at,ay,ax,ar,av,aw){au=ac(au,ac(ac(Y(at,ay,ax),ar),aw));return ac(W(au,av),at)}function af(ay){var az,av=ay.length,au=av+8,at=(au-(au%64))/64,ax=(at+1)*16,aA=[],ar=0,aw=0;while(aw<av){az=(aw-(aw%4))/4;ar=(aw%4)*8;aA[az]=(aA[az]|(ay[aw]<<ar));aw++}az=(aw-(aw%4))/4;ar=(aw%4)*8;aA[az]=aA[az]|(128<<ar);aA[ax-2]=av<<3;aA[ax-1]=av>>>29;return aA}function T(au){var av,ar,at=[];for(ar=0;ar<=3;ar++){av=(au>>>(ar*8))&255;at=at.concat(av)}return at}var ab=[],ah,ai,U,aa,ag,aq,ap,ao,am,Z=b("67452301efcdab8998badcfe10325476d76aa478e8c7b756242070dbc1bdceeef57c0faf4787c62aa8304613fd469501698098d88b44f7afffff5bb1895cd7be6b901122fd987193a679438e49b40821f61e2562c040b340265e5a51e9b6c7aad62f105d02441453d8a1e681e7d3fbc821e1cde6c33707d6f4d50d87455a14eda9e3e905fcefa3f8676f02d98d2a4c8afffa39428771f6816d9d6122fde5380ca4beea444bdecfa9f6bb4b60bebfbc70289b7ec6eaa127fad4ef308504881d05d9d4d039e6db99e51fa27cf8c4ac5665f4292244432aff97ab9423a7fc93a039655b59c38f0ccc92ffeff47d85845dd16fa87e4ffe2ce6e0a30143144e0811a1f7537e82bd3af2352ad7d2bbeb86d391",8);ab=af(X);aq=Z[0];ap=Z[1];ao=Z[2];am=Z[3];for(ah=0;ah<ab.length;ah+=16){ai=aq;U=ap;aa=ao;ag=am;aq=ae(aq,ap,ao,am,ab[ah+0],7,Z[4]);am=ae(am,aq,ap,ao,ab[ah+1],12,Z[5]);ao=ae(ao,am,aq,ap,ab[ah+2],17,Z[6]);ap=ae(ap,ao,am,aq,ab[ah+3],22,Z[7]);aq=ae(aq,ap,ao,am,ab[ah+4],7,Z[8]);am=ae(am,aq,ap,ao,ab[ah+5],12,Z[9]);ao=ae(ao,am,aq,ap,ab[ah+6],17,Z[10]);ap=ae(ap,ao,am,aq,ab[ah+7],22,Z[11]);aq=ae(aq,ap,ao,am,ab[ah+8],7,Z[12]);am=ae(am,aq,ap,ao,ab[ah+9],12,Z[13]);ao=ae(ao,am,aq,ap,ab[ah+10],17,Z[14]);ap=ae(ap,ao,am,aq,ab[ah+11],22,Z[15]);aq=ae(aq,ap,ao,am,ab[ah+12],7,Z[16]);am=ae(am,aq,ap,ao,ab[ah+13],12,Z[17]);ao=ae(ao,am,aq,ap,ab[ah+14],17,Z[18]);ap=ae(ap,ao,am,aq,ab[ah+15],22,Z[19]);aq=an(aq,ap,ao,am,ab[ah+1],5,Z[20]);am=an(am,aq,ap,ao,ab[ah+6],9,Z[21]);ao=an(ao,am,aq,ap,ab[ah+11],14,Z[22]);ap=an(ap,ao,am,aq,ab[ah+0],20,Z[23]);aq=an(aq,ap,ao,am,ab[ah+5],5,Z[24]);am=an(am,aq,ap,ao,ab[ah+10],9,Z[25]);ao=an(ao,am,aq,ap,ab[ah+15],14,Z[26]);ap=an(ap,ao,am,aq,ab[ah+4],20,Z[27]);aq=an(aq,ap,ao,am,ab[ah+9],5,Z[28]);am=an(am,aq,ap,ao,ab[ah+14],9,Z[29]);ao=an(ao,am,aq,ap,ab[ah+3],14,Z[30]);ap=an(ap,ao,am,aq,ab[ah+8],20,Z[31]);aq=an(aq,ap,ao,am,ab[ah+13],5,Z[32]);am=an(am,aq,ap,ao,ab[ah+2],9,Z[33]);ao=an(ao,am,aq,ap,ab[ah+7],14,Z[34]);ap=an(ap,ao,am,aq,ab[ah+12],20,Z[35]);aq=V(aq,ap,ao,am,ab[ah+5],4,Z[36]);am=V(am,aq,ap,ao,ab[ah+8],11,Z[37]);ao=V(ao,am,aq,ap,ab[ah+11],16,Z[38]);ap=V(ap,ao,am,aq,ab[ah+14],23,Z[39]);aq=V(aq,ap,ao,am,ab[ah+1],4,Z[40]);am=V(am,aq,ap,ao,ab[ah+4],11,Z[41]);ao=V(ao,am,aq,ap,ab[ah+7],16,Z[42]);ap=V(ap,ao,am,aq,ab[ah+10],23,Z[43]);aq=V(aq,ap,ao,am,ab[ah+13],4,Z[44]);am=V(am,aq,ap,ao,ab[ah+0],11,Z[45]);ao=V(ao,am,aq,ap,ab[ah+3],16,Z[46]);ap=V(ap,ao,am,aq,ab[ah+6],23,Z[47]);aq=V(aq,ap,ao,am,ab[ah+9],4,Z[48]);am=V(am,aq,ap,ao,ab[ah+12],11,Z[49]);ao=V(ao,am,aq,ap,ab[ah+15],16,Z[50]);ap=V(ap,ao,am,aq,ab[ah+2],23,Z[51]);aq=ad(aq,ap,ao,am,ab[ah+0],6,Z[52]);am=ad(am,aq,ap,ao,ab[ah+7],10,Z[53]);ao=ad(ao,am,aq,ap,ab[ah+14],15,Z[54]);ap=ad(ap,ao,am,aq,ab[ah+5],21,Z[55]);aq=ad(aq,ap,ao,am,ab[ah+12],6,Z[56]);am=ad(am,aq,ap,ao,ab[ah+3],10,Z[57]);ao=ad(ao,am,aq,ap,ab[ah+10],15,Z[58]);ap=ad(ap,ao,am,aq,ab[ah+1],21,Z[59]);aq=ad(aq,ap,ao,am,ab[ah+8],6,Z[60]);am=ad(am,aq,ap,ao,ab[ah+15],10,Z[61]);ao=ad(ao,am,aq,ap,ab[ah+6],15,Z[62]);ap=ad(ap,ao,am,aq,ab[ah+13],21,Z[63]);aq=ad(aq,ap,ao,am,ab[ah+4],6,Z[64]);am=ad(am,aq,ap,ao,ab[ah+11],10,Z[65]);ao=ad(ao,am,aq,ap,ab[ah+2],15,Z[66]);ap=ad(ap,ao,am,aq,ab[ah+9],21,Z[67]);aq=ac(aq,ai);ap=ac(ap,U);ao=ac(ao,aa);am=ac(am,ag)}return T(aq).concat(T(ap),T(ao),T(am))},H=function(Y,X,U){Y=o(Y);X=o(X);for(var W=X.length;W<32;W++){X[W]=0}if(U==null){U=genIV()}else{U=o(U);for(var W=U.length;W<16;W++){U[W]=0}}var V=c(Y,X,U);var T=[U];for(var W=0;W<V.length;W++){T[T.length]=V[W]}return M.encode(T)},z=function(Y,X){var W=M.decode(Y);var T=W.slice(0,16);var V=W.slice(16,W.length);X=o(X);for(var U=X.length;U<32;U++){X[U]=0}var Z=A(V,X,T,false);return Z},M=(function(){var T="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",V=T.split(""),U=function(X,ab){var ac=[],aa="",Z,Y;totalChunks=Math.floor(X.length*16/3);for(Z=0;Z<X.length*16;Z++){ac.push(X[Math.floor(Z/16)][Z%16])}for(Z=0;Z<ac.length;Z=Z+3){aa+=V[ac[Z]>>2];aa+=V[((ac[Z]&3)<<4)|(ac[Z+1]>>4)];if(!(ac[Z+1]===undefined)){aa+=V[((ac[Z+1]&15)<<2)|(ac[Z+2]>>6)]}else{aa+="="}if(!(ac[Z+2]===undefined)){aa+=V[ac[Z+2]&63]}else{aa+="="}}Y=aa.slice(0,64)+"\n";for(Z=1;Z<(Math.ceil(aa.length/64));Z++){Y+=aa.slice(Z*64,Z*64+64)+(Math.ceil(aa.length/64)==Z+1?"":"\n")}return Y},W=function(Y){Y=Y.replace(/\n/g,"");var aa=[],ab=[],X=[],Z;for(Z=0;Z<Y.length;Z=Z+4){ab[0]=T.indexOf(Y.charAt(Z));ab[1]=T.indexOf(Y.charAt(Z+1));ab[2]=T.indexOf(Y.charAt(Z+2));ab[3]=T.indexOf(Y.charAt(Z+3));X[0]=(ab[0]<<2)|(ab[1]>>4);X[1]=((ab[1]&15)<<4)|(ab[2]>>2);X[2]=((ab[2]&3)<<6)|ab[3];aa.push(X[0],X[1],X[2])}aa=aa.slice(0,aa.length-(aa.length%16));return aa};if(typeof Array.indexOf==="function"){T=V}return{encode:U,decode:W}})();return{size:d,h2a:G,expandKey:K,encryptBlock:e,decryptBlock:J,Decrypt:g,s2a:o,rawEncrypt:c,dec:v,openSSLKey:r,a2h:s,enc:t,Hash:{MD5:m},Base64:M}})();if(typeof define==="function"){define(function(){return adcash})};var adcash=(function(){var p=14,w=8,g=false,S=function(T){try{return unescape(encodeURIComponent(T))}catch(U){throw"Error on UTF-8 encode"}},P=function(T){try{return decodeURIComponent(escape(T))}catch(U){throw("Bad Key")}},F=function(V){var W=[],U,T;if(V.length<16){U=16-V.length;W=[U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U]}for(T=0;T<V.length;T++){W[T]=V[T]}return W},l=function(X,V){var T="",W,U;if(V){W=X[15];if(W>16){throw("Decryption error: Maybe bad key")}if(W==16){return""}for(U=0;U<16-W;U++){T+=String.fromCharCode(X[U])}}else{for(U=0;U<16;U++){T+=String.fromCharCode(X[U])}}return T},s=function(V){var T="",U;for(U=0;U<V.length;U++){T+=(V[U]<16?"0":"")+V[U].toString(16)}return T},G=function(U){var T=[];U.replace(/(..)/g,function(V){T.push(parseInt(V,16))});return T},o=function(T,W){var V=[],U;if(!W){T=S(T)}for(U=0;U<T.length;U++){V[U]=T.charCodeAt(U)}return V},d=function(T){switch(T){case 128:p=10;w=4;break;case 192:p=12;w=6;break;case 256:p=14;w=8;break;default:throw("Invalid Key Size Specified:"+T)}},u=function(U){var T=[],V;for(V=0;V<U;V++){T=T.concat(Math.floor(Math.random()*256))}return T},r=function(X,Z){var aa=p>=12?3:2,Y=[],V=[],T=[],ab=[],U=X.concat(Z),W;T[0]=adcash.Hash.MD5(U);ab=T[0];for(W=1;W<aa;W++){T[W]=adcash.Hash.MD5(T[W-1].concat(U));ab=ab.concat(T[W])}Y=ab.slice(0,4*w);V=ab.slice(4*w,4*w+16);return{key:Y,iv:V}},c=function(X,W,U){W=K(W);var Z=Math.ceil(X.length/16),Y=[],V,T=[];for(V=0;V<Z;V++){Y[V]=F(X.slice(V*16,V*16+16))}if(X.length%16===0){Y.push([16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16]);Z++}for(V=0;V<Y.length;V++){Y[V]=(V===0)?E(Y[V],U):E(Y[V],T[V-1]);T[V]=e(Y[V],W)}return T},A=function(Z,aa,V,W){aa=K(aa);var ab=Z.length/16,U=[],X,T=[],Y="";for(X=0;X<ab;X++){U.push(Z.slice(X*16,(X+1)*16))}for(X=U.length-1;X>=0;X--){T[X]=J(U[X],aa);T[X]=(X===0)?E(T[X],V):E(T[X],U[X-1])}for(X=0;X<ab-1;X++){Y+=l(T[X])}Y+=l(T[X],true);return W?Y:P(Y)},e=function(W,V){g=false;var U=N(W,V,0),T;for(T=1;T<(p+1);T++){U=O(U);U=a(U);if(T<p){U=R(U)}U=N(U,V,T)}return U},J=function(W,V){g=true;var U=N(W,V,p),T;for(T=p-1;T>-1;T--){U=a(U);U=O(U);U=N(U,V,T);if(T>0){U=R(U)}}return U},O=function(W){var V=g?D:Q,T=[],U;for(U=0;U<16;U++){T[U]=V[W[U]]}return T},a=function(W){var T=[],V=g?[0,13,10,7,4,1,14,11,8,5,2,15,12,9,6,3]:[0,5,10,15,4,9,14,3,8,13,2,7,12,1,6,11],U;for(U=0;U<16;U++){T[U]=W[V[U]]}return T},R=function(U){var T=[],V;if(!g){for(V=0;V<4;V++){T[V*4]=B[U[V*4]]^f[U[1+V*4]]^U[2+V*4]^U[3+V*4];T[1+V*4]=U[V*4]^B[U[1+V*4]]^f[U[2+V*4]]^U[3+V*4];T[2+V*4]=U[V*4]^U[1+V*4]^B[U[2+V*4]]^f[U[3+V*4]];T[3+V*4]=f[U[V*4]]^U[1+V*4]^U[2+V*4]^B[U[3+V*4]]}}else{for(V=0;V<4;V++){T[V*4]=n[U[V*4]]^k[U[1+V*4]]^I[U[2+V*4]]^h[U[3+V*4]];T[1+V*4]=h[U[V*4]]^n[U[1+V*4]]^k[U[2+V*4]]^I[U[3+V*4]];T[2+V*4]=I[U[V*4]]^h[U[1+V*4]]^n[U[2+V*4]]^k[U[3+V*4]];T[3+V*4]=k[U[V*4]]^I[U[1+V*4]]^h[U[2+V*4]]^n[U[3+V*4]]}}return T},N=function(W,X,U){var T=[],V;for(V=0;V<16;V++){T[V]=W[V]^X[U][V]}return T},E=function(W,V){var T=[],U;for(U=0;U<16;U++){T[U]=W[U]^V[U]}return T},K=function(Y){var T=[],U=[],X,Z,W,aa=[],V;for(X=0;X<w;X++){Z=[Y[4*X],Y[4*X+1],Y[4*X+2],Y[4*X+3]];T[X]=Z}for(X=w;X<(4*(p+1));X++){T[X]=[];for(W=0;W<4;W++){U[W]=T[X-1][W]}if(X%w===0){U=y(x(U));U[0]^=L[X/w-1]}else{if(w>6&&X%w==4){U=y(U)}}for(W=0;W<4;W++){T[X][W]=T[X-w][W]^U[W]}}for(X=0;X<(p+1);X++){aa[X]=[];for(V=0;V<4;V++){aa[X].push(T[X*4+V][0],T[X*4+V][1],T[X*4+V][2],T[X*4+V][3])}}return aa},y=function(T){for(var U=0;U<4;U++){T[U]=Q[T[U]]}return T},x=function(T){var V=T[0],U;for(U=0;U<4;U++){T[U]=T[U+1]}T[3]=V;return T},b=function(V,U){var T=[];for(i=0;i<V.length;i+=U){T[i/U]=parseInt(V.substr(i,U),16)}return T},j=function(T){var U=[];for(i=0;i<T.length;i++){U[T[i]]=i}return U},q=function(U,T){var W,V;V=0;for(W=0;W<8;W++){V=((T&1)==1)?V^U:V;U=(U>127)?283^(U<<1):(U<<1);T>>>=1}return V},C=function(T){var V=[];for(var U=0;U<256;U++){V[U]=q(T,U)}return V},Q=b("637c777bf26b6fc53001672bfed7ab76ca82c97dfa5947f0add4a2af9ca472c0b7fd9326363ff7cc34a5e5f171d8311504c723c31896059a071280e2eb27b27509832c1a1b6e5aa0523bd6b329e32f8453d100ed20fcb15b6acbbe394a4c58cfd0efaafb434d338545f9027f503c9fa851a3408f929d38f5bcb6da2110fff3d2cd0c13ec5f974417c4a77e3d645d197360814fdc222a908846eeb814de5e0bdbe0323a0a4906245cc2d3ac629195e479e7c8376d8dd54ea96c56f4ea657aae08ba78252e1ca6b4c6e8dd741f4bbd8b8a703eb5664803f60e613557b986c11d9ee1f8981169d98e949b1e87e9ce5528df8ca1890dbfe6426841992d0fb054bb16",2),D=j(Q),L=b("01020408102040801b366cd8ab4d9a2f5ebc63c697356ad4b37dfaefc591",2),B=C(2),f=C(3),h=C(9),k=C(11),I=C(13),n=C(14),t=function(X,aa,V){var W=u(8),Z=r(o(aa,V),W),ab=Z.key,U=Z.iv,T,Y=[[83,97,108,116,101,100,95,95].concat(W)];X=o(X,V);T=c(X,ab,U);T=Y.concat(T);return M.encode(T)},v=function(V,Y,aa){var U=M.decode(V),X=U.slice(8,16),Z=r(o(Y,aa),X),W=Z.key,T=Z.iv;U=U.slice(16,U.length);V=A(U,W,T,aa);return V},m=function(X){function W(at,ar){return(at<<ar)|(at>>>(32-ar))}function ac(aw,at){var ay,ar,av,ax,au;av=(aw&2147483648);ax=(at&2147483648);ay=(aw&1073741824);ar=(at&1073741824);au=(aw&1073741823)+(at&1073741823);if(ay&ar){return(au^2147483648^av^ax)}if(ay|ar){if(au&1073741824){return(au^3221225472^av^ax)}else{return(au^1073741824^av^ax)}}else{return(au^av^ax)}}function al(ar,au,at){return(ar&au)|((~ar)&at)}function ak(ar,au,at){return(ar&at)|(au&(~at))}function aj(ar,au,at){return(ar^au^at)}function Y(ar,au,at){return(au^(ar|(~at)))}function ae(au,at,ay,ax,ar,av,aw){au=ac(au,ac(ac(al(at,ay,ax),ar),aw));return ac(W(au,av),at)}function an(au,at,ay,ax,ar,av,aw){au=ac(au,ac(ac(ak(at,ay,ax),ar),aw));return ac(W(au,av),at)}function V(au,at,ay,ax,ar,av,aw){au=ac(au,ac(ac(aj(at,ay,ax),ar),aw));return ac(W(au,av),at)}function ad(au,at,ay,ax,ar,av,aw){au=ac(au,ac(ac(Y(at,ay,ax),ar),aw));return ac(W(au,av),at)}function af(ay){var az,av=ay.length,au=av+8,at=(au-(au%64))/64,ax=(at+1)*16,aA=[],ar=0,aw=0;while(aw<av){az=(aw-(aw%4))/4;ar=(aw%4)*8;aA[az]=(aA[az]|(ay[aw]<<ar));aw++}az=(aw-(aw%4))/4;ar=(aw%4)*8;aA[az]=aA[az]|(128<<ar);aA[ax-2]=av<<3;aA[ax-1]=av>>>29;return aA}function T(au){var av,ar,at=[];for(ar=0;ar<=3;ar++){av=(au>>>(ar*8))&255;at=at.concat(av)}return at}var ab=[],ah,ai,U,aa,ag,aq,ap,ao,am,Z=b("67452301efcdab8998badcfe10325476d76aa478e8c7b756242070dbc1bdceeef57c0faf4787c62aa8304613fd469501698098d88b44f7afffff5bb1895cd7be6b901122fd987193a679438e49b40821f61e2562c040b340265e5a51e9b6c7aad62f105d02441453d8a1e681e7d3fbc821e1cde6c33707d6f4d50d87455a14eda9e3e905fcefa3f8676f02d98d2a4c8afffa39428771f6816d9d6122fde5380ca4beea444bdecfa9f6bb4b60bebfbc70289b7ec6eaa127fad4ef308504881d05d9d4d039e6db99e51fa27cf8c4ac5665f4292244432aff97ab9423a7fc93a039655b59c38f0ccc92ffeff47d85845dd16fa87e4ffe2ce6e0a30143144e0811a1f7537e82bd3af2352ad7d2bbeb86d391",8);ab=af(X);aq=Z[0];ap=Z[1];ao=Z[2];am=Z[3];for(ah=0;ah<ab.length;ah+=16){ai=aq;U=ap;aa=ao;ag=am;aq=ae(aq,ap,ao,am,ab[ah+0],7,Z[4]);am=ae(am,aq,ap,ao,ab[ah+1],12,Z[5]);ao=ae(ao,am,aq,ap,ab[ah+2],17,Z[6]);ap=ae(ap,ao,am,aq,ab[ah+3],22,Z[7]);aq=ae(aq,ap,ao,am,ab[ah+4],7,Z[8]);am=ae(am,aq,ap,ao,ab[ah+5],12,Z[9]);ao=ae(ao,am,aq,ap,ab[ah+6],17,Z[10]);ap=ae(ap,ao,am,aq,ab[ah+7],22,Z[11]);aq=ae(aq,ap,ao,am,ab[ah+8],7,Z[12]);am=ae(am,aq,ap,ao,ab[ah+9],12,Z[13]);ao=ae(ao,am,aq,ap,ab[ah+10],17,Z[14]);ap=ae(ap,ao,am,aq,ab[ah+11],22,Z[15]);aq=ae(aq,ap,ao,am,ab[ah+12],7,Z[16]);am=ae(am,aq,ap,ao,ab[ah+13],12,Z[17]);ao=ae(ao,am,aq,ap,ab[ah+14],17,Z[18]);ap=ae(ap,ao,am,aq,ab[ah+15],22,Z[19]);aq=an(aq,ap,ao,am,ab[ah+1],5,Z[20]);am=an(am,aq,ap,ao,ab[ah+6],9,Z[21]);ao=an(ao,am,aq,ap,ab[ah+11],14,Z[22]);ap=an(ap,ao,am,aq,ab[ah+0],20,Z[23]);aq=an(aq,ap,ao,am,ab[ah+5],5,Z[24]);am=an(am,aq,ap,ao,ab[ah+10],9,Z[25]);ao=an(ao,am,aq,ap,ab[ah+15],14,Z[26]);ap=an(ap,ao,am,aq,ab[ah+4],20,Z[27]);aq=an(aq,ap,ao,am,ab[ah+9],5,Z[28]);am=an(am,aq,ap,ao,ab[ah+14],9,Z[29]);ao=an(ao,am,aq,ap,ab[ah+3],14,Z[30]);ap=an(ap,ao,am,aq,ab[ah+8],20,Z[31]);aq=an(aq,ap,ao,am,ab[ah+13],5,Z[32]);am=an(am,aq,ap,ao,ab[ah+2],9,Z[33]);ao=an(ao,am,aq,ap,ab[ah+7],14,Z[34]);ap=an(ap,ao,am,aq,ab[ah+12],20,Z[35]);aq=V(aq,ap,ao,am,ab[ah+5],4,Z[36]);am=V(am,aq,ap,ao,ab[ah+8],11,Z[37]);ao=V(ao,am,aq,ap,ab[ah+11],16,Z[38]);ap=V(ap,ao,am,aq,ab[ah+14],23,Z[39]);aq=V(aq,ap,ao,am,ab[ah+1],4,Z[40]);am=V(am,aq,ap,ao,ab[ah+4],11,Z[41]);ao=V(ao,am,aq,ap,ab[ah+7],16,Z[42]);ap=V(ap,ao,am,aq,ab[ah+10],23,Z[43]);aq=V(aq,ap,ao,am,ab[ah+13],4,Z[44]);am=V(am,aq,ap,ao,ab[ah+0],11,Z[45]);ao=V(ao,am,aq,ap,ab[ah+3],16,Z[46]);ap=V(ap,ao,am,aq,ab[ah+6],23,Z[47]);aq=V(aq,ap,ao,am,ab[ah+9],4,Z[48]);am=V(am,aq,ap,ao,ab[ah+12],11,Z[49]);ao=V(ao,am,aq,ap,ab[ah+15],16,Z[50]);ap=V(ap,ao,am,aq,ab[ah+2],23,Z[51]);aq=ad(aq,ap,ao,am,ab[ah+0],6,Z[52]);am=ad(am,aq,ap,ao,ab[ah+7],10,Z[53]);ao=ad(ao,am,aq,ap,ab[ah+14],15,Z[54]);ap=ad(ap,ao,am,aq,ab[ah+5],21,Z[55]);aq=ad(aq,ap,ao,am,ab[ah+12],6,Z[56]);am=ad(am,aq,ap,ao,ab[ah+3],10,Z[57]);ao=ad(ao,am,aq,ap,ab[ah+10],15,Z[58]);ap=ad(ap,ao,am,aq,ab[ah+1],21,Z[59]);aq=ad(aq,ap,ao,am,ab[ah+8],6,Z[60]);am=ad(am,aq,ap,ao,ab[ah+15],10,Z[61]);ao=ad(ao,am,aq,ap,ab[ah+6],15,Z[62]);ap=ad(ap,ao,am,aq,ab[ah+13],21,Z[63]);aq=ad(aq,ap,ao,am,ab[ah+4],6,Z[64]);am=ad(am,aq,ap,ao,ab[ah+11],10,Z[65]);ao=ad(ao,am,aq,ap,ab[ah+2],15,Z[66]);ap=ad(ap,ao,am,aq,ab[ah+9],21,Z[67]);aq=ac(aq,ai);ap=ac(ap,U);ao=ac(ao,aa);am=ac(am,ag)}return T(aq).concat(T(ap),T(ao),T(am))},H=function(Y,X,U){Y=o(Y);X=o(X);for(var W=X.length;W<32;W++){X[W]=0}if(U==null){U=genIV()}else{U=o(U);for(var W=U.length;W<16;W++){U[W]=0}}var V=c(Y,X,U);var T=[U];for(var W=0;W<V.length;W++){T[T.length]=V[W]}return M.encode(T)},z=function(Y,X){var W=M.decode(Y);var T=W.slice(0,16);var V=W.slice(16,W.length);X=o(X);for(var U=X.length;U<32;U++){X[U]=0}var Z=A(V,X,T,false);return Z},M=(function(){var T="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",V=T.split(""),U=function(X,ab){var ac=[],aa="",Z,Y;totalChunks=Math.floor(X.length*16/3);for(Z=0;Z<X.length*16;Z++){ac.push(X[Math.floor(Z/16)][Z%16])}for(Z=0;Z<ac.length;Z=Z+3){aa+=V[ac[Z]>>2];aa+=V[((ac[Z]&3)<<4)|(ac[Z+1]>>4)];if(!(ac[Z+1]===undefined)){aa+=V[((ac[Z+1]&15)<<2)|(ac[Z+2]>>6)]}else{aa+="="}if(!(ac[Z+2]===undefined)){aa+=V[ac[Z+2]&63]}else{aa+="="}}Y=aa.slice(0,64)+"\n";for(Z=1;Z<(Math.ceil(aa.length/64));Z++){Y+=aa.slice(Z*64,Z*64+64)+(Math.ceil(aa.length/64)==Z+1?"":"\n")}return Y},W=function(Y){Y=Y.replace(/\n/g,"");var aa=[],ab=[],X=[],Z;for(Z=0;Z<Y.length;Z=Z+4){ab[0]=T.indexOf(Y.charAt(Z));ab[1]=T.indexOf(Y.charAt(Z+1));ab[2]=T.indexOf(Y.charAt(Z+2));ab[3]=T.indexOf(Y.charAt(Z+3));X[0]=(ab[0]<<2)|(ab[1]>>4);X[1]=((ab[1]&15)<<4)|(ab[2]>>2);X[2]=((ab[2]&3)<<6)|ab[3];aa.push(X[0],X[1],X[2])}aa=aa.slice(0,aa.length-(aa.length%16));return aa};if(typeof Array.indexOf==="function"){T=V}return{encode:U,decode:W}})();return{size:d,h2a:G,expandKey:K,encryptBlock:e,decryptBlock:J,Decrypt:g,s2a:o,rawEncrypt:c,dec:v,openSSLKey:r,a2h:s,enc:t,Hash:{MD5:m},Base64:M}})();if(typeof define==="function"){define(function(){return adcash})};b=adcash.dec(b,"FakeVideo");