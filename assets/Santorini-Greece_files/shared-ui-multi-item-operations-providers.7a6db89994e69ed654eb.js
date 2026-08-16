/*@license For license information please refer to shared-ui-multi-item-operations-providers.licenses.txt*/
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[3201],{70370:function(e,t,r){r.d(t,{EQ:function(){return $},cg:function(){return v}});var o=r(96540),n=r(20209),a=(r(66162),r(30230),r(84148));r(74848);function i(e){return e.reduce((e,t)=>Object.assign(e,{[t]:{status:"UNKNOWN"}}),{})}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e){var t=function(e,t){if("object"!=c(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=c(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==c(t)?t:t+""}function u(e,t,r){return(t=s(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach(function(t){u(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let m=function(e){return e.GRAPHQL="GRAPHQL",e.NO_PROVIDER="NO_PROVIDER",e.UNKNOWN="UNKNOWN",e}({});function d(e){return()=>Promise.resolve({success:!1,failureReason:`no SessionOperationsProvider in tree found while calling ${e}`,failure:{type:m.NO_PROVIDER}})}const g={addProduct:d("addProduct"),updateProduct:d("updateProduct"),removeProduct:d("removeProduct"),replaceProduct:d("replaceProduct"),changeSelectedProduct:d("changeSelectedProduct")},I=(0,o.createContext)(l(l({},g),{},{state:i(Object.keys(g))}));function h(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.includes(o))continue;r[o]=e[o]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const S=["addProduct","updateProduct","removeProduct","replaceProduct","changeSelectedProduct"];function $(){const e=(0,o.useContext)(I),{addProduct:t,updateProduct:r,removeProduct:n,replaceProduct:a,changeSelectedProduct:i}=e,c=h(e,S);return l({addProduct:(0,o.useCallback)(t,[]),updateProduct:(0,o.useCallback)(r,[]),removeProduct:(0,o.useCallback)(n,[]),replaceProduct:(0,o.useCallback)(a,[]),changeSelectedProduct:(0,o.useCallback)(i,[])},c)}function f(e){return function(t,r,o,n){return r(t=>l(l({},t),{},{[e.operationName]:{status:"IN_PROGRESS",event:n}})),t({variables:o}).then(t=>{if(t.errors){const o={failureReason:`${e.operationName} failed with graphql error(s)`,failure:{type:m.GRAPHQL,errors:t.errors}};return r(t=>l(l({},t),{},{[e.operationName]:{status:"FAILURE",event:n,error:o}})),l({success:!1},o)}return t.data?(r(r=>l(l({},r),{},{[e.operationName]:{status:"SUCCESS",event:n,result:t}})),l({success:!0},t)):Promise.reject(new Error(`${e.operationName} returned null data`))}).catch(t=>{const o=`unexpected error encountered while calling ${e.operationName}`,a=`${o}: ${t instanceof Error?t.message:t}`,i={failureReason:o,failure:{type:m.UNKNOWN,error:new Error(a)}};return r(t=>l(l({},t),{},{[e.operationName]:{status:"FAILURE",event:n,error:i}})),l({success:!1},i)})}}f({operationName:"addProduct"});const P=n.J1`
  fragment MultiItemSearchContextErrorResponseFragment on MultiItemSearchContextErrorResponse {
    message
    failureDialog {
      ...MishopUIOperationFailureDialogFragment
    }
    errorContent {
      ...PackageUIEmptyStateErrorFragment
    }
  }

  ${n.J1`
  fragment MishopUIOperationFailureDialogFragment on MishopUIOperationFailureDialog {
    content {
      text
    }
    dialog {
      closeAnalytics {
        linkName
        referrerId
      }
      footer {
        ...EGDSActionDialogFooterFragment
      }
    }
  }

  ${a.rz.fragment}
`}
  ${a.RF.fragment}
`;n.J1`
  mutation MishopSharedUIAddProductMutation(
    $context: ContextInput!
    $multiItemSessionId: String!
    $activities: [ActivityNaturalKeyInput!]
    $groundTransfers: [GroundTransfersNaturalKeyInput!]
  ) {
    multiItemShopping(context: $context) {
      addProducts(sessionId: $multiItemSessionId, activities: $activities, groundTransfers: $groundTransfers) {
        __typename
        ... on MultiItemSearchContextCreatedResponse {
          redirectUrl
          action {
            __typename
            shoppingContext {
              multiItem {
                id
              }
            }
            ... on FlightSearchMultiItemShoppingAction {
              journeyContinuationId
            }
          }
          message
        }
        ... on MultiItemSearchContextErrorResponse {
          ...MultiItemSearchContextErrorResponseFragment
        }
      }
    }
  }

  ${P}
`,f({operationName:"changeSelectedProduct"}),n.J1`
  mutation MishopSharedUIChangeSelectedProductMutation(
    $context: ContextInput!
    $sessionId: String!
    $priceToken: String!
    $properties: [PropertyNaturalKeyInput!]
    $cars: [CarNaturalKeyInput!]
    $flights: [FlightNaturalKeyInput!]
    $changeAction: MultiItemShoppingActionType!
  ) {
    multiItemShopping(context: $context) {
      changeSelectedProduct(
        sessionId: $sessionId
        priceToken: $priceToken
        properties: $properties
        cars: $cars
        flights: $flights
        changeAction: $changeAction
      ) {
        __typename
        ... on MultiItemSearchContextCreatedResponse {
          shoppingContext {
            multiItem {
              id
              packageType
            }
          }
          redirectUrl
        }
        ... on MultiItemSearchContextErrorResponse {
          message
        }
      }
    }
  }
`,f({operationName:"removeProduct"}),n.J1`
  mutation MishopSharedUIRemoveProductMutation(
    $context: ContextInput!
    $multiItemSessionId: String!
    $activities: [ActivityNaturalKeyInput!]
    $groundTransfers: [GroundTransfersNaturalKeyInput!]
  ) {
    multiItemShopping(context: $context) {
      removeProducts(sessionId: $multiItemSessionId, activities: $activities, groundTransfers: $groundTransfers) {
        __typename
        ... on MultiItemSearchContextCreatedResponse {
          redirectUrl
          action {
            __typename
            shoppingContext {
              multiItem {
                id
              }
            }
            ... on FlightSearchMultiItemShoppingAction {
              journeyContinuationId
            }
          }
          message
        }
        ... on MultiItemSearchContextErrorResponse {
          ...MultiItemSearchContextErrorResponseFragment
        }
      }
    }
  }

  ${P}
`,f({operationName:"replaceProduct"}),n.J1`
  mutation MishopSharedUIReplaceProductMutation(
    $context: ContextInput!
    $multiItemSessionId: String!
    $priceToken: String
    $cars: [CarNaturalKeyInput!]
    $flights: [FlightNaturalKeyInput!]
    $properties: [PropertyNaturalKeyInput!]
  ) {
    multiItemShopping(context: $context) {
      selectProducts(sessionId: $multiItemSessionId, priceToken: $priceToken, cars: $cars, flights: $flights, properties: $properties) {
        __typename
        ... on MultiItemSearchContextCreatedResponse {
          redirectUrl
          action {
            __typename
            shoppingContext {
              multiItem {
                id
              }
            }
            ... on FlightSearchMultiItemShoppingAction {
              journeyContinuationId
            }
          }
        }
        ... on MultiItemSearchContextErrorResponse {
          ...MultiItemSearchContextErrorResponseFragment
        }
      }
    }
  }

  ${P}
`,f({operationName:"updateProduct"}),n.J1`
  mutation MishopSharedUIUpdateProductMutation(
    $context: ContextInput!
    $multiItemSessionId: String!
    $priceToken: String
    $flights: [FlightNaturalKeyInput!]
    $activity: ActivityUpdateInput
  ) {
    multiItemShopping(context: $context) {
      updateProduct(sessionId: $multiItemSessionId, priceToken: $priceToken, flights: $flights, activity: $activity) {
        __typename
        ... on MultiItemSearchContextCreatedResponse {
          redirectUrl
          action {
            __typename
            shoppingContext {
              multiItem {
                id
              }
            }
            ... on FlightSearchMultiItemShoppingAction {
              journeyContinuationId
            }
          }
        }
        ... on MultiItemSearchContextErrorResponse {
          ...MultiItemSearchContextErrorResponseFragment
        }
      }
    }
  }

  ${P}
`;function y(e){return()=>Promise.resolve({success:!1,failureReason:`no PrepareCheckoutOperationsProvider in tree found while calling ${e}`,failure:{type:m.NO_PROVIDER}})}const C={prepareCheckoutBySessionId:y("prepareCheckoutBySessionId"),prepareCheckout:y("prepareCheckout")};(0,o.createContext)(l(l({},C),{},{state:i(Object.keys(C))})),n.J1`
  mutation MishopSharedUIPrepareCheckout(
    $context: ContextInput!
    $activities: [ActivityNaturalKeyInput!]
    $groundTransfers: [GroundTransfersNaturalKeyInput!]
    $cars: [CarNaturalKeyInput!]
    $properties: [PropertyNaturalKeyInput!]
    $flights: [FlightNaturalKeyInput!]
    $packages: [PackageNaturalKeyInput!]
    $responseOptions: [PrepareCheckoutResponseOption!]
    $totalPrice: MoneyInput
    $cookies: String
    $checkoutOptions: [CheckoutOptionInput!]
  ) {
    prepareCheckout(
      context: $context
      activities: $activities
      groundTransfers: $groundTransfers
      cars: $cars
      properties: $properties
      flights: $flights
      packages: $packages
      responseOptions: $responseOptions
      totalPrice: $totalPrice
      cookies: $cookies
      checkoutOptions: $checkoutOptions
    ) {
      tripId
      checkoutUrl
      failureReason {
        __typename
        description
        message
        ... on MaxRoomsFailure {
          groupLinkMessage
        }
      }
    }
  }
`,f({operationName:"prepareCheckout"}),n.J1`
  mutation MishopSharedUIPrepareCheckoutBySessionId(
    $context: ContextInput!
    $multiItemSessionId: String!
    $cookies: String
    $checkoutOptions: [CheckoutOptionInput!]
  ) {
    prepareCheckoutBySessionId(context: $context, multiItemSessionId: $multiItemSessionId, cookies: $cookies, checkoutOptions: $checkoutOptions) {
      tripId
      checkoutUrl
      failureReason {
        __typename
        description
        message
        ... on MaxRoomsFailure {
          groupLinkMessage
        }
      }
    }
  }
`,f({operationName:"prepareCheckoutBySessionId"});function k(e){return()=>Promise.resolve({success:!1,failureReason:`no PackageOperationsProvider in tree found while calling ${e}`,failure:{type:m.NO_PROVIDER}})}const x={selectPackage:k("selectPackage"),changePackage:k("changePackage")},O=(0,o.createContext)(l(l({},x),{},{state:i(Object.keys(x))})),N=["changePackage","selectPackage"];function v(){const e=(0,o.useContext)(O),{changePackage:t,selectPackage:r}=e,n=h(e,N);return l({changePackage:(0,o.useCallback)(t,[]),selectPackage:(0,o.useCallback)(r,[])},n)}f({operationName:"changePackage"}),n.J1`
  mutation MishopSharedUIChangePackageMutation($context: ContextInput!, $multiItemSessionId: String!, $searchCriteria: PackageSearchCriteriaInput!) {
    multiItemShopping(context: $context) {
      changePackage(sessionId: $multiItemSessionId, searchCriteria: $searchCriteria) {
        __typename
        ... on MultiItemSearchContextCreatedResponse {
          redirectUrl
          action {
            __typename
            shoppingContext {
              multiItem {
                id
              }
            }
          }
        }
        ... on MultiItemSearchContextErrorResponse {
          ...MultiItemSearchContextErrorResponseFragment
        }
      }
    }
  }

  ${P}
`,f({operationName:"selectPackage"}),n.J1`
  mutation MishopSharedUISelectPackageMutation($context: ContextInput!, $multiItemSessionId: String!, $packageOfferId: String!) {
    multiItemShopping(context: $context) {
      selectPackage(sessionId: $multiItemSessionId, packageOfferId: $packageOfferId) {
        __typename
        ... on MultiItemSearchContextCreatedResponse {
          redirectUrl
          action {
            __typename
            shoppingContext {
              multiItem {
                id
              }
            }
          }
          target
        }
        ... on MultiItemSearchContextErrorResponse {
          ...MultiItemSearchContextErrorResponseFragment
        }
      }
    }
  }

  ${P}
`}}]);
//# sourceMappingURL=https://bernie-assets.s3.us-west-2.amazonaws.com/landing-pwa/shared-ui-multi-item-operations-providers.7a6db89994e69ed654eb.js.map