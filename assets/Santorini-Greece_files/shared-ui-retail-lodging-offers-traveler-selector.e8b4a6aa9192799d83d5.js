/*@license For license information please refer to shared-ui-retail-lodging-offers-traveler-selector.licenses.txt*/
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[4440],{45645:function(e,t,r){r.d(t,{FP:function(){return Ae}});var l=r(20209),n=r(55009),a=r(76167),o=r(96540),i=r(61764),s=r(20562),d=r(65845),c=r(15286),u=r(63912),m=r(74848),v=r(39196),g=r(22868),p=r(74276),h=r(58646),S=r(85361),E=r(716),T=r(28367),D=r(30230),f=r(66104),x=r(33998),_=r(82308),C=r(39128),R=r(55153),y=r(35784),I=r(53519),b=r(66162),N=r(8142),A=r.n(N),G=r(82652);const j={rooms:[{adults:2}]};let O=function(e){return e.ANONYMOUS="ANONYMOUS",e.AUTHENTICATED="AUTHENTICATED",e.IDENTIFIED="IDENTIFIED",e}({}),L=function(e){return e.CHECKED="CHECKED",e.INDETERMINATE="INDETERMINATE",e.UNCHECKED="UNCHECKED",e}({}),F=function(e){return e.CHILD_AGE_REQUIRED="CHILD_AGE_REQUIRED",e.EQUAL_ADULTS_BETWEEN_ROOMS="EQUAL_ADULTS_BETWEEN_ROOMS",e.GENERIC_INPUT_FIELD_ERROR="GENERIC_INPUT_FIELD_ERROR",e.MANY_INFANT_IN_SEAT="MANY_INFANT_IN_SEAT",e.MANY_INFANT_ON_LAP="MANY_INFANT_ON_LAP",e.MAX_ROOMS_WITH_CHILD="MAX_ROOMS_WITH_CHILD",e.MAX_TRAVELERS="MAX_TRAVELERS",e}({}),U=function(e){return e.FEW="FEW",e.MANY="MANY",e.ONE="ONE",e.OTHER="OTHER",e.TWO="TWO",e.ZERO="ZERO",e}({});function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function M(e){var t=function(e,t){if("object"!=k(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var l=r.call(e,t||"default");if("object"!=k(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==k(t)?t:t+""}function P(e,t,r){return(t=M(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,l)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach(function(t){P(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}const H=({inputs:e,triggerRef:t})=>{var r,l;const{formatText:a}=(0,c.useLocalization)(),s=(v=(null==e||null===(r=e.searchCriteria)||void 0===r||null===(r=r.primary)||void 0===r?void 0:r.rooms)||j.rooms||[],((0,o.useMemo)(()=>v.reduce((e,t)=>v&&v.length>0?e+((null==t?void 0:t.adults)||0):0,0),[v])+(0,o.useMemo)(()=>v.reduce((e,t)=>{var r;return v&&v.length>0?e+((null==t||null===(r=t.children)||void 0===r?void 0:r.length)||0):0},0),[v])).toString());var v;const{exposure:g}=(0,d.useExperiment)("mWeb_Big_Batch",!0),{context:p}=(0,n.R)(),h=(null==p||null===(l=p.identity)||void 0===l?void 0:l.authState)===O.ANONYMOUS,S={id:"rooms-travelers-field-id",label:a("hotels.search.form.travelers.label"),icon:"person",name:"adults",value:s};return(0,m.jsxs)(u.LM,{children:[(0,m.jsx)(u.NP,{children:h&&1===(null==g?void 0:g.bucket)?(0,m.jsx)(m.Fragment,{}):(0,m.jsx)(i.V,$($({},S),{},{domRef:t}))}),(0,m.jsx)(u.rw,{children:(0,m.jsx)(i.V,$($({},S),{},{domRef:t}))})]})};let V=function(e){return e.ADULTS="adults",e.CHILDREN="children",e}({});function w(e,t,r){return e.replace(`\${${t}}`,r)}const z=(e,t,r=!1)=>{var l;const n=null===(l=e[r?"secondaryTemplates":"templates"])||void 0===l?void 0:l.find(e=>e.category===(e=>0===e?U.ZERO:1===e?U.ONE:2===e?U.TWO:e>2&&e<5?U.FEW:e>=5&&e<10?U.MANY:U.OTHER)(t));return n&&e.models[0]?w(n.template,e.models[0].key,t.toString()):""},K=({rooms:e},t)=>{const r=e.reduce((e,t)=>{var r,l,n;return e+(null!==(r=t.adults)&&void 0!==r?r:0)+(null!==(l=null===(n=t.children)||void 0===n?void 0:n.length)&&void 0!==l?l:0)},0);return((e,...t)=>{const{models:r,template:l}=e,n=r.map((e,r)=>"EGDSCardinalLocalizedText"===e.models.__typename?z(e.models,(null==t?void 0:t[r])||0):"");return r.reduce((e,t,r)=>w(e,t.key,n[r]),l)})(t,e.length,r)},W=e=>e.some(e=>{var t;return null===(t=e.children)||void 0===t?void 0:t.some(e=>null===e.age||void 0===e.age)}),Y=(e,t)=>{switch(t.type){case"ADD_ROOM":return $($({},e),{},{rooms:e.rooms.concat([{adults:1}])});case"REMOVE_ROOM":{const{roomIndex:r}=t;return $($({},e),{},{rooms:e.rooms.filter((e,t)=>t!==r)})}case"UPDATE_ADULTS_COUNT":{const{roomIndex:r,count:l}=t;return $($({},e),{},{rooms:e.rooms.map((e,t)=>t===r?$($({},e),{},{adults:l}):e)})}case"UPDATE_CHILDREN_COUNT":{var r,l;const{roomIndex:n,count:a}=t,o=a>(null!==(r=null===(l=e.rooms[n])||void 0===l||null===(l=l.children)||void 0===l?void 0:l.length)&&void 0!==r?r:0);return $($({},e),{},{rooms:e.rooms.map((e,t)=>{var r,l;return t===n?$($({},e),{},{children:o?(null===(r=e.children)||void 0===r?void 0:r.concat([{age:null}]))||[{age:null}]:null===(l=e.children)||void 0===l?void 0:l.slice(0,-1)}):e})})}case"UPDATE_CHILD_AGE":{const{roomIndex:r,childIndex:l,childAge:n}=t,a=$($({},e),{},{rooms:e.rooms.map((e,t)=>{var a;return r===t?$($({},e),{},{children:null===(a=e.children)||void 0===a?void 0:a.map((e,t)=>l===t?{age:n}:e)}):e})});return $($({},a),{},{error:W(a.rooms)?e.error:null})}case"SHOW_ERROR":return $($({},e),{},{error:{type:"CHILD_AGE_REQUIRED",message:t.errorMessage||"Please select age for all children",displayConfirmation:!0}});default:return e}},J=(0,o.createContext)(()=>{}),X=()=>(0,o.useContext)(J),Z=J.Provider,Q=(e,t,r)=>{const l=X(),n=(0,b.KY)(),{increaseAnalytics:a=null,decreaseAnalytics:i=null}="EGDSTravelerStepInput"===e.__typename?e:{};return(0,o.useCallback)((e,o)=>{const s=o===V.ADULTS?"UPDATE_ADULTS_COUNT":"UPDATE_CHILDREN_COUNT",d=parseInt(e.target.value,10);Number.isNaN(d)||(l({type:s,count:d,roomIndex:t}),a&&i&&(d>r?n(a.referrerId,a.linkName):n(i.referrerId,i.linkName)))},[t,a,i,r])},q=l.J1`
  fragment EGDSTravelerChildrenFragment on EGDSTraveler {
    count {
      ...EGDSTravelerStepInputFragment
    }
    ... on EGDSTravelerChildren {
      ages {
        ...EGDSTravelerChildAgeSelectFragment
      }
      ageTemplate {
        ...EGDSTravelerChildAgeSelectFragment
      }
    }
  }

  ${R.PsZ.fragment}
  ${R.IoU.fragment}
`,ee=({data:e,room:t,roomIndex:r,totalTravelers:l,isUnderGuestLimit:n,error:a})=>{const{buildOnChange:o,onSelectChange:i,ageTemplate:s,children:d,childMax:c}=((e,t,r,l,n)=>{const{count:a}=e,{ageTemplate:o=null}="EGDSTravelerChildren"===e.__typename?e:{},{children:i=null}=t||{},s=(null==i?void 0:i.length)||0,d=X(),c=(0,b.KY)(),u=Q(a,r,s),m=a.max||0,v=((null==i?void 0:i.length)||0)+14-l,g=n?null!=m?m:v:s;return{buildOnChange:u,onSelectChange:(e,t,l)=>{const n=parseInt(e.target.value,10);Number.isNaN(n)||(d({type:"UPDATE_CHILD_AGE",roomIndex:r,childIndex:t,childAge:n}),c(l.referrerId,l.linkName))},ageTemplate:"EGDSTravelerChildAgeSelect"===(null==o?void 0:o.__typename)?o:null,children:i,childMax:g}})(e,t,r,l,n),u="CHILD_AGE_REQUIRED"===(null==a?void 0:a.type)&&(null==a?void 0:a.displayConfirmation);if(!e||"EGDSTravelerChildren"!==e.__typename||!s)return null;const{count:v}=e;return(0,m.jsx)(_.N,{padding:{blockstart:"two"},children:(0,m.jsxs)("div",{children:["EGDSTravelerStepInput"===v.__typename&&(0,m.jsx)(R.PsZ,{data:v,onChange:o,value:(null==d?void 0:d.length)||0,customMax:c,travelerType:V.CHILDREN}),d&&(null==d?void 0:d.length)>0&&(0,m.jsx)(_.N,{padding:{blockstart:"two"},children:(0,m.jsx)(y.w,{space:"two",columns:(null==d?void 0:d.length)>1?2:1,children:null==d?void 0:d.map(({age:e},t)=>(0,m.jsx)("div",{children:(0,m.jsx)(R.IoU,{name:`child-${r}-${t}`,customValue:null!=e?e.toString():"",onSelect:i,childIndex:t,data:s,showError:u,errorMessage:null==a?void 0:a.message})},t))})})]})})};ee.displayName="EGDSTravelerChildren",ee.fragment=q;const te=l.J1`
  fragment EGDSTravelerSelectorRoomFragment on EGDSTravelerSelectorRoom {
    label {
      ... on EGDSBasicLocalizedText {
        models {
          key
          source
        }
        template
      }
    }
    adults {
      ...EGDSTravelerStepInputFragment
    }
    children {
      ...EGDSTravelerChildrenFragment
    }
    removeRoomButton {
      ...LodgingEGDSButtonFragment
    }
    removeRoomAnnouncement
  }
  ${R.PsZ.fragment}
  ${ee.fragment}
  ${R.E_b.fragment}
`,re=({data:e,roomIndex:t,room:r,focusAddRoomButton:l,headerRef:n,totalTravelers:a,totalRooms:i,isUnderGuestLimit:s,error:d})=>{const{adults:c,children:u,removeRoomButton:v}=e,{buildOnChange:g,onRemoveRoom:p,roomsLength:h,roomTitle:S,roomAdults:E,adultMax:T,isLastRoom:D}=((e,t,r,l,n,a)=>{var i,s;const{adults:d,label:c,removeRoomAnnouncement:u}=n,{adults:m}=e||{},v=X(),g=Q(d,t,m||1),p=(0,o.useRef)(r),h=t+1,S=p.current===h,E=l?null!==(i=d.max)&&void 0!==i?i:14:m,T="EGDSBasicLocalizedText"===c.__typename&&1===(null===(s=c.models)||void 0===s?void 0:s.length)&&w(c.template,c.models[0].key,h.toString());return{buildOnChange:g,onRemoveRoom:(0,o.useCallback)(()=>{u&&(0,I.liveAnnounce)(u),a&&a(),v({type:"REMOVE_ROOM",roomIndex:t})},[u,a,t]),roomsLength:p,roomTitle:T,roomAdults:m,adultMax:E,isLastRoom:S}})(r,t,i,s,e,l);return(0,m.jsx)(_.N,{padding:{block:"three"},margin:{block:"three"},border:["blockend"],children:(0,m.jsxs)("div",{children:[S&&(0,m.jsx)("h3",{tabIndex:-1,className:"uitk-type-200 uitk-type-medium",ref:D?n:null,children:S}),"EGDSTravelerStepInput"===c.__typename&&(0,m.jsx)(_.N,{padding:{blockstart:"two"},children:(0,m.jsx)("div",{children:(0,m.jsx)(R.PsZ,{data:c,onChange:g,value:E||1,customMax:T,travelerType:V.ADULTS})})}),(0,m.jsx)(ee,{data:u,room:r,roomIndex:t,totalTravelers:a,isUnderGuestLimit:s,error:d}),0!==t&&i>1&&v&&"UITertiaryButton"===v.__typename&&(0,m.jsx)(_.N,{padding:{blockstart:"four"},children:(0,m.jsx)(f.X,{justifyContent:"end",children:(0,m.jsx)(x.C,{children:(0,m.jsx)(R.E_b,{onClick:p,data:v})})})})]})},`room-${h.current}-${t}`)};re.displayName="EGDSTravelerSelectorRoom",re.fragment=te;const le=()=>{(0,I.liveAnnounce)("",I.Level.ASSERTIVE)},ne=(e,t,r,l,n,a)=>{const{addAnotherRoomButton:i,maxRoomCount:s,validations:d}=e,c=(0,o.useRef)(null),u=(0,o.useRef)(null),m=(0,o.useCallback)(()=>{if(le(),W(t.rooms)){const e=null==d?void 0:d.find(e=>"EGDSTravelersInputValidation"===e.__typename&&"CHILD_AGE_REQUIRED"===e.type);return void r({type:"SHOW_ERROR",errorMessage:"EGDSTravelersInputValidation"===(null==e?void 0:e.__typename)?e.errorMessage:"Please select age for all children"})}const e=t.rooms.map(e=>{var t;return{adults:e.adults,children:null===(t=e.children)||void 0===t?void 0:t.filter(e=>null!==e.age&&void 0!==e.age).map(e=>({age:e.age}))}});null==n||n(t),null==l||l(e),null==a||a()},[t,l,n,a,r,d]),v=(0,o.useCallback)(()=>{r({type:"ADD_ROOM"})},[]),g=(0,o.useCallback)(()=>{var e;null===(e=c.current)||void 0===e||e.focus()},[c]),p=(0,o.useCallback)(()=>{var e;"function"==typeof(null==u||null===(e=u.current)||void 0===e?void 0:e.focus)&&u.current.focus()},[u]);(0,o.useEffect)(()=>{i&&p()},[t.rooms.length,i]);const h=(0,o.useMemo)(()=>(e=>{var t;const r=null==e?void 0:e.map(e=>{if("EGDSTravelersInputValidation"===e.__typename){const{maxCount:t}=e;return{[F.MAX_TRAVELERS]:t}[F.MAX_TRAVELERS]}return null}).filter(e=>null!==e);return r&&1!==r.length?20:null!==(t=null==r?void 0:r.at(0))&&void 0!==t?t:20})(d),[d]),S=(0,o.useMemo)(()=>t.rooms.reduce((e,t)=>{var r;return e+t.adults+((null===(r=t.children)||void 0===r?void 0:r.length)||0)},0),[t.rooms]),E=S<h;return{onSubmit:m,onAddRoom:v,focusAddRoomButton:g,addNewRoomButton:$($({},i),{},{disabled:!!s&&(t.rooms.length>=s||!E)}),addRoomRef:c,lastRoomHeaderRef:u,totalTravelers:S,isUnderGuestLimit:E}},ae=l.J1`
  fragment EGDSRoomsTravelerSelectorFragment on EGDSRoomsTravelerSelector {
    addAnotherRoomButton {
      ...LodgingEGDSButtonFragment
    }
    closeButton {
      ...LodgingEGDSButtonFragment
    }
    doneButton {
      ...LodgingEGDSButtonFragment
    }
    title
    maxRoomCount
    rooms {
      ...EGDSTravelerSelectorRoomFragment
    }
    validations {
      ... on EGDSTravelersInputValidation {
        type
        maxCount
        errorMessage
      }
    }
  }
  ${R.E_b.fragment}
  ${re.fragment}
`,oe=({data:e,handleSubmit:t,updateInputValue:r,triggerRef:l,closeDialog:n})=>{const{closeButton:a,doneButton:i,title:s,rooms:d}=e,{state:c,dispatch:u}=(e=>{const[t,r]=(0,o.useReducer)(Y,e?{rooms:(null==e?void 0:e.map(e=>{return{adults:e.adults.value,children:(t=e.children,"EGDSTravelerChildren"===t.__typename?t.ages.map(e=>({age:"EGDSTravelerChildAgeSelect"===e.__typename?e.value:0})):[])};var t}))||[]}:j);return{state:t,dispatch:r}})(d),v=((e,t)=>{var r;const l=(0,b.KY)(),{__typename:n,analytics:a}=e;return{onClick:(0,o.useCallback)(()=>{le(),null==t||t(),a&&l(a.referrerId,a.linkName)},[a]),navType:"close",navIconLabel:"UIPrimaryButton"!==n&&"UITertiaryButton"!==n||null===(r=e.accessibility)||void 0===r?"":r}})(a,n),{onSubmit:p,onAddRoom:h,focusAddRoomButton:S,addNewRoomButton:E,addRoomRef:T,lastRoomHeaderRef:D,totalTravelers:y,isUnderGuestLimit:I}=ne(e,c,u,t,r,n),N=d[0];return c.rooms.length<1||!N?null:(0,m.jsx)(Z,{value:u,children:(0,m.jsxs)(g.t,{isVisible:!0,type:"centered",centeredSheetSize:"small",triggerRef:l,ariaLabel:null!=s?s:"",children:[(0,m.jsx)(C.p,{toolbarTitle:s||"",navigationContent:v}),(0,m.jsx)(_.N,{className:"uitk-scroll-vertical",padding:{inline:"four",blockstart:"half",blockend:"three"},children:(0,m.jsx)("div",{children:(0,m.jsx)(f.X,{direction:"column",children:(0,m.jsxs)("section",{children:[c.rooms.map((e,t)=>(0,m.jsx)(re,{data:N,roomIndex:t,focusAddRoomButton:S,room:e,headerRef:D,isUnderGuestLimit:I,totalTravelers:y,totalRooms:c.rooms.length,error:c.error},t)),E&&(0,m.jsx)(_.N,{padding:{blockstart:"four",blockend:"twelve"},children:(0,m.jsx)(f.X,{justifyContent:"end",children:(0,m.jsx)(x.C,{children:(0,m.jsx)(R.E_b,{onClick:h,data:E,domRef:T})})})}),(0,m.jsx)(R.E_b,{onClick:p,data:i,isFullWidth:!0})]})})})})]})})};oe.displayName="EGDSRoomsTravelerSelector",oe.fragment=ae;const ie=l.J1`
  fragment EGDSOpenRoomsTravelerSelectorActionFragment on EGDSOpenTravelerSelectorAction {
    travelerSelector {
      ... on EGDSRoomsTravelerSelector {
        ...EGDSRoomsTravelerSelectorFragment
      }
    }
    analytics {
      linkName
      referrerId
    }
  }
  ${oe.fragment}
`,se=({data:e,handleSubmit:t,updateInputValue:r,triggerRef:l,closeDialog:n})=>{const{travelerSelector:a}=e;return e&&a&&"EGDSRoomsTravelerSelector"===a.__typename?(0,m.jsx)(oe,{handleSubmit:t,data:a,triggerRef:l,updateInputValue:r,closeDialog:n}):null};se.displayName="EGDSOpenRoomsTravelerSelectorAction",se.fragment=ie;const de=(e,t)=>{switch(t.type){case"UPDATE_ADULTS_COUNT":{const{count:r}=t;return $($({},e),{},{adults:r})}case"UPDATE_CHILDREN_COUNT":{var r,l,n;const{count:a}=t,o=a>((null===(r=e.children)||void 0===r?void 0:r.length)||0);return $($({},e),{},{children:o?(null===(l=e.children)||void 0===l?void 0:l.concat([{age:0}]))||[{age:0}]:null===(n=e.children)||void 0===n?void 0:n.slice(0,-1)})}case"UPDATE_CHILD_AGE":{var a;const{childIndex:r,childAge:l}=t;return $($({},e),{},{children:null===(a=e.children)||void 0===a?void 0:a.map((e,t)=>r===t?{age:l}:e)})}case"INCLUDE_PETS":return $($({},e),{},{petsIncluded:!0});case"EXCLUDE_PETS":return $($({},e),{},{petsIncluded:!1});case"RESET_STATE":return t.payload;default:return e}},ce=(0,o.createContext)(()=>{}),ue=ce.Provider,me=l.J1`
  fragment TemplateModelFragment on TemplateModel {
    key
    source
  }
`,ve=l.J1`
  fragment EGDSLocalizedTextFragment on EGDSLocalizedText {
    ...EGDSBasicLocalizedTextFragment
    ...EGDSCardinalLocalizedTextFragment
    ...EGDSCompositeLocalizedTextFragment
  }
  ${l.J1`
  fragment EGDSBasicLocalizedTextFragment on EGDSBasicLocalizedText {
    template
    models {
      ...TemplateModelFragment
    }
  }
  ${me}
`}
  ${l.J1`
  fragment EGDSCardinalLocalizedTextFragment on EGDSCardinalLocalizedText {
    egdsElementId
    text
    models {
      ...TemplateModelFragment
    }
    templates {
      ...CardinalTemplateFragment
    }
  }
  fragment CardinalTemplateFragment on CardinalTemplate {
    template
    category
  }
  ${me}
`}
  ${l.J1`
  fragment EGDSCompositeLocalizedTextFragment on EGDSCompositeLocalizedText {
    egdsElementId
    text
    template
    models {
      ...CompositeLocalizedTextModelFragment
    }
  }
  fragment CompositeLocalizedTextModelFragment on CompositeLocalizedTextModel {
    key
    models {
      ...EGDSTemplateModelsFragment
      ...EGDSCardinalLocalizedTextFragment
    }
  }
  fragment EGDSTemplateModelsFragment on EGDSTemplateModels {
    models {
      ...TemplateModelFragment
    }
  }
  ${me}
`}
`,ge=l.J1`
  fragment EGDSTravelersFragment on EGDSTravelers {
    adults {
      ...EGDSTravelerStepInputFragment
    }
    children {
      count {
        ...EGDSTravelerStepInputFragment
      }
      ages {
        ...EGDSTravelerChildAgeSelectFragment
      }
    }
    pets {
      ...EGDSBasicCheckBoxFragment
    }
  }
  ${R.PsZ.fragment}
  ${R.IoU.fragment}
  ${R.tX.fragment}
`,pe=({data:e,state:t,maxGuests:r})=>{var l,n,a,i,s,d,c,u,v;const g=(0,b.KY)(),p=(0,o.useContext)(ce),[h,S]=(0,o.useState)(t.petsIncluded?L.CHECKED:L.UNCHECKED),{adults:E,children:T,pets:D}=e,f=(e,t)=>{const r=t===V.ADULTS?"UPDATE_ADULTS_COUNT":"UPDATE_CHILDREN_COUNT",l=parseInt(e.target.value,10);Number.isNaN(l)||p({type:r,count:l})},x=(e,t)=>{const r=parseInt(e.target.value,10);Number.isNaN(r)||p({type:"UPDATE_CHILD_AGE",childIndex:t,childAge:r}),g(`HOT.HIS:ROOM.Child.${t}.AGE.${r}`,"Child age update")},C=(0,o.useCallback)(e=>{const t=e.target.checked,r=t?"INCLUDE_PETS":"EXCLUDE_PETS";S(t?L.CHECKED:L.UNCHECKED),p({type:r}),g(`HOT.HIS.TravelersField.${r}`,`Travelers Field ${r}`)},[]),I=t.adults+((null===(l=t.children)||void 0===l?void 0:l.length)||0),N=(null==T?void 0:T.count.max)||0,A=((null===(n=t.children)||void 0===n?void 0:n.length)||0)+14-I,G=I<r?null!==(a=E.max)&&void 0!==a?a:14:t.adults,j=I<r?null!=N?N:A:(null===(i=t.children)||void 0===i?void 0:i.length)||0;return(0,m.jsxs)(m.Fragment,{children:["EGDSTravelerStepInput"===E.__typename&&(0,m.jsx)(R.PsZ,{data:E,onChange:f,value:t.adults,customMax:G,travelerType:V.ADULTS}),"EGDSTravelerChildren"===(null==T?void 0:T.__typename)&&(0,m.jsxs)(m.Fragment,{children:["EGDSTravelerStepInput"===T.count.__typename&&(0,m.jsx)(R.PsZ,{data:T.count,onChange:f,value:null!==(s=null===(d=t.children)||void 0===d?void 0:d.length)&&void 0!==s?s:0,customMax:j,travelerType:V.CHILDREN}),t.children&&(null===(c=t.children)||void 0===c?void 0:c.length)>0&&(0,m.jsx)(y.w,{space:"two",columns:2,children:null===(u=t.children)||void 0===u?void 0:u.map(({age:e},t)=>{const r=T.ages[t];return"EGDSTravelerChildAgeSelect"===(null==r?void 0:r.__typename)&&(0,m.jsx)(R.IoU,{data:r,customValue:null!=e?e.toString():"",name:`child-${t}`,childIndex:t,onSelect:x})})})]}),D&&(0,m.jsx)(_.N,{padding:{blockstart:"four"},children:(0,m.jsx)("div",{children:"EGDSBasicCheckBox"===D.__typename&&(0,m.jsx)(R.tX,{data:D,isChecked:null!==(v=t.petsIncluded)&&void 0!==v&&v,handleCheckboxChange:C})})})]})};pe.displayName="EGDSTravelers",pe.fragment=ge;const he=l.J1`
  fragment EGDSBasicTravelerSelectorFragment on EGDSBasicTravelerSelector {
    doneButton {
      ...LodgingEGDSButtonFragment
    }
    title
    travelers {
      ...EGDSTravelersFragment
    }
    validations {
      ... on EGDSTravelersInputValidation {
        errorMessage
        maxCount
        type
      }
    }
  }
  ${R.E_b.fragment}
  ${pe.fragment}
`,Se=({data:e,state:t,handleSubmit:r})=>{var l;const{doneButton:n,travelers:a,title:o,validations:i}=e,s=null==i?void 0:i.map(e=>{if("EGDSTravelersInputValidation"===e.__typename){const{maxCount:t}=e;return{[F.MAX_TRAVELERS]:t}[F.MAX_TRAVELERS]}return null}),d=s&&1!==s.length?14:null!==(l=null==s?void 0:s.at(0))&&void 0!==l?l:14;return a?(0,m.jsxs)(m.Fragment,{children:[""!==o&&(0,m.jsx)(S.M,{size:5,children:o}),(0,m.jsx)(pe,{data:a,state:t,maxGuests:d}),(0,m.jsx)(_.N,{padding:{blockstart:"four"},children:(0,m.jsx)("div",{children:(0,m.jsx)(R.E_b,{data:n,isFullWidth:!0,onClick:r})})})]}):null};Se.displayName="EGDSBasicTravelerSelector",Se.fragment=he;const Ee=l.J1`
  fragment EGDSOpenTravelerSelectorActionFragment on EGDSOpenTravelerSelectorAction {
    travelerSelector {
      ... on EGDSBasicTravelerSelector {
        ...EGDSBasicTravelerSelectorFragment
      }
    }
  }
  ${Se.fragment}
`,Te=({data:e,state:t,handleSubmit:r})=>{const{travelerSelector:l}=e;return e&&l&&"EGDSBasicTravelerSelector"===l.__typename?(0,m.jsx)("section",{children:(0,m.jsx)(_.N,{padding:{blockstart:"four"},children:(0,m.jsx)(Se,{data:l,state:t,handleSubmit:r})})}):null};Te.displayName="EGDSOpenTravelerSelectorAction",Te.fragment=Ee;const De=l.J1`
  fragment EGDSSearchFormTravelersFieldFragment on EGDSSearchFormTravelersField {
    action {
      ...EGDSOpenTravelerSelectorActionFragment
      ...EGDSOpenRoomsTravelerSelectorActionFragment
    }
    egdsElementId
    label
    labelTemplate {
      ...EGDSLocalizedTextFragment
    }
    readOnly
    value
    leftIcon {
      id
    }
  }
  ${Te.fragment}
  ${se.fragment}
  ${ve}
`,fe={adults:1,children:[{age:1}],petsIncluded:!1},xe=({action:e,state:t,handleSubmit:r})=>(0,m.jsx)(p.Y,{children:(0,m.jsx)(_.N,{padding:{blockstart:"half"},children:e&&"EGDSOpenTravelerSelectorAction"===e.__typename&&(0,m.jsx)("div",{children:(0,m.jsx)(Te,{data:e,state:t,handleSubmit:r})})})}),_e=({data:e,triggerRef:t,updateStoreWithTravelerUrlData:r,isNestDialog:l=!1,dialogId:n="full-sheet-traveler-selector",initialState:a,shouldUpdateParams:i=!0})=>{var d,c,p,S,E;const[T,f,x]=(0,D.useDialog)(n,l?"pwaDialogNested":void 0),_=(0,b.KY)(),{action:R,label:y,labelTemplate:I,leftIcon:N,value:j}=e,O=N?N.id:"",F="EGDSOpenTravelerSelectorAction"===(null==R?void 0:R.__typename)&&"EGDSBasicTravelerSelector"===(null==R?void 0:R.travelerSelector.__typename)?null==R||null===(d=R.travelerSelector)||void 0===d?void 0:d.travelers:null,U=[];null==F||null===(c=F.children)||void 0===c||null===(c=c.ages)||void 0===c||c.forEach(e=>{"EGDSTravelerChildAgeSelect"===e.__typename&&null!==e.value&&U.push({age:e.value})});const k="EGDSTravelers"===(null==F?void 0:F.__typename)?{adults:null!==(p=null==F?void 0:F.adults.value)&&void 0!==p?p:1,children:U,petsIncluded:"EGDSBasicCheckBox"===(null==F||null===(S=F.pets)||void 0===S?void 0:S.__typename)&&(e=>e===L.CHECKED)(F.pets.state)}:fe,[M,P]=(0,o.useReducer)(de,a||k),B=(0,o.useRef)(M),$=(()=>{const e=(0,G.Zp)(),t=(0,G.zy)();return(0,o.useCallback)((r,l)=>{const n=new URLSearchParams(t.search);n.set("adults",String(r.adults)),n.set("children",String(r.children)),n.delete("rm1"),l&&n.has("pwaDialog")&&n.delete("pwaDialog"),r.house_rules_group?n.set("house_rules_group",String(r.house_rules_group)):n.delete("house_rules_group"),e(`${t.pathname}?${n}`,{replace:!0})},[t,e])})(),H=(0,o.useCallback)((e=!1)=>{var t;const n=M.adults,a=null!==(t=M.petsIncluded)&&void 0!==t&&t,o=a?"PETS":void 0,s=a?"pets_allowed":void 0,{children:d}=M;B.current=M;const c={adults:n,children:(null==d?void 0:d.map(({age:e})=>`1_${e}`))||[],amenities:o,house_rules_group:s,isPetsIncluded:a};i&&!l&&setTimeout(()=>$(c,!0),50),e||f.closeDialog(),r(c)},[M]),V=()=>{A()(B.current,M)||(H(!0),B.current=M)};return e&&e.action&&"EGDSOpenTravelerSelectorAction"===e.action.__typename?(0,m.jsxs)(v.P,{type:"relative",children:[(0,m.jsx)(s.H,{label:null!=y?y:"",value:null!==(E=a&&I?(e=>{var t;const r=e.adults+((null===(t=e.children)||void 0===t?void 0:t.length)||0),l=e.petsIncluded;return"EGDSCardinalLocalizedText"===(null==I?void 0:I.__typename)?z(I,r,l):j})(a):j)&&void 0!==E?E:"","data-stid":"open-room-picker",onClick:()=>{if("EGDSOpenTravelerSelectorAction"===(null==R?void 0:R.__typename)&&(null==R?void 0:R.analytics)){const{referrerId:e,linkName:t}=R.analytics;_(e,t)}f.openDialog()},domRef:t,name:"travelers",icon:O}),(0,m.jsx)(ue,{value:P,children:(0,m.jsxs)(u.LM,{children:[(0,m.jsx)(u.zQ,{children:(0,m.jsx)(h.K,{isVisible:T,closeCallback:V,children:(0,m.jsx)(g.t,{isVisible:T,type:"popover",triggerRef:t,onDismiss:f.closeDialog,showOverTrigger:!0,width:400,children:(0,m.jsx)(xe,{action:R,state:M,handleSubmit:()=>H(!1)})})})}),(0,m.jsx)(u.rw,{children:(0,m.jsx)(h.K,{isVisible:T,closeCallback:V,children:(0,m.jsx)(x,{children:(0,m.jsxs)(g.t,{isVisible:T,type:"centered",triggerRef:t,children:[(0,m.jsx)(C.p,{navigationContent:{onClick:()=>f.closeDialog(),navIconLabel:"Close"}}),(0,m.jsx)(xe,{action:R,state:M,handleSubmit:()=>H(!1)})]})})})}),(0,m.jsx)(u.NP,{children:(0,m.jsx)(h.K,{isVisible:T,closeCallback:V,children:(0,m.jsx)(x,{children:(0,m.jsxs)(g.t,{isVisible:T,type:"full",triggerRef:t,children:[(0,m.jsx)(C.p,{navigationContent:{onClick:()=>f.closeDialog(),navIconLabel:"Close"}}),(0,m.jsx)(xe,{action:R,state:M,handleSubmit:()=>H(!1)})]})})})})]})})]}):null};_e.displayName="EGDSSearchFormTravelersField",_e.fragment=De;const Ce=({data:e,triggerRef:t,updateRooms:r,isNestDialog:l=!1,dialogId:a="rooms-traveler-selector"})=>{var i;const{action:c,label:g,leftIcon:p}=e,[S,f,x]=(0,D.useDialog)(a,l?"pwaDialogNested":void 0),{inputValue:_,updateInputValue:C,handleClick:R}=((e,t)=>{const{action:r,labelTemplate:l,value:n}=e,{analytics:a=null}="EGDSOpenTravelerSelectorAction"===(null==r?void 0:r.__typename)?r:{},[i,s]=(0,o.useState)(n||""),d=(0,b.KY)();return{inputValue:i,updateInputValue:e=>{s(e?K(e,l):n||"")},handleClick:()=>{null==t||t(),a&&d(a.referrerId,a.linkName)}}})(e,f.openDialog),{exposure:y}=(0,d.useExperiment)("mWeb_Big_Batch",!0),{context:I}=(0,n.R)(),N=(null==I||null===(i=I.identity)||void 0===i?void 0:i.authState)===O.ANONYMOUS;return e&&c&&"EGDSOpenTravelerSelectorAction"===c.__typename?(0,m.jsxs)(v.P,{type:"relative",children:[(0,m.jsxs)(u.LM,{children:[(0,m.jsx)(u.NP,{children:N&&1===(null==y?void 0:y.bucket)?(0,m.jsx)(T.x,{inline:!0,onClick:R,children:(0,m.jsx)("button",{type:"button",children:(0,m.jsx)(E.D,{children:_})})}):(0,m.jsx)(s.H,{label:null!=g?g:"",value:null!=_?_:"","data-stid":"open-room-picker",onClick:R,domRef:t,name:"travelers",icon:null==p?void 0:p.id})}),(0,m.jsx)(u.rw,{children:(0,m.jsx)(s.H,{label:null!=g?g:"",value:null!=_?_:"","data-stid":"open-room-picker",onClick:R,domRef:t,name:"travelers",icon:null==p?void 0:p.id})})]}),(0,m.jsx)(h.K,{isVisible:S,children:(0,m.jsx)(x,{children:(0,m.jsx)(se,{data:c,handleSubmit:r,updateInputValue:C,triggerRef:t,closeDialog:f.closeDialog})})})]}):null};Ce.displayName="EGDSSearchFormRoomsTravelersField",Ce.fragment=_e.fragment;const Re=l.J1`
  fragment OffersTravelerSelectorFragment on OffersTravelerSelector {
    travelers {
      ...EGDSSearchFormTravelersFieldFragment
    }
  }
  ${_e.fragment}
`,ye=({data:e,updateStoreWithTravelerUrlData:t,triggerRef:r,dialogId:l,isNestDialog:n,initialState:a,shouldUpdateParams:o=!0})=>{if(!e||!(null==e?void 0:e.travelers))return null;const{travelers:i}=e;return(0,m.jsx)(_e,{data:i,isNestDialog:n,dialogId:l,triggerRef:r,initialState:a,updateStoreWithTravelerUrlData:t,shouldUpdateParams:o})};ye.displayName="sharedui-TravelerSelector",ye.fragment=Re;const Ie=({data:e,updateRooms:t,triggerRef:r,dialogId:l,isNestDialog:n})=>{if(!e||!(null==e?void 0:e.travelers))return null;const{travelers:a}=e;return(0,m.jsx)(Ce,{data:a,isNestDialog:n,dialogId:l,triggerRef:r,updateRooms:t})};Ie.displayName="RoomsTravelerSelector",Ie.fragment=ye.fragment;const be=l.J1`
  query OffersTravelerSelectorQuery(
    $context: ContextInput!
    $propertyId: String!
    $searchCriteria: PropertySearchCriteriaInput
    $shoppingContext: ShoppingContextInput
  ) {
    offersTravelerSelector(context: $context, searchCriteria: $searchCriteria, propertyId: $propertyId, shoppingContext: $shoppingContext) {
      ...OffersTravelerSelectorFragment
    }
  }

  ${ye.fragment}
`;function Ne(e,t){const r=r=>{const{inputs:o,skipSsr:i,children:s}=r,{context:d}=(0,n.R)(),{data:c,loading:u}=(0,l.IT)(be,{variables:$($({},o),{},{context:d}),context:{batchKey:"lodging-property-offers",shouldLogPerformance:!0},ssr:!i});if(u)return t?(0,m.jsx)(t,$({},r)):null;const v=null==c?void 0:c.offersTravelerSelector;return v?(0,m.jsx)(a.Jk,{inputs:o,children:(0,m.jsx)(e,$($({data:v},r),{},{children:s}))}):null};return r.displayName=`PropertyOffers${e.displayName}`,r}const Ae=Ne(ye);Ne(Ie,e=>(0,m.jsx)(H,$({},e)))}}]);
//# sourceMappingURL=https://bernie-assets.s3.us-west-2.amazonaws.com/landing-pwa/shared-ui-retail-lodging-offers-traveler-selector.e8b4a6aa9192799d83d5.js.map