(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{13:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),s=a.n(c),l=(a(13),a(1)),i=a(2),o=a.n(i),u=a(4),m=a(3),p=function(){var e=Object(m.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.handleSetIsLoading,a=function(){var e=Object(m.a)(o.a.mark((function e(){var a,n,r,c,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=function(e){return r.filter((function(t){return t.postId===e}))},t("isLoadingNow",[]),e.next=4,p("https://mate-academy.github.io/react_dynamic-list-of-posts/api/users.json");case 4:return a=e.sent,e.next=7,p("https://mate-academy.github.io/react_dynamic-list-of-posts/api/posts.json");case 7:return n=e.sent,e.next=10,p("https://mate-academy.github.io/react_dynamic-list-of-posts/api/comments.json");case 10:r=e.sent,c=function(e){var t=a.find((function(t){return t.id===e}));if(t){var n=Object.entries(t.address).slice(0,4).map((function(e){return e.join(" : ")})).join(", ");return[t.name,t.email,n]}return[]},i=n.map((function(e){var t=c(e.userId),a=Object(l.a)(t,3),n=a[0],r=a[1],i=a[2];return Object(u.a)(Object(u.a)({},e),{},{author:n,email:r,address:i,comments:s(e.id)})})),t("completed",i);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("button",{className:"btn btn-info ml",onClick:a,type:"button"},"Load posts")},f=a(7),b=function(e){var t=e.comment;return r.a.createElement("li",{className:"comment"},r.a.createElement("p",null,t.name),r.a.createElement("p",{className:"comment__body"},t.body),r.a.createElement("a",{className:"mail",href:"mailto:1111@mail.ru"},t.email))},E=function(e){var t=e.post;return r.a.createElement("li",{className:"post shadow-lg p-3 mb-5 bg-white font-italic"},r.a.createElement("h4",{className:"post__title"},t.title),r.a.createElement("p",null,t.body),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"box-l"},r.a.createElement("p",{className:"post__title"},"Post by \xa0",t.author)),r.a.createElement("div",{className:"box-r"},r.a.createElement("a",{className:"mail",href:"mailto:1111@mail.ru"},"Email: \xa0",t.email),r.a.createElement("p",null,"Address \xa0",t.address))),r.a.createElement("ul",null,t.comments.map((function(e){return r.a.createElement(b,{key:e.id,comment:e})}))))},h=function(e){var t=e.posts;return r.a.createElement("ul",{className:"posts"},t.map((function(e){return r.a.createElement(E,{key:Object(f.uuid)(),post:e})})))},v=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),i=Object(l.a)(s,2),o=i[0],u=i[1],m=Object(n.useState)(""),p=Object(l.a)(m,2),f=p[0],b=p[1],E=Object(n.useState)([]),v=Object(l.a)(E,2),j=v[0],y=v[1],N=Object(n.useState)([]),O=Object(l.a)(N,2),g=O[0],x=O[1];return r.a.createElement(r.a.Fragment,null,!a&&!o&&r.a.createElement(d,{handleSetIsLoading:function(e,t){"isLoadingNow"===e?c(!0):(u(!0),c(!1),y(t),x(t))}}),a&&!o&&r.a.createElement("p",{className:"ml mail"},"Loading ..."),!a&&o&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{className:"input validate",id:"text",placeholder:"Search",type:"text",value:f,onChange:function(e){var t=e.currentTarget.value;b(t);var a=j.filter((function(e){return e.title.includes(t)||e.body.includes(t)}));x(a)}})),r.a.createElement(h,{posts:g})))},j=function(){return r.a.createElement("section",null,r.a.createElement(v,null))};s.a.render(r.a.createElement(j,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.42eae09b.chunk.js.map