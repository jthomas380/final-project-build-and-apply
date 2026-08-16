/*@license For license information please refer to shared-ui-retail-product-review-details.licenses.txt*/
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[2978],{13974:function(e,t,i){i.d(t,{D_:function(){return Vi},GZ:function(){return We},Ub:function(){return Bi},Wx:function(){return Be},y9:function(){return Mi}});var n=i(96540),r=i(82308),l=i(64155),a=i(20209),s=i(55009),o=i(92870),d=i(46254),c=i(66162),u=i(74848),v=i(66104),p=i(33998),m=i(85361),h=i(716),g=i(38955),y=i(77511),x=i(18288),j=i(35784),f=i(33694),w=i(86375),b=i(5846),S=i(86047),R=i(62403),F=i(33777),T=i(69008),k=i(66501),A=i(84683),I=i(82652),C=i(21330),D=i(32288),_=i(94754),P=i(3268),M=i(29731),E=i(57455),$=i(4561),N=i(22868),L=i(74276),B=i(1270),V=i(58646),O=i(36534),z=i(39128),G=i(5635),J=i(12285),W=i(30230),K=i(55597),X=i(10044),Q=i(96906),U=i(35763),Y=i(39196),H=i(15286),Z=i(42770),q=i(61764),ee=i(37778),te=i(63912),ie=i(97732),ne=i(65845),re=i(50306),le=i(6504),ae=i(46698),se=i(16223),oe=i(43641);const de="pageIndex",ce="size";let ue=function(e){return e.SortBy="",e.Search="",e.TravelerType="",e.ReviewsWithPhotos="",e}({}),ve=function(e){return e.SortBy="sortBy",e.Search="searchTerm",e.TravelerType="travelerType",e.ReviewsWithPhotos="reviewsWithPhotos",e}({});const pe={search:ue.Search,sortBy:ue.SortBy,travelerType:ue.TravelerType};let me=function(e){return e.id="review-expand",e.seeMore="review-expand.opened",e.seeLess="review-expand.closed",e}({}),he=function(e){return e.NAME="review_photos",e.ID="review_photos",e}({});const ge={search:ue.Search,sortBy:ue.SortBy,travelerType:ue.TravelerType,withPhotos:ue.ReviewsWithPhotos};function ye(e){return ye="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ye(e)}function xe(e){var t=function(e,t){if("object"!=ye(e)||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!=ye(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==ye(t)?t:t+""}function je(e,t,i){return(t=xe(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function fe(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function we(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(i),!0).forEach(function(t){je(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):fe(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}const be=(e,t,i,n,r,l)=>function(e,t,i,n,r,l){var a,s;if(!e)return e;const o=((null===(a=e.secondary)||void 0===a?void 0:a.selections)||[]).filter(e=>e.id!==ve.SortBy&&e.id!==ve.Search&&e.id!==ve.TravelerType),d=((null===(s=e.secondary)||void 0===s?void 0:s.counts)||[]).filter(e=>"pageIndex"!==e.id&&"size"!==e.id);return we(we({},e),{},{secondary:we(we({},e.secondary),{},{selections:[...o,{id:ve.SortBy,value:i},{id:ve.Search,value:r},{id:ve.TravelerType,value:n},...l?[{id:ve.ReviewsWithPhotos,value:l}]:[]],counts:[...d,{id:de,value:t},{id:ce,value:10}]})})}(e,t,i,n,r,l),Se=(e,t,i,n,r,l)=>{const a=e.travelSearchCriteria,s=(null==a?void 0:a.activity)?"activity":"property",o=be((null==a?void 0:a.activity)||(null==a?void 0:a.property),t,i,n,r,l);return null!=o?{[s]:o}:a},Re="default-product-details-experience-batch-key",Fe=a.J1`
  fragment ReviewDisclaimerFragment on ProductTextInfoSection {
    ...ProductTextInfoSectionFragment
  }

  ${o.wK.fragment}
`,Te=({data:e})=>{var t,i;const n=(0,c.KY)();if(!(null===(t=e.title)||void 0===t?void 0:t.text))return null;const{content:l,openAnalytics:a}=null!==(i=e.message)&&void 0!==i?i:{};return(0,u.jsx)(r.N,{padding:{blockstart:"half"},children:(0,u.jsx)("div",{children:(0,u.jsx)(o.wK,{data:e,trackTooltipToggle:()=>{const{referrerId:e,linkName:t}=null!=a?a:{};e&&t&&n(e,t)},trackTextInfoContentLinkClick:()=>{var e;const t=null==l?void 0:l.filter(e=>"EGDSInlineLink"===e.__typename)[0],{referrerId:i,linkName:r}=(null==t||null===(e=t.action)||void 0===e?void 0:e.analytics)||{};i&&r&&n(i,r)},paraTextSize:1})})})};Te.fragment=Fe,Te.displayName="ReviewDisclaimer";const ke=a.J1`
  fragment ReviewSummaryFragment on ProductRatingSummary {
    primary
    accessibilityLabel
    theme
  }
`,Ae={STRONG:"bold"},Ie=({data:e})=>{const{primary:t,accessibilityLabel:i,theme:n}=e;return(0,u.jsx)(v.X,{alignItems:"start",direction:"column",children:(0,u.jsx)(p.C,{children:(0,u.jsxs)("div",{children:[i&&(0,u.jsx)("span",{className:"is-visually-hidden",children:i}),t&&(0,u.jsx)(h.D,{size:500,weight:n&&Ae[n]||void 0,"aria-hidden":null!==i,children:t})]})})})};Ie.fragment=ke,Ie.displayName="ReviewSummary";const Ce=()=>(0,u.jsxs)(j.w,{space:"two",children:[(0,u.jsx)(f.T,{children:(0,u.jsx)(w.R,{type:"line",lineHeight:24,lineLength:"primary"})}),(0,u.jsx)(f.T,{children:(0,u.jsx)(w.R,{type:"line",lineHeight:20,lineLength:"secondary"})})]}),De=(0,u.jsxs)(v.X,{justifyContent:"space-between",children:[(0,u.jsx)(p.C,{children:(0,u.jsx)(w.R,{type:"line",lineHeight:14,lineLength:"secondary"})}),(0,u.jsx)(p.C,{children:(0,u.jsx)(w.R,{type:"line",lineHeight:14,lineLength:"secondary"})})]}),_e=()=>(0,u.jsxs)(j.w,{space:"two",children:[(0,u.jsx)(f.T,{children:De}),(0,u.jsx)(f.T,{children:(0,u.jsx)(j.w,{rows:["10px"],children:(0,u.jsx)(f.T,{children:(0,u.jsx)(g.M,{imageFit:"cover",children:(0,u.jsx)(w.R,{type:"block",cornerRadius:4})})})})})]}),Pe=({times:e})=>(0,u.jsx)(r.N,{padding:{blockend:"four"},children:(0,u.jsxs)(j.w,{space:"four","data-stid":"product-review-summary-details-skeleton",children:[(0,u.jsx)(f.T,{children:(0,u.jsx)(Ce,{})}),(0,u.jsx)(f.T,{children:(0,u.jsx)(u.Fragment,{children:Array.from({length:e}).map((e,t)=>(0,u.jsx)(_e,{},`category-skeleton-${t}`))})})]})}),Me=()=>(0,u.jsx)(r.N,{padding:{blockend:"twelve"},children:(0,u.jsxs)(j.w,{space:"four","data-stid":"product-review-summary-details-skeleton",children:[(0,u.jsx)(f.T,{children:(0,u.jsx)(w.R,{type:"line",lineHeight:32,lineLength:"secondary"})}),(0,u.jsx)(f.T,{children:(0,u.jsx)(g.M,{ratio:g.l.R21_9,children:(0,u.jsx)(w.R,{type:"block",cornerRadius:8})})})]})}),Ee=a.J1`
  fragment DialogToolbarFragment on ProductDialogToolbar {
    title
    analytics {
      linkName
      referrerId
      eventType
    }
  }
`,$e=a.J1`
  fragment ReviewRatingummaryFragment on ProductRatingSummary {
    accessibilityLabel
    overallRating {
      ...EGDSStylizedTextFragment
    }
    superlative {
      ...EGDSStylizedTextFragment
    }
  }

  ${o.Z3.fragment}
`,Ne=({data:e,disclaimer:t})=>{const{accessibilityLabel:i,overallRating:n,superlative:l}=e;return n&&0!==n.length?(0,u.jsxs)(v.X,{direction:"row","data-stid":"product-review-rating-summary",children:[(0,u.jsx)(p.C,{grow:0,children:(0,u.jsxs)(u.Fragment,{children:[i&&(0,u.jsx)(m.M,{className:"is-visually-hidden","aria-label":i||"",children:i}),n.map(e=>(0,u.jsx)(o.Z3,{data:e,skipScreenReader:!0},`${null==e?void 0:e.text}`))]})}),(l||t)&&(0,u.jsx)(r.N,{padding:{inlinestart:"four"},children:(0,u.jsx)(p.C,{grow:1,children:(0,u.jsxs)(v.X,{direction:"column",children:[(0,u.jsx)(p.C,{children:l&&(0,u.jsx)(o.Z3,{data:l})}),(0,u.jsx)(p.C,{children:t&&(0,u.jsx)(Te,{data:t})})]})})})]}):null};Ne.fragment=$e,Ne.displayName="ReviewRatingSummary";let Le=function(e){return e.LEADING="LEADING",e.TRAILING="TRAILING",e}({}),Be=function(e){return e.ACTIVITY_ID="ACTIVITY_ID",e.CART_ID="CART_ID",e.CAR_OFFER_TOKEN="CAR_OFFER_TOKEN",e.CAR_PICKUP_VENDOR_LOCATION_ID="CAR_PICKUP_VENDOR_LOCATION_ID",e.CHECKOUT_SESSION_ID="CHECKOUT_SESSION_ID",e.ENTITY_ID="ENTITY_ID",e.LEGACY_ORDER_ID="LEGACY_ORDER_ID",e.OFFER_ID="OFFER_ID",e.ORDER_ID="ORDER_ID",e.PROPERTY_ID="PROPERTY_ID",e.SAILING_TOKEN="SAILING_TOKEN",e.TRIP_IDENTIFIER_ID="TRIP_IDENTIFIER_ID",e}({}),Ve=function(e){return e.REVIEW_FORWARD="REVIEW_FORWARD",e.SUMMARY_FORWARD="SUMMARY_FORWARD",e}({});const Oe=a.J1`
  fragment SeeAllReviewsButtonFragment on UISecondaryButton {
    primary
    accessibility
    analytics {
      linkName
      referrerId
      eventType
    }
  }
`;function ze(e){return{__typename:"UISecondaryButton",primary:e.primary,accessibility:e.accessibility,analytics:e.analytics,disabled:!1,icon:null}}const Ge=(0,n.forwardRef)(({data:e,onClick:t,isFullWidth:i=!1,size:n=b.V.LARGE},r)=>{const{primary:l}=null!=e?e:{};return e&&null!=l&&""!==l?(0,u.jsx)(o.NO,{data:ze(e),onClickHandler:t,isFullWidth:i,size:n,iconPosition:Le.TRAILING,ref:r,"data-stid":"see-all-reviews-button"}):null});Ge.displayName="sharedui-SeeAllReviewsButton",Ge.fragment=Oe;const Je=a.J1`
  query PWAReviewsOverlayProductReviewDetailsQuery($productIdentifier: ProductIdentifierInput!, $context: ContextInput!) {
    productReviewDetails(productIdentifier: $productIdentifier, context: $context) {
      dialogToolbar {
        ...DialogToolbarFragment
      }
      summary {
        ...ReviewSummaryFragment
        ...ReviewRatingummaryFragment
      }
      disclaimer {
        ...ReviewDisclaimerFragment
      }
      categories {
        ...ProductContainerSectionFragment
      }
      images {
        ...GuestImagesSectionFragment
      }
      reviewSummary {
        ...ShoppingReviewSummaryFragment
      }
      reviews {
        seeAllReviewsButton {
          ...SeeAllReviewsButtonFragment
        }
      }
    }
  }
  ${Ee}
  ${Ie.fragment}
  ${Ne.fragment}
  ${Te.fragment}
  ${Oe}
  ${o.WZ.fragment}
  ${o.uA.fragment}
  ${o.XM.fragment}
`,We=({inputs:e,skipSsr:t,batchKey:i})=>{var l,c,v,p,m;const{context:h}=(0,s.R)(),g={productIdentifier:{id:e.productIdentifier.id,type:e.productIdentifier.type,travelSearchCriteria:(0,n.useMemo)(()=>Se(e.productIdentifier,0,pe.sortBy,pe.travelerType,pe.search),[e.productIdentifier.travelSearchCriteria])},context:h},{data:y,error:x,loading:j}=(0,a.FP)(Je,{context:{batchKey:null!=i?i:Re,shouldLogPerformance:!0},variables:g,ssr:!t});if(x)return null;const{summary:f,disclaimer:w,categories:b,images:S,reviewSummary:R}=null!==(l=null==y?void 0:y.productReviewDetails)&&void 0!==l?l:{},F=(null!==(c=null==b||null===(v=b.progressBarGroup)||void 0===v?void 0:v.progressBars.length)&&void 0!==c?c:0)>(null!==(p=null==b||null===(m=b.expando)||void 0===m?void 0:m.items)&&void 0!==p?p:5)?"one":"four";return(0,u.jsxs)("div",{"data-stid":"product-reviews-details",children:[j&&(0,u.jsx)(Pe,{times:5}),R?(0,u.jsx)(o.XM,{data:R,trackingMode:o.tV.ON_LOAD}):f&&(0,u.jsx)(Ie,{data:f}),w&&(0,u.jsx)(Te,{data:w}),(0,u.jsx)(d.jq,{inputs:{productIdentifier:{id:e.productIdentifier.id,type:e.productIdentifier.type,travelSearchCriteria:e.productIdentifier.travelSearchCriteria}}}),b&&(0,u.jsx)(r.N,{padding:{blockstart:"four"},children:(0,u.jsx)("div",{children:(0,u.jsx)(o.WZ,{data:b})})}),S&&(0,u.jsx)(r.N,{padding:{blockstart:F},children:(0,u.jsx)("div",{children:(0,u.jsx)(o.uA,{data:S,isOverlay:!0})})})]})};We.displayName="sharedui-ProductReviewDetails";const Ke=(e,t)=>e&&t?[...t,...e.filter(({id:e})=>!t.some(t=>e===(null==t?void 0:t.id)))]:e,Xe=(e,t)=>({updateQuery:i,variables:n})=>{var r,l,a,s,o,d,c,u,v,p,m,h,g,y,x;e({updateQuery:i,variables:we(we({},t),{},{productIdentifier:we(we({},t.productIdentifier),{},{travelSearchCriteria:we(we({},null===(r=t.productIdentifier)||void 0===r?void 0:r.travelSearchCriteria),{},{property:(s=null===(l=t.productIdentifier)||void 0===l||null===(l=l.travelSearchCriteria)||void 0===l?void 0:l.property,o=null===(a=n.productIdentifier)||void 0===a||null===(a=a.travelSearchCriteria)||void 0===a?void 0:a.property,s&&o?we(we(we({},s),o),{},{secondary:{booleans:Ke(null===(d=s.secondary)||void 0===d?void 0:d.booleans,null===(c=o.secondary)||void 0===c?void 0:c.booleans),counts:Ke(null===(u=s.secondary)||void 0===u?void 0:u.counts,null===(v=o.secondary)||void 0===v?void 0:v.counts),dates:Ke(null===(p=s.secondary)||void 0===p?void 0:p.dates,null===(m=o.secondary)||void 0===m?void 0:m.dates),ranges:Ke(null===(h=s.secondary)||void 0===h?void 0:h.ranges,null===(g=o.secondary)||void 0===g?void 0:g.ranges),selections:Ke(null===(y=s.secondary)||void 0===y?void 0:y.selections,null===(x=o.secondary)||void 0===x?void 0:x.selections)}}):s)})})})})},Qe={sortBy:{name:"reviews_sort.selected",version:"1.0.0"},sortByOpened:{name:"reviews_sort.opened",version:"1.0.0"},travelerType:{name:"reviews_filter.selected",version:"1.0.0"},travelerTypeOpened:{name:"reviews_filter.opened",version:"1.0.0"},reviewsDetailsSection:{name:"reviews.viewed",version:"1.0.0"},individualReview:{name:"review.presented",version:"1.0.0"},reviewSearchInit:{name:"reviews_search.initiated",version:"1.0.0"},reviewSearchSubmit:{name:"reviews_search.submitted",version:"1.0.0"},reviewPagination:{name:"additional_reviews.selected",version:"1.0.0"},reviewSeeMore:{name:"see_more.selected",version:"1.0.0"},reviewSeeLess:{name:"see_less.selected",version:"1.0.0"},reviewTranslate:{name:"translate_review.selected",version:"1.0.0"},reportSelected:{name:"report.selected",version:"1.0.0"},reportReasonSelected:{name:"report_reason.selected",version:"1.0.0"},reportSubmitted:{name:"report.submitted",version:"1.0.0"},reviewImageScroll:{name:"image_scroll.selected",version:"1.0.0"},reviewImageSelected:{name:"image.selected",version:"1.0.0"},reviewImagePresented:{name:"image.presented",version:"1.12.0"},reviewImagePreviewClose:{name:"image.closed",version:"1.0.0"},reviewPhotosSelected:{name:"reviews_pill.selected",version:"1.0.0"},reviewPhotosDeselected:{name:"reviews_pill.deselected",version:"1.0.0"},sortByApplied:{name:"reviews_sort.applied",version:"1.0.0"},travelerTypeApplied:{name:"reviews_filter.applied",version:"1.0.0"}},Ue=(e,t)=>({event:{event_name:e,event_version:t}}),Ye=a.J1`
  fragment EmptyStateFragment on UIEmptyState {
    heading
    body
    __typename
  }
`,He=({data:e})=>{const{heading:t,body:i}=e;return(0,u.jsxs)(T.I,{children:[(0,u.jsx)(r.N,{margin:{blockstart:"six"},children:(0,u.jsx)(m.M,{size:5,tag:"h3",children:t})}),(0,u.jsx)(h.D,{spacing:"two",size:300,children:i})]})};He.displayName="EmptyState",He.fragment=Ye;const Ze=a.J1`
  fragment MessagingCardFragment on UIMessagingCard {
    graphic {
      __typename
      ... on Icon {
        id
        description
        __typename
      }
    }
    primary
    secondaries
    actions {
      primary {
        primary
        accessibility
      }
    }
    __typename
  }
`,qe=({data:e,handleClick:t})=>{var i,r;const{primary:l,secondaries:a,actions:s}=e,o=(0,n.useCallback)(()=>{t&&t()},[t]);return(0,u.jsxs)(v.X,{space:"four",direction:"column",alignItems:"center",children:[(0,u.jsx)(p.C,{children:(0,u.jsxs)(v.X,{space:"two",direction:"column",alignItems:"center",children:[l&&(0,u.jsx)(p.C,{children:(0,u.jsx)(m.M,{tag:"h4",children:l})}),(null==a?void 0:a[0])&&(0,u.jsx)(p.C,{children:(0,u.jsx)(h.D,{size:300,children:null==a?void 0:a[0]})})]})}),(0,u.jsx)(p.C,{children:s&&(0,u.jsx)(p.C,{children:(0,u.jsx)(R.y,{"aria-label":(null===(i=s.primary)||void 0===i?void 0:i.accessibility)||"",onClick:o,id:"clear-search-reviews-filter",children:null===(r=s.primary)||void 0===r?void 0:r.primary})})})]})};qe.displayName="MessagingCard",qe.fragment=Ze;const et=a.J1`
  fragment NoResultsMessageFragment on ProductReviews {
    noResultsMessage {
      __typename
      ...MessagingCardFragment
      ...EmptyStateFragment
    }
  }
  ${qe.fragment}
  ${He.fragment}
`,tt=({data:e,handleClick:t,hasSearchFilter:i=!0})=>{const{noResultsMessage:n}=e;switch(null==n?void 0:n.__typename){case"UIMessagingCard":return i?(0,u.jsx)(qe,{data:n,handleClick:t}):null;case"UIEmptyState":return(0,u.jsx)(He,{data:n});default:return null}};tt.fragment=et,tt.displayName="NoResultsMessage";const it=()=>(0,u.jsxs)(j.w,{space:"two",children:[(0,u.jsx)(f.T,{children:(0,u.jsx)(w.R,{type:"line",lineLength:"secondary"})}),(0,u.jsx)(f.T,{children:(0,u.jsx)(w.R,{type:"line",lineHeight:16,lineLength:"primary"})}),(0,u.jsx)(f.T,{children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(j.w,{rows:["8px"],children:(0,u.jsx)(f.T,{children:(0,u.jsx)(g.M,{imageFit:"cover",children:(0,u.jsx)(w.R,{type:"block",cornerRadius:4})})})}),(0,u.jsx)(j.w,{rows:["8px"],children:(0,u.jsx)(f.T,{children:(0,u.jsx)(g.M,{imageFit:"cover",children:(0,u.jsx)(w.R,{type:"block",cornerRadius:4})})})})]})}),(0,u.jsx)(f.T,{children:(0,u.jsx)(r.N,{margin:{blockstart:"three"},children:(0,u.jsx)(j.w,{rows:["68px"],children:(0,u.jsx)(f.T,{children:(0,u.jsx)(g.M,{imageFit:"cover",children:(0,u.jsx)(w.R,{type:"block",cornerRadius:4})})})})})})]}),nt=({times:e})=>(0,u.jsx)(k.g,{"data-stid":"product-review-list-skeleton",children:Array.from({length:e}).map((t,i)=>(0,u.jsx)(A.E,{padded:["blockstart","blockend"],border:i<e-1?"bottom":void 0,children:(0,u.jsx)(it,{})},`product-review-list-loading-${i}`))}),rt=({times:e})=>(0,u.jsx)(j.w,{space:"twelve","data-stid":"product-review-list-skeleton",children:Array.from({length:e}).map((e,t)=>(0,u.jsx)(f.T,{children:(0,u.jsxs)(j.w,{space:"three","data-stid":`product-review-list-skeleton-${t}`,children:[(0,u.jsx)(f.T,{children:(0,u.jsx)(w.R,{type:"line",lineHeight:12,lineLength:"primary"})}),(0,u.jsx)(f.T,{children:(0,u.jsx)(w.R,{type:"line",lineHeight:12,lineLength:"secondary"})}),(0,u.jsx)(f.T,{children:(0,u.jsx)(g.M,{ratio:g.l.R4_1,children:(0,u.jsx)(w.R,{type:"block",cornerRadius:8})})})]},t)},`product-review-list-loading-${t}`))}),lt=a.J1`
  fragment PaginateFragment on ProductReviews {
    pagination {
      button {
        primary
        accessibility
      }
      analytics
    }
  }
`,at=({data:e,fetchMore:t,page:i,showNextPage:l})=>{var a,s;const{pagination:o}=e,[d,m]=(0,n.useState)(!1),h=(0,c.iQ)(),g=(0,n.useCallback)(()=>{(null==o?void 0:o.analytics)&&h({clientPayload:Ue(Qe.reviewPagination.name,Qe.reviewPagination.version),serverPayload:null==o?void 0:o.analytics})},[null==o?void 0:o.analytics,h]),y=(0,n.useCallback)(()=>{m(!0),l(!0),g(),t({variables:{productIdentifier:{travelSearchCriteria:{property:{secondary:{counts:[{id:de,value:i},{id:ce,value:10}]}}}}},updateQuery:(e,{fetchMoreResult:t})=>{var i,n,r;if(setTimeout(()=>m(!1)),!t)return e;const l=null!==(i=e.productReviewDetails.reviews.details)&&void 0!==i?i:[],a=null!==(n=null===(r=t.productReviewDetails)||void 0===r||null===(r=r.reviews)||void 0===r?void 0:r.details)&&void 0!==n?n:[];return we(we({},e),{},{productReviewDetails:we(we({},e.productReviewDetails),{},{reviews:we(we({},t.productReviewDetails.reviews),{},{details:[...l,...a]})})})}})},[t,i,l,g]);return(null==o?void 0:o.button)?d?(0,u.jsx)(it,{}):(0,u.jsx)(j.w,{children:(0,u.jsx)(f.T,{children:(0,u.jsx)(r.N,{margin:{block:"three"},children:(0,u.jsx)(v.X,{alignContent:"center",justifyContent:"center",wrap:"wrap",children:(0,u.jsx)(p.C,{children:(0,u.jsx)(R.y,{"aria-label":(null===(a=o.button)||void 0===a?void 0:a.accessibility)||"",onClick:y,disabled:d,id:"load-more-reviews",children:null===(s=o.button)||void 0===s?void 0:s.primary})})})})})}):null};at.displayName="Paginate",at.fragment=lt;const st=a.J1`
  fragment ReviewsMediaGalleryDialogFragment on ReviewSection {
    mediaGalleryDialog {
      __typename
      toolbar {
        icon {
          id
          description
        }
        clickAnalytics
      }

      trigger {
        __typename
      }
      primaryButton {
        ...PrimaryButtonFragment
        ... on ProductScrollToButton {
          clickAnalytics
        }
      }
      previousActionButton {
        clickAnalytics
        button {
          accessibility
        }
      }
      nextActionButton {
        clickAnalytics
        button {
          accessibility
        }
      }
    }
  }
  ${o.jn.fragment}
`,ot=a.J1`
  fragment ReviewMediaFragment on ReviewSection {
    ...ReviewsMediaAssetsFragment
    ...ReviewsMediaGalleryDialogFragment
  }
  ${a.J1`
  fragment ReviewsMediaAssetsFragment on ReviewSection {
    mediaAssets {
      __typename
      ...ProductImageInfoFragment
      ...ProductVideoFragment
    }
  }
  ${o.X$.fragment}
  ${o.pb.fragment}
`}
  ${st}
`,dt=({data:e,reviewId:t})=>{const{mediaAssets:i,mediaGalleryDialog:r}=e,l=(0,n.useRef)(null),{trackEvent:a}=(0,P.s)(),s=(0,n.useCallback)(e=>{l.current=e},[]),d=(0,n.useRef)(null),c=(0,n.useCallback)((e,t)=>{var n;t&&(d.current=t);const r=null==i?void 0:i[e];"ProductImageInfo"===(null==r?void 0:r.__typename)&&(null===(n=r.analytics)||void 0===n?void 0:n.clickAnalyticsPayload)&&a(E.t.createEvent((0,o.Ft)(Qe.reviewImageSelected.name,r.analytics.clickAnalyticsPayload))),l.current&&l.current.openAt(e)},[e,a]),v=(e,t)=>{var i;const n=(0,u.jsx)(y.F,{src:e.image.url,alt:e.image.description||`Review image ${t+1}`}),r=null===(i=e.analytics)||void 0===i?void 0:i.impressionAnalytics;if(!r)return n;const l=E.t.createEvent((0,o.Ft)(Qe.reviewImagePresented.name,r));return(0,u.jsx)(M.G,{onIntersection:()=>{a(l)},triggerOnce:!0,children:n})},p=i&&i.length>0&&r;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(j.w,{columns:4,rows:1,space:"one",children:null==i?void 0:i.slice(0,4).map((e,i)=>"ProductImageInfo"===e.__typename&&(0,u.jsx)(f.T,{children:(0,u.jsxs)(g.M,{ratio:g.l.R4_3,children:[v(e,i),(0,u.jsx)(x.d,{children:(0,u.jsx)("button",{type:"button",onClick:e=>c(i,e.currentTarget),"aria-label":e.image.description||`Review image ${i+1}`})})]})},`review-photo-${t}-${i}`))}),p&&(0,u.jsx)(o.qJ,{ref:s,propertyId:t,data:e,triggerElementRef:d,dialogKey:"pwaDialogNested"})]})};dt.fragment=ot,dt.displayName="ReviewMedia";const ct=a.J1`
  fragment ReviewPhotosFragment on GuestImages {
    carousel {
      items {
        image {
          aspectRatio
          url
          description
        }
        analytics
        previewAnalytics
      }
      nextButton {
        button {
          accessibility
          icon {
            id
            description
            token
          }
          disabled
        }
        analytics
      }
      previousButton {
        button {
          accessibility
          icon {
            id
            description
            token
          }
          disabled
        }
        analytics
      }
      closeAnalytics
    }
  }
`,ut=({data:e,reviewId:t})=>{var i,l,a,s;const{carousel:o}=e,d=(0,c.iQ)(),m=(0,n.useRef)(null),w=(0,n.useRef)(null),[S,R]=(0,n.useState)(0),[F,T]=(0,n.useState)(0),[k,A]=(0,n.useState)(0),[I,C,D]=(0,W.useDialog)(`review-${t}-photo-gallery-dialog`,"pwaPhotosReviewsDialog");let _=0;const P=(0,n.useCallback)((e,t)=>{C.openDialog(),R(e),T(e),t&&d({clientPayload:Ue(Qe.reviewImageSelected.name,Qe.reviewImageSelected.version),serverPayload:t})},[C,d]),M=(0,n.useCallback)(e=>{var t;if(null===(t=m.current)||void 0===t||t.focus(),C.closeDialog(),R(0),e){const t={additional_context:{image_list:[{image_id:he.ID,gallery_position:F+1}]}};d({clientPayload:we(we({},Ue(Qe.reviewImagePreviewClose.name,Qe.reviewImagePreviewClose.version)),t),serverPayload:e})}},[F,C,d]),E=(0,n.useCallback)((e,t,i)=>{(null==t?void 0:t.analytics)&&d({clientPayload:we(we({},Ue(Qe.reviewImageScroll.name,Qe.reviewImageScroll.version)),{additional_context:{image_gallery:{gallery_name:he.NAME,gallery_max_position:_},user_interface:{scroll_direction:i},image_list:[{image_id:he.ID,gallery_position:e+1}]}}),serverPayload:null==t?void 0:t.analytics}),A(e)},[_,d]);if(!o||!o.items||0===(null===(i=o.items)||void 0===i?void 0:i.length))return null;const{items:B,nextButton:O,previousButton:z,closeAnalytics:J}=o;_=null==B?void 0:B.length;const K={carouselName:"ReviewPhotosGallery",itemsVisible:{sm:1,md:1,lg:1,xl:1},pagingInset:!0,pagingPersistent:!0,stretchToFill:!1,navigationIconId:{next:"next-button-review-gallery",prev:"prev-button-review-gallery"},buttonText:{nextButton:(null==O||null===(l=O.button.icon)||void 0===l?void 0:l.description)||"",prevButton:(null==z||null===(a=z.button.icon)||void 0===a?void 0:a.description)||""},peek:!1,wrapItems:!0},X=e=>({clientPayload:Ue(Qe.reviewImagePresented.name,Qe.reviewImagePresented.version),serverPayload:e}),Q=B.map((e,t)=>(0,u.jsx)(g.M,{ratio:g.l.R16_9,children:e.analytics?(0,u.jsx)(c.E0,{eventData:X(e.analytics),children:(0,u.jsx)(y.F,{src:e.image.url,alt:e.image.description,placeholderImage:!0})}):(0,u.jsx)(y.F,{src:e.image.url,alt:e.image.description,placeholderImage:!0})},`review-gallery-${e.image.url}-${t}`));return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(j.w,{columns:4,rows:1,space:"one",children:B.slice(0,4).map((e,i)=>(0,u.jsx)(f.T,{children:(0,u.jsxs)(g.M,{ratio:g.l.R4_3,children:[e.analytics?(0,u.jsx)(c.E0,{eventData:X(e.analytics),children:(0,u.jsx)(y.F,{src:e.image.url,alt:e.image.description,placeholderImage:!0})}):(0,u.jsx)(y.F,{src:e.image.url,alt:e.image.description,placeholderImage:!0}),(0,u.jsx)(x.d,{children:(0,u.jsx)(b.u,{id:`${t}-gallery-image-button-${i}`,onClick:()=>P(i,e.previewAnalytics),domRef:e=>{0===i&&(m.current=e)},"aria-label":`${i+1}/${B.length}`})})]})},e.image.url))},`review-photos-grid-${t}`),(0,u.jsx)(V.K,{isVisible:I,children:(0,u.jsx)(D,{children:(0,u.jsxs)(N.t,{type:"full",isVisible:I,triggerRef:m,theme:"dark",children:[(0,u.jsx)(G.b,{navigationContent:{navIconLabel:"Close the dialog",onClick:()=>M(J)},overlay:!0}),(0,u.jsx)(L.Y,{children:(0,u.jsxs)(v.X,{blockSize:"full_size",direction:"column",children:[(0,u.jsx)(p.C,{children:(0,u.jsx)(r.N,{padding:{blockstart:"twelve"},children:(0,u.jsx)($._N,we(we({},K),{},{carouselRef:w,fullSheetVisible:I,startIndex:S,onIndexChange:e=>{e>k&&E(e,O,"right"),e<k&&E(e,z,"left"),T(e)},children:Q}))})}),(0,u.jsx)(p.C,{children:(0,u.jsx)(r.N,{padding:{block:"four"},children:(0,u.jsxs)(v.X,{alignItems:"end",justifyContent:"space-between",children:[(0,u.jsx)(p.C,{children:(0,u.jsxs)(h.D,{theme:"inverse",children:[" ",null===(s=B[F])||void 0===s?void 0:s.image.description]})}),(0,u.jsx)(p.C,{children:(0,u.jsx)(h.D,{theme:"inverse",children:`${String(F+1)}/${String(B.length)}`})})]})})})]})})]})})})]})};ut.fragment=ct,ut.displayName="ReviewPhotos";const vt=a.J1`
  fragment ReviewSectionFragment on ReviewSection {
    __typename
    text
    title
    expando {
      ...ProductEGDSExpandoPeekFragment
    }
    photos {
      ...ReviewPhotosFragment
    }
    ...ReviewMediaFragment
    highlightedText {
      ...EGDSSpannableTextFragment
    }
    collapseAnalytics
    expandAnalytics
  }
  ${o.vD.fragment}
  ${ut.fragment}
  ${dt.fragment}
  ${o.$B.fragment}
`,pt=({data:e,reviewId:t,isTranslated:i,translatedContent:r})=>{const[l,a]=(0,n.useState)(!1),s=(0,c.iQ)(),{text:o,title:d,expando:v,photos:p,mediaAssets:g,mediaGalleryDialog:y,highlightedText:x,collapseAnalytics:w,expandAnalytics:b}=e,{expandedLabel:S,collapsedLabel:R,expandedAccessibilityText:F,collapsedAccessibilityText:T}=v||{},k=i&&r?r.text:o,A=i&&r?r.title:d,I=(0,n.useCallback)(()=>{a(!l)},[l]),_=(0,n.useCallback)((e,t)=>{var i;return(null==t||null===(i=t.inlineContent)||void 0===i?void 0:i.length)?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("span",{className:"is-visually-hidden",children:e}),(0,u.jsx)(D.V,{inlineContentList:t.inlineContent,isHiddenFromScreenReader:!0})]}):e},[]),P={id:me.id,callback:e=>{e===me.seeMore&&b&&s({clientPayload:Ue(Qe.reviewSeeMore.name,Qe.reviewSeeMore.version),serverPayload:b}),e===me.seeLess&&w&&s({clientPayload:Ue(Qe.reviewSeeLess.name,Qe.reviewSeeLess.version),serverPayload:w})}};return(0,u.jsxs)(j.w,{space:"two",children:[A&&(0,u.jsx)(f.T,{children:(0,u.jsx)(m.M,{tag:"h5",size:6,children:A})}),k&&(0,u.jsx)(f.T,{children:v?(0,u.jsx)(C.A,{lines:5,isVisible:l,expandLabel:S,collapseLabel:R,handleClick:I,expandA11yLabel:null!=F?F:S,collapseA11yLabel:null!=T?T:R,analytics:P,children:(0,u.jsx)(h.D,{size:300,theme:"standard",children:_(k,x)},`review-text-${t}-${i}`)},`review-expando-${t}-${i}`):(0,u.jsx)(h.D,{size:300,theme:"standard",children:_(k,x)},`review-text-${t}-${!i}`)},`review-text-area-${t}-${i}`),g&&y&&g.length>0?(0,u.jsx)(f.T,{children:(0,u.jsx)(dt,{data:e,reviewId:t})},`review-photos-${t}-${i}`):p?(0,u.jsx)(f.T,{children:(0,u.jsx)(ut,{data:p,reviewId:t})},`review-photos-${t}-${i}`):null]},`review-section-${t}-${i}`)};pt.displayName="Review",pt.fragment=vt;const mt=a.J1`
  fragment ManagementResponseFragment on ProductReview {
    managementResponses {
      ...ReviewSectionFragment
      __typename
    }
  }
  ${pt.fragment}
`,ht=({data:e})=>{const{managementResponses:t}=e;return t?(0,u.jsx)(r.N,{border:["inlinestart"],padding:{inlinestart:"three"},margin:{blockstart:"four"},children:t.map((e,t)=>(0,u.jsxs)("article",{children:[(null==e?void 0:e.title)&&(0,u.jsx)(h.D,{weight:"bold",size:200,children:e.title}),(null==e?void 0:e.text)&&(0,u.jsx)(r.N,{padding:{block:"two"},children:(0,u.jsx)(h.D,{size:200,theme:"standard",children:e.text})})]},`review-management-response${t}-key`))}):null};ht.displayName="ManagementResponse",ht.fragment=mt;const gt=({data:e})=>{const{managementResponses:t}=e;return t?(0,u.jsx)(r.N,{border:["inlinestart"],padding:{inlinestart:"three"},margin:{inlinestart:"three"},children:t.map((e,t)=>(0,u.jsxs)("article",{children:[(null==e?void 0:e.text)&&(0,u.jsx)(r.N,{padding:{blockend:"one"},children:(0,u.jsx)(h.D,{size:200,theme:"standard",children:e.text})}),(null==e?void 0:e.title)&&(0,u.jsx)(h.D,{weight:"bold",size:200,children:e.title})]},`review-management-response${t}-key`))}):null};gt.displayName="ManagementResponseRebrand",gt.fragment=ht.fragment;const yt=a.J1`
  fragment ReportReviewFragment on ProductReview {
    reportReview {
      promptId
      callToAction {
        ...FeedbackCallToActionFragmentn
      }
      clickStreamAnalytics
      reportSubmissionAnalytics
      reviewReasonInsightsAnalytics
    }
  }
  ${a.J1`
  fragment FeedbackCallToActionFragmentn on DirectFeedbackCallToAction {
    __typename
    promptId
    eager
    callToAction {
      ...CDFEGDSStandardLinkFragment
    }
    postSubmitDisplay {
      ...CDFEGDSStandardLinkFragment
    }
    contextValues {
      ...GraphQLPairFragment
    }
    sheetType
  }

  fragment GraphQLPairFragment on GraphQLPair {
    key
    value
  }

  fragment CDFEGDSStandardLinkFragment on EGDSStandardLink {
    uiLinkAction: action {
      ... on UILinkAction {
        accessibility
        analytics {
          ... on ClientSideAnalytics {
            eventType
            linkName
            referrerId
          }
        }
        resource {
          ... on HttpURI {
            relativePath
            value
          }
        }
        target
      }
    }
    disabled
    standardLinkIcon: icon {
      ...CDFIconFragment
    }
    iconPosition
    size
    text
  }

  fragment CDFIconFragment on Icon {
    description
    id
    size
    theme
    title
    withBackground
    token
  }
`}
`,xt=({data:e,propertyId:t,reviewId:i,isRebrandEnabled:l=!1})=>{var s;const o=(0,a.mK)(),d=(0,c.iQ)(),[v,p]=(0,n.useState)(!1),{clickStreamAnalytics:m,reportSubmissionAnalytics:h,reviewReasonInsightsAnalytics:g}=e.reportReview||{};if(!(null===(s=e.reportReview)||void 0===s?void 0:s.callToAction))return null;return(0,u.jsx)("div",{children:(0,u.jsx)(r.N,{padding:l?void 0:{blockstart:"one"},children:(0,u.jsx)("div",{children:(0,u.jsx)(K.CW,{data:e.reportReview.callToAction,eventDispatch:e=>{switch(e.type){case K.Fk.Load:m&&d({clientPayload:Ue(Qe.reportSelected.name,Qe.reportSelected.version),serverPayload:m});break;case K.Fk.Submit:p(!0),h&&d({clientPayload:Ue(Qe.reportSubmitted.name,Qe.reportSubmitted.version),serverPayload:h});break;case K.Fk.SetValue:g&&d({clientPayload:Ue(Qe.reportReasonSelected.name,Qe.reportReasonSelected.version),serverPayload:g});break;case K.Fk.Close:v&&((t=i,()=>{const e=o.cache.identify({id:t,__typename:"ProductReview"});o.cache.evict({id:e}),o.cache.gc()})(),p(!1))}var t}},`${t}-${i}`)})})})};xt.displayName="ReportReview",xt.fragment=yt;const jt=a.J1`
  fragment ReviewTranslationFragment on ProductReview {
    translationInfo {
      disclaimer {
        id
        token
        description
      }
      translationDisclaimerMessage
      graphic {
        ... on Icon {
          description
          id
          theme
          title
          token
          __typename
        }
        ... on Mark {
          description
          id
          size
          url {
            relativePath
            value
          }
          __typename
        }
        __typename
      }
      initialMessage
      loadingMessage
      seeOriginalMessage
      targetLocale
      clickStreamAnalytics
      __typename
    }
  }
`,ft=({data:e,isLoading:t,isTranslated:i,onTranslateClicked:n})=>{var r;const l=(0,c.iQ)(),{translationInfo:a}=e;if(!a)return null;return t?(0,u.jsx)(h.D,{size:200,theme:"standard",children:a.loadingMessage}):(0,u.jsx)(u.Fragment,{children:i?(0,u.jsxs)(v.X,{space:"two",direction:"row",alignItems:"center",children:[(0,u.jsx)(p.C,{children:(0,u.jsx)("div",{children:(0,u.jsx)(h.D,{size:200,theme:"standard",children:null==a||null===(r=a.disclaimer)||void 0===r?void 0:r.description})})}),(0,u.jsx)(p.C,{children:(0,u.jsx)("div",{children:(0,u.jsx)(Q.i,{children:(0,u.jsx)("button",{type:"button",onClick:n,children:a.seeOriginalMessage})})})})]}):(0,u.jsx)(Q.i,{inline:!0,children:(0,u.jsx)("button",{type:"button",onClick:()=>{l({clientPayload:Ue(Qe.reviewTranslate.name,Qe.reviewTranslate.version),serverPayload:null==a?void 0:a.clickStreamAnalytics}),n()},children:a.initialMessage})})})};ft.displayName="ReviewTranslation",ft.fragment=jt;const wt=({data:e,isLoading:t,isTranslated:i,onTranslateClicked:n})=>{var r,l,a,s,o;const d=(0,c.iQ)(),{translationInfo:m}=e;if(!m)return null;const g="Icon"===(null===(r=m.graphic)||void 0===r?void 0:r.__typename)&&m.graphic.token?(0,u.jsx)(X.LD,{id:m.graphic.id,name:m.graphic.token,size:X.So.SMALL,theme:null!==(l=m.graphic.theme)&&void 0!==l?l:void 0,description:m.graphic.description,title:null!==(a=m.graphic.title)&&void 0!==a?a:void 0}):null;return t?(0,u.jsx)(h.D,{size:200,theme:"standard",children:m.loadingMessage}):(0,u.jsx)(u.Fragment,{children:i?(0,u.jsxs)(v.X,{space:"two",direction:"row",alignItems:"center",children:[(0,u.jsx)(p.C,{children:(0,u.jsx)("div",{children:(0,u.jsx)(h.D,{size:200,theme:"standard",children:null!==(s=m.translationDisclaimerMessage)&&void 0!==s?s:null===(o=m.disclaimer)||void 0===o?void 0:o.description})})}),(0,u.jsx)(p.C,{children:(0,u.jsx)("div",{children:(0,u.jsx)(Q.i,{size:"small",children:(0,u.jsxs)("button",{type:"button",onClick:n,children:[g,m.seeOriginalMessage]})})})})]}):(0,u.jsx)(Q.i,{size:"small",children:(0,u.jsxs)("button",{type:"button",onClick:()=>{d({clientPayload:Ue(Qe.reviewTranslate.name,Qe.reviewTranslate.version),serverPayload:null==m?void 0:m.clickStreamAnalytics}),n()},children:[g,m.initialMessage]})})})};wt.displayName="ReviewTranslationRebrand",wt.fragment=ft.fragment;const bt=({data:e,propertyId:t,isLoading:i,isTranslated:n,onTranslateClicked:r})=>{const{id:l,reportReview:a,translationInfo:s}=e;return a||s?(0,u.jsxs)(v.X,{direction:"row",space:"four",children:[a&&(0,u.jsx)(p.C,{children:(0,u.jsx)(xt,{data:e,propertyId:t,reviewId:l,isRebrandEnabled:!0})}),(0,u.jsx)(p.C,{children:(0,u.jsx)(wt,{data:e,isLoading:i,isTranslated:n,onTranslateClicked:r})})]}):null};bt.displayName="ReviewActions";const St=a.J1`
  fragment ReviewContentFragment on ProductReview {
    review {
      ...ReviewSectionFragment
    }
  }
  ${pt.fragment}
`,Rt=({data:e,reviewId:t,isTranslated:i,translatedContent:n})=>{const{review:r}=e;return r?(0,u.jsx)(pt,{data:r,reviewId:t,isTranslated:i,translatedContent:n},`${t}_${i}_section`):null};Rt.displayName="ReviewContent",Rt.fragment=St;const Ft=a.J1`
  fragment ReviewFeedbackFragment on ProductReview {
    reviewFeedback {
      promptId
      __typename
    }
  }
`,Tt=({data:e})=>{var t;return(null===(t=e.reviewFeedback)||void 0===t?void 0:t.promptId)?(0,u.jsx)("div",{children:(0,u.jsx)(r.N,{padding:{blockstart:"one"},children:(0,u.jsx)("div",{"data-stid":"product-review-feedback-indicator",children:(0,u.jsx)(Q.i,{children:(0,u.jsx)("button",{"aria-label":"like",type:"button",children:(0,u.jsx)(X.LD,{name:"thumb_up",size:X.So.EXTRA_SMALL})})})})})}):null};Tt.displayName="ReviewFeedback",Tt.fragment=Ft;const kt=({data:e,theme:t,size:i=200})=>{switch(e.__typename){case"EGDSStylizedText":return(0,u.jsx)(o.Z3,{data:e,theme:t,size:i});case"EGDSPlainText":return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(h.D,{"aria-hidden":Boolean(e.accessibility),size:i,theme:null!=t?t:"standard",children:e.text}),e.accessibility&&(0,u.jsx)("span",{className:"is-visually-hidden",children:e.accessibility})]});default:return null}};kt.displayName="SupportingMessage";const At=a.J1`
  fragment TripSummaryFragment on ProductReview {
    tripSummary {
      __typename
      ... on EGDSPlainText {
        text
        accessibility
        __typename
      }
      ... on EGDSGraphicText {
        text
        accessibility
        theme
        graphic {
          ... on Icon {
            description
            id
            theme
            title
            token
          }
          ... on Mark {
            description
            id
            size
            url {
              relativePath
              value
            }
            __typename
          }

          __typename
        }
        __typename
      }
    }
  }
`,It=({data:e,isSecondaryTheme:t=!1})=>{var i;const{tripSummary:n}=e;return n&&n.text?(0,u.jsxs)(v.X,{space:"two",children:["EGDSGraphicText"===(null==n?void 0:n.__typename)&&"Mark"===(null===(i=n.graphic)||void 0===i?void 0:i.__typename)&&(0,u.jsx)(p.C,{children:(0,u.jsx)(U.n,{name:n.graphic.id})}),(0,u.jsx)(p.C,{children:(0,u.jsx)(h.D,{size:200,theme:t?"secondary":"standard",children:n.text})})]}):null};It.displayName="TripSummary",It.fragment=At;const Ct=(e,t)=>{const i=".uitk-sheet",r=i=>{var n;(null===(n=t.current)||void 0===n?void 0:n.contains(i.target))||e()},l=t=>{"Escape"===t.key&&e()};(0,n.useEffect)(()=>((()=>{const e=document.querySelector(i);e&&(e.addEventListener("click",r),e.addEventListener("keydown",l))})(),()=>(()=>{const e=document.querySelector(i);e&&(e.removeEventListener("click",r),e.removeEventListener("keydown",l))})()),[])},Dt=({data:e,layoutStrategy:t,showTooltipAbove:i})=>{var l,a,s,d;const v=(0,n.useRef)(null),[p,m]=(0,n.useState)(!1),g=(0,c.KY)(),{formatText:y}=(0,H.useLocalization)(),{popupDisclaimer:x}=e,j=null==x?void 0:x.title.text,f=null==x?void 0:x.accessibilityText,w=null==x?void 0:x.icon,b=null==x||null===(l=x.message)||void 0===l?void 0:l.content,S=null==b||null===(a=b.find(e=>"EGDSParagraph"===e.__typename))||void 0===a?void 0:a.text,R=null==b?void 0:b.find(e=>"EGDSInlineLink"===e.__typename),T=null==x||null===(s=x.message)||void 0===s?void 0:s.openAnalytics,k=(0,n.useCallback)(()=>{const{referrerId:e,linkName:t}=T||{};e&&t&&g(e,t)},[T,g]),A=(0,n.useCallback)(()=>{p||k(),m(e=>!e)},[p,k]),I=(0,n.useCallback)(()=>{m(!1)},[]);Ct(I,v);const C=(0,n.useMemo)(()=>{var e;return(0,u.jsx)(Q.i,{size:"small",domRef:v,onClick:A,children:(0,u.jsxs)("button",{type:"button","aria-label":f||j,role:"link",children:[(0,u.jsx)("span",{children:j}),w&&(0,u.jsx)(X.LD,{id:w.id,name:w.token,size:w.size&&X.So[w.size]?X.So[w.size]:X.So.SMALL,theme:null!==(e=w.theme)&&void 0!==e?e:void 0,description:w.description})]})})},[A,f,j,w]);return j&&S?(0,u.jsxs)(Y.P,{type:"relative",children:[C,(0,u.jsx)(V.K,{isVisible:p,children:(0,u.jsxs)(N.t,{autoPosition:!0,position:(e=>{switch(e){case Ve.SUMMARY_FORWARD:return{block:i?O.t.LEADING:O.t.TRAILING,inline:O.t.LEADING};case Ve.REVIEW_FORWARD:default:return{block:i?O.t.LEADING:O.t.TRAILING,inline:O.t.TRAILING}}})(t),triggerRef:v,width:t===Ve.SUMMARY_FORWARD?320:268,type:"popover",isVisible:p,ariaLabel:null!=f?f:j,returnFocusOnClose:!0,onDismiss:I,children:[(0,u.jsx)(B.t,{children:(0,u.jsx)(F.q,{type:"button",onClick:I,name:"sheet-close-button",children:(0,u.jsx)(X.LD,{name:"close",size:X.So.MEDIUM,title:null!==(d=y("close.dialog"))&&void 0!==d?d:"Close",id:"sheet-close-button"})})}),(0,u.jsx)(L.Y,{padded:!1,children:(0,u.jsx)(r.N,{padding:{block:"six",inlinestart:"six"},children:(0,u.jsxs)("div",{children:[(0,u.jsx)(h.D,{size:300,children:S}),R&&(0,u.jsx)(o.Fg,{data:R,size:"medium",inline:!0})]})})})]})})]}):null},_t=a.J1`
  fragment ReviewMetadataFragment on ProductReview {
    popupDisclaimer {
      ...ProductTextInfoSectionFragment
    }
    summary {
      supportingMessages {
        __typename
        ... on EGDSStylizedText {
          ...EGDSStylizedTextFragment
        }
        ... on EGDSPlainText {
          text
          accessibility
          __typename
        }
      }
    }
    ...TripSummaryFragment
  }
  ${o.Z3.fragment}
  ${It.fragment}
  ${o.wK.fragment}
`,Pt=({data:e,isLastPosition:t})=>{var i;const r=!!e.popupDisclaimer,l=e.summary.supportingMessages.filter(e=>("EGDSPlainText"===e.__typename||"EGDSStylizedText"===e.__typename)&&e.text),a=[];return(null===(i=e.tripSummary)||void 0===i?void 0:i.text)&&a.push((0,u.jsx)(It,{data:e})),r?a.push((0,u.jsx)(Dt,{data:e,layoutStrategy:Ve.SUMMARY_FORWARD,showTooltipAbove:t})):l.forEach((e,t)=>{a.push((0,u.jsx)(kt,{data:e},`supporting-message-${t}`))}),0===a.length?null:(0,u.jsx)(f.T,{children:(0,u.jsx)(v.X,{space:"two",alignItems:"center",children:a.map((e,t)=>(0,u.jsxs)(n.Fragment,{children:[t>0&&(0,u.jsx)(p.C,{children:(0,u.jsx)(h.D,{"aria-hidden":"true",weight:"bold",size:200,children:"·"})}),(0,u.jsx)(p.C,{shrink:0,children:e})]},`metadata-segment-${t}`))})})};Pt.displayName="ReviewMetadata",Pt.fragment=_t;const Mt=a.J1`
  fragment ReviewSeoFragment on ProductReview {
    seoStructuredData {
      content
      itemscope
      itemprop
      itemtype
      content
      __typename
    }
  }
`,Et=({data:e})=>{const{seoStructuredData:t}=e;return t?(0,u.jsx)(m.M,{size:7,tag:"h5",itemScope:t.itemscope,itemProp:t.itemprop,itemType:t.itemtype,hidden:!0,children:(0,u.jsx)("span",{itemProp:"name",children:t.content})}):null};Et.displayName="ReviewSeo",Et.fragment=Mt;const $t=({data:e,isSecondaryTheme:t=!1})=>{const{secondary:i}=e.summary,{supportingMessages:n}=e.summary;return(0,u.jsx)(r.N,{padding:{inlineend:"one"},children:(0,u.jsxs)("div",{children:[i&&(0,u.jsx)(h.D,{size:400,weight:"medium",theme:"standard",wordBreak:!0,children:i}),(0,u.jsx)(It,{data:e,isSecondaryTheme:t}),(null==n?void 0:n.length)>0&&n.map((e,t)=>(0,u.jsx)(kt,{data:e,size:200,theme:"secondary"},`review-summary-travel-${t}`))]})})};$t.displayName="ReviewSummaryRebrand";const Nt=a.J1`
  fragment ReviewSummarySectionFragment on ProductReview {
    summary {
      accessibilityLabel
      primary
      secondary
      supportingMessages {
        __typename
        ... on EGDSStylizedText {
          ...EGDSStylizedTextFragment
          __typename
        }
        ... on EGDSPlainText {
          text
          accessibility
          __typename
        }
      }
      __typename
    }
    supportingMessages {
      ...EGDSStylizedTextFragment
    }
  }
  ${o.Z3.fragment}
`,Lt=({data:e})=>{const{summary:t,supportingMessages:i}=e,{primary:n,accessibilityLabel:r,secondary:l,supportingMessages:a}=t,s=a.filter(e=>("EGDSPlainText"===e.__typename||"EGDSStylizedText"===e.__typename)&&e.text),o=i&&i.length>0;return(0,u.jsxs)(j.w,{space:"two",children:[n&&(0,u.jsx)(f.T,{children:(0,u.jsx)(m.M,{tag:"h3",size:5,"aria-label":r||"",children:n})}),(l||s.length>0||o)&&(0,u.jsx)(f.T,{children:(0,u.jsxs)("div",{children:[l&&(0,u.jsx)(m.M,{size:7,tag:"h4",children:l}),s.map((e,t)=>(0,u.jsx)(kt,{data:e,size:300},`review-summary-travel-${t}`)),o&&i.map((e,t)=>(0,u.jsx)(kt,{data:e,size:300},`review-supporting-${t}`))]})})]})};Lt.displayName="ReviewSummarySection",Lt.fragment=Nt;const Bt=a.J1`
  fragment SentimentsFragment on ProductReview {
    sentiments {
      __typename
      label
      icon {
        __typename
        id
        description
        token
      }
    }
  }
`,Vt=({data:e})=>{const{sentiments:t}=e;return t&&0!==(null==t?void 0:t.length)?(0,u.jsx)(j.w,{space:"two",children:t.map((e,t)=>(0,u.jsx)(f.T,{children:(0,u.jsxs)(v.X,{direction:"row",space:"two",children:[(null==e?void 0:e.icon)&&(0,u.jsx)(p.C,{children:(0,u.jsx)(X.LD,{"aria-hidden":!0,size:X.So.SMALL,name:e.icon.id,id:`${e.icon.id}}`})}),(0,u.jsx)(p.C,{children:(0,u.jsx)(h.D,{size:200,theme:"standard",inline:!0,children:e.label})})]})},`review-sentiments-${t}`))}):null};Vt.displayName="Sentiments",Vt.fragment=Bt;const Ot=a.J1`
  fragment ReviewFragment on ProductReview {
    __typename
    id
    disclaimer
    impressionAnalytics
    overlayLayoutStrategy
    ...ManagementResponseFragment
    ...ReportReviewFragment
    ...ReviewContentFragment
    ...ReviewFeedbackFragment
    ...ReviewSeoFragment
    ...SentimentsFragment
    ...ReviewSummarySectionFragment
    ...ReviewTranslationFragment
    ...ReviewMetadataFragment
    popupDisclaimer {
      ...ProductTextInfoSectionFragment
    }
  }
  ${ht.fragment}
  ${xt.fragment}
  ${Rt.fragment}
  ${Tt.fragment}
  ${Et.fragment}
  ${Vt.fragment}
  ${Lt.fragment}
  ${ft.fragment}
  ${Pt.fragment}
  ${o.wK.fragment}
`,zt=a.J1`
  query TranslateReviewQuery($context: ContextInput!, $locale: Locale, $reviewId: String!) {
    translateReview(context: $context, locale: $locale, reviewId: $reviewId) {
      text
      title
      highlightedText {
        ...EGDSSpannableTextFragment
      }
    }
  }
  ${o.$B.fragment}
`,Gt=e=>{const[t,i]=(0,n.useState)(!1),{context:r}=(0,s.R)(),[l,o]=(0,a._l)(zt),d=o.data,{called:c,loading:v}=o,{disclaimer:p,id:m}=e,g={clientPayload:Ue(Qe.individualReview.name,Qe.individualReview.version),serverPayload:e.impressionAnalytics};return{isTranslated:t,loading:v,impressionAnalytics:g,onTranslateClicked:()=>{c||l({variables:{context:r,locale:r.locale,reviewId:m}}),i(!t)},disclaimerItem:p&&(0,u.jsx)(f.T,{children:(0,u.jsx)(h.D,{size:200,theme:"standard",children:p})}),reviewContent:(0,u.jsx)(Rt,{data:e,reviewId:m,isTranslated:t,translatedContent:null==d?void 0:d.translateReview},`review_content_${m}_${t}_${v}`)}},Jt=({data:e,propertyId:t,isLastPosition:i})=>{const{isTranslated:n,loading:r,impressionAnalytics:l,onTranslateClicked:a,disclaimerItem:s,reviewContent:o}=Gt(e),{id:d,summary:h}=e,{primary:g,accessibilityLabel:y}=h,x=g&&(0,u.jsx)(m.M,{tag:"h4",size:5,"aria-label":y||"",children:g});return(0,u.jsx)(c.E0,{eventData:l,children:(0,u.jsx)("article",{id:d,children:(0,u.jsxs)(j.w,{space:"four",children:[s,x&&(0,u.jsx)(f.T,{children:x}),(0,u.jsx)(f.T,{children:o}),(0,u.jsx)(f.T,{children:(0,u.jsx)(Et,{data:e})}),(0,u.jsx)(f.T,{children:(0,u.jsx)(Vt,{data:e})}),(0,u.jsx)(f.T,{children:(0,u.jsxs)(v.X,{direction:"row",justifyContent:"space-between",children:[(0,u.jsx)(p.C,{children:(0,u.jsx)($t,{data:e,isSecondaryTheme:!0})}),(0,u.jsx)(p.C,{alignSelf:"end",shrink:0,children:(0,u.jsx)("div",{children:(0,u.jsx)(Dt,{data:e,layoutStrategy:Ve.REVIEW_FORWARD,showTooltipAbove:i})})})]})}),(0,u.jsx)(f.T,{children:(0,u.jsx)(bt,{data:e,propertyId:t,isLoading:r,isTranslated:n,onTranslateClicked:a})}),(0,u.jsx)(f.T,{children:(0,u.jsx)(gt,{data:e})})]})})})},Wt=({data:e,propertyId:t,isLastPosition:i})=>{const{isTranslated:n,loading:r,impressionAnalytics:l,onTranslateClicked:a,disclaimerItem:s,reviewContent:o}=Gt(e),{id:d}=e;return(0,u.jsx)(c.E0,{eventData:l,children:(0,u.jsx)("article",{id:d,children:(0,u.jsxs)(j.w,{space:"two",children:[s,(0,u.jsx)(f.T,{children:(0,u.jsx)(Lt,{data:e})}),(0,u.jsx)(f.T,{children:(0,u.jsx)(Vt,{data:e})}),(0,u.jsx)(f.T,{children:(0,u.jsx)(ft,{data:e,isLoading:r,isTranslated:n,onTranslateClicked:a})}),(0,u.jsx)(f.T,{children:o}),(0,u.jsx)(f.T,{children:(0,u.jsx)(Et,{data:e})}),(0,u.jsx)(Pt,{data:e,isLastPosition:i}),(e.reviewFeedback||e.reportReview)&&(0,u.jsx)(f.T,{children:(0,u.jsxs)(v.X,{direction:"row",space:"one",children:[(0,u.jsx)(p.C,{children:(0,u.jsx)(Tt,{data:e})}),(0,u.jsx)(p.C,{children:(0,u.jsx)(xt,{data:e,propertyId:t,reviewId:d})})]})}),(0,u.jsx)(f.T,{children:(0,u.jsx)(ht,{data:e})})]})},`review_${d}_${n}_${r}`)})},Kt=({data:e,propertyId:t,isLastPosition:i})=>e.overlayLayoutStrategy===Ve.SUMMARY_FORWARD?(0,u.jsx)(Wt,{data:e,propertyId:t,isLastPosition:i}):(0,u.jsx)(Jt,{data:e,propertyId:t,isLastPosition:i});Kt.displayName="Review",Kt.fragment=Ot;const Xt=a.J1`
  fragment DetailsFragment on ProductReviews {
    details {
      ...ReviewFragment
      __typename
    }
  }
  ${Kt.fragment}
`,Qt=({data:e,propertyId:t})=>{const{details:i}=e,r=(0,n.useRef)(null),l=function(){const e=(0,I.zy)();return(0,n.useMemo)(()=>new URLSearchParams(e.search),[e.search])}(),a=function(){const e=(0,I.Zp)(),t=(0,I.zy)();return(0,n.useCallback)(i=>{const n=new URLSearchParams(t.search);n.delete(i),e(`${t.pathname}?${n}`,{replace:!0})},[e,t])}();return(0,n.useEffect)(()=>{if(l.get("reviewId")){var e,t;const i=window.matchMedia("(prefers-reduced-motion: reduce)").matches;null===(e=r.current)||void 0===e||e.scrollIntoView({behavior:i?"auto":"smooth",block:"start"}),null===(t=r.current)||void 0===t||t.focus(),a("reviewId")}},[a,l]),i&&0!==i.length?(0,u.jsx)(k.g,{children:i.map((e,n)=>{const{id:a}=e;return(0,u.jsx)(A.E,{padded:["blockstart","blockend"],border:n<i.length-1?"bottom":void 0,"data-stid":"product-reviews-list-item",children:(0,u.jsx)("div",{ref:e.id===l.get("reviewId")?r:null,tabIndex:e.id===l.get("reviewId")?0:void 0,children:(0,u.jsx)(Kt,{data:e,propertyId:t,isLastPosition:n===i.length-1},`review-card-${n}`)})},`product-review-${a}`)})}):null};Qt.displayName="Details",Qt.fragment=Xt;const Ut=a.J1`
  fragment FilteredReviewsFragment on ProductReviewDetails {
    reviews {
      impressionAnalytics
      ...PaginateFragment
      ...NoResultsMessageFragment
      ...DetailsFragment
    }
  }
  ${tt.fragment}
  ${at.fragment}
  ${Qt.fragment}
`,Yt=({data:e,propertyId:t,fetchMore:i,showNextPage:r,loading:l,clearFilters:a,hideMoreReviewsButton:s=!1,hasSearchFilter:o=!0})=>{var d;const v=(0,n.useRef)(null);if(l)return(0,u.jsx)(nt,{times:8,"data-stid":"reviews-filter-applied-loading"});if(!e||!e.reviews)return null;const{reviews:p}=e,m={clientPayload:Ue(Qe.reviewsDetailsSection.name,Qe.reviewsDetailsSection.version),serverPayload:p.impressionAnalytics};s&&null!=(null===(d=p.details)||void 0===d?void 0:d.length)&&null===v.current&&(v.current=p.details.length);const h=s&&null!=v.current?v.current:null;return(0,u.jsx)(c.E0,{eventData:m,children:(0,u.jsxs)("section",{"data-stid":"reviews-container",children:[(0,u.jsx)(Qt,{data:null!=h&&p.details?we(we({},p),{},{details:p.details.slice(0,h)}):p,propertyId:t}),!s&&(0,u.jsx)(at,{data:p,fetchMore:i,page:(()=>{var e;const t=(null===(e=p.details)||void 0===e?void 0:e.length)||0;return Math.ceil(t/10)})(),showNextPage:r}),(0,u.jsx)(tt,{data:p,handleClick:a,hasSearchFilter:o})]})})};Yt.displayName="FilteredReviews",Yt.fragment=Ut;const Ht=()=>(0,u.jsxs)(j.w,{space:"six",children:[(0,u.jsx)(f.T,{children:(0,u.jsxs)(j.w,{rows:["48px"],columns:12,space:"two",children:[(0,u.jsx)(f.T,{colSpan:10,children:(0,u.jsx)(g.M,{imageFit:"cover",children:(0,u.jsx)(w.R,{type:"block",cornerRadius:8})})}),(0,u.jsx)(f.T,{colSpan:2,children:(0,u.jsx)(g.M,{imageFit:"cover",children:(0,u.jsx)(w.R,{type:"block",cornerRadius:48})})})]})}),(0,u.jsx)(f.T,{children:(0,u.jsxs)(j.w,{rows:["48px"],columns:12,space:"six",children:[(0,u.jsx)(f.T,{colSpan:6,children:(0,u.jsx)(g.M,{imageFit:"cover",children:(0,u.jsx)(w.R,{type:"block",cornerRadius:8})})}),(0,u.jsx)(f.T,{colSpan:6,children:(0,u.jsx)(g.M,{imageFit:"cover",children:(0,u.jsx)(w.R,{type:"block",cornerRadius:8})})})]})})]}),Zt=({times:e})=>(0,u.jsxs)(j.w,{space:"three","data-stid":"product-reviews-sorting-and-filters-placeholder",children:[(0,u.jsx)(f.T,{children:(0,u.jsx)(Ht,{})}),(0,u.jsx)(f.T,{children:(0,u.jsx)(nt,{times:e})})]}),qt=()=>(0,u.jsxs)(v.X,{direction:"column",space:"four",children:[(0,u.jsx)(p.C,{children:(0,u.jsx)(w.R,{type:"line",lineHeight:12,lineLength:"secondary"})}),(0,u.jsx)(p.C,{children:(0,u.jsxs)(v.X,{space:"two",children:[(0,u.jsx)(p.C,{children:(0,u.jsx)(w.R,{type:"line",lineHeight:32,lineLength:"primary"})}),(0,u.jsx)(p.C,{children:(0,u.jsx)(w.R,{type:"line",lineHeight:32,lineLength:"primary"})})]})})]}),ei=({times:e})=>(0,u.jsxs)(v.X,{direction:"column",space:"twelve","data-stid":"product-reviews-sorting-and-filters-placeholder",children:[(0,u.jsx)(p.C,{children:(0,u.jsx)(qt,{})}),(0,u.jsx)(p.C,{children:(0,u.jsx)(rt,{times:e})})]}),ti=a.J1`
  fragment SearchTextFragment on SortAndFilterViewModel {
    sortAndFilter {
      name
      label
      options {
        label
        isSelected
        optionValue
        description
        clickAnalytics {
          linkName
          referrerId
        }
        clickStreamAnalytics
      }
      graphic {
        ...SearchTextIconFragment
      }
      clickStreamAnalytics
      submittedAnalytics
      initiatedAnalytics
    }
  }

  fragment SearchTextIconFragment on Icon {
    description
    id
    token
  }
`,ii=({data:e,filters:t,onSubmitFilters:i})=>{const[r,l]=(0,n.useState)(t.search),a=e.sortAndFilter.find(e=>"reviewsSearch"===e.name),s=(0,c.iQ)();(0,n.useEffect)(()=>{t.isFilterApplied||l(t.search)},[t]);const o=(0,n.useMemo)(()=>we(we({},t),{},{search:r,travelerType:ue.TravelerType,isFilterApplied:!0}),[t,r]),d=(0,n.useCallback)(e=>{t.search!==r&&i(o),e.preventDefault()},[t.search,i,r,o]),m=(0,n.useCallback)(e=>{const{value:n}=e.target;l(n),""===n.trim()&&t.search&&i(we(we({},t),{},{isFilterApplied:!0,search:""}))},[t,i]),h=(0,n.useCallback)(()=>{t.search?i(we(we({},t),{},{isFilterApplied:!0,search:""})):l("")},[t,i]),g=(0,n.useCallback)(()=>{const e=document.getElementById("search-input-box");null==e||e.scrollIntoView({behavior:"smooth",block:"start"}),(null==a?void 0:a.initiatedAnalytics)&&s({clientPayload:Ue(Qe.reviewSearchInit.name,Qe.reviewSearchInit.version),serverPayload:a.initiatedAnalytics})},[a,s]);if(!(a&&a.label&&a.name&&a.graphic))return null;const{label:y,name:x,graphic:j,submittedAnalytics:f}=a,{id:w,description:R,token:F}=j,T=(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(p.C,{children:(0,u.jsx)(q.V,{size:300,id:"search-input-box",label:y,name:x,onChange:m,hasClearButton:!0,value:r,onClick:g,handleClear:h,autoComplete:"off"})}),(0,u.jsx)(p.C,{children:(0,u.jsx)(S.y,{size:b.V.LARGE,type:"submit",name:R,title:R,id:"search-btn","aria-label":R,disabled:!1,children:(0,u.jsx)(X.LD,{name:F,id:w})})})]});return(0,u.jsx)(Z.m,{onSubmit:e=>{d(e),0!==(null==r?void 0:r.trim().length)&&s({clientPayload:Ue(Qe.reviewSearchSubmit.name,Qe.reviewSearchSubmit.version),serverPayload:f})},children:(0,u.jsxs)(te.LM,{children:[(0,u.jsx)(te.NP,{children:(0,u.jsx)(v.X,{space:"four",children:T})}),(0,u.jsx)(te.rw,{children:(0,u.jsx)(v.X,{space:"two",children:T})})]})})};ii.fragment=ti,ii.displayName="SearchBox";const ni=a.J1`
  fragment FilterViewModelFragment on FilterViewModel {
    name
    label
    options {
      label
      isSelected
      optionValue
      description
      clickAnalytics {
        linkName
        referrerId
      }
      clickStreamAnalytics
    }
    graphic {
      ...SearchTextIconFragment
    }
    clickStreamAnalytics
    submittedAnalytics
    initiatedAnalytics
  }

  fragment SearchTextIconFragment on Icon {
    description
    id
    token
  }
`,ri=({data:e,value:t,onSubmit:i,optionSelectEvent:n,openEvent:r})=>{const l=(0,c.iQ)(),{name:a,label:s,options:o,clickStreamAnalytics:d}=e;return(0,u.jsx)(ee._,{id:a,label:s||"",value:t,name:a,emptyState:!1,onChange:e=>{const t=e.currentTarget.value;i(t);const r=o.find(e=>e.optionValue===t);(null==r?void 0:r.clickStreamAnalytics)&&l({clientPayload:Ue(n.name,n.version),serverPayload:r.clickStreamAnalytics})},onClick:()=>{d&&l({clientPayload:Ue(r.name,r.version),serverPayload:d})},children:(0,u.jsx)(u.Fragment,{children:o.map((e,t)=>e.optionValue&&e.label&&(0,u.jsx)("option",{value:e.optionValue,label:e.label,"aria-selected":e.isSelected,children:e.label},t))})})};ri.displayName="FilterViewModel",ri.fragment=ni;const li=a.J1`
  fragment SortTypeFragment on SortAndFilterViewModel {
    sortAndFilter {
      ...FilterViewModelFragment
    }
  }
  ${ri.fragment}
`,ai=({data:e,filters:t,onSubmitFilters:i})=>{const r=e.sortAndFilter.find(e=>"sortBy"===e.name);(0,n.useEffect)(()=>{var e;if(!t.isFilterApplied&&(null==r||null===(e=r.options)||void 0===e?void 0:e.length)){const e=null==r?void 0:r.options.find(e=>!0===e.isSelected);(null==e?void 0:e.optionValue)&&t.sortBy!==e.optionValue&&i(t=>we(we({},t),{},{sortBy:null==e?void 0:e.optionValue}))}},[null==r?void 0:r.options,t.sortBy,t.isFilterApplied,i]);const l=(0,n.useCallback)(e=>{i(t=>we(we({},t),{},{sortBy:e,search:ue.Search,isFilterApplied:!0}))},[i]);return r&&r.options&&r.label&&0!==r.options.length?(0,u.jsx)(ri,{data:r,value:t.sortBy,onSubmit:l,optionSelectEvent:Qe.sortBy,openEvent:Qe.sortByOpened}):null};ai.displayName="SortType",ai.fragment=li;const si=a.J1`
  fragment TravelerTypeFragment on SortAndFilterViewModel {
    sortAndFilter {
      ...FilterViewModelFragment
    }
  }
  ${ri.fragment}
`,oi=({data:e,filters:t,onSubmitFilters:i})=>{var r;const l=e.sortAndFilter.find(e=>"travelerType"===e.name);(0,n.useEffect)(()=>{if(!t.isFilterApplied){const e=null==l?void 0:l.options.find(e=>!0===e.isSelected);i(t=>we(we({},t),{},{travelerType:(null==e?void 0:e.optionValue)||ue.TravelerType}))}},[l,i,t.isFilterApplied]);const a=(0,n.useCallback)(e=>{i(t=>we(we({},t),{},{travelerType:e,search:ue.Search,isFilterApplied:!0}))},[i]);return(null==l?void 0:l.label)&&0!==(null===(r=l.options)||void 0===r?void 0:r.length)?(0,u.jsx)(ri,{data:l,value:t.travelerType,onSubmit:a,optionSelectEvent:Qe.travelerType,openEvent:Qe.travelerTypeOpened}):null};oi.displayName="TravelerType",oi.fragment=si;const di=a.J1`
  fragment SortAndFiltersFragment on ProductReviewDetails {
    sortAndFilter {
      ...TravelerTypeFragment
      ...SortTypeFragment
      ...SearchTextFragment
      __typename
    }
  }
  ${oi.fragment}
  ${ai.fragment}
  ${ii.fragment}
`,ci=({data:e,filters:t,onSubmitFilters:i})=>{if(!e||!e.sortAndFilter)return null;const{sortAndFilter:n}=e;return(0,u.jsx)("section",{"data-stid":"reviews-filters",children:(0,u.jsxs)(j.w,{space:"six",children:[(0,u.jsx)(f.T,{children:(0,u.jsx)(ii,{data:n,filters:t,onSubmitFilters:i})}),(0,u.jsx)(f.T,{children:(0,u.jsxs)(j.w,{columns:2,space:"six",children:[(0,u.jsx)(f.T,{children:(0,u.jsx)(ai,{data:n,filters:t,onSubmitFilters:i})}),(0,u.jsx)(f.T,{children:(0,u.jsx)(oi,{data:n,filters:t,onSubmitFilters:i})})]})})]})})};ci.displayName="SortAndFilters",ci.fragment=di;const ui=a.J1`
  fragment SearchToggleButtonFragment on Icon {
    description
    id
    token
  }
`,vi=({data:e,onClick:t})=>{const{id:i,description:n,token:r}=e;return(0,u.jsx)(R.y,{size:b.V.SMALL,name:n,title:n,id:"search-toggle-btn","aria-label":n,type:"button",onClick:t,children:(0,u.jsx)(X.LD,{name:r,id:i})})};vi.fragment=ui,vi.displayName="SearchToggleButton";const pi=["children","DialogComponent"],mi=e=>{let{children:t,DialogComponent:i}=e;const{triggerRef:n,isVisible:r,onDismiss:l,inlineTrailing:a,width:s}=function(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;i[n]=e[n]}return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],t.includes(i)||{}.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}(e,pi),o={position:{inline:a?"trailing":"leading",block:"trailing"},type:"popover",width:null!=s?s:0,applyBlockStartMargin:!0,autoFocus:!0,autoPosition:!1,triggerRef:n,isVisible:r,onDismiss:l},d={type:"bottom",isVisible:r,triggerRef:n,fullWidth:!0,onDismiss:l};return(0,te.eg)({viewSizes:te.pf})===te.pf.SMALL?(0,u.jsx)(V.K,{isVisible:r,closeCallback:l,children:(0,u.jsx)(i,{children:(0,u.jsx)(N.t,we(we({},d),{},{onDismiss:l,children:t}))})}):(0,u.jsx)(V.K,{isVisible:r,children:(0,u.jsx)(N.t,we(we({},o),{},{children:t}))})};mi.displayName="shared-ui-FilterSheetWrapper";const hi=a.J1`
  fragment SheetFooterFragment on ShoppingButton {
    accessibility
    buttonType
    disabled
    primary
    actions {
      accessibility
      actionId
      analyticsPayload
      triggerType
    }
  }
`,gi=({data:e,onDoneClick:t,eventName:i,extraEventDetails:n})=>{const{accessibility:l,primary:a,actions:s}=e,[d]=s||[],m=(0,c.iQ)();return a&&(0,u.jsx)(r.N,{border:["blockstart"],padding:{block:"four",inlineend:"six"},children:(0,u.jsx)(v.X,{justifyContent:"end",space:"two",children:(0,u.jsx)(p.C,{children:(0,u.jsx)(S.y,we(we({},{onClick:()=>{t&&(t(),(null==d?void 0:d.analyticsPayload)&&i&&m((0,o.Ft)(i,d.analyticsPayload,{searchRequest:n})))},"aria-label":l||void 0}),{},{children:a}))})})})};gi.displayName="SheetFooter",gi.fragment=hi;const yi=a.J1`
  fragment ReviewFilterToolbarFragment on UIToolbar {
    __typename
    primary
    actions {
      primary {
        accessibility
        analytics {
          urls
        }
        disabled
        icon {
          id
          description
          theme
          title
        }
        primary
      }
      secondaries {
        accessibility
        primary
      }
    }
  }
`,xi=e=>{var t;const{data:i,onCloseButtonClick:l,onClearAllButtonClick:a,id:s}=e,{actions:o,primary:d}=i,{primary:c,secondaries:v}=o,p=null!==(t=c.accessibility)&&void 0!==t?t:"",m=(0,n.useCallback)(()=>{null==l||l()},[l]);if(!d||!Array.isArray(v)||0===v.length)return null;const[h]=v;return(0,u.jsx)(r.N,{padding:{medium:{inlinestart:"six",inlineend:"three"},small:{inlinestart:"three",inlineend:"three"}},children:(0,u.jsx)(z.p,{toolbarTitle:d,navigationContent:l?{onClick:m,navIconLabel:p,navButtonId:s}:void 0,toolbarActionContent:h&&(0,u.jsx)(J.p,{onClick:a,"aria-label":h.accessibility||"",children:h.primary})})})};xi.displayName="Toolbar",xi.fragment=yi;const ji=a.J1`
  fragment ReviewsFilterViewModelFragment on FilterViewModel {
    title
    label
    submitButton {
      ...SheetFooterFragment
    }
    toolbar {
      ...ReviewFilterToolbarFragment
    }
    options {
      default
      disabled
      label
      isSelected
      optionValue
      description
      clickAnalytics {
        linkName
        referrerId
        __typename
      }
      clickStreamAnalytics
      __typename
    }
    graphic {
      ...SearchToggleButtonFragment
      __typename
    }
    clickStreamAnalytics
    submittedAnalytics
    initiatedAnalytics
    __typename
  }
  ${vi.fragment}
  ${xi.fragment}
  ${gi.fragment}
`,fi=({options:e,selectedRadioOption:t,onChange:i,groupName:n="radioGroup",legendLabel:r=" ",idPrefix:l="radio"})=>(0,u.jsx)(u.Fragment,{children:e&&(0,u.jsx)(le.S,{group:n,legendLabel:r,onChange:i,selected:t,children:e.map(e=>(0,u.jsx)(re.P,{id:`${l}-${e.optionValue}`,name:`${l}-${e.optionValue}`,a11yLabel:e.label||"",label:e.label||"",value:e.optionValue||""},`${l}-${e.optionValue}`))},`${l}-${n}`)});function wi(e,t,i=!0){(0,n.useEffect)(()=>{function n(n){const r=n.target;i&&e.current&&!e.current.contains(r)&&t()}return i&&(document.addEventListener("pointerdown",n),document.addEventListener("mousedown",n),document.addEventListener("touchstart",n)),()=>{document.removeEventListener("pointerdown",n),document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[e,t,i])}fi.displayName="shared-ui-RadioButtonGroupSection";const bi=a.J1`
  fragment TravelerTypePillFragment on SortAndFilterViewModel {
    sortAndFilter {
      ...ReviewsFilterViewModelFragment
    }
  }
  ${ji}
`,Si=({data:e,filters:t,onSubmit:i,activeFilter:r,setActiveFilter:l})=>{const a=1===(0,ne.useExperiment)("reviews_multi_filter_ability",!1).exposure.bucket,[s,d]=(0,n.useState)(!1),v=(0,te.eg)({viewSizes:te.pf})===te.pf.SMALL,p=(0,n.useMemo)(()=>e.sortAndFilter.find(e=>"travelerType"===e.title),[e.sortAndFilter]),[m,h]=(0,n.useState)(""),[g,y]=(0,n.useState)(!1),[x,{openDialog:j,closeDialog:f},w]=(0,W.useDialog)(v?"reviews-traveler-type-filter-small":"reviews-traveler-type-filter","pwaDialogNested"),b=(0,n.useRef)(null),S=(0,n.useRef)(null),R=(0,c.iQ)(),F=(0,n.useMemo)(()=>(null==p?void 0:p.options)||[],[null==p?void 0:p.options]),T=(0,n.useMemo)(()=>{const e=F.find(e=>null==e?void 0:e.isSelected),t=F.find(e=>null==e?void 0:e.default);return e||t},[F]);(0,n.useEffect)(()=>{T&&h(T.optionValue||"")},[T]),(0,n.useEffect)(()=>{if(F){const e=F.find(e=>!0===(null==e?void 0:e.default));""===(null==t?void 0:t.travelerType)||(null==t?void 0:t.travelerType)===(null==e?void 0:e.optionValue)?d(!1):(null==t?void 0:t.travelerType)&&d(!0)}},[null==t?void 0:t.travelerType,F]);const k=(0,n.useCallback)(()=>{v&&(g||j()),y(!g)},[g,v,j]),A=(0,n.useCallback)(()=>{v&&f(),y(!1)},[f,v]),I=(0,n.useCallback)(()=>{g||(T&&h(T.optionValue||""),(null==p?void 0:p.clickStreamAnalytics)&&R((0,o.Ft)(Qe.travelerTypeOpened.name,null==p?void 0:p.clickStreamAnalytics)),null==l||l(ve.TravelerType)),k()},[T,g,l,k,R,null==p?void 0:p.clickStreamAnalytics]),C=(0,n.useCallback)(e=>{const{value:t}=e.target;h(t);const i=F.find(e=>e.optionValue===t);(null==i?void 0:i.clickStreamAnalytics)&&R((0,o.Ft)(Qe.travelerType.name,i.clickStreamAnalytics))},[F,R]),D=(0,n.useCallback)(()=>{const e=F.find(e=>!0===(null==e?void 0:e.default));e&&h(e.optionValue||"")},[F]),_=(0,n.useCallback)(()=>{y(!1)},[]),P=(0,n.useCallback)(()=>{var e,n,r;F.find(e=>e.optionValue===m)&&m!==(null==t?void 0:t.travelerType)&&(i&&(i({search:a&&null!==(e=null==t?void 0:t.search)&&void 0!==e?e:"",withPhotos:a&&null!==(n=null==t?void 0:t.withPhotos)&&void 0!==n?n:"",sortBy:null!==(r=null==t?void 0:t.sortBy)&&void 0!==r?r:"",travelerType:null!=m?m:"",isFilterApplied:!0}),d(!0)));A()},[A,t,i,F,m]);if((0,n.useEffect)(()=>{!v&&r&&r!==ve.TravelerType&&A()},[r,A,v]),(0,n.useEffect)(()=>{v&&!x&&_()},[_,v,x]),wi(S,A,g&&!v),!p||!p.label||!p.title)return null;const{label:M,title:E,toolbar:$,submitButton:N}=p;return(0,u.jsx)("div",{ref:S,children:(0,u.jsxs)(Y.P,{type:"relative",children:[(0,u.jsx)(ie.B,{id:E,triggerPill:!0,onClick:I,selected:s,children:M},E),(0,u.jsx)(mi,{triggerRef:b,isVisible:g,DialogComponent:w,onDismiss:_,width:400,children:(0,u.jsxs)(u.Fragment,{children:[$&&(0,n.createElement)(xi,we(we({},v?{onCloseButtonClick:A}:{}),{},{onClearAllButtonClick:D,id:"traveler-type-filter-toolbar",data:$,key:"traveler-type-filter-toolbar"})),(0,u.jsx)(L.Y,{padded:!0,children:(0,u.jsx)(fi,{options:F?[...F]:[],selectedRadioOption:m,onChange:C,groupName:"travelerType",idPrefix:"traveler-type"},"traveler-type-filter-content-radio-button-group")},"traveler-type-filter-content"),N&&(0,u.jsx)(gi,{data:N,onDoneClick:P,eventName:Qe.travelerTypeApplied.name,extraEventDetails:{filters:[{category:m}]}},"traveler-type-filter-footer")]})},"traveler-type-filter-sheet")]})})};Si.displayName="TravelerTypePill",Si.fragment=bi;const Ri=a.J1`
  fragment SortTypeLinkFragment on SortAndFilterViewModel {
    sortAndFilter {
      ...ReviewsFilterViewModelFragment
    }
  }
  ${ji}
`,Fi=({data:e,filters:t,onSubmit:i,activeFilter:r,setActiveFilter:l})=>{const a=1===(0,ne.useExperiment)("reviews_multi_filter_ability",!1).exposure.bucket,s=(0,te.eg)({viewSizes:te.pf})===te.pf.SMALL,d=(0,n.useMemo)(()=>e.sortAndFilter.find(e=>"sortBy"===e.title),[e.sortAndFilter]),[m,g]=(0,n.useState)(null),[y,x]=(0,n.useState)(""),[j,{openDialog:f,closeDialog:w},S]=(0,W.useDialog)(s?"reviews-sort-filter-small":"reviews-sort-filter","pwaDialogNested"),[R,F]=(0,n.useState)(!1),T=(0,n.useRef)(null),k=(0,n.useRef)(null),A=(0,c.iQ)(),I=(0,n.useMemo)(()=>(null==d?void 0:d.options)||[],[null==d?void 0:d.options]),C=(0,n.useMemo)(()=>{const e=I.find(e=>null==e?void 0:e.isSelected),t=I.find(e=>null==e?void 0:e.default);return e||t},[I]);(0,n.useEffect)(()=>{C&&(g(C),x(C.optionValue||""))},[C]);const D=(0,n.useCallback)(()=>{s&&(R||f()),F(!R)},[R,s,f]),_=(0,n.useCallback)(()=>{s&&w(),F(!1)},[w,s]),P=(0,n.useCallback)(()=>{R||(C&&x(C.optionValue||""),(null==d?void 0:d.clickStreamAnalytics)&&A((0,o.Ft)(Qe.sortByOpened.name,null==d?void 0:d.clickStreamAnalytics)),null==l||l(ve.SortBy)),D()},[C,R,l,null==d?void 0:d.clickStreamAnalytics,D,A]),M=(0,n.useCallback)(e=>{var n,r,l,s;(g(e),x(e.optionValue||""),e.clickStreamAnalytics&&A((0,o.Ft)(Qe.sortBy.name,e.clickStreamAnalytics)),i&&e.optionValue!==(null==t?void 0:t.sortBy))&&i({search:a&&null!==(n=null==t?void 0:t.search)&&void 0!==n?n:"",withPhotos:a&&null!==(r=null==t?void 0:t.withPhotos)&&void 0!==r?r:"",travelerType:a&&null!==(l=null==t?void 0:t.travelerType)&&void 0!==l?l:"",sortBy:null!==(s=e.optionValue)&&void 0!==s?s:"",isFilterApplied:!0});_()},[_,t,i,A]),E=(0,n.useCallback)(e=>{const{value:t}=e.target;x(t);const i=I.find(e=>e.optionValue===t);(null==i?void 0:i.clickStreamAnalytics)&&A((0,o.Ft)(Qe.sortBy.name,i.clickStreamAnalytics))},[I,A]),$=(0,n.useCallback)(()=>{const e=I.find(e=>!0===(null==e?void 0:e.default));e&&x(e.optionValue||"")},[I]),N=(0,n.useCallback)(()=>{F(!1)},[]),B=(0,n.useCallback)(()=>{const e=I.find(e=>e.optionValue===y);var n,r,l;e&&e.optionValue!==(null==t?void 0:t.sortBy)&&(g(e),i&&i({search:a&&null!==(n=null==t?void 0:t.search)&&void 0!==n?n:"",withPhotos:a&&null!==(r=null==t?void 0:t.withPhotos)&&void 0!==r?r:"",travelerType:a&&null!==(l=null==t?void 0:t.travelerType)&&void 0!==l?l:"",sortBy:null!=y?y:"",isFilterApplied:!0}));_()},[_,t,i,I,y]);if((0,n.useEffect)(()=>{!s&&r&&r!==ve.SortBy&&_()},[r,_,s]),(0,n.useEffect)(()=>{s&&!j&&N()},[N,j,s]),wi(k,_,R&&!s),!d||!d.label||!d.title)return null;const{label:V,toolbar:O,submitButton:z}=d;return(0,u.jsxs)(v.X,{direction:"row",space:"two",alignItems:"center",justifyContent:"end",children:[!s&&(0,u.jsx)(p.C,{children:(0,u.jsx)("div",{children:(0,u.jsxs)(h.D,{align:"right",children:[V," "]})})}),(0,u.jsx)(p.C,{children:(0,u.jsx)(Y.P,{type:"relative",children:(0,u.jsxs)("div",{ref:k,children:[(0,u.jsx)(Q.i,{children:(0,u.jsx)("button",{type:"button",role:"link",onClick:P,ref:T,id:"sort-by-button","data-stid":"sort-by-button",children:(0,u.jsxs)(v.X,{direction:"row",alignItems:"center",space:"one",children:[null==m?void 0:m.label,(0,u.jsx)(X.LD,{name:"expand_more",id:"expand_more"})]})})}),(0,u.jsx)(mi,{triggerRef:T,isVisible:R,inlineTrailing:!0,DialogComponent:S,onDismiss:N,width:200,children:(0,u.jsx)(u.Fragment,{children:s?(0,u.jsxs)(u.Fragment,{children:[O&&(0,u.jsx)(xi,{onCloseButtonClick:_,onClearAllButtonClick:$,id:"sort-and-filter-sort-by-toolbar",data:O},"sort-and-filter-sort-by-toolbar"),(0,u.jsx)(L.Y,{padded:!0,children:(0,u.jsx)(fi,{options:I?[...I]:[],selectedRadioOption:y,onChange:E,groupName:"sortBy",idPrefix:"sort"},"sort-and-filters-revamp-sheet-content-radio-button-group")},"sort-and-filters-revamp-sheet-content"),z&&(0,u.jsx)(gi,{data:z,onDoneClick:B,extraEventDetails:{sort_type:y},eventName:Qe.sortByApplied.name},"sort-and-filters-revamp-sheet-footer")]}):(0,u.jsx)(ae.I,{children:I.map((e,t)=>e.optionValue&&e.label&&(0,u.jsxs)(se.P,{active:e.label===(null==m?void 0:m.label),children:[(0,u.jsx)(oe.x,{children:(0,u.jsx)(b.u,{onClick:()=>M(e),children:e.label})}),e.label]},`sort-${e.optionValue}-${t}`))})})},"sort-type-filter-sheet")]})})})]})};Fi.displayName="SortTypeLink",Fi.fragment=Ri;const Ti=a.J1`
  fragment SearchInputFragment on SortAndFilterViewModel {
    sortAndFilter {
      ...ReviewsFilterViewModelFragment
    }
  }
  ${ji}
`,ki=(0,n.forwardRef)(({data:e,filters:t,onSearchSubmit:i},r)=>{var l;const a=1===(0,ne.useExperiment)("reviews_multi_filter_ability",!1).exposure.bucket,s=(0,n.useMemo)(()=>e.sortAndFilter.find(e=>"reviewsSearch"===e.title),[e.sortAndFilter]),[d,m]=(0,n.useState)((null==t?void 0:t.search)||""),h=(0,c.iQ)();(0,n.useEffect)(()=>{""===(null==t?void 0:t.search)&&m("")},[t]);const g=(0,n.useCallback)(e=>{m(e.target.value),""===e.target.value.trim()&&(null==t?void 0:t.search)&&i&&i(we(we({},t),{},{isFilterApplied:!0,search:""}))},[t,i]),y=(0,n.useCallback)(()=>{(null==s?void 0:s.initiatedAnalytics)&&h((0,o.Ft)(Qe.reviewSearchInit.name,s.initiatedAnalytics))},[h,s]),x=(0,n.useCallback)(e=>{var n,r,l;"Enter"===e.key&&(null==d?void 0:d.trim().length)>0&&s&&(s.submittedAnalytics&&h((0,o.Ft)(Qe.reviewSearchSubmit.name,s.submittedAnalytics)),i&&d!==(null==t?void 0:t.search)&&i({search:d,sortBy:a&&null!==(n=null==t?void 0:t.sortBy)&&void 0!==n?n:"",travelerType:a&&null!==(r=null==t?void 0:t.travelerType)&&void 0!==r?r:"",withPhotos:a&&null!==(l=null==t?void 0:t.withPhotos)&&void 0!==l?l:"",isFilterApplied:!0}))},[d,s,i,h,t]),j=(0,n.useCallback)(()=>{m(""),i&&t&&i(we(we({},t),{},{isFilterApplied:!0,search:""}))},[t,i]);if(!(null==s?void 0:s.label)||!(null==s?void 0:s.title))return null;const{label:f,title:w}=s;return(0,u.jsx)(v.X,{direction:"row",children:(0,u.jsx)(p.C,{children:(0,u.jsx)(q.V,{size:300,id:"search-input-box",value:d,onClick:y,label:f,name:w,onChange:g,onKeyDown:x,hasClearButton:!0,handleClear:j,domRef:null!==(l=r)&&void 0!==l?l:null})})})});ki.fragment=Ti,ki.displayName="SearchInput";const Ai=a.J1`
  fragment PhotosFilterPillFragment on SortAndFilterViewModel {
    sortAndFilter {
      ...ReviewsFilterViewModelFragment
    }
  }
  ${ji}
`,Ii=({data:e,filters:t,onSearchSubmit:i,setActiveFilter:r})=>{const l=1===(0,ne.useExperiment)("reviews_multi_filter_ability",!1).exposure.bucket,[a,s]=(0,n.useState)(!1),d=e.sortAndFilter.find(e=>"reviewsWithPhotos"===e.title),v=(0,c.iQ)();(0,n.useEffect)(()=>{s("true"===(null==t?void 0:t.withPhotos))},[null==t?void 0:t.withPhotos]);const p=(0,n.useCallback)(e=>{if(s(!a),null==r||r(ve.ReviewsWithPhotos),i){var n,c,u,p;i({search:l&&null!==(n=null==t?void 0:t.search)&&void 0!==n?n:"",sortBy:l&&null!==(c=null==t?void 0:t.sortBy)&&void 0!==c?c:"",travelerType:l&&null!==(u=null==t?void 0:t.travelerType)&&void 0!==u?u:"",withPhotos:`${e.target.checked}`,isFilterApplied:!0});const r=null==d||null===(p=d.options)||void 0===p||null===(p=p.find(t=>(null==t?void 0:t.label)===`${e.target.checked}`&&(null==t?void 0:t.clickStreamAnalytics)))||void 0===p?void 0:p.clickStreamAnalytics;e.target.checked?v((0,o.Ft)(Qe.reviewPhotosSelected.name,r)):v((0,o.Ft)(Qe.reviewPhotosDeselected.name,r))}},[t,a,i,null==d?void 0:d.options,r,v]);if(!d||!d.label||!d.title)return null;const{label:m,title:h}=d;return(0,u.jsx)(ie.B,{id:h,name:m,checked:a,onChange:p,children:m},h)};Ii.displayName="PhotosFilterPill",Ii.fragment=Ai;const Ci=a.J1`
  fragment SortAndFiltersRevampFragment on ProductReviewDetails {
    sortAndFilter {
      ...TravelerTypePillFragment
      ...SortTypeLinkFragment
      ...SearchInputFragment
      ...PhotosFilterPillFragment
      __typename
    }
  }
  ${Ii.fragment}
  ${ki.fragment}
  ${Fi.fragment}
  ${Si.fragment}
`,Di=({data:e,filters:t,onFiltersChange:i})=>{var a;const[s,o]=(0,n.useState)(!1),[d,c]=(0,n.useState)(null),m=(0,n.useRef)(null);if((0,n.useEffect)(()=>{s&&(setTimeout(()=>{var e;null===(e=m.current)||void 0===e||e.focus()},0),c(ve.Search))},[s]),!e||!e.sortAndFilter)return null;const{sortAndFilter:h}=e,g=null===(a=h.sortAndFilter)||void 0===a||null===(a=a.find(e=>"reviewsSearch"===e.title))||void 0===a?void 0:a.graphic;return(0,u.jsx)("section",{"data-stid":"reviews-filters",children:(0,u.jsxs)(j.w,{space:g?"four":"two",children:[(0,u.jsx)(f.T,{children:(0,u.jsxs)(j.w,{space:"two",children:[(0,u.jsxs)(v.X,{direction:"row",space:"two",children:[(0,u.jsx)(p.C,{children:g&&"Icon"===g.__typename&&(0,u.jsx)(vi,{data:g,onClick:()=>{o(e=>!e)}})}),(0,u.jsx)(p.C,{children:(0,u.jsx)(Si,{data:h,filters:t,onSubmit:i,activeFilter:d,setActiveFilter:c})}),(0,u.jsx)(p.C,{children:(0,u.jsx)(Ii,{data:h,filters:t,onSearchSubmit:i,setActiveFilter:c})})]}),s&&(0,u.jsx)(ki,{data:h,ref:m,filters:t,onSearchSubmit:i})]})}),(0,u.jsx)(f.T,{children:(0,u.jsx)(r.N,{children:(0,u.jsx)("div",{children:(0,u.jsx)(l.j,{blockMargin:"unset"})})})}),(0,u.jsx)(f.T,{children:(0,u.jsx)(r.N,{margin:{blockend:"three"},children:(0,u.jsx)("div",{children:(0,u.jsx)(Fi,{data:h,filters:t,onSubmit:i,activeFilter:d,setActiveFilter:c})})})})]})})};Di.displayName="SortAndFiltersRevamp",Di.fragment=Ci;const _i=a.J1`
  query PWAReviewsSortingAndFiltersQuery($productIdentifier: ProductIdentifierInput!, $context: ContextInput!) {
    productReviewDetails(productIdentifier: $productIdentifier, context: $context) {
      reviewsSectionHeading {
        ...EGDSStylizedTextFragment
      }
      ...SortAndFiltersFragment
      ...FilteredReviewsFragment
    }
  }
  ${o.Z3.fragment}
  ${ci.fragment}
  ${Yt.fragment}
`,Pi=a.J1`
  query PWAReviewsSortingAndFiltersRevampQuery($productIdentifier: ProductIdentifierInput!, $context: ContextInput!) {
    productReviewDetails(productIdentifier: $productIdentifier, context: $context) {
      reviewsSectionHeading {
        ...EGDSStylizedTextFragment
      }
      ...SortAndFiltersRevampFragment
      ...FilteredReviewsFragment
    }
  }
  ${o.Z3.fragment}
  ${Di.fragment}
  ${Yt.fragment}
`,Mi=({inputs:e,skipSsr:t,batchKey:i})=>{const[r,l]=(0,n.useState)(1),[o,d]=(0,n.useState)(!1),[c,v]=(0,n.useState)(pe),[p,m]=(0,n.useState)(!1),[h,g]=(0,n.useState)(pe),{context:y}=(0,s.R)(),x=e.productIdentifier.id,w={productIdentifier:{id:x,type:e.productIdentifier.type,travelSearchCriteria:(0,n.useMemo)(()=>Se(e.productIdentifier,0,h.sortBy,h.travelerType,h.search),[e.productIdentifier.travelSearchCriteria,h.search,h.sortBy,h.travelerType])},context:y},b=h.search.trim()!==pe.search?"cache-and-network":"cache-first",{data:S,previousData:R,error:F,loading:T,fetchMore:k}=(0,a.FP)(_i,{context:{batchKey:null!=i?i:"default-product-details-experience-batch-key",shouldLogPerformance:!0},fetchPolicy:b,variables:w,ssr:!t}),A=Xe(k,w);return(0,n.useEffect)(()=>{var e,t;((null==S||null===(e=S.productReviewDetails)||void 0===e||null===(e=e.reviews)||void 0===e||null===(e=e.details)||void 0===e?void 0:e.length)||0)>((null==R||null===(t=R.productReviewDetails)||void 0===t||null===(t=t.reviews)||void 0===t||null===(t=t.details)||void 0===t?void 0:t.length)||0)&&o&&d(!1)},[S,o,r,R]),(0,n.useEffect)(()=>{c.isFilterApplied&&!p&&(m(!0),g(c))},[c,p]),(0,n.useEffect)(()=>{c.isFilterApplied&&(null==S?void 0:S.productReviewDetails)&&(v(e=>we(we({},e),{},{isFilterApplied:!1})),l(1),m(!1))},[S]),F?null:(0,u.jsxs)(u.Fragment,{children:[T&&!c.isFilterApplied&&(0,u.jsx)(Zt,{times:8}),(0,u.jsx)("div",{"data-stid":"product-reviews-sorting-and-filters",children:(0,u.jsxs)(j.w,{space:"three",children:[(0,u.jsx)(f.T,{children:(0,u.jsx)(ci,{data:(null==S?void 0:S.productReviewDetails)||(null==R?void 0:R.productReviewDetails),filters:c,onSubmitFilters:v})}),(0,u.jsx)(f.T,{children:(0,u.jsx)(Yt,{data:null==S?void 0:S.productReviewDetails,propertyId:x,fetchMore:A,page:r,showNextPage:d,loading:c.isFilterApplied})})]})})]})};Mi.displayName="sharedui-ReviewsSortingAndFilters";const Ei=({inputs:e,skipSsr:t,batchKey:i,onSeeAllReviewsButtonData:l,onDialogToolbarData:c})=>{var v,p,m,h,g;const{context:y}=(0,s.R)(),x={productIdentifier:{id:e.productIdentifier.id,type:e.productIdentifier.type,travelSearchCriteria:(0,n.useMemo)(()=>Se(e.productIdentifier,0,pe.sortBy,pe.travelerType,pe.search),[e.productIdentifier.travelSearchCriteria])},context:y},{data:j,error:f,loading:w}=(0,a.FP)(Je,{context:{batchKey:null!=i?i:Re,shouldLogPerformance:!0},variables:x,ssr:!t}),b=null!==(v=null==j||null===(p=j.productReviewDetails)||void 0===p||null===(p=p.reviews)||void 0===p?void 0:p.seeAllReviewsButton)&&void 0!==v?v:null,S=null!==(m=null==j||null===(h=j.productReviewDetails)||void 0===h?void 0:h.dialogToolbar)&&void 0!==m?m:null;if((0,n.useEffect)(()=>{null==l||l(b),null==c||c(S)},[l,b,c,S]),f)return null;const{summary:R,disclaimer:F,categories:T,reviewSummary:k}=null!==(g=null==j?void 0:j.productReviewDetails)&&void 0!==g?g:{},{expando:A,reviewCategory:I}=null!=T?T:{};return(0,u.jsxs)("div",{"data-stid":"product-reviews-details-revamp",children:[w&&(0,u.jsx)(Me,{}),k?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o.XM,{data:k,trackingMode:o.tV.ON_LOAD}),F&&(0,u.jsx)(Te,{data:F})]}):R&&(0,u.jsx)(Ne,{data:R,disclaimer:null!=F?F:void 0}),(0,u.jsx)(d.jq,{inputs:{productIdentifier:{id:e.productIdentifier.id,type:e.productIdentifier.type,travelSearchCriteria:e.productIdentifier.travelSearchCriteria}}}),I&&(0,u.jsxs)(te.LM,{children:[(0,u.jsx)(te.NP,{children:(0,u.jsx)(r.N,{padding:{blockstart:"four"},children:(0,u.jsx)("div",{children:(0,u.jsx)(o.h9,{data:I})})})}),(0,u.jsx)(te.zQ,{children:(0,u.jsx)(r.N,{padding:{blockstart:"four"},children:(0,u.jsx)("div",{children:(0,u.jsx)(o.D7,{data:I,expando:null!=A?A:void 0})})})})]})]})};Ei.displayName="sharedui-ProductReviewDetailsRevamp";const $i=({inputs:e,skipSsr:t,batchKey:i,hideMoreReviewsButton:l=!1})=>{var o,d,c,v,p;const[h,g]=(0,n.useState)(1),[y,x]=(0,n.useState)(!1),[w,b]=(0,n.useState)(ge),[S,R]=(0,n.useState)(!1),[F,T]=(0,n.useState)(ge),{context:k}=(0,s.R)(),A=e.productIdentifier.id,I={productIdentifier:{id:A,type:e.productIdentifier.type,travelSearchCriteria:(0,n.useMemo)(()=>Se(e.productIdentifier,0,F.sortBy,F.travelerType,F.search,F.withPhotos),[e.productIdentifier.travelSearchCriteria,F.search,F.sortBy,F.travelerType,F.withPhotos])},context:k},C=F.search.trim()!==ge.search?"cache-and-network":"cache-first",{data:D,previousData:_,error:P,loading:M,fetchMore:E}=(0,a.FP)(Pi,{context:{batchKey:null!=i?i:"default-product-details-experience-batch-key",shouldLogPerformance:!0},fetchPolicy:C,variables:I,ssr:!t}),$=Xe(E,I);(0,n.useEffect)(()=>{var e,t;((null==D||null===(e=D.productReviewDetails)||void 0===e||null===(e=e.reviews)||void 0===e||null===(e=e.details)||void 0===e?void 0:e.length)||0)>((null==_||null===(t=_.productReviewDetails)||void 0===t||null===(t=t.reviews)||void 0===t||null===(t=t.details)||void 0===t?void 0:t.length)||0)&&y&&x(!1)},[D,y,h,_]),(0,n.useEffect)(()=>{w.isFilterApplied&&!S&&(R(!0),T(w))},[w,S]),(0,n.useEffect)(()=>{w.isFilterApplied&&(null==D?void 0:D.productReviewDetails)&&(b(e=>we(we({},e),{},{isFilterApplied:!1})),g(1),R(!1))},[D]);const N=(0,n.useCallback)(()=>{b(we(we({},ge),{},{isFilterApplied:!0}))},[]);if(P)return null;const L=(null==D?void 0:D.productReviewDetails)||(null==_?void 0:_.productReviewDetails),B=null==L?void 0:L.reviews,V=(null!==(o=null==B||null===(d=B.details)||void 0===d?void 0:d.length)&&void 0!==o?o:0)>0,O=!!(null==L||null===(c=L.sortAndFilter)||void 0===c||null===(c=c.sortAndFilter)||void 0===c?void 0:c.find(e=>"reviewsSearch"===e.title));if(L&&(!B||!V&&!O))return null;const z=(null==D||null===(v=D.productReviewDetails)||void 0===v||null===(v=v.reviewsSectionHeading)||void 0===v?void 0:v.text)||(null==_||null===(p=_.productReviewDetails)||void 0===p||null===(p=p.reviewsSectionHeading)||void 0===p?void 0:p.text);return(0,u.jsxs)(u.Fragment,{children:[M&&!w.isFilterApplied&&(0,u.jsx)(ei,{times:2}),(0,u.jsx)("div",{"data-stid":"product-reviews-sorting-and-filters-revamp",children:(0,u.jsx)(r.N,{margin:{small:{blockstart:"eight"},large:{blockstart:"unset"}},children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(j.w,{space:"four",children:[(0,u.jsx)(f.T,{children:(0,u.jsx)(m.M,{size:5,children:z})}),(0,u.jsx)(f.T,{children:(0,u.jsx)(Di,{data:(null==D?void 0:D.productReviewDetails)||(null==_?void 0:_.productReviewDetails),filters:w,onFiltersChange:b})})]}),(0,u.jsx)(Yt,{data:null==D?void 0:D.productReviewDetails,propertyId:A,fetchMore:$,page:h,showNextPage:x,loading:w.isFilterApplied,clearFilters:N,hideMoreReviewsButton:l,hasSearchFilter:O})]})})})]})};$i.displayName="sharedui-ReviewsSortingAndFiltersRevamp";const Ni=({inputs:e,showSeeAllReviewsButton:t=!1,seeAllReviewsButtonData:i,onSeeAllReviewsButtonData:n,onDialogToolbarData:l,onSeeAllReviewsClick:a,seeAllReviewsButtonRef:s,hideMoreReviewsButton:o=!1})=>(0,u.jsxs)(v.X,{direction:"column","data-stid":"product-review-details-compact-layout",space:"xlarge",children:[(0,u.jsx)(p.C,{children:(0,u.jsx)("div",{children:(0,u.jsx)(Ei,{inputs:e,skipSsr:!0,onSeeAllReviewsButtonData:n,onDialogToolbarData:l})})}),(0,u.jsx)(p.C,{children:(0,u.jsx)("div",{children:(0,u.jsx)($i,{inputs:e,skipSsr:!0,hideMoreReviewsButton:o})})}),t&&i&&(0,u.jsx)(p.C,{children:(0,u.jsx)(r.N,{margin:{small:{blockstart:"four",inlinestart:"three"},medium:{blockstart:"three",inlinestart:"six"}},children:(0,u.jsx)("div",{children:(0,u.jsxs)(te.LM,{children:[(0,u.jsx)(te.NP,{children:(0,u.jsx)(Ge,{data:i,onClick:a,isFullWidth:!0,size:b.V.LARGE})}),(0,u.jsx)(te.rw,{children:(0,u.jsx)(Ge,{data:i,onClick:a,isFullWidth:!1,size:b.V.LARGE})})]})})})})]}),Li=({inputs:e,showSeeAllReviewsButton:t=!1,seeAllReviewsButtonData:i,onSeeAllReviewsButtonData:n,onDialogToolbarData:l,onSeeAllReviewsClick:a,seeAllReviewsButtonRef:s,hideMoreReviewsButton:o=!1})=>(0,u.jsxs)(j.w,{columns:3,space:"six","data-stid":"product-review-details-wide-layout",children:[(0,u.jsx)(f.T,{colSpan:1,children:(0,u.jsx)("div",{children:(0,u.jsx)(Ei,{inputs:e,skipSsr:!0,onSeeAllReviewsButtonData:n,onDialogToolbarData:l})})}),(0,u.jsx)(f.T,{colSpan:2,children:(0,u.jsx)("div",{children:(0,u.jsx)($i,{inputs:e,skipSsr:!0,hideMoreReviewsButton:o})})}),t&&i&&(0,u.jsx)(f.T,{colStart:2,colSpan:2,children:(0,u.jsx)(r.N,{margin:{small:{blockstart:"four"},medium:{blockstart:"three"}},children:(0,u.jsx)("div",{children:(0,u.jsx)(te.LM,{children:(0,u.jsx)(te.zQ,{children:(0,u.jsx)(Ge,{data:i,onClick:a,isFullWidth:!1,size:b.V.LARGE})})})})})})]}),Bi=({isDialogOpen:e,triggerRef:t,scrollRef:i,DialogComponent:n,children:r,inputs:l})=>{const a=(n,a)=>(0,u.jsxs)(N.t,{type:n,isVisible:e,returnFocusOnClose:!0,triggerRef:t,height:a,children:[r,(0,u.jsx)(L.Y,{contentDomRef:i,children:(0,u.jsx)(Ni,{inputs:l,showSeeAllReviewsButton:!1})})]}),s=(0,u.jsxs)(_.R,{centeredSheetSize:"xxxlarge",height:1200,returnFocusOnClose:!0,isVisible:e,triggerRef:t,children:[r,(0,u.jsx)(L.Y,{contentDomRef:i,children:(0,u.jsx)(Li,{inputs:l,showSeeAllReviewsButton:!1})})]});return(0,u.jsx)(V.K,{isVisible:e,children:(0,u.jsx)(n,{children:(0,u.jsxs)(te.LM,{children:[(0,u.jsx)(te.NP,{children:a("full")}),(0,u.jsx)(te.rw,{children:a("centered",1200)}),(0,u.jsx)(te.zQ,{children:s})]})})})};Bi.displayName="sharedui-ProductReviewsDialogWrapper";const Vi=({inputs:e,showSeeAllReviewsButton:t=!1})=>{var i;const r=(0,c.KY)(),l=t,[a,s]=(0,n.useState)(null),[o,d]=(0,n.useState)(null),[v,p,m]=(0,W.useDialog)("product-reviews","pwaDialog"),h=(0,n.useRef)(null),g=(0,n.useRef)(null),y=(0,n.useCallback)(()=>{var e;const{referrerId:t,linkName:i}=null!==(e=null==a?void 0:a.analytics)&&void 0!==e?e:{};t&&i&&r(t,i),p.openDialog()},[p,null==a?void 0:a.analytics,r]),x=(0,n.useCallback)(()=>{var e;const{referrerId:t,linkName:i}=null!==(e=null==o?void 0:o.analytics)&&void 0!==e?e:{};t&&i&&r(t,i),p.closeDialog()},[p,null==o?void 0:o.analytics,r]),j={inputs:e,showSeeAllReviewsButton:l,seeAllReviewsButtonData:a,onSeeAllReviewsButtonData:s,onDialogToolbarData:d,onSeeAllReviewsClick:y,seeAllReviewsButtonRef:h,hideMoreReviewsButton:l},f={inputs:e,showSeeAllReviewsButton:l,seeAllReviewsButtonData:a,onSeeAllReviewsButtonData:s,onDialogToolbarData:d,onSeeAllReviewsClick:y,seeAllReviewsButtonRef:h,hideMoreReviewsButton:l};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(te.LM,{children:[(0,u.jsx)(te.NP,{children:(0,u.jsx)(Ni,we({},j))}),(0,u.jsx)(te.rw,{children:(0,u.jsx)(Ni,we({},j))}),(0,u.jsx)(te.zQ,{children:(0,u.jsx)(Li,we({},f))})]}),l&&(0,u.jsx)(Bi,{isDialogOpen:v,triggerRef:h,scrollRef:g,DialogComponent:m,inputs:e,children:(0,u.jsx)(z.p,{toolbarTitle:null!==(i=null==o?void 0:o.title)&&void 0!==i?i:"",navigationContent:{onClick:x,navType:"close",navButtonId:"reviews-dialog-close"},contentDomRef:g})})]})};Vi.displayName="sharedui-ProductReviewsDetailsLayout"}}]);
//# sourceMappingURL=https://bernie-assets.s3.us-west-2.amazonaws.com/landing-pwa/shared-ui-retail-product-review-details.8b95432f1a04f07a6f90.js.map