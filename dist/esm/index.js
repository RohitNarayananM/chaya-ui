function e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t,r={},n={};function o(){if(t)return n;t=1;var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function v(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}function g(){}function b(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var _=b.prototype=new g;_.constructor=b,m(_,v.prototype),_.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,k={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function E(t,r,n){var o,a={},u=null,i=null;if(null!=r)for(o in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(u=""+r.key),r)S.call(r,o)&&!C.hasOwnProperty(o)&&(a[o]=r[o]);var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){for(var c=Array(s),l=0;l<s;l++)c[l]=arguments[l+2];a.children=c}if(t&&t.defaultProps)for(o in s=t.defaultProps)void 0===a[o]&&(a[o]=s[o]);return{$$typeof:e,type:t,key:u,ref:i,props:a,_owner:k.current}}function R(t){return"object"==typeof t&&null!==t&&t.$$typeof===e}var O=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(t,n,o,a,u){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var s=!1;if(null===t)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case e:case r:s=!0}}if(s)return u=u(s=t),t=""===a?"."+j(s,0):a,w(u)?(o="",null!=t&&(o=t.replace(O,"$&/")+"/"),P(u,n,o,"",(function(e){return e}))):null!=u&&(R(u)&&(u=function(t,r){return{$$typeof:e,type:t.type,key:r,ref:t.ref,props:t.props,_owner:t._owner}}(u,o+(!u.key||s&&s.key===u.key?"":(""+u.key).replace(O,"$&/")+"/")+t)),n.push(u)),1;if(s=0,a=""===a?".":a+":",w(t))for(var c=0;c<t.length;c++){var l=a+j(i=t[c],c);s+=P(i,n,o,l,u)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(t),"function"==typeof l)for(t=l.call(t),c=0;!(i=t.next()).done;)s+=P(i=i.value,n,o,l=a+j(i,c++),u);else if("object"===i)throw n=String(t),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function x(e,t,r){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},D={transition:null},I={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:D,ReactCurrentOwner:k};return n.Children={map:x,forEach:function(e,t,r){x(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return x(e,(function(){t++})),t},toArray:function(e){return x(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=v,n.Fragment=o,n.Profiler=u,n.PureComponent=b,n.StrictMode=a,n.Suspense=l,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,n.cloneElement=function(t,r,n){if(null==t)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=m({},t.props),a=t.key,u=t.ref,i=t._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,i=k.current),void 0!==r.key&&(a=""+r.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(c in r)S.call(r,c)&&!C.hasOwnProperty(c)&&(o[c]=void 0===r[c]&&void 0!==s?s[c]:r[c])}var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){s=Array(c);for(var l=0;l<c;l++)s[l]=arguments[l+2];o.children=s}return{$$typeof:e,type:t.type,key:a,ref:u,props:o,_owner:i}},n.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},n.createElement=E,n.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:c,render:e}},n.isValidElement=R,n.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:$}},n.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},n.startTransition=function(e){var t=D.transition;D.transition={};try{e()}finally{D.transition=t}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,t){return T.current.useCallback(e,t)},n.useContext=function(e){return T.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return T.current.useDeferredValue(e)},n.useEffect=function(e,t){return T.current.useEffect(e,t)},n.useId=function(){return T.current.useId()},n.useImperativeHandle=function(e,t,r){return T.current.useImperativeHandle(e,t,r)},n.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},n.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},n.useMemo=function(e,t){return T.current.useMemo(e,t)},n.useReducer=function(e,t,r){return T.current.useReducer(e,t,r)},n.useRef=function(e){return T.current.useRef(e)},n.useState=function(e){return T.current.useState(e)},n.useSyncExternalStore=function(e,t,r){return T.current.useSyncExternalStore(e,t,r)},n.useTransition=function(){return T.current.useTransition()},n.version="18.2.0",n}var a,u,i={},s={get exports(){return i},set exports(e){i=e}};function c(){return a||(a=1,e=s,t=i,"production"!==process.env.NODE_ENV&&function(){"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen"),m=Symbol.iterator;function h(e){if(null===e||"object"!=typeof e)return null;var t=m&&e[m]||e["@@iterator"];return"function"==typeof t?t:null}var v={current:null},g={transition:null},b={current:null,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1},_={current:null},w={},S=null;function k(e){S=e}w.setExtraStackFrame=function(e){S=e},w.getCurrentStack=null,w.getStackAddendum=function(){var e="";S&&(e+=S);var t=w.getCurrentStack;return t&&(e+=t()||""),e};var C={ReactCurrentDispatcher:v,ReactCurrentBatchConfig:g,ReactCurrentOwner:_};function E(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];O("warn",e,r)}function R(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];O("error",e,r)}function O(e,t,r){var n=C.ReactDebugCurrentFrame.getStackAddendum();""!==n&&(t+="%s",r=r.concat([n]));var o=r.map((function(e){return String(e)}));o.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,o)}C.ReactDebugCurrentFrame=w,C.ReactCurrentActQueue=b;var j={};function P(e,t){var r=e.constructor,n=r&&(r.displayName||r.name)||"ReactClass",o=n+"."+t;j[o]||(R("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",t,n),j[o]=!0)}var x={isMounted:function(e){return!1},enqueueForceUpdate:function(e,t,r){P(e,"forceUpdate")},enqueueReplaceState:function(e,t,r,n){P(e,"replaceState")},enqueueSetState:function(e,t,r,n){P(e,"setState")}},$=Object.assign,T={};function D(e,t,r){this.props=e,this.context=t,this.refs=T,this.updater=r||x}Object.freeze(T),D.prototype.isReactComponent={},D.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},D.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};var I={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},N=function(e,t){Object.defineProperty(D.prototype,e,{get:function(){E("%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1])}})};for(var L in I)I.hasOwnProperty(L)&&N(L,I[L]);function A(){}function F(e,t,r){this.props=e,this.context=t,this.refs=T,this.updater=r||x}A.prototype=D.prototype;var M=F.prototype=new A;M.constructor=F,$(M,D.prototype),M.isPureReactComponent=!0;var V=Array.isArray;function U(e){return V(e)}function z(e){return""+e}function q(e){if(function(e){try{return z(e),!1}catch(e){return!0}}(e))return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",function(e){return"function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}(e)),z(e)}function B(e){return e.displayName||"Context"}function W(e){if(null==e)return null;if("number"==typeof e.tag&&R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case o:return"Fragment";case n:return"Portal";case u:return"Profiler";case a:return"StrictMode";case l:return"Suspense";case f:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case s:return B(e)+".Consumer";case i:return B(e._context)+".Provider";case c:return function(e,t,r){var n=e.displayName;if(n)return n;var o=t.displayName||t.name||"";return""!==o?r+"("+o+")":r}(e,e.render,"ForwardRef");case p:var t=e.displayName||null;return null!==t?t:W(e.type)||"Memo";case d:var r=e,y=r._payload,m=r._init;try{return W(m(y))}catch(e){return null}}return null}var Y,H,G,K=Object.prototype.hasOwnProperty,J={key:!0,ref:!0,__self:!0,__source:!0};function X(e){if(K.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}function Q(e){if(K.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}function Z(e,t){var r=function(){Y||(Y=!0,R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}function ee(e,t){var r=function(){H||(H=!0,R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"ref",{get:r,configurable:!0})}function te(e){if("string"==typeof e.ref&&_.current&&e.__self&&_.current.stateNode!==e.__self){var t=W(_.current.type);G[t]||(R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',t,e.ref),G[t]=!0)}}G={};var re=function(e,t,n,o,a,u,i){var s={$$typeof:r,type:e,key:t,ref:n,props:i,_owner:u,_store:{}};return Object.defineProperty(s._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(s,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(s,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(s.props),Object.freeze(s)),s};function ne(e,t,r){var n,o={},a=null,u=null,i=null,s=null;if(null!=t)for(n in X(t)&&(u=t.ref,te(t)),Q(t)&&(q(t.key),a=""+t.key),i=void 0===t.__self?null:t.__self,s=void 0===t.__source?null:t.__source,t)K.call(t,n)&&!J.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(c>1){for(var l=Array(c),f=0;f<c;f++)l[f]=arguments[f+2];Object.freeze&&Object.freeze(l),o.children=l}if(e&&e.defaultProps){var p=e.defaultProps;for(n in p)void 0===o[n]&&(o[n]=p[n])}if(a||u){var d="function"==typeof e?e.displayName||e.name||"Unknown":e;a&&Z(o,d),u&&ee(o,d)}return re(e,a,u,i,s,_.current,o)}function oe(e,t,r){if(null==e)throw new Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n,o,a=$({},e.props),u=e.key,i=e.ref,s=e._self,c=e._source,l=e._owner;if(null!=t)for(n in X(t)&&(i=t.ref,l=_.current),Q(t)&&(q(t.key),u=""+t.key),e.type&&e.type.defaultProps&&(o=e.type.defaultProps),t)K.call(t,n)&&!J.hasOwnProperty(n)&&(void 0===t[n]&&void 0!==o?a[n]=o[n]:a[n]=t[n]);var f=arguments.length-2;if(1===f)a.children=r;else if(f>1){for(var p=Array(f),d=0;d<f;d++)p[d]=arguments[d+2];a.children=p}return re(e.type,u,i,s,c,l,a)}function ae(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var ue,ie=!1,se=/\/+/g;function ce(e){return e.replace(se,"$&/")}function le(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(q(e.key),r=""+e.key,n={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,(function(e){return n[e]}))):t.toString(36);var r,n}function fe(e,t,o,a,u){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s,c,l,f=!1;if(null===e)f=!0;else switch(i){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case r:case n:f=!0}}if(f){var p=e,d=u(p),y=""===a?"."+le(p,0):a;if(U(d)){var m="";null!=y&&(m=ce(y)+"/"),fe(d,t,m,"",(function(e){return e}))}else null!=d&&(ae(d)&&(!d.key||p&&p.key===d.key||q(d.key),s=d,c=o+(!d.key||p&&p.key===d.key?"":ce(""+d.key)+"/")+y,d=re(s.type,c,s.ref,s._self,s._source,s._owner,s.props)),t.push(d));return 1}var v=0,g=""===a?".":a+":";if(U(e))for(var b=0;b<e.length;b++)v+=fe(l=e[b],t,o,g+le(l,b),u);else{var _=h(e);if("function"==typeof _){var w=e;_===w.entries&&(ie||E("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),ie=!0);for(var S,k=_.call(w),C=0;!(S=k.next()).done;)v+=fe(l=S.value,t,o,g+le(l,C++),u)}else if("object"===i){var R=String(e);throw new Error("Objects are not valid as a React child (found: "+("[object Object]"===R?"object with keys {"+Object.keys(e).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.")}}return v}function pe(e,t,r){if(null==e)return e;var n=[],o=0;return fe(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function de(e){if(-1===e._status){var t=(0,e._result)();if(t.then((function(t){if(0===e._status||-1===e._status){var r=e;r._status=1,r._result=t}}),(function(t){if(0===e._status||-1===e._status){var r=e;r._status=2,r._result=t}})),-1===e._status){var r=e;r._status=0,r._result=t}}if(1===e._status){var n=e._result;return void 0===n&&R("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",n),"default"in n||R("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",n),n.default}throw e._result}function ye(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===a||e===l||e===f||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===p||e.$$typeof===i||e.$$typeof===s||e.$$typeof===c||e.$$typeof===ue||void 0!==e.getModuleId)}function me(){var e=v.current;return null===e&&R("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem."),e}ue=Symbol.for("react.module.reference");var he,ve,ge,be,_e,we,Se,ke=0;function Ce(){}Ce.__reactDisabledLog=!0;var Ee,Re=C.ReactCurrentDispatcher;function Oe(e,t,r){if(void 0===Ee)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);Ee=n&&n[1]||""}return"\n"+Ee+e}var je,Pe=!1,xe="function"==typeof WeakMap?WeakMap:Map;function $e(e,t){if(!e||Pe)return"";var r,n=je.get(e);if(void 0!==n)return n;Pe=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=Re.current,Re.current=null,function(){if(0===ke){he=console.log,ve=console.info,ge=console.warn,be=console.error,_e=console.group,we=console.groupCollapsed,Se=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Ce,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}ke++}();try{if(t){var u=function(){throw Error()};if(Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(u,[])}catch(e){r=e}Reflect.construct(e,[],u)}else{try{u.call()}catch(e){r=e}e.call(u.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var i=t.stack.split("\n"),s=r.stack.split("\n"),c=i.length-1,l=s.length-1;c>=1&&l>=0&&i[c]!==s[l];)l--;for(;c>=1&&l>=0;c--,l--)if(i[c]!==s[l]){if(1!==c||1!==l)do{if(c--,--l<0||i[c]!==s[l]){var f="\n"+i[c].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),"function"==typeof e&&je.set(e,f),f}}while(c>=1&&l>=0);break}}}finally{Pe=!1,Re.current=o,function(){if(0==--ke){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:$({},e,{value:he}),info:$({},e,{value:ve}),warn:$({},e,{value:ge}),error:$({},e,{value:be}),group:$({},e,{value:_e}),groupCollapsed:$({},e,{value:we}),groupEnd:$({},e,{value:Se})})}ke<0&&R("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=a}var p=e?e.displayName||e.name:"",d=p?Oe(p):"";return"function"==typeof e&&je.set(e,d),d}function Te(e,t,r){if(null==e)return"";if("function"==typeof e)return $e(e,function(e){var t=e.prototype;return!(!t||!t.isReactComponent)}(e));if("string"==typeof e)return Oe(e);switch(e){case l:return Oe("Suspense");case f:return Oe("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case c:return $e(e.render,!1);case p:return Te(e.type,t,r);case d:var n=e,o=n._payload,a=n._init;try{return Te(a(o),t,r)}catch(e){}}return""}je=new xe;var De,Ie={},Ne=C.ReactDebugCurrentFrame;function Le(e){if(e){var t=e._owner,r=Te(e.type,e._source,t?t.type:null);Ne.setExtraStackFrame(r)}else Ne.setExtraStackFrame(null)}function Ae(e){if(e){var t=e._owner;k(Te(e.type,e._source,t?t.type:null))}else k(null)}function Fe(){if(_.current){var e=W(_.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}function Me(e){return null!=e&&void 0!==(t=e.__source)?"\n\nCheck your code at "+t.fileName.replace(/^.*[\\\/]/,"")+":"+t.lineNumber+".":"";var t}De=!1;var Ve={};function Ue(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var r=function(e){var t=Fe();if(!t){var r="string"==typeof e?e:e.displayName||e.name;r&&(t="\n\nCheck the top-level render call using <"+r+">.")}return t}(t);if(!Ve[r]){Ve[r]=!0;var n="";e&&e._owner&&e._owner!==_.current&&(n=" It was passed a child from "+W(e._owner.type)+"."),Ae(e),R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',r,n),Ae(null)}}}function ze(e,t){if("object"==typeof e)if(U(e))for(var r=0;r<e.length;r++){var n=e[r];ae(n)&&Ue(n,t)}else if(ae(e))e._store&&(e._store.validated=!0);else if(e){var o=h(e);if("function"==typeof o&&o!==e.entries)for(var a,u=o.call(e);!(a=u.next()).done;)ae(a.value)&&Ue(a.value,t)}}function qe(e){var t,r=e.type;if(null!=r&&"string"!=typeof r){if("function"==typeof r)t=r.propTypes;else{if("object"!=typeof r||r.$$typeof!==c&&r.$$typeof!==p)return;t=r.propTypes}if(t){var n=W(r);!function(e,t,r,n,o){var a=Function.call.bind(K);for(var u in e)if(a(e,u)){var i=void 0;try{if("function"!=typeof e[u]){var s=Error((n||"React class")+": "+r+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw s.name="Invariant Violation",s}i=e[u](t,u,n,r,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){i=e}!i||i instanceof Error||(Le(o),R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",r,u,typeof i),Le(null)),i instanceof Error&&!(i.message in Ie)&&(Ie[i.message]=!0,Le(o),R("Failed %s type: %s",r,i.message),Le(null))}}(t,e.props,"prop",n,e)}else void 0===r.PropTypes||De||(De=!0,R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",W(r)||"Unknown"));"function"!=typeof r.getDefaultProps||r.getDefaultProps.isReactClassApproved||R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Be(e){for(var t=Object.keys(e.props),r=0;r<t.length;r++){var n=t[r];if("children"!==n&&"key"!==n){Ae(e),R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),Ae(null);break}}null!==e.ref&&(Ae(e),R("Invalid attribute `ref` supplied to `React.Fragment`."),Ae(null))}function We(e,t,n){var a=ye(e);if(!a){var u="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(u+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var i,s=Me(t);u+=s||Fe(),null===e?i="null":U(e)?i="array":void 0!==e&&e.$$typeof===r?(i="<"+(W(e.type)||"Unknown")+" />",u=" Did you accidentally export a JSX literal instead of a component?"):i=typeof e,R("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",i,u)}var c=ne.apply(this,arguments);if(null==c)return c;if(a)for(var l=2;l<arguments.length;l++)ze(arguments[l],e);return e===o?Be(c):qe(c),c}var Ye=!1,He=!1,Ge=null,Ke=0,Je=!1;function Xe(e){e!==Ke-1&&R("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),Ke=e}function Qe(t,r,n){var o=b.current;if(null!==o)try{et(o),function(t){if(null===Ge)try{var r=("require"+Math.random()).slice(0,7),n=e&&e[r];Ge=n.call(e,"timers").setImmediate}catch(e){Ge=function(e){!1===He&&(He=!0,"undefined"==typeof MessageChannel&&R("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var t=new MessageChannel;t.port1.onmessage=e,t.port2.postMessage(void 0)}}Ge(t)}((function(){0===o.length?(b.current=null,r(t)):Qe(t,r,n)}))}catch(e){n(e)}else r(t)}var Ze=!1;function et(e){if(!Ze){Ze=!0;var t=0;try{for(;t<e.length;t++){var r=e[t];do{r=r(!0)}while(null!==r)}e.length=0}catch(r){throw e=e.slice(t+1),r}finally{Ze=!1}}}var tt=We,rt=function(e,t,r){for(var n=oe.apply(this,arguments),o=2;o<arguments.length;o++)ze(arguments[o],n.type);return qe(n),n},nt=function(e){var t=We.bind(null,e);return t.type=e,Ye||(Ye=!0,E("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),Object.defineProperty(t,"type",{enumerable:!1,get:function(){return E("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t},ot={map:pe,forEach:function(e,t,r){pe(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return pe(e,(function(){t++})),t},toArray:function(e){return pe(e,(function(e){return e}))||[]},only:function(e){if(!ae(e))throw new Error("React.Children.only expected to receive a single React element child.");return e}};t.Children=ot,t.Component=D,t.Fragment=o,t.Profiler=u,t.PureComponent=F,t.StrictMode=a,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C,t.cloneElement=rt,t.createContext=function(e){var t={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};t.Provider={$$typeof:i,_context:t};var r=!1,n=!1,o=!1,a={$$typeof:s,_context:t};return Object.defineProperties(a,{Provider:{get:function(){return n||(n=!0,R("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),t.Provider},set:function(e){t.Provider=e}},_currentValue:{get:function(){return t._currentValue},set:function(e){t._currentValue=e}},_currentValue2:{get:function(){return t._currentValue2},set:function(e){t._currentValue2=e}},_threadCount:{get:function(){return t._threadCount},set:function(e){t._threadCount=e}},Consumer:{get:function(){return r||(r=!0,R("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),t.Consumer}},displayName:{get:function(){return t.displayName},set:function(e){o||(E("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",e),o=!0)}}}),t.Consumer=a,t._currentRenderer=null,t._currentRenderer2=null,t},t.createElement=tt,t.createFactory=nt,t.createRef=function(){var e={current:null};return Object.seal(e),e},t.forwardRef=function(e){null!=e&&e.$$typeof===p?R("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):"function"!=typeof e?R("forwardRef requires a render function but was given %s.",null===e?"null":typeof e):0!==e.length&&2!==e.length&&R("forwardRef render functions accept exactly two parameters: props and ref. %s",1===e.length?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),null!=e&&(null==e.defaultProps&&null==e.propTypes||R("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"));var t,r={$$typeof:c,render:e};return Object.defineProperty(r,"displayName",{enumerable:!1,configurable:!0,get:function(){return t},set:function(r){t=r,e.name||e.displayName||(e.displayName=r)}}),r},t.isValidElement=ae,t.lazy=function(e){var t,r,n={$$typeof:d,_payload:{_status:-1,_result:e},_init:de};return Object.defineProperties(n,{defaultProps:{configurable:!0,get:function(){return t},set:function(e){R("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),t=e,Object.defineProperty(n,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return r},set:function(e){R("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),r=e,Object.defineProperty(n,"propTypes",{enumerable:!0})}}}),n},t.memo=function(e,t){ye(e)||R("memo: The first argument must be a component. Instead received: %s",null===e?"null":typeof e);var r,n={$$typeof:p,type:e,compare:void 0===t?null:t};return Object.defineProperty(n,"displayName",{enumerable:!1,configurable:!0,get:function(){return r},set:function(t){r=t,e.name||e.displayName||(e.displayName=t)}}),n},t.startTransition=function(e,t){var r=g.transition;g.transition={};var n=g.transition;g.transition._updatedFibers=new Set;try{e()}finally{g.transition=r,null===r&&n._updatedFibers&&(n._updatedFibers.size>10&&E("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),n._updatedFibers.clear())}},t.unstable_act=function(e){var t=Ke;Ke++,null===b.current&&(b.current=[]);var r,n=b.isBatchingLegacy;try{if(b.isBatchingLegacy=!0,r=e(),!n&&b.didScheduleLegacyUpdate){var o=b.current;null!==o&&(b.didScheduleLegacyUpdate=!1,et(o))}}catch(e){throw Xe(t),e}finally{b.isBatchingLegacy=n}if(null!==r&&"object"==typeof r&&"function"==typeof r.then){var a=r,u=!1,i={then:function(e,r){u=!0,a.then((function(n){Xe(t),0===Ke?Qe(n,e,r):e(n)}),(function(e){Xe(t),r(e)}))}};return Je||"undefined"==typeof Promise||Promise.resolve().then((function(){})).then((function(){u||(Je=!0,R("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))})),i}var s=r;if(Xe(t),0===Ke){var c=b.current;return null!==c&&(et(c),b.current=null),{then:function(e,t){null===b.current?(b.current=[],Qe(s,e,t)):e(s)}}}return{then:function(e,t){e(s)}}},t.useCallback=function(e,t){return me().useCallback(e,t)},t.useContext=function(e){var t=me();if(void 0!==e._context){var r=e._context;r.Consumer===e?R("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):r.Provider===e&&R("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return t.useContext(e)},t.useDebugValue=function(e,t){return me().useDebugValue(e,t)},t.useDeferredValue=function(e){return me().useDeferredValue(e)},t.useEffect=function(e,t){return me().useEffect(e,t)},t.useId=function(){return me().useId()},t.useImperativeHandle=function(e,t,r){return me().useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return me().useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return me().useLayoutEffect(e,t)},t.useMemo=function(e,t){return me().useMemo(e,t)},t.useReducer=function(e,t,r){return me().useReducer(e,t,r)},t.useRef=function(e){return me().useRef(e)},t.useState=function(e){return me().useState(e)},t.useSyncExternalStore=function(e,t,r){return me().useSyncExternalStore(e,t,r)},t.useTransition=function(){return me().useTransition()},t.version="18.2.0","undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)}()),i;var e,t}u={get exports(){return r},set exports(e){r=e}},"production"===process.env.NODE_ENV?u.exports=o():u.exports=c();var l=e(r);const f=r.createContext({}),p=(e,t)=>l.createElement("a",{href:e},t),d=({children:e,linkWrapper:t=p,theme:n})=>(r.useEffect((()=>{Object.keys(n).forEach((e=>document.documentElement.style.setProperty(`--${e}`,n[e])))}),[n]),l.createElement(f.Provider,{value:{linkWrapper:t,theme:n}},e));function y(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=y(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function m(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=y(e))&&(n&&(n+=" "),n+=t);return n}const h=()=>{const[e,t]=r.useState([]);((e,t,n)=>{r.useEffect((()=>{let r=null;return e>0&&(clearTimeout(r),r=setTimeout((()=>{n(),clearTimeout(r)}),4*t)),()=>clearTimeout(r)}),[e,t,n])})(e.length,100,(()=>{t([])}));return l.createElement("div",{className:"dsr-absolute dsr-inset-0",onMouseDown:r=>{const n=r.currentTarget.getBoundingClientRect(),o=n.width>n.height?n.width:n.height,a={x:r.pageX-n.x-o/2,y:r.pageY-n.y-o/2,size:o};t([...e,a])}},e.length>0&&e.map(((e,t)=>l.createElement("span",{className:m(["@keyframes ripple {\n  to {\n    opacity: 0;\n    transform: scale(2);\n  }\n}\n.animation {\n  animation-name: ripple;\n}".animation,"dsr-transform dsr-scale-0 dsr-rounded-full dsr-absolute dsr-opacity-75 dsr-bg-white"]),key:"span-"+t,style:{top:e.y,left:e.x,width:e.size,height:e.size,animationDuration:"100ms"}}))))},v=({children:e,link:t,onClick:r=(()=>{}),className:n="",style:o,label:a,disableRipple:u=!1,target:i,type:s,rel:c,disabled:p,id:d})=>l.createElement("div",null,t?((e,t,r=null)=>l.createElement(f.Consumer,null,(({linkWrapper:n})=>n?n(e,l.createElement("a",{id:null==r?void 0:r.id,href:e,target:null==r?void 0:r.target,rel:null==r?void 0:r.rel,className:null==r?void 0:r.className,style:null==r?void 0:r.style,"aria-label":null==r?void 0:r.label},t)):null)))(t,l.createElement(l.Fragment,null,!u&&!p&&l.createElement(h,null),e),{target:i,rel:c,id:d,className:n,style:o,label:a}):l.createElement("button",{id:d,"aria-label":a,type:s,onClick:e=>{e.stopPropagation(),r(e)},disabled:p,"aria-disabled":p,className:m([n,"dsr-p-4 bg-red"]),style:o},!u&&!p&&l.createElement(h,null),e));export{v as Button,d as DSRContextProvider};
//# sourceMappingURL=index.js.map
