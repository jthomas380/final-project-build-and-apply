/*@license For license information please refer to shared-ui-retail-affiliates-stripe.licenses.txt*/
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[2276],{96799:function(e,t,n){n.d(t,{o:function(){return oi}});var i=n(20209),a=n(28022),s=n(66104),l=n(33998),r=n(82308),o=n(64155),c=n(85361),d=n(21317),f=n(716),u=n(96540),g=n(10044),m=n(74848),p=n(38955),h=n(77511),x=n(4648),A=n(56504),v=n(5846),y=n(86047),j=n(62403),C=n(33777),S=n(43819),E=n(84299),k=n(26129),I=n(49642),b=n(21348),T=n(96906),F=n(66162),L=n(39196),R=n(55009),w=n(22868),N=n(74276),D=n(1270),_=n(58646),B=n(39128),$=n(12285),M=n(54470),O=n(61764),P=n(53519),V=n(83332),G=n(66501),U=n(84683),z=n(69714),J=n(35784),H=n(33694),X=n(9006),Y=n(68336),q=n(97172),K=n(32507),W=n(4561),Q=n(21330),Z=n(65675),ee=n(52100),te=n(2276),ne=n(52861),ie=n(98898),ae=n(69185),se=n(30230),le=n(2746),re=n(22682),oe=n(57536),ce=n(63912);const de=i.J1`
  fragment EGDSIconFragment on Icon {
    id
    description
    token
    theme
    size
  }
`;function fe(e){if(e)return e}function ue(e){var t;return e&&null!==(t=g.So[e])&&void 0!==t?t:g.So.MEDIUM}const ge=({data:{id:e,description:t,token:n,theme:i,size:a}})=>{const s=(0,u.useMemo)(()=>fe(i),[i]);return(0,m.jsx)(g.LD,{name:n,size:(0,u.useMemo)(()=>ue(a),[a]),theme:s,title:t,id:e})};ge.displayName="AffiliatesEGDSIcon",ge.fragment=de;const me=i.J1`
  fragment EGDSBannerFragment on UIBanner {
    heading
    message
    icon {
      ...EGDSIconFragment
    }
  }

  ${ge.fragment}
`,pe=({data:{heading:e,message:t,icon:n}})=>(0,m.jsx)(a.O,{children:(0,m.jsxs)(s.X,{alignItems:"center",space:"three",children:[n&&(0,m.jsx)(l.C,{children:(0,m.jsx)(r.N,{padding:{inline:"two"},children:(0,m.jsx)("div",{children:(0,m.jsx)(ge,{data:n})})})}),(0,m.jsx)(l.C,{children:(0,m.jsxs)("div",{children:[(0,m.jsx)(c.M,{tag:"h3",size:7,children:e}),(0,m.jsx)(f.D,{children:t})]})})]})});pe.displayName="AffiliatesEGDSBanner",pe.fragment=me;let he=function(e){return e.FOUR_ONE="FOUR_ONE",e.FOUR_THREE="FOUR_THREE",e.ONE_ONE="ONE_ONE",e.SIXTEEN_NINE="SIXTEEN_NINE",e.THREE_FOUR="THREE_FOUR",e.THREE_TWO="THREE_TWO",e.TWENTY_ONE_NINE="TWENTY_ONE_NINE",e}({}),xe=function(e){return e.EXTRA_SMALL="EXTRA_SMALL",e.LARGE="LARGE",e.MEDIUM="MEDIUM",e.MEDIUM_LARGE="MEDIUM_LARGE",e.SMALL="SMALL",e.XLARGE="XLARGE",e}({}),Ae=function(e){return e.ACTIVITIES="ACTIVITIES",e.CAR="CAR",e.CRUISES="CRUISES",e.FLIGHT="FLIGHT",e.GROUNDTRANSFERS="GROUNDTRANSFERS",e.LODGING="LODGING",e.PACKAGES="PACKAGES",e.RAILS="RAILS",e.UNCLASSIFIED="UNCLASSIFIED",e}({}),ve=function(e){return e.LANDSCAPE="LANDSCAPE",e.PORTRAIT="PORTRAIT",e}({}),ye=function(e){return e.CFAR_DETAILS="CFAR_DETAILS",e.CHECKOUT="CHECKOUT",e.CHECKOUT_ERROR="CHECKOUT_ERROR",e.CONFIRMATION="CONFIRMATION",e.DETAILS="DETAILS",e.ENTRY="ENTRY",e.FEATURES="FEATURES",e.INSURANCE_DETAILS="INSURANCE_DETAILS",e.ITINERARY="ITINERARY",e.PAYMENT_ERROR="PAYMENT_ERROR",e.POST_BOOKING="POST_BOOKING",e.SEARCH_RESULTS="SEARCH_RESULTS",e.SYSTEM="SYSTEM",e.USER="USER",e}({}),je=function(e){return e.EMPHASIS="EMPHASIS",e.INVERSE="INVERSE",e.LOYALTY="LOYALTY",e.NEGATIVE="NEGATIVE",e.POSITIVE="POSITIVE",e.PRIMARY="PRIMARY",e.SECONDARY="SECONDARY",e}({});const Ce=i.J1`
  fragment EGDSImageFragment on Image {
    description
    url
    aspectRatio
  }
`;const Se=({children:e,data:{description:t,url:n,aspectRatio:i}})=>(0,m.jsxs)(p.M,{ratio:(0,u.useMemo)(()=>(he.THREE_TWO,p.l.R3_2),[i]),roundcorner:!0,children:[(0,m.jsx)(h.F,{placeholderImage:!0,alt:t,src:n}),e]});function Ee(e){return Ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ee(e)}function ke(e){var t=function(e,t){if("object"!=Ee(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=Ee(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==Ee(t)?t:t+""}function Ie(e,t,n){return(t=ke(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function Te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?be(Object(n),!0).forEach(function(t){Ie(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):be(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}Se.displayName="AffiliatesEGDSImage",Se.fragment=Ce;const Fe=i.J1`
  fragment EGDSMarkFragment on Mark {
    id
    description
    orientation
    size
    token
    url {
      value
    }
  }
`;const Le=({data:{id:e,description:t,orientation:n,size:i,token:a,url:s}})=>{const l=(0,u.useMemo)(()=>function(e){if(!e)return A.K.MEDIUM;if(A.K[e])return A.K[e];const t=parseInt(e,10);return Number.isNaN(t)||!A.G[t]?A.K.MEDIUM:t}(i),[i]),r=(0,u.useMemo)(()=>(ve.LANDSCAPE,"landscape"),[n]);return a||(null==s?void 0:s.value)?(0,m.jsx)(x.D,Te({},{id:e,description:t,orientation:r,size:l,name:a,url:null==s?void 0:s.value})):null};Le.displayName="AffiliatesEGDSMark",Le.fragment=Fe;const Re=i.J1`
  fragment AffiliatesInteractionAnalyticEventFragment on AffiliatesInteractionAnalyticEvent {
    eventName
    eventVersion
    payload
  }
`,we=i.J1`
  fragment AffiliatesImpressionAnalyticEventFragment on AffiliatesImpressionAnalyticEvent {
    eventName
    eventVersion
    payload
  }
`,Ne=i.J1`
  fragment AffiliatesCopyLinkActionFragment on AffiliatesCopyLinkAction {
    url
    toast {
      ... on EGDSToast {
        egdsElementId
        text
      }
    }
    analytics {
      ...AffiliatesInteractionAnalyticEventFragment
    }
  }
  ${Re}
`,De=i.J1`
  fragment AffiliatesCreateLinkActionFragment on AffiliatesCreateLinkAction {
    analytics {
      ...AffiliatesInteractionAnalyticEventFragment
    }
    unexpectedErrorMessage {
      ...EGDSBannerFragment
    }
  }

  ${Re}
  ${pe.fragment}
`,_e=i.J1`
  fragment AffiliatesOutwardLinkActionFragment on AffiliatesOutwardLinkAction {
    url
    analytics {
      ...AffiliatesInteractionAnalyticEventFragment
    }
  }

  ${Re}
`,Be=i.J1`
  fragment AffiliatesStandardLinkFragment on AffiliatesStandardLink {
    text
    subtext
    disabled
  }
`,$e=i.J1`
  fragment AffiliatesViewStatsActionFragment on AffiliatesViewStatsAction {
    analytics {
      ...AffiliatesInteractionAnalyticEventFragment
    }
    unexpectedErrorMessage {
      ...EGDSBannerFragment
    }
  }

  ${Re}
  ${pe.fragment}
`,Me=i.J1`
  fragment AffiliatesTextInputFieldFragment on AffiliatesTextInputField {
    handle {
      egdsElementId
      label
      placeholder
      validations {
        ...EGDSRequiredInputValidationFragment
        ...EGDSRegexInputValidationFragment
      }
    }
    selectionAction {
      ... on AffiliatesTextFieldSelectionAction {
        analytics {
          ...AffiliatesInteractionAnalyticEventFragment
        }
      }
    }
  }
  ${i.J1`
  fragment EGDSRequiredInputValidationFragment on EGDSRequiredInputValidation {
    errorMessage
  }
`}
  ${i.J1`
  fragment EGDSRegexInputValidationFragment on EGDSRegexInputValidation {
    errorMessage
    pattern
  }
`}
  ${Re}
`,Oe=i.J1`
  fragment AffiliatesButtonFragment on AffiliatesButton {
    button {
      icon {
        id
        token
        description
        size
        theme
      }
      primary
      accessibility
      disabled
    }
    showActionProgress
  }
`,Pe={UIPrimaryButton:y.y,UISecondaryButton:j.y,UITertiaryButton:C.q,EGDSOverlayButton:k.M},Ve=({onClickHandler:e,className:t,type:n,disabled:i,inProgress:a,data:{button:s,showActionProgress:l}})=>{var o;const c=l&&a,d=(0,u.useCallback)(()=>{null==e||e()},[e]),f=s.icon,p={onClick:d,className:t,type:n,disabled:i};return(0,m.jsxs)(null!==(o=Pe[s.__typename])&&void 0!==o?o:j.y,Te(Te({},p),{},{children:[f&&(0,m.jsx)(g.LD,{name:f.token,size:ue(f.size),theme:fe(f.theme),title:f.description,id:f.id}),c?(0,m.jsx)(r.N,{padding:{blockstart:"one"},children:(0,m.jsx)("div",{children:(0,m.jsx)(b.v,{isSmall:!0,isDarkBackground:"UIPrimaryButton"===s.__typename})})}):s.primary]}))};Ve.displayName="AffiliatesButton",Ve.fragment=Oe;const Ge=i.J1`
  fragment AffiliatesCopyLinkButtonFragment on AffiliatesButton {
    ...AffiliatesButtonFragment
    action {
      ...AffiliatesCopyLinkActionFragment
    }
  }

  ${Ve.fragment}
  ${Ne}
`,Ue=i.J1`
  fragment AffiliatesIconTextFragment on AffiliatesIconText {
    text {
      ... on EGDSStylizedText {
        size
        text
        theme
        weight
      }
    }
    graphic {
      ... on Icon {
        id
        description
        token
        theme
        size
      }
    }
  }
`;const ze=({className:e,data:{text:t,graphic:n}})=>{const i=t.text,a=(0,u.useMemo)(()=>(t.size,300),[t.size]),l=(0,u.useMemo)(()=>t.theme===je.POSITIVE?"positive":"default",[t.theme]),r=(0,u.useMemo)(()=>{t.weight},[t.weight]),o=Te(Te({},n),{},{size:xe.EXTRA_SMALL});return i?(0,m.jsxs)(s.X,{space:"two",className:e,alignContent:"center",children:[o&&(0,m.jsx)(ge,{data:o}),(0,m.jsx)(f.D,{size:a,theme:l,weight:r,inline:!0,children:i})]}):null};ze.displayName="AffiliatesIconText",ze.fragment=Ue;const Je={A:Ae.ACTIVITIES,C:Ae.CAR,CR:Ae.CRUISES,F:Ae.FLIGHT,GT:Ae.GROUNDTRANSFERS,H:Ae.LODGING,P:Ae.PACKAGES,R:Ae.RAILS,U:Ae.UNCLASSIFIED},He={0:ye.SYSTEM,10:ye.ENTRY,20:ye.SEARCH_RESULTS,30:ye.DETAILS,40:ye.CHECKOUT,50:ye.CHECKOUT_ERROR,60:ye.PAYMENT_ERROR,70:ye.CONFIRMATION,80:ye.POST_BOOKING,90:ye.USER,500:ye.FEATURES};const Xe=e=>navigator.clipboard.writeText(e),Ye=/\/(?:ho|.*.?h)?(\d+)(?:.*)?(?:\/(?=$))?$/i,qe="expediaPropertyId";function Ke(e,t){var n,i;return null!==(n=null===(i=e.pathname.match(t))||void 0===i?void 0:i[1])&&void 0!==n?n:void 0}function We(e,t){var n;return null!==(n=e.searchParams.get(t))&&void 0!==n?n:void 0}function Qe(e,t,n){if(e&&n.lineOfBusiness===Ae.LODGING&&n.pageLocation===ye.DETAILS){const n=new URL(e);switch(t.brand){case"expedia":case"wotif":return function(e){return{egPropertyId:Ke(e,Ye)}}(n);case"hotels":return function(e){return{egPropertyId:We(e,qe),hotelsPropertyId:Ke(e,Ye)}}(n);case"vrbo":return function(e){return{egPropertyId:We(e,qe)}}(n);default:return{}}}return{}}const Ze=e=>e.replace(/(https?:\/\/)?(www\.)?/,""),et=()=>{const e=(0,F.iQ)();return{trackEvent:(0,u.useCallback)(t=>{try{e((e=>{const{payload:t,eventName:n,eventVersion:i,__typename:a}=e;try{const e=JSON.parse(t);return Object.values(e.events[n]).find(e=>e.event_data.event.event_version===i).event_data}catch(s){return{event:{event_name:n,event_type:a,event_version:i}}}})(t))}catch(n){}},[e])}};function tt(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(t.includes(i))continue;n[i]=e[i]}return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const nt=["data"],it=i.J1`
  fragment AffiliatesInlineLinkFragment on AffiliatesInlineLink {
    text
    action {
      ...AffiliatesOutwardLinkActionFragment
    }
  }

  ${_e}
`,at=e=>{let{data:{action:t,text:n}}=e,i=tt(e,nt);const{url:a,analytics:s}=t,{trackEvent:l}=et();return(0,m.jsx)(f.D,Te(Te({},i),{},{inline:!0,children:(0,m.jsx)(T.i,{inline:!0,children:(0,m.jsx)("a",{href:a,target:"_blank",onClick:()=>{s&&s.forEach(l)},rel:"noopener",children:n})})}))};at.displayName="AffiliatesInlineLink",at.fragment=it;const st=["data"],lt=i.J1`
  fragment AffiliatesTextFragment on AffiliatesText {
    text
  }
`,rt=e=>{let{data:{text:t}}=e;return(0,m.jsx)(f.D,Te(Te({inline:!0},tt(e,st)),{},{children:t}))};rt.displayName="AffiliatesText",rt.fragment=lt;const ot=["data"],ct=i.J1`
  fragment AffiliatesSpannableTextFragment on AffiliatesSpannableText {
    inlineContent {
      ...AffiliatesTextFragment
      ...AffiliatesInlineLinkFragment
    }
  }

  ${rt.fragment}
  ${at.fragment}
`,dt=e=>{let{data:{inlineContent:t}}=e,n=tt(e,ot);return(0,m.jsx)("div",{children:t.map((e,t)=>"AffiliatesInlineLink"===e.__typename?(0,m.jsx)(at,Te({data:e},n),t):(0,m.jsx)(rt,Te({data:e},n),t))})};dt.displayName="AffiliatesSpannableText",dt.fragment=ct;const ft=()=>(0,m.jsx)(s.X,{alignItems:"stretch","data-cy":"sheet-loader",children:(0,m.jsx)(l.C,{children:(0,m.jsx)(L.P,{type:"absolute",position:{top:"center",left:"center"},children:(0,m.jsx)(b.v,{})})})}),ut=({data:e})=>(0,m.jsx)(L.P,{type:"absolute",position:{top:"center"},cloneElement:!0,children:(0,m.jsx)(r.N,{padding:{inline:"six"},children:(0,m.jsx)("div",{children:(0,m.jsx)(pe,{data:e})})})}),gt=i.J1`
  mutation CloseToolbarMutation($context: ContextInput!, $clientContext: AffiliatesClientContextInput!) {
    closeAffiliateToolbar(context: $context, clientContext: $clientContext) {
      ...CloseToolbarSuccessResponseFragment
      ...CloseToolbarFailureResponseFragment
    }
  }

  ${i.J1`
  fragment CloseToolbarSuccessResponseFragment on AffiliatesCloseToolbarSuccessResponse {
    impressionAnalytics {
      ...AffiliatesImpressionAnalyticEventFragment
    }
  }

  ${pe.fragment}
  ${we}
`}
  ${i.J1`
  fragment CloseToolbarFailureResponseFragment on AffiliatesCloseToolbarFailureResponse {
    banner {
      ...EGDSBannerFragment
    }
    impressionAnalytics {
      ...AffiliatesImpressionAnalyticEventFragment
    }
  }

  ${pe.fragment}
  ${we}
`}
`;var mt=function(e){return e.CLOSE_TOOLBAR="affiliates-close-toolbar-dialog",e}(mt||{}),pt=function(e){return e.NONE="NONE",e.PAGE="PAGE",e.PARTNER="PARTNER",e}(pt||{}),ht=function(e){return e.NONE="NONE",e.LINK="LINK",e.STATS="STATS",e}(ht||{});const xt=["children"];var At=function(e){return e[e.NONE=0]="NONE",e[e.ERROR=1]="ERROR",e[e.LOADING=2]="LOADING",e[e.DATA=3]="DATA",e}(At||{});const vt={clientContext:{pageId:"",pageLocation:ye.ENTRY,lineOfBusiness:Ae.UNCLASSIFIED},propertyContext:{egPropertyId:"",hotelsPropertyId:""},targetUrl:"",linkSheetTriggerRef:(0,u.createRef)(),statsSheetTriggerRef:(0,u.createRef)(),activeMenu:pt.NONE,activeSheet:ht.NONE,linkSheetContent:{type:At.NONE},statsSheetContent:{type:At.NONE},isToolbarClosed:!1,setActiveMenu:void 0,setActiveSheet:void 0,toggleActiveMenu:void 0,setLinkSheetContent:void 0,setStatsSheetContent:void 0,setIsToolbarClosed:void 0},yt=(0,u.createContext)(vt),jt=e=>{let{children:t}=e,n=tt(e,xt);const{linkSheetTriggerRef:i,statsSheetTriggerRef:a}=vt,[s,l]=(0,u.useState)(vt.activeMenu),[r,o]=(0,u.useState)(vt.activeSheet),[c,d]=(0,u.useState)(vt.linkSheetContent),[f,g]=(0,u.useState)(vt.statsSheetContent),[p,h]=(0,u.useState)(vt.isToolbarClosed),x=(0,u.useCallback)(e=>{l(t=>t===e?pt.NONE:e)},[]),A=(0,u.useMemo)(()=>({clientContext:n.clientContext,propertyContext:n.propertyContext,targetUrl:n.targetUrl,linkSheetTriggerRef:i,statsSheetTriggerRef:a,activeMenu:s,activeSheet:r,linkSheetContent:c,statsSheetContent:f,isToolbarClosed:p,setActiveMenu:l,setActiveSheet:o,toggleActiveMenu:x,setLinkSheetContent:d,setStatsSheetContent:g,setIsToolbarClosed:h}),[n.clientContext,n.propertyContext,n.targetUrl,i,a,s,r,c,f,p,x]);return(0,m.jsx)(yt.Provider,{value:A,children:t})},Ct=()=>(0,u.useContext)(yt),St=i.J1`
  fragment AffiliatesSwitchFragment on AffiliatesSwitch {
    switch {
      ... on EGDSStandardSwitch {
        enabled
        checked
        checkedLabel
        uncheckedLabel
        checkedDescription
        uncheckedDescription
        checkedAccessibilityLabel
        uncheckedAccessibilityLabel
      }
    }
    onAction {
      ...AffiliatesSwitchActionFragment
    }
    offAction {
      ...AffiliatesSwitchActionFragment
    }
  }

  ${i.J1`
  fragment AffiliatesSwitchActionFragment on AffiliatesSwitchAction {
    ... on AffiliatesShowVanityLinkFormAction {
      analytics {
        ...AffiliatesInteractionAnalyticEventFragment
      }
    }
    ... on AffiliatesShowDescriptiveLinkFormAction {
      analytics {
        ...AffiliatesInteractionAnalyticEventFragment
      }
    }
    ... on AffiliatesShowCreateTagFormAction {
      analytics {
        ...AffiliatesInteractionAnalyticEventFragment
      }
    }
  }

  ${Re}
`}
`,Et=({data:e,isChecked:t,onToggle:n})=>{const{trackEvent:i}=et(),{switch:a,onAction:s,offAction:l}=e,{enabled:r,checkedLabel:o,uncheckedLabel:c,checkedDescription:d,uncheckedDescription:f,checkedAccessibilityLabel:g,uncheckedAccessibilityLabel:p}=a,h=(0,u.useMemo)(()=>{const e=t?d:f;return null!=e?e:""},[t,d,f]),x=(0,u.useMemo)(()=>{const e=t?g:p;return null!=e?e:""},[t,g,p]),A=(0,u.useCallback)(()=>{const e=t?l:s;n(e),e.analytics.forEach(e=>{"AffiliatesInteractionAnalyticEvent"===e.__typename&&i(e)})},[t,l,s,i,n]);return(0,m.jsx)(M.Y,{id:"affiliates-switch",disabled:!r,checked:t,onChange:A,description:h,a11yLabel:x,children:t?o:c})};Et.displayName="AffiliatesSwitch",Et.fragment=St;const kt=i.J1`
  fragment VanityLinkSuccessFormFragment on AffiliatesCreateVanityLinkSuccessResponse {
    label
    copyButton {
      ... on AffiliatesTransitionButton {
        defaultButton {
          ...AffiliatesCopyLinkButtonFragment
        }
        transitionButton {
          ...AffiliatesCopyLinkButtonFragment
        }
        transitionInSecs
        transitionOnRender
      }
    }
    impressionAnalytics {
      ...AffiliatesImpressionAnalyticEventFragment
    }
    url
    onloadAction {
      ... on AffiliatesCopyLinkAction {
        __typename
        analytics {
          ...AffiliatesInteractionAnalyticEventFragment
        }
        url
        toast {
          text
          button {
            primary
            accessibility
            disabled
          }
        }
      }
    }
    statusMessage {
      ...AffiliatesIconTextFragment
    }
  }

  ${we}
  ${Re}
  ${ze.fragment}
  ${Ge}
`,It=({data:e})=>{const{url:t,onloadAction:n,copyButton:{defaultButton:i,transitionButton:a,transitionInSecs:o,transitionOnRender:c},label:d,statusMessage:g}=e,{trackEvent:p}=et(),[h,x]=(0,u.useState)({visible:!1,message:""}),[A,v]=(0,u.useState)({copied:!1}),[y,j]=(0,u.useState)(!1),C=(0,u.useMemo)(()=>A.copied?a:i,[i,a,A]),S=(0,u.useMemo)(()=>1e3*o,[o]),E=(0,u.useMemo)(()=>Ze(t),[t]);(0,u.useEffect)(()=>{if(!y){Xe(n.url).then(()=>{x({visible:!0,message:n.toast.text}),c&&v({copied:!0})}).finally(()=>{j(!0)});const e=n.analytics;null==e||e.forEach(p)}},[n,c,y,p]),(0,u.useEffect)(()=>{if(h.visible){const e=setTimeout(()=>{x({visible:!1,message:""})},S);return()=>{clearTimeout(e)}}},[h,S]),(0,u.useEffect)(()=>{if(A.copied){const e=setTimeout(()=>{v({copied:!1})},S);return()=>{clearTimeout(e)}}},[A,S]);return(0,m.jsxs)(m.Fragment,{children:[A.copied&&(0,m.jsx)(V.N,{show:h.visible,verticalOffset:50,children:h.message}),(0,m.jsx)(r.N,{margin:{blockstart:"four"},children:(0,m.jsxs)("div",{children:[(0,m.jsx)(f.D,{size:200,children:d}),(0,m.jsx)(f.D,{size:400,wordBreak:!0,children:E})]})}),(0,m.jsx)(r.N,{margin:{blockstart:"four"},padding:{blockstart:"two"},children:(0,m.jsxs)(s.X,{alignContent:"center",justifyContent:"space-between",children:[(0,m.jsx)(l.C,{children:(0,m.jsx)(Ve,{data:C,onClickHandler:()=>(async e=>{var t;"AffiliatesCopyLinkAction"===e.__typename&&(await Xe(e.url),x({visible:!0,message:e.toast.text}),v({copied:!0}),null===(t=e.analytics)||void 0===t||t.forEach(p))})(C.action)})}),g&&(0,m.jsx)(l.C,{alignSelf:"center",children:(0,m.jsx)(ze,{data:g})})]})})]})};It.displayName="VanityLinkSuccessForm",It.fragment=kt;const bt=i.J1`
  fragment VanityLinkFailureResponseFragment on AffiliatesCreateVanityLinkFailureResponse {
    fieldErrors {
      ... on AffiliatesFieldError {
        identifier
        errorMessage {
          ...AffiliatesSpannableTextFragment
        }
      }
    }
    impressionAnalytics {
      ...AffiliatesImpressionAnalyticEventFragment
    }
  }

  ${dt.fragment}
  ${we}
`,Tt=i.J1`
  mutation CreateVanityLinkMutation(
    $context: ContextInput!
    $clientContext: AffiliatesClientContextInput!
    $request: AffiliatesCreateVanityLinkRequestInput!
  ) {
    createAffiliateVanityLink(context: $context, clientContext: $clientContext, request: $request) {
      __typename
      ...VanityLinkSuccessFormFragment
      ...VanityLinkFailureResponseFragment
    }
  }

  ${Ve.fragment}
  ${ze.fragment}
  ${It.fragment}
  ${bt}
`,Ft=i.J1`
  fragment VanityLinkFormFragment on AffiliatesVanityLinkForm {
    pageHandle {
      ...AffiliatesTextInputFieldFragment
    }
    saveButton {
      ...AffiliatesButtonFragment
      action {
        ... on AffiliatesVanityLinkSaveAction {
          analytics {
            ...AffiliatesInteractionAnalyticEventFragment
          }
        }
      }
    }
    cancelButton {
      ...AffiliatesButtonFragment
      action {
        ... on AffiliatesCancelAction {
          analytics {
            ...AffiliatesInteractionAnalyticEventFragment
          }
        }
      }
    }
    serviceFailureError
  }

  ${Re}
  ${Ve.fragment}
  ${Me}
`,Lt=({data:e,onSuccess:t,onCancel:n})=>{const{pageHandle:{handle:a,selectionAction:l},saveButton:o,cancelButton:c,serviceFailureError:d}=e,[f]=(0,i.n_)(Tt),{clientContext:g,propertyContext:p,targetUrl:h}=Ct(),{context:x}=(0,R.R)(),{trackEvent:A}=et(),[v,y]=(0,u.useState)(!1),[j,C]=(0,u.useState)(""),[S,E]=(0,u.useState)(!1),[k,I]=(0,u.useState)(""),[b,T]=(0,u.useState)({}),F=On([{key:a.egdsElementId,value:"customUrl"}]),L=(0,u.useMemo)(()=>S&&!!j&&!k,[S,j,k]),{required:w,pattern:N}=Mn(a.validations),D=(0,u.useCallback)(async n=>{n.preventDefault(),y(!0),T({});const i={context:x,clientContext:g,request:{targetUrl:h,propertyContext:p,userText:j}};"AffiliatesVanityLinkSaveAction"===e.saveButton.action.__typename&&e.saveButton.action.analytics.forEach(A);try{var a;const e=await f({variables:i});switch(null===(a=e.data)||void 0===a||null===(a=a.createAffiliateVanityLink)||void 0===a?void 0:a.__typename){case"AffiliatesCreateVanityLinkSuccessResponse":return null==t||t(e.data.createAffiliateVanityLink),void e.data.createAffiliateVanityLink.impressionAnalytics.forEach(A);case"AffiliatesCreateVanityLinkFailureResponse":{const t=e.data.createAffiliateVanityLink.fieldErrors.reduce((e,t)=>{const n=F[t.identifier];return Te(Te({},e),n?{[n]:t.errorMessage}:{})},{});return T(e=>Te(Te({},e),t)),void e.data.createAffiliateVanityLink.impressionAnalytics.forEach(A)}default:throw new Error("Unable to handle response")}}catch(s){d&&T(e=>Te(Te({},e),{},{customUrl:{__typename:"AffiliatesSpannableText",inlineContent:[{__typename:"AffiliatesText",text:d}]}}))}finally{y(!1)}},[x,g,h,p,j,f,t,A,F,d,e.saveButton]),_=(0,u.useCallback)(e=>{e||!w?e&&N&&!N.value.test(e)?I(N.message):I(""):I(w)},[w,N]),B=(0,u.useCallback)(e=>{const t=e.toLowerCase();_(t),C(t)},[_]),$=(0,u.useCallback)(()=>{_(j)},[j,_]),M=(0,u.useCallback)(()=>{null==n||n(),"AffiliatesCancelAction"===c.action.__typename&&c.action.analytics.forEach(A)},[n,c.action,A]);return(0,m.jsxs)("form",{id:"vanity-link-form",onSubmit:D,children:[(0,m.jsx)(O.V,{id:"customUrl",placeholder:a.placeholder||" ",label:Ze(a.label),name:"customUrl",value:j,onFocus:()=>{E(!0),l.analytics.forEach(A)},onChange:e=>{T(e=>Te(Te({},e),{},{customUrl:void 0})),B(e.target.value)},onBlur:$,invalid:k,hasClearButton:!0,required:!0}),b.customUrl&&(0,m.jsx)("div",{className:"uitk-field-message uitk-field-message-error uitk-error-message",children:(0,m.jsx)(dt,{data:b.customUrl,theme:"negative",size:200})}),(0,m.jsx)(r.N,{margin:{blockstart:"four"},children:(0,m.jsxs)(s.X,{alignItems:"center",children:[(0,m.jsx)(Ve,{data:o,inProgress:v,disabled:!L||v,type:"submit"}),(0,m.jsx)(r.N,{margin:{inlinestart:"three"},children:(0,m.jsx)(Ve,{data:c,onClickHandler:M})})]})})]})};Lt.displayName="VanityLinkForm",Lt.fragment=Ft;const Rt=i.J1`
  mutation CreateVanityTagMutation(
    $context: ContextInput!
    $clientContext: AffiliatesClientContextInput!
    $request: AffiliatesCreateAffiliateTagRequestInput!
  ) {
    createAffiliateTag(context: $context, clientContext: $clientContext, request: $request) {
      __typename
      ...CreateTagFailureResponseFragment
      ...CreateTagSuccessResponseFragment
    }
  }

  ${i.J1`
  fragment CreateTagFailureResponseFragment on AffiliatesCreateAffiliateTagFailureResponse {
    fieldErrors {
      ... on AffiliatesFieldError {
        identifier
        errorMessage {
          ...AffiliatesSpannableTextFragment
        }
      }
    }
    impressionAnalytics {
      ...AffiliatesImpressionAnalyticEventFragment
    }
  }

  ${dt.fragment}
  ${we}
`}
  ${i.J1`
  fragment CreateTagSuccessResponseFragment on AffiliatesCreateAffiliateTagSuccessResponse {
    impressionAnalytics {
      ...AffiliatesImpressionAnalyticEventFragment
    }
    switch {
      ...AffiliatesSwitchFragment
    }
    vanityLinkForm {
      ...VanityLinkFormFragment
    }
  }

  ${we}
  ${Et.fragment}
  ${Lt.fragment}
`}
`,wt=i.J1`
  fragment AffiliatesExampleCustomLinkFragment on AffiliatesCreateTagExampleCustomLink {
    defaultTag
    label
    url
    tagPlaceholder
    description {
      ...AffiliatesSpannableTextFragment
    }
  }
  ${dt.fragment}
`,Nt=({data:{label:e,url:t,tagPlaceholder:n,description:i},vanityTagHandle:a})=>{const s=Ze(t).split(`${n}`);return(0,m.jsx)(G.g,{padded:!0,border:!0,children:(0,m.jsx)("section",{children:(0,m.jsxs)(U.E,{padded:!1,children:[(0,m.jsx)(r.N,{margin:{blockend:"two"},children:(0,m.jsx)(dt,{data:i})}),(0,m.jsx)(r.N,{padding:{block:"two",inline:"three"},children:(0,m.jsxs)("div",{children:[(0,m.jsx)(f.D,{size:200,children:e}),(0,m.jsxs)(f.D,{overflow:"wrap",children:[(0,m.jsx)(f.D,{size:400,weight:"regular",inline:!0,children:s[0]}),(0,m.jsx)(f.D,{size:400,weight:"medium",inline:"strong",children:a||" ... "}),(0,m.jsx)(f.D,{size:400,weight:"regular",inline:!0,children:s[1]})]})]})})]})})})};Nt.displayName="AffiliatesCreateTagExampleCustomLink",Nt.fragment=wt;const Dt=i.J1`
  fragment AffiliatesCreateTagFormFragment on AffiliatesCreateTagForm {
    backButton {
      ...AffiliatesButtonFragment
      action {
        ... on AffiliatesBackAction {
          analytics {
            ...AffiliatesInteractionAnalyticEventFragment
          }
        }
      }
    }
    createTagButton {
      ...AffiliatesButtonFragment
      action {
        ... on AffiliatesCreateTagSaveAction {
          analytics {
            ...AffiliatesInteractionAnalyticEventFragment
          }
        }
      }
    }
    description {
      ...AffiliatesSpannableTextFragment
    }
    tagHandle {
      ...AffiliatesTextInputFieldFragment
    }
    exampleCustomLink {
      ...AffiliatesExampleCustomLinkFragment
    }
    title
    serviceFailureError
  }
  ${Re}
  ${Ve.fragment}
  ${dt.fragment}
  ${Me}
  ${Nt.fragment}
`,_t=({data:e,onSuccess:t,onCancel:n})=>{const{context:a}=(0,R.R)(),{clientContext:l}=Ct(),{trackEvent:o}=et(),{backButton:d,createTagButton:f,description:g,tagHandle:{handle:p,selectionAction:h},exampleCustomLink:x,title:A,serviceFailureError:v}=e,{required:y,pattern:j}=Mn(p.validations),[C]=(0,i.n_)(Rt),S=(0,u.useCallback)(e=>e.toLowerCase().replace(/\s/g,""),[]),[E,k]=(0,u.useState)(S(x.defaultTag||"")),[I,T]=(0,u.useState)(""),[F,w]=(0,u.useState)({}),[N,D]=(0,u.useState)(!1),_=(0,u.useMemo)(()=>!!E&&!I,[I,E]),B=On([{key:p.egdsElementId,value:"vanityTag"}]),$=(0,u.useCallback)(async e=>{e.preventDefault(),D(!0),w({});const n={context:a,clientContext:l,request:{userText:E}};"AffiliatesCreateTagSaveAction"===f.action.__typename&&f.action.analytics.forEach(o);try{var i;const e=await C({variables:n});switch(null===(i=e.data)||void 0===i||null===(i=i.createAffiliateTag)||void 0===i?void 0:i.__typename){case"AffiliatesCreateAffiliateTagSuccessResponse":return e.data.createAffiliateTag.impressionAnalytics.forEach(o),void(null==t||t(e.data.createAffiliateTag));case"AffiliatesCreateAffiliateTagFailureResponse":{e.data.createAffiliateTag.impressionAnalytics.forEach(o);const t=e.data.createAffiliateTag.fieldErrors.reduce((e,t)=>{const n=B[t.identifier];return Te(Te({},e),n?{[n]:t.errorMessage}:{})},{});return void w(e=>Te(Te({},e),t))}default:throw new Error("Unable to handle response")}}catch(s){v&&w(e=>Te(Te({},e),{},{vanityTag:{__typename:"AffiliatesSpannableText",inlineContent:[{__typename:"AffiliatesText",text:v}]}}))}finally{D(!1)}},[l,a,f,C,B,t,v,o,E]),M=(0,u.useCallback)(e=>{e||!y?e&&j&&!j.value.test(e)?T(j.message):T(""):T(y)},[y,j]),V=(0,u.useCallback)(()=>{h.analytics.forEach(o)},[h.analytics,o]),G=(0,u.useCallback)(e=>{w(e=>Te(Te({},e),{},{vanityTag:void 0}));const t=S(e.target.value);if(M(t),k(t),t!==e.target.value&&null!==e.target.selectionStart){var n;const i=e.target.selectionStart-(e.target.value.length-t.length);null===(n=e.persist)||void 0===n||n.call(e),setTimeout(()=>{var t;null===(t=e.target)||void 0===t||t.setSelectionRange(i,i)})}},[S,M]),U=(0,u.useCallback)(()=>{M(E)},[M,E]),z=(0,u.useCallback)(()=>{null==n||n(),"AffiliatesBackAction"===d.action.__typename&&d.action.analytics.forEach(o)},[n,d.action,o]);return(0,m.jsx)(L.P,{type:"relative",children:(0,m.jsxs)("form",{id:"create-tag-form",className:(0,P.classNames)({"is-disabled":N}),onSubmit:$,children:[(0,m.jsx)(Ve,{data:d,onClickHandler:z}),(0,m.jsx)(r.N,{margin:{blockstart:"four"},children:(0,m.jsxs)("div",{children:[(0,m.jsx)(c.M,{tag:"h3",size:6,children:A}),g.map((e,t)=>(0,m.jsx)(r.N,{margin:{blockstart:"two"},children:(0,m.jsx)("div",{children:(0,m.jsx)(dt,{data:e})})},t))]})}),(0,m.jsx)(r.N,{margin:{blockstart:"three"},children:(0,m.jsxs)("div",{children:[(0,m.jsx)(O.V,{id:"vanityTag",name:"vanityTag",label:p.label,value:E,placeholder:p.placeholder||" ",invalid:I,required:!0,hasClearButton:!0,onFocus:V,onChange:G,onBlur:U}),F.vanityTag&&(0,m.jsx)("div",{className:"uitk-field-message uitk-field-message-error uitk-error-message",children:(0,m.jsx)(dt,{data:F.vanityTag,size:200,theme:"negative"})})]})}),(0,m.jsx)(r.N,{margin:{blockstart:"four"},children:(0,m.jsx)("div",{children:(0,m.jsx)(Nt,{vanityTagHandle:E,data:x})})}),(0,m.jsx)(r.N,{margin:{blockstart:"four"},children:(0,m.jsx)(s.X,{space:"three",alignItems:"center",children:(0,m.jsx)(Ve,{data:f,type:"submit",disabled:!_||N})})}),N&&(0,m.jsx)(L.P,{type:"absolute",position:{top:"center",left:"center"},children:(0,m.jsx)(b.v,{})})]})})};_t.displayName="CreateVanityTagForm",_t.fragment=Dt;const Bt={descriptiveOnloadActionTriggered:!1,setDescriptiveOnloadActionTriggered:void 0},$t=(0,u.createContext)(Bt),Mt=({children:e})=>{const[t,n]=(0,u.useState)(Bt.descriptiveOnloadActionTriggered),i=(0,u.useMemo)(()=>({descriptiveOnloadActionTriggered:t,setDescriptiveOnloadActionTriggered:n}),[t]);return(0,m.jsx)($t.Provider,{value:i,children:e})},Ot=i.J1`
  fragment DescriptiveLinkFormFragment on AffiliatesDescriptiveLinkForm {
    label
    url
    copyButton {
      defaultButton {
        ...AffiliatesCopyLinkButtonFragment
      }
      transitionButton {
        ...AffiliatesCopyLinkButtonFragment
      }
      transitionInSecs
      transitionOnRender
    }
  }
  ${Ge}
`,Pt=({data:{label:e,url:t,copyButton:{defaultButton:n,transitionButton:i,transitionInSecs:a,transitionOnRender:o}},statusMessage:c,onloadAction:d})=>{const{trackEvent:g}=et(),{descriptiveOnloadActionTriggered:p,setDescriptiveOnloadActionTriggered:h}=(0,u.useContext)($t),[x,A]=(0,u.useState)({visible:!1,message:""}),[v,y]=(0,u.useState)({copied:!1}),j=(0,u.useMemo)(()=>v.copied?i:n,[n,i,v]),C=(0,u.useMemo)(()=>1e3*a,[a]),S=(0,u.useMemo)(()=>Ze(t),[t]);(0,u.useEffect)(()=>{p||(Xe(d.url).then(()=>{A({visible:!0,message:d.toast.text}),o&&y({copied:!0})}).finally(()=>{null==h||h(!0)}),d.analytics.forEach(g))},[d,o,p,h,g]),(0,u.useEffect)(()=>{if(x.visible){const e=setTimeout(()=>{A({visible:!1,message:""})},C);return()=>{clearTimeout(e)}}},[x,C]),(0,u.useEffect)(()=>{if(v.copied){const e=setTimeout(()=>{y({copied:!1})},C);return()=>{clearTimeout(e)}}},[v,C]);return(0,m.jsxs)(m.Fragment,{children:[v.copied&&(0,m.jsx)(V.N,{show:x.visible,verticalOffset:50,children:x.message}),(0,m.jsx)(f.D,{size:200,children:e}),(0,m.jsx)(f.D,{size:400,wordBreak:!0,children:S}),(0,m.jsx)(r.N,{margin:{blockstart:"six"},children:(0,m.jsxs)(s.X,{alignContent:"center",justifyContent:"space-between",children:[(0,m.jsx)(l.C,{children:(0,m.jsx)(Ve,{data:j,onClickHandler:()=>(async e=>{var t;"AffiliatesCopyLinkAction"===e.__typename&&(await Xe(e.url),A({visible:!0,message:e.toast.text}),y({copied:!0}),null===(t=e.analytics)||void 0===t||t.forEach(g))})(j.action)})}),c&&(0,m.jsx)(l.C,{alignSelf:"center",children:(0,m.jsx)(ze,{data:c})})]})})]})};Pt.displayName="DescriptiveLinkForm",Pt.fragment=Ot;let Vt=function(e){return e[e.DESCRIPTIVE=0]="DESCRIPTIVE",e[e.TAG_CREATE=1]="TAG_CREATE",e[e.VANITY_CREATE=2]="VANITY_CREATE",e[e.VANITY_SUCCESS=3]="VANITY_SUCCESS",e}({});const Gt=({data:e,onFormChange:t})=>{const[n,i]=(0,u.useState)(Vt.DESCRIPTIVE),[a,s]=(0,u.useState)(),[l,o]=(0,u.useState)(e.vanityLinkForm),[c,d]=(0,u.useState)(e.switch),f=(0,u.useMemo)(()=>n!==Vt.DESCRIPTIVE,[n]),g=(0,u.useCallback)(e=>{o(e.vanityLinkForm),d(e.switch),i(Vt.VANITY_CREATE)},[]);return(0,u.useEffect)(()=>{null==t||t(n)},[n,t]),(0,m.jsxs)(Mt,{children:[!!c&&n!==Vt.TAG_CREATE&&(0,m.jsx)(Et,{data:c,isChecked:f,onToggle:e=>{"AffiliatesShowVanityLinkFormAction"===e.__typename?i(Vt.VANITY_CREATE):"AffiliatesShowDescriptiveLinkFormAction"===e.__typename?i(Vt.DESCRIPTIVE):"AffiliatesShowCreateTagFormAction"===e.__typename&&i(Vt.TAG_CREATE)}}),n===Vt.DESCRIPTIVE&&(0,m.jsx)(r.N,{margin:{blockstart:"six"},children:(0,m.jsx)("div",{children:(0,m.jsx)(Pt,{data:e.descriptiveLinkForm,onloadAction:e.onloadAction,statusMessage:e.statusMessage})})}),n===Vt.TAG_CREATE&&!!e.createTagForm&&(0,m.jsx)(r.N,{margin:{blockstart:"three"},children:(0,m.jsx)("div",{children:(0,m.jsx)(_t,{data:e.createTagForm,onCancel:()=>i(Vt.DESCRIPTIVE),onSuccess:g})})}),n===Vt.VANITY_CREATE&&!!l&&(0,m.jsx)(r.N,{margin:{blockstart:"three"},children:(0,m.jsx)("div",{children:(0,m.jsx)(Lt,{data:l,onCancel:()=>i(Vt.DESCRIPTIVE),onSuccess:e=>{s(e),i(Vt.VANITY_SUCCESS)}})})}),n===Vt.VANITY_SUCCESS&&a&&(0,m.jsx)(r.N,{margin:{blockstart:"six"},children:(0,m.jsx)("div",{children:(0,m.jsx)(It,{data:a})})})]})},Ut=i.J1`
  fragment ShareToBlogFragment on AffiliatesShareToBlog {
    title
    description
    buttons {
      ... on AffiliatesShareToBlogButton {
        mark {
          ...EGDSMarkFragment
        }
        action {
          ...AffiliatesOutwardLinkActionFragment
        }
      }
    }
  }

  ${_e}
  ${Le.fragment}
`,zt=({data:e})=>{const{trackEvent:t}=et(),n=e.buttons.map(e=>(0,m.jsx)(I.f,{href:e.action.url,tag:"a",target:"_blank",onClick:()=>{e.action.analytics.forEach(t)},size:v.V.SMALL,children:(0,m.jsx)(Le,{data:Te(Te({},e.mark),{},{size:"7"})})},e.action.url));return(0,m.jsxs)("div",{"data-cy":"share-to-blog-section",children:[(0,m.jsx)(r.N,{margin:{blockstart:"three"},children:(0,m.jsx)(c.M,{tag:"h3",size:6,children:e.title})}),(0,m.jsx)(r.N,{margin:{blockstart:"two"},children:(0,m.jsx)(f.D,{children:e.description})}),(0,m.jsx)(r.N,{margin:{blockstart:"six"},children:(0,m.jsx)(s.X,{space:"six",wrap:"wrap",children:n})})]})};zt.displayName="ShareToBlog",zt.fragment=Ut;const Jt=i.J1`
  fragment DefaultLinkSheetContentFragment on AffiliatesCreateLinkDefaultSuccessResponse {
    closeAction {
      analytics {
        ...AffiliatesInteractionAnalyticEventFragment
      }
    }
    statsLink {
      ...AffiliatesStandardLinkFragment
      action {
        ...AffiliatesViewStatsActionFragment
      }
    }
    pageInfo {
      ... on AffiliatesPageInfo {
        pageImage {
          ...EGDSImageFragment
        }
        pageName
      }
    }
    switch {
      ...AffiliatesSwitchFragment
    }
    descriptiveLinkForm {
      ...DescriptiveLinkFormFragment
    }
    createTagForm {
      ...AffiliatesCreateTagFormFragment
    }
    vanityLinkForm {
      ...VanityLinkFormFragment
    }
    statusMessage {
      ...AffiliatesIconTextFragment
    }
    shareToBlog {
      ...ShareToBlogFragment
    }
    onloadAction {
      ...AffiliatesCopyLinkActionFragment
    }
    impressionAnalytics {
      ...AffiliatesImpressionAnalyticEventFragment
    }
  }

  ${Re}
  ${we}
  ${Be}
  ${Se.fragment}
  ${Et.fragment}
  ${Lt.fragment}
  ${ze.fragment}
  ${zt.fragment}
  ${Pt.fragment}
  ${Ne}
  ${$e}
  ${_t.fragment}
`,Ht=({data:e})=>{var t,n,i;const[a,s]=(0,u.useState)(!0),[l,d]=(0,u.useState)(!0),f=!!e.shareToBlog&&l;return(0,m.jsx)(r.N,{padding:{blockend:"twelve"},children:(0,m.jsxs)("div",{children:[(0,m.jsx)(p.M,{ratio:p.l.R16_9,children:(0,m.jsx)(h.F,{placeholderImage:!0,alt:null===(t=e.pageInfo)||void 0===t||null===(t=t.pageImage)||void 0===t?void 0:t.description,src:null===(n=e.pageInfo)||void 0===n||null===(n=n.pageImage)||void 0===n?void 0:n.url})}),a&&(null===(i=e.pageInfo)||void 0===i?void 0:i.pageName)&&(0,m.jsx)(r.N,{margin:{inline:"six",blockstart:"six"},children:(0,m.jsx)(c.M,{tag:"h2",size:5,children:e.pageInfo.pageName})}),(0,m.jsx)(r.N,{margin:{blockstart:"six",inline:"six"},children:(0,m.jsx)("div",{children:(0,m.jsx)(Gt,{data:e,onFormChange:e=>{switch(e){case Vt.TAG_CREATE:d(!1),s(!1);break;case Vt.DESCRIPTIVE:case Vt.VANITY_CREATE:case Vt.VANITY_SUCCESS:default:d(!0),s(!0)}}})})}),f&&(0,m.jsx)(o.j,{blockMargin:"twelve"}),f&&(0,m.jsx)(r.N,{margin:{blockstart:"twelve",inline:"six"},children:(0,m.jsx)("div",{children:(0,m.jsx)(zt,{data:e.shareToBlog})})})]})})};Ht.displayName="DefaultLinkSheet",Ht.fragment=Jt;const Xt=i.J1`
  fragment LinkSheetFailureContentFragment on AffiliatesCreateLinkFailureResponse {
    banner {
      ...EGDSBannerFragment
    }
    closeAction {
      analytics {
        ...AffiliatesInteractionAnalyticEventFragment
      }
    }
    statsLink {
      action {
        ... on AffiliatesViewStatsAction {
          analytics {
            ...AffiliatesInteractionAnalyticEventFragment
          }
          unexpectedErrorMessage {
            ...EGDSBannerFragment
          }
        }
      }
      disabled
      subtext
      text
    }
    impressionAnalytics {
      ...AffiliatesImpressionAnalyticEventFragment
    }
  }
  ${pe.fragment}
  ${we}
  ${Re}
`,Yt=({data:e})=>(0,m.jsx)(ut,{data:e.banner});Yt.displayName="LinkSheetFailureContent",Yt.fragment=Xt;const qt=i.J1`
  fragment AffiliatesDownloadImagesFragment on AffiliatesDownloadImages {
    title
    description {
      ...AffiliatesSpannableTextFragment
    }
    openDownloadImagesGalleryFormButton {
      ...AffiliatesButtonFragment
      action {
        ... on AffiliatesShowDownloadImagesGalleryFormAction {
          analytics {
            ...AffiliatesInteractionAnalyticEventFragment
          }
        }
      }
    }
  }

  ${dt.fragment}
  ${Ve.fragment}
  ${Re}
`,Kt=({data:{title:e,description:t,openDownloadImagesGalleryFormButton:n},onShowGallery:i})=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(c.M,{tag:"h3",size:6,children:e}),(0,m.jsx)(r.N,{margin:{blockstart:"two"},children:(0,m.jsx)("div",{children:(0,m.jsx)(dt,{data:t})})}),(0,m.jsx)(r.N,{margin:{blockstart:"four"},children:(0,m.jsx)(Ve,{data:n,onClickHandler:i})})]});Kt.displayName="AffiliatesDownloadImages",Kt.fragment=qt;const Wt={downloadedImages:{},setDownloadedImage:void 0},Qt=(0,u.createContext)(Wt),Zt=({children:e})=>{const[t,n]=(0,u.useState)(Wt.downloadedImages);function i(e){n(t=>Te(Te({},t),{},{[e]:!0}))}const a=(0,u.useMemo)(()=>({downloadedImages:t,setDownloadedImage:i}),[t]);return(0,m.jsx)(Qt.Provider,{value:a,children:e})},en=i.J1`
  fragment AffiliatesDownloadImageButtonFragment on AffiliatesButton {
    ...AffiliatesButtonFragment
    action {
      ... on AffiliatesDownloadImageAction {
        analytics {
          ...AffiliatesInteractionAnalyticEventFragment
        }
      }
    }
  }
`,tn=i.J1`
  fragment AffiliatesDownloadableImageFragment on AffiliatesDownloadableImage {
    image {
      ...EGDSImageFragment
    }
    downloadUrl
    defaultButton {
      ...AffiliatesDownloadImageButtonFragment
    }
    successButton {
      ...AffiliatesDownloadImageButtonFragment
    }
  }

  ${Ve.fragment}
  ${Se.fragment}
  ${Re}
  ${en}
`,nn=()=>(0,m.jsx)(k.M,{className:"uitk-button-only-icon",children:(0,m.jsx)(r.N,{margin:{blockstart:"one"},children:(0,m.jsx)("div",{children:(0,m.jsx)(b.v,{isSmall:!0,isDarkBackground:!0})})})}),an=({data:{image:e,defaultButton:t,successButton:n,downloadUrl:i},imageId:a})=>{const{trackEvent:r}=et(),{downloadedImages:o,setDownloadedImage:c}=(0,u.useContext)(Qt),[d,f]=(0,u.useState)(!1),g=o[a]?n:t;return(0,m.jsx)(Se,{data:Te(Te({},e),{},{aspectRatio:he.THREE_TWO}),children:(0,m.jsx)(q.O,{type:K.Q.BOTTOM,className:"uitk-card-roundcorner-bottom-left uitk-card-roundcorner-bottom-right",children:(0,m.jsx)(X.f,{columns:1,space:"three",children:(0,m.jsx)(Y.S,{children:(0,m.jsx)(s.X,{alignItems:"end",space:"two",direction:"column",children:(0,m.jsx)(l.C,{children:d?(0,m.jsx)(nn,{}):(0,m.jsx)(Ve,{data:g,onClickHandler:()=>(async e=>{try{f(!0),"AffiliatesDownloadImageAction"===e.__typename&&e.analytics.forEach(r);const[t]=await Promise.all([fetch(i,{method:"GET"}),new Promise(e=>{setTimeout(()=>{e()},500)})]),n=await t.blob(),s=window.URL.createObjectURL(n),l=document.createElement("a");l.download=new URL(i).pathname.split("/").pop()||"Image",l.href=s,document.body.appendChild(l),l.click(),l.remove(),null==c||c(a)}finally{f(!1)}})(g.action)})})})})})})})};an.displayName="AffiliatesDownloadableImage",an.fragment=tn;const sn=i.J1`
  fragment AffiliatesPaginationFragment on AffiliatesPagination {
    pageSize
    prevButton {
      ...AffiliatesPagingButtonFragment
      action {
        ... on AffiliatesPagingPrevAction {
          analytics {
            ...AffiliatesInteractionAnalyticEventFragment
          }
        }
      }
    }
    nextButton {
      ...AffiliatesPagingButtonFragment
      action {
        ... on AffiliatesPagingNextAction {
          analytics {
            ...AffiliatesInteractionAnalyticEventFragment
          }
        }
      }
    }
    labelStartPlaceHolder
    labelEndPlaceHolder
    label
  }

  ${i.J1`
  fragment AffiliatesPagingButtonFragment on AffiliatesPagingButton {
    accessibility
    disabled
    iconId
    iconTitle
  }
`}
  ${Re}
`,ln=({data:{label:e,prevButton:t,nextButton:n,labelStartPlaceHolder:i,labelEndPlaceHolder:a,pageSize:r},totalImages:o,currentOffset:c,currentLastImageIndex:d,handlePrevClick:g,handleNextClick:p})=>{const h=c+r>=o,x=d-r<0,A=(0,u.useMemo)(()=>{const t=(c+1).toString(),n=(h?o:d+1).toString(),s=i?null==e?void 0:e.replace(i,t):e;return a?null==s?void 0:s.replace(a,n):s},[c,d,h,e,i,a,o]);return(0,m.jsxs)(s.X,{direction:"row",space:"four",alignItems:"center",justifyContent:"end",children:[(0,m.jsx)(l.C,{children:(0,m.jsx)("div",{children:(0,m.jsx)(E.V,{iconId:t.iconId,iconTitle:t.iconTitle,disabled:x,onClick:g})})}),(0,m.jsx)(l.C,{children:(0,m.jsx)(f.D,{align:"center",children:A})}),(0,m.jsx)(l.C,{children:(0,m.jsx)("div",{children:(0,m.jsx)(S.x,{iconId:n.iconId,iconTitle:n.iconTitle,disabled:h,onClick:p})})})]})};ln.displayName="AffiliatesPagination",ln.fragment=sn;const rn=i.J1`
  fragment AffiliatesDownloadImagesGalleryFormFragment on AffiliatesDownloadImagesGalleryForm {
    backButton {
      ...AffiliatesButtonFragment
      action {
        ... on AffiliatesBackAction {
          analytics {
            ...AffiliatesInteractionAnalyticEventFragment
          }
        }
      }
    }
    title
    description {
      ...AffiliatesSpannableTextFragment
    }
    images {
      ...AffiliatesDownloadableImageFragment
    }
    pagination {
      ...AffiliatesPaginationFragment
    }
  }

  ${Ve.fragment}
  ${an.fragment}
  ${ln.fragment}
  ${dt.fragment}
  ${Re}
`,on=({data:{backButton:e,title:t,description:n,images:i,pagination:a},onDismiss:s})=>{const[l,o]=(0,u.useState)(0),[d,f]=(0,u.useState)(a?a.pageSize-1:0),{trackEvent:g}=et(),p=(0,u.useMemo)(()=>a?i.slice(l,d+1):i,[i,a,l,d]),h=(0,u.useCallback)(()=>{a&&(f(d+a.pageSize),o(l+a.pageSize),"AffiliatesPagingNextAction"===a.nextButton.action.__typename&&a.nextButton.action.analytics.forEach(g))},[a,l,d,g]),x=(0,u.useCallback)(()=>{a&&(o(l-a.pageSize),f(d-a.pageSize),"AffiliatesPagingPrevAction"===(null==a?void 0:a.prevButton.action.__typename)&&(null==a||a.prevButton.action.analytics.forEach(g)))},[a,l,d,g]);return(0,m.jsxs)("div",{children:[(0,m.jsx)(Ve,{data:e,onClickHandler:s}),(0,m.jsx)(r.N,{margin:{blockstart:"six"},children:(0,m.jsx)(c.M,{tag:"h3",size:5,children:t})}),(0,m.jsx)(r.N,{margin:{blockstart:"two"},children:(0,m.jsx)("div",{children:(0,m.jsx)(dt,{data:n})})}),(0,m.jsx)(r.N,{margin:{block:"six"},children:(0,m.jsx)(J.w,{columns:2,space:"two",children:(0,m.jsx)(m.Fragment,{children:p.map((e,t)=>(0,m.jsx)(H.T,{children:(0,m.jsx)(an,{imageId:`${l} - ${t}`,data:e})},t))})},l)}),a&&(0,m.jsx)(ln,{data:a,totalImages:i.length,currentOffset:l,currentLastImageIndex:d,handleNextClick:h,handlePrevClick:x})]})};on.displayName="AffiliatesDownloadImagesGalleryForm",on.fragment=rn;const cn=({data:e,onToggleGallery:t})=>{const{downloadImages:n,downloadImagesGalleryForm:i}=e,[a,s]=(0,u.useState)(!1),{trackEvent:l}=et(),r=(0,u.useCallback)(()=>{s(!0),"AffiliatesShowDownloadImagesGalleryFormAction"===n.openDownloadImagesGalleryFormButton.action.__typename&&n.openDownloadImagesGalleryFormButton.action.analytics.forEach(l)},[l,n]),o=(0,u.useCallback)(()=>{s(!1),"AffiliatesBackAction"===i.backButton.action.__typename&&i.backButton.action.analytics.forEach(l)},[l,i]);return(0,u.useEffect)(()=>{null==t||t(a)},[t,a]),(0,m.jsx)("div",{children:(0,m.jsx)(Zt,{children:a?(0,m.jsx)(on,{data:i,onDismiss:o}):(0,m.jsx)(Kt,{data:n,onShowGallery:r})})})},dn=i.J1`
  fragment LodgingLinkSheetContentFragment on AffiliatesCreateLinkLodgingSuccessResponse {
    closeAction {
      analytics {
        ...AffiliatesInteractionAnalyticEventFragment
      }
    }
    statsLink {
      ...AffiliatesStandardLinkFragment
      action {
        ...AffiliatesViewStatsActionFragment
      }
    }
    lodgingInfo {
      ... on AffiliatesLodgingInfo {
        propertyImage {
          ...EGDSImageFragment
        }
        propertyName
      }
    }
    switch {
      ...AffiliatesSwitchFragment
    }
    descriptiveLinkForm {
      ...DescriptiveLinkFormFragment
    }
    createTagForm {
      ...AffiliatesCreateTagFormFragment
    }
    vanityLinkForm {
      ...VanityLinkFormFragment
    }
    statusMessage {
      ...AffiliatesIconTextFragment
    }
    downloadImages {
      ...AffiliatesDownloadImagesFragment
    }
    downloadImagesGalleryForm {
      ...AffiliatesDownloadImagesGalleryFormFragment
    }
    shareToBlog {
      ...ShareToBlogFragment
    }
    onloadAction {
      ...AffiliatesCopyLinkActionFragment
    }
    impressionAnalytics {
      ...AffiliatesImpressionAnalyticEventFragment
    }
  }

  ${Re}
  ${we}
  ${Be}
  ${Se.fragment}
  ${Et.fragment}
  ${Lt.fragment}
  ${ze.fragment}
  ${Kt.fragment}
  ${on.fragment}
  ${zt.fragment}
  ${Pt.fragment}
  ${Ne}
  ${$e}
  ${_t.fragment}
`,fn=({data:e})=>{var t,n,i;const[a,s]=(0,u.useState)(!0),[l,d]=(0,u.useState)(!0),[f,g]=(0,u.useState)(!0),x=e.downloadImages&&e.downloadImagesGalleryForm?{downloadImages:e.downloadImages,downloadImagesGalleryForm:e.downloadImagesGalleryForm}:void 0,A=!!x&&l||a&&e.shareToBlog;return(0,m.jsx)(r.N,{padding:{blockend:"twelve"},children:(0,m.jsxs)("div",{children:[(0,m.jsx)(p.M,{ratio:p.l.R16_9,children:(0,m.jsx)(h.F,{placeholderImage:!0,alt:null===(t=e.lodgingInfo)||void 0===t||null===(t=t.propertyImage)||void 0===t?void 0:t.description,src:null===(n=e.lodgingInfo)||void 0===n||null===(n=n.propertyImage)||void 0===n?void 0:n.url})}),f&&(null===(i=e.lodgingInfo)||void 0===i?void 0:i.propertyName)&&(0,m.jsx)(r.N,{margin:{inline:"six",blockstart:"six"},children:(0,m.jsx)(c.M,{tag:"h2",size:5,children:e.lodgingInfo.propertyName})}),(0,m.jsx)(r.N,{margin:{blockstart:"six",inline:"six"},children:(0,m.jsx)("div",{children:(0,m.jsx)(Gt,{data:e,onFormChange:e=>{switch(e){case Vt.TAG_CREATE:s(!1),g(!1),d(!1);break;case Vt.DESCRIPTIVE:case Vt.VANITY_CREATE:case Vt.VANITY_SUCCESS:default:s(!0),g(!0),d(!0)}}})})}),A&&(0,m.jsx)(o.j,{blockMargin:"twelve"}),x&&l&&(0,m.jsx)(r.N,{margin:{blockstart:"twelve",inline:"six"},children:(0,m.jsx)("div",{children:(0,m.jsx)(cn,{data:x,onToggleGallery:e=>s(!e)})})}),a&&e.shareToBlog&&(0,m.jsx)(r.N,{margin:{blockstart:"twelve",inline:"six"},children:(0,m.jsx)("div",{children:(0,m.jsx)(zt,{data:e.shareToBlog})})})]})})};function un({data:e}){switch(e.__typename){case"AffiliatesCreateLinkDefaultSuccessResponse":return(0,m.jsx)(Ht,{data:e});case"AffiliatesCreateLinkLodgingSuccessResponse":return(0,m.jsx)(fn,{data:e});case"AffiliatesCreateLinkFailureResponse":return(0,m.jsx)(Yt,{data:e});default:return(0,m.jsx)(ut,{data:e})}}function gn({data:e,onClick:t}){switch(null==e?void 0:e.__typename){case"AffiliatesCreateLinkDefaultSuccessResponse":case"AffiliatesCreateLinkLodgingSuccessResponse":case"AffiliatesCreateLinkFailureResponse":return(null==e?void 0:e.statsLink)?(0,m.jsx)($.p,{onClick:t,children:null==e?void 0:e.statsLink.text}):null;default:return null}}fn.displayName="LodgingLinkSheet",fn.fragment=dn;const mn=({onSheetToolbarClick:e,loading:t,data:n})=>{const{linkSheetTriggerRef:i,activeSheet:a,setActiveSheet:s}=Ct(),{trackEvent:l}=et(),r=(0,u.useCallback)(()=>{null==s||s(ht.NONE),"UIBanner"!==(null==n?void 0:n.__typename)&&(null==n||n.closeAction.analytics.forEach(l))},[s,l,n]);return(0,u.useEffect)(()=>{var e;"UIBanner"!==(null==n?void 0:n.__typename)&&(null==n||null===(e=n.impressionAnalytics)||void 0===e||e.forEach(l))},[l,n]),(0,m.jsx)(_.K,{isVisible:a===ht.LINK,children:(0,m.jsxs)(w.t,{type:"side",triggerRef:i,isVisible:a===ht.LINK,children:[(0,m.jsx)(B.p,{navigationContent:{navIconLabel:"Close",onClick:r},toolbarActionContent:(0,m.jsx)(gn,{data:n,onClick:e})}),(0,m.jsxs)(N.Y,{padded:!1,children:[t&&(0,m.jsx)(ft,{}),!t&&n&&(0,m.jsx)(un,{data:n})]})]})})},pn=i.J1`
  mutation CreateLinkMutation($context: ContextInput!, $clientContext: AffiliatesClientContextInput!, $request: AffiliatesCreateLinkRequestInput!) {
    createAffiliateLink(context: $context, clientContext: $clientContext, request: $request) {
      ...LodgingLinkSheetContentFragment
      ...DefaultLinkSheetContentFragment
      ...LinkSheetFailureContentFragment
    }
  }
  ${fn.fragment}
  ${Ht.fragment}
  ${Yt.fragment}
`;function hn(){const{context:e}=(0,R.R)(),{clientContext:t,propertyContext:n,targetUrl:a,setActiveMenu:s,setActiveSheet:l,setLinkSheetContent:r}=Ct(),{trackEvent:o}=et(),[c]=(0,i.n_)(pn);return{openLinkSheet:(0,u.useCallback)(async i=>{var d;null==r||r({type:At.LOADING}),null==s||s(pt.NONE),null==l||l(ht.LINK),null==i||null===(d=i.analytics)||void 0===d||d.forEach(o);try{const i=await c({variables:{context:e,clientContext:t,request:{targetUrl:a,propertyContext:n}}});null==r||r({type:At.DATA,data:i.data.createAffiliateLink})}catch(f){(null==i?void 0:i.unexpectedErrorMessage)&&(null==r||r({type:At.DATA,data:i.unexpectedErrorMessage}))}},[r,s,l,c,o,e,t,a,n])}}const xn=i.J1`
  fragment AlternatePropertiesFragment on AffiliatesCarousel {
    title
    items {
      ...AffiliatesLodgingCardCarouselItemFragment
    }
    nextButton {
      accessibility
      action {
        ... on AffiliatesPagingNextAction {
          analytics {
            ...AffiliatesInteractionAnalyticEventFragment
          }
        }
      }
      disabled
      iconId
      iconTitle
    }
    previousButton {
      accessibility
      action {
        ... on AffiliatesPagingPrevAction {
          analytics {
            ...AffiliatesInteractionAnalyticEventFragment
          }
        }
      }
      disabled
      iconId
      iconTitle
    }
  }

  ${i.J1`
  fragment AffiliatesLodgingCardCarouselItemFragment on AffiliatesLodgingCardCarouselItem {
    id
    title
    subTitle
    overAllDescription
    overAllRating
    reviewsStat
    image {
      ...EGDSImageFragment
    }
    amenities {
      ...AffiliatesIconTextFragment
    }
    cardLinkAction {
      ...AffiliatesOutwardLinkActionFragment
    }
  }

  ${ze.fragment}
  ${_e}
`}
  ${Se.fragment}
  ${Re}
`,An=({data:e})=>{var t,n,i,a;const[r,o]=(0,u.useState)(0),{trackEvent:d}=et(),{trackCarouselEvent:g}=$n(),p=(0,u.useCallback)(t=>{"AffiliatesPagingNextAction"===e.nextButton.action.__typename&&"AffiliatesPagingPrevAction"===e.previousButton.action.__typename&&g(t,r,e.nextButton.action.analytics,e.previousButton.action.analytics),o(t)},[r,e,g]),h={itemsMaxHeight:!0,itemsVisible:{sm:1,md:2,lg:2},pageBy:1,peek:!0,peekAmount:{sm:128,md:128,lg:128},wrapItems:!0,navigationIconId:{next:null===(t=e.nextButton)||void 0===t?void 0:t.iconId,prev:null===(n=e.previousButton)||void 0===n?void 0:n.iconId},buttonText:{nextButton:null===(i=e.nextButton)||void 0===i?void 0:i.iconTitle,prevButton:null===(a=e.previousButton)||void 0===a?void 0:a.iconTitle},onIndexChange:p},x=e.items.map((e,t)=>{const n=e.cardLinkAction.url;return(0,m.jsxs)(G.g,{border:!0,children:[(0,m.jsx)(Se,{data:Te(Te({__typename:"Image",url:"",description:"Alternate property image"},e.image||{}),{},{aspectRatio:he.THREE_TWO})}),(0,m.jsx)(z.w,{children:(0,m.jsx)("a",{target:"_blank",href:n,rel:"noopener",onClick:()=>{"AffiliatesOutwardLinkAction"===e.cardLinkAction.__typename&&e.cardLinkAction.analytics.forEach(d)},children:e.title})}),(0,m.jsx)(U.E,{children:(0,m.jsxs)(s.X,{direction:"column",space:"three",children:[(0,m.jsxs)(s.X,{direction:"column",space:"one",children:[(0,m.jsx)(c.M,{tag:"h4",size:6,children:e.title}),(0,m.jsx)(f.D,{size:300,children:e.subTitle})]}),(0,m.jsx)(s.X,{direction:"column",space:"two",children:(e.amenities||[]).map((e,t)=>(0,m.jsx)(l.C,{children:(0,m.jsx)(ze,{data:e})},`Amenity - ${t}`))}),(0,m.jsxs)(f.D,{size:300,children:[(0,m.jsx)(f.D,{inline:"strong",children:e.overAllRating})," ",e.overAllDescription," ",e.reviewsStat]})]})})]},`Alternate Property - ${t}`)});return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(c.M,{tag:"h3",size:5,children:e.title}),(0,m.jsx)(W._N,Te(Te({},h),{},{children:x}))]})};An.displayName="AlternateProperties",An.fragment=xn;const vn=i.J1`
  fragment AvgStayFragment on AffiliatesContent {
    title
    subtitle
    description
  }
`,yn=({data:e})=>(0,m.jsx)(G.g,{border:!0,padded:!0,children:(0,m.jsxs)(s.X,{direction:"column",space:"one",children:[(0,m.jsx)(l.C,{children:(0,m.jsx)(c.M,{tag:"h3",size:6,children:null==e?void 0:e.title})}),(0,m.jsx)(l.C,{children:(0,m.jsx)(f.D,{size:200,children:null==e?void 0:e.subtitle})})]})});yn.displayName="AvgStay",yn.fragment=vn;const jn=i.J1`
  fragment CommissionInfoFragment on AffiliatesCommissionInfo {
    avgBookingValue {
      title
      value
    }
    brandDomain
    brandLogo {
      ...EGDSMarkFragment
    }
    commissionRate {
      title
      value
    }
    estimatedCommission {
      title
      value
    }
    title
    validityPeriod {
      title
      value
    }
  }

  ${Le.fragment}
`,Cn=({data:e})=>(0,m.jsxs)(G.g,{padded:!0,border:!0,children:[(0,m.jsx)(c.M,{tag:"h3",children:null==e?void 0:e.title}),(0,m.jsx)(r.N,{margin:{blockstart:"one"},children:(0,m.jsxs)(s.X,{alignItems:"center",space:"two",children:[(null==e?void 0:e.brandLogo)&&(0,m.jsx)(Le,{data:Te(Te({},e.brandLogo),{},{size:"4"})}),(0,m.jsx)(f.D,{size:100,children:null==e?void 0:e.brandDomain})]})}),(0,m.jsx)(r.N,{margin:{blockstart:"three"},children:(0,m.jsxs)(J.w,{space:"three",columns:["1fr","1fr"],children:[(null==e?void 0:e.estimatedCommission)&&(0,m.jsx)(H.T,{children:(0,m.jsxs)(s.X,{direction:"column",space:"one",children:[(0,m.jsx)(f.D,{theme:"positive",size:300,children:e.estimatedCommission.title}),(0,m.jsx)(f.D,{inline:"strong",theme:"positive",size:500,children:e.estimatedCommission.value})]})}),(null==e?void 0:e.avgBookingValue)&&(0,m.jsx)(H.T,{children:(0,m.jsxs)(s.X,{direction:"column",space:"one",children:[(0,m.jsx)(f.D,{size:300,children:e.avgBookingValue.title}),(0,m.jsx)(f.D,{inline:"strong",size:500,children:e.avgBookingValue.value})]})}),(0,m.jsx)(H.T,{children:(0,m.jsx)(s.X,{children:(0,m.jsxs)(s.X,{direction:"column",space:"one",children:[(0,m.jsx)(f.D,{size:200,children:null==e?void 0:e.commissionRate.title}),(0,m.jsx)(f.D,{size:400,theme:"emphasis",children:null==e?void 0:e.commissionRate.value})]})})}),(0,m.jsx)(H.T,{children:(0,m.jsx)(s.X,{children:(0,m.jsxs)(s.X,{direction:"column",space:"one",children:[(0,m.jsx)(f.D,{size:200,children:null==e?void 0:e.validityPeriod.title}),(0,m.jsx)(f.D,{size:400,theme:"emphasis",children:null==e?void 0:e.validityPeriod.value})]})})})]})})]});Cn.displayName="CommissionInfo",Cn.fragment=jn;const Sn=i.J1`
  fragment AffiliatesHighlightedReviewFragment on AffiliatesHighlightedReview {
    date
    rating
    reviewerName
    text
    textControl {
      collapsedAccessibilityText
      collapsedLabel
      expanded
      expandedAccessibilityText
      expandedLabel
      items
      lines
    }
    title
  }
`,En=i.J1`
  fragment HighlightedReviewsFragment on AffiliatesHighlightedReviews {
    criticalReview {
      ...AffiliatesHighlightedReviewFragment
    }
    infoButton {
      action {
        ... on AffiliatesShowHighlightedReviewsInfoAction {
          analytics {
            ...AffiliatesInteractionAnalyticEventFragment
          }
        }
      }
      button {
        accessibility
        disabled
        icon {
          ...EGDSIconFragment
        }
        primary
      }
    }
    infoDialog {
      closeButton {
        action {
          ... on AffiliatesCloseAction {
            analytics {
              ...AffiliatesInteractionAnalyticEventFragment
            }
          }
        }
        button {
          accessibility
          disabled
          icon {
            ...EGDSIconFragment
          }
          primary
        }
        showActionProgress
      }
      message {
        ...AffiliatesSpannableTextFragment
      }
    }
    positiveReview {
      ...AffiliatesHighlightedReviewFragment
    }
    title
  }
  ${Re}
  ${dt.fragment}
  ${ge.fragment}
  ${Sn}
`,kn=({data:e})=>{var t,n,i;const{trackEvent:a}=et(),{infoButton:l,infoDialog:p}=e,[h,x]=(0,u.useState)(null==e||null===(t=e.positiveReview)||void 0===t?void 0:t.textControl.expanded),[A,v]=(0,u.useState)(null==e||null===(n=e.criticalReview)||void 0===n?void 0:n.textControl.expanded),y=(0,u.useRef)(null),[j,S]=(0,u.useState)(!1),E=(0,u.useCallback)(()=>{var e,t;const n=!j;let i;S(!j),n&&"AffiliatesShowHighlightedReviewsInfoAction"===(null==l||null===(e=l.action)||void 0===e?void 0:e.__typename)?i=l.action.analytics:n||"AffiliatesCloseAction"!==(null==p||null===(t=p.closeButton)||void 0===t||null===(t=t.action)||void 0===t?void 0:t.__typename)||(i=p.closeButton.action.analytics),null==i||i.forEach(a)},[S,a,j,l.action,p.closeButton]);return(0,m.jsx)(G.g,{padded:!0,border:!0,children:(0,m.jsxs)(s.X,{direction:"column",space:"four",children:[(0,m.jsxs)(s.X,{alignItems:"start",space:"one",children:[(0,m.jsx)(c.M,{tag:"h3",size:7,children:null==e?void 0:e.title}),(null==e||null===(i=e.infoButton.button.icon)||void 0===i?void 0:i.token)&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Z.t,{children:(0,m.jsx)("button",{type:"button",onClick:E,ref:y,children:(0,m.jsx)(g.LD,{name:e.infoButton.button.icon.token,id:e.infoButton.button.icon.id,description:e.infoButton.button.icon.description,title:e.infoButton.button.icon.description})})}),(0,m.jsx)(_.K,{isVisible:j,children:(0,m.jsxs)(w.t,{position:{inline:"leading",block:"trailing"},isVisible:j,type:"popover",triggerRef:y,onDismiss:E,children:[(0,m.jsx)(D.t,{children:(0,m.jsx)(C.q,{type:"button",onClick:E,children:(0,m.jsx)(g.LD,{name:"close"})})}),(0,m.jsx)(r.N,{padding:{inlinestart:"six",inlineend:"unset"},children:(0,m.jsx)(N.Y,{children:(0,m.jsxs)(d.u,{children:[" ",e.infoDialog.message.inlineContent[0].text]})})})]})})]})]}),(0,m.jsxs)(U.E,{padded:!1,children:[(null==e?void 0:e.positiveReview)&&(0,m.jsxs)(s.X,{direction:"column",space:"two",children:[(0,m.jsxs)(s.X,{direction:"column",space:"one",children:[(0,m.jsx)(f.D,{size:200,theme:"positive",children:e.positiveReview.title}),(0,m.jsx)(f.D,{size:400,weight:"medium",theme:"emphasis",children:e.positiveReview.rating}),(0,m.jsx)(f.D,{size:300,weight:"medium",theme:"standard",children:e.positiveReview.reviewerName}),(0,m.jsx)(f.D,{size:200,weight:"regular",theme:"standard",children:e.positiveReview.date})]}),(0,m.jsx)(Q.A,{isVisible:h,handleClick:()=>x(e=>!e),lines:e.positiveReview.textControl.lines||0,expandLabel:e.positiveReview.textControl.collapsedLabel,collapseLabel:e.positiveReview.textControl.expandedLabel,expandA11yLabel:e.positiveReview.textControl.collapsedAccessibilityText||"",collapseA11yLabel:e.positiveReview.textControl.expandedAccessibilityText||"",hideScrim:!0,children:(0,m.jsx)(d.u,{children:e.positiveReview.text})})]}),(null==e?void 0:e.criticalReview)&&(null==e?void 0:e.positiveReview)&&(0,m.jsx)(o.j,{}),(null==e?void 0:e.criticalReview)&&(0,m.jsxs)(s.X,{direction:"column",space:"two",children:[(0,m.jsxs)(s.X,{direction:"column",space:"one",children:[(0,m.jsx)(f.D,{size:200,theme:"negative",children:e.criticalReview.title}),(0,m.jsx)(f.D,{size:400,weight:"medium",theme:"emphasis",children:e.criticalReview.rating}),(0,m.jsx)(f.D,{size:300,weight:"medium",theme:"standard",children:e.criticalReview.reviewerName}),(0,m.jsx)(f.D,{size:200,weight:"regular",theme:"standard",children:e.criticalReview.date})]}),(0,m.jsx)(Q.A,{isVisible:A,handleClick:()=>v(e=>!e),lines:e.criticalReview.textControl.lines||0,expandLabel:e.criticalReview.textControl.collapsedLabel,collapseLabel:e.criticalReview.textControl.expandedLabel,expandA11yLabel:e.criticalReview.textControl.collapsedAccessibilityText||"",collapseA11yLabel:e.criticalReview.textControl.expandedAccessibilityText||"",hideScrim:!0,children:(0,m.jsx)(d.u,{children:e.criticalReview.text})})]})]})]})})};kn.displayName="HighlightedReviews",kn.fragment=En;const In=i.J1`
  fragment AffiliatesImageCarouselItemFragment on AffiliatesImageCarouselItem {
    card {
      description
      id
      image {
        ...EGDSImageFragment
      }
      subTitle
      title
    }
    cardLinkAction {
      ...AffiliatesOutwardLinkActionFragment
    }
  }

  ${_e}
  ${Se.fragment}
`,bn=i.J1`
  fragment PopularPlacesToVisitFragment on AffiliatesCarousel {
    title
    items {
      ...AffiliatesImageCarouselItemFragment
    }
    nextButton {
      accessibility
      action {
        ... on AffiliatesPagingNextAction {
          analytics {
            ...AffiliatesInteractionAnalyticEventFragment
          }
        }
      }
      disabled
      iconId
      iconTitle
    }
    previousButton {
      accessibility
      action {
        ... on AffiliatesPagingPrevAction {
          analytics {
            ...AffiliatesInteractionAnalyticEventFragment
          }
        }
      }
      disabled
      iconId
      iconTitle
    }
  }

  ${Re}
  ${In}
`,Tn=({data:e})=>{var t,n,i,a;const{trackEvent:r}=et(),{trackCarouselEvent:o}=$n(),[d,g]=(0,u.useState)(0),p=(0,u.useCallback)(t=>{"AffiliatesPagingNextAction"===e.nextButton.action.__typename&&"AffiliatesPagingPrevAction"===e.previousButton.action.__typename&&o(t,d,e.nextButton.action.analytics,e.previousButton.action.analytics),g(t)},[d,e,o]),h={carouselName:"Popular places to visit ",carouselHeaderText:"Popular places to visit carousel",itemsMaxHeight:!0,itemsVisible:{sm:1,md:2,lg:2},pageBy:1,peek:!0,peekAmount:{sm:150,md:150,lg:150},wrapItems:!0,navigationIconId:{next:null===(t=e.nextButton)||void 0===t?void 0:t.iconId,prev:null===(n=e.previousButton)||void 0===n?void 0:n.iconId},buttonText:{nextButton:null===(i=e.nextButton)||void 0===i?void 0:i.iconTitle,prevButton:null===(a=e.previousButton)||void 0===a?void 0:a.iconTitle},onIndexChange:p},x=e.items.map((e,t)=>{const n=e.cardLinkAction.url,i=Te(Te({__typename:"Image",url:"",description:"Popular place to visit image"},e.card.image||{}),{},{aspectRatio:he.THREE_TWO});return(0,m.jsxs)(G.g,{border:!0,children:[!!n&&(0,m.jsx)(z.w,{children:(0,m.jsxs)("a",{href:n,target:"_blank",onClick:()=>{"AffiliatesOutwardLinkAction"===e.cardLinkAction.__typename&&e.cardLinkAction.analytics.forEach(r)},rel:"noopener",children:["Link to ",e.card.title]})}),(0,m.jsx)(Se,{data:i}),(0,m.jsx)(U.E,{children:(0,m.jsxs)(s.X,{direction:"column",space:"four",children:[(0,m.jsx)(l.C,{children:(0,m.jsxs)("div",{children:[(0,m.jsx)(c.M,{tag:"h4",size:7,children:e.card.title}),(0,m.jsx)(f.D,{size:200,children:e.card.subTitle})]})}),(0,m.jsx)(l.C,{children:(0,m.jsx)(f.D,{size:200,children:e.card.description})})]})})]},`Popular place - ${t}`)});return(0,m.jsxs)(s.X,{direction:"column",space:"six",children:[(0,m.jsx)(l.C,{children:(0,m.jsx)(c.M,{tag:"h3",size:5,children:e.title})}),(0,m.jsx)(l.C,{children:(0,m.jsx)(W._N,Te(Te({},h),{},{children:x}))})]})};Tn.displayName="PopularPlacesToVisit",Tn.fragment=bn;const Fn=i.J1`
  fragment RatingsFragment on AffiliatesRatings {
    categories {
      ... on AffiliatesContent {
        description
        subtitle
        title
      }
    }
    grades {
      ... on EGDSProgressBar {
        accessibilityLabel
        percent
        progressDescription
        title
      }
    }
    overAllDescription
    overAllRating
    title
  }
`,Ln=({data:e})=>(0,m.jsx)(G.g,{padded:!0,border:!0,children:(0,m.jsxs)(s.X,{direction:"column",space:"four","data-cy":"stats-ratings",children:[(0,m.jsx)(c.M,{tag:"h3",size:6,children:e.title}),(0,m.jsxs)(s.X,{alignItems:"center",space:"two",children:[(0,m.jsx)(f.D,{size:700,weight:"medium",children:e.overAllRating}),(0,m.jsx)(f.D,{size:500,weight:"medium",children:e.overAllDescription})]}),(0,m.jsx)(s.X,{direction:"column",space:"two",children:e.grades.map(e=>e.title&&e.progressDescription?(0,m.jsx)(ee.C,{percent:e.percent,title:e.title,progressDescription:e.progressDescription},e.title):null)}),(0,m.jsx)(J.w,{space:"four",columns:["1fr","1fr"],children:e.categories.map(e=>(0,m.jsx)(H.T,{children:(0,m.jsxs)(s.X,{direction:"column",space:"one",children:[(0,m.jsx)(f.D,{size:500,weight:"medium",children:e.title}),(0,m.jsx)(f.D,{size:200,children:e.description})]})},e.description))})]})});Ln.displayName="Ratings",Ln.fragment=Fn;const Rn=i.J1`
  fragment StatsSheetContentFragment on AffiliatesLodgingStatsSuccessResponse {
    lodgingInfo {
      propertyImage {
        ...EGDSImageFragment
      }
      propertyName
    }
    commissionInfo {
      ...CommissionInfoFragment
    }
    analyticsInfo {
      title
      avgStay {
        ...AvgStayFragment
      }
      guestReviews {
        ratings {
          ...RatingsFragment
        }
        highlightedReviews {
          ...HighlightedReviewsFragment
        }
      }
      alternateProperties {
        ...AlternatePropertiesFragment
      }
      popularPlacesToVisit {
        ...PopularPlacesToVisitFragment
      }
    }
    closeAction {
      analytics {
        ...AffiliatesInteractionAnalyticEventFragment
      }
    }
    impressionAnalytics {
      ...AffiliatesImpressionAnalyticEventFragment
    }
    getLink {
      ...AffiliatesStandardLinkFragment
      action {
        ...AffiliatesCreateLinkActionFragment
      }
    }
  }

  ${Se.fragment}
  ${Cn.fragment}
  ${yn.fragment}
  ${Ln.fragment}
  ${kn.fragment}
  ${An.fragment}
  ${Tn.fragment}
  ${Be}
  ${we}
  ${Re}
  ${De}
`,wn=({data:e})=>{var t,n,i,a,d,f,u,g,x,A,v,y,j,C,S,E;const k=!!(null===(t=e.analyticsInfo)||void 0===t||null===(t=t.guestReviews)||void 0===t?void 0:t.highlightedReviews)||!!(null===(n=e.analyticsInfo)||void 0===n?void 0:n.avgStay)||!!(null===(i=e.analyticsInfo)||void 0===i||null===(i=i.guestReviews)||void 0===i?void 0:i.ratings);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(p.M,{ratio:p.l.R16_9,children:(0,m.jsx)(h.F,{placeholderImage:!0,alt:null===(a=e.lodgingInfo.propertyImage)||void 0===a?void 0:a.description,src:null===(d=e.lodgingInfo.propertyImage)||void 0===d?void 0:d.url})}),(0,m.jsx)(r.N,{margin:"six",children:(0,m.jsx)("div",{children:(0,m.jsxs)(s.X,{direction:"column",space:"four",children:[!!(null===(f=e.lodgingInfo)||void 0===f?void 0:f.propertyName)&&(0,m.jsx)(l.C,{children:(0,m.jsx)(c.M,{tag:"h2",size:4,typeStyle:{customStyle:"headline-large"},children:e.lodgingInfo.propertyName})}),!!e.commissionInfo&&(0,m.jsx)(l.C,{children:(0,m.jsx)(Cn,{data:e.commissionInfo})})]})})}),(!!(null===(u=e.analyticsInfo)||void 0===u?void 0:u.popularPlacesToVisit)||!!(null===(g=e.analyticsInfo)||void 0===g?void 0:g.alternateProperties)||k)&&(0,m.jsx)(o.j,{blockMargin:e.commissionInfo?"twelve":"four"}),(0,m.jsx)(r.N,{margin:"six",children:(0,m.jsx)("div",{children:(0,m.jsxs)(s.X,{direction:"column",space:"six",children:[!!(null===(x=e.analyticsInfo)||void 0===x?void 0:x.title)&&k&&(0,m.jsx)(l.C,{children:(0,m.jsx)(c.M,{tag:"h2",size:4,typeStyle:{customStyle:"headline-large"},children:e.analyticsInfo.title})}),!!(null===(A=e.analyticsInfo)||void 0===A?void 0:A.avgStay)&&(0,m.jsx)(l.C,{children:(0,m.jsx)(yn,{data:e.analyticsInfo.avgStay})}),!!(null===(v=e.analyticsInfo)||void 0===v||null===(v=v.guestReviews)||void 0===v?void 0:v.ratings)&&(0,m.jsx)(l.C,{children:(0,m.jsx)(Ln,{data:e.analyticsInfo.guestReviews.ratings})}),!!(null===(y=e.analyticsInfo)||void 0===y||null===(y=y.guestReviews)||void 0===y?void 0:y.highlightedReviews)&&(0,m.jsx)(l.C,{children:(0,m.jsx)(kn,{data:e.analyticsInfo.guestReviews.highlightedReviews})}),!!(null===(j=e.analyticsInfo)||void 0===j?void 0:j.alternateProperties)&&(0,m.jsx)(l.C,{children:(0,m.jsx)(An,{data:e.analyticsInfo.alternateProperties})})]})})}),!!(null===(C=e.analyticsInfo)||void 0===C?void 0:C.popularPlacesToVisit)&&(k||!!(null===(S=e.analyticsInfo)||void 0===S?void 0:S.alternateProperties))&&(0,m.jsx)(o.j,{blockMargin:"twelve"}),!!(null===(E=e.analyticsInfo)||void 0===E?void 0:E.popularPlacesToVisit)&&(0,m.jsx)(r.N,{margin:"six",children:(0,m.jsx)("div",{children:(0,m.jsx)(Tn,{data:e.analyticsInfo.popularPlacesToVisit})})})]})};wn.displayName="StatsSheetContent",wn.fragment=Rn;const Nn=i.J1`
  fragment StatsSheetFailureContentFragment on AffiliatesStatsFailureResponse {
    banner {
      ...EGDSBannerFragment
    }
    closeAction {
      analytics {
        ...AffiliatesInteractionAnalyticEventFragment
      }
    }
    getLink {
      ...AffiliatesStandardLinkFragment
      action {
        ...AffiliatesCreateLinkActionFragment
      }
    }
    impressionAnalytics {
      ...AffiliatesImpressionAnalyticEventFragment
    }
  }
  ${pe.fragment}
  ${we}
  ${Re}
  ${Be}
  ${De}
`,Dn=({data:e})=>(0,m.jsx)(ut,{data:e.banner});Dn.displayName="StatsSheetFailureContent",Dn.fragment=Nn;const _n=i.J1`
  query GetStatsQuery($context: ContextInput!, $clientContext: AffiliatesClientContextInput!, $request: AffiliatesStatsRequestInput!) {
    affiliatesStats(context: $context, clientContext: $clientContext, request: $request) {
      ...StatsSheetContentFragment
      ...StatsSheetFailureContentFragment
    }
  }
  ${wn.fragment}
  ${Dn.fragment}
`;function Bn(){const{context:e}=(0,R.R)(),{clientContext:t,propertyContext:n,setActiveMenu:a,setActiveSheet:s,setStatsSheetContent:l}=Ct(),{trackEvent:r}=et(),[o]=function(e){const{refetch:t}=(0,i.IT)(e,{context:{shouldLogPerformance:!0},skip:!0});return[(0,u.useCallback)(({variables:e})=>t(e),[t])]}(_n);return{openStatsSheet:(0,u.useCallback)(async i=>{var c;null==l||l({type:At.LOADING}),null==a||a(pt.NONE),null==s||s(ht.STATS),null==i||null===(c=i.analytics)||void 0===c||c.forEach(r);const d={context:e,clientContext:t,request:{propertyContext:n}};try{const e=await o({variables:d});null==l||l({type:At.DATA,data:e.data.affiliatesStats})}catch(f){(null==i?void 0:i.unexpectedErrorMessage)&&(null==l||l({type:At.DATA,data:i.unexpectedErrorMessage}))}},[l,a,s,o,r,e,t,n])}}const $n=()=>{const{trackEvent:e}=et();return{trackCarouselEvent:(0,u.useCallback)((t,n,i,a)=>{t>n?null==i||i.forEach(e):t<n&&(null==a||a.forEach(e))},[e])}};function Mn(e){const t=(0,u.useMemo)(()=>(e||[]).find(e=>"EGDSRequiredInputValidation"===e.__typename),[e]),n=(0,u.useMemo)(()=>(e||[]).find(e=>"EGDSRegexInputValidation"===e.__typename),[e]);return{required:null==t?void 0:t.errorMessage,pattern:n?{value:new RegExp(n.pattern),message:n.errorMessage}:void 0}}function On(e){return(0,u.useMemo)(()=>e.reduce((e,{key:t,value:n})=>(t&&(e[t]=n),e),{}),[e])}const Pn=i.J1`
  fragment AffiliatesLogoFragment on AffiliatesLogo {
    mark {
      ...EGDSMarkFragment
    }
    action {
      ...AffiliatesOutwardLinkActionFragment
    }
  }

  ${_e}
  ${Le.fragment}
`,Vn=({data:e})=>{const{trackEvent:t}=et(),n=(0,u.useCallback)(()=>{e.action.analytics.forEach(t)},[t,e]);return(0,m.jsx)(T.i,{theme:"inverse",children:(0,m.jsx)("a",{href:e.action.url,target:"_blank",rel:"noopener",onClick:n,children:(0,m.jsx)(Le,{data:Te(Te({},e.mark),{},{size:"LARGE"})})})})};Vn.displayName="AffiliatesLogo",Vn.fragment=Pn;const Gn=i.J1`
  fragment AffiliatesCloseToolbarDialogFragment on AffiliatesCloseToolbarDialog {
    title
    content {
      ...AffiliatesSpannableTextFragment
    }
    cancelButton {
      ...AffiliatesButtonFragment
      action {
        ... on AffiliatesCancelAction {
          analytics {
            ...AffiliatesInteractionAnalyticEventFragment
          }
        }
      }
    }
    closeToolbarButton {
      ...AffiliatesButtonFragment
      action {
        ... on AffiliatesCloseToolbarAction {
          analytics {
            ...AffiliatesInteractionAnalyticEventFragment
          }
          unexpectedErrorMessage {
            ...EGDSBannerFragment
          }
        }
      }
    }
  }

  ${dt.fragment}
  ${Ve.fragment}
  ${pe.fragment}
  ${Re}
`,Un=({data:e})=>{const{trackEvent:t}=et(),n=(0,u.useRef)(null),[a,s,l]=(0,se.useDialog)(mt.CLOSE_TOOLBAR),[o,{loading:d}]=(0,i.n_)(gt),{context:f}=(0,R.R)(),{clientContext:g,setIsToolbarClosed:p}=Ct(),[h,x]=(0,u.useState)(null),A=e.closeToolbarButton.action,v=e.cancelButton.action,j=(0,u.useMemo)(()=>!0===e.closeToolbarButton.showActionProgress&&d,[e.closeToolbarButton.showActionProgress,d]),S=(0,u.useCallback)(async()=>{x(null),"AffiliatesCloseToolbarAction"===A.__typename&&A.analytics.forEach(t);try{var e;const n=null===(e=(await o({variables:{context:f,clientContext:g}})).data)||void 0===e?void 0:e.closeAffiliateToolbar;"AffiliatesCloseToolbarSuccessResponse"===(null==n?void 0:n.__typename)?(null==p||p(!0),s.closeDialog()):"AffiliatesCloseToolbarFailureResponse"===(null==n?void 0:n.__typename)&&x(n.banner),null==n||n.impressionAnalytics.forEach(t)}catch(n){"AffiliatesCloseToolbarAction"===A.__typename&&x(A.unexpectedErrorMessage)}},[t,A,s,o,f,g,p]),E=(0,u.useCallback)(()=>{"AffiliatesCancelAction"===v.__typename&&v.analytics.forEach(t),s.closeDialog()},[t,v,s]);return(0,u.useEffect)(()=>{a||x(null)},[a]),(0,m.jsx)(_.K,{isVisible:a,children:(0,m.jsx)(l,{children:(0,m.jsx)(le.Q,{returnFocusOnClose:!0,dialogShow:a,triggerRef:n,children:(0,m.jsxs)(re.h,{children:[(0,m.jsx)(c.M,{tag:"h2",size:5,children:e.title},`${mt.CLOSE_TOOLBAR}.content.heading`),e.content.map((e,t)=>(0,m.jsx)(r.N,{margin:{blockstart:"three"},children:(0,m.jsx)("div",{children:(0,m.jsx)(dt,{data:e})})},`Affiliates-Close-Toolbar-Dialog-Content-${t}`)),h&&(0,m.jsx)(r.N,{margin:{blockstart:"three"},children:(0,m.jsx)("div",{children:(0,m.jsx)(pe,{data:h})})}),(0,m.jsxs)(oe.l,{stacked:!0,children:[(0,m.jsx)(y.y,{disabled:j,onClick:S,children:j?(0,m.jsx)(r.N,{padding:{blockstart:"one"},children:(0,m.jsx)("div",{children:(0,m.jsx)(b.v,{isSmall:!0,isDarkBackground:!0})})}):e.closeToolbarButton.button.primary}),(0,m.jsx)(C.q,{onClick:E,children:e.cancelButton.button.primary})]},"EGDSDialogFooter")]},`${mt.CLOSE_TOOLBAR}.content`)})})})};Un.displayName="AffiliatesCloseToolbarDialog",Un.fragment=Gn;const zn=i.J1`
  fragment AffiliatesPartnerDetailsFragment on AffiliatesPartnerDetails {
    name
    email
    linkHistory {
      ...AffiliatesStandardLinkFragment
      action {
        ...AffiliatesOutwardLinkActionFragment
      }
    }
    account {
      ...AffiliatesStandardLinkFragment
      action {
        ...AffiliatesOutwardLinkActionFragment
      }
    }
    help {
      ...AffiliatesStandardLinkFragment
      action {
        ...AffiliatesOutwardLinkActionFragment
      }
    }
    openCloseToolbarDialogButton {
      ...AffiliatesButtonFragment
      action {
        ... on AffiliatesOpenCloseToolbarDialogAction {
          analytics {
            ...AffiliatesInteractionAnalyticEventFragment
          }
        }
      }
    }
    closeToolbarDialog {
      ...AffiliatesCloseToolbarDialogFragment
    }
  }

  ${Be}
  ${_e}
  ${Ve.fragment}
  ${Un.fragment}
  ${Re}
`,Jn=({data:e})=>{var t,n,i,a,c,d,g;const{trackEvent:p}=et(),[,h]=(0,se.useDialog)(mt.CLOSE_TOOLBAR),{setActiveMenu:x}=Ct(),A=null==e||null===(t=e.linkHistory)||void 0===t?void 0:t.action,v=null==e||null===(n=e.account)||void 0===n?void 0:n.action,y=null==e||null===(i=e.help)||void 0===i?void 0:i.action,j=null==e||null===(a=e.openCloseToolbarDialogButton)||void 0===a?void 0:a.action,C=null==e?void 0:e.openCloseToolbarDialogButton,S=(0,u.useCallback)(e=>{e.analytics.forEach(p),null==x||x(pt.NONE)},[p,x]),E=(0,u.useCallback)(()=>{"AffiliatesOpenCloseToolbarDialogAction"===j.__typename&&j.analytics.forEach(p),h.openDialog(),null==x||x(pt.NONE)},[p,x,j,h]);return(0,m.jsxs)(s.X,{direction:"column",children:[(0,m.jsx)(l.C,{children:(0,m.jsx)(r.N,{margin:{block:"three",inline:"six"},children:(0,m.jsxs)("div",{children:[(0,m.jsx)(f.D,{size:400,weight:"medium",theme:"emphasis",whiteSpace:"nowrap",children:null==e?void 0:e.name}),(0,m.jsx)(f.D,{size:200,weight:"regular",theme:"standard",whiteSpace:"nowrap",overflow:"truncate",children:(0,m.jsx)("span",{title:null==e?void 0:e.email,children:null==e?void 0:e.email})})]})})}),(0,m.jsx)(l.C,{children:(0,m.jsx)("div",{children:(0,m.jsx)(o.j,{blockMargin:"three"})})}),(0,m.jsx)(l.C,{children:(0,m.jsx)(ae.z,{items:[{attributes:{role:"menuitem"},className:"uitk-list-item",label:null==e||null===(c=e.linkHistory)||void 0===c?void 0:c.text,typeAnchor:!0,href:null==A?void 0:A.url,target:"_blank",rel:"noopener",onClick:()=>S(A)},{attributes:{role:"menuitem"},className:"uitk-list-item",label:null==e||null===(d=e.account)||void 0===d?void 0:d.text,typeAnchor:!0,href:null==v?void 0:v.url,target:"_blank",rel:"noopener",onClick:()=>S(v)},{attributes:{role:"menuitem"},className:"uitk-list-item",label:null==e||null===(g=e.help)||void 0===g?void 0:g.text,typeAnchor:!0,href:null==y?void 0:y.url,target:"_blank",rel:"noopener",onClick:()=>S(y)}]})}),(0,m.jsx)(l.C,{children:(0,m.jsx)("div",{children:(0,m.jsx)(o.j,{blockMargin:"three"})})}),(0,m.jsx)(l.C,{children:(0,m.jsx)(ae.z,{items:[{attributes:{role:"menuitem"},className:"uitk-list-item",label:e.openCloseToolbarDialogButton.button.primary||"",icon:C.button.icon?{component:(0,m.jsx)(ge,{data:C.button.icon})}:{},typeAnchor:!1,onClick:E}]})})]})};Jn.displayName="AffiliatesPartnerDetails",Jn.fragment=zn;const Hn=i.J1`
  fragment StripePageLinkButtonFragment on AffiliatesButton {
    ...AffiliatesButtonFragment
    action {
      ...AffiliatesCreateLinkActionFragment
    }
  }

  ${Ve.fragment}
  ${De}
`,Xn=({data:{button:e,action:t}})=>{const{linkSheetTriggerRef:n}=Ct(),{openLinkSheet:i}=hn(),a=(0,u.useCallback)(async()=>{"AffiliatesCreateLinkAction"===t.__typename&&await i(t)},[i,t]);return(0,m.jsxs)(ce.LM,{children:[(0,m.jsx)(ce.NP,{children:(0,m.jsxs)(y.y,{domRef:n,size:v.V.MEDIUM,isFullWidth:!0,disabled:!1,onClick:a,children:[e.icon&&(0,m.jsx)(g.LD,{name:e.icon.token,size:g.So.MEDIUM}),(0,m.jsx)("span",{className:"uitk-text-white-space-nowrap",children:e.primary})]})}),(0,m.jsx)(ce.rw,{children:(0,m.jsxs)(y.y,{domRef:n,size:v.V.MEDIUM,inverse:!0,disabled:!1,onClick:a,children:[e.icon&&(0,m.jsx)(g.LD,{name:e.icon.token,size:g.So.MEDIUM}),(0,m.jsx)("span",{className:"uitk-text-white-space-nowrap",children:e.primary})]})})]})};Xn.displayName="StripePageLinkButton",Xn.fragment=Hn;const Yn=i.J1`
  fragment StripePageStatsButtonFragment on AffiliatesButton {
    ...AffiliatesButtonFragment
    action {
      ...AffiliatesViewStatsActionFragment
    }
  }

  ${Ve.fragment}
  ${$e}
`,qn=({data:{button:e,action:t}})=>{const{statsSheetTriggerRef:n}=Ct(),{openStatsSheet:i}=Bn(),a=(0,u.useCallback)(async()=>{"AffiliatesViewStatsAction"===t.__typename&&await i(t)},[t,i]);return(0,m.jsxs)(ce.LM,{children:[(0,m.jsx)(ce.NP,{children:(0,m.jsxs)(j.y,{domRef:n,size:v.V.MEDIUM,isFullWidth:!0,disabled:e.disabled,onClick:a,children:[e.icon&&(0,m.jsx)(g.LD,{name:e.icon.token,size:g.So.MEDIUM}),(0,m.jsx)("span",{className:"uitk-text-white-space-nowrap",children:e.primary})]})}),(0,m.jsx)(ce.rw,{children:(0,m.jsxs)(j.y,{domRef:n,size:v.V.MEDIUM,inverse:!0,disabled:e.disabled,onClick:a,children:[e.icon&&(0,m.jsx)(g.LD,{name:e.icon.token,size:g.So.MEDIUM}),(0,m.jsx)("span",{className:"uitk-text-white-space-nowrap",children:e.primary})]})})]})};function Kn({data:e}){switch(e.__typename){case"AffiliatesLodgingStatsSuccessResponse":return(0,m.jsx)(wn,{data:e});case"AffiliatesStatsFailureResponse":return(0,m.jsx)(Dn,{data:e});default:return(0,m.jsx)(ut,{data:e})}}function Wn({data:e,onClick:t}){switch(null==e?void 0:e.__typename){case"AffiliatesLodgingStatsSuccessResponse":case"AffiliatesStatsFailureResponse":return(null==e?void 0:e.getLink)?(0,m.jsx)($.p,{onClick:t,children:null==e?void 0:e.getLink.text}):null;default:return null}}qn.displayName="StripePageStatsButton",qn.fragment=Yn;const Qn=({onSheetToolbarClick:e,loading:t,data:n})=>{const{trackEvent:i}=et(),{statsSheetTriggerRef:a,activeSheet:s,setActiveSheet:l}=Ct(),r=(0,u.useCallback)(()=>{var e;(null==l||l(ht.NONE),"UIBanner"!==(null==n?void 0:n.__typename))&&(null==n||null===(e=n.closeAction.analytics)||void 0===e||e.forEach(i))},[l,i,n]);return(0,u.useEffect)(()=>{var e;"UIBanner"!==(null==n?void 0:n.__typename)&&(null==n||null===(e=n.impressionAnalytics)||void 0===e||e.forEach(i))},[i,n]),(0,m.jsx)(_.K,{isVisible:s===ht.STATS,children:(0,m.jsxs)(w.t,{type:"side",triggerRef:a,isVisible:s===ht.STATS,children:[(0,m.jsx)(B.p,{navigationContent:{navIconLabel:"Close",onClick:r},toolbarActionContent:(0,m.jsx)(Wn,{data:n,onClick:e})}),(0,m.jsxs)(N.Y,{padded:!1,children:[t&&(0,m.jsx)(ft,{}),!t&&n&&(0,m.jsx)(Kn,{data:n})]})]})})},Zn=()=>{const{linkSheetContent:e,statsSheetContent:t}=Ct(),{openLinkSheet:n}=hn(),{openStatsSheet:i}=Bn(),a=e.type===At.LOADING,s=t.type===At.LOADING,l=(0,u.useCallback)(()=>{var t;switch(null===(t=e.data)||void 0===t?void 0:t.__typename){case"AffiliatesCreateLinkLodgingSuccessResponse":case"AffiliatesCreateLinkDefaultSuccessResponse":case"AffiliatesCreateLinkFailureResponse":var n;return i("AffiliatesViewStatsAction"===(null===(n=e.data.statsLink)||void 0===n?void 0:n.action.__typename)?e.data.statsLink.action:void 0)}},[e.data,i]),r=(0,u.useCallback)(()=>{var e;switch(null===(e=t.data)||void 0===e?void 0:e.__typename){case"AffiliatesLodgingStatsSuccessResponse":case"AffiliatesStatsFailureResponse":var i;return n("AffiliatesCreateLinkAction"===(null===(i=t.data.getLink)||void 0===i?void 0:i.action.__typename)?t.data.getLink.action:void 0)}},[n,t.data]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(mn,{onSheetToolbarClick:l,loading:a,data:e.data}),(0,m.jsx)(Qn,{onSheetToolbarClick:r,loading:s,data:t.data})]})},ei=e=>(0,m.jsx)(j.y,Te(Te({},e),{},{size:v.V.MEDIUM,inverse:!0,children:(0,m.jsx)(g.LD,{id:"eg-stripe-page-menu-icon",name:"menu",title:"Page",size:g.So.MEDIUM})})),ti=({data:e})=>{const{activeMenu:t,setActiveSheet:n,toggleActiveMenu:i}=Ct(),a=(0,u.useCallback)(()=>{null==n||n(ht.NONE),null==i||i(pt.PAGE)},[n,i]);return(0,m.jsxs)(te.p,{isOpen:t===pt.PAGE,onTriggerClick:a,children:[(0,m.jsx)(ne.N,{children:(0,m.jsx)(ei,{})}),(0,m.jsx)(ie.K,{width:260,position:ie.C.RIGHT,autoPosition:!1,children:(0,m.jsx)(r.N,{padding:{block:"three",inline:"six"},children:(0,m.jsxs)(s.X,{direction:"column",space:"six",children:[e.statsButton&&(0,m.jsx)(l.C,{children:(0,m.jsx)("div",{children:(0,m.jsx)(qn,{data:e.statsButton})})}),e.getLinkButton&&(0,m.jsx)(l.C,{children:(0,m.jsx)("div",{children:(0,m.jsx)(Xn,{data:e.getLinkButton})})})]})})})]})},ni=({data:e})=>(0,m.jsxs)(ce.LM,{children:[(0,m.jsx)(ce.NP,{children:(0,m.jsx)(ti,{data:e})}),(0,m.jsx)(ce.rw,{children:(0,m.jsxs)(s.X,{direction:"row",space:"four",children:[e.statsButton&&(0,m.jsx)(l.C,{children:(0,m.jsx)("div",{children:(0,m.jsx)(qn,{data:e.statsButton})})}),e.getLinkButton&&(0,m.jsx)(l.C,{children:(0,m.jsx)("div",{children:(0,m.jsx)(Xn,{data:e.getLinkButton})})})]})})]}),ii=["data"],ai=e=>{var t;let{data:{button:n}}=e,i=tt(e,ii);return(0,m.jsxs)(ce.LM,{children:[(0,m.jsx)(ce.NP,{children:(0,m.jsx)(C.q,Te(Te({},i),{},{size:v.V.MEDIUM,inverse:!0,children:n.icon&&(0,m.jsx)(g.LD,{id:"eg-stripe-partner-menu-icon",name:n.icon.token,title:null!==(t=n.primary)&&void 0!==t?t:"",size:g.So.MEDIUM})}))}),(0,m.jsx)(ce.rw,{children:(0,m.jsxs)(C.q,Te(Te({},i),{},{size:v.V.MEDIUM,inverse:!0,children:[n.icon&&(0,m.jsx)(g.LD,{id:"eg-stripe-partner-menu-icon",name:n.icon.token,size:g.So.MEDIUM}),(0,m.jsx)("span",{className:"uitk-text-white-space-nowrap",children:n.primary}),(0,m.jsx)(g.LD,{name:"expand_more"})]}))})]})},si=({data:e})=>{const{trackEvent:t}=et(),{activeMenu:n,setActiveSheet:i,toggleActiveMenu:a}=Ct(),s=(0,u.useCallback)(()=>{null==i||i(ht.NONE),null==a||a(pt.PARTNER),"AffiliatesOpenPartnerDetailsAction"===e.openPartnerDetailsButton.action.__typename&&e.openPartnerDetailsButton.action.analytics.forEach(t)},[a,i,t,e]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(te.p,{isOpen:n===pt.PARTNER,onTriggerClick:s,children:[(0,m.jsx)(ne.N,{children:(0,m.jsx)(ai,{data:e.openPartnerDetailsButton})}),(0,m.jsx)(ie.K,{width:260,position:ie.C.LEFT,autoPosition:!1,children:(0,m.jsx)(Jn,{data:e.partnerDetails})})]}),(0,m.jsx)(Un,{data:e.partnerDetails.closeToolbarDialog})]})},li=({data:e})=>{const{trackEvent:t}=et(),{isToolbarClosed:n}=Ct();return(0,u.useEffect)(()=>{var n;null===(n=e.impressionAnalytics)||void 0===n||n.forEach(t)},[t,e.impressionAnalytics]),n?null:(0,m.jsxs)(ce.LM,{children:[(0,m.jsx)(ce.NP,{children:(0,m.jsx)(r.N,{padding:{block:"three",inlinestart:"four",inlineend:"six"},children:(0,m.jsxs)(s.X,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,m.jsx)(l.C,{children:(0,m.jsx)("div",{children:(0,m.jsx)(si,{data:e})})}),e.logo&&(0,m.jsx)(l.C,{children:(0,m.jsx)("div",{children:(0,m.jsx)(Vn,{data:e.logo})})}),(0,m.jsx)(l.C,{children:(0,m.jsx)("div",{children:(0,m.jsx)(ni,{data:e})})})]})})}),(0,m.jsx)(ce.rw,{children:(0,m.jsx)(r.N,{padding:{block:"three",inline:"six"},children:(0,m.jsxs)(s.X,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,m.jsx)(l.C,{children:(0,m.jsx)("div",{children:(0,m.jsxs)(s.X,{direction:"row",space:"six",alignItems:"center",children:[e.logo&&(0,m.jsx)(l.C,{children:(0,m.jsx)("div",{children:(0,m.jsx)(Vn,{data:e.logo})})}),(0,m.jsx)(l.C,{children:(0,m.jsx)("div",{children:(0,m.jsx)(si,{data:e})})})]})})}),(0,m.jsx)(l.C,{children:(0,m.jsx)("div",{children:(0,m.jsx)(ni,{data:e})})})]})})})]})},ri=i.J1`
  query StripeQuery($context: ContextInput!, $clientContext: AffiliatesClientContextInput!) {
    affiliatesStripe(context: $context, clientContext: $clientContext) {
      ...AffiliatesStripeSuccessResponseFragment
    }
  }

  ${i.J1`
  fragment AffiliatesStripeSuccessResponseFragment on AffiliatesStripeSuccessResponse {
    logo {
      ...AffiliatesLogoFragment
    }
    openPartnerDetailsButton {
      ...AffiliatesButtonFragment
      action {
        ... on AffiliatesOpenPartnerDetailsAction {
          analytics {
            ...AffiliatesInteractionAnalyticEventFragment
          }
        }
      }
    }
    partnerDetails {
      ...AffiliatesPartnerDetailsFragment
    }
    statsButton {
      ...StripePageStatsButtonFragment
    }
    getLinkButton {
      ...StripePageLinkButtonFragment
    }
    impressionAnalytics {
      ...AffiliatesImpressionAnalyticEventFragment
    }
  }

  ${we}
  ${Ve.fragment}
  ${Vn.fragment}
  ${Jn.fragment}
  ${pe.fragment}
  ${Xn.fragment}
  ${qn.fragment}
`}
`,oi=({skipSsr:e,inputs:t})=>{const{context:n}=(0,R.R)(),a=(0,u.useMemo)(()=>function(e){const[t,n,i]=e.split(",").map(e=>e.trim());return{pageId:t,lineOfBusiness:Je[n],pageLocation:He[i]}}(t.pageId),[t.pageId]),s=(0,u.useMemo)(()=>Qe(t.targetUrl,t.site,a),[t.targetUrl,t.site,a]),{loading:l,data:r,error:o}=(0,i.FP)(ri,{context:{shouldLogPerformance:!0},variables:{context:n,clientContext:a},ssr:!e});return l||o||!(null==r?void 0:r.affiliatesStripe)||"AffiliatesStripeSuccessResponse"!==r.affiliatesStripe.__typename?null:(0,m.jsxs)(jt,{clientContext:a,propertyContext:s,targetUrl:t.targetUrl,children:[(0,m.jsx)(li,{data:r.affiliatesStripe}),(0,m.jsx)(Zn,{})]})};oi.displayName="sharedui-Stripe"}}]);
//# sourceMappingURL=https://bernie-assets.s3.us-west-2.amazonaws.com/landing-pwa/shared-ui-retail-affiliates-stripe.c90a49b06f204af1f518.js.map