"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[319],{6319:function(e,i,n){n.r(i),n.d(i,{RegisterPage:function(){return h},default:function(){return f}});var r=n(9434),l=n(9273),a="RegisterForm_form__Tv43W",s="RegisterForm_label__4pTXF",t="RegisterForm_space__LX8oZ",o=n(2392),d=n(8208),u=n(5442),c=n(6907),m=n(2435),v=n(3329),p=function(){var e=(0,r.I0)();return(0,v.jsxs)(o.NI,{className:a,onSubmit:function(i){i.preventDefault();var n=i.currentTarget,r=n.elements.name.value,a=n.elements.email.value,s=n.elements.password.value;e((0,l.z2)({name:r,email:a,password:s}))},autoComplete:"off",children:[(0,v.jsx)(d.l,{className:s,children:"Username"}),(0,v.jsx)(u.I,{size:"sm",type:"text",name:"name"}),(0,v.jsx)(d.l,{className:s,children:"Email"}),(0,v.jsx)(u.I,{size:"sm",type:"email",name:"email"}),(0,v.jsx)(d.l,{className:s,children:"Password"}),(0,v.jsx)(u.I,{size:"sm",type:"password",name:"password"}),(0,v.jsx)(c.h,{className:t,type:"submit",size:"sm",variant:"outline",spacing:"6",children:(0,v.jsx)(m.z,{colorScheme:"blue",children:"Register"})})]})},h=function(){return(0,v.jsx)("div",{children:(0,v.jsx)(p,{})})},f=h},2392:function(e,i,n){n.d(i,{NI:function(){return N},NJ:function(){return y},e:function(){return g}});var r=n(1413),l=n(4925),a=n(9439),s=n(9886),t=n(4591),o=n(7872),d=n(9219),u=n(2996),c=n(2503),m=n(6992),v=n(2791),p=n(3329),h=["id","isRequired","isInvalid","isDisabled","isReadOnly"],f=["getRootProps","htmlProps"],b=(0,s.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),x=(0,a.Z)(b,2),Z=x[0],g=x[1],I=(0,s.k)({strict:!1,name:"FormControlContext"}),_=(0,a.Z)(I,2),R=_[0],y=_[1];var N=(0,o.G)((function(e,i){var n=(0,d.jC)("Form",e),s=function(e){var i=e.id,n=e.isRequired,s=e.isInvalid,o=e.isDisabled,d=e.isReadOnly,u=(0,l.Z)(e,h),c=(0,v.useId)(),p=i||"field-".concat(c),f="".concat(p,"-label"),b="".concat(p,"-feedback"),x="".concat(p,"-helptext"),Z=(0,v.useState)(!1),g=(0,a.Z)(Z,2),I=g[0],_=g[1],R=(0,v.useState)(!1),y=(0,a.Z)(R,2),N=y[0],k=y[1],q=(0,v.useState)(!1),F=(0,a.Z)(q,2),j=F[0],P=F[1],C=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({id:x},e),{},{ref:(0,t.lq)(i,(function(e){e&&k(!0)}))})}),[x]),T=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({},e),{},{ref:i,"data-focus":(0,m.PB)(j),"data-disabled":(0,m.PB)(o),"data-invalid":(0,m.PB)(s),"data-readonly":(0,m.PB)(d),id:void 0!==e.id?e.id:f,htmlFor:void 0!==e.htmlFor?e.htmlFor:p})}),[p,o,j,s,d,f]),O=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({id:b},e),{},{ref:(0,t.lq)(i,(function(e){e&&_(!0)})),"aria-live":"polite"})}),[b]),w=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)((0,r.Z)({},e),u),{},{ref:i,role:"group"})}),[u]),D=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({},e),{},{ref:i,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!n,isInvalid:!!s,isReadOnly:!!d,isDisabled:!!o,isFocused:!!j,onFocus:function(){return P(!0)},onBlur:function(){return P(!1)},hasFeedbackText:I,setHasFeedbackText:_,hasHelpText:N,setHasHelpText:k,id:p,labelId:f,feedbackId:b,helpTextId:x,htmlProps:u,getHelpTextProps:C,getErrorMessageProps:O,getRootProps:w,getLabelProps:T,getRequiredIndicatorProps:D}}((0,u.Lr)(e)),o=s.getRootProps,b=(s.htmlProps,(0,l.Z)(s,f)),x=(0,m.cx)("chakra-form-control",e.className);return(0,p.jsx)(R,{value:b,children:(0,p.jsx)(Z,{value:n,children:(0,p.jsx)(c.m.div,(0,r.Z)((0,r.Z)({},o({},i)),{},{className:x,__css:n.container}))})})}));N.displayName="FormControl",(0,o.G)((function(e,i){var n=y(),l=g(),a=(0,m.cx)("chakra-form__helper-text",e.className);return(0,p.jsx)(c.m.div,(0,r.Z)((0,r.Z)({},null==n?void 0:n.getHelpTextProps(e,i)),{},{__css:l.helperText,className:a}))})).displayName="FormHelperText"},8208:function(e,i,n){n.d(i,{l:function(){return v}});var r=n(1413),l=n(4925),a=n(2392),s=n(7872),t=n(9219),o=n(2996),d=n(2503),u=n(6992),c=n(3329),m=["className","children","requiredIndicator","optionalIndicator"],v=(0,s.G)((function(e,i){var n,s=(0,t.mq)("FormLabel",e),v=(0,o.Lr)(e),h=(v.className,v.children),f=v.requiredIndicator,b=void 0===f?(0,c.jsx)(p,{}):f,x=v.optionalIndicator,Z=void 0===x?null:x,g=(0,l.Z)(v,m),I=(0,a.NJ)(),_=null!=(n=null==I?void 0:I.getLabelProps(g,i))?n:(0,r.Z)({ref:i},g);return(0,c.jsxs)(d.m.label,(0,r.Z)((0,r.Z)({},_),{},{className:(0,u.cx)("chakra-form__label",v.className),__css:(0,r.Z)({display:"block",textAlign:"start"},s),children:[h,(null==I?void 0:I.isRequired)?b:Z]}))}));v.displayName="FormLabel";var p=(0,s.G)((function(e,i){var n=(0,a.NJ)(),l=(0,a.e)();if(!(null==n?void 0:n.isRequired))return null;var s=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(d.m.span,(0,r.Z)((0,r.Z)({},null==n?void 0:n.getRequiredIndicatorProps(e,i)),{},{__css:l.requiredIndicator,className:s}))}));p.displayName="RequiredIndicator"},5442:function(e,i,n){n.d(i,{I:function(){return f}});var r=n(1413),l=n(4925),a=n(2392),s=n(6992),t=["isDisabled","isInvalid","isReadOnly","isRequired"],o=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function d(e){var i=function(e){var i,n,t,d=(0,a.NJ)(),u=e.id,c=e.disabled,m=e.readOnly,v=e.required,p=e.isRequired,h=e.isInvalid,f=e.isReadOnly,b=e.isDisabled,x=e.onFocus,Z=e.onBlur,g=(0,l.Z)(e,o),I=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==d?void 0:d.hasFeedbackText)&&(null==d?void 0:d.isInvalid)&&I.push(d.feedbackId);(null==d?void 0:d.hasHelpText)&&I.push(d.helpTextId);return(0,r.Z)((0,r.Z)({},g),{},{"aria-describedby":I.join(" ")||void 0,id:null!=u?u:null==d?void 0:d.id,isDisabled:null!=(i=null!=c?c:b)?i:null==d?void 0:d.isDisabled,isReadOnly:null!=(n=null!=m?m:f)?n:null==d?void 0:d.isReadOnly,isRequired:null!=(t=null!=v?v:p)?t:null==d?void 0:d.isRequired,isInvalid:null!=h?h:null==d?void 0:d.isInvalid,onFocus:(0,s.v0)(null==d?void 0:d.onFocus,x),onBlur:(0,s.v0)(null==d?void 0:d.onBlur,Z)})}(e),n=i.isDisabled,d=i.isInvalid,u=i.isReadOnly,c=i.isRequired,m=(0,l.Z)(i,t);return(0,r.Z)((0,r.Z)({},m),{},{disabled:n,readOnly:u,required:c,"aria-invalid":(0,s.Qm)(d),"aria-required":(0,s.Qm)(c),"aria-readonly":(0,s.Qm)(u)})}var u=n(7872),c=n(9219),m=n(2996),v=n(2503),p=n(3329),h=["htmlSize"],f=(0,u.G)((function(e,i){var n=e.htmlSize,a=(0,l.Z)(e,h),t=(0,c.jC)("Input",a),o=d((0,m.Lr)(a)),u=(0,s.cx)("chakra-input",e.className);return(0,p.jsx)(v.m.input,(0,r.Z)((0,r.Z)({size:n},o),{},{__css:t.field,ref:i,className:u}))}));f.displayName="Input",f.id="Input"}}]);
//# sourceMappingURL=319.3f2ae534.chunk.js.map