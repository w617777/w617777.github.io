"use strict";(self["webpackChunkvue_antd_pro"]=self["webpackChunkvue_antd_pro"]||[]).push([[8318],{28318:function(e,a,t){t.r(a),t.d(a,{default:function(){return c}});t(68309);var l=function(){var e=this,a=this,t=a._self._c;return t("a-card",{attrs:{bordered:!1}},[t("div",{staticClass:"table-page-search-wrapper"},[t("a-form",{attrs:{layout:"inline"}},[t("a-row",{attrs:{gutter:48}},[t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",{attrs:{label:"角色ID"}},[t("a-input",{attrs:{placeholder:"请输入"}})],1)],1),t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",{attrs:{label:"状态"}},[t("a-select",{attrs:{placeholder:"请选择","default-value":"0"}},[t("a-select-option",{attrs:{value:"0"}},[a._v("全部")]),t("a-select-option",{attrs:{value:"1"}},[a._v("关闭")]),t("a-select-option",{attrs:{value:"2"}},[a._v("运行中")])],1)],1)],1),t("a-col",{attrs:{md:8,sm:24}},[t("span",{staticClass:"table-page-search-submitButtons"},[t("a-button",{attrs:{type:"primary"}},[a._v("查询")]),t("a-button",{staticStyle:{"margin-left":"8px"}},[a._v("重置")])],1)])],1)],1)],1),t("s-table",{attrs:{columns:a.columns,data:a.loadData},scopedSlots:a._u([{key:"actions",fn:function(e,l){return t("span",{},a._l(l.actionList,(function(e,l){return t("a-tag",{key:l},[a._v(a._s(e.describe))])})),1)}},{key:"status",fn:function(e){return t("span",{},[a._v(" "+a._s(a._f("statusFilter")(e))+" ")])}},{key:"action",fn:function(e,l){return t("span",{},[t("a",{on:{click:function(e){return a.handleEdit(l)}}},[a._v("编辑")]),t("a-divider",{attrs:{type:"vertical"}}),t("a-dropdown",[t("a",{staticClass:"ant-dropdown-link"},[a._v(" 更多 "),t("a-icon",{attrs:{type:"down"}})],1),t("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[t("a-menu-item",[t("a",{attrs:{href:"javascript:;"}},[a._v("详情")])]),t("a-menu-item",[t("a",{attrs:{href:"javascript:;"}},[a._v("禁用")])]),t("a-menu-item",[t("a",{attrs:{href:"javascript:;"}},[a._v("删除")])])],1)],1)],1)}}])}),t("a-modal",{attrs:{title:"操作",width:800},on:{ok:a.handleOk},model:{value:a.visible,callback:function(e){a.visible=e},expression:"visible"}},[t("a-form",{attrs:{autoFormCreate:function(a){e.form=a}}},[t("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"唯一识别码",hasFeedback:"",validateStatus:"success"}},[t("a-input",{attrs:{placeholder:"唯一识别码",id:"no",disabled:"disabled"},model:{value:a.mdl.id,callback:function(e){a.$set(a.mdl,"id",e)},expression:"mdl.id"}})],1),t("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"权限名称",hasFeedback:"",validateStatus:"success"}},[t("a-input",{attrs:{placeholder:"起一个名字",id:"permission_name"},model:{value:a.mdl.name,callback:function(e){a.$set(a.mdl,"name",e)},expression:"mdl.name"}})],1),t("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"状态",hasFeedback:"",validateStatus:"warning"}},[t("a-select",{model:{value:a.mdl.status,callback:function(e){a.$set(a.mdl,"status",e)},expression:"mdl.status"}},[t("a-select-option",{attrs:{value:"1"}},[a._v("正常")]),t("a-select-option",{attrs:{value:"2"}},[a._v("禁用")])],1)],1),t("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"描述",hasFeedback:""}},[t("a-textarea",{attrs:{rows:5,placeholder:"...",id:"describe"},model:{value:a.mdl.describe,callback:function(e){a.$set(a.mdl,"describe",e)},expression:"mdl.describe"}})],1),t("a-divider"),t("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"赋予权限",hasFeedback:""}},[t("a-select",{staticStyle:{width:"100%"},attrs:{mode:"multiple",allowClear:!0},model:{value:a.mdl.actions,callback:function(e){a.$set(a.mdl,"actions",e)},expression:"mdl.actions"}},a._l(a.permissionList,(function(e,l){return t("a-select-option",{key:l,attrs:{value:e.value}},[a._v(a._s(e.label))])})),1)],1)],1)],1)],1)},s=[],n=(t(21249),t(41539),t(38493)),r={name:"TableList",components:{STable:n.m7},data:function(){var e=this;return{description:"列表使用场景：后台管理中的权限管理以及角色管理，可用于基于 RBAC 设计的角色权限控制，颗粒度细到每一个操作类型。",visible:!1,labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},form:null,mdl:{},advanced:!1,queryParam:{},columns:[{title:"唯一识别码",dataIndex:"id"},{title:"权限名称",dataIndex:"name"},{title:"可操作权限",dataIndex:"actions",scopedSlots:{customRender:"actions"}},{title:"状态",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"操作",width:"150px",dataIndex:"action",scopedSlots:{customRender:"action"}}],permissionList:null,loadData:function(a){return e.$http.get("/permission",{params:Object.assign(a,e.queryParam)}).then((function(e){var a=e.result;return a.data.map((function(e){return e.actionList=JSON.parse(e.actionData),e})),a}))},selectedRowKeys:[],selectedRows:[]}},filters:{statusFilter:function(e){var a={1:"正常",2:"禁用"};return a[e]}},created:function(){this.loadPermissionList()},methods:{loadPermissionList:function(){var e=this;new Promise((function(e){var a=[{label:"新增",value:"add",defaultChecked:!1},{label:"查询",value:"get",defaultChecked:!1},{label:"修改",value:"update",defaultChecked:!1},{label:"列表",value:"query",defaultChecked:!1},{label:"删除",value:"delete",defaultChecked:!1},{label:"导入",value:"import",defaultChecked:!1},{label:"导出",value:"export",defaultChecked:!1}];setTimeout(e(a),1500)})).then((function(a){e.permissionList=a}))},handleEdit:function(e){this.mdl=Object.assign({},e),console.log(this.mdl),this.visible=!0},handleOk:function(){},onChange:function(e,a){this.selectedRowKeys=e,this.selectedRows=a},toggleAdvanced:function(){this.advanced=!this.advanced}},watch:{}},o=r,i=t(1001),d=(0,i.Z)(o,l,s,!1,null,null,null),c=d.exports}}]);