"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[376],{376:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var r=63&n[e];t+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return t},a=n(791),s=n(434),c=n(916),o=function(e){return e.contacts.items},i=function(e){return e.contacts.error},l=function(e){return e.contacts.loading},u=(0,c.P1)([o,function(e){return e.filter}],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),d=n(634),m="ContactForm_form__dhl+T",h="ContactForm_label__-cVXI",f="ContactForm_input__Bl93P",p="ContactForm_btn-submit__qhOYN",_=n(184),x=function(){var e=(0,s.I0)(),t=(0,s.v9)(o);return(0,a.useEffect)((function(){e((0,d.yF)())}),[e]),(0,_.jsxs)("form",{className:m,onSubmit:function(n){n.preventDefault();var a=n.target.elements.name.value,s=n.target.elements.number.value;if(t.find((function(e){return e.name===a})))return alert("Contact with this name already exists!"),n.target.reset();var c={id:r(),name:a,number:s};e((0,d.uK)(c)),n.target.reset()},children:[(0,_.jsxs)("label",{className:h,children:["Name",(0,_.jsx)("input",{className:f,placeholder:"Enter your name...",type:"text",name:"name",pattern:"^[a-zA-Za-\u044f\u0410-\u042f]+(([' -][a-zA-Za-\u044f\u0410-\u042f ])?[a-zA-Za-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,_.jsxs)("label",{className:h,children:["Number",(0,_.jsx)("input",{className:f,placeholder:"Enter your number...",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,_.jsx)("button",{className:p,type:"submit",children:"Add contact"})]})},b="ContactItem_btn-delete__5N4yQ",j=function(e){var t=e.contact,n=(0,s.I0)();return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("span",{children:t.name}),(0,_.jsxs)("span",{children:[": ",t.phone]}),(0,_.jsx)("button",{className:b,onClick:function(){return n((0,d.GK)(t.id))},children:"Delete"})]})},v="ContactList_list-item__FFR27",g=function(){var e=(0,s.v9)(u),t=(0,s.v9)(l),n=(0,s.v9)(i),r=(0,s.I0)();return(0,a.useEffect)((function(){r((0,d.yF)())}),[r]),(0,_.jsxs)(_.Fragment,{children:[t&&(0,_.jsx)("p",{children:"Loading..."}),!(null!==e&&void 0!==e&&e.length)&&!n&&!t&&(0,_.jsx)("p",{children:"Sorry! No contacts found."}),n&&(0,_.jsx)("p",{children:n}),(0,_.jsx)("ul",{children:e.map((function(e){return(0,_.jsx)("li",{className:v,children:(0,_.jsx)(j,{contact:e})},e.id)}))})]})},C=n(808),N="Filter_label__vEd1E",y="Filter_input__N7T3z",F=function(){var e=(0,s.v9)((function(e){return e.filter})),t=(0,s.I0)();return(0,_.jsxs)("label",{className:N,children:["Find contacts by name",(0,_.jsx)("input",{className:y,type:"text",value:e,autoComplete:"off",placeholder:"Search name...",onChange:function(e){return t((0,C.T)(e.currentTarget.value))}})]})},w=function(){return(0,_.jsxs)("div",{children:[(0,_.jsx)("h1",{children:"Phonebook"}),(0,_.jsx)(x,{}),(0,_.jsx)("h2",{children:"Contacts"}),(0,_.jsx)(F,{}),(0,_.jsx)(g,{children:(0,_.jsx)(j,{})})]})}}}]);
//# sourceMappingURL=376.a6bdd391.chunk.js.map