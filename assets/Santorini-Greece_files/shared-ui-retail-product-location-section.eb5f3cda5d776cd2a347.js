/*@license For license information please refer to shared-ui-retail-product-location-section.licenses.txt*/
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[8047],{16444:function(e,n,t){t.d(n,{Pl:function(){return qe},Wx:function(){return K},tV:function(){return Me},zk:function(){return Ze}});var i=t(96540),a=t(66501),o=t(84683),r=t(38955),l=t(77511),s=t(66104),c=t(33998),d=t(35784),u=t(33694),p=t(82308),m=t(20209),g=t(55009),h=t(66162),v=t(30230),x=t(65845),y=t(92870),f=t(33466),j=t(63912),S=t(85361),I=t(716),C=t(74848),_=t(22868),b=t(74276),T=t(58646),P=t(70118),N=t(95834),k=t(68627),O=t(7326),R=t(5846),E=t(81305),F=t(86375),D=t(76972),A=t(39128),L=t(12285),M=t(10044),w=t(81042),$=t(66300),B=t(84043),H=t(48842),V=t(53383),z=t(39196);let U=function(e){return e.FOUR_ONE="FOUR_ONE",e.FOUR_THREE="FOUR_THREE",e.ONE_ONE="ONE_ONE",e.SIXTEEN_NINE="SIXTEEN_NINE",e.THREE_FOUR="THREE_FOUR",e.THREE_TWO="THREE_TWO",e.TWENTY_ONE_NINE="TWENTY_ONE_NINE",e}({}),J=function(e){return e.PLACE="PLACE",e.PRODUCT="PRODUCT",e.PROPERTY="PROPERTY",e}({}),K=function(e){return e.ACTIVITY_ID="ACTIVITY_ID",e.CART_ID="CART_ID",e.CAR_OFFER_TOKEN="CAR_OFFER_TOKEN",e.CHECKOUT_SESSION_ID="CHECKOUT_SESSION_ID",e.ENTITY_ID="ENTITY_ID",e.LEGACY_ORDER_ID="LEGACY_ORDER_ID",e.OFFER_ID="OFFER_ID",e.ORDER_ID="ORDER_ID",e.PROPERTY_ID="PROPERTY_ID",e.SAILING_TOKEN="SAILING_TOKEN",e}({}),G=function(e){return e.CLICK="CLICK",e.HOVER="HOVER",e.LOAD="LOAD",e}({});const Y=Object.freeze({[U.TWENTY_ONE_NINE]:r.l.R21_9,[U.SIXTEEN_NINE]:r.l.R16_9,[U.THREE_TWO]:r.l.R3_2,[U.FOUR_THREE]:r.l.R4_3,[U.ONE_ONE]:r.l.R1_1,[U.THREE_FOUR]:r.l.R3_4,[U.FOUR_ONE]:r.l.R4_1}),W=m.J1`
  fragment ImagesSectionCardFragment on EGDSImageCard {
    image {
      aspectRatio
      description
      thumbnailClickAnalytics {
        linkName
        referrerId
      }
      url
    }
    subTitle
    title
  }
`,X=({data:e})=>{const{image:n,subTitle:t,title:i}=e,{aspectRatio:o,description:c,url:d}=n||{},u=(0,h.KY)(),m=(0,x.useExperiment)("PDP_Destination_Content_Quality",!1).exposure.bucket>0,g=(0,C.jsx)(r.M,{roundcorner:m,ratio:o?Y[o]:r.l.R16_9,children:(0,C.jsx)(l.F,{placeholderImage:!0,alt:c,src:d,lazyLoading:"lazy"})});return(0,C.jsxs)(s.X,{direction:"column",children:[(0,C.jsx)("div",{"data-testid":"poi-image",onClickCapture:()=>{(null==n?void 0:n.thumbnailClickAnalytics)&&u(n.thumbnailClickAnalytics.referrerId,n.thumbnailClickAnalytics.linkName)},children:m?g:(0,C.jsx)(a.g,{children:g})}),(0,C.jsx)(p.N,{padding:{blockstart:"two"},children:(0,C.jsx)(I.D,{size:300,weight:"medium",children:i})}),(0,C.jsx)(p.N,{padding:{blockstart:"one"},children:(0,C.jsx)(I.D,{size:200,children:t})})]})};X.displayName="ImagesSectionCard",X.fragment=W;const Q=m.J1`
  fragment ImagesSectionFragment on ImagesSection {
    clickStreamAnalytics
    imageCards {
      ...ImagesSectionCardFragment
    }
    impressionAnalytics {
      referrerId
      linkName
    }
  }
  ${X.fragment}
`,q=({data:e})=>{const n=(0,j.eg)({viewSizes:j.pf}),t=j.pf.SMALL===n;if(!(null==e?void 0:e.imageCards))return null;const{imageCards:i,impressionAnalytics:a}=e,o=(r=i.length,Boolean(r%2));var r;const l=(0,C.jsx)("div",{"data-testid":"small-poi-images-layout",children:(0,C.jsx)(d.w,{space:"four",columns:2,justifyContent:"center",alignItems:"start",children:i.map((e,n)=>{return e.image&&(0,C.jsx)(u.T,{colSpan:(t=n,o&&0===t?2:1),children:(0,C.jsx)("div",{children:(0,C.jsx)(X,{data:e})})},`image-section-card-${n+1}`);var t})})}),s=(0,C.jsx)("div",{"data-testid":"big-poi-images-layout",children:(0,C.jsx)(d.w,{space:"four",columns:i.length>3?6:i.length,justifyContent:"center",alignItems:"start",children:i.map((e,n)=>{return e.image&&(0,C.jsx)(u.T,{colSpan:(t=n,i.length>3?t<2?3:2:1),children:(0,C.jsx)("div",{children:(0,C.jsx)(X,{data:e})})},`image-section-card-${n+1}`);var t})})}),c=t?l:s;return(null==a?void 0:a.referrerId)&&(null==a?void 0:a.linkName)?(0,C.jsx)(h.ee,{trackOnce:!0,referrerId:a.referrerId,linkName:a.linkName,children:c}):c};function Z(e){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z(e)}function ee(e){var n=function(e,n){if("object"!=Z(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,n||"default");if("object"!=Z(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==Z(n)?n:n+""}function ne(e,n,t){return(n=ee(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function te(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,i)}return t}function ie(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?te(Object(t),!0).forEach(function(n){ne(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):te(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}q.displayName="ImagesSection",q.fragment=Q;const ae=m.J1`
  fragment LocationAddressFragment on ProductLocationAddress {
    coordinates {
      latitude
      longitude
    }
    address
    seoData {
      content
      itemprop
      itemscope
    }
  }
`,oe=({coordinates:e})=>{const n=String(null==e?void 0:e.latitude),t=String(null==e?void 0:e.longitude);return(0,C.jsxs)("div",{itemProp:"geo",itemScope:!0,itemType:"http://schema.org/GeoCoordinates",children:[(0,C.jsx)("meta",{itemProp:"latitude",content:n}),(0,C.jsx)("meta",{itemProp:"longitude",content:t})]})};oe.displayName="Schema";const re=({data:e})=>{const{address:n,seoData:t}=e;if(!n)return null;const i=n.join(", ");return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(c.C,{minWidth:"full_width",children:(0,C.jsxs)(I.D,{"data-stid":"content-hotel-address",children:[t&&(null==t?void 0:t.length)>0&&(0,C.jsx)("div",{itemProp:"address",itemScope:!0,itemType:"http://schema.org/PostalAddress",children:t.map((e,n)=>{var t;return(0,C.jsx)("meta",{itemProp:e.itemprop,content:null!==(t=e.content)&&void 0!==t?t:void 0},`seoContent_${n}`)})}),i]})}),(0,C.jsx)(oe,ie({},e))]})};re.displayName="LocationAddress",re.fragment=ae;const le="requestFrom",se=(e,n)=>{var t;return n&&null!==(t=null==e?void 0:e.find(e=>e.actionId===n))&&void 0!==t?t:null},ce=(e,n,t)=>{e&&n(e.referrerId,e.linkName),setTimeout(()=>{t.openDialog({closeAllDialogs:!0})})},de=(0,i.createContext)(null),ue=({children:e,data:n})=>(0,C.jsx)(de.Provider,{value:n,children:e}),pe=e=>{const{shoppingJoinListContainer:n}=(0,i.useContext)(de)||{};return se(null==n?void 0:n.actions,e)},me=()=>{const{shoppingJoinListContainer:e,contents:n}=(0,i.useContext)(de)||{};return{getOverlayContainer:n=>((e,n)=>{const t=null==n?void 0:n.find(n=>n.overlayId===e);return null!=t?t:null})(n,null==e?void 0:e.overlays),getContentContainer:e=>((e,n)=>{const t=null==n?void 0:n.find(n=>n.contentId===e);return null!=t?t:null})(e,n)}};let ge=function(e){return e.PAN="PAN",e.ZOOM_IN="ZOOM_IN",e.ZOOM_OUT="ZOOM_OUT",e.CLOSE="CLOSE",e}({});ge.PAN,ge.ZOOM_IN,ge.ZOOM_OUT,ge.CLOSE;let he=function(e){return e.RESTAURANT="RESTAURANT_APPLIED",e.LANDMARK="LANDMARK_APPLIED",e.BOTH="BOTH_APPLIED",e.NONE="NONE_APPLIED",e}({});function ve(e){const{trackMapInit:n,trackMapPresented:t,trackMapContentPresented:i,trackMapHidden:a}=(0,k.we)();return{trackMapInit:n,trackMapPresented:t,trackMapContentPresented:i,onClose:()=>{e&&e(),a()}}}he.RESTAURANT,he.LANDMARK,he.BOTH,he.NONE;const xe=(0,i.memo)(({label:e,onClick:n})=>(0,C.jsx)(c.C,{children:e&&(0,C.jsx)(E.W,{size:R.V.LARGE,onClick:n,name:e,children:e})}));xe.displayName="sharedUi-ChooseARoomButton";const ye=()=>(0,C.jsx)(F.R,{cornerRadius:0,type:"block"});ye.displayName="sharedUi-MapLoading";const fe=()=>(0,C.jsxs)(d.w,{blockSize:"full_size",alignItems:"center",justifyItems:"center",alignContent:"center",children:[(0,C.jsx)(u.T,{}),(0,C.jsx)(u.T,{alignSelf:"center",justifySelf:"center",children:(0,C.jsxs)(s.X,{alignItems:"center",direction:"column",children:[(0,C.jsx)(c.C,{children:(0,C.jsx)(p.N,{margin:"two",children:(0,C.jsx)(D.r,{alt:"Map Illustration",url:"https://a.travel-assets.com/egds/illustrations/map__xsmall.svg"})})}),(0,C.jsx)(c.C,{children:(0,C.jsx)(S.M,{size:5,tag:"h5",children:"We couldn’t load the map"})})]})}),(0,C.jsx)(u.T,{})]});fe.displayName="sharedUi-ErrorCard";const je=()=>{const e=1===(0,x.useExperiment)("Top_Of_PDP_Iteration_Web_Feature_Gate",!1).exposure.bucket,n=1===(0,x.useExperiment)("Top_of_PDP_Redesign",!1).exposure.bucket;return e&&n};var Se=function(e){return e.flight="lob_flights",e}(Se||{});const Ie=({text:e,accessibilityLabel:n})=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(I.D,{"aria-hidden":Boolean(n),children:e}),n&&(0,C.jsx)("span",{className:"is-visually-hidden",children:n})]}),Ce=({eventName:e,clickStreamAnalytics:n,children:t})=>n?(0,C.jsx)(h.E0,{eventData:(0,y.Ft)(e,n),children:t}):(0,C.jsx)(C.Fragment,{children:t}),_e=({iconProps:e,text:n,subText:t,additionalText:i,accessibilityLabel:a})=>{const o=je();return(0,C.jsxs)(d.w,{columns:["min-content","1fr"],autoRows:["min-content"],tag:"li",children:[e&&(0,C.jsx)(u.T,{rowSpan:"all",children:(0,C.jsx)(p.N,{padding:{inlineend:"three"},children:(0,C.jsx)(y.YF,{data:e})})}),(0,C.jsx)(u.T,{colStart:2,rowStart:1,children:(0,C.jsxs)(s.X,{space:"two",justifyContent:"space-between",wrap:"nowrap",children:[(0,C.jsx)(c.C,{grow:1,children:(0,C.jsx)(Ie,{text:n,accessibilityLabel:a})}),!o&&i&&(0,C.jsx)(c.C,{shrink:0,children:(0,C.jsx)(I.D,{children:i})})]})}),t&&(0,C.jsx)(u.T,{colStart:2,rowStart:2,children:(0,C.jsx)(I.D,{size:200,children:t})})]})},be=({data:e,isContentWithImages:n=!1})=>{const{items:t,impressionAnalytics:i,maxColumns:a}=e||{},{linkName:o,referrerId:c}=i||{},m=(0,h.iQ)(),g=(null==t?void 0:t.filter(e=>{var n;return"ShoppingProductContentGraphicsItem"===e.__typename&&"mediaItem"in e&&void 0!==(null===(n=e.mediaItem)||void 0===n?void 0:n.media)}))||[],v=(null==t?void 0:t.filter(e=>{var n;return"ShoppingProductContentGraphicsItem"!==e.__typename||!(null==e||null===(n=e.mediaItem)||void 0===n?void 0:n.media)}))||[],x=(0,C.jsx)(p.N,{margin:{blockstart:"one"},children:(0,C.jsx)("div",{"data-testid":"near-by-points-of-interest-with-images",children:(0,C.jsx)(d.w,{space:"four",columns:a,justifyContent:"center",alignItems:"start",children:null==g?void 0:g.map((e,n)=>{var t,i,a;return(0,C.jsx)(u.T,{children:(0,C.jsx)(Ce,{eventName:"image.presented",clickStreamAnalytics:e.clickStreamAnalytics,children:(0,C.jsxs)(s.X,{direction:"column",children:["Image"===(null==e||null===(t=e.mediaItem)||void 0===t||null===(t=t.media)||void 0===t?void 0:t.__typename)&&(0,C.jsx)(r.M,{ratio:r.l.R16_9,roundcorner:!0,children:(0,C.jsx)(R.u,{onClick:()=>{var n;(n=e.mediaItem).interactionAnalytics&&m((0,y.Ft)("image.selected",n.interactionAnalytics))},children:(0,C.jsx)(l.F,{placeholderImage:!0,alt:null==e||null===(i=e.mediaItem)||void 0===i||null===(i=i.media)||void 0===i?void 0:i.description,src:null==e||null===(a=e.mediaItem)||void 0===a||null===(a=a.media)||void 0===a?void 0:a.url,lazyLoading:"lazy"})})}),(0,C.jsx)(p.N,{padding:{blockstart:"two"},children:(0,C.jsx)(Ie,{text:e.text,accessibilityLabel:e.accessibilityLabel})}),(0,C.jsx)(p.N,{padding:{blockstart:"one"},children:(0,C.jsxs)(I.D,{size:200,children:[" ",e.additionalText]})})]})})},`poi-image-${n+1}`)})})})}),f=(0,C.jsx)(p.N,{margin:{blockstart:n?"four":"unset"},children:(0,C.jsx)("div",{children:(0,C.jsx)(w.y,{bullet:"no-bullet",spacing:!0,children:null==v?void 0:v.map((e,n)=>{if("ShoppingProductContentGraphicsItem"===e.__typename){const{leadingIcon:i,text:a,subText:o,additionalText:r,accessibilityLabel:l}=e||{};return(0,C.jsx)(_e,{iconProps:i&&(t=i,ie({id:Se[t.id]||t.id,token:Se[t.id]||t.id,title:t.description,size:M.So.MEDIUM},t)),text:a,subText:o,additionalText:r,accessibilityLabel:l},n)}var t;return"EGDSPlainText"===e.__typename&&e.text?e.text&&(0,C.jsx)("span",{role:"listitem",children:e.text}):null})})})}),j=(0,C.jsxs)(C.Fragment,{children:[g.length>0&&x,v.length>0&&f]});return(0,C.jsx)(C.Fragment,{children:c&&o?(0,C.jsx)(h.ee,{referrerId:c,linkName:o,children:j}):j})};be.displayName="NearByPointsOfInterest";const Te=m.J1`
  fragment PlacesSectionContentTabsFragment on ShoppingProductContentSheetTabsContent {
    body {
      navType
      selectedTabId
      tabs {
        accessibility
        contentId
        label
        tabId
        clickStreamAnalytics
        clickAnalytics {
          referrerId
          linkName
        }
      }
    }
  }
`,Pe=({data:e})=>{var n,t,a;const{body:o}=e,r=(0,h.KY)(),l=me(),s=(0,h.iQ)(),d=null!==(n=null==o||null===(t=o.tabs)||void 0===t?void 0:t.findIndex(e=>e.tabId===(null==o?void 0:o.selectedTabId)))&&void 0!==n?n:-1,[u,p]=(0,i.useState)(d>=0?d:0);if(!o||!Array.isArray(o.tabs)||0===o.tabs.length)return null;const{tabs:m}=o,g=null==l?void 0:l.getContentContainer(null===(a=m[u])||void 0===a?void 0:a.contentId);let v=[];var x;(null==g?void 0:g.content)&&"subSections"in g.content&&Array.isArray(g.content.subSections)&&(v=(null===(x=g.content.subSections[0])||void 0===x||null===(x=x.elements)||void 0===x||null===(x=x[0])||void 0===x?void 0:x.elements)||[]);const f=v.length>1,j=()=>{if("ShoppingProductContentSection"===(null==g?void 0:g.content.__typename)){const e=v.map((e,n)=>(0,C.jsx)(be,{data:e,isContentWithImages:f},n)),n=v.find(e=>e.impressionAnalytics);return n?(0,C.jsx)(h.E0,{eventData:(0,y.Ft)("points_of_interest.presented",n.clickStreamAnalytics),children:e}):e}return null};return(0,C.jsx)(c.C,{grow:1,children:(0,C.jsx)("div",{children:(0,C.jsx)(H.IN,{selectedTab:u,onTabSelect:e=>{const n=m[e];if(n){if(e===u)return;const t=n.label,{referrerId:i=`${t}.selected`,linkName:a=`Clicked ${t} tab`}=n.clickAnalytics;r(i,a),n.clickStreamAnalytics&&s((0,y.Ft)("nav_bar.selected",n.clickStreamAnalytics)),p(e)}},children:m.map((e,n)=>(0,C.jsx)(B.X,{name:e.label||"",targetURI:`tab${n}`,children:u===n&&j()},`tab${n}`))})})})};Pe.displayName="PlacesSectionContentTabs",Pe.fragment=Te;const Ne=m.J1`
  fragment PlacesSectionOverlayContentFragment on ProductLocationLandmarksContent {
    editorial
    header {
      ...ShoppingProductHeaderFragment
    }
    clickStreamAnalytics
    landmarks {
      ...ShoppingProductContentFragment
    }
    landmarksV2 {
      ... on ShoppingProductContentSheetTabsContent {
        ...ShoppingProductContentTabsFragment
      }
    }
  }

  ${y.D5.fragment}
  ${y.zx.fragment}
  ${y.rl.fragment}
`,ke=({data:e,imagesSection:n})=>{var t;const{header:a,editorial:o,landmarks:r,landmarksV2:l}=e,d=null==r||null===(t=r[0])||void 0===t||null===(t=t.items)||void 0===t?void 0:t[0],u=Boolean("ShoppingProductContentGraphicsItem"===(null==d?void 0:d.__typename)&&(null==d?void 0:d.mediaItem)),m=e=>{var n;const t=e.length>0&&"ShoppingProductContentGraphicsItem"===(null===(n=e[0])||void 0===n?void 0:n.__typename)&&e[0].leadingIcon?"icon-alternate":"no-bullet";return e.length>0?(0,C.jsx)(p.N,{margin:{blockstart:"three"},children:(0,C.jsx)(w.y,{bullet:t,spacing:!1,children:e.map((e,n)=>(0,C.jsx)($.x,{children:(0,C.jsx)(y.eV,{data:e})},`whats-around-pois-list-${n}`))})}):null},g=r&&(null==r?void 0:r.length)>0&&(0,C.jsx)(p.N,{padding:{blockstart:u?"eight":"unset"},children:(0,C.jsx)("div",{children:r.map((e,n,t)=>((e,n,t)=>{const{header:i,items:a}=e,{icon:o,text:r,additionalText:l}=i||{};return u?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(S.M,{tag:"h4",size:6,children:r}),(0,C.jsx)(p.N,{padding:{blockstart:"four"},children:(0,C.jsx)("div",{children:(0,C.jsx)(be,{data:e})})})]}):(0,C.jsx)(p.N,{padding:{blockstart:"three",blockend:t?"unset":"three"},children:(0,C.jsxs)(s.X,{space:"three",children:[o&&(0,C.jsx)(c.C,{children:(0,C.jsx)("div",{children:(0,C.jsx)(M.LD,{id:`${o.id}-icon`,name:o.id})})}),(0,C.jsx)(c.C,{children:(0,C.jsxs)("div",{children:[l&&(0,C.jsx)(I.D,{children:l}),(0,C.jsx)(S.M,{tag:"h4",size:6,children:r}),a.length>0&&m(a)]})})]})},`${r}_${n}`)})(e,n,n===t.length-1))})}),h=o&&o.length>0?(0,C.jsx)("section",{"data-stid":"location-modal-editorial",children:o.map((e,n)=>(0,C.jsx)(p.N,{padding:{blockstart:u?"two":"three",blockend:u?"unset":"three"},children:(0,C.jsxs)("div",{itemProp:"geo",itemScope:!0,itemType:"https://schema.org/GeoCoordinates",children:[(0,C.jsx)("meta",{itemProp:"description",content:e}),(0,C.jsx)(I.D,{size:300,children:e})]})},`editorial_${n}`))}):null;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(p.N,{padding:(0,i.useMemo)(()=>n?u?{blockend:"eight"}:{blockend:"six"}:{blockend:"unset"},[n,u]),children:(0,C.jsx)("div",{"data-stid":"poi-images-modal",children:(0,C.jsx)(q,{data:n})})}),a&&(0,C.jsx)(y.D5,{data:a,headingTag:"h3",headingSize:5}),h,g,l&&"ShoppingProductContentSheetTabsContent"===l.__typename&&(0,C.jsx)(p.N,{margin:{blockstart:"eight"},children:(0,C.jsx)("div",{children:(0,C.jsx)(Pe,{data:l})})})]})};ke.displayName="PlacesSectionOverlayContent",ke.fragment=Ne;const Oe=m.J1`
  fragment PlacesSectionOverlayFragment on ShoppingOverlayContainer {
    overlayId
    contentId
    overlay {
      __typename
      ... on EGDSSheet {
        closeText
        closeAccessibility
        closeAnalytics {
          linkName
          referrerId
        }
        actions {
          ... on EGDSOverlayButton {
            accessibility
            primary
            disabled
            action {
              accessibility
              useRelativePath
              target
              resource {
                ... on GenericURI {
                  relativePath
                  value
                  __typename
                }
              }
            }
          }
        }
      }
    }
  }
`,Re=({data:e,contentContainer:n,imagesSection:t})=>{const{overlay:a}=e,[o,r,l]=(0,v.useDialog)("PlacesSectionDialog","pwaMoreInfoDialog"),s=(0,h.KY)(),c=(0,i.useRef)(null),d=(0,i.createRef)(),u=n.content;if("EGDSSheet"!==a.__typename)return null;const p=()=>{a.closeAnalytics&&s(a.closeAnalytics.referrerId,a.closeAnalytics.linkName),r.closeDialog()},m=e=>{var n,i;return(0,C.jsx)(l,{children:(0,C.jsx)(T.K,{isVisible:o,children:(0,C.jsxs)(_.t,{type:e||"full",isVisible:!0,triggerRef:c,returnFocusOnClose:!0,children:[(0,C.jsx)(A.p,{toolbarTitle:null!==(n=a.closeText)&&void 0!==n?n:void 0,navigationContent:{onClick:p,navType:"close",navIconLabel:null!==(i=a.closeAccessibility)&&void 0!==i?i:"close"},contentDomRef:d}),(0,C.jsx)(b.Y,{contentDomRef:d,children:(0,C.jsx)(ke,{data:u,imagesSection:t})})]})})})};return(0,C.jsxs)(j.LM,{children:[(0,C.jsx)(j.NP,{children:m("full")}),(0,C.jsx)(j.rw,{children:m("centered")})]})};Re.displayName="PlacesSectionOverlay",Re.fragment=Oe;const Ee=m.J1`
  fragment FindAPlaceTypeaheadFragment on PlacesDialogTypeAheadContentSection {
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
      }
    }
  }
`,Fe=m.J1`
  fragment ProductLocationMapActionsFragment on ProductLocationMapContent {
    actions {
      ...ShoppingLinkFragment
      ...ShoppingButtonFragment
    }
  }
  ${y.B8.fragment}
  ${y.ox.fragment}
`,De=m.J1`
  fragment ProductMapCardContentFragment on EGDSImageCard {
    cardId: id
    cardTitle: title
    cardDescription: description
    image {
      aspectRatio
      description
      thumbnailClickAnalytics {
        eventType
        linkName
        referrerId
        uisPrimeMessages {
          messageContent
          schemaName
        }
      }
      url
    }
    cardSubTitle: subTitle
  }
`;const Ae=m.J1`
  query ProductLocationMapQuery($context: ContextInput!, $productIdentifier: ProductIdentifierInput!) {
    location(context: $context, productIdentifier: $productIdentifier) {
      shoppingJoinListContainer {
        actions {
          actionId
          ... on ShoppingNavigateToOverlay {
            overlayId
            accessibility
          }
          ... on ShoppingScrollsToView {
            targetRef
            event {
              eventName
              eventType
              eventVersion
            }
          }
        }
        overlays {
          ...PlacesSectionOverlayFragment
        }
      }
      contents {
        contentId
        content {
          ... on ProductLocationMapContent {
            egdsBasicMap {
              ...DynamicMapFragment
            }
            mapInfoCardsV2 {
              ...PlaceCardDetailsFragment
              ...ProductMapCardContentFragment
            }
            ...ProductLocationMapActionsFragment
          }
          ... on ProductLocationPlacesDialogContent {
            placesDialogTypeAheadContentSection {
              ...FindAPlaceTypeaheadFragment
            }
          }
        }
      }
    }
  }

  ${Re.fragment}
  ${k.kT.fragment}
  ${O.cw}
  ${Fe}
  ${De}
  ${Ee}
`,Le=e=>{var n,t,a,o,r,l;const{inputs:c,batchKey:d,skipSsr:u,beforeInit:p,onInit:v,egMapsConfig:S,onClose:I,clientPadding:_,contentId:b,fetchOnlyMapData:T=!0,setSavedFeature:O,savedFeature:R,typeaheadLogger:E,actionLocation:F}=e,{context:D}=(0,g.R)(),{locale:A}=D,L=!0,M=1===(0,x.useExperiment)("Web_Clickable_POI_V2",L).exposure.bucket,w=1===(0,x.useExperiment)("Custom_Place_v2",L).exposure.bucket,$=1===(0,x.useExperiment)("Proximity_radius_on_PDP_map_MVP",!1).exposure.bucket,B=ie(ie({},T?(e=>{const{travelSearchCriteria:n}=e.productIdentifier,t=null==n?void 0:n.property,i=null==t?void 0:t.secondary,a=null==i?void 0:i.selections;if(n&&t&&i&&a){const o=[...a.filter(e=>e.id!==le),{id:le,value:"map_modal"}];return ie(ie({},e),{},{productIdentifier:ie(ie({},e.productIdentifier),{},{travelSearchCriteria:ie(ie({},n),{},{property:ie(ie({},t),{},{secondary:ie(ie({},i),{},{selections:o})})})})})}return e})(c):c),{},{context:D}),H=(0,f.kY)(),{data:z,error:U,loading:K}=(0,m.IT)(Ae,{context:{batchKey:null!=d?d:"default-product-details-experience-batch-key",shouldLogPerformance:!0},variables:B,ssr:!u}),Y=(0,i.useRef)(),[W,X]=(0,i.useState)(R),[Q,q]=(0,i.useState)(!1),Z=(0,i.useRef)(),ee=(0,i.useRef)(null),ne=(0,h.KY)(),te=(0,h.iQ)(),{scrollTo:ae}=(0,N.xC)(),{onClose:oe}=ve(I),re=(0,j.eg)({viewSizes:j.pf}),se=(null==z?void 0:z.location)||(null==H||null===(n=H.data)||void 0===n?void 0:n.location),{contents:ce,shoppingJoinListContainer:de}=se||{},ue=null==ce?void 0:ce.find(e=>e.contentId===b),pe=null==de?void 0:de.overlays,me=null==de?void 0:de.actions,ge="ProductLocationMapContent"===(null==ue?void 0:ue.content.__typename)?null==ue?void 0:ue.content:null,he=null==ge?void 0:ge.egdsBasicMap,je=null==he||null===(t=he.config)||void 0===t?void 0:t.mapId,Se=null==he?void 0:he.markers,Ie=null==ge?void 0:ge.mapInfoCardsV2,Ce=null!==(a=null==c||null===(o=c.productIdentifier)||void 0===o?void 0:o.id)&&void 0!==a?a:"",_e=null==he?void 0:he.center,be=(0,i.useMemo)(()=>Se?(0,k.JX)(null==Se?void 0:Se.map(e=>e)):[],[Se]),Te=(0,i.useMemo)(()=>({id:Ce,type:J.PRODUCT}),[Ce]),[Pe,Ne]=(0,i.useState)(0),ke=(0,i.useRef)(null);(0,i.useEffect)(()=>()=>{Y.current=void 0},[]);const Oe=(0,i.useCallback)(e=>{p&&p(e)},[p]),Re=(0,i.useCallback)(e=>{Y.current=e,v&&v(e)},[v]),Ee=(0,i.useMemo)(()=>je?{gmapsAddConfig:{mapId:je}}:void 0,[je]),Fe=(0,i.useMemo)(()=>(0,V.h1)({googleMaps:Ee,locale:A,markers:{product:{markerType:{available:"pin"}},property:{markerType:{available:"pin"}},place:{show:{[`unknown#${P.lL.HIDDEN}`]:!1},textLabel:{show:{[P.lL.METRO_STATION]:!1}}}}},S||{}),[A,Ee,S]),De=function(e,n,t,a){const o=(0,i.useCallback)(n=>null==e?void 0:e.find(e=>(null==e?void 0:e.id)===n&&"PlaceCardDetails"===e.__typename),[e]);return(0,i.useCallback)(e=>{if(e){const r=String(e.id),l=o(r);if(l){var i;const e=null==n||null===(i=n.filter(k.ot).find(e=>r===e.id))||void 0===i?void 0:i.clientSideAnalytics;return e&&a(e.referrerId,e.linkName),l}return{__typename:"AdditionalPlaceMarkerInfo",directionsTo:t}}return null},[o,t,n,a])}(Ie,Se,Te,ne),Le=function(e,n,t){const a=(0,i.useCallback)(n=>null==e?void 0:e.find(e=>(null==e?void 0:e.cardId)===n&&"EGDSImageCard"===e.__typename),[e]);return(0,i.useCallback)(e=>{if(e){const{id:r}=e,l=`${r}`,s=a(l);if(s){var i,o;const e=null==n||null===(i=n.filter(k.ot).find(e=>l===e.id))||void 0===i?void 0:i.clientSideAnalytics;return e&&t(e.referrerId,e.linkName),{__typename:"EGDSImageCard",imageCardId:s.cardId,title:s.cardTitle||null,description:(null==s?void 0:s.cardDescription)||null,image:"Image"===(null==s||null===(o=s.image)||void 0===o?void 0:o.__typename)?{__typename:"Image",url:s.image.url,description:s.image.description,aspectRatio:null,thumbnailClickAnalytics:null}:null,subTitle:s.cardSubTitle||null}}}return null},[a,n,t])}(Ie,Se,ne),Me=(0,i.useMemo)(()=>({placeCardsManagement:{onMarkerSelected:De},productCardsManagement:{onMarkerSelected:$?()=>null:Le},onCardDismiss:()=>{var e;return null===(e=Y.current)||void 0===e?void 0:e.clearSelectedFeature()}}),[Le,De]),we=null==ge||null===(r=ge.actions)||void 0===r?void 0:r.find(e=>"ShoppingButton"===e.__typename&&"choose-room-action-id"===e.actions[0].actionId),$e=null==we?void 0:we.primary,Be=(0,i.useCallback)(e=>{const{eventName:n="map_choose_room.selected",eventType:t="Interaction",eventVersion:i="1.0.0"}=(null==e?void 0:e.event)||{};n&&t&&i&&te&&te((0,k.$s)((0,k.Vw)({eventName:n,eventType:t,eventVersion:i}),{}))},[te]),He=(0,i.useCallback)(e=>{Be(e),oe();const{targetRef:n}=e;n&&setTimeout(()=>{ae(n,[])},1e3)},[oe,Be,ae]),Ve=(0,i.useCallback)(()=>{var e;const n=null==we||null===(e=we.actions)||void 0===e?void 0:e.find(e=>e.triggerType===G.CLICK),t=null==me?void 0:me.find(e=>e.actionId===n.actionId);t&&"ShoppingScrollsToView"===(null==t?void 0:t.__typename)&&He(t)},[we,de,He]),ze=null==ge||null===(l=ge.actions)||void 0===l?void 0:l.find(e=>"ShoppingButton"===e.__typename&&"find-a-place-action-id"===e.actions[0].actionId),Ue=(0,i.useCallback)(()=>{var e;const n=null==ze||null===(e=ze.actions)||void 0===e?void 0:e.find(e=>e.triggerType===G.CLICK),t=null==me?void 0:me.find(e=>e.actionId===(null==n?void 0:n.actionId));if(t&&"ShoppingNavigateToOverlay"===(null==t?void 0:t.__typename)){var i;const{overlayId:e}=t,{contentId:n}=(null==pe?void 0:pe.find(n=>n.overlayId===e))||{};return null==ce||null===(i=ce.find(e=>e.contentId===n))||void 0===i?void 0:i.content}},[null==ze?void 0:ze.actions,me,pe,ce])(),Je=(0,i.useMemo)(()=>{if(W)return[W]},[W]);(0,i.useEffect)(()=>{O&&O(W)},[W]),(0,i.useLayoutEffect)(()=>{const e=setTimeout(()=>{const e=document.getElementById("floating-card-panel-0");if(!e)return;const n=()=>{Ne(e.getBoundingClientRect().height)};n(),ke.current=new ResizeObserver(n),ke.current.observe(e)},2e3);return()=>{clearTimeout(e),ke.current&&(ke.current.disconnect(),ke.current=null)}},[]);const Ke=(0,i.useCallback)(e=>{if(W){const t=`${W.type}-${W.id}`;if(t!==Z.current){var n;const i=(0,k.sR)(Pe,_);(0,k.dG)(e,be,W,_e,null!==(n=null!=i?i:_)&&void 0!==n?n:"24px 0px 24px"),Z.current=t}}},[W,be,_e,_,Pe]),Ge=(0,i.useCallback)(()=>{q(!0),setTimeout(()=>{const e=document.querySelector('#map-actions-find-a-place [data-testid="popover-sheet"]');null==e||e.style.setProperty("right","0px"),null==e||e.style.setProperty("animation-name","sheet-grow-right, sheet-fade-in","important")})},[re]);let Ye=null;if(U)Ye=(0,C.jsx)(fe,{});else if(!K&&se&&he){var We,Xe;Ye=(0,C.jsx)(y.tH,{label:"product-location-map",fallback:(0,C.jsx)(fe,{}),children:(0,C.jsxs)(k.kT,{data:he,onInit:Re,beforeInit:Oe,egMapsConfig:Fe,clientPadding:null!=_?_:"24px 0px 24px",updateViewport:!0,selectedFeatureId:Ce,height:"100%",cardsManagementHooks:Me,baseMapPoiClickable:M,supplementalFeatures:Je,onFeaturesPushed:Ke,actionLocation:F,children:[we&&(0,C.jsx)(k.h0,{zIndex:k.LV,overlayElementId:"mapActions",position:k._c.BOTTOM_CENTER,alignSelf:"center",children:(0,C.jsx)(s.X,{space:"four",justifyContent:"center",children:(0,C.jsx)(xe,{label:$e,onClick:Ve})})}),ze&&Ue&&(0,C.jsx)(k.h0,{overlayElementId:"map-actions-find-a-place",position:k._c.TOP_RIGHT,alignSelf:"center",children:(0,C.jsx)(k.kq,{typeaheadInput:ie(ie({},null==Ue||null===(We=Ue.placesDialogTypeAheadContentSection)||void 0===We?void 0:We.content),{},{typeaheadInfo:ie(ie({},null==Ue||null===(Xe=Ue.placesDialogTypeAheadContentSection)||void 0===Xe||null===(Xe=Xe.content)||void 0===Xe?void 0:Xe.typeaheadInfo),{},{latlongSearchCenterPoint:{latitude:null==_e?void 0:_e.latitude,longitude:null==_e?void 0:_e.longitude}})}),typeaheadLogger:E,customFeatureUpdated:X,setFindAPlaceIsVisible:q,findAPlaceIsVisible:Q,essAdapterPageId:"page.Hotels.Infosite.Information,DETAILS,HOTELS",predefinedPlace:W,customPlaceReplay:!w&&void 0,children:(0,C.jsx)(y.ED,{data:ze,onClickHandler:Ge,ref:ee})})})]})})}else Ye=(0,C.jsx)(ye,{});return Ye};Le.displayName="sharedui-ProductLocationMap";const Me={HEADLINE_ADDRESS:"Address",LOCATION_SECTION_MAP_BUTTON:"LocationSectionMapButton"},we=({children:e,triggerRef:n,modalHeight:t=1200,contentId:a,onClose:o,scrollTimeout:r=1e3})=>{var l;const s={returnFocusOnClose:!0,triggerRef:n,isVisible:!0},c=(()=>{const e=(0,i.useContext)(de);if(!e)return null;const{shoppingJoinListContainer:n}=e;return n})(),d=null==c||null===(l=c.overlays)||void 0===l?void 0:l.find(e=>e.contentId===a),{closeAccessibility:u,closeText:p,actions:m}="EGDSSheet"===(null==d?void 0:d.overlay.__typename)&&d.overlay||{},{onClose:g}=ve(o),v=(0,h.iQ)(),{scrollTo:x}=(0,N.xC)(),y=(0,i.useCallback)(e=>{const{eventName:n="map_choose_room.selected",eventType:t="Interaction",eventVersion:i="1.0.0"}=(null==e?void 0:e.event)||{};n&&t&&i&&v&&v((0,k.$s)((0,k.Vw)({eventName:n,eventType:t,eventVersion:i}),{}))},[v]),f=null==m?void 0:m.find(e=>"EGDSOverlayButton"===e.__typename&&e.primary),S=(0,i.useCallback)(e=>{y(e),g();const{value:n}=e.resource;n&&setTimeout(()=>{x(n,[])},r)},[y,g,r,x]),I=(0,C.jsxs)(C.Fragment,{children:[p?(0,C.jsx)(A.p,{toolbarTitle:p||"",navigationContent:{onClick:g,navType:"close",navIconLabel:null!=u?u:"close"},toolbarActionContent:"EGDSOverlayButton"===(null==f?void 0:f.__typename)?(0,C.jsx)(L.p,{buttonId:"choose-a-room-button",onClick:()=>S(f.action),children:f.primary}):null}):null,e]});return(0,C.jsxs)(j.LM,{children:[(0,C.jsx)(j.NP,{children:(0,C.jsx)(_.t,ie(ie({},s),{},{type:"full",children:I}))}),(0,C.jsx)(j.rw,{children:(0,C.jsx)(_.t,ie(ie({},s),{},{type:"centered",height:t,centeredSheetSize:"medium",children:I}))})]})};we.displayName="MapSheet";const $e=({children:e,propertyId:n,inputs:t,contentId:i,triggerRef:a,setSavedFeature:o,savedFeature:r,actionLocation:l=Me.LOCATION_SECTION_MAP_BUTTON,dialogId:s="product-summary-map"})=>{const[c,d,u]=(0,v.useDialog)(s,"pwaOverlay"),p={onClose:d.closeDialog,isDialogOpen:c,closeMapDialogData:{triggerRef:a}};return(0,C.jsx)(C.Fragment,{children:c&&(0,C.jsx)(T.K,{isVisible:c,children:(0,C.jsx)(u,{children:(0,C.jsx)(we,{contentId:i,triggerRef:a,onClose:p.onClose,children:(0,C.jsx)(Le,{inputs:t,contentId:i,triggerRef:a,onClose:p.onClose,setSavedFeature:o,savedFeature:r,egMapsConfig:{map:{mapInitWaitForTiles:!1}},actionLocation:l})})})})})};$e.displayName="MapDialogWrapper";const Be=m.J1`
  fragment MapButtonFragment on ProductLocationStaticMapAction {
    ...ShoppingLinkFragment
  }
  ${y.B8.fragment}
`,He=({data:e,children:n,propertyId:t,inputs:a,actionLocation:o=Me.LOCATION_SECTION_MAP_BUTTON})=>{const r=(0,i.useRef)(null),l=(0,h.KY)(),s=me(),c=o===Me.HEADLINE_ADDRESS?"product-summary-map-headline":"",[,d]=(0,v.useDialog)(c,"pwaOverlay"),[u,p]=(0,i.useState)(null),m=e,g=pe(null==m?void 0:m.actionId),x="ShoppingNavigateToOverlay"===(null==g?void 0:g.__typename)&&(null==s?void 0:s.getOverlayContainer(g.overlayId)),f=x?x.contentId:"";return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(y.B8,{data:m,inline:!1,onClick:(0,i.useCallback)(()=>{p(r),ce(null==g?void 0:g.analytics,l,d)},[l,g,d]),triggerRef:r}),(0,C.jsx)($e,{propertyId:t,dialogId:c,inputs:a,contentId:f,triggerRef:u,actionLocation:o,children:n})]})};He.displayName="MapButton",He.fragment=Be;const Ve=m.J1`
  fragment MapSectionFragment on ProductLocationStaticMap {
    actions {
      ... on ShoppingLink {
        ...ShoppingLinkFragment
      }
      ... on ShoppingImage {
        ...ShoppingImageFragment
      }
      ... on ShoppingButton {
        ...ShoppingButtonFragment
      }
      ...MapButtonFragment
    }
  }
  ${y._d.fragment}
  ${y.B8.fragment}
  ${y.ox.fragment}
  ${He.fragment}
`,ze=({data:e,className:n,aspectRatio:t,address:r,children:l,propertyId:s,inputs:d,showAddressOnly:u,hideContentSection:m,setSavedFeature:g,savedFeature:x})=>{var f;const j=(0,i.useRef)(null),S=(0,i.useRef)(null),{actions:I}=e,_=(0,h.KY)(),b=me(),[,T]=(0,v.useDialog)("product-summary-map","pwaOverlay"),[P,N]=(0,i.useState)(null),k=null==I?void 0:I.find(e=>"ShoppingLink"===e.__typename),O=null==I?void 0:I.find(e=>"ShoppingImage"===e.__typename),R=null==I?void 0:I.find(e=>"ShoppingButton"===e.__typename),E=pe(null!==(f=null==k?void 0:k.actionId)&&void 0!==f?f:null==O?void 0:O.imageActionId),F="ShoppingNavigateToOverlay"===(null==E?void 0:E.__typename)&&(null==b?void 0:b.getOverlayContainer(E.overlayId)),D=F?F.contentId:"",A=(0,i.useCallback)(()=>{N(S),E&&"ShoppingNavigateToOverlay"===(null==E?void 0:E.__typename)&&ce(E.analytics,_,T)},[_,T,E]),L=(0,i.useCallback)(e=>{ce(e,_,T),N(j)},[_,T]);return(0,C.jsxs)(C.Fragment,{children:[O&&(0,C.jsxs)(a.g,{border:!0,className:n,children:[(0,C.jsx)(y._d,{data:O,buttonAction:R,aspectRatio:t,roundcorner:["startstart","startend"],onClick:L,triggerRef:j}),m?null:(0,C.jsx)(o.E,{children:(0,C.jsxs)(C.Fragment,{children:[r&&(0,C.jsx)(re,{data:r}),k&&(0,C.jsx)(c.C,{children:(0,C.jsx)(p.N,{padding:{blockstart:"two"},children:(0,C.jsx)(y.B8,{data:k,inline:!1,onClick:A,triggerRef:S})})})]})})]}),u&&r&&(0,C.jsx)(p.N,{padding:{blockstart:"one"},children:(0,C.jsx)("div",{children:(0,C.jsx)(re,{data:r})})}),(0,C.jsx)($e,{propertyId:s,inputs:d,contentId:D,triggerRef:P,setSavedFeature:g,savedFeature:x,children:l})]})};ze.displayName="MapSection",ze.fragment=Ve;const Ue=m.J1`
  fragment PlacesSectionActionFragment on ShoppingLink {
    ...ShoppingLinkFragment
  }
  ${y.B8.fragment}
`,Je=({data:e,imagesSection:n,isIconOnlyCTA:t})=>{const[,i]=(0,v.useDialog)("PlacesSectionDialog","pwaMoreInfoDialog"),a=(0,h.KY)(),o=pe(null==e?void 0:e.actionId),r=me(),l=je(),s=()=>{i.openDialog(),(null==o?void 0:o.analytics)&&a(o.analytics.referrerId,o.analytics.linkName)};if(o&&"ShoppingNavigateToOverlay"===o.__typename){const i=null==r?void 0:r.getOverlayContainer(o.overlayId),a=i&&(null==r?void 0:r.getContentContainer(i.contentId)),c=(e,n)=>e?"unset":n?"four":"three";return i&&a?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(p.N,{padding:{blockstart:c(t,Boolean(l)),blockend:"unset"},children:(0,C.jsx)("div",{"data-stid":"places-action-trigger",children:(0,C.jsx)(y.B8,{data:e,inline:!1,onClick:s,iconOnly:t})})}),(0,C.jsx)(Re,{data:i,contentContainer:a,imagesSection:n})]}):null}return null};Je.displayName="PlacesSectionAction",Je.fragment=Ue;const Ke=m.J1`
  fragment PlacesSectionFragment on ProductLocationPlacesSection {
    action {
      ...PlacesSectionActionFragment
    }
    items {
      ...ShoppingProductContentFragment
    }
    content {
      ... on ShoppingProductContentSheetTabsContent {
        ...PlacesSectionContentTabsFragment
      }
    }
  }
  ${y.B8.fragment}
  ${y.YF.fragment}
  ${Je.fragment}
  ${Pe.fragment}
`,Ge=({data:e,className:n,isHorizontalLayout:t,imagesSection:i,isIconOnlyCTA:a})=>{var o;const{items:r,action:l,content:c}=e||{},{items:d}=r||{},u=je(),m=t?"twelve":"eight",g=c&&"ShoppingProductContentSheetTabsContent"===c.__typename&&(null===(o=c.body)||void 0===o?void 0:o.tabs)&&c.body.tabs.length>0;if(!(d&&d.length||g))return null;const h=()=>(0,C.jsx)(C.Fragment,{children:c&&"ShoppingProductContentSheetTabsContent"===c.__typename?(0,C.jsx)(Pe,{data:c}):r&&(0,C.jsx)(be,{data:r})}),v=(e,n)=>(0,C.jsx)(p.N,{margin:{blockstart:e,blockend:n},children:(0,C.jsx)("div",{children:h()})});return(0,C.jsxs)(s.X,{direction:a?"row":"column",className:n,"data-stid":"location-summary",justifyContent:a?"space-between":void 0,alignItems:a?"center":void 0,space:a?"two":void 0,style:{minHeight:"100%"},children:[(0,C.jsxs)(j.LM,{children:[(0,C.jsx)(j.NP,{children:h()}),(0,C.jsx)(j.rw,{children:v(u?"unset":m)}),(0,C.jsx)(j.zQ,{children:t&&!u?v("twelve"):(0,C.jsx)(C.Fragment,{children:r&&(0,C.jsx)(be,{data:r})})})]}),l&&(0,C.jsx)(Je,{data:l,imagesSection:i,isIconOnlyCTA:a})]})};Ge.displayName="PlacesSection",Ge.fragment=Ke;const Ye=m.J1`
  fragment LocationSectionFragment on ProductLocation {
    header {
      ...ShoppingProductHeaderFragment
    }
    contents {
      contentId
      content {
        ... on ProductLocationLandmarksContent {
          ...PlacesSectionOverlayContentFragment
        }
        ... on ShoppingProductContentSection {
          ...ShoppingProductContentSectionFragment
        }
      }
    }
    placesSection {
      ...PlacesSectionFragment
    }
    imagesSection {
      ...ImagesSectionFragment
    }
    mapSection {
      ...MapSectionFragment
    }
    address {
      ...LocationAddressFragment
    }
    shoppingJoinListContainer {
      actions {
        accessibility
        analytics {
          linkName
          referrerId
        }
        actionId
        ... on ShoppingNavigateToOverlay {
          overlayId
        }
        ... on ShoppingNavigateToURI {
          resource {
            value
            ... on HttpURI {
              relativePath
            }
          }
          target
          useRelativePath
        }
        ... on ShoppingScrollsToView {
          targetRef
          event {
            eventName
            eventType
            eventVersion
          }
        }
      }
      overlays {
        ...PlacesSectionOverlayFragment
      }
    }
  }
  ${y.D5.fragment}
  ${Ge.fragment}
  ${ze.fragment}
  ${re.fragment}
  ${Re.fragment}
  ${ke.fragment}
  ${y.sf.fragment}
  ${q.fragment}
`,We=(0,C.jsxs)(s.X,{justifyContent:"space-between",children:[(0,C.jsx)(c.C,{children:(0,C.jsx)(p.N,{margin:{block:"four"},children:(0,C.jsx)(F.R,{type:"line",animation:!0})})}),(0,C.jsx)(c.C,{children:(0,C.jsx)(p.N,{margin:{block:"four"},children:(0,C.jsx)(F.R,{type:"line",lineLength:"secondary",animation:!0})})})]}),Xe=({isHorizontalLayout:e=!1})=>(0,C.jsx)(p.N,{margin:{blockend:e?"unset":"four"},children:(0,C.jsx)(a.g,{padded:e,children:(0,C.jsx)("div",{children:e?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(p.N,{margin:{block:"four"},children:(0,C.jsx)(F.R,{type:"line",lineHeight:24,animation:!0})}),(0,C.jsx)(p.N,{padding:{blockend:"eight"},children:(0,C.jsx)("div",{children:(0,C.jsxs)(d.w,{columns:2,space:"six",children:[(0,C.jsx)(u.T,{children:(0,C.jsx)(r.M,{ratio:r.l.R16_9,className:"uitk-card-roundcorner-all",children:(0,C.jsx)(F.R,{type:"block",animation:!0})})}),(0,C.jsx)(u.T,{children:(0,C.jsx)(o.E,{padded:!1,children:Array.from({length:4}).map((e,n)=>(0,C.jsx)("div",{children:We},n))})})]})})})]}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(p.N,{margin:{block:"three"},children:(0,C.jsx)(F.R,{type:"line",lineHeight:24,animation:!0})}),(0,C.jsx)(p.N,{padding:{blockend:"eight"},margin:{blockend:"six"},children:(0,C.jsxs)("div",{children:[(0,C.jsx)(r.M,{ratio:r.l.R16_9,className:"uitk-card-roundcorner-all",children:(0,C.jsx)(F.R,{type:"block",animation:!0})}),(0,C.jsx)(o.E,{padded:!1,children:(0,C.jsx)(p.N,{margin:{blockstart:"two"},children:(0,C.jsx)("div",{children:Array.from({length:4}).map((e,n)=>(0,C.jsx)("div",{children:We},n))})})})]})})]})})})}),Qe=m.J1`
  query LocationQuery($context: ContextInput!, $productIdentifier: ProductIdentifierInput!) {
    location(context: $context, productIdentifier: $productIdentifier) {
      ...LocationSectionFragment
    }
  }
  ${Ye}
`,qe=({inputs:e,batchKey:n,skipSsr:t,children:o,isHorizontalLayout:l,prefetchedData:S,isSUVR:I,setSavedFeature:_,savedFeature:b})=>{var T,P,N,k,O,R;const{context:E}=(0,g.R)(),F=null!=n?n:"default-product-details-experience-batch-key",D=ie(ie({},e),{},{context:E}),A=(0,f.kY)(),{data:L,error:M,loading:w}=(0,m.IT)(Qe,{context:{batchKey:F,shouldLogPerformance:!0},variables:D,ssr:!t,skip:S||(null==A||null===(T=A.product)||void 0===T?void 0:T.location)}),$=je(),[B,H]=(0,v.useDialog)("PlacesSectionDialog","pwaMoreInfoDialog"),V=(0,h.KY)(),z=null!==(P=null!=S?S:null==L?void 0:L.location)&&void 0!==P?P:null==A||null===(N=A.product)||void 0===N?void 0:N.location,U=null==z?void 0:z.shoppingJoinListContainer,J=null==z||null===(k=z.placesSection)||void 0===k||null===(k=k.action)||void 0===k?void 0:k.actionId,K=se(null==U?void 0:U.actions,J),G=!!(null==z||null===(O=z.placesSection)||void 0===O?void 0:O.action),Y=(0,i.useCallback)(e=>{(null==e?void 0:e.target).closest('[data-stid="places-action-trigger"]')||!B&&G&&(H.openDialog(),(null==K?void 0:K.analytics)&&V(K.analytics.referrerId,K.analytics.linkName))},[B,G,H,K,V]);if(w)return(0,C.jsx)(Xe,{isHorizontalLayout:l});if(M||!(null==L?void 0:L.location)&&!S)return null;const{header:W,address:X,placesSection:Q,mapSection:q,imagesSection:Z}=z,ee=null!==Q.content,{id:ne}=null!==(R=null==e?void 0:e.productIdentifier)&&void 0!==R?R:"",te=(n,t)=>(0,C.jsxs)(s.X,{direction:"column","data-stid":"map-image-link",justifyContent:$?"center":void 0,children:[(0,C.jsx)(p.N,{padding:{blockend:$?"unset":"two"},children:(0,C.jsx)("div",{children:(0,C.jsx)(y.D5,{data:W,headingTag:"h2",headingSize:5,isVisuallyHidden:Boolean($)})})}),q&&(0,C.jsx)(ze,{data:q,aspectRatio:l&&!$?r.l.R21_9:n,address:X,propertyId:ne,inputs:e,hideContentSection:Boolean($),showAddressOnly:t,setSavedFeature:_,savedFeature:b,children:o})]}),ae=(0,C.jsxs)(j.LM,{children:[(0,C.jsx)(j.NP,{children:(0,C.jsxs)(s.X,{direction:"column",space:ee?"four":"three",children:[(0,C.jsx)(c.C,{children:te(r.l.R21_9)}),Q&&(0,C.jsx)(c.C,{children:(0,C.jsx)(Ge,{data:Q,isHorizontalLayout:l,locationSectionInputs:e,imagesSection:Z})})]})}),(0,C.jsx)(j.rw,{children:(0,C.jsxs)(s.X,{direction:"row",space:"three",children:[(0,C.jsx)(c.C,{minWidth:"full_width",children:te(r.l.R21_9)}),Q&&(0,C.jsx)(c.C,{minWidth:"full_width",children:(0,C.jsx)(Ge,{data:Q,isHorizontalLayout:l,locationSectionInputs:e,imagesSection:Z})})]})}),(0,C.jsx)(j.zQ,{children:(0,C.jsxs)(s.X,{direction:l?"row":"column",space:l?"three":void 0,justifyContent:"space-between",children:[(0,C.jsx)(c.C,{minWidth:l?"full_width":void 0,children:(0,C.jsx)(p.N,{padding:{large:{blockend:l?"unset":"six"}},children:te(r.l.R21_9)})}),Q&&(0,C.jsx)(c.C,{minWidth:l?"full_width":void 0,children:(0,C.jsx)(Ge,{data:Q,isHorizontalLayout:l,locationSectionInputs:e,imagesSection:Z})})]})})]});return(0,C.jsx)(ue,{data:z,children:(0,C.jsxs)(x.Experiment,{name:"Top_Of_PDP_Iteration_Web_Feature_Gate",children:[(0,C.jsx)(x.ExperimentControl,{children:ae}),(0,C.jsx)(x.ExperimentVariant,{bucket:1,children:(0,C.jsxs)(x.Experiment,{name:"Top_of_PDP_Redesign",children:[(0,C.jsx)(x.ExperimentControl,{children:ae}),(0,C.jsx)(x.ExperimentVariant,{bucket:1,children:(0,C.jsxs)(j.LM,{children:[(0,C.jsx)(j.NP,{children:(0,C.jsxs)(d.w,{columns:10,space:"three",justifyContent:"center",children:[(0,C.jsx)(u.T,{colSpan:4,children:te(r.l.R1_1)}),(0,C.jsx)(u.T,{colSpan:6,children:(0,C.jsx)(a.g,{"data-stid":"places-poi-card",padded:!0,border:!0,onClick:Y,children:(0,C.jsx)("div",{children:Q&&(0,C.jsx)(Ge,{data:Q,locationSectionInputs:e,imagesSection:Z,isIconOnlyCTA:!0})})})})]})}),(0,C.jsx)(j.rw,{children:(0,C.jsxs)(d.w,{columns:10,space:"three",justifyContent:"center",children:[(0,C.jsx)(u.T,{colSpan:4,children:te(r.l.R16_9,!!I)}),(0,C.jsx)(u.T,{colSpan:6,children:Q&&(0,C.jsx)("div",{children:(0,C.jsx)(Ge,{data:Q,locationSectionInputs:e,imagesSection:Z})})})]})}),(0,C.jsx)(j.zQ,{children:I?(0,C.jsxs)(d.w,{columns:10,space:"three",justifyContent:"center",children:[(0,C.jsx)(u.T,{colSpan:4,children:te(r.l.R16_9,!0)}),(0,C.jsx)(u.T,{colSpan:6,children:Q&&(0,C.jsx)("div",{children:(0,C.jsx)(Ge,{data:Q,locationSectionInputs:e,imagesSection:Z})})})]}):(0,C.jsxs)(s.X,{direction:"column",space:"three",children:[(0,C.jsx)(c.C,{children:te(r.l.R21_9)}),Q&&(0,C.jsx)(c.C,{children:(0,C.jsx)(Ge,{data:Q,locationSectionInputs:e,imagesSection:Z})})]})})]})})]})})]})})};qe.displayName="sharedui-LocationSection";const Ze=function(e,n,t){const i=n=>{var i,a;const{inputs:o}=n,{context:r}=(0,g.R)(),{data:l,error:s,loading:c}=(0,m.IT)(Qe,{variables:ie({context:r},o),fetchPolicy:"cache-first"});if(t&&c)return(0,C.jsx)(t,{});if(s||!(null==l||null===(i=l.location)||void 0===i?void 0:i.mapSection))return null;const d=null===(a=l.location.mapSection.actions)||void 0===a?void 0:a.find(e=>"ShoppingLink"===e.__typename);return(0,C.jsx)(de.Provider,{value:null==l?void 0:l.location,children:(0,C.jsx)(e,ie(ie({},n),{},{data:d}))})};return i.displayName=n,i}(He,"sharedui-MapButton"),en=m.J1`
  fragment DestinationMapSectionFragment on ProductLocationStaticMap {
    actions {
      ... on ShoppingLink {
        ...ShoppingLinkFragment
      }
      ... on ShoppingImage {
        ...ShoppingImageFragment
      }
      ... on ShoppingButton {
        ...ShoppingButtonFragment
      }
    }
  }
  ${y._d.fragment}
  ${y.B8.fragment}
  ${y.ox.fragment}
`,nn=({data:e,className:n,aspectRatio:t,address:r,children:l,propertyId:s,inputs:d,showAddressOnly:u,hideContentSection:m,prefetchedData:g})=>{const x=(0,i.useRef)(null),f=(0,i.useRef)(null),{actions:j}=e,S=(0,h.KY)(),I=me(),[,_]=(0,v.useDialog)("product-summary-map","pwaOverlay"),[b,T]=(0,i.useState)(null),P=null==j?void 0:j.find(e=>"ShoppingLink"===e.__typename),N=null==j?void 0:j.find(e=>"ShoppingImage"===e.__typename),k=null==j?void 0:j.find(e=>"ShoppingButton"===e.__typename),O=pe(null==P?void 0:P.actionId),R="ShoppingNavigateToOverlay"===(null==O?void 0:O.__typename)&&(null==I?void 0:I.getOverlayContainer(O.overlayId)),E=R?R.contentId:"",F=(0,i.useCallback)(()=>{T(f),O&&"ShoppingNavigateToOverlay"===(null==O?void 0:O.__typename)&&ce(O.analytics,S,_)},[S,_,O]),D=(0,i.useCallback)(e=>{ce(e,S,_),T(x)},[S,_]);return(0,C.jsxs)(C.Fragment,{children:[N&&(0,C.jsx)(z.P,{position:{zindex:"layer2"},children:(0,C.jsxs)(a.g,{border:!0,className:n,children:[(0,C.jsx)(y._d,{data:N,buttonAction:k,aspectRatio:t,roundcorner:["startstart","startend"],onClick:D,triggerRef:x,forceOverlayButton:!0}),m?null:(0,C.jsx)(o.E,{children:(0,C.jsxs)(C.Fragment,{children:[r&&(0,C.jsx)(re,{data:r}),P&&(0,C.jsx)(c.C,{children:(0,C.jsx)(p.N,{padding:{blockstart:"two"},children:(0,C.jsx)(y.B8,{data:P,inline:!1,onClick:F,triggerRef:f})})})]})})]})}),(0,C.jsx)($e,{propertyId:s,inputs:d,contentId:E,triggerRef:b,children:l})]})};nn.displayName="DestinationMapSection",nn.fragment=en;const tn=m.J1`
  fragment DestinationPlacesSectionFragment on ProductLocationPlacesSection {
    action {
      ...PlacesSectionActionFragment
    }
    items {
      ...ShoppingProductContentFragment
    }
    content {
      ... on ShoppingProductContentSheetTabsContent {
        ...PlacesSectionContentTabsFragment
      }
    }
  }
  ${y.B8.fragment}
  ${y.YF.fragment}
  ${Je.fragment}
  ${Pe.fragment}
`,an=({data:e,className:n,imagesSection:t,isIconOnlyCTA:i})=>{var a;const{items:o,action:r,content:l}=e||{},{items:c}=o||{},d=l&&"ShoppingProductContentSheetTabsContent"===l.__typename&&(null===(a=l.body)||void 0===a?void 0:a.tabs)&&l.body.tabs.length>0;if(!(c&&c.length||d))return null;return(0,C.jsxs)(s.X,{direction:i?"row":"column",className:n,"data-stid":"location-summary",justifyContent:i?"center":void 0,alignItems:i?"center":void 0,space:i?"two":void 0,style:{minHeight:"100%"},children:[(0,C.jsx)(C.Fragment,{children:d?(0,C.jsx)(Pe,{data:l}):o&&(0,C.jsx)(be,{data:o})}),r&&(0,C.jsx)(Je,{data:r,imagesSection:t,isIconOnlyCTA:i})]})};an.displayName="DestinationPlacesSection",an.fragment=tn;const on=m.J1`
  fragment DestMapSectionFragment on ProductLocationStaticMap {
    actions {
      ... on ShoppingLink {
        ...ShoppingLinkFragment
      }
      ... on ShoppingImage {
        ...ShoppingImageFragment
      }
      ... on ShoppingButton {
        ...ShoppingButtonFragment
      }
    }
  }
  ${y._d.fragment}
  ${y.B8.fragment}
  ${y.ox.fragment}
`;m.J1`
  query DestinationDetailsQuery($context: ContextInput!, $productIdentifier: ProductIdentifierInput!) {
    productDestinationDetails(context: $context, productIdentifier: $productIdentifier) {
      ...DestinationSectionFragment
    }
  }
  ${m.J1`
  fragment DestinationSectionFragment on ProductLocation {
    header {
      ...ShoppingProductHeaderFragment
    }
    contents {
      contentId
      content {
        ... on ProductLocationLandmarksContent {
          ...PlacesSectionOverlayContentFragment
        }
        ... on ShoppingProductContentSection {
          ...ShoppingProductContentSectionFragment
        }
        ... on ProductLocationMapContent {
          egdsBasicMap {
            ...DynamicMapFragment
          }
          mapInfoCardsV2 {
            ...PlaceCardDetailsFragment
            ...ProductMapCardContentFragment
          }
          ...ProductLocationMapActionsFragment
        }
        ... on ProductLocationPlacesDialogContent {
          placesDialogTypeAheadContentSection {
            ...FindAPlaceTypeaheadFragment
          }
        }
      }
    }
    placesSection {
      ...PlacesSectionFragment
    }
    imagesSection {
      ...ImagesSectionFragment
    }
    mapSection {
      ...DestMapSectionFragment
    }
    address {
      ...LocationAddressFragment
    }
    shoppingJoinListContainer {
      actions {
        accessibility
        analytics {
          linkName
          referrerId
        }
        actionId
        ... on ShoppingNavigateToOverlay {
          overlayId
        }
        ... on ShoppingNavigateToURI {
          resource {
            value
            ... on HttpURI {
              relativePath
            }
          }
          target
          useRelativePath
        }
        ... on ShoppingScrollsToView {
          targetRef
          event {
            eventName
            eventType
            eventVersion
          }
        }
      }
      overlays {
        ...PlacesSectionOverlayFragment
      }
    }
  }
  ${y.D5.fragment}
  ${Ge.fragment}
  ${re.fragment}
  ${Re.fragment}
  ${ke.fragment}
  ${y.sf.fragment}
  ${q.fragment}
  ${k.kT.fragment}
  ${O.cw}
  ${Fe}
  ${De}
  ${on}
  ${Ee}
`}
`}}]);
//# sourceMappingURL=https://bernie-assets.s3.us-west-2.amazonaws.com/landing-pwa/shared-ui-retail-product-location-section.eb5f3cda5d776cd2a347.js.map