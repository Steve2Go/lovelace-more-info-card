function t(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol();class s{constructor(t,e){if(e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return e&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const n=new Map,o=t=>(t=>{let e=n.get(t);return void 0===e&&n.set(t,e=new s(t,i)),e})("string"==typeof t?t:t+""),r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return o(e)})(t):t;var l,h,a,c;const d={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},u=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:u};class v extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this.Πp(i,e);void 0!==s&&(this.Πm.set(s,i),t.push(s))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static"Πp"(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{e?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((e=>{const i=document.createElement("style");i.textContent=e.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,e,i){this.K(t,i)}"Πj"(t,e,i=p){var s,n;const o=this.constructor.Πp(t,i);if(void 0!==o&&!0===i.reflect){const r=(null!==(n=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==n?n:d.toAttribute)(e,i.type);this.Πh=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this.Πh=null}}K(t,e){var i,s,n;const o=this.constructor,r=o.Πm.get(t);if(void 0!==r&&this.Πh!==r){const t=o.getPropertyOptions(r),l=t.converter,h=null!==(n=null!==(s=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==n?n:d.fromAttribute;this.Πh=r,this[r]=h(e,t.type),this.Πh=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===i.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,e)=>this[e]=t)),this.Πi=void 0);let e=!1;const i=this.L;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(i)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,e)=>this.Πj(e,this[e],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}var f,g,y,m;v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null===(h=(l=globalThis).reactiveElementPlatformSupport)||void 0===h||h.call(l,{ReactiveElement:v}),(null!==(a=(c=globalThis).reactiveElementVersions)&&void 0!==a?a:c.reactiveElementVersions=[]).push("1.0.0-rc.2");const b=globalThis.trustedTypes,S=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,C="?"+w,$=`<${C}>`,x=document,E=(t="")=>x.createComment(t),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,k=/>/g,H=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,N=/'/g,R=/"/g,T=/^(?:script|style|textarea)$/i,_=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),M=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),j=new WeakMap,I=x.createTreeWalker(x,129,null,!1);class L{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,l=this.parts,[h,a]=((t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=A;for(let e=0;e<i;e++){const i=t[e];let l,h,a=-1,c=0;for(;c<i.length&&(r.lastIndex=c,h=r.exec(i),null!==h);)c=r.lastIndex,r===A?"!--"===h[1]?r=O:void 0!==h[1]?r=k:void 0!==h[2]?(T.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=H):void 0!==h[3]&&(r=H):r===H?">"===h[0]?(r=null!=n?n:A,a=-1):void 0===h[1]?a=-2:(a=r.lastIndex-h[2].length,l=h[1],r=void 0===h[3]?H:'"'===h[3]?R:N):r===R||r===N?r=H:r===O||r===k?r=A:(r=H,n=void 0);const d=r===H&&t[e+1].startsWith("/>")?" ":"";o+=r===A?i+$:a>=0?(s.push(l),i.slice(0,a)+"$lit$"+i.slice(a)+w+d):i+w+(-2===a?(s.push(void 0),e):d)}const l=o+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==S?S.createHTML(l):l,s]})(t,e);if(this.el=L.createElement(h,i),I.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=I.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(w)){const i=a[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(w),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?q:"?"===e[1]?K:"@"===e[1]?J:W})}else l.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(T.test(s.tagName)){const t=s.textContent.split(w),e=t.length-1;if(e>0){s.textContent=b?b.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],E()),I.nextNode(),l.push({type:2,index:++n});s.append(t[e],E())}}}else if(8===s.nodeType)if(s.data===C)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(w,t+1));)l.push({type:7,index:n}),t+=w.length-1}n++}}static createElement(t,e){const i=x.createElement("template");return i.innerHTML=t,i}}function B(t,e,i=t,s){var n,o,r,l;if(e===M)return e;let h=void 0!==s?null===(n=i.Σi)||void 0===n?void 0:n[s]:i.Σo;const a=P(e)?void 0:e._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(o=null==h?void 0:h.O)||void 0===o||o.call(h,!1),void 0===a?h=void 0:(h=new a(t),h.T(t,i,s)),void 0!==s?(null!==(r=(l=i).Σi)&&void 0!==r?r:l.Σi=[])[s]=h:i.Σo=h),void 0!==h&&(e=B(t,h.S(t,e.values),h,s)),e}class D{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:i},parts:s}=this.D,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(i,!0);I.currentNode=n;let o=I.nextNode(),r=0,l=0,h=s[0];for(;void 0!==h;){if(r===h.index){let e;2===h.type?e=new V(o,o.nextSibling,this,t):1===h.type?e=new h.ctor(o,h.name,h.strings,this,t):6===h.type&&(e=new Z(o,this,t)),this.l.push(e),h=s[++l]}r!==(null==h?void 0:h.index)&&(o=I.nextNode(),r++)}return n}v(t){let e=0;for(const i of this.l)void 0!==i&&(void 0!==i.strings?(i.I(t,i,e),e+=i.strings.length-2):i.I(t[e])),e++}}class V{constructor(t,e,i,s){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=i,this.options=s}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=B(this,t,e),P(t)?t===z||null==t||""===t?(this.H!==z&&this.R(),this.H=z):t!==this.H&&t!==M&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var e;return U(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(x.createTextNode(t)),this.H=t}_(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this.C(t):(void 0===s.el&&(s.el=L.createElement(s.h,this.options)),s);if((null===(e=this.H)||void 0===e?void 0:e.D)===n)this.H.v(i);else{const t=new D(n,this),e=t.u(this.options);t.v(i),this.$(e),this.H=t}}C(t){let e=j.get(t.strings);return void 0===e&&j.set(t.strings,e=new L(t)),e}g(t){U(this.H)||(this.H=[],this.R());const e=this.H;let i,s=0;for(const n of t)s===e.length?e.push(i=new V(this.k(E()),this.k(E()),this,this.options)):i=e[s],i.I(n),s++;s<e.length&&(this.R(i&&i.B.nextSibling,s),e.length=s)}R(t=this.A.nextSibling,e){var i;for(null===(i=this.P)||void 0===i||i.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class W{constructor(t,e,i,s,n){this.type=1,this.H=z,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this.H=Array(i.length-1).fill(z),this.strings=i):this.H=z}get tagName(){return this.element.tagName}I(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=B(this,t,e,0),o=!P(t)||t!==this.H&&t!==M,o&&(this.H=t);else{const s=t;let r,l;for(t=n[0],r=0;r<n.length-1;r++)l=B(this,s[i+r],e,r),l===M&&(l=this.H[r]),o||(o=!P(l)||l!==this.H[r]),l===z?t=z:t!==z&&(t+=(null!=l?l:"")+n[r+1]),this.H[r]=l}o&&!s&&this.W(t)}W(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class q extends W{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===z?void 0:t}}class K extends W{constructor(){super(...arguments),this.type=4}W(t){t&&t!==z?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class J extends W{constructor(){super(...arguments),this.type=5}I(t,e=this){var i;if((t=null!==(i=B(this,t,e,0))&&void 0!==i?i:z)===M)return;const s=this.H,n=t===z&&s!==z||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==z&&(s===z||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,i;"function"==typeof this.H?this.H.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this.H.handleEvent(t)}}class Z{constructor(t,e,i){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=i}I(t){B(this,t)}}var F,G,Q,X,Y,tt;null===(g=(f=globalThis).litHtmlPlatformSupport)||void 0===g||g.call(f,L,V),(null!==(y=(m=globalThis).litHtmlVersions)&&void 0!==y?y:m.litHtmlVersions=[]).push("2.0.0-rc.3"),(null!==(F=(tt=globalThis).litElementVersions)&&void 0!==F?F:tt.litElementVersions=[]).push("3.0.0-rc.2");class et extends v{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();super.update(t),this.Φt=((t,e,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new V(e.insertBefore(E(),t),t,void 0,i)}return r.I(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return M}}et.finalized=!0,et._$litElement$=!0,null===(Q=(G=globalThis).litElementHydrateSupport)||void 0===Q||Q.call(G,{LitElement:et}),null===(Y=(X=globalThis).litElementPlatformSupport)||void 0===Y||Y.call(X,{LitElement:et});const it=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function st(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):it(t,e)}var nt="1.2.0";class ot extends et{setConfig(t){this._config=t}_valueChanged(t){this._config&&(this._config=Object.assign(Object.assign({},this._config),{entity:t.target.value}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}render(){return _`
      <ha-entity-picker
        .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.required")})"
        .hass=${this.hass}
        .value=${this._config.entity}
        .configValue=${"entity"}
        @change=${this._valueChanged}
        allow-custom-entity
      ></ha-entity-picker>
    `}}t([st()],ot.prototype,"hass",void 0),t([st()],ot.prototype,"lovelace",void 0),t([function(t){return st({...t,state:!0,attribute:!1})}()],ot.prototype,"_config",void 0),customElements.define("more-info-card-editor",ot),window.customCards=window.customCards||[],window.customCards.push({type:"more-info-card",name:"More-info card",preview:!0,description:"Display the more-info dialog of an entity as a card"});const rt=["camera","configurator"],lt=["input_number","input_select","input_text","number","scene","select"];class ht extends et{static getConfigElement(){return document.createElement("more-info-card-editor")}static getStubConfig(t,e,i){const s=i.filter((t=>{const e=t.split(".")[0];return!(lt.includes(e)||rt.includes(e))}));return{entity:s[Math.floor(Math.random()*s.length)]||""}}setConfig(t){this.config=t;const e=this.config.entity.split(".")[0];window.loadCardHelpers().then((t=>{t.importMoreInfoControl(e)}))}getCardSize(){return 5}render(){if(!this.hass||!this.hass.states||!this.hass.states[this.config.entity])return _`
        <ha-card
          .header="$this.config.title || Unknown Entity"
          style="--ha-card-background: var(--primary-color); filter: grayscale(1);"
        >
          <div class="card-content" style="color: var(--text-primary-color);">
            Unknown entity.
          </div>
        </ha-card>
      `;const t=this.hass.states[this.config.entity],e=this.config.entity.split(".")[0],i=void 0===t.attributes.friendly_name?t.entity_id.split(".")[1].replace(/_/g," "):t.attributes.friendly_name;return _`
      <ha-card .header=${this.config.title||i}>
        <div class="card-content">
         ${lt.includes(e)?_` No More Info Available `:_`
                ${rt.includes(e)?"":_`
                      <state-card-content
                        .stateObj=${t}
                        .hass=${this.hass}
                      ></state-card-content>
                    `} 
                <more-info-content
                  .hass=${this.hass}
                  .stateObj=${t}
                ></more-info-content>
              `}
        </div>
      </ha-card>
    `}}t([st()],ht.prototype,"hass",void 0),t([st()],ht.prototype,"config",void 0),customElements.define("more-info-card",ht),console.info(`%cMORE-INFO-CARD ${nt} IS INSTALLED`,"color: green; font-weight: bold","");
