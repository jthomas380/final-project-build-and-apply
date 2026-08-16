/*@license For license information please refer to shared-ui-retail-activities-cross-sell-offers.licenses.txt*/
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[3881],{68082:function(e,t,i){i.d(t,{Rn:function(){return _i},aV:function(){return Mi},o7:function(){return za}});var a=i(96540),n=i(20209),r=i(55009),l=i(66501),s=i(84683),o=i(35784),c=i(33694),d=i(82308),g=i(64155),m=i(85361),u=i(21317),f=i(716),p=i(96059),y=i(338),x=i(23527),h=i(22868),v=i(74276),D=i(58646),S=i(66267),A=i(30230),j=i(15286),E=i(39128),T=i(74848),b=i(84692),k=i(66162),N=i(2746),I=i(22682),F=i(57536),G=i(5846),C=i(86047),L=i(66746),R=i(62403),O=i(33777),P=i(26129),$=i(38955),w=i(77511),_=i(20562),M=i(66104),z=i(33998),H=i(96906),B=i(65675),U=i(10044),J=i(4648),Y=i(56504),K=i(63912),V=i(50306),X=i(6504),W=i(65845),Q=i(13974),q=i(82652),Z=(i(69777),i(21330)),ee=i(77630),te=i(84043),ie=i(48842),ae=i(70118),ne=i(94637),re=i(86123),le=i(66606),se=i(56318),oe=i(7700),ce=i(22635),de=i(71162),ge=i(99907),me=i(96384),ue=i(86375);const fe=n.J1`
  fragment DateFragment on Date {
    day
    month
    year
  }
`;n.J1`
  fragment ClientSideAnalyticsFragment on ClientSideAnalytics {
    linkName
    referrerId
    uisPrimeMessages {
      messageContent
      schemaName
    }
  }
`,n.J1`
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
`,n.J1`
  fragment DateTimeFragment on DateTime {
    day
    month
    year
    hour
    minute
    second
  }
`;let pe=function(e){return e.FRI="FRI",e.MON="MON",e.SAT="SAT",e.SUN="SUN",e.THU="THU",e.TUE="TUE",e.WED="WED",e}({}),ye=function(e){return e.HIGHLIGHT="HIGHLIGHT",e.ITALIC="ITALIC",e.LINE_THROUGH="LINE_THROUGH",e.SUBSCRIPT="SUBSCRIPT",e.SUPERSCRIPT="SUPERSCRIPT",e.UNDERLINE="UNDERLINE",e}({}),xe=function(e){return e.H1="H1",e.H2="H2",e.H3="H3",e.H4="H4",e.H5="H5",e.H6="H6",e.H7="H7",e.H8="H8",e}({}),he=function(e){return e.LEADING="LEADING",e.TRAILING="TRAILING",e}({}),ve=function(e){return e.LARGE="LARGE",e.MEDIUM="MEDIUM",e.SMALL="SMALL",e}({}),De=function(e){return e.P1="P1",e.P2="P2",e.P3="P3",e}({}),Se=function(e){return e.DEFAULT="DEFAULT",e.EMPHASIS="EMPHASIS",e.LOYALTY="LOYALTY",e.NEGATIVE="NEGATIVE",e.POSITIVE="POSITIVE",e}({}),Ae=function(e){return e.EMPHASIS="EMPHASIS",e.INVERSE="INVERSE",e.LOYALTY="LOYALTY",e.NEGATIVE="NEGATIVE",e.POSITIVE="POSITIVE",e.PRIMARY="PRIMARY",e.SECONDARY="SECONDARY",e}({}),je=function(e){return e.BOLD="BOLD",e.MEDIUM="MEDIUM",e.REGULAR="REGULAR",e}({}),Ee=function(e){return e.EXTERNAL="EXTERNAL",e.INTERNAL="INTERNAL",e}({});const Te=n.J1`
  fragment EGDSDialogToolbarFragment on EGDSDialogToolbar {
    closeText
    title
  }
`,be=({data:e,toolbarType:t,toolbarAction:i})=>{var a;return(0,T.jsx)(E.p,{navigationContent:{onClick:i,navType:t,navIconLabel:null!==(a=e.closeText)&&void 0!==a?a:void 0},toolbarTitle:e.title})};be.fragment=Te,be.displayName="EGDSDialogToolbar";const ke=n.J1`
  fragment EGDSTravelerStepInputFragment on EGDSStepInput {
    ... on EGDSTravelerStepInput {
      egdsElementId
      decreaseAnalytics {
        linkName
        referrerId
      }
      increaseAnalytics {
        linkName
        referrerId
      }
    }
    decreaseText
    increaseText
    label
    key
    max
    min
    step
    subLabel
    value
  }
`,Ne=({data:e,onChange:t,countIndex:i})=>{const{decreaseText:n,increaseText:r,label:l,max:s,min:o,step:c,subLabel:d,value:g,key:m}=e,[u,f]=(0,a.useState)(g),p=(0,k.KY)(),y=(0,S.D4)();return(0,T.jsx)(b.W,{label:l,incrementText:null!=r?r:"",decrementText:null!=n?n:"",incrementId:`${y}-increase`,decrementId:`${y}-decrease`,min:null!=o?o:0,max:null!=s?s:0,step:c,onChange:a=>{const n=parseInt(a.target.value,10);t(n,m,i),"EGDSTravelerStepInput"===e.__typename&&(n>u?p(e.increaseAnalytics.referrerId,e.increaseAnalytics.linkName):p(e.decreaseAnalytics.referrerId,e.decreaseAnalytics.linkName)),f(n)},value:u,description:null!=d?d:"",id:y})};Ne.displayName="EGDSTravelersStepInput",Ne.fragment=ke;const Ie=n.J1`
  fragment EGDSDialogFooterButtonFragment on EGDSButton {
    primary
    accessibility
    disabled
  }
`,Fe=(e,t)=>{switch(e.__typename){case"UITertiaryButton":var i;return{text:null!==(i=e.primary)&&void 0!==i?i:"",type:"tertiary",onClick:t};case"UIPrimaryButton":var a;return{text:null!==(a=e.primary)&&void 0!==a?a:"",type:"primary",onClick:t};default:var n;return{text:null!==(n=e.primary)&&void 0!==n?n:"",type:"primary",onClick:t}}};function Ge(e){return Ge="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ge(e)}function Ce(e){var t=function(e,t){if("object"!=Ge(e)||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var a=i.call(e,t||"default");if("object"!=Ge(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==Ge(t)?t:t+""}function Le(e,t,i){return(t=Ce(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function Re(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,a)}return i}function Oe(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?Re(Object(i),!0).forEach(function(t){Le(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Re(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}const Pe=n.J1`
  fragment EGDSDialogFooterFragment on EGDSDialogFooter {
    ... on EGDSInlineDialogFooter {
      buttons {
        ...EGDSDialogFooterButtonFragment
      }
    }
  }

  ${Ie}
`,$e=({data:e,dialogActionMap:t,closeDialog:i})=>{if("EGDSInlineDialogFooter"===e.__typename){var a,n,r;const{buttons:l}=e,s=l.map((e,a)=>t&&t.length>1?Oe(Oe({},Fe(e,i)),t[a]):Oe({},Fe(e,i)));return(0,T.jsx)(F.l,{buttonOne:null!==(a=s[0])&&void 0!==a?a:void 0,buttonTwo:null!==(n=s[1])&&void 0!==n?n:void 0,buttonThree:null!==(r=s[2])&&void 0!==r?r:void 0})}return null};$e.displayName="ActivitiesEGDSDialogFooter",$e.fragment=Pe;const we=n.J1`
  fragment EGDSDatePickerContentFragment on EGDSDatePickerContent {
    accessibility
    dateKey
    text
    theme
  }
`,_e=({year:e,month:t,day:i})=>new Date(e,t-1,i),Me={[pe.SUN]:x.aF.SUN,[pe.MON]:x.aF.MON,[pe.TUE]:x.aF.TUE,[pe.WED]:x.aF.WED,[pe.THU]:x.aF.THU,[pe.FRI]:x.aF.FRI,[pe.SAT]:x.aF.SAT},ze={[xe.H1]:"h1",[xe.H2]:"h2",[xe.H3]:"h3",[xe.H4]:"h4",[xe.H5]:"h5",[xe.H6]:"h6",[xe.H7]:"h6",[xe.H8]:"h6"},He=n.J1`
  fragment EGDSHeadingFragment on EGDSHeading {
    text
    headingType
    accessibility
  }
`,Be=({className:e,align:t,size:i,tag:a,data:n,tabIndex:r})=>{const{headingType:l,text:s,accessibility:o}=n,c=null!=a?a:l?ze[l]:void 0,d=i&&[3,4].includes(i)?{customStyle:4===i?"headline-large":"headline-extra-large"}:void 0;return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(m.M,{className:e,align:t,tag:null!=a?a:c,size:i,tabIndex:r,"aria-hidden":null!==o,typeStyle:d,children:s}),o&&(0,T.jsx)("span",{className:"is-visually-hidden",children:o})]})};Be.fragment=He,Be.displayName="ActivitiesEGDSHeading";const Ue={[De.P1]:1,[De.P2]:2,[De.P3]:3},Je=n.J1`
  fragment EGDSParagraphFragment on EGDSParagraph {
    text
    style
  }
`,Ye=({className:e,data:t})=>{const{text:i,style:a}=t;return(0,T.jsx)(u.u,{className:e,size:Ue[a],children:i})};Ye.fragment=Je,Ye.displayName="ActivitiesEGDSParagraph";const Ke=n.J1`
  fragment EGDSIconFragment on Icon {
    description
    id
    size
    theme
    title
    withBackground
  }
`,Ve=({className:e,data:t})=>{var i,a;const n=(0,S.D4)();return(0,T.jsx)(U.LD,{className:e,description:t.description,id:n,name:t.id,size:t.size?U.So[t.size]:void 0,title:null!==(i=t.title)&&void 0!==i?i:void 0,theme:null!==(a=null==t?void 0:t.theme)&&void 0!==a?a:void 0,shadow:Boolean(t.withBackground)})};Ve.displayName="ActivitiesEGDSIcon",Ve.fragment=Ke;const Xe=n.J1`
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
`,We=({className:e,data:t})=>{var i;return(0,T.jsx)(J.D,{className:e,description:t.description,id:t.id,name:t.id,size:t.markSize?Y.K[t.markSize]:void 0,url:null===(i=t.url)||void 0===i?void 0:i.value})};We.displayName="ActivitiesEGDSMark",We.fragment=Xe;const Qe=n.J1`
  fragment EGDSGraphicFragment on UIGraphic {
    ... on Icon {
      ...EGDSIconFragment
    }

    ... on Mark {
      ...EGDSMarkFragment
    }
  }

  ${Ve.fragment}
  ${We.fragment}
`,qe=({className:e,data:t})=>{switch(t.__typename){case"Icon":return(0,T.jsx)(Ve,{className:e,data:t});case"Mark":return(0,T.jsx)(We,{className:e,data:t});default:return null}};qe.displayName="EGDSGraphic",qe.fragment=Qe;const Ze={[ve.SMALL]:"small",[ve.MEDIUM]:"medium",[ve.LARGE]:"large"},et={[Ee.EXTERNAL]:"_blank",[Ee.INTERNAL]:"_self"},tt=n.J1`
  fragment EGDSStandardLinkFragment on EGDSStandardLink {
    action {
      accessibility
      analytics {
        linkName
        referrerId
      }
      resource {
        value
        ... on HttpURI {
          relativePath
        }
      }
      target
      useRelativePath
    }
    disabled
    standardLinkIcon: icon {
      ...EGDSIconFragment
    }
    iconPosition
    size
    text
  }

  ${Ve.fragment}
`,it=({icon:e,iconPosition:t,iconPositionToMatch:i})=>e&&t===i?(0,T.jsx)(Ve,{data:e}):null,at=({className:e,inline:t,align:i,data:{action:{analytics:n,resource:r,target:l,accessibility:s,useRelativePath:o},disabled:c,iconPosition:d,standardLinkIcon:g,size:m,text:u}})=>{const p=(0,k.KY)(),y=(0,a.useCallback)(()=>{p(n.referrerId,n.linkName)},[p,n]),x=(0,a.useCallback)(()=>"HttpURI"===r.__typename&&o?r.relativePath:r.value,[r,o]);return(0,T.jsx)(H.i,{className:e,size:Ze[m],onClickCapture:y,inline:t,disabled:c,align:i,children:(0,T.jsxs)("a",{target:et[l],href:x(),children:[(0,T.jsx)(it,{icon:g,iconPosition:d,iconPositionToMatch:he.LEADING}),(0,T.jsx)("span",{"aria-hidden":!!s,children:u}),(0,T.jsx)(it,{icon:g,iconPosition:d,iconPositionToMatch:he.TRAILING}),s&&(0,T.jsx)(f.D,{className:"is-visually-hidden",children:s})]})})};at.fragment=tt,at.displayName="EGDSStandardLink";const nt=n.J1`
  fragment EGDSGraphicTextFragment on EGDSGraphicText {
    graphic {
      ...EGDSGraphicFragment
    }
    text
  }

  ${qe.fragment}
`,rt={inlineend:"one"},lt={inlineend:"one"},st=({className:e,size:t,data:i})=>{const{graphic:a,text:n}=i;return(0,T.jsxs)(M.X,{className:e,children:[(0,T.jsx)(z.C,{children:(0,T.jsx)(d.N,{margin:rt,children:(0,T.jsx)(qe,{data:a})})}),(0,T.jsx)(z.C,{alignSelf:"center",children:(0,T.jsx)(d.N,{margin:lt,children:(0,T.jsx)(f.D,{size:t,children:n})})})]})};st.fragment=nt,st.displayName="EGDSGraphicText";const ot=n.J1`
  fragment EGDSIconTextFragment on EGDSIconText {
    icon {
      ...EGDSIconFragment
    }
    text
  }

  ${Ve.fragment}
`,ct={inlineend:"one"},dt={inlineend:"one"},gt=({className:e,size:t,data:i})=>{const{icon:a,text:n}=i;return(0,T.jsxs)(M.X,{className:e,children:[(0,T.jsx)(z.C,{children:(0,T.jsx)(d.N,{margin:ct,children:(0,T.jsx)(Ve,{data:a})})}),(0,T.jsx)(z.C,{alignSelf:"center",children:(0,T.jsx)(d.N,{margin:dt,children:(0,T.jsx)(f.D,{size:t,children:n})})})]})};gt.fragment=ot,gt.displayName="EGDSIconText";const mt=n.J1`
  fragment EGDSInlineLinkFragment on EGDSInlineLink {
    action {
      accessibility
      analytics {
        linkName
        referrerId
      }
      resource {
        value
      }
      target
    }
    disabled
    size
    text
  }
`,ut=({className:e,data:{action:{analytics:t,resource:i,target:n,accessibility:r},disabled:l,size:s,text:o}})=>{const c=(0,k.KY)(),d=(0,a.useCallback)(()=>{c(t.referrerId,t.linkName)},[c,t]);return(0,T.jsx)(H.i,{className:e,size:Ze[s],onClickCapture:d,disabled:l,inline:!0,children:(0,T.jsxs)("a",{href:i.value,target:et[n],children:[o,r&&(0,T.jsx)("span",{className:"is-visually-hidden",children:r})]})})};ut.fragment=mt,ut.displayName="EGDSInlineLink";const ft=n.J1`
  fragment EGDSPlainTextFragment on EGDSPlainText {
    text
  }
`,pt=({className:e,inline:t,align:i,size:a,theme:n,data:r})=>{const{text:l}=r;return(0,T.jsx)(f.D,{whiteSpace:"pre-line",className:e,align:i,size:a,inline:t,theme:n,children:l})};pt.fragment=ft,pt.displayName="EGDSPlainText";const yt={[Ae.EMPHASIS]:"emphasis",[Ae.NEGATIVE]:"negative",[Ae.POSITIVE]:"positive",[Ae.PRIMARY]:"emphasis",[Ae.SECONDARY]:"default",[Ae.LOYALTY]:"loyalty",[Ae.INVERSE]:"inverse"};Se.NEGATIVE,Se.POSITIVE,Se.EMPHASIS,Se.LOYALTY,Se.DEFAULT;const xt={[je.BOLD]:"bold",[je.MEDIUM]:"medium",[je.REGULAR]:"regular"},ht=n.J1`
  fragment ActivitiesEGDSStylizedTextFragment on EGDSStylizedText {
    text
    theme
    weight
    accessibility
    decorative
    textSize: size
  }
`,vt=({className:e,inline:t,align:i,size:a,data:n})=>{const{text:r,theme:l,weight:s,accessibility:o,decorative:c}=n,d=l?yt[l]:void 0,g=s?xt[s]:void 0,m=()=>(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(f.D,{className:e,align:i,inline:t,size:a,theme:d,weight:g,"aria-hidden":null!==o,children:r}),o&&(0,T.jsx)("span",{className:"is-visually-hidden",children:o})]});return c===ye.LINE_THROUGH?(0,T.jsx)("s",{children:(0,T.jsx)(m,{})}):(0,T.jsx)(m,{})};vt.fragment=ht,vt.displayName="EGDSStylizedText";const Dt=n.J1`
  fragment EGDSSpannableTextContentFragment on EGDSText {
    ...ActivitiesEGDSStylizedTextFragment
    ...EGDSGraphicTextFragment
    ...EGDSPlainTextFragment
  }

  ${vt.fragment}
  ${st.fragment}
  ${pt.fragment}
`,St=({className:e,size:t,align:i,theme:a,data:n})=>{switch(n.__typename){case"EGDSStylizedText":return(0,T.jsx)(vt,{className:e,data:n,size:t,inline:!0});case"EGDSGraphicText":return(0,T.jsx)(st,{className:e,data:n,size:t});case"EGDSPlainText":return(0,T.jsx)(pt,{className:e,data:n,size:t,align:i,inline:!0,theme:a});default:return null}};St.fragment=Dt,St.displayName="EGDSSpannableTextContent";const At=["align","headingSize","data","theme"],jt=n.J1`
  fragment EGDSSpannableTextFragment on EGDSSpannableText {
    text
    contents {
      ...EGDSSpannableTextContentFragment
    }
    inlineContent {
      ...EGDSSpannableTextContentFragment
    }
  }

  ${St.fragment}
`,Et=e=>{var t,i,n;const{align:r,headingSize:l,data:s,theme:o}=e,c=function(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(t.includes(a))continue;i[a]=e[a]}return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.includes(i)||{}.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}(e,At);return 0!==(null==s||null===(t=s.contents)||void 0===t?void 0:t.length)||(null==s||null===(i=s.inlineContent)||void 0===i?void 0:i.length)?(null==s||null===(n=s.inlineContent)||void 0===n?void 0:n.length)?(0,T.jsx)(T.Fragment,{children:s.inlineContent.map((e,t)=>(0,T.jsxs)(T.Fragment,{children:[(0,a.createElement)(St,Oe(Oe({align:r,data:e},c),{},{key:`spannable-item-${t}`,theme:o}))," "]}))}):(0,T.jsx)(T.Fragment,{children:s.contents.map((e,t)=>(0,T.jsxs)(a.Fragment,{children:[(0,T.jsx)(St,Oe(Oe({data:e},c),{},{headingSize:l,theme:o}))," "]},`spannable-item-${t}`))}):(0,T.jsx)(f.D,Oe(Oe({},c),{},{inline:!0,align:r,theme:o,children:s.text}))};Et.fragment=jt,Et.displayName="EGDSSpannableText";const Tt=n.J1`
  fragment EGDSTextFragment on EGDSText {
    ...EGDSHeadingFragment
    ...EGDSPlainTextFragment
    ...ActivitiesEGDSStylizedTextFragment
    ...EGDSIconTextFragment
    ...EGDSGraphicTextFragment
    ...EGDSParagraphFragment
    ...EGDSStandardLinkFragment
    ...EGDSInlineLinkFragment
    ...EGDSSpannableTextFragment
  }

  ${Be.fragment}
  ${pt.fragment}
  ${vt.fragment}
  ${gt.fragment}
  ${st.fragment}
  ${Ye.fragment}
  ${at.fragment}
  ${ut.fragment}
  ${Et.fragment}
`,bt=({className:e,headingAlign:t,headingSize:i,headingTag:a,textAlign:n,textSize:r,align:l,inline:s,tabIndex:o,theme:c,data:d})=>{switch(null==d?void 0:d.__typename){case"EGDSHeading":return(0,T.jsx)(Be,{className:e,align:t,size:i,tag:a,data:d,tabIndex:o});case"EGDSPlainText":return(0,T.jsx)(pt,{className:e,align:n,size:r,data:d,inline:s,theme:c});case"EGDSStylizedText":return(0,T.jsx)(vt,{className:e,align:n,size:r,data:d,inline:s});case"EGDSGraphicText":return(0,T.jsx)(st,{className:e,size:r,data:d});case"EGDSIconText":return(0,T.jsx)(gt,{className:e,size:r,data:d});case"EGDSParagraph":return(0,T.jsx)(Ye,{className:e,data:d});case"EGDSStandardLink":return(0,T.jsx)(at,{className:e,data:d});case"EGDSInlineLink":return(0,T.jsx)(ut,{className:e,data:d});case"EGDSSpannableText":return(0,T.jsx)(Et,{className:e,size:r,headingSize:i,data:d,align:l,theme:c});default:return null}};bt.fragment=Tt,bt.displayName="ActivitiesEGDSText";const kt=n.J1`
  fragment EGDSButtonFragment on EGDSButton {
    primary
    accessibility
    disabled
    action {
      ...EGDSButtonActionFragment
    }
    icon {
      description
      id
      title
    }
  }

  ${n.J1`
  fragment EGDSButtonActionFragment on UIAction {
    analytics {
      linkName
      referrerId
    }

    ... on ActivityOpenOffersModalAction {
      activityId
      dateRange {
        startDate {
          day
          month
          year
        }
        endDate {
          day
          month
          year
        }
      }
      dismissButtonAccessibility
      dismissButtonAnalytics {
        linkName
        referrerId
      }
      selectedOffers {
        offerProductNaturalKey
      }
      heading {
        ...EGDSHeadingFragment
      }
      subHeading {
        ...EGDSPlainTextFragment
      }
      travelers {
        ...ActivityTravelerDetailsFragment
      }
    }

    ... on ActivityAddOfferToTripAction {
      callbackMessages {
        failure
        success
      }
      offerNaturalKey {
        offerProductNaturalKey
      }
    }

    ... on ActivityRemoveOffersFromTripAction {
      callbackMessages {
        failure
        success
      }
      offerNaturalKeys {
        offerProductNaturalKey
      }
    }

    ... on ActivityUpdateOfferInTripAction {
      callbackMessages {
        failure
        success
      }
      newOfferNaturalKey {
        offerProductNaturalKey
      }
      oldOfferNaturalKey {
        offerProductNaturalKey
      }
    }
  }
  fragment ActivityTravelerDetailsFragment on ActivityTravelerDetails {
    age
    count
  }

  ${Be.fragment}
  ${pt.fragment}
`}
`,Nt=({analytics:e,className:t,domRef:i,href:n,isFullWidth:r,onClickHandler:l,size:s,data:o})=>{const{__typename:c,accessibility:d,action:g,primary:m,disabled:u,icon:f}=o,p=(0,k.KY)(),y=g?{description:g.analytics.linkName,id:g.analytics.referrerId,callback:(e,t)=>{p(e,t)}}:void 0,x=(0,a.useCallback)(()=>{null==l||l()},[l]);if(!m)return null;const h={analytics:e||y,"aria-label":null!=d?d:void 0,className:t,disabled:u,href:n,isFullWidth:r,onClick:x,size:s,domRef:i};switch(c){case"UIPrimaryButton":return(0,T.jsx)(C.y,Oe(Oe({},h),{},{children:m}));case"UISecondaryButton":return(0,T.jsx)(R.y,Oe(Oe({},h),{},{children:m}));case"UITertiaryButton":return(0,T.jsx)(O.q,Oe(Oe({},h),{},{children:m}));case"EGDSOverlayButton":var v;return(0,T.jsxs)(P.M,Oe(Oe({},h),{},{children:[f&&(0,T.jsx)(U.LD,{name:null!==(v=null==f?void 0:f.id)&&void 0!==v?v:""}),m]}));default:return null}};Nt.fragment=kt,Nt.displayName="ActivitiesEGDSButton";const It=n.J1`
  fragment ActivityDialogTriggerFragment on ActivityDialogTrigger {
    accessibility
    analytics {
      linkName
      referrerId
    }

    ... on ActivityButtonDialogTrigger {
      button {
        ...EGDSButtonFragment
      }
    }

    ... on ActivityGraphicDialogTrigger {
      graphic {
        ...EGDSGraphicFragment
      }
    }

    ... on ActivityLinkDialogTrigger {
      linkGraphic: graphic {
        ...EGDSGraphicFragment
      }
      label
    }

    ... on ActivityFakeInputDialogTrigger {
      icon {
        id
      }
      label
      value
    }

    ... on ActivityMapDialogTrigger {
      staticMapImage {
        accessibility
        url
      }
      mapTriggerLabel: label
    }
  }

  ${qe.fragment}
  ${Nt.fragment}
`,Ft=({className:e,data:t,domRef:i,linkIconPosition:n=he.TRAILING,openDialog:r,autoFocus:o})=>{const{accessibility:c,analytics:d}=t,g=(0,k.KY)(),m={description:d.linkName,id:d.referrerId,callback:(0,a.useCallback)((e,t)=>{g(e,t)},[g])},u=(0,a.useCallback)(()=>{g(d.referrerId,d.linkName)},[d,g]);switch(t.__typename){case"ActivityButtonDialogTrigger":return(0,T.jsx)(Nt,{analytics:m,size:G.V.MEDIUM,onClickHandler:r,domRef:i,data:t.button});case"ActivityGraphicDialogTrigger":return(0,T.jsx)(B.t,{className:e,analytics:m,onClick:r,size:"small",children:(0,T.jsxs)("button",{ref:i,type:"button",children:[(0,T.jsx)(qe,{data:t.graphic}),(0,T.jsx)("span",{className:"is-visually-hidden",children:c})]})});case"ActivityFakeInputDialogTrigger":var f,p;return(0,T.jsx)("div",{className:e,children:(0,T.jsx)(_.H,{domRef:i,label:t.label,value:null!==(f=t.value)&&void 0!==f?f:"",icon:null===(p=t.icon)||void 0===p?void 0:p.id,onChange:r,onClick:r,analytics:m,autoFocus:o})});case"ActivityLinkDialogTrigger":return(0,T.jsx)(H.i,{className:e,onClick:r,onClickCapture:u,size:"medium",children:(0,T.jsxs)("button",{ref:i,type:"button",children:[t.linkGraphic&&n===he.LEADING&&(0,T.jsx)(qe,{data:t.linkGraphic}),t.label,t.linkGraphic&&n===he.TRAILING&&(0,T.jsx)(qe,{data:t.linkGraphic}),(0,T.jsx)("span",{className:"is-visually-hidden","aria-hidden":t.label===c,children:c})]})});case"ActivityMapDialogTrigger":var y;return(0,T.jsx)(M.X,{className:e,children:(0,T.jsx)(H.i,{onClickCapture:u,children:(0,T.jsx)("button",{ref:i,type:"button",onClick:r,"aria-labelledby":c,children:(0,T.jsx)(z.C,{minWidth:"full_width",children:(0,T.jsxs)(l.g,{border:!0,children:[(null===(y=t.staticMapImage)||void 0===y?void 0:y.url)&&(0,T.jsx)($.M,{ratio:$.l.R21_9,children:(0,T.jsx)(w.F,{src:t.staticMapImage.url,alt:t.staticMapImage.accessibility||""})}),t.mapTriggerLabel&&(0,T.jsx)(s.E,{children:(0,T.jsx)(M.X,{justifyContent:"center",children:t.mapTriggerLabel})})]})})})})});default:return null}};Ft.displayName="ActivityDialogTrigger",Ft.fragment=It;const Gt=n.J1`
  fragment ActivityDateRangePickerDialogFragment on ActivityDateRangePickerDialog {
    dateRangePicker {
      buttonText
      dateFormat
      firstDayOfWeek
      footerText
      sameDaySelectionAllowed
      selectedEndDate {
        ...DateFragment
      }
      selectedStartDate {
        ...DateFragment
      }
      validDaysLowerBoundInclusive {
        ...DateFragment
      }
      validDaysUpperBoundInclusive {
        ...DateFragment
      }
      datePickerContent {
        ...EGDSDatePickerContentFragment
      }
    }
    trigger {
      ...ActivityDialogTriggerFragment
    }
  }

  ${we}
  ${fe}
  ${Ft.fragment}
`,Ct=({className:e,onSubmitHandler:t,data:i,isNestedDialog:n})=>{const{formatDateString:r}=(0,j.useLocalization)(),l=(0,S.D4)(),s=n?"pwaDialogNested":void 0,[o,c,d]=(0,A.useDialog)(`activity-date-range-picker-dialog-${l}`,s),{dateRangePicker:{buttonText:g,firstDayOfWeek:m,footerText:u,sameDaySelectionAllowed:f,selectedEndDate:p,selectedStartDate:x,validDaysLowerBoundInclusive:h,validDaysUpperBoundInclusive:v,dateFormat:E,datePickerContent:b},trigger:k}=i,N=new Date,I=new Date;I.setDate(N.getDate()+1);const F=(0,a.createRef)(),[G,C]=(0,a.useState)(r(N,{raw:E})),[L,R]=(0,a.useState)(r(I,{raw:E})),[O,P]=(0,a.useState)(r(N,{raw:E})),[$,w]=(0,a.useState)(500),[_,M]=(0,a.useState)(void 0);(0,a.useEffect)(()=>{const e={raw:E};var t;x&&C(r(_e(x),e)),p&&R(r(_e(p),e)),h&&P(r(_e(h),e)),v&&w((t=_e(v).getTime()-(new Date).getTime(),Math.ceil(t/1e3/60/60/24))),(null==b?void 0:b.length)&&M(b.reduce((e,t)=>Oe(Oe({},e),(e=>{const{accessibility:t,dateKey:i,text:a,theme:n}=e;return{[i]:{text:null!=a?a:"",ariaLabel:null!=t?t:void 0,className:null!=n?n:void 0}}})(t)),{}))},[r,p,x,h,v,E,b]);const z=(0,a.useCallback)(()=>{c.closeDialog(),F.current&&"function"==typeof F.current.focus&&F.current.focus()},[c,F]),H=(0,a.useCallback)((e,i)=>{const a=i||new Date(e.getFullYear(),e.getMonth(),e.getDate()+1),n=r(e,{raw:E}),l=r(a,{raw:E});C(n),R(l),t(n,l),z()},[E,r,z,t]),B={buttonText:g,dateFieldProps:{showDatePicker:!0,useCustomTrigger:!0},datePickerContent:_,daysBookableInAdvance:$,doubleMonths:!0,endDate:L,firstDayOfWeek:Me[m],footerText:null!=u?u:void 0,onDismissCB:z,onSubmitCB:H,renderType:y.sg.DIALOG,singleDateSelect:f,startDate:G,triggeredSelector:y.mn.START,validStartDate:O};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Ft,{className:e,domRef:F,linkIconPosition:he.LEADING,openDialog:c.openDialog,data:k}),(0,T.jsx)(D.K,{isVisible:o,children:(0,T.jsx)(d,{children:(0,T.jsx)(y.e5,Oe({},B))})})]})};Ct.displayName="ActivityDateRangePickerDialog",Ct.fragment=Gt;const Lt=n.J1`
  fragment ActivityClickActionsFragment on ActivityClickAction {
    accessibilityText
    clientSideAnalytics {
      linkName
      referrerId
    }
    ... on ActivityLinkClickAction {
      linkTagUrl
      opensInNewTab
    }

    ... on ActivityRefClickAction {
      sectionRef
    }

    ... on ActivitySelectionClickAction {
      selectionList {
        id
        value
      }
    }
    ... on ActivityPaginationInfoAction {
      pagination {
        size
        startingIndex
      }
    }
  }
`,Rt=(e,t,i)=>{switch(e.__typename){case"ActivityLinkClickAction":return{onClick:()=>{const{clientSideAnalytics:i,linkTagUrl:a,opensInNewTab:n}=e;t(i.referrerId,i.linkName),a&&window.open(a,n?"_blank":"_self")}};case"ActivityRefClickAction":return{href:`#${e.sectionRef}`};case"ActivityCloseDialogClickAction":return{onClick:i};case"ActivitySelectionClickAction":return{selectedTabAction:(()=>{const{clientSideAnalytics:i,selectionList:a}=e;if(t(null==i?void 0:i.referrerId,null==i?void 0:i.linkName),a)return a})()};case"ActivityPaginationInfoAction":{const{clientSideAnalytics:i,pagination:a}=e;return t(null==i?void 0:i.referrerId,null==i?void 0:i.linkName),{paginatedIndex:a}}default:return null}},Ot=n.J1`
  fragment ActivityDisclaimerDialogFragment on ActivityDisclaimerDialog {
    contents {
      ...EGDSTextFragment
    }
    dialog {
      closeAnalytics {
        linkName
        referrerId
      }
      footer {
        ...EGDSDialogFooterFragment
      }
    }
    trigger {
      ...ActivityDialogTriggerFragment
    }
    dialogActions {
      ...ActivityClickActionsFragment
    }
  }

  ${Lt}
  ${Ft.fragment}

  ${Pe}
  ${bt.fragment}
`,Pt=({className:e,data:t,dialogIdSuffix:i,linkIconPosition:n})=>{const{contents:r,dialog:l,trigger:s,dialogActions:o}=t,c=(0,k.KY)(),d=(0,S.D4)(),[g,m,u]=(0,A.useDialog)(`activity-disclaimer-dialog-${null!=i?i:d}`,"nestedActivityDisclaimerDialog"),f=null==o?void 0:o.map(e=>Rt(e,c,m.closeDialog)),p=(0,a.createRef)(),y=(0,a.useCallback)(()=>{l.closeAnalytics&&c(l.closeAnalytics.referrerId,l.closeAnalytics.linkName),p.current&&"function"==typeof p.current.focus&&p.current.focus(),m.closeDialog()},[m,c,l.closeAnalytics]);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Ft,{className:e,domRef:p,openDialog:m.openDialog,data:s,linkIconPosition:n}),(0,T.jsx)(D.K,{isVisible:g,children:(0,T.jsx)(u,{children:(0,T.jsx)(N.Q,{dialogShow:g,ariaLabel:s.accessibility,returnFocusOnClose:!0,children:(0,T.jsxs)(I.h,{children:[r.map((e,t)=>(0,T.jsx)(bt,{data:e},`disclaimer-dialog-contents-${t}`)),(0,T.jsx)($e,{data:l.footer,dialogActionMap:f,closeDialog:y})]})})})})]})};Pt.displayName="ActivityDisclaimerDialog",Pt.fragment=Ot;const $t=n.J1`
  fragment ActivityTravelerSelectorDialogFragment on ActivityTravelerSelectorDialog {
    heading {
      ...EGDSHeadingFragment
    }
    doneButton {
      primary
      action {
        analytics {
          linkName
          referrerId
        }
      }
    }
    ticketsStepInput {
      ...EGDSTravelerStepInputFragment
    }
    dialog {
      closeAnalytics {
        linkName
        referrerId
      }
      toolbar {
        ...EGDSDialogToolbarFragment
      }
    }
    trigger {
      ...ActivityDialogTriggerFragment
    }
    errorMessageForSelectedTickets {
      ...EGDSGraphicTextFragment
    }
  }

  ${Ft.fragment}

  ${Be.fragment}
  ${Ne.fragment}
  ${be.fragment}
  ${st.fragment}
`;var wt=function(e){return e.FULL_SCREEN="full",e.CENTERED="centered",e}(wt||{});const _t={blockend:"two"},Mt=({className:e,doneClickHandler:t,data:i,isNestedDialog:n,autoFocus:r})=>{const l=(0,k.KY)(),{heading:s,dialog:o,doneButton:c,ticketsStepInput:g,trigger:m,errorMessageForSelectedTickets:u}=i,[f,p]=(0,a.useState)(),y=(0,S.D4)(),x=n?"pwaDialogNested":void 0,[j,E,b]=(0,A.useDialog)(`activity-traveler-selection-dialog-${y}`,x),N=(0,a.useRef)(null),[I,F]=(0,a.useState)(!1),[C,R]=(0,a.useState)(void 0),O=(0,a.useRef)(new Set),P=(0,a.useMemo)(()=>{const e=[];return g.forEach(t=>{var i;const a={code:null!==(i=t.key)&&void 0!==i?i:"",count:t.value};e.push(a)}),p(e),e},[g]),$=(0,a.useCallback)((e,t,i)=>{P[i]={code:null!=t?t:"",count:e},p(P),O.current.add(null!=t?t:""),F(!P.find(e=>e.count>0))},[P]),w=(0,a.useCallback)(()=>{o.closeAnalytics&&l(o.closeAnalytics.referrerId,o.closeAnalytics.linkName),E.closeDialog()},[o.closeAnalytics,l]),_=(0,a.useCallback)(()=>{var e;const i=null!=f?f:P;R(i.map(e=>{var t;const i=g.find(t=>t.key===e.code),a=e.count>(null!==(t=null==i?void 0:i.min)&&void 0!==t?t:0),n=O.current.has(e.code);return i&&e.count>0&&(a||n)?`${e.count} ${i.label}`:null}).filter(Boolean).join(", ")||void 0),t(i),(null===(e=c.action)||void 0===e?void 0:e.analytics)&&l(c.action.analytics.referrerId,c.action.analytics.linkName),E.closeDialog()},[t,f,P,g,c,l,E]),M=(0,a.useCallback)(()=>{F(!g.find(e=>e.value>0)),O.current=new Set,E.openDialog()},[]);(0,a.useEffect)(()=>{R(void 0),O.current=new Set},[g]);const z=(0,a.useMemo)(()=>C&&"ActivityFakeInputDialogTrigger"===m.__typename?Oe(Oe({},m),{},{value:C}):m,[m,C]),H=e=>(0,T.jsxs)(h.t,{type:e,isVisible:!0,returnFocusOnClose:!0,triggerRef:N,children:[(0,T.jsx)(be,{toolbarType:"close",toolbarAction:w,data:o.toolbar}),(0,T.jsxs)(v.Y,{children:[s&&(0,T.jsx)(d.N,{margin:_t,children:(0,T.jsx)(Be,{size:6,data:s})}),g.map((e,t)=>(0,T.jsx)(Ne,{countIndex:t,onChange:$,data:e},t)),(0,T.jsx)(d.N,{margin:{blockstart:"three"},children:I&&u?(0,T.jsx)(st,{data:u}):(0,T.jsx)("div",{children:" "})}),(0,T.jsx)(d.N,{margin:{blockstart:"six"},children:(0,T.jsx)(L.t,{size:G.V.LARGE,onClick:_,disabled:I,children:c.primary})})]})]});return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Ft,{className:e,openDialog:M,data:z,domRef:N,autoFocus:r}),(0,T.jsx)(D.K,{isVisible:j,children:(0,T.jsx)(b,{children:(0,T.jsxs)(K.LM,{children:[(0,T.jsx)(K.NP,{children:H(wt.FULL_SCREEN)}),(0,T.jsx)(K.rw,{children:H(wt.CENTERED)})]})})})]})};Mt.displayName="ActivityTravelerSelectorDialog",Mt.fragment=$t;const zt=n.J1`
  fragment EGDSBasicRadioButtonFragment on EGDSBasicRadioButton {
    description
    disabled
    label
    labelSuffix
    value
  }
`,Ht=({data:e,groupName:t})=>{const{description:i,disabled:a,label:n,labelSuffix:r,value:l}=e;return(0,T.jsx)(V.P,{disabled:a,id:l,value:l,description:null!=i?i:void 0,label:n,labelSuffix:null!=r?r:void 0},`${t}-${l}`)};Ht.displayName="EGDSBasicRadioButton",Ht.fragment=zt;const Bt=n.J1`
  fragment EGDSRadioButtonFragment on EGDSRadioButton {
    ... on EGDSBasicRadioButton {
      ...EGDSBasicRadioButtonFragment
    }
  }

  ${Ht.fragment}
`,Ut=({data:e,groupName:t})=>"EGDSBasicRadioButton"===e.__typename?(0,T.jsx)(Ht,{groupName:t,data:e}):null;Ut.displayName="ActivitiesEGDSRadioButton",Ut.fragment=Bt;const Jt=n.J1`
  fragment EGDSBasicRadioGroupFragment on EGDSBasicRadioGroup {
    groupName
    selected
    options {
      ...EGDSRadioButtonFragment
    }
  }

  ${Ut.fragment}
`,Yt=({data:e,onChange:t})=>{const{groupName:i,selected:a,options:n}=e;return(0,T.jsx)(X.S,{group:i,onChange:t,selected:null!=a?a:void 0,defaultChecked:!0,children:n.map((e,t)=>(0,T.jsx)(Ut,{data:e,groupName:i},`egds-radio-group-${t}`))})};Yt.displayName="EGDSBasicRadioGroup",Yt.fragment=Jt;const Kt=n.J1`
  fragment ActivityRadioGroupDialogFragment on ActivityRadioGroupDialog {
    dialog {
      closeAnalytics {
        linkName
        referrerId
      }
      toolbar {
        ...EGDSDialogToolbarFragment
      }
    }
    doneButton {
      primary
      action {
        analytics {
          linkName
          referrerId
        }
      }
    }
    heading {
      ...EGDSHeadingFragment
    }
    radioGroup {
      ...EGDSBasicRadioGroupFragment
    }
    trigger {
      ...ActivityDialogTriggerFragment
    }
  }

  ${Ft.fragment}

  ${Be.fragment}
  ${Yt.fragment}
  ${be.fragment}
`,Vt={blockend:"two"},Xt=({className:e,doneClickHandler:t,data:i,isNestedDialog:n})=>{var r;const{heading:l,dialog:s,doneButton:{action:o,primary:c},radioGroup:g,trigger:m}=i,u=(0,k.KY)(),f=(0,S.D4)(),p=n?"pwaDialogNested":void 0,[y,x,j]=(0,A.useDialog)(`activity-radio-dialog-${f}`,p),[E,b]=(0,a.useState)(null!==(r=g.selected)&&void 0!==r?r:""),N=(0,a.useRef)(null),I=(0,a.useCallback)(()=>{s.closeAnalytics&&u(s.closeAnalytics.referrerId,s.closeAnalytics.linkName),x.closeDialog()},[x,s.closeAnalytics,u]),F=(0,a.useCallback)(()=>{(null==o?void 0:o.analytics)&&u(o.analytics.referrerId,o.analytics.linkName),t(g.groupName,E),x.closeDialog()},[t,u,null==o?void 0:o.analytics,x,g.groupName,E]);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Ft,{className:e,openDialog:x.openDialog,data:m,domRef:N}),(0,T.jsx)(D.K,{isVisible:y,children:(0,T.jsx)(j,{children:(0,T.jsxs)(h.t,{type:"centered",isVisible:y,returnFocusOnClose:!0,triggerRef:N,children:[(0,T.jsx)(be,{toolbarType:"close",toolbarAction:I,data:s.toolbar}),(0,T.jsxs)(v.Y,{children:[l&&(0,T.jsx)(d.N,{margin:Vt,children:(0,T.jsx)(Be,{size:6,data:l})}),(0,T.jsx)(Yt,{onChange:e=>{b(e.target.value)},data:g}),(0,T.jsx)(d.N,{margin:{blockstart:"six"},children:(0,T.jsx)(L.t,{size:G.V.LARGE,onClick:F,children:c})})]})]})})})]})};Xt.displayName="ActivityRadioGroupDialog",Xt.fragment=Kt;const Wt=n.J1`
  fragment EGDSExpandoPeekFragment on EGDSExpandoPeek {
    expandAnalytics {
      linkName
      referrerId
    }
    expandedLabel
    expandedAccessibilityText
    collapsedAccessibilityText
    collapseAnalytics {
      linkName
      referrerId
    }
    collapsedLabel
    expanded
  }
`,Qt="data-activities-expando",qt=({lines:e,items:t,className:i,data:n,children:r})=>{var l,s,o,c;const{expanded:d,expandAnalytics:g,expandedLabel:m,collapseAnalytics:u,collapsedLabel:f,expandedAccessibilityText:p,collapsedAccessibilityText:y}=n,x=(0,k.KY)(),[h,v]=(0,a.useState)(d),D=(0,a.useRef)(null),S=(0,a.useRef)(null),A={id:null!==(l=null==g?void 0:g.referrerId)&&void 0!==l?l:"",description:null!==(s=null==g?void 0:g.linkName)&&void 0!==s?s:"",callback:(0,a.useCallback)((e,t)=>{x(e,t)},[x])},j={id:null!==(o=null==u?void 0:u.referrerId)&&void 0!==o?o:"",description:null!==(c=null==u?void 0:u.linkName)&&void 0!==c?c:"",callback:(0,a.useCallback)((e,t)=>{x(e,t)},[x])},E=(0,a.useCallback)(()=>{if(!h){const e=function(e,t,i){var a,n,r;const l=null==e?void 0:e.closest(`[${t}]`),s=null!==(a=null==l?void 0:l.querySelector("[data-items-to-display]"))&&void 0!==a?a:null==l||null===(n=l.firstElementChild)||void 0===n?void 0:n.firstElementChild;if(!s)return null;if(!i)return s;const o=1===s.children.length?s.children[0]:s;return null!==(r=null==o?void 0:o.children[i])&&void 0!==r?r:null}(D.current,Qt,t);e&&(e.setAttribute("tabindex","-1"),e.style.outline="none",S.current=e)}v(!h)},[h,t]);return(0,T.jsx)(Z.A,{expandLabel:f,collapseLabel:m,analytics:h?j:A,className:i,lines:e,items:t,isVisible:h,handleClick:E,expandA11yLabel:null!=y?y:f,collapseA11yLabel:null!=p?p:m,peekControlRef:D,revealRef:S,[Qt]:!0,children:r})};qt.fragment=Wt,qt.displayName="ActivitiesEGDSExpandoPeek";const Zt=n.J1`
  fragment EGDSExpandoListItemFragment on EGDSExpandoListItem {
    collapseAnalytics {
      linkName
      referrerId
    }
    collapsedLabel
    expandAnalytics {
      linkName
      referrerId
    }
    expandedLabel
    expanded
  }
`,ei=({children:e,className:t,data:i,titleSize:n,titleTag:r,isIndented:l,selectedEventAnalytics:s})=>{const{expandAnalytics:o,expandedLabel:c,collapseAnalytics:d,collapsedLabel:g,expanded:u}=i,f=(0,k.KY)(),p=(0,k.iQ)(),[y,x]=(0,a.useState)(u),[h,v]=(0,a.useState)(u?c:g),D=n&&[3,4].includes(n)?{customStyle:4===n?"headline-large":"headline-extra-large"}:void 0;let S;d&&o&&(S={id:y?d.referrerId:o.referrerId,description:y?d.linkName:o.linkName,callback:(e,t)=>{f(e,t)}});const A=(0,a.useCallback)(()=>{v(y?g:c),s&&p((e=>{const{clickstreamEvent:t,payload:i}=e,{eventName:a,eventType:n,eventVersion:r,eventCategory:l,actionLocation:s,pageName:o,pageNameDetailed:c,pageProductLine:d}=t;return Oe({clientPayload:{event:{event_name:a,event_version:r,event_type:n,event_category:l,action_location:s},experience:{page_name:o,page_name_detailed:c,page_product_line:d}}},i&&{serverPayload:i})})(s)),x(!y)},[y,g,c]);return(0,T.jsx)(ee.U,{analytics:S,className:t,isVisible:y,expandoTitle:(0,T.jsx)(m.M,{tag:r,size:n,typeStyle:D,children:h}),expandoDescription:e,onToggle:A,isIndented:l})};ei.fragment=Zt,ei.displayName="ActivitiesEGDSExpandoListItem";const ti=n.J1`
  fragment EGDSExpandoFragment on EGDSExpando {
    ... on EGDSExpandoPeek {
      ...EGDSExpandoPeekFragment
    }
    ... on EGDSExpandoListItem {
      ...EGDSExpandoListItemFragment
    }
  }

  ${qt.fragment}
  ${ei.fragment}
`,ii=({className:e,expandoListItemTitleSize:t,expandoListItemTitleTag:i,expandoListItemIsIndented:a,expandoPeekLines:n,expandoPeekItems:r,data:l,children:s})=>{switch(null==l?void 0:l.__typename){case"EGDSExpandoPeek":return(0,T.jsx)(qt,{className:e,data:l,lines:n,items:r,children:s});case"EGDSExpandoListItem":return(0,T.jsx)(ei,{className:e,data:l,titleSize:t,titleTag:i,isIndented:a,children:s});default:return null}};ii.fragment=ti,ii.displayName="ActivitiesEGDSExpando";const ai=n.J1`
  fragment ActivityReviewsCommentFragment on ActivityReview {
    text
    author
    formattedActivityDate
    overallScoreMessage {
      ...EGDSTextFragment
    }
    formattedSubmissionDate
    reviewedOn
    userLocation
    expando {
      ...EGDSExpandoFragment
    }
  }

  ${ii.fragment}
  ${bt.fragment}
`,ni={blockstart:"two"},ri=(0,a.memo)(({expando:e,text:t})=>(0,T.jsx)(T.Fragment,{children:e?(0,T.jsx)(d.N,{margin:ni,children:(0,T.jsx)(ii,{expandoPeekLines:4,data:e,children:(0,T.jsx)(f.D,{overflow:"wrap",size:300,children:t})})}):(0,T.jsx)(d.N,{margin:ni,children:(0,T.jsx)(f.D,{size:300,children:t})})}));ri.displayName="ReviewCommentsWrapper";const li=({className:e,headingSize:t,headingTag:i,data:a})=>{const{author:n,overallScoreMessage:r,reviewedOn:l,formattedSubmissionDate:s,formattedActivityDate:o,userLocation:c,text:g,expando:u}=a;return(0,T.jsxs)("div",{className:e,children:[r&&(0,T.jsx)(bt,{data:r,headingSize:t,headingTag:i}),n&&(0,T.jsx)(d.N,{margin:ni,children:(0,T.jsx)(m.M,{tag:"h3",size:6,children:n})}),l&&(0,T.jsx)(f.D,{size:300,children:l}),s&&(0,T.jsx)(f.D,{size:300,children:s}),c&&(0,T.jsx)(f.D,{size:300,children:c}),(0,T.jsx)(ri,{expando:u,text:g}),o&&(0,T.jsx)(d.N,{margin:ni,children:(0,T.jsx)(f.D,{size:200,children:o})})]})};li.displayName="ActivityReviewsCommentList",li.fragment=ai;const si=n.J1`
  fragment ActivityReviewsSortTabFragment on ActivityTabbedNavigationBar {
    heading
    tabs {
      label
      selected
      clickAction {
        ...ActivityClickActionsFragment
      }
    }
  }

  ${Lt}
`,oi={block:"two"},ci=({className:e,data:t,onClick:i})=>{const{heading:n,tabs:r}=t,[l,s]=(0,a.useState)(r.findIndex(e=>e.selected)),o=(0,k.KY)();if(!r.length)return null;return(0,T.jsxs)("div",{className:e,children:[n&&(0,T.jsx)(m.M,{tag:"h3",size:6,children:n}),(0,T.jsx)(d.N,{margin:oi,children:(0,T.jsx)(ie.IN,{onTabSelect:e=>{var t;const a=null===(t=r[e])||void 0===t?void 0:t.clickAction,n=a?Rt(a,o):null;i(null==n?void 0:n.selectedTabAction),s(e)},selectedTab:l,tabsType:ie.Ah.NATURAL,role:"tablist",withBorder:!0,children:r.map(e=>{var t,i;return(0,T.jsx)(te.X,{name:e.label,targetURI:"#",tabLinkAttr:{"aria-label":null!==(t=null===(i=e.clickAction)||void 0===i?void 0:i.accessibilityText)&&void 0!==t?t:""}},e.label)})})})]})};ci.displayName="ActivityReviewsSortTab",ci.fragment=si;const di=n.J1`
  fragment ActivityReviewsSummaryFragment on ActivityReviewsSummary {
    averageScore {
      ...EGDSTextFragment
    }
    disclaimer {
      ...ActivityDisclaimerDialogFragment
    }
    sectionRef
    reviewSuperlative {
      size
      ...ActivitiesEGDSStylizedTextFragment
    }
  }

  ${bt.fragment}
  ${Pt.fragment}
  ${vt.fragment}
`,gi={inlinestart:"two",blockstart:"one"},mi={blockstart:"one"},ui=({className:e,data:t,dialogIdSuffix:i,headingSize:a,headingTag:n})=>{const{averageScore:r,disclaimer:l,sectionRef:s,reviewSuperlative:o}=t,{size:c}=o||{};return"ActivityReviews"===i&&r&&"EGDSStylizedText"===r.__typename?(()=>{const{textSize:t}=r;return(0,T.jsx)("div",{className:e,id:null!=s?s:void 0,children:(0,T.jsxs)(M.X,{wrap:"wrap",direction:"column",children:[(0,T.jsx)(bt,{data:r,textSize:Number(t),tabIndex:-1}),o&&(0,T.jsx)(d.N,{margin:mi,children:(0,T.jsx)(vt,{data:o,size:Number(c)})}),l&&(0,T.jsx)(z.C,{children:(0,T.jsx)(d.N,{margin:mi,children:(0,T.jsx)(Pt,{data:l,dialogIdSuffix:i})})})]})})})():(0,T.jsx)("div",{className:e,id:null!=s?s:void 0,children:(0,T.jsxs)(M.X,{children:[(0,T.jsx)(z.C,{children:(0,T.jsx)(bt,{data:r,headingSize:a,headingTag:n,tabIndex:-1})}),l&&(0,T.jsx)(z.C,{children:(0,T.jsx)(d.N,{margin:gi,children:(0,T.jsx)(Pt,{data:l,dialogIdSuffix:i})})})]})})};ui.displayName="ActivityReviewsSummary",ui.fragment=di;const fi=n.J1`
  fragment ActivityReviewsMoreButtonFragment on ActivityReviewsPaginationButton {
    action {
      ...ActivityClickActionsFragment
    }
    button {
      ...EGDSButtonFragment
    }
  }

  ${Lt}
  ${Nt.fragment}
`,pi=({data:e,fetchMoreAction:t})=>{const{action:i,button:n}=e,r=(0,k.KY)();return(0,T.jsx)(R.y,{"data-stid":"more-reviews-button",onClick:(0,a.useCallback)(()=>{const e=Rt(i,r);t(null==e?void 0:e.paginatedIndex)},[t]),children:n.primary})};pi.displayName="ActivityReviewsMoreButton",pi.fragment=fi;const yi=n.J1`
  fragment ActivityReviewsDialogContentFragment on ActivityReviewListComponent {
    comments {
      ...ActivityReviewsCommentFragment
    }
    summary {
      ...ActivityReviewsSummaryFragment
    }
    sortTabs {
      ...ActivityReviewsSortTabFragment
    }
    moreButton {
      ...ActivityReviewsMoreButtonFragment
    }
  }

  ${li.fragment}
  ${ui.fragment}
  ${ci.fragment}
  ${pi.fragment}
`,xi={small:{inline:"three",block:"twelve"},large:{inline:"twelve",block:"twelve"}},hi={large:["1fr","2fr"]},vi={blockstart:"six"},Di=({data:e,fetchMoreAction:t,handleSortTabClick:i})=>{const{summary:n,comments:r,sortTabs:s,moreButton:m}=e,u=(0,a.useRef)(),f=function(){const e=(0,q.zy)();return(0,a.useMemo)(()=>new URLSearchParams(e.search),[e.search])}(),p=function(){const e=(0,q.Zp)(),t=(0,q.zy)();return(0,a.useCallback)(i=>{const a=new URLSearchParams(t.search);a.delete(i),e(`${t.pathname}?${a}`,{replace:!0})},[e,t])}(),y=void 0!==f?f.get("reviewId"):null;return(0,a.useEffect)(()=>{if(y){var e;const t=window.matchMedia("(prefers-reduced-motion: reduce)").matches;null===(e=u.current)||void 0===e||e.scrollIntoView({behavior:t?"auto":"smooth",block:"start"}),p("reviewId")}},[y]),n&&r.length?(0,T.jsx)(l.g,{children:(0,T.jsx)(d.N,{padding:xi,children:(0,T.jsxs)(o.w,{columns:hi,space:"six",children:[(0,T.jsx)(c.T,{children:(0,T.jsx)(ui,{data:n,dialogIdSuffix:"ActivityReviews",headingSize:5})}),(0,T.jsx)(c.T,{children:(0,T.jsxs)("div",{children:[s&&(0,T.jsx)(ci,{data:s,onClick:i},"sortTabs"),r.map((e,t)=>(0,T.jsxs)("div",{ref:t===Number(y)?u:null,children:[(0,T.jsx)(li,{data:e},`review-comment-${t}`),(0,T.jsx)(g.j,{blockMargin:"six"})]},t)),m&&(0,T.jsx)(d.N,{padding:vi,children:(0,T.jsx)(M.X,{justifyContent:"center",children:(0,T.jsx)(pi,{fetchMoreAction:t,data:m})})})]},"commentsSection")})]})})}):null};Di.displayName="ActivityReviewsDialogContent",Di.fragment=yi;const Si=(0,a.createContext)(void 0);const Ai=n.J1`
  fragment ActivityReviewCommentsDialogFragment on ActivityReviewCommentsDialog {
    dialog {
      closeAnalytics {
        linkName
        referrerId
      }
      toolbar {
        ...EGDSDialogToolbarFragment
      }
    }
    trigger {
      ...ActivityDialogTriggerFragment
    }
  }

  ${be.fragment}
  ${Ft.fragment}
`,ji=({reviewsDialogContent:e,onMoreReviewsClickHandler:t,onSortTabClickHandler:i,dialogId:n,openDialogCallBackHandler:r,productReviewDetailsInputs:l,data:{dialog:s,trigger:o}})=>{var c;const{closeAnalytics:d,toolbar:g}=s,m=(0,k.KY)(),u=`ActivityReviewCommentsDialog-${n}`,f=`ProductReviewCommentsDialog-${n}`,p=1===(0,W.useExperiment)("LX_Unified_Reviews_Test",!0).exposure.bucket,[y,x,v]=(0,A.useDialog)(u,"nestedReviewCommentsDialog"),[S,j,E]=(0,A.useDialog)(f,"nestedReviewCommentsDialog"),b=null===(c=(0,a.useContext)(Si)||null)||void 0===c?void 0:c.ActivityReviewsContent,N=(0,a.useRef)(null),F=(0,a.useRef)(null),G=()=>{d&&m(d.referrerId,d.linkName),j.closeDialog(),x.closeDialog()},C=l&&(0,T.jsx)(Q.Ub,{isDialogOpen:S,triggerRef:N,scrollRef:F,DialogComponent:E,inputs:l,children:(0,T.jsx)(be,{data:g,toolbarAction:G,toolbarType:"close"})});return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(M.X,{children:(0,T.jsx)(Ft,{openDialog:()=>{p&&l?j.openDialog():x.openDialog(),r&&r()},data:o,domRef:N})}),p&&C?C:(0,T.jsx)(D.K,{isVisible:y,children:(0,T.jsx)(v,{children:(0,T.jsxs)(h.t,{type:"full",isVisible:y,returnFocusOnClose:!0,triggerRef:N,children:[(0,T.jsx)(be,{data:g,toolbarAction:G,toolbarType:"close"}),(0,T.jsx)(I.h,{children:e&&t&&i?(0,T.jsx)(Di,{fetchMoreAction:t,handleSortTabClick:i,data:e}):b&&(0,T.jsx)(b,{})})]})})})]})};ji.displayName="ActivityReviewCommentsDialog",ji.fragment=Ai;const Ei={hotel:ae.lL.HOTEL,people:ae.lL.PEOPLE,activity:ae.lL.ACTIVITY,focal:ae.lL.FOCAL},Ti=n.J1`
  fragment ActivityMapPlaceCardFragment on ActivityMapPlaceCard {
    image {
      description
      url
    }
    primary {
      ...EGDSTextFragment
    }
    secondaries {
      ...EGDSTextFragment
    }
    tag {
      ...EGDSTextFragment
    }
  }

  ${bt.fragment}
`,bi=["1fr","3fr"],ki=["1fr"],Ni=({className:e,data:t})=>{if(!t)return null;const{image:i,primary:a,secondaries:n,tag:r}=t;return(0,T.jsx)(D.K,{isVisible:!0,children:(0,T.jsx)(h.t,{className:e,isVisible:!0,triggerRef:null,children:(0,T.jsxs)(o.w,{columns:i?bi:ki,children:[i&&(0,T.jsx)(c.T,{children:(0,T.jsx)($.M,{ratio:$.l.R16_9,children:(0,T.jsx)(w.F,{alt:i.description,src:i.url,placeholderImage:!0})})}),(0,T.jsx)(c.T,{children:(0,T.jsx)(d.N,{padding:"three",children:(0,T.jsxs)(M.X,{direction:"column",space:"one",children:[r&&(0,T.jsx)(z.C,{children:(0,T.jsx)(bt,{data:r})}),a&&(0,T.jsx)(z.C,{children:(0,T.jsx)(bt,{data:a})}),null==n?void 0:n.map((e,t)=>(0,T.jsx)(z.C,{children:(0,T.jsx)(bt,{data:e})},`map-place-card-secondaries${t}`))]})})})]})})})};Ni.fragment=Ti,Ni.displayName="ActivityMapPlaceCard";const Ii=n.J1`
  fragment MapMarkersFragment on ActivityMapMarker {
    markerType
    markerIconType
    markerStatus
    markerPosition {
      latitude
      longitude
    }
    text
    placeCard {
      ...ActivityMapPlaceCardFragment
    }
  }

  ${Ni.fragment}
`,Fi=n.J1`
  fragment ActivityMapFragment on ActivityMap {
    __typename
    egMap {
      center {
        latitude
        longitude
      }
      config {
        ...EGDSDynamicMapConfigFragment
      }
    }
    markers {
      ...MapMarkersFragment
    }
  }

  ${n.J1`
  fragment EGDSDynamicMapConfigFragment on EGDSDynamicMapConfig {
    accessToken
    egdsMapProvider
  }
`}
  ${Ii}
`,Gi=({data:e,dynamicMapSize:t})=>{var i;const{egMap:n,markers:r}=e,{config:l}=n,[,s]=(0,a.useState)(null),[o,c]=(0,a.useState)(null),d="EGDSDynamicMapConfig"===l.__typename?l.accessToken:"",g=r.map((e,t)=>((e,t)=>{const{markerStatus:i,markerIconType:a,markerPosition:n,placeCard:r,markerType:l,text:s}=e,o={id:t,qualifiers:(c=a,c.map(e=>Ei[e]||Ei.hotel)),lat:n.latitude,lng:n.longitude,thumbnail:null==r?void 0:r.image};var c;switch(l){case"property":case"product":return Oe({type:"product",status:i.toLowerCase(),price:s},o);default:return Oe({type:"place",status:"unknown",text:s},o)}})(e,t)),m=g.filter(e=>void 0!==e.lat&&void 0!==e.lng).map(e=>({lat:e.lat||0,lng:e.lng||0})),u=(0,a.useCallback)(e=>{const{action:t,feature:i}=e;switch(t){case"clearSelection":s(null),c(null);break;case"select":var a;s(i),c(null===(a=r[i.id])||void 0===a?void 0:a.placeCard)}},[r]),f=(0,a.useCallback)(e=>{e.addSelectionChangeListener(u,"selectionChanged")},[u]),p={useBoundsComputation:!0,coordinates:m.length>0?m:void 0},y=(0,a.useMemo)(()=>({markers:{product:{markerType:{available:"pin"}}}}),[]),x=null===(i=(0,re.I)())||void 0===i?void 0:i.version;return(0,T.jsx)(ne.T,{accessToken:d,mapType:ae.Nw.GOOGLE,mapTypeVersion:x,features:g,height:t,initialViewport:p,beforeInit:f,mapConfig:y,children:o&&(0,T.jsx)(Ni,{data:o})})};Gi.fragment=Fi,Gi.displayName="ActivityMap";const Ci=n.J1`
  fragment ActivityLocationMapDialogFragment on ActivityLocationMapDialog {
    dialog {
      closeAnalytics {
        linkName
        referrerId
      }
      toolbar {
        ...EGDSDialogToolbarFragment
      }
    }
    trigger {
      ...ActivityDialogTriggerFragment
    }
    dynamicMap {
      ...ActivityMapFragment
    }
  }

  ${be.fragment}

  ${Gi.fragment}
  ${Ft.fragment}
`,Li=({data:{dialog:e,trigger:t,dynamicMap:i}})=>{const{closeAnalytics:n,toolbar:r}=e,l=(0,k.KY)(),[s,o,c]=(0,A.useDialog)(`activity-map-${(0,S.D4)()}`,"nestedActivityMapDialog"),d=(0,a.useRef)(null);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Ft,{openDialog:o.openDialog,data:t,domRef:d}),(0,T.jsx)(D.K,{isVisible:s,children:(0,T.jsx)(c,{children:(0,T.jsxs)(h.t,{type:"full",isVisible:s,returnFocusOnClose:!0,triggerRef:d,children:[(0,T.jsx)(be,{data:r,toolbarAction:()=>{n&&l(n.referrerId,n.linkName),o.closeDialog()},toolbarType:"close"}),(0,T.jsx)(Gi,{data:i})]})})})]})};Li.displayName="ActivityLocationMapDialog",Li.fragment=Ci;const Ri=n.J1`
  fragment SignInActivityActionDialogFragment on EGDSActionDialog {
    closeAnalytics {
      referrerId
      linkName
    }
    footer {
      ... on EGDSStackedDialogFooter {
        buttons {
          ... on EGDSOverlayButton {
            __typename
          }
        }
      }
      ... on EGDSInlineDialogFooter {
        buttons {
          ... on UIPrimaryButton {
            accessibility
            primary
            disabled
            action {
              ... on UILinkAction {
                resource {
                  value
                }
                analytics {
                  linkName
                  referrerId
                }
              }
            }
          }
          ... on UITertiaryButton {
            accessibility
            primary
            action {
              ... on UILinkAction {
                resource {
                  value
                }
              }
            }
            disabled
          }
        }
      }
    }
  }
`,Oi=({data:e,actionsCallback:t,closeDialog:i,content:n,title:r,graphic:l})=>{const s=(0,k.KY)(),{footer:{buttons:d}}=e;(0,a.createRef)();const g=()=>{i()},[f,p,y]=d.map(e=>{if("UIPrimaryButton"===e.__typename){const{primary:t}=e;return{text:t,type:"primary",onClick:()=>{var t,i,a;return"UILinkAction"===(null===(t=e.action)||void 0===t?void 0:t.__typename)?(i=e.action.resource.value,a=e.action.analytics,window.location.replace(i),void s(a.referrerId,a.linkName)):g()}}}const{primary:t}=e;return{text:t,type:"tertiary",onClick:()=>g()}});return(0,T.jsx)(N.Q,{dialogShow:!0,returnFocusOnClose:!0,children:(0,T.jsxs)(I.h,{children:[(0,T.jsxs)(o.w,{columns:["0.8fr","8fr"],space:"one",justifyContent:"start",children:[(0,T.jsx)(c.T,{justifySelf:"start",children:(0,T.jsx)("div",{children:l&&(0,T.jsx)(qe,{data:l})})}),(0,T.jsx)(c.T,{justifySelf:"start",children:(0,T.jsxs)("div",{children:[(0,T.jsx)(m.M,{size:5,children:r}),(0,T.jsx)(u.u,{size:2,children:n},"dialogParagraph")]})})]}),(0,T.jsx)(F.l,{stacked:!1,buttonOne:f,buttonTwo:p})]})})};Oi.fragment=Ri,Oi.displayName="SignInActivityActionDialog";const Pi=n.J1`
  fragment SignInActivityDialogFragment on EGDSDialog {
    ...SignInActivityActionDialogFragment
  }
  ${Oi.fragment}
`,$i=({data:e,title:t,dialogId:i,dialogContent:a,handleActionsCallback:n,graphic:r})=>{const[l,s,o]=(0,A.useDialog)(i);return a?(0,T.jsx)("div",{"data-stid":i,children:(0,T.jsx)(D.K,{isVisible:!0,children:(0,T.jsx)(o,{children:(0,T.jsx)(Oi,{data:e,content:a,closeDialog:()=>{s.closeDialog()},title:t,actionsCallback:n,graphic:r})})})}):null};$i.fragment=Pi,$i.displayName="SignInActivityDialog";let wi=function(e){return e.SELECTED="SELECTED",e.UNSELECTED="UNSELECTED",e}({}),_i=function(e){return e.FLIGHT_CAR="FLIGHT_CAR",e.FLIGHT_HOTEL="FLIGHT_HOTEL",e.FLIGHT_HOTEL_CAR="FLIGHT_HOTEL_CAR",e.HOTEL_ACTIVITY="HOTEL_ACTIVITY",e.HOTEL_CAR="HOTEL_CAR",e}({}),Mi=function(e){return e.ATTACH="ATTACH",e.PACKAGE="PACKAGE",e.STANDALONE="STANDALONE",e}({});const zi=n.J1`
  fragment ActivityOfferMultiSelectionOptionFragment on ActivityOfferMultiSelectionOption {
    selections {
      value
      label
      theme
      analytics {
        linkName
        referrerId
      }
    }
    id
    title
    dialog {
      closeAnalytics {
        linkName
        referrerId
      }
      toolbar {
        closeText
        title
      }
    }
    heading {
      ...EGDSHeadingFragment
    }
    doneButton {
      primary
      action {
        analytics {
          linkName
          referrerId
        }
      }
    }
  }

  ${Be.fragment}
`,Hi={blockend:"two"},Bi=({data:e,doneClickHandler:t,closeDialog:i,triggerRef:n,viewportType:r})=>{var l,s,o;const c=(0,k.KY)(),{heading:g,doneButton:m,selections:u,id:f,dialog:p,title:y}=e,x=null!==(l=null==u||null===(s=u.find(e=>e.theme===wi.SELECTED))||void 0===s?void 0:s.value)&&void 0!==l?l:null==u||null===(o=u[0])||void 0===o?void 0:o.value,[D,S]=(0,a.useState)({id:f,value:null!=x?x:""});if(null===u)return null;return(0,T.jsxs)(h.t,{type:r,isVisible:!0,returnFocusOnClose:!0,triggerRef:n,children:[(0,T.jsx)(be,{toolbarType:"close",toolbarAction:()=>{p.closeAnalytics&&c(p.closeAnalytics.referrerId,p.closeAnalytics.linkName),i()},data:p.toolbar}),(0,T.jsxs)(v.Y,{children:[g&&(0,T.jsx)(d.N,{margin:Hi,children:(0,T.jsx)(Be,{size:6,data:g})}),(0,T.jsx)(X.S,{group:`${f} for ${y}`,onChange:e=>{const{value:t}=e.target,i=null==u?void 0:u.find(e=>e.value===t);S({id:f,value:t}),(null==i?void 0:i.analytics)&&c(i.analytics.referrerId,i.analytics.linkName)},selected:D.value,children:u.map((e,t)=>(0,T.jsx)(V.P,{id:`offer-language-time-radio-${t}`,value:e.value,children:e.label},`offer-language-time-radio-${t}`))}),(0,T.jsx)(d.N,{margin:{blockstart:"six"},children:(0,T.jsx)(L.t,{size:G.V.LARGE,onClick:()=>{var e,a,n;(null===(e=m.action)||void 0===e?void 0:e.analytics)&&c(null===(a=m.action)||void 0===a?void 0:a.analytics.referrerId,null===(n=m.action)||void 0===n?void 0:n.analytics.linkName);t(D),i()},children:m.primary})})]})]})};Bi.displayName="ActivityOfferMultiSelectionOption",Bi.fragment=zi;const Ui=n.J1`
  fragment ActivityOfferSelectionDialogFragment on ActivityOfferMultiSelectionOption {
    trigger {
      ...ActivityDialogTriggerFragment
    }
    ...ActivityOfferMultiSelectionOptionFragment
  }

  ${Ft.fragment}
  ${Bi.fragment}
`;let Ji=function(e){return e.FULL_SCREEN="full",e.CENTERED="centered",e}({});const Yi=({data:e,selectionIndex:t,doneClickHandler:i,offerId:n})=>{const[r,l,s]=(0,A.useDialog)(`activity-selection-dialog-${t}-${n}`,"nestedSelectionDialog"),o=(0,a.useRef)(null),c=t=>(0,T.jsx)(Bi,{closeDialog:l.closeDialog,doneClickHandler:i,data:e,viewportType:t,triggerRef:o});return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Ft,{openDialog:l.openDialog,data:e.trigger,domRef:o}),(0,T.jsx)(D.K,{isVisible:r,children:(0,T.jsx)(s,{children:(0,T.jsxs)(K.LM,{children:[(0,T.jsx)(K.NP,{children:c(Ji.FULL_SCREEN)}),(0,T.jsx)(K.rw,{children:c(Ji.CENTERED)})]})})})]})};Yi.displayName="ActivityOfferSelectionDialog",Yi.fragment=Ui;const Ki=n.J1`
  fragment ActivityOfferSingleSelectionOptionFragment on ActivityOfferSingleSelectionOption {
    title
    graphic {
      ...EGDSGraphicFragment
    }
  }

  ${qe.fragment}
`,Vi={blockstart:"three"},Xi=({data:e})=>{const{graphic:t,title:i}=e;return(0,T.jsx)(d.N,{padding:Vi,children:(0,T.jsxs)(M.X,{space:"one",children:[t&&(0,T.jsx)(qe,{data:t}),(0,T.jsx)(f.D,{size:300,children:i})]})})};Xi.displayName="ActivityOfferSingleSelectionOption",Xi.fragment=Ki;const Wi=n.J1`
  fragment OfferClickActionFragment on ActivityAnchoredMessage {
    accessibilityText
    icon {
      ...EGDSGraphicFragment
    }
    text
    clickAction {
      __typename
      ... on ActivityPopupClickAction {
        analytics {
          linkName
          referrerId
        }
        title
        messages
        dismissAction {
          ... on ActivityMessagingAction {
            rfrr
            text
          }
        }
      }
    }
  }

  ${qe.fragment}
`,Qi=({data:e,dialogKey:t})=>{var i;const[n,r,l]=(0,A.useDialog)(`offer-feature-${t}`,"nestedOfferFeatureDialog"),s=(0,k.KY)(),o=(0,a.useCallback)(()=>{var t,i;r.closeDialog(),"ActivityPopupClickAction"===(null===(t=e.clickAction)||void 0===t?void 0:t.__typename)&&(null===(i=e.clickAction.dismissAction)||void 0===i?void 0:i.rfrr)&&e.clickAction.dismissAction.text&&s(e.clickAction.dismissAction.rfrr,e.clickAction.dismissAction.text)},[r,e.clickAction,s]),c=(0,a.useCallback)(()=>{var t;r.openDialog(),"ActivityPopupClickAction"===(null===(t=e.clickAction)||void 0===t?void 0:t.__typename)&&e.clickAction.analytics&&s(e.clickAction.analytics.referrerId,e.clickAction.analytics.linkName)},[r,e.clickAction,s]);var d;return"ActivityPopupClickAction"===(null===(i=e.clickAction)||void 0===i?void 0:i.__typename)?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(H.i,{children:(0,T.jsxs)("button",{type:"button",onClick:c,children:[e.text,e.icon&&(0,T.jsx)(qe,{data:e.icon}),(0,T.jsx)("span",{className:"is-visually-hidden",children:e.accessibilityText})]})}),(0,T.jsx)(D.K,{isVisible:n,children:(0,T.jsx)(l,{children:(0,T.jsx)(N.Q,{dialogShow:n,returnFocusOnClose:!0,children:(0,T.jsxs)(I.h,{children:[e.clickAction.messages.map((e,t)=>(0,T.jsx)(f.D,{inline:!0,size:200,children:e},`message-${t}`)),(null===(d=e.clickAction.dismissAction)||void 0===d?void 0:d.text)&&(0,T.jsx)(F.l,{buttonOne:{onClick:o,text:e.clickAction.dismissAction.text,type:"tertiary"}},"footer")]})})})})]}):null};Qi.fragment=Wi,Qi.displayName="OfferClickAction";const qi=n.J1`
  fragment OfferFeatureFragment on ActivityIcon {
    icon {
      ...EGDSGraphicFragment
    }
    mark {
      ...EGDSGraphicFragment
    }
    label
    anchoredSubtext {
      ...OfferClickActionFragment
    }
  }

  ${qe.fragment}
  ${Qi.fragment}
`,Zi={inlinestart:"two"},ea={block:"one"},ta=({data:e,dialogKey:t})=>{const{icon:i,label:a,anchoredSubtext:n,mark:r}=e;return(0,T.jsx)(d.N,{padding:ea,children:(0,T.jsxs)(M.X,{space:"one",children:[i.id&&(0,T.jsx)(qe,{data:i}),r&&(0,T.jsx)(qe,{data:r}),(0,T.jsx)(f.D,{size:200,children:(0,T.jsx)(p.Q,{children:(0,T.jsx)("span",{dangerouslySetInnerHTML:{__html:a}})})}),n&&(0,T.jsx)(z.C,{children:(0,T.jsx)(d.N,{padding:Zi,children:(0,T.jsx)("div",{children:(0,T.jsx)(Qi,{data:n,dialogKey:t})})})})]})})};ta.fragment=qi,ta.displayName="OfferFeature";const ia=n.J1`
  fragment EGDSPriceLockupFragment on EGDSPriceLockup {
    isPointsFirst
    accessibilityPrice
    accessibilityStrikeThroughDialogTrigger
    leadingCaption
    lockupFormattedPoints
    lockupPrice
    priceSubtextFirst
    priceSubtextStandard
    strikeThroughPrice
  }
`,aa=({className:e,align:t,openStrikeThroughDialog:i,data:a,isStrikeThroughFirst:n,triggerRef:r})=>{const{accessibilityPrice:l,accessibilityStrikeThroughDialogTrigger:s,leadingCaption:o,lockupFormattedPoints:c,lockupPrice:d,priceSubtextFirst:g,priceSubtextStandard:m,strikeThroughPrice:u,isPointsFirst:f}=a;return(0,T.jsx)(le.dZ,{align:t,isPointsFirst:null!=f&&f,a11yPrice:l,className:e,lockupFormattedPoints:null!=c?c:void 0,lockupPrice:null!=d?d:void 0,leadingCaption:null!=o?o:void 0,priceSubtextFirst:[...g||[]],priceSubtextStandard:[...m||[]],strikeThroughPrice:null!=u?u:void 0,a11yStrikeThroughDialogTrigger:null!=s?s:void 0,strikeThroughTrigger:!!i&&(0,T.jsx)("button",{ref:r,onClick:i,type:"button",className:"uitk-more-info-trigger"}),isStrikeThroughFirst:n})};aa.displayName="ActivitiesEGDSPriceLockup",aa.fragment=ia;const na={[le.A$.LEFT]:"left",[le.A$.RIGHT]:"right"},ra=n.J1`
  fragment ActivityPriceDisplayFragment on ActivityPriceDisplay {
    header {
      ...EGDSTextFragment
    }
    footer {
      ...EGDSTextFragment
    }
    priceLockup {
      ...EGDSPriceLockupFragment
    }
    disclaimer {
      contents {
        ...EGDSTextFragment
      }
      dialog {
        closeAnalytics {
          linkName
          referrerId
        }
        footer {
          buttons {
            primary
            accessibility
            disabled
          }
        }
      }
      trigger {
        analytics {
          linkName
          referrerId
        }
      }
    }
  }

  ${bt.fragment}
  ${aa.fragment}
`,la={blockstart:"one"},sa={blockstart:"one"},oa={blockstart:"one"},ca=({className:e,data:t,align:i,isStrikeThroughFirst:n})=>{var r,l;const{priceLockup:s,header:o,footer:c,disclaimer:g}=t,m=(0,k.KY)(),[u,f,p]=(0,A.useDialog)(`activity-price-disclaimer-${(0,S.D4)()}`,"priceDisclaimeriDialog"),y=(0,a.useRef)(null);return s&&(0,T.jsxs)("section",{className:e,children:[(null==o?void 0:o.length)&&o.map((e,t)=>(0,T.jsx)(d.N,{margin:la,children:(0,T.jsx)(bt,{textAlign:i&&na[i],textSize:200,data:e})},`activity-price-info-header-${t}`)),(0,T.jsx)(d.N,{margin:sa,children:(0,T.jsx)(aa,{openStrikeThroughDialog:g?()=>{f.openDialog(),"ActivityGraphicDialogTrigger"===(null==g?void 0:g.trigger.__typename)&&m(g.trigger.analytics.referrerId,g.trigger.analytics.linkName)}:void 0,align:i,data:s,isStrikeThroughFirst:n,triggerRef:y})}),(null==c?void 0:c.length)&&c.map((e,t)=>(0,T.jsx)(d.N,{margin:oa,children:(0,T.jsx)(bt,{textAlign:i&&na[i],textSize:200,data:e})},`activity-price-info-header-${t}`)),g&&(0,T.jsx)(D.K,{isVisible:u,children:(0,T.jsx)(p,{children:(0,T.jsx)(N.Q,{dialogShow:u,returnFocusOnClose:!0,triggerRef:y,children:(0,T.jsxs)(I.h,{children:[g.contents.map((e,t)=>(0,T.jsx)(bt,{data:e},`activity-price-disclaimer-contents-${t}`)),(0,T.jsx)(F.l,{buttonOne:{onClick:()=>{f.closeDialog(),(null==g?void 0:g.dialog.closeAnalytics)&&m(g.dialog.closeAnalytics.referrerId,g.dialog.closeAnalytics.linkName)},text:null!==(r=null===(l=g.dialog.footer.buttons[0])||void 0===l?void 0:l.primary)&&void 0!==r?r:"",type:"tertiary"}})]})})})})]})};ca.displayName="ActivityPriceDisplay",ca.fragment=ra;const da={DEAL_BUNDLED:se._.DEAL_BUNDLED,DEAL_GENERIC:se._.DEAL_GENERIC,DEAL_MEMBER:se._.DEAL_MEMBER,NOTIFICATION_1:se._.NOTIFICATION_1,NOTIFICATION_2:se._.NOTIFICATION_2,VIP:se._.VIP,LOYALTY_HIGH_TIER:se._.LOYALTY_HIGH_TIER,LOYALTY_MIDDLE_TIER:se._.LOYALTY_MIDDLE_TIER,LOYALTY_LOW_TIER:se._.LOYALTY_LOW_TIER,SPONSORED:se._.SPONSORED,VIEWED:se._.VIEWED,SAVED:se._.SAVED,FAMILY_FRIENDLY:se._.FAMILY_FRIENDLY,SUPPLIER_PROMO:se._.SUPPLIER_PROMO},ga={GLOBAL_LOW_TIER:de.zJ.GLOBAL_LOW},ma={EMPHASIS:ge.mc.EMPHASIS},ua=n.J1`
  fragment EGDSStandardBadgeFragment on EGDSStandardBadge {
    accessibility
    graphic {
      ...EGDSGraphicFragment
    }
    text
    theme
  }

  ${qe.fragment}
`,fa=({className:e,size:t,data:i})=>{const{graphic:a,text:n,theme:r}=i;return n?r&&ma[r]?(0,T.jsx)(oe.G,{className:e,size:t,theme:ma[r],text:n,children:a&&(0,T.jsx)(qe,{data:a})}):r&&ga[r]?(0,T.jsx)(ce.V,{className:e,size:t,theme:ga[r],text:n,children:a&&(0,T.jsx)(qe,{data:a})}):(0,T.jsx)(se.p,{className:e,size:t,theme:r?da[r]:void 0,text:n,children:a&&(0,T.jsx)(qe,{data:a})}):null};fa.fragment=ua,fa.displayName="EGDSStandardBadge";const pa=n.J1`
  fragment ActivitiesEGDSBadgeFragment on EGDSBadge {
    ...EGDSStandardBadgeFragment
  }

  ${fa.fragment}
`,ya=({className:e,size:t,data:i})=>"EGDSStandardBadge"===i.__typename?(0,T.jsx)(fa,{className:e,size:t,data:i}):null;ya.fragment=pa,ya.displayName="ActivitiesEGDSBadge";const xa=n.J1`
  fragment ActivityOfferPriceDetailsFragment on ActivityOfferPriceDetails {
    totalTitle
    lineItems {
      accessibility
      strikeThroughPrice
      lockupPrice
      priceBreakdown
    }
    badge {
      ...ActivitiesEGDSBadgeFragment
    }
    priceDisplay {
      ...ActivityPriceDisplayFragment
    }
  }

  ${ya.fragment}
  ${ca.fragment}
`,ha={blockstart:"six"},va={blockstart:"two"},Da=({data:e})=>{const{totalTitle:t,lineItems:i,badge:a,priceDisplay:n}=e,r=1===(0,W.useExperiment)("Optimising_LX_XSELL_Package_UDP",!0).exposure.bucket?"regular":"medium";return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(d.N,{margin:ha,children:(0,T.jsxs)(M.X,{direction:"column",children:[i.map(({accessibility:e,strikeThroughPrice:t,priceBreakdown:i,lockupPrice:a})=>(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("span",{className:"is-visually-hidden",children:e}),(0,T.jsxs)(M.X,{direction:"row",space:"two",children:[(0,T.jsx)(z.C,{alignSelf:"start",children:(0,T.jsx)("del",{children:(0,T.jsx)(f.D,{size:300,weight:r,children:t})})}),(0,T.jsx)(z.C,{alignSelf:"start",grow:2,children:(0,T.jsx)(f.D,{size:300,weight:r,children:i})}),(0,T.jsx)(z.C,{alignSelf:"end",children:(0,T.jsx)(f.D,{size:300,weight:r,children:a})})]})]})),(0,T.jsx)(g.j,{})]})}),(0,T.jsxs)(M.X,{space:"two",wrap:"wrap",children:[(0,T.jsx)(z.C,{grow:1,children:(0,T.jsx)(f.D,{weight:"bold",size:400,children:t})}),(0,T.jsx)(z.C,{children:(0,T.jsx)(M.X,{direction:"column",children:(0,T.jsx)(ca,{data:n,align:le.A$.RIGHT})})})]}),a&&(0,T.jsx)(d.N,{margin:va,children:(0,T.jsx)(M.X,{justifyContent:"end",children:(0,T.jsx)(z.C,{children:(0,T.jsx)(ya,{data:a})})})})]})};Da.fragment=xa,Da.displayName="OfferTicketPriceSection";const Sa=n.J1`
  fragment TripUpdateButtonsFragment on ActivityTripUpdateButtons {
    addToTrip {
      ...EGDSButtonFragment
    }
    removeFromTrip {
      ...EGDSButtonFragment
    }
    updateTrip {
      ...EGDSButtonFragment
    }
  }

  ${Nt.fragment}
`,Aa={blockstart:"six"},ja={block:"three"},Ea={blockstart:"six",blockend:"three"},Ta=({data:e,onTripClickHandler:t})=>{const{addToTrip:i,removeFromTrip:n,updateTrip:r}=e,l=(0,a.useCallback)(async()=>{i&&await t(i.action)},[i,t]),s=(0,a.useCallback)(async()=>{n&&await t(n.action)},[n,t]),o=(0,a.useCallback)(async()=>{r&&await t(r.action)},[r,t]);return(0,T.jsxs)(T.Fragment,{children:[i&&(0,T.jsx)(d.N,{margin:Ea,children:(0,T.jsx)("div",{children:(0,T.jsx)(Nt,{isFullWidth:!0,data:i,onClickHandler:l})})}),r&&(0,T.jsx)(d.N,{margin:Aa,children:(0,T.jsx)("div",{children:(0,T.jsx)(Nt,{isFullWidth:!0,data:r,onClickHandler:o})})}),n&&(0,T.jsx)(d.N,{margin:ja,children:(0,T.jsx)("div",{children:(0,T.jsx)(Nt,{isFullWidth:!0,data:n,onClickHandler:s})})})]})};Ta.fragment=Sa,Ta.displayName="TripUpdateButtons";const ba=n.J1`
  fragment OfferCardFragment on ActivityOffer {
    name
    id
    availableTime {
      day
      month
      year
    }
    features {
      ...OfferFeatureFragment
    }
    priceDetails {
      ...ActivityOfferPriceDetailsFragment
    }
    tripUpdateButtons {
      ...TripUpdateButtonsFragment
    }
    description
    travelerSelectorDialog {
      ...ActivityTravelerSelectorDialogFragment
    }
    selections {
      ... on ActivityOfferMultiSelectionOption {
        ...ActivityOfferSelectionDialogFragment
      }
      ... on ActivityOfferSingleSelectionOption {
        ...ActivityOfferSingleSelectionOptionFragment
      }
    }
    activityOfferMessages {
      removeSelectedOffer {
        ...EGDSTextFragment
      }
      oneKeyEarnPointsMessage {
        ...EGDSTextFragment
      }
    }
  }
  ${ta.fragment}
  ${Da.fragment}
  ${Nt.fragment}
  ${bt.fragment}
  ${Ta.fragment}
  ${Mt.fragment}
  ${Yi.fragment}
  ${Xi.fragment}
`,ka=n.J1`
  query ActivityFiltersCrossSellOfferLazyQuery(
    $context: ContextInput!
    $activityId: String!
    $dateRange: ActivityDateRangeInput
    $offerId: String!
    $filter: ActivityOfferFilterInput!
    $shoppingPath: ShoppingPathType
    $selectedOffers: [ActivityOfferNaturalKeyInput!]
    $packageType: PackageType
  ) {
    activityInfo(
      context: $context
      activityId: $activityId
      dateRange: $dateRange
      shoppingPath: $shoppingPath
      selectedOffers: $selectedOffers
      packageType: $packageType
    ) {
      offer(offerId: $offerId, filter: $filter) {
        ...OfferCardFragment
      }
    }
  }

  ${ba}
`,Na={blockstart:"three"},Ia={blockstart:"half"},Fa={inline:"three",block:"six"},Ga=({data:e,onTripClickHandler:t,variables:i,dialogKey:r})=>{var s;const[u,y]=(0,a.useState)(e),[x]=(0,n._l)(ka,{onCompleted:e=>{y(e.activityInfo.offer)}}),[h,v]=(0,a.useState)(),[D,S]=(0,a.useState)(),{id:A,name:j,description:E,features:b,priceDetails:k,tripUpdateButtons:N,travelerSelectorDialog:I,availableTime:F,activityOfferMessages:G}=u,C=null==G?void 0:G.removeSelectedOffer,L=null==G?void 0:G.oneKeyEarnPointsMessage,R={startDate:{day:F.day,month:F.month,year:F.year},endDate:{day:F.day,month:F.month,year:F.year}};(0,a.useMemo)(()=>{var e;v(I.ticketsStepInput.map(e=>{var t;return{code:null!==(t=e.key)&&void 0!==t?t:"",count:e.value}})),S(null==u||null===(e=u.selections)||void 0===e?void 0:e.reduce((e,t)=>{if("ActivityOfferMultiSelectionOption"===t.__typename){var i,a,n;const r=null!==(i=null===(a=t.selections)||void 0===a||null===(a=a.find(e=>"SELECTED"===e.theme))||void 0===a?void 0:a.value)&&void 0!==i?i:null===(n=t.selections)||void 0===n||null===(n=n[0])||void 0===n?void 0:n.value;e.push({id:t.id,value:null!=r?r:""})}return e},[]))},[I,null==u?void 0:u.selections]),(0,a.useEffect)(()=>{y(e)},[e]);const O=e=>{var t;const a=null!==(t=null==D?void 0:D.findIndex(t=>t.id===e.id))&&void 0!==t?t:0;D&&(D[a]=e,S(D)),x({variables:Oe(Oe({},i),{},{dateRange:R,offerId:A,filter:{selections:D,tickets:h}})})};return(0,T.jsx)(d.N,{margin:Fa,children:(0,T.jsx)(l.g,{border:!0,padded:!0,children:(0,T.jsx)(o.w,{children:(0,T.jsx)(c.T,{children:(0,T.jsxs)("div",{children:[(0,T.jsx)(m.M,{tag:"h3",size:5,children:j}),b.map((e,t)=>(0,T.jsx)(ta,{data:e,dialogKey:`${r}-${t}`},`offer-feature-${t}`)),E&&(0,T.jsx)(p.Q,{elementsToReplace:{p:e=>(0,T.jsx)(f.D,Oe(Oe({},e),{},{spacing:"three",size:200,children:e.children||null})),li:e=>(0,T.jsx)(f.D,Oe(Oe({},e),{},{spacing:"three",size:200,children:e.children}))},htmlToParse:E}),(0,T.jsx)(g.j,{}),(0,T.jsx)(d.N,{margin:Ia,children:(0,T.jsx)(Mt,{doneClickHandler:e=>{x({variables:Oe(Oe({},i),{},{dateRange:R,offerId:A,filter:{tickets:e,selections:D}})})},data:I})}),null===(s=u.selections)||void 0===s?void 0:s.map((e,t)=>{switch(e.__typename){case"ActivityOfferMultiSelectionOption":return(0,T.jsx)(d.N,{margin:Na,children:(0,T.jsx)("div",{children:(0,T.jsx)(Yi,{data:e,selectionIndex:t,doneClickHandler:O,offerId:A},`multi-offer-selection-${t}`)})});case"ActivityOfferSingleSelectionOption":return(0,T.jsx)(Xi,{data:e},`single-offer-selection-${t}`);default:return null}}),(0,T.jsx)(Da,{data:k}),L&&(0,T.jsx)(d.N,{padding:{blockstart:"two"},children:(0,T.jsx)(bt,{data:L})}),N&&(0,T.jsx)(Ta,{data:N,onTripClickHandler:t},`trip-update-button-${A}`),C&&(0,T.jsx)(d.N,{margin:Fa,children:(0,T.jsx)(bt,{headingSize:6,headingAlign:"center",data:C})})]})})})})})};Ga.fragment=ba,Ga.displayName="OfferCard";const Ca=n.J1`
  fragment OffersMessageFragment on ActivityOfferMessage {
    primary
    secondaries
  }
`,La={inline:"three",block:"six"},Ra={blockstart:"three"},Oa=({data:e})=>{const{primary:t,secondaries:i}=e;return(0,T.jsx)(d.N,{margin:La,children:(0,T.jsxs)("div",{children:[(0,T.jsx)(m.M,{size:6,tag:"h3",children:t}),null==i?void 0:i.map((e,t)=>(0,T.jsx)(d.N,{margin:Ra,children:(0,T.jsx)(f.D,{size:300,children:e})},`secondary-message-${t}`))]})})};function Pa(e,t){return(i,a)=>{const n={day:i.day,month:i.month,year:i.year};a(i),e(Oe(Oe({},t),{},{dateRange:{startDate:n,endDate:n}}))}}Oa.displayName="OffersMessage",Oa.fragment=Ca;const $a=({offersList:e,onTripClickHandler:t,dateRangeInputs:i,variables:a,refetch:n})=>{if(!e||!n||!a)return null;const{offers:r,offersMessage:l}=e.activityInfo;return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(d.N,{margin:{block:"six",inline:"three"},children:(0,T.jsx)("div",{children:(0,T.jsx)(me.u,{inputs:i,onClick:Pa(n,a)})})}),l&&(0,T.jsx)(Oa,{data:l}),r.map((e,i)=>(0,T.jsx)(Ga,{variables:a,data:e,onTripClickHandler:t,dialogKey:i},`offer-card-${i}`))]})},wa=()=>(0,T.jsx)(d.N,{margin:{block:"six",inline:"four"},children:(0,T.jsxs)(l.g,{padded:!1,children:[(0,T.jsx)(d.N,{margin:{block:"six",inline:"three"},children:(0,T.jsx)(ue.R,{type:"line",animation:!1})}),(0,T.jsx)(d.N,{margin:{blockend:"twelve",inline:"three"},children:(0,T.jsx)(ue.R,{type:"line",animation:!0,lineLength:"secondary"})})]})}),_a=()=>(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(wa,{}),(0,T.jsx)(wa,{})]}),Ma=n.J1`
  query ActivityCrossSellOffers(
    $context: ContextInput!
    $activityId: String!
    $dateRange: ActivityDateRangeInput
    $shoppingPath: ShoppingPathType
    $selectedOffers: [ActivityOfferNaturalKeyInput!]
    $packageType: PackageType
    $travelerDetails: [ActivityTravelerDetailsInput!]
  ) {
    activityInfo(
      context: $context
      activityId: $activityId
      dateRange: $dateRange
      shoppingPath: $shoppingPath
      selectedOffers: $selectedOffers
      packageType: $packageType
      travelerDetails: $travelerDetails
    ) {
      offers {
        ...OfferCardFragment
      }
      offersMessage {
        ...OffersMessageFragment
      }
    }
  }
  ${Ga.fragment}
  ${Oa.fragment}
`,za=e=>{const{inputs:t,skipSsr:i,onTripClickHandler:l}=e,{context:s}=(0,r.R)(),o=Oe(Oe({},t),{},{context:s}),{data:c,error:d,loading:g,refetch:m}=(0,n.IT)(Ma,{context:{shouldLogPerformance:!0},variables:o,ssr:!i});return(0,a.useEffect)(()=>{m(o)},[m,o.selectedOffers]),g?(0,T.jsx)(_a,{}):d||!c?null:(0,T.jsx)($a,{dateRangeInputs:t,variables:o,onTripClickHandler:l,offersList:c,refetch:m})};za.displayName="sharedui-CrossSellOffers"}}]);
//# sourceMappingURL=https://bernie-assets.s3.us-west-2.amazonaws.com/landing-pwa/shared-ui-retail-activities-cross-sell-offers.9b28f5e60b59168bb438.js.map