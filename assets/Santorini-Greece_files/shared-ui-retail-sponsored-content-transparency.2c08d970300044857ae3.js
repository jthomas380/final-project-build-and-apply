/*@license For license information please refer to shared-ui-retail-sponsored-content-transparency.licenses.txt*/
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[8170],{18127:function(e,n,r){r.d(n,{Rm:function(){return C},lK:function(){return V},xL:function(){return ce}});var a=r(5846),t=r(86047),i=r(10044),s=r(65675),l=r(62445),o=r(20209),c=r(30230),d=r(74848),p=r(96540),u=r(22868),m=r(74276),g=r(58646),y=r(39128),f=r(55009),x=r(63912),h=r(66104),v=r(33998),A=r(96906),j=r(81042),L=r(66300),b=r(82308),E=r(85361),I=r(716),D=r(66162),S=r(21330),T=r(21348);const M=o.J1`
  fragment TransparencyFragment on AdTransparencyTrigger {
    adTransparencyId
    adTransparencyButton {
      ...AdTransparencyButtonFragment
    }
    adTransparencyOverlaySkeleton {
      ...TransparencyOverlaySkeletonFragment
    }
  }

  fragment AdTransparencyButtonFragment on AdTransparencyButton {
    primary
    size
    icon {
      id
    }
    accessibility
  }

  fragment TransparencyOverlaySkeletonFragment on TransparencyOverlaySkeleton {
    title
    error {
      ...TransparencyOverlayErrorFragment
    }
  }

  fragment TransparencyOverlayErrorFragment on TransparencyOverlayError {
    icon {
      id
      size
    }
    description
    button {
      primary
    }
    allowedRetryAttempts
    exceededAttemptsMessage
  }
`,k=o.J1`
  ${M}
`;let C=function(e){return e.DISPLAY_AD="display_ad",e.NATIVE_AD="native_ad",e}({});const N={small:a.V.SMALL,medium:a.V.MEDIUM,large:a.V.LARGE},O=({transparencyId:e,type:n=C.NATIVE_AD,className:r,onOpenDialog:a,data:t,triggerRef:o})=>{const[,p]=(0,c.useDialog)(`transparency-dialog-${e}`),u=()=>{p.openDialog(),null==a||a()};switch(n){case C.NATIVE_AD:var m,g;return(0,d.jsx)(l.E,{"data-stid":"sponsored-transparency-button",onClick:u,size:N[t.size||"small"],className:r,domRef:o,"aria-label":null!==(m=t.accessibility)&&void 0!==m?m:void 0,children:(0,d.jsxs)(d.Fragment,{children:[t.primary,(0,d.jsx)(i.LD,{name:(null===(g=t.icon)||void 0===g?void 0:g.id)||"info"})]})});case C.DISPLAY_AD:var y;return(0,d.jsx)(s.t,{onClick:u,size:"small",children:(0,d.jsxs)("button",{type:"button",ref:o,"aria-label":null!==(y=t.accessibility)&&void 0!==y?y:void 0,children:[t.primary,(0,d.jsx)(i.LD,{name:"info_outline"})]})})}};O.displayName="sharedui-transparencyButton",O.fragment=k;let R=function(e){return e.SMALL="SMALL",e.MEDIUM="MEDIUM",e}({});function _(e){switch(e){case R.SMALL:return"small";case R.MEDIUM:default:return"medium"}}const F=o.J1`
  fragment ClientSideAnalyticsFragment on ClientSideAnalytics {
    linkName
    referrerId
    urls
  }
`,w=o.J1`
  fragment AnalyticsUrlsFragment on ClientSideAnalytics {
    urls
  }
`,U=o.J1`
  fragment EGDSExpandoPeekFragment on EGDSExpandoPeek {
    expandedLabel
    collapsedLabel
    expanded
    collapseAnalytics {
      eventType
      linkName
      referrerId
      uisPrimeMessages {
        messageContent
        schemaName
      }
    }
    expandAnalytics {
      eventType
      linkName
      referrerId
      uisPrimeMessages {
        messageContent
        schemaName
      }
    }
  }
`,P=({lines:e,items:n,hideScrim:r,data:a,children:t})=>{var i,s,l,o;const{expandAnalytics:c,collapseAnalytics:u,expanded:m,expandedLabel:g,collapsedLabel:y}=a,[f,x]=(0,p.useState)(m),h=(0,p.useCallback)(()=>{x(!f)},[f,x]),v=(0,D.KY)(),A={id:null!==(i=null==c?void 0:c.referrerId)&&void 0!==i?i:"",description:null!==(s=null==c?void 0:c.linkName)&&void 0!==s?s:"",callback:(0,p.useCallback)((e,n)=>{v(e,n)},[v])},j={id:null!==(l=null==u?void 0:u.referrerId)&&void 0!==l?l:"",description:null!==(o=null==u?void 0:u.linkName)&&void 0!==o?o:"",callback:(0,p.useCallback)((e,n)=>{v(e,n)},[v])};return(0,d.jsx)(S.A,{expandLabel:y,collapseLabel:g,lines:e,items:n,isVisible:f,handleClick:h,expandA11yLabel:y,collapseA11yLabel:g,analytics:f?j:A,hideScrim:r&&!0,children:t})};P.fragment=U,P.displayName="SponsoredContentEGDSExpandoPeek";let G=function(e){return e.EXTERNAL="EXTERNAL",e.INTERNAL="INTERNAL",e}({});const $=o.J1`
  fragment EGDSInlineLinkFragment on EGDSInlineLink {
    text
    action {
      ...UILinkActionFragment
    }
  }
`,z=o.J1`
  fragment UILinkActionFragment on UILinkAction {
    accessibility
    analytics {
      ...AnalyticsUrlsFragment
    }
    resource {
      ... on HttpURI {
        value
      }
    }
    target
  }
  ${w}
`,J={[G.EXTERNAL]:"_blank",[G.INTERNAL]:"_self"},X=({className:e,data:n,children:r,onClick:a})=>{const{accessibility:t,resource:i,target:s,analytics:l}=n,o=(0,p.useCallback)(()=>{var e;null==l||null===(e=l.urls)||void 0===e||e.forEach(e=>{var n;null===(n=navigator)||void 0===n||n.sendBeacon(e)}),a&&a()},[l]);return"HttpURI"!==i.__typename?null:(0,d.jsxs)("a",{className:e,target:J[s],href:i.value,rel:"noopener",onClickCapture:o,children:[t&&(0,d.jsx)("span",{className:"is-visually-hidden",children:t}),r]})};X.fragment=z,X.displayName="UILinkAction";let B=function(e){return e.LARGE="LARGE",e.MEDIUM="MEDIUM",e.SMALL="SMALL",e}({}),V=function(e){return e.EXTRA_SMALL="EXTRA_SMALL",e.LARGE="LARGE",e.MEDIUM="MEDIUM",e.MEDIUM_LARGE="MEDIUM_LARGE",e.SMALL="SMALL",e.XLARGE="XLARGE",e}({});const K=o.J1`
  fragment TransparencyContentFragment on TransparencyOverlay {
    entities {
      ...EntityFragment
    }
    targetingCategories {
      ...TargetingCategoriesFragment
    }
    callToAction {
      size
      ...EGDSInlineLinkFragment
      action {
        ...UILinkActionFragment
        analytics {
          ...ClientSideAnalyticsFragment
        }
      }
    }
  }

  fragment EntityFragment on TransparencyEntity {
    label
    expando {
      ...EGDSExpandoPeekFragment
    }
    names
  }
  fragment TargetingCategoriesFragment on TargetingCategories {
    heading {
      text
    }
    items {
      listItems {
        text
      }
    }
  }
  ${P.fragment}
  ${$}
  ${F}
  ${X.fragment}
`,Y="six",H={padding:{blockstart:"two"}},q={[B.SMALL]:"small",[B.LARGE]:"large",[B.MEDIUM]:"medium"},Q=({data:e})=>{const n=(0,D.KY)();return(0,d.jsx)(h.X,{space:"two",direction:"column",children:(0,d.jsx)(v.C,{children:(0,d.jsx)(b.N,{margin:Y,children:(0,d.jsxs)("div",{children:[(t=e.entities,(0,d.jsx)(d.Fragment,{children:t.map((e,n)=>((e,n)=>(0,d.jsx)(b.N,{stid:`transparency-entity-${n}`,padding:H.padding,children:(0,d.jsxs)("div",{children:[(0,d.jsx)(I.D,{size:100,children:e.label}),e.expando&&(0,d.jsx)(P,{lines:3,data:e.expando,hideScrim:!1,children:(0,d.jsx)(I.D,{size:200,weight:"medium",children:e.names})})]})},`entity-${n}`))(e,n))})),(a=e.targetingCategories,(0,d.jsx)(b.N,{padding:H.padding,children:(0,d.jsxs)("div",{children:[(0,d.jsx)(E.M,{size:7,children:a.heading.text}),(0,d.jsx)(b.N,{children:(0,d.jsx)(j.y,{children:a.items.listItems.map((e,n)=>(0,d.jsx)(L.x,{children:e.text},`targeting-category-list-${n}`))})})]})})),(r=e.callToAction,(0,d.jsx)(b.N,{padding:H.padding,children:(0,d.jsx)("div",{children:(0,d.jsx)(A.i,{inline:!0,size:q[r.size],children:(0,d.jsx)(X,{data:r.action,onClick:()=>{var e;(null==(e=r.action.analytics)?void 0:e.referrerId)&&(null==e?void 0:e.linkName)&&n(e.referrerId,e.linkName)},children:r.text})})})}))]})})})});var r,a,t};Q.fragment=K,Q.displayName="TransparencyContent";const W=()=>(0,d.jsx)(m.Y,{children:(0,d.jsx)(h.X,{direction:"column",alignItems:"center",children:(0,d.jsx)(v.C,{children:(0,d.jsx)(T.v,{})})})}),Z={padding:{blockstart:"two"}},ee=({errorData:e,clickCallback:n,showErrorContent:r,loading:a})=>{var s,l,o,c;const[u,g]=(0,p.useState)(0);if(!e||!r||a)return null;const y=()=>u>=((null==e?void 0:e.allowedRetryAttempts)||0);return(0,d.jsx)(m.Y,{children:(0,d.jsx)(h.X,{direction:"column",alignItems:"center",children:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(v.C,{children:(0,d.jsx)(b.N,{padding:Z.padding,children:(0,d.jsx)(i.LD,{id:(null===(s=e.icon)||void 0===s?void 0:s.id)||"info",name:(null===(l=e.icon)||void 0===l?void 0:l.id)||"info",title:(null===(o=e.icon)||void 0===o?void 0:o.id)||"info",size:(null===(c=e.icon)||void 0===c?void 0:c.size)?i.So[e.icon.size]:i.So.MEDIUM})})}),(0,d.jsx)(v.C,{children:(0,d.jsx)(b.N,{padding:Z.padding,children:(0,d.jsx)(E.M,{align:"center",children:y()?e.exceededAttemptsMessage:e.description})})}),e.button&&!y()&&(0,d.jsx)(v.C,{children:(0,d.jsx)(b.N,{padding:Z.padding,children:(0,d.jsx)("div",{children:(0,d.jsx)(t.y,{onClick:()=>(n(),void g(u+1)),name:"retry-transparency",children:e.button.primary})})})})]})})})};function ne(e){return ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ne(e)}function re(e){var n=function(e,n){if("object"!=ne(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,n||"default");if("object"!=ne(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==ne(n)?n:n+""}function ae(e,n,r){return(n=re(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function te(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,a)}return r}function ie(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?te(Object(r),!0).forEach(function(n){ae(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}const se=o.J1`
  query TransparencyQuery($context: ContextInput!, $adTransparencyId: String!) {
    sponsoredContent {
      transparencyOverlay(context: $context, adTransparencyId: $adTransparencyId) {
        ...TransparencyContentFragment
      }
    }
  }

  ${Q.fragment}
`,le=({skeletonData:e,onCloseDialog:n,inputs:r,triggerRef:a})=>{const[t,i,s]=(0,c.useDialog)(`transparency-dialog-${r.adTransparencyId}`),{context:l}=(0,f.R)(),m=(0,p.useMemo)(()=>ie(ie({},r),{},{context:l}),[r,l]),[h,{data:v,error:A,loading:j,refetch:L}]=(0,o._l)(se,{ssr:!1,notifyOnNetworkStatusChange:!0,fetchPolicy:"no-cache"});(0,p.useEffect)(()=>{t&&h({variables:m})},[t,m,h]);const b=()=>{i.closeDialog(),null==n||n()},E=n=>{var r;return(0,d.jsxs)(u.t,{type:"centered",centeredSheetSize:_(n),height:{SMALL:450,MEDIUM:700}[n],triggerRef:a,isVisible:t,children:[(0,d.jsx)(y.p,{navigationContent:{onClick:b,navIconLabel:"Close Toolbar"},toolbarTitle:(null==e?void 0:e.title)||""}),j&&(0,d.jsx)(W,{}),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(ee,{errorData:null==e?void 0:e.error,clickCallback:L,showErrorContent:!!A,loading:j}),!j&&!A&&(null==v||null===(r=v.sponsoredContent)||void 0===r?void 0:r.transparencyOverlay)&&(0,d.jsx)(Q,{data:v.sponsoredContent.transparencyOverlay})]})]})};return(0,d.jsx)(g.K,{isVisible:t,children:(0,d.jsx)(s,{children:(0,d.jsxs)(x.LM,{children:[(0,d.jsx)(x.rw,{children:E(R.MEDIUM)}),(0,d.jsx)(x.NP,{children:E(R.SMALL)})]})})})};le.displayName="sharedui-TransparencyOverlay";const oe=o.J1`
  ${M}
`,ce=({type:e,data:n,className:r,lineItemId:a,onOpen:t,onClose:i})=>{const{adTransparencyId:s,adTransparencyButton:l,adTransparencyOverlaySkeleton:o}=n,c=(0,p.useRef)(null),u=(0,p.useMemo)(()=>({adTransparencyId:s}),[s]);return(0,p.useEffect)(()=>{e===C.DISPLAY_AD&&a&&s&&((e,n)=>{const r={data:{adTransparencies:[{adTransparencyId:e,gamLineItemId:n,paasCampaignId:"",targetMatchingRawKeys:Object.keys(window.meso.targeting.get())}]}};window.meso.transparencies.push(r)})(s,a)},[s,a,e]),l?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(O,ie(ie({data:l},{transparencyId:s,type:e,className:r,triggerRef:c}),{},{onOpenDialog:t})),(0,d.jsx)(le,{triggerRef:c,inputs:u,skeletonData:o,onCloseDialog:i})]}):null};ce.fragment=oe,ce.displayName="sharedui-transparency"}}]);
//# sourceMappingURL=https://bernie-assets.s3.us-west-2.amazonaws.com/landing-pwa/shared-ui-retail-sponsored-content-transparency.2c08d970300044857ae3.js.map