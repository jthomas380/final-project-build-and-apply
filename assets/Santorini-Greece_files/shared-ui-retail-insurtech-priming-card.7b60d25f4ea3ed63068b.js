/*@license For license information please refer to shared-ui-retail-insurtech-priming-card.licenses.txt*/
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[5847],{65296:function(e,n,t){t.d(n,{fJ:function(){return Si},hT:function(){return fi}});var a=t(82308),i=t(64155),r=t(20209),l=t(55009),s=t(35784),c=t(33694),o=t(86375),d=t(74848),g=t(96540),u=t(22868),m=t(74276),h=t(1270),p=t(58646),I=t(77606),x=t(53519),f=t(30230),y=t(63912),S=t(66162),E=t(2746),v=t(22682),D=t(57536),b=t(39128),j=t(66104),T=t(33998),C=t(21348),k=t(85361),F=t(21317),A=t(716),N=t(31106),P=t(66501),L=t(69714),_=t(21330),G=t(74888),R=t(77630),$=t(96906),O=t(10044),z=t(76972),B=t(9210),w=(t(89388),t(65675)),M=t(81042),J=t(66300),H=t(86047),V=t(62403),U=t(33777),W=t(39196),Y=t(66267),X=t(15916),K=t(50306),q=t(6504);const Q=({numberOfLines:e,dataTestId:n,spacing:t,height:a})=>(0,d.jsxs)(s.w,{space:null!=t?t:"three",columns:["40x"],dataTestId:n,style:{height:a},children:[(0,d.jsx)(c.T,{children:(0,d.jsx)(o.R,{animation:!0,type:"line",lineLength:"primary"})}),Array.from(Array(null!=e?e:1),(e,n)=>(0,d.jsx)(c.T,{children:(0,d.jsx)(o.R,{animation:!0,type:"line",lineLength:"secondary"})},n))]});let Z=function(e){return e.INTERACTION="Interaction",e.OUTCOME="Outcome",e.IMPRESSION="Impression",e.PAGE_VIEW="Page View",e}({});const ee={__typename:"ClickStreamEventConstants",EVENT_NAME:"insurance_link.selected",EVENT_TYPE:Z.INTERACTION};Z.INTERACTION;const ne={__typename:"ClickStreamEventConstants",EVENT_NAME:"insurance_link.selected",EVENT_TYPE:Z.INTERACTION};Z.PAGE_VIEW,Z.IMPRESSION,Z.INTERACTION;const te={__typename:"ClickStreamEventConstants",EVENT_NAME:"product_details_module_tooltip.presented",EVENT_TYPE:Z.INTERACTION},ae={__typename:"ClickStreamEventConstants",EVENT_NAME:"product_details_module_tooltip.closed",EVENT_TYPE:Z.INTERACTION},ie={__typename:"ClickStreamEventConstants",EVENT_NAME:"product_details_module.presented",EVENT_TYPE:Z.IMPRESSION},re={__typename:"ClickStreamEventConstants",EVENT_NAME:"product_details_module.closed",EVENT_TYPE:Z.INTERACTION};Z.INTERACTION,Z.INTERACTION,Z.OUTCOME,Z.INTERACTION,Z.OUTCOME,Z.OUTCOME,Z.IMPRESSION,Z.PAGE_VIEW,Z.INTERACTION,Z.OUTCOME;const le={__typename:"ClickStreamEventConstants",EVENT_NAME:"insurance_dialog.presented",EVENT_TYPE:Z.IMPRESSION},se={__typename:"ClickStreamEventConstants",EVENT_NAME:"insurance_dialog.closed",EVENT_TYPE:Z.INTERACTION};function ce(e){return ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ce(e)}function oe(e){var n=function(e,n){if("object"!=ce(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var a=t.call(e,n||"default");if("object"!=ce(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==ce(n)?n:n+""}function de(e,n,t){return(n=oe(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ge(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t}function ue(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ge(Object(t),!0).forEach(function(n){de(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ge(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}Z.INTERACTION;const me=(e,n)=>({convertToEvent:()=>{switch(e.__typename){case"EGClickstreamEvent":return{event:{event_type:(t=e).eventType,event_name:t.eventName,event_version:t.eventVersion,event_category:t.eventCategory,action_location:t.actionLocation}};case"ClickStreamEventConstants":return(e=>{var t;return{event:ue(ue({event_type:e.EVENT_TYPE,event_name:e.EVENT_NAME,event_version:null!==(t=e.EVENT_VERSION)&&void 0!==t?t:null==n?void 0:n.eventVersion},e.ACTION_LOCATION&&{action_location:e.ACTION_LOCATION}),e.ACTION_REASON&&{action_reason:e.ACTION_REASON})}})(e);default:return null}var t}}),he=(e,n)=>{var t;const{event_name:a,event_type:i}=(n?null===(t=me(n,null).convertToEvent())||void 0===t?void 0:t.event:null)||{},r=((e,n)=>{var t,a;if(!e)return null;let i={};try{i=JSON.parse(e)}catch(o){return null}const r=null==i?void 0:i.events;if(!r)return null;const l=n?r[n]:Object.values(r)[0];if(!l)return null;const s=Object.keys(l);if(0===s.length)return null;const c=s.sort((e,n)=>{const t=Number(e.replace(/\D/g,""));return Number(n.replace(/\D/g,""))-t})[0];return c&&null!==(t=null===(a=l[c])||void 0===a?void 0:a.event_data)&&void 0!==t?t:null})(e,a);return{event:ue({event_type:i},null==r?void 0:r.event)}},pe=()=>{const e=(0,S.iQ)();return(0,g.useCallback)((n,t)=>{const a=((e,n)=>{if(!n)return null;switch(e.__typename){case"ClickStreamEventConstants":var t;return null!==(t=n.find(({eventName:n})=>n===e.EVENT_NAME))&&void 0!==t?t:null;case"EGClickstreamEvent":var a;return null!==(a=n.find(({eventName:n})=>n===e.eventName))&&void 0!==a?a:null;default:return null}})(n,t);e({clientPayload:me(n,a).convertToEvent()||void 0,serverPayload:null==a?void 0:a.payload})},[e])},Ie=()=>{const e=(0,S.iQ)();return(0,g.useCallback)(n=>{const{serverPayload:t,event:a}=n;t&&((e,n,t)=>{e({clientPayload:he(n,t),serverPayload:n})})(e,t,a)},[])},xe=e=>"egClickStreamAnalytics"in e&&e.egClickStreamAnalytics?e.egClickStreamAnalytics:"clickAnalytics"in e&&e.clickAnalytics&&e.clickAnalytics.egClickstreamAnalyticsData?e.clickAnalytics.egClickstreamAnalyticsData:[],fe=()=>{const e=pe();return(0,g.useCallback)((n,t,a)=>{const i=[...xe(n),...a||[]].filter(Boolean);i&&i.length>0&&e(t,i)},[e])},ye=(0,g.createContext)({}),Se=({children:e,nonDismissibleDialogIds:n})=>{const t=(0,g.useRef)(null),[a,i]=(0,g.useState)(null),r=(0,g.useRef)(new Set(n)),l=(0,g.useMemo)(()=>({dialogToggleRef:t,dialogState:a,setDialogState:i,nonDismissibleDialogIds:r.current}),[a]);return(0,d.jsx)(ye.Provider,{value:l,children:e})},Ee=()=>(0,g.useContext)(ye),ve=r.J1`
  fragment InsurtechClickstreamAnalyticsDataFragment on InsurtechClickstreamAnalyticsData {
    referenceId
    eventName
    eventVersion
    payload
  }
`,De=(0,g.createContext)({isLoading:!1}),be=()=>(0,g.useContext)(De),je=r.J1`
  fragment ClientSideAnalyticsFragment on ClientSideAnalytics {
    linkName
    referrerId
  }
`,Te=r.J1`
  fragment EGDSActionDialogFragment on EGDSActionDialog {
    footer {
      buttons {
        __typename
        primary
        analytics {
          ...ClientSideAnalyticsFragment
        }
      }
    }
  }
  ${je}
`,Ce=({data:e,closeDialog:n,confirmAction:t,children:a})=>{var i,r,l;const{isLoading:s}=be(),c=(0,S.KY)(),o=e.footer.buttons.map(e=>{var a;const i="UITertiaryButton"===e.__typename?"tertiary":"primary";return{text:null!==(a=e.primary)&&void 0!==a?a:"",type:i,disabled:s,onClick:()=>(e.analytics&&c(e.analytics.referrerId,e.analytics.linkName),"tertiary"===i?n():null==t?void 0:t())}});return(0,d.jsx)(E.Q,{dialogShow:!0,returnFocusOnClose:!0,children:a?(0,d.jsxs)(v.h,{children:[a,e.footer.buttons.length>0&&(0,d.jsx)(D.l,{stacked:"EGDSStackedDialogFooter"===e.footer.__typename,buttonOne:null!==(i=o[0])&&void 0!==i?i:void 0,buttonTwo:null!==(r=o[1])&&void 0!==r?r:void 0,buttonThree:null!==(l=o[2])&&void 0!==l?l:void 0})]}):void 0})};Ce.fragment=Te,Ce.displayName="EGDSActionDialog";const ke=r.J1`
  fragment EGDSGenericSheetFragment on EGDSFullScreenDialog {
    closeAnalytics {
      ...ClientSideAnalyticsFragment
    }
    toolbar {
      closeText
      title
    }
  }
  ${je}
`,Fe=({data:{closeAnalytics:e,toolbar:n},closeDialog:t,header:i,footer:r,content:l,sheetType:s,sheetHeight:c})=>{var o,h;const p=(0,g.useRef)(null),{dialogToggleRef:x}=Ee(),f=(0,S.KY)(),y={id:null!==(o=null==e?void 0:e.referrerId)&&void 0!==o?o:"",callback:()=>{var n,t;return f(null!==(n=null==e?void 0:e.referrerId)&&void 0!==n?n:"",null!==(t=null==e?void 0:e.linkName)&&void 0!==t?t:"")}},E={onClick:t,navIconLabel:null!==(h=n.closeText)&&void 0!==h?h:"",onClickAnalytics:y};return(0,d.jsxs)(u.t,{type:null!=s?s:"full",centeredSheetSize:"centered"===s?"small":void 0,height:c,isVisible:!0,returnFocusOnClose:!0,triggerRef:null!=x?x:p,children:[(0,d.jsx)(b.p,{toolbarTitle:n.title,navigationContent:E}),(0,d.jsxs)(m.Y,{padded:!1,children:[i&&(0,d.jsx)("div",{children:i}),(0,d.jsx)(a.N,{padding:{inline:"six",blockend:"six"},children:(0,d.jsx)("div",{children:l})})]}),r&&(0,d.jsx)("div",{children:(0,d.jsx)(I.s,{children:r})})]})};Fe.fragment=ke,Fe.displayName="EGDSGenericSheet";const Ae=r.J1`
  fragment EGDSLoaderDialogFragment on EGDSLoaderDialog {
    closeAnalytics {
      ...ClientSideAnalyticsFragment
    }
  }
  ${je}
`,Ne=({content:e})=>(0,d.jsx)(E.Q,{dialogShow:!0,children:(0,d.jsx)(v.h,{children:(0,d.jsxs)(j.X,{space:"four",direction:"column",alignItems:"center",children:[(0,d.jsx)(C.v,{}),(0,d.jsx)(A.D,{align:"center",children:e})]})})});Ne.displayName="sharedui-EGDSLoaderDialog",Ne.fragment=Ae;const Pe=r.J1`
  fragment EGDSDialogFragment on EGDSDialog {
    __typename
    ...EGDSActionDialogFragment
    ...EGDSGenericSheetFragment
    ...EGDSLoaderDialogFragment
  }
  ${Ce.fragment}
  ${Fe.fragment}
  ${Ne.fragment}
`,Le=({data:e,closeDialog:n,confirmAction:t,header:a,footer:i,content:r,sheetType:l,sheetHeight:s})=>{switch(e.__typename){case"EGDSActionDialog":return(0,d.jsxs)(Ce,{data:e,closeDialog:n,confirmAction:t,children:[a,r]});case"EGDSFullScreenDialog":return(0,d.jsx)(Fe,{sheetType:l,data:e,closeDialog:n,header:a,content:r,footer:i,sheetHeight:s});case"EGDSLoaderDialog":return(0,d.jsx)(Ne,{content:r,data:e});default:return null}};Le.fragment=Pe,Le.displayName="InsurtechEGDSDialog";const _e=(0,g.createContext)({}),Ge=()=>(0,g.useContext)(_e);let Re=function(e){return e.LEADING="LEADING",e.TRAILING="TRAILING",e}({}),$e=function(e){return e.BOTTOM="BOTTOM",e.CENTERED="CENTERED",e.FULLSCREEN="FULLSCREEN",e.POPOVER="POPOVER",e.SIDE="SIDE",e}({}),Oe=function(e){return e.LEADING="LEADING",e.TRAILING="TRAILING",e}({}),ze=function(e){return e.INFO="INFO",e.POSITIVE="POSITIVE",e.STANDARD="STANDARD",e.WARNING="WARNING",e}({}),Be=function(e){return e.BUTTON="BUTTON",e.LINK="LINK",e}({}),we=function(e){return e.EXTERNAL_LINK="EXTERNAL_LINK",e.MORE_INFO="MORE_INFO",e.STANDARD_LINK="STANDARD_LINK",e}({}),Me=function(e){return e.HEADED_LIST_ITEM="HEADED_LIST_ITEM",e.LIST_ITEM="LIST_ITEM",e}({}),Je=function(e){return e.BULLET_LIST="BULLET_LIST",e.GRAPHIC_LIST="GRAPHIC_LIST",e.HORIZONTAL_LIST="HORIZONTAL_LIST",e}({}),He=function(e){return e.LEFT="LEFT",e.RIGHT="RIGHT",e}({}),Ve=function(e){return e.EG_OFFER_ID="EG_OFFER_ID",e.EG_OFFER_TOKEN="EG_OFFER_TOKEN",e}({}),Ue=function(e){return e.EMPHASIS="EMPHASIS",e.INVERSE="INVERSE",e.LOYALTY="LOYALTY",e.NEGATIVE="NEGATIVE",e.POSITIVE="POSITIVE",e.PRIMARY="PRIMARY",e.SECONDARY="SECONDARY",e}({}),We=function(e){return e.BOLD="BOLD",e.MEDIUM="MEDIUM",e.REGULAR="REGULAR",e}({}),Ye=function(e){return e.EXTERNAL="EXTERNAL",e.INTERNAL="INTERNAL",e}({});const Xe=r.J1`
  fragment EGDSExpandoListItemFragment on EGDSExpandoListItem {
    collapsedLabel
    expandedLabel
    expanded
    triggerPosition
    expandAnalytics {
      ...ClientSideAnalyticsFragment
    }
    collapseAnalytics {
      ...ClientSideAnalyticsFragment
    }
  }
  ${je}
`,Ke={[Oe.LEADING]:"leading",[Oe.TRAILING]:"trailing"},qe=({children:e,data:n,titleSize:t,titleTag:a,isIndented:i,expanded:r,collapsedLabel:l,expandedLabel:s,trackData:c})=>{const{expanded:o,triggerPosition:u,expandAnalytics:m,collapseAnalytics:h}=n,p=null!=r?r:o,I=null!=s?s:n.expandedLabel,x=null!=l?l:n.collapsedLabel,[f,y]=(0,g.useState)(p),[E,v]=(0,g.useState)(p?I:x),D=(0,S.KY)(),b=pe(),j=(0,g.useCallback)(()=>{const{label:e,analytics:n,event:t}=f?{label:x,analytics:h,event:re}:{label:I,analytics:m,event:ie};v(e),n&&D(n.referrerId,n.linkName),c&&b(t,c),y(!f)},[f,x,I,h,m,c]);return(0,d.jsx)(R.U,{isVisible:f,expandoTitle:(0,g.isValidElement)(E)?E:(0,d.jsx)(k.M,{tag:a,size:t,children:E}),expandoDescription:e,onToggle:j,isIndented:i,triggerPosition:u?Ke[u]:void 0})};function Qe(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(n.includes(a))continue;t[a]=e[a]}return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.includes(t)||{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function Ze(e){if(null==e)throw new TypeError("Cannot destructure "+e)}function en(){return en=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)({}).hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},en.apply(null,arguments)}qe.fragment=Xe,qe.displayName="InsurtechEGDSExpandoListItem";const nn=["data","trackData","children"],tn=r.J1`
  fragment EGDSExpandoCardFragment on EGDSExpandoCard {
    collapsedLabel
    expandedLabel
    expanded
    triggerPosition
    expandAnalytics {
      ...ClientSideAnalyticsFragment
    }
    collapseAnalytics {
      ...ClientSideAnalyticsFragment
    }
  }
  ${je}
`,an=e=>{let{data:n,trackData:t,children:a}=e,i=Qe(e,nn);return(0,d.jsx)(P.g,{padded:!0,children:(0,d.jsx)(G.f,{children:(0,d.jsx)(qe,ue(ue({data:ue(ue({},en({},(Ze(n),n))),{},{__typename:"EGDSExpandoListItem"})},i),{},{isIndented:!1,trackData:t,children:a}))})})};an.fragment=tn,an.displayName="EGDSExpandoCard";const rn=r.J1`
  fragment EGDSExpandoPeekFragment on EGDSExpandoPeek {
    expandedLabel
    expandedAccessibilityText
    collapsedAccessibilityText
    collapsedLabel
    expanded
    expandAnalytics {
      ...ClientSideAnalyticsFragment
    }
    collapseAnalytics {
      ...ClientSideAnalyticsFragment
    }
  }
  ${je}
`,ln=({lines:e,items:n,hideScrim:t,data:a,trackData:i,children:r})=>{const{expanded:l,expandedLabel:s,collapsedLabel:c,expandedAccessibilityText:o,collapsedAccessibilityText:u,expandAnalytics:m,collapseAnalytics:h}=a,[p,I]=(0,g.useState)(l),x=(0,S.KY)(),f=pe();return(0,d.jsx)(_.A,{expandLabel:c,collapseLabel:s,lines:e,items:n,isVisible:p,handleClick:(0,g.useCallback)(()=>{const{analytics:e,event:n}=p?{analytics:h,event:re}:{analytics:m,event:ie};e&&x(e.referrerId,e.linkName),i&&f(n,i),I(!p)},[p,h,m,i]),expandA11yLabel:null!=u?u:c,collapseA11yLabel:null!=o?o:s,hideScrim:t,children:r})},sn=({expando:e,expandoProps:n,trackData:t,children:a})=>e?(0,d.jsx)(ln,ue(ue({data:e},n),{},{trackData:t,children:a})):(0,d.jsx)(d.Fragment,{children:a});ln.fragment=rn,ln.displayName="InsurtechEGDSExpandoPeek";const cn={[ze.INFO]:"info",[ze.POSITIVE]:"positive",[ze.STANDARD]:"standard",[ze.WARNING]:"warning"},on=r.J1`
  fragment EGDSIconFragment on Icon {
    description
    id
    size
    theme
    title
    spotLight
  }
`,dn=({data:e})=>{var n,t,a;return(0,d.jsx)(O.LD,{id:`${e.id}_${null!==(n=e.title)&&void 0!==n?n:void 0}`,name:e.id,size:e.size?O.So[e.size]:void 0,description:e.description,title:null!==(t=e.title)&&void 0!==t?t:void 0,theme:null!==(a=e.theme)&&void 0!==a?a:void 0,spotlight:e.spotLight?cn[e.spotLight]:void 0})};dn.fragment=on,dn.displayName="InsurtechEGDSIcon";const gn=r.J1`
  fragment EGDSIllustrationFragment on Illustration {
    description
    url
  }
`,un=({data:e})=>(0,d.jsx)(z.r,{alt:e.description,url:e.url});un.fragment=gn,un.displayName="EGDSIllustration";const mn=r.J1`
  fragment EGDSGraphicFragment on UIGraphic {
    __typename
    ... on Icon {
      ...EGDSIconFragment
    }
    ... on Illustration {
      ...EGDSIllustrationFragment
    }
  }
  ${dn.fragment}
  ${un.fragment}
`,hn=({data:e})=>{switch(e.__typename){case"Icon":return(0,d.jsx)(dn,{data:e});case"Illustration":return(0,d.jsx)(un,{data:e});default:return null}};hn.fragment=mn,hn.displayName="EGDSGraphic";const pn=r.J1`
  fragment EGDSStandardLinkFragment on EGDSStandardLink {
    text
    action {
      accessibility
      resource {
        value
      }
      standardLinkAnalytics: analytics {
        ...ClientSideAnalyticsFragment
      }
      useRelativePath
    }
    icon {
      ...EGDSIconFragment
    }
    iconPosition
    egdsElementId
  }
  ${dn.fragment}
  ${je}
`,In=({data:e,inline:n,trackData:t,linkSize:a})=>{var i,r;const l=pe(),s=(0,S.KY)(),{action:c}=e,{standardLinkAnalytics:o,useRelativePath:u}=c,m=c.resource.value,h=u?(e=>{try{const n=new URL(e);return n.pathname+n.search+n.hash}catch(n){return e}})(m):m;return(0,d.jsx)($.i,{size:a,inline:n,onClickCapture:(0,g.useCallback)(()=>{const n=(Array.isArray(t)?t:[null!=t?t:{}]).filter(({referenceId:n})=>n===e.egdsElementId);(null==o?void 0:o.referrerId)&&(null==o?void 0:o.linkName)&&s(o.referrerId,o.linkName),null==l||l(ee,n)},[l,t,o]),children:(0,d.jsxs)("a",{href:h,rel:"noopener",target:"_blank",children:[e.icon&&e.iconPosition===Re.LEADING&&(0,d.jsx)(dn,{data:e.icon}),e.text,e.icon&&e.iconPosition===Re.TRAILING&&(0,d.jsx)(dn,{data:e.icon}),(null===(i=e.action)||void 0===i?void 0:i.accessibility)&&(0,d.jsx)("span",{className:"is-visually-hidden",children:null===(r=e.action)||void 0===r?void 0:r.accessibility})]})})};In.fragment=pn,In.displayName="InsurtechEGDSStandardLink";const xn=["data"],fn=r.J1`
  fragment EGDSPlainTextFragment on EGDSPlainText {
    text
  }
`,yn=e=>{let{data:n}=e;return(0,d.jsx)(A.D,ue(ue({},Qe(e,xn)),{},{children:n.text}))};yn.fragment=fn,yn.displayName="InsurtechEGDSPlainText",new B.EL(B.i5.ERROR,"CHECKOUT_INSURTECH_MUTATION_QUERY_ERROR"),new B.EL(B.i5.INFO,"CHECKOUT_INSURTECH_MUTATION_QUERY_SUCCESS"),new B.EL(B.i5.INFO,"SIGNAL_EVENTS_CONTEXT_PUBLISH"),Ve.EG_OFFER_ID;(0,g.createContext)({manager:{publish:()=>{},subscribe(e,n,t){return{SignalType:n,unsubscribe:()=>{}}},unsubscribe:()=>{}}});const Sn=r.J1`
  fragment OfferIdentityFragment on OfferIdentity {
    type
    value
  }
`,En=r.J1`
  fragment ServerSignalFragment on UISignalSharedType {
    topic
    payload {
      publisherModule
      signalUrn
      signalDetails {
        description
        reasonUrn
        summary
        signalAdditionalDetails {
          linkSignalAdditionalDetail {
            title
            url
            urn
          }
          urn
        }
      }
    }
  }
`;r.J1`
  mutation UpdateInsurtechMutation(
    $context: ContextInput!
    $sessionId: String!
    $offersToAdd: [OfferIdentityInput!]!
    $offersToRemove: [OfferIdentityInput!]!
    $coveredOfferTokens: [OfferIdentityInput!]!
  ) {
    updateInsurtechOffer(
      context: $context
      updateInsurtechOfferRequest: {
        sessionIdentifier: $sessionId
        offersToAdd: $offersToAdd
        offersToRemove: $offersToRemove
        coveredOfferTokens: $coveredOfferTokens
      }
    ) {
      status
      message
      selectedOffers {
        ...OfferIdentityFragment
      }
      signals {
        ...SignalFragment
      }
      serverSignals {
        ...ServerSignalFragment
      }
    }
  }
  ${Sn}
  ${r.J1`
  fragment SignalFragment on InsurtechSignal {
    id
    signal
    domainInfoList {
      name
      refId
    }
  }
`}
  ${En}
`;const vn=(0,g.createContext)({isExpwebEnabled:!1,setDialogId:()=>{},registerDialogHandler:()=>{},hasModuleCard:!1}),Dn=()=>(0,g.useContext)(vn),bn=r.J1`
  fragment UILinkActionFragment on UILinkAction {
    accessibility
    resource {
      __typename
      ... on HttpURI {
        relativePath
        value
      }
    }
    analytics {
      linkName
      referrerId
    }
  }
`,jn=e=>{const{data:n,theme:t}=e,a=Tn({data:n});return a&&(0,d.jsx)($.i,{align:"left",inline:!0,noWrap:!1,size:"medium",theme:t||"inverse",children:a})},Tn=({clickStreamData:e,data:n})=>{var t;const a=(0,S.KY)(),i=pe(),r=(0,g.useCallback)(()=>{n.analytics&&a(n.analytics.referrerId,n.analytics.linkName,!0),(null==e?void 0:e.analytics)&&i(e.dataType,e.analytics)},[n,a]),l="HttpURI"===(null===(t=n.resource)||void 0===t?void 0:t.__typename)?n.resource.value:void 0;return l&&n.accessibility?(0,d.jsx)("a",{href:l,target:"_blank",rel:"noopener",onClickCapture:r,children:n.accessibility}):null};jn.fragment=bn,jn.displayName="UILinkAction";const Cn=r.J1`
  fragment InsurtechClickstreamAnalyticsFragment on InsurtechClickstreamAnalytics {
    egClickstreamAnalyticsData {
      ...InsurtechClickstreamAnalyticsDataFragment
    }
  }
  ${ve}
`,kn=r.J1`
  fragment InsurtechActionFragment on InsurtechAction {
    __typename
    accessibility
    ...InsurtechUpdateOfferActionFragment
    ...InsurtechCheckboxActionFragment
    ...InsurtechGenericActionFragment
    ...InsurtechUpdateTripActionFragment
    ...InsurtechUpdateProductSelectionActionFragment
    ...InsurtechResourceLinkActionFragment
    ...InsurtechSetResidencyActionFragment
    ...InsurtechProductSelectActionFragment
    ...InsurtechCompletePurchaseActionFragment
    ...InsurtechDialogTriggerActionFragment
    ...InsurtechNavigateNextViewActionFragment
  }

  fragment InsurtechUpdateOfferActionFragment on InsurtechUpdateOfferAction {
    insuranceOfferToken: value
    failedMessage
    successMessage
    viewId
    egClickStreamAnalytics {
      ...InsurtechClickstreamAnalyticsDataFragment
    }
  }
  fragment InsurtechSetResidencyActionFragment on InsurtechSetResidencyAction {
    value {
      countryCode
      regionCode
    }
    analytics {
      ...ClientSideAnalyticsFragment
    }
    successText
    residencyState
    egClickStreamAnalytics {
      ...InsurtechClickstreamAnalyticsDataFragment
    }
  }
  fragment InsurtechCheckboxActionFragment on InsurtechCheckboxAction {
    insuranceOfferToken
    addInsuranceMessage
    removeInsuranceMessage
  }
  fragment InsurtechGenericActionFragment on InsurtechGenericAction {
    actionType
    egClickStreamAnalytics {
      ...InsurtechClickstreamAnalyticsDataFragment
    }
  }
  fragment InsurtechUpdateTripActionFragment on InsurtechUpdateTripAction {
    operation
    offerId
    offerName
    responseId
    price
    addInsuranceError
    addInsuranceText
    removeInsuranceError
    removeInsuranceText
    analytics {
      ...ClientSideAnalyticsFragment
    }
  }
  fragment InsurtechProductSelectActionFragment on InsurtechProductSelectAction {
    clickAnalytics {
      ...InsurtechAnalyticsDataFragment
    }
    insuranceRecordId
    parentTripId
    insuranceProductId: productId
  }
  fragment InsurtechUpdateProductSelectionActionFragment on InsurtechUpdateProductSelectionAction {
    shopResponseId: responseId
    productId
    operationType
    removeDialogId
  }
  fragment InsurtechResourceLinkActionFragment on InsurtechResourceLinkAction {
    egClickStreamAnalytics {
      ...InsurtechClickstreamAnalyticsDataFragment
    }
    link {
      ...UILinkActionFragment
      target
    }
  }
  fragment InsurtechCompletePurchaseActionFragment on InsurtechCompletePurchaseAction {
    edgeToken
    insuranceRecordId
    parentTripId
    insuranceProductId: productId
    analytics {
      ...ClientSideAnalyticsFragment
    }
    clickAnalytics {
      ...InsurtechAnalyticsDataFragment
    }
  }

  fragment InsurtechDialogTriggerActionFragment on InsurtechDialogTriggerAction {
    dialogId
    accessibility
    analytics {
      ...ClientSideAnalyticsFragment
    }
    egClickStreamAnalytics {
      ...InsurtechClickstreamAnalyticsDataFragment
    }
  }

  fragment InsurtechNavigateNextViewActionFragment on InsurtechNavigateNextViewAction {
    viewId
    accessibility
    egClickStreamAnalytics {
      ...InsurtechClickstreamAnalyticsDataFragment
    }
  }

  ${je}
  ${ve}
  ${r.J1`
  fragment InsurtechAnalyticsDataFragment on InsurtechAnalyticsData {
    ...InsurtechClickstreamAnalyticsFragment
    __typename
  }
  ${Cn}
`}
  ${jn.fragment}
`,Fn=r.J1`
  fragment InsurtechExternalLinkFragment on InsurtechLink {
    text
    accessibility
    linkIcon: icon {
      ...EGDSIconFragment
    }
    action {
      ...InsurtechActionFragment
      analytics {
        ...ClientSideAnalyticsFragment
      }
    }
  }
  ${dn.fragment}
  ${kn}
  ${je}
`,An=({data:e,onClick:n,inline:t,size:a,align:i})=>{const r=e.action;if("InsurtechResourceLinkAction"!==r.__typename)return null;const l="HttpURI"===r.link.resource.__typename?r.link.resource.value:"";return(0,d.jsx)($.i,{size:a,"aria-label":e.accessibility,inline:t,onClickCapture:n,align:i,children:(0,d.jsxs)("a",{href:l,rel:"noopener",target:"_blank",children:[e.text,e.linkIcon&&(0,d.jsx)(dn,{data:e.linkIcon}),e.action.accessibility&&(0,d.jsx)("span",{className:"is-visually-hidden",children:e.action.accessibility})]})})};An.fragment=Fn,An.displayName="InsurtechExternalLink";const Nn=r.J1`
  fragment InsurtechMoreInfoLinkFragment on InsurtechLink {
    text
    accessibility
    linkIcon: icon {
      ...EGDSIconFragment
    }
  }
  ${dn.fragment}
`,Pn=({data:e,onClick:n,inline:t,size:a})=>(0,d.jsx)(w.t,{children:(0,d.jsx)($.i,{inline:t,"aria-label":e.accessibility,onClick:n,size:a,children:(0,d.jsx)("button",{type:"button",children:(0,d.jsxs)(A.D,{size:200,spacing:"half",weight:"regular",theme:"standard",children:[e.text," ",e.linkIcon&&(0,d.jsx)(dn,{data:e.linkIcon})]})})})});Pn.fragment=Nn,Pn.displayName="InsurtechMoreInfoLink";const Ln=r.J1`
  fragment InsurtechStandardLinkFragment on InsurtechLink {
    text
    accessibility
    linkIcon: icon {
      ...EGDSIconFragment
    }
  }
  ${dn.fragment}
`,_n=({data:e,onClick:n,inline:t,size:a,align:i})=>(0,d.jsx)($.i,{inline:t,"aria-label":e.accessibility,onClick:n,size:a,align:i,children:(0,d.jsxs)("button",{type:"button",children:[e.text,e.linkIcon&&(0,d.jsx)(dn,{data:e.linkIcon})]})});_n.fragment=Ln,_n.displayName="InsurtechStandardLink";const Gn=r.J1`
  fragment InsurtechLinkFragment on InsurtechLink {
    ...InsurtechMoreInfoLinkFragment
    ...InsurtechStandardLinkFragment
    ...InsurtechExternalLinkFragment
    action {
      ...InsurtechActionFragment
      analytics {
        ...ClientSideAnalyticsFragment
      }
    }
    linkType
  }
  ${Pn.fragment}
  ${_n.fragment}
  ${An.fragment}
  ${kn}
  ${je}
`,Rn=e=>{const{align:n,data:t,onClick:a,inline:i,trackData:r,size:l}=e,{action:s}=t,c=(0,S.KY)(),{isExpwebEnabled:o,setDialogId:u}=Dn(),m="InsurtechDialogTriggerAction"===s.__typename?s.dialogId:void 0,[h,p]=(0,f.useDialog)(m?`${m}`:"undefined"),I=fe(),y=(0,g.useCallback)(e=>{h||(o?u(`${e.dialogId}`):p.openDialog())},[h,u,o,p]),E=(0,g.useCallback)(()=>{const{analytics:e,accessibility:n}=s;e&&c(e.referrerId,e.linkName),I(s,ee,r),n&&(0,x.liveAnnounce)(n),"InsurtechDialogTriggerAction"===s.__typename&&y(s),null==a||a(t.action,{trackData:r})},[s,c,t.action,a,y,I,r]);switch(t.linkType){case we.MORE_INFO:return(0,d.jsx)(Pn,{data:t,onClick:E,inline:i,size:l});case we.STANDARD_LINK:return(0,d.jsx)(_n,{data:t,align:n,onClick:E,inline:i,size:l});case we.EXTERNAL_LINK:return(0,d.jsx)(An,{data:t,align:n,onClick:E,inline:i,size:l});default:return null}};Rn.fragment=Gn,Rn.displayName="InsurtechLink",(0,g.createContext)({state:{},dispatch:e=>{}}),(0,g.createContext)({});const $n=r.J1`
  fragment InsurtechLinkListFragment on InsurtechLinkList {
    links {
      ...InsurtechLinkFragment
    }
  }
  ${Rn.fragment}
`,On=({data:e,onClick:n,trackData:t,size:i})=>{var r,l,s;const{insurtechBottomInfo:c}=Ge(),o=null!==(r=null==c?void 0:c.linkSize)&&void 0!==r?r:i,g=null!==(l=null==c?void 0:c.linkListSpacing.betweenlinks)&&void 0!==l?l:{inlineend:"twelve"};return(0,d.jsx)(j.X,{children:null===(s=e.links)||void 0===s?void 0:s.map((e,i)=>(0,d.jsx)(T.C,{children:(0,d.jsx)(a.N,{margin:g,children:(0,d.jsx)("span",{children:(0,d.jsx)(Rn,{data:e,inline:!1,onClick:n,trackData:t,size:o})})})},i))})};On.fragment=$n,On.displayName="InsurtechLinkList";const zn={200:"small",300:"medium",400:"large"},Bn={200:200,300:300,400:400},wn=e=>{var n;return null!==(n=Bn[e])&&void 0!==n?n:void 0},Mn={[Ue.NEGATIVE]:"negative",[Ue.POSITIVE]:"positive",[Ue.PRIMARY]:"emphasis",[Ue.SECONDARY]:"secondary",[Ue.LOYALTY]:"loyalty",[Ue.INVERSE]:"inverse",[Ue.EMPHASIS]:"emphasis"},Jn={[We.BOLD]:"bold",[We.MEDIUM]:"medium",[We.REGULAR]:"regular"},Hn=r.J1`
  fragment EGDSStylizedTextFragment on EGDSStylizedText {
    text
    theme
    weight
    size
  }
`,Vn=({data:e,inline:n,size:t})=>(0,d.jsx)(A.D,{weight:e.weight?Jn[e.weight]:void 0,theme:e.theme?Mn[e.theme]:void 0,size:e.size?wn(e.size):t,inline:n,children:e.text});Vn.fragment=Hn,Vn.displayName="InsurtechEGDSStylizedText";const Un=r.J1`
  fragment InsurtechDialogLinkTriggerFragment on InsurTechExperienceDialogTrigger {
    primary
    accessibility
    clientAction {
      accessibility
      analyticsPayload
      analytics {
        ...ClientSideAnalyticsFragment
      }
    }
    icon {
      ...EGDSIconFragment
    }
  }
  ${je}
  ${dn.fragment}
`,Wn=({data:e,onClick:n,inline:t,linkSize:a})=>{const{dialogToggleRef:i}=Ee(),r=Ie(),l=(0,g.useRef)(null);return(0,d.jsx)($.i,{domRef:l,inline:t,"aria-label":e.accessibility,onClick:()=>{i&&(i.current=l.current),e.clientAction.analyticsPayload&&r({serverPayload:e.clientAction.analyticsPayload,event:ee}),n(e.clientAction)},size:a,children:(0,d.jsxs)("button",{type:"button",children:[e.primary,e.icon&&(0,d.jsx)(dn,{data:e.icon})]})})};Wn.fragment=Un,Wn.displayName="InsurtechDialogLinkTrigger";const Yn=r.J1`
  fragment InsurTechExperienceDialogTriggerFragment on InsurTechExperienceDialogTrigger {
    dialogId
    triggerType
    ...InsurtechDialogLinkTriggerFragment
  }
  ${Wn.fragment}
`,Xn=({data:e,trackData:n,isCardLink:t,inline:a,linkSize:i})=>{const[r,l]=(0,f.useDialog)(`${e.dialogId}`),{isExpwebEnabled:s,setDialogId:c}=Dn(),o=(0,S.KY)(),u=pe(),m=(0,g.useCallback)(()=>{if(!r){const{analytics:t}=e.clientAction;if(t&&o(t.referrerId,t.linkName),s?c(`${e.dialogId}`):l.openDialog(),n){const t=(n||[]).filter(({referenceId:n})=>n===e.dialogId);null==u||u(ee,t)}}},[l,r,c,s,e.dialogId,n]);return e.triggerType===Be.LINK?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(Wn,{inline:a,onClick:m,data:e,linkSize:i}),t&&(0,d.jsx)(L.w,{children:(0,d.jsx)("button",{hidden:!0,type:"button",onClick:m})})]}):null};Xn.fragment=Yn,Xn.displayName="InsurtechExperienceDialogTrigger";const Kn=r.J1`
  fragment EGDSTextStandardListItemFragment on EGDSTextStandardListItem {
    __typename
    text
  }
`,qn=({data:e})=>(0,d.jsx)(J.x,{children:(0,d.jsx)("div",{children:e.text})});qn.fragment=Kn,qn.displayName="EGDSTextStandardListItem";const Qn=r.J1`
  fragment EGDSGraphicTextFragment on EGDSGraphicText {
    text
    graphic {
      ...EGDSGraphicFragment
    }
  }
  ${hn.fragment}
`,Zn=({size:e,weight:n,data:{text:t,graphic:a}})=>(0,d.jsxs)(j.X,{space:"two",alignItems:"center",children:[(0,d.jsx)(hn,{data:a}),(0,d.jsx)(A.D,{size:e,weight:n,children:t})]});Zn.fragment=Qn,Zn.displayName="EGDSGraphicText";const et=e=>{if(e&&[3,4].includes(e))return{customStyle:4===e?"headline-large":"headline-extra-large"}},nt=["data"],tt=r.J1`
  fragment EGDSHeadingFragment on EGDSHeading {
    text
    accessibility
  }
`,at=e=>{let{data:n}=e,t=Qe(e,nt);const{text:a,accessibility:i}=n;return(0,d.jsx)(k.M,ue(ue({"aria-label":null!=i?i:a},t),{},{typeStyle:et(t.size),children:a}))};at.fragment=tt,at.displayName="InsurtechEGDSHeading";const it=r.J1`
  fragment EGDSIconTextFragment on EGDSIconText {
    text
    iconText: icon {
      ...EGDSIconFragment
    }
  }
  ${dn.fragment}
`,rt={inlineend:"one"},lt=({data:e,iconSpacing:n,weight:t})=>(0,d.jsxs)(j.X,{alignItems:"center",children:[(0,d.jsx)(T.C,{children:(0,d.jsx)(a.N,{margin:null!=n?n:rt,children:(0,d.jsx)("div",{children:(0,d.jsx)(dn,{data:e.iconText})})})}),(0,d.jsx)(T.C,{children:(0,d.jsx)(A.D,{weight:t,children:e.text})})]});lt.fragment=it,lt.displayName="EGDSIconText";const st=r.J1`
  fragment EGDSParagraphFragment on EGDSParagraph {
    text
  }
`,ct=({data:e})=>(0,d.jsx)(F.u,{children:e.text});ct.fragment=st,ct.displayName="InsurtechEGDSParagraph";const ot=["data","trackData"],dt=r.J1`
  fragment EGDSTextFragment on EGDSText {
    __typename
    ...EGDSParagraphFragment
    ...EGDSPlainTextFragment
    ...EGDSStylizedTextFragment
    ...EGDSHeadingFragment
    ...EGDSIconTextFragment
    ...EGDSStandardLinkFragment
    ...EGDSGraphicTextFragment
    ...EGDSGraphicTextFragment
    ...EGDSTextStandardListItemFragment
  }
  ${ct.fragment}
  ${yn.fragment}
  ${Vn.fragment}
  ${Zn.fragment}
  ${at.fragment}
  ${lt.fragment}
  ${In.fragment}
  ${qn.fragment}
`,gt=e=>{let{data:n,trackData:t}=e,a=Qe(e,ot);switch(n.__typename){case"EGDSParagraph":return(0,d.jsx)(ct,{data:n});case"EGDSPlainText":return(0,d.jsx)(yn,ue({data:n},a));case"EGDSStylizedText":return(0,d.jsx)(Vn,ue({data:n},a));case"EGDSGraphicText":return(0,d.jsx)(Zn,ue({data:n},a));case"EGDSHeading":return(0,d.jsx)(at,{data:n,size:a.headingSize,tag:a.tag});case"EGDSIconText":return(0,d.jsx)(lt,{data:n,weight:a.weight});case"EGDSStandardLink":return(0,d.jsx)(In,{data:n,inline:a.inline,trackData:t});case"EGDSTextStandardListItem":return(0,d.jsx)(qn,{data:n});default:return null}};gt.fragment=dt,gt.displayName="InsurtechEGDSText";const ut=r.J1`
  fragment EGDSBasicSectionHeadingFragment on EGDSBasicSectionHeading {
    graphic {
      ...EGDSGraphicFragment
    }
    heading {
      ...EGDSHeadingFragment
    }
    subheading
  }

  ${at.fragment}
  ${hn.fragment}
`,mt=({data:e})=>(0,d.jsxs)(j.X,{space:"two",children:[e.graphic&&(0,d.jsx)(T.C,{children:(0,d.jsx)(hn,{data:e.graphic})}),(0,d.jsx)(T.C,{children:(0,d.jsxs)("div",{children:[(0,d.jsx)(at,{size:7,data:e.heading}),e.subheading&&(0,d.jsx)(A.D,{size:200,children:e.subheading})]})})]});mt.fragment=ut,mt.displayName="EGDSBasicSectionHeading";const ht=r.J1`
  fragment InsurtechGraphicStylizedTextFragment on InsurtechGraphicStylizedText {
    grapic {
      ...EGDSGraphicFragment
    }
    stylizedText {
      ...EGDSStylizedTextFragment
    }
  }
  ${hn.fragment}
  ${Vn.fragment}
`,pt=({data:e,size:n,inline:t})=>t?(0,d.jsxs)("span",{children:[(0,d.jsx)(hn,{data:e.grapic}),(0,d.jsx)(a.N,{padding:{inlinestart:"one"},children:(0,d.jsx)("span",{children:(0,d.jsx)(Vn,{size:n,data:e.stylizedText,inline:!0})})})]}):(0,d.jsxs)(j.X,{space:"two",children:[(0,d.jsx)(hn,{data:e.grapic}),(0,d.jsx)(Vn,{size:n,data:e.stylizedText})]});pt.fragment=ht,pt.displayName="InsurtechGraphicStylizedText";const It=r.J1`
  fragment InsurtechPopoverFragment on InsurtechPopover {
    icon {
      ...EGDSIconFragment
    }
    text
    content {
      ...InsurtechPopoverContentFragment
    }
    clickstreamAnalytics {
      ...InsurtechClickstreamAnalyticsFragment
    }
    closeButtonText
    closeAccessibility
  }
  fragment InsurtechPopoverContentFragment on InsurtechPopoverContent {
    ...InsurtechPopoverTextContentFragment
  }
  fragment InsurtechPopoverTextContentFragment on InsurtechPopoverTextContent {
    content
  }
  ${dn.fragment}
  ${Cn}
`,xt=({onClick:e})=>(0,d.jsx)(U.q,{type:"button",onClick:e,children:(0,d.jsx)(O.LD,{name:"close",id:"sheet-close-button"})}),ft=({data:e,onClose:n})=>{var t;return(0,d.jsxs)(j.X,{children:[(0,d.jsx)(a.N,{padding:e.closeButtonText?{inline:"six",block:"six"}:{inlinestart:"six",block:"six"},children:(0,d.jsxs)("div",{children:[e.content.content.map((e,n)=>(0,d.jsx)(A.D,{children:e},n)),e.closeButtonText&&(0,d.jsx)(a.N,{padding:{blockstart:"four"},children:(0,d.jsx)(U.q,{type:"button",isFullWidth:!0,onClick:n,"aria-label":null!==(t=e.closeAccessibility)&&void 0!==t?t:void 0,children:e.closeButtonText})})]})}),!e.closeButtonText&&(0,d.jsx)("div",{children:(0,d.jsx)(h.t,{children:(0,d.jsx)(xt,{onClick:n})})})]})},yt=({popoverWidth:e,data:n})=>{var t;const a=(0,g.useRef)(null),[i,{openDialog:r,closeDialog:l},s]=(0,f.useDialog)(`dialog_${(0,Y.D4)()}`),[c,o]=(0,g.useState)(!1),m=pe(),h=null===(t=n.clickstreamAnalytics)||void 0===t?void 0:t.egClickstreamAnalyticsData,I=()=>{var e;null===(e=a.current)||void 0===e||e.focus(),h&&m(ae,h)},x=()=>{h&&m(te,h)},S=e=>{"dialog"===e?i||r():"popover"===e&&o(!0)},v=()=>{o(!1),l()},D=(0,d.jsxs)("button",{ref:a,type:"button",children:[(0,d.jsx)(A.D,{inline:!0,size:200,whiteSpace:"nowrap",children:n.text}),(0,d.jsx)(dn,{data:n.icon})]});return(0,d.jsxs)(y.LM,{children:[(0,d.jsx)(y.NP,{children:(0,d.jsxs)("div",{children:[(0,d.jsx)(w.t,{onClick:()=>S("dialog"),size:"small",children:D}),(0,d.jsx)(p.K,{isVisible:i,closeCallback:I,openCallback:x,children:(0,d.jsx)(s,{children:(0,d.jsx)(E.Q,{dialogShow:i,autoFocus:!0,children:(0,d.jsx)(ft,{data:n,onClose:v})})})})]})}),(0,d.jsx)(y.rw,{children:(0,d.jsxs)(W.P,{type:"relative",children:[(0,d.jsx)(w.t,{onClick:()=>S("popover"),size:"small",children:D}),(0,d.jsx)(p.K,{isVisible:c,closeCallback:I,openCallback:x,children:(0,d.jsx)(u.t,{isVisible:!0,autoFocus:!0,applyBlockStartMargin:!0,type:"popover",triggerRef:a,onDismiss:v,width:e,autoPosition:!0,children:(0,d.jsx)(ft,{data:n,onClose:v})})})]})})]})};yt.fragment=It,yt.displayName="InsurtechPopover";const St=r.J1`
  fragment InsurtechPricePresentationFragment on InsurtechPricePresentation {
    text
    substring
    totalPriceLabel
    tooltip {
      ...InsurtechPopoverFragment
    }
  }
  ${yt.fragment}
`,Et=({data:{text:e,totalPriceLabel:n,substring:t,tooltip:a},flexProps:i,textProps:r,subStringProps:l,layoutAlign:s})=>{var c,o,g,u,m,h;return(0,d.jsxs)(j.X,{direction:"column",alignItems:s,children:[(0,d.jsxs)(j.X,{space:null!==(c=null==i?void 0:i.space)&&void 0!==c?c:void 0,alignItems:null!==(o=null==i?void 0:i.alignItems)&&void 0!==o?o:"start",direction:null!==(g=null==i?void 0:i.direction)&&void 0!==g?g:"column",children:[(0,d.jsx)(A.D,{inline:!0,size:null!==(u=null==r?void 0:r.size)&&void 0!==u?u:500,weight:null!==(m=null==r?void 0:r.weight)&&void 0!==m?m:"bold",align:null==r?void 0:r.align,whiteSpace:"nowrap",children:e}),t&&(0,d.jsx)(A.D,{inline:!0,size:null!==(h=null==l?void 0:l.size)&&void 0!==h?h:200,whiteSpace:null==l?void 0:l.whiteSpace,children:t})]}),a&&(0,d.jsx)(yt,{data:a,popoverWidth:327}),n&&(0,d.jsx)(A.D,{size:200,whiteSpace:"nowrap",children:n})]})};Et.fragment=St,Et.displayName="InsurtechPricePresentation";const vt=r.J1`
  fragment InsurtechSpannableTextElementFragment on InsurtechSpannableTextElement {
    ...EGDSPlainTextFragment
    ...EGDSStandardLinkFragment
    ...InsurtechPricePresentationFragment
    ...InsurtechLinkFragment
    ...EGDSStylizedTextFragment
    ...InsurTechExperienceDialogTriggerFragment
    ...InsurtechGraphicStylizedTextFragment
  }
  ${yn.fragment}
  ${In.fragment}
  ${Rn.fragment}
  ${Et.fragment}
  ${Vn.fragment}
  ${Xn.fragment}
  ${pt.fragment}
`,Dt=({data:e,callback:n,priceTextProps:t,fixedSize:a})=>{const i=null!==(r=zn[a])&&void 0!==r?r:void 0;var r;switch(e.__typename){case"EGDSPlainText":return(0,d.jsx)(yn,{data:e,inline:!0,size:a});case"EGDSStandardLink":return(0,d.jsx)(In,{data:e,inline:!0,linkSize:i});case"InsurtechPricePresentation":return(0,d.jsx)(Et,{data:e,textProps:{size:null==t?void 0:t.priceTextSize},flexProps:{direction:null==t?void 0:t.priceTextInline,alignItems:null==t?void 0:t.priceTextPosition,space:null==t?void 0:t.priceTextSpacing},layoutAlign:null==t?void 0:t.layoutAlign});case"InsurtechLink":return(0,d.jsx)(Rn,{data:e,inline:!0,onClick:n,size:i});case"EGDSStylizedText":return(0,d.jsx)(Vn,{data:e,inline:!0,size:a});case"InsurTechExperienceDialogTrigger":return(0,d.jsx)(Xn,{inline:!0,data:e,linkSize:i});case"InsurtechGraphicStylizedText":return(0,d.jsx)(pt,{data:e,inline:!0});default:return null}};Dt.fragment=vt,Dt.displayName="InsurtechSpannableTextElement";const bt=r.J1`
  fragment InsurtechSpannableTextFragment on InsurtechSpannableText {
    contents {
      ...InsurtechSpannableTextElementFragment
    }
  }

  ${Dt.fragment}
`,jt={inlineend:"half"},Tt=({data:e,callback:n,spaceBetween:t,priceTextProps:i,align:r,fixedSize:l=300})=>{var s;return(0,d.jsx)("div",{children:(0,d.jsx)(A.D,{align:r,children:null===(s=e.contents)||void 0===s?void 0:s.map((e,r)=>(0,d.jsx)(a.N,{padding:null!=t?t:jt,children:(0,d.jsx)("span",{children:(0,d.jsx)(Dt,{data:e,callback:n,priceTextProps:i,fixedSize:l})})},r))})})};Tt.fragment=bt,Tt.displayName="InsurtechSpannableText";const Ct=r.J1`
  fragment InsurtechBenefitDialogElementFragment on InsurtechElement {
    __typename
    ...EGDSPlainTextFragment
    ...EGDSStandardLinkFragment
    ...InsurtechLinkListFragment
    ...InsurtechLinkFragment
    ...InsurtechSpannableTextFragment
  }
  ${yn.fragment}
  ${In.fragment}
  ${On.fragment}
  ${Rn.fragment}
  ${Tt.fragment}
`,kt=({data:e,trackData:n,linkSize:t,fixedSize:a})=>{switch(e.__typename){case"EGDSStandardLink":return(0,d.jsx)(In,{data:e,trackData:n,linkSize:null!=t?t:"small"});case"EGDSPlainText":return(0,d.jsx)(yn,{data:e,size:200});case"InsurtechLinkList":return(0,d.jsx)(On,{data:e});case"InsurtechLink":return(0,d.jsx)(Rn,{data:e,size:null!=t?t:"small"});case"InsurtechSpannableText":return(0,d.jsx)(Tt,{data:e,fixedSize:a});default:return null}};kt.fragment=Ct,kt.displayName="InsurtechBenefitDialogElement";const Ft=r.J1`
  fragment InsurtechIconListItemFragment on InsurtechIconListItem {
    icon {
      ...EGDSIconFragment
    }
    label
    subLabel
    content {
      ...EGDSTextFragment
    }
    egClickStreamAnalytics {
      ...InsurtechClickstreamAnalyticsDataFragment
    }
    theme
  }
  ${dn.fragment}
  ${gt.fragment}
  ${ve}
`,At={blockstart:"half"},Nt={blockstart:"one"},Pt={blockstart:"two"},Lt={blockstart:"four"},_t=({headingProps:e,labelFontWeight:n,label:t})=>e?(0,d.jsx)(k.M,{size:e.size,children:t}):(0,d.jsx)(A.D,{weight:n,children:t}),Gt=({data:e,headingProps:n,hasSeparator:t,labelFontWeight:r})=>{var l;return e.theme===Me.HEADED_LIST_ITEM?(0,d.jsxs)("div",{children:[(0,d.jsx)(k.M,{size:6,children:e.label}),(0,d.jsx)(a.N,{margin:Pt,children:(0,d.jsxs)(j.X,{space:"two",children:[(0,d.jsx)(dn,{data:e.icon}),(0,d.jsx)(T.C,{grow:1,children:(0,d.jsx)(j.X,{direction:"column",justifyContent:"center",space:"one",children:e.content.map((n,t)=>{var a;return(0,d.jsx)(gt,{data:n,trackData:[...null!==(a=e.egClickStreamAnalytics)&&void 0!==a?a:[]]},t)})})})]})})]}):(0,d.jsxs)(j.X,{space:"two",children:[(0,d.jsx)(T.C,{children:(0,d.jsx)(dn,{data:e.icon})}),(0,d.jsx)(T.C,{grow:1,children:(0,d.jsx)(j.X,{direction:"column",justifyContent:"center",children:(0,d.jsxs)("div",{children:[(0,d.jsx)(_t,{label:e.label,headingProps:n,labelFontWeight:r}),e.subLabel&&(0,d.jsx)(a.N,{margin:e.label?At:void 0,children:(0,d.jsx)(A.D,{children:e.subLabel})}),null===(l=e.content)||void 0===l?void 0:l.map((n,t)=>{var i;return(0,d.jsx)(a.N,{margin:e.subLabel?Lt:Nt,children:(0,d.jsx)("div",{children:(0,d.jsx)(gt,{data:n,trackData:[...null!==(i=e.egClickStreamAnalytics)&&void 0!==i?i:[]]})})},t)}),t&&(0,d.jsx)(a.N,{margin:{blockstart:"six",blockend:"six"},children:(0,d.jsx)("div",{children:(0,d.jsx)(i.j,{blockMargin:"unset"})})})]})})})]})};Gt.fragment=Ft,Gt.displayName="sharedui-InsurtechIconListItem";const Rt=r.J1`
  fragment InsurtechTextListItemFragment on InsurtechTextListItem {
    label
    content {
      ...EGDSTextFragment
    }
  }
  ${gt.fragment}
`,$t=({labelFontWeight:e,data:n})=>0===n.content.length?(0,d.jsx)(A.D,{weight:e,children:n.label}):(0,d.jsx)(k.M,{children:n.label}),Ot=({data:e,labelFontWeight:n})=>(0,d.jsx)(j.X,{space:"one",children:(0,d.jsx)(T.C,{grow:1,children:(0,d.jsx)(j.X,{direction:"column",justifyContent:"center",children:(0,d.jsxs)("div",{children:[(0,d.jsx)($t,{data:e,labelFontWeight:n}),e.content.length>0&&(0,d.jsx)(M.y,{children:e.content.map((e,n)=>(0,d.jsx)(gt,{data:e},n))})]})})})});Ot.fragment=Rt,Ot.displayName="sharedui-InsurtechTextListItem";const zt=["data"],Bt=r.J1`
  fragment InsurtechTextListFragment on InsurtechTextList {
    items {
      ...InsurtechListItemFragment
    }
    accessibility
    type
  }
  fragment InsurtechListItemFragment on InsurtechListItem {
    ...InsurtechIconListItemFragment
    ...InsurtechTextListItemFragment
  }
  ${Gt.fragment}
  ${Ot.fragment}
`,wt=e=>{let{data:n}=e,t=Qe(e,zt);switch(n.__typename){case"InsurtechIconListItem":return(0,d.jsx)(Gt,{labelFontWeight:t.labelFontWeight,data:n,headingProps:t.headingProps,hasSeparator:t.hasSeparator});case"InsurtechTextListItem":return(0,d.jsx)(Ot,{labelFontWeight:t.labelFontWeight,data:n});default:return null}},Mt=e=>e.type===Je.BULLET_LIST?"default":"icon-alternate",Jt=({data:e,spacingListElements:n,headingProps:t,hasSeparator:i,listSize:r,labelFontWeight:l})=>{var s;return(0,d.jsx)(M.y,{size:r,spacing:!1,bullet:Mt(e),"aria-label":(null==e?void 0:e.accessibility)||void 0,children:null===(s=e.items)||void 0===s?void 0:s.map((r,s,{length:c})=>{const o=(g=r,m=e.items,(u=(h=s)>0?m[h-1]:null)&&(g.__typename!==(null==u?void 0:u.__typename)||"InsurtechIconListItem"===g.__typename&&"InsurtechIconListItem"===u.__typename&&g.theme!==u.theme)?{blockstart:"two"}:void 0);var g,u,m,h;return e.type===Je.BULLET_LIST?(0,d.jsx)(J.x,{children:(0,d.jsx)(wt,{data:r,labelFontWeight:l,headingProps:t,hasSeparator:i&&s!==c-1})},s):(0,d.jsx)(a.N,{margin:null!=n?n:o,children:(0,d.jsx)(J.x,{children:(0,d.jsx)(wt,{data:r,labelFontWeight:l,headingProps:t,hasSeparator:i&&s!==c-1})})},s)})})};Jt.fragment=Bt,Jt.displayName="InsurtechTextList";const Ht=r.J1`
  fragment InsurtechBenefitSectionFragment on InsurtechBenefitSection {
    benefitsHeading: heading
    list {
      ...InsurtechTextListFragment
    }
    dialogTrigger {
      ...InsurTechExperienceDialogTriggerFragment
    }
  }
  ${Xn.fragment}
  ${Jt.fragment}
  ${In.fragment}
`,Vt={blockend:"two"},Ut=({data:{benefitsHeading:e,list:n,dialogTrigger:t},styling:i})=>{var r,l,s,c,o,g,u,m,h,p;return(0,d.jsxs)(j.X,{justifyContent:"space-between",direction:"column",blockSize:"full_size",dataTestId:"insurtech-benefit-section",children:[(0,d.jsxs)("div",{children:[e&&(0,d.jsx)(a.N,{margin:null!==(r=null==i||null===(l=i.heading)||void 0===l?void 0:l.spacing)&&void 0!==r?r:Vt,children:(0,d.jsx)(k.M,{size:null==i||null===(s=i.heading)||void 0===s?void 0:s.size,tag:null==i||null===(c=i.heading)||void 0===c?void 0:c.tag,typeStyle:et(null==i||null===(o=i.heading)||void 0===o?void 0:o.size),children:e})}),n.items.length>0&&(0,d.jsx)(Jt,{data:n,spacingListElements:null==i||null===(g=i.list)||void 0===g?void 0:g.spacing,headingProps:null==i||null===(u=i.list)||void 0===u?void 0:u.heading,hasSeparator:null==i||null===(m=i.list)||void 0===m?void 0:m.hasSeparator,labelFontWeight:null==i||null===(h=i.list)||void 0===h?void 0:h.labelFontWeight,listSize:null==i||null===(p=i.list)||void 0===p?void 0:p.size})]}),t&&(0,d.jsx)(a.N,{margin:{blockstart:"four"},children:(0,d.jsx)("div",{children:(0,d.jsx)(Xn,{data:t})})})]})};Ut.displayName="InsurtechBenefitSection",Ut.fragment=Ht;const Wt=r.J1`
  fragment InsurtechBenefitDialogContentFragment on InsurtechBenefitDialogContent {
    benefitSection {
      ...InsurtechBenefitSectionFragment
    }
    link {
      ...EGDSStandardLinkFragment
    }
    disclaimer
    egClickstreamAnalyticsData {
      ...InsurtechClickstreamAnalyticsDataFragment
    }
    elements {
      ...InsurtechBenefitDialogElementFragment
    }
    expando {
      ...EGDSExpandoPeekFragment
    }
  }
  ${In.fragment}
  ${Ut.fragment}
  ${kt.fragment}
  ${ve}
  ${ln.fragment}
`,Yt={heading:{size:7,spacing:{blockend:"six"}},list:{heading:{size:7},spacing:"two",hasSeparator:!1}},Xt={inlineend:"six"},Kt=({data:e})=>{var n,t,i,r,l,s;const{isLoading:c}=be(),{benefitDialog:o}=Ge(),g=null!==(n=null==o||null===(t=o.content)||void 0===t||null===(t=t.elements)||void 0===t?void 0:t.spacing)&&void 0!==n?n:Xt;return c?(0,d.jsx)(Q,{}):(0,d.jsxs)("div",{children:[(0,d.jsx)(Ut,{data:e.benefitSection,styling:null!==(i=null==o||null===(r=o.content)||void 0===r?void 0:r.benefitSection)&&void 0!==i?i:Yt}),e.elements&&e.elements.length>0&&(0,d.jsx)(a.N,{margin:g,children:(0,d.jsx)(j.X,{space:null!==(l=null==o||null===(s=o.content)||void 0===s||null===(s=s.elements)||void 0===s?void 0:s.inBetween)&&void 0!==l?l:"two",direction:"column",children:e.elements.map((n,t)=>{var a,i;return(0,d.jsx)(kt,{data:n,linkSize:null==o||null===(a=o.content)||void 0===a||null===(a=a.elements)||void 0===a?void 0:a.linkSize,trackData:e.egClickstreamAnalyticsData,fixedSize:null==o||null===(i=o.content)||void 0===i||null===(i=i.elements)||void 0===i?void 0:i.fixedSize},t)})})}),e.link&&(0,d.jsx)(a.N,{margin:{blockstart:"four"},children:(0,d.jsx)("div",{children:(0,d.jsx)(In,{data:e.link,trackData:e.egClickstreamAnalyticsData})})}),e.disclaimer&&(e.expando?(0,d.jsx)(sn,{expando:e.expando,expandoProps:{lines:2,isVisible:!1},children:(0,d.jsx)(a.N,{padding:{blockstart:"four"},children:(0,d.jsx)(A.D,{size:200,children:e.disclaimer})})}):(0,d.jsx)(a.N,{margin:{blockstart:"six"},children:(0,d.jsx)(A.D,{size:200,children:e.disclaimer})}))]})};Kt.fragment=Wt,Kt.displayName="InsurtechBenefitDialogContent";const qt=r.J1`
  fragment PricePresentationFragment on PricePresentation {
    title {
      primary
    }
    sections {
      ...PricePresentationSectionFragment
    }
    footer {
      header
      messages {
        ... on PriceLineText {
          primary
        }
      }
    }
  }

  fragment PricePresentationSectionFragment on PricePresentationSection {
    header {
      name {
        ...PricePresentationLineItemEntryFragment
      }
      enrichedValue {
        ...PricePresentationLineItemEntryFragment
      }
    }
    subSections {
      ...PricePresentationSubSectionFragment
    }
  }

  fragment PricePresentationSubSectionFragment on PricePresentationSubSection {
    header {
      name {
        primaryMessage {
          ... on PriceLineText {
            primary
          }
          ... on PriceLineHeading {
            primary
          }
        }
        secondaryMessages {
          ... on PriceLineText {
            primary
          }
        }
      }
      enrichedValue {
        ...PricePresentationLineItemEntryFragment
      }
    }
    items {
      ...PricePresentationLineItemFragment
    }
  }

  fragment PricePresentationLineItemFragment on PricePresentationLineItem {
    enrichedValue {
      ...PricePresentationLineItemEntryFragment
    }
    name {
      ...PricePresentationLineItemEntryFragment
    }
  }

  fragment PricePresentationLineItemEntryFragment on PricePresentationLineItemEntry {
    primaryMessage {
      ...PriceLineElementFragment
    }
    secondaryMessages {
      ...PriceLineElementFragment
    }
  }

  fragment PriceLineElementFragment on PricePresentationLineItemMessage {
    ...PriceLineTextFragment
    ...PriceLineHeadingFragment
  }

  fragment PriceLineTextFragment on PriceLineText {
    theme
    primary
    weight
    additionalInformation {
      ...PricePresentationAdditionalInformationFragment
    }
    graphic {
      ...PricePresentationEGDSGraphicFragment
    }
  }

  fragment PricePresentationAdditionalInformationFragment on PricePresentationAdditionalInformation {
    ...PricePresentationAdditionalInformationPopoverFragment
  }

  fragment PricePresentationAdditionalInformationPopoverFragment on PricePresentationAdditionalInformationPopover {
    analytics {
      linkName
      referrerId
    }
    enrichedSecondaries {
      ...AdditionalInformationPopoverGridSectionFragment
    }
    icon {
      id
      description
      size
    }
  }

  fragment AdditionalInformationPopoverGridSectionFragment on AdditionalInformationPopoverGridSection {
    subSections {
      header {
        name {
          primaryMessage {
            ...AdditionalInformationPopoverGridLineItemMessageFragment
          }
        }
      }
      items {
        name {
          ...AdditionalInformationPopoverGridLineItemEntryFragment
        }
        enrichedValue {
          ...AdditionalInformationPopoverGridLineItemEntryFragment
        }
      }
    }
  }

  fragment AdditionalInformationPopoverGridLineItemEntryFragment on PricePresentationLineItemEntry {
    primaryMessage {
      ...AdditionalInformationPopoverGridLineItemMessageFragment
    }
    secondaryMessages {
      ...AdditionalInformationPopoverGridLineItemMessageFragment
    }
  }

  fragment AdditionalInformationPopoverGridLineItemMessageFragment on PricePresentationLineItemMessage {
    ... on PriceLineText {
      primary
    }
    ... on PriceLineHeading {
      tag
      size
      primary
    }
  }

  fragment PriceLineHeadingFragment on PriceLineHeading {
    primary
    tag
    size
    additionalInformation {
      ...PricePresentationAdditionalInformationFragment
    }
    icon {
      id
      description
      size
    }
  }

  fragment PricePresentationEGDSGraphicFragment on UIGraphic {
    ... on Icon {
      description
      id
      size
      theme
      title
      withBackground
    }
    ... on Illustration {
      id
      description
      link: url
    }
    ... on Mark {
      description
      id
      markSize: size
      url {
        value
      }
    }
  }
`,Qt=({data:e})=>(0,d.jsx)(X.iR,{data:e});Qt.fragment=ue(ue({},qt),{},{__typename:"PricePresentation"}),Qt.displayName="sharedui-InsurtechPricePresentationWrapper";const Zt=r.J1`
  fragment InsurtechPricePresentationDialogContentFragment on InsurtechPricePresentationDialogContent {
    priceDetails {
      ...PricePresentationFragment
    }
  }
  ${Qt.fragment}
`,ea=({data:e})=>(0,d.jsx)(a.N,{margin:{blockstart:"six"},children:(0,d.jsx)("div",{children:(0,d.jsx)(Qt,{data:e.priceDetails})})});ea.fragment=Zt,ea.displayName="sharedui-InsurtechPricePresentationDialogContent";const na=r.J1`
  fragment InsurtechPrimaryButtonFragment on InsurtechPrimaryButton {
    button {
      accessibility
      disabled
      primary
      icon {
        ...EGDSIconFragment
      }
    }
  }
  ${dn.fragment}
`,ta=({data:{button:e},actionProps:n,disabled:t,onClick:a,size:i,isFullWidth:r=!1})=>(0,d.jsxs)(H.y,ue(ue({"aria-label":e.accessibility||"",disabled:null!=t?t:e.disabled,isFullWidth:r,onClick:a,size:i},n),{},{children:[e.icon&&(0,d.jsx)(dn,{data:e.icon}),e.primary]}));ta.fragment=na,ta.displayName="InsurtechPrimaryButton";const aa=r.J1`
  fragment InsurtechSecondaryButtonFragment on InsurtechSecondaryButton {
    button {
      accessibility
      disabled
      primary
      icon {
        ...EGDSIconFragment
      }
    }
  }
  ${dn.fragment}
`,ia=({data:{button:e},disabled:n,onClick:t,size:a,actionProps:i})=>(0,d.jsxs)(V.y,ue(ue({"aria-label":e.accessibility||"",disabled:null!=n?n:e.disabled,onClick:t,size:a},i),{},{children:[e.icon&&(0,d.jsx)(dn,{data:e.icon}),e.primary]}));ia.fragment=aa,ia.displayName="InsurtechSecondaryButton";const ra=r.J1`
  fragment InsurtechTertiaryButtonFragment on InsurtechTertiaryButton {
    button {
      accessibility
      disabled
      primary
      icon {
        ...EGDSIconFragment
      }
    }
  }
  ${dn.fragment}
`,la=({data:{button:e},alignLabelToContent:n,disabled:t,onClick:a,size:i,actionProps:r})=>(0,d.jsxs)(U.q,ue(ue({alignLabelToContent:n,"aria-label":e.accessibility||"",disabled:null!=t?t:e.disabled,onClick:a,size:i},r),{},{children:[e.icon&&(0,d.jsx)(dn,{data:e.icon}),e.primary]}));la.fragment=ra,la.displayName="InsurtechTertiaryButton";const sa=r.J1`
  fragment InsurtechButtonFragment on InsurtechButton {
    ...InsurtechPrimaryButtonFragment
    ...InsurtechTertiaryButtonFragment
    ...InsurtechSecondaryButtonFragment
    action {
      ...InsurtechActionFragment
      analytics {
        ...ClientSideAnalyticsFragment
      }
    }
  }
  ${ta.fragment}
  ${ia.fragment}
  ${la.fragment}
  ${kn}
  ${je}
`,ca=({data:e,disabled:n,onClick:t,size:a,isFullWidth:i,alignLabelToContent:r,publishClickstream:l})=>{const{action:s}=e,c=(0,S.KY)(),{isExpwebEnabled:o,setDialogId:u}=Dn(),m="InsurtechDialogTriggerAction"===s.__typename?s.dialogId:void 0,[,h]=(0,f.useDialog)(m?`${m}`:"undefined"),p=fe(),I=(0,g.useCallback)(()=>{const{analytics:e}=s;e&&c(e.referrerId,e.linkName),l&&p(s,ee),"InsurtechDialogTriggerAction"===s.__typename&&(o?u(`${s.dialogId}`):(h.closeDialog({closeAllDialogs:!0}),h.openDialog())),null==t||t(s)},[t,s]),x=(e=>"InsurtechResourceLinkAction"===e.__typename&&"HttpURI"===e.link.resource.__typename?{href:e.link.resource.value,target:e.link.target===Ye.EXTERNAL?"_blank":void 0}:null)(s);switch(e.__typename){case"InsurtechPrimaryButton":return(0,d.jsx)(ta,{data:e,disabled:n,onClick:I,size:a,isFullWidth:i,actionProps:x});case"InsurtechSecondaryButton":return(0,d.jsx)(ia,{data:e,disabled:n,onClick:I,size:a,isFullWidth:i,actionProps:x});case"InsurtechTertiaryButton":return(0,d.jsx)(la,{data:e,disabled:n,onClick:I,size:a,isFullWidth:i,alignLabelToContent:r,actionProps:x});default:return null}};ca.fragment=sa,ca.displayName="sharedui-InsurtechButton";const oa=(0,g.createContext)(null),da=(...e)=>{const n=[],t=void window;for(const a of e){if(!a)continue;const e=typeof a;if("string"===e){const e=a.split(" ");t&&e.length>1?n.push(da.apply(t,e)):n.push((null==t?void 0:t[a])||a)}else if(Array.isArray(a))[].concat(...a).filter(Boolean).length&&n.push(da.apply(null!=t?t:null,a));else if("object"===e)if(a.toString===Object.prototype.toString)for(const i in a)({}).hasOwnProperty.call(a,i)&&a[i]&&n.push((null==t?void 0:t[i])||i);else n.push(a.toString())}return n.join(" ")},ga=e=>{let n=!1;n=window.matchMedia("(prefers-reduced-motion: reduce)").matches;const{className:t,children:i,checked:r,description:l,disabled:s,id:c,label:o,labelClassName:u,required:m,name:h,value:p,a11yLabel:I,onChange:x}=e,f=(0,g.useContext)(oa),y="uitk-radio-button",S=da(y,{"is-disabled":s}),E=da("uitk-radio-button-label",{[u]:Boolean(u),"is-required":m}),v=da({checked:r},t),D=o||i,b=(null==f?void 0:f.defaultChecked)?"defaultChecked":"checked",C=r||(null==f?void 0:f.selected)===p,k=da(`${y}-control`),F=da(`${y}-has-reduced-motion`),A=`radio-button-description-${(0,Y.D4)()}`,N=null!=I?I:null==D?void 0:D.toString();return(0,d.jsx)(j.X,{className:S,wrap:"nowrap",style:{flex:1,padding:0},children:(0,d.jsx)(T.C,{className:da(`${y}-content`),grow:1,children:(0,d.jsxs)("div",{children:[(0,d.jsxs)("label",{className:E,htmlFor:c,style:{display:"flex"},children:[(0,d.jsx)(a.N,{margin:{inlineend:"four"},children:(0,d.jsxs)("span",{"aria-hidden":Boolean(I),className:da(`${y}-label-content`),style:{flex:1},children:[D,m&&(0,d.jsxs)("span",{className:da("uitk-radio-button-required-asterisk"),"aria-hidden":"true",children:[" ","*"]})]})}),(0,d.jsx)("input",{type:"radio",name:h||(null==f?void 0:f.group),id:c,[b]:C,className:v,onChange:x||(null==f?void 0:f.onChange),value:p,disabled:s,"aria-label":N,"aria-describedby":l?A:""}),(0,d.jsx)("span",{"aria-hidden":"true",className:n?`${k} ${F}`:k,style:{marginTop:8,marginInlineEnd:0}}),I&&(0,d.jsx)("span",{className:"is-visually-hidden",children:I})]}),l&&(0,d.jsx)("span",{className:da(`${y}-description uitk-type-200`),id:A,children:l})]})})})};ga.displayName="InsurtechRightRadio";const ua=r.J1`
  fragment EGDSBasicRadioButtonFragment on EGDSBasicRadioButton {
    __typename
    description
    disabled
    label
    value
  }
`,ma=({data:e,onChange:n,disabled:t,children:a,radioAlignment:i,ariaLabel:r})=>{var l,s;return i===He.RIGHT?(0,d.jsx)(ga,{disabled:e.disabled||t,id:e.value,value:e.value,description:null!==(s=e.description)&&void 0!==s?s:void 0,onChange:n,a11yLabel:r||e.label,children:a||e.label}):(0,d.jsx)(K.P,{disabled:e.disabled||t,id:e.value,value:e.value,description:null!==(l=e.description)&&void 0!==l?l:void 0,onChange:n,a11yLabel:a?e.label:void 0,children:a||e.label})};ma.fragment=ua,ma.displayName="EGDSBasicRadioButton";const ha=r.J1`
  fragment EGDSRadioButtonFragment on EGDSRadioButton {
    __typename
    ...EGDSBasicRadioButtonFragment
  }
  ${ma.fragment}
`,pa=({data:e,disabled:n,onChange:t,children:a,radioAlignment:i,ariaLabel:r})=>"EGDSBasicRadioButton"===e.__typename?(0,d.jsx)(ma,{radioAlignment:i,data:e,disabled:n,onChange:t,ariaLabel:r,children:a}):null;pa.fragment=ha,pa.displayName="InsurtechEGDSRadioButton";const Ia=r.J1`
  fragment EGDSBasicRadioGroupFragment on EGDSBasicRadioGroup {
    __typename
    groupName
    selected
    options {
      ...EGDSRadioButtonFragment
    }
  }
  ${pa.fragment}
`,xa=({data:e,selectedValue:n,errorMessage:t,disabled:a,onChange:i})=>{var r;const l=n&&"-2"!==n?n:null!==(r=e.selected)&&void 0!==r?r:void 0;return(0,d.jsx)(q.S,{errorMessage:t,group:e.groupName,onChange:i,selected:l,defaultChecked:!n,children:e.options.map((e,n)=>(0,d.jsx)(pa,{data:e,disabled:a},n))})};xa.fragment=Ia,xa.displayName="EGDSBasicRadioGroup";const fa=r.J1`
  fragment EGDSRadioGroupFragment on EGDSRadioGroup {
    __typename
    ...EGDSBasicRadioGroupFragment
  }
  ${xa.fragment}
`,ya=({data:e,onChange:n,selectedValue:t,errorMessage:a,disabled:i})=>"EGDSBasicRadioGroup"===e.__typename?(0,d.jsx)(xa,{data:e,onChange:n,errorMessage:a,selectedValue:t,disabled:i}):null;ya.fragment=fa,ya.displayName="EGDSRadioGroup";const Sa=r.J1`
  fragment InsurtechBasicRadioButtonFragment on InsurtechBasicRadioButton {
    item {
      ...EGDSRadioButtonFragment
    }
    action {
      ...InsurtechActionFragment
    }
  }
  ${kn}
  ${pa.fragment}
`,Ea=({data:e,disabled:n,onChange:t})=>{const a=(0,g.useCallback)(()=>{e.action&&(null==t||t(e.action))},[t]);return(0,d.jsx)("div",{children:(0,d.jsx)(pa,{data:e.item,disabled:n,onChange:a})})};Ea.fragment=Sa,Ea.displayName="InsurtechBasicRadioButton";const va=r.J1`
  fragment InsurtechResidencyRadioGroupFragment on InsurtechResidencyRadioGroup {
    radioGroup {
      ...EGDSRadioGroupFragment
    }
    options {
      ...InsurtechBasicRadioButtonFragment
    }
  }
  ${ya.fragment}
  ${Ea.fragment}
`,Da=({data:{radioGroup:e,options:n},onInsurtechAction:t,disabled:a,selectedValue:i})=>{if("EGDSBasicRadioGroup"===e.__typename){var r;const l=null!==(r=null!=i?i:e.selected)&&void 0!==r?r:void 0;return(0,d.jsx)(q.S,{group:e.groupName,selected:l,children:n.map((e,n)=>(0,d.jsx)(Ea,{data:e,disabled:a,onChange:t},n))})}return null};Da.fragment=va,Da.displayName="InsurtechResidencyRadioGroup";const ba=r.J1`
  fragment InsurtechResidencyDialogContentFragment on InsurtechResidencyDialogContent {
    __typename
    graphic {
      ...EGDSGraphicFragment
    }
    header
    residency {
      ...InsurtechResidencyRadioGroupFragment
    }
    disclaimer
    button {
      ...InsurtechButtonFragment
    }
    id
  }
  ${hn.fragment}
  ${ca.fragment}
  ${Da.fragment}
`,ja=({data:e,onInsurtechAction:n})=>{var t,a;const{isLoading:i}=be(),r=e.button,l=null!==(t=null===(a=e.residency)||void 0===a||null===(a=a.radioGroup)||void 0===a?void 0:a.selected)&&void 0!==t?t:void 0,[s,c]=(0,g.useState)({action:null,value:l}),o=s.value===l,u=(0,g.useCallback)(e=>{var t,a;r?c({action:e,value:"InsurtechSetResidencyAction"===e.__typename&&null!==(t=null===(a=e.value)||void 0===a?void 0:a.regionCode)&&void 0!==t?t:void 0}):null==n||n(e)},[r,n]),m=(0,g.useCallback)(()=>{s.action&&(null==n||n(s.action))},[n,s.action]);return(0,d.jsxs)(j.X,{direction:"column",space:"four",children:[e.graphic&&(0,d.jsx)(T.C,{alignSelf:"center",children:(0,d.jsx)("div",{children:(0,d.jsx)(hn,{data:e.graphic})})}),e.header&&(0,d.jsx)(k.M,{size:6,tag:"h4",children:e.header}),(0,d.jsx)("div",{children:e.residency&&(0,d.jsx)(Da,{data:e.residency,onInsurtechAction:u,disabled:i,selectedValue:s.value})}),e.disclaimer&&(0,d.jsx)(A.D,{children:e.disclaimer}),r&&(0,d.jsx)(ca,{data:r,isFullWidth:!0,onClick:m,disabled:i||!s.action||o})]})};ja.fragment=ba,ja.displayName="InsurtechResidencyDialogContent";const Ta=r.J1`
  fragment InsurtechDialogContentFragment on InsurtechDialogContent {
    __typename
    ... on InsurtechTextDialog {
      text
    }
    ...InsurtechBenefitDialogContentFragment
    ...InsurtechResidencyDialogContentFragment
    ...InsurtechPricePresentationDialogContentFragment
  }
  ${Kt.fragment}
  ${ja.fragment}
  ${ea.fragment}
`,Ca=({data:e,onInsurtechAction:n})=>{switch(e.__typename){case"InsurtechTextDialog":return(0,d.jsx)(A.D,{children:e.text});case"InsurtechBenefitDialogContent":return(0,d.jsx)(Kt,{data:e});case"InsurtechResidencyDialogContent":return(0,d.jsx)(ja,{data:e,onInsurtechAction:n});case"InsurtechPricePresentationDialogContent":return(0,d.jsx)(ea,{data:e});default:return null}};Ca.fragment=Ta,Ca.displayName="InsurtechDialogContent";const ka={[$e.BOTTOM]:"bottom",[$e.CENTERED]:"centered",[$e.FULLSCREEN]:"full",[$e.POPOVER]:"popover",[$e.SIDE]:"side"},Fa=r.J1`
  fragment InsurtechSelectionButtonSectionFragment on InsurtechSelectionButtonSection {
    action {
      ...InsurtechButtonFragment
    }
    price {
      ...InsurtechPricePresentationFragment
    }
  }
  ${ca.fragment}
  ${Et.fragment}
`,Aa=({data:{price:e,action:n},onClick:t,layoutDirection:a,priceSize:i})=>{const{isLoading:r}=be();return(0,d.jsxs)(j.X,{justifyContent:"space-between",direction:a,children:[(0,d.jsxs)(T.C,{grow:1,children:[!r&&(0,d.jsx)(Et,{data:e,textProps:{align:"row-reverse"===a?"right":"left",size:i},subStringProps:{size:100}}),r&&(0,d.jsx)("div",{children:(0,d.jsx)(Q,{})})]}),(0,d.jsx)(T.C,{children:(0,d.jsx)(ca,{data:n,onClick:t,disabled:r})})]})};Aa.displayName="InsurtechSelectionButtonSection",Aa.fragment=Fa;const Na=r.J1`
  fragment InsurtechSelectionButtonFooterFragment on InsurtechSelectionButtonFooter {
    selectionSection {
      ...InsurtechSelectionButtonSectionFragment
    }
  }
  ${Aa.fragment}
`,Pa=({data:e,onClick:n})=>{var t;const i=Ge(),r=ue({},null==i||null===(t=i.dialog)||void 0===t?void 0:t.footer);return(0,d.jsx)(a.N,{padding:"six",children:(0,d.jsx)("div",{children:(0,d.jsx)(Aa,{data:e.selectionSection,onClick:n,priceSize:null==r?void 0:r.priceSize})})})};Pa.fragment=Na,Pa.displayName="InsurtechSelectionButtonFooter";const La=r.J1`
  fragment InsurtechClickableElementFragment on InsurtechClickableElement {
    ...InsurtechLinkFragment
    ...InsurtechButtonFragment
  }
  ${Rn.fragment}
  ${ca.fragment}
`,_a=({data:e,onClick:n,disabled:t})=>{switch(e.__typename){case"InsurtechPrimaryButton":case"InsurtechSecondaryButton":case"InsurtechTertiaryButton":return(0,d.jsx)(ca,{data:e,onClick:n,disabled:t});case"InsurtechLink":return(0,d.jsx)(Rn,{data:e,onClick:n});default:return null}};_a.displayName="InsurtechClickableElement",_a.fragment=La;const Ga=r.J1`
  fragment InsurtechSelectionSectionFragment on InsurtechSelectionSection {
    clickableElement {
      ...InsurtechClickableElementFragment
    }
    price {
      ...InsurtechPricePresentationFragment
    }
    selectedText {
      ...InsurtechGraphicStylizedTextFragment
    }
  }
  ${_a.fragment}
  ${Et.fragment}
  ${pt.fragment}
`,Ra=({data:{price:e,clickableElement:n,selectedText:t},onClick:a,layoutDirection:i,selected:r})=>{const{isLoading:l}=be();return(0,d.jsxs)(j.X,{justifyContent:"space-between",direction:i,children:[(0,d.jsxs)(T.C,{grow:1,children:[!l&&(0,d.jsx)(Et,{data:e,flexProps:"row-reverse"===i?{alignItems:"end"}:{alignItems:"start"},subStringProps:{size:100}}),l&&(0,d.jsx)("div",{children:(0,d.jsx)(Q,{})})]}),(0,d.jsx)(T.C,{alignSelf:"center",children:(0,d.jsx)("div",{children:r&&t?(0,d.jsx)(pt,{size:400,data:t}):(0,d.jsx)(_a,{data:n,onClick:a,disabled:l})})})]})};Ra.displayName="InsurtechSelectionSection",Ra.fragment=Ga;const $a=r.J1`
  fragment InsurtechSelectionFooterFragment on InsurtechSelectionFooter {
    selectionSection {
      ...InsurtechSelectionSectionFragment
    }
  }
  ${Ra.fragment}
`,Oa=({data:{selectionSection:e},onClick:n})=>(0,d.jsx)(a.N,{padding:"six",children:(0,d.jsx)("div",{children:(0,d.jsx)(Ra,{data:e,onClick:n})})});Oa.fragment=$a,Oa.displayName="InsurtechSelectionFooter";const za=r.J1`
  fragment InsurtechDialogFooterFragment on InsurtechDialogFooter {
    ...InsurtechSelectionButtonFooterFragment
    ...InsurtechSelectionFooterFragment
  }
  ${Pa.fragment}
  ${Oa.fragment}
`,Ba=({data:e,onClick:n})=>{switch(e.__typename){case"InsurtechSelectionButtonFooter":return(0,d.jsx)(Pa,{data:e,onClick:n});case"InsurtechSelectionFooter":return(0,d.jsx)(Oa,{data:e,onClick:n});default:return null}};Ba.fragment=za,Ba.displayName="InsurtechDialogFooter";const wa=r.J1`
  fragment InsurtechBenefitDialogHeadingFragment on InsurtechBenefitDialogHeading {
    graphic {
      ...EGDSGraphicFragment
    }
    header
    accessibilityHeader
    subHeader {
      ...InsurtechSpannableTextFragment
    }
  }
  ${Tt.fragment}
  ${hn.fragment}
`,Ma={blockstart:"six",blockend:"eight",inline:"six"},Ja=({data:e,headingStyle:n,callback:t})=>{var i,r,l;const{isLoading:o}=be(),{benefitDialog:g}=Ge(),u=ue(ue({},n),null==g?void 0:g.heading);return(0,d.jsx)(a.N,{margin:(null==u?void 0:u.margin)||Ma,children:(0,d.jsx)("div",{children:(0,d.jsxs)(s.w,{space:(null==u?void 0:u.space)||"two",alignContent:"center",children:[e.graphic&&(0,d.jsx)(c.T,{children:(0,d.jsx)(j.X,{alignItems:"center",justifyContent:"center",children:(0,d.jsx)(a.N,{margin:null==g||null===(i=g.headingGraphic)||void 0===i?void 0:i.margin,children:(0,d.jsx)("div",{children:(0,d.jsx)(hn,{data:e.graphic})})})})}),o?(0,d.jsx)(j.X,{alignItems:"center",justifyContent:"center",children:(0,d.jsx)(Q,{numberOfLines:2})}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c.T,{children:(0,d.jsx)(k.M,{tag:null==u?void 0:u.tag,"aria-label":null!==(r=e.accessibilityHeader)&&void 0!==r?r:void 0,size:null!==(l=null==u?void 0:u.size)&&void 0!==l?l:5,typeStyle:et((null==u?void 0:u.size)||5),align:(null==n?void 0:n.align)||"center",children:e.header})}),e.subHeader&&(0,d.jsx)(c.T,{children:(0,d.jsx)(Tt,{data:e.subHeader,callback:t,align:"center"})})]})]})})})};Ja.fragment=wa,Ja.displayName="InsurtechBenefitDialogHeading";const Ha=r.J1`
  fragment InsurtechDialogBasicHeadingFragment on InsurtechDialogBasicHeading {
    heading
  }
`,Va=({data:e})=>(0,d.jsx)(k.M,{children:e.heading});Va.fragment=Ha,Va.displayName="InsurtechDialogBasicHeading";const Ua=r.J1`
  fragment InsurtechDialogHeadingFragment on InsurtechDialogHeading {
    __typename
    ...InsurtechDialogBasicHeadingFragment
    ...InsurtechBenefitDialogHeadingFragment
  }
  ${Va.fragment}
  ${Ja.fragment}
`,Wa=({data:e,headingStyle:n,callback:t})=>{switch(e.__typename){case"InsurtechDialogBasicHeading":return(0,d.jsx)(Va,{data:e});case"InsurtechBenefitDialogHeading":return(0,d.jsx)(Ja,{data:e,callback:t,headingStyle:n});default:return null}};Wa.fragment=Ua,Wa.displayName="InsurtechDialogHeading";const Ya=r.J1`
  fragment InsurtechDialogFragment on InsurtechDialog {
    dialogId
    onOpenAnnounceMessage
    onCloseAnnounceMessage
    sheetType
    dialogHeading {
      ...InsurtechDialogHeadingFragment
    }
    dialogFooter {
      ...InsurtechDialogFooterFragment
    }
    dialogContent {
      ...InsurtechDialogContentFragment
    }
    dialog {
      ...EGDSDialogFragment
    }
    egClickStreamAnalytics {
      ...InsurtechClickstreamAnalyticsDataFragment
    }
  }
  ${Wa.fragment}
  ${Ca.fragment}
  ${Ba.fragment}
  ${Le.fragment}
  ${ve}
`,Xa=({data:e,headingStyle:n,onInsurtechAction:t})=>(0,d.jsx)(d.Fragment,{children:e&&(0,d.jsx)(Wa,{data:e,callback:t,headingStyle:n})}),Ka=({data:e,onInsurtechAction:n})=>(0,d.jsx)(d.Fragment,{children:e&&(0,d.jsx)(Ba,{data:e,onClick:n})}),qa=(0,g.forwardRef)((e,n)=>{const{data:t,onInsurtechAction:a,onConfirmAction:i,sheetHeight:r,trackData:l,headingStyle:s}=e,{dialogId:c}=t,{dialogState:o,nonDismissibleDialogIds:u}=Ee(),m=pe(),h=((e,n)=>!n||!n.has(e))(c,u),[I,S,E]=(0,f.useDialog)(`${c}`,void 0,h),{value:v}=(null==o?void 0:o.find(({id:e})=>e===c))||{},D=(0,g.useCallback)(()=>{I&&S.closeDialog()},[S,I]);(0,g.useImperativeHandle)(n,()=>({closeDialog:D}));const b=e=>{const n=null!=l?l:t.egClickStreamAnalytics;n&&(null==m||m(e,n))},j=e=>(0,d.jsx)(Le,{sheetType:e,data:t.dialog,closeDialog:D,confirmAction:i,sheetHeight:r,header:(0,d.jsx)(Xa,{data:t.dialogHeading,onInsurtechAction:a,headingStyle:s}),content:(0,d.jsx)(Ca,{data:t.dialogContent,onInsurtechAction:a}),footer:(null==v?void 0:v.hideFooter)?void 0:(0,d.jsx)(Ka,{data:t.dialogFooter,onInsurtechAction:a})});return(0,d.jsx)(p.K,{isVisible:I,closeCallback:()=>{t.onCloseAnnounceMessage&&(0,x.liveAnnounce)(t.onCloseAnnounceMessage,x.Level.POLITE),b(se);const e=null!=l?l:t.egClickStreamAnalytics;if(e){const n=(e||[]).filter(({referenceId:e})=>e===t.dialogId);null==m||m(ne,n)}},openCallback:()=>{t.onOpenAnnounceMessage&&(0,x.liveAnnounce)(t.onOpenAnnounceMessage,x.Level.POLITE),b(le)},children:(0,d.jsx)(E,{children:(0,d.jsxs)(y.LM,{children:[(0,d.jsx)(y.NP,{children:j((T="full",C=t.sheetType,C&&ka[C]||T))}),(0,d.jsx)(y.rw,{children:j("centered")})]})})});var T,C});qa.fragment=Ya,qa.displayName="InsurtechDialog";const Qa={__typename:"ClickStreamEventConstants",EVENT_NAME:"priming_card_query.failed",EVENT_TYPE:Z.OUTCOME,EVENT_VERSION:"1.0.0"},Za=e=>[e.placementContext.lob,e.placementContext.packageType?`PACKAGE_TYPE_${e.placementContext.packageType}`:void 0,e.placementContext.path,e.placementContext.placement,e.productType].filter(Boolean).join("_"),ei=r.J1`
  fragment EGClickStreamEventFragment on EGClickstreamEvent {
    __typename
    eventCategory
    eventName
    eventType
    eventVersion
    actionLocation
  }
`,ni=r.J1`
  fragment InsurtechDialogTriggerFragment on InsurtechDialogTrigger {
    action {
      ...InsurtechLinkFragment
    }
    dialogId
    dialog {
      ...EGDSDialogFragment
    }
    dialogContent {
      ...InsurtechDialogContentFragment
    }
  }
  ${Rn.fragment}
  ${Le.fragment}
  ${Ca.fragment}
`,ti=({data:e,inline:n,size:t})=>{const[a,i,r]=(0,f.useDialog)(`${e.dialogId}`),l=(0,g.useCallback)(()=>{i.openDialog()},[i]),s=(0,g.useCallback)(()=>{a&&i.closeDialog()},[i,a]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p.K,{isVisible:a,children:(0,d.jsx)(r,{children:(0,d.jsx)(Le,{data:e.dialog,closeDialog:s,content:(0,d.jsx)(Ca,{data:e.dialogContent})})})}),(0,d.jsx)(Rn,{data:e.action,onClick:l,inline:n,size:t})]})};ti.fragment=ni,ti.displayName="InsurtechDialogTrigger";const ai=r.J1`
  fragment InsurtechStandardLinkWrapperFragment on InsurtechStandardLinkWrapper {
    link {
      ...EGDSStandardLinkFragment
    }
    egClickStreamAnalytics {
      ...InsurtechClickstreamAnalyticsDataFragment
    }
  }
  ${In.fragment}
  ${ve}
`,ii=({data:e,trackData:n,linkSize:t="medium"})=>{var a;return(0,d.jsx)(In,{data:e.link,trackData:null!==(a=e.egClickStreamAnalytics)&&void 0!==a?a:n,linkSize:t})};ii.displayName="InsurtechStandardLinkWrapper",ii.fragment=ai;const ri=r.J1`
  fragment InsurtechTextWrapperElementFragment on InsurtechTextWrapperElement {
    ...InsurtechSpannableTextFragment
    ...InsurtechStandardLinkWrapperFragment
    ...InsurtechGraphicStylizedTextFragment
  }
  ${Tt.fragment}
  ${ii.fragment}
  ${pt.fragment}
`,li=({data:e,onClick:n,size:t,align:a})=>{switch(e.__typename){case"InsurtechSpannableText":return(0,d.jsx)(Tt,{data:e,callback:n,fixedSize:t,align:a});case"InsurtechStandardLinkWrapper":return(0,d.jsx)(ii,{data:e});case"InsurtechGraphicStylizedText":return(0,d.jsx)(pt,{data:e});default:return null}};li.displayName="InsurtechTextWrapperElement",li.fragment=ri;const si=r.J1`
  fragment InsurtechTextWrapperFragment on InsurtechTextWrapper {
    text {
      ...InsurtechTextWrapperElementFragment
    }
  }
  ${li.fragment}
`,ci=({data:{text:e},onClick:n,size:t})=>(0,d.jsx)(li,{data:e,onClick:n,size:t});ci.displayName="InsurtechTextWrapper",ci.fragment=si;const oi=r.J1`
  fragment BasicPrimingCardFragment on InsurtechPrimingCard {
    header {
      ...EGDSHeadingFragment
    }
    description
    displayAnalytics {
      ...EGClickStreamEventFragment
    }
    graphic {
      ...EGDSGraphicFragment
    }
    dialogTrigger {
      ...InsurTechExperienceDialogTriggerFragment
    }
    footer {
      ...InsurtechTextWrapperElementFragment
    }
    egClickStreamAnalytics {
      ...InsurtechClickstreamAnalyticsDataFragment
    }
  }
  ${hn.fragment}
  ${at.fragment}
  ${ei}
  ${Xn.fragment}
  ${ve}
  ${li.fragment}
`,di={inline:"three"},gi=e=>{const{data:n,backgroundTheme:t}=e,{header:i,footer:r,description:l,graphic:s,displayAnalytics:c,dialogTrigger:o,egClickStreamAnalytics:u}=n,m=null!=t?t:N.g5.HIGHLIGHT,h=pe();return(0,g.useEffect)(()=>{null==c||c.forEach(e=>{h(e)})},[]),(0,d.jsx)(P.g,{border:!0,padded:!0,backgroundTheme:m,children:(0,d.jsxs)(j.X,{alignItems:"center",children:[s&&(0,d.jsx)(T.C,{children:(0,d.jsx)(hn,{data:s})}),(0,d.jsx)(T.C,{grow:1,children:(0,d.jsx)(a.N,{margin:di,children:(0,d.jsxs)("div",{children:[i&&(0,d.jsx)(at,{data:i,size:6,tag:"h6"}),l&&(0,d.jsx)(A.D,{size:300,weight:"regular",theme:"standard",spacing:"two",children:l}),r&&r.length>0&&(0,d.jsx)(a.N,{margin:{blockstart:"four"},children:(0,d.jsx)("div",{children:r.map((e,n)=>(0,d.jsx)(li,{data:e},n))})})]})})}),o&&(0,d.jsx)(T.C,{children:(0,d.jsx)(a.N,{children:(0,d.jsx)("div",{children:(0,d.jsx)(Xn,{data:o,trackData:u,isCardLink:!0})})})})]})})};gi.displayName="BasicPrimingCard",gi.fragment=oi;let ui=function(e){return e.BASIC_PRIMING_CARD="BASIC_PRIMING_CARD",e.DETAILED_PRIMING_CARD="DETAILED_PRIMING_CARD",e}({});const mi={[ui.BASIC_PRIMING_CARD]:gi,[ui.DETAILED_PRIMING_CARD]:gi},hi=r.J1`
  query InsurtechPrimingCardQuery(
    $context: ContextInput!
    $placement: InsurTechComponentPlacementInput!
    $insurtechSearchCriteria: InsurtechSearchCriteriaInput
  ) {
    insurtechPriming(context: $context) {
      card(placement: $placement, insurtechSearchCriteria: $insurtechSearchCriteria) {
        ...BasicPrimingCardFragment
        viewType
        containerId
      }
      dialogs(placement: $placement) {
        ...InsurtechDialogFragment
      }
    }
  }
  ${gi.fragment}
  ${qa.fragment}
`,pi={inline:"three",blockend:"six",blockstart:"three"},Ii=({children:e,spacingProps:n})=>n?(0,d.jsx)(a.N,ue(ue({},n),{},{children:(0,d.jsx)("div",{children:e})})):(0,d.jsx)(d.Fragment,{children:e}),xi=()=>(0,d.jsx)(a.N,{padding:pi,children:(0,d.jsx)("div",{children:(0,d.jsx)(Q,{})})});let fi=function(e){return e.SUCCESS="SUCCESS",e.LOADING="LOADING",e.ERROR="ERROR",e.EMPTY="EMPTY",e}({});const yi={benefitDialog:{heading:{size:4,tag:"h4"},content:{benefitSection:{list:{size:1}},elements:{spacing:{blockstart:"two"}}}}},Si=e=>{const{context:n}=(0,l.R)(),{inputs:t,backgroundTheme:a,spacingProps:i,showSkeletonView:s,onError:c,trackStatusChange:o}=e,g=pe(),u=ue(ue({},t),{},{context:n}),{data:m,error:h,loading:p}=(0,r.IT)(hi,{context:{shouldLogPerformance:!0},variables:u,onError:()=>{var e;null==g||g((e=u.placement,ue(ue({},Qa),{},{ACTION_LOCATION:Za(e)}))),null==c||c(),null==o||o(fi.ERROR)},onCompleted:e=>{var n;const t=null==e||null===(n=e.insurtechPriming)||void 0===n?void 0:n.card;t?null==o||o(fi.SUCCESS,t.containerId):null==o||o(fi.EMPTY)}}),I=null==m?void 0:m.insurtechPriming.card;if(h)return null;if(p&&s)return null==o||o(fi.LOADING),(0,d.jsx)(Ii,{spacingProps:i,children:(0,d.jsx)(xi,{})});if(p||!I)return null;const x=null==m?void 0:m.insurtechPriming.dialogs,f=mi[I.viewType];return(0,d.jsx)(_e.Provider,{value:yi,children:(0,d.jsxs)(Se,{children:[(0,d.jsx)(Ii,{spacingProps:i,children:(0,d.jsx)(f,{data:I,backgroundTheme:a})}),null==x?void 0:x.map((e,n)=>(0,d.jsx)(qa,{data:e},n))]})})};Si.displayName="sharedui-InsurtechPriming"}}]);
//# sourceMappingURL=https://bernie-assets.s3.us-west-2.amazonaws.com/landing-pwa/shared-ui-retail-insurtech-priming-card.7b60d25f4ea3ed63068b.js.map