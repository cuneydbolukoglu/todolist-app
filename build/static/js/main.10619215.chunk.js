(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a(1),i=a.n(c),s=a(7),o=a.n(s),r=a(2),l=a(3),d=a(5),u=a(4),h=(a(13),a(14),function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).state={},n}return Object(l.a)(a,[{key:"render",value:function(){var t=this;return Object(n.jsx)("div",{className:"Todo-list",children:Object(n.jsx)("ul",{children:this.props.data?this.props.data.map((function(e,a){return Object(n.jsxs)("li",{className:e.completed?"check-active":"",children:[Object(n.jsx)("span",{className:"check-box"}),e.name,Object(n.jsx)("span",{className:"check",onClick:t.props.checkItem.bind(t,e.id),children:Object(n.jsx)("i",{className:"icon-check-solid"})}),Object(n.jsx)("i",{className:"icon-times-solid delete",title:"deleteItem",onClick:t.props.deleteItem.bind(t,e.id)})]},a)})):Object(n.jsx)("div",{children:"null"})})})}}]),a}(c.Component)),j=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).handleChange=function(t){n.setState({term:t.target.value})},n.handleSubmit=function(t){t.preventDefault();var e={id:Date.now(),name:n.state.term,completed:!1};n.setState((function(t){return{data:t.data.concat(e)}}))},n.state={term:"",data:[{id:2857,name:"React",completed:!0}]},n}return Object(l.a)(a,[{key:"deleteItem",value:function(t){this.setState({data:this.state.data.filter((function(e){return e.id!==t}))})}},{key:"checkItem",value:function(t){var e=this.state.data;for(var a in e){if(e[a].id===t){e[a].completed=!e[a].completed;break}this.setState({data:e})}}},{key:"componentDidUpdate",value:function(){localStorage.setItem("todo",JSON.stringify(this.state.data))}},{key:"componentWillMount",value:function(){this.setState({data:JSON.parse(localStorage.getItem("todo"))})}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"wrapper",children:Object(n.jsxs)("form",{className:"Todo-form",onSubmit:this.handleSubmit,children:[Object(n.jsx)("input",{type:"text",placeholder:"\u270d\ufe0f Add item...",className:"todo-input",onChange:this.handleChange}),Object(n.jsx)("i",{className:"icon-plus-solid addbtn",title:"Add item",onClick:this.handleSubmit}),Object(n.jsx)(h,{data:this.state.data,deleteItem:this.deleteItem.bind(this),checkItem:this.checkItem.bind(this)})]})})}}]),a}(c.Component),m=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).state={},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"Todo",children:[Object(n.jsx)("i",{className:"icon-list"}),"Todolist"]})}}]),a}(c.Component),b=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).state={user:"cuneyd"},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"Todo-app",children:[Object(n.jsx)(m,{}),Object(n.jsx)(j,{})]})}}]),a}(c.Component),p=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,i=e.getLCP,s=e.getTTFB;a(t),n(t),c(t),i(t),s(t)}))};o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(b,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.10619215.chunk.js.map