webpackJsonp([4],{584:function(t,i,e){e(619);var n=e(9)(e(603),e(631),"data-v-3a5e1f07",null);t.exports=n.exports},595:function(t,i,e){"use strict";function n(){var t=a()({},l.a,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,hostUin:0,needNewCode:0,platform:"yqq"});return e.i(o.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,l.b)}function s(t){var i=a()({},l.a,{hostUin:0,needNewCode:0,platform:"yqq",order:"listen",begin:0,num:100,songstatus:1,singermid:t});return e.i(o.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",i,l.b)}i.b=n,i.a=s;var r=e(86),a=e.n(r),o=e(201),l=e(127)},596:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(65),s=e.n(n),r=e(129);i.default={props:{data:{type:Array,default:[]}},components:{Scroll:s.a},data:function(){return{scrollY:-1,currentIndex:0,diff:-1}},created:function(){this.touch={},this.listenScroll=!0,this.listHeight=[],this.probeType=3},computed:{shortcutList:function(){return this.data.map(function(t){return t.title.substr(0,1)})},fixedTitle:function(){return this.scrollY>0?"":this.data[this.currentIndex]?this.data[this.currentIndex].title:""}},methods:{refresh:function(){this.$refs.listView.refresh()},selectItem:function(t){this.$emit("select",t)},onShortcutTouchStart:function(t){var i=e.i(r.b)(t.target,"index"),n=t.touches[0];this.touch.y1=n.pageY,this.touch.anchorIndex1=i,this._scroll(i),this.$refs.listView.scrollToElement(this.$refs.listGroup[i],0)},onShortcutTouchMove:function(t){var i=t.touches[0];this.touch.y2=i.pageY;var e=(this.touch.y2-this.touch.y1)/18|0;this.touch.anchorIndex2=parseInt(this.touch.anchorIndex1)+e,this._scroll(this.touch.anchorIndex2),this.$refs.listView.scrollToElement(this.$refs.listGroup[this.touch.anchorIndex2],0)},scroll:function(t){this.scrollY=t.y},_scroll:function(t){t&&(t<0?t=0:t>this.listHeight.length-2&&(t=this.listHeight.length-2),this.scrollY=-this.listHeight[t])},_calculateHeight:function(){this.listHeight=[];var t=this.$refs.listGroup,i=0;this.listHeight.push(i);for(var e=0;e<t.length;e++){i+=t[e].clientHeight,this.listHeight.push(i)}}},watch:{data:function(){var t=this;setTimeout(function(){t._calculateHeight()},20)},scrollY:function(t){var i=this.listHeight;if(t>0)return void(this.currentIndex=0);for(var e=0;e<i.length-1;e++){var n=i[e],s=i[e+1];if(-t>n&&-t<=s)return this.currentIndex=e,void(this.diff=s+t)}this.currentIndex=i.length-2},diff:function(t){var i=t>0&&t<30?t-30:0;this.fixedTop!==i&&(this.fixedTop=i,this.$refs.fixed.style.transform="translate3d(0,"+i+"px,0)")}}}},603:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(57),s=e.n(n),r=e(595),a=e(206),o=e(127),l=e(626),A=e.n(l),c=e(49),u=e(128);i.default={mixins:[u.c],components:{listView:A.a},props:{},data:function(){return{singers:[]}},created:function(){this._getSingerList()},computed:{},methods:s()({handlePlaylist:function(t){var i=t.length>0?"60px":"";this.$refs.singer.style.bottom=i,this.$refs.list.refresh()}},e.i(c.b)({setSinger:"SET_SINGER"}),{selectSinger:function(t){this.$router.push({path:"/singer/"+t.id}),this.setSinger(t)},_getSingerList:function(){var t=this;e.i(r.b)().then(function(i){i.code===o.c&&(t.singers=t._normalizeSinger(i.data.list))})},_normalizeSinger:function(t){var i={hot:{title:"热门",items:[]}};t.forEach(function(t,e){e<10&&i.hot.items.push(new a.a({name:t.Fsinger_name,id:t.Fsinger_mid}));var n=t.Findex;i[n]||(i[n]={title:n,items:[]}),i[n].items.push(new a.a({name:t.Fsinger_name,id:t.Fsinger_mid}))});var e=[],n=[];for(var s in i)i[s].title.match(/[a-zA-Z]/)?e.push(i[s]):"热门"===i[s].title&&n.push(i[s]);return e.sort(function(t,i){return t.title.charCodeAt(0)-i.title.charCodeAt(0)}),n.concat(e)}})}},606:function(t,i,e){i=t.exports=e(577)(!0),i.push([t.i,".listview[data-v-18b98440]{position:relative;width:100%;height:100%;overflow:hidden;background:#222}.listview .list-group[data-v-18b98440]{padding-bottom:30px}.listview .list-group .list-group-title[data-v-18b98440]{height:30px;line-height:30px;padding-left:20px;font-size:12px;color:hsla(0,0%,100%,.5);background:#333}.listview .list-group .list-group-item[data-v-18b98440]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:20px 0 0 30px}.listview .list-group .list-group-item .avatar[data-v-18b98440]{width:50px;height:50px;border-radius:50%}.listview .list-group .list-group-item .name[data-v-18b98440]{margin-left:20px;color:hsla(0,0%,100%,.5);font-size:14px}.listview .list-shortcut[data-v-18b98440]{position:absolute;z-index:30;right:0;top:50%;transform:translateY(-50%);width:20px;padding:20px 0;border-radius:10px;text-align:center;background:rgba(0,0,0,.3);font-family:Helvetica}.listview .list-shortcut .item[data-v-18b98440]{padding:3px;line-height:1;color:hsla(0,0%,100%,.5);font-size:12px}.listview .list-shortcut .item.current[data-v-18b98440]{color:#ffcd32}.listview .list-fixed[data-v-18b98440]{position:absolute;top:0;left:0;width:100%}.listview .list-fixed .fixed-title[data-v-18b98440]{height:30px;line-height:30px;padding-left:20px;font-size:12px;color:hsla(0,0%,100%,.5);background:#333}.listview .loading-container[data-v-18b98440]{position:absolute;width:100%;top:50%;transform:translateY(-50%)}","",{version:3,sources:["/Users/baidu/Desktop/code/wangYiYun-Music/src/base/listview.vue"],names:[],mappings:"AACA,2BACE,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,gBAAiB,AACjB,eAAiB,CAClB,AACD,uCACE,mBAAqB,CACtB,AACD,yDACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,yBAA6B,AAC7B,eAAiB,CAClB,AACD,wDACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,qBAAuB,CACxB,AACD,gEACE,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,8DACE,iBAAkB,AAClB,yBAA6B,AAC7B,cAAgB,CACjB,AACD,0CACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,QAAS,AACT,2BAA4B,AAC5B,WAAY,AACZ,eAAgB,AAChB,mBAAoB,AACpB,kBAAmB,AACnB,0BAA4B,AAC5B,qBAAuB,CACxB,AACD,gDACE,YAAa,AACb,cAAe,AACf,yBAA6B,AAC7B,cAAgB,CACjB,AACD,wDACE,aAAe,CAChB,AACD,uCACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,UAAY,CACb,AACD,oDACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,yBAA6B,AAC7B,eAAiB,CAClB,AACD,8CACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,0BAA4B,CAC7B",file:"listview.vue",sourcesContent:["\n.listview[data-v-18b98440] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: #222;\n}\n.listview .list-group[data-v-18b98440] {\n  padding-bottom: 30px;\n}\n.listview .list-group .list-group-title[data-v-18b98440] {\n  height: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  font-size: 12px;\n  color: rgba(255,255,255,0.5);\n  background: #333;\n}\n.listview .list-group .list-group-item[data-v-18b98440] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  padding: 20px 0 0 30px;\n}\n.listview .list-group .list-group-item .avatar[data-v-18b98440] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n.listview .list-group .list-group-item .name[data-v-18b98440] {\n  margin-left: 20px;\n  color: rgba(255,255,255,0.5);\n  font-size: 14px;\n}\n.listview .list-shortcut[data-v-18b98440] {\n  position: absolute;\n  z-index: 30;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 20px;\n  padding: 20px 0;\n  border-radius: 10px;\n  text-align: center;\n  background: rgba(0,0,0,0.3);\n  font-family: Helvetica;\n}\n.listview .list-shortcut .item[data-v-18b98440] {\n  padding: 3px;\n  line-height: 1;\n  color: rgba(255,255,255,0.5);\n  font-size: 12px;\n}\n.listview .list-shortcut .item.current[data-v-18b98440] {\n  color: #ffcd32;\n}\n.listview .list-fixed[data-v-18b98440] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n.listview .list-fixed .fixed-title[data-v-18b98440] {\n  height: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  font-size: 12px;\n  color: rgba(255,255,255,0.5);\n  background: #333;\n}\n.listview .loading-container[data-v-18b98440] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n}"],sourceRoot:""}])},609:function(t,i,e){i=t.exports=e(577)(!0),i.push([t.i,".singer[data-v-3a5e1f07]{position:fixed;top:88px;bottom:0;width:100%}","",{version:3,sources:["/Users/baidu/Desktop/code/wangYiYun-Music/src/components/singer/singer.vue"],names:[],mappings:"AACA,yBACE,eAAgB,AAChB,SAAU,AACV,SAAU,AACV,UAAY,CACb",file:"singer.vue",sourcesContent:["\n.singer[data-v-3a5e1f07] {\n  position: fixed;\n  top: 88px;\n  bottom: 0;\n  width: 100%;\n}"],sourceRoot:""}])},616:function(t,i,e){var n=e(606);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(578)("34983d11",n,!0)},619:function(t,i,e){var n=e(609);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(578)("8a847f60",n,!0)},626:function(t,i,e){e(616);var n=e(9)(e(596),e(628),"data-v-18b98440",null);t.exports=n.exports},628:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("scroll",{ref:"listView",staticClass:"listview",attrs:{data:t.data,"listen-scroll":t.listenScroll,"probe-type":t.probeType},on:{scroll:t.scroll}},[e("ul",t._l(t.data,function(i){return e("li",{ref:"listGroup",refInFor:!0,staticClass:"list-group"},[e("h2",{staticClass:"list-group-title"},[t._v(t._s(i.title))]),t._v(" "),e("ul",t._l(i.items,function(i){return e("li",{staticClass:"list-group-item",on:{click:function(e){t.selectItem(i)}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.avatar,expression:"item.avatar"}],staticClass:"avatar"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(i.name))])])}))])})),t._v(" "),e("div",{staticClass:"list-shortcut",on:{touchstart:function(i){return i.stopPropagation(),i.preventDefault(),t.onShortcutTouchStart(i)},touchmove:function(i){return i.stopPropagation(),i.preventDefault(),t.onShortcutTouchMove(i)}}},[e("ul",t._l(t.shortcutList,function(i,n){return e("li",{staticClass:"item",class:{current:t.currentIndex===n},attrs:{"data-index":n}},[t._v(t._s(i)+"\n      ")])}))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.fixedTitle,expression:"fixedTitle"}],ref:"fixed",staticClass:"list-fixed"},[e("div",{staticClass:"fixed-title"},[t._v(t._s(t.fixedTitle))])])])},staticRenderFns:[]}},631:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"singer",staticClass:"singer"},[e("list-view",{ref:"list",attrs:{data:t.singers},on:{select:t.selectSinger}}),t._v(" "),e("router-view")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=4.4953b76f31fd0a2ad948.js.map