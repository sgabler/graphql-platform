(self.webpackChunkbanana_cake_pop=self.webpackChunkbanana_cake_pop||[]).push([[400],{69078:function(n,e,t){"use strict";t.d(e,{X:function(){return s}});var o=t(15671),r=t(43144),a=function(){function n(){(0,o.Z)(this,n),this.version=0}return(0,r.Z)(n,[{key:"up",value:function(n){n.createObjectStore("app"),n.createObjectStore("document",{keyPath:"id"}),n.createObjectStore("schema-query-result",{keyPath:"endpoint"}),n.createObjectStore("update-log",{keyPath:"id"});var e=n.createObjectStore("history",{keyPath:"id"}),t=n.createObjectStore("node",{keyPath:"id"}),o=n.createObjectStore("workspace-sync",{keyPath:"id"});e.createIndex("day","day"),t.createIndex("children","parentId"),t.createIndex("remote","remoteId",{unique:!0}),t.createIndex("workspace","workspaceId"),o.createIndex("created","created")}}]),n}(),c=function(){function n(){(0,o.Z)(this,n),this.version=1}return(0,r.Z)(n,[{key:"up",value:function(n){n.createObjectStore("file"),n.createObjectStore("variable-json-schema",{keyPath:"id"})}}]),n}(),s=[new a,new c]},91841:function(n,e,t){"use strict";t(34502)},44477:function(n,e,t){"use strict";t.d(e,{mK:function(){return on}});var o,r,a,c,s,i,u,m,d,p,h,f,l,g,k,D,y,Z,C,v,O,A,P,w,_,I,S,b=t(30168),T=t(98434);!function(n){n.AfterResolver="AFTER_RESOLVER",n.BeforeResolver="BEFORE_RESOLVER"}(I||(I={})),function(n){n.Administrator="ADMINISTRATOR",n.Member="MEMBER",n.Owner="OWNER"}(S||(S={}));var N=(0,T.ZP)(o||(o=(0,b.Z)(["\n  fragment ThemeSettings on ThemeSettings {\n    usePreferredOsAppearance\n    darkThemeName\n    lightThemeName\n    themeName\n  }\n"]))),F=(0,T.ZP)(r||(r=(0,b.Z)(["\n  fragment Workspace on Workspace {\n    id\n    name\n  }\n"]))),W=(0,T.ZP)(a||(a=(0,b.Z)(["\n  fragment DocumentChangeLog on DocumentChangeLog {\n    __typename\n    documentId\n    workspaceId\n    path\n    version\n    changedAt\n  }\n"]))),E=(0,T.ZP)(c||(c=(0,b.Z)(["\n  fragment BasicAuthenticationFlowOptions on BasicAuthenticationFlowOptions {\n    __typename\n    username\n    password\n  }\n"]))),x=(0,T.ZP)(s||(s=(0,b.Z)(["\n  fragment BearerAuthenticationFlowOptions on BearerAuthenticationFlowOptions {\n    __typename\n    token\n    prefix\n  }\n"]))),R=(0,T.ZP)(i||(i=(0,b.Z)(["\n  fragment OAuth2AuthenticationFlowOptions on OAuth2AuthenticationFlowOptions {\n    __typename\n    activeFlowKind\n    authorizationUrl\n    audience\n    resource\n    usePkce\n    pkceMethod\n    origin\n    username\n    password\n    prefix\n    grantType\n    accessTokenUrl\n    credentialsInBody\n    clientId\n    clientSecret\n    responseType\n    redirectUrl\n    scope\n    state\n  }\n"]))),$=(0,T.ZP)(u||(u=(0,b.Z)(["\n  fragment WorkspaceDocumentAuthentication on WorkspaceDocumentAuthentication {\n    __typename\n    activeAuthenticationKind\n    basicOptions {\n      ...BasicAuthenticationFlowOptions\n    }\n    bearerOptions {\n      ...BearerAuthenticationFlowOptions\n    }\n    oAuth2Options {\n      ...OAuth2AuthenticationFlowOptions\n    }\n  }\n  ","\n  ","\n  ","\n"])),E,x,R),B=(0,T.ZP)(m||(m=(0,b.Z)(["\n  fragment WorkspaceDocument on WorkspaceDocument {\n    __typename\n    id\n    name\n    path\n    version\n    createdAt\n    modifiedAt\n    body\n    variables\n    activeConnectionKind\n    httpConnection {\n      authentication {\n        ...WorkspaceDocumentAuthentication\n      }\n      endpoint\n      headers {\n        enabled\n        name\n        value\n      }\n      includeCookies\n      subscriptionEndpoint\n      subscriptionProtocol\n      useGet\n      useTunnel\n    }\n  }\n  ","\n"])),$),M=(0,T.ZP)(d||(d=(0,b.Z)(["\n  fragment DocumentChanged on DocumentChanged {\n    ...DocumentChangeLog\n    document(onlyIfLatest: true) {\n      ...WorkspaceDocument\n    }\n  }\n  ","\n  ","\n"])),W,B),j=(0,T.ZP)(p||(p=(0,b.Z)(["\n  fragment DocumentCreated on DocumentCreated {\n    ...DocumentChangeLog\n    document(onlyIfLatest: true) {\n      ...WorkspaceDocument\n    }\n  }\n  ","\n  ","\n"])),W,B),U=(0,T.ZP)(h||(h=(0,b.Z)(["\n  fragment DocumentDeleted on DocumentDeleted {\n    ...DocumentChangeLog\n  }\n  ","\n"])),W),L=(0,T.ZP)(f||(f=(0,b.Z)(["\n  fragment DocumentChangedConflict on DocumentChangedConflict {\n    __typename\n    document {\n      ...WorkspaceDocument\n    }\n  }\n  ","\n"])),B),V=(0,T.ZP)(l||(l=(0,b.Z)(["\n  fragment DocumentChangeValidationFailed on DocumentChangeValidationFailed {\n    __typename\n    errors {\n      message\n    }\n    workspaceId\n  }\n"]))),q=(0,T.ZP)(g||(g=(0,b.Z)(["\n  fragment DocumentDeletionConflict on DocumentDeletionConflict {\n    __typename\n    workspaceId\n  }\n"]))),H=(0,T.ZP)(k||(k=(0,b.Z)(["\n  fragment DocumentNameCollisionConflict on DocumentNameCollisionConflict {\n    __typename\n    document {\n      ...WorkspaceDocument\n    }\n  }\n  ","\n"])),B),K=(0,T.ZP)(D||(D=(0,b.Z)(["\n  fragment UnexpectedErrorOnDocumentChange on UnexpectedErrorOnDocumentChange {\n    __typename\n    workspaceId\n  }\n"]))),z=(0,T.ZP)(y||(y=(0,b.Z)(["\n  fragment WorkspaceNotFoundForDocument on WorkspaceNotFoundForDocument {\n    __typename\n    workspaceId\n  }\n"]))),G=(0,T.ZP)(Z||(Z=(0,b.Z)(["\n  fragment WorkspaceDocumentChangeResult on WorkspaceDocumentChangeResult {\n    __typename\n    referenceId\n    document {\n      ...WorkspaceDocument\n    }\n    error {\n      ...DocumentChangedConflict\n      ...DocumentChangeValidationFailed\n      ...DocumentDeletionConflict\n      ...DocumentNameCollisionConflict\n      ...UnexpectedErrorOnDocumentChange\n      ...WorkspaceNotFoundForDocument\n    }\n  }\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),B,L,V,q,H,K,z),J=(0,T.ZP)(C||(C=(0,b.Z)(["\n  mutation ensureTunnelSession {\n    ensureTunnelSession {\n      tunnelSession {\n        sessionId\n        expiresIn\n      }\n    }\n  }\n"]))),X=(0,T.ZP)(v||(v=(0,b.Z)(["\n  query fetchUserAccount {\n    me {\n      sessionId\n      settings {\n        theme {\n          ...ThemeSettings\n        }\n      }\n      user {\n        id\n        username\n      }\n      workspaces {\n        edges {\n          node {\n            ...Workspace\n          }\n        }\n      }\n    }\n  }\n  ","\n  ","\n"])),N,F),Q=(0,T.ZP)(O||(O=(0,b.Z)(["\n  mutation createUserAccount {\n    createAccount {\n      user {\n        id\n        username\n      }\n      errors {\n        ... on Error {\n          message\n          __typename\n        }\n        ... on UnauthorizedOperation {\n          message\n        }\n      }\n    }\n  }\n"]))),Y=(0,T.ZP)(A||(A=(0,b.Z)(["\n  mutation persistThemeSettings(\n    $usePreferredOsAppearance: Boolean!\n    $darkThemeName: String\n    $lightThemeName: String\n    $themeName: String\n  ) {\n    updateThemeSettings(\n      input: {\n        usePreferredOsAppearance: $usePreferredOsAppearance\n        darkThemeName: $darkThemeName\n        lightThemeName: $lightThemeName\n        themeName: $themeName\n      }\n    ) {\n      settings {\n        theme {\n          ...ThemeSettings\n        }\n      }\n      errors {\n        ... on Error {\n          message\n          __typename\n        }\n        ... on UnauthorizedOperation {\n          message\n        }\n      }\n    }\n  }\n  ","\n"])),N),nn=(0,T.ZP)(P||(P=(0,b.Z)(["\n  query hasChanges($workspaceId: ID!, $version: Version) {\n    workspaceById(workspaceId: $workspaceId) {\n      documentsChanged(version: $version)\n    }\n  }\n"]))),en=(0,T.ZP)(w||(w=(0,b.Z)(["\n  query pullChanges($workspaceId: ID!, $version: Version) {\n    workspaceById(workspaceId: $workspaceId) {\n      documentChanges(after: $version, first: 5) {\n        pageInfo {\n          endCursor\n        }\n        edges {\n          node {\n            ...DocumentChanged\n            ...DocumentCreated\n            ...DocumentDeleted\n          }\n        }\n      }\n    }\n  }\n  ","\n  ","\n  ","\n"])),M,j,U),tn=(0,T.ZP)(_||(_=(0,b.Z)(["\n  mutation pushChanges($changes: [WorkspaceDocumentInput!]!) {\n    pushDocumentChanges(input: { changes: $changes }) {\n      changes {\n        ...WorkspaceDocumentChangeResult\n      }\n      errors {\n        ... on Error {\n          message\n          __typename\n        }\n      }\n    }\n  }\n  ","\n"])),G);function on(n){return{ensureTunnelSession:function(e,t){return n(J,e,t)},fetchUserAccount:function(e,t){return n(X,e,t)},createUserAccount:function(e,t){return n(Q,e,t)},persistThemeSettings:function(e,t){return n(Y,e,t)},hasChanges:function(e,t){return n(nn,e,t)},pullChanges:function(e,t){return n(en,e,t)},pushChanges:function(e,t){return n(tn,e,t)}}}},89932:function(n,e,t){"use strict";t.d(e,{v:function(){return o.v},K:function(){return c}});var o=t(42860),r=t(15671),a=t(43144),c=function(){function n(){(0,r.Z)(this,n),this.handlers=[],this.responseHandlers=new Map}return(0,a.Z)(n,[{key:"handleMessage",value:function(n,e){var t=this.responseHandlers.get(e.id);t?t(e,n):this.handlers.filter((function(n){return n.type===e.type})).forEach((function(t){return(0,t.handle)(e,n)}))}},{key:"registerReceiveMessageHandler",value:function(n,e){var t=this,o={type:n,handle:e};return this.handlers.push(o),function(){var n=t.handlers.indexOf(o);t.handlers.splice(n,1)}}},{key:"sendAndReceiveMessage",value:function(n){var e=this,t=this.getContext();return new Promise((function(o){e.responseHandlers.set(n.id,(function(n){var t=n.id,r=n.payload;o(r),e.responseHandlers.delete(t)})),t.sendMessage(n)}))}},{key:"sendMessage",value:function(n){this.getContext().sendMessage(n)}}]),n}()},57096:function(n,e,t){"use strict";t.d(e,{A:function(){return r}});var o=t(89988);function r(){return(0,o.M)("doc")}},42917:function(n,e,t){"use strict";t.d(e,{j:function(){return a}});var o=t(91075),r=t.n(o);function a(){for(var n=new(r()),e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return t.forEach((function(e){return n=n.update(e)})),n.digest("hex")}},89988:function(n,e,t){"use strict";t.d(e,{M:function(){return r}});var o=t(82751);function r(n){return n&&n.length>0?"".concat(n,"|").concat((0,o.x0)()):(0,o.x0)()}},7326:function(n,e,t){"use strict";function o(n){if("function"===typeof n)return n;var e=Array.isArray(n)?[]:{};for(var t in n){var r=n[t];Array.isArray(r)?e[t]=o(r):"object"!==typeof r||r instanceof Boolean||r instanceof Date||r instanceof Number||r instanceof RegExp||r instanceof String||r instanceof Symbol?e[t]=r:e[t]=o(r)}return e}t.d(e,{I:function(){return o}})},28383:function(n,e,t){"use strict";function o(n){return"OperationDefinition"===n.kind}t.d(e,{ag:function(){return o}})},69386:function(){},31616:function(){},4147:function(n){"use strict";n.exports=JSON.parse('{"ss":"Banana Cake Pop","i8":"1.0.0-preview.42"}')}}]);