var compare_view;(()=>{"use strict";var e,t,n={d:(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};function c(e,n,o){n.onchange=()=>{n.checked?(e.next_mode=o,f(e,t.change_mode)):r(e)}}function r(t){var n;if(null!=t.ctrl_data)switch((n=t.ctrl_data).circle_button.checked=!1,n.horizontal_button.checked=!1,n.vertical_button.checked=!1,t.current_mode){case e.circle:t.ctrl_data.circle_button.checked=!0;break;case e.horizontal:t.ctrl_data.horizontal_button.checked=!0;break;case e.vertical:t.ctrl_data.vertical_button.checked=!0;break;default:throw`unsupported mode: ${t.current_mode}`}}function a(e,t){let n=e.canvas.getBoundingClientRect(),o=e.width/n.width,c=e.height/n.height;e.mouse_pos=[(t.clientX-n.left)*o,(t.clientY-n.top)*c]}function i(e){return e.render_circle=!0,document.documentElement.style.cursor="none",!1}function l(e){return v(e,t.update_circle),document.documentElement.style.cursor="default",!0}function s(e,t,n){e.ctx.beginPath(),e.ctx.arc(e.mouse_pos[0],e.mouse_pos[1],e.circle_size,t,n),n-t!=2*Math.PI&&e.ctx.lineTo(e.mouse_pos[0],e.mouse_pos[1]),e.ctx.closePath()}function u(e,t,n,o){var c;s(e,n,o),e.ctx.save(),e.ctx.clip(),e.ctx.drawImage(null===(c=e.images[t])||void 0===c?void 0:c.element,0,0,e.width,e.height),e.ctx.restore(),e.show_circle&&(s(e,n,o),e.ctx.strokeStyle="black",e.ctx.lineWidth=3,e.ctx.stroke())}function d(n,o){return f(n,t.update_slider),n.start_timestamp=o,n.start_pos=n.slider_pos,n.current_mode==e.horizontal?n.target_pos=n.mouse_pos[0]/n.width:n.target_pos=n.mouse_pos[1]/n.height,!0}function _(t,n){return t.held_down&&(t.current_mode==e.horizontal?t.target_pos=t.mouse_pos[0]/t.width:t.target_pos=t.mouse_pos[1]/t.height,t.start_pos=t.target_pos,t.slider_pos=t.target_pos),!0}function m(e,t){let n=(t-e.start_timestamp)/e.slider_time;return n=Math.min(Math.max(n,0),1),n=e.rate_function(n),e.slider_pos=(1-n)*e.start_pos+n*e.target_pos,e.slider_pos==e.target_pos}function h(e){return e.images.unshift(e.images.pop()),!0}function p(n){switch(n.current_mode){case e.undefined:break;case e.circle:!function(e){e.canvas.onmouseenter=null,e.canvas.onmousemove=null,e.canvas.onmouseleave=null,e.canvas.onmousedown=null,document.documentElement.style.cursor="default",f(e,t.remove_circle)}(n);break;case e.horizontal:case e.vertical:!function(e){e.canvas.onmousedown=null,document.onmouseup=null,e.canvas.onmouseup=null,e.canvas.onmousemove=null,e.canvas.onmouseenter=null,e.canvas.onmouseleave=null}(n);break;default:throw`unsupported mode: ${n.current_mode}`}switch(n.current_mode=n.next_mode,n.next_mode){case e.circle:!function(e){e.canvas.onmousemove=n=>{a(e,n),f(e,t.update_circle)},e.canvas.onmouseleave=()=>{f(e,t.remove_circle)},e.rotate_imgs_on_click&&(e.canvas.onmousedown=()=>{f(e,t.rotate_imgs)}),e.canvas.matches(":hover")&&f(e,t.update_circle)}(n);break;case e.horizontal:case e.vertical:!function(n){n.canvas.onmousedown=()=>{n.held_down=!0,f(n,t.start_slider_move)},document.onmouseup=()=>{n.held_down=!1},n.canvas.onmousemove=e=>{a(n,e),f(n,t.possible_instant_slide)},n.current_mode==e.horizontal?n.canvas.onmouseenter=()=>{document.documentElement.style.cursor="ew-resize"}:n.canvas.onmouseenter=()=>{document.documentElement.style.cursor="ns-resize"},n.canvas.onmouseleave=()=>{document.documentElement.style.cursor="default"}}(n);break;default:throw`unsupported mode: ${n.current_mode}`}return r(n),!0}function g(n,o){let c=[];for(;n.task_stack.length;){let e,r=n.task_stack.pop();switch(r){case t.none:e=!0;break;case t.change_mode:e=p(n);break;case t.rotate_imgs:e=h(n);break;case t.update_circle:e=i(n);break;case t.remove_circle:e=l(n);break;case t.start_slider_move:e=d(n,o);break;case t.possible_instant_slide:e=_(n);break;case t.update_slider:e=m(n,o);break;default:throw`unknown task: ${r}`}e||c.push(r)}n.task_stack=c,function(t,n){switch(t.current_mode){case e.undefined:break;case e.circle:!function(e){var t;if(e.render_circle){e.ctx.clearRect(0,0,e.width,e.height),function(e){var t;e.ctx.beginPath(),e.ctx.arc(e.mouse_pos[0],e.mouse_pos[1],e.circle_size-1,0,2*Math.PI),e.ctx.lineTo(e.width,0),e.ctx.lineTo(0,0),e.ctx.lineTo(0,e.height),e.ctx.lineTo(e.width,e.height),e.ctx.lineTo(e.width,0),e.ctx.closePath(),e.ctx.save(),e.ctx.clip(),e.ctx.drawImage(null===(t=e.images[0])||void 0===t?void 0:t.element,0,0,e.width,e.height),e.ctx.restore()}(e);for(let t=1;t<e.images_len;++t)u(e,t,(t-1)*Math.PI*2/(e.images_len-1),t*Math.PI*2/(e.images_len-1))}else e.ctx.clearRect(0,0,e.width,e.height),e.ctx.drawImage(null===(t=e.images[0])||void 0===t?void 0:t.element,0,0,e.width,e.height);e.render_circle=!1}(t);break;case e.horizontal:case e.vertical:!function(t){var n;t.ctx.clearRect(0,0,t.width,t.height),t.ctx.drawImage(null===(n=t.images[0])||void 0===n?void 0:n.element,0,0,t.width,t.height),t.show_slider&&function(t){t.ctx.beginPath(),t.current_mode==e.horizontal?(t.ctx.moveTo(t.slider_pos*t.width,0),t.ctx.lineTo(t.slider_pos*t.width,t.height)):(t.ctx.moveTo(0,t.slider_pos*t.height),t.ctx.lineTo(t.width,t.slider_pos*t.height)),t.ctx.closePath(),t.ctx.strokeStyle="black",t.ctx.lineWidth=5,t.ctx.stroke()}(t),function(t){var n;t.ctx.beginPath(),t.current_mode==e.horizontal?t.ctx.rect(t.slider_pos*t.width,0,t.width,t.height):t.ctx.rect(0,t.slider_pos*t.height,t.width,t.height),t.ctx.closePath(),t.ctx.save(),t.ctx.clip(),t.ctx.clearRect(0,0,t.width,t.height),t.ctx.drawImage(null===(n=t.images[1])||void 0===n?void 0:n.element,0,0,t.width,t.height),t.ctx.restore()}(t)}(t);break;default:throw`unsupported mode: ${t.current_mode}`}}(n),n.task_stack.length?(window.requestAnimationFrame((e=>{g(n,e)})),n.next_update_queued=!0):n.next_update_queued=!1}function v(e,t){let n=e.task_stack.indexOf(t);-1!=n&&e.task_stack.splice(n,1)}function f(e,t){v(e,t),e.task_stack.push(t),function(e){e.next_update_queued||(e.next_update_queued=!0,window.requestAnimationFrame((t=>{g(e,t)})))}(e)}function w(e,t,n){let o=document.createElement("input");o.type="checkbox",o.id=e;let c=document.createElement("label");c.innerHTML=t,c.htmlFor=o.id;let r=document.createElement("br");return n.appendChild(o),n.appendChild(c),n.appendChild(r),o}function x(e,t){let n=document.createElement("button");n.innerHTML=e;let o=document.createElement("br");return t.appendChild(n),t.appendChild(o),n}function b(n,o,r){!function(n,o,r,a){if(n.length<2)throw`image_urls must contain at least two images, not ${n.length}`;function i(e){return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2}!function(e,t){let n=[],o=0,c=e.length;for(let r=0;r<c;++r){let a={url:e[r],element:document.createElement("img"),label:`${r}`};n.push(a),a.element.onload=()=>{++o,o==c&&t(n)},a.element.src=a.url}}(n,(n=>{let l={images:n,images_len:n.length,canvas:o.canvas,ctx:o,width:o.canvas.width,height:o.canvas.height,ctrl_data:a,next_mode:null!=r.start_mode?r.start_mode:e.circle,current_mode:e.undefined,task_stack:[],next_update_queued:!1,mouse_pos:[0,0],held_down:!1,render_circle:!1,circle_size:null!=r.circle_size?r.circle_size:100,show_circle:null==r.show_circle||r.show_circle,rotate_imgs_on_click:null==r.rotate_imgs_on_click||r.rotate_imgs_on_click,slider_pos:null!=r.start_slider_pos?r.start_slider_pos:.5,slider_time:null!=r.slider_time?r.slider_time:400,rate_function:null!=r.rate_function?r.rate_function:i,show_slider:null==r.show_slider||r.show_slider,start_timestamp:0,start_pos:0,target_pos:0};!function(n){null!=n.ctrl_data&&(c(n,n.ctrl_data.circle_button,e.circle),c(n,n.ctrl_data.horizontal_button,e.horizontal),c(n,n.ctrl_data.vertical_button,e.vertical),n.ctrl_data.rotate_imgs_button.onclick=()=>{f(n,t.rotate_imgs)})}(l),f(l,t.change_mode)}))}(n,function(e){let t=document.getElementById(e),n=t.getContext("2d");return t.width=t.scrollWidth,t.height=t.scrollHeight,n}(o),null!=r?r:{},null!=r&&null!=r.controls_id?function(e,t){t=t||function(){let e="";for(let t=0;t<12;t++)e+="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(36*Math.random()));return e}();let n=document.getElementById(e);return{controls_parent:n,circle_button:w(`${t}circle_button`,"Circle",n),horizontal_button:w(`${t}horizontal_button`,"Horizontal",n),vertical_button:w(`${t}vertical_button`,"Vertical",n),rotate_imgs_button:x("Rotate Images",n)}}(r.controls_id,r.key):void 0)}n.r(o),n.d(o,{load:()=>b}),function(e){e[void 0]="undefined",e.horizontal="horizontal",e.vertical="vertical",e.circle="circle"}(e||(e={})),function(e){e.none="none",e.rotate_imgs="rotate_imgs",e.change_mode="change_mode",e.update_circle="update_circle",e.remove_circle="stop_update_circle",e.start_slider_move="start_slider_move",e.possible_instant_slide="instant_slide",e.update_slider="update_slider"}(t||(t={})),compare_view=o})();