"use strict";(self["webpackChunkvue_antd_pro"]=self["webpackChunkvue_antd_pro"]||[]).push([[2508],{9707:function(t,e,a){a.r(e),a.d(e,{default:function(){return g}});var s=function(){var t=this,e=this,a=e._self._c;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:48}},[a("a-col",{attrs:{md:8,sm:24}},[a("a-form-item",{attrs:{label:"商品编号"}},[a("a-input",{attrs:{placeholder:"请输入商品编号"},model:{value:e.queryParam.id,callback:function(t){e.$set(e.queryParam,"id",t)},expression:"queryParam.id"}})],1)],1),a("a-col",{attrs:{md:8,sm:24}},[a("a-form-item",{attrs:{label:"商品名称"}},[a("a-input",{attrs:{placeholder:"请输入商品名称"},model:{value:e.queryParam.id,callback:function(t){e.$set(e.queryParam,"id",t)},expression:"queryParam.id"}})],1)],1),e.advanced?[a("a-col",{attrs:{md:8,sm:24}},[a("a-form-item",{attrs:{label:"状态"}},[a("a-select",{attrs:{placeholder:"请选择状态","default-value":"0"},model:{value:e.queryParam.status,callback:function(t){e.$set(e.queryParam,"status",t)},expression:"queryParam.status"}},[a("a-select-option",{attrs:{value:"0"}},[e._v("全部")]),a("a-select-option",{attrs:{value:"1"}},[e._v("出售中")]),a("a-select-option",{attrs:{value:"2"}},[e._v("已下架")]),a("a-select-option",{attrs:{value:"3"}},[e._v("违规下架")]),a("a-select-option",{attrs:{value:"4"}},[e._v("待审核")]),a("a-select-option",{attrs:{value:"5"}},[e._v("驳回")])],1)],1)],1),a("a-col",{attrs:{md:8,sm:24}},[a("a-form-item",{attrs:{label:"关键字"}},[a("a-input",{attrs:{placeholder:"请输入关键字"},model:{value:e.queryParam.id,callback:function(t){e.$set(e.queryParam,"id",t)},expression:"queryParam.id"}})],1)],1),a("a-col",{attrs:{md:8,sm:24}},[a("a-form-item",{attrs:{label:"店铺"}},[a("a-input",{attrs:{placeholder:"请输入店铺名称"},model:{value:e.queryParam.id,callback:function(t){e.$set(e.queryParam,"id",t)},expression:"queryParam.id"}})],1)],1),a("a-col",{attrs:{md:8,sm:24}},[a("a-form-item",{attrs:{label:"商品分类"}},[a("Cascader",{attrs:{options:e.fenlei,"change-on-select":"",placeholder:"请选择商品分类"},model:{value:e.queryParam.fenlei,callback:function(t){e.$set(e.queryParam,"fenlei",t)},expression:"queryParam.fenlei"}})],1)],1)]:e._e(),a("a-col",{attrs:{md:e.advanced?24:8,sm:24}},[a("span",{staticClass:"table-page-search-submitButtons",style:e.advanced&&{float:"right",overflow:"hidden"}||{}},[a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.$refs.table.refresh(!0)}}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:function(){return t.queryParam={}}}},[e._v("重置")]),a("a",{staticStyle:{"margin-left":"8px"},on:{click:e.toggleAdvanced}},[e._v(" "+e._s(e.advanced?"收起":"展开")+" "),a("a-icon",{attrs:{type:e.advanced?"up":"down"}})],1)],1)])],2)],1)],1),a("s-table",{ref:"table",attrs:{size:"default",rowKey:"key",columns:e.columns,data:e.loadData,alert:!0,rowSelection:e.rowSelection,showPagination:"auto",scroll:{x:"max-content",scrollToFirstRowOnChange:!0}},scopedSlots:e._u([{key:"serial",fn:function(t,s,n){return a("span",{},[e._v(" "+e._s(n+1)+" ")])}},{key:"name",fn:function(t){return a("div",{staticClass:"trade-name"},[a("img",{staticStyle:{width:"80px",height:"80px"},attrs:{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}}),a("div",{staticClass:"text"},[e._v(" "+e._s(t||"-")+" "),a("div",[a("a-space",{attrs:{size:5}},[a("a-tooltip",{attrs:{placement:"top"}},[a("template",{slot:"title"},[a("span",[e._v("此宝贝尚未发布手机端")])]),a("a-icon",{attrs:{type:"mobile"}})],2),a("a-tooltip",{attrs:{placement:"right"}},[a("template",{slot:"title"},[a("span",[e._v("商品二维码")])]),a("a-icon",{attrs:{type:"qrcode"}})],2),a("a-tag",{attrs:{color:"blue"}},[e._v(" 零售 ")])],1)],1),a("div",[e._v("店铺:"),a("a-button",{attrs:{size:"small",type:"link"}},[e._v("蒙顿茶膏旗舰店")])],1)])])}},{key:"status",fn:function(t){return a("span",{},[a("a-badge",{attrs:{status:e._f("statusTypeFilter")(t),text:e._f("statusFilter")(t)}})],1)}},{key:"sort",fn:function(t){return a("a-popover",{attrs:{placement:"top",trigger:"click"}},[a("template",{slot:"content"},[a("a-input-search",{attrs:{value:t,placeholder:"请输入排序","enter-button":"保存"}})],1),a("span",{staticStyle:{cursor:"pointer"}},[e._v(" "+e._s(t)+" "),a("a-icon",{attrs:{type:"edit"}})],1)],2)}}])},[a("div",{attrs:{slot:"tabs"},slot:"tabs"},[e._v(" 新品："),a("a-switch",{attrs:{size:"small","default-checked":""}}),a("br"),e._v(" 精品："),a("a-switch",{attrs:{size:"small"}}),a("br"),e._v(" 热销："),a("a-switch",{attrs:{size:"small","default-checked":""}})],1),a("span",{attrs:{slot:"action"},slot:"action"},[[a("a",[e._v("查看")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",[e._v("审核")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",[e._v("强制下架")])]],2)])],1)},n=[],r=a(3360),i=(a(21405),a(88893)),o=(a(41539),a(30381)),l=a.n(o),c=a(38493),d=a(70206),u=[{title:"商品编号",dataIndex:"no",width:100},{title:"商品名称",dataIndex:"name",scopedSlots:{customRender:"name"},width:300},{title:"价格",dataIndex:"price",width:100},{title:"库存",dataIndex:"stock",sorter:!0,width:100},{title:"状态",dataIndex:"status",scopedSlots:{customRender:"status"},width:100},{title:"标签",dataIndex:"tabs",scopedSlots:{customRender:"tabs"},width:130},{title:"发布时间",dataIndex:"updatedAt",width:130},{title:"排序",dataIndex:"sort",scopedSlots:{customRender:"sort"},width:100},{title:"操作",dataIndex:"action",width:200,fixed:"right",scopedSlots:{customRender:"action"}}],m={1:{status:"success",text:"出售中"},2:{status:"default",text:"已下架"},3:{status:"error",text:"违规下架"},4:{status:"processing",text:"待审核"},5:{status:"warning",text:"驳回"}},p=[{value:"1",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],f={name:"TableList",components:{STable:c.m7,Ellipsis:c.mH,Cascader:i.Z},data:function(){var t=this;return this.columns=u,{fenlei:p,visible:!1,confirmLoading:!1,mdl:null,advanced:!1,queryParam:{},loadData:function(e){var a=Object.assign({},e,t.queryParam);return console.log("loadData request parameters:",a),new Promise((function(t,e){t({data:[{id:1,no:"No.1",name:"今大福 2022年头春散茶 普洱生茶",price:120,stock:999,status:1,sort:255,updatedAt:"2018-07-26 00:00:00"},{id:1,no:"No.1",name:"今大福 2022年头春散茶 普洱生茶",price:120,stock:999,status:1,sort:255,updatedAt:"2018-07-26 00:00:00"},{id:1,no:"No.1",name:"今大福 2022年头春散茶 普洱生茶",price:120,stock:999,status:1,sort:255,updatedAt:"2018-07-26 00:00:00"},{id:1,no:"No.1",name:"今大福 2022年头春散茶 普洱生茶",price:120,stock:999,status:1,sort:255,updatedAt:"2018-07-26 00:00:00"},{id:1,no:"No.1",name:"今大福 2022年头春散茶 普洱生茶",price:120,stock:999,status:1,sort:255,updatedAt:"2018-07-26 00:00:00"}],pageSize:10,pageNo:0,totalPage:6,totalCount:57})}))},selectedRowKeys:[],selectedRows:[]}},filters:{statusFilter:function(t){return m[t].text},statusTypeFilter:function(t){return m[t].status}},created:function(){(0,d.JV)({t:new Date})},computed:{rowSelection:function(){return{selectedRowKeys:this.selectedRowKeys,onChange:this.onSelectChange}}},methods:{handleAdd:function(){this.mdl=null,this.visible=!0},handleEdit:function(t){this.visible=!0,this.mdl=(0,r.Z)({},t)},handleOk:function(){var t=this,e=this.$refs.createModal.form;this.confirmLoading=!0,e.validateFields((function(a,s){a?t.confirmLoading=!1:(console.log("values",s),s.id>0?new Promise((function(t,e){setTimeout((function(){t()}),1e3)})).then((function(a){t.visible=!1,t.confirmLoading=!1,e.resetFields(),t.$refs.table.refresh(),t.$message.info("修改成功")})):new Promise((function(t,e){setTimeout((function(){t()}),1e3)})).then((function(a){t.visible=!1,t.confirmLoading=!1,e.resetFields(),t.$refs.table.refresh(),t.$message.info("新增成功")})))}))},handleCancel:function(){this.visible=!1;var t=this.$refs.createModal.form;t.resetFields()},handleSub:function(t){0!==t.status?this.$message.info("".concat(t.no," 订阅成功")):this.$message.error("".concat(t.no," 订阅失败，规则已关闭"))},onSelectChange:function(t,e){this.selectedRowKeys=t,this.selectedRows=e},toggleAdvanced:function(){this.advanced=!this.advanced},resetSearchForm:function(){this.queryParam={date:l()(new Date)}}}},h=f,v=a(1001),b=(0,v.Z)(h,s,n,!1,null,"35453c9c",null),g=b.exports}}]);