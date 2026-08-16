/*@license For license information please refer to shared-ui-retail-shopping-tools-egds-price-calendar.licenses.txt*/
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[4501],{99862:function(e,t,n){n.d(t,{D:function(){return Ne}});var i=n(96540),a=n(20181),r=n.n(a),l=n(63513),o=n(55009),s=n(66162),d=n(17065),c=n(39873),u=n(9210),g=n(66104),h=n(33998),m=n(82308),f=n(63912),D=n(5846),S=n(86047),v=n(33777),x=n(34183),p=n(65675),y=n(21317),C=n(716),E=n(20209),T=n(74848),j=n(10044),b=n(22868),I=n(74276),F=n(1270),M=n(58646),P=n(30230),N=n(4648);let A=function(e){return e.ONE_WAY="ONE_WAY",e.ROUND_TRIP="ROUND_TRIP",e.FLEX_DATE_ONE_WAY="OW",e.FLEX_DATE_ROUND_TRIP="RT",e}({});const L=e=>{const t=e?A.ROUND_TRIP:A.ONE_WAY,n=e?A.FLEX_DATE_ROUND_TRIP:A.FLEX_DATE_ONE_WAY;return{onChangeEndDate:{referrerId:`${t}_FC_onChangeEndDateCB`,linkName:"Returning date Change"},onChangeMonth:{referrerId:`${t}_FC_onChangeMonthCB`,linkName:"Month changed"},onChangeStartDate:{referrerId:`${t}_FC_onChangeStartDateCB`,linkName:"Departing date Change"},onOpen:{referrerId:`${t}_FC_onOpenCB`,linkName:"Open Date Picker"},onSubmit:{referrerId:`${t}_FC_onSubmitCB`,linkName:"Save Dates"},onDoneButton:{referrerId:"FLT.FareCalendar.Done",linkName:"Done Button Clicked"},onDismiss:{referrerId:`${t}_FC_onDismissCB`,linkName:"Close Date Picker"},onChangeFlexStartDate:(e,t)=>({referrerId:`FLT.${n}.FareCalendar.DateChange.OB.${J(V(e),V(t))}`,linkName:"Outbound Date Change"}),onChangeFlexEndDate:(e,t)=>({referrerId:`FLT.${n}.FareCalendar.DateChange.IB.${J(V(e),V(t))}`,linkName:"Inbound Date Change"})}},_={PRICE_CALENDAR_QUERY_ERROR:new u.EL(u.i5.ERROR,"PRICE_CALENDAR_QUERY_ERROR")},R=new Date,O=864e5,w=new Date(Date.now()+28512e6),G=e=>e.getMonth()===R.getMonth()&&e.getFullYear()===R.getFullYear(),$=(e,t)=>{var n,i;return"flights"===e?null==t||null===(n=t.flightsPriceCalendar)||void 0===n?void 0:n.disclaimerMoreInfo:null==t||null===(i=t.flightsPriceCalendar)||void 0===i?void 0:i.disclaimerMoreInfo},k=(e,t)=>{var n,i;return"flights"===e?null==t||null===(n=t.flightsPriceCalendar)||void 0===n?void 0:n.disclaimerText:null==t||null===(i=t.flightsPriceCalendar)||void 0===i?void 0:i.disclaimerText},z=(e,t)=>{var n;if("flights"===e)return null==t||null===(n=t.flightsPriceCalendar)||void 0===n?void 0:n.calendarPrices},U=(e,t)=>{const n={defaults:{dateText:{textWeight:"bold",textTheme:null,textValue:null,amountValue:null},analytics:{referrerId:"",linkName:""}}},i=z(e,t);return i&&i.forEach(e=>{var t,i;n[`${e.date}`]={dateText:{textWeight:e.theme?"bold":null,textTheme:null!==(t=null===(i=e.theme)||void 0===i?void 0:i.toLowerCase())&&void 0!==t?t:null,textValue:e.label,amountValue:e.amount},analytics:{referrerId:null==e?void 0:e.selectAnalytics.referrerId,linkName:null==e?void 0:e.selectAnalytics.linkName}}}),n},V=e=>e?new Date(`${e}T00:00:00`):new Date,B=e=>{const t=e.toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}).split("/");return`${t[2]}-${t[0]}-${t[1]}`},Y=(e,t)=>{const n=new Date(e.getFullYear(),e.getMonth(),e.getDate());return n.setDate(n.getDate()+t),n},J=(e,t)=>{const n=Math.floor((t.getTime()-e.getTime())/O);return n>0?`+${n}`:`${n}`},Q=(e,t,n,i)=>{let a=[{departureDate:{day:e.getDate(),month:e.getMonth()+1,year:e.getFullYear()},destination:n,origin:t}];return i&&(a=[{departureDate:{day:e.getDate(),month:e.getMonth()+1,year:e.getFullYear()},destination:n,origin:t},{departureDate:{day:i.getDate(),month:i.getMonth()+1,year:i.getFullYear()},destination:t,origin:n}]),a};let X=function(e){return e.DayData="dayData",e.IsPriceDisabled="isPriceDisabled",e.IsFirstQuery="isFirstQuery",e}({});const W=e=>e.locale?e.locale.replace("_","-"):"en-US",q={P1:1,P2:2,P3:3},H=E.J1`
  fragment EGDSParagraphFragment on EGDSParagraph {
    text
    style
  }
`,K=({className:e,data:t})=>{const{text:n,style:i}=t;return(0,T.jsx)(y.u,{className:e,size:q[i],children:n})};K.fragment=H,K.displayName="CalendarEGDSParagraph";const Z=E.J1`
  fragment ClientSideAnalyticsFragment on ClientSideAnalytics {
    linkName
    referrerId
  }
`;function ee(e){return ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ee(e)}function te(e){var t=function(e,t){if("object"!=ee(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=ee(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==ee(t)?t:t+""}function ne(e,t,n){return(t=te(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(n),!0).forEach(function(t){ne(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}const re=({id:e,sheetType:t,isVisible:n,content:a,onClose:r,useCloseButton:l=!0,footer:o,isNestedDialog:s=!1})=>{const d=l,[c,u,g]=(0,P.useDialog)(e,s?"pwaDialogNested":void 0,!0,r),h={type:t,isVisible:n,triggerRef:null,returnFocusOnClose:!0};return"centered"===t&&(h.centeredSheetSize="small"),(0,i.useEffect)(()=>{n&&!c?u.openDialog():!n&&c&&u.closeDialog()},[n]),c?(0,T.jsx)("div",{"data-test-id":"egds-sheet-wrapper-price-calendar",children:(0,T.jsx)(M.K,{isVisible:c,children:(0,T.jsx)(g,{children:(0,T.jsxs)(b.t,ae(ae({},h),{},{children:[(0,T.jsxs)(I.Y,{padded:!0,children:[a,o]}),d&&(0,T.jsx)(F.t,{children:(0,T.jsx)(v.q,{onClick:r,type:"button","data-stid":"egds-sheet-close-button",children:(0,T.jsx)(j.LD,{name:"close",size:j.So.MEDIUM,title:"Close Sheet",id:"sheet-close-button"})})})]}))})})}):null};re.displayName="EGDSSheetWrapper";const le=E.J1`
  fragment IconFragment on Icon {
    id
    title
    token
    description
    size
  }
`,oe={EXTRA_SMALL:j.So.EXTRA_SMALL,SMALL:j.So.SMALL,MEDIUM:j.So.MEDIUM,MEDIUM_LARGE:j.So.MEDIUM,LARGE:j.So.LARGE,XLARGE:j.So.XLARGE},se=e=>{const{data:t}=e,{id:n,title:i,description:a,size:r}=t,l=oe[null!=r?r:"LARGE"];return(0,T.jsx)(j.LD,{id:n,name:n,title:null!=i?i:a,description:a,size:l})};se.displayName="Icon",se.fragment=le;const de=E.J1`
  fragment EGDSSheetFragment on EGDSSheet {
    closeAccessibility
    closeAnalytics {
      ...ClientSideAnalyticsFragment
    }
    closeText
    sheetTypes {
      ...EGDSSheetTypePerViewSizeFragment
    }
    icon {
      ...IconFragment
    }
  }

  ${E.J1`
  fragment EGDSSheetTypePerViewSizeFragment on EGDSSheetTypePerViewSize {
    sheetType
    viewSize
  }
`}
  ${Z}
  ${se.fragment}
`,ce=({id:e,data:t,isVisible:n,content:a,useCloseButton:r,onClose:l,footer:o,showFooterOnSmall:s})=>{const{sheetTypes:d}=t,c=(0,i.useMemo)(()=>null==d?void 0:d.reduce((e,t)=>{const{viewSize:n,sheetType:i}=t,a=null==i?void 0:i.toLowerCase(),r=null!=n?n:"";return ae(ae({},e),{},{[r]:a||"side"})},{}),[d]),u=(0,i.useCallback)(t=>{const i=s||"SMALL"!==t;return(0,T.jsx)(re,{id:e,sheetType:null==c?void 0:c[t],isVisible:n,content:a,useCloseButton:r||"SMALL"===t,viewSize:t,onClose:l,footer:i?o:void 0,isNestedDialog:"SMALL"===t||"MEDIUM"===t})},[s,e,c,n,a,r,l,o]);return(0,T.jsxs)(f.LM,{children:[(0,T.jsx)(f.zQ,{children:u("LARGE")}),(0,T.jsx)(f.rw,{children:u("MEDIUM")}),(0,T.jsx)(f.NP,{children:u("SMALL")})]})};ce.displayName="EGDSSheet",ce.fragment=de;const ue=E.J1`
  fragment EGDSStylizedTextFragment on EGDSStylizedText {
    size
    text
    theme
    weight
  }
`,ge={EMPHASIS:"emphasis",LOYALTY:"loyalty",INVERSE:"inverse",NEGATIVE:"negative",POSITIVE:"positive",PRIMARY:"emphasis",SECONDARY:"default"},he={BOLD:"bold",MEDIUM:"medium",REGULAR:"regular"},me=({data:{text:e,weight:t,theme:n},size:i,inline:a,align:r})=>{const l=n?ge[n]:void 0;return(0,T.jsx)(C.D,{weight:t?he[t]:void 0,size:i,inline:a,theme:l,align:r,children:e})};me.fragment=ue,me.displayName="EGDSStylizedText";const fe=({data:e,disclaimerMoreInfo:t,isDefaultAlertMessage:n})=>{var a,r;const[l,o]=(0,i.useState)(!1),s=null==t?void 0:t.icon,d=null==t?void 0:t.triggerAction,c=(0,i.useCallback)(()=>{o(!0)},[o]),u=(0,i.useCallback)(()=>{o(!1)},[o]),v=null==t||null===(a=t.triggerAction)||void 0===a||null===(a=a.messages)||void 0===a?void 0:a.map((e,t)=>"EGDSParagraph"===e.__typename&&(0,T.jsx)(K,{data:e},t)),y=e.map((i,a)=>"string"==typeof i?(0,T.jsx)(h.C,{alignSelf:"center",children:(0,T.jsx)(C.D,{align:"center",size:100,weight:"regular",children:a===e.length-1&&t?(0,T.jsxs)(f.LM,{children:[(0,T.jsx)(f.NP,{children:(0,T.jsx)(p.t,{align:"center",size:"small",onClick:c,children:(0,T.jsx)(D.u,{size:x.EGDSButtonSize.SMALL,type:"button",children:n?(0,T.jsxs)("div",{children:[i,s&&(0,T.jsx)(se,{data:s})]}):(0,T.jsx)(g.X,{direction:"row",alignContent:"end",justifyContent:"center",children:(0,T.jsxs)("div",{children:[i,s&&(0,T.jsx)(se,{data:s})]})})})})}),(0,T.jsx)(f.zQ,{children:(0,T.jsx)(p.t,{align:"center",size:"small",onClick:c,children:(0,T.jsxs)(D.u,{size:x.EGDSButtonSize.SMALL,type:"button",children:[i,s&&(0,T.jsx)(se,{data:s})]})})})]}):i})},`disclaimer-${a}`):"EGDSStylizedText"===(null==i?void 0:i.__typename)?(0,T.jsx)(h.C,{alignSelf:"center",children:(0,T.jsx)(me,{data:i,size:200,align:"center"})},`alert-disclaimer-${a}`):null),E=(0,T.jsx)(m.N,{margin:{blockstart:"sixteen"},children:(0,T.jsx)(S.y,{onClick:u,children:null==d||null===(r=d.sheet)||void 0===r?void 0:r.closeText})});return(0,T.jsxs)(g.X,{direction:"row",alignContent:"end",justifyContent:"end",children:[(0,T.jsx)(g.X,{direction:"column",alignContent:"center",justifyContent:"center",children:y}),(null==d?void 0:d.sheet)&&(0,T.jsx)(ce,{id:"price-calendar-full-legal-disclaimer-sheet",content:v,isVisible:l,data:d.sheet,onClose:u,useCloseButton:!1,footer:E,showFooterOnSmall:!1})]})},De={padding:{blockend:"three"}},Se={padding:{blockend:"four"}},ve=({data:e,disclaimerMoreInfo:t,isDefaultAlertMessage:n})=>{if(!e||!e.length)return null;const i=(0,T.jsx)("div",{children:(0,T.jsx)(fe,{data:e,disclaimerMoreInfo:t,isDefaultAlertMessage:n})});return(0,T.jsx)(g.X,{justifyContent:"center",children:(0,T.jsx)(h.C,{children:(0,T.jsxs)(f.LM,{children:[(0,T.jsx)(f.NP,{children:(0,T.jsx)(m.N,{padding:De.padding,children:i})}),(0,T.jsx)(f.zQ,{children:(0,T.jsx)(m.N,{padding:Se.padding,children:i})})]})})})},xe=E.J1`
  fragment MarkFragment on Mark {
    description
    id
  }
`,pe=({data:e,className:t})=>(0,T.jsx)(N.D,{className:t,description:e.description,id:e.id,name:e.id});pe.displayName="Mark",pe.fragment=xe;const ye=E.J1`
  fragment UIGraphicFragment on UIGraphic {
    ... on Icon {
      ...IconFragment
    }

    ... on Mark {
      ...MarkFragment
    }
  }
  ${se.fragment}
  ${pe.fragment}
`,Ce=({data:e,markOptions:t})=>{switch(e.__typename){case"Icon":return(0,T.jsx)(se,{data:e});case"Mark":return(0,T.jsx)(pe,ae({data:e},t));default:return null}};Ce.displayName="UIGraphic",Ce.fragment=ye;const Ee=E.J1`
  fragment EGDSGraphicTextFragment on EGDSGraphicText {
    accessibility
    text
    graphic {
      ...UIGraphicFragment
    }
    trailingGraphics {
      ...UIGraphicFragment
    }
  }
  ${Ce.fragment}
`,Te=({inline:e,size:t,graphicSpacing:n,data:i})=>{const{accessibility:a,text:r,graphic:l,trailingGraphics:o}=i,s=a&&a.length>0,d=s?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("span",{"aria-hidden":s,children:r}),(0,T.jsx)("span",{className:"is-visually-hidden",children:a})]}):r;return(0,T.jsxs)(C.D,{inline:e,children:[(0,T.jsx)(m.N,{padding:null==n?void 0:n.padding,margin:null==n?void 0:n.margin,children:(0,T.jsx)(Ce,{data:l})}),(0,T.jsx)(m.N,{padding:{inline:"one"},children:(0,T.jsx)(C.D,{inline:!0,size:t,children:d})}),null==o?void 0:o.map((e,t)=>(0,T.jsx)(Ce,{data:e},`trailing-graphic-${t}`))]})};Te.displayName="EGDSGraphicText",Te.fragment=Ee;const je=E.J1`
  fragment EGDSMoreInfoTriggerFragment on EGDSMoreInfoTrigger {
    icon {
      ...IconFragment
    }
    text
    triggerAction {
      accessibility
      analytics {
        ...ClientSideAnalyticsFragment
      }
      sheet {
        ...EGDSSheetFragment
      }
      text
      messages {
        ...EGDSParagraphFragment
      }
    }
    analytics {
      ...ClientSideAnalyticsFragment
    }
    accessibility
  }

  ${K.fragment}
  ${ce.fragment}
  ${se.fragment}
  ${Z}
`,be=E.J1`
  query FlightsPriceCalendar(
    $context: ContextInput!
    $flightsSearchContext: FlightsSearchContextInput!
    $journeyCriteria: [FlightsJourneyCriteriaInput!]!
    $queryState: FlightsQueryState
    $searchFilterValuesList: [FlightsSearchFilterValuesInput!]
    $searchPreferences: FlightsSearchPreferencesInput
  ) {
    flightsPriceCalendar(
      context: $context
      flightsSearchContext: $flightsSearchContext
      journeyCriteria: $journeyCriteria
      queryState: $queryState
      searchFilterValuesList: $searchFilterValuesList
      searchPreferences: $searchPreferences
    ) {
      alertText {
        ...EGDSGraphicTextFragment
      }
      disclaimerText
      disclaimerMoreInfo {
        ...EGDSMoreInfoTriggerFragment
      }
      coverageAnalytics {
        linkName
        referrerId
      }
      calendarPrices {
        date
        label
        selectAnalytics {
          ...ClientSideAnalyticsFragment
        }
        amount
        theme
        weight
        alertText {
          ...EGDSStylizedTextFragment
        }
        disclaimerText
        additionalDisclaimerText
      }
      disablePrice
    }
  }

  ${me.fragment}
  ${Te.fragment}
  ${Z}
  ${je}
`,Ie=e=>{const{context:t}=(0,o.R)();return(0,E._l)(be,{ssr:!1,fetchPolicy:"cache-first",variables:ae({context:t},e)})},Fe=e=>{const{lobName:t,effectiveStartDate:n,effectiveEndDate:i,flightsSearchContext:a,origin:r,destination:l}=e;if("flights"===t)return{journeyCriteria:Q(n,r,l,i),flightsSearchContext:a}},Me=(e,t)=>{const n=(()=>{const e=new Date;return new Date(e.getFullYear(),e.getMonth(),e.getDate())})(),i=e<n?n:e;let a;return t&&(a=Y(i,14)),{effectiveStartDate:i,effectiveEndDate:a}},Pe=(e,t)=>{const[n,a]=(0,i.useState)(void 0),[r,l]=(0,i.useState)(void 0),[o,s]=(0,i.useState)(void 0),[d,c]=(0,i.useState)(!1),[g,h]=(0,i.useState)(!0),[m,f]=(0,i.useState)(!1),[D,{data:S,error:v}]=(e=>{if("flights"===e)return Ie})(e)(t),x=((e,t)=>{if("flights"===e)return(e=>{const{journeyCriteria:t,flightsSearchContext:n}=e;return{flightsSearchContext:n,origin:t[0].origin,destination:t[0].destination}})(t)})(e,t),p=(0,u.di)(_),y=(0,i.useRef)(0);(0,i.useEffect)(()=>{if(S){const i=((e,t)=>{const{disablePrice:n}=e.flightsPriceCalendar||{};return t&&n})(S,g)||m;if(!i){var t;const i=d?ae(ae({},U(e,S)),n):U(e,S),r=((e,t)=>{const n={defaults:{alertText:null,disclaimerText:k(e,t),additionalDisclaimerText:null,disclaimerMoreInfo:$(e,t)}},i=z(e,t);return i&&i.forEach(e=>{n[`${e.date}`]={alertText:null==e?void 0:e.alertText,disclaimerText:null==e?void 0:e.disclaimerText,additionalDisclaimerText:null==e?void 0:e.additionalDisclaimerText,disclaimerMoreInfo:null}}),n})(e,S);a(i),l(r),s(null===(t=S.flightsPriceCalendar)||void 0===t?void 0:t.coverageAnalytics)}g&&(h(!g),f(i))}v&&p.PRICE_CALENDAR_QUERY_ERROR.log({error:v,message:"Price Calendar Query Error"})},[S,e,v,y.current]);return[(n,i=!1,a=!1)=>{if(c(a),m)return;if(!((e,t)=>{if("flights"===e){const{journeyCriteria:e}=t;return!!((null==e?void 0:e.length)&&e[0].origin&&e[0].destination)}})(e,t))return;const{effectiveStartDate:r,effectiveEndDate:l}=Me(n,i);D({variables:Fe(ae({lobName:e,effectiveStartDate:r,effectiveEndDate:l},x))}),y.current+=1},n,e=>{((e,t)=>{e.forEach(e=>{t[e]&&t[e]()})})(e,{dayData:()=>a(void 0),isPriceDisabled:()=>f(!1),isFirstQuery:()=>h(!0)})},r,o]},Ne=({lobName:e,queryInputs:t,priceCalendarPassthroughProps:n})=>{var a;const{submitButtonLabel:u,initialStartDate:g,initialEndDate:h,dateLabel:m,dialogId:f,onOpen:D,onClose:S,onDateChange:v,onDoneButtonClick:x,enableSameDayDateRange:p,dateFormatOptions:y={month:"short",day:"numeric"},dayNameLength:C="narrow",showOffset:E=!1,hideFooter:j=!1,showPlayback:b=!0,autoPosition:I=!0,popoverPosition:F}=n,[M,P,N,A,_]=Pe(e,t),[R,O]=(0,i.useState)(g),[$,k]=(0,i.useState)(h),[z,U]=(0,i.useState)(!1),[J,Q]=(0,i.useState)(!1),[q,H]=(0,i.useState)([null==A||null===(a=A.defaults)||void 0===a?void 0:a.disclaimerText]),K=new Date,Z=(0,s.KY)(),ee=((e,t)=>{if("flights"===e)return"ROUND_TRIP"===t.flightsSearchContext.tripType})(e,t),{context:te}=(0,o.R)(),ne=(0,i.useRef)(null),ie=((e,t)=>L(t))(0,ee),[re,le]=(0,i.useState)(!1),[oe,se]=(0,i.useState)(!1),de=e=>{e&&Z(e.referrerId,e.linkName)};(0,i.useEffect)(()=>{O(g),k(h)},[g,h]),(0,d._H)(c.z,c.vZ,{onSuccess:({payload:e})=>{e.startDate&&O(e.startDate),e.endDate&&k(e.endDate)}}),(0,i.useEffect)(()=>{var e,t,n,i,a;if(se(!1),ee&&re&&R&&(null==A||null===(e=A[R])||void 0===e?void 0:e.additionalDisclaimerText))H([A[R].additionalDisclaimerText]);else if(ee&&!re&&J&&$&&(null==A||null===(t=A[$])||void 0===t?void 0:t.alertText)&&(null==A||null===(n=A[$])||void 0===n?void 0:n.disclaimerText))H([A[$].alertText,A[$].disclaimerText]);else if(!ee&&R&&z&&(null==A||null===(i=A[R])||void 0===i?void 0:i.alertText)&&(null==A||null===(a=A[R])||void 0===a?void 0:a.disclaimerText)){var r,l;H([null==A||null===(r=A[R])||void 0===r?void 0:r.alertText,null==A||null===(l=A[R])||void 0===l?void 0:l.disclaimerText])}else if((null==A?void 0:A[R])||ee||z){var o;se(!0),H([null==A||null===(o=A.defaults)||void 0===o?void 0:o.disclaimerText])}else H(q)},[R,$,ee,re,A]),(0,i.useEffect)(()=>{re&&M(V(R),!0,!1)},[re]);const ce=(0,i.useMemo)(()=>{var e;return{data:q,disclaimerMoreInfo:null==A||null===(e=A.defaults)||void 0===e?void 0:e.disclaimerMoreInfo,isDefaultAlertMessage:oe}},[q]),ue=({month:e,year:t},n)=>{const i=n&&K.getMonth()===e?K.getDate():1;re||M(new Date(t,e,i),!1,!1),de(ie.onChangeMonth)};(0,d._H)(c.Jm,c.ht,{onSuccess:()=>{var e;null===(e=ne.current)||void 0===e||e.click()}});const ge=r()(e=>{(null==P?void 0:P[B(e)])||re&&ee||M(e,!1,!0)},1e3);return(0,T.jsx)("div",{"data-testid":"egds-price-calendar",children:(0,T.jsx)(l.L,ae({},ae({locale:W(te),startDate:R,endDate:ee&&$?$:"",inputLabel1:m,dayNameLength:C,handleShape:"circle",dayData:P,onOpen:()=>{null==D||D();const e=V(R);G(e)?M(K,!1,!1):M(new Date(e.getFullYear(),e.getMonth(),1),!1,!1),de(ie.onOpen)},onNextClicked:({month:e,year:t})=>{ue({month:e,year:t},!1)},onPrevClicked:({month:e,year:t})=>{ue({month:e,year:t},!0)},onDateRangeChange:(e,t)=>{var n,i,a;const r=null!==(n=(null==P||null===(i=P[e])||void 0===i||null===(i=i.dateText)||void 0===i?void 0:i.amountValue)||(null==P||null===(a=P[e])||void 0===a||null===(a=a.dateText)||void 0===a?void 0:a.textValue))&&void 0!==n?n:void 0;if(t){var l,o,s;k(t),Q(t!==$);const n=null!==(l=(null==P||null===(o=P[t])||void 0===o||null===(o=o.dateText)||void 0===o?void 0:o.amountValue)||(null==P||null===(s=P[t])||void 0===s||null===(s=s.dateText)||void 0===s?void 0:s.textValue))&&void 0!==l?l:void 0;null==v||v(e,t,r,n),de(ie.onChangeFlexEndDate($||"",t)),de(ie.onChangeEndDate)}else if(ee){var d,c,u;M(V(e),!0,!1),O(e),U(e!==R);const t=p?e:B(Y(V(e),1));k(t);const n=null!==(d=(null==P||null===(c=P[t])||void 0===c||null===(c=c.dateText)||void 0===c?void 0:c.amountValue)||(null==P||null===(u=P[t])||void 0===u||null===(u=u.dateText)||void 0===u?void 0:u.textValue))&&void 0!==d?d:void 0;null==v||v(e,t,r,n),de(ie.onChangeFlexStartDate(R,e)),de(ie.onChangeStartDate)}else O(e),U(e!==R),k(""),null==v||v(e,"",r),de(ie.onChangeFlexStartDate(R,e)),de(ie.onChangeStartDate)},onClose:()=>{const e=R?V(R):new Date,t=$?V($):void 0;null==S||S(e,t),de(ie.onSubmit),de(ie.onDismiss),(null==_?void 0:_.referrerId)&&(null==_?void 0:_.linkName)&&Z(_.referrerId,_.linkName);const n=$||R;n&&(null==P?void 0:P[n])&&Z(P[n].analytics.referrerId,P[n].analytics.linkName),U(!1),Q(!1),N([X.DayData,X.IsPriceDisabled,X.IsFirstQuery])},onSubmit:(e,t)=>{const n=e?V(e):new Date,i=t?V(t):void 0;null==S||S(n,i,!1),de(ie.onDoneButton),null==x||x(n,i)},dateFormatOptions:y,alertTemplateData:ce,alertTemplateComponent:ve,useSingleTrigger:ee,isSingleDateSelection:!ee,enableSameDayDateRange:null!=p&&p,numMonthsToDisplay:2,maxDate:w,submitButtonLabel:u,allowClearDates:!1,dialogId:f,onScrollHandler:ge,onSelectionModeChange:e=>{le(e)},startDateRef:ne,showOffset:E,hideFooter:j,showPlayback:b,autoPosition:I},F?{popoverPosition:F}:{})))})};Ne.displayName="sharedui-EGDSPriceCalendar"}}]);
//# sourceMappingURL=https://bernie-assets.s3.us-west-2.amazonaws.com/landing-pwa/shared-ui-retail-shopping-tools-egds-price-calendar.eec1831eac23d95a5f5c.js.map