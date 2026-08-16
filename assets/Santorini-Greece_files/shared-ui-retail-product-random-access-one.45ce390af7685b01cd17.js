/*@license For license information please refer to shared-ui-retail-product-random-access-one.licenses.txt*/
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[8187],{37198:function(e,n,t){t.d(n,{dy:function(){return st},ug:function(){return ut}});var i=t(96540),l=t(82308),a=t(20209),o=t(55009),r=t(82652),s=t(66501),d=t(84683),c=t(69714),u=t(38955),m=t(77511),p=t(18288),g=t(66162),v=t(92870),E=t(74848),f=t(5846),x=t(86047),h=t(62403),T=t(33777),y=t(30230),b=t(8065),I=t(4561),N=t(66104),S=t(33998),C=t(10044),A=t(96906),R=t(95834),j=t(21330),L=t(74888),O=t(77630),k=t(85361),F=t(21317),D=t(716),_=t(35784),$=t(33694),M=t(22868),w=t(74276),P=t(58646),U=t(39128),W=t(1959),V=t(25868),G=t(84043),H=t(48842),Y=t(7700),K=t(71162),B=t(76972),J=t(81042),X=t(66300);function z(e){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z(e)}function q(e){var n=function(e,n){if("object"!=z(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,n||"default");if("object"!=z(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==z(n)?n:n+""}function Z(e,n,t){return(n=q(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,i)}return t}function ee(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Q(Object(t),!0).forEach(function(n){Z(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Q(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}const ne=(e,n,t)=>{e.forEach(e=>{var i;if(!t[e.id])return;const l=ee(ee({},e.element),{},{children:[]});if(delete t[e.id],null==e||null===(i=e.childrenIds)||void 0===i?void 0:i.length){const n=[];e.childrenIds.forEach(e=>{n.push(ee(ee({},t[e]),{},{children:[]}))}),ne(n,l.children,t)}n.push(l)})},te=e=>{var n,t;if(!e.randomAccessOne)return null;const i=[],l=[...null!==(n=null===(t=e.randomAccessOne)||void 0===t?void 0:t.mapping)&&void 0!==n?n:[]];return ne(l,i,(e=>{const n={};return e.forEach(e=>{n[e.id]=e}),n})(l)),i};function ie(e,n,t){return e.includes(n)?e.split(n)[t]||"":e}function le(e){return e&&(null==e?void 0:e.startsWith("#"))?null==e?void 0:e.slice(1).trim():null}let ae=function(e){return e.FOUR_ONE="FOUR_ONE",e.FOUR_THREE="FOUR_THREE",e.ONE_ONE="ONE_ONE",e.SIXTEEN_NINE="SIXTEEN_NINE",e.THREE_FOUR="THREE_FOUR",e.THREE_TWO="THREE_TWO",e.TWENTY_ONE_NINE="TWENTY_ONE_NINE",e}({}),oe=function(e){return e.PRIMARY="PRIMARY",e.SECONDARY="SECONDARY",e.TERTIARY="TERTIARY",e}({}),re=function(e){return e.LEADING="LEADING",e.TRAILING="TRAILING",e}({}),se=function(e){return e.JUMPLINK="JUMPLINK",e.MODAL="MODAL",e.REDIRECT="REDIRECT",e}({}),de=function(e){return e.Card="Card",e.Carousel="Carousel",e.Clickable="Clickable",e.Container="Container",e.Expando="Expando",e.Grid="Grid",e.InfoSection="InfoSection",e.IntersectionTracker="IntersectionTracker",e.Media="Media",e.Modal="Modal",e.Rating="Rating",e.Script="Script",e.Spacing="Spacing",e.Tabs="Tabs",e.TextIconTooltip="TextIconTooltip",e}({}),ce=function(e){return e.BASELINE="BASELINE",e.CENTER="CENTER",e.END="END",e.START="START",e.STRETCH="STRETCH",e}({}),ue=function(e){return e.COLUMN="COLUMN",e.ROW="ROW",e}({}),me=function(e){return e.CENTER="CENTER",e.END="END",e.START="START",e}({}),pe=function(e){return e.CONTAIN="CONTAIN",e.COVER="COVER",e}({}),ge=function(e){return e.EAGER="EAGER",e.LAZY="LAZY",e.OFF="OFF",e}({}),ve=function(e){return e.ALL="ALL",e.END_END="END_END",e.END_START="END_START",e.FALSE="FALSE",e.MAX="MAX",e.START_END="START_END",e.START_START="START_START",e.TRUE="TRUE",e}({}),Ee=function(e){return e.BOTTOM="BOTTOM",e.CENTERED="CENTERED",e.FULL="FULL",e.POPOVER="POPOVER",e.SIDE="SIDE",e}({}),fe=function(e){return e.TRUNCATE="TRUNCATE",e.TRUNCATE_FOUR_LINES="TRUNCATE_FOUR_LINES",e.TRUNCATE_THREE_LINES="TRUNCATE_THREE_LINES",e.TRUNCATE_TWO_LINES="TRUNCATE_TWO_LINES",e.WRAP="WRAP",e}({}),xe=function(e){return e.EXTRA_SMALL="EXTRA_SMALL",e.LARGE="LARGE",e.MEDIUM="MEDIUM",e.MEDIUM_LARGE="MEDIUM_LARGE",e.SMALL="SMALL",e.XLARGE="XLARGE",e}({}),he=function(e){return e.INFO="INFO",e.POSITIVE="POSITIVE",e.STANDARD="STANDARD",e.WARNING="WARNING",e}({}),Te=function(e){return e.BACK="BACK",e.CLOSE="CLOSE",e.EXPAND_DOWN="EXPAND_DOWN",e.EXPAND_UP="EXPAND_UP",e}({}),ye=function(e){return e.EIGHT="EIGHT",e.FOUR="FOUR",e.ONE="ONE",e.SIX="SIX",e.THREE="THREE",e.TWELVE="TWELVE",e.TWO="TWO",e}({}),be=function(e){return e.FOUR="FOUR",e.HALF="HALF",e.ONE="ONE",e.SIX="SIX",e.SIXTEEN="SIXTEEN",e.THREE="THREE",e.TWELVE="TWELVE",e.TWO="TWO",e.UNSET="UNSET",e}({}),Ie=function(e){return e.EMPHASIS="EMPHASIS",e.INVERSE="INVERSE",e.LOYALTY="LOYALTY",e.NEGATIVE="NEGATIVE",e.POSITIVE="POSITIVE",e.PRIMARY="PRIMARY",e.SECONDARY="SECONDARY",e}({}),Ne=function(e){return e.BOLD="BOLD",e.MEDIUM="MEDIUM",e.REGULAR="REGULAR",e}({});const Se={primary:"primary",secondary:"secondary",highlight:"highlight","global-loyalty-extra-high":"global-loyalty-extra-high","global-loyalty-high":"global-loyalty-high","global-loyalty-low":"global-loyalty-low","global-loyalty-middle":"global-loyalty-middle","global-loyalty-standard":"global-loyalty-standard",default:void 0},Ce={[ae.FOUR_ONE]:u.l.R4_1,[ae.FOUR_THREE]:u.l.R4_3,[ae.ONE_ONE]:u.l.R1_1,[ae.SIXTEEN_NINE]:u.l.R16_9,[ae.THREE_FOUR]:u.l.R3_4,[ae.THREE_TWO]:u.l.R3_2,[ae.TWENTY_ONE_NINE]:u.l.R21_9},Ae={[pe.CONTAIN]:"contain",[pe.COVER]:"cover"},Re={[ge.EAGER]:"eager",[ge.LAZY]:"lazy",[ge.OFF]:"off"},je={[ve.TRUE]:!0,[ve.FALSE]:!1,[ve.ALL]:["all"],[ve.MAX]:["max"],[ve.START_START]:["startstart","startstart"],[ve.START_END]:["startend","startend"],[ve.END_START]:["endstart","endstart"],[ve.END_END]:["endend","endend"]},Le=(e,n,t,i,l=!1)=>{e(n,t,l,i)},Oe=a.J1`
  fragment ExperimentalSpacingFragment on ExperimentalSpacing {
    margin
    padding
    marginSpace
    paddingSpace
    inlineMarginSpace
    inlinePaddingSpace
  }
`,ke=()=>(0,E.jsx)("div",{children:"ExperimentalSpacing.fragment"});ke.displayName="ExperimentalSpacing",ke.fragment=Oe;const Fe=a.J1`
  fragment ExperimentalAnalyticsFragment on ExperimentalAnalytics {
    client {
      eventType
      linkName
      referrerId
      uisPrimeMessages {
        __typename
        schemaName
        messageContent
      }
    }
    appendToReferrerId
  }
`,De=()=>(0,E.jsx)("div",{children:"ExperimentalAnalytics.fragment"});De.displayName="ExperimentalAnalytics",De.fragment=Fe;const _e=a.J1`
  fragment ExperimentalTabFragment on ExperimentalTab {
    title
    target
    disabled
    analytics {
      __typename
      appendToReferrerId
      ...ExperimentalAnalyticsFragment
    }
  }

  ${De.fragment}
`,$e=()=>(0,E.jsx)("div",{children:"ExperimentalTab.fragment"});$e.displayName="ExperimentalTab",$e.fragment=_e;const Me=a.J1`
  fragment ExperimentalSubTitleFragment on ExperimentalInfoSectionSubTitle {
    text {
      text
      theme
      weight
      size
      accessibility
    }
    icon {
      ...EGDSIconFragment
    }
    illustration {
      url
      description
    }
    spaceV2
    overflowV2
  }

  ${v.YF.fragment}
`,we=()=>(0,E.jsx)("div",{children:"ExperimentalSubTitle.fragment"});we.displayName="ExperimentalSubtitle",we.fragment=Me;const Pe=a.J1`
  fragment ExperimentalLinkActionFragment on ExperimentalLinkAction {
    url
    target
    clickEvent {
      eventType
      referrerId
      linkName
    }
    modal {
      id
      queryKey
    }
  }
`,Ue=()=>(0,E.jsx)("div",{children:"ExperimentalLinkAction.fragment"});Ue.displayName="ExperimentalLinkAction",Ue.fragment=Pe;const We=a.J1`
  fragment ExperimentalScriptFragment on ExperimentalScript {
    variables {
      name
      expression
    }
    expression
  }
`,Ve=()=>(0,E.jsx)("div",{children:"ExperimentalScript.fragment"});Ve.displayName="ExperimentalScript",Ve.fragment=We;const Ge=({modalId:e,queryKey:n,text:t,onClick:i})=>{const[,l]=(0,y.useDialog)(e,n);return(0,E.jsx)(c.w,{children:(0,E.jsx)(f.u,{role:"button",tag:"a",onClick:()=>{l.openDialog(),i&&i()},children:t})})},He=a.J1`
  fragment CardConfigFragment on ExperimentalCardConfig {
    featuredImage {
      description
      url
      aspectRatio
    }
    link {
      text
      action {
        ...ExperimentalLinkActionFragment
      }
    }
    overflow
    padded
    border
    selected
    background
  }

  ${Ue.fragment}
`,Ye=({templateComponent:e})=>{var n,t,i,l,a,o,r,p,v,f,x,h;const{children:T}=e,y=(null==e?void 0:e.config).card,I=y.background?Se[y.background]:void 0,N=(null===(n=y.featuredImage)||void 0===n?void 0:n.aspectRatio)?Ce[y.featuredImage.aspectRatio]:u.l.R16_9,S=(0,g.KY)();return y?(0,E.jsxs)(s.g,{"data-view-id":null===(t=e.metadata)||void 0===t?void 0:t.id,padded:null!==(i=y.padded)&&void 0!==i&&i,border:null!==(l=y.border)&&void 0!==l&&l,overflow:null!==(a=y.overflow)&&void 0!==a&&a,backgroundTheme:I,children:[y.featuredImage&&(0,E.jsx)(u.M,{ratio:N,children:(0,E.jsx)(m.F,{alt:y.featuredImage.description,src:y.featuredImage.url})}),(null===(o=y.link)||void 0===o||null===(o=o.action)||void 0===o?void 0:o.url)&&(0,E.jsx)(c.w,{children:(0,E.jsx)("a",{href:null===(r=y.link.action)||void 0===r?void 0:r.url,children:y.link.text})}),(null===(p=y.link)||void 0===p||null===(p=p.action)||void 0===p?void 0:p.modal)&&(0,E.jsx)(Ge,{modalId:null===(v=y.link)||void 0===v||null===(v=v.action)||void 0===v?void 0:v.modal.id,queryKey:(null===(f=y.link)||void 0===f||null===(f=f.action)||void 0===f?void 0:f.modal.queryKey)||void 0,text:null===(x=y.link)||void 0===x?void 0:x.text,onClick:()=>{var e,n;return(null===(e=y.link)||void 0===e||null===(e=e.action)||void 0===e?void 0:e.clickEvent)&&(e=>{if(e){const{referrerId:n,linkName:t}=e;Le(S,n,t)}})(null===(n=y.link)||void 0===n||null===(n=n.action)||void 0===n?void 0:n.clickEvent)}}),T&&T.length>0?(0,E.jsx)(d.E,{padded:null!==(h=y.padded)&&void 0!==h&&h,children:(0,E.jsx)(b._A,{templateComponents:T})}):(0,E.jsx)("div",{})]}):null};Ye.displayName="Card",Ye.fragment=He;const Ke={carouselHeaderText:"ExperimentalCarousel",carouselName:"ExperimentalCarousel",loop:!0,itemsVisible:{sm:1,md:1,lg:1,xl:1},pageBy:1,pagingInset:!0,pagingOverlay:!1,wrapItems:!0,navigationIconId:{next:"next-button-gallery",prev:"prev-button-gallery"},buttonText:{nextButton:"Show next card",prevButton:"Show previous card"},children:null},Be=a.J1`
  fragment CarouselConfigFragment on ExperimentalCarouselConfig {
    hideNav
    itemsVisible {
      sm
      md
      lg
      xl
    }
    nextButton
    prevButton
    imagesList {
      description
      url
    }
    peek
    alwaysShowPaging
    analytics {
      viewed {
        eventType
        linkName
        referrerId
      }
      scrollEvent {
        eventType
        linkName
        referrerId
      }
    }
    naturalWidth
  }
`,Je=({templateComponent:e})=>{var n,t,i,l,a,o,r;const{children:s}=e,d=null==e?void 0:e.config,c=null==e?void 0:e.metadata,p=d.carousel,v=(0,g.KY)(),f=(0,g._q)(),x=ee(ee({},Ke),{},{itemsVisible:{sm:(null==p||null===(n=p.itemsVisible)||void 0===n?void 0:n.sm)||Ke.itemsVisible.sm,md:(null==p||null===(t=p.itemsVisible)||void 0===t?void 0:t.md)||Ke.itemsVisible.md,lg:(null==p||null===(i=p.itemsVisible)||void 0===i?void 0:i.lg)||Ke.itemsVisible.lg,xl:(null==p||null===(l=p.itemsVisible)||void 0===l?void 0:l.xl)||Ke.itemsVisible.xl},hideNav:null==p?void 0:p.hideNav,peek:null==p?void 0:p.peek,pagingPersistent:null==p?void 0:p.alwaysShowPaging,buttonText:{prevButton:(null==p?void 0:p.prevButton)||Ke.buttonText.prevButton,nextButton:(null==p?void 0:p.nextButton)||Ke.buttonText.nextButton},itemsMaxHeight:!0,naturalWidthItems:null==p?void 0:p.naturalWidth,onIndexChange:()=>{var e,n;(null==p||null===(e=p.analytics)||void 0===e?void 0:e.viewed)&&((e,n,t,i=g.p3.EVENT)=>{const{track:l}=e,{uisPrimeMessages:a,referrerId:o,linkName:r}=n,s=[{schemaName:"referrer",messageContent:{eventType:t,linkName:r,referrerId:o}}];null==a||a.forEach(e=>{s.push({schemaName:e.schemaName,messageContent:JSON.parse(e.messageContent)})}),l(i,{data:s})})(f,null===(n=p.analytics)||void 0===n?void 0:n.viewed,"impression")},analytics:{callback(e){var n,t,i;if(null==p||null===(n=p.analytics)||void 0===n?void 0:n.scrollEvent)if(e.endsWith("scrollRight"))Le(v,`${null===(t=p.analytics.scrollEvent)||void 0===t?void 0:t.referrerId}.scrollRight`,`${null===(i=p.analytics.scrollEvent)||void 0===i?void 0:i.linkName}`);else if(e.endsWith("scrollLeft")){var l,a;Le(v,`${null===(l=p.analytics.scrollEvent)||void 0===l?void 0:l.referrerId}.scrollLeft`,`${null===(a=p.analytics.scrollEvent)||void 0===a?void 0:a.linkName}`)}},id:"fasttrack-carousel-id",description:"fasttrack-carousel-description"},carouselHeaderText:(null===(a=c.accessibilityNode)||void 0===a?void 0:a.description)||Ke.carouselHeaderText}),h=null==p||null===(o=p.imagesList)||void 0===o?void 0:o.map((e,n)=>(0,E.jsx)(u.M,{ratio:u.l.R16_9,roundcorner:!0,children:(0,E.jsx)(m.F,{alt:e.description,src:e.url})},`carousel-item-${n}`)),T=null==s?void 0:s.map((e,n)=>(0,E.jsx)(b._A,{templateComponents:[e]},`carousel-child-${n}`));return h||T?(0,E.jsx)("div",{"data-view-id":null===(r=e.metadata)||void 0===r?void 0:r.id,children:(0,E.jsxs)(I._N,ee(ee({},x),{},{children:[h,T]}))}):null};Je.displayName="Carousel",Je.fragment=Be;const Xe={[ce.BASELINE]:"end",[ce.CENTER]:"center",[ce.END]:"end",[ce.START]:"start",[ce.STRETCH]:"stretch"},ze={[me.CENTER]:"center",[me.END]:"end",[me.START]:"start"},qe={[ue.ROW]:"row",[ue.COLUMN]:"column"},Ze={[be.HALF]:"half",[be.ONE]:"one",[be.TWO]:"two",[be.THREE]:"three",[be.FOUR]:"four",[be.SIX]:"six",[be.TWELVE]:"twelve",[be.SIXTEEN]:"sixteen",[be.UNSET]:"unset"},Qe={[be.HALF]:"half",[be.ONE]:"one",[be.TWO]:"two",[be.THREE]:"three",[be.FOUR]:"four",[be.SIX]:"six",[be.TWELVE]:"twelve",[be.SIXTEEN]:"xlarge",[be.UNSET]:"half"},en=a.J1`
  fragment ImpressionTrackerFragment on ExperimentalImpressionTracker {
    analytics {
      eventType
      linkName
      referrerId
      uisPrimeMessages {
        __typename
        schemaName
        messageContent
      }
    }
    trackOnce
  }
`,nn=({impression:e,children:n})=>(0,E.jsx)(g.ee,{trackOnce:e.trackOnce,linkName:e.analytics.linkName,referrerId:e.analytics.referrerId,children:n||(0,E.jsx)("span",{})});nn.displayName="ImpressionWrapper",nn.fragment=en;let tn=function(e){return e.SLASH="/",e}({});const ln=({modalId:e,queryKey:n,buttonText:t,onClick:l,type:a,children:o,isFullWidth:s})=>{const d=e.includes(tn.SLASH)?ie(e,tn.SLASH,0):e,c=e.includes(tn.SLASH)?ie(e,tn.SLASH,1):"",[,u]=(0,y.useDialog)(d,n),m=function(){const e=(0,r.Zp)(),n=(0,r.zy)();return(0,i.useCallback)((t,i,l)=>{if(n&&t.includes("=")){const a=t.split("="),o=new URLSearchParams(n.search);o.set(l,i),(null==a?void 0:a[0])&&a[1]&&o.set(a[0],String(a[1])),e(`${n.pathname}?${o}`,{replace:!0})}},[e,n])}(),g=()=>{c?m(c,d,n||"pwaDialog"):u.openDialog(),l&&l()};switch(a){case oe.PRIMARY:return(0,E.jsx)(x.y,{type:"button",tag:"a",onClick:g,isFullWidth:s,children:o},`button-jumplink-${d}`);case oe.SECONDARY:return(0,E.jsx)(h.y,{type:"button",onClick:g,isFullWidth:s,children:o},`button-jumplink-${d}`);case oe.TERTIARY:return(0,E.jsx)(T.q,{type:"button",tag:"a",onClick:g,isFullWidth:s,children:o},`button-jumplink-${d}`);case"EGDSImage":return(0,E.jsx)(p.d,{children:(0,E.jsx)("button",{onClick:g,type:"button",children:(0,E.jsx)("span",{className:"is-visually-hidden",children:t})})});default:return(0,E.jsx)(A.i,{onClick:g,children:(0,E.jsx)("button",{type:"button",style:{alignItems:"center"},children:o})})}},an=a.J1`
  fragment TextInfoLinkFragment on ExperimentalAction {
    typeV2
    data {
      text
      action {
        url
        target
        scrollOffsetSection
        modal {
          id
          queryKey
        }
      }
      icon {
        ...EGDSIconFragment
      }
      iconPosition
      inlineSpaceV2
    }
    analytics {
      ...ExperimentalAnalyticsFragment
    }
  }

  ${v.YF.fragment}
  ${De.fragment}
`,on=e=>(0,E.jsx)(C.LD,{name:e.id,size:e.size?C.So[e.size]:C.So.MEDIUM}),rn=(e,n)=>{if(e){const{client:t,appendToReferrerId:i}=e;Le(n,`${t.referrerId}${i}`,t.linkName)}},sn=({icon:e,iconPosition:n,inlineSpaceV2:t,text:i})=>(0,E.jsxs)(E.Fragment,{children:[e&&n===re.LEADING&&(0,E.jsx)(l.N,{margin:{inlineend:null!=t?t:"unset"},children:on(e)}),i,e&&n===re.TRAILING&&(0,E.jsx)(l.N,{margin:{inlinestart:null!=t?t:"unset"},children:on(e)})]}),dn=(e,n,t,i)=>{switch(e.typeV2){case se.JUMPLINK:{const l=i=>{const l=le(e.data.action.url);if(e.analytics&&rn(e.analytics,n),l){i.preventDefault();const{scrollOffsetSection:n}=e.data.action;t(l,n?[{sectionName:n}]:[])}};return(0,E.jsx)(A.i,{onClick:l,children:(0,E.jsx)("a",{href:`${e.data.action.url}`,children:sn(e.data)})},`jumplink-key-${e.typeV2}-${i}`)}case se.MODAL:var l;return(null===(l=e.data.action.modal)||void 0===l?void 0:l.id)?(0,E.jsx)(ln,{modalId:e.data.action.modal.id,queryKey:e.data.action.modal.queryKey||void 0,buttonText:e.data.text,onClick:()=>e.analytics&&rn(e.analytics,n),children:sn(e.data)},`modal-trigger-${e.typeV2}-${i}`):null;default:return(0,E.jsx)(A.i,{onClick:()=>e.analytics&&rn(e.analytics,n),children:(0,E.jsx)("a",{href:`${e.data.action.url}`,children:sn(e.data)})},`redirect-key-${e.typeV2}-${i}`)}},cn=({config:e})=>{const{infoSection:n}=e,{container:t}=e,i=(0,g.KY)(),{scrollTo:l}=(0,R.xC)();return(0,E.jsxs)(E.Fragment,{children:[(null==n?void 0:n.links)&&n.links.length>0&&n.links.map((e,n)=>dn(e,i,l,n)),(null==t?void 0:t.action)&&t.action.data&&dn(t.action,i,l)]})};cn.displayName="TextInfoLink",cn.fragment=an;const un=a.J1`
  fragment ContainerFragment on ExperimentalContainerConfig {
    action {
      ...TextInfoLinkFragment
    }
    flex {
      direction
      horizontal
      vertical
      padding {
        top
        bottom
        start
        end
      }
      spaceBetween
    }
    impression {
      ...ImpressionTrackerFragment
    }
  }

  ${cn.fragment}
  ${nn.fragment}
`,mn=({templateComponent:e})=>{var n,t,i,a,o,r,s,d,c;const{children:u}=e,m=null==e?void 0:e.config,p=m.container,g=null===(n=m.container)||void 0===n?void 0:n.flex,v=null===(t=m.container)||void 0===t?void 0:t.impression,f=(null==p||null===(i=p.flex)||void 0===i?void 0:i.vertical)===ce.STRETCH,x=(null==p||null===(a=p.flex)||void 0===a?void 0:a.vertical)===ce.CENTER,h=p.flex&&u&&(null==u?void 0:u.length)>0&&(0,E.jsx)(l.N,{padding:{blockstart:(null==g?void 0:g.padding)?Ze[null==g||null===(o=g.padding)||void 0===o?void 0:o.top]:void 0,blockend:(null==g?void 0:g.padding)?Ze[null==g||null===(r=g.padding)||void 0===r?void 0:r.bottom]:void 0,inlinestart:(null==g?void 0:g.padding)?Ze[null==g||null===(s=g.padding)||void 0===s?void 0:s.start]:void 0,inlineend:(null==g?void 0:g.padding)?Ze[null==g||null===(d=g.padding)||void 0===d?void 0:d.end]:void 0},children:(0,E.jsxs)(N.X,{"data-view-id":null===(c=e.metadata)||void 0===c?void 0:c.id,space:(null==g?void 0:g.spaceBetween)?Qe[null==g?void 0:g.spaceBetween]:"two",style:f||x?{height:"100%",width:"100%"}:{},direction:(null==g?void 0:g.direction)?qe[null==g?void 0:g.direction]:void 0,justifyContent:(null==g?void 0:g.horizontal)?ze[null==g?void 0:g.horizontal]:void 0,alignItems:(null==g?void 0:g.vertical)?Xe[null==g?void 0:g.vertical]:void 0,alignContent:x?"center":void 0,children:[(0,E.jsx)(S.C,{grow:1,children:f?(0,E.jsx)("div",{style:{alignContent:"flex-end"},children:(0,E.jsx)(b._A,{templateComponents:u})}):(0,E.jsx)(b._A,{templateComponents:u})}),p.impression&&(0,E.jsx)(S.C,{children:(0,E.jsx)(nn,{impression:v,children:null})})]})});return p?(0,E.jsxs)(E.Fragment,{children:[p.impression&&(null==u?void 0:u.length)&&!h&&(0,E.jsx)(nn,{impression:v,children:(0,E.jsx)(b._A,{templateComponents:u})}),h,p.action&&(0,E.jsx)(cn,{config:m})]}):null};mn.displayName="ContainerWrapper",mn.fragment=un;const pn=a.J1`
  fragment ExpandoFragment on ExperimentalExpandoConfig {
    isList
    expandLabel
    collapseLabel
    linesToShow
    itemsToShow
    hideScrim
    analytics {
      ...ExperimentalAnalyticsFragment
    }
  }

  ${De.fragment}
`,gn=({templateComponent:e})=>{const{children:n}=e,t=(null==e?void 0:e.config).expando,l=(0,g.KY)(),[a,o]=(0,i.useState)(!1),r=()=>{if(null==t?void 0:t.analytics){const{client:e,appendToReferrerId:n}=t.analytics;Le(l,`${e.referrerId}${n}`,e.linkName)}};if(null==n?void 0:n.length){var s,d;const i=(0,E.jsx)(b._A,{templateComponents:n});return t.isList?(0,E.jsx)(L.f,{"data-view-id":null===(s=e.metadata)||void 0===s?void 0:s.id,children:(0,E.jsx)(O.U,{isIndented:!1,expandoTitle:(0,E.jsx)(D.D,{children:t.expandLabel}),expandoDescription:i,onToggle:()=>{o(!a),r()}},"expando-list-item")}):(0,E.jsx)(j.A,{"data-view-id":null===(d=e.metadata)||void 0===d?void 0:d.id,isVisible:a,handleClick:()=>{o(e=>!e),r()},lines:t.linesToShow||3,items:t.itemsToShow||3,hideScrim:!0,expandLabel:t.expandLabel,collapseLabel:t.collapseLabel||t.expandLabel,children:i})}return null};gn.displayName="ExpandoWrapper",gn.fragment=pn;const vn=a.J1`
  fragment IntersectionTrackerFragment on ExperimentalIntersectionTracker {
    analytics {
      eventType
      linkName
      referrerId
      uisPrimeMessages {
        __typename
        schemaName
        messageContent
      }
    }
    trackOnce
  }
`,En=({templateComponent:e})=>{const{children:n}=e,t=(null==e?void 0:e.config).intersection;return(null==n?void 0:n.length)?(0,E.jsx)(g.ee,{trackOnce:t.trackOnce,linkName:t.analytics.linkName,referrerId:t.analytics.referrerId,children:(0,E.jsx)(b._A,{templateComponents:n})}):null};En.displayName="IntersectionWrapper",En.fragment=vn;const fn=a.J1`
  fragment LayoutGridFragment on ExperimentalLayoutGrid {
    columns
    columnWidth
    rowHeight
    spaceV2
    gridItem {
      colSpan
      rowSpan
    }
  }
`,xn=({templateComponent:e})=>{var n,t,i,l,a;const{children:o}=e,r=(null==e?void 0:e.config).grid,s=(null==r||null===(n=r.columnWidth)||void 0===n?void 0:n.filter(e=>"string"==typeof e))||null,d=(null==r||null===(t=r.rowHeight)||void 0===t?void 0:t.filter(e=>"string"==typeof e))||null;return r?(0,E.jsx)(_.w,{"data-view-id":null===(i=e.metadata)||void 0===i?void 0:i.id,columns:s||(null==r?void 0:r.columns),space:null!==(l=null==r?void 0:r.spaceV2)&&void 0!==l?l:void 0,rows:d||void 0,children:null===(a=r.gridItem)||void 0===a?void 0:a.map((e,n)=>{const t=null==o?void 0:o[n],{colSpan:i,rowSpan:l}=e;return null!=t?(0,E.jsx)($.T,{colSpan:i,rowSpan:l||i,children:d||s?(0,E.jsx)(b._A,{templateComponents:[t]}):(0,E.jsx)("div",{children:(0,E.jsx)(b._A,{templateComponents:[t]})})},`layout-grid-item-${n}`):null})}):null};xn.displayName="LayoutGrid",xn.fragment=fn;const hn=a.J1`
  fragment ExperimentalImageFragment on ExperimentalImage {
    source
    description
    aspectRatio
    imageFit
    lazyLoading
    placeholder
    roundedCorner
    useBlank
    events {
      ...ExperimentalAnalyticsFragment
    }
    actions {
      typeV2
      data {
        action {
          ...ExperimentalLinkActionFragment
        }
        text
      }
    }
  }

  ${Ue.fragment}
  ${De.fragment}
`,Tn=({config:e})=>{var n,t;const{media:i}=e,l=(0,g.KY)();if(!(null==i?void 0:i.image))return null;const{image:a}=i,o=()=>{var e;if(null==a?void 0:a.events)return null===(e=a.events)||void 0===e?void 0:e.map(e=>{const{client:{referrerId:n,linkName:t}}=e;Le(l,n,t)})},r=null===(n=a.source)||void 0===n?void 0:n.includes("ra=fill");return(0,E.jsxs)(u.M,{imageFit:Ae[a.imageFit],ratio:Ce[a.aspectRatio||"SIXTEEN_NINE"],roundcorner:je[a.roundedCorner||"FALSE"],children:[(0,E.jsx)(m.F,{alt:a.description||"",lazyLoading:Re[a.lazyLoading||"LAZY"],blankDefault:a.useBlank,placeholderImage:a.placeholder,src:a.source,additionalProps:{fetchPriority:r?"high":"low"}}),null==a||null===(t=a.actions)||void 0===t?void 0:t.map((e,n)=>{var t;return e.typeV2===se.MODAL&&(null===(t=e.data.action.modal)||void 0===t?void 0:t.id)?(0,E.jsx)(ln,{type:"EGDSImage",modalId:e.data.action.modal.id,queryKey:e.data.action.modal.queryKey||void 0,buttonText:a.description||"",onClick:o},`modal-trigger-image-${e.typeV2}-${n}`):null})]})};Tn.displayName="ImageWrapper",Tn.fragment=hn;const yn=a.J1`
  fragment MediaConfigFragment on ExperimentalMediaConfig {
    image {
      ...ExperimentalImageFragment
    }
  }

  ${Tn.fragment}
`,bn=({templateComponent:e})=>{var n;const t=null==e?void 0:e.config;if(!t.media)return null;const{image:i}=t.media;return(0,E.jsx)(E.Fragment,{children:i&&(0,E.jsx)(Tn,{"data-view-id":null===(n=e.metadata)||void 0===n?void 0:n.id,config:t})})};bn.displayName="Media",bn.fragment=yn;const In={[Te.BACK]:"back",[Te.CLOSE]:"close",[Te.EXPAND_DOWN]:"expand_down",[Te.EXPAND_UP]:"expand_up"},Nn={[ye.ONE]:1,[ye.THREE]:3,[ye.TWO]:2,[ye.FOUR]:4,[ye.SIX]:6,[ye.EIGHT]:8,[ye.TWELVE]:12},Sn=({isDialogOpen:e,closeCallback:n,onCloseClick:t,ref:i,modal:l,children:a})=>(0,E.jsx)(P.K,{isVisible:e,closeCallback:n,children:(0,E.jsx)(M.t,{fullWidth:l.fullWidth,isExpanded:l.isExpanded,type:"bottom",isVisible:e,triggerRef:i,children:(0,E.jsxs)(E.Fragment,{children:[l.toolbar&&(0,E.jsx)(U.p,{navigationContent:{onClick:t,navType:In[l.toolbar.navType],navIconLabel:l.toolbar.closeLabel,navButtonId:"bottom-toolbar-close-button"},toolbarTitle:l.toolbar.title}),(0,E.jsx)(w.Y,{children:a})]})})}),Cn=({isDialogOpen:e,closeCallback:n,onCloseClick:t,ref:i,modal:l,children:a,DialogComponent:o})=>(0,E.jsx)(P.K,{isVisible:e,closeCallback:n,children:(0,E.jsx)(o,{children:(0,E.jsx)(M.t,{type:"centered",isVisible:e,triggerRef:i,children:(0,E.jsxs)(E.Fragment,{children:[l.toolbar&&(0,E.jsx)(U.p,{navigationContent:{onClick:t,navType:In[l.toolbar.navType],navIconLabel:l.toolbar.closeLabel,navButtonId:"centered-toolbar-close-button"},toolbarTitle:l.toolbar.title}),(0,E.jsx)(w.Y,{children:a})]})})})}),An=({isDialogOpen:e,closeCallback:n,onCloseClick:t,ref:i,modal:l,children:a,DialogComponent:o})=>(0,E.jsx)(P.K,{isVisible:e,closeCallback:n,children:(0,E.jsx)(o,{children:(0,E.jsx)(M.t,{type:"full",isVisible:e,triggerRef:i,children:(0,E.jsxs)(E.Fragment,{children:[l.toolbar&&(0,E.jsx)(U.p,{navigationContent:{onClick:t,navType:In[l.toolbar.navType],navIconLabel:l.toolbar.closeLabel,navButtonId:"full-toolbar-close-button"},toolbarTitle:l.toolbar.title}),(0,E.jsx)(w.Y,{children:a})]})})})}),Rn=({isDialogOpen:e,closeCallback:n,onCloseClick:t,ref:i,modal:l,children:a})=>(0,E.jsx)(P.K,{isVisible:e,closeCallback:n,children:(0,E.jsx)(M.t,{type:"popover",isVisible:e,triggerRef:i,position:{inline:"leading",block:"trailing"},children:(0,E.jsxs)(E.Fragment,{children:[l.toolbar&&(0,E.jsx)(U.p,{navigationContent:{onClick:t,navType:In[l.toolbar.navType],navIconLabel:l.toolbar.closeLabel,navButtonId:"popover-toolbar-close-button"},toolbarTitle:l.toolbar.title}),(0,E.jsx)(w.Y,{children:a})]})})}),jn=({isDialogOpen:e,closeCallback:n,onCloseClick:t,ref:i,modal:l,children:a})=>(0,E.jsx)(P.K,{isVisible:e,closeCallback:n,children:(0,E.jsx)(M.t,{overflow:!0,type:"side",sideSheetLayout:{columns:Nn[l.sideSheetLayout],position:"trailing"},isVisible:e,triggerRef:i,children:(0,E.jsxs)(E.Fragment,{children:[l.toolbar&&(0,E.jsx)(U.p,{navigationContent:{onClick:t,navType:In[l.toolbar.navType],navIconLabel:l.toolbar.closeLabel,navButtonId:"toolbar-close-button"},toolbarTitle:l.toolbar.title}),(0,E.jsx)(w.Y,{children:a})]})})}),Ln=a.J1`
  fragment ModalConfigFragment on ExperimentalModalConfig {
    modalId {
      id
      queryKey
    }
    type
    fullWidth
    isExpanded
    position
    sideSheetLayout
    toolbar {
      title
      navType
      closeLabel
      analytics {
        ...ExperimentalAnalyticsFragment
      }
    }
  }

  ${De.fragment}
`,On=({templateComponent:e})=>{const{children:n}=e,t=(null==e?void 0:e.config).modal,l=(0,g.KY)(),[a,o,r]=(0,y.useDialog)(t.modalId.id,t.modalId.queryKey||void 0),s=(0,i.createRef)();if(!(null==n?void 0:n.length))return null;const d=()=>{var e;if(null===(e=t.toolbar)||void 0===e?void 0:e.analytics){const{client:e,appendToReferrerId:n}=t.toolbar.analytics;Le(l,`${e.referrerId}${n}`,e.linkName)}},c=()=>{o.closeDialog()};switch(t.type){case Ee.SIDE:return(0,E.jsx)(jn,{isDialogOpen:a,closeCallback:d,onCloseClick:c,ref:s,modal:t,children:(0,E.jsx)(b._A,{templateComponents:n})});case Ee.CENTERED:return(0,E.jsx)(Cn,{isDialogOpen:a,DialogComponent:r,closeCallback:d,onCloseClick:c,ref:s,modal:t,children:(0,E.jsx)(b._A,{templateComponents:n})});case Ee.FULL:return(0,E.jsx)(An,{isDialogOpen:a,DialogComponent:r,closeCallback:d,onCloseClick:c,ref:s,modal:t,children:(0,E.jsx)(b._A,{templateComponents:n})});case Ee.POPOVER:return(0,E.jsx)(Rn,{isDialogOpen:a,closeCallback:d,onCloseClick:c,ref:s,modal:t,children:(0,E.jsx)(b._A,{templateComponents:n})});default:return(0,E.jsx)(Sn,{isDialogOpen:a,closeCallback:d,onCloseClick:c,ref:s,modal:t,children:(0,E.jsx)(b._A,{templateComponents:n})})}};On.displayName="ExperimentalModal",On.fragment=Ln;const kn=a.J1`
  fragment RatingFragment on ExperimentalRatingConfig {
    iconId
    rating
    accessibility
  }
`,Fn=({templateComponent:e})=>{var n,t;const i=(null==e?void 0:e.config).rating;return(0,E.jsx)(W.v,{"data-view-id":null===(n=e.metadata)||void 0===n?void 0:n.id,icon:"STAR"===(null==i?void 0:i.iconId)?"star":"alternate",rating:String(null==i?void 0:i.rating),a11yText:null!==(t=null==i?void 0:i.accessibility)&&void 0!==t?t:void 0})};Fn.displayName="RatingWrapper",Fn.fragment=kn;const Dn=a.J1`
  ${Ve.fragment}
`,_n=({templateComponent:e})=>{const{children:n}=e;return(null==n?void 0:n.length)?(0,E.jsx)(b._A,{templateComponents:n}):null};_n.displayName="ScriptWrapper",_n.fragment=Dn;const $n=a.J1`
  fragment SpacingFragment on ExperimentalSpacing {
    margin
    padding
    marginSpace
    paddingSpace
    inlineMarginSpace
    inlinePaddingSpace
  }
`,Mn=({templateComponent:e})=>{var n;const{children:t}=e,{margin:i,padding:a,marginSpace:o,paddingSpace:r,inlineMarginSpace:s,inlinePaddingSpace:d}=(null==e?void 0:e.config).spacing||{},c=i||(o?Ze[o]:void 0),u=a||(r?Ze[r]:void 0);return(0,E.jsx)(l.N,{margin:{block:c,inline:s?Ze[s]:"unset"},padding:{block:u,inline:d?Ze[d]:"unset"},children:(0,E.jsx)("div",{"data-view-id":null===(n=e.metadata)||void 0===n?void 0:n.id,children:(null==t?void 0:t.length)?(0,E.jsx)(b._A,{templateComponents:t}):null})})};Mn.displayName="SpacingWrapper",Mn.fragment=$n;const wn=a.J1`
  fragment TabsConfigFragment on ExperimentalTabsConfig {
    selectedIndex
    border
    type
    scrollTo
    isJumpLink
    tabs {
      ...ExperimentalTabFragment
    }
  }

  ${$e.fragment}
`,Pn=({templateComponent:e})=>{var n;const{children:t}=e,l=(null==e?void 0:e.config).tabs,a=(0,g.KY)(),[o,r]=(0,i.useState)(l.selectedIndex),[s]=(0,i.useState)(l.tabs.map(()=>(0,i.createRef)()));if(0===l.tabs.length||!t)return null;const c=e=>{r(e);const n=l.tabs[e];if(null==n?void 0:n.analytics){const{analytics:e}=n;e&&Le(a,`${e.client.referrerId}${e.appendToReferrerId}`,e.client.linkName)}};var u;return l.isJumpLink?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(V.D,{zIndex:900,"data-view-id":null===(u=e.metadata)||void 0===u?void 0:u.id,children:(0,E.jsx)(H.IN,{selectedTab:o,onTabSelect:e=>c(e),navigationType:H.so.JUMPLINK,tabsType:H.Ah.NATURAL,scrollOffsetSelf:!0,children:l.tabs.map((e,n)=>(0,E.jsx)(G.X,{id:e.target,name:e.title,targetRef:s[n],targetURI:`?jumpTargetTab=#${e.target}`},`uitk-tab-key-${e.target}`))})}),l.tabs.map((e,n)=>{const i=t[n];return i&&(0,E.jsx)(d.E,{children:(0,E.jsx)("div",{id:e.target,ref:s[n],children:(0,E.jsx)(b._A,{templateComponents:[i]})})},`experimental-tab-${n}`)})]}):(0,E.jsx)(H.IN,{"data-view-id":null===(n=e.metadata)||void 0===n?void 0:n.id,selectedTab:o,onTabSelect:e=>c(e),navigationType:H.so.DEFAULT,children:l.tabs.map((e,n)=>{const i=t[n];return i&&(0,E.jsx)(G.X,{name:e.title,targetURI:`?equalTargetTab=#${e.target}`,id:e.target,tabLinkAttr:{id:`tab-${n}`},children:(0,E.jsx)(b._A,{templateComponents:[i]})},`experimental-tab-${n}`)})})};Pn.displayName="ExperimentalTabs",Pn.fragment=wn;const Un={[Ie.NEGATIVE]:"negative",[Ie.POSITIVE]:"positive",[Ie.PRIMARY]:"emphasis",[Ie.SECONDARY]:"default",[Ie.LOYALTY]:"loyalty",[Ie.INVERSE]:"inverse",[Ie.EMPHASIS]:"emphasis"},Wn={[Ne.BOLD]:"bold",[Ne.MEDIUM]:"medium",[Ne.REGULAR]:"regular"},Vn={half:"half",one:"one",two:"two",three:"three",four:"four",six:"six",twelve:"six"},Gn={8:8,2:2,3:3,1:1,4:4,5:5,6:6,7:7},Hn={100:100,200:200,300:300,400:400,500:500,600:600,700:700,800:800,900:900,1e3:1e3},Yn={STANDARD:K.mc.STANDARD,EMPHASIS:K.mc.EMPHASIS,INFO:K.mc.INFO,FEATURED:K.mc.FEATURED,BRAND:K.mc.BRAND,WARNING:K.mc.WARNING,POSITIVE:K.mc.POSITIVE},Kn={[fe.TRUNCATE]:"truncate",[fe.TRUNCATE_FOUR_LINES]:"truncate-4-lines",[fe.TRUNCATE_THREE_LINES]:"truncate-3-lines",[fe.TRUNCATE_TWO_LINES]:"truncate-2-lines",[fe.WRAP]:"wrap"},Bn={[xe.EXTRA_SMALL]:C.So.EXTRA_SMALL,[xe.SMALL]:C.So.SMALL,[xe.MEDIUM]:C.So.MEDIUM,[xe.LARGE]:C.So.LARGE,[xe.XLARGE]:C.So.XLARGE,[xe.MEDIUM_LARGE]:C.So.MEDIUM},Jn={1:1,2:2,3:3},Xn={[he.INFO]:"info",[he.POSITIVE]:"positive",[he.STANDARD]:"standard",[he.WARNING]:"warning"},zn=a.J1`
  fragment ExperimentalButtonFragment on ExperimentalButton {
    type
    action {
      ...TextInfoLinkFragment
    }
    isFullWidth
  }

  ${cn.fragment}
`,qn=({type:e,link:n,onClick:t,children:i,isFullWidth:l})=>{switch(e){case oe.PRIMARY:return(0,E.jsx)(x.y,{role:"button",type:"button",tag:"a",href:`${n}`,onClick:t,isFullWidth:l,children:i},`button-${n}`);case oe.SECONDARY:return(0,E.jsx)(h.y,{role:"button",type:"button",tag:"a",href:`${n}`,onClick:t,isFullWidth:l,children:i},`button-${n}`);case oe.TERTIARY:return(0,E.jsx)(T.q,{role:"button",type:"button",tag:"a",href:`${n}`,onClick:t,isFullWidth:l,children:i},`button-${n}`);default:return null}},Zn=({config:e})=>{var n;const{infoSection:t}=e,i=(0,g.KY)(),{scrollTo:a}=(0,R.xC)(),o=e=>{if(e){const{client:n,appendToReferrerId:t}=e;Le(i,`${n.referrerId}${t}`,n.linkName)}},r=e=>(0,E.jsx)(C.LD,{name:e.id}),s=({icon:e,iconPosition:n,inlineSpaceV2:t,text:i})=>{const a=n||re.LEADING;return(0,E.jsxs)(E.Fragment,{children:[e&&a===re.LEADING&&(0,E.jsx)(l.N,{margin:{inlineend:null!=t?t:"unset"},children:r(e)}),i,e&&a===re.TRAILING&&(0,E.jsx)(l.N,{margin:{inlinestart:null!=t?t:"unset"},children:r(e)})]})};return(0,E.jsx)(E.Fragment,{children:(null==t?void 0:t.buttons)&&t.buttons.length>0&&(null===(n=t.buttons)||void 0===n?void 0:n.map((e,n)=>{const{type:t,action:{typeV2:i,data:l,analytics:r},isFullWidth:d}=e;switch(i){case se.JUMPLINK:{const e=()=>{const e=le(l.action.url);if(r&&o(r),e){const{scrollOffsetSection:n}=l.action;a(e,n?[{sectionName:n}]:[])}};return l.action.url&&(0,E.jsx)(qn,{type:t,link:`#${l.action.url}`,isFullWidth:d,onClick:e,children:s(l)},`button-jumplink-${t}-${n}`)}case se.REDIRECT:return l.action.url&&(0,E.jsx)(qn,{type:t,link:l.action.url,isFullWidth:d,onClick:()=>r&&o(r),children:s(l)},`button-redirect-${t}-${n}`);case se.MODAL:var c;return(null===(c=l.action.modal)||void 0===c?void 0:c.id)?(0,E.jsx)(ln,{type:t,modalId:l.action.modal.id,queryKey:l.action.modal.queryKey||void 0,buttonText:l.text,isFullWidth:d,onClick:()=>r&&o(r),children:s(l)},`button-modal-${t}-${n}`):null;default:return null}}))})};Zn.displayName="Buttons",Zn.fragment=zn;const Qn=a.J1`
  fragment TextInfoSectionFragment on ExperimentalInfoSection {
    badge {
      accessibility
      text
      theme
      graphic {
        ... on Icon {
          ...EGDSIconFragment
        }
      }
    }
    title {
      text {
        text
        size
        accessibility
      }
      attributes {
        tag
        ariaHidden
      }
      icon {
        ...EGDSIconFragment
      }
      illustration {
        id
        url
        description
      }
      spacing {
        ...ExperimentalSpacingFragment
      }
      overflowV2
    }
    subTitle {
      ...ExperimentalSubTitleFragment
    }
    descriptions {
      showAsList
      texts
      paragraphSize
      inheritParagraphStyling
    }
    links {
      ...TextInfoLinkFragment
    }
    seoData
    buttons {
      type
      action {
        ...TextInfoLinkFragment
      }
      isFullWidth
    }
  }

  ${cn.fragment}
  ${ke.fragment}
  ${v.YF.fragment}
  ${we.fragment}
`,et=e=>{if(!e)return{customStyle:"headline-extra-large"};const n=Gn[e];return n&&[3,4].includes(n)?{customStyle:4===n?"headline-large":"headline-extra-large"}:void 0},nt=({templateComponent:e})=>{var n,t,i,a,o,r,s,d;const c=null==e?void 0:e.config;if(!c.infoSection)return null;const{badge:u,title:m,subTitle:p,descriptions:g,links:v,buttons:f,seoData:x}=c.infoSection,h=(null==u?void 0:u.theme)?Yn[u.theme]:K.mc.EMPHASIS,T=(null==u?void 0:u.accessibility)?u.accessibility:void 0,y=(e=>{if(!e)return null;let n;try{n=JSON.parse(e)}catch(i){return null}const t=(e,n)=>Object.entries(e).flatMap(([e,i])=>{if("@type"===e||"@context"===e)return null;const l=n?`${n}.${e}`:e;return Array.isArray(i)?i.map((n,i)=>"object"==typeof n&&null!==n&&n["@type"]?(0,E.jsx)("div",{itemProp:e,itemScope:!0,itemType:`https://schema.org/${n["@type"]}`,children:t(n)},`${l}[${i}]`):"object"==typeof n&&null!==n?(0,E.jsx)("div",{children:t(n)},`${l}[${i}]`):(0,E.jsx)("meta",{itemProp:e,content:String(n)},`${l}[${i}]`)):"object"==typeof i&&null!==i?i["@type"]?(0,E.jsx)("div",{itemProp:e,itemScope:!0,itemType:`https://schema.org/${i["@type"]}`,children:t(i)},l):t(i,e):(0,E.jsx)("meta",{itemProp:e,content:String(i)},l)});return(0,E.jsx)(E.Fragment,{children:t(n)})})(x);return(0,E.jsxs)("div",{"data-view-id":null===(n=e.metadata)||void 0===n?void 0:n.id,children:[(null==u?void 0:u.text)&&u.text.length>0&&(0,E.jsx)(Y.G,{text:u.text,theme:h,a11yText:T,children:u.graphic&&"Icon"===u.graphic.__typename&&u.graphic.id&&(0,E.jsx)(C.LD,{id:u.graphic.id,name:u.graphic.id,size:Bn[u.graphic.size||xe.SMALL]})}),((null==m?void 0:m.text)||(null==m?void 0:m.icon)||(null==m?void 0:m.illustration))&&(b=null==m?void 0:m.spacing,I=(0,E.jsxs)(k.M,{tag:(null==m||null===(t=m.attributes)||void 0===t?void 0:t.tag)?m.attributes.tag:"h1",size:(null==m||null===(i=m.text)||void 0===i?void 0:i.size)?Gn[null==m?void 0:m.text.size]:3,typeStyle:(null==m||null===(a=m.text)||void 0===a?void 0:a.size)?et(m.text.size):void 0,"aria-hidden":null===(o=m.attributes)||void 0===o?void 0:o.ariaHidden,overflow:(null==m?void 0:m.overflowV2)?Kn[null==m?void 0:m.overflowV2]:void 0,title:(null==m||null===(r=m.text)||void 0===r?void 0:r.accessibility)||void 0,children:[m.icon&&(0,E.jsx)(C.LD,{name:m.icon.id,size:Bn[m.icon.size||xe.SMALL],title:m.icon.title||"",id:m.icon.id,spotlight:m.icon.spotLight?Xn[m.icon.spotLight]:void 0}),m.illustration&&(0,E.jsx)(B.r,{alt:m.illustration.description,url:m.illustration.url}),null===(s=m.text)||void 0===s?void 0:s.text]}),(null==b?void 0:b.margin)?(0,E.jsx)(l.N,{margin:{blockend:b.margin},children:(0,E.jsx)("div",{children:I})}):I),p&&p.length>0&&p.map((e,n)=>{var t,i,l,a,o,r,s,d,c;const u=(null===(t=e.text)||void 0===t?void 0:t.theme)?Un[null===(i=e.text)||void 0===i?void 0:i.theme]:void 0,m=(null===(l=e.text)||void 0===l?void 0:l.weight)?Wn[null===(a=e.text)||void 0===a?void 0:a.weight]:void 0,p=e.spaceV2?Vn[e.spaceV2]:void 0;return(0,E.jsxs)(D.D,{size:(null===(o=e.text)||void 0===o?void 0:o.size)?Hn[null==e?void 0:e.text.size]:300,spacing:p,theme:u,weight:m,overflow:(null==e?void 0:e.overflowV2)?Kn[null==e?void 0:e.overflowV2]:void 0,children:[e.icon&&(0,E.jsx)(C.LD,{name:e.icon.id,size:Bn[e.icon.size||xe.SMALL],title:e.icon.title||"",id:e.icon.id,spotlight:e.icon.spotLight?Xn[e.icon.spotLight]:void 0}),e.illustration&&(0,E.jsx)(B.r,{alt:e.illustration.description,url:e.illustration.url}),(0,E.jsx)("span",{"aria-hidden":!!(null===(r=e.text)||void 0===r?void 0:r.accessibility),children:null===(s=e.text)||void 0===s?void 0:s.text}),(null===(d=e.text)||void 0===d?void 0:d.accessibility)&&(0,E.jsx)("span",{className:"is-visually-hidden",children:null===(c=e.text)||void 0===c?void 0:c.accessibility})]},`text-item-${n}`)}),(null==g?void 0:g.texts)&&g.texts.length>0&&(g.inheritParagraphStyling?(0,E.jsx)(E.Fragment,{children:g.texts.map((e,n)=>(0,E.jsx)(F.u,{size:Jn[g.paragraphSize],children:e},`paragraph-item-${n}`))}):(0,E.jsx)(J.y,{bullet:g.showAsList?"default":"no-bullet",spacing:!1,children:null===(d=g.texts)||void 0===d?void 0:d.map((e,n)=>(0,E.jsx)(X.x,{children:e},g.showAsList?`list-item-${n}`:`no-bullet-list-item-${n}`))})),v&&v.length>0&&(0,E.jsx)(cn,{config:c}),f&&f.length>0&&(0,E.jsx)(Zn,{config:c}),x&&y]});var b,I};nt.displayName="TextInfoSection",nt.fragment=Qn;const tt=a.J1`
  ${v.wK.fragment}
`,it=({templateComponent:e})=>{var n;const t=(null==e?void 0:e.config).textIconTooltip;return(0,E.jsx)(v.wK,{"data-view-id":null===(n=e.metadata)||void 0===n?void 0:n.id,data:t})};it.displayName="TextInfoTooltipWrapper",it.fragment=tt;const lt=(new Map).set(de.Card,Ye).set(de.InfoSection,nt).set(de.Grid,xn).set(de.Carousel,Je).set(de.Spacing,Mn).set(de.Rating,Fn).set(de.Expando,gn).set(de.IntersectionTracker,En).set(de.TextIconTooltip,it).set(de.Tabs,Pn).set(de.Modal,On).set(de.Media,bn).set(de.Script,_n).set(de.Container,mn),at=new Map([...lt]),ot=a.J1`
  fragment ExperimentalConfigFragment on ExperimentalConfig {
    card {
      ...CardConfigFragment
    }
    infoSection {
      ...TextInfoSectionFragment
    }
    grid {
      ...LayoutGridFragment
    }
    spacing {
      ...SpacingFragment
    }
    carousel {
      ...CarouselConfigFragment
    }
    rating {
      ...RatingFragment
    }
    expando {
      ...ExpandoFragment
    }
    intersection {
      ...IntersectionTrackerFragment
    }
    textIconTooltip {
      ...ProductTextInfoSectionFragment
    }
    tabs {
      ...TabsConfigFragment
    }
    modal {
      ...ModalConfigFragment
    }
    media {
      ...MediaConfigFragment
    }
    script {
      ...ExperimentalScriptFragment
    }
    container {
      ...ContainerFragment
    }
  }

  ${Ye.fragment}
  ${Mn.fragment}
  ${nt.fragment}
  ${Je.fragment}
  ${xn.fragment}
  ${Fn.fragment}
  ${gn.fragment}
  ${En.fragment}
  ${it.fragment}
  ${Pn.fragment}
  ${On.fragment}
  ${bn.fragment}
  ${Ve.fragment}
  ${mn.fragment}
`,rt=()=>(0,E.jsx)("div",{children:"ExperimentalConfig.fragment"});rt.displayName="ExperimentalConfig",rt.fragment=ot;const st=a.J1`
  query RandomAccessOneExperimentalQuery($context: ContextInput!, $productIdentifier: ProductIdentifierInput!, $featureId: String!) {
    randomAccessOne(context: $context, featureId: $featureId, productIdentifier: $productIdentifier) {
      id
      mapping {
        ...ExperimentalComponentWrapperFragment
      }
      metadata {
        ...ExperimentalExperimentalMetadataFragment
      }
    }
  }

  fragment ExperimentalExperimentalMetadataFragment on ExperimentalMetadata {
    id
    name
    signalEvents {
      id
      successEvent {
        linkName
        referrerId
        uisPrimeMessages {
          messageContent
          schemaName
        }
      }
    }
  }

  fragment ExperimentalComponentWrapperFragment on ExperimentalComponentWrapper {
    id
    childrenIds
    element {
      ...ComponentFragment
    }
  }

  fragment ComponentFragment on ExperimentalComponent {
    type
    typeClass
    metadata {
      ...ExperimentalMetadataFragment
    }
    config {
      ...ExperimentalConfigFragment
    }
  }

  fragment ExperimentalMetadataFragment on ExperimentalMetadata {
    id
    accessibilityNode {
      description
    }
  }

  ${rt.fragment}
`,dt=e=>(0,E.jsx)(b.W5,{library:at,children:(0,E.jsx)(b._A,{templateComponents:e})}),ct=e=>{var n;const{inputs:t,skipSsr:r,batchKey:s,loadingPlaceholder:d,renderFallback:c,prefetchedData:u,callbacks:m,spacing:p}=e,{context:g}=(0,o.R)(),v=(0,i.useRef)({}),f=ee(ee({},t),{},{context:g}),{data:x,error:h,loading:T}=(0,a.FP)(st,{context:{batchKey:null!=s?s:"default-random-access-experience-batch-key",shouldLogPerformance:!0},variables:f,ssr:!r,skip:!!(null==u?void 0:u.__typename)}),y=u||(null==x?void 0:x.randomAccessOne);var b,I;if(u&&!v.current.success)null==m||null===(b=m.onSuccess)||void 0===b||b.call(m,u),null==m||null===(I=m.onComplete)||void 0===I||I.call(m,u,void 0),v.current.success=!0;else if(T&&!v.current.loading){var N;null==m||null===(N=m.onLoading)||void 0===N||N.call(m,!0),v.current.loading=!0}else if(h&&!v.current.error){var S,C,A;null==m||null===(S=m.onError)||void 0===S||S.call(m,h),null==m||null===(C=m.onComplete)||void 0===C||C.call(m,void 0,h),null==m||null===(A=m.onLoading)||void 0===A||A.call(m,!1),v.current.error=!0}else if(!T&&y&&!v.current.success&&!u){var R,j,L;null==m||null===(R=m.onSuccess)||void 0===R||R.call(m,y),null==m||null===(j=m.onComplete)||void 0===j||j.call(m,y,void 0),null==m||null===(L=m.onLoading)||void 0===L||L.call(m,!1),v.current.success=!0}if(T)return d||null;const O=!(null==y||null===(n=y.mapping)||void 0===n?void 0:n.length);if(h||O)return c||null;const k=te({randomAccessOne:y});return k?p?(0,E.jsx)(l.N,ee(ee({},p),{},{children:(0,E.jsx)("div",{children:dt(k)})})):dt(k):null};ct.displayName="sharedui-RandomAccessOneFetch";const ut=e=>{const{mockData:n,callbacks:t,spacing:a}=e,o=(0,i.useRef)(!1);if(n){var r,s;if(n.randomAccessOne&&!o.current)null==t||null===(r=t.onSuccess)||void 0===r||r.call(t,n.randomAccessOne),null==t||null===(s=t.onComplete)||void 0===s||s.call(t,n.randomAccessOne,void 0),o.current=!0;const e=te(n);return e?a?(0,E.jsx)(l.N,ee(ee({},a),{},{children:(0,E.jsx)("div",{children:dt(e)})})):dt(e):null}return(0,E.jsx)(ct,ee({},e))};ut.displayName="sharedui-RandomAccessOne"}}]);
//# sourceMappingURL=https://bernie-assets.s3.us-west-2.amazonaws.com/landing-pwa/shared-ui-retail-product-random-access-one.45ce390af7685b01cd17.js.map