webpackJsonp([2],{jX86:function(e,t){},zQRk:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={name:"bottom",data:function(){return{project_dialogVisible:!1,project_detailed:{name:"二次元壁纸分享ㅤ|ㅤquadratic_element",version:{state:"内部开发中",build_no:"0.0.0.1"},rate_of_progress:10,user_evaluate:{evaluate:null,evaluate_submit_visible:!1,percentage:0,colors:[{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"#1989fa",percentage:80},{color:"#6f7ad3",percentage:100}]}}}},methods:{increase:function(){this.project_detailed.user_evaluate.percentage<100&&(this.project_detailed.user_evaluate.percentage+=5)},estimate_verdict:function(e){switch(e){case 1:console.log("极差？ 来来来！  你来说下哪里差了？  这种话怎么会从你的嘴巴里面说出来？");break;case 2:console.log("失望？ 什么功能让你这么失望？  来点改进的意见？");break;case 3:console.log("一般？ 是什么让你觉得一般？  来点改进的意见？");break;case 4:console.log("满意？ 就不能给个惊喜么？  还是有功能不够爽么？");break;case 5:console.log("哇偶！ 给满分的你一定是人见人爱，花见花开，汽车见了绕道开的万中无一的幸运儿！")}},evaluate_save:function(e){e&&this.estimate_verdict(this.project_detailed.evaluate)},evaluate_submit:function(e){e&&alert(this.project_detailed.evaluate),this.project_detailed.evaluate_submit_visible=!1},handleClose:function(e){var t=this;this.$confirm("确认关闭？").then(function(a){e(),t.project_detailed.evaluate=null}).catch(function(e){})}},components:{user_evaluate:function(e){return a.e(7).then(function(){var t=[a("0OPB")];e.apply(null,t)}.bind(this)).catch(a.oe)}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bottom"},[a("el-row",[a("el-col",{attrs:{span:10,offset:1}},[a("div",{staticClass:"transition-box"},[e._v("Copyright xietao")])]),e._v(" "),a("el-col",{attrs:{span:10,offset:1}},[a("el-button",{attrs:{type:"text"},on:{click:function(t){e.project_dialogVisible=!0}}},[e._v("项目信息")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"项目信息",top:"25px",visible:e.project_dialogVisible,"before-close":e.handleClose,"show-close":!1,"destroy-on-close":""},on:{"update:visible":function(t){e.project_dialogVisible=t}}},[a("el-row",[a("el-col",{attrs:{span:6}},[e._v("项目名称：")]),e._v(" "),a("el-col",{attrs:{span:18}},[a("font",{staticClass:"xmxx-font-color"},[e._v(e._s(e.project_detailed.name))])],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:6}},[e._v("版本信息：")]),e._v(" "),a("el-col",{attrs:{offset:18}}),e._v(" "),a("el-col",{attrs:{span:12}},[e._v("当前状态："),a("font",{staticClass:"xmxx-font-color"},[e._v(e._s(e.project_detailed.version.state))])],1),e._v(" "),a("el-col",{attrs:{span:12}},[e._v("版本号："),a("font",{staticClass:"xmxx-font-color"},[e._v(e._s(e.project_detailed.version.build_no))])],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:6}},[a("font",[e._v("项目进度：")])],1),e._v(" "),a("el-col",{attrs:{offset:4,span:20}},[a("el-progress",{attrs:{percentage:e.project_detailed.rate_of_progress}})],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("font",[e._v("您对我们评价：")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.project_detailed.user_evaluate.evaluate_submit_visible=!0}}},[e._v("点我前往评价")])],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.project_dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.project_dialogVisible=!1}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{width:"35%",top:"25px",visible:e.project_detailed.user_evaluate.evaluate_submit_visible,"show-close":!1,"append-to-body":"","destroy-on-close":""},on:{"update:visible":function(t){return e.$set(e.project_detailed.user_evaluate,"evaluate_submit_visible",t)}}},[a("el-steps",{staticStyle:{"margin-top":"-40px"},attrs:{simple:"",active:1}},[a("el-step",{attrs:{title:"填写",icon:"el-icon-edit"}}),e._v(" "),a("el-step",{attrs:{title:"完成",icon:"el-icon-success"}}),e._v(" "),a("el-step",{attrs:{title:"保存",icon:"el-icon-success",description:"填写完成后可以点击保存！确认无误后在进行提交！"}}),e._v(" "),a("el-step",{attrs:{title:"提交",icon:"el-icon-upload",description:"提交后将永远无法修改！请慎重！"}})],1),e._v(" "),a("el-form",{staticStyle:{"margin-top":"10px"},attrs:{model:e.project_detailed.user_evaluate,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"总ㅤ分ㅤ"}},[a("div",{staticStyle:{"margin-top":"5px","margin-left":"15px"}},[a("el-progress",{attrs:{"stroke-width":30,"text-inside":!0,percentage:e.project_detailed.user_evaluate.percentage,color:e.project_detailed.user_evaluate.evaluate_submit_visible.colors}})],1)]),e._v(" "),a("el-form-item",{attrs:{label:"备ㅤ注ㅤ"}},[a("span",{staticStyle:{"margin-top":"10px","margin-left":"25px"}},[e._v("一星等于一分")])]),e._v(" "),a("el-form-item",{attrs:{label:"加分"}},[a("div",{staticClass:"transition-box",staticStyle:{"margin-top":"10px","margin-left":"25px"}},[a("el-button",{attrs:{icon:"el-icon-plus"},on:{click:e.increase}})],1)]),e._v(" "),a("el-form-item",{attrs:{label:"整体布局"}},[a("div",{staticClass:"transition-box",staticStyle:{"margin-top":"10px","margin-left":"25px"}},[a("el-rate",{attrs:{"show-text":""},model:{value:e.project_detailed.evaluate,callback:function(t){e.$set(e.project_detailed,"evaluate",t)},expression:"project_detailed.evaluate"}})],1)]),e._v(" "),a("el-form-item",{attrs:{label:"主ㅤ题ㅤ"}},[a("div",{staticClass:"transition-box",staticStyle:{"margin-top":"10px","margin-left":"25px"}},[a("el-rate",{attrs:{"show-text":""},model:{value:e.project_detailed.evaluate,callback:function(t){e.$set(e.project_detailed,"evaluate",t)},expression:"project_detailed.evaluate"}})],1)]),e._v(" "),a("el-form-item",{attrs:{label:"颜ㅤ色ㅤ"}},[a("div",{staticClass:"transition-box",staticStyle:{"margin-top":"10px","margin-left":"25px"}},[a("el-rate",{attrs:{"show-text":""},model:{value:e.project_detailed.evaluate,callback:function(t){e.$set(e.project_detailed,"evaluate",t)},expression:"project_detailed.evaluate"}})],1)]),e._v(" "),a("el-form-item",{attrs:{label:"文ㅤ字ㅤ"}},[a("div",{staticClass:"transition-box",staticStyle:{"margin-top":"10px","margin-left":"25px"}},[a("el-rate",{attrs:{"show-text":""},model:{value:e.project_detailed.evaluate,callback:function(t){e.$set(e.project_detailed,"evaluate",t)},expression:"project_detailed.evaluate"}})],1)]),e._v(" "),a("el-form-item",{attrs:{label:"实ㅤ用ㅤ"}},[a("div",{staticClass:"transition-box",staticStyle:{"margin-top":"10px","margin-left":"25px"}},[a("el-rate",{attrs:{"show-text":""},model:{value:e.project_detailed.evaluate,callback:function(t){e.$set(e.project_detailed,"evaluate",t)},expression:"project_detailed.evaluate"}})],1)]),e._v(" "),a("el-form-item",{attrs:{label:"个性化ㅤ"}},[a("div",{staticClass:"transition-box",staticStyle:{"margin-top":"10px","margin-left":"25px"}},[a("el-rate",{attrs:{"show-text":""},model:{value:e.project_detailed.evaluate,callback:function(t){e.$set(e.project_detailed,"evaluate",t)},expression:"project_detailed.evaluate"}})],1)]),e._v(" "),a("el-form-item",{attrs:{label:"体ㅤ验ㅤ"}},[a("div",{staticClass:"transition-box",staticStyle:{"margin-top":"10px","margin-left":"25px"}},[a("el-rate",{attrs:{"show-text":""},model:{value:e.project_detailed.evaluate,callback:function(t){e.$set(e.project_detailed,"evaluate",t)},expression:"project_detailed.evaluate"}})],1)]),e._v(" "),a("el-form-item",{attrs:{label:"权ㅤ限ㅤ"}},[a("div",{staticClass:"transition-box",staticStyle:{"margin-top":"10px","margin-left":"25px"}},[a("el-rate",{attrs:{"show-text":""},model:{value:e.project_detailed.evaluate,callback:function(t){e.$set(e.project_detailed,"evaluate",t)},expression:"project_detailed.evaluate"}})],1)]),e._v(" "),a("el-form-item",{attrs:{label:"资ㅤ源ㅤ"}},[a("div",{staticClass:"transition-box",staticStyle:{"margin-top":"10px","margin-left":"25px"}},[a("el-rate",{attrs:{"show-text":""},model:{value:e.project_detailed.evaluate,callback:function(t){e.$set(e.project_detailed,"evaluate",t)},expression:"project_detailed.evaluate"}})],1)])],1),e._v(" "),a("div",{staticClass:"dialog-footer",staticStyle:{"margin-bottom":"15px"},attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"success"},on:{click:function(t){e.project_detailed.user_evaluate.evaluate_submit_visible=!0}}},[e._v("提交")]),e._v(" "),a("br")],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.project_detailed.user_evaluate.evaluate_submit_visible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.project_detailed.user_evaluate.evaluate_submit_visible=!0}}},[e._v("保存")])],1)],1)],1)},staticRenderFns:[]};var i=a("VU/8")(l,o,!1,function(e){a("jX86")},null,null);t.default=i.exports}});
//# sourceMappingURL=2.1a93b7eed51b1df2921d.js.map