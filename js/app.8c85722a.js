(function(e){function a(a){for(var o,i,c=a[0],l=a[1],s=a[2],d=0,u=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);p&&p(a);while(u.length)u.shift()();return t.push.apply(t,s||[]),n()}function n(){for(var e,a=0;a<t.length;a++){for(var n=t[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(t.splice(a--,1),e=l(l.s=n[0]))}return e}var o={},i={app:0},r={app:0},t=[];function c(e){return l.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",referencias:"referencias",tema1:"tema1",tema2:"tema2"}[e]||e)+"."+{actividad:"87857133","chunk-0206bfa0":"27f58118","chunk-0cfca828":"ce22312c","chunk-13303073":"8f00ce38","chunk-13a6037e":"b0ba50b6","chunk-1479a341":"0506bc3f","chunk-1fb07a61":"c6dfa293","chunk-2c06842c":"33f9de6f","chunk-2d0dad62":"59ebcb67","chunk-2d208d90":"1706f907","chunk-2d21d0e2":"31e7c1b1","chunk-2d22c123":"9896b141","chunk-2e80bb9a":"91d8c1be","chunk-4cdd78c0":"24d1b5ed","chunk-515a8379":"07049ac9","chunk-522cec8c":"334a9fe1","chunk-59974754":"52e67b07","chunk-5a6377df":"66715917","chunk-7432e4d4":"c55a1551","chunk-766a929b":"30fecba7","chunk-c796899c":"1390a22a",comple:"9e8998ec",creditos:"2393261c",glosario:"08e85618",referencias:"862e5274",tema1:"73453080",tema2:"69f14ad6"}[e]+".js"}function l(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var a=[],n={"chunk-0cfca828":1,"chunk-13303073":1,"chunk-1479a341":1,"chunk-1fb07a61":1,"chunk-515a8379":1,"chunk-522cec8c":1,"chunk-59974754":1,"chunk-5a6377df":1,"chunk-7432e4d4":1,"chunk-766a929b":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",referencias:"referencias",tema1:"tema1",tema2:"tema2"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0cfca828":"bdb27576","chunk-13303073":"bdb27576","chunk-13a6037e":"31d6cfe0","chunk-1479a341":"bdb27576","chunk-1fb07a61":"bdb27576","chunk-2c06842c":"31d6cfe0","chunk-2d0dad62":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"ae6d6a9d","chunk-522cec8c":"bdb27576","chunk-59974754":"76ed6734","chunk-5a6377df":"218153e3","chunk-7432e4d4":"bdb27576","chunk-766a929b":"9908daa0","chunk-c796899c":"31d6cfe0",comple:"9c786f15",creditos:"ae6d6a9d",glosario:"0e9d9152",referencias:"76a008b5",tema1:"31d6cfe0",tema2:"31d6cfe0"}[e]+".css",r=l.p+o,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var s=t[c],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===o||d===r))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){s=u[c],d=s.getAttribute("data-href");if(d===o||d===r)return a()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=a,p.onerror=function(a){var o=a&&a.target&&a.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=o,delete i[e],p.parentNode.removeChild(p),n(t)},p.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){i[e]=0})));var o=r[e];if(0!==o)if(o)a.push(o[2]);else{var t=new Promise((function(a,n){o=r[e]=[a,n]}));a.push(o[2]=t);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=c(e);var u=new Error;s=function(a){d.onerror=d.onload=null,clearTimeout(p);var n=r[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}r[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(a)},l.m=e,l.c=o,l.d=function(e,a,n){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)l.d(n,o,function(a){return e[a]}.bind(null,o));return n},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=a,s=s.slice();for(var u=0;u<s.length;u++)a(s[u]);var p=d;t.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view"),n("footer")],1)],1),n("BarraAvance")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}}},c=t,l=(n("cf25"),n("2877")),s=Object(l["a"])(c,i,r,!1,null,null,null),d=s.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("8c4f")),p=n("ae58"),f=n("7e58");o["a"].use(u["a"]);var m=new u["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=m,g=n("1c2c"),h=(n("becf"),n("7b17"),n("ab8b"),n("a3a0"),n("4bc7"),n("78df"),{global:{componenteFormativo:"Escenario básico de interoperabilidad",descripcionCurso:"El aprendiz con la ejecución de este módulo estará en la capacidad de crear una solución de software que involucre un escenario común de interoperabilidad, mediante el uso de la plataforma X-Road en nivel avanzado, diseñando un escenario común de intercambio de información mediante el uso del ecosistema X-Road.",imagenBannerPrincipal:n("9370"),fondoBannerPrincipal:n("e6b0")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Escenario de Interoperabilidad",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Descripción",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Actores",hash:"t_1_2"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Escenario Básico de Interoperabilidad",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Actores",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Descripción",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Ejecución práctica del escenario",hash:"t_2_3"}]}],subMenu:[{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},creditos:{liderEquipo:{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"},contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"},{nombre:"Daniel Fernando Portilla Arciniegas",cargo:"Experto temático",centro:"MINTIC"},{nombre:"José Ricardo Aponte Oviedo",cargo:"Experto temático",centro:"MINTIC"},{nombre:"Sergio Arturo Medina Castillo",cargo:"Diseñador instruccional",centro:"Centro para la Industria de la Comunicación Gráfica",regional:"Regional Distrito Capital"},{nombre:"Vilma Lucia Perilla M.",cargo:"Revisora y evaluadora metodológica",centro:"Centro de Gestión Industrial"},{nombre:"Sandra Patricia Hoyos Sepúlveda",cargo:"Correción de estilo",centro:"Centro para la Industria de la Comunicación Gráfica",regional:"Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"},{nombre:["Eulises Orduz Amezquita","Luis Gabriel Urueta Alvarez","Oscar Ivan Uribe Ortiz"],cargo:"Diseño web y Producción Audiovisual",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"},{nombre:"Diego Fernando Velasco Güiza",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"},{nombre:"Yuli Marcela Gómez Tarazona",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios",regional:"Regional Tolima"}]},referencias:[{referencia:"Atzori, L, Iera, A. y Morabito, G, (2017, marzo 1) Comprensión de Internet de las cosas: definición, potencialidades y papel social de un paradigma en rápida evolución pág. 122-140.",link:"https://www.sciencedirect.com/science/article/abs/pii/S1570870516303316"},{referencia:"BBC NEWS. (2014, marzo 10). El peligro de usar wi-fi en lugares públicos",link:"https://www.bbc.com/mundo/noticias/2014/03/140310_wifi_internet_hotspots_rg"},{referencia:"Decreto 620 de 2020. [Presidencia de la República]. Por el cual se subroga el título 17 de la parte 2 del libro 2 del Decreto 1078 de 2015, para reglamentarse parcialmente los artículos 53, 54, 60, 61 Y 64 de la Ley 1437 de 2011, los literales e, j y literal a del parágrafo 2 del artículo 45 de la Ley 1753 de 2015, el numeral 3 del artículo 147 de la Ley 1955 de 2019, y el artículo 9 del Decreto 2106 de 2019, estableciendo los lineamientos generales en el uso y operación de los servicios ciudadanos digitales. 2 de mayo de 2020."},{referencia:"Gobierno electrónico. Estado, ciudadanía y democracia en Internet, Julie Massal, Carlos Germán Sandoval, Revista Análisis político nº 68, Bogotá, enero-abril, 2010: págs. 3-25."},{referencia:"Ley 1341 de 2009. [Congreso de la República]. Por la cual se definen principios y conceptos sobre la sociedad de la información y la organización de las Tecnologías de la Información y las Comunicaciones –TIC–, se crea la Agencia Nacional de Espectro y se dictan otras disposiciones. Julio 30 de 2009"},{referencia:"Manual de Gobierno digital. Implementación de la Política de Gobierno Digital Decreto 1008 de 2018 (Compilado en el Decreto 1078 de 2015, capítulo 1, título 9, parte 2, libro 2)."},{referencia:"Marco de la Transformación Digital para el Estado Colombiano. MinTIC, (Julio 2020)."}],glosario:[{termino:"Servicios ciudadanos digitales",significado:"es el conjunto de soluciones y procesos transversales que brindan al Estado capacidades y eficiencias para su transformación digital, para lograr una adecuada interacción del ciudadano con el Estado, garantizando el derecho a la utilización de medios electrónicos ante la administración pública."},{termino:"Servicios ciudadanos digitales base",significado:"son los considerados como servicios de interoperabilidad, autenticación digital y carpeta ciudadana digital."},{termino:"Servicios ciudadanos digitales especiales",significado:"son aquellos que brindan soluciones que por sus características realizan nuevas ofertas de valor y son adicionales a los servicios ciudadanos digitales base, o bien, corresponden a innovaciones que realizan los prestadores de servicio a partir de la integración a los servicios ciudadanos digitales base, esto bajo un esquema coordinado por el articulador."},{termino:"Servicio de intercambio de información",significado:"en software de diseño, son líneas que se crean y permiten, expandir, modificar, al tamaño que sea sin pixelarse porque se unen por coordenadas matemáticas del programa y no se generan por números fijo, recurso tecnológico que mediante el uso de un conjunto de protocolos y estándares permite el intercambio de información. “Es una representación lógica de una actividad de negocio repetible que tiene un resultado específico (por ejemplo, verificar el crédito del cliente, proporcionar datos del clima, consolidar informes de perforación) y que tiene las siguientes características: autocontenido, puede estar compuesto por otros servicios y es una “caja negra” para los consumidores del servicio”"},{termino:"Trámite",significado:"conjunto o serie de pasos o acciones reguladas por el Estado, que deben efectuar los usuarios para adquirir un derecho o cumplir con una obligación prevista o autorizada por la ley. El trámite se inicia cuando ese particular activa el aparato público a través de una petición o solicitud expresa y termina (como trámite) cuando la administración pública se pronuncia sobre este, aceptando o denegando la solicitud."}]});o["a"].prototype.$config=h;var v=n("9224");o["a"].prototype.$package=v,o["a"].config.productionTip=!1,new o["a"]({router:b,store:g["a"],render:function(e){return e(d)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"3.1.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"@fortawesome/fontawesome-free":"^5.15.3","@popperjs/core":"^2.9.1","bootstrap":"^5.0.0-beta3","core-js":"^3.6.5","ecored-base-pkg":"2.1.0","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.12","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},9370:function(e,a,n){e.exports=n.p+"img/banner-princiapal.232de10e.png"},a3a0:function(e,a,n){},cf25:function(e,a,n){"use strict";n("fea6")},e6b0:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.9d496362.png"},fea6:function(e,a,n){}});
//# sourceMappingURL=app.8c85722a.js.map