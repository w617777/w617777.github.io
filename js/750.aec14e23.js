"use strict";(self["webpackChunkvue_antd_pro"]=self["webpackChunkvue_antd_pro"]||[]).push([[750],{80750:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var n=function(){var e=this,t=e._self._c;return t("page-header-wrapper",{attrs:{"tab-list":e.tabList,"tab-active-key":e.tabActiveKey,"tab-change":e.handleTabChange}},[t("router-view")],1)},r=[],i={name:"AllCommodity",data:function(){return{tabList:[{key:"1",tab:"所有商品"},{key:"2",tab:"违规下架"},{key:"3",tab:"等待审核"}],tabActiveKey:"1"}},created:function(){},computed:{},methods:{handleTabChange:function(e){switch(this.tabActiveKey=e,e){case"1":this.$router.push("/adm-commodity/manage/all");break;case"2":this.$router.push("/adm-commodity/manage/violation");break;case"3":this.$router.push("/adm-commodity/manage/reviewed");break;default:this.$router.push("/adm-commodity/manage")}}}},u=i,o=a(1001),s=(0,o.Z)(u,n,r,!1,null,null,null),c=s.exports}}]);