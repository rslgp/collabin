(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{150:function(e,t,a){},189:function(e,t){},343:function(e,t,a){},347:function(e,t){},349:function(e,t){},358:function(e,t){},360:function(e,t){},388:function(e,t){},389:function(e,t){},394:function(e,t){},396:function(e,t){},403:function(e,t){},422:function(e,t){},477:function(e,t){},559:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a(318),n=a(116),i=a(16),s=(a(343),a(150),a(319)),o=a.n(s),l=a(54),u=a.n(l),j={homepage:"https://rslgp.github.io/collabin/#",loginPage:"auth/login",profilePage:"page",publicProfilePage:"profile/:profile_id",tagPage:"tags/:tag",allTagPage:"tags",multiTagPage:"querytags",fixURL:function(e){if(e)return e.includes("http")?e:e.includes("9")?"https://wa.me/55"+e:"https://"+e},themeColor:"#f0f2f5"},b=j,p=a(344),f={jwt:"eed624733ec663a2a42bc7f99a94f41e"},d="access_token",x={getSessionData:function(){try{var e=u.a.get(d);if(!e)throw new Error("No Auth Cookie");var t=p.verify(e,f.jwt);if(t.exp&&t.exp<Date.now()/1e3)throw this.removeSessionData(),new Error("Token Expired");return t}catch(a){return console.log(a.message),window.location.href=b.homepage+"/"+b.loginPage,null}},saveSessionData:function(e){var t={email:e.email,exp:Math.floor(Date.now()/1e3)+7200},a=p.sign(t,f.jwt);u.a.set(d,a,{expires:1/24})},removeSessionData:function(){u.a.remove(d)}},h=a(3),g="796862051841-u21s62ekivlponlpdd3vlbkbuh6vln8g.apps.googleusercontent.com";var O=function(){return Object(h.jsx)("div",{className:"GoogleLogin",children:Object(h.jsx)(o.a,{clientId:g,buttonText:"Continue with Google",onSuccess:function(e){console.log(e),x.saveSessionData(e.profileObj);var t=e.profileObj,a={name:t.name,imageUrl:t.imageUrl};u.a.set("profile",JSON.stringify(a)),window.location.href=b.homepage+"/"+b.profilePage},onFailure:console.log,cookiePolicy:"single_host_origin"})})};var m=function(){return Object(h.jsxs)("div",{className:"Header",children:[Object(h.jsx)("div",{className:"espacamento"}),Object(h.jsxs)("svg",{width:"355.2",height:"218.88221829015296",viewBox:"0 0 350 215.67786149086018",class:"css-1j8o68f",children:[Object(h.jsx)("defs",{id:"SvgjsDefs2319"}),Object(h.jsx)("g",{id:"SvgjsG2320",featurekey:"e7LhAk-0",transform:"matrix(1.5673701437361842,0,0,1.5673701437361842,100.0377040561825,-14.124959000850733)",fill:"#222831",children:Object(h.jsxs)("g",{xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("path",{d:"M52.97,26.428c-7.903,0-14.331,6.429-14.331,14.33c0,7.903,6.428,14.331,14.331,14.331c7.901,0,14.33-6.428,14.33-14.331   C67.3,32.856,60.871,26.428,52.97,26.428z"}),Object(h.jsx)("path",{d:"M38.368,46.5c-0.233-0.593-0.436-1.202-0.599-1.828l-18.577,5.247c-1.249-3.026-4.224-5.155-7.698-5.155   c-4.601,0-8.328,3.728-8.328,8.326c0,4.599,3.728,8.328,8.328,8.328c4.599,0,8.326-3.729,8.326-8.328   c0-0.451-0.045-0.889-0.115-1.32L38.368,46.5z"}),Object(h.jsx)("path",{d:"M30.136,20.9c0.23-0.144,0.445-0.302,0.65-0.469l10.63,9.719c0.435-0.474,0.9-0.918,1.389-1.335l-10.721-9.801   c1.357-2.031,1.497-4.75,0.126-6.961c-1.87-3.016-5.83-3.946-8.846-2.076c-3.018,1.87-3.945,5.831-2.076,8.847   S27.119,22.771,30.136,20.9z"}),Object(h.jsx)("path",{d:"M64.758,30.416l11.468-8.525c1.736,1.72,4.377,2.373,6.811,1.447c3.315-1.265,4.98-4.977,3.717-8.292   c-1.265-3.317-4.977-4.981-8.294-3.718c-3.314,1.263-4.98,4.977-3.716,8.292c0.097,0.254,0.213,0.495,0.337,0.729l-11.69,8.69   C63.872,29.469,64.33,29.929,64.758,30.416z"}),Object(h.jsx)("path",{d:"M47.697,74.572c-0.396-0.215-0.804-0.385-1.215-0.53l4.023-17.785c-0.637-0.102-1.263-0.244-1.875-0.42L44.609,73.61   c-3.254-0.348-6.547,1.25-8.206,4.303c-2.194,4.041-0.699,9.097,3.341,11.293c4.042,2.196,9.098,0.7,11.293-3.341   C53.232,81.824,51.738,76.768,47.697,74.572z"}),Object(h.jsx)("path",{d:"M89.794,49.945c-2.887-2.062-6.901-1.394-8.962,1.495c-0.159,0.222-0.296,0.451-0.42,0.683l-13.218-4.748   c-0.275,0.591-0.585,1.16-0.93,1.708l13.496,4.849c-0.47,2.398,0.446,4.958,2.565,6.471c2.889,2.063,6.901,1.393,8.965-1.495   C93.354,56.02,92.683,52.007,89.794,49.945z"})]})}),Object(h.jsx)("g",{id:"SvgjsG2321",featurekey:"Qg0WB5-0",transform:"matrix(4.59076613073104,0,0,4.59076613073104,-3.4889854991464464,122.30167769129551)",fill:"#222831",children:Object(h.jsx)("path",{d:"M7.78 5.380000000000001 c1.6667 0 3.0666 0.47 4.2 1.41 s1.7867 2.1834 1.96 3.73 l-3.04 0 c-0.10666 -0.70666 -0.46 -1.3 -1.06 -1.78 s-1.2867 -0.72 -2.06 -0.72 c-1.2267 0 -2.18 0.44 -2.86 1.32 s-1.02 2.0734 -1.02 3.58 c0 1.4667 0.34334 2.63 1.03 3.49 s1.6367 1.29 2.85 1.29 c0.90666 0 1.64 -0.27666 2.2 -0.83 s0.90666 -1.3433 1.04 -2.37 l3.04 0 c-0.16 1.8133 -0.81 3.24 -1.95 4.28 s-2.5834 1.56 -4.33 1.56 c-2.0934 0 -3.7866 -0.69 -5.08 -2.07 s-1.94 -3.1634 -1.94 -5.35 c0 -2.2134 0.64 -4.0234 1.92 -5.43 s2.98 -2.11 5.1 -2.11 z M20.92 9.38 c1.6533 0 2.96 0.50334 3.92 1.51 s1.44 2.3234 1.44 3.95 c0 1.64 -0.49 2.9566 -1.47 3.95 s-2.2766 1.49 -3.89 1.49 c-1.64 0 -2.94 -0.50334 -3.9 -1.51 s-1.44 -2.3166 -1.44 -3.93 c0 -1.6667 0.49 -2.9934 1.47 -3.98 s2.27 -1.48 3.87 -1.48 z M18.42 14.84 c0 1.0533 0.21334 1.8666 0.64 2.44 s1.0467 0.86 1.86 0.86 c0.84 0 1.47 -0.29334 1.89 -0.88 s0.63 -1.3933 0.63 -2.42 c0 -1.0667 -0.21666 -1.8867 -0.65 -2.46 s-1.0633 -0.86 -1.89 -0.86 c-0.8 0 -1.4133 0.28666 -1.84 0.86 s-0.64 1.3933 -0.64 2.46 z M31.04 5.720000000000001 l0 14.28 l-2.84 0 l0 -14.28 l2.84 0 z M36.2 5.720000000000001 l0 14.28 l-2.84 0 l0 -14.28 l2.84 0 z M43.2 9.38 c3.0134 0.01334 4.52 0.9933 4.52 2.94 l0 5.48 c0 1.0133 0.12 1.7467 0.36 2.2 l-2.88 0 c-0.10666 -0.32 -0.17332 -0.65334 -0.19998 -1 c-0.84 0.85334 -2 1.28 -3.48 1.28 c-1.08 0 -1.9367 -0.27334 -2.57 -0.82 s-0.95 -1.3067 -0.95 -2.28 c0 -0.94666 0.3 -1.68 0.9 -2.2 c0.61334 -0.54666 1.7267 -0.89332 3.34 -1.04 c1.1467 -0.12 1.8733 -0.27 2.18 -0.45 s0.46 -0.45666 0.46 -0.83 c0 -0.46666 -0.14 -0.81332 -0.42 -1.04 s-0.74666 -0.34 -1.4 -0.34 c-0.6 0 -1.0533 0.12334 -1.36 0.37 s-0.48666 0.64332 -0.54 1.19 l-2.84 0 c0.06666 -1.1333 0.53332 -1.9933 1.4 -2.58 s2.0266 -0.88 3.48 -0.88 z M40.839999999999996 17.06 c0 0.88 0.58 1.32 1.74 1.32 c1.52 -0.01334 2.2866 -0.79334 2.3 -2.34 l0 -1.1 c-0.22666 0.22666 -0.8 0.39332 -1.72 0.49998 c-0.8 0.09334 -1.3867 0.25668 -1.76 0.49002 s-0.56 0.61 -0.56 1.13 z M52.760000000000005 5.720000000000001 l0.000019531 5.2 l0.04 0 c0.30666 -0.46666 0.74332 -0.84 1.31 -1.12 s1.2167 -0.42 1.95 -0.42 c1.2667 0 2.2966 0.50666 3.09 1.52 s1.19 2.32 1.19 3.92 c0 1.6133 -0.39334 2.9266 -1.18 3.94 s-1.8267 1.52 -3.12 1.52 c-1.68 0 -2.8066 -0.53334 -3.38 -1.6 l-0.04 0 l0 1.32 l-2.7 0 l0 -14.28 l2.84 0 z M52.660000000000004 14.84 c0 1 0.21998 1.8 0.65998 2.4 s1.0267 0.9 1.76 0.9 c0.72 0 1.3033 -0.29334 1.75 -0.88 s0.67 -1.3933 0.67 -2.42 c0 -1.0133 -0.21666 -1.82 -0.65 -2.42 s-1.03 -0.9 -1.79 -0.9 c-0.74666 0 -1.3333 0.30666 -1.76 0.92 s-0.64 1.4133 -0.64 2.4 z M65.06 5.720000000000001 l0 2.34 l-2.84 0 l0 -2.34 l2.84 0 z M65.06 9.66 l0 10.34 l-2.84 0 l0 -10.34 l2.84 0 z M73.24 9.38 c1.32 0 2.2766 0.33338 2.87 1 s0.89 1.7267 0.89 3.18 l0 6.44 l-2.84 0 l0 -5.86 c0 -0.85334 -0.13666 -1.4867 -0.41 -1.9 s-0.74334 -0.62 -1.41 -0.62 c-0.77334 0 -1.3333 0.23334 -1.68 0.7 s-0.52 1.2333 -0.52 2.3 l0 5.38 l-2.84 0 l0 -10.34 l2.7 0 l0 1.44 l0.06 0 c0.70666 -1.1467 1.7667 -1.72 3.18 -1.72 z"})})]}),Object(h.jsx)("p",{children:"Construa experi\xeancia e portfolio com projetos em equipe"}),Object(h.jsx)("div",{className:"espacamento"})]})},v=a(617),w=a(610),y=a(1),k=a(7),S=a(10),C=a(28),P=a(320),D=Object(P.a)({apiKey:"AIzaSyCdMWZ25HYgn5YeXOLY6Ogw9qwpxJP4Cpo",authDomain:"myapp-d87de.firebaseapp.com",projectId:"myapp-d87de",storageBucket:"myapp-d87de.appspot.com",messagingSenderId:"101658274836",appId:"1:101658274836:web:364eb204ab277197d30b01"}),M=Object(C.g)(D),E=function(){var e=Object(k.a)(Object(y.a)().mark((function e(t){var a,c,r,n;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=Object(C.a)(M,"users"),c=Object(C.h)(a,Object(C.k)("tags","array-contains-any",t)),e.next=5,Object(C.f)(c);case 5:return r=e.sent,n=[],r.forEach((function(e){var a=e.data();t.every((function(e){return a.tags.includes(e)}))&&n.push(a)})),e.abrupt("return",n);case 11:e.prev=11,e.t0=e.catch(0),console.error("Error fetching users:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),I=E,N=a(605),A=a(608),L=a(619),T=a(618),U=a(607),z=a(612),R=a(615),B=a(616),K=a(611),F=a(323),V=a.n(F),Y=a(324),Z=a.n(Y),q=a(325),G=a.n(q),W=function(){u.a.remove("access_token"),window.location.href=b.homepage+"/"+b.loginPage},_=function(){return Object(h.jsx)(R.a,{position:"static",style:{backgroundColor:b.themeColor},children:Object(h.jsx)(B.a,{children:Object(h.jsxs)(K.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:[Object(h.jsxs)(K.a,{item:!0,children:[Object(h.jsx)(A.a,{onClick:function(){return window.location.href=b.homepage+"/"+b.profilePage},children:Object(h.jsx)(V.a,{})}),Object(h.jsx)(A.a,{onClick:function(){return window.location.href=b.homepage+"/"+b.multiTagPage},children:Object(h.jsx)(Z.a,{})})]}),Object(h.jsx)(K.a,{item:!0,children:Object(h.jsxs)(A.a,{color:"inherit",onClick:W,style:{color:"black"},children:[Object(h.jsx)(G.a,{})," Sign Out"]})})]})})})},H={email:"unipe-ecs-excel@unipe-ecs-399916.iam.gserviceaccount.com",key:"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQD2ysk+k88Kodf5\nYOGsrZgvyZ+DUpwSdPz707nkscMC7sVY4otC9o+ICRWvDEp+v9FHHbxR00/xj9wR\nZT8sl5a+VBdPC7OxfOUsUe7zWdi0MTlSdELnSFsJ12GvhFXCLKZwg0YXDm6AN8IQ\n7n2fICfgqnN/fMFQ1z2nx6tUKLNEzckurzi9CcKaAyNj+dTYZRwA8ZyKrVO4tO/M\nevujhMvEgREl8PEhKFgYai0Z85OHLjARnTmM4ZN+t6WP+w7Y33pJYg7+PhMq2CcV\nKSjSsOm5l8SJ2TzLvsgtSzyes5EsEd5r42O86NlrK/4pcGzGSgcfhBersS5pkZDd\nVLByCTjTAgMBAAECggEAY4C0bhobPo6tbPseUkh1lULmIQUULy7i90fQ6f+wAEUz\n5VgFzRxrF26OQxMiEAOXxeQb0yPvVhZqJMtdEsYVvaxa74Bo1XVlUx6/yHcfs9sq\n4O9GMEkQh6HC3YjuKMlm2/NZtZ8Yd3LDuJ7noFpPKbqfsbWjncwCrFyJW/fC+8hw\nFmeaP5T2DhcPN+/a+5CZ49XZy+VaCNOdnetYxlllmX14kIiBysjNc2C0hjDO0RrP\nMdOUdKsfYOpPmos14EnWkZZHq3cJCFK2YeSb5JDfyQZUsifWU5MxrRlPoF3O1leA\nSDFxiSbbOxBtsVld6Ox1mdeeEu4GhvgExFEIj56TjQKBgQD7/a8S/Oapwa65qvyL\nGi3aOED4XfcVDyNikGsINShL5B6j2WSVdhvMn3OtaikxK8k/OqcMfK5UGpIvLH7X\n5ZyKNbsdW5K0ZM02qPNskoRvHXi544VPNwuhypt1l3ypv96qtMSQ0i2a1eaQsWsM\nnqP6KF3N/9VK5H9fFa7Mfm4VDQKBgQD6t+2moz1U7oFYM4bh+g4bLS9UZf9ltaOH\napsAQa6OMmy5oinagBSMydM9LppaqlG2G41tgL588huauKhCNoQRr7Vn9i+RVWdV\nvM/q8mIonkzNZ6xJMxWtkGuryaVKgQCgraIh9pTRGIq50esoC/6Y18RTK5gOZAsF\n1cuAdKTNXwKBgQDHfbcbNiG55H5ZuJbD3M7OAljVBzazck+WGTTSw5qKMidbmZ/6\nfw1U+irO78t6hOqGZv2WciJkrMBsHjKw4rMB67WdcUB8FY0sp6ZGntu/R7qqlweT\nhcVsqYRXHL1xeVdjF0bCS9IU0R/+Dqbrz6+LPGe+zLlj1+9KLFU8yR6HBQKBgCY1\nyd5PmpVLFCNhFvlxppy1sjTmppnVqOqGcMEFQZkiTjesYzyNsJQUXkFAzP1sX6+l\nW1SI/n8EVvipk9sje9VGNht2BaHcpjcG45km/5a5KXNUjYlKY89j50TzImHMb1AN\nplwOvHdxihLvzyr3SQH6QE18o1vuG0/0WWNmY4d5AoGAW/tX/3DFDCm7buNNADc8\ngwSTJcHxC3jYuoqlu9+/IuLmrpZmbDih3A4M9Fd96wp/iF2bqv6j6R3bDdrT7VD/\nfXMIoFWnT+oC1BEpX5XzRX9TZBKK/jT2vs3EaLId7inOm+SIYP9f8rl+2k/Nnf36\ntm8wVzVHZ7/9s1rocbcpUos=\n-----END PRIVATE KEY-----\n",spreadsheetId:"1WcbhJ-lkdWD2Akrvqwo11_-pSdplnFixHsT-XSs18q0"},Q=new(0,a(454).GoogleSpreadsheet)(H.spreadsheetId);function J(){var e=new Date;e.setUTCHours(e.getUTCHours());var t=e.getHours().toString().padStart(2,"0"),a=e.getMinutes().toString().padStart(2,"0"),c=e.getDate().toString().padStart(2,"0"),r=(e.getMonth()+1).toString().padStart(2,"0"),n=e.getFullYear().toString().slice(-2);return"".concat(t,":").concat(a," ").concat(c,"/").concat(r,"/").concat(n)}function X(){return(X=Object(k.a)(Object(y.a)().mark((function e(t){var a;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q.useServiceAccountAuth({client_email:H.email,private_key:H.key});case 3:return e.next=5,Q.loadInfo();case 5:return a=Q.sheetsByIndex[0],t.Date=J(),e.next=9,a.addRow(t);case 9:if(!e.sent){e.next=12;break}return e.abrupt("return",!0);case 12:e.next=19;break;case 14:return e.prev=14,e.t0=e.catch(0),console.log("erro inserindo sheet"),console.log(e.t0.message),e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}var $=function(e){return X.apply(this,arguments)},ee=function(e){var t=Object(c.useState)(""),a=Object(S.a)(t,2),r=a[0],n=a[1],i=Object(c.useState)([]),s=Object(S.a)(i,2),o=s[0],l=s[1],u=Object(c.useState)(!1),j=Object(S.a)(u,2),p=j[0],f=j[1],d=Object(c.useState)(!1),x=Object(S.a)(d,2),g=x[0],O=x[1],m=function(){var e=Object(k.a)(Object(y.a)().mark((function e(){var t,a,c;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==r.length){e.next=2;break}return e.abrupt("return");case 2:return t=r.replaceAll(", ",",").toLowerCase(),a=t.split(",").map((function(e){return e.trim()})),f(!0),O(!0),e.next=8,I(a);case 8:c=e.sent,l(c),f(!1),setTimeout((function(){O(!1)}),3e3),$({Busca:t}),0===c.length&&alert("busca sem resultados");case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{children:[e.hideNavBar?null:Object(h.jsx)(_,{}),Object(h.jsxs)(v.a,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(h.jsx)("h2",{children:"Buscador de perfil por tags"}),Object(h.jsx)(N.a,{type:"text",placeholder:"tags separado por v\xedrgulas",value:r,onChange:function(e){n(e.target.value)},sx:{width:"100%",marginBottom:"10px"}}),Object(h.jsx)(A.a,{onClick:m,variant:"contained",disabled:g,children:g?Object(h.jsx)(L.a,{size:24}):"Buscar"}),p?Object(h.jsx)(L.a,{sx:{mt:2}}):Object(h.jsx)(v.a,{sx:{marginTop:"10px"},children:Object(h.jsx)(T.a,{children:o.map((function(e,t){return Object(h.jsxs)(U.a,{children:[Object(h.jsx)(z.a,{className:"espacamento",target:"_blank",rel:"noreferrer",href:"".concat(b.homepage,"/").concat(b.publicProfilePage.split(":")[0]).concat(e.public_id),children:e.public_id}),e.name,e.publicContact?Object(h.jsx)(z.a,{className:"espacamento",href:"".concat(b.fixURL(e.publicContact)),target:"_blank",rel:"noreferrer",children:e.publicContact}):null,e.portfolio?Object(h.jsx)(z.a,{className:"espacamento",href:"".concat(b.fixURL(e.portfolio)),target:"_blank",rel:"noreferrer",children:"portfolio"}):null,e.curriculo?Object(h.jsx)(z.a,{className:"espacamento",href:"".concat(b.fixURL(e.curriculo)),target:"_blank",rel:"noreferrer",children:"curr\xedculo"}):null]},t)}))})})]})]})};var te=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(v.a,{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",p:2,children:Object(h.jsxs)(v.a,{display:"flex",flexDirection:"column",alignItems:"center",children:[Object(h.jsxs)(w.a,{elevation:0,sx:{width:"100%",maxWidth:"400px",p:2,mb:2,border:"1px solid rgb(219, 219, 219)"},children:[Object(h.jsx)(m,{}),Object(h.jsx)(O,{})]}),Object(h.jsx)(w.a,{elevation:0,sx:{width:"100%",p:3,border:"1px solid rgb(219, 219, 219)"},children:Object(h.jsx)(ee,{hideNavBar:!0})})]})})})},ae=a(82),ce=a(17),re=a(6),ne=a(613),ie=a(620),se=a(614),oe=a(621),le=Object(C.g)(D);function ue(e){for(var t=0,a=0;a<e.length;a++){t=(t<<5)-t+e.charCodeAt(a)}return Math.abs(t)+Date.now()}var je=[],be=function(){var e=Object(c.useState)(null),t=Object(S.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)([]),i=Object(S.a)(n,2),s=i[0],o=i[1],l=Object(c.useState)(""),j=Object(S.a)(l,2),p=j[0],f=j[1],d=Object(c.useState)(""),g=Object(S.a)(d,2),O=g[0],m=g[1],w=Object(c.useState)(""),P=Object(S.a)(w,2),D=P[0],M=P[1],E=Object(c.useState)(""),I=Object(S.a)(E,2),T=I[0],U=I[1],z=function(e){r(e),e.tags&&o(e.tags),e.publicContact&&m(e.publicContact),e.portfolio&&M(e.portfolio),e.curriculo&&U(e.curriculo)},R=function(){var e=Object(k.a)(Object(y.a)().mark((function e(){var t,c,r;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=x.getSessionData()){e.next=3;break}return e.abrupt("return");case 3:return c=t.email,r=btoa(c),e.next=7,Object(C.b)(Object(C.d)(le,"public_users",a.public_id.toString()));case 7:return e.next=9,Object(C.b)(Object(C.d)(le,"users",r));case 9:localStorage.removeItem("userData"),alert("Profile deletado"),window.location.href=b.homepage+"/"+b.loginPage;case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(k.a)(Object(y.a)().mark((function e(){var t,c,r,n,i,o,l;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=x.getSessionData()){e.next=3;break}return e.abrupt("return");case 3:return c=t.email,r=btoa(c),n=Object(C.d)(le,"users",r),i=s,Object(C.j)(n,{tags:i,publicContact:O,portfolio:D,curriculo:T}),o=Object(C.l)(le),i.forEach((function(e){if(""!==e){var t=Object(C.d)(le,"tags",e.toLowerCase());o.set(t,Object(re.a)({},a.public_id.toString(),!0),{merge:!0})}})),je.forEach(function(){var e=Object(k.a)(Object(y.a)().mark((function e(t){var c;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""!==t&&(c=Object(C.d)(le,"tags",t.toLowerCase()),o.update(c,Object(re.a)({},a.public_id.toString(),Object(C.c)())));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=13,o.commit();case 13:(l=JSON.parse(localStorage.getItem("userData"))).tags=i,l.publicContact=O,l.portfolio=D,l.curriculo=T,localStorage.setItem("userData",JSON.stringify(l)),alert("Perfil salvo");case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){function e(){return(e=Object(k.a)(Object(y.a)().mark((function e(){var t,a,c,r,n,i,s,o,l,j,b;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=x.getSessionData()){e.next=3;break}return e.abrupt("return");case 3:if(a=t.email,c=btoa(a),r=Object(C.d)(le,"users",c),e.prev=6,!(n=JSON.parse(localStorage.getItem("userData")))){e.next=12;break}z(n),e.next=42;break;case 12:return e.next=14,Object(C.e)(r);case 14:if(!(i=e.sent).exists()){e.next=21;break}s=i.data(),z(s),localStorage.setItem("userData",JSON.stringify(s)),e.next=42;break;case 21:return console.log("No data available"),e.prev=22,o=JSON.parse(u.a.get("profile")),u.a.remove("profile"),l={email:a,name:o.name,profilePictureUrl:o.imageUrl,tags:[]},j=ue(l.email),l.public_id=j,e.next=30,Object(C.i)(r,l);case 30:return console.log(j.toString()),b=Object(C.d)(le,"public_users",j.toString()),e.next=34,Object(C.i)(b,{id:c});case 34:z(l),localStorage.setItem("userData",JSON.stringify(l)),e.next=42;break;case 38:e.prev=38,e.t0=e.catch(22),console.log(e.t0.message),console.log("No data available, creating new - error");case 42:e.next=47;break;case 44:e.prev=44,e.t1=e.catch(6),console.error("Error fetching data:",e.t1);case 47:case"end":return e.stop()}}),e,null,[[6,44],[22,38]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var K=function(){if(""!==p.trim()&&!s.includes(p)){var e=p.toLowerCase();f(e);var t=[].concat(Object(ce.a)(s),[e]);o(t);var c=Object(ae.a)(Object(ae.a)({},a),{},{tags:t});r(c),f("")}};return Object(h.jsx)("div",{children:a?Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(v.a,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(h.jsx)(_,{}),Object(h.jsx)("h2",{children:"Profile Information"}),Object(h.jsx)(ne.a,{alt:"Profile picture",src:a.profilePictureUrl,sx:{width:100,height:100,margin:"auto"}}),Object(h.jsx)(ie.a,{variant:"h6",component:"h3",children:a.name}),Object(h.jsx)(ie.a,{variant:"body1",children:a.email}),Object(h.jsxs)(ie.a,{variant:"body1",children:["Public Id:",Object(h.jsx)("a",{target:"_blank",rel:"noreferrer",href:b.homepage+"/"+b.publicProfilePage.split(":")[0]+a.public_id,children:a.public_id})]}),Object(h.jsx)(ie.a,{variant:"body1",children:"Tags:"}),Object(h.jsx)(v.a,{sx:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},children:s.map((function(e,t){return Object(h.jsx)(se.a,{label:e,onDelete:function(){return function(e){var t=s.filter((function(t){return t!==e}));o(t),je.push(e);var c=Object(ae.a)(Object(ae.a)({},a),{},{tags:t});r(c)}(e)},sx:{margin:"5px"}},t)}))}),Object(h.jsxs)("div",{style:{display:"flex",flexDirection:"row",width:"80%"},children:[Object(h.jsx)(N.a,{label:"Add a tag",value:p,onChange:function(e){f(e.target.value)},onKeyUp:function(e){"Enter"===e.key&&K()},sx:{width:"100%",margin:"10px -8px 0 0"}}),Object(h.jsx)(A.a,{onClick:K,style:{borderRadius:"12px",height:"60px",margin:"8px 0 0 8px",backgroundColor:"#f0f2f5"},children:"ADD"})]}),Object(h.jsx)(N.a,{label:"Add Public Contact",placeholder:"Enter contact email, number, social media",value:O,onChange:function(e){m(e.target.value)},sx:{width:"80%",margin:"10px 0"}}),Object(h.jsx)(N.a,{label:"Add portfolio URL",placeholder:"Enter portfolio URL",value:D,onChange:function(e){M(e.target.value)},sx:{width:"80%",margin:"10px 0"}}),Object(h.jsx)(N.a,{label:"Add curriculo URL",placeholder:"Enter curriculo URL",value:T,onChange:function(e){U(e.target.value)},sx:{width:"80%",margin:"10px 0"}}),Object(h.jsx)(A.a,{onClick:B,style:{borderRadius:"12px",height:"60px",width:"80%",marginTop:"8px",backgroundColor:"#f0f2f5"},children:"SAVE"}),Object(h.jsx)(oe.a,{variant:"fullWidth",sx:{margin:"16px 0",padding:"10px",width:"70%",mx:"auto"}}),Object(h.jsx)(A.a,{onClick:R,style:{color:"red",borderRadius:"12px",height:"60px",width:"80%",marginTop:"8px",backgroundColor:"#f0f2f5"},children:"Delete Profile"})]})}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(L.a,{}),Object(h.jsx)("p",{children:"Loading profile data..."})]})})},pe=a(327),fe=["email"],de=Object(C.g)(D),xe=function(){var e=Object(i.o)().profile_id,t=Object(c.useState)(null),a=Object(S.a)(t,2),r=a[0],n=a[1];return Object(c.useEffect)((function(){function t(){return(t=Object(k.a)(Object(y.a)().mark((function t(){var a,c,r,i,s,o,l;return Object(y.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(C.d)(de,"public_users",e),t.prev=1,t.next=4,Object(C.e)(a);case 4:if(!(c=t.sent).exists()){t.next=14;break}return r=c.data(),i=Object(C.d)(de,"users",r.id),t.next=10,Object(C.e)(i);case 10:(s=t.sent).exists()?(o=s.data(),o.email,l=Object(pe.a)(o,fe),n(l)):console.log("No data available for user"),t.next=15;break;case 14:console.log("No data available for public user");case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(1),console.error("Error fetching data:",t.t0);case 20:case"end":return t.stop()}}),t,null,[[1,17]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),Object(h.jsx)("div",{children:r?Object(h.jsxs)(v.a,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(h.jsx)("h2",{children:"Profile Information"}),Object(h.jsx)(ie.a,{variant:"h6",component:"h3",children:r.name}),Object(h.jsxs)(v.a,{sx:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:"10px",marginTop:"10px"},children:[r.publicContact?Object(h.jsx)(z.a,{href:"".concat(b.fixURL(r.publicContact)),target:"_blank",rel:"noreferrer",children:r.publicContact}):null,r.portfolio?Object(h.jsx)(z.a,{href:"".concat(b.fixURL(r.portfolio)),target:"_blank",rel:"noreferrer",children:"Portfolio"}):null,r.curriculo?Object(h.jsx)(z.a,{href:"".concat(b.fixURL(r.curriculo)),target:"_blank",rel:"noreferrer",children:"Curriculo"}):null]}),Object(h.jsx)(ne.a,{alt:"Profile picture",src:r.profilePictureUrl,sx:{width:100,height:100,margin:"auto"}}),Object(h.jsx)(ie.a,{variant:"body1",children:"Tags:"}),Object(h.jsx)(v.a,{sx:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},children:r.tags.map((function(e,t){return Object(h.jsx)(se.a,{label:e,sx:{margin:"5px"}},t)}))})]}):Object(h.jsx)("p",{children:"Loading profile data..."})})},he=Object(C.g)(D),ge=function(){var e=Object(i.o)().tag,t=Object(c.useState)([]),a=Object(S.a)(t,2),r=a[0],n=a[1];return Object(c.useEffect)((function(){var t=function(){var t=Object(k.a)(Object(y.a)().mark((function t(){var a,c;return Object(y.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=Object(C.d)(he,"tags",e),t.next=4,Object(C.e)(a);case 4:c=t.sent,console.log(c.data()),n(Object.keys(c.data())),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error("Error fetching tag data:",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),Object(h.jsxs)("div",{children:[Object(h.jsxs)("h2",{children:["Users with Tag: ",e]}),Object(h.jsx)("div",{children:r.map((function(e){return Object(h.jsx)("div",{children:Object(h.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(b.homepage,"/").concat(b.publicProfilePage.split(":")[0]).concat(e),children:e})},e)}))})]})},Oe=Object(C.g)(D),me=function(){var e=Object(i.o)().tag,t=Object(c.useState)([]),a=Object(S.a)(t,2),r=a[0],n=a[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(k.a)(Object(y.a)().mark((function e(){var t,a,c;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=Object(C.a)(Oe,"tags"),e.next=4,Object(C.f)(t);case 4:a=e.sent,c=[],a.forEach((function(e){c.push(e.id)})),n(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Error fetching tag data:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[e]),Object(h.jsx)("div",{children:Object(h.jsxs)(v.a,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(h.jsx)("h2",{children:"All Tags:"}),Object(h.jsx)(v.a,{sx:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},children:r.map((function(e){return Object(h.jsx)(z.a,{style:{marginRight:"10px"},href:"".concat(b.homepage,"/").concat(b.tagPage.split(":")[0]).concat(e),rel:"noreferrer",target:"_blank",children:e},e)}))})]})})};""===window.location.hash&&(window.location.hash="/");var ve=Object(n.a)([{path:"/",element:Object(h.jsx)(te,{})},{path:b.loginPage,element:Object(h.jsx)(te,{})},{path:b.profilePage,element:Object(h.jsx)(be,{})},{path:b.publicProfilePage,element:Object(h.jsx)(xe,{})},{path:b.tagPage,element:Object(h.jsx)(ge,{})},{path:b.allTagPage,element:Object(h.jsx)(me,{})},{path:b.multiTagPage,element:Object(h.jsx)(ee,{})}]);r.createRoot(document.getElementById("root")).render(Object(h.jsx)(i.b,{router:ve}))}},[[559,1,2]]]);
//# sourceMappingURL=main.d6ab7fd4.chunk.js.map