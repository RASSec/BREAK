import{d as c,B as i,c as m,a as p,t,b as o,w as r,u as l,F as b,o as $,e as s}from"./index.01454d6d.js";import{E as f,a as n}from"./el-table-column.f2d01cbe.js";const K=c({__name:"AvoidancesView",setup(v){let d=Array();return Object.keys(i.avoidances).forEach(a=>{let e={...i.avoidances[a],aKey:a};d.push(e)}),(a,u)=>($(),m(b,null,[p("h3",null,t(a.$t("menu.avoidances")),1),o(l(f),{data:l(d),stripe:"",border:""},{default:r(()=>[o(l(n),{prop:"aKey",width:"80px",label:a.$t("ID")},null,8,["label"]),o(l(n),{width:"100px",label:a.$t("title")},{header:r(()=>[s(t(a.$t("title")),1)]),default:r(e=>[s(t(e.row.aKey?a.$t(`BREAK.avoidances.${e.row.aKey}.title`):""),1)]),_:1},8,["label"]),o(l(n),{label:a.$t("summary")},{default:r(e=>[s(t(e.row.aKey?a.$t(`BREAK.avoidances.${e.row.aKey}.summary`):""),1)]),_:1},8,["label"]),o(l(n),{label:a.$t("description")},{default:r(e=>[s(t(e.row.aKey?a.$t(`BREAK.avoidances.${e.row.aKey}.description`):""),1)]),_:1},8,["label"])]),_:1},8,["data"])],64))}});export{K as default};