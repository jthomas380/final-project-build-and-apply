/*@license For license information please refer to shared-ui-retail-trips-providers.licenses.txt*/
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[1987],{63018:function(e,t,r){r.d(t,{ek:function(){return S},uU:function(){return v}});var n=r(96540),i=r(20209),a=r(4769),o=r(74848),p=r(53167);r(66162);function s(e){return e.reduce((e,t)=>Object.assign(e,{[t]:{status:"UNKNOWN"}}),{})}let m=function(e){return e.GRAPHQL="GRAPHQL",e.NO_PROVIDER="NO_PROVIDER",e.UNKNOWN="UNKNOWN",e}({});function I(e){return()=>Promise.resolve({success:!1,failureReason:`No ExternalItemsOperationsProvider found in tree found while calling ${e}`,failure:{type:m.NO_PROVIDER}})}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e){var t=function(e,t){if("object"!=c(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==c(t)?t:t+""}function d(e,t,r){return(t=u(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}const $={connectExternalMailbox:I("connectExternalMailbox"),saveExternalItemsToTrip:I("saveExternalItemsToTrip"),saveManualItemToTrip:I("saveManualItemToTrip")};(0,n.createContext)(l(l({},$),{},{state:s(Object.keys($))}));function g(e){return function(t,r,n){return r(t=>l(l({},t),{},{[e.operationName]:{status:"IN_PROGRESS"}})),t({variables:n}).then(t=>{if(t.errors){const n={failureReason:`${e.operationName} failed with graphql error(s)`,failure:{type:m.GRAPHQL,errors:t.errors}};return r(t=>l(l({},t),{},{[e.operationName]:{status:"FAILURE",error:n}})),l({success:!1},n)}return t.data?(r(r=>l(l({},r),{},{[e.operationName]:{status:"SUCCESS",result:t}})),l({success:!0},t)):Promise.reject(new Error(`${e.operationName} returned null data`))}).catch(t=>{const n=`unexpected error encountered while calling ${e.operationName}`,i=`${n}: ${t instanceof Error?t.message:t}`,a={failureReason:n,failure:{type:m.UNKNOWN,error:new Error(i)}};return r(t=>l(l({},t),{},{[e.operationName]:{status:"FAILURE",error:a}})),l({success:!1},a)})}}g({operationName:"connectExternalMailbox"}),i.J1`
  mutation SharedUIWeb_ConnectExternalMailboxMutation($context: ContextInput!, $mailboxType: String!, $redirectUri: String!) {
    connectExternalMailbox(context: $context, mailboxType: $mailboxType, redirectUri: $redirectUri) {
      redirectUri {
        value
      }
    }
  }
`;i.J1`
  mutation SharedUIWeb_SaveExternalItemsToTripMutation(
    $context: ContextInput!
    $tripId: String!
    $itemIdsToAdd: [String!]!
    $itemIdsToRemove: [String!]!
  ) {
    saveExternalItemsToTrip(context: $context, tripId: $tripId, itemIdsToAdd: $itemIdsToAdd, itemIdsToRemove: $itemIdsToRemove) {
      toast {
        ...TripsUIToastFragment
      }
    }
  }

  ${a.eh}
`,g({operationName:"saveExternalItemsToTrip"}),i.J1`
  mutation SharedUIWeb_SaveManualItemToTripMutation(
    $context: ContextInput!
    $tripId: String!
    $itemId: String
    $itemType: String!
    $itemData: [GraphQLPairInput!]!
  ) {
    saveManualItemToTrip(context: $context, tripId: $tripId, itemId: $itemId, itemType: $itemType, itemData: $itemData) {
      toast {
        ...TripsUIToastFragment
      }
    }
  }

  ${a.eh}
`,g({operationName:"saveManualItemToTrip"});const x=(0,n.createContext)(void 0),S=({children:e})=>{const[t,r]=(0,n.useState)([]),i=(0,n.useMemo)(()=>[],[]),a=(0,n.useCallback)(e=>{var r,n;return e?(i.find(t=>Object.is(t,e))||i.push(e),e.reference?{subscribe:null!==(n=t.find(t=>t.result.reference===e.reference))&&void 0!==n?n:null}:{subscribe:null!==(r=t.find(t=>t.result.type===e.type))&&void 0!==r?r:null}):{subscribe:null}},[i,t]),p=(0,n.useCallback)((e,t)=>{const{subscribe:r}=a(e);r&&e&&(e.reference&&r.result.reference&&e.reference===r.result.reference&&t(r),e.reference||e.type!==r.result.type||t(r))},[a]),s=(0,n.useCallback)(e=>{const t=i.map(e=>e.type);r(e.filter(e=>t.includes(e.signal.type)).map(e=>{var t;return{result:{type:e.signal.type,reference:null!==(t=e.signal.reference)&&void 0!==t?t:void 0,values:e.values}}}))},[i]),m=(0,n.useMemo)(()=>({onSignalEmit:p,emitSignals:s}),[p,s]);return(0,o.jsx)(x.Provider,{value:m,children:e})};const v=e=>{const{emitSignals:t}=function(){const e=(0,n.useContext)(x);if(void 0===e)throw new Error("No Trips SignalProvider found in React tree");return e}(),[r]=(0,p.A9)();return{emit:()=>{const n=null==e?void 0:e.map(e=>{const t=e.values.map(e=>{switch(e.value.__typename){case"TripsSignalFieldIdValue":{const t=e.value,n=r.validatedInputs.inputFields.find(e=>e.inputId===t.id);return{__typename:e.__typename,key:e.key,value:n.inputValue}}case"TripsSignalFieldIdExistingValues":{var t;const n=e.value,i=n.ids.map(e=>r.validatedInputs.inputFields.find(t=>t.inputId===e)).map(e=>e.inputValue),a=[...null!==(t=n.prefixes)&&void 0!==t?t:[],...i];return{__typename:e.__typename,key:e.key,value:a}}default:return{__typename:e.__typename,key:e.key,value:null}}});return{__typename:e.__typename,signal:e.signal,values:t}});n&&t(n)}}};function f(e){return()=>Promise.resolve({success:!1,failureReason:`No TripOperationsProvider found in tree found while calling ${e}`,failure:{type:m.NO_PROVIDER}})}const y={createTripItineraryTemplate:f("createTripItineraryTemplate"),createTrip:f("createTrip"),deleteTrip:f("deleteTrip"),editTrip:f("editTrip"),updateTripItemTrip:f("updateTripItemTrip"),sendTripInvite:f("sendTripInvite"),acceptRequestToJoinTrip:f("acceptRequestToJoinTrip"),manageTripParticipant:f("manageTripParticipant"),acceptTripInvite:f("acceptTripInvite"),generateTripBoardTemplate:f("generateTripBoardTemplate")};(0,n.createContext)(l(l({},y),{},{state:s(Object.keys(y))})),g({operationName:"createTrip"}),i.J1`
  mutation SharedUIWeb_CreateTripMutation(
    $context: ContextInput!
    $name: String!
    $description: String
    $itemId: String
    $operationType: String
    $tripContext: TripsUITripContextInput
  ) {
    createTrip(context: $context, name: $name, description: $description, itemId: $itemId, operationType: $operationType, tripContext: $tripContext) {
      status
      toast {
        ...TripsUIToastFragment
      }
    }
  }

  ${a.eh}
`,g({operationName:"deleteTrip"}),i.J1`
  mutation SharedUIWeb_DeleteTripMutation($context: ContextInput!, $tripId: String!) {
    deleteTrip(context: $context, tripId: $tripId) {
      toast {
        ...TripsUIToastFragment
      }
    }
  }

  ${a.eh}
`,g({operationName:"editTrip"}),i.J1`
  mutation SharedUIWeb_EditTripMutation($context: ContextInput!, $description: String, $name: String, $tripId: String!) {
    editTrip(context: $context, description: $description, name: $name, tripId: $tripId) {
      toast {
        ...TripsUIToastFragment
      }
    }
  }

  ${a.eh}
`,i.J1`
  mutation SharedUIWeb_UpdateTripItemTripMutation(
    $context: ContextInput!
    $tripContext: TripsUITripContextInput!
    $itemId: String!
    $operationType: String!
  ) {
    updateTripItemTrip(context: $context, tripContext: $tripContext, itemId: $itemId, operationType: $operationType) {
      status
      toast {
        ...TripsUIToastFragment
      }
    }
  }

  ${a.eh}
`,g({operationName:"updateTripItemTrip"}),g({operationName:"sendTripInvite"}),i.J1`
  mutation SharedUIWeb_SendTripInviteMutation($tripId: String!, $recipients: String!, $message: String!, $context: ContextInput!) {
    sendTripInvite(tripId: $tripId, recipients: $recipients, message: $message, context: $context) {
      status
      toast {
        ...TripsUIToastFragment
      }
    }
  }
  ${a.eh}
`,g({operationName:"acceptRequestToJoinTrip"}),i.J1`
  mutation SharedUIWeb_AcceptRequestToJoinTripMutation($tripId: String!, $requestToJoinId: String!, $context: ContextInput!) {
    acceptRequestToJoinTrip(tripId: $tripId, requestToJoinId: $requestToJoinId, context: $context) {
      ...TripsUIToastFragment
    }
  }
  ${a.eh}
`,g({operationName:"createTripItineraryTemplate"}),i.J1`
  mutation SharedUIWeb_CreateTripItineraryTemplateMutation(
    $tripId: String!
    $preferences: TripsUIItineraryPreferencesInput
    $context: ContextInput!
  ) {
    createTripItineraryTemplate(tripId: $tripId, preferences: $preferences, context: $context) {
      status
    }
  }
`,g({operationName:"manageTripParticipant"}),i.J1`
  mutation SharedUIWeb_ManageTripParticipantMutation($context: ContextInput!, $tripId: String!, $userId: String!, $operationType: String!) {
    manageTripParticipant(context: $context, tripId: $tripId, userId: $userId, operationType: $operationType) {
      ...TripsUILeaveTripSuccessResponseFragment
      ...TripsUIManageTripParticipantFailureResponseFragment
      ...TripsUIRemoveTripParticipantSuccessResponseFragment
    }
  }

  ${i.J1`
  fragment TripsUILeaveTripSuccessResponseFragment on TripsUILeaveTripSuccessResponse {
    toast {
      ...TripsUIToastFragment
    }
    link {
      ... on HttpURI {
        value
      }
    }
  }

  ${a.eh}
`}
  ${i.J1`
  fragment TripsUIManageTripParticipantFailureResponseFragment on TripsUIManageTripParticipantFailureResponse {
    toast {
      ...TripsUIToastFragment
    }
  }

  ${a.eh}
`}
  ${i.J1`
  fragment TripsUIRemoveTripParticipantSuccessResponseFragment on TripsUIRemoveTripParticipantSuccessResponse {
    toast {
      ...TripsUIToastFragment
    }
  }

  ${a.eh}
`}
`,g({operationName:"acceptTripInvite"}),i.J1`
  mutation SharedUIWeb_AcceptTripInviteMutation($tripId: String!, $inviteId: String!, $context: ContextInput!) {
    acceptInvite(tripId: $tripId, inviteId: $inviteId, context: $context) {
      ... on TripsUIAcceptInviteSuccessResponse {
        link {
          relativePath
          value
        }
      }
      ... on TripsUIAcceptInviteFailureResponse {
        toast {
          ...TripsUIToastFragment
        }
      }
    }
  }

  ${a.eh}
`,g({operationName:"generateTripBoardTemplate"}),i.J1`
  mutation SharedUIWeb_GenerateTripBoardTemplateMutation($context: ContextInput!, $tripId: String!) {
    generateTripBoardTemplate(context: $context, tripId: $tripId) {
      ... on TripsUIGenerateTripTemplateSuccessResponse {
        __typename
        templateId
        redirectLink {
          resource {
            value
          }
        }
      }
      ... on TripsUIGenerateTripTemplateFailureResponse {
        __typename
        toast {
          ...TripsUIToastFragment
        }
      }
    }
  }

  ${a.eh}
`;function U(e){return()=>Promise.resolve({success:!1,failureReason:`No TripItemOperationsProvider found in tree found while calling ${e}`,failure:{type:m.NO_PROVIDER}})}const h={removeTripItem:U("removeTripItem"),saveTripItems:U("saveTripItems"),updateTripItemDates:U("updateTripItemDates"),updateTripItemVote:U("updateTripItemVote"),saveTripItemComment:U("saveTripItemComment"),deleteTripItemComment:U("deleteTripItemComment"),editTripItemComment:U("editTripItemComment")};(0,n.createContext)(l(l({},h),{},{state:s(Object.keys(h))})),g({operationName:"removeTripItem"}),i.J1`
  mutation SharedUIWeb_RemoveTripItemMutation($context: ContextInput!, $itemId: String!, $tripId: String!) {
    removeTripItem(context: $context, itemId: $itemId, tripId: $tripId) {
      status
      toast {
        ...TripsUIToastFragment
      }
    }
  }

  ${a.eh}
`,g({operationName:"saveTripItems"}),i.J1`
  mutation SharedUIWeb_SaveTripItemsMutation(
    $context: ContextInput!
    $tripId: String
    $criteria: TripsUISaveTripItemsCriteriaInput!
    $source: String
    $pageLocation: PageLocation
  ) {
    saveTripItems(context: $context, tripId: $tripId, criteria: $criteria, source: $source, pageLocation: $pageLocation) {
      status
      toast {
        ...TripsUIToastFragment
      }
      url {
        value
      }
    }
  }

  ${a.eh}
`,i.J1`
  mutation SharedUIWeb_UpdateTripItemDatesMutation(
    $context: ContextInput!
    $itemIds: [String!]
    $tripId: String!
    $dateRange: DateRangeInput!
    $flexibleDatesRange: String
  ) {
    updateTripItemDates(context: $context, itemIds: $itemIds, tripId: $tripId, dateRange: $dateRange, flexibleDatesRange: $flexibleDatesRange) {
      status
      toast {
        ...TripsUIToastFragment
      }
    }
  }

  ${a.eh}
`,g({operationName:"updateTripItemDates"}),i.J1`
  mutation SharedUIWeb_UpdateTripItemVoteMutation($context: ContextInput!, $tripId: String!, $itemId: String!) {
    updateTripItemVote(context: $context, tripId: $tripId, itemId: $itemId) {
      ... on TripsUIUpdateTripItemVoteFailureResponse {
        toast {
          ...TripsUIToastFragment
        }
      }
    }
  }

  ${a.eh}
`,g({operationName:"updateTripItemVote"}),i.J1`
  mutation SharedUIWeb_SaveTripItemCommentMutation(
    $context: ContextInput!
    $tripId: String!
    $itemId: String!
    $comment: String!
    $commentId: String
  ) {
    saveTripItemComment(context: $context, tripId: $tripId, itemId: $itemId, comment: $comment, commentId: $commentId) {
      ... on TripsUISaveTripItemCommentFailureResponse {
        toast {
          ...TripsUIToastFragment
        }
      }
      ... on TripsUISaveTripItemCommentSuccessResponse {
        actionCount {
          count
          accessibility
        }
        comments {
          avatar {
            ... on TripsUITextAvatar {
              text
            }
          }
          comment
          id
          name
          timestamp
        }
        impressionAnalytics {
          linkName
          referrerId
        }
      }
    }
  }

  ${a.eh}
`,g({operationName:"saveTripItemComment"}),g({operationName:"deleteTripItemComment"}),i.J1`
  mutation SharedUIWeb_DeleteTripItemCommentMutation($context: ContextInput!, $tripId: String!, $itemId: String!, $commentId: String!) {
    deleteTripItemComment(context: $context, tripId: $tripId, itemId: $itemId, commentId: $commentId) {
      ... on TripsUIDeleteTripItemCommentFailureResponse {
        toast {
          ...TripsUIToastFragment
        }
      }
      ... on TripsUIDeleteTripItemCommentSuccessResponse {
        actionCount {
          count
          accessibility
        }
        comments {
          avatar {
            ... on TripsUITextAvatar {
              text
            }
          }
          comment
          id
          name
          timestamp
        }
        impressionAnalytics {
          linkName
          referrerId
        }
      }
    }
  }

  ${a.eh}
`,i.J1`
  mutation SharedUIWeb_EditTripItemCommentMutation(
    $context: ContextInput!
    $tripId: String!
    $itemId: String!
    $comment: String!
    $commentId: String!
  ) {
    editTripItemComment(context: $context, tripId: $tripId, itemId: $itemId, comment: $comment, commentId: $commentId) {
      ... on TripsUIEditTripItemCommentFailureResponse {
        toast {
          ...TripsUIToastFragment
        }
      }
      ... on TripsUIEditTripItemCommentSuccessResponse {
        comments {
          avatar {
            ... on TripsUITextAvatar {
              text
            }
          }
          comment
          id
          name
          timestamp
        }
        impressionAnalytics {
          linkName
          referrerId
        }
      }
    }
  }
  ${a.eh}
`,g({operationName:"editTripItemComment"});(0,n.createContext)({setTripsToastData:()=>{},setTripsFallbackToastData:()=>{}});let b=function(e){return e.COLLAPSED="COLLAPSED",e.EXPANDED="EXPANDED",e}({});(0,n.createContext)({mapState:b.EXPANDED,setMapState:()=>{}});let C=function(e){return e.LIST="LIST",e.MAP="MAP",e}({});(0,n.createContext)(C.LIST);function N(e){return()=>Promise.resolve({success:!1,failureReason:`No TripNoteOperationsProvider found in tree found while calling ${e}`,failure:{type:m.NO_PROVIDER}})}const R={saveNote:N("saveNote"),deleteNote:N("deleteNote")};(0,n.createContext)(l(l({},R),{},{state:s(Object.keys(R))})),g({operationName:"saveNote"}),i.J1`
  mutation SharedUIWeb_SaveNoteMutation($tripId: String!, $noteId: String, $noteData: [GraphQLPairInput!]!, $context: ContextInput!) {
    saveNote(tripId: $tripId, noteId: $noteId, noteData: $noteData, context: $context) {
      status
      toast {
        ...TripsUIToastFragment
      }
    }
  }

  ${a.eh}
`,g({operationName:"deleteNote"}),i.J1`
  mutation SharedUIWeb_DeleteNoteMutation($noteId: String!, $context: ContextInput!) {
    deleteNote(noteId: $noteId, context: $context) {
      status
      toast {
        ...TripsUIToastFragment
      }
    }
  }

  ${a.eh}
`;function _(e){return()=>Promise.resolve({success:!1,failureReason:`No ItineraryItemOperationsProvider found in tree found while calling ${e}`,failure:{type:m.NO_PROVIDER}})}const P={removeItineraryItem:_("removeItineraryItem"),refreshItineraryItem:_("refreshItineraryItem")};(0,n.createContext)(l(l({},P),{},{state:s(Object.keys(P))})),g({operationName:"tripsRemoveItineraryItem"}),i.J1`
  mutation SharedUIWeb_RemoveItineraryItemMutation($context: ContextInput!, $itineraryId: String!, $itineraryItemId: String!) {
    tripsRemoveItineraryItem(context: $context, itineraryId: $itineraryId, itineraryItemId: $itineraryItemId) {
      status
      toast {
        ...TripsUIToastFragment
      }
    }
  }

  ${a.eh}
`,g({operationName:"tripsRefreshItineraryItem"}),i.J1`
  mutation SharedUIWeb_RefreshItineraryItemMutation($context: ContextInput!, $itineraryId: String!, $itineraryItemId: String!) {
    tripsRefreshItineraryItem(context: $context, itineraryId: $itineraryId, itineraryItemId: $itineraryItemId) {
      status
      toast {
        ...TripsUIToastFragment
      }
    }
  }

  ${a.eh}
`;const O={scheduleItem:(D="scheduleItem",()=>Promise.resolve({success:!1,failureReason:`No TripScheduleItemOperationsProvider found in tree found while calling ${D}`,failure:{type:m.NO_PROVIDER}}))};var D;(0,n.createContext)(l(l({},O),{},{state:s(Object.keys(O))})),g({operationName:"scheduleItem"}),i.J1`
  mutation SharedUIWeb_ScheduleItemMutation($tripId: String!, $itemId: String, $schedulingData: [GraphQLPairInput!]!, $context: ContextInput!) {
    scheduleItem(tripId: $tripId, itemId: $itemId, schedulingData: $schedulingData, context: $context) {
      status
      toast {
        ...TripsUIToastFragment
      }
    }
  }

  ${a.eh}
`}}]);
//# sourceMappingURL=https://bernie-assets.s3.us-west-2.amazonaws.com/landing-pwa/shared-ui-retail-trips-providers.bcf0a75c03576c5c992d.js.map