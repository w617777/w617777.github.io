"use strict";(self["webpackChunkvue_antd_pro"]=self["webpackChunkvue_antd_pro"]||[]).push([[3097],{63097:function(e,r,a){a.r(r),a.d(r,{default:function(){return n}});var t=function(){var e=this,r=e._self._c;return r("page-header-wrapper",{attrs:{title:!1,content:e.$t("form.basic-form.basic.description")}},[r("a-card",{attrs:{"body-style":{padding:"24px 32px"},bordered:!1}},[r("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[r("a-form-item",{attrs:{label:e.$t("form.basic-form.title.label"),labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:e.$t("form.basic-form.title.required")}]}],expression:"[\n            'name',\n            {rules: [{ required: true, message: $t('form.basic-form.title.required') }]}\n          ]"}],attrs:{name:"name",placeholder:e.$t("form.basic-form.title.placeholder")}})],1),r("a-form-item",{attrs:{label:e.$t("form.basic-form.date.label"),labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}}},[r("a-range-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["buildTime",{rules:[{required:!0,message:e.$t("form.basic-form.date.required")}]}],expression:"[\n            'buildTime',\n            {rules: [{ required: true, message: $t('form.basic-form.date.required') }]}\n          ]"}],staticStyle:{width:"100%"},attrs:{name:"buildTime"}})],1),r("a-form-item",{attrs:{label:e.$t("form.basic-form.goal.label"),labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}}},[r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["description",{rules:[{required:!0,message:e.$t("form.basic-form.goal.required")}]}],expression:"[\n            'description',\n            {rules: [{ required: true, message: $t('form.basic-form.goal.required') }]}\n          ]"}],attrs:{rows:"4",placeholder:e.$t("form.basic-form.goal.placeholder")}})],1),r("a-form-item",{attrs:{label:e.$t("form.basic-form.standard.label"),labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}}},[r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{rules:[{required:!0,message:e.$t("form.basic-form.standard.required")}]}],expression:"[\n            'type',\n            {rules: [{ required: true, message: $t('form.basic-form.standard.required') }]}\n          ]"}],attrs:{rows:"4",placeholder:e.$t("form.basic-form.standard.placeholder")}})],1),r("a-form-item",{attrs:{label:e.$t("form.basic-form.client.label"),labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["customer",{rules:[{required:!0,message:e.$t("form.basic-form.client.required")}]}],expression:"[\n            'customer',\n            {rules: [{ required: true, message: $t('form.basic-form.client.required') }]}\n          ]"}],attrs:{placeholder:e.$t("form.basic-form.client.placeholder")}})],1),r("a-form-item",{attrs:{label:e.$t("form.basic-form.invites.label"),labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}},required:!1}},[r("a-input",{attrs:{placeholder:e.$t("form.basic-form.invites.placeholder")}})],1),r("a-form-item",{attrs:{label:e.$t("form.basic-form.weight.label"),labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}},required:!1}},[r("a-input-number",{attrs:{min:0,max:100}}),r("span",[e._v(" %")])],1),r("a-form-item",{attrs:{label:e.$t("form.basic-form.public.label"),labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}},required:!1,help:e.$t("form.basic-form.label.help")}},[r("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["target",{initialValue:1}],expression:"['target', { initialValue: 1 }]"}]},[r("a-radio",{attrs:{value:1}},[e._v(e._s(e.$t("form.basic-form.radio.public")))]),r("a-radio",{attrs:{value:2}},[e._v(e._s(e.$t("form.basic-form.radio.partially-public")))]),r("a-radio",{attrs:{value:3}},[e._v(e._s(e.$t("form.basic-form.radio.private")))])],1),r("a-form-item",{directives:[{name:"show",rawName:"v-show",value:2===e.form.getFieldValue("target"),expression:"form.getFieldValue('target') === 2"}]},[r("a-select",{attrs:{mode:"multiple"}},[r("a-select-option",{attrs:{value:"4"}},[e._v(e._s(e.$t("form.basic-form.option.A")))]),r("a-select-option",{attrs:{value:"5"}},[e._v(e._s(e.$t("form.basic-form.option.B")))]),r("a-select-option",{attrs:{value:"6"}},[e._v(e._s(e.$t("form.basic-form.option.C")))])],1)],1)],1),r("a-form-item",{staticStyle:{"text-align":"center"},attrs:{wrapperCol:{span:24}}},[r("a-button",{attrs:{htmlType:"submit",type:"primary"}},[e._v(e._s(e.$t("form.basic-form.form.submit")))]),r("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(e._s(e.$t("form.basic-form.form.save")))])],1)],1)],1)],1)},s=[],o={name:"BaseForm",data:function(){return{form:this.$form.createForm(this)}},methods:{handleSubmit:function(e){e.preventDefault(),this.form.validateFields((function(e,r){e||console.log("Received values of form: ",r)}))}}},l=o,i=a(1001),m=(0,i.Z)(l,t,s,!1,null,null,null),n=m.exports}}]);