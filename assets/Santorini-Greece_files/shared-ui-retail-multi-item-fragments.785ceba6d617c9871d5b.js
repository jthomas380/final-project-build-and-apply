/*@license For license information please refer to shared-ui-retail-multi-item-fragments.licenses.txt*/
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[4623],{84148:function(e,a,t){t.d(a,{RF:function(){return Qt},Z3:function(){return ia},oF:function(){return ke},rz:function(){return xe}});var n=t(96540),r=t(5846),i=t(86047),l=t(62403),s=t(33777),o=t(2746),c=t(22682),d=t(57536),m=t(20209),g=t(66162),u=t(74848),h=t(7700),p=t(43140),x=t(10044),f=t(76972),y=t(4648),I=t(56504),S=t(96906),D=t(85361),j=t(21317),b=t(716),E=t(95834),k=t(81042),G=t(66300),N=t(66104),T=t(33998),F=t(82308),P=t(64155),v=t(21330),C=t(74888),L=t(77630),A=t(66501),M=t(84683),U=t(69714),$=t(38955),B=t(77511),z=t(18288),w=t(35784),J=t(33694),_=t(39196),R=t(65675),O=t(30230),K=t(22868),Y=t(74276),V=t(1270),X=t(58646),H=t(39128),W=t(5635),q=t(53519),Q=t(63912),Z=t(13051),ee=t(97839),ae=t(74483),te=t(84043),ne=t(48842),re=t(28022),ie=t(66267);function le(e){return{clientPayload:se(e),serverPayload:e}}function se(e){try{const a=JSON.parse(e).events;if(!a||0===Object.keys(a).length)return console.error("Data object is empty or undefined"),{};const t=Object.keys(a)[0];if(!t)return console.error("Data object has no keys"),{};const n=a[t];if(!n||0===Object.keys(n).length)return console.error("Event object is empty or undefined"),{};const r=Object.keys(n)[0];return r?n[r].event_data||{}:(console.error("Event object has no keys"),{})}catch(a){return console.error("Error while parsing serverPayload",a),{}}}function oe(e){return oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},oe(e)}function ce(e){var a=function(e,a){if("object"!=oe(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,a||"default");if("object"!=oe(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"==oe(a)?a:a+""}function de(e,a,t){return(a=ce(a))in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function me(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function ge(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?me(Object(t),!0).forEach(function(a){de(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):me(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}const ue=m.J1`
  fragment EGDSActionDialogFooterFragment on EGDSDialogFooter {
    ... on EGDSStackedDialogFooter {
      buttons {
        ...PackageUIActionDialogFooterButton
      }
    }
    ... on EGDSInlineDialogFooter {
      buttons {
        ...PackageUIActionDialogFooterButton
      }
    }
  }
  fragment PackageUIActionDialogFooterButtonCloseActionFragment on PackageUIActionDialogFooterButtonCloseAction {
    analytics {
      referrerId
      linkName
    }
    analyticsPayload
  }

  fragment PackageUIActionDialogFooterButton on EGDSButton {
    primary
    ... on PackageUIActionDialogFooterButton {
      style
      dialogAction {
        ...PackageUIActionDialogFooterButtonCloseActionFragment
        ... on PackageUIActionDialogSearchLinkAction {
          newTabAccessibilityText
          analytics {
            referrerId
            linkName
          }
          resource {
            ... on HttpURI {
              relativePath
            }
          }
          target
        }
        ... on PackageUIActionDialogSignInLinkAction {
          newTabAccessibilityText
          analytics {
            referrerId
            linkName
          }
          resource {
            ... on HttpURI {
              relativePath
            }
          }
          target
        }
      }
    }
  }
`,he={PRIMARY:i.y,TERTIARY:s.q},pe=e=>"PackageUIActionDialogFooterButton"===e.__typename&&he[e.style],xe=({data:e,onDialogClose:a})=>{const t=((e,a,t,r)=>e.buttons.filter(pe).map((e,i)=>{if("PackageUIActionDialogFooterButton"!==e.__typename)return null;const l=he[e.style];switch(e.dialogAction.__typename){case"PackageUIActionDialogFooterButtonCloseAction":{const s=e.dialogAction.analyticsPayload,o={id:e.dialogAction.analytics.referrerId,description:e.dialogAction.analytics.linkName,callback:(e,a)=>t(e,a)};return(0,u.jsx)(l,{onClick:(0,n.useCallback)(()=>{s&&r(le(s)),a()},[s]),analytics:o,children:e.primary},`dialog-footer-button-${i}`)}case"PackageUIActionDialogSearchLinkAction":case"PackageUIActionDialogSignInLinkAction":{const n={href:"HttpURI"===e.dialogAction.resource.__typename?e.dialogAction.resource.relativePath:void 0,target:"EXTERNAL"===e.dialogAction.target?"_blank":"_self",rel:"noopener",onClick:a},r={id:e.dialogAction.analytics.referrerId,description:e.dialogAction.analytics.linkName,callback:(e,a)=>t(e,a)};return n.href?(0,u.jsx)(l,ge(ge({},n),{},{analytics:r,children:(0,u.jsxs)(u.Fragment,{children:[e.primary,e.dialogAction.newTabAccessibilityText&&(0,u.jsx)("span",{className:"is-visually-hidden",children:e.dialogAction.newTabAccessibilityText})]})}),`dialog-footer-button-${i}`):null}default:return null}}).filter(Boolean))(e,a,(0,g.KY)(),(0,g.iQ)());switch(e.__typename){case"EGDSInlineDialogFooter":return(0,u.jsx)(d.l,{stacked:!1,children:t});case"EGDSStackedDialogFooter":return(0,u.jsx)(d.l,{stacked:!0,children:t});default:return null}};xe.fragment=ue,xe.displayName="EGDSActionDialogFooter";const fe=m.J1`
  fragment EGDSIconFragment on Icon {
    description
    id
    size
    theme
    title
    withBackground
    spotLight
  }
`,ye={INFO:"info",POSITIVE:"positive",STANDARD:"standard",WARNING:"warning"},Ie=({data:e,defaultIconSize:a,defaultIconTheme:t,defaultIconSpotLight:n})=>{const{description:r,id:i,size:l,title:s,theme:o,withBackground:c,spotLight:d}=e,m=d?{theme:ye[d],background:Boolean(c)}:n;return(0,u.jsx)(x.LD,{description:r,id:i,name:i,size:l?x.So[l]:a,title:null!=s?s:void 0,theme:null!=o?o:t,shadow:Boolean(!d&&c),spotlight:m})};Ie.displayName="MultiItemEGDSIcon",Ie.fragment=fe;const Se=m.J1`
  fragment EGDSIllustrationFragment on Illustration {
    description
    link: url
    id
  }
`,De=({data:e})=>(0,u.jsx)(f.r,{alt:e.description,url:e.link});De.displayName="EGDSIllustration",De.fragment=Se;const je=m.J1`
  fragment EGDSMarkFragment on Mark {
    description
    id
    markSize: size
    url {
      value
      relativePath
    }
  }
`,be=({data:e,size:a})=>{var t;const{description:n,id:r,markSize:i,url:l}=e;if(!l&&!r)return null;const s=i?null!==(t=I.K[i])&&void 0!==t?t:I.G[parseInt(i,10)]:void 0;return(0,u.jsx)(y.D,{description:n,id:r,name:r,size:null!=s?s:a,url:null==l?void 0:l.value})};be.displayName="MultiItemEGDSMark",be.fragment=je;const Ee=m.J1`
  fragment UIGraphicFragment on UIGraphic {
    ...EGDSIconFragment
    ...EGDSMarkFragment
    ...EGDSIllustrationFragment
  }

  ${Ie.fragment}
  ${be.fragment}
  ${De.fragment}
`,ke=({data:e,markProps:a,iconProps:t})=>{switch(e.__typename){case"Icon":return(0,u.jsx)(Ie,ge({data:e},t));case"Mark":return(0,u.jsx)(be,ge({data:e},a));case"Illustration":return(0,u.jsx)(De,{data:e});default:return null}};ke.displayName="UIGraphic",ke.fragment=Ee;const Ge=m.J1`
  fragment EGDSProgramBadgeFragment on EGDSProgramBadge {
    accessibility
    graphic {
      ...UIGraphicFragment
    }
    text
    theme
  }

  ${ke.fragment}
`,Ne={deal:"deal",member:"member",trip:"trip",supplierpromo:"supplierpromo",vmc:"vmc"},Te=({data:e,iconSize:a})=>{const{accessibility:t,graphic:n,text:r,theme:i}=e,l=i?Ne[i]:void 0;return r&&i&&l?(0,u.jsx)(p.v,{a11yText:null!=t?t:void 0,text:r,theme:l,children:n&&(0,u.jsx)(ke,{data:n,iconProps:{defaultIconSize:a}})}):null};Te.displayName="EGDSProgramBadge",Te.fragment=Ge;const Fe={standard:"standard",emphasis:"emphasis",info:"info",featured:"featured",brand:"brand",warning:"warning",positive:"positive"},Pe={small:"small",large:"large"},ve=m.J1`
  fragment EGDSStandardBadgeFragment on EGDSStandardBadge {
    text
    badgeTheme: theme
    size
    accessibility
    impressionAnalytics {
      linkName
      referrerId
    }
    graphic {
      ...UIGraphicFragment
    }
  }

  ${ke.fragment}
`,Ce=({data:e})=>{const{size:a,text:t,badgeTheme:n,accessibility:r,impressionAnalytics:i,graphic:l}=e;if(!t)return null;const s=n?Fe[n.toLowerCase()]:void 0,o=(0,u.jsx)(h.G,{text:t,size:a?Pe[a.toLowerCase()]:void 0,theme:s,a11yText:null!=r?r:void 0,children:l&&(0,u.jsx)(ke,{data:l})});if(i){const{referrerId:e,linkName:a}=i;return(0,u.jsx)(g.ee,{referrerId:e,linkName:null!=a?a:"",children:o})}return o};Ce.fragment=ve,Ce.displayName="EGDSStandardBadge";const Le=m.J1`
  fragment EGDSBadgeFragment on EGDSBadge {
    ...EGDSStandardBadgeFragment
    ...EGDSProgramBadgeFragment
  }

  ${Ce.fragment}
  ${Te.fragment}
`,Ae=({data:e,iconSize:a})=>{switch(e.__typename){case"EGDSStandardBadge":return(0,u.jsx)(Ce,{data:e});case"EGDSProgramBadge":return(0,u.jsx)(Te,{data:e,iconSize:a});default:return null}};Ae.fragment=Le,Ae.displayName="sharedui-MultiItemEGDSBadge";const Me=m.J1`
  fragment EGDSPrimaryButtonFragment on UIPrimaryButton {
    primary
    accessibility
    disabled
    analytics {
      linkName
      referrerId
    }
  }
`,Ue=({data:e,onClick:a,size:t,isFullWidth:r})=>{const{primary:l,accessibility:s,analytics:o,disabled:c}=e,d=(0,g.KY)(),m=(0,n.useCallback)(()=>{o&&d(o.referrerId,o.linkName),null==a||a()},[a,o,d]),h=c||!1;return(0,u.jsx)(i.y,ge(ge({"aria-label":null!=s?s:void 0,onClick:m},{size:t,isFullWidth:r}),{},{disabled:h,children:l}))};Ue.fragment=Me,Ue.displayName="MultiItemEGDSPrimaryButton";const $e=m.J1`
  fragment EGDSSecondaryButtonFragment on UISecondaryButton {
    primary
    accessibility
    analytics {
      linkName
      referrerId
    }
  }
`,Be=({data:e,onClick:a,size:t,isFullWidth:r})=>{const{primary:i,accessibility:s,analytics:o}=e,c=(0,g.KY)(),d=(0,n.useCallback)(()=>{o&&c(o.referrerId,o.linkName),null==a||a()},[a,o,c]);return(0,u.jsx)(l.y,ge(ge({"aria-label":null!=s?s:void 0,onClick:d},{size:t,isFullWidth:r}),{},{children:i}))};Be.fragment=$e,Be.displayName="MultiItemEGDSSecondaryButton";const ze=m.J1`
  fragment EGDSTertiaryButtonFragment on UITertiaryButton {
    primary
    analytics {
      linkName
      referrerId
    }
    accessibility
  }
`,we=({data:e,onClick:a,size:t,isFullWidth:i,buttonAsLink:l})=>{const{primary:o,analytics:c,accessibility:d}=e,m=(0,g.KY)(),h=(0,n.useCallback)(()=>{c&&m(c.referrerId,c.linkName),null==a||a()},[a,c,m]),p=(0,u.jsx)(s.q,{"aria-label":null!=d?d:void 0,onClick:h,size:null!=t?t:r.V.MEDIUM,isFullWidth:i,children:o});return l?(0,u.jsx)(S.i,{children:p}):p};we.fragment=ze,we.displayName="MultiItemEGDSTertiaryButton";const Je=m.J1`
  fragment EGDSButtonFragment on EGDSButton {
    ...EGDSPrimaryButtonFragment
    ...EGDSSecondaryButtonFragment
    ...EGDSTertiaryButtonFragment
  }

  ${Ue.fragment}
  ${Be.fragment}
  ${we.fragment}
`,_e=({data:e,onClick:a,size:t,isFullWidth:n,buttonAsLink:r})=>{switch(e.__typename){case"UIPrimaryButton":return(0,u.jsx)(Ue,{data:e,onClick:a,size:t,isFullWidth:n});case"UISecondaryButton":return(0,u.jsx)(Be,{data:e,onClick:a,size:t,isFullWidth:n});case"UITertiaryButton":return(0,u.jsx)(we,{data:e,onClick:a,size:t,isFullWidth:n,buttonAsLink:r});default:return null}};_e.fragment=Je,_e.displayName="MultiItemEGDSButton";const Re=m.J1`
  fragment EGDSStandardLinkFragment on EGDSStandardLink {
    text
    action {
      accessibility
      target
      resource {
        value
      }
      analytics {
        linkName
        referrerId
      }
    }
    icon {
      id
    }
    iconPosition
  }
`;var Oe=function(e){return e.EXTERNAL="_blank",e.INTERNAL="_self",e}(Oe||{});const Ke={EXTERNAL:Oe.EXTERNAL,INTERNAL:Oe.INTERNAL},Ye=({data:e,inline:a,iconSize:t})=>{const{action:r,text:i,icon:l,iconPosition:s}=e,{analytics:o,resource:c,target:d,accessibility:m}=r,h=(0,g.KY)(),{scrollTo:p}=(0,E.xC)(),{getTargets:f}=(0,E.OK)(),y=f([c.value]),I=(0,n.useCallback)(()=>{var e;p(c.value,[]),null===(e=y[c.value])||void 0===e||null===(e=e.current)||void 0===e||e.focus({preventScroll:!0}),h(o.referrerId,o.linkName)},[c.value,p,h,o]),D=(0,n.useCallback)(()=>{h(o.referrerId,o.linkName)},[h,o]);return"SelfReferencedURI"===r.resource.__typename?(0,u.jsx)(S.i,{onClickCapture:I,children:(0,u.jsx)("a",{target:Ke[d],href:c.value,children:i})}):(0,u.jsx)(S.i,{onClickCapture:D,inline:null==a||a,children:(0,u.jsxs)("a",{target:Ke[d],href:c.value,children:[l&&"TRAILING"!==s&&(0,u.jsx)(x.LD,{name:l.id,size:t}),i,l&&"TRAILING"===s&&(0,u.jsx)(x.LD,{name:l.id,size:t}),m&&(0,u.jsx)(b.D,{className:"is-visually-hidden",children:m})]})})};Ye.displayName="sharedui-EGDSStandardLink",Ye.fragment=Re;const Ve=m.J1`
  fragment EGDSTextIconListItemFragment on EGDSTextIconListItem {
    icon {
      id
    }
    text
  }
`,Xe=({data:e})=>{const{icon:a,text:t}=e;return(0,u.jsxs)(G.x,{children:[(0,u.jsx)(x.LD,{name:a.id}),t]})};Xe.fragment=Ve,Xe.displayName="EGDSTextIconListItem";const He=m.J1`
  fragment EGDSTextStandardListItemFragment on EGDSTextStandardListItem {
    text
  }
`,We=({data:{text:e}})=>(0,u.jsx)(G.x,{children:e});We.fragment=He,We.displayName="EGDSTextStandardListItem";const qe=m.J1`
  fragment EGDSGraphicTextFragment on EGDSGraphicText {
    text
    accessibility
    graphic {
      ...UIGraphicFragment
    }
  }

  ${ke.fragment}
`,Qe=({data:e})=>(0,u.jsxs)(N.X,{space:"two",children:[(0,u.jsx)(T.C,{children:(0,u.jsx)(ke,{data:e.graphic})}),(0,u.jsx)(T.C,{children:(0,u.jsxs)(b.D,{children:[(0,u.jsx)("span",{"aria-hidden":Boolean(e.accessibility),children:e.text}),e.accessibility&&(0,u.jsx)("span",{className:"is-visually-hidden",children:e.accessibility})]})})]});Qe.fragment=qe,Qe.displayName="EGDSGraphicText";const Ze=m.J1`
  fragment EGDSPlainTextFragment on EGDSPlainText {
    plainText: text
  }
`,ea=({textProps:e,data:a})=>(0,u.jsx)(b.D,ge(ge({},e),{},{children:a.plainText}));ea.fragment=Ze,ea.displayName="EGDSPlainText";const aa=m.J1`
  fragment EGDSStylizedTextFragment on EGDSStylizedText {
    stylizedText: text
    textTheme: theme
    weight
    decorative
    textSize: size
    accessibility
  }
`,ta={100:100,200:200,300:300,400:400,500:500,600:600,700:700,800:800,900:900},na={LOYALTY:"loyalty",NEGATIVE:"negative",POSITIVE:"positive",EMPHASIS:"emphasis",PRIMARY:"emphasis",SECONDARY:"secondary",INVERSE:"inverse"},ra={BOLD:"bold",MEDIUM:"medium",REGULAR:"regular"},ia=e=>{const{data:a,textProps:t}=e,{stylizedText:n,textTheme:r,weight:i,decorative:l,textSize:s,accessibility:o}=a,c=r?na[r]:void 0,d=i?ra[i]:void 0,m=s?ta[s]:null==t?void 0:t.size;var g,h;return"LINE_THROUGH"===l?(0,u.jsxs)("s",{children:[(0,u.jsx)(b.D,{size:m,theme:null!==(g=null==t?void 0:t.theme)&&void 0!==g?g:c,weight:d,inline:null==t?void 0:t.inline,align:null==t?void 0:t.align,"aria-hidden":null!==o,children:n}),o&&(0,u.jsx)("span",{className:"is-visually-hidden",children:o})]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(b.D,{size:m,theme:null!==(h=null==t?void 0:t.theme)&&void 0!==h?h:c,weight:d,inline:null==t?void 0:t.inline,align:null==t?void 0:t.align,"aria-hidden":null!==o,children:n}),o&&(0,u.jsx)("span",{className:"is-visually-hidden",children:o})]})};ia.fragment=aa,ia.displayName="EGDSStylizedText";const la=e=>{const a={3:"headline-extra-large",4:"headline-large"};return e&&a[e]?{customStyle:a[e]}:void 0},sa=m.J1`
  fragment EGDSHeadingFragment on EGDSHeading {
    text
  }
`,oa=({headingProps:e,data:a})=>(0,u.jsx)(D.M,ge(ge({},ge(ge({},e),{},{typeStyle:la(null==e?void 0:e.size)})),{},{children:a.text}));oa.fragment=sa,oa.displayName="MultiItemEGDSHeading";const ca=m.J1`
  fragment EGDSParagraphFragment on EGDSParagraph {
    text
    size
  }
`,da={1:1,2:2,3:3},ma=({data:{size:e,text:a}})=>{var t;return(0,u.jsx)(j.u,{size:null!==(t=da[e])&&void 0!==t?t:void 0,children:a})};ma.fragment=ca,ma.displayName="MultiItemEGDSParagraph";const ga=m.J1`
  fragment EGDSSpannableTextItemFragment on EGDSSpannableTextItem {
    ...EGDSStylizedTextFragment
    ...EGDSPlainTextFragment
  }

  ${ia.fragment}
  ${ea.fragment}
`,ua=({data:e,textProps:a})=>{switch(e.__typename){case"EGDSStylizedText":return(0,u.jsx)(ia,{data:e,textProps:a});case"EGDSPlainText":return(0,u.jsx)(ea,{data:e,textProps:a});default:return null}};ua.fragment=ga,ua.displayName="EGDSSpannableTextItem";const ha=["data"],pa=m.J1`
  fragment EGDSSpannableTextFragment on EGDSSpannableText {
    text
    inlineContent {
      ...EGDSSpannableTextItemFragment
    }
  }

  ${ua.fragment}
`,xa={margin:{inlineend:"one"}},fa=e=>{const{data:a}=e,t=function(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(a.includes(n))continue;t[n]=e[n]}return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.includes(t)||{}.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,ha);return 0===a.inlineContent.length?(0,u.jsx)(b.D,ge(ge({},t),{},{children:a.text})):(0,u.jsx)(u.Fragment,{children:a.inlineContent.map((e,a)=>(0,n.createElement)(F.N,ge(ge({},xa),{},{key:`spannable-text-item-${a}`}),(0,u.jsx)(ua,ge({data:e},t))))})};fa.fragment=pa,fa.displayName="EGDSSpannableText";const ya=m.J1`
  fragment EGDSTextFragment on EGDSText {
    ...EGDSHeadingFragment
    ...EGDSParagraphFragment
    ...EGDSPlainTextFragment
    ...EGDSStandardLinkFragment
    ...EGDSStylizedTextFragment
    ...EGDSSpannableTextFragment
  }

  ${oa.fragment}
  ${ma.fragment}
  ${ea.fragment}
  ${Ye.fragment}
  ${ia.fragment}
  ${fa.fragment}
`,Ia=({data:e,headingProps:a,textProps:t})=>{switch(e.__typename){case"EGDSHeading":return(0,u.jsx)(oa,{data:e,headingProps:a});case"EGDSParagraph":return(0,u.jsx)(ma,{data:e});case"EGDSPlainText":return(0,u.jsx)(ea,{data:e,textProps:t});case"EGDSStandardLink":return(0,u.jsx)(Ye,{data:e});case"EGDSStylizedText":return(0,u.jsx)(ia,{data:e,textProps:t});case"EGDSSpannableText":return(0,u.jsx)(fa,{data:e,textProps:t});default:return null}};Ia.fragment=ya,Ia.displayName="MultiItemEGDSText";const Sa=m.J1`
  fragment MishopUITextContainerListItemFragment on MishopUITextContainerListItem {
    element {
      elements {
        ...EGDSTextFragment
      }
    }
  }

  ${Ia.fragment}
`,Da=({data:{element:{elements:e}}})=>(0,u.jsx)(G.x,{children:(0,u.jsx)(N.X,{direction:"column",children:e.map((e,a)=>(0,u.jsx)(T.C,{children:(0,u.jsx)(F.N,{margin:{blockend:"one"},children:(0,u.jsx)("div",{children:(0,u.jsx)(Ia,{data:e})})})},a))})});Da.fragment=Sa,Da.displayName="MishopUITextContainerListItem";const ja=m.J1`
  fragment EGDSTextListItemFragment on EGDSTextListItem {
    ... on EGDSTextIconListItem {
      ...EGDSTextIconListItemFragment
    }
    ... on EGDSTextStandardListItem {
      ...EGDSTextStandardListItemFragment
    }
    ... on MishopUITextContainerListItem {
      ...MishopUITextContainerListItemFragment
    }
  }

  ${Xe.fragment}
  ${We.fragment}
  ${Da.fragment}
`,ba=({data:e})=>{switch(e.__typename){case"EGDSTextIconListItem":return(0,u.jsx)(Xe,{data:e});case"EGDSTextStandardListItem":return(0,u.jsx)(We,{data:e});case"MishopUITextContainerListItem":return(0,u.jsx)(Da,{data:e});default:return null}};ba.fragment=ja,ba.displayName="EGDSTextListItem";const Ea=m.J1`
  fragment EGDSBulletedListFragment on EGDSBulletedList {
    listItems {
      ... on EGDSTextListItem {
        ...EGDSTextListItemFragment
      }
    }
  }

  ${ba.fragment}
`,ka=({data:{listItems:e}})=>(0,u.jsx)(u.Fragment,{children:e.length&&(0,u.jsx)(k.y,{spacing:!1,size:2,type:"unordered",children:e.map((e,a)=>(0,u.jsx)(ba,{data:e},a))})});ka.fragment=Ea,ka.displayName="EGDSBulletedList";const Ga=m.J1`
  fragment EGDSElementFragment on EGDSElement {
    ... on EGDSHeading {
      ...EGDSHeadingFragment
    }
    ... on EGDSParagraph {
      ...EGDSParagraphFragment
    }
    ... on EGDSStandardLink {
      ...EGDSStandardLinkFragment
    }
    ... on EGDSBulletedList {
      ...EGDSBulletedListFragment
    }
  }

  ${oa.fragment}
  ${ma.fragment}
  ${Ye.fragment}
  ${ka.fragment}
`,Na=({data:e})=>{switch(e.__typename){case"EGDSParagraph":return(0,u.jsx)(ma,{data:e});case"EGDSHeading":return(0,u.jsx)(oa,{data:e});case"EGDSStandardLink":return(0,u.jsx)(Ye,{data:e});case"EGDSBulletedList":return(0,u.jsx)(ka,{data:e});default:return null}};Na.fragment=Ga,Na.displayName="EGDSElement";const Ta=m.J1`
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
`,Fa=({data:{expandAnalytics:e,expandedLabel:a,collapseAnalytics:t,collapsedLabel:r,expanded:i},content:l,ExpandoTitle:s})=>{const o=(0,g.KY)(),[c,d]=(0,n.useState)(i),[m,h]=(0,n.useState)(i?a:r);return(0,u.jsx)(L.U,{isVisible:c,expandoTitle:s?(0,u.jsx)(s,{children:m}):m,expandoDescription:l,onToggle:()=>{c?(h(r),t&&o(t.referrerId,t.linkName)):(h(a),e&&o(e.referrerId,e.linkName)),d(e=>!e)}})};Fa.fragment=Ta,Fa.displayName="MultiItemEGDSExpandoListItem";const Pa=m.J1`
  fragment EGDSExpandoCardFragment on EGDSExpandoCard {
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
    subtitle
  }
`,va=({data:e,children:a,border:t,className:r})=>{const{expandAnalytics:i,expandedLabel:l,collapseAnalytics:s,collapsedLabel:o,expanded:c,subtitle:d}=e,m=(0,g.KY)(),[h,p]=(0,n.useState)(c),[x,f]=(0,n.useState)(c?l:o),y=null!=d?d:void 0,I=(0,n.useCallback)(()=>{h?(f(o),s&&m(s.referrerId,s.linkName)):(f(l),i&&m(i.referrerId,i.linkName)),p(!h)},[h,m,l,o,s,i]);return(0,u.jsx)(A.g,{border:t,className:r,children:(0,u.jsx)(F.N,{padding:"three",children:(0,u.jsx)(C.f,{children:(0,u.jsx)(L.U,{expandoTitle:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(b.D,{size:400,weight:"bold",theme:"standard",children:x}),y]}),triggerPosition:"trailing",isVisible:h,onToggle:I,expandoDescription:(0,u.jsx)(F.N,{padding:{blockend:"one",inline:"one"},children:(0,u.jsx)("div",{children:a})})})})})})};va.fragment=Pa,va.displayName="EGDSExpandoCard";const Ca=m.J1`
  fragment EGDSExpandoPeekFragment on EGDSExpandoPeek {
    expandedLabel
    collapsedLabel
    collapseAnalytics {
      linkName
      referrerId
    }
    expandAnalytics {
      linkName
      referrerId
    }
    expanded
  }
`,La=({className:e,lines:a,items:t,data:r,children:i})=>{var l,s,o,c;const{expandAnalytics:d,collapseAnalytics:m,expandedLabel:h,collapsedLabel:p,expanded:x}=r,[f,y]=(0,n.useState)(x),I=(0,n.useCallback)(()=>{y(!f)},[f,y]),S=(0,g.KY)(),D={id:null!==(l=null==d?void 0:d.referrerId)&&void 0!==l?l:"",description:null!==(s=null==d?void 0:d.linkName)&&void 0!==s?s:"",callback:(0,n.useCallback)((e,a)=>{S(e,a)},[S])},j={id:null!==(o=null==m?void 0:m.referrerId)&&void 0!==o?o:"",description:null!==(c=null==m?void 0:m.linkName)&&void 0!==c?c:"",callback:(0,n.useCallback)((e,a)=>{S(e,a)},[S])};return(0,u.jsx)(v.A,{isVisible:f,items:t,lines:a,expandLabel:null!=p?p:"",collapseLabel:null!=h?h:"",handleClick:I,className:e,analytics:f?j:D,children:i})};La.fragment=Ca,La.displayName="MultiItemEGDSExpandoPeek";const Aa=m.J1`
  fragment EGDSImageLinkFragment on EGDSImageLink {
    image {
      url
      description
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
`;var Ma=function(e){return e.EXTERNAL="_blank",e.INTERNAL="_self",e}(Ma||{});const Ua={EXTERNAL:Ma.EXTERNAL,INTERNAL:Ma.INTERNAL},$a=({data:{image:e,action:a},figureProps:t})=>{const n=(0,g.KY)(),i={href:a.resource.value,rel:Ua[a.target]===Ma.EXTERNAL?"noopener":void 0,target:Ua[a.target],onClick:()=>n(a.analytics.referrerId,a.analytics.linkName)};return(0,u.jsxs)($.M,ge(ge({},t),{},{children:[(0,u.jsx)(B.F,{placeholderImage:!0,alt:e.description,src:e.url}),(0,u.jsx)(z.d,{children:(0,u.jsx)(r.u,ge(ge({},i),{},{children:a.accessibility&&(0,u.jsx)("span",{className:"is-visually-hidden",children:a.accessibility})}))})]}))};$a.fragment=Aa,$a.displayName="MultiItemEGDSImageLink";const Ba=m.J1`
  fragment EGDSTextIconListFragment on EGDSTextIconList {
    listItems {
      ...EGDSTextIconListItemFragment
    }
  }

  ${Xe.fragment}
`,za=({listProps:e,className:a,columns:t,data:n})=>{const{listItems:r}=n;if(!r.length)return null;const i=(0,w.I)(a=>(0,u.jsx)(k.y,ge(ge(ge({},e),a),{},{data:r.map((e,a)=>({content:e.text,icon:(0,u.jsx)(x.LD,{name:e.icon.id},`icon-${a}`)}))})));return t?(0,u.jsx)(i,{className:a,columns:t}):(0,u.jsx)(k.y,ge(ge({spacing:!1},e),{},{className:a,children:r.map((e,a)=>(0,u.jsx)(Xe,{data:e},`egds-text-icon-list-item-${a}`))}))};za.fragment=Ba,za.displayName="EGDSTextIconList";const wa=m.J1`
  fragment EGDSTextListFragment on EGDSTextList {
    ... on EGDSBulletedList {
      ...EGDSBulletedListFragment
    }
    ... on EGDSTextIconList {
      ...EGDSTextIconListFragment
    }
  }

  ${ka.fragment}
  ${za.fragment}
`,Ja=({data:e})=>{switch(e.__typename){case"EGDSBulletedList":return(0,u.jsx)(ka,{data:e});case"EGDSTextIconList":return(0,u.jsx)(za,{data:e});default:return null}};Ja.fragment=wa,Ja.displayName="EGDSTextList";const _a={default:"default",emphasis:"emphasis",inverse:"inverse",negative:"negative",positive:"positive",secondary:void 0},Ra=m.J1`
  fragment EGDSSheetFragment on EGDSSheet {
    sheetTypes {
      sheetType
      viewSize
    }
    closeAnalytics {
      referrerId
      linkName
    }
    icon {
      ...EGDSIconFragment
    }
    closeText
  }

  ${Ie.fragment}
`,Oa=({data:e,onDismiss:a,onBackgroundDismiss:t,width:i,triggerRef:l,title:o,children:c,dialogId:d,toolbarColorTheme:m="light-1",isPadded:h=!0})=>{const{closeAnalytics:p,icon:x,closeText:f}=e,y=(0,g.KY)(),[I,S,D]=(0,O.useDialog)(null!=d?d:"multi-item-egds-sheet"),j=(0,n.useRef)(null),b=(0,n.useCallback)(a=>{var t;return null===(t=e.sheetTypes)||void 0===t||null===(t=t.find(e=>e.viewSize===a))||void 0===t?void 0:t.sheetType},[e]),E=(0,n.useCallback)(()=>{j.current="closeButton",y(p.referrerId,p.linkName),S.closeDialog(),null==a||a()},[a,p,y]),k=(0,n.useCallback)(()=>{y(p.referrerId,p.linkName),S.closeDialog()},[p,S,y]),G=(0,n.useCallback)(()=>{j.current||(t?t():null==a||a())},[t,a]),N=(0,Q.s5)({SMALL:b("SMALL"),MEDIUM:b("MEDIUM"),LARGE:b("LARGE")}),T={isVisible:I,triggerRef:l,onDismiss:k,returnFocusOnClose:!0,autoFocus:!0,ariaLabel:o},F=(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(H.p,{navigationContent:{onClick:E,navIconLabel:null!=f?f:void 0},toolbarTitle:o,toolbarTitleTag:"h1",elevation:"default"}),(0,u.jsx)("div",{children:(0,u.jsx)(P.j,{blockMargin:"unset"})})]}),v=(0,u.jsx)("div",{children:(0,u.jsx)(X.K,{isVisible:I,closeCallback:G,children:(0,u.jsxs)(K.t,ge(ge({},T),{},{type:"popover",width:i,autoPosition:!0,children:[(0,u.jsx)(V.t,{children:(0,u.jsx)(s.q,{type:"button",onClick:E,children:x&&(0,u.jsx)(Ie,{data:x})})}),(0,u.jsx)(Y.Y,{padded:h,children:c})]}))})}),C=(0,u.jsx)(X.K,{isVisible:I,closeCallback:G,children:(0,u.jsxs)(K.t,ge(ge({},T),{},{type:"side",children:[F,(0,u.jsx)(Y.Y,{padded:h,children:c})]}))}),L=(0,u.jsx)(X.K,{isVisible:I,closeCallback:G,children:(0,u.jsx)(D,{children:(0,u.jsxs)(K.t,ge(ge({},T),{},{type:"full",children:[F,(0,u.jsx)(Y.Y,{padded:h,children:c})]}))})}),A=(0,u.jsx)(X.K,{isVisible:I,closeCallback:G,children:(0,u.jsx)(D,{children:(0,u.jsxs)(K.t,ge(ge({},T),{},{type:"centered",children:[(0,u.jsx)(q.EGDSThemeProvider,{isColorThemeContainer:!0,config:{lightMode:{colorTheme:m}},children:(0,u.jsx)(V.t,{alignment:"top",children:(0,u.jsx)(s.q,{type:"button",onClick:E,size:r.V.LARGE,children:x&&(0,u.jsx)(Ie,{data:x})})})}),(0,u.jsx)(Y.Y,{padded:h,children:c})]}))})}),M=(0,u.jsx)(X.K,{isVisible:I,closeCallback:G,children:(0,u.jsx)(D,{children:(0,u.jsxs)(K.t,ge(ge({},T),{},{type:"bottom",children:[(0,u.jsx)(q.EGDSThemeProvider,{isColorThemeContainer:!0,config:{lightMode:{colorTheme:m}},children:(0,u.jsx)(V.t,{alignment:"top",children:(0,u.jsx)(s.q,{type:"button",onClick:E,size:r.V.LARGE,children:x&&(0,u.jsx)(Ie,{data:x})})})}),(0,u.jsx)(Y.Y,{padded:h,children:c})]}))})}),U=e=>{switch(e){case"POPOVER":return v;case"SIDE":return C;case"FULLSCREEN":return L;case"CENTERED":return A;case"BOTTOM":return M;default:return}};return(0,u.jsxs)(Q.LM,{children:[(0,u.jsx)(Q.NP,{children:U(N)}),(0,u.jsx)(Q.rw,{children:U(N)}),(0,u.jsx)(Q.zQ,{children:U(N)})]})};Oa.fragment=Ra,Oa.displayName="sharedui-MultiItemEGDSSheet";const Ka=m.J1`
  fragment EGDSMoreInfoTriggerComponentFragment on EGDSMoreInfoTrigger {
    icon {
      ...EGDSIconFragment
    }
    text
    triggerAction {
      analytics {
        referrerId
        linkName
      }
      sheet {
        ...EGDSSheetFragment
      }
      text
    }
    analytics {
      referrerId
      linkName
    }
  }

  ${Oa.fragment}
  ${Ie.fragment}
`,Ya=({data:e,onTriggerClick:a,popoverWidth:t,children:r})=>{const i=(0,n.useRef)(null),[,l]=(0,O.useDialog)("egds-more-info-trigger"),{icon:s,text:o,analytics:c,triggerAction:d}=e,m=(0,g.KY)(),h=(0,n.useCallback)(()=>{l.toggleDialog(),null==a||a(),d.analytics&&m(d.analytics.referrerId,d.analytics.linkName)},[a,m,d.analytics]);return(0,n.useEffect)(()=>{c&&m(c.referrerId,c.linkName)},[c]),(0,u.jsxs)(_.P,{display:"inline-block","data-stid":"egds-more-info-trigger",children:[(0,u.jsx)(R.t,{theme:s.theme?_a[s.theme]:void 0,onClickCapture:h,children:(0,u.jsxs)("button",{type:"button",ref:i,children:[o,(0,u.jsx)(Ie,{data:s})]})}),(0,u.jsx)(Oa,{data:d.sheet,width:t,triggerRef:i,dialogId:"egds-more-info-trigger",children:r})]})};Ya.displayName="MultiItemEGDSMoreInfoTrigger",Ya.fragment=Ka;const Va=m.J1`
  fragment EGDSSectionContainerFragment on EGDSSectionContainer {
    elements {
      ...EGDSElementFragment
    }
  }

  ${Na.fragment}
`,Xa=({data:{elements:e}})=>(0,u.jsx)(N.X,{direction:"column",children:(0,u.jsx)(F.N,{margin:"two",children:(0,u.jsx)("div",{children:e.map((e,a)=>(0,u.jsx)(T.C,{children:(0,u.jsx)(F.N,{margin:{inlinestart:"two",blockstart:"one"},children:(0,u.jsx)("div",{children:(0,u.jsx)(Na,{data:e})})})},a))})})});Xa.fragment=Va,Xa.displayName="EGDSSectionContainer";const Ha=m.J1`
  fragment EGDSSpannableListItemFragment on EGDSSpannableListItem {
    text {
      ...EGDSSpannableTextFragment
    }
  }

  ${fa.fragment}
`,Wa=({textSize:e,data:a})=>(0,u.jsx)("div",{children:(0,u.jsx)(fa,{data:a.text,textProps:{size:e,inline:!0}})});Wa.fragment=Ha,Wa.displayName="EGDSSpannableListItem";const qa=m.J1`
  fragment EGDSSpannableListFragment on EGDSSpannableList {
    items {
      ...EGDSSpannableListItemFragment
    }
    listType
    __typename
  }

  ${Wa.fragment}
`,Qa=e=>{switch(e){case"BULLET":return"default";case"ICON":return"icon-standard";case"NO_BULLET":return"no-bullet";case"NUMBER":return"tiered-numbered";default:return}},Za=({data:e,leadingTextSize:a,textSize:t,leadingItemSpacing:n,itemSpacing:r})=>{if(!e)return null;const{listType:i,items:l}=e;return 0===l.length?null:(0,u.jsx)(k.y,{bullet:Qa(i),spacing:!1,children:l.map((e,i)=>{const l=0===i&&a?a:t,s=0===i?n:r,o=(0,u.jsx)(G.x,{children:(0,u.jsx)(Wa,{data:e,textSize:l})},`spannablelist-${i}`);return r?(0,u.jsx)(_.P,{type:"relative",position:s,cloneElement:!0,children:o}):o})})};Za.fragment=qa,Za.displayName="EGDSSpannableList";const et=m.J1`
  fragment EGDSStandardMessagingCardFragment on EGDSStandardMessagingCard {
    heading
    message
    background
    themes
    dismiss {
      accessibility
      analytics {
        ...ClientSideAnalyticsFragment
      }
    }
    impressionTracking {
      ...ClientSideAnalyticsFragment
    }
    buttons {
      ...EGDSButtonFragment
    }
    links {
      ...EGDSStandardLinkFragment
    }
    graphic {
      ...UIGraphicFragment
    }
  }

  fragment ClientSideAnalyticsFragment on ClientSideAnalytics {
    referrerId
    linkName
  }

  ${_e.fragment}
  ${Ye.fragment}
  ${ke.fragment}
`,at=({data:e,buttonAsLink:a,buttonAction:t,className:i})=>{var l,o,c;const{heading:d,message:m,background:h,themes:p,buttons:f,links:y,impressionTracking:I,dismiss:S,graphic:j}=e,E=(0,g.KY)(),k=null!==(l=null==p?void 0:p.includes("BORDERED"))&&void 0!==l&&l,G=null!==(o=null==p?void 0:p.includes("PADDED"))&&void 0!==o&&o,[P,v]=(0,n.useState)(!1),C=()=>{null==t||t()},L=(0,n.useMemo)(()=>(0,u.jsx)(F.N,{children:(0,u.jsx)(N.X,{children:null==f?void 0:f.map((e,t)=>(0,u.jsx)(F.N,{margin:{block:"UITertiaryButton"===e.__typename?"unset":"two",inlinestart:"UITertiaryButton"===e.__typename?"unset":"two"},children:(0,u.jsx)("div",{children:(0,u.jsx)(T.C,{children:(0,u.jsx)(_e,{data:e,onClick:C,size:r.V.MEDIUM,buttonAsLink:a})})})},t))})}),[f]),M=(0,n.useMemo)(()=>(0,u.jsx)(F.N,{children:(0,u.jsx)(N.X,{children:null==y?void 0:y.map((e,a)=>(0,u.jsx)(F.N,{padding:{inline:"two",block:"two"},margin:{inlinestart:0===a?"unset":"two"},children:(0,u.jsx)(T.C,{children:(0,u.jsx)("div",{children:(0,u.jsx)(Ye,{data:e})})})},a))})}),[y]),U=(0,n.useMemo)(()=>(0,u.jsxs)(u.Fragment,{children:[d&&(0,u.jsx)(T.C,{children:(0,u.jsx)(F.N,{padding:{blockstart:"three",blockend:"half",inline:"three"},children:(0,u.jsx)(D.M,{tag:"h3",children:d})})}),(0,u.jsx)(T.C,{children:(0,u.jsx)(F.N,{padding:{blockstart:d?"unset":"three",inline:"three"},children:(0,u.jsx)(b.D,{children:m})})})]}),[d,m]),$=(0,u.jsx)(A.g,{backgroundTheme:h,border:k,padded:G,className:i,children:(0,u.jsxs)(N.X,{direction:"row",alignItems:"start",justifyContent:"space-between",children:[(0,u.jsx)(T.C,{alignSelf:"center",children:j&&(0,u.jsx)(F.N,{padding:"three",margin:{inlinestart:"three"},children:(0,u.jsx)("div",{children:(0,u.jsx)(ke,{data:j})})})}),(0,u.jsx)(T.C,{grow:1,children:(0,u.jsxs)(N.X,{direction:"column",alignItems:"start",justifyContent:"start",children:[(0,u.jsx)(T.C,{children:U}),(0,u.jsx)(T.C,{children:(0,u.jsx)(F.N,{padding:{blockend:"one",inlinestart:"one"},children:(0,u.jsxs)(N.X,{alignItems:"center",space:"four",justifyContent:"end",children:[f&&f.length>0&&(0,u.jsx)(T.C,{children:L}),y&&y.length>0&&(0,u.jsx)(T.C,{children:M})]})})})]})}),S&&(0,u.jsx)(T.C,{children:(0,u.jsx)(F.N,{margin:{blockstart:"two",inlineend:"two"},children:(0,u.jsx)(s.q,{type:"button","aria-label":null!==(c=S.accessibility)&&void 0!==c?c:void 0,size:r.V.MEDIUM,onClick:()=>{(null==S?void 0:S.analytics)&&E(S.analytics.referrerId,S.analytics.linkName),v(!P)},isFullWidth:!0,children:(0,u.jsx)(x.LD,{name:"close",size:x.So.MEDIUM})})})})]})});if(P)return null;if(I){const{referrerId:e,linkName:a}=I;return(0,u.jsx)(g.ee,{referrerId:e,linkName:a,intersectionOptions:{threshold:.5},children:$})}return(0,u.jsx)(u.Fragment,{children:$})};at.displayName="EGDSStandardMessagingCard",at.fragment=et;const tt=m.J1`
  fragment EGDSDialogToolbarFragment on EGDSDialogToolbar {
    closeText
    title
  }
`,nt=({data:e,toolbarType:a,toolbarAction:t})=>{var n;return(0,u.jsx)(H.p,{toolbarTitle:e.title,navigationContent:{navType:a,navIconLabel:null!==(n=e.closeText)&&void 0!==n?n:void 0,onClick:t}})};nt.fragment=tt,nt.displayName="EGDSDialogToolbar";const rt=m.J1`
  fragment CrossSellLegalDisclaimerDialogFragment on CrossSellLegalDisclaimerDialog {
    dialog {
      closeAnalytics {
        ...ClientSideAnalyticsFragment
      }
      footer {
        ...EGDSActionDialogFooterFragment
      }
    }
    graphic {
      ...UIGraphicFragment
    }
    text
    analytics {
      ...ClientSideAnalyticsFragment
    }
    content
    accessibility
  }

  fragment ClientSideAnalyticsFragment on ClientSideAnalytics {
    referrerId
    linkName
  }

  ${ke.fragment}
  ${xe.fragment}
`,it=({data:e})=>{const[a,t,r]=(0,O.useDialog)("cross-sell-legal-disclaimer-dialog"),i=(0,g.KY)(),l=(0,n.useRef)(null),{graphic:s,dialog:d,analytics:m,text:h,content:p,accessibility:f}=e,y=(0,n.useCallback)(()=>{t.closeDialog(),d.closeAnalytics&&i(d.closeAnalytics.referrerId,d.closeAnalytics.linkName)},[t,i,d.closeAnalytics]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(S.i,{inline:!0,onClick:()=>{t.openDialog(),i(m.referrerId,m.linkName)},children:(0,u.jsx)("button",{type:"button",ref:l,"data-testid":"cross-sell-disclaimer-more-info",children:(0,u.jsx)(b.D,{children:(0,u.jsx)(ke,{data:s,iconProps:{defaultIconSize:x.So.SMALL}})})})}),(0,u.jsx)(X.K,{isVisible:a,children:(0,u.jsx)(r,{children:(0,u.jsx)(o.Q,{ariaLabel:f,dialogShow:a,returnFocusOnClose:!0,triggerRef:l,closeCallback:y,children:(0,u.jsxs)(c.h,{children:[h&&(0,u.jsx)(b.D,{children:h}),null==p?void 0:p.map((e,a)=>(0,u.jsx)(j.u,{children:e},a)),(0,u.jsx)(xe,{data:d.footer,onDialogClose:y})]})})})})]})};it.fragment=rt,it.displayName="CrossSellLegalDisclaimerDialog";const lt=m.J1`
  fragment CrossSellMessageItemFragment on CrossSellMessageItem {
    crossSellMessage
    disclaimerDialog {
      ...CrossSellLegalDisclaimerDialogFragment
    }
  }

  ${it.fragment}
`,st={inlineend:"half"},ot=({data:e,textWeight:a,textTheme:t})=>{const{crossSellMessage:n,disclaimerDialog:r}=e;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(F.N,{margin:st,children:(0,u.jsx)(b.D,{size:300,theme:t,weight:a,inline:!0,children:n})}),r&&(0,u.jsx)(it,{data:r})]})};ot.fragment=lt,ot.displayName="CrossSellMessageItem";const ct=m.J1`
  fragment CrossSellSecondaryFragment on CrossSellSecondary {
    ...CrossSellMessageItemFragment
  }

  ${ot.fragment}
`,dt={inline:"two",blockstart:"two"},mt=({data:e})=>"CrossSellMessageItem"===e.__typename?(0,u.jsx)(F.N,{padding:dt,children:(0,u.jsx)("div",{children:(0,u.jsx)(ot,{data:e})})}):null;mt.fragment=ct,mt.displayName="CrossSellSecondary";const gt=m.J1`
  fragment MishopUICollapsableSectionTitleFragment on EGDSText {
    ...EGDSTextFragment
  }

  ${Ia.fragment}
`,ut=({data:e})=>(0,u.jsx)(F.N,{margin:{inlinestart:"two",blockstart:"one"},children:(0,u.jsx)("div",{children:(0,u.jsx)(Ia,{textProps:{size:500},data:e})})});ut.fragment=gt,ut.displayName="MishopUICollapsableSectionTitle";const ht=m.J1`
  fragment MishopUICollapsableSectionFragment on MishopUICollapsableSection {
    title {
      ...MishopUICollapsableSectionTitleFragment
    }
    content {
      ...EGDSSectionContainerFragment
    }
  }

  ${ut.fragment}
  ${Xa.fragment}
`,pt=({data:{title:e,content:a},border:t})=>{const[r,i]=(0,n.useState)(!1);return(0,u.jsxs)(A.g,{border:t,children:[(0,u.jsxs)(M.E,{padded:!0,children:[(0,u.jsx)(U.w,{children:(0,u.jsx)("button",{type:"button",onClick:(0,n.useCallback)(()=>i(e=>!e),[]),className:"is-focusable",children:(0,u.jsx)(ut,{data:e})})}),(0,u.jsxs)(N.X,{children:[(0,u.jsx)(T.C,{grow:1,children:(0,u.jsx)(b.D,{size:500,weight:"bold",theme:"standard",children:(0,u.jsx)(ut,{data:e})})}),(0,u.jsx)(T.C,{alignSelf:"center",grow:0,children:(0,u.jsx)(M.E,{padded:[],children:(0,u.jsx)(x.LD,{name:r?"expand_less":"expand_more",size:x.So.SMALL})})})]})]}),r&&(0,u.jsx)(M.E,{children:(0,u.jsx)(F.N,{padding:{inlinestart:"one",block:"one"},children:(0,u.jsx)("div",{children:a.map((e,a)=>"EGDSSectionContainer"===e.__typename?(0,u.jsx)(Xa,{data:e},a):null)})})})]})};pt.fragment=ht,pt.displayName="MishopUICollapsableSection";const xt=m.J1`
  fragment EGDSMedia on Media {
    ... on Image {
      url
      description
    }
    ... on Video {
      uri: url {
        value
      }
      description
    }
  }
`,ft="detailMediaGalleryDialog",yt="pwaDetailMediaGallery",It="thumbnailMediaGalleryDialog",St="pwaThumbnailMediaGallery",Dt=m.J1`
  fragment MishopUIDetailMediaGalleryFragment on MishopUIDetailMediaGallery {
    closeAnalytics {
      linkName
      referrerId
    }
    closeText
    navigationAnalytics {
      linkName
      referrerId
    }
  }
`,jt=({currentIndex:e,images:a,data:t,triggerRef:n,carouselId:r})=>{const{closeAnalytics:i,closeText:l,navigationAnalytics:s}=t,[o,c,d]=(0,O.useDialog)(`${ft}-${r}`,yt),m=(0,g.KY)(),h={id:s.referrerId,description:s.linkName,callback:(e,a)=>m(e,a)};return(0,u.jsx)(X.K,{isVisible:o,children:(0,u.jsx)(d,{children:(0,u.jsxs)(K.t,{type:"full",isVisible:o,triggerRef:n,returnFocusOnClose:!0,children:[(0,u.jsx)(W.b,{overlay:!0,navigationContent:{navButtonId:"EGDSMediaGalleryImageToolbar",onClick:()=>{m(i.referrerId,i.linkName),c.closeDialog()},navIconLabel:l,navType:"close"}}),(0,u.jsx)(ee.C,{images:a,analytics:h,galleryName:"DetailMediaGallery",currentIndex:e})]})})})};jt.fragment=Dt,jt.displayName="MishopUIDetailMediaGallery";const bt=m.J1`
  fragment MishopUIThumbnailMediaGalleryFragment on MishopUIThumbnailMediaGallery {
    analytics {
      linkName
      referrerId
    }
    mediaAction {
      analytics {
        linkName
        referrerId
      }
      mediaDetailGallery {
        ...MishopUIDetailMediaGalleryFragment
      }
    }
    toolbar {
      ...EGDSDialogToolbarFragment
    }
  }

  ${nt.fragment}
  ${jt.fragment}
`,Et=({setThumbnailImageIndex:e,images:a,data:t,triggerRef:n,carouselId:r})=>{const{analytics:i,mediaAction:l,toolbar:s}=t,o=(0,g.KY)(),[d,m,h]=(0,O.useDialog)(`${It}-${r}`,St),[,p]=(0,O.useDialog)(`${ft}-${r}`,yt);return(0,u.jsx)(X.K,{isVisible:d,children:(0,u.jsx)(h,{children:(0,u.jsxs)(K.t,{centeredSheetSize:"small",type:"centered",isVisible:d,returnFocusOnClose:!0,triggerRef:n,children:[(0,u.jsx)(nt,{data:s,toolbarAction:()=>{o(i.referrerId,i.linkName),m.closeDialog()},toolbarType:"back"}),(0,u.jsx)(c.h,{zeroPadding:!0,children:(0,u.jsx)(ae.B,{images:a,onImageSelected:a=>{if(l){const{referrerId:t,linkName:n}=l.analytics;e(a),o(t,n),p.openDialog()}},focusIndex:-1})})]})})})};Et.fragment=bt,Et.displayName="MishopUIThumbnailMediaGallery";const kt=m.J1`
  fragment MishopUIGalleryCarouselFragment on MishopUIGalleryCarousel {
    accessibilityHeadingText
    galleryOverlayButton {
      analytics {
        linkName
        referrerId
      }
      mediaThumbnailGallery {
        ...MishopUIThumbnailMediaGalleryFragment
      }
    }
    media {
      media {
        ...EGDSMedia
      }
    }
    mediaAction {
      analytics {
        linkName
        referrerId
      }
      mediaDetailGallery {
        ...MishopUIDetailMediaGalleryFragment
      }
    }
    navigationAnalytics {
      linkName
      referrerId
    }
    nextButtonText
    previousButtonText
  }

  ${xt}
  ${jt.fragment}
  ${Et.fragment}
`,Gt=({data:e,carouselId:a,allyHeadingLevel:t,ratio:r})=>{const{accessibilityHeadingText:i,galleryOverlayButton:l,media:s,mediaAction:o,navigationAnalytics:c,nextButtonText:d,previousButtonText:m}=e,h=d&&m?{nextButton:d,prevButton:m}:void 0,[p,x]=(0,n.useState)(0),[f,y]=(0,n.useState)(0),I=(0,n.useRef)(null),S=(0,n.useRef)(null),D=(0,g.KY)(),[,j]=(0,O.useDialog)(`${ft}-${a}`,yt),[b,E]=(0,O.useDialog)(`${It}-${a}`,St);if(!s.length)return null;const k=s.map(e=>(e=>{switch(e.__typename){case"Video":return{src:e.uri.value,alt:e.description,caption:e.description};case"Image":return{src:e.url,alt:e.description,caption:e.description};default:return{}}})(e.media)),G=c?{id:c.referrerId,description:c.linkName,callback:(e,a)=>D(e,a)}:void 0;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(Z.M,{carouselName:a,allyHeadingLevel:null!=t?t:3,allyHeadingText:i,analytics:G,carouselId:`${a}-gallery-carousel`,images:k,showGalleryButton:Boolean(l),buttonText:h,onIndexChange:x,currentIndex:p,onImageClick:()=>{if(o){const{referrerId:e,linkName:a}=o.analytics;D(e,a),j.openDialog()}},onMediaButtonClick:()=>{if(l){const{referrerId:e,linkName:a}=l.analytics;D(e,a),E.openDialog()}},ratio:r,galleryButtonRef:I,imageTriggerRef:S}),l&&(0,u.jsx)(Et,{setThumbnailImageIndex:y,images:k,data:l.mediaThumbnailGallery,triggerRef:I,carouselId:a}),o&&(0,u.jsx)(jt,{currentIndex:b?f:p,images:k,data:o.mediaDetailGallery,triggerRef:S,carouselId:a})]})};Gt.fragment=kt,Gt.displayName="MishopUIGalleryCarousel";const Nt=m.J1`
  fragment MishopUIJumpLinkButtonFragment on MishopUIJumpLinkButton {
    accessibility
    jumpTo
    label
  }
`,Tt=({data:e})=>{const{accessibility:a,jumpTo:t,label:n}=e,{scrollTo:r}=(0,E.xC)();return(0,u.jsx)(i.y,{"aria-label":a,onClick:()=>{r(t,[])},children:n})};Tt.fragment=Nt,Tt.displayName="MishopUIJumpLinkButton";const Ft={thresholds:[1]},Pt=m.J1`
  fragment MishopUIJumpLinkNavigationBarFragment on MishopUIJumpLinkNavigationBar {
    selectedTabId
    tabs {
      ...MishopUINavigationBarTabFragment
    }
  }

  fragment MishopUINavigationBarTabFragment on MishopUINavigationBarTab {
    accessibility
    label
    tabId
    analytics {
      linkName
      referrerId
    }
  }
`,vt=({data:e,tabsType:a})=>{const{tabs:t}=e,r=(0,g.KY)(),{getTargets:i}=(0,E.OK)(),l=i(t.map(e=>e.tabId)),[s,o]=(0,n.useState)(0);(0,E.c5)((0,n.useMemo)(()=>t.map(e=>{var a;return{id:e.tabId,ref:null!==(a=l[e.tabId])&&void 0!==a?a:(0,n.createRef)()}}),[t,l]),(0,n.useCallback)(((e,a)=>t=>{Object.keys(t).forEach(n=>{t[n]!==E.h1.PARTIAL_TOP&&t[n]!==E.h1.SPAN_VIEWPORT||e(a.findIndex(e=>e.tabId===n))})})(o,t),[t]),Ft);return(0,u.jsx)(ne.IN,{navigationType:ne.so.JUMPLINK,selectedTab:s,onTabSelect:e=>{const a=t[e];var n;e!==s&&a&&(r(a.analytics.linkName,a.analytics.referrerId),o(e),null===(n=l[a.tabId])||void 0===n||null===(n=n.current)||void 0===n||n.focus())},scrollOffsetSelf:!0,tabsType:a,children:t.map((e,a)=>(0,u.jsx)(te.X,{name:e.label,id:e.tabId,targetRef:l[e.tabId],targetURI:`#${e.tabId}`,children:e.accessibility&&(0,u.jsx)(b.D,{className:"is-visually-hidden",children:e.accessibility})},`${e.tabId}-${a}`))})};vt.fragment=Pt,vt.displayName="MishopUIJumpLinkNavigationBar";const Ct=m.J1`
  fragment MishopUIBannerFragment on MishopUIBanner {
    banner {
      fullWidth
      heading
      icon {
        id
      }
      message
    }
  }
`,Lt=({data:e})=>{const{banner:{heading:a,message:t,icon:n,fullWidth:r}}=e;return(0,u.jsx)(re.O,{fullWidth:null!=r&&r,children:(0,u.jsxs)(N.X,{alignItems:"center",children:[n&&(0,u.jsx)(T.C,{children:(0,u.jsx)(F.N,{margin:{inlinestart:"four",inlineend:"six"},children:(0,u.jsx)(x.LD,{name:n.id})})}),(0,u.jsx)(T.C,{children:(0,u.jsxs)("div",{children:[a&&(0,u.jsx)(D.M,{tag:"h2",children:a}),(0,u.jsx)(b.D,{children:t})]})})]})})};Lt.fragment=Ct,Lt.displayName="MishopUIBanner";const At=m.J1`
  fragment MishopUIPlacardFragment on MishopUIPlacard {
    ... on MishopUIBanner {
      ...MishopUIBannerFragment
    }
  }

  ${Lt.fragment}
`,Mt=({data:e})=>"MishopUIBanner"===e.__typename?(0,u.jsx)(Lt,{data:e}):null;Mt.fragment=At,Mt.displayName="MishopUIPlacard";const Ut=Object.freeze({NEGATIVE:"negative",POSITIVE:"positive",EMPHASIS:"emphasis",PRIMARY:"emphasis",LOYALTY:"loyalty",SECONDARY:"default",INVERSE:"inverse"}),$t=Object.freeze({BOLD:"bold",MEDIUM:"medium",REGULAR:"regular"}),Bt=m.J1`
  fragment MishopUIProductHeaderFragment on MishopUIProductHeader {
    icon {
      id
      description
    }
    primary {
      text
    }
    secondaries {
      text
      theme
      weight
      accessibility
    }
    referenceId
    partnerMessagePrimer {
      ...PackageUIPartnerMessagePrimerFragment
    }
  }
  ${m.J1`
  fragment PackageUIPartnerMessagePrimerFragment on PackageUIPartnerMessagePrimer {
    lob
    pageType
    packageType
  }
`}
`,zt={blockstart:"three"},wt=({iconProps:e,headingProps:a,textProps:t,data:n})=>{const{icon:r,primary:i,secondaries:l,referenceId:s}=n,o=ge(ge({},a),{},{typeStyle:la(null==a?void 0:a.size)});return(0,u.jsxs)(E.Rn,{name:s,tabIndex:-1,children:[(0,u.jsx)(F.N,{padding:zt,children:(0,u.jsxs)(N.X,{alignItems:"center",children:[r&&(0,u.jsx)(T.C,{children:(0,u.jsx)(F.N,{margin:{inlineend:"one"},children:(0,u.jsx)(x.LD,ge({description:r.description,id:r.id,name:r.id},e))})}),(0,u.jsx)(T.C,{alignSelf:"center",children:(0,u.jsx)(F.N,{children:(0,u.jsx)(D.M,ge(ge({},o),{},{children:i.text}))})})]})}),l.map((e,a)=>(0,u.jsx)(b.D,ge(ge({},t),{},{theme:e.theme?Ut[e.theme]:void 0,weight:e.weight?$t[e.weight]:void 0,children:e.text}),a))]})};wt.fragment=Bt,wt.displayName="MishopUIProductHeader";const Jt=m.J1`
  fragment MishopUITextFragment on MishopUIText {
    text
    theme
    weight
    accessibility
  }
`,_t=({data:e,size:a,inline:t})=>(0,u.jsx)(b.D,{size:a,inline:t,theme:e.theme?Ut[e.theme]:void 0,weight:e.weight?$t[e.weight]:void 0,children:e.accessibility?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("span",{"aria-hidden":"true",children:e.text}),(0,u.jsx)("span",{className:"is-visually-hidden",children:e.accessibility})]}):e.text});_t.fragment=Jt,_t.displayName="MishopUIText";const Rt=m.J1`
  fragment EGUisMicroMessageFragment on EGUisMicroMessage {
    messageContent
    schemaName
  }
`,Ot=m.J1`
  fragment PackageUIButtonFragment on PackageUIButton {
    button {
      ...EGDSButtonFragment
    }
    action {
      ...UILinkActionFragment
    }
  }

  fragment UILinkActionFragment on UILinkAction {
    analytics {
      linkName
      referrerId
      uisPrimeMessages {
        ...EGUisMicroMessageFragment
      }
    }
    resource {
      value
    }
    target
  }

  ${_e.fragment}
  ${Rt}
`,Kt={EXTERNAL:"_blank",INTERNAL:"_self"},Yt=({data:e,size:a,isFullWidth:t,buttonAsLink:n})=>{const r=(0,g.KY)(),{track:l}=(0,g._q)(),{button:s,action:o}=e,c=()=>{if("UILinkAction"===o.__typename){const{analytics:a,resource:t,target:n}=o;r(a.referrerId,a.linkName),l(g.p3.EVENT,{data:(e=a.uisPrimeMessages,e.map(e=>({messageContent:JSON.parse(e.messageContent),schemaName:e.schemaName})))}),window.open(t.value,Kt[n])}var e};return"UIPrimaryButton"===s.__typename&&n?(0,u.jsx)(i.y,{onClick:c,size:a,isFullWidth:t,tag:"a","aria-hidden":"true",tabIndex:-1,children:s.primary}):(0,u.jsx)(_e,{data:s,onClick:c,size:a,isFullWidth:t})};Yt.fragment=Ot,Yt.displayName="PackageUIButton";const Vt=m.J1`
  fragment PackageUIMessageItemFragment on PackageUIMessageItem {
    ...EGDSPlainTextFragment
    ...EGDSStylizedTextFragment
    ...EGDSSpannableTextFragment
  }

  ${ea.fragment}
  ${ia.fragment}
  ${fa.fragment}
`,Xt=({data:e,size:a,inline:t})=>{switch(e.__typename){case"EGDSPlainText":return(0,u.jsx)(ea,{textProps:{size:a,inline:t},data:e});case"EGDSStylizedText":return(0,u.jsx)(ia,{textProps:{size:a,inline:t},data:e});case"EGDSSpannableText":return(0,u.jsx)(fa,{textProps:{size:a,inline:t},data:e});default:return null}};Xt.fragment=Vt,Xt.displayName="PackageUIMessageItem";const Ht=m.J1`
  fragment PackageUIDisclaimerDialogFragment on PackageUIDisclaimerDialog {
    analytics {
      ...ClientSideAnalyticsFragment
    }
    dialog {
      closeAnalytics {
        ...ClientSideAnalyticsFragment
      }
      footer {
        ...EGDSActionDialogFooterFragment
      }
    }
    graphic {
      ...UIGraphicFragment
    }
    text
    analyticsPayload
  }
  fragment ClientSideAnalyticsFragment on ClientSideAnalytics {
    referrerId
    linkName
  }

  ${xe.fragment}
  ${ke.fragment}
`,Wt=({data:e,label:a,strikeThroughPrice:t,inline:r})=>{const[i,l,s]=(0,O.useDialog)(`packageDisclaimerDialog-${(0,ie.D4)()}`),d=(0,g.KY)(),m=(0,g.iQ)(),h=(0,n.useRef)(null),{analytics:p,dialog:f,graphic:y,text:I,analyticsPayload:S}=e,D=(0,n.useCallback)(()=>{l.openDialog(),d(p.referrerId,p.linkName),m(le(S))},[p,l,d,S]),j=(0,n.useCallback)(()=>{l.closeDialog(),f.closeAnalytics&&d(f.closeAnalytics.referrerId,f.closeAnalytics.linkName)},[l,d,f.closeAnalytics]),E=(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(ke,{data:y,iconProps:{defaultIconSize:x.So.SMALL}}),a&&(0,u.jsx)("span",{children:(0,u.jsx)(Xt,{data:a,inline:r})}),t&&(0,u.jsx)("s",{children:(0,u.jsx)(b.D,{"aria-hidden":"true",children:t})})]}),k=(0,u.jsx)("button",{type:"button",name:"disclaimer-button","data-testid":"package-ui-disclaimer-label",onClick:D,className:r?void 0:"uitk-more-info-trigger",ref:h,children:E});return(0,u.jsxs)(u.Fragment,{children:[r?k:(0,u.jsx)(N.X,{children:k}),(0,u.jsx)(X.K,{isVisible:i,children:(0,u.jsx)(s,{children:(0,u.jsx)(o.Q,{dialogShow:i,returnFocusOnClose:!0,closeCallback:j,triggerRef:h,ariaLabel:I,children:(0,u.jsxs)(c.h,{children:[(0,u.jsx)(b.D,{children:I}),(0,u.jsx)(xe,{data:f.footer,onDialogClose:j})]})})})})]})};Wt.fragment=Ht,Wt.displayName="PackageUIDisclaimerDialog";const qt=m.J1`
  fragment PackageUIEmptyStateErrorFragment on PackageUIEmptyStateError {
    icon {
      ...EGDSIconFragment
    }
    primary {
      ...EGDSHeadingFragment
    }
    secondaries {
      ...EGDSTextFragment
    }
  }

  ${Ie.fragment}
  ${Ia.fragment}
  ${oa.fragment}
`,Qt=({data:{icon:e,primary:a,secondaries:t}})=>(0,u.jsxs)(N.X,{direction:"column",alignItems:"center",children:[(0,u.jsx)(Ie,{data:e,defaultIconSize:x.So.XLARGE}),(0,u.jsx)(F.N,{padding:{blockstart:"six"},children:(0,u.jsx)("div",{children:(0,u.jsx)(oa,{data:a,headingProps:{size:5}})})}),t.length>0&&(0,u.jsx)(F.N,{margin:{blockstart:"one"},children:(0,u.jsx)("div",{children:t.map((e,a)=>(0,u.jsx)(Ia,{data:e,textProps:{size:300}},a))})})]});Qt.fragment=qt,Qt.displayName="PackageUIEmptyStateErrorFragment";const Zt=m.J1`
  fragment PackageUIEntryCardActionFragment on PackageUIEntryCardAction {
    ...PackageUIButtonFragment
  }

  ${Yt.fragment}
`,en=({data:e})=>"PackageUIButton"===e.__typename?(0,u.jsx)(Yt,{data:e}):null;en.fragment=Zt,en.displayName="PackageUIEntryCardAction";const an=m.J1`
  fragment PackageUIGraphicTextListFragment on PackageUIGraphicTextList {
    textItems {
      ...EGDSGraphicTextFragment
    }
  }

  ${Qe.fragment}
`,tn=({data:{textItems:e},margin:a})=>(0,u.jsx)(F.N,{margin:a,children:(0,u.jsx)(N.X,{space:"three",children:e.map((e,a)=>(0,u.jsx)(T.C,{children:(0,u.jsx)(Qe,{data:e})},`package-ui-graphic-text-list-${a}`))})});tn.fragment=an,tn.displayName="PackageUIGraphicTextList";const nn=m.J1`
  fragment PackageUIInlineElementFragment on PackageUIInlineElement {
    __typename
    ...EGDSPlainTextFragment
    ...EGDSStylizedTextFragment
    ...EGDSStandardBadgeFragment
  }

  ${ea.fragment}
  ${ia.fragment}
  ${Ce.fragment}
`,rn=({data:e})=>{switch(e.__typename){case"EGDSStandardBadge":return(0,u.jsx)(Ce,{data:e});case"EGDSPlainText":return(0,u.jsx)(ea,{data:e});case"EGDSStylizedText":return(0,u.jsx)(ia,{data:e});default:return null}};rn.fragment=nn,rn.displayName="PackageUIInlineElement";const ln=m.J1`
  fragment PackageUIInlineContentFragment on PackageUIInlineContent {
    elements {
      ...PackageUIInlineElementFragment
    }
  }

  ${rn.fragment}
`,sn=({data:{elements:e},margin:a})=>(0,u.jsx)(F.N,{margin:a,children:(0,u.jsx)(N.X,{space:"one",children:e.map((e,a)=>(0,u.jsx)(T.C,{children:(0,u.jsx)(rn,{data:e})},`package-ui-inline-content-${a}`))})});sn.fragment=ln,sn.displayName="PackageUIInlineContent";const on=m.J1`
  fragment PackageUIMessagingCardFragment on PackageUIMessagingCard {
    graphic {
      ...UIGraphicFragment
    }
    secondaries {
      ...EGDSTextFragment
    }
    action {
      ...PackageUIButtonFragment
    }
  }

  ${Ia.fragment}
  ${ke.fragment}
  ${Yt.fragment}
`,cn=({data:e,border:a})=>{const{graphic:t,secondaries:n,action:r}=e;return 0===n.length?null:(0,u.jsx)(A.g,{padded:!0,border:a,children:(0,u.jsxs)(w.w,{alignItems:"center",justifyItems:"center",children:[t&&(0,u.jsx)(M.E,{children:(0,u.jsx)(ke,{data:t})}),(0,u.jsx)(M.E,{padded:["inlineend","inlinestart"],children:n.map((e,a)=>(0,u.jsx)(Ia,{data:e,textProps:{align:"center"}},`secondary-${a}`))}),r&&(0,u.jsx)(M.E,{children:(0,u.jsx)(Yt,{data:r})})]})})};cn.fragment=on,cn.displayName="PackageUIMessagingCard";const dn={100:100,200:200,300:300,400:400,500:500,600:600,700:700,800:800,900:900},mn=m.J1`
  fragment PackageUIStrikethroughPriceFragment on PackageUIStrikethroughPrice {
    price
    disclaimer {
      ...PackageUIDisclaimerDialogFragment
    }
  }

  ${Wt.fragment}
`,gn=({data:e})=>(0,u.jsx)(Wt,{data:e.disclaimer,strikeThroughPrice:e.price});gn.fragment=mn,gn.displayName="PackageUIStrikethroughPrice";const un=m.J1`
  fragment PackageUIPriceDisplayFragment on PackageUIPriceDisplay {
    price
    textSize
    strikethroughPrice {
      ...PackageUIStrikethroughPriceFragment
    }
  }

  ${gn.fragment}
`,hn=({data:e,strikethroughPricePosition:a="top"})=>{var t,n;const{price:r,strikethroughPrice:i}=e,l=null!==(t=dn[null!==(n=e.textSize)&&void 0!==n?n:300])&&void 0!==t?t:300;return(0,u.jsxs)(N.X,{alignItems:"top"===a?"end":"center",direction:"top"===a?"column":"row",children:[i&&(0,u.jsx)(T.C,{children:(0,u.jsx)(gn,{data:i})}),(0,u.jsx)(T.C,{children:(0,u.jsx)(b.D,{weight:"bold",size:l,children:r})})]})};hn.fragment=un,hn.displayName="PackageUIPriceDisplay";const pn=m.J1`
  fragment PackageUIPriceFragment on PackageUIPrice {
    badge {
      ...EGDSBadgeFragment
    }
    priceDisplay {
      ...PackageUIPriceDisplayFragment
    }
    messageItems {
      ...PackageUIMessageItemFragment
    }
    accessibility
  }

  ${hn.fragment}
  ${Xt.fragment}
  ${Ae.fragment}
`,xn=({data:e,strikethroughPricePosition:a})=>{const{badge:t,priceDisplay:n,messageItems:r,accessibility:i}=e;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("span",{className:"is-visually-hidden",children:i}),(0,u.jsxs)(w.w,{justifyItems:"end",space:"half",children:[t&&(0,u.jsx)(J.T,{children:(0,u.jsx)(Ae,{data:t,iconSize:x.So.EXTRA_SMALL})}),(0,u.jsx)(J.T,{children:(0,u.jsx)(hn,{data:n,strikethroughPricePosition:a})}),r.map((e,a)=>(0,u.jsx)(J.T,{children:(0,u.jsx)(Xt,{data:e,size:100})},`message-item-${a}`))]})]})};xn.fragment=pn,xn.displayName="PackageUIPrice";const fn=m.J1`
  fragment DateFragment on Date {
    day
    month
    year
  }
`,yn=(m.J1`
  fragment DateTimeFragment on DateTime {
    day
    month
    year
    hour
    minute
    second
  }
`,m.J1`
  fragment FlightNaturalKeyFragment on FlightNaturalKey {
    offerToken
    productTokens
    travelers {
      age
      type
    }
  }
`),In=m.J1`
  fragment GroundTransfersNaturalKeyFragment on GroundTransfersNaturalKey {
    offerToken
  }
`,Sn=m.J1`
  fragment PackageNaturalKeyFragment on PackageNaturalKey {
    offerToken
  }
`,Dn=m.J1`
  fragment PropertyNaturalKeyFragment on PropertyNaturalKey {
    id
    roomTypeId
    ratePlanId
    ratePlanType
    inventoryType
    noCreditCard
    checkIn {
      ...DateFragment
    }
    checkOut {
      ...DateFragment
    }
    rooms {
      numberOfAdults
      childAges
    }
    shoppingPath
    businessModelType
  }

  ${fn}
`,jn=m.J1`
  fragment ActivityNaturalKeyFragment on ActivityNaturalKey {
    offerToken
    productToken
  }
`,bn=m.J1`
  fragment CarNaturalKeyFragment on CarNaturalKey {
    offerToken
    specialEquipments
  }
`,En=m.J1`
  fragment MultiItemProductsFragment on MultiItemProducts {
    flights {
      ...FlightNaturalKeyFragment
    }
    properties {
      ...PropertyNaturalKeyFragment
    }
    groundTransfers {
      ...GroundTransfersNaturalKeyFragment
    }
    activities {
      ...ActivityNaturalKeyFragment
    }
    packages {
      ...PackageNaturalKeyFragment
    }
    cars {
      ...CarNaturalKeyFragment
    }
  }

  ${yn}
  ${Dn}
  ${In}
  ${jn}
  ${Sn}
  ${bn}
`;m.J1`
  fragment PackageSearchCriteriaFragment on PackageSearchCriteria {
    primary {
      dateRange {
        end {
          ...DateFragment
        }
        start {
          ...DateFragment
        }
      }
      destination {
        airportCode
      }
      origin {
        airportCode
      }
      travelerOccupancyGroups {
        travelers {
          age
          type
        }
      }
    }
  }

  ${fn}
`,m.J1`
  fragment ShoppingContextFragment on ShoppingContext {
    multiItem {
      id
      packageType
    }
  }
`,m.J1`
  fragment ShoppedProductsFragment on ShoppedProduct {
    shoppingPath
    products {
      ...MultiItemProductsFragment
    }
  }

  ${En}
`,m.J1`
  fragment MemberSignInDialogFragment on MemberSignInDialog {
    actionDialog {
      ...SignInEGDSActionDialogFragment
    }
    dialogContent
    graphic {
      ...UIGraphicFragment
    }
    title
    triggerMessage {
      label
      accessibility
    }
  }

  fragment SignInEGDSActionDialogFragment on EGDSActionDialog {
    closeAnalytics {
      referrerId
      linkName
    }
    footer {
      ...EGDSActionDialogFooterFragment
    }
  }

  ${xe.fragment}
  ${ke.fragment}
`}}]);
//# sourceMappingURL=https://bernie-assets.s3.us-west-2.amazonaws.com/landing-pwa/shared-ui-retail-multi-item-fragments.785ceba6d617c9871d5b.js.map