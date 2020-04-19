!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n(1);var i;!function(t){const e={Canvas2d:new r.ContextManager("2d"),WebGL:new r.ContextManager("webgl")};t.initialize=function(){"undefined"==typeof window||window.BlazorExtensions?window.BlazorExtensions=Object.assign({},window.BlazorExtensions,e):window.BlazorExtensions=Object.assign({},e)}}(i||(i={})),i.initialize()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.ContextManager=class{constructor(t){if(this.contexts=new Map,this.webGLObject=new Array,this.webGLContext=!1,this.webGLTypes=[WebGLBuffer,WebGLShader,WebGLProgram,WebGLFramebuffer,WebGLRenderbuffer,WebGLTexture,WebGLUniformLocation],this.add=(t,e)=>{if(!t)throw new Error("Invalid canvas.");if(!this.contexts.get(t.id)){var n;if(!(n=e?t.getContext(this.contextName,e):t.getContext(this.contextName)))throw new Error("Invalid context.");this.contexts.set(t.id,n)}},this.remove=t=>{this.contexts.delete(t.id)},this.setProperty=(t,e,n)=>{const r=this.getContext(t);this.setPropertyWithContext(r,e,n)},this.getProperty=(t,e)=>{const n=this.getContext(t);return this.serialize(n[e])},this.call=(t,e,n)=>{const r=this.getContext(t);return this.callWithContext(r,e,n)},this.callBatch=(t,e)=>{const n=this.getContext(t);for(let t=0;t<e.length;t++){let r=e[t].slice(2);e[t][1]?this.callWithContext(n,e[t][0],r):this.setPropertyWithContext(n,e[t][0],Array.isArray(r)&&r.length>0?r[0]:null)}},this.callWithContext=(t,e,n)=>this.serialize(this.prototypes[e].apply(t,null!=n?n.map(t=>this.deserialize(e,t)):[])),this.setPropertyWithContext=(t,e,n)=>{t[e]=this.deserialize(e,n)},this.getContext=t=>{if(!t)throw new Error("Invalid canvas.");const e=this.contexts.get(t.id);if(!e)throw new Error("Invalid context.");return e},this.deserialize=(t,e)=>{if(!this.webGLContext||null==e)return e;if(e.hasOwnProperty("webGLType")&&e.hasOwnProperty("id"))return this.webGLObject[e.id];if(Array.isArray(e)&&t.startsWith("texImage")){let t=new Uint8Array(4*e.length);for(var n=0;n<e.length;n++){let r=n<<2;t[r]=e[n]>>24,t[r+1]=e[n]>>16&255,t[r+2]=e[n]>>8&255,t[r+3]=255&e[n]}return t}if(!Array.isArray(e)||t.endsWith("v")||t.endsWith("i")){if("string"!=typeof e||"bufferData"!==t&&"bufferSubData"!==t)return e;{let t=window.atob(e),r=t.length,i=new Uint8Array(r);for(n=0;n<r;n++)i[n]=t.charCodeAt(n);return i}}{let t=new Uint8Array(e.length);for(var n=0;n<e.length;n++)t[n]=e[n];return t}},this.typedArrayToBuffer=t=>{let e=t.buffer.slice(t.byteOffset,t.byteLength+t.byteOffset);return new DataView(e,0,t.length)},this.serialize=t=>{if(t instanceof TextMetrics)return{width:t.width};if(!this.webGLContext||null==t)return t;const e=this.webGLTypes.find(e=>t instanceof e);if(null!=e){const n=this.webGLObject.length;return this.webGLObject.push(t),{webGLType:e.name,id:n}}return t},this.contextName=t,"2d"===t)this.prototypes=CanvasRenderingContext2D.prototype;else{if("webgl"!==t&&"experimental-webgl"!==t)throw new Error("Invalid context name: "+t);this.prototypes=WebGLRenderingContext.prototype,this.webGLContext=!0}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luaXRpYWxpemVDYW52YXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhbnZhc0NvbnRleHRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiQ2FudmFzIiwiZXh0ZW5zaW9uT2JqZWN0IiwiQ2FudmFzMmQiLCJDb250ZXh0TWFuYWdlciIsIldlYkdMIiwiaW5pdGlhbGl6ZSIsIndpbmRvdyIsImNvbnRleHROYW1lIiwiY29udGV4dHMiLCJNYXAiLCJ3ZWJHTE9iamVjdCIsIkFycmF5Iiwid2ViR0xDb250ZXh0Iiwid2ViR0xUeXBlcyIsIldlYkdMQnVmZmVyIiwiV2ViR0xTaGFkZXIiLCJXZWJHTFByb2dyYW0iLCJXZWJHTEZyYW1lYnVmZmVyIiwiV2ViR0xSZW5kZXJidWZmZXIiLCJXZWJHTFRleHR1cmUiLCJXZWJHTFVuaWZvcm1Mb2NhdGlvbiIsImFkZCIsImNhbnZhcyIsInBhcmFtZXRlcnMiLCJFcnJvciIsInRoaXMiLCJpZCIsImNvbnRleHQiLCJnZXRDb250ZXh0Iiwic2V0IiwicmVtb3ZlIiwiZGVsZXRlIiwic2V0UHJvcGVydHkiLCJzZXRQcm9wZXJ0eVdpdGhDb250ZXh0IiwiZ2V0UHJvcGVydHkiLCJzZXJpYWxpemUiLCJtZXRob2QiLCJhcmdzIiwiY2FsbFdpdGhDb250ZXh0IiwiY2FsbEJhdGNoIiwiYmF0Y2hlZENhbGxzIiwibGVuZ3RoIiwicGFyYW1zIiwic2xpY2UiLCJpc0FycmF5IiwicHJvdG90eXBlcyIsImFwcGx5IiwidW5kZWZpbmVkIiwibWFwIiwiZGVzZXJpYWxpemUiLCJzdGFydHNXaXRoIiwiYnl0ZXMiLCJVaW50OEFycmF5IiwiY3VyUG9zIiwiZW5kc1dpdGgiLCJiaW5TdHIiLCJhdG9iIiwiY2hhckNvZGVBdCIsImJvYiIsInR5cGVkQXJyYXlUb0J1ZmZlciIsImFycmF5IiwiYXJyYXlCdWZmZXIiLCJidWZmZXIiLCJieXRlT2Zmc2V0IiwiYnl0ZUxlbmd0aCIsIkRhdGFWaWV3IiwiVGV4dE1ldHJpY3MiLCJ3aWR0aCIsInR5cGUiLCJmaW5kIiwicHVzaCIsIndlYkdMVHlwZSIsIkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCIsIldlYkdMUmVuZGVyaW5nQ29udGV4dCJdLCJtYXBwaW5ncyI6ImFBQ0UsSUFBSUEsRUFBbUIsR0FHdkIsU0FBU0MsRUFBb0JDLEdBRzVCLEdBQUdGLEVBQWlCRSxHQUNuQixPQUFPRixFQUFpQkUsR0FBVUMsUUFHbkMsSUFBSUMsRUFBU0osRUFBaUJFLEdBQVksQ0FDekNHLEVBQUdILEVBQ0hJLEdBQUcsRUFDSEgsUUFBUyxJQVVWLE9BTkFJLEVBQVFMLEdBQVVNLEtBQUtKLEVBQU9ELFFBQVNDLEVBQVFBLEVBQU9ELFFBQVNGLEdBRy9ERyxFQUFPRSxHQUFJLEVBR0pGLEVBQU9ELFFBS2ZGLEVBQW9CUSxFQUFJRixFQUd4Qk4sRUFBb0JTLEVBQUlWLEVBR3hCQyxFQUFvQlUsRUFBSSxTQUFTUixFQUFTUyxFQUFNQyxHQUMzQ1osRUFBb0JhLEVBQUVYLEVBQVNTLElBQ2xDRyxPQUFPQyxlQUFlYixFQUFTUyxFQUFNLENBQUVLLFlBQVksRUFBTUMsSUFBS0wsS0FLaEVaLEVBQW9Ca0IsRUFBSSxTQUFTaEIsR0FDWCxvQkFBWGlCLFFBQTBCQSxPQUFP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MEJtQyxNQUFWckQsRUFBcUIsT0FBT0EsRUFFdEQsTUFBTTBFLEVBQU8zQyxLQUFLWixXQUFXd0QsS0FBTUQsR0FBUzFFLGFBQWtCMEUsR0FDOUQsR0FBWXJCLE1BQVJxQixFQUFtQixDQUNyQixNQUFNMUMsRUFBS0QsS0FBS2YsWUFBWStCLE9BRzVCLE9BRkFoQixLQUFLZixZQUFZNEQsS0FBSzVFLEdBRWYsQ0FDTDZFLFVBQVdILEVBQUs3RixLQUNoQm1ELEdBQUlBLEdBR04sT0FBT2hDLEdBcklUK0IsS0FBS2xCLFlBQWNBLEVBQ0MsT0FBaEJBLEVBQ0ZrQixLQUFLb0IsV0FBYTJCLHlCQUF5QjVFLGNBQ3hDLElBQW9CLFVBQWhCVyxHQUEyQyx1QkFBaEJBLEVBSWxDLE1BQU0sSUFBSWlCLE1BQU0seUJBQXlCakIsR0FIekNrQixLQUFLb0IsV0FBYTRCLHNCQUFzQjdFLFVBQ3hDNkIsS0FBS2IsY0FBZSIsImZpbGUiOiJibGF6b3IuZXh0ZW5zaW9ucy5jYW52YXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBDb250ZXh0TWFuYWdlciB9IGZyb20gJy4vQ2FudmFzQ29udGV4dE1hbmFnZXInO1xuXG5uYW1lc3BhY2UgQ2FudmFzIHtcbiAgY29uc3QgYmxhem9yRXh0ZW5zaW9uczogc3RyaW5nID0gJ0JsYXpvckV4dGVuc2lvbnMnO1xuICAvLyBkZWZpbmUgd2hhdCB0aGlzIGV4dGVuc2lvbiBhZGRzIHRvIHRoZSB3aW5kb3cgb2JqZWN0IGluc2lkZSBCbGF6b3JFeHRlbnNpb25zXG4gIGNvbnN0IGV4dGVuc2lvbk9iamVjdCA9IHtcbiAgICBDYW52YXMyZDogbmV3IENvbnRleHRNYW5hZ2VyKFwiMmRcIiksXG4gICAgV2ViR0w6IG5ldyBDb250ZXh0TWFuYWdlcihcIndlYmdsXCIpXG4gIH07XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemUoKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICF3aW5kb3dbYmxhem9yRXh0ZW5zaW9uc10pIHtcbiAgICAgIC8vIHdoZW4gdGhlIGxpYnJhcnkgaXMgbG9hZGVkIGluIGEgYnJvd3NlciB2aWEgYSA8c2NyaXB0PiBlbGVtZW50LCBtYWtlIHRoZVxuICAgICAgLy8gZm9sbG93aW5nIEFQSXMgYXZhaWxhYmxlIGluIGdsb2JhbCBzY29wZSBmb3IgaW52b2NhdGlvbiBmcm9tIEpTXG4gICAgICB3aW5kb3dbYmxhem9yRXh0ZW5zaW9uc10gPSB7XG4gICAgICAgIC4uLmV4dGVuc2lvbk9iamVjdFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93W2JsYXpvckV4dGVuc2lvbnNdID0ge1xuICAgICAgICAuLi53aW5kb3dbYmxhem9yRXh0ZW5zaW9uc10sXG4gICAgICAgIC4uLmV4dGVuc2lvbk9iamVjdFxuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuQ2FudmFzLmluaXRpYWxpemUoKTtcbiIsImV4cG9ydCBjbGFzcyBDb250ZXh0TWFuYWdlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dHMgPSBuZXcgTWFwPHN0cmluZywgYW55PigpO1xuICBwcml2YXRlIHJlYWRvbmx5IHdlYkdMT2JqZWN0ID0gbmV3IEFycmF5PGFueT4oKTtcbiAgcHJpdmF0ZSByZWFkb25seSBjb250ZXh0TmFtZTogc3RyaW5nO1xuICBwcml2YXRlIHdlYkdMQ29udGV4dCA9IGZhbHNlO1xuICBwcml2YXRlIHJlYWRvbmx5IHByb3RvdHlwZXM6IGFueTtcbiAgcHJpdmF0ZSByZWFkb25seSB3ZWJHTFR5cGVzID0gW1xuICAgIFdlYkdMQnVmZmVyLCBXZWJHTFNoYWRlciwgV2ViR0xQcm9ncmFtLCBXZWJHTEZyYW1lYnVmZmVyLCBXZWJHTFJlbmRlcmJ1ZmZlciwgV2ViR0xUZXh0dXJlLCBXZWJHTFVuaWZvcm1Mb2NhdGlvblxuICBdO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb250ZXh0TmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jb250ZXh0TmFtZSA9IGNvbnRleHROYW1lO1xuICAgIGlmIChjb250ZXh0TmFtZSA9PT0gXCIyZFwiKVxuICAgICAgdGhpcy5wcm90b3R5cGVzID0gQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZTtcbiAgICBlbHNlIGlmIChjb250ZXh0TmFtZSA9PT0gXCJ3ZWJnbFwiIHx8IGNvbnRleHROYW1lID09PSBcImV4cGVyaW1lbnRhbC13ZWJnbFwiKSB7XG4gICAgICB0aGlzLnByb3RvdHlwZXMgPSBXZWJHTFJlbmRlcmluZ0NvbnRleHQucHJvdG90eXBlO1xuICAgICAgdGhpcy53ZWJHTENvbnRleHQgPSB0cnVlO1xuICAgIH0gZWxzZVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGNvbnRleHQgbmFtZTogJHtjb250ZXh0TmFtZX1gKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGQgPSAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgcGFyYW1ldGVyczogYW55KSA9PiB7XG4gICAgaWYgKCFjYW52YXMpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjYW52YXMuJyk7XG4gICAgaWYgKHRoaXMuY29udGV4dHMuZ2V0KGNhbnZhcy5pZCkpIHJldHVybjtcblxuICAgIHZhciBjb250ZXh0O1xuICAgIGlmIChwYXJhbWV0ZXJzKVxuICAgICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KHRoaXMuY29udGV4dE5hbWUsIHBhcmFtZXRlcnMpO1xuICAgIGVsc2VcbiAgICAgIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCh0aGlzLmNvbnRleHROYW1lKTtcblxuICAgIGlmICghY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvbnRleHQuJyk7XG5cbiAgICB0aGlzLmNvbnRleHRzLnNldChjYW52YXMuaWQsIGNvbnRleHQpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZSA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSA9PiB7XG4gICAgdGhpcy5jb250ZXh0cy5kZWxldGUoY2FudmFzLmlkKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQcm9wZXJ0eSA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBwcm9wZXJ0eTogc3RyaW5nLCB2YWx1ZTogYW55KSA9PiB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dChjYW52YXMpO1xuICAgIHRoaXMuc2V0UHJvcGVydHlXaXRoQ29udGV4dChjb250ZXh0LCBwcm9wZXJ0eSwgdmFsdWUpO1xuICB9XG5cbiAgcHVibGljIGdldFByb3BlcnR5ID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHByb3BlcnR5OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KGNhbnZhcyk7XG4gICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplKGNvbnRleHRbcHJvcGVydHldKTtcbiAgfVxuXG4gIHB1YmxpYyBjYWxsID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIG1ldGhvZDogc3RyaW5nLCBhcmdzOiBhbnkpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KGNhbnZhcyk7XG4gICAgcmV0dXJuIHRoaXMuY2FsbFdpdGhDb250ZXh0KGNvbnRleHQsIG1ldGhvZCwgYXJncyk7XG4gIH1cblxuICBwdWJsaWMgY2FsbEJhdGNoID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGJhdGNoZWRDYWxsczogYW55W11bXSkgPT4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoY2FudmFzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhdGNoZWRDYWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHBhcmFtcyA9IGJhdGNoZWRDYWxsc1tpXS5zbGljZSgyKTtcbiAgICAgIGlmIChiYXRjaGVkQ2FsbHNbaV1bMV0pIHtcbiAgICAgICAgdGhpcy5jYWxsV2l0aENvbnRleHQoY29udGV4dCwgYmF0Y2hlZENhbGxzW2ldWzBdLCBwYXJhbXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eVdpdGhDb250ZXh0KFxuICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgYmF0Y2hlZENhbGxzW2ldWzBdLFxuICAgICAgICAgIEFycmF5LmlzQXJyYXkocGFyYW1zKSAmJiBwYXJhbXMubGVuZ3RoID4gMCA/IHBhcmFtc1swXSA6IG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2FsbFdpdGhDb250ZXh0ID0gKGNvbnRleHQ6IGFueSwgbWV0aG9kOiBzdHJpbmcsIGFyZ3M6IGFueSkgPT4ge1xuICAgIHJldHVybiB0aGlzLnNlcmlhbGl6ZSh0aGlzLnByb3RvdHlwZXNbbWV0aG9kXS5hcHBseShjb250ZXh0LCBhcmdzICE9IHVuZGVmaW5lZCA/IGFyZ3MubWFwKCh2YWx1ZSkgPT4gdGhpcy5kZXNlcmlhbGl6ZShtZXRob2QsIHZhbHVlKSkgOiBbXSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRQcm9wZXJ0eVdpdGhDb250ZXh0ID0gKGNvbnRleHQ6IGFueSwgcHJvcGVydHk6IHN0cmluZywgdmFsdWU6IGFueSkgPT4ge1xuICAgIGNvbnRleHRbcHJvcGVydHldID0gdGhpcy5kZXNlcmlhbGl6ZShwcm9wZXJ0eSwgdmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb250ZXh0ID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpID0+IHtcbiAgICBpZiAoIWNhbnZhcykgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNhbnZhcy4nKTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRzLmdldChjYW52YXMuaWQpO1xuICAgIGlmICghY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvbnRleHQuJyk7XG5cbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuXG4gIHByaXZhdGUgZGVzZXJpYWxpemUgPSAobWV0aG9kOiBzdHJpbmcsIG9iamVjdDogYW55KSA9PiB7XG5cbiAgICBpZiAoIXRoaXMud2ViR0xDb250ZXh0IHx8IG9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiBvYmplY3Q7IC8vZGVzZXJpYWxpemF0aW9uIG9ubHkgbmVlZHMgdG8gaGFwcGVuIGZvciB3ZWJHTFxuXG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShcIndlYkdMVHlwZVwiKSAmJiBvYmplY3QuaGFzT3duUHJvcGVydHkoXCJpZFwiKSkge1xuICAgICAgcmV0dXJuICh0aGlzLndlYkdMT2JqZWN0W29iamVjdFtcImlkXCJdXSk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9iamVjdCkgJiYgbWV0aG9kLnN0YXJ0c1dpdGgoXCJ0ZXhJbWFnZVwiKSkge1xuICAgICAgXG4gICAgICBsZXQgYnl0ZXMgPSBuZXcgVWludDhBcnJheShvYmplY3QubGVuZ3RoICogNCk7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgb2JqZWN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IGN1clBvcyA9IGkgPDwgMjtcbiAgICAgICAgYnl0ZXNbY3VyUG9zXSA9IG9iamVjdFtpXSA+PiAyNDtcbiAgICAgICAgYnl0ZXNbY3VyUG9zICsgMV0gPSBvYmplY3RbaV0gPj4gMTYgJiAweGZmO1xuICAgICAgICBieXRlc1tjdXJQb3MgKyAyXSA9IG9iamVjdFtpXSA+PiA4ICYgMHhmZjtcbiAgICAgICAgYnl0ZXNbY3VyUG9zICsgM10gPSBvYmplY3RbaV0gJiAweGZmO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvYmplY3QpICYmICghbWV0aG9kLmVuZHNXaXRoKFwidlwiKSAmJiAhbWV0aG9kLmVuZHNXaXRoKFwiaVwiKSkpIHtcbiAgICAgIGxldCBib2IgPSBuZXcgVWludDhBcnJheShvYmplY3QubGVuZ3RoKTtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBvYmplY3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBib2JbaV0gPSBvYmplY3RbaV07XG4gICAgICB9XG4gICAgICByZXR1cm4gYm9iO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mKG9iamVjdCkgPT09IFwic3RyaW5nXCIgJiYgKG1ldGhvZCA9PT0gXCJidWZmZXJEYXRhXCIgfHwgbWV0aG9kID09PSBcImJ1ZmZlclN1YkRhdGFcIikpIHtcbiAgICAgIGxldCBiaW5TdHIgPSB3aW5kb3cuYXRvYihvYmplY3QpO1xuICAgICAgbGV0IGxlbmd0aCA9IGJpblN0ci5sZW5ndGg7XG4gICAgICBsZXQgYnl0ZXMgPSBuZXcgVWludDhBcnJheShsZW5ndGgpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGJ5dGVzW2ldID0gYmluU3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYnl0ZXM7XG4gICAgfSBlbHNlXG4gICAgICByZXR1cm4gb2JqZWN0O1xuICB9XG5cbiAgdHlwZWRBcnJheVRvQnVmZmVyID0gKGFycmF5OiBVaW50OEFycmF5KTogQXJyYXlCdWZmZXJWaWV3ID0+IHtcbiAgICBsZXQgYXJyYXlCdWZmZXIgPSBhcnJheS5idWZmZXIuc2xpY2UoYXJyYXkuYnl0ZU9mZnNldCwgYXJyYXkuYnl0ZUxlbmd0aCArIGFycmF5LmJ5dGVPZmZzZXQpO1xuICAgIHJldHVybiBuZXcgRGF0YVZpZXcoYXJyYXlCdWZmZXIsIDAsIGFycmF5Lmxlbmd0aCk7XG4gIH1cblxuICBwcml2YXRlIHNlcmlhbGl6ZSA9IChvYmplY3Q6IGFueSkgPT4ge1xuICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBUZXh0TWV0cmljcykge1xuICAgICAgICByZXR1cm4geyB3aWR0aDogb2JqZWN0LndpZHRoIH07XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLndlYkdMQ29udGV4dCB8fCBvYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gb2JqZWN0OyAvL3NlcmlhbGl6YXRpb24gb25seSBuZWVkcyB0byBoYXBwZW4gZm9yIHdlYkdMXG5cbiAgICBjb25zdCB0eXBlID0gdGhpcy53ZWJHTFR5cGVzLmZpbmQoKHR5cGUpID0+IG9iamVjdCBpbnN0YW5jZW9mIHR5cGUpO1xuICAgIGlmICh0eXBlICE9IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgaWQgPSB0aGlzLndlYkdMT2JqZWN0Lmxlbmd0aDtcbiAgICAgIHRoaXMud2ViR0xPYmplY3QucHVzaChvYmplY3QpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB3ZWJHTFR5cGU6IHR5cGUubmFtZSxcbiAgICAgICAgaWQ6IGlkXG4gICAgICAgIH07XG4gICAgfSBlbHNlXG4gICAgICByZXR1cm4gb2JqZWN0O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9