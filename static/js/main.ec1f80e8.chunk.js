(this["webpackJsonpgeo-tracker"]=this["webpackJsonpgeo-tracker"]||[]).push([[0],{26:function(A,e,g){"use strict";g.r(e);var t=g(2),n=g(1),c=g.n(n),o=g(3),a=g.n(o),i=g(10),B=g.n(i),r=g(16),s=g(12),C=g(6),h=g(17),E=g(14),Q=g.n(E),I=g(15),d=g.n(I),O=g(33),j=Object(O.a)((function(){return{icon:{fontSize:"2rem",color:"orangered"}}})),w=function(A){A.lat,A.lng,A.info;var e=A.onClick,g=j();return Object(t.jsx)("div",{onClick:e,children:Object(t.jsx)(Q.a,{icon:d.a,className:g.icon})})},M=Object(O.a)((function(){return{root:{position:"absolute",width:"400px",top:"50px",right:"50px",minHeight:"100px",display:"flex",flexDirection:"column",justifyContent:"space-around",backgroundColor:"rgba(0, 0, 0, 0.35)",borderRadius:"10px",color:"white",padding:"20px"}}})),b=function(A){var e=A.info,g=M();return Object(t.jsxs)("div",{className:g.root,children:[Object(t.jsxs)("span",{children:[Object(t.jsx)("strong",{children:"ID : "}),e.id]}),Object(t.jsxs)("span",{children:[Object(t.jsx)("strong",{children:"Title :"})," ",e.title]}),Object(t.jsxs)("span",{children:[Object(t.jsx)("strong",{children:"More : "}),Object(t.jsx)("a",{href:e.link,children:e.link})]})]})},l=Object(O.a)((function(){return{root:{height:"100vh",width:"100%"}}})),u=function(A){var e=A.wildFires,g=A.center,c=A.zoom,o=l(),a=Object(n.useState)(null),i=Object(C.a)(a,2),B=i[0],r=i[1],s=e.map((function(A,e){return Object(t.jsx)(w,{lat:A.geometries[0].coordinates[1],lng:A.geometries[0].coordinates[0],onClick:function(){r({id:A.id,title:A.title,link:A.sources[0].url})}},e)}));return Object(t.jsxs)("div",{className:o.root,children:[Object(t.jsx)(h.a,{bootstrapURLKeys:{key:"AIzaSyB14xbMSEg46WaKyjJo1cufzAxRS36hFhQ"},defaultCenter:g,defaultZoom:c,children:s}),B&&Object(t.jsx)(b,{info:B})]})};u.defaultProps={center:{lat:37,lng:-120},zoom:4};var D=u,Y=Object(O.a)((function(){return{root:{display:"flex",justifyContent:"center",marginTop:"200px"}}})),x=function(){var A=Y();return Object(t.jsx)("div",{className:A.root,children:Object(t.jsx)("img",{src:"data:image/gif;base64,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",alt:"loading"})})},p=function(){var A=Object(n.useState)([]),e=Object(C.a)(A,2),g=e[0],c=e[1],o=Object(n.useState)(),a=Object(C.a)(o,2),i=a[0],h=a[1];return Object(n.useEffect)((function(){(function(){var A=Object(s.a)(B.a.mark((function A(){var e,g;return B.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return h(!0),A.next=3,fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events");case 3:return e=A.sent,A.next=6,e.json();case 6:g=A.sent,g.events.forEach((function(A){switch(A.categories[0].title){case"Wildfires":c((function(e){return[].concat(Object(r.a)(e),[A])}))}})),h(!1);case 10:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}})()()}),[]),Object(t.jsx)("div",{className:"App",children:i?Object(t.jsx)(x,{}):Object(t.jsx)(D,{wildFires:g})})},H=function(A){A&&A instanceof Function&&g.e(3).then(g.bind(null,34)).then((function(e){var g=e.getCLS,t=e.getFID,n=e.getFCP,c=e.getLCP,o=e.getTTFB;g(A),t(A),n(A),c(A),o(A)}))};a.a.render(Object(t.jsx)(c.a.StrictMode,{children:Object(t.jsx)(p,{})}),document.getElementById("root")),H()}},[[26,1,2]]]);
//# sourceMappingURL=main.ec1f80e8.chunk.js.map