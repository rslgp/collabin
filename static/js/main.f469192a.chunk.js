(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{150:function(e,t,a){},189:function(e,t){},343:function(e,t,a){},347:function(e,t){},349:function(e,t){},358:function(e,t){},360:function(e,t){},388:function(e,t){},389:function(e,t){},394:function(e,t){},396:function(e,t){},403:function(e,t){},422:function(e,t){},477:function(e,t){},559:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(318),c=a(116),o=a(16),i=(a(343),a(150),a(319)),s=a.n(i),l=a(54),u=a.n(l),b={homepage:"https://rslgp.github.io/collabin/#",loginPage:"auth/login",profilePage:"page",publicProfilePage:"profile/:profile_id",tagPage:"tags/:tag",allTagPage:"tags",multiTagPage:"querytags",fixURL:function(e){if(e)return e.includes("http")?e:e.includes("9")?"https://wa.me/55"+e:"https://"+e},themeColor:"#f0f2f5"},j=b,p=a(344),f={jwt:"eed624733ec663a2a42bc7f99a94f41e"},d="access_token",g={getSessionData:function(){try{var e=u.a.get(d);if(!e)throw new Error("No Auth Cookie");var t=p.verify(e,f.jwt);if(t.exp&&t.exp<Date.now()/1e3)throw this.removeSessionData(),new Error("Token Expired");return t}catch(a){return console.log(a.message),window.location.href=j.homepage+"/"+j.loginPage,null}},saveSessionData:function(e){var t={email:e.email,exp:Math.floor(Date.now()/1e3)+7200},a=p.sign(t,f.jwt);u.a.set(d,a,{expires:1/24})},removeSessionData:function(){u.a.remove(d)}},h=a(3),x="796862051841-u21s62ekivlponlpdd3vlbkbuh6vln8g.apps.googleusercontent.com";var O=function(){return Object(h.jsx)("div",{className:"GoogleLogin",children:Object(h.jsx)(s.a,{clientId:x,buttonText:"Continue with Google",onSuccess:function(e){console.log(e),g.saveSessionData(e.profileObj);var t=e.profileObj,a={name:t.name,imageUrl:t.imageUrl};u.a.set("profile",JSON.stringify(a)),window.location.href=j.homepage+"/"+j.profilePage},onFailure:console.log,cookiePolicy:"single_host_origin"})})};var m=function(){return Object(h.jsxs)("div",{className:"Header",children:[Object(h.jsx)("div",{className:"espacamento"}),Object(h.jsx)("h1",{children:"Collabin"}),Object(h.jsx)("p",{children:"Construa experi\xeancia e portfolio com projetos em equipe"}),Object(h.jsx)("div",{className:"espacamento"})]})},v=a(617),w=a(610),y=a(1),k=a(7),S=a(10),C=a(28),P=a(320),D=Object(P.a)({apiKey:"AIzaSyCdMWZ25HYgn5YeXOLY6Ogw9qwpxJP4Cpo",authDomain:"myapp-d87de.firebaseapp.com",projectId:"myapp-d87de",storageBucket:"myapp-d87de.appspot.com",messagingSenderId:"101658274836",appId:"1:101658274836:web:364eb204ab277197d30b01"}),E=Object(C.g)(D),I=function(){var e=Object(k.a)(Object(y.a)().mark((function e(t){var a,r,n,c;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=Object(C.a)(E,"users"),r=Object(C.h)(a,Object(C.k)("tags","array-contains-any",t)),e.next=5,Object(C.f)(r);case 5:return n=e.sent,c=[],n.forEach((function(e){var a=e.data();t.every((function(e){return a.tags.includes(e)}))&&c.push(a)})),e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(0),console.error("Error fetching users:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),N=I,A=a(605),U=a(608),T=a(618),L=a(607),M=a(612),R=a(615),K=a(616),B=a(611),F=a(323),V=a.n(F),Y=a(324),Z=a.n(Y),q=a(325),_=a.n(q),W=function(){u.a.remove("access_token"),window.location.href=j.homepage+"/"+j.loginPage},G=function(){return Object(h.jsx)(R.a,{position:"static",style:{backgroundColor:j.themeColor},children:Object(h.jsx)(K.a,{children:Object(h.jsxs)(B.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:[Object(h.jsxs)(B.a,{item:!0,children:[Object(h.jsx)(U.a,{onClick:function(){return window.location.href=j.homepage+"/"+j.profilePage},children:Object(h.jsx)(V.a,{})}),Object(h.jsx)(U.a,{onClick:function(){return window.location.href=j.homepage+"/"+j.multiTagPage},children:Object(h.jsx)(Z.a,{})})]}),Object(h.jsx)(B.a,{item:!0,children:Object(h.jsxs)(U.a,{color:"inherit",onClick:W,style:{color:"black"},children:[Object(h.jsx)(_.a,{})," Sign Out"]})})]})})})},H={email:"unipe-ecs-excel@unipe-ecs-399916.iam.gserviceaccount.com",key:"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQD2ysk+k88Kodf5\nYOGsrZgvyZ+DUpwSdPz707nkscMC7sVY4otC9o+ICRWvDEp+v9FHHbxR00/xj9wR\nZT8sl5a+VBdPC7OxfOUsUe7zWdi0MTlSdELnSFsJ12GvhFXCLKZwg0YXDm6AN8IQ\n7n2fICfgqnN/fMFQ1z2nx6tUKLNEzckurzi9CcKaAyNj+dTYZRwA8ZyKrVO4tO/M\nevujhMvEgREl8PEhKFgYai0Z85OHLjARnTmM4ZN+t6WP+w7Y33pJYg7+PhMq2CcV\nKSjSsOm5l8SJ2TzLvsgtSzyes5EsEd5r42O86NlrK/4pcGzGSgcfhBersS5pkZDd\nVLByCTjTAgMBAAECggEAY4C0bhobPo6tbPseUkh1lULmIQUULy7i90fQ6f+wAEUz\n5VgFzRxrF26OQxMiEAOXxeQb0yPvVhZqJMtdEsYVvaxa74Bo1XVlUx6/yHcfs9sq\n4O9GMEkQh6HC3YjuKMlm2/NZtZ8Yd3LDuJ7noFpPKbqfsbWjncwCrFyJW/fC+8hw\nFmeaP5T2DhcPN+/a+5CZ49XZy+VaCNOdnetYxlllmX14kIiBysjNc2C0hjDO0RrP\nMdOUdKsfYOpPmos14EnWkZZHq3cJCFK2YeSb5JDfyQZUsifWU5MxrRlPoF3O1leA\nSDFxiSbbOxBtsVld6Ox1mdeeEu4GhvgExFEIj56TjQKBgQD7/a8S/Oapwa65qvyL\nGi3aOED4XfcVDyNikGsINShL5B6j2WSVdhvMn3OtaikxK8k/OqcMfK5UGpIvLH7X\n5ZyKNbsdW5K0ZM02qPNskoRvHXi544VPNwuhypt1l3ypv96qtMSQ0i2a1eaQsWsM\nnqP6KF3N/9VK5H9fFa7Mfm4VDQKBgQD6t+2moz1U7oFYM4bh+g4bLS9UZf9ltaOH\napsAQa6OMmy5oinagBSMydM9LppaqlG2G41tgL588huauKhCNoQRr7Vn9i+RVWdV\nvM/q8mIonkzNZ6xJMxWtkGuryaVKgQCgraIh9pTRGIq50esoC/6Y18RTK5gOZAsF\n1cuAdKTNXwKBgQDHfbcbNiG55H5ZuJbD3M7OAljVBzazck+WGTTSw5qKMidbmZ/6\nfw1U+irO78t6hOqGZv2WciJkrMBsHjKw4rMB67WdcUB8FY0sp6ZGntu/R7qqlweT\nhcVsqYRXHL1xeVdjF0bCS9IU0R/+Dqbrz6+LPGe+zLlj1+9KLFU8yR6HBQKBgCY1\nyd5PmpVLFCNhFvlxppy1sjTmppnVqOqGcMEFQZkiTjesYzyNsJQUXkFAzP1sX6+l\nW1SI/n8EVvipk9sje9VGNht2BaHcpjcG45km/5a5KXNUjYlKY89j50TzImHMb1AN\nplwOvHdxihLvzyr3SQH6QE18o1vuG0/0WWNmY4d5AoGAW/tX/3DFDCm7buNNADc8\ngwSTJcHxC3jYuoqlu9+/IuLmrpZmbDih3A4M9Fd96wp/iF2bqv6j6R3bDdrT7VD/\nfXMIoFWnT+oC1BEpX5XzRX9TZBKK/jT2vs3EaLId7inOm+SIYP9f8rl+2k/Nnf36\ntm8wVzVHZ7/9s1rocbcpUos=\n-----END PRIVATE KEY-----\n",spreadsheetId:"1WcbhJ-lkdWD2Akrvqwo11_-pSdplnFixHsT-XSs18q0"},Q=new(0,a(454).GoogleSpreadsheet)(H.spreadsheetId);function J(){var e=new Date;e.setUTCHours(e.getUTCHours());var t=e.getHours().toString().padStart(2,"0"),a=e.getMinutes().toString().padStart(2,"0"),r=e.getDate().toString().padStart(2,"0"),n=(e.getMonth()+1).toString().padStart(2,"0"),c=e.getFullYear().toString().slice(-2);return"".concat(t,":").concat(a," ").concat(r,"/").concat(n,"/").concat(c)}function z(){return(z=Object(k.a)(Object(y.a)().mark((function e(t){var a;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q.useServiceAccountAuth({client_email:H.email,private_key:H.key});case 3:return e.next=5,Q.loadInfo();case 5:return a=Q.sheetsByIndex[0],console.log(t),t.Date=J(),e.next=10,a.addRow(t);case 10:if(!e.sent){e.next=13;break}return e.abrupt("return",!0);case 13:e.next=20;break;case 15:return e.prev=15,e.t0=e.catch(0),console.log("erro inserindo sheet"),console.log(e.t0.message),e.abrupt("return",!1);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}var X=function(e){return z.apply(this,arguments)},$=function(e){var t=Object(r.useState)(""),a=Object(S.a)(t,2),n=a[0],c=a[1],o=Object(r.useState)([]),i=Object(S.a)(o,2),s=i[0],l=i[1],u=function(){var e=Object(k.a)(Object(y.a)().mark((function e(){var t,a;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.toLowerCase().split(",").map((function(e){return e.trim()})),e.next=3,N(t);case 3:a=e.sent,l(a),X({Busca:n}),0===a.length&&alert("busca sem resultados");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{children:[e.hideNavBar?null:Object(h.jsx)(G,{}),Object(h.jsxs)(v.a,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(h.jsx)("h2",{children:"Buscador de perfil por tags"}),Object(h.jsx)(A.a,{type:"text",placeholder:"tags separado por v\xedrgulas (sem espa\xe7o)",value:n,onChange:function(e){c(e.target.value)},sx:{width:"100%",marginBottom:"10px"}}),Object(h.jsx)(U.a,{onClick:u,variant:"contained",children:"Buscar"}),Object(h.jsx)(v.a,{sx:{marginTop:"10px"},children:Object(h.jsx)(T.a,{children:s.map((function(e,t){return Object(h.jsxs)(L.a,{children:[Object(h.jsx)(M.a,{className:"espacamento",target:"_blank",rel:"noreferrer",href:"".concat(j.homepage,"/").concat(j.publicProfilePage.split(":")[0]).concat(e.public_id),children:e.public_id}),e.name,e.publicContact?Object(h.jsx)(M.a,{className:"espacamento",href:"".concat(j.fixURL(e.publicContact)),target:"_blank",rel:"noreferrer",children:e.publicContact}):null,e.portfolio?Object(h.jsx)(M.a,{className:"espacamento",href:"".concat(j.fixURL(e.portfolio)),target:"_blank",rel:"noreferrer",children:"portfolio"}):null,e.curriculo?Object(h.jsx)(M.a,{className:"espacamento",href:"".concat(j.fixURL(e.curriculo)),target:"_blank",rel:"noreferrer",children:"curr\xedculo"}):null]},t)}))})})]})]})};var ee=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(v.a,{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",p:2,children:Object(h.jsxs)(v.a,{display:"flex",flexDirection:"column",alignItems:"center",children:[Object(h.jsxs)(w.a,{elevation:0,sx:{width:"100%",maxWidth:"400px",p:2,mb:2,border:"1px solid rgb(219, 219, 219)"},children:[Object(h.jsx)(m,{}),Object(h.jsx)(O,{})]}),Object(h.jsx)(w.a,{elevation:0,sx:{width:"100%",p:3,border:"1px solid rgb(219, 219, 219)"},children:Object(h.jsx)($,{hideNavBar:!0})})]})})})},te=a(82),ae=a(17),re=a(6),ne=a(613),ce=a(619),oe=a(614),ie=a(620),se=a(621),le=Object(C.g)(D);function ue(e){for(var t=0,a=0;a<e.length;a++){t=(t<<5)-t+e.charCodeAt(a)}return Math.abs(t)+Date.now()}var be=[],je=function(){var e=Object(r.useState)(null),t=Object(S.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)([]),o=Object(S.a)(c,2),i=o[0],s=o[1],l=Object(r.useState)(""),b=Object(S.a)(l,2),p=b[0],f=b[1],d=Object(r.useState)(""),x=Object(S.a)(d,2),O=x[0],m=x[1],w=Object(r.useState)(""),P=Object(S.a)(w,2),D=P[0],E=P[1],I=Object(r.useState)(""),N=Object(S.a)(I,2),T=N[0],L=N[1],M=function(e){n(e),e.tags&&s(e.tags),e.publicContact&&m(e.publicContact),e.portfolio&&E(e.portfolio),e.curriculo&&L(e.curriculo)},R=function(){var e=Object(k.a)(Object(y.a)().mark((function e(){var t,r,n;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=g.getSessionData()){e.next=3;break}return e.abrupt("return");case 3:return r=t.email,n=btoa(r),e.next=7,Object(C.b)(Object(C.d)(le,"public_users",a.public_id.toString()));case 7:return e.next=9,Object(C.b)(Object(C.d)(le,"users",n));case 9:localStorage.removeItem("userData"),alert("Profile deletado"),window.location.href=j.homepage+"/"+j.loginPage;case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(k.a)(Object(y.a)().mark((function e(){var t,r,n,c,o,s,l;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=g.getSessionData()){e.next=3;break}return e.abrupt("return");case 3:return r=t.email,n=btoa(r),c=Object(C.d)(le,"users",n),o=i,Object(C.j)(c,{tags:o,publicContact:O,portfolio:D,curriculo:T}),s=Object(C.l)(le),o.forEach((function(e){if(""!==e){var t=Object(C.d)(le,"tags",e.toLowerCase());s.set(t,Object(re.a)({},a.public_id.toString(),!0),{merge:!0})}})),be.forEach(function(){var e=Object(k.a)(Object(y.a)().mark((function e(t){var r;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""!==t&&(r=Object(C.d)(le,"tags",t.toLowerCase()),s.update(r,Object(re.a)({},a.public_id.toString(),Object(C.c)())));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=13,s.commit();case 13:(l=JSON.parse(localStorage.getItem("userData"))).tags=o,l.publicContact=O,l.portfolio=D,l.curriculo=T,localStorage.setItem("userData",JSON.stringify(l)),alert("Perfil salvo");case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){function e(){return(e=Object(k.a)(Object(y.a)().mark((function e(){var t,a,r,n,c,o,i,s,l,b,j;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=g.getSessionData()){e.next=3;break}return e.abrupt("return");case 3:if(a=t.email,r=btoa(a),n=Object(C.d)(le,"users",r),e.prev=6,!(c=JSON.parse(localStorage.getItem("userData")))){e.next=12;break}M(c),e.next=42;break;case 12:return e.next=14,Object(C.e)(n);case 14:if(!(o=e.sent).exists()){e.next=21;break}i=o.data(),M(i),localStorage.setItem("userData",JSON.stringify(i)),e.next=42;break;case 21:return console.log("No data available"),e.prev=22,s=JSON.parse(u.a.get("profile")),u.a.remove("profile"),l={email:a,name:s.name,profilePictureUrl:s.imageUrl,tags:[]},b=ue(l.email),l.public_id=b,e.next=30,Object(C.i)(n,l);case 30:return console.log(b.toString()),j=Object(C.d)(le,"public_users",b.toString()),e.next=34,Object(C.i)(j,{id:r});case 34:M(l),localStorage.setItem("userData",JSON.stringify(l)),e.next=42;break;case 38:e.prev=38,e.t0=e.catch(22),console.log(e.t0.message),console.log("No data available, creating new - error");case 42:e.next=47;break;case 44:e.prev=44,e.t1=e.catch(6),console.error("Error fetching data:",e.t1);case 47:case"end":return e.stop()}}),e,null,[[6,44],[22,38]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var B=function(){if(""!==p.trim()&&!i.includes(p)){var e=p.toLowerCase();f(e);var t=[].concat(Object(ae.a)(i),[e]);s(t);var r=Object(te.a)(Object(te.a)({},a),{},{tags:t});n(r),f("")}};return Object(h.jsx)("div",{children:a?Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(v.a,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(h.jsx)(G,{}),Object(h.jsx)("h2",{children:"Profile Information"}),Object(h.jsx)(ne.a,{alt:"Profile picture",src:a.profilePictureUrl,sx:{width:100,height:100,margin:"auto"}}),Object(h.jsx)(ce.a,{variant:"h6",component:"h3",children:a.name}),Object(h.jsx)(ce.a,{variant:"body1",children:a.email}),Object(h.jsxs)(ce.a,{variant:"body1",children:["Public Id:",Object(h.jsx)("a",{target:"_blank",rel:"noreferrer",href:j.homepage+"/"+j.publicProfilePage.split(":")[0]+a.public_id,children:a.public_id})]}),Object(h.jsx)(ce.a,{variant:"body1",children:"Tags:"}),Object(h.jsx)(v.a,{sx:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},children:i.map((function(e,t){return Object(h.jsx)(oe.a,{label:e,onDelete:function(){return function(e){var t=i.filter((function(t){return t!==e}));s(t),be.push(e);var r=Object(te.a)(Object(te.a)({},a),{},{tags:t});n(r)}(e)},sx:{margin:"5px"}},t)}))}),Object(h.jsxs)("div",{style:{display:"flex",flexDirection:"row",width:"80%"},children:[Object(h.jsx)(A.a,{label:"Add a tag",value:p,onChange:function(e){f(e.target.value)},onKeyUp:function(e){"Enter"===e.key&&B()},sx:{width:"100%",margin:"10px -8px 0 0"}}),Object(h.jsx)(U.a,{onClick:B,style:{borderRadius:"12px",height:"60px",margin:"8px 0 0 8px",backgroundColor:"#f0f2f5"},children:"ADD"})]}),Object(h.jsx)(A.a,{label:"Add Public Contact",placeholder:"Enter contact email, number, social media",value:O,onChange:function(e){m(e.target.value)},sx:{width:"80%",margin:"10px 0"}}),Object(h.jsx)(A.a,{label:"Add portfolio URL",placeholder:"Enter portfolio URL",value:D,onChange:function(e){E(e.target.value)},sx:{width:"80%",margin:"10px 0"}}),Object(h.jsx)(A.a,{label:"Add curriculo URL",placeholder:"Enter curriculo URL",value:T,onChange:function(e){L(e.target.value)},sx:{width:"80%",margin:"10px 0"}}),Object(h.jsx)(U.a,{onClick:K,style:{borderRadius:"12px",height:"60px",width:"80%",marginTop:"8px",backgroundColor:"#f0f2f5"},children:"SAVE"}),Object(h.jsx)(ie.a,{variant:"fullWidth",sx:{margin:"16px 0",padding:"10px",width:"70%",mx:"auto"}}),Object(h.jsx)(U.a,{onClick:R,style:{color:"red",borderRadius:"12px",height:"60px",width:"80%",marginTop:"8px",backgroundColor:"#f0f2f5"},children:"Delete Profile"})]})}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(se.a,{}),Object(h.jsx)("p",{children:"Loading profile data..."})]})})},pe=a(327),fe=["email"],de=Object(C.g)(D),ge=function(){var e=Object(o.o)().profile_id,t=Object(r.useState)(null),a=Object(S.a)(t,2),n=a[0],c=a[1];return Object(r.useEffect)((function(){function t(){return(t=Object(k.a)(Object(y.a)().mark((function t(){var a,r,n,o,i,s,l;return Object(y.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(C.d)(de,"public_users",e),t.prev=1,t.next=4,Object(C.e)(a);case 4:if(!(r=t.sent).exists()){t.next=14;break}return n=r.data(),o=Object(C.d)(de,"users",n.id),t.next=10,Object(C.e)(o);case 10:(i=t.sent).exists()?(s=i.data(),s.email,l=Object(pe.a)(s,fe),c(l)):console.log("No data available for user"),t.next=15;break;case 14:console.log("No data available for public user");case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(1),console.error("Error fetching data:",t.t0);case 20:case"end":return t.stop()}}),t,null,[[1,17]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),Object(h.jsx)("div",{children:n?Object(h.jsxs)(v.a,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(h.jsx)("h2",{children:"Profile Information"}),Object(h.jsx)(ce.a,{variant:"h6",component:"h3",children:n.name}),Object(h.jsxs)(v.a,{sx:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:"10px",marginTop:"10px"},children:[n.publicContact?Object(h.jsx)(M.a,{href:"".concat(j.fixURL(n.publicContact)),target:"_blank",rel:"noreferrer",children:n.publicContact}):null,n.portfolio?Object(h.jsx)(M.a,{href:"".concat(j.fixURL(n.portfolio)),target:"_blank",rel:"noreferrer",children:"Portfolio"}):null,n.curriculo?Object(h.jsx)(M.a,{href:"".concat(j.fixURL(n.curriculo)),target:"_blank",rel:"noreferrer",children:"Curriculo"}):null]}),Object(h.jsx)(ne.a,{alt:"Profile picture",src:n.profilePictureUrl,sx:{width:100,height:100,margin:"auto"}}),Object(h.jsx)(ce.a,{variant:"body1",children:"Tags:"}),Object(h.jsx)(v.a,{sx:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},children:n.tags.map((function(e,t){return Object(h.jsx)(oe.a,{label:e,sx:{margin:"5px"}},t)}))})]}):Object(h.jsx)("p",{children:"Loading profile data..."})})},he=Object(C.g)(D),xe=function(){var e=Object(o.o)().tag,t=Object(r.useState)([]),a=Object(S.a)(t,2),n=a[0],c=a[1];return Object(r.useEffect)((function(){var t=function(){var t=Object(k.a)(Object(y.a)().mark((function t(){var a,r;return Object(y.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=Object(C.d)(he,"tags",e),t.next=4,Object(C.e)(a);case 4:r=t.sent,console.log(r.data()),c(Object.keys(r.data())),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error("Error fetching tag data:",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),Object(h.jsxs)("div",{children:[Object(h.jsxs)("h2",{children:["Users with Tag: ",e]}),Object(h.jsx)("div",{children:n.map((function(e){return Object(h.jsx)("div",{children:Object(h.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(j.homepage,"/").concat(j.publicProfilePage.split(":")[0]).concat(e),children:e})},e)}))})]})},Oe=Object(C.g)(D),me=function(){var e=Object(o.o)().tag,t=Object(r.useState)([]),a=Object(S.a)(t,2),n=a[0],c=a[1];return Object(r.useEffect)((function(){var e=function(){var e=Object(k.a)(Object(y.a)().mark((function e(){var t,a,r;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=Object(C.a)(Oe,"tags"),e.next=4,Object(C.f)(t);case 4:a=e.sent,r=[],a.forEach((function(e){r.push(e.id)})),c(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Error fetching tag data:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[e]),Object(h.jsx)("div",{children:Object(h.jsxs)(v.a,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(h.jsx)("h2",{children:"All Tags:"}),Object(h.jsx)(v.a,{sx:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},children:n.map((function(e){return Object(h.jsx)(M.a,{style:{marginRight:"10px"},href:"".concat(j.homepage,"/").concat(j.tagPage.split(":")[0]).concat(e),rel:"noreferrer",target:"_blank",children:e},e)}))})]})})};""===window.location.hash&&(window.location.hash="/");var ve=Object(c.a)([{path:"/",element:Object(h.jsx)(ee,{})},{path:j.loginPage,element:Object(h.jsx)(ee,{})},{path:j.profilePage,element:Object(h.jsx)(je,{})},{path:j.publicProfilePage,element:Object(h.jsx)(ge,{})},{path:j.tagPage,element:Object(h.jsx)(xe,{})},{path:j.allTagPage,element:Object(h.jsx)(me,{})},{path:j.multiTagPage,element:Object(h.jsx)($,{})}]);n.createRoot(document.getElementById("root")).render(Object(h.jsx)(o.b,{router:ve}))}},[[559,1,2]]]);
//# sourceMappingURL=main.f469192a.chunk.js.map