import{d as _,B as f,r as w,c as b,a as K,t as s,b as l,w as t,u as a,F as m,_ as $,o as h,e as k}from"./index.01454d6d.js";import{E,a as i}from"./el-table-column.f2d01cbe.js";const B=["onClick"],V=_({__name:"RisksView",setup(C){let p=Array();Object.keys(f.risks).forEach(e=>{let u={...f.risks[e],rKey:e};p.push(u)});let o=w(!1),d=w(""),c=(e,n)=>{o.value=n,d.value=e},y=()=>{o.value=!1};return(e,n)=>{const u=$;return h(),b(m,null,[K("h3",null,s(e.$t("menu.risks")),1),l(a(E),{data:a(p),stripe:"",border:""},{default:t(()=>[l(a(i),{prop:"rKey",width:"80px",label:e.$t("riskKey")},{default:t(r=>[K("a",{onClick:D=>a(c)(r.row.rKey,!0),href:"javascript:void(0);"},s(r.row.rKey),9,B)]),_:1},8,["label"]),l(a(i),{prop:"title",width:"100px",label:e.$t("riskTitle")},{default:t(r=>[k(s(r.row.rKey?e.$t(`BREAK.risks.${r.row.rKey}.title`):""),1)]),_:1},8,["label"]),l(a(i),{prop:"description",label:e.$t("riskDescription")},{default:t(r=>[k(s(r.row.rKey?e.$t(`BREAK.risks.${r.row.rKey}.description`):""),1)]),_:1},8,["label"]),l(a(i),{prop:"influence",label:e.$t("riskInfluence")},{default:t(r=>[k(s(r.row.rKey?e.$t(`BREAK.risks.${r.row.rKey}.influence`):""),1)]),_:1},8,["label"])]),_:1},8,["data"]),l(u,{onDrawerClose:a(y),drawer:a(o),rKey:a(d)},null,8,["onDrawerClose","drawer","rKey"])],64)}}});export{V as default};