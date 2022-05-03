(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[953],{8916:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return et}});var r=n(5411),a=n(2809),s=n(266),c=n(809),o=n.n(c),i=n(7294),l=n(3752),u=n(5471),d=n(4586),p=n(219),m={PERSONAL:"personal",INSTRUCTIONS:"instructions",QUANTITY:"quantity",DETAILS:"details",SUCCESS:"success"};function h(e){if(e===m.SUCCESS)return e;var t=Object.values(m);return t[t.indexOf(e)+1]}function f(e){if(e===m.PERSONAL)return e;var t=Object.values(m);return t[t.indexOf(e)-1]}var j=["utm_id","utm_source","utm_medium","utm_campaign","utm_term","utm_content"];function x(e){var t="; ".concat(document.cookie).split("; ".concat(e,"="));return 2===t.length?t.pop().split(";").shift():null}var b=function(e){var t=e.name.split(".").pop(),n=e.name.split(".").slice(0,-1).join(".");return"".concat(n.replace(/[\s++]/g,"-"),".").concat(t)},y=(n(6650),n(4155)),v=["whatsOptin"];function g(e,t){return O.apply(this,arguments)}function O(){return(O=(0,s.Z)(o().mark((function e(t,n){var r,a,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return console.log("S3 Request failed"),e.abrupt("return");case 3:return(r=new FormData).append("Content-Type",n.type),Object.keys(t.fields).forEach((function(e){r.append(e,t.fields[e])})),a=b(n),r.append("file",n,a),e.next=10,fetch(t.url,{method:"post",body:r});case 10:return s=e.sent,e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=function(){var e=(0,s.Z)(o().mark((function e(t,n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.map(function(){var e=(0,s.Z)(o().mark((function e(n){var r,a,s,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=b(n),a={method:"post",body:JSON.stringify({key:r}),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(y.env.API_KEY)},credentials:"include"},e.next=4,fetch("".concat("https://aretzbeer.api.javendeu.com","/requests/").concat(t,"/s3-presigned-url"),a);case 4:return s=e.sent,e.next=7,s.json();case 7:return c=e.sent,e.next=10,g(c,n);case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function N(){return(N=(0,s.Z)(o().mark((function e(t,n){var r,a,s,c,i,l,u,d,m,h,f,j,b;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.personalData,a=r.whatsOptin,s=(0,p.Z)(r,v),c=t.detailsData,i=c.requestId,l=c.products,u=t.quantity>5,d=!!u&&l[0].optWhats,m=l.map((function(e){return e.photos.map((function(e){return e.name}))})).flat(),h=u?l[0].description:l.map((function(e,t){return"Produto ".concat(t+1,":").concat(e.name," - Quantidade: ").concat(e.quantity," - Descri\xe7\xe3o: ").concat(e.description," - Pre\xe7o: ").concat(e.suggestedPrice)})).join("\n\n"),f=u?[]:l.map((function(e){return{title:e.name,quantity:e.quantity,description:e.description,suggestedPrice:e.suggestedPrice,photos:e.photos.map((function(e){return e.name}))}})),j={id:i,seller:s,whatsOptIn:a,photosViaWhats:d,description:h,photos:m,products:d?[]:f},n.forEach((function(e){var t=x(e);t&&(j[e]=t)})),b={method:"post",body:JSON.stringify(j),headers:{"Content-Type":"application/json"}},e.next=12,fetch("".concat("https://aretzbeer.api.javendeu.com","/forms"),b);case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P=function(e,t){return N.apply(this,arguments)},S=n(1163),k=n(7536),Z=n(6627),C=n.n(Z);function _(e){var t=function(e){return String(e).replace(/[\D]/g,"").padStart(8,"0")}(e);return/^[0].+$/.test(t)}var D=n(3373),E=n.n(D),q=n(1881),V=n(3199),A=n(1643),I=n(5893);function T(e){var t=e.show,n=e.handleClose;return(0,I.jsx)(I.Fragment,{children:(0,I.jsxs)(q.Z,{show:t,onHide:n,centered:!0,children:[(0,I.jsx)(q.Z.Header,{className:"border-0 pb-0",closeButton:!0}),(0,I.jsx)(q.Z.Body,{className:"m-9 pt-0",children:(0,I.jsxs)(V.Z,{className:"text-center",gap:2,children:[(0,I.jsxs)("div",{className:"mb-3",children:[(0,I.jsx)(A.Z,{className:"p-2 bg-danger rounded-circle",color:"white",size:48}),(0,I.jsx)(q.Z.Title,{children:"Ops, desculpe pelo transtorno!"})]}),(0,I.jsx)("b",{className:"text-green-dark",children:"No momento, n\xe3o atuamos na sua regi\xe3o, estamos fazendo retiradas apenas na Grande S\xe3o Paulo."}),(0,I.jsx)("div",{children:"Estamos trabalhando para te alcan\xe7ar e oferecer os nossos servi\xe7os para todo o Brasil."}),(0,I.jsx)("div",{children:"Agradecemos seu interesse na J\xe1 Vendeu!"})]})})]})})}function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(e){var t=e.onSubmit,n=(0,k.cI)({mode:"onBlur"}),r=n.handleSubmit,a=n.register,s=n.control,c=n.formState.errors,o=(0,i.useState)(!1),l=o[0],u=o[1],d=(0,S.useRouter)();return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)("form",{id:"personal-form",className:"row",onSubmit:r((function(e){if(!_(e.cep))return u(!0);t(e)})),children:[(0,I.jsx)("div",{className:"mb-3 col-lg-6 col-12",children:(0,I.jsxs)("label",{className:"w-100",htmlFor:"name",children:[(0,I.jsx)("span",{className:"".concat(E().label," ").concat(null!==c&&void 0!==c&&c.name?"text-danger":""),children:"Pode nos informar seu nome?"}),(0,I.jsx)(k.Qr,{name:"name",control:s,defaultValue:"",rules:{required:!0,pattern:/(\w.+\s).+/i},render:function(e){var t=e.field;return(0,I.jsx)("input",L({className:"form-control p-3 ".concat(null!==c&&void 0!==c&&c.name?"is-invalid":""),style:{height:60},type:"text",placeholder:"Nome completo..."},t))}})]})}),(0,I.jsx)("div",{className:"mb-3 col-lg-6 col-12",children:(0,I.jsxs)("label",{className:"w-100",htmlFor:"phone",children:[(0,I.jsx)("span",{className:"".concat(E().label," ").concat(null!==c&&void 0!==c&&c.phone?"text-danger":""),children:"Como podemos falar com voc\xea?"}),(0,I.jsx)(k.Qr,{name:"phone",control:s,defaultValue:"",rules:{required:!0,pattern:/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}-?[0-9]{4}$/},render:function(e){var t=e.field;return(0,I.jsx)(C(),{mask:"(99) 99999-9999",value:t.value,onChange:t.onChange,children:function(e){return(0,I.jsx)("input",L({className:"form-control p-3 ".concat(null!==c&&void 0!==c&&c.phone?"is-invalid":""),style:{height:60},placeholder:"Whatsapp...",ref:t.ref},e))}})}})]})}),(0,I.jsx)("div",{className:"mb-3 col-lg-6 col-12",children:(0,I.jsxs)("label",{className:"w-100",htmlFor:"email",children:[(0,I.jsx)("span",{className:"".concat(E().label," ").concat(null!==c&&void 0!==c&&c.email?"text-danger":""),children:"Qual o seu melhor email?"}),(0,I.jsx)("input",L({className:"form-control p-3 ".concat(null!==c&&void 0!==c&&c.email?"is-invalid":""),style:{height:60},name:"email",type:"email",placeholder:"Email..."},a("email",{required:!0,pattern:/^\S+@\S+$/i})))]})}),(0,I.jsx)("div",{className:"mb-3 col-lg-6 col-12 mb-0",children:(0,I.jsxs)("label",{className:"w-100",htmlFor:"cep",children:[(0,I.jsx)("span",{className:"".concat(E().label," ").concat(null!==c&&void 0!==c&&c.cep?"text-danger":""),children:"Onde voc\xea est\xe1?"}),(0,I.jsx)(k.Qr,{name:"cep",control:s,defaultValue:"",rules:{required:!0,pattern:/^\d{5}-\d{3}$/},render:function(e){var t=e.field;return(0,I.jsx)(C(),{mask:"99999-999",value:t.value,onChange:t.onChange,children:function(e){return(0,I.jsx)("input",L({className:"form-control p-3 ".concat(null!==c&&void 0!==c&&c.cep?"is-invalid":""),style:{height:60},placeholder:"CEP...",ref:t.ref},e))}})}})]})}),(0,I.jsx)("div",{className:"mb-1 col-12 mb-0",children:(0,I.jsxs)("label",{className:"form-check",children:[(0,I.jsx)("input",L(L({},a("whatsOptin")),{},{className:"form-check-input",type:"checkbox",defaultChecked:!0})),(0,I.jsxs)("span",{className:"form-check-label",children:["Aceito receber atualiza\xe7\xf5es sobre meus produtos via",(0,I.jsx)("b",{className:"text-green-dark",children:" whatsapp "})]})]})}),(0,I.jsx)("div",{className:"col-12 d-flex justify-content-end py-4",children:(0,I.jsx)("button",{id:"personal-form",className:"btn btn-primary",type:"submit",children:"Pr\xf3ximo"})})]}),(0,I.jsx)(T,{show:l,handleClose:function(){u(!1),d.push("/home")}})]})}var B=n(3314),H=function(e){var t=e.disableSubmit,n=void 0!==t&&t,r=e.submitClick,a=e.backClick,s=e.trackingId;return(0,I.jsxs)("div",{className:"d-flex justify-content-between py-3",children:[(0,I.jsx)("button",{onClick:a,className:"btn btn-secondary",type:"button",children:"Voltar"}),(0,I.jsx)("button",{id:s,disabled:n,className:"btn btn-sm btn-primary",onClick:r,type:"submit",children:"Confirmar"})]})};function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z={openedStep:m.PERSONAL,personalData:null,quantity:null,detailsData:null};function M(e,t){switch(t.type){case"nextStep":return U(U({},e),{},{openedStep:h(e.openedStep)});case"previousStep":return U(U({},e),{},{openedStep:f(e.openedStep)});case"submitPersonal":return U(U({},e),{openedStep:h(e.openedStep),personalData:t.payload});case"editPersonal":return U(U({},e),{openedStep:m.PERSONAL});case"submitQuantity":return U(U({},e),{openedStep:h(e.openedStep),quantity:t.payload.quantity});case"editQuantity":return U(U({},e),{openedStep:m.QUANTITY});case"submitDetails":return U(U({},e),{openedStep:h(e.openedStep),detailsData:t.payload});case"editDetails":return U(U({},e),{openedStep:m.DETAILS});default:throw new Error}}function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function $(e){var t=e.onSubmit,n=e.dispatch,r=(0,k.cI)({mode:"onBlur",defaultValues:{quantity:1}}),a=r.handleSubmit,s=r.register,c=r.formState,o=c.errors,i=c.isSubmitting;return(0,I.jsxs)(B.Z,{onSubmit:a(t),children:[(0,I.jsxs)(B.Z.Group,{className:"mb-3",controlId:"quantityField",children:[(0,I.jsx)(B.Z.Label,{className:"".concat(E().label," ").concat(null!==o&&void 0!==o&&o.name?"text-danger":""),children:"Quantos produtos voc\xea deseja anunciar? *"}),(0,I.jsx)(B.Z.Control,Y({className:"p-3 ".concat(null!==o&&void 0!==o&&o.quantity?"is-invalid":""),style:{height:50},name:"quantity",type:"number",placeholder:"Quantidade",step:1},s("quantity",{required:!0,min:1})))]}),(0,I.jsx)(H,{dispatch:n,isSubmitting:i,trackingId:"form-step-quantity",backClick:function(){return n({type:"previousStep"})}})]})}var G=n(5005),J=n(4051),K=n(1555),X=n(6445);function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ne(e){var t=e.Icon,n=e.title,r=e.renderSubtitle,a=e.onEditClick,s=e.collapse,c=void 0===s||s,o=e.checked,i=void 0!==o&&o,l=e.children,u=e.shouldHideOnCollapse,d="".concat(i?"d-block":"d-none"," mt-md-0 mt-1 p-0"),p=n||t?"".concat(i?"align-items-md-center":"align-items-center"," ").concat(c?"p-4 p-md-5":"px-4 pt-4 px-md-5 pt-md-5"," d-flex"):"",m={className:"m-auto",width:24,height:24,color:"#fff"},h=c&&i,f=!i&&c;return(0,I.jsxs)("div",{className:"".concat(u&&f?"d-none":""," rounded shadow-lg mt-4 mt-md-5 mb-5 p-3"),children:[u?(0,I.jsxs)("div",{className:p,children:[t&&(0,I.jsx)("div",{className:"me-3",children:(0,I.jsx)("div",{className:"".concat(E().circle," ").concat(f?E().greyBg:""),children:h?(0,I.jsx)(X.Z,te({},m)):(0,I.jsx)(t,te({},m))})}),n&&(0,I.jsx)("div",{className:"d-inline d-md-flex justify-content-start justify-content-md-between w-100",children:(0,I.jsx)("h5",{className:"mb-0 fw-bold",children:n})})]}):(0,I.jsxs)("div",{className:p,children:[(0,I.jsx)("div",{className:"me-3",children:(0,I.jsx)("div",{className:"".concat(E().circle," ").concat(f?E().greyBg:""),children:h?(0,I.jsx)(X.Z,te({},m)):(0,I.jsx)(t,te({},m))})}),(0,I.jsxs)("div",{className:"d-inline d-md-flex justify-content-start justify-content-md-between w-100",children:[(0,I.jsx)("h5",{className:"".concat(f?E().grey:""," mb-0 fw-bold"),children:n}),c&&(0,I.jsx)(G.Z,{className:"".concat(d),variant:"link",onClick:a,children:"Editar"})]})]}),(0,I.jsx)("div",{className:c?E().collapse:"",children:(0,I.jsxs)("div",{className:"px-4 px-md-5",children:[r&&(0,I.jsx)(J.Z,{className:"mt-4",children:(0,I.jsx)(K.Z,{xs:12,children:r()})}),l]})})]})}var re,ae=n(3789),se="INITIALIZE",ce="UPDATE_PRODUCT",oe=function(e,t){switch(t.type){case se:return n=t.quantity,Array.from({length:n});case ce:return(0,ae.Z)(function(e,t){var n=(0,ae.Z)(t);return n[e.index]=e,n}(t.product,e))}var n},ie=n(9604),le=n(3621);function ue(){return(ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var de=function(e){return i.createElement("svg",ue({width:18,height:18,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),re||(re=i.createElement("path",{d:"M4.5 10.8h1.8a.9.9 0 1 0 0-1.8H4.5a.9.9 0 0 0 0 1.8Zm5.4 1.8H4.5a.9.9 0 1 0 0 1.8h5.4a.9.9 0 1 0 0-1.8ZM15.3 0H2.7A2.7 2.7 0 0 0 0 2.7v12.6A2.7 2.7 0 0 0 2.7 18h12.6a2.7 2.7 0 0 0 2.7-2.7V2.7A2.7 2.7 0 0 0 15.3 0Zm-4.5 1.8v2.961l-1.359-.756a.9.9 0 0 0-.9 0L7.2 4.761V1.8h3.6Zm5.4 13.5a.9.9 0 0 1-.9.9H2.7a.9.9 0 0 1-.9-.9V2.7a.9.9 0 0 1 .9-.9h2.7v4.5a.9.9 0 0 0 1.35.774L9 5.823l2.259 1.26a.9.9 0 0 0 1.077-.147.9.9 0 0 0 .264-.636V1.8h2.7a.9.9 0 0 1 .9.9v12.6Z",fill:"#828282"})))};function pe(){return(pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var me,he=function(e){return i.createElement("svg",pe({width:18,height:18,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),i.createElement("path",{style:{fill:"red"},d:"M4.5 10.8h1.8a.9.9 0 1 0 0-1.8H4.5a.9.9 0 0 0 0 1.8Zm5.4 1.8H4.5a.9.9 0 1 0 0 1.8h5.4a.9.9 0 1 0 0-1.8ZM15.3 0H2.7A2.7 2.7 0 0 0 0 2.7v12.6A2.7 2.7 0 0 0 2.7 18h12.6a2.7 2.7 0 0 0 2.7-2.7V2.7A2.7 2.7 0 0 0 15.3 0Zm-4.5 1.8v2.961l-1.359-.756a.9.9 0 0 0-.9 0L7.2 4.761V1.8h3.6Zm5.4 13.5a.9.9 0 0 1-.9.9H2.7a.9.9 0 0 1-.9-.9V2.7a.9.9 0 0 1 .9-.9h2.7v4.5a.9.9 0 0 0 1.35.774L9 5.823l2.259 1.26a.9.9 0 0 0 1.077-.147.9.9 0 0 0 .264-.636V1.8h2.7a.9.9 0 0 1 .9.9v12.6Z",fill:"#828282"}))};function fe(){return(fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var je=function(e){return i.createElement("svg",fe({width:18,height:18,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),me||(me=i.createElement("path",{d:"M4.5 10.8h1.8a.9.9 0 1 0 0-1.8H4.5a.9.9 0 0 0 0 1.8Zm5.4 1.8H4.5a.9.9 0 1 0 0 1.8h5.4a.9.9 0 1 0 0-1.8ZM15.3 0H2.7A2.7 2.7 0 0 0 0 2.7v12.6A2.7 2.7 0 0 0 2.7 18h12.6a2.7 2.7 0 0 0 2.7-2.7V2.7A2.7 2.7 0 0 0 15.3 0Zm-4.5 1.8v2.961l-1.359-.756a.9.9 0 0 0-.9 0L7.2 4.761V1.8h3.6Zm5.4 13.5a.9.9 0 0 1-.9.9H2.7a.9.9 0 0 1-.9-.9V2.7a.9.9 0 0 1 .9-.9h2.7v4.5a.9.9 0 0 0 1.35.774L9 5.823l2.259 1.26a.9.9 0 0 0 1.077-.147.9.9 0 0 0 .264-.636V1.8h2.7a.9.9 0 0 1 .9.9v12.6Z",fill:"#32AD51"})))},xe=n(6025),be=n(246),ye=function(e){return parseFloat(e.replace("R$ ","").replace(".","").replace(",","."))},ve=n(5675),ge=n(1896),Oe=n(8268),we=n(733),Ne=n.n(we),Pe=n(2528),Se=n(628),ke=n(21),Ze=n.n(ke),Ce=function(e,t){e.scrollLeft+=30*t};function _e(e){var t=e.children,n=(0,i.useRef)();return(0,I.jsxs)("div",{className:"d-flex w-100 align-items-center justify-content-between",children:[(0,I.jsx)("button",{className:"".concat(Ze().button),type:"button",onClick:function(){return Ce(n.current,-5)},children:(0,I.jsx)(Pe.Z,{})}),(0,I.jsx)("div",{className:Ze().carousel,children:(0,I.jsx)("div",{ref:n,onWheel:function(e){return Ce(n.current,e.deltaY)},children:t&&0!==i.Children.count(t)?t.map((function(e,t){return(0,I.jsx)("div",{className:Ze().item,children:e},t)})):(0,I.jsx)("span",{children:"Sem fotos"})})}),(0,I.jsx)("button",{className:"".concat(Ze().button),type:"button",onClick:function(){return Ce(n.current,5)},children:(0,I.jsx)(Se.Z,{})})]})}var De=["ref"];function Ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function qe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ee(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ve(e){var t=e.register,n=e.errors,r=e.dirtyFields,a=e.control,c=e.setValue,l=e.images,u=e.setImages,m=(0,i.useRef)(),h=(0,i.useState)(!1),f=h[0],j=h[1],x=(0,i.useContext)(We).requestId,b=t("images",{shouldUnregister:!0,validate:function(e){return l.length>0},onChange:function(e){return c("images",e.target.value,{shouldValidate:!0})}}),y=b.ref,v=(0,p.Z)(b,De),g=function(){var e=(0,s.Z)(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),n=Array.from(t.target.files),r=n.map((function(e){var t=(0,d.Z)()+"."+e.type.split("/")[1];return new File([e],t,{type:e.type})})),e.next=5,w(x,r);case 5:j(!1),u([].concat((0,ae.Z)(l),(0,ae.Z)(r)));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,I.jsxs)("div",{children:[(0,I.jsxs)("div",{className:"mb-3 col-12",children:[(0,I.jsx)("label",{className:"mb-3",htmlFor:"picturesValidation",children:(0,I.jsxs)("span",{className:"".concat(E().label," ").concat(n.images&&r.images?"text-danger":""),children:[(0,I.jsx)("span",{className:E().mandatory,children:"* "}),"Envie a(s) foto(s):\xa0"]})}),(0,I.jsxs)("button",{type:"button",className:"form-control h-auto p-5 d-flex align-items-center justify-content-center ".concat(E().uploadCard," ").concat(n.images&&r.images?"is-invalid":""),onClick:function(){return m.current.click()},children:[(0,I.jsx)("div",{className:"mb-3 d-flex align-items-center justify-content-center",children:(0,I.jsx)(ge.Z,{color:"".concat(n.images?"red":"#1A75FF")})}),(0,I.jsx)("span",{className:"".concat(n.images?"text-danger":"text-muted "),children:"Clique para fazer upload"}),(0,I.jsx)("input",qe(qe({},v),{},{control:a,type:"file",name:"images",accept:"image/*",ref:function(e){y(e),m.current=e},onChange:g,multiple:!0,hidden:!0}))]}),(0,I.jsxs)("div",{className:"row mt-4",children:[f&&(0,I.jsx)("div",{style:{width:"100%",height:"100",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,I.jsx)(Ne(),{type:"spin",color:"#2BAD60",height:"30px",width:"30px"})}),(0,I.jsx)(_e,{children:l&&l.map((function(e,t){return(0,I.jsxs)("div",{className:"".concat(E().imageBox," shadow-sm"),children:[(0,I.jsx)(ve.default,{layout:"fill",objectFit:"contain",src:URL.createObjectURL(e),alt:"Imagem n\xfamero ".concat(t," upload")},"img-".concat(t)),(0,I.jsx)("button",{type:"button",onClick:function(){return function(e){u((function(t){var n=(0,ae.Z)(t);return n.splice(e,1),n}))}(t)},children:(0,I.jsx)(Oe.Z,{color:"white"})})]},t)}))})]}),l.length>0&&(0,I.jsx)("div",{children:(0,I.jsxs)("span",{children:["Voc\xea est\xe1 enviando\xa0",(0,I.jsxs)("strong",{children:[l.length," ",l.length>1?"fotos":"foto"]})]})})]}),(0,I.jsxs)("div",{className:"mb-3 col-12",children:[(0,I.jsx)("label",{className:"mb-3",htmlFor:"picturesValidation",children:(0,I.jsxs)("span",{className:"".concat(E().label," ").concat(n.description&&r.description?"text-danger":""),children:[(0,I.jsx)("span",{className:E().mandatory,children:"* "})," Descri\xe7\xe3o do produto:\xa0"]})}),(0,I.jsx)("textarea",qe(qe({},t("description",{required:!0})),{},{className:"form-control ".concat(E().textarea," ").concat(n.description&&r.description?"is-invalid":""),rows:6,placeholder:"Deixe aqui informa\xe7\xf5es que voc\xea considere relevantes para melhor analisarmos os seus itens, quanto mais informa\xe7\xf5es, melhor e mais r\xe1pido conseguiremos finalizar a sua an\xe1lise... ",control:a,onChange:function(e){return c("description",e.target.value,{shouldValidate:!0})}}))]})]})}function Ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ae(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Te=function(e){var t=e.index,n=(0,k.cI)({mode:"onTouched"}),r=n.control,a=n.register,c=n.getValues,l=n.setValue,u=(0,k.cl)({control:r}),d=u.errors,p=u.dirtyFields,m=(0,i.useState)([]),h=m[0],f=m[1],j=(0,i.useContext)(We).productsDispatch;(0,i.useEffect)((function(){x(c())}),[h]);var x=function(){var e=(0,s.Z)(o().mark((function e(n){var r,a,s,c,i,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.description,a=n.quantity,s=n.suggestedPrice,c=n.name,i=ye(s),l=""!==r&&a>0&&i>0&&""!==c&&h.length>0,j({type:ce,product:Ie(Ie({isValid:l,index:t},n),{},{photos:h,quantity:parseFloat(n.quantity),suggestedPrice:ye(n.suggestedPrice)})});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,I.jsx)(xe.Z,{className:"p-2",children:(0,I.jsxs)("form",{onChange:function(){return x(c())},children:[(0,I.jsx)("div",{className:"my-3 col-12",children:(0,I.jsxs)("label",{className:"w-100",htmlFor:"name",children:[(0,I.jsxs)("span",{className:"".concat(E().label," ").concat(d.name&&p.name?"text-danger":""),children:[(0,I.jsx)("span",{className:E().mandatory,children:"* "})," O que voc\xea quer vender?"]}),(0,I.jsx)("input",Ie({control:r,className:"form-control p-3 ".concat(d.name&&p.name?"is-invalid":""),style:{height:60},name:"name-".concat(t),type:"text",placeholder:"Nome do produto"},a("name",{required:!0,onChange:function(e){return l("name",e.target.value,{shouldValidate:!0})}})))]})}),(0,I.jsx)("div",{className:"my-3 col-12",children:(0,I.jsxs)("label",{className:"w-100",htmlFor:"name",children:[(0,I.jsxs)("span",{className:"".concat(E().label," ").concat(d.quantity&&p.quantity?"text-danger":""),children:[(0,I.jsx)("span",{className:E().mandatory,children:"* "})," Qual a quantidade?"]}),(0,I.jsx)("input",Ie({control:r,className:"form-control p-3 ".concat(d.quantity&&p.quantity?"is-invalid":""),style:{height:60},name:"quantity-".concat(t),type:"number",placeholder:"Quantidade",defaultValue:1},a("quantity",{required:!0,min:1,onChange:function(e){return l("quantity",e.target.value,{shouldValidate:!0})}})))]})}),(0,I.jsx)("div",{className:"my-3 col-12",children:(0,I.jsxs)("label",{className:"w-100",htmlFor:"name",children:[(0,I.jsxs)("span",{className:"".concat(E().label," ").concat(d.suggestedPrice&&p.suggestedPrice?"text-danger":""),children:[(0,I.jsx)("span",{className:E().mandatory,children:"* "})," Por quanto voc\xea deseja vender?*"]}),(0,I.jsx)(be.Z,Ie({prefix:"R$ ",decimalSeparator:",",groupSeparator:".",decimalScale:2,allowNegativeValue:!1,control:r,className:"form-control p-3 ".concat(d.suggestedPrice&&p.suggestedPrice?"is-invalid":""),style:{height:60},name:"price-".concat(t),step:.01},a("suggestedPrice",{required:!0,min:0,onChange:function(e){return l("suggestedPrice",e.target.value,{shouldValidate:!0})}})))]})}),(0,I.jsx)(Ve,{control:r,errors:d,dirtyFields:p,register:a,images:h,setImages:f,setValue:l})]})})};function Fe(e){var t=e.index,n=e.product,r=e.refAccordion,a=n&&n.isValid?"filled":"empty",s=(0,le.k)(t+1,(function(){null===r||void 0===r||r.current.scrollIntoView(!0)}));return(0,I.jsxs)(ie.Z.Item,{eventKey:t+1,children:[(0,I.jsx)(ie.Z.Header,{onClick:s,className:"p-0 justify-content-between",children:(0,I.jsxs)("div",{className:"d-flex",children:["empty"===a?(0,I.jsx)(de,{}):"error"===a?(0,I.jsx)(he,{}):(0,I.jsx)(je,{}),(0,I.jsxs)("div",{className:"ms-2 fs-5 fw-bold ".concat("error"===a?"text-danger":"empty"===a?"":"text-success"),children:["Produto ",t+1,": ",n&&n.name]})]})}),(0,I.jsx)(ie.Z.Body,{children:(0,I.jsx)(Te,{index:t})})]})}var Le,Re=function(e){var t=e.products,n=e.refAccordion;return(0,I.jsx)(ie.Z,{ref:n,defaultActiveKey:"0",flush:!0,children:t.map((function(e,t){return(0,I.jsx)(Fe,{fowardRef:n,index:t,product:e},t)}))})};function Be(){return(Be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var He=function(e){return i.createElement("svg",Be({width:34,height:34,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),Le||(Le=i.createElement("path",{d:"M28.9 0H5.1A5.1 5.1 0 0 0 0 5.1v17a5.1 5.1 0 0 0 5.1 5.1h19.703l6.29 6.307a1.7 1.7 0 0 0 1.207.492c.223.006.444-.04.646-.136A1.7 1.7 0 0 0 34 32.3V5.1A5.1 5.1 0 0 0 28.9 0ZM6.409 23.8H5.1a1.7 1.7 0 0 1-1.7-1.7v-.714l5.61-5.593a1.7 1.7 0 0 1 2.397 0l1.479 1.479L6.409 23.8ZM30.6 28.203l-3.893-3.91A1.698 1.698 0 0 0 25.5 23.8H11.203L22.61 12.393a1.7 1.7 0 0 1 2.38 0l5.61 5.593v10.217Zm0-15.011-3.196-3.18a5.1 5.1 0 0 0-7.208 0l-4.896 4.88-1.496-1.48a5.202 5.202 0 0 0-7.208 0L3.4 16.593V5.1a1.7 1.7 0 0 1 1.7-1.7h23.8a1.7 1.7 0 0 1 1.7 1.7v8.092Z",fill:"#34C759"})))};function Qe(){return(0,I.jsx)("div",{className:"card shadow",children:(0,I.jsxs)("div",{className:"card-body row d-flex",children:[(0,I.jsx)("div",{className:"mb-2 mb-md-0 col-12 col-md-1",children:(0,I.jsx)(He,{})}),(0,I.jsxs)("div",{className:"mt-1 col-12 col-md-10",children:[(0,I.jsx)("h5",{className:"".concat(E().cardTitle," "),children:"Envie as fotos atrav\xe9s do Whatsapp"}),(0,I.jsxs)("p",{className:E().cardDescription,children:["Voc\xea pode enviar todas as fotos"," ",(0,I.jsx)("span",{className:E().green,children:"direto para o nosso WhatsApp"}),", em instantes algu\xe9m do nosso time ir\xe1 em contato com voc\xea, em seguida \xe9 s\xf3 enviar suas fotos."]})]})]})})}function Ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ze(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ue(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ue(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Me=function(){var e=(0,k.cI)({mode:"all"}),t=e.getValues,n=e.setValue,r=e.register,a=e.control,s=e.formState,c=s.errors,o=s.dirtyFields,l=(0,i.useContext)(We).productsDispatch,u=(0,i.useState)([]),d=u[0],p=u[1],m=(0,i.useState)(!1),h=m[0],f=m[1];(0,i.useEffect)((function(){j(t())}),[h,d]);var j=function(e){if(h)l({type:ce,product:{isValid:h,index:0,optWhats:h,description:"",photos:[]}});else{var t=""!==e.description&&d.length>0;l({type:ce,product:ze(ze({isValid:t,index:0},e),{},{photos:d})})}};return(0,I.jsxs)("form",{onChange:function(){return j(t())},children:[h?(0,I.jsx)(Qe,{}):(0,I.jsx)(Ve,{register:r,errors:c,dirtyFields:o,control:a,images:d,setImages:p,setValue:n}),(0,I.jsxs)("div",{className:"mt-4 mb-3 form-check",children:[(0,I.jsx)("input",ze(ze({},r("optWhats")),{},{className:"form-check-input",type:"checkbox",value:h,onChange:function(e){return f(e.target.checked)},id:"flexCheckDefault"})),(0,I.jsxs)("label",{className:"form-check-label",children:["Vou enviar as fotos por ",(0,I.jsx)("span",{className:E().green,children:" whatsapp "})]})]})]})},We=i.createContext();function Ye(e){var t=e.onSubmit,n=e.dispatch,r=e.quantity,a=e.requestId,c=i.createRef(),l=function(){var e=(0,i.useReducer)(oe,[]);return{products:e[0],dispatchProducts:e[1]}}(),u=l.products,d=l.dispatchProducts,p=u&&u.map((function(e){return!!e&&e.isValid})).includes(!1);(0,i.useEffect)((function(){d({type:se,quantity:r<=5?r:1})}),[r,d]);var m=function(){var e=(0,s.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({products:u,requestId:a});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h={requestId:a,productsDispatch:d};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(We.Provider,{value:h,children:r>5?(0,I.jsx)(Me,{}):(0,I.jsx)(Re,{products:u,refAccordion:c})}),(0,I.jsx)(H,{disableSubmit:p,submitClick:function(){return!p&&m()},backClick:function(){return n({type:"editQuantity"})},trackingId:"submit-seller-form"})]})}var $e=function(e){var t=e.onClickNext,n=(0,i.useState)(!1),r=n[0],a=n[1];return(0,I.jsxs)("div",{className:"my-3",children:[(0,I.jsxs)("p",{children:["A J\xe1 Vendeu trabalha com venda comissionada de"," ",(0,I.jsx)("b",{children:"m\xf3veis, eletrodom\xe9sticos e eletr\xf4nicos!"})," Apesar disso, n\xe3o aceitamos algumas categorias de produtos devido a fatores log\xedsticos e mercadol\xf3gicos."]}),(0,I.jsx)("p",{className:"fw-bold",children:"Produtos que n\xe3o aceitamos:"}),(0,I.jsxs)("ul",{className:"mx-4 mb-3 text-danger fw-bold",children:[(0,I.jsx)("li",{children:"Utens\xedlios Dom\xe9sticos"}),(0,I.jsx)("li",{children:"Artigos de Decora\xe7\xe3o"}),(0,I.jsx)("li",{children:"Materiais de Constru\xe7\xe3o"}),(0,I.jsx)("li",{children:"M\xf3veis Planejados"}),(0,I.jsx)("li",{children:"Guarda-Roupas"}),(0,I.jsx)("li",{children:"Eletr\xf4nicos com mais de 6 anos de uso"}),(0,I.jsx)("li",{children:"Vestu\xe1rio"})]}),(0,I.jsxs)("p",{children:["Tamb\xe9m ",(0,I.jsx)("b",{children:"n\xe3o aceitamos produtos que apresentem defeito"})," ou que necessitem de reparo para serem utilizados."]}),(0,I.jsxs)("p",{children:[(0,I.jsx)("b",{children:"O contrato m\xednimo para usar os servi\xe7os da J\xe1 Vendeu \xe9 de R$1000,00"})," em produtos. Contratos menores n\xe3o s\xe3o vantajosos para voc\xea, cliente, devido aos custos de frete da nossa coleta al\xe9m da nossa comiss\xe3o m\xednima."]}),(0,I.jsx)(B.Z.Check,{className:"mb-3",type:"checkbox",id:"aknowledgement",label:(0,I.jsx)("b",{children:"Estou ciente sobre o aviso"}),onChange:function(){return a(!r)},checked:r}),(0,I.jsx)(G.Z,{disabled:!r,onClick:t,children:"Prosseguir"})]})},Ge=function(){return(0,I.jsxs)("div",{className:"row my-4 justify-content-center",children:[(0,I.jsx)("div",{className:"p-0 d-flex justify-content-center align-items-center bg-green-dark rounded-circle",style:{width:36,height:36},children:(0,I.jsx)(X.Z,{color:"#ffffff"})}),(0,I.jsx)("h5",{className:"m-3 fs-4 fw-bold text-center",children:"Solicita\xe7\xe3o enviada"}),(0,I.jsx)("div",{className:"d-flex col-10 justify-content-start justify-content-md-center",children:(0,I.jsx)("b",{className:"text-green-dark fs-5",children:"Muito obrigado!"})}),(0,I.jsx)("div",{className:"d-flex col-10 justify-content-center",children:(0,I.jsxs)("p",{className:"fs-5 text-muted text-left text-md-center",children:["Agora deixa com a gente, vamos analisar os itens enviados e nossa equipe entrar\xe1 em contato para te dar um retorno sobre a venda ",(0,I.jsx)("b",{className:"text-green-dark",children:" em 48 horas."})]})}),(0,I.jsx)("div",{className:"d-flex col-10 justify-content-center",children:(0,I.jsxs)("p",{className:"fs-6 text-muted text-left text-md-center",children:[(0,I.jsx)("b",{children:"Obs:"})," Nosso prazo de 48 horas para retorno est\xe1 sujeito a altera\xe7\xf5es para an\xe1lises em fins de semanas e feriados.",(0,I.jsxs)("b",{children:[" ","Caso precise de urg\xeancia, entre em contato conosco no seguinte n\xfamero: (11) 97514-8184."]})]})})]})};function Je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ke(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Je(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Je(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Xe(){var e=(0,i.useReducer)(M,z),t=e[0],n=e[1],r=(0,i.useRef)("");(0,i.useEffect)((function(){var e=new URLSearchParams(window.location.search),t=Object.fromEntries(e.entries()),n=new Date,r=n.getTime();r+=36e5,n.setTime(r),j.forEach((function(e){t[e]&&(document.cookie="".concat(e,"=").concat(t[e],"; expires=").concat(n.toUTCString()))}))}),[]);var a=function(){var e=(0,s.Z)(o().mark((function e(r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"submitDetails",payload:r}),e.next=3,P(M(t,{type:"submitDetails",payload:r}),j);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,I.jsx)("div",{className:"container",children:(0,I.jsx)("div",{className:"row justify-content-center",children:(0,I.jsxs)("div",{className:"col-lg-9 col-12",children:[(0,I.jsx)(ne,{title:"Dados Pessoais",Icon:function(e){return(0,I.jsx)(l.Z,Ke({},e))},onEditClick:function(){return n({type:"editPersonal"})},collapse:t.openedStep!==m.PERSONAL,checked:Boolean(t.personalData),renderSubtitle:function(){return(0,I.jsxs)("p",{className:"".concat(E().subtitle," d-inline-block text-muted"),children:[(0,I.jsx)("b",{className:"text-green-dark",children:"Bora Vender? "}),"\xc9 bem r\xe1pido, e para come\xe7ar precisamos saber melhor",(0,I.jsx)("b",{className:"text-green-dark",children:" quem \xe9 voc\xea!"})]})},children:(0,I.jsx)(R,{onSubmit:function(e){n({type:"submitPersonal",payload:e})}})}),(0,I.jsx)(ne,{title:"Como funciona anunciar conosco?",collapse:t.openedStep!==m.INSTRUCTIONS,shouldHideOnCollapse:!0,children:(0,I.jsx)($e,{onClickNext:function(){return n({type:"nextStep"})}})}),(0,I.jsx)(ne,{title:t.openedStep===m.QUANTITY?"Quantos produtos voc\xea quer vender?":"Quantidade de Itens",Icon:function(e){return(0,I.jsx)(u.Z,Ke({},e))},onEditClick:function(){return n({type:"editQuantity"})},collapse:t.openedStep!==m.QUANTITY,checked:Boolean(t.quantity),renderSubtitle:function(){return(0,I.jsxs)("p",{className:"".concat(E().subtitle," d-inline-block text-muted"),children:["Essa etapa \xe9 muito simples, precisamos saber a quantidade de produtos diferentes que voc\xea pretende anunciar conosco!"," ",(0,I.jsx)("b",{children:"Exemplo: 4 cadeiras, 1 mesa e 1 geladeira seriam 3 itens para anunciar."})]})},children:(0,I.jsx)($,{onSubmit:function(e){r.current=(0,d.Z)(),n(function(e){return{type:"submitQuantity",payload:e}}(e))},dispatch:n})}),(0,I.jsx)(ne,{title:"Envie as fotos",Icon:function(e){return(0,I.jsx)(l.Z,Ke({},e))},onEditClick:function(){return n({type:"editDetails"})},collapse:t.openedStep!==m.DETAILS,checked:Boolean(t.detailsData),renderSubtitle:function(){return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("span",{className:"".concat(E().subtitle," ").concat(E().green),children:"\xc9 um prazer ter voc\xea com a gente!"}),(0,I.jsxs)("p",{className:"".concat(E().subtitle," ps-0 mt-1 col-12 col-lg-12 text-muted"),children:["Os itens que ser\xe3o vendidos passam por uma an\xe1lise da nossa equipe, por isso, se poss\xedvel enviar algumas fotos e informa\xe7\xf5es b\xe1sicas (pre\xe7o sugerido, tempo de uso, entre outros)."," ",(0,I.jsx)("strong",{children:"Voc\xea pode escolher se deseja enviar pelo Formul\xe1rio ou pelo nosso Whatsapp."})]})]})},children:(0,I.jsx)(Ye,{onSubmit:a,requestId:r.current,dispatch:n,quantity:t.quantity})}),(0,I.jsx)(ne,{collapse:t.openedStep!==m.SUCCESS,shouldHideOnCollapse:!0,children:(0,I.jsx)(Ge,{})})]})})})}function et(){return(0,I.jsx)(r.Z,{title:"Anuncie teu produto conosco",children:(0,I.jsx)(Xe,{})})}},4281:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/anunciar",function(){return n(8916)}])},21:function(e){e.exports={button:"styles_button__10ja3",item:"styles_item__1m6f5",carousel:"styles_carousel__3SBVw"}},3373:function(e){e.exports={green:"style_green__Z5iGe",subtitle:"style_subtitle__2hxeA",textObs:"style_textObs__t1L6m",uploadCard:"style_uploadCard__29dGu",label:"style_label__sVoSC",mandatory:"style_mandatory__TdwMg",circle:"style_circle__3NNrc",grey:"style_grey__PmcKX",greyBg:"style_greyBg__2EoGV",title:"style_title__2j0Ti",imageBox:"style_imageBox__3vYZk",textarea:"style_textarea__zzBI8",collapse:"style_collapse__3ULqz",cardTitle:"style_cardTitle__zgqZN",cardDescription:"style_cardDescription__3gI2l"}}},function(e){e.O(0,[774,702,190,108,675,467,63,411,888,179],(function(){return t=4281,e(e.s=t);var t}));var t=e.O();_N_E=t}]);