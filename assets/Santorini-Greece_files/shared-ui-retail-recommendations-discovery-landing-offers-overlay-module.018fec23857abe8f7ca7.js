/*@license For license information please refer to shared-ui-retail-recommendations-discovery-landing-offers-overlay-module.licenses.txt*/
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[3009],{15264:function(e,n,t){t.d(n,{LT:function(){return Js},nZ:function(){return aa}});var i=t(31106),a=t(66501),r=t(84683),s=t(63112),l=t(69714),o=t(66104),d=t(33998),c=t(35784),m=t(33694),g=t(39196),u=t(82308),h=t(64155),p=t(66162),x=t(20209),y=t(18127),v=t(96540),j=t(56318),f=t(7700),S=t(22635),D=t(43140),b=t(71162),L=t(10044),I=t(74848),E=t(4648),T=t(56504),A=t(5846),N=t(86047),k=t(62403),C=t(33777),_=t(26129),G=t(85361),F=t(21317),O=t(68055),P=t(716),M=t(82652),R=t(55009),w=t(21330),B=t(96059),z=t(81042),H=t(66300),$=t(66267),U=t(21742),Y=t(4561),V=t(63912),J=t(97172),X=t(32507),W=t(38955),K=t(77511),q=t(18288),Q=t(2746),Z=t(22682),ee=t(57536),ne=t(22868),te=t(74276),ie=t(58646),ae=t(30230),re=t(65675),se=t(39128),le=t(96906),oe=t(1959),de=t(15286),ce=t(62242),me=t(34950),ge=t(4304),ue=t(53167),he=t(33931),pe=t(21348),xe=t(65845),ye=t(63771),ve=t(92991),je=t(69279),fe=t(53519),Se=t(79943);function De(e,n){return null==e?void 0:e.map(e=>({messageContent:JSON.parse(e.messageContent),schemaName:e.schemaName})).concat(n||[])}function be(e,n){n(e.referrerId,e.linkName,void 0,De(e.uisPrimeMessages))}const Le=(e,n)=>{var t,i;let a;if(!n)return{clientPayload:void 0,serverPayload:n};try{a=JSON.parse(n)}catch(c){return{clientPayload:void 0,serverPayload:n}}const{events:r}=a,s=Object.keys((null==r?void 0:r[e])||{});s.sort((e,n)=>parseInt(n.slice(1),10)-parseInt(e.slice(1),10));const l=s[0],o=l?null===(t=r[e])||void 0===t||null===(t=t[l])||void 0===t?void 0:t.event_data:void 0,d=null==o||null===(i=o.event)||void 0===i?void 0:i.event_version;return{clientPayload:o?{event:{event_name:e,event_version:d||"1.0.0"}}:void 0,serverPayload:n}},Ie=e=>{if(!e)return{clientPayload:void 0,serverPayload:e};let n;try{n=JSON.parse(e)}catch(r){return{clientPayload:void 0,serverPayload:e}}const{events:t,eventName:i}=n;if(i&&!t)return{clientPayload:{event:{event_name:i,event_version:"1.0.0"}},serverPayload:e};if(!t)return{clientPayload:void 0,serverPayload:e};const a=Object.keys(t)[0];return a?Le(a,e):{clientPayload:void 0,serverPayload:e}},Ee=x.J1`
  fragment ClientSideAnalyticsFragment on ClientSideAnalytics {
    referrerId
    linkName
    urls
    uisPrimeMessages {
      schemaName
      messageContent
    }
  }
`,Te={small:b.IA.SMALL,SMALL:b.IA.SMALL,large:b.IA.LARGE,LARGE:b.IA.LARGE},Ae="middletier",Ne="hightier",ke="extrahightier",Ce="loyalty-global-low-tier",_e="global-lowtier",Ge="loyalty-global-middle-tier",Fe="loyalty-global-high-tier",Oe="loyalty-global-extra-high-tier",Pe={[j._.DEAL_BUNDLED]:"deal-bundled",[j._.DEAL_GENERIC]:"deal-generic",[j._.DEAL_MEMBER]:"deal-member",[j._.NOTIFICATION_1]:"notification-1",[j._.NOTIFICATION_2]:"notification-2",[j._.VIP]:"vip",[j._.LOYALTY_EXTRA_HIGH_TIER]:"loyalty-extra-high-tier",[j._.LOYALTY_HIGH_TIER]:"loyalty-high-tier",[j._.LOYALTY_MIDDLE_TIER]:"loyalty-middle-tier",[j._.LOYALTY_LOW_TIER]:"loyalty-low-tier",[j._.SPONSORED]:"sponsored",[j._.VIEWED]:"viewed",[j._.SAVED]:"saved",[j._.FAMILY_FRIENDLY]:"family-friendly",[j._.SUPPLIER_PROMO]:"supplier-promo",[j._.PROMOTED]:"promoted"},Me={standard:b.mc.STANDARD,emphasis:b.mc.EMPHASIS,info:b.mc.INFO,featured:b.mc.FEATURED,brand:b.mc.BRAND,warning:b.mc.WARNING,positive:b.mc.POSITIVE},Re={[j._.LOYALTY_EXTRA_HIGH_TIER]:b.zJ.EXTRAHIGH,[j._.LOYALTY_HIGH_TIER]:b.zJ.HIGH,[j._.LOYALTY_MIDDLE_TIER]:b.zJ.MID,[j._.LOYALTY_LOW_TIER]:b.zJ.LOW,[Ae]:"midtier",[Ne]:Ne,[ke]:ke,[Ce]:b.zJ.GLOBAL_LOW,[Ge]:b.zJ.GLOBAL_MIDDLE,[Fe]:b.zJ.GLOBAL_HIGH,[Oe]:b.zJ.GLOBAL_EXTRAHIGH,[_e]:b.zJ.GLOBAL_LOW};b.zJ.EXTRAHIGH,b.zJ.HIGH,b.zJ.MID,b.zJ.LOW,b.zJ.VIP,b.zJ.GLOBAL_LOW,b.zJ.GLOBAL_MIDDLE,b.zJ.GLOBAL_HIGH,b.zJ.GLOBAL_EXTRAHIGH;const we={deal:b.$s.DEAL,member:b.$s.MEMBER,trip:b.$s.TRIP_SAVINGS,supplierpromo:b.$s.SUPPLIER_PROMO,vmc:b.$s.VIRTUAL_MARKET_COACH};let Be=function(e){return e.FOUR_ONE="FOUR_ONE",e.FOUR_THREE="FOUR_THREE",e.ONE_ONE="ONE_ONE",e.SIXTEEN_NINE="SIXTEEN_NINE",e.THREE_FOUR="THREE_FOUR",e.THREE_TWO="THREE_TWO",e.TWENTY_ONE_NINE="TWENTY_ONE_NINE",e}({}),ze=function(e){return e.APP_PHONE="APP_PHONE",e.APP_TABLET="APP_TABLET",e.CHAT_APP="CHAT_APP",e.DESKTOP="DESKTOP",e.MOBILE_PHONE="MOBILE_PHONE",e.MOBILE_TABLET="MOBILE_TABLET",e.VOICE_APP="VOICE_APP",e}({}),He=function(e){return e.BORDER="BORDER",e}({}),$e=function(e){return e.HTML="HTML",e}({}),Ue=function(e){return e.GLOBAL_LOYALTY_EXTRAHIGH="GLOBAL_LOYALTY_EXTRAHIGH",e.GLOBAL_LOYALTY_HIGH="GLOBAL_LOYALTY_HIGH",e.GLOBAL_LOYALTY_LOW="GLOBAL_LOYALTY_LOW",e.GLOBAL_LOYALTY_MIDDLE="GLOBAL_LOYALTY_MIDDLE",e.GLOBAL_LOYALTY_STANDARD="GLOBAL_LOYALTY_STANDARD",e.HIGHLIGHT="HIGHLIGHT",e.PRIMARY="PRIMARY",e.SECONDARY="SECONDARY",e}({}),Ye=function(e){return e.LARGE="LARGE",e.MEDIUM="MEDIUM",e.SMALL="SMALL",e}({}),Ve=function(e){return e.P1="P1",e.P2="P2",e.P3="P3",e}({}),Je=function(e){return e.BOTTOM="BOTTOM",e.CENTERED="CENTERED",e.FULLSCREEN="FULLSCREEN",e.POPOVER="POPOVER",e.SIDE="SIDE",e}({}),Xe=function(e){return e.LARGE="LARGE",e.MEDIUM="MEDIUM",e.SMALL="SMALL",e}({}),We=function(e){return e.DEFAULT="DEFAULT",e.EMPHASIS="EMPHASIS",e.LOYALTY="LOYALTY",e.NEGATIVE="NEGATIVE",e.POSITIVE="POSITIVE",e}({}),Ke=function(e){return e.BULLET="BULLET",e.ICON="ICON",e.NO_BULLET="NO_BULLET",e.NUMBER="NUMBER",e}({}),qe=function(e){return e.AI="AI",e.BRIGHT_1="BRIGHT_1",e.DARK_1="DARK_1",e.DARK_2="DARK_2",e.GLOBAL_LOYALTY_EXTRA_HIGH="GLOBAL_LOYALTY_EXTRA_HIGH",e.GLOBAL_LOYALTY_EXTRA_HIGH_BRIGHT="GLOBAL_LOYALTY_EXTRA_HIGH_BRIGHT",e.GLOBAL_LOYALTY_HIGH="GLOBAL_LOYALTY_HIGH",e.GLOBAL_LOYALTY_HIGH_BRIGHT="GLOBAL_LOYALTY_HIGH_BRIGHT",e.GLOBAL_LOYALTY_LOW="GLOBAL_LOYALTY_LOW",e.GLOBAL_LOYALTY_LOW_BRIGHT="GLOBAL_LOYALTY_LOW_BRIGHT",e.GLOBAL_LOYALTY_MID="GLOBAL_LOYALTY_MID",e.GLOBAL_LOYALTY_MID_BRIGHT="GLOBAL_LOYALTY_MID_BRIGHT",e.GLOBAL_LOYALTY_STANDARD="GLOBAL_LOYALTY_STANDARD",e.LIGHT_1="LIGHT_1",e.MARKETING_1="MARKETING_1",e.MARKETING_2="MARKETING_2",e.MARKETING_3="MARKETING_3",e.NONE="NONE",e.STANDARD="STANDARD",e}({}),Qe=function(e){return e.EXTRA_SMALL="EXTRA_SMALL",e.LARGE="LARGE",e.MEDIUM="MEDIUM",e.MEDIUM_LARGE="MEDIUM_LARGE",e.SMALL="SMALL",e.XLARGE="XLARGE",e}({}),Ze=function(e){return e.INFO="INFO",e.POSITIVE="POSITIVE",e.STANDARD="STANDARD",e.WARNING="WARNING",e}({}),en=function(e){return e.default="default",e.emphasis="emphasis",e.inverse="inverse",e.negative="negative",e.positive="positive",e.secondary="secondary",e}({}),nn=function(e){return e.CENTER="CENTER",e.LEFT="LEFT",e}({}),tn=function(e){return e.EMPHASIS="EMPHASIS",e.INVERSE="INVERSE",e.LOYALTY="LOYALTY",e.NEGATIVE="NEGATIVE",e.POSITIVE="POSITIVE",e.PRIMARY="PRIMARY",e.SECONDARY="SECONDARY",e}({}),an=function(e){return e.BOLD="BOLD",e.MEDIUM="MEDIUM",e.REGULAR="REGULAR",e}({}),rn=function(e){return e.EXTERNAL="EXTERNAL",e.INTERNAL="INTERNAL",e}({});const sn={[en.default]:"default",[en.emphasis]:"emphasis",[en.negative]:"negative",[en.positive]:"positive",[en.inverse]:"inverse",[en.secondary]:"secondary"},ln={[Ze.INFO]:"info",[Ze.POSITIVE]:"positive",[Ze.WARNING]:"warning",[Ze.STANDARD]:"standard"},on=x.J1`
  fragment EGDSIconFragment on Icon {
    id
    description
    size
    spotLight
    theme
    title
    token
    withBackground
  }
`,dn=({data:e,className:n,iconSizeOverride:t})=>{const{id:i,description:a,size:r,spotLight:s,theme:l,title:o,withBackground:d}=e,c=l?sn[l]:void 0,m=s?ln[s]:void 0,g=r?L.So[r]:L.So.EXTRA_SMALL;return(0,I.jsx)(L.LD,{className:n,description:a,id:i,name:i,size:null!=t?t:g,title:null!=o?o:void 0,theme:c,shadow:Boolean(d),spotlight:m})};dn.fragment=on,dn.displayName="RecommendationsEGDSIcon";const cn=x.J1`
  fragment EGDSMarkFragment on Mark {
    description
    id
    markSize: size
    url {
      ... on HttpURI {
        __typename
        relativePath
        value
      }
    }
  }
`,mn=({className:e,data:n})=>{var t;const{description:i,id:a,markSize:r,url:s}=n;return(0,I.jsx)(E.D,{className:e,description:i,id:a,name:a,size:r?null!==(t=T.K[r])&&void 0!==t?t:T.G[parseInt(r,10)]:void 0,url:null==s?void 0:s.value})};mn.displayName="RecommendationsEGDSMark",mn.fragment=cn;const gn=x.J1`
  fragment EGDSGraphicFragment on UIGraphic {
    ...EGDSIconFragment
    ...EGDSMarkFragment
  }

  ${dn.fragment}
  ${mn.fragment}
`,un=({data:e})=>{switch(e.__typename){case"Icon":return(0,I.jsx)(dn,{data:e});case"Mark":return(0,I.jsx)(mn,{data:e});default:return null}};function hn(e){return hn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},hn(e)}function pn(e){var n=function(e,n){if("object"!=hn(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,n||"default");if("object"!=hn(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==hn(n)?n:n+""}function xn(e,n,t){return(n=pn(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function yn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,i)}return t}function vn(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?yn(Object(t),!0).forEach(function(n){xn(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):yn(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}un.fragment=gn,un.displayName="EGDSGraphic";const jn=x.J1`
  fragment EGDSBadgeFragment on EGDSBadge {
    accessibility
    graphic {
      ...EGDSGraphicFragment
    }
    text
    size
    theme
  }

  ${un.fragment}
`,fn=({className:e,data:n})=>{const{graphic:t,text:i,theme:a,size:r,accessibility:s}=n,l=(0,v.useMemo)(()=>({className:null!=e?e:void 0,text:null!=i?i:void 0,size:r?Te[r]:void 0,a11yText:null!=s?s:void 0}),[i,a,r]);return a&&Re[a]?(0,I.jsx)(S.V,vn(vn({theme:Re[a]},l),{},{children:t&&(0,I.jsx)(un,{data:t})})):a&&Me[a]?(0,I.jsx)(f.G,vn(vn({theme:Me[a]},l),{},{children:t&&(0,I.jsx)(un,{data:t})})):a&&we[a]?(0,I.jsx)(D.v,vn(vn({theme:null!==(o=we[a])&&void 0!==o?o:Pe[a]},l),{},{children:t&&(0,I.jsx)(un,{data:t})})):a===Pe.sponsored?(0,I.jsx)(f.G,{className:e,text:null!=i?i:void 0,size:r?Te[r]:void 0}):(0,I.jsx)(j.p,vn(vn({theme:a?Pe[a]:void 0},l),{},{children:t&&(0,I.jsx)(un,{data:t})}));var o};fn.fragment=jn,fn.displayName="RecommendationsEGDSBadge";const Sn=x.J1`
  fragment DiscoveryCardBadgesHeadingFragment on DiscoveryCardBadges {
    heading {
      ...EGDSBadgeFragment
    }
  }

  ${fn.fragment}
`,Dn=({data:e,size:n=null})=>{const{heading:t}=e;return t.length?(0,I.jsx)(o.X,{direction:"column",space:"one",alignItems:"start",dataTestId:"heading-badges",children:t.map((e,t)=>{var i;return(0,I.jsx)(fn,{data:vn(vn({},e),{},{size:null!==(i=null==e?void 0:e.size)&&void 0!==i?i:n})},t)})}):null};Dn.fragment=Sn,Dn.displayName="EGDSBadgesHeading";const bn=x.J1`
  fragment DiscoveryCardBadgesPriceFragment on DiscoveryCardBadges {
    price {
      ...EGDSBadgeFragment
    }
    priceBadge {
      badge {
        ...EGDSBadgeFragment
      }
      action {
        analytics {
          ...ClientSideAnalyticsFragment
        }
        resource {
          value
        }
        target
      }
    }
  }

  ${fn.fragment}
  ${Ee}
`,Ln=({data:e})=>{const{price:n}=e;return n?(0,I.jsx)("div",{"data-testid":"badges",children:(0,I.jsx)(fn,{data:n})}):null};Ln.fragment=bn,Ln.displayName="EGDSBadgesPrice";const In=x.J1`
  fragment DiscoveryCardBadgesPriceFragment on DiscoveryCardBadges {
    price {
      ...EGDSBadgeFragment
    }
    priceBadge {
      badge {
        ...EGDSBadgeFragment
      }
      action {
        analytics {
          ...ClientSideAnalyticsFragment
        }
        resource {
          value
        }
        target
      }
    }
  }

  ${fn.fragment}
  ${Ee}
`,En=({data:e})=>{const{priceBadge:n}=e,t=null==n?void 0:n.badge.graphic,i=null==n?void 0:n.badge.text,a=null==n?void 0:n.action,r=null==a?void 0:a.analytics,s=(0,p.KY)();if(!n)return null;const l=()=>{r&&s(r.referrerId,r.linkName)};var o;return(null==n?void 0:n.action)?(0,I.jsxs)(N.y,{type:"button",onClick:(null==a?void 0:a.analytics)?l:void 0,tag:"a",href:null==a||null===(o=a.resource)||void 0===o?void 0:o.value,size:A.V.SMALL,children:["Icon"===(null==t?void 0:t.__typename)&&(0,I.jsx)(L.LD,{name:t.id}),i]}):(0,I.jsx)(fn,{data:n.badge})};En.fragment=In,En.displayName="EGDSBadgesPriceBadge";const Tn={[rn.EXTERNAL]:"_blank",[rn.INTERNAL]:"_self"},An=e=>Tn[e.target],Nn=(e,n,t=!1)=>"HttpURI"!==e.resource.__typename?null:t||e.useRelativePath||n?e.resource.relativePath:e.resource.value,kn=(e,n,t)=>{if((null==e?void 0:e.__typename)!==n)return{};const i=t(e);return i?{href:i,target:An(e),tag:"a"}:{}},Cn=e=>Nn(e,void 0,!0),_n=(e,n)=>kn(e,"UILinkAction",e=>((e,n)=>Nn(e,n,!1))(e,n)),Gn=x.J1`
  fragment EGDSBadgesPriceAltButtonFragment on DiscoveryCardBadges {
    priceButton {
      ... on DiscoveryPrimaryAltButton {
        button {
          egdsElementId
          icon {
            ...EGDSIconFragment
          }
          primary
          action {
            ... on UILinkAction {
              accessibility
              analytics {
                ...ClientSideAnalyticsFragment
              }
              resource {
                value
              }
              target
            }
          }
        }
      }
    }
  }

  ${dn.fragment}
  ${Ee}
`,Fn=({data:e,textSize:n=200,iconSizeOverride:t})=>{var i;const{button:a}=(null==e?void 0:e.priceButton)||{},r=(0,p.KY)(),s=(e=>{const n=e.indexOf("uurl")>-1,t=(0,M.zy)(),i=()=>({pathname:`${t.pathname}`,search:`${t.search}`,hash:`${t.hash}`}),{context:a}=(0,R.R)(),[r,s]=(0,v.useState)(i),l=null==a?void 0:a.siteId;(0,v.useEffect)(()=>{const e=()=>s(i());return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)},[i]);let o="";return n||(o=e+(-1!==e.indexOf("?")?"":"?")+function(e,n){const{pathname:t,search:i,hash:a}=e,r=t.concat(i,a);return 30031===n?`&redirectUrl=targeturl=${encodeURIComponent(r)}&referrerId=wl_prod`:`&uurl=${encodeURIComponent(`e3id=redr&rurl=${r}`)}`}(r||{},l)),o})(null!==(i=_n(null==a?void 0:a.action).href)&&void 0!==i?i:"");if(!a)return null;const{primary:l,icon:d,action:c}=a;if(!c||"UILinkAction"!==c.__typename)return null;const{analytics:m,accessibility:g}=c||{};return(0,I.jsx)(N.y,{type:"button",onClick:()=>{m&&""!==m.referrerId&&r(m.referrerId,m.linkName)},tag:"a",href:s,size:A.V.SMALL,target:null==c?void 0:c.target,children:(0,I.jsxs)(o.X,{alignContent:"space-between",direction:"row",justifyContent:"center",alignItems:"center",space:"one",children:[d&&(0,I.jsx)(dn,{data:d,iconSizeOverride:t}),(0,I.jsx)(P.D,{size:n,theme:"inverse","aria-hidden":!0,children:l}),(0,I.jsx)("div",{className:"is-visually-hidden",children:null!=g?g:l})]})})};Fn.fragment=Gn,Fn.displayName="EGDSBadgesPriceAltButton";const On=x.J1`
  fragment AdTransparencyFragment on AdTransparencyTrigger {
    adTransparencyId
    adTransparencyButton {
      ...LodgingAdTransparencyButtonFragment
    }
    adTransparencyOverlaySkeleton {
      ...LodgingTransparencyOverlaySkeletonFragment
    }
  }
  fragment LodgingAdTransparencyButtonFragment on AdTransparencyButton {
    accessibility
    primary
    size
    icon {
      id
    }
  }
  fragment LodgingTransparencyOverlaySkeletonFragment on TransparencyOverlaySkeleton {
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
`,Pn=({data:e,type:n=y.Rm.NATIVE_AD,className:t})=>(null==e?void 0:e.adTransparencyButton)?(0,I.jsx)(y.xL,vn({data:e},{type:n,className:t})):null;Pn.fragment=On,Pn.displayName="AdTransparencyTrigger";const Mn=x.J1`
  fragment AdBadgeFragment on DiscoveryCardBadges {
    adBadge {
      ...EGDSBadgeFragment
      ...AdTransparencyFragment
    }
  }

  ${fn.fragment}
  ${Pn.fragment}
`,Rn=({data:e,type:n=y.Rm.NATIVE_AD,className:t})=>{const i=null==e?void 0:e.adBadge,a="AdTransparencyTrigger"===(null==i?void 0:i.__typename),r={type:n,className:t};return(0,I.jsx)(g.P,vn(vn({type:"absolute",position:{left:"three",bottom:"three",zindex:a?"layer2":"layer1"}},a?{}:{"data-stid":"sponsored-ad-badge"}),{},{children:a?(0,I.jsx)(Pn,vn({data:i},r)):i&&(0,I.jsx)(fn,{data:i})}))};Rn.fragment=Mn,Rn.displayName="AdBadge";const wn=(0,v.createContext)(!1),Bn=()=>(0,v.useContext)(wn),zn=({contentRichSpacing:e,children:n})=>(0,I.jsx)(wn.Provider,{value:e,children:n}),Hn=x.J1`
  fragment EGDSExpandoPeekFragment on EGDSExpandoPeek {
    expandedLabel
    collapsedLabel
    expandedAccessibilityText
    collapsedAccessibilityText
    expandAnalytics {
      linkName
      referrerId
    }
    collapseAnalytics {
      linkName
      referrerId
    }
    hideScrim
    lines
    expanded
  }
`,$n=({className:e,data:n,children:t})=>{Bn();const{expandAnalytics:i,collapseAnalytics:a,expandedLabel:r,collapsedLabel:s,lines:l,expanded:o,hideScrim:d,expandedAccessibilityText:c,collapsedAccessibilityText:m}=n,[g,u]=(0,v.useState)(o),h=(0,v.useCallback)(()=>{u(!g)},[g]),x=(0,p.KY)(),y=g?null==a?void 0:a.referrerId:null==i?void 0:i.referrerId,j=g?null==a?void 0:a.linkName:null==i?void 0:i.linkName;return(0,I.jsx)(w.A,{lines:l||2,expandLabel:s,collapseLabel:r,analytics:{id:null!=y?y:"",description:null!=j?j:"",callback:(e,n)=>{x(e,n)}},className:e,isVisible:g,handleClick:h,hideScrim:!!d,expandA11yLabel:null!=m?m:s,collapseA11yLabel:null!=c?c:r,children:t})};$n.fragment=Hn,$n.displayName="RecommendationsEGDSExpandoPeek";const Un=x.J1`
  fragment UIGraphicFragment on UIGraphic {
    ...EGDSIconFragment
    ...EGDSMarkFragment
  }

  ${dn.fragment}
  ${mn.fragment}
`,Yn=({className:e,data:n,iconSizeOverride:t})=>{switch(n.__typename){case"Icon":return(0,I.jsx)(dn,{className:e,data:n,iconSizeOverride:t});case"Mark":return(0,I.jsx)(mn,{className:e,data:n});default:return null}};Yn.displayName="UiGraphic",Yn.fragment=Un;const Vn={[an.BOLD]:"bold",[an.MEDIUM]:"medium",[an.REGULAR]:"regular"},Jn=x.J1`
  fragment EGDSGraphicTextFragment on EGDSGraphicText {
    text
    graphic {
      ...UIGraphicFragment
    }
    weight
  }

  ${Yn.fragment}
`,Xn={inlinestart:"one"},Wn=({className:e,data:n,textSize:t,textWeight:i,textTheme:a})=>{const{text:r,graphic:s,weight:l}=n,d=l?Vn[l]:i;return(0,I.jsxs)(o.X,{alignItems:"center",children:[(0,I.jsx)(Yn,{data:s}),(0,I.jsx)(u.N,{padding:Xn,children:(0,I.jsx)(P.D,{className:e,size:t,weight:d,theme:a,children:r})})]})};Wn.fragment=Jn,Wn.displayName="EGDSGraphicText";const Kn={[Ve.P1]:1,[Ve.P2]:2,[Ve.P3]:3},qn=x.J1`
  fragment EGDSParagraphFragment on EGDSParagraph {
    text
    style
  }
`,Qn=({data:e})=>{const{text:n,style:t}=e;return(0,I.jsx)(F.u,{size:Kn[t],children:n})};Qn.fragment=qn,Qn.displayName="EGDSParagraph";const Zn=(0,v.createContext)({isAttach:!1}),et=()=>(0,v.useContext)(Zn),nt=x.J1`
  fragment EGDSPlainTextFragment on EGDSPlainText {
    text
    accessibility
  }
`,tt=({className:e,data:n,textSize:t,textWeight:i,theme:a,align:r,inline:s=!1})=>{const{footerTextAlignment:l}=et();return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(P.D,{className:"is-visually-hidden",children:n.accessibility||n.text}),(0,I.jsx)(P.D,{inline:s,className:e,theme:a||"default",size:t,weight:i,"aria-hidden":!0,align:r,children:"justify"===l?(0,I.jsx)("div",{style:{textAlign:"justify"},children:n.text}):n.text})]})};tt.fragment=nt,tt.displayName="EGDSPlainText";const it={100:100,200:200,300:300,400:400,500:500,600:600,700:700,800:800,900:900,1e3:1e3},at={[tn.EMPHASIS]:"emphasis",[tn.NEGATIVE]:"negative",[tn.POSITIVE]:"positive",[tn.PRIMARY]:"emphasis",[tn.SECONDARY]:"secondary",[tn.LOYALTY]:"loyalty",[tn.INVERSE]:"inverse"};We.NEGATIVE,We.POSITIVE,We.EMPHASIS,We.LOYALTY,We.DEFAULT;const rt=x.J1`
  fragment EGDSStylizedTextFragment on EGDSStylizedText {
    text
    theme
    weight
    accessibility
    size
  }
`,st=({className:e,inline:n,align:t,size:i,data:a})=>{const{text:r,theme:s,weight:l,accessibility:o,size:d}=a,c=s?at[s]:void 0,m=l?Vn[l]:void 0;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(P.D,{className:e,align:t,inline:n,size:d?it[d]:i,theme:c,weight:m,"aria-hidden":null!==o,children:r}),o&&(0,I.jsx)("span",{className:"is-visually-hidden",children:o})]})};st.fragment=rt,st.displayName="EGDSStylizedText";const lt=x.J1`
  fragment EGDSSpannableTextContentFragment on EGDSText {
    ...EGDSStylizedTextFragment
    ...EGDSGraphicTextFragment
    ...EGDSPlainTextFragment
  }

  ${st.fragment}
  ${Wn.fragment}
  ${tt.fragment}
`,ot=({className:e,size:n,align:t,theme:i,inline:a=!1,data:r})=>{switch(r.__typename){case"EGDSStylizedText":return(0,I.jsx)(st,{className:e,data:r,size:n,inline:a});case"EGDSGraphicText":return(0,I.jsx)(Wn,{className:e,data:r,textSize:n,textTheme:i});case"EGDSPlainText":return(0,I.jsx)(tt,{className:e,data:r,align:t,theme:i,inline:a,textSize:n});default:return null}};function dt(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(n.includes(i))continue;t[i]=e[i]}return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.includes(t)||{}.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}ot.fragment=lt,ot.displayName="EGDSSpannableTextContent";const ct=["align","headingSize","data","insideFlex","flexLayoutProps","theme"],mt=x.J1`
  fragment EGDSSpannableTextFragment on EGDSSpannableText {
    text
    contents {
      ...EGDSSpannableTextContentFragment
    }
    inlineContent {
      ...EGDSSpannableTextContentFragment
    }
  }

  ${ot.fragment}
`,gt=e=>{var n,t,i,a;const{align:r,headingSize:s,data:l,insideFlex:c,flexLayoutProps:m,theme:g}=e,u=dt(e,ct);return 0!==(null==l||null===(n=l.contents)||void 0===n?void 0:n.length)||(null==l||null===(t=l.inlineContent)||void 0===t?void 0:t.length)?(null==l||null===(i=l.inlineContent)||void 0===i?void 0:i.length)&&c?(0,I.jsx)(o.X,vn(vn({},m||{direction:"row",alignItems:"center",space:"one"}),{},{children:l.inlineContent.map((e,n)=>(0,I.jsx)(d.C,{children:(0,I.jsx)(ot,vn(vn({align:r,data:e},u),{},{theme:g}))},`spannable-item-${n}`))})):(null==l||null===(a=l.inlineContent)||void 0===a?void 0:a.length)&&!c?(0,I.jsx)(I.Fragment,{children:l.inlineContent.map((e,n)=>(0,I.jsx)(ot,vn(vn({data:e},u),{},{headingSize:s,theme:g,inline:!0}),`spannable-item-${n}`))}):(0,I.jsx)(I.Fragment,{children:l.contents.map((e,n)=>(0,I.jsx)(ot,vn(vn({data:e},u),{},{headingSize:s,theme:g}),`spannable-item-${n}`))}):(0,I.jsx)(P.D,vn(vn({},u),{},{inline:!0,align:r,theme:g,children:l.text}))};gt.fragment=mt,gt.displayName="EGDSSpannableText";const ut=x.J1`
  fragment EGDSTextFragment on EGDSText {
    ...EGDSGraphicTextFragment
    ...EGDSPlainTextFragment
    ...EGDSSpannableTextFragment
    ...EGDSStylizedTextFragment
  }

  ${Wn.fragment}
  ${tt.fragment}
  ${gt.fragment}
  ${st.fragment}
`,ht=({data:e,textSize:n,textWeight:t,className:i,theme:a,align:r})=>{switch(e.__typename){case"EGDSGraphicText":return(0,I.jsx)(Wn,{className:i,data:e,textSize:n,textWeight:t});case"EGDSPlainText":return(0,I.jsx)(tt,{align:r,className:i,data:e,textSize:n,textWeight:t,theme:a});case"EGDSSpannableText":return(0,I.jsx)(gt,{className:i,data:e,size:n});case"EGDSStylizedText":return(0,I.jsx)(st,{className:i,data:e,size:n});default:return null}};ht.fragment=ut,ht.displayName="RecommendationsEGDSText";const pt=x.J1`
  fragment SummaryContentListFragment on EGDSUnorderedList {
    listItems {
      text
    }
    listType
  }
`,xt={BULLET:"default",ICON:"no-bullet",NO_BULLET:"no-bullet",NUMBER:"tiered-numbered"},yt=({data:e})=>{var n;if(!(null==e||null===(n=e.listItems)||void 0===n?void 0:n.length))return;const{listItems:t,listType:i}=e;return(0,I.jsx)(z.y,{bullet:i?xt[i]:void 0,children:t.map((e,n)=>(0,I.jsx)(H.x,{children:(0,I.jsx)(P.D,{children:e.text})},n))})};yt.fragment=pt,yt.displayName="SummaryContentList";const vt=x.J1`
  fragment SummarySectionFragment on DiscoveryExpandoTextLists {
    contents {
      title
      text {
        ... on EGDSPlainText {
          accessibility
          text
        }
        ... on EGDSUnorderedList {
          ...SummaryContentListFragment
        }
        ... on DiscoveryMarkupText {
          markupType
          text
        }
      }
    }
  }
  ${yt.fragment}
  ${$n.fragment}
`,jt=({data:e})=>{const n=Bn();return e&&Array.isArray(e.contents)?(0,I.jsx)(I.Fragment,{children:e.contents.map((e,t)=>{switch(e.text.__typename){case"EGDSUnorderedList":return(0,I.jsx)(u.N,{padding:{block:n?"three":"two"},children:(0,I.jsxs)("div",{children:[(null==e?void 0:e.title)&&(0,I.jsx)(G.M,{tag:"h3",size:7,children:e.title}),(0,I.jsx)(yt,{data:e.text})]})},t);case"EGDSPlainText":return(0,I.jsxs)(v.Fragment,{children:[(null==e?void 0:e.title)&&(0,I.jsx)(G.M,{tag:"h3",size:7,children:e.title}),(0,I.jsx)(tt,{data:null==e?void 0:e.text})]},t);case"DiscoveryMarkupText":return(0,I.jsxs)("div",{"data-stid":"content-markup",children:[(null==e?void 0:e.title)&&(0,I.jsx)(G.M,{tag:"h3",size:7,children:e.title}),e.text.markupType===$e.HTML&&(0,I.jsx)(B.Q,{htmlToParse:e.text.text})]},t);default:return null}})}):null};jt.fragment=vt,jt.displayName="SummarySection";const ft=x.J1`
  fragment DiscoveryAdditionalInformationFragment on DiscoveryAdditionalInformation {
    ... on DiscoveryExpandoTextLists {
      expando {
        ...EGDSExpandoPeekFragment
      }
      ...SummarySectionFragment
      onExpandoSection
    }
  }
  ${jt.fragment}
  ${$n.fragment}
`,St=({data:e,padding:n,onDiscoveryExpando:t})=>{if(!e)return null;const{__typename:i}=e;return"DiscoveryExpandoTextLists"===i?(0,I.jsx)(u.N,{padding:null!=n?n:{inline:"four"},stid:"summary",children:(0,I.jsx)(a.g,{children:e.onExpandoSection&&t?(0,I.jsx)(jt,{data:e}):(0,I.jsx)($n,{data:e.expando,children:(0,I.jsx)(jt,{data:e})})})}):null};St.fragment=ft,St.displayName="DiscoveryAdditionalInformation";const Dt=x.J1`
  fragment EGDSSecondaryButtonFragment on UISecondaryButton {
    actionLink: action {
      __typename
      analytics {
        ...ClientSideAnalyticsFragment
      }
      ... on UILinkAction {
        resource {
          ... on HttpURI {
            relativePath
            value
          }
        }
        target
      }
    }
    ...EGDSButtonFragment
  }

  ${x.J1`
  fragment EGDSButtonFragment on EGDSButton {
    primary
    disabled
    accessibility
    icon {
      ...EGDSIconFragment
    }
    analytics {
      ...ClientSideAnalyticsFragment
    }
  }

  ${dn.fragment}
  ${Ee}
`}
  ${Ee}
`,bt=({data:e,overrideUseRelativePath:n,onClick:t,size:i,isFullWidth:a})=>{const{primary:r,analytics:s,disabled:l,actionLink:o,icon:d,accessibility:c}=e,m=(0,p.KY)(),g=_n(o,n);return(0,I.jsxs)(k.y,vn(vn({},vn(vn({onClick:(0,v.useCallback)(()=>{const e=null!=s?s:null==o?void 0:o.analytics;e&&be(e,m),null==t||t(),g.href&&"UILinkAction"===(null==o?void 0:o.__typename)&&(o.target===rn.INTERNAL?window.location.href=g.href:window.open(g.href,"_blank"))},[s,t,m,o,g.href]),disabled:l,size:i||A.V.LARGE,isFullWidth:a},c?{"aria-label":c}:{}),g)),{},{children:[r,d&&(0,I.jsx)(dn,{data:d})]}))};bt.displayName="RecommendationsEGDSSecondaryButton",bt.fragment=Dt;const Lt=x.J1`
  fragment LandingCTAButtonFragment on CTAButton {
    button {
      ...EGDSSecondaryButtonFragment
    }
    interaction
  }
  ${bt.fragment}
`,It=({data:e,fullWidth:n})=>{const{button:t,interaction:i}=e,a=(0,p.iQ)();if(!t.primary)return null;return(0,I.jsx)(bt,{data:t,size:A.V.MEDIUM,isFullWidth:!!n,onClick:()=>{a(Le("recommendations_module.selected",i))}})};It.fragment=Lt,It.displayName="LandingCTAButton";const Et=x.J1`
  fragment DiscoveryButtonCtaFragment on DiscoveryCardCTA {
    ...LandingCTAButtonFragment
  }
  ${It.fragment}
`,Tt=({data:e,fullWidth:n})=>{const{__typename:t}=e;return"CTAButton"===t?(0,I.jsx)(It,{data:e,fullWidth:n}):null};Tt.fragment=Et,Tt.displayName="DiscoveryCardCta";const At={[Qe.EXTRA_SMALL]:L.So.EXTRA_SMALL,[Qe.SMALL]:L.So.SMALL,[Qe.MEDIUM]:L.So.MEDIUM,[Qe.MEDIUM_LARGE]:L.So.MEDIUM,[Qe.LARGE]:L.So.LARGE,[Qe.XLARGE]:L.So.XLARGE},Nt=x.J1`
  fragment DiscoveryCardLocationFragment on DiscoveryCardLocation {
    leadingIcon {
      id
      size
    }
    text {
      ... on EGDSPlainText {
        text
        accessibility
      }
      ... on EGDSSpannableText {
        ...EGDSSpannableTextFragment
      }
    }
  }

  ${gt.fragment}
`,kt=({className:e,textSize:n,textWeight:t,textTheme:i,data:a})=>{const{leadingIcon:r,text:s}=a;switch(s.__typename){case"EGDSPlainText":return(0,I.jsxs)(o.X,{space:"one",alignItems:"center",children:[(0,I.jsx)(L.LD,{name:r.id}),(0,I.jsx)(tt,{data:s,textSize:n,className:e,textWeight:t})]});case"EGDSSpannableText":var l;return(0,I.jsxs)(o.X,{alignItems:"start",space:"one",children:[(0,I.jsx)(L.LD,{name:r.id,size:At[null!==(l=r.size)&&void 0!==l?l:L.So.SMALL]}),(0,I.jsx)(gt,{data:s,size:n,theme:i,insideFlex:!0,flexLayoutProps:{direction:"column",alignItems:"start"}})]});default:return null}};kt.fragment=Nt,kt.displayName="DiscoveryCardLocation";const Ct=x.J1`
  fragment EGDSCarouselFragment on EGDSCarousel {
    nextButton {
      accessibility
      analytics {
        referrerId
        linkName
        uisPrimeMessages {
          schemaName
          messageContent
        }
      }
    }
    previousButton {
      accessibility
      analytics {
        referrerId
        linkName
        uisPrimeMessages {
          schemaName
          messageContent
        }
      }
    }
  }
`,_t=({data:e,children:n,peek:t,itemsVisible:i,enableTracking:a=!1,itemViewedCallback:r=null,onIndexChange:s=null,itemsMaxHeight:l=!1,pagingInset:o=!1,pagingOverlay:d=!1,pagingPersistent:c=!0,loop:m=!1,navigationIconId:g,className:u,hideNav:h=!1,innerSpacing:x,useContainerSizing:y})=>{var j,f;const{nextButton:S,previousButton:D}=e,b=(0,v.useRef)(null),L=(0,p.KY)(),E=(0,v.useRef)(0),T=(0,v.useRef)(!0),A=(0,V.eg)({viewSizes:V.pf}),{ref:N,inView:k}=(0,U.Wx)({triggerOnce:!0,threshold:.9}),C=(0,v.useCallback)(e=>{var n;const t=e>=E.current?S:D;if((null==t||null===(n=t.analytics)||void 0===n?void 0:n.referrerId)&&a&&!T.current){var i,r;const e=De(null!==(i=t.analytics.uisPrimeMessages)&&void 0!==i?i:[]);L(t.analytics.referrerId,null!==(r=t.analytics.linkName)&&void 0!==r?r:"",void 0,e)}k&&(null==s||s(e)),E.current=e},[S,D,E,L,(0,v.useMemo)(()=>{switch(A){case V.pf.SMALL:return i.sm;case V.pf.MEDIUM:return i.md;case V.pf.LARGE:return i.lg;default:var e;return null!==(e=i.xl)&&void 0!==e?e:4}},[A,i]),a,k]);return(0,v.useEffect)(()=>{k&&(null==s||s(E.current),T.current=!1)},[k,E.current]),(0,I.jsx)(Y._N,{buttonText:{nextButton:null!==(j=null==S?void 0:S.accessibility)&&void 0!==j?j:"",prevButton:null!==(f=null==D?void 0:D.accessibility)&&void 0!==f?f:""},navigationIconId:g,itemsVisible:i,pageBy:1,pagingPersistent:c,peek:t,itemViewedCallback:r,itemsMaxHeight:l,pagingInset:o,pagingOverlay:d,useContainerSizing:y,className:u,loop:m,carouselRef:b,onIndexChange:C,domRef:N,hideNav:h,innerSpacing:x,children:n})};_t.fragment=Ct,_t.displayName="RecommendationsEGDSCarousel";const Gt={[Be.ONE_ONE]:W.l.R1_1,[Be.FOUR_ONE]:W.l.R4_1,[Be.FOUR_THREE]:W.l.R4_3,[Be.SIXTEEN_NINE]:W.l.R16_9,[Be.THREE_TWO]:W.l.R3_2,[Be.THREE_FOUR]:W.l.R3_4,[Be.TWENTY_ONE_NINE]:W.l.R21_9},Ft=x.J1`
  fragment EGDSImageFragment on Image {
    aspectRatio
    description
    url
  }
`,Ot=({figureProps:e,data:n,lazyLoad:t="off",link:i={},imageLinkUrl:a,imageLinkTarget:r,imageClickstreamAnalytics:s,imageLinkAccessibility:l,enableImgLoadingState:o,enableHighFetchPriority:d})=>{const{roundcorner:c,ratio:m=W.l.R21_9,imageFit:g}=null!=e?e:{},{resource:u,target:h,analytics:x,accessibility:y}=i||{},j=(0,p.KY)(),f=(0,p.iQ)(),S=(0,v.useRef)(null),D=n.aspectRatio?Gt[n.aspectRatio]:m,b=(0,v.useCallback)(()=>{(null==x?void 0:x.referrerId)&&(null==x?void 0:x.linkName)&&be(x,j),(null==u?void 0:u.value)&&window.open(u.value,h===rn.EXTERNAL?"_blank":"_self","noopener")},[x,j,null==u?void 0:u.value,h]),L=(0,v.useCallback)(()=>{s&&f(Le("image.selected",s)),a&&window.open(a,r===rn.EXTERNAL?"_blank":"_self","noopener")},[a,r,s,f]),E=(0,v.useCallback)(()=>{o&&S.current&&(S.current.style.opacity="1")},[]);var T;return o&&S.current&&(T=n.url,!sessionStorage.getItem(T)&&(sessionStorage.setItem(T,(!0).toString()),1))&&(S.current.style.opacity="0"),(null==u?void 0:u.value)?(0,I.jsxs)(W.M,{ratio:D,roundcorner:c,imageFit:g,onClickCapture:b,className:"uitk-image-placeholder uitk-image-placeholder-image",children:[(0,I.jsx)(K.F,{imgRef:S,src:n.url,alt:n.description,placeholderImage:!0,additionalProps:{onLoad:E,decoding:"async"},lazyLoading:t}),a?(0,I.jsx)(q.d,{children:(0,I.jsx)("button",{type:"button",onClick:L,children:l&&(0,I.jsx)("span",{className:"is-visually-hidden",children:l})})}):y&&(0,I.jsx)("span",{className:"is-visually-hidden",children:y})]}):(0,I.jsx)(W.M,{ratio:D,roundcorner:c,imageFit:g,children:(0,I.jsx)(K.F,{src:n.url,imgRef:S,alt:n.description,placeholderImage:!0,lazyLoading:t,additionalProps:{onLoad:E,decoding:"async",fetchpriority:d?"high":void 0}})})};Ot.fragment=Ft,Ot.displayName="RecommendationsEGDSImage";const Pt=x.J1`
  fragment DiscoveryAttributionFragment on DiscoveryAttribution {
    content {
      text
      inlineContent {
        ... on EGDSText {
          text
        }
      }
    }
    showContent {
      accessibility
      icon {
        id
        description
        size
      }
    }
    closeContent {
      accessibility
      primary
    }
  }
`,Mt=({data:e})=>{var n,t;const{content:i,showContent:a,closeContent:r}=e,s=(0,v.useRef)(null),[l,o,d]=(0,ae.useDialog)(`discovery-image-attribution-info-${(0,$.D4)()}`),c=(0,v.useCallback)(()=>{o.openDialog()},[o]),{id:m="info_outline",description:g="",size:u}=(null==a?void 0:a.icon)||{};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(_.M,{domRef:s,onClick:c,"aria-label":null!==(n=null==a?void 0:a.accessibility)&&void 0!==n?n:"",children:(0,I.jsx)(L.LD,{id:m,name:m,title:g,size:At[null!=u?u:L.So.SMALL]})}),(0,I.jsx)(ie.K,{isVisible:l,children:(0,I.jsx)(d,{children:(0,I.jsxs)(Q.Q,{dialogShow:l,returnFocusOnClose:!0,triggerRef:s,children:[(0,I.jsx)(Z.h,{children:(0,I.jsx)(P.D,{theme:"emphasis",children:i.text})},"dialog"),(0,I.jsx)(ee.l,{"aria-label":(null==r?void 0:r.accessibility)||"",buttonOne:{onClick:o.closeDialog,text:null!==(t=null==r?void 0:r.primary)&&void 0!==t?t:"",type:"tertiary"}},"footer")]})})})]})};Mt.fragment=Pt,Mt.displayName="DiscoveryAttribution";const Rt=x.J1`
  fragment DiscoveryMediaItemFragment on DiscoveryMediaItem {
    media {
      ...EGDSImageFragment
    }
    attribution {
      ...DiscoveryAttributionFragment
    }
    impression {
      ...ClientSideAnalyticsFragment
    }
    action {
      accessibility
      clickAnalytics
      resource {
        value
      }
      target
    }
  }

  ${Ot.fragment}
  ${Mt.fragment}
  ${Ee}
`,wt=({data:e,figureProps:n,showAttribution:t=!0,lazyLoad:i,link:a,enableImgLoadingState:r,enableHighFetchPriority:s,enableImpressionTracking:l})=>{var o;const{attribution:d,media:c,impression:m,action:u}=e;return c&&"Image"!==c.__typename?null:(0,I.jsxs)(g.P,{type:"relative",cloneElement:!t,children:[(0,I.jsx)(Ot,{data:null!=c?c:{__typename:"Image",url:null,aspectRatio:null,description:""},figureProps:n,lazyLoad:i,link:a,imageLinkUrl:null==u?void 0:u.resource.value,imageLinkTarget:null==u?void 0:u.target,imageClickstreamAnalytics:null==u?void 0:u.clickAnalytics,imageLinkAccessibility:null!==(o=null==u?void 0:u.accessibility)&&void 0!==o?o:"",enableImgLoadingState:r,enableHighFetchPriority:s}),t&&d&&(null==c?void 0:c.url)&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(g.P,{type:"absolute",position:{bottom:"one",right:"one",zindex:"layer3"},children:(0,I.jsx)(Mt,{data:d})}),(0,I.jsx)(J.O,{type:X.Q.BOTTOM})]})]})};wt.fragment=Rt,wt.displayName="DiscoveryMediaItem";const Bt=x.J1`
  fragment DiscoveryMediaGalleryFragment on DiscoveryMediaGallery {
    carousel {
      ...EGDSCarouselFragment
    }
    items {
      ...DiscoveryMediaItemFragment
    }
  }

  ${_t.fragment}
  ${wt.fragment}
`,zt=({data:e,itemsVisible:n,peek:t,pagingOverlay:i,pagingInset:a,itemsMaxHeight:r,className:s,figureProps:l,shouldLazyLoadImg:o,loop:d=!1,imageLink:c,enableImgLoadingState:m,enableHighFetchPriority:g})=>{const u=(0,p.KY)(),h=(0,$.D4)(),x=(0,v.useCallback)(n=>{var t;if(null===(t=e.items)||void 0===t||null===(t=t[n])||void 0===t?void 0:t.impression){var i;const t=null===(i=e.items[n])||void 0===i?void 0:i.impression;if(null==t?void 0:t.referrerId){const{linkName:e,referrerId:n,uisPrimeMessages:i}=t;u(n,e,!1,i.map(({messageContent:e,schemaName:n})=>({messageContent:JSON.parse(e),schemaName:n})))}}},[]);return 0===e.items.length?null:e.carousel?(0,I.jsx)(_t,{itemsVisible:n,peek:t,data:e.carousel,pagingInset:a,itemsMaxHeight:r,pagingOverlay:i,className:s,navigationIconId:{next:`next-button-${h}`,prev:`prev-button-${h}`},loop:d,enableTracking:!0,onIndexChange:x,children:e.items.map((e,n)=>(0,I.jsx)(wt,{data:e,figureProps:l,lazyLoad:0!==n||o?"lazy":"off",link:c,enableImgLoadingState:m,enableHighFetchPriority:g},n))}):e.items[0]?(0,I.jsx)(wt,{data:e.items[0]}):null};zt.fragment=Bt,zt.displayName="DiscoveryMediaGallery";const Ht=x.J1`
  fragment DiscoveryCardMediaFragment on DiscoveryCardMedia {
    ... on DiscoveryMediaItem {
      ...DiscoveryMediaItemFragment
    }
    ... on DiscoveryMediaGallery {
      ...DiscoveryMediaGalleryFragment
    }
  }

  ${wt.fragment}
  ${zt.fragment}
`,$t=({data:e,figureProps:n,showAttribution:t,shouldLazyLoadImg:i,carouselLoop:a=!1,imageLink:r,enableImgLoadingState:s,enableHighFetchPriority:l,isImageClickable:o})=>{switch(e.__typename){case"DiscoveryMediaItem":return(0,I.jsx)(wt,{data:e,figureProps:n,showAttribution:t,lazyLoad:i?"lazy":"off",enableImgLoadingState:s,enableHighFetchPriority:l});case"DiscoveryMediaGallery":var d;return(0,I.jsx)(zt,{data:e,itemsVisible:{sm:1,md:1,lg:1,xl:1},peek:!1,figureProps:n,pagingInset:!0,itemsMaxHeight:!0,pagingOverlay:!0,className:(null===(d=e.items)||void 0===d?void 0:d.length)>1&&!o?"uitk-layout-position-zindex-layer2":void 0,shouldLazyLoadImg:i,loop:a,imageLink:r,enableImgLoadingState:s,enableHighFetchPriority:l});default:return null}};$t.fragment=Ht,$t.displayName="DiscoveryCardMedia";const Ut=x.J1`
  fragment DiscoveryExpandoSectionFragment on DiscoveryExpandoSection {
    expando {
      ...EGDSExpandoPeekFragment
    }
  }
  ${$n.fragment}
`,Yt=({className:e,padding:n,data:t,children:i})=>{const{expandAnalytics:a,collapseAnalytics:r,expandedLabel:s,collapsedLabel:l,lines:o,expanded:d,hideScrim:c,expandedAccessibilityText:m,collapsedAccessibilityText:g}=t,[h,x]=(0,v.useState)(d),y=(0,v.useCallback)(()=>{x(!h)},[h]),j=(0,p.KY)(),f=h?null==r?void 0:r.referrerId:null==a?void 0:a.referrerId,S=h?null==r?void 0:r.linkName:null==a?void 0:a.linkName;return(0,I.jsx)(u.N,{padding:null!=n?n:{inline:"four"},"data-stid":"summary",children:(0,I.jsx)(w.A,{lines:o||2,expandLabel:l,collapseLabel:s,analytics:{id:null!=f?f:"",description:null!=S?S:"",callback:(e,n)=>{j(e,n)}},className:e,isVisible:h,handleClick:y,hideScrim:!!c,expandA11yLabel:null!=g?g:l,collapseA11yLabel:null!=m?m:s,children:i})})};Yt.fragment=Ut,Yt.displayName="DiscoveryExpandoSection";const Vt=x.J1`
  fragment DiscoveryGuestsLikedFragment on DiscoveryGuestsSentiment {
    icon {
      ...EGDSIconFragment
    }
    text {
      ...EGDSTextFragment
    }
  }

  ${ht.fragment}
  ${dn.fragment}
`,Jt=({data:e})=>{const{icon:n,text:t}=e;return e&&n&&t?(0,I.jsxs)(o.X,{alignItems:"center",children:[(0,I.jsx)(d.C,{children:(0,I.jsx)(u.N,{margin:{inlineend:"two"},children:(0,I.jsx)(dn,{data:n})})}),(0,I.jsx)(d.C,{children:(0,I.jsx)(ht,{data:t})})]}):null};Jt.fragment=Vt,Jt.displayName="DiscoveryGuestsLiked";const Xt=x.J1`
  fragment DiscoveryOverlayHeaderFragment on DiscoveryOverlay {
    closeButton {
      action {
        accessibility
        analytics {
          referrerId
          linkName
        }
      }
    }
    heading {
      title {
        accessibility
        text
      }
      subTitle {
        ... on EGDSPlainText {
          text
          accessibility
        }
      }
    }
  }
`,Wt=({data:e,closeDialog:n})=>{const{closeButton:t,heading:i}=e,{analytics:a,accessibility:r}=(null==t?void 0:t.action)||{},s=(0,p.KY)();return(0,I.jsx)(se.p,{navigationContent:{onClick:(0,v.useCallback)(()=>{a&&s(a.referrerId,a.linkName),n()},[n]),navType:"close"},"aria-label":r||"",toolbarTitle:i.title.text})};Wt.fragment=Xt,Wt.displayName="DiscoveryOverlayHeader";const Kt=x.J1`
  fragment DiscoveryDisclaimerOverlayFragment on DiscoveryDisclaimerOverlay {
    text
    icon {
      ...EGDSIconFragment
    }
    accessibility
    analytics {
      ...ClientSideAnalyticsFragment
    }
    overlay {
      analytics {
        linkName
        referrerId
      }
      ...DiscoveryOverlayHeaderFragment
    }
  }

  ${Ee}
  ${dn.fragment}
  ${Wt.fragment}
`,qt=({data:e,children:n})=>{const{overlay:t,icon:i,text:a,analytics:r,accessibility:s}=e,l=(0,V.eg)({viewSizes:V.pf})===V.pf.SMALL,o=(0,v.useRef)(null),d=(0,p.KY)(),{referrerId:c,linkName:m=""}=r||{},[g,h,x]=(0,ae.useDialog)("legal-disclaimer-overlay"),y=(0,v.createRef)();if(!t)return null;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(re.t,{size:"small",onClick:e=>{c&&d(c,m),h.openDialog({closeAllDialogs:!0})},children:(0,I.jsxs)("button",{type:"button",ref:y,children:[a,i&&(0,I.jsx)(dn,{data:i})]})}),(0,I.jsx)(ie.K,{isVisible:g,children:(0,I.jsx)(x,{children:(0,I.jsxs)(ne.t,{type:l?"full":"centered",isVisible:g,triggerRef:o,children:[(0,I.jsx)(Wt,{data:t,closeDialog:()=>{y.current&&y.current.focus(),h.closeDialog()}}),(0,I.jsx)(u.N,{padding:{blockstart:"three",inline:"six",blockend:"six"},children:(0,I.jsx)(te.Y,{padded:!1,children:n})})]})})})]})};qt.fragment=Kt,qt.displayName="DiscoveryDisclaimerOverlay";const Qt=x.J1`
  fragment EGDSStandardLinkFragment on EGDSStandardLink {
    action {
      ... on UIAction {
        ... on UILinkAction {
          accessibility
          resource {
            value
          }
          analytics {
            ...ClientSideAnalyticsFragment
          }
          target
        }
      }
    }
    text
    size
  }

  ${Ee}
`,Zt={[Ye.SMALL]:"small",[Ye.MEDIUM]:"medium",[Ye.LARGE]:"large"},ei=e=>e?Zt[e]:"medium",ni=({data:e,showIcon:n=!0,onClickCallback:t,suppressUisPrimeClick:i})=>{const{action:a,text:r,size:s}=e,{resource:l,accessibility:o,target:d,analytics:c}=a,m=(0,p.KY)(),g=(0,v.useCallback)(()=>{i||be(c,m)},[c,m,i]),u=d===rn.EXTERNAL?"_blank":"_self";return(0,I.jsx)(le.i,{onClickCapture:g,onClick:t,size:ei(s),children:(0,I.jsxs)("a",{target:u,rel:"noopener",href:l.value,"aria-label":o||"",children:[r,n&&(0,I.jsx)(L.LD,{"data-stid":"lodging-link-message-icon",name:"arrow_forward",size:L.So.EXTRA_SMALL}),o&&(0,I.jsx)(P.D,{className:"is-visually-hidden",children:o})]})})};ni.fragment=Qt,ni.displayName="EGDSStandardLink";const ti=x.J1`
  fragment DiscoveryHeadingFragment on DiscoveryHeading {
    highlight
    highlightAccessibilityLabel
    title
    titleAccessibilityLabel
    subTitle
    subTitleAccessibilityLabel
    featuredHeader
    featuredHeaderAccessibilityLabel
    link {
      ...EGDSStandardLinkFragment
    }
    disclaimer {
      ... on DiscoveryDisclaimer {
        ...DiscoveryDisclaimerOverlayFragment
      }
    }
    additionalInformation {
      ...EGDSSpannableTextFragment
    }
    subTitleText {
      ...EGDSSpannableTextFragment
    }
  }

  ${qt.fragment}
  ${ni.fragment}
  ${gt.fragment}
`,ii=x.J1`
  fragment DiscoveryStarRatingFragment on DiscoveryStarRating {
    ... on EGDSIconRating {
      accessibility
      rating
      icon {
        id
      }
    }
  }
`,ai=({data:e})=>{const{rating:n,accessibility:t,icon:i}=e;return(0,I.jsx)(oe.v,{icon:"alternate"===i.id?"alternate":"star",rating:String(n),a11yText:null!=t?t:void 0})};ai.fragment=ii,ai.displayName="DiscoveryStarRating";const ri=x.J1`
  fragment EGDSBulletedListFragment on EGDSBulletedList {
    listItems {
      ... on EGDSTextStandardListItem {
        text
      }
    }
  }
`,si=({data:e})=>(0,I.jsx)(z.y,{bullet:"default",children:(0,I.jsx)("div",{children:e.listItems.map((e,n)=>"EGDSTextStandardListItem"===e.__typename&&(0,I.jsx)(H.x,{children:(0,I.jsx)(P.D,{children:e.text})},n))})});si.fragment=ri,si.displayName="EGDSBulletedList";const li=(0,v.createContext)(!1),oi=({landingCardSpacing:e,children:n})=>(0,I.jsx)(li.Provider,{value:e,children:n}),di=()=>(0,v.useContext)(li),ci=(0,v.createContext)(!1),mi=({listCardSpacing:e,children:n})=>(0,I.jsx)(ci.Provider,{value:e,children:n}),gi=x.J1`
  fragment EGDSNestedLevelOneListFragment on EGDSNestedLevelOneList {
    items {
      ... on EGDSNestedLevelOneIconListItem {
        text
        icon {
          id
        }
      }
    }
    size
    type
  }
`,ui=({data:e,hideText:n,tag:t})=>(0,I.jsx)(o.X,{space:"two",wrap:"wrap",tag:t,children:e.items.map((e,t)=>{var i;return(0,I.jsx)(d.C,{children:(0,I.jsxs)(o.X,{space:"two",children:["EGDSNestedLevelOneIconListItem"===e.__typename&&(null===(i=e.icon)||void 0===i?void 0:i.id)&&(0,I.jsx)(L.LD,{theme:"default",name:e.icon.id,size:L.So.EXTRA_SMALL}),n||"EGDSNestedLevelOneIconListItem"!==e.__typename?"":(0,I.jsx)(P.D,{theme:"standard",size:200,overflow:"truncate-2-lines",children:e.text})]})},t)})});ui.fragment=gi,ui.displayName="EGDSNestedLevelOneList";const hi=x.J1`
  fragment EGDSTextIconListItemFragment on EGDSTextIconListItem {
    text
    icon {
      id
    }
    nestedLevelOneList {
      ...EGDSNestedLevelOneListFragment
    }
  }

  ${ui.fragment}
`,pi=({data:e,hasNestedList:n=!1,hasMinWidth:t=!0,iconGap:i,tag:a})=>{var r;const s=Bn(),l=di(),c=s||l,m=t?vn({},n?{minWidth:"24x"}:{minWidth:"37x"}):{},g=l?"one":"three",h=(0,I.jsx)(d.C,vn(vn({alignSelf:"start"},m),{},{children:(0,I.jsxs)(o.X,{space:i||"two",tag:a,children:["EGDSTextIconListItem"===e.__typename&&(null===(r=e.icon)||void 0===r?void 0:r.id)&&(0,I.jsx)(L.LD,{theme:"default",name:e.icon.id,size:L.So.EXTRA_SMALL}),(0,I.jsx)(P.D,{theme:"standard",size:200,overflow:"wrap",children:e.text})]})}));return(0,I.jsxs)(I.Fragment,{children:[c?(0,I.jsx)(u.N,{margin:{inlineend:g},children:h}):h,e.nestedLevelOneList&&(0,I.jsx)(d.C,{children:(0,I.jsx)(ui,{data:e.nestedLevelOneList,hideText:!0,tag:a})})]})};pi.fragment=hi,pi.displayName="EGDSTextIconListItem";const xi=x.J1`
  fragment EGDSTextIconListFragment on EGDSTextIconList {
    listItems {
      ...EGDSTextIconListItemFragment
    }
  }

  ${pi.fragment}
`,yi=({data:e,hasMinWidth:n=!0,hasWrap:t=!0,iconGap:i,hasCustomSpace:a=!1})=>{const r=Bn(),s=di(),l=(0,v.useContext)(ci),d=e.listItems.find(e=>e.nestedLevelOneList);return(0,I.jsx)(o.X,{space:r||s?"one":(()=>{switch(!0){case n||l:return"two";case a:return"three";default:return"four"}})(),wrap:t?"wrap":"nowrap",tag:"ul",children:e.listItems.map((e,t)=>(0,I.jsx)(pi,{data:e,hasNestedList:!!d,hasMinWidth:n,iconGap:i,tag:"li"},t))})};yi.fragment=xi,yi.displayName="EGDSTextIconList";const vi=x.J1`
  fragment EGDSUnorderedListFragment on EGDSUnorderedList {
    listItems {
      ... on EGDSTextStandardListItem {
        text
      }
      ... on EGDSTextIconListItem {
        ...EGDSTextIconListItemFragment
      }
    }
  }

  ${pi.fragment}
`,ji=({data:e})=>{const n=e.listItems.some(e=>"EGDSTextIconListItem"===e.__typename&&e.nestedLevelOneList);return(0,I.jsx)(I.Fragment,{children:e.listItems.map((e,t)=>(0,I.jsxs)(v.Fragment,{children:["EGDSTextStandardListItem"===e.__typename&&(0,I.jsx)(P.D,{children:e.text}),(0,I.jsx)(u.N,{margin:{blockstart:"two"},children:(0,I.jsx)(o.X,{space:"two",wrap:"wrap",children:"EGDSTextIconListItem"===e.__typename&&(0,I.jsx)(pi,{data:e,hideText:!0,hasNestedList:n})})})]},t))})};ji.fragment=vi,ji.displayName="EGDSUnorderedList";const fi=x.J1`
  fragment EnrichedDetailsListFragment on EnrichedDetailsList {
    additionalDescription {
      ... on EGDSText {
        ...EGDSTextFragment
      }
      ... on EGDSText {
        text
      }
    }
    list {
      ... on EGDSTextIconList {
        ...EGDSTextIconListFragment
      }
    }
  }

  ${ht.fragment}
  ${yi.fragment}
`,Si=({data:e})=>{const{additionalDescription:n,list:t}=e;return(0,I.jsxs)(I.Fragment,{children:[n&&(0,I.jsx)(ht,{data:n}),t&&(0,I.jsx)(u.N,{margin:{blockstart:"one"},children:(0,I.jsx)("div",{children:(0,I.jsx)(yi,{data:t,hasWrap:!1})})})]})};Si.fragment=fi,Si.displayName="EnrichedDetailsList";const Di=x.J1`
  fragment EGDSDetailsListFragment on DiscoveryDetailsList {
    __typename
    ...EGDSTextIconListFragment
    ...EGDSUnorderedListFragment
    ...EGDSPlainTextFragment
    ...EGDSBulletedListFragment
    ...EnrichedDetailsListFragment
  }

  ${yi.fragment}
  ${ji.fragment}
  ${tt.fragment}
  ${si.fragment}
  ${Si.fragment}
`,bi=e=>{const{data:n,hasMinWidth:t,hasWrap:i,spacing:a,iconGap:r,hasCustomSpace:s}=e;switch(n.__typename){case"EGDSTextIconList":return(0,I.jsx)(u.N,{margin:a&&n.listItems.length?a:void 0,children:(0,I.jsx)("div",{"data-testid":"amenities",children:(0,I.jsx)(yi,{data:n,hasMinWidth:t,hasWrap:i,iconGap:r,hasCustomSpace:s})})});case"EGDSUnorderedList":return(0,I.jsx)(u.N,{margin:a&&n.listItems.length?a:void 0,children:(0,I.jsx)("div",{"data-testid":"amenities",children:(0,I.jsx)(ji,{data:n})})});case"EGDSPlainText":return(0,I.jsx)(u.N,{margin:null!=a?a:void 0,children:(0,I.jsx)("div",{"data-testid":"amenities",children:(0,I.jsx)(tt,{data:n})})});case"EGDSBulletedList":return(0,I.jsx)(u.N,{margin:a&&n.listItems.length?a:void 0,children:(0,I.jsx)("div",{"data-testid":"amenities",children:(0,I.jsx)(si,{data:n})})});case"EnrichedDetailsList":return(0,I.jsx)(u.N,{margin:null!=a?a:void 0,children:(0,I.jsx)("div",{"data-testid":"amenities",children:(0,I.jsx)(Si,{data:n,hasWrap:i})})});default:return null}};bi.fragment=Di,bi.displayName="EGDSDetailsList";const Li=({data:e,primaryTextProps:n,secondaryTextProps:t,supportingMessagesProps:i,showPrimaryTextPadding:a})=>{const{icon:r,primary:s,secondary:l,supportingMessages:d,accessibilityLabel:c}=e;return(0,I.jsxs)(o.X,{direction:"row",alignItems:"start",children:[c&&(0,I.jsx)(P.D,{className:"is-visually-hidden",children:c}),r&&(0,I.jsx)(u.N,{margin:{blockend:"half"},children:(0,I.jsx)("div",{children:(0,I.jsx)(dn,{data:r})})}),(0,I.jsxs)(o.X,{direction:"row",alignItems:"center",wrap:"wrap","aria-hidden":!!c,children:[(0,I.jsx)(u.N,{margin:{inlinestart:a?"one":"unset",inlineend:"one"},children:s&&(0,I.jsx)(P.D,vn(vn({},n),{},{children:s}))}),l&&(0,I.jsx)(u.N,{margin:{inlineend:"one"},children:(0,I.jsx)(P.D,vn(vn({},t),{},{children:l}))}),d.map((e,n)=>"EGDSPlainText"===e.__typename&&(0,v.createElement)(P.D,vn(vn({},i),{},{key:n}),e.text))]})]})},Ii={STANDARD:"standard",EMPHASIS:"emphasis",INFO:"info",FEATURED:"featured",BRAND:"brand",WARNING:"warning",POSITIVE:"positive"},Ei=({data:e,secondaryTextProps:n,supportingMessagesProps:t})=>{const{theme:i,accessibilityLabel:a,primary:r,secondary:s,supportingMessages:l}=e,c=i?Ii[null==i?void 0:i.toUpperCase()]:Ii.STANDARD,m=i?"medium":null==n?void 0:n.weight;return(0,I.jsxs)("div",{children:[a&&(0,I.jsx)(P.D,{className:"is-visually-hidden",children:a}),(0,I.jsxs)(o.X,{alignItems:"center",space:"one","aria-hidden":!!a,children:[r&&(0,I.jsx)(o.X,{children:(0,I.jsx)(f.G,{text:r,theme:c})}),(0,I.jsxs)(o.X,{direction:"column",children:[s&&(0,I.jsx)(d.C,{children:(0,I.jsx)(P.D,vn(vn({},n),{},{weight:m,children:s}))}),l.length>0&&(0,I.jsx)(d.C,{children:(0,I.jsx)("div",{children:l.map((e,n)=>"EGDSPlainText"===e.__typename&&(0,v.createElement)(P.D,vn(vn({},t),{},{key:n}),e.text))})})]})]})]})},Ti=x.J1`
  fragment EGDSRatingFragment on ProductRatingSummary {
    icon {
      ...EGDSIconFragment
    }
    accessibilityLabel
    primary
    secondary
    supportingMessages {
      ... on EGDSPlainText {
        text
      }
    }
    theme
  }

  ${dn.fragment}
`,Ai=({data:e,primaryTextProps:n,secondaryTextProps:t,supportingMessagesProps:i,showPrimaryTextPadding:a=!1})=>{const{primary:r,theme:s}=e;return r?s?(0,I.jsx)(Ei,{data:e,primaryTextProps:n,secondaryTextProps:t,supportingMessagesProps:i,showPrimaryTextPadding:a}):(0,I.jsx)(Li,{data:e,primaryTextProps:n,secondaryTextProps:t,supportingMessagesProps:i,showPrimaryTextPadding:a}):null};Ai.fragment=Ti,Ai.displayName="RecommendationsEGDSRating";const Ni=x.J1`
  fragment EGDSUICardActionFragment on UILinkAction {
    accessibility
    analytics {
      ...ClientSideAnalyticsFragment
    }
    resource {
      value
    }
    target
  }

  ${Ee}
`,ki=({data:e,seoEntityUrl:n,onClickCallback:t,clickAnalytics:i})=>{const{resource:a,target:r,analytics:s,accessibility:o}=e,{isAttach:d}=et(),{formatText:c}=(0,de.useLocalization)(),m=a.value,g=d?"_parent":"_self",u=r===rn.INTERNAL?g:"_blank",h="_blank"===u?c("opens.in.new.window")||"Opens in new window":null,x=(0,v.useRef)(null);(0,ce.ZY)(x,null==s?void 0:s.urls);const y=(0,p.KY)(),j=(0,p.iQ)(),f=(0,v.useCallback)(()=>{i?j(Ie(i)):be(s,y)},[s,y,i,j]);return(0,I.jsx)(l.w,{children:(0,I.jsx)("a",{href:n||m,target:u,rel:"noopener",onClickCapture:f,"aria-label":`${o||""}${h?` (${h})`:""}`,onClick:e=>{null==t||t(),n&&(e.preventDefault(),window.open(m,u,"noopener"))},ref:x,children:o})})};ki.fragment=Ni,ki.displayName="EGDSUICardAction";const Ci=x.J1`
  fragment LegacyPriceFragment on PropertyPrice {
    ...DiscoveryPriceSummaryFragment
  }

  ${x.J1`
  fragment DiscoveryPriceSummaryFragment on PropertyPrice {
    displayMessages {
      lineItems {
        ...PriceMessageFragment
        ...PriceSummaryEnrichedMessageFragment
      }
    }
    options {
      leadingCaption
      displayPrice {
        formatted
      }
      disclaimer {
        value
      }
      priceDisclaimer {
        content
        primaryButton {
          text
        }
        trigger {
          icon {
            description
          }
        }
      }
      accessibilityLabel
      strikeOut {
        formatted
      }
      loyaltyPrice {
        unit
        amount {
          formatted
        }
        totalStrikeOutPoints {
          formatted
        }
      }
    }
    priceMessaging {
      value
      theme
    }
  }

  ${me._f.fragment}
  ${me.xe.fragment}
`}
`,_i=({flexAlignment:e,data:n,enableInlineLink:t=!1})=>(0,I.jsx)(me._n,{data:n,flexAlignment:e,enableInlineLink:t});_i.fragment=Ci,_i.displayName="LegacyPrice";const Gi=["data"],Fi=x.J1`
  fragment EGDSSpannableListItemFragment on EGDSSpannableListItem {
    graphic {
      ...UIGraphicFragment
    }
    subText
    text {
      ...EGDSSpannableTextFragment
    }
  }

  ${Yn.fragment}
  ${gt.fragment}
`,Oi=e=>{let{data:n}=e,t=dt(e,Gi);const{graphic:i,subText:a,text:r}=n;return(0,I.jsxs)(o.X,{children:[(0,I.jsx)(d.C,{alignSelf:"center",children:i&&(0,I.jsx)(u.N,{padding:{inlineend:"two"},children:(0,I.jsx)("div",{children:(0,I.jsx)(Yn,{data:i})})})}),(0,I.jsx)(d.C,{alignSelf:"center",children:(0,I.jsxs)("div",{children:[(0,I.jsx)(gt,vn({data:r},t)),(0,I.jsx)(P.D,{children:a})]})})]})};Oi.displayName="EGDSSpannableListItem",Oi.fragment=Fi;const Pi=["data"],Mi=x.J1`
  fragment EGDSSpannableListFragment on EGDSSpannableList {
    items {
      ...EGDSSpannableListItemFragment
    }
    listType
  }

  ${Oi.fragment}
`,Ri=e=>{switch(e){case"BULLET":return"default";case"ICON":case"NO_BULLET":return"no-bullet";case"NUMBER":return"tiered-numbered";default:return}},wi=e=>{let{data:n}=e,t=dt(e,Pi);if(0===n.items.length)return null;const{listType:i,items:a}=n;return(0,I.jsx)(z.y,{bullet:Ri(i),spacing:!1,children:a.map((e,n)=>(0,I.jsx)(H.x,{children:(0,I.jsx)(Oi,vn({data:e},t))},n))})};wi.displayName="EGDSSpannableList",wi.fragment=Mi;const Bi=["data","isFullWidth","cardPadding"],zi=x.J1`
  fragment PropertyUniquenessFragment on DiscoveryProductUniqueness {
    background
    details {
      ...EGDSSpannableListFragment
    }
    title {
      ...EGDSGraphicTextFragment
    }
  }

  ${wi.fragment}
  ${Wn.fragment}
`,Hi=e=>{var n;let{data:t,isFullWidth:r=!1,cardPadding:s="four"}=e,l=dt(e,Bi);const c=Bn();if(!t)return null;const{background:m,details:g,title:h}=t;if(!h&&!g)return null;const p=m||i.g5.PRIMARY,[x]=null!==(n=null==g?void 0:g.items)&&void 0!==n?n:[],y=x&&1===(null==g?void 0:g.items.length)&&g.listType===Ke.NO_BULLET&&!x.graphic&&!x.subText,v=(0,I.jsx)(u.N,{padding:c?"two":s,children:(0,I.jsx)(a.g,{backgroundTheme:p,children:(0,I.jsxs)("div",{children:[h&&(0,I.jsx)(Wn,{data:h}),y&&(0,I.jsx)(gt,vn({data:x.text},l)),!y&&g&&(0,I.jsx)(wi,vn({data:g},l))]})})});return r?v:(0,I.jsx)(o.X,{children:(0,I.jsx)(d.C,{maxWidth:"180x",children:v})})};Hi.fragment=zi,Hi.displayName="PropertyUniqueness";const $i=x.J1`
  fragment ReviewSectionFragment on DiscoveryExpandoTextLists {
    onExpandoSection
    contents {
      title
      text {
        ... on EGDSPlainText {
          accessibility
          text
        }
        ...EGDSSpannableTextFragment
        ... on EGDSUnorderedList {
          ...SummaryContentListFragment
        }
      }
      footer {
        ...EGDSSpannableTextFragment
      }
      header {
        ...EGDSSpannableTextFragment
      }
    }
  }
  ${gt.fragment}
  ${yt.fragment}
  ${$n.fragment}
`,Ui=e=>e?(0,I.jsx)(G.M,{tag:"h3",size:7,children:e}):null,Yi=({data:e,onDiscoveryExpando:n,isVrLandingCard:t})=>{const i=Bn(),a=(null==e?void 0:e.contents)||[],r=(0,v.useMemo)(()=>e&&0!==(null==e?void 0:e.contents.length)?a.map((e,n)=>"EGDSSpannableText"===e.text.__typename||"EGDSPlainText"===e.text.__typename||"EGDSUnorderedList"===e.text.__typename?n:-1).filter(e=>-1!==e):[],[null==e?void 0:e.contents]),s=(0,v.useMemo)(()=>(null==e?void 0:e.onExpandoSection)&&n?{block:"unset"}:{block:i?"one":"two"},[null==e?void 0:e.onExpandoSection,n,i]);return e?Array.isArray(e.contents)?(0,I.jsx)(I.Fragment,{children:e.contents.map((e,n)=>{const a=n===r[r.length-1];switch(e.text.__typename){case"EGDSUnorderedList":return(0,I.jsx)(v.Fragment,{children:(0,I.jsx)(u.N,{padding:{blockend:i?"three":"two"},children:(0,I.jsxs)("div",{children:[(null==e?void 0:e.header)&&(0,I.jsx)(u.N,{padding:{blockstart:"one"},children:(0,I.jsx)("div",{children:(0,I.jsx)(gt,{data:e.header,insideFlex:!1,size:300})})}),Ui(e.title),(0,I.jsx)(yt,{data:e.text}),(null==e?void 0:e.footer)&&(0,I.jsx)(u.N,{padding:{blockstart:"two"},children:(0,I.jsx)("div",{children:(0,I.jsx)(gt,{data:e.footer,insideFlex:!1,size:200,theme:"secondary"})})})]})})},n);case"EGDSPlainText":return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(u.N,{padding:vn({},s),children:(0,I.jsxs)("div",{children:[Ui(e.title),(0,I.jsx)(u.N,{padding:{blockend:t?"one":"unset"},children:(0,I.jsx)("div",{"data-testid":"review-section-item",children:(0,I.jsx)(tt,{data:null==e?void 0:e.text})})}),(null==e?void 0:e.footer)&&(0,I.jsx)(u.N,{padding:{blockstart:t?"six":"two"},children:(0,I.jsx)("div",{children:(0,I.jsx)(gt,{data:e.footer,insideFlex:!1})})})]})},n),!a&&(0,I.jsx)(h.j,{blockMargin:"two"})]});case"EGDSSpannableText":return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(gt,{data:e.text,insideFlex:!1}),e.footer&&(0,I.jsx)(u.N,{padding:{blockstart:"two"},children:(0,I.jsx)("div",{"data-testid":"review-footer",children:(0,I.jsx)(gt,{data:e.footer,insideFlex:!1})})}),!a&&(0,I.jsx)(h.j,{blockMargin:"two"})]});default:return null}})}):void 0:null};Yi.fragment=$i,Yi.displayName="ReviewSection";const Vi=x.J1`
  fragment ReviewSnippetFragment on DiscoveryReviewSnippet {
    ... on DiscoveryExpandoText {
      text
      subText
      textControl {
        ...EGDSExpandoPeekFragment
      }
      onExpandoSection
    }
    ... on DiscoveryExpandoTextLists {
      ...ReviewSectionFragment
      expando {
        ...EGDSExpandoPeekFragment
      }
      onExpandoSection
    }
  }
  ${$n.fragment}
  ${Yi.fragment}
`,Ji=({data:e,onDiscoveryExpando:n,isVrLandingCard:t})=>{const i=(0,v.useMemo)(()=>{if(!e.__typename)return null;switch(e.__typename){case"DiscoveryExpandoTextLists":return e.onExpandoSection&&n?(0,I.jsx)(Yi,{data:e,onDiscoveryExpando:n,isVrLandingCard:t}):(0,I.jsx)($n,{data:e.expando,children:(0,I.jsx)(Yi,{data:e,isVrLandingCard:t})});case"DiscoveryExpandoText":{const t=(0,I.jsx)(P.D,{children:(0,I.jsx)("q",{children:e.text})}),i=e.subText&&(0,I.jsx)(u.N,{padding:{blockstart:"two"},children:(0,I.jsx)(P.D,{theme:"secondary",children:e.subText})});return e.onExpandoSection&&n?(0,I.jsxs)(I.Fragment,{children:[t,i]}):(0,I.jsxs)($n,{data:e.textControl,children:[t,i]})}default:return null}},[e,t]);return i?(0,I.jsx)("div",{"data-testid":"review-snippet",children:i}):null};Ji.fragment=Vi,Ji.displayName="ReviewSnippet";const Xi=x.J1`
  fragment DiscoveryTripSaveItemFragment on TripsSaveItem {
    ...TripsSaveItemFragment
  }

  ${x.J1`
  fragment TripsSaveItemFragment on TripsSaveItem {
    initialChecked
    itemId
    source
    viewType {
      ...TripSaveItemViewTypeFragment
    }
    attributes {
      ...TripsSaveStayAttributesFragment
      ...TripsSaveActivityAttributesFragment
      ...TripsSaveFlightSearchAttributesFragment
      ...TripsSaveCarOfferAttributesFragment
      ...TripsSavePackageAttributesFragment
    }
    save {
      ...TripsSaveItemPropertiesFragment
    }
    remove {
      ...TripsSaveItemPropertiesFragment
    }
    coachmark {
      ...TripsCoachmarkFragment
    }
    tripId
    additionalAttributes {
      key
      value
    }
  }

  fragment TripsCoachmarkFragment on TripsCoachmark {
    body
    button {
      accessibility
      analytics {
        ...ClientSideEventAnalyticsFragment
      }
      primary
      disabled
    }
    impressionAnalytics {
      ...ClientSideImpressionEventAnalyticsFragment
    }
    dismissEventAnalytics {
      ...ClientSideEventAnalyticsFragment
    }
    title
  }
  fragment ClientSideEventAnalyticsFragment on ClientSideAnalytics {
    eventType
    linkName
    referrerId
  }
  fragment ClientSideImpressionEventAnalyticsFragment on ClientSideImpressionEventAnalytics {
    linkName
    referrerId
    event
  }

  fragment TripSaveItemViewTypeFragment on TripSaveItemViewType {
    ... on TripSaveItemHeartView {
      heartOutlineType
    }
    ... on TripSaveItemButtonView {
      ...TripSaveItemItemButtonViewFragment
    }
  }

  fragment TripSaveItemItemButtonViewFragment on TripSaveItemButtonView {
    button {
      ... on TripSaveItemButton {
        ...UIPrimaryButtonFragment
        ...UISecondaryButtonFragment
      }
    }
  }

  fragment UIPrimaryButtonFragment on UIPrimaryButton {
    accessibility
    disabled
    primary
  }

  fragment UISecondaryButtonFragment on UISecondaryButton {
    accessibility
    disabled
    primary
  }

  fragment TripsSaveStayAttributesFragment on TripsSaveStayAttributes {
    checkInDate {
      ...DateFragment
    }
    checkoutDate {
      ...DateFragment
    }
    regionId
    roomConfiguration {
      numberOfAdults
      childAges
    }
  }

  fragment TripsSaveActivityAttributesFragment on TripsSaveActivityAttributes {
    regionId
    dateRange {
      start {
        ...DateFragment
      }
      end {
        ...DateFragment
      }
    }
  }

  fragment TripsSaveItemPropertiesFragment on TripsSaveItemProperties {
    accessibility
    analytics {
      referrerId
      linkName
      uisPrimeMessages {
        messageContent
        schemaName
      }
    }
    analyticsPayload
    label
    tooltip
  }

  fragment TripsSaveFlightSearchAttributesFragment on TripsSaveFlightSearchAttributes {
    searchCriteria {
      primary {
        journeyCriterias {
          arrivalDate {
            ...DateFragment
          }
          departureDate {
            ...DateFragment
          }
          destination
          destinationAirportLocationType
          origin
          originAirportLocationType
        }
        searchPreferences {
          advancedFilters
          airline
          cabinClass
        }
        travelers {
          age
          type
        }
        tripType
      }
      secondary {
        booleans {
          id
          value
        }
        counts {
          id
          value
        }
        dates {
          id
          value {
            ...DateFragment
          }
        }
        ranges {
          id
          min
          max
        }
        selections {
          id
          value
        }
      }
    }
  }

  fragment TripsSaveCarOfferAttributesFragment on TripsSaveCarOfferAttributes {
    categoryCode
    fuelAcCode
    offerToken
    searchCriteria {
      dropOffDateTime {
        ...DateTimeFragment
      }
      dropOffLocation {
        ...CarRentalLocationFragment
      }
      pickUpDateTime {
        ...DateTimeFragment
      }
      pickUpLocation {
        ...CarRentalLocationFragment
      }
    }
    transmissionDriveCode
    typeCode
    vendorCode
  }

  fragment TripsSavePackageAttributesFragment on TripsSavePackageAttributes {
    packageOfferId
    sessionId
  }

  fragment CarRentalLocationFragment on CarRentalLocation {
    airportCode
    coordinates {
      latitude
      longitude
    }
    isExactLocationSearch
    regionId
    searchTerm
  }

  fragment DateTimeFragment on DateTime {
    day
    month
    year
    hour
    minute
    second
  }

  fragment DateFragment on Date {
    day
    month
    year
  }
`}
`,Wi=(0,ue.RK)(new he.tk),Ki=({data:e,position:n,source:t=he.kL.LODGING_SEARCH,showRedOutline:i=!1})=>{const[a,r]=(0,v.useState)({});return(0,v.useEffect)(()=>{r({htmlElement:document.body})},[]),(0,I.jsx)(ge.P,{reactPortalContext:a,children:(0,I.jsx)(Wi,{children:(0,I.jsx)(he.GG,{data:e,source:t,heartLayoutPosition:n,showRedOutline:i})})})};Ki.fragment=Xi,Ki.displayName="DiscoveryTripSaveItem";const qi=x.J1`
  fragment DiscoveryCardFragment on GenericDiscoveryCard {
    heading {
      ...DiscoveryHeadingFragment
    }
    cardCTA {
      ...DiscoveryButtonCtaFragment
    }
    media {
      ...DiscoveryCardMediaFragment
    }
    badges {
      ...DiscoveryCardBadgesHeadingFragment
      ...DiscoveryCardBadgesPriceFragment
      ...EGDSBadgesPriceAltButtonFragment
      ...AdBadgeFragment
    }
    rating {
      ...EGDSRatingFragment
    }
    detailsList {
      ...EGDSDetailsListFragment
    }
    legacyPrice {
      ...LegacyPriceFragment
    }
    tripSaveItem {
      ...DiscoveryTripSaveItemFragment
    }
    impression {
      ...ClientSideAnalyticsFragment
    }
    render {
      urls
    }
    cardAction {
      ...EGDSUICardActionFragment
    }
    starRating {
      ...DiscoveryStarRatingFragment
    }
    guestsHighlights {
      ...DiscoveryGuestsLikedFragment
    }
    location {
      ...DiscoveryCardLocationFragment
    }
    locations {
      ...DiscoveryCardLocationFragment
    }
    reviewSnippet {
      ...ReviewSnippetFragment
    }
    uniqueness {
      ...PropertyUniquenessFragment
    }
    additionalInformation {
      ...DiscoveryAdditionalInformationFragment
    }
    expandoSection {
      ...DiscoveryExpandoSectionFragment
    }
    closeCardAction {
      accessibility
      analytics {
        ...ClientSideAnalyticsFragment
      }
      icon {
        ...EGDSIconFragment
      }
    }
    id
    backgroundTheme
    seoEntityUrl
    hoverEffect {
      type
    }
    impressionAnalytics
    action {
      ... on DiscoveryUILinkAction {
        clickAnalytics
      }
    }
  }

  ${Tt.fragment}
  ${Ee}
  ${ti}
  ${$t.fragment}
  ${Dn.fragment}
  ${Ln.fragment}
  ${Fn.fragment}
  ${Rn.fragment}
  ${Ai.fragment}
  ${bi.fragment}
  ${_i.fragment}
  ${ki.fragment}
  ${Ki.fragment}
  ${ai.fragment}
  ${kt.fragment}
  ${Ji.fragment}
  ${dn.fragment}
  ${Hi.fragment}
  ${St.fragment}
  ${Jt.fragment}
  ${Yt.fragment}
`,Qi=({data:e,subTitleProps:n,ariaHidden:t=!1})=>(0,I.jsxs)(I.Fragment,{children:[t&&(0,I.jsx)("div",{className:"is-visually-hidden",children:e.subTitleAccessibilityLabel&&(0,I.jsx)(P.D,{children:e.subTitleAccessibilityLabel})}),e.subTitle&&(0,I.jsx)(P.D,vn(vn({},n),{},{"aria-hidden":t,dataTestId:"subtitle",children:e.subTitle}))]});Qi.fragment=ti,Qi.displayName="DiscoveryHeadingSubtitle";const Zi=(e,n)=>{if(e&&[3,4].includes(e))return{customStyle:4===e?"headline-large":"headline-extra-large",customTheme:n?"standard":void 0}},ea=({data:e,highlightProps:n,titleProps:t,ariaHidden:i=!1,enableTruncate:a,domRef:r,uiCardAction:s})=>(0,I.jsxs)(I.Fragment,{children:[i&&(0,I.jsxs)("div",{className:"is-visually-hidden",children:[e.highlightAccessibilityLabel&&(0,I.jsx)(P.D,{children:e.highlightAccessibilityLabel}),e.titleAccessibilityLabel&&(0,I.jsx)(G.M,{tag:null==t?void 0:t.tag,children:e.titleAccessibilityLabel||e.title})]}),e.highlight&&(0,I.jsx)(P.D,vn(vn({},n),{},{"aria-hidden":i,dataTestId:"highlight",children:e.highlight})),(0,I.jsx)(u.N,{margin:{blockstart:e.highlight?"two":"unset"},stid:"heading",children:(0,I.jsx)("div",{children:(0,I.jsx)(g.P,{type:"relative",cloneElement:!0,children:(0,I.jsxs)("div",{ref:r,children:[(0,I.jsx)(G.M,vn(vn({},t),{},{typeStyle:Zi(null==t?void 0:t.size),"aria-hidden":i,overflow:a?"truncate":void 0,children:e.title})),s]})})})})]});ea.fragment=ti,ea.displayName="DiscoveryHeadingTitle";const na=({data:e,border:n=!0,priceExtraSpace:t,titleProps:i,carouselLoop:s=!1})=>{const{media:l,heading:h,cardAction:x,legacyPrice:y,impression:v,badges:j,rating:f,tripSaveItem:S,starRating:D,reviewSnippet:b,detailsList:L}=e,{uisPrimeMessages:E,linkName:T,referrerId:A}=v,N=(null==y?void 0:y.displayMessages)&&0!==y.displayMessages.length,k=L&&(0,I.jsx)(u.N,{margin:{block:"two"},children:(0,I.jsx)("div",{children:(0,I.jsx)(bi,{data:L,hasMinWidth:!1})})}),C=f&&(0,I.jsx)(u.N,{margin:{blockstart:"one"},children:(0,I.jsx)("div",{children:(0,I.jsx)(Ai,{data:f,primaryTextProps:{weight:"bold",theme:"emphasis",size:400},secondaryTextProps:{size:300},supportingMessagesProps:{size:200}})})}),_=N&&(0,I.jsx)(u.N,{margin:{blockstart:t?"four":"unset"},children:(0,I.jsx)(m.T,{colSpan:b?1:3,justifySelf:"end",alignSelf:"end",children:(0,I.jsxs)(o.X,{space:"one",direction:"column",alignItems:"end",children:[(null==j?void 0:j.heading)&&(0,I.jsx)(Dn,{data:j}),(null==j?void 0:j.price)&&(0,I.jsx)(Ln,{data:j}),(0,I.jsx)(_i,{data:y,flexAlignment:"end"})]})})});return(0,I.jsx)(p.ee,{trackOnce:!0,referrerId:A,linkName:T,additionalUisPrimeMicroMessages:De(E),children:(0,I.jsxs)(a.g,{border:n,children:[(0,I.jsxs)(c.w,{columns:3,children:[(0,I.jsx)(g.P,{type:"relative",children:(0,I.jsx)(m.T,{children:(0,I.jsxs)(o.X,{blockSize:"full_size",children:[l&&(0,I.jsx)($t,{data:l,showAttribution:!1,figureProps:{imageFit:"cover"},carouselLoop:s,imageLink:x}),S&&(0,I.jsx)(Ki,{data:S,position:{type:"absolute",position:{top:"one",right:"one",zindex:"layer2"}}})]})})}),(0,I.jsx)(m.T,{colSpan:2,children:(0,I.jsx)(r.E,{children:(0,I.jsx)(o.X,{direction:"column",blockSize:"full_size",children:(0,I.jsxs)(I.Fragment,{children:[(null==h?void 0:h.title)&&(0,I.jsx)(d.C,{children:(0,I.jsx)("div",{children:(0,I.jsx)(ea,{data:h,titleProps:null!=i?i:{tag:"h4",size:5,overflow:"truncate-3-lines"},highlightProps:{size:200,overflow:"truncate-3-lines"},ariaHidden:!0})})}),D&&(0,I.jsx)(d.C,{children:(0,I.jsx)("div",{children:(0,I.jsx)(u.N,{margin:{blockstart:"one"},children:(0,I.jsx)("div",{children:(0,I.jsx)(ai,{data:D})})})})}),(null==h?void 0:h.subTitle)&&(0,I.jsx)(d.C,{children:(0,I.jsx)("div",{children:(0,I.jsx)(Qi,{data:h,subTitleProps:{spacing:"one",overflow:"truncate-3-lines"},ariaHidden:!0})})}),k,C,(0,I.jsx)(d.C,{children:(0,I.jsxs)(c.w,{space:"one",columns:3,children:[b&&(0,I.jsx)(m.T,{colSpan:2,children:(0,I.jsx)("div",{children:(0,I.jsx)(u.N,{margin:{blockstart:"three"},children:(0,I.jsx)("div",{children:(0,I.jsx)(Ji,{data:b})})})})}),_]})})]})})})})]}),(0,I.jsx)(ki,{data:x})]})})};na.fragment=qi,na.displayName="ExitIntentListCard";let ta=function(e){return e.DISCOVERY_LANDING_OFFERS_OVERLAY_LIST_CARD="EXIT_INTENT_LIST_CARD",e}({});const ia={[ta.DISCOVERY_LANDING_OFFERS_OVERLAY_LIST_CARD]:na};let aa=function(e){return e.LIGHT="light-1",e.DARK="dark-1",e}({});const ra=e=>{const{data:n,highlightProps:t,titleProps:i,subTitleProps:a,ariaHidden:r=!1,forceAriaHidden:s=!1,legalContent:l,pills:d,title:c,legacyPriceLeftAlignment:m,showLegalContentInline:h,headingTypeStyleUnset:p,forceCustomThemeStandard:x=!1,cardType:y,domRef:v,uiCardAction:j}=e,f=1===(0,xe.useExperiment)("PDP_UI_Hygiene_Phase_1",!1).exposure.bucket,S=(0,V.s5)({[V.OB.LARGE]:{customStyle:"headline-large"},[V.OB.SMALL]:{customStyle:"headline-medium"}}),D=(0,V.s5)({[V.OB.LARGE]:6,[V.OB.SMALL]:7}),{highlightAccessibilityLabel:b,titleAccessibilityLabel:L,subTitleAccessibilityLabel:E,highlight:T,link:A,subTitle:N,disclaimer:k,additionalInformation:C,subTitleText:_}=n,F=c||n.title,O=F||N||T||e.children||A||d||_?"four":"unset",M="VR_LANDING"===y?"one":O,R="VR_LANDING"===y?"one":"two";let w;f&&"h2"===(null==i?void 0:i.tag)?w=S:(w=p?void 0:Zi(null==i?void 0:i.size,x),!w&&x&&(w={customStyle:"headline-medium",customTheme:"standard"}));const B=f&&"h3"===(null==i?void 0:i.tag)?D:null==i?void 0:i.size;return(0,I.jsxs)(I.Fragment,{children:[r&&(0,I.jsxs)("div",{className:"is-visually-hidden",children:[b&&(0,I.jsx)(P.D,{children:b}),L&&(0,I.jsx)(P.D,{children:L}),E&&(0,I.jsx)(P.D,{children:E})]}),T&&(0,I.jsx)(P.D,vn(vn({},t),{},{"aria-hidden":r,dataTestId:"highlight",children:T})),F&&(0,I.jsx)(u.N,{margin:{blockstart:T?"two":"unset"},stid:"heading",children:(0,I.jsxs)(o.X,{alignItems:"center",inline:!0,space:"one",children:[(0,I.jsx)(g.P,{type:"relative",cloneElement:!0,children:(0,I.jsxs)("div",{ref:v,children:[(0,I.jsx)(G.M,vn(vn({},i),{},{size:B,typeStyle:w,"aria-hidden":r||s,children:F})),j]})}),h&&l&&k&&(0,I.jsx)(qt,{data:k,children:l})]})}),e.children,A&&(0,I.jsx)(u.N,{margin:{blockstart:"one"},children:(0,I.jsx)(ni,{data:A,showIcon:!1})}),_?(0,I.jsx)(u.N,{margin:{blockstart:R},children:(0,I.jsx)("div",{children:(0,I.jsx)(gt,{data:_,insideFlex:!0})})}):N&&(m?(0,I.jsx)(u.N,{margin:{blockstart:"three"},children:(0,I.jsx)(P.D,vn(vn({},a),{},{"aria-hidden":r,dataTestId:"subtitle",children:N}))}):(0,I.jsx)(u.N,{margin:{blockstart:"two"},children:(0,I.jsx)(P.D,vn(vn({},a),{},{"aria-hidden":r,dataTestId:"subtitle",children:N}))})),d,C&&(0,I.jsx)(u.N,{margin:{blockstart:M},children:(0,I.jsx)("div",{children:(0,I.jsx)(gt,{data:C,insideFlex:!0})})}),!h&&l&&k&&(0,I.jsx)(qt,{data:k,children:l})]})};ra.fragment=ti,ra.displayName="DiscoveryHeading";const sa=({data:e,withoutIntersectionTracker:n,legacyPriceLeftAlignment:t,border:i=!0})=>{const{media:s,heading:l,cardAction:c,legacyPrice:m,impression:h,detailsList:x,badges:y,rating:v,tripSaveItem:j,id:f}=e,{uisPrimeMessages:S,linkName:D,referrerId:b}=h,L=(null==m?void 0:m.displayMessages)&&0!==m.displayMessages.length,{ref:E,inView:T}=(0,U.Wx)({triggerOnce:!0,threshold:.1}),A=t?"start":"end",N=t?"start":"end",k=(0,I.jsx)(a.g,{border:i,children:(0,I.jsxs)(o.X,{direction:"column",blockSize:"full_size",justifyContent:"space-between",children:[(0,I.jsxs)("div",{"data-property-id":f,children:[(null==y?void 0:y.heading)&&(0,I.jsx)(g.P,{type:"absolute",position:{zindex:"layer3",top:"three",left:"three"},children:(0,I.jsx)(Dn,{data:y})}),j&&(0,I.jsx)(Ki,{data:j,position:{type:"absolute",position:{top:"one",right:"one",zindex:"layer3"}}}),s&&(0,I.jsx)("div",{ref:E,children:(0,I.jsx)($t,{data:s,figureProps:{roundcorner:["startstart","startend"],ratio:W.l.R21_9},shouldLazyLoadImg:!T})}),(0,I.jsx)(r.E,{padded:!1,children:(0,I.jsx)(u.N,{padding:{inline:"three",blockstart:"three",blockend:L?"two":"three"},children:(0,I.jsxs)("div",{children:[l&&(0,I.jsx)(ra,{data:l,titleProps:{tag:"h3",size:6,overflow:"truncate-3-lines"},subTitleProps:{spacing:"one",overflow:"truncate-3-lines"},highlightProps:{size:200,overflow:"truncate-3-lines"},ariaHidden:!0}),x&&(0,I.jsx)(u.N,{margin:{blockstart:"two"},children:(0,I.jsx)("div",{children:(0,I.jsx)(bi,{data:x})})}),v&&(0,I.jsx)(u.N,{margin:{blockstart:"two"},stid:"rating",children:(0,I.jsx)("div",{children:(0,I.jsx)(Ai,{data:v,primaryTextProps:{weight:"bold",theme:"emphasis",size:400},secondaryTextProps:{size:300},supportingMessagesProps:{size:200}})})})]})})})]}),L&&(0,I.jsx)(r.E,{padded:["blockend","inlineend","inlinestart"],children:(0,I.jsxs)(o.X,{space:"one",direction:"column",alignItems:A,children:[(null==y?void 0:y.price)&&(0,I.jsx)(Ln,{data:y}),(0,I.jsx)(_i,{data:m,flexAlignment:N})]})}),(0,I.jsx)(ki,{data:c})]})});return n?(0,I.jsx)(I.Fragment,{children:k}):(0,I.jsx)(o.X,{direction:"column",blockSize:"full_size",children:(0,I.jsx)(d.C,{grow:1,children:(0,I.jsx)(p.ee,{trackOnce:!0,referrerId:b,linkName:D,additionalUisPrimeMicroMessages:De(S),children:k})})})};sa.fragment=qi,sa.displayName="FoundationCard";const la=({data:e,withoutIntersectionTracker:n,outputLineOfBusiness:t,onClickCallback:i})=>{var s;const{media:l,heading:c,cardAction:m,legacyPrice:h,impression:x,detailsList:y,badges:v,rating:j,tripSaveItem:f,location:S,starRating:D,id:b}=e,{uisPrimeMessages:L,linkName:E,referrerId:T,urls:A}=x,N=(null==h?void 0:h.displayMessages)&&0!==h.displayMessages.length,k="LODGING"===t?"truncate-2-lines":"truncate-3-lines",C=A&&A.length>0?A[0]:null,{componentRef:_}=(0,ve._)({viewabilityBeacon:C});(0,ce.RL)(null===(s=e.render)||void 0===s?void 0:s.urls);const G=(0,I.jsx)(o.X,{direction:"column",blockSize:"full_size",justifyContent:"space-between",children:(0,I.jsx)(d.C,{grow:1,children:(0,I.jsxs)(a.g,{border:!0,"data-stid":"abbreviated-card",ref:C?_:void 0,children:[(0,I.jsx)(u.N,{padding:{blockend:"one"},children:(0,I.jsxs)(o.X,{direction:"column",blockSize:"full_size",justifyContent:"space-between",children:[(0,I.jsxs)("div",{"data-property-id":b,children:[f&&(0,I.jsx)(Ki,{data:f,position:{type:"absolute",position:{top:"one",right:"one",zindex:"layer3"}}}),l&&(0,I.jsxs)(g.P,{type:"relative",children:[(0,I.jsx)(Rn,{data:v}),(0,I.jsx)($t,{data:l,figureProps:{ratio:W.l.R16_9}})]}),(0,I.jsx)(r.E,{padded:!1,children:(0,I.jsx)(u.N,{margin:{blockstart:"two"},padding:{inline:"two"},children:(0,I.jsxs)("div",{children:[c&&(0,I.jsx)(ra,{data:c,titleProps:{tag:"h4",size:7,overflow:k},ariaHidden:!0,children:D&&(0,I.jsx)(d.C,{children:(0,I.jsx)(u.N,{margin:{blockstart:"one"},stid:"star-rating",children:(0,I.jsx)("div",{children:(0,I.jsx)(ai,{data:D})})})})}),y&&(0,I.jsx)(u.N,{margin:{blockstart:"two"},children:(0,I.jsx)("div",{children:(0,I.jsx)(bi,{data:y,hasWrap:!1,iconGap:"half"})})}),j&&(0,I.jsx)(u.N,{margin:{blockstart:"one"},stid:"rating",children:(0,I.jsx)("div",{children:(0,I.jsx)(Ai,{data:j,primaryTextProps:{weight:"bold",theme:"emphasis",size:300},secondaryTextProps:{size:200},supportingMessagesProps:{size:200}})})}),S&&(0,I.jsx)(u.N,{margin:{blockstart:"one"},children:(0,I.jsx)("div",{children:(0,I.jsx)(kt,{data:S,textSize:200,textWeight:"regular"})})})]})})})]}),N&&(0,I.jsx)(r.E,{padded:!1,children:(0,I.jsx)(u.N,{margin:{blockstart:"two",blockend:"one"},padding:{inline:"two"},children:(0,I.jsxs)(o.X,{space:"one",direction:"column",alignItems:"start",children:[(null==v?void 0:v.price)&&(0,I.jsx)(Ln,{data:v}),(0,I.jsx)(_i,{data:h,flexAlignment:"start"})]})})})]})}),(0,I.jsx)(ki,{data:m,onClickCallback:i})]})})});return n?(0,I.jsx)(I.Fragment,{children:G}):(0,I.jsx)(o.X,{direction:"column",blockSize:"full_size",children:(0,I.jsx)(u.N,{padding:{blockend:"one"},children:(0,I.jsx)(d.C,{grow:1,children:(0,I.jsx)(p.ee,{trackOnce:!0,referrerId:T,linkName:E,additionalUisPrimeMicroMessages:De(L),children:G})})})})};la.fragment=qi,la.displayName="AbbreviatedCard";const oa=({data:e,withoutIntersectionTracker:n,outputLineOfBusiness:t,cardTitleTagProps:i,onHoverChanged:s})=>{const{media:l,heading:c,cardAction:m,legacyPrice:g,impression:h,rating:x,tripSaveItem:y,id:j}=e,{uisPrimeMessages:f,linkName:S,referrerId:D}=h,b=(null==g?void 0:g.displayMessages)&&0!==g.displayMessages.length,L="LODGING"===t?"truncate-2-lines":"truncate-3-lines",E=(0,v.useCallback)(()=>{null==s||s(!0,e)},[s,e]),T=(0,v.useCallback)(()=>{null==s||s(!1,e)},[s,e]),{ref:A,inView:N}=(0,U.Wx)({triggerOnce:!0,threshold:.1}),k=(0,I.jsx)(a.g,{border:!0,onMouseOver:E,onMouseLeave:T,children:(0,I.jsx)(o.X,{direction:"column",blockSize:"full_size",justifyContent:"space-between",children:(0,I.jsx)(u.N,{padding:{blockend:"one"},children:(0,I.jsxs)("div",{"data-property-id":j,children:[(0,I.jsxs)("div",{children:[y&&(0,I.jsx)(Ki,{data:y,position:{type:"absolute",position:{top:"one",right:"one",zindex:"layer3"}}}),l&&(0,I.jsx)("div",{ref:A,children:(0,I.jsx)($t,{data:l,figureProps:{ratio:W.l.R16_9},shouldLazyLoadImg:!N})}),(0,I.jsx)(r.E,{padded:!1,children:(0,I.jsx)(u.N,{margin:{blockstart:"two"},padding:{inline:"two"},children:(0,I.jsxs)("div",{children:[c&&(0,I.jsx)(ra,{data:c,titleProps:{tag:i||"h4",size:7,overflow:L},ariaHidden:!0}),x&&(0,I.jsx)(u.N,{margin:{blockstart:"one"},stid:"rating",children:(0,I.jsx)("div",{children:(0,I.jsx)(Ai,{data:x,primaryTextProps:{weight:"bold",theme:"emphasis",size:300},secondaryTextProps:{size:200},supportingMessagesProps:{size:200}})})})]})})})]}),b&&(0,I.jsx)(u.N,{margin:{blockstart:"two",blockend:"one"},padding:{inline:"two"},children:(0,I.jsx)(o.X,{space:"one",direction:"column",alignItems:"start",children:(0,I.jsx)(_i,{data:g,flexAlignment:"start",enableInlineLink:!0})})}),(0,I.jsx)(ki,{data:m})]})})})});return n?(0,I.jsx)(I.Fragment,{children:k}):(0,I.jsx)(o.X,{direction:"column",blockSize:"full_size",children:(0,I.jsx)(d.C,{grow:1,children:(0,I.jsx)(p.ee,{trackOnce:!0,referrerId:D,linkName:S,additionalUisPrimeMicroMessages:De(f),children:k})})})};oa.fragment=qi,oa.displayName="UberAbbreviatedCard";const da=({data:e,withoutIntersectionTracker:n})=>{const{media:t,heading:i,cardAction:s,legacyPrice:l,impression:c,detailsList:m,badges:h,rating:x,tripSaveItem:y,id:v,uniqueness:j}=e,{uisPrimeMessages:f,linkName:S,referrerId:D}=c,b=(null==l?void 0:l.displayMessages)&&0!==l.displayMessages.length,{ref:L,inView:E}=(0,U.Wx)({triggerOnce:!0,threshold:.1}),T=(0,I.jsx)(a.g,{border:!0,backgroundTheme:"primary",children:(0,I.jsxs)(o.X,{direction:"column",blockSize:"full_size",justifyContent:"space-between",children:[(0,I.jsxs)("div",{"data-property-id":v,children:[(null==h?void 0:h.heading)&&(0,I.jsx)(g.P,{type:"absolute",position:{zindex:"layer1",top:"three",left:"three"},children:(0,I.jsx)(Dn,{data:h})}),y&&(0,I.jsx)(Ki,{data:y,position:{type:"absolute",position:{top:"one",right:"one",zindex:"layer3"}}}),t&&(0,I.jsx)("div",{ref:L,children:(0,I.jsx)($t,{data:t,figureProps:{roundcorner:["startstart","startend"]},shouldLazyLoadImg:!E})}),(0,I.jsxs)(r.E,{padded:!0,children:[i&&(0,I.jsx)(ra,{data:i,titleProps:{tag:"h3",size:6,overflow:"truncate-3-lines"},subTitleProps:{spacing:"one",overflow:"truncate-3-lines"},highlightProps:{size:200,overflow:"truncate-3-lines"},ariaHidden:!0}),m&&(0,I.jsx)(bi,{data:m,spacing:{blockstart:"two"}}),x&&(0,I.jsx)(u.N,{margin:{blockstart:"two"},stid:"rating",children:(0,I.jsx)("div",{children:(0,I.jsx)(Ai,{data:x,primaryTextProps:{weight:"bold",theme:"emphasis",size:400},secondaryTextProps:{size:300},supportingMessagesProps:{size:200}})})})]})]}),(b||j)&&(0,I.jsx)(r.E,{padded:["blockend","inlineend","inlinestart"],children:(0,I.jsxs)(o.X,{space:"one",direction:"column",children:[j&&(0,I.jsx)(u.N,{margin:{blockend:"two"},children:(0,I.jsx)("div",{children:(0,I.jsx)(Hi,{data:j,isFullWidth:!0,size:200})})}),(null==h?void 0:h.price)&&(0,I.jsx)(Ln,{data:h}),l&&(0,I.jsx)(_i,{data:l,flexAlignment:"end"})]})}),(0,I.jsx)(ki,{data:s})]})});return n?(0,I.jsx)(I.Fragment,{children:T}):(0,I.jsx)(o.X,{direction:"column",blockSize:"full_size",children:(0,I.jsx)(d.C,{grow:1,children:(0,I.jsx)(p.ee,{trackOnce:!0,referrerId:D,linkName:S,additionalUisPrimeMicroMessages:De(f),children:T})})})};da.fragment=qi,da.displayName="LongFormCard";const ca={[Ue.HIGHLIGHT]:i.g5.HIGHLIGHT,[Ue.SECONDARY]:i.g5.SECONDARY,[Ue.PRIMARY]:i.g5.PRIMARY,[Ue.GLOBAL_LOYALTY_EXTRAHIGH]:i.g5.GLOBAL_LOYALTY_EXTRAHIGH,[Ue.GLOBAL_LOYALTY_HIGH]:i.g5.GLOBAL_LOYALTY_HIGH,[Ue.GLOBAL_LOYALTY_LOW]:i.g5.GLOBAL_LOYALTY_LOW,[Ue.GLOBAL_LOYALTY_MIDDLE]:i.g5.GLOBAL_LOYALTY_MIDDLE,[Ue.GLOBAL_LOYALTY_STANDARD]:i.g5.GLOBAL_LOYALTY_STANDARD};let ma=function(e){return e.LANDING="LANDING",e.LODGING="LODGING",e}({});const ga=["landing_pages:all:ppa_pinned_properties","landing_pages:all:ppa_popular_properties","landing_pages:all:ppa_nearby_properties"],ua=({data:e,enableImgLoadingState:n=!1,border:t=!0,priceExtraSpace:i,titleProps:l,cardTitleTagProps:x,handleMouseOver:y,handleMouseLeave:j,carouselLoop:f=!1,tripSaveItemPosition:S={type:"absolute",position:{top:"one",right:"one",zindex:"layer3"}},tripsPlanSource:D,view:b=ma.LANDING})=>{var L,E,T,A;const{media:N,heading:k,cardAction:C,legacyPrice:_,impression:G,badges:F,rating:O,tripSaveItem:P,starRating:M,reviewSnippet:R,additionalInformation:w,uniqueness:B,id:z,seoEntityUrl:H,detailsList:$,expandoSection:Y,backgroundTheme:J,cardCTA:X,hoverEffect:W}=e,K=(0,V.eg)({viewSizes:V.pf})===V.pf.SMALL,{uisPrimeMessages:q,linkName:Q,referrerId:Z}=G,ee=(null==_?void 0:_.displayMessages)&&0!==_.displayMessages.length,{configurationId:ne,shouldUnderlineTitleOnHover:te=!1}=et(),ie=!(!ne||!ga.includes(ne)),ae=!(!ie||!(null==k?void 0:k.featuredHeader)),re=J&&ae?ca[J]:void 0,se=(0,v.useRef)(null),[le,oe]=(0,v.useState)(!1),de=(null==W?void 0:W.type)===He.BORDER&&le,ce=(0,V.s5)({[V.OB.SMALL]:!1,[V.OB.MEDIUM]:!1,[V.OB.LARGE]:!0}),me=(0,v.useCallback)(()=>{const e=se.current;e&&(e.style.textDecoration="underline")},[]),ge=(0,v.useCallback)(()=>{const e=se.current;e&&(e.style.textDecoration="")},[]);(0,v.useEffect)(()=>{var e,n,t;if(!te)return;const i=null===(e=se.current)||void 0===e?void 0:e.querySelector("a");return i&&(i.style.zIndex="200"),null===(n=se.current)||void 0===n||n.addEventListener("mouseover",me),null===(t=se.current)||void 0===t||t.addEventListener("mouseout",ge),()=>{var e,n;null===(e=se.current)||void 0===e||e.removeEventListener("mouseover",me),null===(n=se.current)||void 0===n||n.removeEventListener("mouseout",ge)}},[me,ge,te]);const{ref:ue,inView:he}=(0,U.Wx)({triggerOnce:!0,threshold:.1}),pe=(0,I.jsx)(m.T,{colSpan:{small:1},children:(0,I.jsxs)(o.X,{direction:"column",children:[w&&(0,I.jsx)(d.C,{children:(0,I.jsx)(u.N,{margin:{blockstart:"three"},stid:"additional-information",children:(0,I.jsx)("div",{children:(0,I.jsx)(St,{data:w,padding:{inline:"unset",blockstart:"two"}})})})}),R&&(0,I.jsx)(d.C,{children:(0,I.jsx)(u.N,{margin:{blockstart:"three"},stid:"review-snippet",children:(0,I.jsx)("div",{children:(0,I.jsx)(Ji,{data:R})})})})]})}),xe=(0,I.jsx)(m.T,{colSpan:{small:1},children:(0,I.jsxs)(o.X,{direction:"column",children:[w&&(0,I.jsx)(d.C,{children:(0,I.jsx)(u.N,{margin:{blockstart:"three"},stid:"additional-information",children:(0,I.jsxs)("div",{children:[(0,I.jsx)(St,{data:w,padding:{inline:"unset",blockstart:"two"},onDiscoveryExpando:!0}),R&&(0,I.jsx)(h.j,{blockMargin:"four"})]})})}),R&&(0,I.jsx)(d.C,{children:(0,I.jsx)(u.N,{margin:"unset",stid:"review-snippet",children:(0,I.jsx)("div",{children:(0,I.jsx)(Ji,{data:R,onDiscoveryExpando:!0})})})})]})}),ye=(null==R?void 0:R.onExpandoSection)&&(null==w?void 0:w.onExpandoSection)&&"EGDSExpandoPeek"===(null==Y?void 0:Y.expando.__typename),ve=(0,v.useCallback)(()=>{null==y||y(null!=z?z:"")},[y,z]),je=(0,v.useCallback)(()=>{null==j||j(null!=z?z:""),oe(!1)},[j,z]),fe=(0,I.jsxs)(I.Fragment,{children:[ae&&(0,I.jsx)(g.P,{type:"absolute",position:{left:"zero",top:"zero",right:"zero",zindex:ae?"layer1":"layer3"},children:(0,I.jsx)(s.f,{title:{tag:"h3",text:k.featuredHeader}})}),(0,I.jsxs)(c.w,{columns:{small:b===ma.LANDING?1:3,medium:3},children:[(0,I.jsx)(g.P,{type:"relative","data-property-id":z,children:(0,I.jsx)(m.T,{children:(0,I.jsxs)(o.X,{blockSize:"full_size",domRef:ue,children:[P&&(0,I.jsx)(Ki,{data:P,position:S,source:D,showRedOutline:!0}),(null==F?void 0:F.heading)&&(0,I.jsx)(g.P,{type:"absolute",position:{bottom:K?"four":void 0,top:K?void 0:"four",left:"one",zindex:"layer2"},children:(0,I.jsx)("div",{children:(0,I.jsx)(Dn,{data:F,size:"SMALL"})})}),N&&(0,I.jsx)($t,{data:N,showAttribution:!1,figureProps:{imageFit:"cover"},carouselLoop:f,imageLink:C,shouldLazyLoadImg:!he,enableImgLoadingState:n,enableHighFetchPriority:ae,isImageClickable:ie})]})})}),(0,I.jsx)(m.T,{colSpan:{small:b===ma.LANDING?1:2,medium:2},children:(0,I.jsx)(r.E,{children:(0,I.jsx)(o.X,{direction:"column",blockSize:"full_size",children:(0,I.jsxs)(I.Fragment,{children:[(null==k?void 0:k.title)&&(0,I.jsx)(m.T,{children:(0,I.jsx)(u.N,{margin:{blockstart:ae?"eight":"unset"},children:(0,I.jsx)("div",{children:(0,I.jsx)(ea,{data:k,titleProps:null!=l?l:{tag:null!=x?x:"h4",size:5,overflow:"truncate-3-lines"},highlightProps:{size:200,overflow:"truncate-3-lines"},uiCardAction:(0,I.jsx)(ki,{data:C,seoEntityUrl:H}),domRef:se})})})}),M&&(0,I.jsx)(d.C,{children:(0,I.jsx)("div",{children:(0,I.jsx)(u.N,{margin:{blockstart:"one"},stid:"star-rating",children:(0,I.jsx)("div",{children:(0,I.jsx)(ai,{data:M})})})})}),(null==k?void 0:k.subTitle)&&(0,I.jsx)(d.C,{children:(0,I.jsx)("div",{children:(0,I.jsx)(Qi,{data:k,subTitleProps:{spacing:"one",overflow:"truncate-3-lines"}})})}),$&&(0,I.jsx)(bi,{data:$,hasMinWidth:!1,spacing:{block:"two"},iconGap:"one"}),O&&(0,I.jsx)(u.N,{margin:{blockstart:"one"},stid:"rating",children:(Se=O,(0,I.jsx)("div",{children:(0,I.jsx)(Ai,{data:Se,primaryTextProps:{weight:"bold",theme:"emphasis",size:400},secondaryTextProps:{size:300},supportingMessagesProps:{size:200}})}))}),B&&(0,I.jsx)(d.C,{children:(0,I.jsx)(u.N,{margin:{blockstart:"three"},stid:"uniqueness",children:(0,I.jsx)("div",{children:(0,I.jsx)(Hi,{data:B})})})}),(0,I.jsx)(d.C,{children:(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(c.w,{space:"one",columns:{small:1,medium:["3fr","2fr"]},children:[ye?(0,I.jsx)(Yt,{data:Y.expando,padding:"unset",children:xe}):pe,ee&&(0,I.jsx)(u.N,{margin:{blockstart:i?"four":"one"},children:(0,I.jsx)(m.T,{colSpan:{small:R||w?1:2},justifySelf:"end",alignSelf:"end",children:(0,I.jsx)("div",{children:(0,I.jsxs)(o.X,{space:"one",direction:"column",alignItems:"end",children:[!(null==F||null===(L=F.priceBadge)||void 0===L?void 0:L.action)&&(null==F||null===(E=F.priceBadge)||void 0===E?void 0:E.badge)&&(0,I.jsx)(En,{data:F}),(0,I.jsx)(_i,{data:_,flexAlignment:"end"})]})})})})]}),(0,I.jsxs)(o.X,{space:"one",direction:"column",alignItems:"end",children:[(null==F||null===(T=F.priceBadge)||void 0===T?void 0:T.action)&&(0,I.jsx)(g.P,{position:{zindex:"layer2"},cloneElement:!0,children:(0,I.jsx)(u.N,{margin:{blockstart:"two"},children:(0,I.jsx)("div",{children:(0,I.jsx)(En,{data:F})})})}),(null==F||null===(A=F.priceButton)||void 0===A||null===(A=A.button)||void 0===A?void 0:A.action)&&(0,I.jsx)(g.P,{position:{zindex:"layer2"},cloneElement:!0,children:(0,I.jsx)(u.N,{margin:{blockstart:"two"},children:(0,I.jsx)("div",{children:(0,I.jsx)(Fn,{data:F})})})})]})]})}),"CTAButton"===(null==X?void 0:X.__typename)&&ce&&(0,I.jsx)(d.C,{children:(0,I.jsx)(u.N,{margin:{blockstart:"four"},children:(0,I.jsx)(o.X,{justifyContent:"end",children:(0,I.jsx)(d.C,{children:(0,I.jsx)(Tt,{data:X})})})})})]})})})})]}),C&&(!ce||"CTAButton"!==(null==X?void 0:X.__typename))&&(0,I.jsx)(ki,{data:C,seoEntityUrl:H})]});var Se;return(0,I.jsx)(p.ee,{trackOnce:!0,referrerId:Z,linkName:Q,additionalUisPrimeMicroMessages:De(q),children:(0,I.jsx)(mi,{listCardSpacing:!0,children:(0,I.jsx)(a.g,{border:t,selected:de,onMouseOver:ve,onMouseEnter:()=>oe(!0),onMouseLeave:je,backgroundTheme:re,children:(0,I.jsx)("div",{children:fe})})})})};ua.fragment=qi,ua.displayName="ListCard";const ha="sm",pa="md",xa="lg",ya="xl",va={[V.OB.SMALL]:ha,[V.OB.MEDIUM]:pa,[V.OB.LARGE]:xa,[V.OB.EXTRA_LARGE]:ya},ja="sm",fa="md",Sa="lg",Da="xl",ba={[V.OB.SMALL]:ja,[V.OB.MEDIUM]:fa,[V.OB.LARGE]:Sa,[V.OB.EXTRA_LARGE]:Da},La=e=>Object.keys(V.OB).reduce((n,t)=>(n[t]=e,n),{}),Ia=e=>{switch(typeof e){case"boolean":return La(e);case"object":return n=e,Object.keys(V.OB).reduce((e,t)=>{const i=n[va[t]];return e[t]=void 0===i||Boolean(i),e},{});default:return La(!0)}var n},Ea={titleProps:{tag:"h3",size:6,overflow:"truncate-3-lines"},subTitleProps:{spacing:"one",overflow:"truncate-3-lines"},highlightProps:{size:200,overflow:"truncate-3-lines"}},Ta={hasWrap:!0,hasMinWidth:!0,hasCustomSpace:!1},Aa=({data:e,withoutIntersectionTracker:n,headingOptions:t,detailsListOptions:i,onClickCallback:l,onPrefetchHeroImage:c,lazyLoadingImgs:m})=>{var h,x,y;const{media:j,heading:f,cardAction:S,legacyPrice:D,impression:b,detailsList:L,locations:E,badges:T,rating:A,uniqueness:N,starRating:k,tripSaveItem:C,id:_,backgroundTheme:G}=e,{uisPrimeMessages:F,linkName:O,referrerId:P,urls:M}=b,R=(null==D?void 0:D.displayMessages)&&0!==D.displayMessages.length,w=t?((e,n)=>{const t={};return Object.keys(e).forEach(i=>{t[i]=vn(vn({},e[i]),n[i])}),t})(Ea,t):Ea,B=i?((e,n)=>{const t={};return Object.keys(e).forEach(i=>{t[i]=void 0!==n[i]?n[i]:e[i]}),t})(Ta,i):Ta,z=M?M[0]:null,{componentRef:H}=(0,ve._)({viewabilityBeacon:z}),{configurationId:$}=et(),U=!(!$||!["landing_pages:all:ppa_pinned_properties"].includes($));(0,ce.RL)(null===(h=e.render)||void 0===h?void 0:h.urls);const Y=G?ca[G]:void 0,V=(0,p.iQ)(),[J,X]=(0,v.useState)(null!==(x=null==C?void 0:C.initialChecked)&&void 0!==x&&x),K=(0,v.useCallback)(()=>{var e,n;const t=J?null==C||null===(e=C.remove)||void 0===e?void 0:e.analyticsPayload:null==C||null===(n=C.save)||void 0===n?void 0:n.analyticsPayload;t&&V({serverPayload:t}),X(e=>!e)},[J,C,V]),q=(0,v.useCallback)(()=>{null==l||l(),null==c||c(e)},[e]),Q=(0,I.jsxs)("div",{"data-property-id":_,children:[C&&(0,I.jsx)("div",{onClickCapture:K,children:(0,I.jsx)(Ki,{data:C,position:{type:"absolute",position:{top:"one",right:"one",zindex:"layer3"}}})}),(null==T?void 0:T.heading)&&(0,I.jsx)(g.P,{type:"absolute",position:{zindex:"layer1",top:"three",left:"three"},children:(0,I.jsx)(Dn,{data:T})}),(null==f?void 0:f.featuredHeader)&&(0,I.jsx)(g.P,{type:"absolute",position:{left:"zero",top:"zero",right:"zero",zindex:U?"layer1":"layer3"},children:(0,I.jsx)(s.f,{title:{tag:"h3",text:f.featuredHeader}})}),j&&(0,I.jsxs)(g.P,{type:"relative",children:[(0,I.jsx)(Rn,{data:T}),(0,I.jsx)($t,{data:j,figureProps:{roundcorner:["startstart","startend"],ratio:W.l.R16_9},shouldLazyLoadImg:m,enableHighFetchPriority:!(!(null==f?void 0:f.featuredHeader)||!U),isImageClickable:U})]}),(0,I.jsx)(r.E,{padded:!1,children:(0,I.jsx)(u.N,{padding:{inline:"three",blockstart:"three",blockend:R?"two":"three"},children:(0,I.jsxs)("div",{children:[f&&(0,I.jsx)(u.N,{margin:{blockend:"three"},children:(0,I.jsx)(ra,vn(vn({data:f},w),{},{children:k&&(0,I.jsx)(d.C,{children:(0,I.jsx)(u.N,{margin:{blockstart:"one"},stid:"star-rating",children:(0,I.jsx)("div",{children:(0,I.jsx)(ai,{data:k})})})})}))}),N&&(0,I.jsx)(u.N,{margin:{block:"three"},stid:"uniqueness",children:(0,I.jsx)("div",{children:(0,I.jsx)(Hi,{data:N,isFullWidth:!0,size:200,cardPadding:"three"})})}),L&&(0,I.jsx)(u.N,{margin:{blockstart:"two"},children:(0,I.jsx)("div",{children:(0,I.jsx)(bi,vn({data:L},B))})}),null==E?void 0:E.map((e,n)=>(0,I.jsx)(u.N,{margin:{blockstart:"two"},children:(0,I.jsx)("div",{children:(0,I.jsx)(kt,{data:e,textSize:200,textTheme:"standard"})})},n)),A&&(0,I.jsx)(u.N,{margin:{blockstart:"two"},children:(0,I.jsx)("div",{children:(0,I.jsx)(Ai,{data:A,primaryTextProps:{weight:"bold",theme:"emphasis",size:400},showPrimaryTextPadding:!0})})})]})})})]}),Z=(0,I.jsx)(o.X,{direction:"column",blockSize:"full_size",justifyContent:"space-between",children:(0,I.jsx)(d.C,{grow:1,children:(0,I.jsxs)(a.g,{border:!0,onClick:q,"data-stid":"long-form-featured-card",ref:z?H:void 0,backgroundTheme:Y,children:[(0,I.jsxs)(o.X,{direction:"column",blockSize:"full_size",justifyContent:"space-between",children:[e.impressionAnalytics?(0,I.jsx)(p.E0,{eventData:Ie(e.impressionAnalytics),children:Q}):Q,R&&(0,I.jsx)(r.E,{padded:["blockend","inlineend"],children:(0,I.jsxs)(o.X,{space:"one",direction:"column",alignItems:"end",children:[(null==T?void 0:T.price)&&(0,I.jsx)(Ln,{data:T}),(0,I.jsx)(_i,{data:D,flexAlignment:"end",enableInlineLink:!U})]})})]}),(0,I.jsx)(ki,{data:S,clickAnalytics:null===(y=e.action)||void 0===y?void 0:y.clickAnalytics})]})})});return n?(0,I.jsx)(I.Fragment,{children:Z}):(0,I.jsx)(o.X,{direction:"column",blockSize:"full_size",children:(0,I.jsx)(d.C,{grow:1,children:e.impressionAnalytics?Z:(0,I.jsx)(p.ee,{trackOnce:!0,referrerId:P,linkName:O,additionalUisPrimeMicroMessages:De(F),children:Z})})})};Aa.fragment=qi,Aa.displayName="LongFormFeaturedCard";const Na={maxHeight:"4rem",overflow:"hidden"},ka=({data:e,withoutIntersectionTracker:n,cardTitleTagProps:t})=>{var i,s,l,c;const{media:m,heading:x,cardAction:y,impression:j,legacyPrice:f,detailsList:S,badges:D,rating:b,tripSaveItem:L,starRating:E,seoEntityUrl:T,uniqueness:A,reviewSnippet:N,additionalInformation:k,guestsHighlights:C,id:_,expandoSection:G,cardCTA:F,hoverEffect:O}=e,[P,M]=(0,v.useState)(!1),{uisPrimeMessages:R,linkName:w,referrerId:B}=j,z=(null==f?void 0:f.displayMessages)&&0!==f.displayMessages.length,{configurationId:H}=et(),$=!(!H||!["landing_pages:all:ppa_popular_properties","landing_pages:all:ppa_nearby_properties"].includes(H)),U=(0,v.useRef)(null),Y=(null==O?void 0:O.type)===He.BORDER&&P,J=(0,V.s5)({[V.OB.SMALL]:!1,[V.OB.MEDIUM]:!1,[V.OB.LARGE]:!0}),X=(0,v.useCallback)(()=>{const e=U.current;e&&(e.style.textDecoration="underline")},[]),W=(0,v.useCallback)(()=>{const e=U.current;e&&(e.style.textDecoration="")},[]);(0,v.useEffect)(()=>{var e,n,t;const i=null===(e=U.current)||void 0===e?void 0:e.querySelector("a");return i&&(i.style.zIndex="200"),null===(n=U.current)||void 0===n||n.addEventListener("mouseover",X),null===(t=U.current)||void 0===t||t.addEventListener("mouseout",W),()=>{var e,n;null===(e=U.current)||void 0===e||e.removeEventListener("mouseover",X),null===(n=U.current)||void 0===n||n.removeEventListener("mouseout",W)}},[X,W]);const K=(0,I.jsxs)(I.Fragment,{children:[k&&(0,I.jsx)(u.N,{padding:{blockstart:"one"},children:(0,I.jsx)("div",{children:(0,I.jsx)(St,{data:k})})}),N&&(0,I.jsx)(u.N,{padding:{inline:"three"},stid:"review-snippet",children:(0,I.jsx)("div",{children:(0,I.jsx)(Ji,{data:N})})})]}),q=(0,I.jsxs)(I.Fragment,{children:[k&&(0,I.jsx)(u.N,{padding:{blockstart:"one"},children:(0,I.jsxs)("div",{children:[(0,I.jsx)(St,{data:k,onDiscoveryExpando:!0}),N&&(0,I.jsx)(h.j,{blockMargin:"four"})]})}),N&&(0,I.jsx)(u.N,{stid:"review-snippet",children:(0,I.jsx)("div",{children:(0,I.jsx)(Ji,{data:N,onDiscoveryExpando:!0})})})]}),Q=(null==N?void 0:N.onExpandoSection)&&(null==k?void 0:k.onExpandoSection)&&"EGDSExpandoPeek"===(null==G?void 0:G.expando.__typename),Z=(0,I.jsx)(a.g,{border:!0,backgroundTheme:"primary",selected:Y,onMouseEnter:()=>M(!0),onMouseLeave:()=>M(!1),children:(0,I.jsxs)(o.X,{direction:"column",blockSize:"full_size",justifyContent:"space-between",children:[(0,I.jsx)(d.C,{grow:1,children:(0,I.jsxs)("div",{"data-property-id":_,children:[(null==D?void 0:D.heading)&&(0,I.jsx)(g.P,{type:"absolute",position:{zindex:"layer3",top:"three",left:"three"},children:(0,I.jsx)(Dn,{data:D})}),m&&(0,I.jsx)($t,{data:m,figureProps:{roundcorner:["startstart","startend"],imageFit:"cover"},imageLink:y,isImageClickable:$}),L&&(0,I.jsx)(Ki,{data:L,position:{type:"absolute",position:{top:"one",right:"one",zindex:"layer2"}},showRedOutline:!0}),(0,I.jsx)(u.N,{padding:{block:"four",inline:"three"},children:(0,I.jsx)("div",{children:(0,I.jsxs)(r.E,{padded:!1,children:[x&&(0,I.jsx)(ra,{data:x,titleProps:{tag:null!=t?t:"h3",size:6,overflow:"truncate-3-lines"},subTitleProps:{spacing:"one",overflow:"truncate-3-lines"},highlightProps:{size:200,overflow:"truncate-3-lines"},domRef:U,uiCardAction:(0,I.jsx)(ki,{data:y,seoEntityUrl:T}),children:E&&(0,I.jsx)(d.C,{children:(0,I.jsx)(u.N,{margin:{blockstart:"one"},stid:"star-rating",children:(0,I.jsx)("div",{children:(0,I.jsx)(ai,{data:E})})})})}),S&&(0,I.jsx)(o.X,{style:Na,children:(0,I.jsx)(bi,{data:S,spacing:{blockstart:"two"},hasMinWidth:!1,hasWrap:!0,iconGap:"half"})})]})})}),b&&(0,I.jsx)(r.E,{padded:A||C?["inlinestart"]:["blockend","inlinestart"],children:(0,I.jsx)(o.X,{space:"one",direction:"column",alignItems:"start",dataTestId:"rating",children:(0,I.jsx)(Ai,{data:b,primaryTextProps:{weight:"bold",theme:"emphasis",size:400},secondaryTextProps:{size:300},supportingMessagesProps:{size:200}})})}),C&&(0,I.jsx)(r.E,{padded:["inlinestart"],children:(0,I.jsx)(u.N,{margin:{blockstart:"one"},children:(0,I.jsx)("div",{children:(0,I.jsx)(Jt,{data:C})})})}),A&&(0,I.jsx)(u.N,{padding:"four",stid:"uniqueness",children:(0,I.jsx)("div",{children:(0,I.jsx)(Hi,{data:A})})}),Q?(0,I.jsx)(Yt,{data:G.expando,padding:{inline:"three"},children:q}):K]})}),(null==D||null===(i=D.priceBadge)||void 0===i?void 0:i.action)&&(0,I.jsx)(u.N,{padding:"three",children:(0,I.jsx)(g.P,{position:{zindex:"layer2"},cloneElement:!0,children:(0,I.jsx)(o.X,{space:"two",direction:"column",alignItems:"start",children:(0,I.jsx)(En,{data:D})})})}),z&&(0,I.jsx)(r.E,{padded:["blockend","inlineend","inlinestart"],children:(0,I.jsxs)(o.X,{space:"one",direction:"column",alignItems:"end",children:[!(null==D||null===(s=D.priceBadge)||void 0===s?void 0:s.action)&&(null==D||null===(l=D.priceBadge)||void 0===l?void 0:l.badge)&&(0,I.jsx)(En,{data:D}),(0,I.jsx)(_i,{data:f,flexAlignment:"end"}),(null==D||null===(c=D.priceButton)||void 0===c||null===(c=c.button)||void 0===c?void 0:c.action)&&(0,I.jsx)(g.P,{position:{zindex:"layer2"},cloneElement:!0,children:(0,I.jsx)(u.N,{margin:{blockstart:"two"},children:(0,I.jsx)("div",{children:(0,I.jsx)(Fn,{data:D})})})})]})}),y&&(!J||"CTAButton"!==(null==F?void 0:F.__typename))&&(0,I.jsx)(ki,{data:y,seoEntityUrl:T}),"CTAButton"===(null==F?void 0:F.__typename)&&J&&(0,I.jsx)(u.N,{margin:"four",children:(0,I.jsx)("div",{children:(0,I.jsx)(Tt,{data:F,fullWidth:!0})})})]})});return n?(0,I.jsx)(oi,{landingCardSpacing:!0,children:Z}):(0,I.jsx)(o.X,{direction:"column",blockSize:"full_size",children:(0,I.jsx)(d.C,{grow:1,children:(0,I.jsx)(p.ee,{trackOnce:!0,referrerId:B,linkName:w,additionalUisPrimeMicroMessages:De(R),children:(0,I.jsx)(oi,{landingCardSpacing:!0,children:Z})})})})};ka.fragment=qi,ka.displayName="LandingCard";const Ca={maxHeight:"3rem",overflow:"hidden"},_a=({data:e,withoutIntersectionTracker:n,cardTitleTagProps:t})=>{var i,s,l;const{media:c,heading:m,cardAction:h,impression:x,legacyPrice:y,detailsList:j,badges:f,rating:S,tripSaveItem:D,starRating:b,seoEntityUrl:L,uniqueness:E,reviewSnippet:T,additionalInformation:A,guestsHighlights:N,id:k}=e,{uisPrimeMessages:C,linkName:_,referrerId:G}=x,F=(null==y?void 0:y.displayMessages)&&0!==y.displayMessages.length,O=(0,v.useRef)(null),{exposure:P}=(0,xe.useExperiment)("Enable_hover_state_for_BEX_and_HCOM_DLPs",!1),M=1===P.bucket,R=(0,I.jsx)(a.g,{border:!0,backgroundTheme:"primary",onMouseEnter:()=>{const e=O.current;e&&M&&(e.style.textDecoration="underline")},onMouseLeave:()=>{const e=O.current;e&&(e.style.textDecoration="")},children:(0,I.jsxs)(o.X,{direction:"column",blockSize:"full_size",justifyContent:"space-between",children:[(0,I.jsx)(d.C,{grow:1,children:(0,I.jsxs)("div",{"data-property-id":k,children:[(null==f?void 0:f.heading)&&(0,I.jsx)(g.P,{type:"absolute",position:{zindex:"layer1",top:"three",left:"three"},children:(0,I.jsx)(Dn,{data:f})}),c&&(0,I.jsx)($t,{data:c,figureProps:{roundcorner:["startstart","startend"],imageFit:"cover"},imageLink:h}),D&&(0,I.jsx)(Ki,{data:D,position:{type:"absolute",position:{top:"one",right:"one",zindex:"layer2"}},showRedOutline:!0}),(0,I.jsx)(u.N,{padding:{block:"four",inline:"four"},children:(0,I.jsxs)("div",{children:[(0,I.jsxs)(r.E,{padded:!1,children:[m&&(0,I.jsx)(ra,{data:m,titleProps:{tag:null!=t?t:"h3",size:6,overflow:"truncate-3-lines",domRef:O},subTitleProps:{overflow:"truncate-3-lines"},highlightProps:{size:200,overflow:"truncate-3-lines"},ariaHidden:!0,children:b&&(0,I.jsx)(d.C,{children:(0,I.jsx)(u.N,{margin:{blockstart:"two"},stid:"star-rating",children:(0,I.jsx)("div",{children:(0,I.jsx)(ai,{data:b})})})})}),j&&(0,I.jsx)(o.X,{style:Ca,children:(0,I.jsx)(bi,{data:j,spacing:{blockstart:"two"},hasMinWidth:!1,hasWrap:!0,iconGap:"half"})})]}),S&&(0,I.jsx)(u.N,{padding:{blockstart:"four"},children:(0,I.jsx)(r.E,{padded:!1,children:(0,I.jsx)(o.X,{space:"one",direction:"column",alignItems:"start",dataTestId:"rating",children:(0,I.jsx)(Ai,{data:S,primaryTextProps:{weight:"bold",theme:"emphasis",size:400},secondaryTextProps:{size:300},supportingMessagesProps:{size:200}})})})}),N&&(0,I.jsx)(r.E,{padded:!1,children:(0,I.jsx)(u.N,{children:(0,I.jsx)("div",{children:(0,I.jsx)(Jt,{data:N})})})}),E&&(0,I.jsx)(u.N,{padding:{blockstart:"four"},stid:"uniqueness",children:(0,I.jsx)("div",{children:(0,I.jsx)(Hi,{data:E})})})]})}),A?(0,I.jsx)(St,{data:A,padding:{inline:"four"}}):T&&(0,I.jsx)(u.N,{margin:"three",stid:"review-snippet",children:(0,I.jsx)("div",{children:(0,I.jsx)(Ji,{data:T})})})]})}),(null==f||null===(i=f.priceBadge)||void 0===i?void 0:i.action)&&(0,I.jsx)(u.N,{padding:"three",children:(0,I.jsx)(g.P,{position:{zindex:"layer2"},cloneElement:!0,children:(0,I.jsx)(o.X,{space:"two",direction:"column",alignItems:"start",children:(0,I.jsx)(En,{data:f})})})}),F&&(0,I.jsx)(r.E,{padded:!1,children:(0,I.jsx)(u.N,{padding:{blockend:"four",inlineend:"four"},children:(0,I.jsxs)(o.X,{space:"one",direction:"column",alignItems:"end",children:[!(null==f||null===(s=f.priceBadge)||void 0===s?void 0:s.action)&&(null==f||null===(l=f.priceBadge)||void 0===l?void 0:l.badge)&&(0,I.jsx)(En,{data:f}),(0,I.jsx)(_i,{data:y,flexAlignment:"end"})]})})}),(0,I.jsx)(ki,{data:h,seoEntityUrl:L})]})});return n?(0,I.jsx)(zn,{contentRichSpacing:!0,children:R}):(0,I.jsx)(o.X,{direction:"column",blockSize:"full_size",children:(0,I.jsx)(d.C,{grow:1,children:(0,I.jsx)(p.ee,{trackOnce:!0,referrerId:G,linkName:_,additionalUisPrimeMicroMessages:De(C),children:(0,I.jsx)(zn,{contentRichSpacing:!0,children:R})})})})};_a.fragment=qi,_a.displayName="ContentRichCard";const Ga=({data:e,border:n=!0,priceExtraSpace:t,titleProps:i,carouselLoop:s=!1})=>{const{media:l,heading:h,cardAction:x,legacyPrice:y,impression:v,badges:j,rating:f,tripSaveItem:S,starRating:D,reviewSnippet:b,uniqueness:L,detailsList:E,id:T}=e,{uisPrimeMessages:A,linkName:N,referrerId:k}=v,C=(null==y?void 0:y.displayMessages)&&0!==y.displayMessages.length;return(0,I.jsx)(p.ee,{trackOnce:!0,referrerId:k,linkName:N,additionalUisPrimeMicroMessages:De(A),children:(0,I.jsxs)(a.g,{border:n,children:[(0,I.jsxs)(c.w,{columns:{medium:3},children:[(0,I.jsx)(g.P,{type:"relative","data-property-id":T,children:(0,I.jsx)(m.T,{children:(0,I.jsxs)(o.X,{blockSize:"full_size",children:[l&&(0,I.jsx)($t,{data:l,showAttribution:!1,figureProps:{imageFit:"cover"},carouselLoop:s,imageLink:x}),S&&(0,I.jsx)(Ki,{data:S,position:{type:"absolute",position:{top:"one",right:"one",zindex:"layer2"}}})]})})}),(0,I.jsx)(m.T,{colSpan:{medium:2},children:(0,I.jsx)(r.E,{children:(0,I.jsx)(o.X,{direction:"column",blockSize:"full_size",children:(0,I.jsxs)(I.Fragment,{children:[(null==h?void 0:h.title)&&(0,I.jsx)(d.C,{children:(0,I.jsx)("div",{children:(0,I.jsx)(ea,{data:h,titleProps:null!=i?i:{tag:"h4",size:5,overflow:"truncate-3-lines"},highlightProps:{size:200,overflow:"truncate-3-lines"},ariaHidden:!0})})}),D&&(0,I.jsx)(d.C,{children:(0,I.jsx)("div",{children:(0,I.jsx)(u.N,{margin:{blockstart:"one"},stid:"star-rating",children:(0,I.jsx)("div",{children:(0,I.jsx)(ai,{data:D})})})})}),(null==h?void 0:h.subTitle)&&(0,I.jsx)(d.C,{children:(0,I.jsx)("div",{children:(0,I.jsx)(Qi,{data:h,subTitleProps:{spacing:"one",overflow:"truncate-3-lines"},ariaHidden:!0})})}),E&&(0,I.jsx)(bi,{data:E,spacing:{block:"two"}}),f&&(0,I.jsx)(u.N,{margin:{blockstart:"one"},stid:"rating",children:(0,I.jsx)("div",{children:(0,I.jsx)(Ai,{data:f,primaryTextProps:{weight:"bold",theme:"emphasis",size:400},secondaryTextProps:{size:300},supportingMessagesProps:{size:200}})})}),L&&(0,I.jsx)(d.C,{children:(0,I.jsx)(u.N,{margin:{blockstart:"three"},stid:"uniqueness",children:(0,I.jsx)("div",{children:(0,I.jsx)(Hi,{data:L})})})}),(0,I.jsx)(d.C,{children:(0,I.jsxs)(c.w,{space:"one",columns:{small:1,medium:["3fr","2fr"]},children:[b&&(0,I.jsx)(m.T,{colSpan:{small:1},children:(0,I.jsx)("div",{children:(0,I.jsx)(u.N,{margin:{blockstart:"three"},stid:"review-snippet",children:(0,I.jsx)("div",{children:(0,I.jsx)(Ji,{data:b})})})})}),C&&(0,I.jsx)(u.N,{margin:{blockstart:t?"four":"one"},children:(0,I.jsx)(m.T,{colSpan:{small:b?1:2},justifySelf:"end",alignSelf:"end",children:(0,I.jsxs)(o.X,{space:"one",direction:"column",alignItems:"end",children:[(null==j?void 0:j.heading)&&(0,I.jsx)(Dn,{data:j}),(null==j?void 0:j.price)&&(0,I.jsx)(Ln,{data:j}),(0,I.jsx)(_i,{data:y,flexAlignment:"end"})]})})})]})})]})})})})]}),(0,I.jsx)(ki,{data:x})]})})};Ga.fragment=qi,Ga.displayName="SmartLandingCard";const Fa=({data:e,withoutIntersectionTracker:n,legacyPriceLeftAlignment:t,border:i=!0})=>{const{media:s,heading:l,cardAction:c,legacyPrice:m,impression:h,detailsList:x,badges:y,rating:v,tripSaveItem:j,reviewSnippet:f,id:S}=e,{uisPrimeMessages:D,linkName:b,referrerId:L}=h,E=(null==m?void 0:m.displayMessages)&&0!==m.displayMessages.length,{ref:T,inView:A}=(0,U.Wx)({triggerOnce:!0,threshold:.1}),N=t?"start":"end",k=t?"start":"end",C=(0,I.jsx)(a.g,{border:i,children:(0,I.jsxs)(o.X,{direction:"column",blockSize:"full_size",justifyContent:"space-between",children:[(0,I.jsxs)("div",{"data-property-id":S,children:[j&&(0,I.jsx)(Ki,{data:j,position:{type:"absolute",position:{top:"one",right:"one",zindex:"layer3"}}}),(0,I.jsxs)(g.P,{type:"relative",children:[s&&(0,I.jsx)("div",{ref:T,children:(0,I.jsx)($t,{data:s,figureProps:{roundcorner:["startstart","startend"],ratio:W.l.R3_4},shouldLazyLoadImg:!A})}),(null==y?void 0:y.heading)&&(0,I.jsx)(g.P,{type:"absolute",position:{zindex:"layer3",bottom:"three",left:"three"},children:(0,I.jsx)(Dn,{data:y})})]}),(0,I.jsx)(r.E,{padded:!1,children:(0,I.jsx)(u.N,{padding:{inline:"three",blockstart:"three",blockend:E?"two":"three"},children:(0,I.jsxs)("div",{children:[l&&(0,I.jsx)(ra,{data:l,titleProps:{tag:"h3",size:5,overflow:"truncate"},subTitleProps:{spacing:"one",overflow:"truncate-3-lines"},highlightProps:{size:200,overflow:"truncate-3-lines"},ariaHidden:!0,cardType:"VR_LANDING"}),(0,I.jsxs)(o.X,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[v&&(0,I.jsx)(u.N,{margin:{blockstart:"two"},stid:"rating",children:(0,I.jsx)("div",{children:(0,I.jsx)(Ai,{data:v,primaryTextProps:{weight:"bold",theme:"emphasis",size:400},secondaryTextProps:{size:300},supportingMessagesProps:{size:200}})})}),E&&(0,I.jsx)(u.N,{margin:{blockstart:"three"},children:(0,I.jsx)(r.E,{padded:["inlineend","inlinestart"],children:(0,I.jsxs)(o.X,{space:"one",direction:"column",alignItems:N,children:[(null==y?void 0:y.price)&&(0,I.jsx)(Ln,{data:y}),(0,I.jsx)(_i,{data:m,flexAlignment:k})]})})})]})]})})}),f&&(0,I.jsx)(u.N,{padding:{inline:"three",blockend:"eight"},stid:"review-snippet",autoCollapse:!0,children:(0,I.jsx)("div",{children:(0,I.jsx)(Ji,{data:f,isVrLandingCard:!0})})})]}),(0,I.jsx)(ki,{data:c})]})});return n?(0,I.jsx)(I.Fragment,{children:C}):(0,I.jsx)(o.X,{direction:"column",blockSize:"full_size",children:(0,I.jsx)(d.C,{grow:1,children:(0,I.jsx)(p.ee,{trackOnce:!0,referrerId:L,linkName:b,additionalUisPrimeMicroMessages:De(D),children:C})})})};Fa.fragment=qi,Fa.displayName="VrLandingCard";let Oa=function(e){return e.ABBREVIATED="ABBREVIATED",e.FOUNDATION="FOUNDATION",e.LONG_FORM="LONG_FORM",e.SHORT_FORM="SHORT_FORM",e.UBER_ABBREVIATED="UBER_ABBREVIATED",e.UBER_ABBREVIATED_PRICE="UBER_ABBREVIATED_PRICE",e.UBER_ABBREVIATED_RATING="UBER_ABBREVIATED_RATING",e.LIST_CARD="LIST_CARD",e.LONG_FORM_FEATURED="LONG_FORM_FEATURED",e.LANDING="LANDING",e.FOUNDATION_DETAILS_LIST="FOUNDATION_DETAILS_LIST",e.SMART_LANDING="SMART_LANDING",e.CONTENT_RICH="CONTENT_RICH",e.VR_LANDING="VR_LANDING",e}({});const Pa={[Oa.FOUNDATION]:sa,[Oa.FOUNDATION_DETAILS_LIST]:sa,[Oa.ABBREVIATED]:la,[Oa.UBER_ABBREVIATED]:oa,[Oa.UBER_ABBREVIATED_PRICE]:oa,[Oa.UBER_ABBREVIATED_RATING]:oa,[Oa.LONG_FORM]:da,[Oa.LONG_FORM_FEATURED]:Aa,[Oa.LANDING]:ka,[Oa.SMART_LANDING]:Ga,[Oa.CONTENT_RICH]:_a,[Oa.VR_LANDING]:Fa},Ma={[Oa.SMART_LANDING]:Ga},Ra={itemsVisible:{sm:1,md:3,lg:4,xl:4},columns:{small:1,medium:3,large:4}},wa={itemsVisible:{sm:2,md:4,lg:5,xl:5},columns:{small:2,medium:4,large:5}},Ba={[Oa.FOUNDATION]:Ra,[Oa.FOUNDATION_DETAILS_LIST]:Ra,[Oa.ABBREVIATED]:wa,[Oa.UBER_ABBREVIATED]:wa,[Oa.UBER_ABBREVIATED_PRICE]:wa,[Oa.UBER_ABBREVIATED_RATING]:wa,[Oa.LONG_FORM]:Ra,[Oa.LONG_FORM_FEATURED]:{itemsVisible:{sm:1,md:2,lg:3,xl:3},columns:{small:1,medium:3,large:4}},[Oa.LANDING]:Ra,[Oa.SMART_LANDING]:Ra,[Oa.CONTENT_RICH]:Ra,[Oa.VR_LANDING]:Ra},za=x.J1`
  fragment DiscoveryViewportItemsFragment on DiscoveryViewportItems {
    large
    medium
    small
  }
`,Ha=x.J1`
  fragment DiscoveryGridFragment on DiscoveryGrid {
    columns {
      ...DiscoveryViewportItemsFragment
    }
  }

  ${za}
`,$a=({children:e,data:n})=>{if(!Array.isArray(e)||0===e.length||!(null==n?void 0:n.columns))return null;const{columns:t}=n;return(0,I.jsx)(c.w,{columns:t,space:{row:"four",column:"three"},"data-testid":"discovery-grid",children:e})};$a.fragment=Ha,$a.displayName="DiscoveryGrid";const Ua=x.J1`
  fragment DiscoveryListFragment on DiscoveryList {
    id
  }
`,Ya=({children:e})=>Array.isArray(e)&&0!==e.length?(0,I.jsx)(c.w,{columns:1,space:"three",justifyContent:"space-between","data-testid":"discovery-list",children:e}):null;Ya.fragment=Ua,Ya.displayName="DiscoveryList";const Va=x.J1`
  fragment DiscoveryGroupLayoutFragment on DiscoveryGroupLayout {
    ...EGDSCarouselFragment
    ...DiscoveryListFragment
    ...DiscoveryGridFragment
  }

  ${Ya.fragment}
  ${$a.fragment}
  ${_t.fragment}
`,Ja=({data:e,itemsVisible:n,children:t})=>{const{__typename:i}=e;if(!Array.isArray(t)||0===t.length)return null;switch(i){case"EGDSCarousel":return(0,I.jsx)(_t,{data:e,itemsVisible:n,peek:!0,children:t});case"DiscoveryList":return(0,I.jsx)(Ya,{data:e,children:t});case"DiscoveryGrid":return(0,I.jsx)($a,{data:e,children:t});default:return null}};Ja.fragment=Va,Ja.displayName="DiscoveryGroupLayout";const Xa=e=>{if(e.current){const n=e.current.getBoundingClientRect(),t=window.scrollY+n.top;window.scroll({top:t,left:0,behavior:"smooth"})}},Wa=x.J1`
  fragment DiscoveryExpandoFragment on DiscoveryExpando {
    expando {
      ...EGDSExpandoPeekFragment
    }
    hideScrim
    items {
      ...DiscoveryViewportItemsFragment
    }
  }

  ${za}
  ${$n.fragment}
`,Ka=({children:e,data:n,className:t})=>{const{expando:i,items:a}=n,[r,s]=(0,v.useState)((null==i?void 0:i.expanded)||!1),l=(0,p.KY)(),o=(0,v.useRef)(null),d=(0,v.useRef)(null),c=(0,V.s5)({[V.OB.SMALL]:a.small,[V.OB.MEDIUM]:a.medium,[V.OB.LARGE]:a.large});if(!e)return null;if(!i)return(0,I.jsx)(I.Fragment,{children:e});const m=1===v.Children.count(e)&&(0,v.isValidElement)(e),g=m?e:void 0;if(!m&&!Array.isArray(e))return null;const h=m?e.props.children:e;if(!h||!Array.isArray(h))return null;const x=h.slice(0,c),y=h.slice(c,h.length),{collapsedLabel:j,expandedLabel:f,expandedAccessibilityText:S,collapsedAccessibilityText:D}=i,b=m?(0,v.cloneElement)(g,{children:y}):y,E=r?S||f:D||j;return i&&y.length>0&&0!==c?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("div",{ref:d,children:m&&x?(0,v.cloneElement)(g,{children:x}):x}),(0,I.jsx)(u.N,{padding:{blockstart:r?"four":"unset"},children:(0,I.jsxs)("div",{className:t,ref:o,children:[r?b:(0,I.jsx)("div",{"data-testid":"discovery-expando",style:{display:"none"},children:b}),(0,I.jsx)(u.N,{padding:{blockstart:r?"six":"four"},children:(0,I.jsx)(le.i,{onClick:()=>{if(i){const{expandAnalytics:e,collapseAnalytics:n}=i,t=r?null==n?void 0:n.referrerId:null==e?void 0:e.referrerId,a=r?null==n?void 0:n.linkName:null==e?void 0:e.linkName;t&&a&&l(t,a)}r&&Xa(x?d:o),s(!r)},id:"discovery-expando-trigger",children:(0,I.jsxs)("button",{type:"button","aria-label":E,children:[r?f:j," ",(0,I.jsx)(L.LD,{name:r?"expand_less":"expand_more"})]})})})]})})]}):(0,I.jsx)(I.Fragment,{children:e})};Ka.fragment=Wa,Ka.displayName="DiscoveryExpando";const qa=x.J1`
  fragment DiscoveryWrapperFragment on DiscoveryWrapper {
    ...DiscoveryExpandoFragment
  }

  ${Ka.fragment}
`,Qa=({data:e,children:n,className:t})=>{if(!e)return(0,I.jsx)(I.Fragment,{children:n});const{__typename:i}=e;return"DiscoveryExpando"===i?(0,I.jsx)(Ka,{className:t,data:e,children:n}):(0,I.jsx)(I.Fragment,{children:n})};Qa.fragment=qa,Qa.displayName="DiscoveryWrapper";const Za=x.J1`
  fragment DiscoveryContainerFragment on DiscoveryContainer {
    itemsLayout {
      ...DiscoveryGroupLayoutFragment
    }
    wrapper {
      ...DiscoveryWrapperFragment
    }
  }

  ${Ja.fragment}
  ${Qa.fragment}
  ${qi}
`;let er=function(e){return e.HEADER_MAP_BUTTON="header-map-button",e}({});const nr=({data:e,cardTheme:n,children:t,cardTitleTagProps:i,injectedComponents:a,onClickCallback:r,onHoverChanged:s})=>{const{itemsLayout:l,wrapper:o}=e;if(!Array.isArray(t)||0===t.length)return null;const d="DiscoveryList"===l.__typename,c="EGDSCarousel"===l.__typename,{DiscoveryCard:g,itemsVisible:u}="function"==typeof n&&d?{DiscoveryCard:ua,itemsVisible:Ba.FOUNDATION.itemsVisible}:"string"==typeof n?d?{DiscoveryCard:null!==(h=Ma[n])&&void 0!==h?h:ua,itemsVisible:null!==(p=null===(x=Ba[n])||void 0===x?void 0:x.itemsVisible)&&void 0!==p?p:Ba.FOUNDATION.itemsVisible}:{DiscoveryCard:Pa[n],itemsVisible:Ba.FOUNDATION.itemsVisible}:{DiscoveryCard:n,itemsVisible:Ba.FOUNDATION.itemsVisible};var h,p,x;const y=new Map((null!=a?a:[]).flatMap(e=>"index"in e?[[e.index,e.component]]:[])),j=(0,I.jsx)(Ja,{data:l,itemsVisible:u,children:t.map((e,n)=>{const t=g&&(0,I.jsx)(g,{data:e,cardTitleTagProps:i,onClickCallback:r,onHoverChanged:s});return(0,I.jsxs)(v.Fragment,{children:[d&&y.get(n),c?t:(0,I.jsx)(m.T,{children:t})]},n)})});return o?(0,I.jsx)(Qa,{data:o,children:j}):j};nr.fragment=Za,nr.displayName="DiscoveryContainer";const tr=x.J1`
  fragment DiscoveryItemsGroupDefaultExplainabilityFragment on DiscoveryItemsGroupDefaultExplainability {
    message {
      text
    }
    button {
      ...EGDSSecondaryButtonFragment
    }
  }

  ${bt.fragment}
`,ir=({data:e})=>{const{message:n,button:t}=e||{},i=(0,V.s5)({[V.OB.SMALL]:500,[V.OB.MEDIUM]:600});return null===n&&null===t?null:(0,I.jsx)(a.g,{border:!0,children:(0,I.jsx)(u.N,{padding:"six",stid:"explainability-default",children:(0,I.jsxs)(o.X,{alignItems:"center",justifyContent:"center",direction:"column",space:"six",children:[(null==n?void 0:n.text)&&(0,I.jsx)(P.D,{size:i,weight:"medium",align:"center",children:n.text}),t&&(0,I.jsx)(bt,{size:A.V.MEDIUM,data:t,overrideUseRelativePath:!0})]})})})};ir.fragment=tr,ir.displayName="DiscoveryItemsGroupDefaultExplainability";const ar={[nn.CENTER]:"center",[nn.LEFT]:"start"},rr=x.J1`
  fragment DiscoveryItemsGroupSimpleTextExplainabilityFragment on DiscoveryItemsGroupSimpleTextExplainability {
    message {
      text
    }
    textFlexAlignment
  }
`,sr=({data:e})=>{var n,t;return(null==e||null===(n=e.message)||void 0===n?void 0:n.text)?(0,I.jsx)(o.X,{alignItems:ar[null!==(t=e.textFlexAlignment)&&void 0!==t?t:nn.LEFT],direction:"column",space:"six",children:(0,I.jsx)(P.D,{size:200,children:e.message.text})}):null};sr.fragment=rr,sr.displayName="DiscoveryItemsGroupSimpleTextExplainability";const lr=x.J1`
  fragment DiscoveryItemGroupExplainabilityFragment on DiscoveryItemGroupExplainability {
    ... on DiscoveryItemsGroupDefaultExplainability {
      ...DiscoveryItemsGroupDefaultExplainabilityFragment
    }
    ... on DiscoveryItemsGroupSimpleTextExplainability {
      ...DiscoveryItemsGroupSimpleTextExplainabilityFragment
    }
  }

  ${ir.fragment}
  ${sr.fragment}
`,or=({data:e})=>{switch(e.__typename){case"DiscoveryItemsGroupDefaultExplainability":return(0,I.jsx)(ir,{data:e});case"DiscoveryItemsGroupSimpleTextExplainability":return(0,I.jsx)(sr,{data:e});default:return null}};or.fragment=lr,or.displayName="DiscoveryItemGroupExplainability";const dr={h1:"h2",h2:"h3",h3:"h4",h4:"h5",h5:"h6"},cr=e=>e?dr[e]:void 0,mr=x.J1`
  fragment DiscoveryTextFragment on DiscoveryText {
    ...EGDSGraphicTextFragment
    ...EGDSParagraphFragment
    ...EGDSPlainTextFragment
    ...EGDSSpannableTextFragment
  }

  ${Wn.fragment}
  ${Qn.fragment}
  ${tt.fragment}
  ${gt.fragment}
`,gr=({className:e,data:n,textSize:t})=>{switch(n.__typename){case"EGDSPlainText":return(0,I.jsx)(tt,{className:e,data:n,textSize:t});case"EGDSParagraph":return(0,I.jsx)(Qn,{data:n});case"EGDSGraphicText":return(0,I.jsx)(Wn,{className:e,data:n,textSize:t});case"EGDSSpannableText":return(0,I.jsx)(gt,{className:e,data:n,size:t});default:return null}};gr.fragment=mr,gr.displayName="DiscoveryText";const ur={event:{event_name:"learn_more.selected",event_version:"1.0.0",event_type:"Interaction",event_category:"trip_bundle_and_save",action_location:"Bottom Sheet Area"}},hr={event:{event_name:"view_products.selected",event_version:"1.0.0",event_type:"Interaction",event_category:"trip_bundle_and_save",action_location:"Inside Bottom Sheet"}},pr=x.J1`
  fragment DiscoveryPrimaryButtonFragment on DiscoveryPrimaryButton {
    primary
    action {
      ... on UILinkAction {
        analytics {
          referrerId
          linkName
        }
        resource {
          value
        }
        target
      }
      ... on DiscoveryUILinkAction {
        clickAnalytics
        resource {
          value
        }
        target
      }
    }
  }
`,xr=({data:e,isFullWidth:n,onClick:t})=>{const{primary:i,action:a}=e,r=(0,p.KY)(),s=(0,p.iQ)();return(0,I.jsx)(N.y,{type:"button",size:A.V.SMALL,onClick:()=>{if(null==t||t(),"UILinkAction"===(null==a?void 0:a.__typename)){const{analytics:e,resource:n,target:t}=a;r(e.referrerId,e.linkName),window.open(n.value,Tn[t])}if("DiscoveryUILinkAction"===(null==a?void 0:a.__typename)){const{clickAnalytics:e,resource:n,target:t}=a;s({clientPayload:hr,serverPayload:e}),window.open(n.value,Tn[t])}},isFullWidth:n,children:i})};xr.fragment=pr,xr.displayName="DiscoveryPrimaryButton";let yr=function(e){return e.COMPARE_PRODUCTS_SELECTED="compare_products.selected",e}({});const vr=x.J1`
  fragment DiscoverySecondaryButtonActionFragment on DiscoveryButtonAction {
    ...BundleAndSaveOpenSheetActionFragment
    ...DemandSurgeOpenSheetActionFragment
    ...DiscoveryUILinkActionFragment
  }

  ${x.J1`
  fragment BundleAndSaveOpenSheetActionFragment on BundleAndSaveOpenSheetAction {
    clickAnalytics
  }
`}
  ${x.J1`
  fragment DemandSurgeOpenSheetActionFragment on DemandSurgeOpenSheetAction {
    analytics {
      referrerId
      linkName
    }
  }
`}
  ${x.J1`
  fragment DiscoveryUILinkActionFragment on DiscoveryUILinkAction {
    accessibility
    clickAnalytics
    resource {
      ... on HttpURI {
        relativePath
      }
    }
    target
  }
`}
`,jr=({data:e,primary:n,icon:t,onClick:i,buttonProps:a})=>{const r=(0,p.KY)(),s=(0,p.iQ)(),{configurationId:l,lodgingCompareDialogQueryVariables:o}=et(),[d,c]=(0,v.useState)(!1),m=(0,v.useCallback)(()=>{c(!0)},[]),g=(0,v.useCallback)(()=>{c(!1)},[]),u=(0,v.useRef)(null),h=e=>n=>{null==i||i(n),s(((e,n)=>{var t;if(!n)return{clientPayload:void 0,serverPayload:n};let i;try{i=JSON.parse(n)}catch(l){return console.error("Failed to parse clickstream analytics JSON:",l),{clientPayload:void 0,serverPayload:n}}const{events:a}=i,r=Object.keys((null==a?void 0:a[e])||{});r.sort((e,n)=>parseInt(n.slice(1),10)-parseInt(e.slice(1),10));const s=r[0];return{clientPayload:s?null===(t=a[e])||void 0===t||null===(t=t[s])||void 0===t?void 0:t.event_data:void 0,serverPayload:n}})(yr.COMPARE_PRODUCTS_SELECTED,e.clickAnalytics))},x=e=>n=>{null==i||i(n),s({clientPayload:ur,serverPayload:e.clickAnalytics})};if(!e)return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(k.y,vn(vn({},a),{},{domRef:u,onClick:e=>{null==i||i(e),"lodging_dated_pdp:lodging_highlights"===l&&(s({clientPayload:{event:{event_type:"Interaction",event_name:"compare_products.selected",event_version:"1.0.0",event_category:"similar_properties"}},serverPayload:void 0}),c(!0))},children:n})),o&&(0,I.jsx)(je.gW,{inputs:o,isDialogOpen:d,onDialogClose:g,onDialogOpen:m,dialogTriggerRef:u})]});switch(e.__typename){case"DiscoveryUILinkAction":{const i=kn(e,"DiscoveryUILinkAction",Cn),r="INTERNAL"!==e.target?"_blank":void 0;return(0,I.jsxs)(k.y,vn(vn({},vn(vn({},a),{},{onClick:h(e),tag:i.tag,href:i.href},r&&{target:r})),{},{children:[t&&(0,I.jsx)(dn,{data:t}),n]}))}case"DemandSurgeOpenSheetAction":return(0,I.jsx)(k.y,vn(vn({},a),{},{onClick:(y=e,e=>{null==i||i(e);const{referrerId:n,linkName:t}=y.analytics;r(n,t)}),children:n}));case"BundleAndSaveOpenSheetAction":return(0,I.jsx)(k.y,vn(vn({},a),{},{onClick:x(e),children:n}));default:return(0,I.jsx)(k.y,vn(vn({},a),{},{onClick:i,children:n}))}var y},fr=["data","onClick"],Sr=x.J1`
  fragment DiscoverySecondaryButtonFragment on DiscoverySecondaryButton {
    accessibility
    icon {
      ...EGDSIconFragment
    }
    primary
    buttonAction: action {
      ...DiscoverySecondaryButtonActionFragment
    }
  }

  ${dn.fragment}
  ${vr}
`,Dr=e=>{let{data:n,onClick:t}=e,i=dt(e,fr);const{primary:a,buttonAction:r,accessibility:s,icon:l}=n;return(0,I.jsx)(jr,{data:r,primary:a,icon:l,onClick:t,buttonProps:vn({type:"button",size:A.V.SMALL,"aria-label":s||void 0},i)})};Dr.fragment=Sr,Dr.displayName="DiscoverySecondaryButton";const br=x.J1`
  fragment DiscoveryButtonFragment on DiscoveryButton {
    ...DiscoveryPrimaryButtonFragment
    ...DiscoverySecondaryButtonFragment
  }

  ${xr.fragment}
  ${Dr.fragment}
`,Lr=({onClick:e,isFullWidth:n,data:t})=>{switch(t.__typename){case"DiscoveryPrimaryButton":return(0,I.jsx)(xr,{onClick:e,isFullWidth:n,data:t});case"DiscoverySecondaryButton":return(0,I.jsx)(Dr,{onClick:e,data:t});default:return null}};Lr.fragment=br,Lr.displayName="DiscoveryButton";const Ir=x.J1`
  fragment EGDSSheetFragment on EGDSSheet {
    sheetTypes {
      sheetType
      viewSize
    }
    closeAnalytics {
      referrerId
      linkName
    }
    closeText
  }
`,Er=({data:e,onDismiss:n,triggerRef:t,title:i,children:a,dialogId:r,isPadded:s=!0})=>{const{closeAnalytics:l,closeText:o}=e,d=(0,p.KY)(),[c,m,g]=(0,ae.useDialog)(null!=r?r:"recommendations-egds-sheet"),u=(0,v.useCallback)(n=>{var t;return null===(t=e.sheetTypes)||void 0===t||null===(t=t.find(e=>e.viewSize===n))||void 0===t?void 0:t.sheetType},[e]),h=(0,v.useCallback)(()=>{d(l.referrerId,l.linkName),m.closeDialog(),null==n||n()},[n,l,d,m]),x=(0,V.s5)({[Xe.SMALL]:u(Xe.SMALL),[Xe.MEDIUM]:u(Xe.MEDIUM),[Xe.LARGE]:u(Xe.LARGE)}),y={isVisible:c,triggerRef:t,onDismiss:h,returnFocusOnClose:!0,autoFocus:!0},j=(0,I.jsx)(se.p,{navigationContent:{onClick:h,navIconLabel:null!=o?o:void 0},toolbarTitle:i,elevation:"default"}),f=(0,I.jsx)(ie.K,{isVisible:c,children:(0,I.jsx)(g,{children:(0,I.jsxs)(ne.t,vn(vn({},y),{},{type:"bottom",children:[j,(0,I.jsx)(te.Y,{padded:s,children:a})]}))})}),S=(e,n)=>{switch(e){case Je.BOTTOM:return f;case Je.CENTERED:return(e=>(0,I.jsx)(ie.K,{isVisible:c,children:(0,I.jsx)(g,{children:(0,I.jsxs)(ne.t,vn(vn({},y),{},{type:"centered",centeredSheetSize:e===Xe.SMALL?"small":"medium",children:[j,(0,I.jsx)(te.Y,{padded:s,children:a})]}))})}))(n);default:return}};return(0,I.jsxs)(V.LM,{children:[(0,I.jsx)(V.NP,{children:S(x,Xe.SMALL)}),(0,I.jsx)(V.rw,{children:S(x,Xe.MEDIUM)}),(0,I.jsx)(V.zQ,{children:S(x,Xe.LARGE)})]})};Er.displayName="RecommendationsEGDSSheet",Er.fragment=Ir;const Tr=x.J1`
  fragment BundleAndSaveSheetContentFragment on BundleAndSaveSheetContent {
    button {
      ...DiscoveryButtonFragment
    }
    secondaries {
      ...DiscoveryTextFragment
    }
    toolbar {
      title {
        primary
      }
    }
    closeSheetAnalytics
  }

  ${Lr.fragment}
  ${gr.fragment}
`,Ar=({data:e})=>{const{button:n,secondaries:t}=e;return(0,I.jsxs)(o.X,{direction:"column",space:"four",children:[t.map((e,n)=>(0,I.jsx)(d.C,{children:(0,I.jsx)(gr,{data:e,textSize:400})},`bundle-and-save-secondary-${n}`)),(0,I.jsx)(d.C,{children:(0,I.jsx)(u.N,{margin:{blockend:"four"},children:(0,I.jsx)("div",{children:(0,I.jsx)(Lr,{data:n,isFullWidth:!0})})})})]})};Ar.fragment=Tr,Ar.displayName="BundleAndSaveSheetContent";const Nr=x.J1`
  fragment BundleAndSaveDetailedContentFragment on BundleAndSaveDetailedContent {
    button {
      ...DiscoveryButtonFragment
    }
    sheet {
      ...EGDSSheetFragment
    }
    sheetContent {
      ...BundleAndSaveSheetContentFragment
    }
  }

  ${Ar.fragment}
  ${Lr.fragment}
  ${Er.fragment}
`,kr=({data:e,dialogId:n})=>{var t;const[,i]=(0,ae.useDialog)(n),{button:a,sheet:r,sheetContent:s}=e,l=(0,p.iQ)(),o=(0,v.useCallback)(()=>{i.openDialog()},[i]),d=(0,v.useCallback)(()=>{l({serverPayload:s.closeSheetAnalytics})},[s]);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Lr,{data:a,onClick:o}),(0,I.jsx)(Er,{dialogId:n,title:null===(t=s.toolbar.title)||void 0===t?void 0:t.primary,data:r,onDismiss:d,children:(0,I.jsx)(Ar,{data:s})})]})};kr.fragment=Nr,kr.displayName="BundleAndSaveDetailedContent";const Cr=x.J1`
  fragment BundleAndSaveCardFragment on BundleAndSaveCard {
    backgroundTheme
    detailedContent {
      ...BundleAndSaveDetailedContentFragment
    }
    graphic {
      ...UIGraphicFragment
    }
    impressionTracking {
      linkName
      referrerId
    }
    primary
  }

  ${kr.fragment}
  ${gr.fragment}
  ${Yn.fragment}
`,_r=({data:e,cardIndex:n})=>{const{backgroundTheme:t,detailedContent:i,graphic:s,impressionTracking:l,primary:c}=e,m=(0,I.jsx)(a.g,{backgroundTheme:t?ca[t]:void 0,children:(0,I.jsxs)(o.X,{direction:"column",blockSize:"full_size",justifyContent:"space-between",children:[(0,I.jsx)(d.C,{children:(0,I.jsxs)("div",{children:[(0,I.jsx)(r.E,{padded:["blockstart","inlinestart"],children:(0,I.jsx)(o.X,{direction:"row",alignItems:"start",justifyContent:"space-between",children:s&&(0,I.jsx)(d.C,{children:(0,I.jsx)(Yn,{data:s})})})}),(0,I.jsx)(r.E,{padded:["inlinestart","inlineend"],children:c&&(0,I.jsx)(u.N,{margin:{blockstart:"two"},children:(0,I.jsx)(G.M,{tag:"h2",overflow:"wrap",size:7,children:c})})})]})}),i&&(0,I.jsx)(d.C,{children:(0,I.jsx)(r.E,{children:(0,I.jsx)(kr,{data:i,dialogId:`bundle-and-save-dialog-${n}`})})})]})});if(l){const{referrerId:e,linkName:n}=l;return(0,I.jsx)(o.X,{direction:"column",blockSize:"full_size",children:(0,I.jsx)(u.N,{padding:{blockend:"one"},children:(0,I.jsx)(d.C,{grow:1,children:(0,I.jsx)(p.ee,{referrerId:e,linkName:n,intersectionOptions:{threshold:.5},children:m})})})})}return(0,I.jsx)(I.Fragment,{children:m})};_r.fragment=Cr,_r.displayName="BundleAndSaveCard";const Gr=x.J1`
  fragment DemandSurgeBusiestEventDateSectionFragment on DemandSurgeBusiestEventDateSection {
    badge {
      ...EGDSBadgeFragment
    }
    busiestEventDate
  }

  ${fn.fragment}
`,Fr=({data:e})=>{const{badge:n,busiestEventDate:t}=e;return(0,I.jsxs)(o.X,{direction:"row",space:"two",alignItems:"center",children:[(0,I.jsx)(d.C,{children:(0,I.jsx)(G.M,{tag:"h2",size:8,children:t})}),(0,I.jsx)(d.C,{children:(0,I.jsx)(fn,{data:n})})]})};Fr.fragment=Gr,Fr.displayName="DemandSurgeBusiestEventDateSection";const Or=x.J1`
  fragment DemandSurgeEventInformationAndLabelsSectionFragment on DemandSurgeEventInformationAndLabelsSection {
    busiestEventDateSection {
      ...DemandSurgeBusiestEventDateSectionFragment
    }
    eventDescription
    eventLabels {
      ...EGDSBadgeFragment
    }
    eventTitle
  }

  ${Fr.fragment}
  ${fn.fragment}
`,Pr=({data:e})=>{const{busiestEventDateSection:n,eventDescription:t,eventLabels:i,eventTitle:a}=e;return(0,I.jsxs)(o.X,{direction:"column",space:"three",children:[(0,I.jsx)(d.C,{children:(0,I.jsx)(G.M,{tag:"h1",size:4,typeStyle:{customStyle:"headline-large"},children:a})}),(0,I.jsx)(d.C,{children:(0,I.jsxs)(o.X,{direction:"column",space:"four",children:[(0,I.jsx)(d.C,{children:(0,I.jsx)(o.X,{direction:"row",space:"two",wrap:"wrap",children:i.map((e,n)=>(0,I.jsx)(d.C,{children:(0,I.jsx)(fn,{data:e})},`event-label-${n}`))})}),(0,I.jsx)(d.C,{children:(0,I.jsx)(Fr,{data:n})}),(0,I.jsx)(d.C,{children:(0,I.jsx)(P.D,{size:300,children:t})})]})})]})};Pr.fragment=Or,Pr.displayName="DemandSurgeEventInformationAndLabelsSection";const Mr=x.J1`
  fragment DiscoveryFooterActionFragment on DiscoveryFooterAction {
    ...EGDSSecondaryButtonFragment
    ...EGDSStandardLinkFragment
    ...DiscoverySecondaryButtonFragment
  }

  ${bt.fragment}
  ${ni.fragment}
  ${Dr.fragment}
`,Rr=({data:e,overrideUseRelativePath:n,onClickCallback:t,suppressUisPrimeClick:i})=>{if(!e)return null;switch(e.__typename){case"UISecondaryButton":return(0,I.jsx)(bt,{size:A.V.MEDIUM,data:e,overrideUseRelativePath:n});case"EGDSStandardLink":return(0,I.jsx)(ni,{data:e,onClickCallback:t,suppressUisPrimeClick:i,showIcon:!0});case"DiscoverySecondaryButton":return(0,I.jsx)(Dr,{data:e,size:A.V.MEDIUM});default:return null}};Rr.fragment=Mr,Rr.displayName="DiscoveryFooterAction";const wr=x.J1`
  fragment DemandSurgeContentSectionFragment on DemandSurgeContentSection {
    graphic {
      ...UIGraphicFragment
    }
    primary
    rightIcon {
      ...EGDSIconFragment
    }
    secondaries {
      ...DiscoveryTextFragment
    }
  }

  ${gr.fragment}
  ${dn.fragment}
  ${Yn.fragment}
`,Br=({data:e})=>{const{graphic:n,primary:t,rightIcon:i,secondaries:a}=e;return(0,I.jsxs)(o.X,{alignItems:"center",space:"three",children:[n&&(0,I.jsx)(d.C,{children:(0,I.jsx)("div",{children:(0,I.jsx)(Yn,{data:n,iconSizeOverride:L.So.MEDIUM})})}),(0,I.jsx)(d.C,{grow:1,children:(0,I.jsx)("div",{children:(0,I.jsxs)(o.X,{direction:"column",space:"one",children:[t&&(0,I.jsx)(d.C,{children:(0,I.jsx)(G.M,{size:7,children:t})}),a.map((e,n)=>(0,I.jsx)(d.C,{children:(0,I.jsx)(gr,{data:e})},`subheading-${n}`))]})})}),i&&(0,I.jsx)(d.C,{children:(0,I.jsx)(dn,{data:i,iconSizeOverride:L.So.MEDIUM})})]})};Br.fragment=wr,Br.displayName="DemandSurgeContentSection";const zr=x.J1`
  fragment DemandSurgeContentItemFragment on DemandSurgeContentItem {
    ...DemandSurgeContentSectionFragment
  }

  ${Br.fragment}
`,Hr=({data:e})=>"DemandSurgeContentSection"===e.__typename?(0,I.jsx)(Br,{data:e}):null;Hr.fragment=zr,Hr.displayName="DemandSurgeContentItem";const $r=x.J1`
  fragment DemandSurgeTripTrendsCardFragment on DemandSurgeTripTrendsCard {
    action {
      ... on UILinkAction {
        accessibility
        resource {
          value
        }
        cardActionAnalytics: analytics {
          ...ClientSideAnalyticsFragment
        }
        target
      }
    }
    contentItems {
      ...DemandSurgeContentItemFragment
    }
  }

  ${Ee}
  ${Rr.fragment}
  ${Hr.fragment}
`,Ur=({data:e})=>{var n;const{action:t,contentItems:i}=e,s=(0,p.KY)(),o=(0,v.useCallback)(()=>{if("UILinkAction"===(null==t?void 0:t.__typename)){const{referrerId:e,linkName:n}=t.cardActionAnalytics;s(e,n)}},[s,t]);return(0,I.jsxs)(a.g,{border:!0,children:["UILinkAction"===(null==t?void 0:t.__typename)&&(0,I.jsx)(l.w,{children:(0,I.jsx)("a",{target:Tn[t.target],href:t.resource.value,"aria-label":null!==(n=t.accessibility)&&void 0!==n?n:void 0,onClickCapture:o,children:t.accessibility&&(0,I.jsx)(P.D,{className:"is-visually-hidden",children:t.accessibility})})}),i.map((e,n)=>(0,I.jsx)(r.E,{border:0===n?void 0:"top",children:(0,I.jsx)(Hr,{data:e})},`content-item-${n}`))]})};Ur.fragment=$r,Ur.displayName="DemandSurgeTripTrendsCard";const Yr=x.J1`
  fragment DemandSurgeTripTrendsSectionFragment on DemandSurgeTripTrendsSection {
    primary
    secondaries {
      ...DiscoveryTextFragment
    }
    tripTrendsCards {
      ...DemandSurgeTripTrendsCardFragment
    }
  }

  ${Ur.fragment}
  ${gr.fragment}
`,Vr=({data:e})=>{const{primary:n,secondaries:t,tripTrendsCards:i}=e;return(0,I.jsxs)(o.X,{direction:"column",space:"three",children:[(0,I.jsx)(d.C,{children:(0,I.jsxs)(o.X,{direction:"column",space:"two",children:[n&&(0,I.jsx)(d.C,{children:(0,I.jsx)(G.M,{tag:"h2",children:n})}),t.map((e,n)=>(0,I.jsx)(d.C,{children:(0,I.jsx)(gr,{data:e})},`secondary-${n}`))]})}),i.map((e,n)=>(0,I.jsx)(d.C,{children:(0,I.jsx)(Ur,{data:e})},`trip-trends-card-${n}`))]})};Vr.fragment=Yr,Vr.displayName="DemandSurgeTripTrendsSection";const Jr=x.J1`
  fragment DemandSurgeSheetContentFragment on DemandSurgeSheetContent {
    eventInformationAndLabels {
      ...DemandSurgeEventInformationAndLabelsSectionFragment
    }
    tripTrends {
      ...DemandSurgeTripTrendsSectionFragment
    }
  }

  ${Pr.fragment}
  ${Vr.fragment}
`,Xr=({data:e})=>{const{eventInformationAndLabels:n,tripTrends:t}=e;return(0,I.jsxs)(o.X,{direction:"column",space:"six",children:[(0,I.jsx)(d.C,{children:(0,I.jsx)(Pr,{data:n})}),t.map((e,n)=>(0,I.jsx)(d.C,{children:(0,I.jsx)(Vr,{data:e})},`trip-trends-section-${n}`))]})};Xr.fragment=Jr,Xr.displayName="DemandSurgeSheetContent";const Wr=x.J1`
  fragment DemandSurgeDetailedContentFragment on DemandSurgeDetailedContent {
    button {
      ...DiscoveryButtonFragment
    }
    sheet {
      ...EGDSSheetFragment
    }
    sheetContent {
      ...DemandSurgeSheetContentFragment
    }
  }

  ${Xr.fragment}
  ${Lr.fragment}
  ${Er.fragment}
`,Kr=({data:e,dialogId:n})=>{const[,t]=(0,ae.useDialog)(n),{button:i,sheet:a,sheetContent:r}=e;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Lr,{data:i,onClick:(0,v.useCallback)(()=>{t.openDialog()},[t])}),(0,I.jsx)(Er,{dialogId:n,data:a,children:(0,I.jsx)(Xr,{data:r})})]})};Kr.fragment=Wr,Kr.displayName="DemandSurgeDetailedContent";const qr=x.J1`
  fragment DemandSurgeCardFragment on DemandSurgeCard {
    detailedContent {
      ...DemandSurgeDetailedContentFragment
    }
    dismiss {
      accessibility
      analytics {
        linkName
        referrerId
      }
    }
    graphic {
      ...UIGraphicFragment
    }
    impressionTracking {
      linkName
      referrerId
    }
    primary
    secondaries {
      ...DiscoveryTextFragment
    }
  }

  ${Kr.fragment}
  ${gr.fragment}
  ${Yn.fragment}
`,Qr=({data:e,cardIndex:n,setShowDemandSurgeCard:t})=>{var i;const{detailedContent:s,dismiss:l,graphic:c,impressionTracking:m,primary:g,secondaries:h}=e,x=(0,p.KY)(),{duaid:y,tripId:j}=et(),[f,S]=(0,v.useState)(!1),D=(0,v.useCallback)(()=>{if(l){const{referrerId:e,linkName:n}=l.analytics;x(e,n)}y&&j&&localStorage.setItem(j,y),S(e=>!e),t(f)},[x,l,S,t]);if(f||localStorage.getItem(null!=j?j:""))return t(!1),null;const b=(0,I.jsx)(a.g,{backgroundTheme:"secondary",children:(0,I.jsxs)(o.X,{direction:"column",blockSize:"full_size",justifyContent:"space-between",children:[(0,I.jsx)(d.C,{children:(0,I.jsxs)("div",{children:[(0,I.jsx)(r.E,{padded:["blockstart","inlinestart"],children:(0,I.jsxs)(o.X,{direction:"row",alignItems:"start",justifyContent:"space-between",children:[c&&(0,I.jsx)(d.C,{children:(0,I.jsx)(Yn,{data:c})}),l&&(0,I.jsx)(d.C,{children:(0,I.jsx)("div",{children:(0,I.jsx)(C.q,{type:"button","aria-label":null!==(i=l.accessibility)&&void 0!==i?i:void 0,size:A.V.MEDIUM,onClick:D,isFullWidth:!0,children:(0,I.jsx)("div",{children:(0,I.jsx)(L.LD,{name:"close",theme:"default"})})})})})]})}),(0,I.jsxs)(r.E,{padded:["inlinestart","inlineend"],children:[g&&(0,I.jsx)(u.N,{margin:{blockstart:"two"},children:(0,I.jsx)(G.M,{tag:"h2",overflow:"wrap",children:g})}),h.map((e,n)=>(0,I.jsx)(u.N,{margin:{blockstart:"two"},children:(0,I.jsx)(gr,{data:e,textSize:200})},`secondary-${n}`))]})]})}),s&&(0,I.jsx)(d.C,{children:(0,I.jsx)(r.E,{children:(0,I.jsx)(Kr,{data:s,dialogId:`demand-surge-dialog-${n}`})})})]})});if(m){const{referrerId:e,linkName:n}=m;return(0,I.jsx)(o.X,{direction:"column",blockSize:"full_size",children:(0,I.jsx)(u.N,{padding:{blockend:"one"},children:(0,I.jsx)(d.C,{grow:1,children:(0,I.jsx)(p.ee,{referrerId:e,linkName:n,intersectionOptions:{threshold:.5},children:b})})})})}return(0,I.jsx)(I.Fragment,{children:b})};Qr.fragment=qr,Qr.displayName="DemandSurgeCard";const Zr=x.J1`
  fragment EGDSImageLinkCardFragment on EGDSImageLinkCard {
    link {
      image {
        aspectRatio
        description
        url
      }
      action {
        resource {
          value
        }
        analytics {
          linkName
          referrerId
        }
        accessibility
        target
      }
    }
    title
  }
`,es=({data:e,roundcorner:n})=>{const{link:t,title:i}=e,{aspectRatio:r,description:s,url:o}=t.image,{accessibility:d,analytics:c,resource:m,target:g}=t.action,u=(0,p.KY)(),h=(0,v.useCallback)(()=>{u(c.referrerId,c.linkName)},[u]);return(0,I.jsxs)(a.g,{children:[(0,I.jsxs)(W.M,{roundcorner:n,ratio:r?Gt[r]:void 0,children:[(0,I.jsx)(K.F,{placeholderImage:!0,alt:s,src:o}),(0,I.jsx)(J.O,{type:X.Q.BOTTOM,children:(0,I.jsx)(O.s,{children:i})})]}),(0,I.jsx)(l.w,{children:(0,I.jsx)("a",{href:m.value,target:Tn[g],rel:g===rn.EXTERNAL?"noopener":void 0,onClick:h,children:d&&(0,I.jsx)("span",{className:"is-visually-hidden",children:d})})})]})};es.fragment=Zr,es.displayName="EGDSImageLinkCard";const ns={event:{event_name:"bundle_save.presented",event_version:"1.0.0",event_type:"Impression",event_category:"trip_bundle_and_save",action_location:"Card container"}},ts="bundle-and-save-card",is="demand-surge-card",as=x.J1`
  fragment GenericDismissibleDiscoverySheetContentFragment on GenericDismissibleDiscoverySheetContent {
    ...BundleAndSaveSheetContentFragment
    ...DemandSurgeSheetContentFragment
  }

  ${Ar.fragment}
  ${Xr.fragment}
`,rs=({data:e})=>{switch(e.__typename){case"BundleAndSaveSheetContent":return(0,I.jsx)(Ar,{data:e});case"DemandSurgeSheetContent":return(0,I.jsx)(Xr,{data:e});default:return null}};rs.fragment=as,rs.displayName="GenericDismissibleDiscoverySheetContent";const ss=x.J1`
  fragment GenericDismissibleDiscoveryDetailedContentFragment on GenericDismissibleDiscoveryDetailedContent {
    button {
      ...DiscoveryButtonFragment
    }
    sheet {
      ...EGDSSheetFragment
    }
    sheetContent {
      ...GenericDismissibleDiscoverySheetContentFragment
    }
  }

  ${Lr.fragment}
  ${rs.fragment}
  ${Er.fragment}
`,ls=({data:e,dialogId:n})=>{var t;const[,i]=(0,ae.useDialog)(n),{button:a,sheet:r,sheetContent:s}=e,l="BundleAndSaveSheetContent"===s.__typename?null===(t=s.toolbar.title)||void 0===t?void 0:t.primary:void 0;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Lr,{data:a,onClick:(0,v.useCallback)(()=>{i.openDialog()},[i])}),(0,I.jsx)(Er,{dialogId:n,title:l,data:r,children:(0,I.jsx)(rs,{data:s})})]})};ls.fragment=ss,ls.displayName="GenericDismissibleDiscoveryDetailedContent";const os=x.J1`
  fragment GenericDismissibleDiscoveryCardFragment on GenericDismissibleDiscoveryCard {
    backgroundTheme
    cardContext {
      elementId
      ttl {
        day
        month
        year
      }
    }
    detailedContent {
      ...GenericDismissibleDiscoveryDetailedContentFragment
    }
    dismiss {
      accessibility
      analytics {
        linkName
        referrerId
      }
    }
    graphic {
      ...UIGraphicFragment
    }
    impressionAnalytics
    impressionTracking {
      linkName
      referrerId
    }
    primary
    secondaries {
      ...DiscoveryTextFragment
    }
  }

  ${gr.fragment}
  ${ls.fragment}
  ${Yn.fragment}
`,ds=({data:e,cardIndex:n,setShowGenericDismissibleDiscoveryCard:t})=>{var i,s;const{backgroundTheme:l,cardContext:c,detailedContent:m,dismiss:g,graphic:h,impressionTracking:x,impressionAnalytics:y,primary:j,secondaries:f}=e,S=l?ca[l]:void 0,D=null!==(i=null==c?void 0:c.elementId)&&void 0!==i?i:"generic-dismissible-discovery-card",b=(0,p.KY)(),{duaid:E,tripId:T}=et(),N=(0,v.useMemo)(()=>`${T}-${D}`,[T,D]),[k,_]=(0,v.useState)(!1),F=(0,v.useCallback)(()=>{if(g){const{referrerId:e,linkName:n}=g.analytics;b(e,n)}if(T&&E){if(D===is&&(null==c?void 0:c.ttl)){const{day:e,month:n,year:t}=c.ttl,i=new Date(t,n,e);localStorage.setItem(N,i.toISOString())}D===ts&&localStorage.setItem(N,E)}_(e=>!e),t(k)},[b,g,_,t]);if(k||localStorage.getItem(N))return t(!1),null;const O=(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(r.E,{padded:["blockstart","inlinestart"],children:(0,I.jsxs)(o.X,{direction:"row",alignItems:"start",justifyContent:"space-between",children:[h&&(0,I.jsx)(d.C,{children:(0,I.jsx)(Yn,{data:h})}),g&&(0,I.jsx)(d.C,{children:(0,I.jsx)("div",{children:(0,I.jsx)(C.q,{type:"button","aria-label":null!==(s=g.accessibility)&&void 0!==s?s:void 0,size:A.V.MEDIUM,onClick:F,isFullWidth:!0,children:(0,I.jsx)("div",{children:(0,I.jsx)(L.LD,{name:"close",theme:"default"})})})})})]})}),(0,I.jsxs)(r.E,{padded:["inlinestart","inlineend"],children:[j&&(0,I.jsx)(u.N,{margin:{blockstart:"two"},children:(0,I.jsx)(G.M,{tag:"h2",overflow:"wrap",children:j})}),f.map((e,n)=>(0,I.jsx)(u.N,{margin:{blockstart:"two"},children:(0,I.jsx)(gr,{data:e,textSize:200})},`secondary-${n}`))]})]}),P=(0,I.jsx)(a.g,{backgroundTheme:S,children:(0,I.jsxs)(o.X,{direction:"column",blockSize:"full_size",justifyContent:"space-between",children:[(0,I.jsx)(d.C,{children:y&&D===ts?(0,I.jsx)(p.E0,{eventData:{clientPayload:ns,serverPayload:y},children:O}):(0,I.jsx)("div",{children:O})}),m&&(0,I.jsx)(d.C,{children:(0,I.jsx)(r.E,{children:(0,I.jsx)(ls,{data:m,dialogId:`${D}-${n}`})})})]})});if(x&&D===is){const{referrerId:e,linkName:n}=x;return(0,I.jsx)(o.X,{direction:"column",blockSize:"full_size",children:(0,I.jsx)(u.N,{padding:{blockend:"one"},children:(0,I.jsx)(d.C,{grow:1,children:(0,I.jsx)(p.ee,{referrerId:e,linkName:n,intersectionOptions:{threshold:.5},children:P})})})})}return y&&D===ts?(0,I.jsx)(o.X,{direction:"column",blockSize:"full_size",children:(0,I.jsx)(u.N,{padding:{blockend:"one"},children:(0,I.jsx)(d.C,{grow:1,children:P})})}):(0,I.jsx)(I.Fragment,{children:P})};ds.fragment=os,ds.displayName="GenericDismissibleDiscoveryCard";const cs=x.J1`
  fragment DiscoveryGroupContainerFragment on DiscoveryItemsGroup {
    container {
      ...EGDSCarouselFragment
      ...DiscoveryContainerFragment
    }
    cards {
      ...BundleAndSaveCardFragment
      ...DiscoveryCardFragment
      ...DemandSurgeCardFragment
      ...EGDSImageLinkCardFragment
      ...GenericDismissibleDiscoveryCardFragment
    }
  }

  ${_r.fragment}
  ${Qr.fragment}
  ${qi}
  ${nr.fragment}
  ${es.fragment}
  ${ds.fragment}
  ${_t.fragment}
`,ms=({data:e,cardTheme:n,carouselItemViewedCallback:t,carouselInnerSpacing:i,carouselPagingPersistent:a,carouselShouldHideNavOnMobile:r,carouselUseContainerSizing:s,withoutIntersectionTracker:l,lineOfBusiness:o,injectedComponents:d,titleProps:g,layoutOptions:u,carouselPagingInset:h,onHoverChanged:p,onClickCallback:x,legacyPriceLeftAlignment:y,lazyLoadingImgs:j,onPrefetchHeroImage:f,cardsWithBorder:S})=>{const{container:D,cards:b}=e,{itemsVisible:L,peek:E,cardOptions:T}=u||{},[A,N]=(0,v.useState)(!0),[k,C]=(0,v.useState)(!0),_=(0,V.s5)(Ia(E)),G=(0,V.s5)((F=a||{},Object.keys(V.OB).reduce((e,n)=>{const t=F[ba[n]];return e[n]=void 0===t?void 0:Boolean(t),e},{})));var F;if(!Array.isArray(b)||0===b.length)return null;let O,P,M;var R,w;"string"==typeof n?(O=Pa[n],P=L||(null===(R=Ba[n])||void 0===R?void 0:R.itemsVisible),M=null===(w=Ba[n])||void 0===w?void 0:w.columns):(O=n,P=L||Ba.FOUNDATION.itemsVisible,M=Ba.FOUNDATION.columns);const B=e=>{null==t||t(e)},z=r;switch(null==D?void 0:D.__typename){case"EGDSCarousel":{const e=e=>(0,I.jsx)(_t,{data:D,itemsVisible:P,peek:_,itemViewedCallback:B,hideNav:null==e?void 0:e.hideNav,pagingInset:null==e?void 0:e.pagingInset,enableTracking:!0,innerSpacing:i,pagingPersistent:G,useContainerSizing:s,children:b.map((e,n)=>{switch(e.__typename){case"BundleAndSaveCard":return(0,I.jsx)(_r,{data:e,cardIndex:n},`bundle-and-save-card-${n}`);case"DemandSurgeCard":return A?(0,I.jsx)(Qr,{data:e,cardIndex:n,setShowDemandSurgeCard:N},`demand-surge-card-${n}`):null;case"EGDSImageLinkCard":return(0,I.jsx)(es,{data:e,roundcorner:!0},`image-link-card-${n}`);case"GenericDismissibleDiscoveryCard":return k?(0,I.jsx)(ds,{data:e,cardIndex:n,setShowGenericDismissibleDiscoveryCard:C},`generic-dismissible-discovery-card-${n}`):null;case"GenericDiscoveryCard":return O&&(0,I.jsx)(O,{onHoverChanged:p,data:e,withoutIntersectionTracker:l,outputLineOfBusiness:o,cardTitleTagProps:cr(null==g?void 0:g.tag),headingOptions:null==T?void 0:T.headingOptions,detailsListOptions:null==T?void 0:T.detailsListOptions,onClickCallback:x,legacyPriceLeftAlignment:y,lazyLoadingImgs:j,onPrefetchHeroImage:f,border:S},n);default:return null}})});return(0,I.jsxs)(V.LM,{children:[(0,I.jsx)(V.NP,{children:e({hideNav:z,pagingInset:!!h})}),(0,I.jsx)(V.rw,{children:e()})]})}case"DiscoveryContainer":return(0,I.jsx)(nr,{data:D,cardTheme:n,injectedComponents:d,cardTitleTagProps:cr(null==g?void 0:g.tag),onClickCallback:x,children:b});default:return(0,I.jsx)(c.w,{columns:M,space:"three",rows:2,justifyContent:"space-between",children:b.map((e,n)=>(0,I.jsx)(m.T,{children:O&&(0,I.jsx)(O,{data:e,outputLineOfBusiness:o,onHoverChanged:p})},n))})}};ms.fragment=cs,ms.displayName="DiscoveryGroupContainer";const gs=["center","end","start","stretch"],us=x.J1`
  fragment DiscoveryFooterSectionFragment on DiscoveryFooterSection {
    disclaimerText {
      ...EGDSTextFragment
    }
    title {
      ...EGDSTextFragment
    }
    subtitle {
      ...EGDSTextFragment
    }
    action {
      ...DiscoveryFooterActionFragment
    }
    alignment
    clickAnalytics
  }

  ${ht.fragment}
  ${Rr.fragment}
`,hs=({data:e,align:n="center",margin:t,isMultiElement:i,onClickCallback:a})=>{const{isAttach:r,lodgingCompareDialogQueryVariables:s}=et(),{context:l}=(0,R.R)(),{device:d}=l,{title:c,subtitle:m,action:g,disclaimerText:h,alignment:x,clickAnalytics:y}=e,v=(0,p.iQ)(),j=()=>{y&&v(Ie(y)),null==a||a()},f=d.type===ze.MOBILE_PHONE,S=x&&(D=x,gs.includes(D))||(null==s?void 0:s.propertyIds)&&!f?x:"center";var D;const b=i?h?{blockstart:"two",blockend:"unset"}:{blockstart:"four",blockend:"unset"}:h?{blockstart:"two",blockend:"unset"}:{block:"three"},L=i?h?{blockstart:"two",blockend:"three"}:{blockstart:"unset"}:null!=t?t:r?{blockstart:"three"}:h?{blockstart:"two",blockend:"four"}:{block:"four"},E="DiscoverySecondaryButton"===(null==g?void 0:g.__typename),T="UISecondaryButton"===(null==g?void 0:g.__typename);return(0,I.jsxs)(I.Fragment,{children:[h&&(0,I.jsx)(u.N,{padding:{blockstart:"four"},children:(0,I.jsx)("div",{children:(0,I.jsx)(ht,{align:null!=n?n:"center",textSize:200,theme:"standard",data:h})})}),(0,I.jsx)(u.N,{margin:L,children:(0,I.jsxs)(o.X,{alignItems:T||E||f?S:"start",direction:"column",justifyContent:"start",children:[c&&(0,I.jsx)(u.N,{margin:{blockstart:"three"},children:(0,I.jsx)("div",{children:(0,I.jsx)(ht,{textSize:300,textWeight:"bold",theme:"emphasis",data:c})})}),m&&(0,I.jsx)(ht,{textSize:300,theme:"standard",data:m}),g&&(r?(0,I.jsx)(Rr,{data:g,onClickCallback:j,suppressUisPrimeClick:!!y,overrideUseRelativePath:!0}):(0,I.jsx)(u.N,{margin:E?{blockstart:"unset",blockend:"three"}:b,children:(0,I.jsx)("div",{children:(0,I.jsx)(Rr,{data:g,onClickCallback:j,suppressUisPrimeClick:!!y,overrideUseRelativePath:!0})})}))]})})]})};hs.fragment=us,hs.displayName="DiscoveryFooterSection";const ps=x.J1`
  fragment DiscoverySlimCardActionFragment on DiscoverySlimCardAction {
    ... on UILinkAction {
      accessibility
      resource {
        value
      }
      cardActionAnalytics: analytics {
        ...ClientSideAnalyticsFragment
      }
      target
    }
  }

  ${Ee}
`,xs=({data:e})=>{const{resource:n,accessibility:t,target:i,cardActionAnalytics:a}=e,r=(0,p.KY)(),s=(0,v.useCallback)(()=>{r(a.referrerId,a.linkName)},[r,a]);return"UILinkAction"===e.__typename?(0,I.jsx)(l.w,{children:(0,I.jsx)("a",{target:Tn[i],href:n.value,"aria-label":null!=t?t:void 0,onClickCapture:s,children:t&&(0,I.jsx)(P.D,{className:"is-visually-hidden",children:t})})}):null};xs.fragment=ps,xs.displayName="DiscoverySlimCardAction";const ys=x.J1`
  fragment DiscoverySlimCardFragment on DiscoverySlimCard {
    action {
      ...DiscoverySlimCardActionFragment
    }
    graphic {
      ...UIGraphicFragment
    }
    impressionTracking {
      ...ClientSideAnalyticsFragment
    }
    primary
    rightIcon {
      ...EGDSIconFragment
    }
    secondaries {
      ...DiscoveryTextFragment
    }
  }

  ${Ee}
  ${xs.fragment}
  ${gr.fragment}
  ${dn.fragment}
  ${ht.fragment}
  ${Yn.fragment}
`,vs=({data:e})=>{var n,t,i;const{action:s,graphic:l,impressionTracking:c,primary:m,rightIcon:g,secondaries:h}=e;return(0,I.jsx)(p.ee,{referrerId:null!==(n=null==c?void 0:c.referrerId)&&void 0!==n?n:"",linkName:null!==(t=null!==(i=null==c?void 0:c.linkName)&&void 0!==i?i:null==c?void 0:c.referrerId)&&void 0!==t?t:"",intersectionOptions:{threshold:.5},children:(0,I.jsx)(u.N,{margin:{blockstart:"three"},children:(0,I.jsxs)(a.g,{border:!0,children:[s&&(0,I.jsx)(xs,{data:s}),(0,I.jsx)(r.E,{children:(0,I.jsx)(u.N,{margin:m?{block:"two"}:"unset",children:(0,I.jsx)(o.X,{alignItems:"center",space:"two",children:(0,I.jsxs)(I.Fragment,{children:[l&&(0,I.jsx)(u.N,{padding:{inline:"three"},children:(0,I.jsx)("div",{children:(0,I.jsx)(d.C,{children:(0,I.jsx)(Yn,{data:l,iconSizeOverride:L.So.MEDIUM})})})}),(0,I.jsx)(d.C,{grow:1,children:(0,I.jsxs)("div",{children:[m&&(0,I.jsx)(G.M,{children:m}),h.map((e,n)=>(0,I.jsx)(gr,{data:e},`subheading-${n}`))]})}),g&&(0,I.jsx)(d.C,{children:(0,I.jsx)(dn,{data:g,iconSizeOverride:L.So.MEDIUM})})]})})})})]})})})};vs.fragment=ys,vs.displayName="DiscoverySlimCard";const js=x.J1`
  fragment DiscoveryFooterFragment on DiscoveryFooter {
    ...DiscoveryFooterSectionFragment
    ...DiscoverySlimCardFragment
  }

  ${hs.fragment}
  ${vs.fragment}
`,fs=({data:e,discoveryFooterSectionMargin:n,isMultiElement:t,onClickCallback:i})=>{switch(e.__typename){case"DiscoveryFooterSection":return(0,I.jsx)(hs,{data:e,margin:n,isMultiElement:t,onClickCallback:i});case"DiscoverySlimCard":return(0,I.jsx)(vs,{data:e});default:return null}};fs.fragment=js,fs.displayName="DiscoveryFooter";const Ss={[qe.NONE]:"none",[qe.AI]:"ai-local-1",[qe.LIGHT_1]:"light-1",[qe.DARK_1]:"dark-1",[qe.DARK_2]:"dark-2",[qe.BRIGHT_1]:"bright-1",[qe.GLOBAL_LOYALTY_STANDARD]:"global-loyalty-standard",[qe.GLOBAL_LOYALTY_LOW]:"global-loyalty-low",[qe.GLOBAL_LOYALTY_LOW_BRIGHT]:"global-loyalty-low-bright",[qe.GLOBAL_LOYALTY_MID]:"global-loyalty-mid",[qe.GLOBAL_LOYALTY_MID_BRIGHT]:"global-loyalty-mid-bright",[qe.GLOBAL_LOYALTY_HIGH]:"global-loyalty-high",[qe.GLOBAL_LOYALTY_HIGH_BRIGHT]:"global-loyalty-high-bright",[qe.GLOBAL_LOYALTY_EXTRA_HIGH]:"global-loyalty-extra-high",[qe.GLOBAL_LOYALTY_EXTRA_HIGH_BRIGHT]:"global-loyalty-extra-high-bright",[qe.STANDARD]:"standard",[qe.MARKETING_1]:"marketing-1",[qe.MARKETING_2]:"marketing-2",[qe.MARKETING_3]:"marketing-3"},Ds=x.J1`
  fragment DiscoveryMessagingBannerFragment on DiscoveryMessagingBanner {
    text
    accessibility
    graphic {
      ...UIGraphicFragment
    }
    theme
    trailingIcon {
      ...EGDSIconFragment
    }
  }

  ${Yn.fragment}
`,bs=({data:e})=>{const{text:n,accessibility:t,graphic:i,theme:r,trailingIcon:s}=e;return(0,I.jsx)(o.X,{children:(0,I.jsx)(d.C,{children:(0,I.jsx)(fe.EGDSThemeProvider,{config:{lightMode:{colorTheme:r&&Ss[r]?Ss[r]:"bright-1"}},children:(0,I.jsx)(a.g,{padded:!0,children:(0,I.jsxs)(o.X,{alignItems:"center",space:"two",children:[i&&(0,I.jsx)(d.C,{alignSelf:"center",grow:0,children:(0,I.jsx)(Yn,{data:i})}),(0,I.jsx)(d.C,{grow:1,children:(0,I.jsxs)("div",{children:[n,t&&(0,I.jsx)("span",{className:"is-visually-hidden",children:t})]})}),s&&(0,I.jsx)(d.C,{alignSelf:"center",grow:0,children:(0,I.jsx)(Yn,{data:s})})]})})})})})};bs.fragment=Ds,bs.displayName="DiscoveryMessagingBanner";const Ls=e=>{var n;return{size:null!==(n=null==e?void 0:e.size)&&void 0!==n?n:void 0,typeStyle:(null==e?void 0:e.typeStyle)?{customStyle:e.typeStyle}:void 0}},Is=x.J1`
  fragment DiscoveryConfigurableHeadingFragment on DiscoveryConfigurableHeadingTag {
    tag
    viewportConfig {
      large {
        size
        typeStyle
      }
      medium {
        size
        typeStyle
      }
      small {
        size
        typeStyle
      }
    }
  }
`,Es=({data:e,children:n,"aria-hidden":t,"aria-label":i})=>{var a,r,s;const l=e.tag,{small:o,medium:d,large:c}=null!==(a=e.viewportConfig)&&void 0!==a?a:{},{size:m,typeStyle:g}=null!==(r=(0,V.s5)({[V.OB.LARGE]:Ls(null!==(s=null!=c?c:d)&&void 0!==s?s:o),[V.OB.MEDIUM]:Ls(null!=d?d:o),[V.OB.SMALL]:Ls(o)}))&&void 0!==r?r:{};return(0,I.jsx)(G.M,{tag:l,size:m,typeStyle:g,"aria-hidden":t,"aria-label":i,children:n})};Es.fragment=Is,Es.displayName="DiscoveryConfigurableHeading";const Ts=x.J1`
  fragment DiscoverySubHeadingFragment on DiscoverySubHeading {
    text
    textAccessibilityLabel
    configurableSubHeading {
      ...DiscoveryConfigurableHeadingFragment
    }
  }

  ${Es.fragment}
`,As=({data:e})=>{const{text:n,textAccessibilityLabel:t,configurableSubHeading:i}=e;return i?(0,I.jsx)(Es,{data:i,"aria-label":t,children:n}):(0,I.jsx)(G.M,{"aria-label":t,children:n})};As.fragment=Ts,As.displayName="DiscoverySubHeading";const Ns=x.J1`
  fragment DiscoverySecondaryHeadingFragment on DiscoverySecondaryHeading {
    ...DiscoveryMessagingBannerFragment
    ...EGDSPlainTextFragment
    ...DiscoverySubHeadingFragment
  }

  ${bs.fragment}
  ${tt.fragment}
  ${As.fragment}
`,ks=({data:e})=>{switch(e.__typename){case"DiscoveryMessagingBanner":return(0,I.jsx)(bs,{data:e});case"EGDSPlainText":return(0,I.jsx)(tt,{data:e});case"DiscoverySubHeading":return(0,I.jsx)(As,{data:e});default:return null}};ks.fragment=Ns,ks.displayName="DiscoverySecondaryHeading";const Cs=x.J1`
  fragment DiscoveryItemsGroupFragment on DiscoveryItemsGroup {
    impression {
      ...ClientSideAnalyticsFragment
    }
    impressionAnalytics
    heading {
      ...DiscoveryHeadingFragment
    }
    ...DiscoveryGroupContainerFragment
    footerLink {
      ...EGDSStandardLinkFragment
    }
    seoStructuredData
    footer {
      ...DiscoveryFooterFragment
    }
    secondaryHeading {
      ...DiscoverySecondaryHeadingFragment
    }
    explainability {
      ...DiscoveryItemGroupExplainabilityFragment
    }
  }

  ${fs.fragment}
  ${or.fragment}
  ${ra.fragment}
  ${ni.fragment}
  ${ms.fragment}
  ${ks.fragment}
  ${Ee}
`,_s=({data:e,cardTheme:n,carouselItemViewedCallback:t,carouselInnerSpacing:i,carouselPagingPersistent:a,carouselShouldHideNavOnMobile:r,carouselUseContainerSizing:s,withoutIntersectionTracker:l,lineOfBusiness:c,titleProps:m,customTitle:g,headingInlineMargin:h,headingTypeStyleUnset:x,injectedComponents:y,isMultiElement:v,isFirstElement:j,discoveryFooterSectionMargin:f,layoutOptions:S,isSimilarPropertiesCarousel:D,carouselPagingInset:b,onHoverChanged:L,onClickCallback:E,additionalUisMicroMessages:T,headingSpacing:A="four",legacyPriceLeftAlignment:N,lazyLoadingImgs:k,onPrefetchHeroImage:C,cardsWithBorder:_,contentTopic:F})=>{var O,P;const{heading:M,footerLink:R,impression:w,impressionAnalytics:B,footer:z,secondaryHeading:H,explainability:$}=e,{referrerId:U="",linkName:Y="",uisPrimeMessages:J=[]}=w||{},X=1===(0,xe.useExperiment)("PDP_UI_Hygiene_Phase_1",!1).exposure.bucket,W=(0,V.s5)({[V.OB.LARGE]:{customStyle:"headline-large"},[V.OB.SMALL]:{customStyle:"headline-medium"}}),K=!("string"!=typeof n&&!(null==n?void 0:n.__contentSize)),q=v&&!j?{blockstart:"six"}:void 0,Q=g&&D?{small:{blockstart:"four"},medium:{blockstart:"four"},large:{blockstart:"six"}}:{blockstart:"four"},Z=n===Oa.LANDING,ee=n===Oa.CONTENT_RICH,ne=$?"eight":"unset",te={small:{blockstart:ne,inline:null==h?void 0:h.small},medium:{blockstart:ne,inline:null==h?void 0:h.medium},large:{blockstart:ne,inline:null==h?void 0:h.large},extra_large:{blockstart:ne,inline:null==h?void 0:h.extra_large}},ie={small:{blockstart:"three",inline:null==h?void 0:h.small},medium:{blockstart:"three",inline:null==h?void 0:h.medium},large:{blockstart:"three",inline:null==h?void 0:h.large},extra_large:{blockstart:"three",inline:null==h?void 0:h.extra_large}},ae={uriContext:{},preview:!0,contentTopic:null!=F?F:""},re=(null==M?void 0:M.disclaimer)&&F&&(0,I.jsx)(ye.d,{inputs:ae,style:"no-file",loadingContent:(0,I.jsx)(pe.v,{})}),se=J.find(e=>"searchMetaGlobal"===e.schemaName),le=se?null===(O=JSON.parse(se.messageContent))||void 0===O||null===(O=O.filtersApplied)||void 0===O?void 0:O.map(e=>`filter-${e.value}`).join("|"):"",oe=x?void 0:Zi(null==m?void 0:m.size,!0);let de;de=X?W:null!=oe?oe:{customStyle:"headline-medium",customTheme:"standard"};const ce=g?(0,I.jsx)(G.M,vn(vn({},m),{},{typeStyle:de,children:g})):M&&(0,I.jsx)(ra,{titleProps:m||{size:5},subTitleProps:{spacing:"one",size:300},data:M,legacyPriceLeftAlignment:N,legalContent:re,headingTypeStyleUnset:x,forceCustomThemeStandard:!0}),me=null==y||null===(P=y.find(e=>"name"in e&&e.name===er.HEADER_MAP_BUTTON))||void 0===P?void 0:P.component,ge=(0,I.jsx)(u.N,{margin:q,stid:le,children:(0,I.jsxs)("div",{children:[$&&(0,I.jsx)(or,{data:$}),(0,I.jsxs)(u.N,{margin:te,children:[me?(0,I.jsxs)(o.X,{justifyContent:"space-between",alignItems:"center",space:"two",children:[(0,I.jsx)(d.C,{children:ce}),me&&(0,I.jsx)(d.C,{children:me})]}):(0,I.jsx)("div",{children:ce}),(0,I.jsxs)(o.X,{justifyContent:"space-between",alignItems:"center",children:[(0,I.jsx)(d.C,{children:ce}),me&&(0,I.jsx)(d.C,{children:me})]})]}),H&&(0,I.jsx)(u.N,{margin:ie,children:(0,I.jsx)("div",{children:(0,I.jsx)(ks,{data:H})})}),(0,I.jsx)(u.N,vn(vn({},K?Z&&M?{padding:{blockstart:"four"}}:ee&&M?{padding:{blockstart:"two"}}:ee||Z?{padding:{blockstart:"one"}}:{padding:g&&D?Q:{blockstart:A}}:{}),{},{children:(0,I.jsx)("div",{children:(0,I.jsx)(ms,{data:e,cardTheme:n,carouselItemViewedCallback:t,carouselInnerSpacing:i,carouselPagingPersistent:a,carouselShouldHideNavOnMobile:r,carouselUseContainerSizing:s,withoutIntersectionTracker:l,lineOfBusiness:c,injectedComponents:y,titleProps:m,layoutOptions:S,onHoverChanged:L,onClickCallback:E,carouselPagingInset:b,legacyPriceLeftAlignment:N,lazyLoadingImgs:k,onPrefetchHeroImage:C,cardsWithBorder:_})})})),!z&&R&&(0,I.jsx)(u.N,{margin:{blockstart:"three"},children:(0,I.jsx)("div",{children:(0,I.jsx)(ni,{data:R})})}),z&&(0,I.jsx)(fs,{data:z,discoveryFooterSectionMargin:f,isMultiElement:v,onClickCallback:E})]})});return B?(0,I.jsx)(p.E0,{eventData:Ie(B),children:ge}):(0,I.jsx)(p.ee,{trackOnce:!0,referrerId:U,linkName:Y,additionalUisPrimeMicroMessages:De(J,T),children:ge})};_s.fragment=Cs,_s.displayName="DiscoveryItemsGroup";const Gs=x.J1`
  fragment DiscoveryItemGroupsFragment on DiscoveryItemGroups {
    groups {
      ...DiscoveryItemsGroupFragment
    }
  }

  ${_s.fragment}
`,Fs=({data:e,contentSize:n,injectedComponents:t,titleProps:i,additionalUisMicroMessages:a,contentTopic:r,customTitle:s,isSimilarPropertiesCarousel:l})=>{const{groups:o}=e||{};return(null==o?void 0:o.length)?(0,I.jsx)(I.Fragment,{children:o.map((e,d)=>(0,I.jsxs)(v.Fragment,{children:[(0,I.jsx)(_s,{data:e,cardTheme:n,injectedComponents:t,isMultiElement:o.length>1,isFirstElement:0===d,titleProps:i||{tag:"h3",size:5},additionalUisMicroMessages:a,contentTopic:r,customTitle:s,isSimilarPropertiesCarousel:l,carouselPagingInset:!!l}),e.seoStructuredData&&(0,I.jsx)("script",{"data-stid":"discovery-landing-offers-structured-data",type:"application/ld+json",dangerouslySetInnerHTML:{__html:e.seoStructuredData}})]},d))}):null};Fs.fragment=Gs,Fs.displayName="DiscoveryItemGroups";const Os=x.J1`
  fragment DiscoveryOverlayFooterFragment on EGDSStandardLink {
    action {
      accessibility
      resource {
        value
      }
      analytics {
        ...ClientSideAnalyticsFragment
      }
      target
    }
    text
  }

  ${Ee}
`,Ps=({data:e,isDarkTheme:n})=>{const{action:t,text:i}=e,{resource:a,accessibility:r,analytics:s}=t,l=(0,p.KY)(),o=(0,v.useCallback)(()=>{be(s,l)},[s,l]),d=(0,I.jsxs)(N.y,{isFullWidth:!1,href:a.value,onClick:o,"aria-label":r||"",type:"button",children:[i,r&&(0,I.jsx)(P.D,{className:"is-visually-hidden",children:r})]});return(0,I.jsxs)(V.LM,{children:[(0,I.jsx)(V.NP,{children:(0,I.jsx)(c.w,{alignItems:"stretch",justifyItems:n?"center":"stretch",children:(0,I.jsx)(u.N,{margin:{inline:n?"six":"three",blockstart:"four",blockend:"six"},padding:{inline:"four",block:"three"},children:d})})}),(0,I.jsx)(V.rw,{children:(0,I.jsx)(c.w,{alignItems:"end",justifyItems:"center",space:"three",children:(0,I.jsx)(u.N,{margin:{medium:{inline:"six",block:n?"four":"six"},large:{inline:"six",block:"six"}},padding:{inline:"four",block:"three"},children:d})})})]})};Ps.fragment=Os,Ps.displayName="DiscoveryOffersOverlayFooter";const Ms=x.J1`
  fragment DiscoveryOverlayHeaderTitleFragment on DiscoveryOverlayHeading {
    title {
      accessibility
      text
    }
    subTitle {
      ... on EGDSPlainText {
        text
        accessibility
      }
    }
  }
`,Rs=({data:e,titleProps:n,subTitleProps:t})=>{var i;const{title:a,subTitle:r}=e;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)("div",{className:"is-visually-hidden",children:[(0,I.jsx)(G.M,{tag:null!==(i=null==n?void 0:n.tag)&&void 0!==i?i:"h1",children:a.accessibility||a.text}),r&&"EGDSPlainText"===r.__typename&&(0,I.jsx)(P.D,{children:r.accessibility||r.text})]}),(0,I.jsx)(G.M,vn(vn({},n),{},{typeStyle:Zi(null==n?void 0:n.size),"aria-hidden":!0,children:a.text})),(0,I.jsx)(V.LM,{children:(0,I.jsx)(V.rw,{children:(0,I.jsx)(I.Fragment,{children:r&&"EGDSPlainText"===r.__typename&&(0,I.jsx)(P.D,vn(vn({},t),{},{"aria-hidden":!0,children:r.text}))})})})]})};Rs.displayName="DiscoveryLandingOffersOverlayHeaderTitle",Rs.fragment=Ms;const ws=x.J1`
  fragment DiscoveryOverlaysHeaderFragment on DiscoveryOverlay {
    closeButton {
      action {
        accessibility
        analytics {
          referrerId
          linkName
        }
      }
    }
    heading {
      ...DiscoveryOverlayHeaderTitleFragment
    }
  }

  ${Rs.fragment}
`,Bs=({data:e,closeDialog:n,compactHeading:t})=>{const{closeButton:i,heading:a}=e,{accessibility:r}=(null==i?void 0:i.action)||{};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(se.p,{navigationContent:{onClick:n,navType:"close",navIconLabel:r||""}}),(0,I.jsx)(u.N,{margin:{small:{blockstart:"unset",blockend:"four",inline:"three"},medium:{blockstart:"unset",blockend:"four",inline:"six"},large:{blockstart:"unset",blockend:t?"four":"six",inline:"six"}},children:(0,I.jsx)(c.w,{alignItems:"center",justifyItems:"center",space:"three",children:(0,I.jsx)(m.T,{children:(0,I.jsxs)(V.LM,{children:[(0,I.jsx)(V.NP,{children:(0,I.jsx)(Rs,{titleProps:{size:5,tag:t?"h3":"h1",align:"center"},subTitleProps:{size:300},data:a})}),(0,I.jsx)(V.rw,{children:(0,I.jsx)(Rs,{titleProps:t?{size:4,tag:"h3",align:"center"}:{size:4,tag:"h1",align:"center"},subTitleProps:{spacing:"one",size:400},data:a})}),(0,I.jsx)(V.zQ,{children:(0,I.jsx)(Rs,{titleProps:t?{size:4,tag:"h3",align:"center"}:{size:3,tag:"h1",align:"center"},subTitleProps:{spacing:"one",size:500},data:a})})]})})})})]})};Bs.displayName="DiscoveryOverlayHeader",Bs.fragment=ws;const zs=({overlayLocalStorageKeyName:e,expiringHours:n,referrerId:t,linkName:i="",isHidden:a,isDialogOpen:r,clickTracker:s,openDialog:l})=>{const o=(0,v.useCallback)(e=>{var n;const t="has-uitk-sheet",i=null===(n=document.body)||void 0===n?void 0:n.classList;if(i)if("add"===e){if(a)return;i.add(t)}else"remove"===e&&i.remove(t)},[a]),d=(0,v.useCallback)(()=>{var t;if(r||a)return!1;if(0===n)return!0;const i=new Date(null!==(t=localStorage.getItem(e))&&void 0!==t?t:"");return s=i,!(Boolean(s&&"Invalid Date"!==s.toDateString())&&(e=>((new Date).getTime()-e.getTime())/36e5)(i)<=n);var s},[r,a,e,n]);return{canOpenOverlay:d,openOverlay:(0,v.useCallback)(()=>{d()&&(n&&n>0&&localStorage.setItem(e,(new Date).toUTCString()),t&&i&&s(t,i),l())},[d,t,i,s,l,n,e]),manageBodyOverflow:o}},Hs=["mousemove","keydown","scroll","touchstart"];function $s(e){const{openOverlay:n,timeoutInMilliSeconds:t,isMouseLeaveEvent:i,inactivityTimeoutInMilliSeconds:a,isDialogOpen:r,isHidden:s}=e,l=a>0,o=(0,v.useRef)(!1);(0,v.useEffect)(()=>{r||(o.current=!1)},[r]),(0,v.useEffect)(()=>{o.current=!1},[l]);const d=(0,v.useCallback)(()=>{l&&o.current||r||(l&&(o.current=!0),n())},[n,l,r]);(({openOverlay:e,timeoutInMilliSeconds:n,isMouseLeaveEvent:t,isDialogOpen:i,isHidden:a})=>{const r=(0,v.useRef)(e);(0,v.useEffect)(()=>{r.current=e},[e]),(0,v.useEffect)(()=>{if(i||a)return;let e=!1;const s=()=>{r.current()},l=setTimeout(()=>{t?(document.body.addEventListener("mouseleave",s),e=!0):r.current()},n);return()=>{clearTimeout(l),e&&document.body.removeEventListener("mouseleave",s)}},[t,n,i,a])})({openOverlay:d,timeoutInMilliSeconds:t,isMouseLeaveEvent:i,isDialogOpen:r,isHidden:s}),function(e){const{inactivityTimeoutInMilliSeconds:n,onInactivityDetected:t,enabled:i}=e,a=(0,v.useRef)(null),r=(0,v.useRef)(t),s=(0,v.useRef)(!1);(0,v.useEffect)(()=>{r.current=t},[t]),(0,v.useEffect)(()=>{if(s.current=!1,!i||n<=0)return;const e=()=>{s.current||(a.current&&clearTimeout(a.current),a.current=setTimeout(()=>{s.current||(s.current=!0,r.current())},n))};return e(),Hs.forEach(n=>{window.addEventListener(n,e,{passive:!0})}),()=>{a.current&&(clearTimeout(a.current),a.current=null),Hs.forEach(n=>{window.removeEventListener(n,e)})}},[i,n])}({inactivityTimeoutInMilliSeconds:a,onInactivityDetected:d,enabled:l&&!r&&!s})}const Us=x.J1`
  fragment DiscoveryLandingOffersOverlayFragment on DiscoveryOverlay {
    analytics {
      linkName
      referrerId
    }
    footerLink {
      ...EGDSStandardLinkFragment
    }
    ...DiscoveryOverlaysHeaderFragment
  }

  ${ni.fragment}
  ${Bs.fragment}
`,Ys=({data:e,recommendations:n,cardTheme:t,expiringHours:i,timeoutInMilliSeconds:a,isMouseLeaveEvent:r,overlayLocalStorageKeyName:s="landingDiscoveryOffersOverlayShowed",isHidden:l,additionalUisMicroMessages:o,backgroundTheme:d,inactivityTimeoutInMilliSeconds:c})=>{const m=(0,p.KY)(),{footerLink:g,analytics:h,closeButton:x}=e,{referrerId:y,linkName:j=""}=h||{},f=d===aa.DARK,[S,D,b]=(0,ae.useDialog)("discovery-landing-offers-overlay","discovery-landing-offers-overlay",!0,(0,v.useCallback)(()=>{var e;const n=null==x||null===(e=x.action)||void 0===e?void 0:e.analytics;n&&m(n.referrerId,n.linkName)},[m,x]),"state"),{openOverlay:L,manageBodyOverflow:E}=zs({overlayLocalStorageKeyName:s,expiringHours:i,referrerId:y,linkName:j,isHidden:l,isDialogOpen:S,clickTracker:m,openDialog:()=>D.openDialog()});$s({openOverlay:L,timeoutInMilliSeconds:a,isMouseLeaveEvent:r,inactivityTimeoutInMilliSeconds:c,isDialogOpen:S,isHidden:l}),(0,v.useEffect)(()=>(E(l?"remove":S?"add":"remove"),()=>{E("remove")}),[S,E,l]);const T=(0,v.useCallback)(()=>{D.closeDialog()},[D]);return l?null:(0,I.jsx)(ie.K,{isVisible:S,children:(0,I.jsx)(b,{children:(0,I.jsx)(fe.EGDSThemeProvider,{config:{lightMode:{colorTheme:d,isGradient:!0},darkMode:{colorTheme:d,isGradient:!0}},children:(0,I.jsxs)(ne.t,{isVisible:S,type:"popover",width:938,triggerRef:null,children:[(0,I.jsx)(Bs,{data:e,closeDialog:T,compactHeading:f}),(0,I.jsx)(u.N,{padding:{small:{inline:f?"six":"three"},medium:{inline:"six"}},children:(0,I.jsx)(te.Y,{padded:!1,children:(0,I.jsx)("div",{style:{maxBlockSize:"calc(100vh - 22rem)"},children:(0,I.jsx)(Se.v,{direction:"vertical",children:(0,I.jsx)(fe.EGDSThemeProvider,{config:{lightMode:{colorTheme:"light-1"},darkMode:{colorTheme:"light-1"}},children:(0,I.jsx)(Fs,{data:n,contentSize:t,additionalUisMicroMessages:o})})})})})}),g&&(0,I.jsx)(Ps,{data:g,isDarkTheme:f})]})})})})};Ys.displayName="DiscoveryLandingOffersOverlay",Ys.fragment=Us;const Vs=x.J1`
  query DiscoveryLandingOffersOverlayModuleQuery(
    $discoveryContext: LandingDiscoveryContextInput!
    $context: ContextInput!
    $productId: String
    $placeId: String
  ) {
    landingDiscoveryModule {
      offers(discoveryContext: $discoveryContext, context: $context) {
        ...DiscoveryItemGroupsFragment
      }
    }
    discoveryOverlayModule(context: $context, productId: $productId, placeId: $placeId) {
      ...DiscoveryLandingOffersOverlayFragment
    }
  }

  ${Fs.fragment}
  ${Ys.fragment}
`,Js=e=>{var n;const{inputs:t,skipSsr:i,expiringHours:a=8,timeoutInMilliSeconds:r=15e3,isMouseLeaveEvent:s=!0,overlayLocalStorageKeyName:l,cardTheme:o,isHidden:d,additionalUisMicroMessages:c,contentSize:m,backgroundTheme:g=aa.LIGHT,inactivityTimeoutInMilliSeconds:u=0}=e,{context:h}=(0,R.R)(),{data:p,error:y,loading:v}=(0,x.FP)(Vs,{context:{shouldLogPerformance:!0},variables:vn(vn({},t),{},{context:h}),ssr:!i});if(v||y||!(null==p||null===(n=p.landingDiscoveryModule)||void 0===n?void 0:n.offers)||"DiscoveryItemGroups"!==p.landingDiscoveryModule.offers.__typename)return null;const j=o&&ia[o];return(0,I.jsx)(Ys,{data:null==p?void 0:p.discoveryOverlayModule,expiringHours:a,isMouseLeaveEvent:s,timeoutInMilliSeconds:r,overlayLocalStorageKeyName:l,lineOfBusiness:void 0,isHidden:d,cardTheme:j||Oa[null!=m?m:"FOUNDATION"],recommendations:p.landingDiscoveryModule.offers,additionalUisMicroMessages:c,backgroundTheme:g,inactivityTimeoutInMilliSeconds:u})};Js.displayName="sharedui-DiscoveryLandingOffersOverlayModule"}}]);
//# sourceMappingURL=https://bernie-assets.s3.us-west-2.amazonaws.com/landing-pwa/shared-ui-retail-recommendations-discovery-landing-offers-overlay-module.018fec23857abe8f7ca7.js.map