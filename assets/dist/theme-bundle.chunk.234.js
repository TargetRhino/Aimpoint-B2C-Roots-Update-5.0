"use strict";(self.webpackChunkRoots=self.webpackChunkRoots||[]).push([[234],{36234:function(t,e,o){o.r(e),o.d(e,{default:function(){return s}});var n=o(49230),r=o(40097),a=o(73609),c=o(67313),i=o(55825);function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}var s=function(t){var e,o;function n(){return t.apply(this,arguments)||this}o=t,(e=n).prototype=Object.create(o.prototype),e.prototype.constructor=e,u(e,o);var s=n.prototype;return s.onReady=function(){this.registerContactFormValidation()},s.registerContactFormValidation=function(){var t="form[data-contact-form]",e=(0,r.Z)({submit:t+' input[type="submit"]',tap:c.kk}),o=i(t);e.add([{selector:t+' input[name="contact_email"]',validate:function(t,e){t(a.Z.email(e))},errorMessage:this.context.contactEmail},{selector:t+' textarea[name="contact_question"]',validate:function(t,e){t(a.Z.notEmpty(e))},errorMessage:this.context.contactQuestion}]),o.on("submit",(function(t){e.performCheck(),e.areAll("valid")||t.preventDefault()}))},n}(n.Z)}}]);
//# sourceMappingURL=theme-bundle.chunk.234.js.map