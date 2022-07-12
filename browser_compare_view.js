var compare_view;(()=>{"use strict";var e,t,c={d:(e,t)=>{for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};function o(e){var t,c;let n=null===(t=e[0])||void 0===t?void 0:t.element.width,o=null===(c=e[0])||void 0===c?void 0:c.element.height;for(let t of e)if(t.element.width!=n||t.element.height!=o)throw"images don't have the same resolution";return[n,o]}function r(e){return e.images.unshift(e.images.pop()),!0}function i(e,c,n){c.onchange=()=>{c.checked?(e.next_mode=n,b(e,t.change_mode)):a(e)}}function a(t){var c;if(null!=t.ctrl_data)switch((c=t.ctrl_data).circle_check.checked=!1,c.horizontal_check.checked=!1,c.vertical_check.checked=!1,t.current_mode){case e.circle:t.ctrl_data.circle_check.checked=!0;break;case e.horizontal:t.ctrl_data.horizontal_check.checked=!0;break;case e.vertical:t.ctrl_data.vertical_check.checked=!0;break;default:throw`unsupported mode: ${t.current_mode}`}}function l(e,t){let c=e.canvas.getBoundingClientRect(),n=e.width/c.width,o=e.height/c.height;e.mouse_pos=[(t.clientX-c.left)*n,(t.clientY-c.top)*o]}function s(e){return e.render_circle=!0,e.canvas.style.cursor="none",!1}function d(e){return x(e,t.update_circle),e.canvas.style.cursor="default",!0}function u(e,t,c){e.ctx.beginPath(),e.ctx.arc(e.mouse_pos[0],e.mouse_pos[1],e.circle_size,t,c),c-t!=2*Math.PI&&e.ctx.lineTo(e.mouse_pos[0],e.mouse_pos[1]),e.ctx.closePath()}function _(e,t,c,n){var o;u(e,c,n),e.ctx.save(),e.ctx.clip(),e.ctx.drawImage(null===(o=e.images[t])||void 0===o?void 0:o.element,0,0,e.width,e.height),e.ctx.restore(),e.show_circle&&(u(e,c,n),e.ctx.strokeStyle="black",e.ctx.lineWidth=e.circumference_thickness,e.ctx.stroke())}function h(c,n){return b(c,t.update_slider),c.start_timestamp=n,c.start_pos=c.slider_pos,c.current_mode==e.horizontal?c.target_pos=c.mouse_pos[0]/c.width:c.target_pos=c.mouse_pos[1]/c.height,!0}function m(t,c){return t.held_down&&(t.current_mode==e.horizontal?t.target_pos=t.mouse_pos[0]/t.width:t.target_pos=t.mouse_pos[1]/t.height,t.start_pos=t.target_pos,t.slider_pos=t.target_pos),!0}function v(e,t){let c=(t-e.start_timestamp)/e.slider_time;return c=Math.min(Math.max(c,0),1),c=e.rate_function(c),e.slider_pos=(1-c)*e.start_pos+c*e.target_pos,e.slider_pos==e.target_pos}function p(c){switch(c.current_mode){case e.undefined:break;case e.circle:!function(e){e.canvas.onmousemove=null,e.canvas.onmouseleave=null,e.canvas.onmousedown=null,e.canvas.style.cursor="default",b(e,t.remove_circle)}(c);break;case e.horizontal:case e.vertical:!function(e){e.canvas.onmousedown=null,e.canvas.onmouseup=null,e.canvas.onfocus=null,e.canvas.onblur=null,document.onmouseup=null,e.canvas.onmouseup=null,e.canvas.onmousemove=null,e.canvas.onmouseenter=null,e.canvas.onmouseleave=null,e.held_down=!1,e.canvas.style.cursor="default",document.body.style.userSelect="text"}(c);break;default:throw`unsupported mode: ${c.current_mode}`}}function f(c){switch(c.current_mode=c.next_mode,c.next_mode){case e.circle:!function(e){e.canvas.onmousemove=c=>{l(e,c),b(e,t.update_circle)},e.canvas.onmouseleave=()=>{b(e,t.remove_circle)},e.revolve_imgs_on_click&&(e.canvas.onmousedown=()=>{b(e,t.revolve_imgs)}),e.canvas.matches(":hover")&&b(e,t.update_circle)}(c);break;case e.horizontal:case e.vertical:!function(c){c.canvas.onmousedown=()=>{c.held_down=!0,b(c,t.start_slider_move)},c.canvas.onmouseup=()=>{c.held_down=!1},c.canvas.onfocus=()=>{document.body.style.userSelect="none"},c.canvas.onblur=()=>{document.body.style.userSelect="text"},document.onmouseup=()=>{c.held_down=!1},c.canvas.onmousemove=e=>{l(c,e),b(c,t.possible_instant_slide)},c.current_mode==e.horizontal?c.canvas.onmouseenter=()=>{c.canvas.style.cursor="ew-resize"}:c.canvas.onmouseenter=()=>{c.canvas.style.cursor="ns-resize"},c.canvas.onmouseleave=()=>{c.canvas.style.cursor="default"}}(c);break;default:throw`unsupported mode: ${c.current_mode}`}a(c)}function g(e){return p(e),f(e),!0}function w(c,n){!function(e,c){let n=[];for(;e.task_stack.length;){let o,i=e.task_stack.pop();switch(i){case t.none:o=!0;break;case t.change_mode:o=g(e);break;case t.revolve_imgs:o=r(e);break;case t.update_circle:o=s(e);break;case t.remove_circle:o=d(e);break;case t.start_slider_move:o=h(e,c);break;case t.possible_instant_slide:o=m(e);break;case t.update_slider:o=v(e,c);break;default:throw`unknown task: ${i}`}o||n.push(i)}e.task_stack=n}(c,n),function(t){switch(t.current_mode){case e.circle:!function(e){var t;if(e.render_circle){e.ctx.clearRect(0,0,e.width,e.height),function(e){var t;e.ctx.beginPath(),e.ctx.arc(e.mouse_pos[0],e.mouse_pos[1],e.circle_size-1,0,2*Math.PI),e.ctx.lineTo(e.width,0),e.ctx.lineTo(0,0),e.ctx.lineTo(0,e.height),e.ctx.lineTo(e.width,e.height),e.ctx.lineTo(e.width,0),e.ctx.closePath(),e.ctx.save(),e.ctx.clip(),e.ctx.drawImage(null===(t=e.images[0])||void 0===t?void 0:t.element,0,0,e.width,e.height),e.ctx.restore()}(e);for(let t=1;t<e.images_len;++t)_(e,t,(t-1)*Math.PI*2/(e.images_len-1),t*Math.PI*2/(e.images_len-1))}else e.ctx.clearRect(0,0,e.width,e.height),e.ctx.drawImage(null===(t=e.images[0])||void 0===t?void 0:t.element,0,0,e.width,e.height);e.render_circle=!1}(t);break;case e.horizontal:case e.vertical:!function(t){var c;t.ctx.clearRect(0,0,t.width,t.height),t.ctx.drawImage(null===(c=t.images[0])||void 0===c?void 0:c.element,0,0,t.width,t.height),t.show_slider&&function(t){t.ctx.beginPath(),t.current_mode==e.horizontal?(t.ctx.moveTo(t.slider_pos*t.width,0),t.ctx.lineTo(t.slider_pos*t.width,t.height)):(t.ctx.moveTo(0,t.slider_pos*t.height),t.ctx.lineTo(t.width,t.slider_pos*t.height)),t.ctx.closePath(),t.ctx.strokeStyle="black",t.ctx.lineWidth=t.slider_thickness,t.ctx.stroke()}(t),function(t){var c;t.ctx.beginPath(),t.current_mode==e.horizontal?t.ctx.rect(t.slider_pos*t.width,0,t.width,t.height):t.ctx.rect(0,t.slider_pos*t.height,t.width,t.height),t.ctx.closePath(),t.ctx.save(),t.ctx.clip(),t.ctx.clearRect(0,0,t.width,t.height),t.ctx.drawImage(null===(c=t.images[1])||void 0===c?void 0:c.element,0,0,t.width,t.height),t.ctx.restore()}(t)}(t);break;default:throw`unsupported mode: ${t.current_mode}`}}(c),c.task_stack.length?k(c):c.next_update_queued=!1}function k(e){e.next_update_queued=!0,window.requestAnimationFrame((t=>{w(e,t)}))}function x(e,t){let c=e.task_stack.indexOf(t);-1!=c&&e.task_stack.splice(c,1)}function b(e,t){x(e,t),e.task_stack.push(t),function(e){e.next_update_queued||k(e)}(e)}c.r(n),c.d(n,{load:()=>T}),function(e){e[void 0]="undefined",e.horizontal="horizontal",e.vertical="vertical",e.circle="circle"}(e||(e={})),function(e){e[e.none=0]="none",e[e.revolve_imgs=1]="revolve_imgs",e[e.change_mode=2]="change_mode",e[e.update_circle=3]="update_circle",e[e.remove_circle=4]="remove_circle",e[e.start_slider_move=5]="start_slider_move",e[e.possible_instant_slide=6]="possible_instant_slide",e[e.update_slider=7]="update_slider"}(t||(t={}));const y={start_mode:e.circle,circumference_fraction:.005,circle_size:void 0,circle_fraction:.2,show_circle:!0,revolve_imgs_on_click:!0,slider_fraction:.01,slider_time:400,rate_function:function(e){return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2},start_slider_pos:.5,show_slider:!0};function z(e,t){return null!=e[t]?e[t]:y[t]}function P(e,t,c){let n=document.createElement("input");n.type="checkbox",n.id=e;let o=document.createElement("label");o.innerHTML=t,o.htmlFor=n.id;let r=document.createElement("br");return c.appendChild(n),c.appendChild(o),c.appendChild(r),n}function M(e,t){let c=document.createElement("button");c.innerHTML=e;let n=document.createElement("br");return t.appendChild(c),t.appendChild(n),c}function T(c,n,r={}){!function(c,n,r,a){!function(e,t){if(e.length<2)throw`image_urls must contain at least two images, not ${e.length}`;let c=[],n=0,r=e.length;for(let i=0;i<r;++i){let a={url:e[i],element:document.createElement("img"),label:`${i}`};c.push(a),a.element.onload=()=>{++n,n==r&&t(c,o(c))},a.element.src=a.url}}(c,((c,o)=>{let l=Math.max(o[0],o[1]),s={images:c,images_len:c.length,canvas:n.canvas,ctx:n,width:o[0],height:o[1],ctrl_data:a,mouse_pos:[0,0],held_down:!1,next_mode:z(r,"start_mode"),current_mode:e.undefined,task_stack:[],next_update_queued:!1,circumference_thickness:l*z(r,"circumference_fraction"),render_circle:!1,circle_size:null!=r.circle_size?r.circle_size:l*z(r,"circle_fraction"),show_circle:z(r,"show_circle"),revolve_imgs_on_click:z(r,"revolve_imgs_on_click"),slider_thickness:l*z(r,"slider_fraction"),slider_pos:z(r,"start_slider_pos"),slider_time:z(r,"slider_time"),rate_function:z(r,"rate_function"),show_slider:z(r,"show_slider"),start_timestamp:0,start_pos:0,target_pos:0};if(s.canvas.width=s.width,s.canvas.height=s.height,function(c){null!=c.ctrl_data&&(i(c,c.ctrl_data.circle_check,e.circle),i(c,c.ctrl_data.horizontal_check,e.horizontal),i(c,c.ctrl_data.vertical_check,e.vertical),c.ctrl_data.revolve_imgs_button.onclick=()=>{b(c,t.revolve_imgs)})}(s),"y"===s.canvas.dataset.in_use)throw`the canvas with the id '${s.canvas.id}' is already in use`;s.canvas.dataset.in_use="y",b(s,t.change_mode)}))}(c,function(e){let t=document.getElementById(e),c=t.getContext("2d");return t.tabIndex=1,c}(n),r,null!=r.controls_id?function(e,t=function(){let e="";for(let t=0;t<12;t++)e+="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(36*Math.random()));return e}()){let c=document.getElementById(e);if(null==c)throw`controls_id '${e}' isn't valid`;return{controls_parent:c,circle_check:P(`${t}_circle_button`,"Circle",c),horizontal_check:P(`${t}_horizontal_button`,"Horizontal",c),vertical_check:P(`${t}_vertical_button`,"Vertical",c),revolve_imgs_button:M("Revolve Images",c)}}(r.controls_id,r.key):void 0)}compare_view=n})();