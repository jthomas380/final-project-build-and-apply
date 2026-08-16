/*@license For license information please refer to shared-ui-lodging-property-details.licenses.txt*/
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[855],{73610:function(e,n,i){i.d(n,{A6:function(){return zr},CE:function(){return Nr},I:function(){return Pn},I$:function(){return Cr},LO:function(){return Pr},T5:function(){return Nn},X7:function(){return $r},aS:function(){return Or},cO:function(){return Br},e7:function(){return Er},fQ:function(){return Ar},i2:function(){return wr},jV:function(){return Hr},lN:function(){return Mt},m8:function(){return Lr},ro:function(){return Rr},tQ:function(){return Zn},uD:function(){return _r},yh:function(){return Tr},zI:function(){return Dr},zv:function(){return Fr}});var t=i(96540),r=i(5846),l=i(86047),a=i(62403),s=i(81305),o=i(33777),d=i(10044),c=i(76972),u=i(66104),p=i(33998),m=i(35784),h=i(33694),g=i(22868),x=i(74276),v=i(1270),y=i(58646),j=i(86375),f=i(49432),I=i(82308),b=i(64155),S=i(85361),k=i(21317),N=i(68055),A=i(716),P=i(39128),E=i(70118),T=i(20209),L=i(55009),C=i(66162),_=i(65845),D=i(55153),w=i(95834),F=i(68627),M=i(63912),O=i(74848),R=i(15996),$=i(63004),H=i(86123),B=i(53383),z=i(33466),V=i(4561),W=i(17065),U=i(92870),G=i(98429),K=i(31106),J=i(66501),Y=i(84683),q=i(69714),Q=i(21742),X=i(81042),Z=i(66300),ee=i(38955),ne=i(77511),ie=i(79943),te=i(66267),re=i(21330),le=i(74888),ae=i(77630),se=i(9006),oe=i(68336),de=i(48764),ce=i(19308),ue=i(34744),pe=i(21894),me=i(96906),he=i(30230),ge=i(55597),xe=i(4648),ve=i(56504),ye=i(53167),je=i(33931),fe=i(9210),Ie=i(39196),be=i(82652),Se=i(46698),ke=i(16223),Ne=i(43641),Ae=i(83332),Pe=i(94876),Ee=i(37198),Te=i(70705),Le=i(16444),Ce=i(69777),_e=i(15286),De=i(20309),we=i(93609),Fe=i(7700),Me=i(71162),Oe=i(28140),Re=i(29731),$e=i(19916),He=i(195);const Be=e=>!0;let ze=function(e){return e.FOUR_ONE="FOUR_ONE",e.FOUR_THREE="FOUR_THREE",e.ONE_ONE="ONE_ONE",e.SIXTEEN_NINE="SIXTEEN_NINE",e.THREE_FOUR="THREE_FOUR",e.THREE_TWO="THREE_TWO",e.TWENTY_ONE_NINE="TWENTY_ONE_NINE",e}({}),Ve=function(e){return e.ANONYMOUS="ANONYMOUS",e.AUTHENTICATED="AUTHENTICATED",e.IDENTIFIED="IDENTIFIED",e}({}),We=function(e){return e.APP_PHONE="APP_PHONE",e.APP_TABLET="APP_TABLET",e.CHAT_APP="CHAT_APP",e.DESKTOP="DESKTOP",e.MOBILE_PHONE="MOBILE_PHONE",e.MOBILE_TABLET="MOBILE_TABLET",e.VOICE_APP="VOICE_APP",e}({}),Ue=function(e){return e.PLACE="PLACE",e.PRODUCT="PRODUCT",e.PROPERTY="PROPERTY",e}({}),Ge=function(e){return e.INFO="INFO",e.POSITIVE="POSITIVE",e.STANDARD="STANDARD",e.WARNING="WARNING",e}({}),Ke=function(e){return e.BOLD="BOLD",e.MEDIUM="MEDIUM",e.REGULAR="REGULAR",e}({});let Je=function(e){return e.PAN="PAN",e.ZOOM_IN="ZOOM_IN",e.ZOOM_OUT="ZOOM_OUT",e.CLOSE="CLOSE",e}({});Je.PAN,Je.ZOOM_IN,Je.ZOOM_OUT,Je.CLOSE;let Ye=function(e){return e.RESTAURANT="RESTAURANT_APPLIED",e.LANDMARK="LANDMARK_APPLIED",e.BOTH="BOTH_APPLIED",e.NONE="NONE_APPLIED",e}({});Ye.RESTAURANT,Ye.LANDMARK,Ye.BOTH,Ye.NONE;const qe=T.J1`
  fragment PlaceDisplayFragment on PlacesDialog {
    placesDialogEGDSTextsContentSection {
      heading {
        text
      }
      subHeading {
        text
      }
      clearSavedPlaceIcon {
        id
        description
      }
    }
  }
`,Qe=e=>{var n,i;const{data:t,savedFeature:r,saveCustomPlace:l}=e,a=null==t||null===(n=t.placesDialogEGDSTextsContentSection)||void 0===n||null===(n=n.heading)||void 0===n?void 0:n.text,s=null==t||null===(i=t.placesDialogEGDSTextsContentSection)||void 0===i?void 0:i.clearSavedPlaceIcon;return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(I.N,{padding:{blockstart:"one",blockend:"one"},children:a&&(0,O.jsx)(S.M,{tag:"h3",size:5,children:a})}),(0,O.jsx)(I.N,{margin:{blockstart:"four"},children:(0,O.jsxs)(u.X,{justifyContent:"space-between",alignContent:"center",alignItems:"center",children:[(0,O.jsx)(p.C,{grow:1,children:(0,O.jsx)(d.LD,{name:"place",size:d.So.SMALL})}),(0,O.jsx)(p.C,{grow:10,children:(0,O.jsxs)("div",{children:[(0,O.jsx)(A.D,{weight:"bold",children:r.name}),(0,O.jsx)(I.N,{children:(0,O.jsx)(N.s,{children:r.description})})]})}),(0,O.jsx)(p.C,{grow:1,children:(0,O.jsx)("button",{onClick:()=>l(void 0),type:"button",children:(0,O.jsx)(d.LD,{id:null==s?void 0:s.id,name:"close",size:d.So.SMALL,title:null==s?void 0:s.description})})})]})})]})};Qe.fragment=qe,Qe.displayName="placeDisplay";const Xe=T.J1`
  fragment PlacesTypeaheadFragment on PlacesDialogTypeAheadContentSection {
    content {
      label
      placeholder
      renderType
      typeaheadPlaceholder
      typeaheadEmptyResultPlaceholder
      typeaheadInfo {
        client
        regionType
        isDestination
        maxNumberOfResults
        personalize
        lineOfBusiness
        packageType
        typeaheadFeatures
        proximityMaxMiles
      }
    }
  }
`,Ze=e=>{var n,i,t,r,l,a,s,o,d,c,u;const{data:p,handleChange:m,typeaheadLogger:h,strictFullscreen:g,renderType:x,propertyCoordinates:v}=e,{context:y}=(0,L.R)(),{identity:j,locale:f,siteId:I}=y,b=Number(null==j?void 0:j.expUserId)||-1,{duaid:S}=j||{},k=null==p?void 0:p.content,N=null!==(n=null==k?void 0:k.label)&&void 0!==n?n:"",A=null!==(i=null==k?void 0:k.placeholder)&&void 0!==i?i:"",P=null!==(t=null==k?void 0:k.typeaheadEmptyResultPlaceholder)&&void 0!==t?t:"",{exposure:E}=(0,_.useExperiment)("Custom_Place_on_PDP_Map_iteration_2",!1),T=1===E.bucket,C=`consistent_display|ta_hierarchy|postal_code|contextual_ta${T&&"|google"}`,D=(null==v?void 0:v.latitude)&&null!==!!(null==v?void 0:v.longitude)?`${null==v?void 0:v.latitude},${null==v?void 0:v.longitude}`:null;return(0,O.jsx)($.B,{adapter:new R.Z({client:null!==(r=null==k||null===(l=k.typeaheadInfo)||void 0===l?void 0:l.client)&&void 0!==r?r:"pdpmap",domain:void 0,dest:!0,expuserid:b,features:C,guid:S,lob:"HOTELS",locale:f,maxResults:null!==(a=null==k||null===(s=k.typeaheadInfo)||void 0===s?void 0:s.maxNumberOfResults)&&void 0!==a?a:10,regionType:null!==(o=null==k||null===(d=k.typeaheadInfo)||void 0===d?void 0:d.regionType)&&void 0!==o?o:1787,proximityMaxMiles:null==k||null===(c=k.typeaheadInfo)||void 0===c?void 0:c.proximityMaxMiles,siteId:I,personalize:!0,typeaheadLogger:h,fetchLocation:T,googleApiVersion:null===(u=(0,H.I)())||void 0===u?void 0:u.version,latlongSearchCenterPoint:D,xPageId:"page.Hotels.Infosite.Information,DETAILS,HOTELS",recentHistoryEnabled:!1}),icon:"place",name:"placesTypeAhead",onUpdate:m,stid:"typeahead-adaptive",value:"",strictFullscreen:g,typeaheadPlaceholder:A,typeaheadEmptyResultPlaceholder:P,id:"placesTypeAhead",label:N,renderType:x})};Ze.fragment=Xe,Ze.displayName="PlacesTypeahead";const en=T.J1`
  fragment PlacesSearchFragment on PlacesDialog {
    placesDialogTypeAheadContentSection {
      heading {
        text
      }
      subHeading {
        text
      }
      ...PlacesTypeaheadFragment
    }
  }
  ${Ze.fragment}
`,nn=e=>{var n,i;const{data:t,handleChange:r,typeaheadLogger:l,propertyCoordinates:a}=e,s=null==t?void 0:t.placesDialogTypeAheadContentSection,o=null==s||null===(n=s.heading)||void 0===n?void 0:n.text,d=null==s||null===(i=s.subHeading)||void 0===i?void 0:i.text;return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(I.N,{padding:{blockstart:"one",blockend:"one"},children:o&&(0,O.jsx)(S.M,{tag:"h3",size:5,children:o})}),(0,O.jsx)(I.N,{padding:{blockstart:"one",blockend:"three"},children:d&&(0,O.jsx)(S.M,{tag:"h4",children:(0,O.jsx)(A.D,{weight:"regular",inline:!0,children:d})})}),s&&(0,O.jsxs)(M.LM,{children:[(0,O.jsx)(M.NP,{children:(0,O.jsx)(Ze,{data:s,handleChange:r,typeaheadLogger:l,strictFullscreen:!0,renderType:$.W.DIALOG,propertyCoordinates:a})}),(0,O.jsx)(M.zQ,{children:(0,O.jsx)(Ze,{data:s,handleChange:r,typeaheadLogger:l,propertyCoordinates:a})})]})]})};function tn(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(n.includes(t))continue;i[t]=e[t]}return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)i=l[t],n.includes(i)||{}.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}nn.fragment=en,nn.displayName="PlacesSearch";const rn=["filteredValues"],ln=e=>Array.from(new Set(e.flatMap(e=>e)||[])),an=T.J1`
  fragment PlacesSwitchesFragment on PlacesDialog {
    placesDialogUITogglesContentSection {
      subHeading {
        text
      }
      content {
        ...SwitchToggleFragment
      }
    }
  }
  fragment SwitchToggleFragment on FilterOption {
    checked
    checkedLabel
    enabled
    uncheckedLabel
    filteredValues
    uncheckedAnalytics {
      linkName
      referrerId
    }
    checkedAnalytics {
      linkName
      referrerId
    }
  }
`;function sn(e){return"FilterOption"===e.__typename}const on=(e,n)=>e.map(e=>e.join(",")).indexOf(n.join(",")),dn=(e,n)=>on(e.on,n)>=0,cn=e=>{var n,i;return{off:(null==e||null===(n=e.placesDialogUITogglesContentSection)||void 0===n||null===(n=n.content)||void 0===n||null===(n=n.filter(sn))||void 0===n||null===(n=n.filter(e=>!e.checked))||void 0===n?void 0:n.map(e=>e.filteredValues))||[],on:(null==e||null===(i=e.placesDialogUITogglesContentSection)||void 0===i||null===(i=i.content)||void 0===i||null===(i=i.filter(sn))||void 0===i||null===(i=i.filter(e=>e.checked))||void 0===i?void 0:i.map(e=>e.filteredValues))||[]}},un=({data:e,toggledFilters:n,setToggledFilters:i})=>{var r;const[l,a]=(0,t.useState)(void 0);(0,t.useEffect)(()=>{if(n)a(n);else{const n=cn(e);i(n),a(n)}},[n,i,a,e]);const s=(0,t.useCallback)((e,n)=>{const{on:t=[],off:r=[]}=l||{},s=on(r,n),o=on(t,n),d=!0===e?{off:s<0?r:[...r.slice(0,s),...r.slice(s+1)],on:o<0?[...t,n]:t}:{off:s<0?[...r,n]:r,on:o<0?t:[...t.slice(0,o),...t.slice(o+1)]};i(d),a(d)},[l,i,a]);if(!e||!e.placesDialogUITogglesContentSection)return null;const o=null===(r=e.placesDialogUITogglesContentSection.subHeading)||void 0===r?void 0:r.text,{content:d}=e.placesDialogUITogglesContentSection;return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(I.N,{padding:{blockstart:"six"},children:o&&(0,O.jsx)(S.M,{tag:"h4",children:(0,O.jsx)(A.D,{weight:"regular",inline:!0,children:o})})}),null==d?void 0:d.filter(sn).map((e,i)=>{const{filteredValues:t}=e;return(0,O.jsx)(I.N,{padding:{blockstart:"three",blockend:"two"},children:(0,O.jsx)(D.aFc,{data:tn(e,rn),checked:void 0!==n?dn(n,t):void 0,handleToggle:e=>s(e,t)})},`switch-${i}`)})]})};un.fragment=an,un.displayName="placesSwitches";const pn=T.J1`
  fragment PlacesDialogFragment on PlacesDialog {
    dialog {
      closeAnalytics {
        linkName
        referrerId
      }
      toolbar {
        closeText
      }
    }
    trigger {
      icon {
        description
        token
      }
      disabled
    }
    ...PlacesSearchFragment
    ...PlaceDisplayFragment
    ...PlacesSwitchesFragment
  }
  ${nn.fragment}
  ${Qe.fragment}
  ${un.fragment}
`,mn=({data:e,setSavedFeature:n,savedFeature:i,typeaheadLogger:t,toggledFilters:r,setToggledFilters:l,onClosePlacesDialog:a,showPlacesDialog:s,propertyCoordinates:o})=>{var d,c,p;const{trackMapCustomPlaceAdded:m,trackMapCustomPlaceRemoved:h}=(0,F.we)(),v=e=>{e?m(e):i&&h(i),n(e)},j=null==e||null===(d=e.trigger)||void 0===d||null===(d=d.icon)||void 0===d?void 0:d.description,f=(0,O.jsxs)(u.X,{direction:"column",blockSize:"full_size",children:[(0,O.jsx)(P.p,{navigationContent:{onClick:a,navIconLabel:null!==(c=null==e||null===(p=e.dialog)||void 0===p||null===(p=p.toolbar)||void 0===p?void 0:p.closeText)&&void 0!==c?c:""},toolbarTitle:j}),(0,O.jsxs)(x.Y,{children:[i&&(0,O.jsx)(Qe,{data:e,savedFeature:i,saveCustomPlace:v}),!i&&(0,O.jsx)(nn,{data:e,handleChange:e=>{const{data:n}=e;if(!n)return null;v((0,F.Uy)(e)),a()},typeaheadLogger:t,propertyCoordinates:o}),(0,O.jsx)(un,{toggledFilters:r,setToggledFilters:l,data:e})]})]});return(0,O.jsxs)(M.LM,{children:[(0,O.jsx)(M.NP,{children:(0,O.jsx)(y.K,{isVisible:s,children:(0,O.jsx)(g.t,{isVisible:s,type:"side",sideSheetLayout:{position:"leading",columns:12},triggerRef:null,children:f})})}),(0,O.jsx)(M.zQ,{children:(0,O.jsx)(y.K,{isVisible:s,children:(0,O.jsx)(g.t,{isVisible:s,type:"side",sideSheetLayout:{position:"leading",columns:6},triggerRef:null,children:f})})}),(0,O.jsx)(M.TD,{children:(0,O.jsx)(y.K,{isVisible:s,children:(0,O.jsx)(g.t,{isVisible:s,type:"side",sideSheetLayout:{position:"leading",columns:4},triggerRef:null,children:f})})})]})};mn.fragment=pn,mn.displayName="PlacesDialog";const hn=T.J1`
  fragment MapActionsFragment on PropertyInfoMap {
    callToAction {
      action {
        targetRef
      }
      button {
        primary
      }
      event {
        eventName
        eventType
        eventVersion
      }
    }
    dialogs {
      ...PlacesDialogFragment
    }
  }
  ${mn.fragment}
`;function gn(e){return gn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},gn(e)}function xn(e){var n=function(e,n){if("object"!=gn(e)||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var t=i.call(e,n||"default");if("object"!=gn(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==gn(n)?n:n+""}function vn(e,n,i){return(n=xn(n))in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function yn(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),i.push.apply(i,t)}return i}function jn(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?yn(Object(i),!0).forEach(function(n){vn(e,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):yn(Object(i)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))})}return e}const fn=T.J1`
  query MapQuery(
    $context: ContextInput!
    $propertyId: String!
    $shoppingContext: ShoppingContextInput
    $searchCriteria: PropertySearchCriteriaInput
  ) {
    propertyInfo(context: $context, propertyId: $propertyId, shoppingContext: $shoppingContext, searchCriteria: $searchCriteria) {
      id
      summary {
        map(searchCriteria: $searchCriteria, shoppingContext: $shoppingContext) {
          egdsBasicMap {
            ...DynamicMapFragment
          }
          mapCards {
            ... on EGDSImageCard {
              ...MapCardContentFragment
            }
            ... on LodgingCard {
              ...LodgingCardFragment
            }
          }
          toolbar {
            title
            icon {
              description
            }
          }
          ...MapActionsFragment
        }
        location {
          coordinates {
            latitude
            longitude
          }
        }
      }
    }
  }
  ${D.jjC.fragment}
  ${F.kT.fragment}
  ${F.Qd.fragment}
  ${hn}
`,In=e=>"EGDSMapFeature"===e.__typename,bn=(e,n,i)=>{const t=e.find(e=>e.qualifier===i);t?t.features.push(n):e.push({features:[n],qualifier:i})},Sn=(e,n,i,t)=>{const r=[],l=[],a=[],s=[],o=[],d=e.listFeatures();n.forEach(e=>{const{id:n,type:c,qualifiers:u=[]}=e,p=[d.find(e=>e.id===n&&e.type===c)].filter(Be)[0];if(p){const{qualifiers:d=[]}=p,m=u.filter(e=>i.includes(e))||[],h=u.filter(e=>!i.includes(e))||[];m.length>0&&!u.some(e=>t.includes(e))?(l.push({id:n,type:c}),r.push(e)):a.push({id:n,type:c}),d&&d.length>0&&(m.forEach(n=>{d.includes(n)&&bn(o,e,n)}),h.forEach(n=>{d.includes(n)||bn(s,e,n)}))}}),s.forEach(n=>e.addQualifierToFeatures(n.features,n.qualifier)),o.forEach(n=>e.removeQualifierFromFeatures(n.features,n.qualifier)),e.addQualifierToFeatures(l,E.lL.HIDDEN),e.removeQualifierFromFeatures(a,E.lL.HIDDEN)},kn=e=>{var n,i,l,a;const{context:o}=(0,L.R)(),{locale:x}=o,{inputs:v,beforeInit:y,onInit:f,egMapsConfig:b,onClose:N,setSavedFeature:A,savedFeature:R,typeaheadLogger:$,clientPadding:H,triggerRef:z,skipSsr:V}=e,[W,U]=(0,t.useState)(R),[G,K]=(0,t.useState)(void 0),[J,Y]=(0,t.useState)(!1),q=(0,t.useRef)(!0),{exposure:Q}=(0,_.useExperiment)("SIMILAR_PROPERTIES_MAP_VIEW_WEB",!1),X=1===Q.bucket,{data:Z,error:ee,loading:ne}=(0,T.IT)(fn,{context:{shouldLogPerformance:!0},variables:jn(jn({},v),{},{context:o}),ssr:!V}),ie=(0,t.useRef)(),te=(0,C.KY)(),[re,le]=(0,t.useState)(),{propertyInfo:ae}=null!=Z?Z:{},se=null==ae||null===(n=ae.summary)||void 0===n||null===(n=n.location)||void 0===n?void 0:n.coordinates,oe=ae?ae.id.toString():"",de=null==ae||null===(i=ae.summary)||void 0===i?void 0:i.map,ce=null==de?void 0:de.egdsBasicMap,ue=null==ce||null===(l=ce.config)||void 0===l?void 0:l.mapId,pe=null==ce?void 0:ce.markers,me=null==de?void 0:de.mapCards,he=(0,t.useMemo)(()=>pe?(0,F.JX)(null==pe?void 0:pe.map(e=>e)):[],[pe]),ge=(0,t.useMemo)(()=>({id:oe,type:Ue.PRODUCT}),[oe]),{onClose:xe}=function(e){const{trackMapInit:n,trackMapPresented:i,trackMapContentPresented:t,trackMapHidden:r}=(0,F.we)();return{trackMapInit:n,trackMapPresented:i,trackMapContentPresented:t,onClose:()=>{e&&e(),r()}}}(N),ve=(0,t.useCallback)(e=>null==me?void 0:me.find(n=>"LodgingCard"===n.__typename?(null==n?void 0:n.id)===e:(null==n?void 0:n.imageCardId)===e),[me]),ye=(0,t.useCallback)(e=>{let n=!0;if(q.current&&W){(0,F.dG)(e,he,W,se,H),n=!1;const{id:i,type:t}=W;le({idAndType:{id:i,type:t},timestamp:Date.now()}),q.current=!1}const{off:i=[],on:t=[]}=G||{};if(Sn(e,he,ln(i),ln(t)),J&&X){const i=(0,F.Jh)(e);if(i){const{id:t,type:r}=i;e.markFeatureOver(t,r),n&&le({idAndType:{id:t,type:r},timestamp:Date.now()})}}},[W,he,se,G,J,X,H]);(0,t.useEffect)(()=>{W||(q.current=!0),A&&A(W)},[W]),(0,t.useEffect)(()=>{if(ie.current){const{off:e=[],on:n=[]}=G||{};Sn(ie.current,he,ln(e),ln(n))}},[he,W,G]);const je=(0,t.useCallback)(e=>{y&&y(e)},[]),fe=(0,t.useCallback)(e=>{ie.current=e,Y(!0),f&&f(e)},[]),Ie=(0,t.useMemo)(()=>ue?{gmapsAddConfig:{mapId:ue}}:void 0,[ue]),be=(0,t.useMemo)(()=>(0,B.h1)({googleMaps:Ie,locale:x,markers:{product:{markerType:{available:"price",[E.lL.FOCAL]:"pin",[`${E.lL.OBFUSCATED_PIN}#${E.lL.FOCAL}`]:"pinObfuscate",[`${E.lL.OBFUSCATED_PRICE}#${E.lL.FOCAL}`]:"priceObfuscate"}},property:{markerType:{available:"price",[E.lL.FOCAL]:"pin",[`${E.lL.OBFUSCATED_PIN}#${E.lL.FOCAL}`]:"pinObfuscate",[`${E.lL.OBFUSCATED_PRICE}#${E.lL.FOCAL}`]:"priceObfuscate"}},place:{show:{[`unknown#${E.lL.HIDDEN}`]:!1},textLabel:{show:{[E.lL.METRO_STATION]:!1}}}}},b||{}),[x,Ie,b]),Se=(0,t.useMemo)(()=>{if(W)return[W]},[W]),ke=(0,t.useCallback)((e,n)=>{if(!e)return null;{const{id:n}=e,t=`${n}`,r=ve(t);if(r){var i;const e=null==pe||null===(i=pe.filter(In).find(e=>t===e.id))||void 0===i?void 0:i.clientSideAnalytics;return e&&te(e.referrerId,e.linkName),r}}},[ve,pe]),Ne=(0,t.useMemo)(()=>({placeCardsManagement:{onMarkerSelected:()=>({__typename:"AdditionalPlaceMarkerInfo",directionsTo:ge})},productCardsManagement:{onMarkerSelected:ke,cardDefinition:()=>({card:D.jjC,cardView:D.K_G})},onCardDismiss:()=>{var e;return null===(e=ie.current)||void 0===e?void 0:e.clearSelectedFeature()}}),[ke,ge]),{button:Ae,action:Pe,event:Ee}=(null==de?void 0:de.callToAction)||{},Te=null==Ae?void 0:Ae.primary,{trackMapDialogOpened:Le,trackMapDialogClosed:Ce}=(0,F.we)(),[_e,De]=(0,t.useState)(),we=!X,Fe=(null==de?void 0:de.dialogs)&&(null==de?void 0:de.dialogs[0]),Me=null==Fe||null===(a=Fe.trigger)||void 0===a||null===(a=a.icon)||void 0===a?void 0:a.description,[Oe,Re]=(0,t.useState)(!1),{scrollTo:$e}=(0,w.xC)(),He=(0,C.iQ)(),Be=()=>{const{eventName:e="",eventType:n="",eventVersion:i=""}=Ee||{};e&&n&&i&&He&&He((0,F.$s)((0,F.Vw)({eventName:e,eventType:n,eventVersion:i}),{}))},ze=(0,O.jsx)(p.C,{children:(0,O.jsx)(I.N,{margin:{blockend:"three"},children:Te&&(0,O.jsx)(s.W,{size:r.V.LARGE,onClick:()=>{Be(),xe();const{targetRef:e}=Pe||{};e&&setTimeout(()=>{$e(e,[{sectionName:"navigation"}])},1e3)},name:Te,children:Te})})});(0,t.useEffect)(()=>{const e=cn(Fe);e.off.length>0&&De(e)},[]),(0,t.useEffect)(()=>{_e&&K(_e)},[_e]);const Ve=(0,O.jsx)(I.N,{margin:{blockend:"three"},children:(0,O.jsxs)(s.W,{size:r.V.LARGE,onClick:()=>{Re(!0),Le()},children:[(0,O.jsx)(d.LD,{name:"place"}),Me]})}),We=Fe&&(0,O.jsx)(mn,{data:Fe,setSavedFeature:U,savedFeature:W,typeaheadLogger:$,toggledFilters:_e,setToggledFilters:De,onClosePlacesDialog:()=>{Re(!1),Ce()},showPlacesDialog:Oe,propertyCoordinates:se});let Ge;if(ee)Ge=(null==ee?void 0:ee.networkError)?(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(P.p,{toolbarType:"transparent",navigationContent:{onClick:xe,navType:"close",navIconLabel:"close map"}}),(0,O.jsxs)(m.w,{blockSize:"full_size",alignItems:"center",justifyItems:"center",alignContent:"center",children:[(0,O.jsx)(h.T,{}),(0,O.jsx)(h.T,{alignSelf:"center",justifySelf:"center",children:(0,O.jsxs)(u.X,{alignItems:"center",direction:"column",children:[(0,O.jsx)(p.C,{children:(0,O.jsx)(I.N,{margin:"two",children:(0,O.jsx)(c.r,{alt:"Map Illustration",url:"https://a.travel-assets.com/egds/illustrations/map__xsmall.svg"})})}),(0,O.jsx)(p.C,{children:(0,O.jsx)(S.M,{size:5,tag:"h5",children:"We couldn’t load the map"})}),(0,O.jsx)(p.C,{children:(0,O.jsx)(k.u,{children:"Check your internet connection and try again."})})]})}),(0,O.jsx)(h.T,{})]})]}):(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(P.p,{toolbarType:"transparent",navigationContent:{onClick:xe,navType:"close",navIconLabel:"close map"}}),(0,O.jsxs)(m.w,{blockSize:"full_size",alignItems:"center",justifyItems:"center",alignContent:"center",children:[(0,O.jsx)(h.T,{}),(0,O.jsx)(h.T,{alignSelf:"center",justifySelf:"center",children:(0,O.jsxs)(u.X,{alignItems:"center",direction:"column",children:[(0,O.jsx)(p.C,{children:(0,O.jsx)(I.N,{margin:"two",children:(0,O.jsx)(c.r,{alt:"Map Illustration",url:"https://a.travel-assets.com/egds/illustrations/map__xsmall.svg"})})}),(0,O.jsx)(p.C,{children:(0,O.jsx)(S.M,{size:5,tag:"h5",children:"We couldn’t load the map"})}),(0,O.jsx)(p.C,{children:(0,O.jsx)(I.N,{margin:"three",children:(0,O.jsx)(s.W,{onClick:xe,children:"Return to property"})})})]})}),(0,O.jsx)(h.T,{})]})]});else if(!ne&&Z&&ce){var Ke,Je;Ge=(0,O.jsxs)(O.Fragment,{children:[(null==de?void 0:de.toolbar)?(0,O.jsx)(P.p,{toolbarTitle:(null==de||null===(Ke=de.toolbar)||void 0===Ke?void 0:Ke.title)||"",navigationContent:{onClick:xe,navType:"close",navIconLabel:null==de||null===(Je=de.toolbar)||void 0===Je||null===(Je=Je.icon)||void 0===Je?void 0:Je.description}}):null,(0,O.jsxs)(F.kT,{data:ce,supplementalFeatures:Se,onInit:fe,beforeInit:je,egMapsConfig:be,clientPadding:null!=H?H:"24px 0px 24px",onFeaturesPushed:ye,updateViewport:!1,selectedFeatureId:oe,height:"100%",cardsManagementHooks:Ne,selectedFeature:re,children:[(0,O.jsx)(F.h0,{zIndex:F.LV,overlayElementId:"mapActions",position:F._c.BOTTOM_CENTER,alignSelf:"center",children:(0,O.jsxs)(u.X,{space:"four",justifyContent:"center",children:[Fe&&(0,O.jsx)(p.C,{children:!Oe&&Ve}),we&&ze]})}),We]})]})}else Ge=(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(P.p,{navigationContent:{onClick:xe,navType:"close",navIconLabel:"close map"}}),(0,O.jsx)(j.R,{cornerRadius:0,type:"block"})]});const Ye={returnFocusOnClose:!0,triggerRef:z,isVisible:!0};return(0,O.jsxs)(M.LM,{children:[(0,O.jsx)(M.NP,{children:(0,O.jsx)(g.t,jn(jn({},Ye),{},{type:"full",children:Ge}))}),(0,O.jsx)(M.rw,{children:(0,O.jsx)(g.t,jn(jn({},Ye),{},{type:"centered",height:1200,centeredSheetSize:"medium",children:Ge}))})]})};kn.displayName="sharedui-Map";const Nn=kn,An={reserveAdaptExSuccessEvents:[],amenitiesAdaptExSuccessEvents:[]},Pn=(0,t.createContext)([An,()=>{}]),{Provider:En}=Pn,Tn=()=>{const e=1===(0,_.useExperiment)("Top_Of_PDP_Iteration_Web_Feature_Gate",!1).exposure.bucket,n=1===(0,_.useExperiment)("Top_of_PDP_Redesign",!1).exposure.bucket;return e&&n},Ln=(e,n,i)=>{const t=n||"",{payloadId:r,eventType:l,eventTarget:a}=e;i(C.p3.EVENT,{data:(0,D.T4o)({campaignId:t,payloadId:r,eventType:l||"",eventTarget:a||""})})};let Cn=function(e){return e.HIGHLIGHTS_PRESENTED="highlights.presented",e}({});const _n="1.0.0",Dn="Impression",wn=(e,n,i="")=>({event:jn({event_name:e,event_version:n},i&&{event_type:i})}),Fn=({data:e})=>{if("ShoppingProductContentGraphicsItem"!==e.__typename)return null;const n={clientPayload:wn(Cn.HIGHLIGHTS_PRESENTED,_n,Dn),serverPayload:e.clickStreamAnalytics},i=(null==e?void 0:e.text)&&(null==e?void 0:e.subText)&&(0,O.jsx)(J.g,{backgroundTheme:"secondary",padded:!0,children:(0,O.jsxs)(u.X,{direction:"column",space:"one",alignItems:"start",blockSize:"full_size",children:[(0,O.jsx)(A.D,{size:300,weight:"medium",inline:!0,children:e.text}),(0,O.jsx)(A.D,{size:300,weight:"regular",inline:!0,children:e.subText})]})});return i?(0,O.jsx)(C.E0,{eventData:n,children:(0,O.jsx)(h.T,{children:i})}):null},Mn=({data:e,isPropertyBookable:n,isStandaloneLodging:i=!0})=>{var r,l,a;const{track:s}=(0,C._q)(),o=Tn(),d=(0,U.ix)({mobileDeviceType:We.MOBILE_PHONE,anonymousAuthState:Ve.ANONYMOUS,isStandaloneLodging:i}),c=(0,M.eg)({viewSizes:M.pf})===M.pf.SMALL,u=o&&!c||null===(null==e||null===(r=e.content)||void 0===r?void 0:r.header)&&d,{adaptExAttemptEvents:p,campaignId:m,adaptExSuccessEvents:h}=(null==e?void 0:e.adaptExCampaignEvents)||{};(0,W._H)("ADAPTEX_HIGHLIGHTS_PROGRESSION_EVENT",G.QK,{onSuccess:()=>{if(null==h?void 0:h.length){const e=h.filter(e=>"progression"===e.eventType);e[0]&&Ln(e[0],m,s)}}}),(0,t.useEffect)(()=>{n&&(null==p?void 0:p.length)&&p.forEach(e=>{Ln(e,m,s)})},[n,p,s,m]);if(!(null===(l=e.content)||void 0===l||null===(l=l.items)||void 0===l?void 0:l.length)||!(null===(a=e.content)||void 0===a?void 0:a.header)&&!d)return null;const{header:g,items:x}=e.content,v=(0,O.jsx)(V._N,jn(jn({},{carouselName:"ProductHighlightsCarousel",carouselHeaderText:"",itemsMaxHeight:!0,itemsVisible:{sm:1,md:3,lg:3},pagingPersistent:!1,peek:!0,wrapItems:!0,navigationIconId:{next:"next-button",prev:"prev-button"},buttonText:{nextButton:"",prevButton:""}}),{},{children:x.map((e,n)=>(0,O.jsx)(Fn,{data:e},`product-highlights-carousel-item-${n}`))}));return(0,O.jsx)(I.N,{padding:{blockstart:"unset",blockend:"eight"},children:(0,O.jsxs)("div",{children:[g&&(0,O.jsx)(S.M,{tag:"h2",size:5,className:u?"is-visually-hidden":"",children:g.text}),(0,O.jsx)(I.N,{padding:{blockstart:u?"unset":"four"},children:v})]})})};Mn.displayName="ProductHighlightsCarousel";const On=["items","dataTestId","renderItem"],Rn=e=>{const{items:n,dataTestId:i,renderItem:r}=e,l=tn(e,On);return(0,O.jsx)((0,t.useMemo)(()=>(0,m.I)(e=>(0,O.jsx)(X.y,jn(jn({},e),{},{bullet:"no-bullet","data-test-id":i,children:null==n?void 0:n.map((e,n)=>(0,O.jsx)(Z.x,{children:r(e,n)},`highlight-list-element-${n}`))}))),[n,i,r]),jn({},l))};Rn.displayName="HighlightListWithGrid";const $n=({isColumnView:e,data:n})=>{if("ShoppingProductContentGraphicsItem"!==n.__typename)return null;const{referrerId:i,linkName:t}=(null==n?void 0:n.impressionAnalytics)||{},r=(null==n?void 0:n.text)&&(0,O.jsx)(J.g,{backgroundTheme:"secondary",padded:!0,children:(0,O.jsxs)(u.X,{direction:"row",space:"four",alignItems:"center",blockSize:"full_size",children:[(null==n?void 0:n.leadingIcon)&&(0,O.jsx)(d.LD,{name:n.leadingIcon.id,size:d.So.MEDIUM}),(0,O.jsx)(A.D,{children:n.text})]})});return(0,O.jsx)(h.T,{colSpan:e?void 0:{small:4,medium:3,large:3},children:(0,O.jsx)("div",{children:i&&t?(0,O.jsx)(C.ee,{trackOnce:!0,referrerId:i,linkName:t,className:"uitk-layout-flex-block-size-full-size",children:r}):r})})},Hn=({data:e,className:n,isStandaloneLodging:i=!0})=>{var r,l,a,s;const{track:o}=(0,C._q)(),{context:d}=(0,L.R)(),{ref:c,inView:u}=(0,Q.Wx)({triggerOnce:!0}),p=Tn(),m=(0,U.ix)({mobileDeviceType:We.MOBILE_PHONE,anonymousAuthState:Ve.ANONYMOUS,isStandaloneLodging:i}),h=(null==d||null===(r=d.device)||void 0===r?void 0:r.type)===We.MOBILE_PHONE,g=p&&!h||null===(null==e||null===(l=e.content)||void 0===l?void 0:l.header)&&m,{adaptExAttemptEvents:x,campaignId:v,adaptExSuccessEvents:y}=(null==e?void 0:e.adaptExCampaignEvents)||{};(0,W._H)("ADAPTEX_HIGHLIGHTS_PROGRESSION_EVENT",G.QK,{onSuccess:()=>{if(null==y?void 0:y.length){const e=y.filter(e=>"progression"===e.eventType);e[0]&&Ln(e[0],v,o)}}}),(0,t.useEffect)(()=>{u&&(null==x?void 0:x.length)&&x.forEach(e=>{Ln(e,v,o)})},[x,u,o,v]);const j=(0,t.useCallback)((e,n)=>(0,O.jsx)($n,{data:e,isColumnView:n}),[]);if(!(null===(a=e.content)||void 0===a?void 0:a.items)||!(null===(s=e.content)||void 0===s?void 0:s.header)&&!m)return null;const{header:f,items:b}=e.content,k=(0,O.jsx)(Rn,{items:b,renderItem:e=>j(e,!1),space:"two",alignItems:"stretch",justifyContent:"start",rows:b.length,dataTestId:"row-view"});return(0,O.jsx)(I.N,{padding:{blockend:"eight"},children:(0,O.jsxs)("div",{ref:c,className:n,children:[(null==f?void 0:f.text)&&(0,O.jsx)(S.M,{tag:"h2",size:5,className:g?"is-visually-hidden":"",children:f.text}),(0,O.jsx)(I.N,{padding:{blockstart:g?"unset":"four"},children:(0,O.jsx)("div",{children:k})})]})})};Hn.displayName="ProductHighlightsList";const Bn=({isColumnView:e,data:n,isInTopPDPRedesignVariant:i=!1,isLuxuryProperty:r=!1,isPDPUIHygienePhase1Variant:l=!1,isRichTopContentPLPVariant:a=!1})=>{const s=(0,t.useMemo)(()=>({clientPayload:wn(Cn.HIGHLIGHTS_PRESENTED,_n,Dn),serverPayload:"ShoppingProductContentGraphicsItem"===n.__typename?n.clickStreamAnalytics:void 0}),[n]);if("ShoppingProductContentGraphicsItem"!==n.__typename)return null;const o=i&&!r||l||a?"unset":"two",c=l||a,m=a?6:7,g=(null==n?void 0:n.text)&&(null==n?void 0:n.subText)&&(0,O.jsx)(J.g,{backgroundTheme:"primary",padded:!1,overflow:i,children:(0,O.jsx)(I.N,{padding:{inline:o},children:(0,O.jsxs)(u.X,{direction:e?"column":"row",space:"four",alignItems:"center",blockSize:"full_size",children:[(null==n?void 0:n.leadingIcon)&&(0,O.jsx)(p.C,{children:(0,O.jsx)("div",{children:(0,O.jsx)(d.LD,{spotlight:"standard",name:n.leadingIcon.id,size:d.So.MEDIUM})})}),(0,O.jsx)(p.C,{children:(0,O.jsxs)("div",{children:[c?(0,O.jsx)(S.M,{size:m,align:e?"center":"left",children:n.text}):(0,O.jsx)(A.D,{size:300,weight:"medium",align:e?"center":"left",children:n.text}),(0,O.jsx)(I.N,{padding:l?{blockstart:"one"}:void 0,children:(0,O.jsx)(A.D,{size:300,weight:"regular",align:e?"center":"left",children:n.subText})})]})})]})})});return g?(0,O.jsx)(C.E0,{trackOnce:!0,eventData:s,children:(0,O.jsx)(h.T,{colSpan:e?void 0:{small:2,medium:3,large:3},children:g})}):null},zn=({data:e,isPropertyBookable:n,isLuxuryProperty:i=!1,isStandaloneLodging:r=!0,disableHeader:l=!1,isRichTopContentPLPVariant:a=!1})=>{var s,o,d;const{track:c}=(0,C._q)(),{ref:u,inView:p}=(0,Q.Wx)({triggerOnce:!0}),m=(0,M.eg)({viewSizes:M.pf})===M.pf.SMALL,h=Tn(),g=(0,U.ix)({mobileDeviceType:We.MOBILE_PHONE,anonymousAuthState:Ve.ANONYMOUS,isStandaloneLodging:r}),x=l||h&&!m||null===(null==e||null===(s=e.content)||void 0===s?void 0:s.header)&&g,v=1===(0,_.useExperiment)("PDP_UI_Hygiene_Phase_1",!1).exposure.bucket,{adaptExAttemptEvents:y,campaignId:j,adaptExSuccessEvents:f}=(null==e?void 0:e.adaptExCampaignEvents)||{};(0,W._H)("ADAPTEX_HIGHLIGHTS_PROGRESSION_EVENT",G.QK,{onSuccess:()=>{if(null==f?void 0:f.length){const e=f.filter(e=>"progression"===e.eventType);e[0]&&Ln(e[0],j,c)}}}),(0,t.useEffect)(()=>{n&&p&&(null==y?void 0:y.length)&&y.forEach(e=>{Ln(e,j,c)})},[n,y,p,c,j]);const b=(0,t.useCallback)(e=>(0,O.jsx)(Bn,{data:e,isColumnView:!1,isLuxuryProperty:i,isInTopPDPRedesignVariant:h,isPDPUIHygienePhase1Variant:v,isRichTopContentPLPVariant:a}),[i,h,v,a]);if(!(null===(o=e.content)||void 0===o||null===(o=o.items)||void 0===o?void 0:o.length)||!(null===(d=e.content)||void 0===d?void 0:d.header)&&!g&&!l)return null;const{header:k,items:N,impressionAnalytics:A}=e.content,{referrerId:P,linkName:E}=A||{},T=(0,O.jsx)(Rn,{items:N,renderItem:b,space:a?"four":"two",alignItems:"start",justifyContent:"stretch",rows:N.length,dataTestId:"row-view"}),L=(0,O.jsx)(I.N,{padding:{blockstart:"unset",blockend:"eight"},children:(0,O.jsxs)("div",{ref:u,children:[(null==k?void 0:k.text)&&(0,O.jsx)(S.M,{tag:"h2",size:5,className:x?"is-visually-hidden":"",children:k.text}),(0,O.jsx)(I.N,{padding:{blockstart:x?"unset":"four"},children:(0,O.jsx)("div",{children:T})})]})});return P&&E?(0,O.jsx)(C.ee,{trackOnce:!0,referrerId:P,linkName:E,children:L}):L};zn.displayName="ProductHighlightsSpotlightList";const Vn=({data:e,isStandaloneLodging:n=!0})=>{var i,t,r,l;const a=(0,U.ix)({mobileDeviceType:We.MOBILE_PHONE,anonymousAuthState:Ve.ANONYMOUS,isStandaloneLodging:n});if(!(null===(i=e.content)||void 0===i||null===(i=i.items)||void 0===i?void 0:i.length)||!(null===(t=e.content)||void 0===t?void 0:t.header)&&!a)return null;const{content:s}=e,{header:o,items:c}=s,m=null===(r=s.impressionAnalytics)||void 0===r?void 0:r.referrerId,h=null===(l=s.impressionAnalytics)||void 0===l?void 0:l.linkName,g=(0,O.jsx)(I.N,{padding:{blockend:"six"},children:(0,O.jsx)("div",{children:(0,O.jsx)(J.g,{backgroundTheme:K.g5.SECONDARY,tag:"section",children:(0,O.jsx)(I.N,{padding:"four",children:(0,O.jsxs)("div",{children:[o&&(0,O.jsx)(I.N,{margin:{blockend:"three"},children:(0,O.jsxs)(u.X,{space:"two",alignItems:"center",children:[o.icon&&(0,O.jsx)(p.C,{children:(0,O.jsx)(d.LD,{spotlight:"positive",name:o.icon.id,id:o.icon.id,description:o.icon.description})}),o.text&&(0,O.jsx)(p.C,{children:(0,O.jsxs)("div",{children:[(0,O.jsx)(I.N,{padding:{blockend:"one"},children:(0,O.jsx)(S.M,{size:5,children:o.text})}),o.subText&&(0,O.jsx)(A.D,{children:o.subText})]})})]})}),(null==c?void 0:c.length)>0&&(0,O.jsx)(u.X,{space:"two",direction:"column",children:c.map((e,n)=>((e,n)=>"EGDSPlainText"===(null==e?void 0:e.__typename)?(0,O.jsx)(p.C,{children:(0,O.jsx)(I.N,{margin:{inline:"one"},children:(0,O.jsx)(X.y,{spacing:!1,children:(0,O.jsx)(Z.x,{children:e.text},`product-highlight-section-item-text${n}`)})})},`product-highlight-section-item-${n}`):null)(e,n))})]})})})})});return m&&h?(0,O.jsx)(C.ee,{trackOnce:!0,referrerId:m,linkName:h,children:g}):g},Wn=T.J1`
  fragment ProductHighlightsSectionFragment on ProductHighlightsSection {
    highlightsType
    content {
      header {
        text
        subText
        icon {
          id
          description
          spotLight
        }
      }
      items {
        ... on EGDSPlainText {
          text
          __typename
        }
        ... on ShoppingProductContentGraphicsItem {
          impressionAnalytics {
            referrerId
            linkName
          }
          leadingIcon {
            id
            description
          }
          text
          subText
          clickStreamAnalytics
          __typename
        }
      }
      impressionAnalytics {
        event
        referrerId
        linkName
      }
    }
    adaptExCampaignEvents {
      campaignId
      adaptExAttemptEvents {
        ...ShoppingAdaptExEventsFragment
      }
      adaptExSuccessEvents {
        ...ShoppingAdaptExEventsFragment
      }
    }
  }
  ${T.J1`
  fragment ShoppingAdaptExEventsFragment on ShoppingAdaptExEvent {
    banditDisplayed
    eventTarget
    eventType
    payloadId
  }
`}
`,Un=({data:e,isPropertyBookable:n,isLuxuryProperty:i=!1,isStandaloneLodging:t=!0,disableHeader:r=!1,isRichTopContentPLPVariant:l=!1})=>{switch(e.highlightsType){case"HIGHLIGHTS_LIST":return(0,O.jsx)(Hn,{data:e,isStandaloneLodging:t});case"HIGHLIGHTS_CAROUSEL":return(0,O.jsx)(Mn,{data:e,isPropertyBookable:n,isStandaloneLodging:t});case"HIGHLIGHTS_SPOTLIGHT_LIST":return(0,O.jsx)(zn,{data:e,isPropertyBookable:n,isLuxuryProperty:i,isStandaloneLodging:t,disableHeader:r,isRichTopContentPLPVariant:l});case"FAMILY_HIGHLIGHTS":return(0,O.jsx)(Vn,{data:e,isStandaloneLodging:t});default:return null}};Un.displayName="ProductHighlightsSection",Un.fragment=Wn;const Gn=T.J1`
  fragment ProductUniquenessFragment on ProductUniqueness {
    impression {
      ... on ClientSideImpressionEventAnalytics {
        linkName
        referrerId
        event
        uisPrimeMessages {
          messageContent
          schemaName
        }
      }
    }
    title {
      ...LodgingEGDSGraphicTextFragment
    }
    details {
      ...EGDSSpannableListFragment
    }
  }

  ${D.TLj.fragment}
  ${D.EWg.fragment}
`,Kn="PAGE_SPEC",Jn=new RegExp(Kn,"g"),Yn=(e,n)=>e.uisPrimeMessages.map(({messageContent:e,schemaName:i})=>({messageContent:JSON.parse(e.includes(Kn)&&n?e.replace(Jn,n):e),schemaName:i})),qn=({data:e,onClickReviews:n,triggerRef:i,pageId:t})=>{const{title:r,details:l,impression:a}=e,s=(0,O.jsx)(I.N,{padding:{blockend:"six"},children:(0,O.jsx)("div",{children:(0,O.jsx)(m.w,{columns:4,children:(0,O.jsx)(h.T,{colSpan:{small:4,medium:3},children:(0,O.jsx)("div",{children:(0,O.jsx)(J.g,{backgroundTheme:"secondary",padded:!0,children:(0,O.jsx)("div",{children:(0,O.jsx)(I.N,{padding:"two",children:(0,O.jsxs)("div",{children:[r&&(0,O.jsx)(D.TLj,{customTextSize:400,flexLayout:!0,data:r,textProps:{weight:"medium",theme:"default"}}),l&&(0,O.jsx)(I.N,{padding:{blockstart:"two",inline:"two"},children:(0,O.jsx)("div",{children:(0,O.jsx)(D.EWg,{trackingPrefix:t,handleInlineLinkClick:n,triggerRef:i,data:l})})})]})})})})})})})})});return a.referrerId&&a.linkName?(0,O.jsx)(C.ee,{referrerId:`${t?`${t}.${a.referrerId}`:a.referrerId}`,linkName:a.linkName,additionalUisPrimeMicroMessages:a.uisPrimeMessages?Yn(a,t):{},trackOnce:!0,children:s}):s};qn.displayName="ProductUniqueness",qn.fragment=Gn;const Qn=({isLuxuryProperty:e=!1})=>(0,O.jsx)(I.N,{padding:{blockstart:"unset",blockend:"eight"},children:(0,O.jsx)("div",{className:"loading-skeleton",children:(0,O.jsx)(J.g,{padded:!1,children:(0,O.jsx)(I.N,{padding:{inline:Tn()&&!e?"unset":"two"},children:(0,O.jsxs)(u.X,{space:"four",direction:"column",children:[(0,O.jsx)(p.C,{children:(0,O.jsx)(j.R,{type:"line",animation:!0,lineLength:"primary"})}),(0,O.jsx)(p.C,{style:{width:"320px"},children:(0,O.jsx)(Y.E,{padded:!1,children:(0,O.jsx)(ee.M,{ratio:ee.l.R21_9,style:{height:"100px"},children:(0,O.jsx)(f.U,{animation:!0,type:"rounded"})})})})]})})})})}),Xn=T.J1`
  query ProductHighlightsQuery($context: ContextInput!, $productIdentifier: ProductIdentifierInput!) {
    productHighlights(context: $context, productIdentifier: $productIdentifier) {
      ... on ProductUniqueness {
        ...ProductUniquenessFragment
      }
      ... on ProductHighlightsSection {
        ...ProductHighlightsSectionFragment
      }
    }
  }

  ${qn.fragment}
  ${Un.fragment}
`,Zn=({inputs:e,onClickReviews:n,triggerRef:i,pageId:t,skipSsr:r,isPropertyBookable:l,isLuxuryProperty:a,disableHeader:s=!1,isRichTopContentPLPVariant:o=!1,prefetchedData:d})=>{var c,u,p,m;const h=(0,z.kY)(),{context:g}=(0,L.R)(),{data:x,error:v,loading:y}=(0,T.IT)(Xn,{variables:jn(jn({},e),{},{context:g}),skip:(null==h||null===(c=h.product)||void 0===c?void 0:c.productHighlights)||d,ssr:!r,context:{batchKey:"default-product-details-experience-batch-key",shouldLogPerformance:!0}}),j=null!==(u=null!=d?d:null==x?void 0:x.productHighlights)&&void 0!==u?u:null==h||null===(p=h.product)||void 0===p?void 0:p.productHighlights,f=1===(0,_.useExperiment)("PDP_Highlights_Adaptex_Iteration_2",!1).exposure.bucket,I=!(null==e||null===(m=e.productIdentifier)||void 0===m||null===(m=m.shoppingContext)||void 0===m?void 0:m.multiItem);if(y&&f)return(0,O.jsx)(Qn,{isLuxuryProperty:a});if(v||!j)return null;switch(j.__typename){case"ProductUniqueness":return(0,O.jsx)(qn,{data:j,onClickReviews:n,triggerRef:i,pageId:t});case"ProductHighlightsSection":return(0,O.jsx)(Un,{data:j,isPropertyBookable:l,isLuxuryProperty:a,isStandaloneLodging:I,disableHeader:s,isRichTopContentPLPVariant:o});default:return null}};Zn.displayName="sharedui-ProductHighlights";const ei=e=>{var n;const{amenityClosures:i}=e,t={columns:2},r=jn(jn({},t),{},{space:"two"}),l=jn(jn({},t),{},{space:"three"});return i&&(null==i||null===(n=i.infoItems)||void 0===n?void 0:n.length)>0&&(0,O.jsx)(I.N,{padding:{blockend:"four"},children:(0,O.jsx)("div",{children:(0,O.jsx)(D.N6d,{data:i,small:jn(jn({},r),{},{prefix:"temporaryClosures"}),large:jn(jn({},l),{},{prefix:"temporaryClosures"})})})})},ni=({highlight:e})=>{const n={columns:2,prefix:"highlightedAmenities",space:"two"},i=e=>jn(jn({},n),{},{columns:e?1:2}),t=jn(jn({},n),{},{space:"two"});return e.map((n,r)=>{const l=e.length>1&&0===r;return n.infoItems.length>0&&(0,O.jsx)(I.N,{padding:{blockend:"six"},children:(0,O.jsx)("div",{children:(0,O.jsx)(D.N6d,{data:n,small:i(l),large:t})})},`highlightedAmenities-section-${r}`)})},ii=e=>{const{property:n}=e;return n.map((e,n)=>{var i;return(null===(i=e.infoItems)||void 0===i?void 0:i.length)>0?(0,O.jsx)(I.N,{padding:{blockend:"four"},children:(0,O.jsx)("div",{children:(0,O.jsx)(D.xiA,{data:e,prefix:"propertyAmenities",contentType:D.TyX.AMENITIES_DIALOG,headingSize:7,className:"uitk-spacing-padding-inlinestart-six",listItemPadding:{blockend:"two",inlinestart:"half"}})})},`propertyAmenities-section-${n}`):null})},ti=T.J1`
  fragment PropertyTakeoverAmenitiesFragment on PropertyTakeoverAmenities {
    amenityClosures {
      ...PropertyInfoContentFragment
    }
    highlight {
      ...PropertyInfoContentFragment
    }
    property {
      ...PropertyInfoContentFragment
    }
  }

  ${D.N6d.fragment}
`,ri=(0,t.forwardRef)((e,n)=>{const{data:i}=e,{amenityClosures:t,highlight:r,property:l}=i;return 0===r.length&&0===l.length?null:(0,O.jsx)("div",{ref:n,children:(0,O.jsxs)(ie.v,{direction:"vertical",children:[(0,O.jsx)(ei,{amenityClosures:t}),(0,O.jsx)(ni,{highlight:r}),(0,O.jsx)(ii,{property:l})]})})});ri.fragment=ti,ri.displayName="PropertyTakeoverAmenities";T.J1`
  query PropertyAmenitiesQuery(
    $context: ContextInput!
    $propertyId: String!
    $shoppingContext: ShoppingContextInput
    $searchCriteria: PropertySearchCriteriaInput
  ) {
    propertyInfo(context: $context, propertyId: $propertyId, shoppingContext: $shoppingContext) {
      summary {
        amenities(searchCriteria: $searchCriteria) {
          takeover {
            ...PropertyTakeoverAmenitiesFragment
          }
          viewAmenitiesAdaptExAttemptEvents {
            campaignId
            events {
              payloadId
              eventType
              eventTarget
              banditDisplayed
            }
          }
        }
      }
    }
  }

  ${ri.fragment}
`;const li=T.J1`
  fragment AmenitiesSimplifiedViewFragment on PropertyInfo {
    __typename
    summary {
      __typename
      amenities(searchCriteria: $searchCriteria) {
        __typename
        topAmenities {
          ...PropertyInfoContentFragment
        }
      }
    }
  }

  ${D.N6d.fragment}
`,ai=e=>{var n;const{data:i}=e,t=null==i||null===(n=i.summary)||void 0===n||null===(n=n.amenities)||void 0===n?void 0:n.topAmenities,r=null==t?void 0:t.infoItems;return t&&r&&0!==r.length?(0,O.jsx)(I.N,{margin:{blockend:"three"},padding:{blockend:"four"},children:(0,O.jsx)("div",{children:(0,O.jsx)(D.N6d,{data:t,small:jn(jn({},{columns:2,space:"two",subset:6}),{},{prefix:"highlightedAmenities"}),large:jn(jn({},{columns:6,rows:1,space:"three",subset:6}),{},{prefix:"highlightedAmenities"})})})}):null};ai.displayName="AmenitiesSimplifiedView",ai.fragment=li;const si=T.J1`
  fragment AmenityDescriptionJumpLinkFragment on PropertyInfoSection {
    action {
      ...LodgingJumpLinkFragment
    }
  }
  ${D.HSO.fragment}
`,oi=({data:{action:e}})=>e?(0,O.jsx)(D.HSO,{data:e}):null;oi.displayName="AmenityDescriptionJumpLink",oi.fragment=si;const di=T.J1`
  fragment AmenityContentFragment on PropertyInfoContent {
    __typename
    header {
      text
    }
    infoItems {
      ... on PropertyInfoItem {
        text
      }
    }
    icon {
      __typename
      iconId: id
    }
    structuredData {
      __typename
      itemprop
      itemscope
      itemtype
    }
  }
`,ci=({data:e,showSpaceBefore:n,expandoList:i})=>{const{header:t,infoItems:r,icon:l,structuredData:a}=e;if(!t)return null;const s="amenityFeature"===(null==a?void 0:a.itemprop),o="availableLanguage"===(null==a?void 0:a.itemprop);return(0,O.jsx)(I.N,{margin:{blockend:"four"},children:(0,O.jsx)("div",{children:(0,O.jsx)(p.C,{maxWidth:"full_width",children:(0,O.jsx)(oe.S,{forceNoBreak:!0,children:(0,O.jsxs)("div",{itemProp:null==a?void 0:a.itemprop,itemScope:null==a?void 0:a.itemscope,itemType:null==a?void 0:a.itemtype,children:[(0,O.jsx)(I.N,{padding:{inlinestart:n?"twelve":"unset"},margin:{inlinestart:n?"two":"unset"},children:(0,O.jsxs)(u.X,{space:"two",children:[!i&&(0,O.jsx)(p.C,{children:(0,O.jsx)(I.N,{padding:{inlineend:"three"},children:(0,O.jsx)(d.LD,{name:(null==l?void 0:l.iconId)||"",size:d.So.MEDIUM})})}),(0,O.jsx)("span",{itemProp:s?"name":void 0,children:(0,O.jsx)(S.M,{tag:"h3",size:i?6:5,children:t.text})})]})}),(null==r?void 0:r.length)>0&&(i?(0,O.jsx)(I.N,{padding:{blockstart:"two",inlinestart:n?"twelve":"unset"},margin:{inlinestart:n?"two":"unset"},children:(0,O.jsx)(X.y,{spacing:!1,bullet:"default",size:2,type:"unordered","data-stid":"am-content-list",children:r.filter(e=>"PropertyInfoItem"===e.__typename).map((e,n)=>(0,O.jsxs)(Z.x,{"data-stid":`amenities-content-item-${n}`,children:[(0,O.jsx)(A.D,{size:300,theme:"standard",children:e.text}),s&&(0,O.jsx)("meta",{itemProp:"value",content:e.text})]},`amenities-content-item-${n}`))})}):(0,O.jsx)(I.N,{padding:{inlinestart:"twelve"},children:(0,O.jsx)("ul",{className:"no-bullet",children:r.filter(e=>"PropertyInfoItem"===e.__typename).map((e,n)=>(0,O.jsx)(I.N,{margin:{blockstart:"two"},children:(0,O.jsxs)("li",{itemProp:o?"name":void 0,children:[(0,O.jsx)(A.D,{size:300,theme:"standard",children:e.text}),s&&(0,O.jsx)("meta",{itemProp:"value",content:e.text})]})},n))})}))]})})})})})};ci.displayName="AmenityContent",ci.fragment=di;const ui={[Ge.INFO]:"info",[Ge.POSITIVE]:"positive",[Ge.WARNING]:"warning",[Ge.STANDARD]:"standard"},pi=T.J1`
  fragment AmenityHeadingSectionFragment on LodgingHeader {
    __typename
    text
    subText
    icon {
      ...IconFragment
    }
  }
  ${D.Int.fragment}
`,mi=({data:e,headingSize:n=4,headingTag:i="h2",showIcon:t=!1})=>{const{text:r,subText:l,icon:a}=e;if(!r)return null;const s=n&&[3,4].includes(n)?{customStyle:4===n?"headline-large":"headline-extra-large"}:void 0;return(0,O.jsx)(O.Fragment,{children:(null==a?void 0:a.id)&&t?(0,O.jsxs)(u.X,{space:(null==a?void 0:a.id)?"two":void 0,alignItems:"center",children:[(0,O.jsx)(p.C,{children:(0,O.jsx)(d.LD,{id:a.id,name:a.id,description:null==a?void 0:a.description,size:(null==a?void 0:a.iconSize)?d.So[a.iconSize]:d.So.MEDIUM,spotlight:a.spotLight?ui[a.spotLight]:void 0})}),(0,O.jsx)(p.C,{children:(0,O.jsx)(S.M,{tag:i,typeStyle:s,size:n,tabIndex:-1,children:r})})]}):(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(S.M,{tag:i,typeStyle:s,size:n,tabIndex:-1,children:r}),l&&(0,O.jsx)(A.D,{spacing:"two",children:l})]})})};mi.displayName="AmenityHeading",mi.fragment=pi;const hi=T.J1`
  fragment PropertyDetailsAmenitySectionFragment on PropertyInfoSection {
    __typename
    header {
      ...AmenityHeadingSectionFragment
    }
    contents {
      ...AmenityContentFragment
    }
    expando {
      collapseButton {
        text
        accessibilityLabel
        analytics {
          eventType
          referrerId
          linkName
        }
      }
      expandButton {
        text
        accessibilityLabel
        analytics {
          eventType
          referrerId
          linkName
        }
      }
      items
      ... on LodgingExpandoPeek {
        expanded
      }
    }
    ...AmenityDescriptionJumpLinkFragment
  }

  ${mi.fragment}
  ${ci.fragment}
  ${oi.fragment}
`,gi=({data:e,isExpandoSection:n,displayThreshold:i,isFullyCollapsible:r,expandoList:l})=>{var a,s,o,d,c,u,p;const{context:g}=(0,L.R)(),x=(null==g||null===(a=g.device)||void 0===a?void 0:a.type)===We.MOBILE_PHONE,{contents:v,header:y,expando:j}=e||{},[f,b]=(0,t.useState)(!1),S=(0,C.KY)();if(!(null==v?void 0:v.length))return null;const{expandButton:k,collapseButton:N,items:A}=j||{},P=f?null==N||null===(o=N.analytics)||void 0===o?void 0:o.referrerId:null==k||null===(s=k.analytics)||void 0===s?void 0:s.referrerId,E=f?null==N||null===(c=N.analytics)||void 0===c?void 0:c.linkName:null==k||null===(d=k.analytics)||void 0===d?void 0:d.linkName,T={id:null!=P?P:"",description:null!=E?E:"",callback:(e,n)=>{S(e,n)}},_=j&&A&&A>0,D=()=>A&&A<0?i:A&&A>0&&x?A:0;return(0,O.jsx)(O.Fragment,{children:n||_?(0,O.jsxs)(M.LM,{children:[(0,O.jsx)(M.NP,{children:(0,O.jsxs)(O.Fragment,{children:[y&&(0,O.jsx)(I.N,{padding:{blockend:"six"},children:(0,O.jsx)("div",{children:(0,O.jsx)(mi,{data:y})})}),(0,O.jsx)(re.A,{analytics:T,isVisible:f,handleClick:()=>b(e=>!e),expandLabel:null==k?void 0:k.text,collapseLabel:null==N?void 0:N.text,items:D(),hideScrim:!_,children:(0,O.jsx)("div",{children:v.map((e,n)=>(0,O.jsx)(ci,{data:e},`amenity-content-${n}`))})})]})}),(0,O.jsx)(M.zQ,{children:(0,O.jsxs)(m.w,{columns:{medium:3},space:"six",children:[y&&(0,O.jsx)(h.T,{colSpan:1,children:(0,O.jsx)("div",{children:(0,O.jsx)(mi,{data:y})})}),(0,O.jsx)(h.T,{colSpan:2,children:(0,O.jsx)(re.A,{analytics:T,isVisible:f,handleClick:()=>b(e=>!e),expandLabel:null==k?void 0:k.text,collapseLabel:null==N?void 0:N.text,expandA11yLabel:null!==(u=null==k?void 0:k.accessibilityLabel)&&void 0!==u?u:"",collapseA11yLabel:null!==(p=null==N?void 0:N.accessibilityLabel)&&void 0!==p?p:"",items:D(),hideScrim:!0,children:(0,O.jsx)(se.f,{minWidth:"half_width",columns:2,space:"twelve",children:v.map((e,n)=>(0,O.jsx)(ci,{data:e},`amenity-content-${n}`))})})})]})})]}):(0,O.jsxs)(M.LM,{children:[(0,O.jsx)(M.NP,{children:(0,O.jsxs)(O.Fragment,{children:[y&&!r&&(0,O.jsx)(I.N,{padding:{blockend:"six"},children:(0,O.jsx)("div",{children:(0,O.jsx)(mi,{data:y})})}),v.map((e,n)=>{var i;return(0,O.jsx)(ci,{data:e,expandoList:l,showSpaceBefore:!(!l||!(null==y||null===(i=y.icon)||void 0===i?void 0:i.id))},`amenity-content-${n}`)})]})}),(0,O.jsx)(M.zQ,{children:(0,O.jsxs)(m.w,{columns:{medium:l?1:3},space:"six",children:[y&&!r&&(0,O.jsx)(h.T,{colSpan:1,children:(0,O.jsx)("div",{children:(0,O.jsx)(mi,{data:y})})}),(0,O.jsx)(h.T,{colSpan:r?void 0:2,colStart:r&&0!==i?2:void 0,colEnd:r&&0!==i?4:void 0,children:(0,O.jsx)(se.f,{minWidth:"half_width",columns:2,space:"twelve",children:v.map((e,n)=>{var i;return(0,O.jsx)(ci,{data:e,showSpaceBefore:!(!l||!(null==y||null===(i=y.icon)||void 0===i?void 0:i.id)),expandoList:l},`amenity-content-${n}`)})})})]})})]})})};gi.displayName="AmenitySection",gi.fragment=hi;const xi=({title:e,body:n,expando:i,isListWithIcon:r=!1})=>{var l,a,s,o;const d=(0,C.KY)(),{expandButton:c,collapseButton:u,expanded:p}=i||{},[m,h]=(0,t.useState)(!!p),g=m?null==u||null===(a=u.analytics)||void 0===a?void 0:a.referrerId:null==c||null===(l=c.analytics)||void 0===l?void 0:l.referrerId,x=m?null==u||null===(o=u.analytics)||void 0===o?void 0:o.linkName:null==c||null===(s=c.analytics)||void 0===s?void 0:s.linkName,v=(0,t.useCallback)(()=>{g&&x&&d(g,x),h(e=>!e)},[m]);return r?(0,O.jsx)(ue.e,{children:(0,O.jsx)(pe.x,{isVisible:m,isIndented:!1,onToggle:v,triggerPosition:"trailing",expandoTitle:e,expandoDescription:n})}):(0,O.jsx)(le.f,{children:(0,O.jsx)(ae.U,{isVisible:m,onToggle:()=>{g&&x&&d(g,x),h(e=>!e)},triggerPosition:"trailing",expandoTitle:e,expandoDescription:n})})},vi=T.J1`
  fragment PropertyDetailsAmenityDescriptionFragment on PropertyInfo {
    __typename
    summary {
      __typename
      amenities(searchCriteria: $searchCriteria) {
        __typename
        amenities {
          ...PropertyDetailsAmenitySectionFragment
        }
        viewAmenitiesAdaptExAttemptEvents {
          campaignId
          events {
            payloadId
            eventType
            eventTarget
            banditDisplayed
          }
        }
        reserveAdaptExSuccessEvents {
          campaignId
          events {
            payloadId
            eventType
            eventTarget
            banditDisplayed
          }
        }
      }
    }
  }

  ${gi.fragment}
`,yi=e=>{var n;const{data:i,isExpandoSection:r,displayThreshold:l,disableSectionSeparator:a,showBorder:s=!1,showSeparator:o=!1,displayBlockStart:d=!0,disableInlineSpacing:c=!1}=e,{amenities:u,viewAmenitiesAdaptExAttemptEvents:p}=(null==i||null===(n=i.summary)||void 0===n?void 0:n.amenities)||{},m=null==u?void 0:u.length,h=d?"six":void 0,g=0===l&&r,[,x]=(0,te.DH)(),{track:v}=(0,C._q)(),{ref:y,inView:j}=(0,Q.Wx)({triggerOnce:!0,threshold:.1});return(0,t.useEffect)(()=>{j&&(null==p?void 0:p.length)&&x(()=>{p.forEach(e=>{var n,i,t;v(C.p3.EVENT,{data:(0,D.T4o)({campaignId:e.campaignId,payloadId:(null===(n=e.events[0])||void 0===n?void 0:n.payloadId)||"",eventType:(null===(i=e.events[0])||void 0===i?void 0:i.eventType)||"",eventTarget:(null===(t=e.events[0])||void 0===t?void 0:t.eventTarget)||""})})})})},[p,j,v]),u&&m?(0,O.jsx)(I.N,{padding:s?"unset":{blockstart:h,blockend:g?void 0:"six",small:{inline:"three"},medium:{inline:c?"unset":"three"},large:{inline:c?"unset":"six"}},children:(0,O.jsx)(J.g,{ref:y,style:{borderRadius:g?"0px":"1rem"},children:u.map((e,n)=>{var i;const t=n===m-1,d=t?void 0:"bottom",c=e.header?(0,O.jsx)(mi,{data:e.header,headingSize:g?6:4,headingTag:g?"h3":"h2",showIcon:g}):null,u=Boolean(c)&&(0===(null==e||null===(i=e.expando)||void 0===i?void 0:i.items)||0===l),p=(0,O.jsx)(I.N,{margin:u&&!g?{small:{blockstart:"six"},large:{blockstart:"unset"}}:void 0,children:(0,O.jsxs)(Y.E,{border:a?void 0:d,padded:!1,children:[(0,O.jsx)(gi,{data:e,isExpandoSection:u?void 0:r,displayThreshold:l,isFullyCollapsible:u,expandoList:g}),(0,O.jsx)(oi,{data:e})]})}),h=(0,O.jsx)(I.N,{margin:t&&!g?void 0:{blockend:u&&s?"two":g?void 0:"six"},padding:s?{inline:"six",block:"three"}:{blockend:t||o?"unset":"three"},children:u?(0,O.jsxs)("div",{children:[(0,O.jsx)(xi,{title:c,body:p,expando:e.expando,isListWithIcon:!!g}),o&&(0,O.jsx)(b.j,{blockMargin:"four"})]}):p},`amenity-section-${n}`);return s?(0,O.jsx)(J.g,{border:!0,children:h},`amenity-section-${n}`):h})})}):null};yi.displayName="AmenityDescription",yi.fragment=vi;const ji=T.J1`
  fragment BookByPhoneFragment on PropertyInfo {
    telesales {
      telesalesNumber {
        phoneNumber
        value
      }
      description {
        value
      }
      tracking {
        linkName
        referrerId
      }
    }
  }
`,fi=e=>{const{data:n,className:i}=e,r=(0,C.KY)(),l=(0,t.useCallback)((e,n)=>{r(n,e)},[r]);if(!(null==n?void 0:n.telesales))return null;const{telesales:a}=n,{telesalesNumber:s,description:o,tracking:d}=a,{phoneNumber:c,value:p}=s,m=o.value,{linkName:h,referrerId:g}=d;return(0,O.jsxs)(u.X,{justifyContent:"center",className:i,children:[(0,O.jsx)(I.N,{padding:{inlineend:"two"},children:(0,O.jsx)(k.u,{size:1,children:m})}),(0,O.jsx)(me.i,{onClick:()=>l(h,g),inline:!0,children:(0,O.jsx)("a",{href:p,children:(0,O.jsx)("span",{"data-stid":"telesales-number",children:c})})})]})};fi.displayName="BookByPhone",fi.fragment=ji;const Ii=e=>{const{callToAction:{promptId:n,contextValues:i,callToAction:t},withHorizontalLine:r=!1,align:l="left"}=e,a=(0,C.KY)(),[,s]=(0,he.useDialog)(n,"cdfPromptDialog");if("EGDSStandardLink"!==t.__typename)return null;const o=null==t?void 0:t.action.analytics,c=null==t?void 0:t.text,u=null==t?void 0:t.icon,p=(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(me.i,{onClick:()=>{s.openDialog(),a(o.referrerId,o.linkName)},align:l,children:(0,O.jsxs)("button",{type:"button",children:[(0,O.jsx)(d.LD,{name:(null==u?void 0:u.id)||"",size:(null==u?void 0:u.size)&&d.So[u.size]},null==u?void 0:u.id),c]})}),r&&(0,O.jsx)("div",{children:(0,O.jsx)(b.j,{blockMargin:"eight"})})]}),m={referrerId:`${null==o?void 0:o.referrerId}.impressed`,linkName:"Direct feedback call to action"},h=(0,O.jsxs)(O.Fragment,{children:[p,(0,O.jsx)(ge.jE,{contextValues:i,inputs:{promptId:n}})]});return(null==o?void 0:o.referrerId)?(0,O.jsx)(C.ee,{trackOnce:!0,referrerId:m.referrerId,linkName:m.linkName,children:h}):h};Ii.displayName="DirectFeedbackCallToAction";const bi=T.J1`
  fragment __PropertyDirectFeedbackPromptIdFragment on PropertyInfo {
    directFeedback {
      __typename
      callToAction {
        callToAction {
          ... on EGDSStandardLink {
            action {
              analytics {
                linkName
                referrerId
              }
            }
            icon {
              id
              size
            }
            text
          }
        }
        promptId
        contextValues {
          key
          value
        }
      }
    }
  }
`,Si=({data:{directFeedback:e},withHorizontalLine:n,align:i})=>{var t;const r=1===(0,_.useExperiment)("PDP_UI_Hygiene_Phase_1",!1).exposure.bucket,l=r?{small:{block:"four"},large:{block:"six"}}:{blockstart:"four"};return(null==e||null===(t=e.callToAction)||void 0===t?void 0:t.promptId)?(0,O.jsx)(I.N,{margin:l,children:(0,O.jsx)("div",{children:(0,O.jsx)(Ii,{callToAction:null==e?void 0:e.callToAction,withHorizontalLine:!r&&n,align:i})})}):null};Si.displayName="PropertyDirectFeedbackCallToAction",Si.fragment=bi;const ki=T.J1`
  fragment FaqFragment on PropertyFAQ {
    question {
      text
    }
    answer {
      text
    }
  }
`,Ni=({data:e,rfrr:n,showWithExpando:i=!0,inlineSpacingStart:r})=>{const{question:l,answer:a}=e||{},s=1===(0,_.useExperiment)("PDP_UI_Hygiene_Phase_1",!1).exposure.bucket,o=(0,M.s5)({[M.OB.LARGE]:5,[M.OB.SMALL]:6}),[d,c]=(0,t.useState)(!1),u=(0,C.KY)(),p=(0,t.useCallback)(()=>{c(!d)},[d]),m=(0,t.useCallback)((e,n)=>{u(e,n)},[u]);if(!(null==l?void 0:l.text)||!(null==a?void 0:a.text))return null;const h=e=>s?(0,O.jsx)(S.M,{size:o,className:e,children:l.text}):(0,O.jsx)(S.M,{tag:"h3",size:6,className:e,children:l.text}),g=(0,O.jsx)(k.u,{typeStyle:{customStyle:"paragraph-large"},children:a.text});return i?(0,O.jsx)(ae.U,{expandoTitle:h("uitk-type-bold"),expandoDescription:s?g:(0,O.jsx)("div",{dangerouslySetInnerHTML:{__html:a.text}}),isVisible:d,onToggle:p,analytics:{id:`${n}.${d?"close":"open"}`,description:"See frequently asked questions",callback:m}}):(0,O.jsx)(I.N,{margin:{inlinestart:r?"two":void 0},padding:{blockend:"six",inlinestart:r?"twelve":void 0},children:(0,O.jsxs)("div",{children:[h(),(0,O.jsx)(I.N,{padding:{blockstart:"two"},children:s?g:(0,O.jsx)(A.D,{weight:"regular",theme:"standard",children:(0,O.jsx)("div",{dangerouslySetInnerHTML:{__html:a.text}})})})]})})};Ni.displayName="Faq",Ni.fragment=ki;const Ai=({faqs:e})=>{const n=(e=>{if(!e||!e.length)return null;const n={"@context":"https://schema.org","@type":"FAQPage",mainEntity:e.map(e=>{const n=e.answer.text.replace(/"/g,'\\"');return{name:e.question.text,"@type":"Question",acceptedAnswer:{"@type":"Answer",text:n}}})};return JSON.stringify(n)})(e);return n?(0,O.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:n}}):null},Pi=T.J1`
  fragment FrequentlyAskedQuestionsFragment on PropertyInfo {
    id
    frequentlyAskedQuestions {
      title {
        text
        subText
        icon {
          id
          title
          description
          size
          spotLight
        }
      }
      askAQuestion {
        primary
        analytics {
          referrerId
          linkName
        }
      }
      faqs {
        ...FaqFragment
      }
      expando {
        ... on LodgingExpandoPeek {
          expanded
        }
        collapseButton {
          text
          accessibilityLabel
          analytics {
            eventType
            referrerId
            linkName
          }
        }
        expandButton {
          text
          accessibilityLabel
          analytics {
            eventType
            referrerId
            linkName
          }
        }
        items
      }
    }
  }
  ${Ni.fragment}
`,Ei=e=>{var n,i,r,l,s,o,c,g;const{context:x}=(0,L.R)(),v=(null==x||null===(n=x.device)||void 0===n?void 0:n.type)===We.MOBILE_PHONE,{data:y,displayThreshold:j,showExpandoPeek:f,showBorder:N=!1,showSeparator:A}=e,P=null==y?void 0:y.frequentlyAskedQuestions,E=null==P?void 0:P.title.text,T=null==P?void 0:P.title.subText,D=null==P?void 0:P.faqs,w=null==P||null===(i=P.title)||void 0===i?void 0:i.icon,[,{openDialog:F}]=(0,he.useDialog)("6fa1b1cb-a4b4-4e36-8560-b9349b8d72e9","cdfPromptDialog"),R=null==P||null===(r=P.askAQuestion)||void 0===r?void 0:r.primary,{referrerId:$,linkName:H}=(null==P||null===(l=P.askAQuestion)||void 0===l?void 0:l.analytics)||{},{expando:B}=P||{},{expandButton:z,collapseButton:V,items:W}=B||{},U=B&&"expanded"in B?B.expanded:null,G=0===j&&f,[K,q]=(0,t.useState)(Boolean(G&&U)),Q=K?null==V||null===(o=V.analytics)||void 0===o?void 0:o.referrerId:null==z||null===(s=z.analytics)||void 0===s?void 0:s.referrerId,X=K?null==V||null===(g=V.analytics)||void 0===g?void 0:g.linkName:null==z||null===(c=z.analytics)||void 0===c?void 0:c.linkName,Z=(0,C.KY)(),ee=1===(0,_.useExperiment)("PDP_UI_Hygiene_Phase_1",!1).exposure.bucket,ne=(0,M.s5)({[M.OB.LARGE]:{customStyle:"headline-large"},[M.OB.SMALL]:{customStyle:"headline-medium"}}),ie=ee?ne:{customStyle:"headline-large"},te=(0,M.s5)({[M.OB.LARGE]:"six",[M.OB.SMALL]:ee?void 0:"six"}),ae=B&&W&&W>0,se=(0,t.useCallback)(()=>{F(),$&&H&&Z($,H)},[H,$,Z,F]);if(!D||0===D.length)return null;const oe=D.slice(0),de={id:null!=Q?Q:"",description:null!=X?X:"",callback:(e,n)=>{Z(e,n)}},ce=oe.map((e,n)=>(0,O.jsx)(Ni,{data:e,rfrr:`HOT.HIS.question.${n}`,showWithExpando:!G,inlineSpacingStart:!!(null==w?void 0:w.id)},`faq-${n}`)),me=(0,O.jsxs)(u.X,{space:(null==w?void 0:w.id)?"two":void 0,alignItems:"center",children:[(null==w?void 0:w.id)&&(0,O.jsx)(p.C,{children:(0,O.jsx)(d.LD,{id:w.id,name:w.id,description:null==w?void 0:w.description,size:(null==w?void 0:w.size)?d.So[w.size]:d.So.MEDIUM,spotlight:w.spotLight?ui[w.spotLight]:void 0})}),(0,O.jsx)(p.C,{children:(0,O.jsx)(I.N,{children:(0,O.jsx)(S.M,{tag:"h3",size:6,children:E})})})]}),xe=(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(ue.e,{children:(0,O.jsx)(pe.x,{analytics:de,triggerPosition:"trailing",isIndented:!1,isVisible:K,onToggle:()=>{q(!K)},expandoDescription:(0,O.jsxs)("div",{children:[ce,(0,O.jsx)(Ai,{faqs:oe})]}),expandoTitle:me})}),A&&(0,O.jsx)(b.j,{blockMargin:"four"})]}),ve=!ee&&!N;return G?xe:(0,O.jsx)(I.N,{padding:N?{inline:"six",block:"three"}:ee?{small:{inline:"three",block:"four"},medium:{inline:"unset"},large:{block:"six"}}:{blockstart:"six",blockend:"six",large:{inline:"six"},extra_large:{inline:"six"}},children:(0,O.jsx)(J.g,{overflow:!0,border:N,children:(0,O.jsxs)(Y.E,{padded:ve,children:[(0,O.jsx)(ge.jE,{inputs:{promptId:"6fa1b1cb-a4b4-4e36-8560-b9349b8d72e9"},contextValues:[{key:"property_id",value:y.id}]}),(0,O.jsxs)(m.w,{space:te,columns:{small:1,medium:1,large:3},children:[(0,O.jsx)(h.T,{colSpan:{small:1,medium:1,large:1},children:E&&(0,O.jsxs)(u.X,{direction:"column",children:[(0,O.jsx)(I.N,{margin:{blockend:"four"},children:(0,O.jsx)(S.M,{tag:"h2",size:4,typeStyle:ie,children:E})}),T&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(I.N,{margin:{blockstart:"one",blockend:"one"},children:(0,O.jsx)(p.C,{children:(0,O.jsx)(k.u,{size:1,children:T})})}),(0,O.jsx)(p.C,{alignSelf:"start",children:(0,O.jsx)(I.N,{margin:{blockstart:"two"},children:(0,O.jsx)(a.y,{id:"ask-a-question",onClick:se,children:R})})})]})]})}),(0,O.jsx)(h.T,{colSpan:{small:1,medium:1,large:2},children:f||ae?(0,O.jsx)(re.A,{analytics:de,collapseLabel:(null==V?void 0:V.text)||void 0,collapseA11yLabel:(null==V?void 0:V.accessibilityLabel)||void 0,expandLabel:(null==z?void 0:z.text)||void 0,expandA11yLabel:(null==z?void 0:z.accessibilityLabel)||void 0,isVisible:K,items:W&&W<0?j:W&&W>0&&v?W:0,handleClick:()=>q(!K),hideScrim:!ae,children:(0,O.jsx)(le.f,{children:ce})}):(0,O.jsx)(le.f,{children:ce})})]}),(0,O.jsx)(Ai,{faqs:oe})]})})})};Ei.displayName="FrequentlyAskedQuestions",Ei.fragment=Pi;const Ti=(0,t.createContext)({}),Li=()=>(0,t.useContext)(Ti),Ci=T.J1`
  fragment InventorySourceFragment on PropertyInfo {
    summary {
      propertySource {
        accessibilityLabel
        label
        graphic {
          __typename
          ... on Mark {
            description
            id
            size
            token
            url {
              value
            }
          }
        }
        text
      }
    }
  }
`,_i=({data:e})=>{var n;const{text:i,graphic:t}=(null==e||null===(n=e.summary)||void 0===n?void 0:n.propertySource)||{};if(!i||""===i)return null;const{id:r,description:l,url:a}="Mark"===(null==t?void 0:t.__typename)&&t||{};return(0,O.jsx)(I.N,{padding:{blockstart:"unset",blockend:"six"},children:(0,O.jsx)("div",{children:(0,O.jsxs)(M.LM,{children:[(0,O.jsx)(M.NP,{children:(0,O.jsx)(J.g,{border:!0,children:(0,O.jsx)(I.N,{padding:"four",children:(0,O.jsxs)(u.X,{space:"one",direction:"column",children:[(0,O.jsx)(p.C,{children:(0,O.jsx)(I.N,{padding:{blockend:"one"},children:(0,O.jsx)("div",{children:(null==a?void 0:a.value)?(0,O.jsx)(xe.D,{url:a.value,size:ve.K.EXTRA_SMALL,description:l}):(0,O.jsx)(xe.D,{name:r,size:ve.K.MEDIUM,description:l})})})}),(0,O.jsx)(p.C,{children:(0,O.jsx)(A.D,{size:300,"data-stid":"inventory-source",children:i})})]})})})}),(0,O.jsx)(M.zQ,{children:(0,O.jsx)(J.g,{border:!0,children:(0,O.jsx)(I.N,{padding:"four",children:(0,O.jsxs)(u.X,{space:"two",alignItems:"center",children:[(0,O.jsx)(p.C,{children:(null==a?void 0:a.value)?(0,O.jsx)(xe.D,{url:a.value,size:ve.K.EXTRA_SMALL,description:l}):(0,O.jsx)(I.N,{padding:{blockend:"one"},children:(0,O.jsx)("div",{children:(0,O.jsx)(xe.D,{name:r,size:ve.K.MEDIUM,description:l})})})}),(0,O.jsx)(p.C,{children:(0,O.jsx)(A.D,{size:300,overflow:"truncate","data-stid":"property-source",children:i})})]})})})})]})})})};_i.fragment=Ci,_i.displayName="InventorySource";const Di=T.J1`
  fragment PropertyNumberFragment on PropertyInfo {
    propertyIdDisplay(identifier: $identifier) {
      ...EGDSSpannableTextFragment
    }
  }
  ${D.$BV.fragment}
`,wi={large:{block:"three",inlinestart:"three"}},Fi={blockstart:"four"},Mi=e=>{const{data:n}=e,i=null==n?void 0:n.propertyIdDisplay;return i?(0,O.jsx)(I.N,{margin:wi,padding:Fi,border:["blockstart"],children:(0,O.jsx)(u.X,{justifyContent:"center",children:(0,O.jsx)(p.C,{children:(0,O.jsx)("div",{children:(0,O.jsx)(D.$BV,{data:i})})})})}):null};Mi.fragment=Di,Mi.displayName="PropertyNumber";const Oi=T.J1`
  fragment RelevantAmenitiesItemFragment on PropertyInfoSection {
    header {
      text
      icon {
        id
        token
      }
      impressionAnalytics {
        event
        referrerId
        linkName
      }
    }
    contents {
      items {
        text
      }
    }
    expando {
      collapseButton {
        text
        accessibilityLabel
        analytics {
          linkName
          referrerId
        }
      }
      expandButton {
        text
        accessibilityLabel
        analytics {
          linkName
          referrerId
        }
      }
    }
  }
`,Ri=({data:e})=>{var n,i,r,l;const{header:a,contents:s,expando:o}=e,c=(0,C.KY)(),[g,x]=(0,t.useState)(!1),v=s.map(e=>e.items.map((e,n)=>e&&(0,O.jsx)(Z.x,{children:e.text},`amenities-list-item-${n}`))),y=(e={})=>(0,O.jsx)(I.N,{margin:{inlinestart:"eight"},children:(0,O.jsx)(X.y,jn(jn({},e),{},{children:v}))}),j=y(),f=(0,m.I)(y),b=(0,O.jsx)(J.g,{border:!0,children:(0,O.jsx)(I.N,{padding:"three",children:(0,O.jsx)(le.f,{children:(0,O.jsx)(ae.U,{isVisible:g,expandoTitle:(0,O.jsxs)(u.X,{space:"two",children:[(null==a?void 0:a.icon)&&(0,O.jsx)(p.C,{children:(0,O.jsx)(d.LD,{name:null==a?void 0:a.icon.id,id:null==a?void 0:a.icon.token})}),(0,O.jsx)(p.C,{children:(0,O.jsxs)(S.M,{children:[null==a?void 0:a.text," ",`(${v.flat().length})`]})})]}),expandoDescription:(0,O.jsxs)(M.LM,{children:[(0,O.jsx)(M.NP,{children:j}),(0,O.jsx)(M.rw,{children:(0,O.jsx)(f,{columns:2})})]}),triggerPosition:"trailing",onToggle:()=>{x(e=>!e)},analytics:(()=>{var e,n;const i=null==o||null===(e=o.collapseButton)||void 0===e?void 0:e.analytics,t=null==o||null===(n=o.expandButton)||void 0===n?void 0:n.analytics;if(!i||!t)return;const r=g?i:t;return{id:r.referrerId,description:r.linkName,callback:(e,n)=>{c(e,n)}}})(),"data-testid":"expando-list-item"})})})}),k=(0,O.jsxs)("div",{children:[(0,O.jsx)(S.M,{tag:"h6",size:6,children:null==a?void 0:a.text}),(0,O.jsx)(X.y,{bullet:"no-bullet",children:v})]});return v&&0!==v.length?(0,O.jsx)(C.ee,{referrerId:null!==(n=null==a||null===(i=a.impressionAnalytics)||void 0===i?void 0:i.referrerId)&&void 0!==n?n:"",linkName:null!==(r=null==a||null===(l=a.impressionAnalytics)||void 0===l?void 0:l.linkName)&&void 0!==r?r:"",children:(0,O.jsx)(h.T,{colSpan:{small:3,medium:1},children:o?b:k})}):null};Ri.displayName="RelevantAmenitiesItem",Ri.fragment=Oi;const $i=T.J1`
  fragment RelevantAmenitiesFragment on PropertyInfo {
    __typename
    summary {
      __typename
      amenities(searchCriteria: $searchCriteria) {
        __typename
        relevantAmenities {
          ...RelevantAmenitiesItemFragment
        }
      }
    }
  }

  ${Ri.fragment}
`,Hi=({data:e,className:n})=>{var i,t,r;const{summary:l}=e;if(0===(null==l||null===(i=l.amenities)||void 0===i||null===(i=i.relevantAmenities)||void 0===i?void 0:i.length))return null;const a=null!==(t=null==l||null===(r=l.amenities)||void 0===r?void 0:r.relevantAmenities)&&void 0!==t?t:null,s=()=>null==a?void 0:a.every(e=>null==e?void 0:e.expando),o=null==a?void 0:a.map((e,n)=>{var i,t;return e&&e.header&&e.header.text&&0!==(null===(i=e.contents)||void 0===i?void 0:i.length)&&0!==(null===(t=e.contents[0])||void 0===t||null===(t=t.items)||void 0===t?void 0:t.length)?e&&(0,O.jsx)(Ri,{data:e},`amenities-list-${n}`):null}).filter(e=>null!==e);return(0,O.jsx)(O.Fragment,{children:o&&o.length>0&&(0,O.jsx)("div",{className:n,"data-stid":"relevant-amenities",children:(0,O.jsx)(I.N,{margin:{block:"two"},children:(0,O.jsx)(m.w,{columns:s()?1:3,space:s()?"three":"six",children:o})})})})};Hi.displayName="RelevantAmenities",Hi.fragment=$i;const Bi={SAVE_TRIP_ITEM_ATTRIBUTES_UNSUPPORTED_TYPENAME:new fe.EL(fe.i5.INFO,"SAVE_TRIP_ITEM_ATTRIBUTES_UNSUPPORTED_TYPENAME")};function zi(){const e=(0,fe.di)(Bi);return({originalAttributes:n,searchCriteria:i})=>function(e,n,i){if(!(null==n?void 0:n.dateRange)||!e)return e;if("TripsSaveStayAttributes"===e.__typename)return jn(jn({},e),{},{checkInDate:jn({__typename:"Date"},n.dateRange.checkInDate),checkoutDate:jn({__typename:"Date"},n.dateRange.checkOutDate),roomConfiguration:n.rooms.map(e=>({__typename:"PropertyRoom",numberOfAdults:e.adults,childAges:e.children?e.children.map(e=>e.age):[]}))});return i.SAVE_TRIP_ITEM_ATTRIBUTES_UNSUPPORTED_TYPENAME.log({}),e}(n,i,e)}const Vi=T.J1`
  fragment SaveTripItemFragment on PropertyInfo {
    saveTripItem(searchCriteria: $searchCriteria) {
      ...TripsSaveItemFragment
    }
  }

  ${D.M6C.fragment}
`,Wi=(0,ye.RK)(new je.tk),Ui=({data:e,searchCriteria:n})=>{const i=zi(),{tripSaveItemData:r,setTripSaveItemData:l}=(0,je.hI)();if((0,t.useEffect)(()=>{r!==e.saveTripItem&&l(e.saveTripItem)},[e.saveTripItem,r,l]),!e.saveTripItem)return null;const a=i({originalAttributes:e.saveTripItem.attributes,searchCriteria:n});return(0,O.jsx)(Wi,{children:(0,O.jsx)(je.GG,{data:jn(jn({},e.saveTripItem),{},{attributes:a}),source:je.kL.LODGING_DETAILS})})};Ui.fragment=Vi,Ui.displayName="SaveTripItem";const Gi=T.J1`
  fragment ShareDescriptionFragment on ShoppingShareContent {
    description
    image {
      url
      altText
    }
  }
`,Ki=({image:e})=>(0,O.jsx)(ee.M,{className:"uitk-card-roundcorner-all",ratio:ee.l.R4_3,children:(0,O.jsx)(ne.F,{alt:null==e?void 0:e.altText,blankDefault:!1,placeholderImage:!0,src:null==e?void 0:e.url})}),Ji=({data:e})=>{const{image:n,description:i}=e;return(0,O.jsxs)(u.X,{alignItems:"start",space:"three",children:[(0,O.jsx)(p.C,{minWidth:(0,M.eg)({viewSizes:M.pf})===M.pf.SMALL?100:200,children:(0,O.jsx)("div",{children:(0,O.jsx)(Ki,{image:n})})}),(0,O.jsx)(p.C,{minWidth:300,grow:1,children:(0,O.jsx)(A.D,{spacing:"one",overflow:"truncate-2-lines",size:500,children:i})})]})};Ji.displayName="ShareDescriptionSection",Ji.fragment=Gi;const Yi=(e,n,i,t)=>{const r=new URLSearchParams(n.search),l=new URLSearchParams;return i.forEach(n=>{switch(n){case"rm":((e,n)=>{e.forEach((e,i)=>i.startsWith("rm")&&n.append(i,e))})(r,l);break;case"referrerId":l.append(n,e.referrerId);break;default:{const e=r.get(n);null!==e&&l.append(n,e);break}}}),`https://${t}${n.pathname}?${l.toString()}`},qi=T.J1`
  fragment ShareOptionsFragment on ShoppingShareContent {
    urlParameterKeys
    shareLinks {
      ... on ShoppingCopyLink {
        __typename
        icon {
          id
          description
        }
        name
        copiedUrl
        analytics {
          linkName
          referrerId
        }
        toast {
          text
        }
        referrerId
      }
      ... on ShoppingSocialMediaLink {
        __typename
        graphic {
          ... on Icon {
            ...IconFragment
            __typename
          }
          ... on Mark {
            ...MarkFragment
            __typename
          }
        }
        name
        analytics {
          linkName
          referrerId
        }
        url
        encodedUrlParameterKey
        referrerId
      }
    }
  }
`,Qi=({shareLink:e})=>{const{__typename:n}=e;return(0,O.jsxs)(O.Fragment,{children:["ShoppingCopyLink"===n&&e.icon&&(0,O.jsx)(d.LD,{name:e.icon.id,size:d.So.SMALL}),"ShoppingSocialMediaLink"===n&&e.graphic&&(0,O.jsx)(xe.D,{url:e.graphic.url.value,size:4,orientation:"portrait"})]})},Xi=({data:e,domain:n})=>{const{shareLinks:i,urlParameterKeys:a}=e,s=(0,C.KY)(),[o,c]=(0,t.useState)(null),m=(0,be.zy)(),h=async e=>{const{analytics:i,__typename:t}=e;switch(i&&s(i.referrerId,i.linkName),t){case"ShoppingCopyLink":{var r;c(e.toast.text),setTimeout(()=>c(null),4e3);const i=((e,n,i,t)=>""===e.copiedUrl?Yi(e,n,i,t):e.copiedUrl)(e,m,a,n);await(null===(r=navigator)||void 0===r||null===(r=r.clipboard)||void 0===r?void 0:r.writeText(i));break}case"ShoppingSocialMediaLink":{const i=((e,n,i,t)=>{const r=new URL(e.url),l=new URLSearchParams(r.search);if(null===l.get("href")&&null===l.get("url")){const l=encodeURIComponent(Yi(e,n,i,t));return`${r}&${e.encodedUrlParameterKey}=${l}`}return e.url})(e,m,a,n);window.open(`${i}`,"_blank");break}default:return null}};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(M.LM,{children:[(0,O.jsx)(M.NP,{children:(0,O.jsx)(I.N,{padding:{blockstart:"six"},children:(0,O.jsx)(Se.I,{children:null==i?void 0:i.map((e,n)=>{const{name:i}=e;return(0,O.jsxs)(ke.P,{children:[(0,O.jsx)(Ne.x,{children:(0,O.jsx)(r.u,{type:"button",onClick:()=>h(e),children:i})}),(0,O.jsxs)(u.X,{space:"three",children:[(0,O.jsx)(p.C,{shrink:0,alignSelf:"center",children:(0,O.jsx)(Qi,{shareLink:e})}),(0,O.jsx)(p.C,{grow:1,children:(0,O.jsx)(A.D,{size:500,children:i})})]})]},`shareLink-optionSmall-${n}`)})})})}),(0,O.jsx)(M.zQ,{children:(0,O.jsx)(u.X,{space:"two",children:i.map((e,n)=>{const{name:i}=e;return(0,O.jsx)(p.C,{children:(0,O.jsx)(I.N,{margin:{blockstart:"six"},children:(0,O.jsxs)(l.y,{onClick:()=>h(e),inverse:!0,type:"button",children:[(0,O.jsx)(Qi,{shareLink:e}),i]})})},`shareLink-option-${n}`)})})})]}),(0,O.jsxs)(Ae.N,{show:!!o,children:[(0,O.jsx)(I.N,{margin:{inline:"one",blockend:"one"},children:(0,O.jsx)(d.LD,{name:"check_circle",size:d.So.SMALL})}),o]})]})};Xi.displayName="ShareOptionsSection",Xi.fragment=qi;const Zi=T.J1`
  fragment ShareDialogFragment on ShoppingShareLinkAction {
    sheet {
      closeAnalytics {
        linkName
        referrerId
      }
      closeText
    }
    content {
      ...ShareDescriptionFragment
      ...ShareOptionsFragment
    }
  }
  ${Ji.fragment}
  ${Xi.fragment}
`,et=({data:e,DialogComponent:n,isDialogOpen:i,triggerRef:t,domain:r})=>{const{content:l}=e;return(0,O.jsx)(y.K,{isVisible:i,children:(0,O.jsx)(n,{children:(0,O.jsx)(g.t,{isVisible:i,type:"bottom",triggerRef:t,children:(0,O.jsx)(x.Y,{padded:!1,children:(0,O.jsx)(I.N,{padding:"six",children:l&&(0,O.jsxs)("div",{children:[(0,O.jsx)(Ji,{data:l}),(0,O.jsx)(Xi,{data:l,domain:r})]})})})})})})};et.displayName="ShareDialog",et.fragment=Zi;const nt=T.J1`
  fragment ShareDialogPopOverFragment on ShoppingShareLinkAction {
    sheet {
      closeAnalytics {
        __typename
      }
      closeText
    }
    content {
      ...ShareDescriptionFragment
      ...ShareOptionsFragment
    }
  }
  ${Ji.fragment}
  ${Xi.fragment}
`,it=({data:e,isDialogOpen:n,closeDialog:i,triggerRef:t,domain:r})=>{const{content:l}=e;return(0,O.jsx)(y.K,{isVisible:n,children:(0,O.jsxs)(g.t,{position:{inline:"leading",block:"trailing"},isVisible:n,type:"popover",triggerRef:t,onDismiss:i,width:495,children:[(0,O.jsx)(v.t,{alignment:"top",children:(0,O.jsx)(o.q,{type:"button",onClick:i,children:(0,O.jsx)(d.LD,{name:"close",size:d.So.MEDIUM,title:"close",id:"sheet-close-button"})})}),(0,O.jsx)(x.Y,{padded:!1,children:(0,O.jsx)(I.N,{padding:{blockend:"six",inlineend:"six",inlinestart:"six"},children:l&&(0,O.jsxs)("div",{children:[(0,O.jsx)(Ji,{data:l}),(0,O.jsx)(Xi,{data:l,domain:r})]})})})]})})};it.displayName="ShareDialogPopover",it.fragment=nt;const tt=T.J1`
  fragment ShoppingShareLinksFragment on PropertyInfo {
    shoppingShareLinks {
      action {
        ...ShareDialogFragment
      }
      button {
        primary
        analytics {
          referrerId
          linkName
        }
        icon {
          id
          description
        }
      }
    }
  }
  ${et.fragment}
`,rt=({data:e,dialogId:n,domain:i})=>{var l;const a=(0,C.KY)(),[o,c,u]=(0,he.useDialog)(n||"sheet-share-actions");if(!(null==e||null===(l=e.shoppingShareLinks)||void 0===l?void 0:l.action))return null;const{action:p,button:m}=e.shoppingShareLinks,{primary:h}=m,g=h||"",x=(0,t.createRef)();return(0,O.jsxs)(Ie.P,{type:"relative",children:[(0,O.jsx)(I.N,{padding:"two",children:(0,O.jsx)(s.W,{onClick:()=>{const{analytics:e}=m;e&&a(e.referrerId,e.linkName),c.openDialog()},domRef:x,role:"button",name:g,"aria-label":g,size:r.V.SMALL,children:m.icon&&(0,O.jsx)(d.LD,{name:m.icon.id,size:d.So.SMALL})})}),p&&(0,O.jsxs)(M.LM,{children:[(0,O.jsx)(M.NP,{children:(0,O.jsx)(et,{data:p,isDialogOpen:o,triggerRef:x,DialogComponent:u,domain:i})}),(0,O.jsx)(M.zQ,{children:(0,O.jsx)(it,{data:p,isDialogOpen:o,closeDialog:()=>{var e;if(null==p||null===(e=p.sheet)||void 0===e?void 0:e.closeAnalytics){const{closeAnalytics:e}=p.sheet;a(e.referrerId,e.linkName)}c.closeDialog()},triggerRef:x,domain:i})})]})]})};rt.displayName="ShareActions",rt.fragment=tt;const lt=T.J1`
  fragment SpaceOverviewInfoFragment on PropertyInfoContent {
    infoItems {
      ... on PropertyInfoItem {
        primary {
          graphic {
            ... on Icon {
              description
              iconId: id
              size
            }
          }
        }
        text
      }
    }
  }
`,at=({data:e})=>{const n=(0,M.eg)({viewSizes:M.pf}),i=e.infoItems&&n===M.pf.SMALL&&e.infoItems.length%2==0?"half_width":void 0;return(0,O.jsx)(u.X,{wrap:"wrap",children:(0,O.jsx)(O.Fragment,{children:e.infoItems.filter(e=>"PropertyInfoItem"===e.__typename).map((e,n)=>{var t,r;return(0,O.jsx)(p.C,{grow:1,minWidth:i,children:(0,O.jsxs)(A.D,{size:300,inline:!0,spacing:"three",theme:"standard",children:[(null===(t=e.primary)||void 0===t?void 0:t.graphic)&&"Icon"===(null===(r=e.primary)||void 0===r?void 0:r.graphic.__typename)&&(0,O.jsx)(I.N,{margin:{inlineend:"two"},children:(0,O.jsx)(d.LD,{name:e.primary.graphic.iconId,"aria-hidden":"true"})}),e.text]})},`${e.__typename}-${n}`)})})})};at.fragment=lt,at.displayName="SpaceOverviewInfo";const st=T.J1`
  fragment SpaceOverviewTitleFragment on PropertyInfoContent {
    header {
      text
    }
  }
`,ot=({data:e})=>{const{header:n}=e;return(null==n?void 0:n.text)?(0,O.jsx)(S.M,{tag:"h3",size:5,children:n.text}):null};ot.fragment=st,ot.displayName="SpaceOverviewTitle";const dt=T.J1`
  fragment SpaceOverviewFragment on PropertyInfo {
    propertyHighlightedDetails {
      ...SpaceOverviewTitleFragment
      ...SpaceOverviewInfoFragment
    }
  }

  ${ot.fragment}
  ${at.fragment}
`,ct=({data:e,className:n})=>{var i;const{propertyHighlightedDetails:t}=e;return(null==t||null===(i=t.infoItems)||void 0===i?void 0:i.length)?(0,O.jsx)(I.N,{margin:{blockend:"four"},children:(0,O.jsxs)("div",{className:n,children:[(0,O.jsx)(ot,{data:t}),(0,O.jsx)(at,{data:t})]})}):null};ct.fragment=dt,ct.displayName="SpaceOverview";const ut="searchId",pt=({propertyId:e,searchCriteria:n,showSection:i,isLuxury:t})=>i?(0,O.jsx)(h.T,{colSpan:{small:1,medium:1,large:4},children:(0,O.jsx)("div",{children:(0,O.jsx)(I.N,{margin:{large:{inlinestart:t?"four":"three",blockstart:"three"}},padding:{large:{inlinestart:t?"one":"unset",inlineend:"unset"}},children:(0,O.jsx)("div",{children:(0,O.jsx)(Le.Pl,{inputs:{productIdentifier:{id:e,type:Le.Wx.PROPERTY_ID,travelSearchCriteria:{property:n}}}})})})})}):null,mt=({hideHeader:e,propertyId:n,searchCriteria:i,isLuxuryProperty:t=!1,headingEmphasis:r})=>(0,O.jsx)("div",{"data-stid":"content-hotel-title",children:!e&&(0,O.jsx)(Ce.UL,{inputs:{productIdentifier:{id:n,type:Ce.Wx.PROPERTY_ID,travelSearchCriteria:{property:i}}},headingEmphasis:r,isLuxuryProperty:t})}),ht=T.J1`
  fragment AmenitiesDialogFragment on PropertyAmenities {
    amenitiesDialog {
      toolbar {
        clientSideAnalytics {
          linkName
          referrerId
        }
        icon {
          iconId: id
          description
        }
        title
      }
    }
    takeover {
      ...PropertyTakeoverAmenitiesFragment
    }
    viewAmenitiesAdaptExAttemptEvents {
      campaignId
      events {
        payloadId
        eventType
        eventTarget
        banditDisplayed
      }
    }
  }

  ${ri.fragment}
`,gt=({type:e,title:n,description:i,takeover:t,closeDialog:r,isDialogOpen:l,triggerRef:a=null,forwardRef:s=null})=>(0,O.jsx)(y.K,{isVisible:l,children:(0,O.jsxs)(g.t,{returnFocusOnClose:!0,triggerRef:a,isVisible:l,type:e,children:[(0,O.jsx)(P.p,{navigationContent:{onClick:r,navType:"close",navIconLabel:i}}),(0,O.jsxs)(x.Y,{children:[(0,O.jsx)(I.N,{padding:{blockend:"six"},children:(0,O.jsx)(S.M,{tag:"h2",size:5,children:n})}),(0,O.jsx)(ri,{data:t,ref:s})]})]})}),xt=({closeDialog:e,data:n,isDialogOpen:i,triggerRef:r,dialogPreviouslyViewed:l})=>{var a,s;const{amenitiesDialog:o,takeover:d,viewAmenitiesAdaptExAttemptEvents:c}=n,{track:u}=(0,C._q)(),{ref:p,inView:m}=(0,Q.Wx)({triggerOnce:!0,threshold:0});if((0,t.useEffect)(()=>{!l&&m&&c&&c.forEach(e=>{var n,i,t;u(C.p3.EVENT,{data:(0,D.T4o)({campaignId:e.campaignId,payloadId:(null===(n=e.events[0])||void 0===n?void 0:n.payloadId)||"",eventType:(null===(i=e.events[0])||void 0===i?void 0:i.eventType)||"",eventTarget:(null===(t=e.events[0])||void 0===t?void 0:t.eventTarget)||""})})})},[c,m,u,l]),!o||!d)return null;const h={title:null===(a=o.toolbar)||void 0===a?void 0:a.title,description:null===(s=o.toolbar)||void 0===s||null===(s=s.icon)||void 0===s?void 0:s.description,takeover:d,isDialogOpen:i,closeDialog:e,triggerRef:r,forwardRef:p,dialogPreviouslyViewed:l};return(0,O.jsxs)(M.LM,{children:[(0,O.jsx)(M.NP,{children:(0,O.jsx)(gt,jn({type:"full"},h))}),(0,O.jsx)(M.rw,{children:(0,O.jsx)(gt,jn({type:"centered"},h))})]})};xt.displayName="AmenitiesDialog",xt.fragment=ht;let vt=function(e){return e.REVIEWS="REVIEWS",e.AMENITIES="AMENITIES",e.MAP_IMAGE="MAP_IMAGE",e.MAP_LINK="MAP_LINK",e.CLEANING_AND_SAFETY_LINK="CLEANING_AND_SAFETY_LINK",e.NEAR_BY_POIS_LINK="NEAR_BY_POIS_LINK",e.AERIAL_MAP_THUMBNAIL="thumbnailClickAnalytics",e.AERIAL_MAP_PLAY_PAUSE="playPauseAnalytics",e}({});const yt={[vt.REVIEWS]:["HOT.HIS.UGC.ViewAllResults","Display detailed reviews"],[vt.AMENITIES]:["HOT.HIS.ViewAllAmenities","View all amenities"],[vt.MAP_IMAGE]:["HOT.HIS.Map.StaticMap","Click static map"],[vt.MAP_LINK]:["HOT.HIS.ClickAddressCTALinkViewMap","ClickAddressCTALinkViewMap"],[vt.CLEANING_AND_SAFETY_LINK]:["HOT.HIS.ViewAllCleanliness","Click on see all cleanliness link"],[vt.NEAR_BY_POIS_LINK]:["HOT.HIS.SeeMoreLocationDetails","See more location details"]},jt=T.J1`
  fragment AmenitiesLinkFragment on PropertyAmenities {
    amenitiesDialog {
      trigger {
        value
        accessibilityLabel
        icon {
          iconId: id
        }
      }
    }
  }
`,ft=({data:e,onClick:n,triggerRef:i})=>{const[r,l]=yt[vt.AMENITIES],a=(0,C.KY)(),{formatText:s}=(0,_e.useLocalization)(),o=s("seeAllButton.text"),c=(0,t.useCallback)(e=>{e.preventDefault(),a(r,l,!0),n()},[a,r,l,n]),{amenitiesDialog:u}=e;if(!u)return null;const{value:p,accessibilityLabel:m,icon:h}=u.trigger,g=o||p,x=(null==h?void 0:h.iconId)||"";return(0,O.jsx)(I.N,{padding:{blockstart:"three",blockend:"unset"},children:(0,O.jsx)(me.i,{align:"left",onClick:c,domRef:i,children:(0,O.jsxs)("button",{type:"button",children:[(0,O.jsx)("span",{"aria-hidden":!0,children:g}),m&&(0,O.jsx)("span",{className:"is-visually-hidden",children:m}),(0,O.jsx)(d.LD,{name:x})]})})})};ft.displayName="AmenitiesLink",ft.fragment=jt;const It=({children:e,data:n})=>{var i,r;const l=null===(i=n.summary)||void 0===i||null===(i=i.amenities)||void 0===i?void 0:i.topAmenities,a=null===(r=n.summary)||void 0===r||null===(r=r.amenities)||void 0===r?void 0:r.propertyContentPreferences,s=null==l?void 0:l.infoItems;if(!l||!s||0===s.length)return null;const{AmenitiesLink:o}=function(e){if(!e)return{};const n={};return t.Children.forEach(e,e=>{var i,t;const r=null==e||null===(i=e.type)||void 0===i?void 0:i.displayName;r&&(n[r]||(n[r]=[]),null===(t=n[r])||void 0===t||t.push(e))}),n}(e),d=jn(jn({},{overflow:"wrap",prefix:"cleaningAndSafety",space:"four",subset:s.length}),{},{columns:2});return(0,O.jsxs)(w.Rn,{name:"About",children:[a&&(0,O.jsx)(I.N,{padding:{blockend:"six"},margin:{blockstart:"two"},children:(0,O.jsx)("div",{children:(0,O.jsx)(D.j9c,{data:a})})}),(0,O.jsx)(D.N6d,{data:l,small:d,large:d}),o]})};It.displayName="AmenityView";const bt=T.J1`
  fragment SummaryAmenitiesFragment on PropertyInfo {
    summary {
      amenities(searchCriteria: $searchCriteria) {
        topAmenities {
          ...PropertyInfoContentFragment
        }
        propertyContentPreferences {
          ...PropertyContentFragment
        }
        amenitiesAdaptExSuccessEvents {
          ...LodgingAdaptExAnalyticsEventFragment
        }
        relevantAmenities {
          ...RelevantAmenitiesItemFragment
        }
        ...AmenitiesLinkFragment
        ...AmenitiesDialogFragment
      }
    }
  }

  ${D.Xy0}
  ${D.j9c.fragment}
  ${ft.fragment}
  ${xt.fragment}
  ${D.AKj}
  ${Hi.fragment}
`,St=({data:e,className:n})=>{var i,r;const{amenities:l}=e.summary||{},[a,s,o]=(0,he.useDialog)("amenities-dialog","pwaDialog"),d=(0,C.KY)(),c=(0,t.useRef)(null),[u,p]=(0,t.useState)(!1);if(!(null==l||null===(i=l.topAmenities)||void 0===i||null===(i=i.infoItems)||void 0===i?void 0:i.length))return null;const m=null==l||null===(r=l.amenitiesDialog)||void 0===r||null===(r=r.toolbar)||void 0===r?void 0:r.clientSideAnalytics,h=(null==l?void 0:l.amenitiesDialog)&&(0,O.jsx)(ft,{data:l,onClick:s.openDialog,triggerRef:c},"amenities-link");return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(w.Rn,{name:"PopularAmenities",children:(0,O.jsx)("div",{className:n,"data-stid":"hotel-amenities-list",children:(0,O.jsxs)(M.LM,{children:[(0,O.jsx)(M.NP,{children:(0,O.jsx)(It,{data:e,children:h})}),(0,O.jsx)(M.zQ,{children:(0,O.jsx)(It,{data:e,children:h})})]})})}),(null==l?void 0:l.amenitiesDialog)&&(0,O.jsx)(y.K,{isVisible:a,children:(0,O.jsx)(o,{children:(0,O.jsx)(xt,{data:l,closeDialog:()=>{s.closeDialog(),p(!0),m&&d(m.referrerId,m.linkName,!0)},isDialogOpen:a,triggerRef:c,dialogPreviouslyViewed:u})})})]})};St.displayName="SummaryAmenities",St.fragment=bt;const kt=T.J1`
  fragment SummaryChatbotLaunchFragment on PropertyInfo {
    summary {
      lodgingChatbot {
        header {
          text
        }
        action {
          primary
        }
        content
      }
    }
  }
`,Nt=({data:e,applicationName:n,pageName:i})=>{var r,l,s,o,d;const{header:c,action:m,content:h}=(null===(r=e.summary)||void 0===r?void 0:r.lodgingChatbot)||{},{context:g}=(0,L.R)(),{propertyId:x,searchCriteria:v}=Li(),[j,f]=(0,t.useState)(!1),[b,k]=(0,t.useState)(!1),[N,P,E]=(0,he.useDialog)("virtual-agent-control-exit-survey-feedback"),T=(0,C.KY)(),{info:_}=(0,fe.Ul)(),D=((e,n,i)=>({schemaName:"chatbot",messageContent:{chatbotEntryPoint:e,chatbotName:n,propertyId:i}}))("VR-SHOPPING",n,x);let{currency:w}=g;const{identity:F}=g;let R=null==F?void 0:F.expUserId;const $={VAC_WidgetOpened:"chatbot.presented",VAC_WidgetClosed:"chatbot.hidden",VAC_ConversationCreated:"chatbot_conversation.created",VAC_ChatMsgReceived:"chatbot_user_message.submitted",VAC_ChatMsgSent:"chatbot_response_message.presented"};if(!c)return null;null==w&&(w=void 0),null==R&&(R=void 0);const H=e=>`${e.year}-${e.month}-${e.day}`,B=()=>{if(j)try{window.virtualAgentControl.openChatWidget()}catch(e){_("Virtual agent control not loaded")}else T("HOT.HIS.ChatbotLaunch","chatbot_entrypoint.selected",void 0,[D]),f(!0)};return(0,O.jsxs)("div",{children:[(0,O.jsxs)(M.LM,{children:[(0,O.jsx)(M.zQ,{children:(0,O.jsxs)(u.X,{justifyContent:"center",wrap:"wrap",children:[(0,O.jsx)(p.C,{minWidth:"full_width",alignSelf:"center",children:(0,O.jsx)(I.N,{padding:{inline:"three"},children:(0,O.jsx)(A.D,{size:300,align:"center",children:h})})}),(0,O.jsx)(p.C,{children:(0,O.jsx)(I.N,{margin:{block:"four"},children:(0,O.jsx)("div",{children:(0,O.jsx)(a.y,{onClick:B,children:null==m?void 0:m.primary})})})})]})}),(0,O.jsx)(M.NP,{children:(0,O.jsxs)(J.g,{overflow:!1,padded:!0,children:[(0,O.jsx)(Y.E,{padded:!1,children:(0,O.jsx)(S.M,{size:5,tag:"h2",children:null==c?void 0:c.text})}),(0,O.jsx)(Y.E,{padded:!1,children:(0,O.jsx)(A.D,{spacing:"four",children:h})}),(0,O.jsx)(I.N,{padding:{blockstart:"four"},children:(0,O.jsx)(Y.E,{padded:!1,children:(0,O.jsx)(a.y,{onClick:B,children:null==m?void 0:m.primary})})})]})})]}),j&&(0,O.jsx)(De.ki,{applicationName:n,pageName:i,clientOverrides:{enableAutoOpenChatWidget:!0,conversationProperties:{listingId:String(x),checkin:H(null==v||null===(l=v.primary.dateRange)||void 0===l?void 0:l.checkInDate),checkout:H(null==v||null===(s=v.primary.dateRange)||void 0===s?void 0:s.checkOutDate),children:null==v||null===(o=v.primary.rooms[0])||void 0===o||null===(o=o.children)||void 0===o?void 0:o.length,adults:null==v||null===(d=v.primary.rooms[0])||void 0===d?void 0:d.adults,pets:0,device:"WEB",currency:w,bookNow:"",havId:R,site:"expedia",hostname:window.location.hostname,chatbotName:"shopping-pwa.pdp",chatbotEntryPoint:"VR-SHOPPING"},subscribedEvents:[...Object.keys($)],eventHandler:e=>{T(e.type,$[e.type],void 0,[D]),"VAC_WidgetClosed"===e.type&&k(!0)}},inputs:{}}),b&&(0,O.jsx)(we.g,{chatbotEntryPoint:"chat-now-button",chatbotName:"shopping-pwa",timeoutMs:1e4,onDismiss:()=>k(!1),inputs:{propertyId:String(x)}}),N&&(0,O.jsx)(y.K,{isVisible:N,children:(0,O.jsx)(E,{children:(0,O.jsx)(we.d,{inputs:{propertyId:String(x)},onDismiss:P.closeDialog})})})]})};Nt.fragment=kt,Nt.displayName="SummaryChatbotLaunch";const At=T.J1`
  fragment SummaryVipBadgeFragment on PropertyInfo {
    summary {
      overview {
        vipMessaging
      }
    }
  }
`,Pt=({data:e,className:n})=>{var i;return(null===(i=e.summary)||void 0===i||null===(i=i.overview)||void 0===i?void 0:i.vipMessaging)?(0,O.jsx)("div",{className:n,children:(0,O.jsx)(Fe.G,{text:e.summary.overview.vipMessaging,theme:Me.mc.EMPHASIS})}):null};Pt.fragment=At,Pt.displayName="VipBadge";const Et=T.J1`
  fragment SummaryFragment on PropertyInfo {
    ...SummaryAmenitiesFragment
    ...SummaryChatbotLaunchFragment
    ...RelevantAmenitiesFragment
    ...InventorySourceFragment
  }

  ${St.fragment}
  ${Nt.fragment}
  ${Hi.fragment}
  ${_i.fragment}
`,Tt=["data","onClickReviews","children","hideHeader","pageId","showHighlights","searchId","disableMapAndLocationInsights","isPropertyBookable","highlightsSearchCriteria","skipSsr","isLuxuryProperty","headingEmphasis"],Lt=({children:e})=>(0,O.jsx)(O.Fragment,{children:e}),Ct=({children:e})=>(0,O.jsx)(O.Fragment,{children:e}),_t=e=>{let{data:n,onClickReviews:i,children:r,hideHeader:l=!1,pageId:a,showHighlights:s=!1,searchId:o="",disableMapAndLocationInsights:d=!1,isPropertyBookable:c,highlightsSearchCriteria:u,skipSsr:p,isLuxuryProperty:g=!1,headingEmphasis:x=!1}=e,v=tn(e,Tt);const y=Li(),{propertyId:j,shoppingContext:f}=y;let{searchCriteria:b}=Li();const S=null==n?void 0:n.summary;b=(0,t.useMemo)(()=>((e,n)=>{var i,t;const r=null==e||null===(i=e.secondary)||void 0===i||null===(i=i.selections)||void 0===i?void 0:i.some(e=>e.id===ut);return e&&!r&&n?jn(jn({},e),{},{secondary:jn(jn({},null==e?void 0:e.secondary),{},{selections:[...(null==e||null===(t=e.secondary)||void 0===t?void 0:t.selections)||[],{id:ut,value:n}]})}):e})(b,o),[b,o]);const k=1===(0,_.useExperiment)("Headline_Vision",!0).exposure.bucket,N={id:j,type:Pe.Wx.PROPERTY_ID,travelSearchCriteria:{property:b},shoppingContext:f};return(0,O.jsx)(I.N,{margin:{small:{blockend:"three"},medium:{blockend:"eight"}},padding:{large:{inline:"six"},small:{inline:"three"},blockend:"unset"},children:(0,O.jsx)(J.g,{className:"uitk-flat-border-top",overflow:!0,children:(0,O.jsx)(Y.E,{padded:!0,children:(0,O.jsxs)(m.w,{columns:{small:1,medium:1,large:12},children:[(0,O.jsx)(h.T,{colSpan:{small:1,medium:1,large:8},children:(0,O.jsx)("div",{children:(0,O.jsx)(I.N,{padding:{large:{inlineend:"three"}},children:(0,O.jsxs)("div",{children:[k?(0,O.jsx)(I.N,{padding:{blockend:"six"},children:(0,O.jsxs)("div",{children:[(0,O.jsx)(I.N,{padding:{blockend:"two"},children:(0,O.jsx)("div",{"data-stid":"headline-vision-top-of-pdp-card",children:(0,O.jsx)(Ee.ug,{inputs:{featureId:"headline-top-of-pdp",productIdentifier:N}})})}),(0,D.wzg)(r,Ct)]})}):(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(mt,{hideHeader:l,propertyId:j,searchCriteria:b,headingEmphasis:x}),(0,O.jsx)("div",{children:(0,D.wzg)(r,Ct)}),(0,O.jsx)("div",{children:(0,O.jsx)(Te.Pc,{inputs:{productIdentifier:N}})})]}),s&&(0,O.jsx)(Zn,{inputs:{productIdentifier:{id:j,type:Pe.Wx.PROPERTY_ID,travelSearchCriteria:{property:u||N.travelSearchCriteria.property}}},skipSsr:p,onClickReviews:i,pageId:a,isPropertyBookable:c}),S&&(0,O.jsx)(O.Fragment,{children:(0,D.wzg)(r,Lt)}),(0,O.jsx)(Mr,{inputs:y,skipSsr:!0}),(0,O.jsx)(I.N,{margin:{large:{blockend:"unset"},medium:{blockend:"six"},small:{blockend:"six"}},children:(0,O.jsx)("div",{children:(0,O.jsx)(Pe.oT,{inputs:{productIdentifier:N},refTargetName:"About"})})})]})})})}),(0,O.jsx)(h.T,{colSpan:{small:1,medium:1,large:4},children:(0,O.jsx)("div",{children:((e,n=!1)=>(0,O.jsx)(pt,jn({propertyId:j,searchCriteria:b,showSection:e,isLuxury:n},v)))(!d,!1)})})]})})})})};_t.displayName="Summary",_t.fragment=Et;const Dt=()=>(0,O.jsx)(I.N,{margin:{blockstart:"three"},padding:{blockend:"three"},children:(0,O.jsxs)("div",{children:[(0,O.jsx)(I.N,{margin:{blockend:"two"},children:(0,O.jsx)(j.R,{type:"line",animation:!1,lineLength:"primary"})}),(0,O.jsx)(j.R,{type:"line",animation:!1,lineLength:"secondary"})]})}),wt=T.J1`
  fragment BookWithConfidenceFragment on PropertyInfo {
    bookWithConfidence {
      banner {
        ...ShoppingBannerFragment
      }
    }
  }
  ${Oe.n.fragment}
`,Ft=({data:e})=>{var n;const i=null==e||null===(n=e.bookWithConfidence)||void 0===n?void 0:n.banner;return i?(0,O.jsx)("div",{children:(0,O.jsx)(Oe.n,{data:i})}):null};Ft.fragment=wt,Ft.displayName="BookWithConfidence";let Mt=function(e){return e.DISABLE_MAP="DISABLE_MAP",e.MENU_VIEW="MENU_VIEW",e}({});const Ot={small:{block:"three",inline:"six"},large:{block:"three",inline:"six"}},Rt={small:{block:"six",inline:"three"},large:{block:"six",inline:"six"}},$t={small:{inline:"three"},large:{inline:"six"}};let Ht=function(e){return e[e.LINES=3]="LINES",e[e.ITEMS=1]="ITEMS",e}({});const Bt=T.J1`
  fragment WhatsAroundSecondaryButtonFragment on UISecondaryButton {
    primary
    action {
      ... on UILinkAction {
        resource {
          value
        }
        target
        analytics {
          linkName
          referrerId
        }
      }
    }
  }
`,zt=({data:e})=>{const{primary:n,action:i}=e,t=(0,C.KY)();if(!i||"UILinkAction"!==i.__typename)return null;return(0,O.jsx)(I.N,{margin:{blockstart:"two"},children:(0,O.jsx)(a.y,{tag:"a",href:i.resource.value,onClick:()=>{i.analytics&&t(i.analytics.referrerId,i.analytics.linkName)},children:n})})};zt.displayName="EGDSSecondaryButton",zt.fragment=Bt;const Vt=T.J1`
  fragment WhatsAroundEGDSSpannableTextContentFragment on EGDSText {
    ... on EGDSPlainText {
      text
    }
    ... on EGDSInlineLink {
      text
      action {
        resource {
          value
        }
        target
        analytics {
          linkName
          referrerId
        }
      }
    }
  }
`,Wt=({data:e})=>{const n=(0,C.KY)();switch(e.__typename){case"EGDSPlainText":return(0,O.jsx)(A.D,{inline:!0,children:e.text});case"EGDSInlineLink":return(0,O.jsx)(me.i,{inline:!0,children:(0,O.jsx)("a",{href:e.action.resource.value,target:e.action.target,onClickCapture:()=>{var i;(i=e.action.analytics)&&n(i.referrerId,i.linkName)},children:e.text})});default:return null}};Wt.fragment=Vt,Wt.displayName="EGDSSpannableTextContent";const Ut=T.J1`
  fragment WhatsAroundEGDSSpannableTextFragment on EGDSSpannableText {
    inlineContent {
      ...WhatsAroundEGDSSpannableTextContentFragment
    }
  }
  ${Wt.fragment}
`,Gt=({data:e})=>(0,O.jsx)("div",{children:e.inlineContent.map((e,n)=>(0,O.jsx)(Wt,{data:e},n))});Gt.fragment=Ut,Gt.displayName="EGDSSpannableText";const Kt=T.J1`
  fragment WhatsAroundContentItemFragment on PropertyEditorialContentItem {
    ...WhatsAroundEGDSSpannableTextFragment
    ...WhatsAroundSecondaryButtonFragment
  }
  ${Gt.fragment}
  ${zt.fragment}
`,Jt=({data:e})=>{switch(e.__typename){case"EGDSSpannableText":return(0,O.jsx)(Gt,{data:e});case"UISecondaryButton":return(0,O.jsx)(zt,{data:e});default:return null}};Jt.displayName="WhatsAroundEditorialContentItem",Jt.fragment=Kt;const Yt=["href","target","children"],qt=T.J1`
  fragment WhatsAroundLinkFragment on LodgingLinkMessage {
    link {
      clientSideAnalytics {
        linkName
        referrerId
      }
      uri {
        value
      }
    }
    value
    icon {
      id
      description
    }
  }
`,Qt=({data:e,index:n})=>{var i;const t=(0,C.KY)();if(!(null==e?void 0:e.value)||!(null==e||null===(i=e.link)||void 0===i||null===(i=i.uri)||void 0===i?void 0:i.value))return null;const r=()=>{e.link.clientSideAnalytics&&t(e.link.clientSideAnalytics.referrerId,e.link.clientSideAnalytics.linkName)},l=e.value,a=e.link.uri.value,{icon:s}=e;return(0,O.jsxs)(M.LM,{children:[(0,O.jsx)(M.NP,{children:(0,O.jsx)(Xt,{href:a,onClickCapture:r,children:l})}),(0,O.jsx)(M.rw,{children:(0,O.jsxs)(Xt,{href:a,onClickCapture:r,target:"_blank",children:[l,(null==s?void 0:s.id)&&(0,O.jsx)(d.LD,{id:`${s.id}-${n}`,name:s.id,title:s.description})]})})]})};Qt.displayName="WhatsAroundLink",Qt.fragment=qt;const Xt=e=>{let{href:n,target:i,children:t}=e;return(0,O.jsx)(I.N,{margin:{block:"two"},children:(0,O.jsx)(me.i,jn(jn({},tn(e,Yt)),{},{children:(0,O.jsx)("a",{href:n,target:i,children:t})}))})},Zt=T.J1`
  fragment WhatsAroundEditorialFragment on PropertyEditorial {
    content
    contentItems {
      ...WhatsAroundContentItemFragment
    }
    crossLinks {
      ...WhatsAroundLinkFragment
    }
    title
    expandoPeek {
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
      lines
      items
    }
  }

  ${Qt.fragment}
  ${Jt.fragment}
`,er=({data:e,isWhatsAroundMapPoisEditorialView:n,isExpandoView:i,hideTitle:r})=>{var l,a,s,o,d,c,u,p;const[m,h]=(0,t.useState)(!1),g=(0,C.KY)();if(!e||(!e.contentItems||e.contentItems.length<=0)&&(!e.content||e.content.length<=0))return null;const{title:x,crossLinks:v,content:y,expandoPeek:j,contentItems:f}=e,b=f&&f.length>0,k=i&&j,N=y[0],P=null==v?void 0:v.map((e,n)=>(0,O.jsx)(I.N,{padding:{blockend:"two"},children:(0,O.jsx)("div",{children:(0,O.jsx)(Qt,{data:e,index:n})})},n)),E=N&&(0,O.jsx)(I.N,{padding:n?{blockend:"four"}:{block:"three"},children:(0,O.jsxs)("div",{itemProp:"geo",itemScope:!0,itemType:"https://schema.org/GeoCoordinates",children:[(0,O.jsx)("meta",{itemProp:"description",content:N}),!b&&(0,O.jsx)(A.D,{size:300,children:N})]})}),T={id:null!==(l=null==j||null===(a=j.expandAnalytics)||void 0===a?void 0:a.referrerId)&&void 0!==l?l:"",description:null!==(s=null==j||null===(o=j.expandAnalytics)||void 0===o?void 0:o.linkName)&&void 0!==s?s:"",callback:(e,n)=>{g(e,n)}},L={id:null!==(d=null==j||null===(c=j.collapseAnalytics)||void 0===c?void 0:c.referrerId)&&void 0!==d?d:"",description:null!==(u=null==j||null===(p=j.collapseAnalytics)||void 0===p?void 0:p.linkName)&&void 0!==u?u:"",callback:(e,n)=>{g(e,n)}};return(0,O.jsxs)("section",{children:[x&&!r&&(0,O.jsx)(S.M,{tag:"h3",size:5,children:x}),k&&(N||b)?(0,O.jsxs)(re.A,{hideScrim:!0,lines:(null==j?void 0:j.lines)||Ht.LINES,items:(null==j?void 0:j.items)||Ht.ITEMS,expandLabel:null==j?void 0:j.expandedLabel,collapseLabel:null==j?void 0:j.collapsedLabel,isVisible:m,handleClick:()=>{h(!m)},expandA11yLabel:null==j?void 0:j.expandedLabel,collapseA11yLabel:null==j?void 0:j.collapsedLabel,analytics:m?L:T,children:[null==f?void 0:f.map((e,n)=>(0,O.jsx)(Jt,{data:e},n)),E,!b&&P]}):(0,O.jsxs)(O.Fragment,{children:[null==f?void 0:f.map((e,n)=>(0,O.jsx)(Jt,{data:e},n)),E,!b&&P]})]})};er.displayName="WhatsAroundEditorial",er.fragment=Zt;const nr=T.J1`
  fragment WhatsAroundMapFragment on PropertyWhatsAround {
    staticImage {
      description
      url
    }
    mapTrigger {
      ...MapTriggerFragment
    }
  }
  ${$e.L.fragment}
`,ir=({data:e,mapCTALabel:n,propertyId:i,disableSpacing:r})=>{const{ref:l,inView:a}=(0,Re.B)({threshold:0}),s=(0,t.useRef)(null),[,o,d]=(0,he.useDialog)("whats-around-map"),{description:c,url:u}=(null==e?void 0:e.staticImage)||{},p=Boolean(n),m=(0,C.KY)(),h=(0,t.useCallback)((e,n)=>i=>{i.preventDefault(),m(e,n),o.openDialog()},[m,o]),g=(0,t.useCallback)(()=>{o.closeDialog()},[o]),x=null==e?void 0:e.mapTrigger;return(0,O.jsx)(O.Fragment,{children:x?(0,O.jsx)($e.L,{data:x,dialogId:"whats-around-map",dialogQueryKey:"pwaOverlay",closeMapDialogPropBuilder:$e.qK,triggerRef:s,useMapPreview:!0,children:(0,O.jsx)(Nn,{inputs:{propertyId:i},triggerRef:s})}):(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(d,{children:(0,O.jsx)(Nn,{inputs:{propertyId:i},onClose:g,triggerRef:s})}),(0,O.jsx)(I.N,{margin:r?void 0:{blockend:"six"},"data-stid":"whats-around-map",children:(0,O.jsxs)(J.g,{border:p,children:[(0,O.jsx)(Y.E,{padded:!1,children:(0,O.jsx)("div",{ref:l,children:a?(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)("h3",{className:"is-visually-hidden",children:c}),(0,O.jsx)(ee.M,{ratio:ee.l.R21_9,imageFit:"cover",children:(0,O.jsx)(ne.F,{alt:"",src:u||""})})]}):(0,O.jsx)(I.N,{padding:{block:"sixteen"},children:(0,O.jsx)("div",{})})})}),(0,O.jsx)(q.w,{children:(0,O.jsx)("section",{className:"EGDS-button",onClickCapture:h("HOT.HIS:WhatsAroundMap.Open","Launch dynamic map"),children:c})}),n&&(0,O.jsxs)(Y.E,{className:"EGDS-type-300",border:"top",children:[(0,O.jsx)(q.w,{children:(0,O.jsx)("button",{ref:s,type:"button",onClickCapture:h("WhatsAroundMap.ClickLinkViewMap","Launch dynamic map"),children:n})}),(0,O.jsx)(me.i,{inline:!0,children:(0,O.jsx)("button",{type:"button",children:n})})]})]})})]})})};ir.displayName="WhatsAroundMap",ir.fragment=nr;const tr=T.J1`
  fragment WhatsAroundIconFragment on Icon {
    iconId: id
    iconSize: size
  }
`,rr=({data:e})=>{if(!e)return null;const{iconId:n}=e;return(0,O.jsx)(d.LD,{id:`${n}-icon`,name:n})};rr.displayName="WhatsAroundIcon",rr.fragment=tr;const lr=Object.freeze({[ze.TWENTY_ONE_NINE]:ee.l.R21_9,[ze.SIXTEEN_NINE]:ee.l.R16_9,[ze.THREE_TWO]:ee.l.R3_2,[ze.FOUR_THREE]:ee.l.R4_3,[ze.ONE_ONE]:ee.l.R1_1,[ze.THREE_FOUR]:ee.l.R3_4,[ze.FOUR_ONE]:ee.l.R4_1}),ar={[Ke.BOLD]:"bold",[Ke.MEDIUM]:"medium",[Ke.REGULAR]:"regular"},sr=({item:e})=>{var n,i,t,r;return(0,O.jsx)(J.g,{children:(0,O.jsx)(I.N,{padding:{block:"two"},children:(0,O.jsx)(Y.E,{padded:!1,children:(0,O.jsxs)(u.X,{alignItems:"center",space:"four",children:["Icon"===(null===(n=e.primary)||void 0===n?void 0:n.graphic.__typename)&&(0,O.jsx)(p.C,{children:(0,O.jsx)(rr,{data:null===(i=e.primary)||void 0===i?void 0:i.graphic})}),(0,O.jsx)(p.C,{children:(0,O.jsxs)("div",{children:[(0,O.jsx)(A.D,{size:400,weight:(null===(t=e.stylizedText)||void 0===t?void 0:t.weight)?ar[e.stylizedText.weight]:void 0,children:null===(r=e.stylizedText)||void 0===r?void 0:r.text}),(0,O.jsxs)(A.D,{size:300,children:[e.moreInfo,e.distance&&` - ${e.distance}`]})]})})]})})})})};sr.displayName="WhatsAroundPoitsItemCard";const or=T.J1`
  fragment WhatsAroundPoisItemFragment on PropertyInfoContent {
    infoItems {
      ... on PropertyInfoItem {
        text
        distance
        moreInfo
        media {
          ... on Image {
            aspectRatio
            description
            url
          }
        }
        stylizedText {
          text
          weight
        }
        primary {
          graphic {
            ... on Icon {
              ...WhatsAroundIconFragment
            }
          }
        }
      }
    }
  }
  ${rr.fragment}
`,dr=({data:e,hideIcon:n})=>{var i;const t="PropertyInfoItem"===(null===(i=e.infoItems[0])||void 0===i?void 0:i.__typename)&&!!e.infoItems[0].stylizedText;return(0,O.jsx)(I.N,{margin:{small:{blockstart:t?"one":"two"},large:{blockstart:t?"four":"two"}},children:(0,O.jsx)(X.y,{bullet:n||t?"no-bullet":"icon-standard",spacing:!1,children:e.infoItems.filter(e=>"PropertyInfoItem"===e.__typename).map((e,i)=>{var t,r;return(0,O.jsx)(Z.x,{children:(0,O.jsx)(O.Fragment,{children:e.stylizedText?(0,O.jsx)(sr,{item:e}):(0,O.jsxs)(O.Fragment,{children:[!n&&"Icon"===(null===(t=e.primary)||void 0===t?void 0:t.graphic.__typename)&&(0,O.jsx)(rr,{data:null===(r=e.primary)||void 0===r?void 0:r.graphic}),(0,O.jsxs)(A.D,{children:[e.text,e.moreInfo&&` - ${e.moreInfo}`,e.distance&&` - ${e.distance}`]})]})})},`whats-around-pois-list-${i}`)})})})};dr.displayName="WhatsAroundPoisItem",dr.fragment=or;const cr=T.J1`
  fragment WhatsAroundPoisFragment on PropertyWhatsAround {
    nearbyPOIs {
      ...WhatsAroundPoisItemFragment
      title
      clickAnalytics {
        linkName
        referrerId
        eventType
      }
      icon {
        ...WhatsAroundIconFragment
      }
    }
  }

  ${rr.fragment}
  ${dr.fragment}
`,ur=e=>e.reduce((e,n)=>{var i;const t=[...e];switch(null===(i=n.icon)||void 0===i?void 0:i.iconId){case"place":t[0]=n;break;case"lob_cars":t[1]=n;break;case"local_dining":t[2]=n;break;default:t.push(n)}return t},[]),pr=e=>{const{title:n,infoItems:i,icon:t}=e;if(!n||!i||!i.length)return null;const r="lob_cars"!==(null==t?void 0:t.iconId);return(0,O.jsx)(oe.S,{forceNoBreak:!0,children:(0,O.jsx)("div",{children:(0,O.jsx)(I.N,{padding:{block:"three"},children:(0,O.jsxs)(u.X,{space:"three",children:[(0,O.jsx)(p.C,{children:(0,O.jsx)("div",{children:(0,O.jsx)(rr,{data:t})})}),(0,O.jsx)(p.C,{children:(0,O.jsxs)("div",{children:[(0,O.jsx)(S.M,{tag:"h4",size:5,children:n}),(0,O.jsx)(dr,{data:e,hideIcon:r})]})})]})})})})},mr=({data:e,expando:n,isMobile:i})=>{var r,l;const a=(0,C.KY)(),[s,o]=(0,t.useState)(!1);if(!e||!e.nearbyPOIs||e.nearbyPOIs.length<=0)return null;const d=ur(e.nearbyPOIs),c=d.length>2,{expandButton:u,collapseButton:p,items:m}=n||{},h=(0,O.jsx)(se.f,{columns:c?2:1,minWidth:c?"seventy_two":void 0,children:d.map((e,n)=>(0,t.createElement)(pr,jn(jn({},e),{},{key:n})))}),g=(0,O.jsx)(re.A,{hideScrim:!1,items:null!=m?m:0,expandLabel:null==n?void 0:n.expandButton.text,collapseLabel:null==n?void 0:n.collapseButton.text,isVisible:s,handleClick:()=>{var e;o(!s);const{referrerId:n,linkName:i=""}=null!==(e=s?null==p?void 0:p.analytics:null==u?void 0:u.analytics)&&void 0!==e?e:{};n&&a(n,i)},expandA11yLabel:null!==(r=null==u?void 0:u.accessibilityLabel)&&void 0!==r?r:"",collapseA11yLabel:null!==(l=null==p?void 0:p.accessibilityLabel)&&void 0!==l?l:"",children:h});return n&&m&&m>0&&i?g:h};mr.displayName="WhatsAroundPois",mr.fragment=cr;const hr=T.J1`
  fragment WhatsAroundFragment on PropertyInfo {
    id
    summary {
      location {
        whatsAround {
          title
          expando {
            collapseButton {
              text
              accessibilityLabel
              analytics {
                eventType
                referrerId
                linkName
              }
            }
            expandButton {
              text
              accessibilityLabel
              analytics {
                eventType
                referrerId
                linkName
              }
            }
            items
          }
          editorial {
            ...WhatsAroundEditorialFragment
          }
          impressionAnalytics {
            referrerId
            linkName
          }
          ...WhatsAroundPoisFragment
          ...WhatsAroundMapFragment
        }
        mapTrigger {
          label
        }
      }
    }
  }

  ${er.fragment}
  ${mr.fragment}
  ${ir.fragment}
`,gr=({data:e,view:n,isExpando:i,showBorder:r=!1,injectedComponent:l=null})=>{var a,s,o,d,c,u,p,g,x,v,y;const{context:j}=(0,L.R)(),f=(null==j||null===(a=j.device)||void 0===a?void 0:a.type)===We.MOBILE_PHONE,b=null==e||null===(s=e.summary)||void 0===s||null===(s=s.location)||void 0===s||null===(s=s.mapTrigger)||void 0===s?void 0:s.label,k={mapCTALabel:null!=b?b:"",propertyId:e.id},N=null==e||null===(o=e.summary)||void 0===o||null===(o=o.location)||void 0===o?void 0:o.whatsAround,A=null==N?void 0:N.expando,{expandButton:P,collapseButton:E,items:T}=A||{},[_,D]=(0,t.useState)(!1),w=A&&null===T&&f,F=(0,C.KY)(),M=()=>{var e;D(!_);const{referrerId:n,linkName:i=""}=null!==(e=_?null==E?void 0:E.analytics:null==P?void 0:P.analytics)&&void 0!==e?e:{};n&&F(n,i)};if(!e||!N)return null;const R=(0,O.jsx)(re.A,{hideScrim:!0,items:1,expandLabel:null==N||null===(d=N.expando)||void 0===d?void 0:d.expandButton.text,collapseLabel:null==N||null===(c=N.expando)||void 0===c?void 0:c.collapseButton.text,isVisible:_,handleClick:M,expandA11yLabel:null!==(u=null==P?void 0:P.accessibilityLabel)&&void 0!==u?u:"",collapseA11yLabel:null!==(p=null==E?void 0:E.accessibilityLabel)&&void 0!==p?p:"",children:(0,O.jsxs)(O.Fragment,{children:[(N.editorial||n!==Mt.DISABLE_MAP&&b)&&(0,O.jsxs)("div",{children:[n===Mt.DISABLE_MAP?(0,O.jsx)(er,{data:N.editorial}):(0,O.jsx)(ir,jn({data:N},k)),l]}),(0,O.jsx)(mr,{data:N,expando:A,isMobile:f})]})}),$=(0,O.jsxs)(O.Fragment,{children:[n===Mt.DISABLE_MAP?(0,O.jsx)(er,{data:N.editorial}):b&&(0,O.jsx)(ir,jn({data:N},k)),l,(0,O.jsx)(mr,{data:N,expando:A,isMobile:f})]}),H=(0,O.jsx)(I.N,{padding:r?Ot:{small:{blockstart:"six",blockend:"six",inline:"three"},large:{blockstart:"six",blockend:"six",inline:"six"}},children:(0,O.jsx)(J.g,{border:r,children:(0,O.jsx)(Y.E,{children:(0,O.jsx)(re.A,{hideScrim:!1,items:1,expandLabel:null==N||null===(g=N.expando)||void 0===g?void 0:g.expandButton.text,collapseLabel:null==N||null===(x=N.expando)||void 0===x?void 0:x.collapseButton.text,isVisible:_,handleClick:M,expandA11yLabel:null!==(v=null==P?void 0:P.accessibilityLabel)&&void 0!==v?v:"",collapseA11yLabel:null!==(y=null==E?void 0:E.accessibilityLabel)&&void 0!==y?y:"",children:(0,O.jsxs)(m.w,{columns:{small:1,medium:1,large:3},space:"six",children:[(0,O.jsx)(h.T,{colSpan:{small:3,medium:3,large:1},children:(0,O.jsxs)("div",{children:[(0,O.jsx)(I.N,{padding:{inlineend:"three",blockend:"six"},children:(0,O.jsx)(S.M,{tag:"h2",size:4,typeStyle:{customStyle:"headline-large"},tabIndex:-1,children:N.title})}),n!==Mt.DISABLE_MAP&&(0,O.jsx)(er,{data:N.editorial})]})}),(0,O.jsx)(h.T,{colSpan:{small:3,medium:3,large:2},children:(0,O.jsx)("div",{children:i?R:$})})]})})})})}),B=(0,O.jsx)(I.N,{padding:r?Ot:{small:{blockstart:"six",blockend:"six",inline:"three"},large:{blockstart:"six",blockend:"six",inline:"six"}},children:(0,O.jsx)(J.g,{border:r,children:(0,O.jsx)(Y.E,{children:(0,O.jsxs)(m.w,{columns:{small:1,medium:1,large:3},space:"six",children:[(0,O.jsx)(h.T,{colSpan:{small:3,medium:3,large:1},children:(0,O.jsxs)("div",{children:[(0,O.jsx)(I.N,{padding:{inlineend:"three",blockend:"six"},children:(0,O.jsx)(S.M,{tag:"h2",size:4,typeStyle:{customStyle:"headline-large"},tabIndex:-1,children:N.title})}),n!==Mt.DISABLE_MAP&&(0,O.jsx)(er,{data:N.editorial})]})}),(0,O.jsx)(h.T,{colSpan:{small:3,medium:3,large:2},children:(0,O.jsx)("div",{children:i?R:$})})]})})})});return w?H:B};gr.displayName="WhatsAround",gr.fragment=hr;const xr=({data:e,view:n,showBorder:i=!1})=>{var t,r;const l=null==e||null===(t=e.summary)||void 0===t||null===(t=t.location)||void 0===t||null===(t=t.mapTrigger)||void 0===t?void 0:t.label,a={mapCTALabel:null!=l?l:"",propertyId:e.id},{whatsAround:s}=(null==e||null===(r=e.summary)||void 0===r?void 0:r.location)||{whatsAround:null};if(!e||!s)return null;const o=(0,O.jsx)(h.T,{colSpan:1,children:(0,O.jsxs)("div",{children:[(0,O.jsx)(I.N,{padding:{inlineend:"three",blockstart:"six"},children:(0,O.jsx)(S.M,{tag:"h2",size:4,typeStyle:{customStyle:"headline-large"},children:s.title})}),(0,O.jsx)(mr,{data:s})]})}),d=(0,O.jsx)(I.N,{padding:i?Ot:{block:"six",inline:"six"},children:(0,O.jsx)(J.g,{border:i,children:(0,O.jsx)(Y.E,{children:(0,O.jsxs)(m.w,{columns:2,space:"six",children:[o,(0,O.jsx)(h.T,{colSpan:1,children:(0,O.jsxs)("div",{children:[l&&(0,O.jsx)(ir,jn({data:s},a)),(0,O.jsx)(er,{data:s.editorial})]})})]})})})}),c=(0,O.jsx)(I.N,{padding:i?Ot:{block:"six",inline:"six"},children:(0,O.jsx)(J.g,{border:i,children:(0,O.jsx)(Y.E,{children:(0,O.jsxs)(m.w,{columns:3,space:"six",children:[(0,O.jsx)(h.T,{colSpan:1,children:(0,O.jsx)(I.N,{padding:{inlineend:"three"},children:(0,O.jsx)(S.M,{tag:"h2",size:4,typeStyle:{customStyle:"headline-large"},children:s.title})})}),(0,O.jsx)(h.T,{colSpan:2,children:(0,O.jsxs)("div",{children:[(0,O.jsx)(er,{data:s.editorial}),(0,O.jsx)(mr,{data:s})]})})]})})})}),u=n===Mt.DISABLE_MAP?c:d;return(0,O.jsxs)(M.LM,{children:[(0,O.jsx)(M.NP,{children:(0,O.jsx)(O.Fragment,{children:s.nearbyPOIs.length>0&&(0,O.jsx)(I.N,{padding:i?Ot:{block:"six",inline:"three"},children:(0,O.jsx)(J.g,{border:i,children:(0,O.jsx)(Y.E,{children:(0,O.jsx)(m.w,{columns:1,space:"six",children:o})})})})})}),(0,O.jsx)(M.zQ,{children:u})]})};xr.displayName="WhatsAroundPoisView",xr.fragment=hr;const vr=e=>{const{title:n,infoItems:i,icon:t}=e.details;if(!n||!i||!i.length)return null;const r="lob_cars"!==(null==t?void 0:t.iconId);return(0,O.jsx)(oe.S,{forceNoBreak:!0,children:(0,O.jsx)("div",{children:(0,O.jsx)(I.N,{padding:{blockend:"six"},children:(0,O.jsxs)(u.X,{space:"three",children:[e.view!==Mt.MENU_VIEW&&(0,O.jsx)(p.C,{children:(0,O.jsx)("div",{children:(0,O.jsx)(rr,{data:t})})}),(0,O.jsx)(p.C,{children:(0,O.jsxs)("div",{children:[e.view!==Mt.MENU_VIEW&&(0,O.jsx)(S.M,{tag:"h4",size:5,children:n}),(0,O.jsx)(dr,{data:e.details,hideIcon:r})]})})]})})})})},yr=({data:e,view:n,showBorder:i=!1,injectedComponent:r=null})=>{var l,a,s,o,c,u;const p=(0,C.KY)(),[g,x]=(0,t.useState)(!1),[v,y]=(0,t.useState)(0),j=(0,t.useMemo)(()=>i?Ot:n===Mt.MENU_VIEW?$t:Rt,[n,i]),f={mapCTALabel:null!==(l=null==e||null===(a=e.summary)||void 0===a||null===(a=a.location)||void 0===a||null===(a=a.mapTrigger)||void 0===a?void 0:a.label)&&void 0!==l?l:"",propertyId:e.id},b=null==e||null===(s=e.summary)||void 0===s||null===(s=s.location)||void 0===s?void 0:s.whatsAround,k=null==b?void 0:b.impressionAnalytics,N=null==b?void 0:b.expando;if(!e||!b)return null;const A=ur(b.nearbyPOIs).filter(e=>e.infoItems.length>0),P=A.length>2,{expandButton:E,collapseButton:T}=N||{},L=(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(se.f,{columns:P?2:1,minWidth:P?"seventy_two":void 0,children:A.map((e,n)=>(0,O.jsx)(vr,{details:jn({},e)},n))}),g?(0,O.jsx)(er,{data:b.editorial,isWhatsAroundMapPoisEditorialView:!0}):null]}),_=(0,O.jsx)(ce.Dp,{selectedTab:v,onTabSelect:e=>{var n,i;(null===(n=A[e])||void 0===n||null===(n=n.clickAnalytics)||void 0===n?void 0:n.referrerId)&&p(A[e].clickAnalytics.referrerId,null===(i=A[e])||void 0===i||null===(i=i.clickAnalytics)||void 0===i?void 0:i.linkName);y(e)},tabsType:ce.N8.EQUAL_WIDTH,withBorder:!1,role:"tablist",children:A.map((e,i)=>{var t,r;return(0,O.jsx)(de.W,{name:e.title,targetURI:`?=Tab${i}`,iconDetails:{name:null==e||null===(t=e.icon)||void 0===t?void 0:t.iconId,size:(null==e||null===(r=e.icon)||void 0===r?void 0:r.iconSize)?d.So[e.icon.iconSize]:null,title:e.title},children:(0,O.jsx)(vr,{details:jn({},e),view:n},i)},i)})}),D=(0,O.jsxs)(O.Fragment,{children:[n===Mt.MENU_VIEW&&(0,O.jsx)(er,{data:b.editorial,hideTitle:!0,isExpandoView:!0,isWhatsAroundMapPoisEditorialView:!0}),(0,O.jsx)(I.N,{margin:{blockend:"six"},children:(0,O.jsx)("div",{children:(0,O.jsx)(ir,jn({data:b},f))})}),r&&(0,O.jsx)(I.N,{margin:{blockend:"six"},children:(0,O.jsx)("div",{children:r})}),(0,O.jsx)("div",{children:n===Mt.MENU_VIEW?_:(0,O.jsx)(re.A,{hideScrim:!0,items:1,expandLabel:null==N?void 0:N.expandButton.text,collapseLabel:null==N?void 0:N.collapseButton.text,isVisible:g,handleClick:()=>{var e;x(!g);const{referrerId:n,linkName:i=""}=null!==(e=g?null==T?void 0:T.analytics:null==E?void 0:E.analytics)&&void 0!==e?e:{};n&&p(n,i)},expandA11yLabel:null!==(o=null==E?void 0:E.accessibilityLabel)&&void 0!==o?o:"",collapseA11yLabel:null!==(c=null==T?void 0:T.accessibilityLabel)&&void 0!==c?c:"",children:L})})]}),w=(0,O.jsx)(I.N,{padding:j,children:(0,O.jsx)(J.g,{border:i,children:(0,O.jsx)(Y.E,{padded:!0,children:(0,O.jsxs)(m.w,{columns:{small:1,medium:1,large:3},space:"six",children:[(0,O.jsx)(h.T,{colSpan:{small:3,medium:3,large:1},children:(0,O.jsx)("div",{children:(0,O.jsx)(I.N,{children:(0,O.jsx)(S.M,{tag:"h2",size:4,typeStyle:{customStyle:"headline-large"},tabIndex:-1,children:b.title})})})}),(0,O.jsx)(h.T,{colSpan:{small:3,medium:3,large:2},children:(0,O.jsx)("div",{children:D})})]})})})});return(null==k?void 0:k.referrerId)?(0,O.jsx)(C.ee,{referrerId:k.referrerId,linkName:null!==(u=null==k?void 0:k.linkName)&&void 0!==u?u:"",children:w}):w};yr.displayName="WhatsAroundMapPoisEditorialView",yr.fragment=hr;const jr=({data:e,hideIcon:n})=>(0,O.jsx)(I.N,{margin:{small:{blockstart:"one"},large:{blockstart:"four"}},children:(0,O.jsx)(X.y,{bullet:n?"no-bullet":"icon-standard",spacing:!1,children:e.infoItems.filter(e=>"PropertyInfoItem"===e.__typename).map((e,i)=>{var t,r,l,a,s;return(0,O.jsx)(Z.x,{children:(0,O.jsx)(J.g,{children:(0,O.jsxs)(m.w,{columns:3,space:"six",children:[(0,O.jsx)(h.T,{colSpan:1,children:(0,O.jsx)(J.g,{backgroundTheme:"secondary",children:"Image"===(null==e||null===(t=e.media)||void 0===t?void 0:t.__typename)&&(null==e||null===(r=e.media)||void 0===r?void 0:r.url)?(0,O.jsx)(ee.M,{imageFit:"cover",ratio:(null==e||null===(l=e.media)||void 0===l?void 0:l.aspectRatio)?lr[null==e?void 0:e.media.aspectRatio]:ee.l.R16_9,children:(0,O.jsx)(ne.F,{alt:e.media.description,src:e.media.url})}):null})}),(0,O.jsx)(h.T,{colSpan:2,alignSelf:"center",children:(0,O.jsxs)("div",{children:[!n&&"Icon"===(null===(a=e.primary)||void 0===a?void 0:a.graphic.__typename)&&(0,O.jsx)(rr,{data:null===(s=e.primary)||void 0===s?void 0:s.graphic}),e.stylizedText?(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(A.D,{size:400,weight:e.stylizedText.weight?ar[e.stylizedText.weight]:void 0,children:e.stylizedText.text}),(0,O.jsxs)(A.D,{children:[e.moreInfo,e.distance&&` - ${e.distance}`]})]}):(0,O.jsxs)(A.D,{children:[e.text,e.moreInfo,e.distance&&` - ${e.distance}`]})]})})]})})},`whats-around-pois-list-${i}`)})})});jr.displayName="WhatsAroundPoisImageItem";const fr={[M.OB.SMALL]:ce.w6.TOP,[M.OB.MEDIUM]:ce.w6.LEFT},Ir=({details:e})=>{const{title:n,infoItems:i,icon:t}=e;if(!n||!i||!i.length)return null;const r=null==i?void 0:i.some(e=>"PropertyInfoItem"===e.__typename&&e.media),l="lob_cars"!==(null==t?void 0:t.iconId);return(0,O.jsxs)("div",{children:[(0,O.jsx)(M.LM,{children:(0,O.jsx)(M.zQ,{children:(0,O.jsx)(S.M,{tag:"h3",size:5,children:n})})}),r?(0,O.jsx)("div",{children:(0,O.jsx)(jr,{data:e,hideIcon:l})}):(0,O.jsx)("div",{children:(0,O.jsx)(dr,{data:e,hideIcon:l})})]})},br=({data:e})=>{var n,i,r,l;const a=(0,C.KY)(),[s,o]=(0,t.useState)(0),c=null==e||null===(n=e.summary)||void 0===n||null===(n=n.location)||void 0===n?void 0:n.whatsAround,u=null==c?void 0:c.impressionAnalytics,p=(0,M.s5)(fr),g={mapCTALabel:null!==(i=null==e||null===(r=e.summary)||void 0===r||null===(r=r.location)||void 0===r||null===(r=r.mapTrigger)||void 0===r?void 0:r.label)&&void 0!==i?i:"",propertyId:e.id};if(!e||!c)return null;const x=ur(c.nearbyPOIs).filter(e=>e.infoItems.length>0),v=x.length,y=(0,O.jsx)(h.T,{colSpan:3,children:(0,O.jsx)(m.w,{columns:v,space:"six",children:x.map((e,n)=>(0,O.jsx)(h.T,{colSpan:1,children:(0,O.jsx)(J.g,{children:(0,O.jsx)(I.N,{padding:"four",children:(0,O.jsx)("div",{children:(0,O.jsx)(Ir,{details:jn({},e)},n)})})})},n))})}),j=(0,O.jsx)(J.g,{children:(0,O.jsx)(I.N,{padding:"four",children:(0,O.jsx)("div",{children:(0,O.jsx)(ce.Dp,{selectedTab:s,onTabSelect:e=>{var n,i;(null===(n=x[e])||void 0===n||null===(n=n.clickAnalytics)||void 0===n?void 0:n.referrerId)&&a(x[e].clickAnalytics.referrerId,null===(i=x[e])||void 0===i||null===(i=i.clickAnalytics)||void 0===i?void 0:i.linkName);o(e)},tabsType:ce.N8.EQUAL_WIDTH,withBorder:!1,role:"tablist",alignIcon:p,children:x.map((e,n)=>{var i,t;return(0,O.jsx)(de.W,{name:e.title,targetURI:`?=Tab${n}`,iconDetails:{name:null==e||null===(i=e.icon)||void 0===i?void 0:i.iconId,size:(null==e||null===(t=e.icon)||void 0===t?void 0:t.iconSize)?d.So[e.icon.iconSize]:null},children:(0,O.jsx)("div",{children:(0,O.jsx)(Ir,{details:jn({},e)},n)})},n)})})})})}),f=(0,O.jsxs)(M.LM,{children:[(0,O.jsx)(M.NP,{children:(0,O.jsx)(He.s,{paddedViewRow:!1,canvasTheme:"secondary",layout:"fullwidth",children:(0,O.jsx)(I.N,{padding:"six",children:(0,O.jsx)(Y.E,{padded:!1,children:(0,O.jsxs)(m.w,{columns:1,space:"four",children:[(0,O.jsx)(h.T,{colSpan:1,children:(0,O.jsxs)("div",{children:[(0,O.jsx)(I.N,{margin:{blockend:"one"},children:(0,O.jsx)(S.M,{tag:"h2",size:4,typeStyle:{customStyle:"headline-large"},tabIndex:-1,children:c.title})}),(0,O.jsx)(er,{data:c.editorial,hideTitle:!0,isExpandoView:!0,isWhatsAroundMapPoisEditorialView:!0})]})}),(0,O.jsx)(h.T,{colSpan:1,children:(0,O.jsx)("div",{children:(0,O.jsx)(ir,jn(jn({data:c},g),{},{disableSpacing:!0}))})}),j]})})})})}),(0,O.jsx)(M.zQ,{children:(0,O.jsx)(J.g,{backgroundTheme:"secondary",children:(0,O.jsx)(I.N,{padding:"six",children:(0,O.jsx)(Y.E,{padded:!1,children:(0,O.jsxs)(m.w,{columns:3,space:"six",children:[(0,O.jsx)(h.T,{colSpan:2,children:(0,O.jsxs)("div",{children:[(0,O.jsx)(I.N,{margin:{blockend:"one"},children:(0,O.jsx)(S.M,{tag:"h2",size:4,typeStyle:{customStyle:"headline-large"},tabIndex:-1,children:c.title})}),(0,O.jsx)(er,{data:c.editorial,hideTitle:!0,isExpandoView:!0,isWhatsAroundMapPoisEditorialView:!0})]})}),(0,O.jsx)(h.T,{colSpan:1,children:(0,O.jsx)("div",{children:(0,O.jsx)(ir,jn(jn({data:c},g),{},{disableSpacing:!0}))})}),y]})})})})})]});return(null==u?void 0:u.referrerId)?(0,O.jsx)(C.ee,{referrerId:u.referrerId,linkName:null!==(l=null==u?void 0:u.linkName)&&void 0!==l?l:"",children:f}):f};br.displayName="WhatsAroundAttractions",br.fragment=hr;const Sr=T.J1`
  query PropertyDetailsBasicQuery(
    $context: ContextInput!
    $propertyId: String!
    $shoppingContext: ShoppingContextInput
    $searchCriteria: PropertySearchCriteriaInput
    $damageLiability: DamageLiability
    $identifier: String
  ) {
    propertyInfo(context: $context, propertyId: $propertyId, shoppingContext: $shoppingContext, searchCriteria: $searchCriteria) {
      id
      ...PropertyDetailsAmenityDescriptionFragment
      ...PoliciesFragment
      ...PropertyDetailedAmenitiesFragment
      ...ImportantInfoFragment
      ...FrequentlyAskedQuestionsFragment
      ...AboutThisPropertyFragment
      ...WhatsAroundFragment
      ...SummaryFragment
      ...BookByPhoneFragment
      ...SpaceOverviewFragment
      ...InventorySourceFragment
      ...SaveTripItemFragment
      ...AmenitiesSimplifiedViewFragment
      ...RelevantAmenitiesFragment
      ...SpecialFeaturesFragment
      ...HostProfileFragment
      ...ShoppingShareLinksFragment
      ...__PropertyDirectFeedbackPromptIdFragment
      ...PropertyNumberFragment
      ...SummaryVipBadgeFragment
      ...BookWithConfidenceFragment
    }
  }
  ${yi.fragment}
  ${D.lxV.fragment}
  ${D.IFj.fragment}
  ${D.dYd.fragment}
  ${Ei.fragment}
  ${D.rSL.fragment}
  ${gr.fragment}
  ${fi.fragment}
  ${Et}
  ${ct.fragment}
  ${_i.fragment}
  ${Ui.fragment}
  ${ai.fragment}
  ${Hi.fragment}
  ${D.H2K.fragment}
  ${D.cLB.fragment}
  ${rt.fragment}
  ${bi}
  ${Mi.fragment}
  ${Pt.fragment}
  ${Ft.fragment}
`;function kr(e,n,i,r=!0){const l=n=>{var l;const{skipSsr:a,placeholderData:s,inputs:o}=n,{context:d}=(0,L.R)(),[c,u]=(0,t.useContext)(Pn),{data:p,loading:m}=(0,T.IT)(Sr,{context:{shouldLogPerformance:!0},variables:jn({context:d},o||{}),ssr:!a,errorPolicy:"all"}),h=null==p?void 0:p.propertyInfo,{reserveAdaptExSuccessEvents:g,amenitiesAdaptExSuccessEvents:x}=(null==p||null===(l=p.propertyInfo)||void 0===l||null===(l=l.summary)||void 0===l?void 0:l.amenities)||{};return(0,t.useEffect)(()=>{let e={};g&&(e=jn(jn({},e),{},{reserveAdaptExSuccessEvents:g})),x&&(e=jn(jn({},e),{},{amenitiesAdaptExSuccessEvents:x})),Object.keys(e).length&&u(jn(jn({},c),e))},[g,x,u]),r&&m?i?(0,O.jsx)(i,{data:s}):null:r&&!h?m&&i?(0,O.jsx)(i,{data:s}):null:(0,O.jsxs)(O.Fragment,{children:[m&&i?(0,O.jsx)(i,{data:s}):null,(0,O.jsx)(Ti.Provider,{value:o,children:(0,O.jsx)(e,jn({data:h||{}},n))})]})};return l.displayName=n,l}Object.assign(kr(_t,"PropertySummary"),{CarouselComponent:Lt,HighlightedBenefitsComponent:Ct});const Nr=kr(Ei,"PropertyFaq"),Ar=kr(yi,"PropertyAmenityDescription"),Pr=(kr(ai,"PropertyAmenitiesSimplifiedView"),kr(St,"PropertySummaryAmenities",Dt),kr(D.IFj,"PropertyDetailedAmenities",Dt)),Er=kr(D.lxV,"PropertyPolicies"),Tr=kr(D.dYd,"PropertyImportantInfo"),Lr=kr(D.H2K,"PropertySpecialFeatures"),Cr=kr(D.rSL,"PropertyAboutThisProperty"),_r=kr(gr,"PropertyImportantInfo"),Dr=kr(yr,"PropertyImportantInfo"),wr=(kr(xr,"PropertyImportantInfo"),kr(br,"PropertyWhatsAroundAttractions")),Fr=(kr(fi,"PropertyBookByPhone",({data:e,className:n})=>(null==e?void 0:e.telesales)?(0,O.jsx)(fi,{data:e,className:n}):(0,O.jsx)(u.X,{justifyContent:"center",className:n,children:(0,O.jsx)(I.N,{margin:"one",children:(0,O.jsx)(j.R,{type:"line",animation:!0,lineLength:"primary"})})})),kr(ct,"PropertySpaceOverview")),Mr=kr(_i,"PropertyInventorySource"),Or=kr(Hi,"PropertyRelevantAmenities"),Rr=kr(D.cLB,"PropertyHostProfile"),$r=(kr(Nt,"PropertySummaryChatbotLaunch",Dt),kr(Ui,"PropertySaveTripItem")),Hr=kr(Si,"PropertyDirectFeedbackPromptId"),Br=kr(rt,"PropertyShareActions"),zr=(kr(Mi,"PropertyNumberMessage"),kr(Pt,"PropertySummaryVipBadge"));kr(Ft,"PropertyBookWithConfidence")}}]);
//# sourceMappingURL=https://bernie-assets.s3.us-west-2.amazonaws.com/landing-pwa/shared-ui-lodging-property-details.f53929e1df5698cbba94.js.map