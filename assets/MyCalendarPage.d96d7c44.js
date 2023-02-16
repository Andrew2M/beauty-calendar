import{a as e,F as C,r as x,u as D,j as r,e as Z,B as ee,i as Y,k as ae,l as F,b as f,m as O,n as k,o as te,p as se,q as ne,t as ie,v as $,w as H,x as re,y as ce,z as le,C as de,s as B,D as oe,N as j,h as ue,E,G,H as he,I as me,J as pe,K as _e,M as fe,O as W,P as Q,Q as P,R as U,T as ge,U as ye,V as ve,W as be,X as Ne,Y as R,Z as Ae,_ as Ce,$ as De,a0 as Se,a1 as we,a2 as Ie,a3 as ke,a4 as xe,a5 as Me,a6 as Oe,a7 as Te,a8 as Le,f as Fe,a9 as $e,aa as He,ab as Re,ac as Be}from"./index.ab8dc3ea.js";import{T as V}from"./ToggleButton.670adc52.js";import{O as Ee}from"./OptionSelectService.cbfc8a0a.js";const z=()=>e("div",{}),Pe=()=>e("div",{className:"calendar__date skeleton animate-pulse",children:" "}),qe=()=>e(C,{children:[...Array(30).keys()].map(a=>e(Pe,{},`date-${a}`))}),X=()=>{const[a,n]=x.exports.useState(!1),t=()=>{n(!0)},s=()=>{n(!1)};return x.exports.useEffect(()=>(window.addEventListener("focus",t),window.addEventListener("blur",s),()=>{window.removeEventListener("focus",t),window.removeEventListener("blur",s)}),[]),a},Ge=({appointment:a,date:n,status:t,setPresenceStatus:s})=>{const i=D(),[d,c]=x.exports.useState(!1),o=x.exports.useRef(),g=x.exports.useRef(),l=async h=>{var N,S;const v=await s({appointmentId:a._id,status:h,dayId:a.dayId});"error"in v&&i(F({message:(S=(N=v==null?void 0:v.error)==null?void 0:N.data)==null?void 0:S.message,_id:a._id}))},{details:u}=a,{client:p,service:y,specialist:_}=u,A=new Date(n).getTimezoneOffset()*60*1e3,b=9e4;return new Date(n).getTime()+A+b,r(C,{children:[_?r("div",{className:"appointment__basic-info",children:[e("img",{className:"appointment__client-photo",src:`${Z.baseImgURL}/${p.photo}`}),r("div",{children:[e("h3",{className:"heading heading_ternary",children:p.name}),e("p",{children:y.name})]})]}):e(C,{children:r("div",{className:"",children:[e("h3",{className:"heading heading__ternary",children:y.name}),r("p",{children:[y.price," RON"]})]})}),t==="pending"?r("div",{className:"appointment__status-buttons",children:[e("button",{className:`button__default button--error${d?" slide__to-left":" hidden"}
            `,ref:g,onClick:()=>l("absent"),children:e(ee,{})}),e("button",{className:"button__round button--primary-dark",onClick:()=>c(h=>!h),children:e(Y,{className:d?"rotate__45":"rotate__0"})}),e("button",{className:`button__default button--success${d?" slide__to-right":" hidden"}
           `,ref:o,onClick:()=>l("present"),children:e(ae,{})})]}):null]})},We=({appointment:a,setShowMoreInfo:n,showMoreInfo:t,setIsAvailable:s,confirmAppointment:i,cancelAppointment:d})=>{const c=D(),{isAvailable:o,date:g,_id:l,details:u,endTime:p,status:y}=a,{service:_}=f(O),{selectedDayId:A}=f(k),b=async()=>{var w,I;const m=await s({appointmentId:l,dayId:a.dayId});"error"in m&&c(F({message:(I=(w=m==null?void 0:m.error)==null?void 0:w.data)==null?void 0:I.message,_id:l}))},h=async()=>{var w,I;const m=await i({appointmentId:l,dayId:A,serviceId:_._id});"error"in m?c(F({message:(I=(w=m==null?void 0:m.error)==null?void 0:w.data)==null?void 0:I.message,_id:l})):(c($(null)),c(H(0)))};let v=g.slice(11,16),N=p.slice(11,16);const S=()=>{c(ne(a._id)),n(m=>!m)},T=async()=>{var w,I,L,q;const m=await d({appointmentId:a._id,dayId:a.dayId});"error"in m?console.log((I=(w=m==null?void 0:m.error)==null?void 0:w.data)==null?void 0:I.message):console.log((q=(L=m==null?void 0:m.error)==null?void 0:L.data)==null?void 0:q.message)};let M;return _?M=e(C,{children:e("button",{className:"button__default button--primary-dark",onClick:h,children:e(ie,{})})}):u?M=e(C,{children:u!=null&&u.specialist?e(C,{children:e("button",{className:"button__round button--transparent",onClick:()=>S(),children:e(te,{})})}):e("button",{className:"button__square button--warn",onClick:T,children:e(se,{})})}):M=e(C,{children:e(V,{isChecked:a.isAvailable,dayId:a.dayId,id:a._id,handleOnChange:b})}),e(C,{children:r("div",{className:"appointment__header-duration",children:[r("p",{children:[e("span",{children:v}),y!=="available"?r(C,{children:[" - ",e("span",{children:N})]}):null]}),M]})})},Qe=({details:a,date:n,status:t})=>{const{service:s,client:i}=a,{present:d,absent:c,phone:o,title:g}=i,{description:l,price:u,duration:p}=s;return r("ul",{className:"spacing",children:[e("li",{className:"spacing",children:r("div",{children:[e("h3",{className:"heading heading__ternary",children:"Informatii Serviciu"}),e("p",{children:l}),r("div",{className:"flex",children:[r("p",{className:"badge badge--primary-light",children:[p," min"]}),r("p",{className:"badge badge--primary-light",children:[u," RON"]})]})]})}),r("li",{className:"",children:[e("h3",{className:"heading heading__ternary",children:"Informatii Client"}),r("div",{className:"flex",children:[e("p",{children:"Mobil:"}),e("p",{children:e("a",{href:`tel:${o}`,children:o})})]}),r("div",{className:"",children:[r("p",{children:["Prezente: ",d]}),r("p",{children:["Absente: ",c]})]})]})]})},J=({status:a})=>e("div",{className:`appointment__status-indicator appointment__status-${a}`}),ze=({appointment:a})=>{const n=D(),{errorInfo:t}=f(O),{details:s,status:i,date:d}=a,[c,o]=x.exports.useState(!1),[g]=re(),[l]=ce(),[u]=le(),[p]=de(),y=()=>{n(F({message:"",_id:""}))};return r(C,{children:[a._id==(t==null?void 0:t._id)?e("p",{onClick:y,className:"badge badge--error",children:t.message}):null,i!=="reserved"?e("div",{className:"card__item",children:r("div",{className:"appointment__card-content",children:[r("div",{className:"appointment__header",children:[e(J,{status:i}),e(We,{cancelAppointment:p,confirmAppointment:l,setIsAvailable:u,appointment:a,setShowMoreInfo:o,showMoreInfo:c})]}),r("div",{className:"appointment__body spacing",children:[s!=null&&s.service?e(Ge,{setPresenceStatus:g,appointment:a,date:d,status:i}):null,(s==null?void 0:s.client)&&c?e(Qe,{details:s,date:d,status:i}):null]})]})}):null]})},Ye=()=>{const{selectedDayId:a,formatedDate:n,canAddNewDays:t,canSendAppointmentReq:s}=f(k),{service:i}=f(O);f(B);const d=D();X();const{isLoading:c,isSuccess:o,isError:g,error:l,isFetching:u,data:p}=oe({dayId:a},{refetchOnMountOrArgChange:!0,skip:!a});let y;if(o){const A=i?i.duration*6e4:0,b=i?p.filter(h=>h.isAvailable&&h.avbTime>=A):p;y=b!=null&&b.length?b.map(h=>e(ze,{appointment:h},h._id)):e("h2",{className:"heading",children:"Nu mai sunt ore disponibile"})}return r("div",{className:a?"container__hidden open":"container__hidden close__left",children:[e(j,{onClick:()=>{d(E({id:null}))},title:n}),c||s?e(ue,{isFixed:!0,from:"Appointment List"}):null,e("div",{className:"container__hidden-inner",children:y})]})},K=(a,n)=>{let t;return(...s)=>{t&&clearTimeout(t),t=setTimeout(()=>{a(...s)},n)}},je=()=>{const a=D(),{referenceDate:n}=f(k),t=x.exports.useCallback(K(()=>a(fe(n)),300),[]),s=()=>{a(W(!0)),a(Q(P(n,{months:1}).getTime())),t()},i=()=>{a(W(!0)),a(Q(U(n,{months:1}).getTime())),t()};return r("div",{className:"calendar__navigation",children:[e(G,{className:"button__default button--empty",disabled:!0,onClick:s,children:e(he,{})}),e("div",{className:"calendar__month",children:me(n,"LLLL yyyy",{locale:pe})}),e(G,{className:"button__default button--empty",onClick:i,children:e(_e,{})})]})},Ue=({id:a,children:n,todayStyle:t,date:s,pendingStyle:i,selectedStyle:d,notAvailableStyle:c,pending:o,passedDayStyle:g})=>{const l=D(),{selectedDays:u,canAddNewDays:p}=f(k),{service:y,canSendAppointmentReq:_}=f(O),A=x.exports.useCallback(K(()=>{l(l(E({id:a,date:s})))},300),[]),b=()=>{if(p&&!i&&!y&&!g){const v=u.includes(s)?[...u.filter(N=>N!==s)]:[...u,s];l(ye(v))}else!p&&i&&(l(ve(!0)),A())},h=p?`cdu${t}${i}${d}${g}`:`cd${t}${i}${c}`;return r("div",{onClick:b,className:ge[h],children:[n,o?e("div",{className:"calendar__pending",children:o}):null]})},Ve=({existingDays:a,isLoading:n,isSuccess:t,isFetching:s})=>{const{today:i,selectedDays:d,startOfMonth:c,endOfMonth:o,canSendReq:g}=f(k),{maxAvailableTime:l}=f(O),u=new Date(c).getDay(),p=6-new Date(o).getDay(),y=be(o,c)+1,_=t&&a.map(h=>h.date.slice(0,10)),A=t&&Array.from({length:y}).map((h,v)=>{var m,w,I,L;const N=Ne(U(c,{days:v}),{representation:"date"}),S=P(new Date(i),{days:1})>new Date(N),T=_.indexOf(N),M={id:((m=a[T])==null?void 0:m._id)||v,date:N,passedDayStyle:S?"pd":"",todayStyle:N==new Date(i).toISOString().slice(0,10)?"t":"",pendingStyle:_.includes(N)?"p":"",selectedStyle:d.includes(N)?"s":"",notAvailableStyle:(w=a[T])!=null&&w.isAvailable?"":"na",dayMaxAvailableTime:((I=a[T])==null?void 0:I.maxAvailableTime)||0,pending:((L=a[T])==null?void 0:L.pending)||null,children:v+1};return e(Ue,{...M},M.id)});let b;return l?b=A.filter(h=>h.dayMaxAvailableTime>=l):b=A,r(C,{children:[Array.from({length:u}).map((h,v)=>e(z,{date:null},v)),t&&!g?b:e(qe,{}),Array.from({length:p}).map((h,v)=>e(z,{},v))]})},Xe=()=>{const a=D(),{startingHour:n,endingHour:t}=f(k);return e(C,{children:r("div",{className:"flex",children:[e("input",{className:"form__select",type:"time",id:"start-of-day",value:n,onChange:s=>a(R({startingHour:s.target.value,endingHour:t}))}),e("input",{className:"form__select",type:"time",id:"end-of-day",value:t,onChange:s=>a(R({endingHour:s.target.value,startingHour:n}))})]})})},Je=()=>{f(Ae);const{serviceId:a,maxAvailableTime:n}=f(O),t=D(),{isSuccess:s,data:i}=Ce(void 0,{refetchOnMountOrArgChange:!0,refetchOnFocus:!0}),d=o=>{const g=o.target.value;if(g){const l=i.filter(u=>u._id===g);t($(l[0])),t(H(l[0].duration*6e4)),t(E({id:null,date:null}))}else t($(null)),t(H(0))};let c;return s&&(c=i.map(o=>e(Ee,{service:o},o._id))),e(C,{children:r("select",{className:"form__select form__select-100",onChange:o=>d(o),name:"services",value:a,style:{gridColumn:"2 / 7"},children:[e("option",{value:"",children:"Alege serviciul"}),c]})})},Ke=()=>{const[a,n]=x.exports.useState(""),t=D(),{selectedDays:s,startingHour:i,endingHour:d,canAddNewDays:c}=f(k);return r("div",{className:"",children:[r("div",{className:"appointment__status-buttons",children:[e("button",{className:`button__default button--warn${c?" slide__to-left":" hidden"}
             `,onClick:()=>{n(""),t(Ie())},children:e(De,{})}),e("button",{className:`button__round${c?" button--primary-light":" button--primary-dark"}`,onClick:()=>{n(""),t(ke())},children:e(Y,{className:c?"rotate__45":"rotate__0"})}),e("button",{className:`button__default button--success${c?" slide__to-right":" hidden"}
           `,onClick:()=>{if(!s.length)return n("Selecteaza o zi din calendar");if(i>=d)return n("Ora de inchidere trebuie sa fie mai mare");n(""),t(R({startingHour:i,endingHour:d})),t(we(!0))},children:e(Se,{})})]}),a?e("p",{className:"badge badge--error center",children:a}):null]})},Ze=()=>{const{daysOfWeek:a}=f(k);return a.map((t,s)=>e(xe,{className:!s&&"calendar__first-weekday",children:t},s))},ea=()=>{D(),f(B);const{serviceId:a}=f(O),{maxAvailableTimeAllowed:n,canAddNewDays:t,selectedDayId:s,queryStartDate:i,queryEndDate:d,startDate:c,endDate:o,today:g,showAppointmentHours:l}=f(k),{isLoading:u,isFetching:p,isSuccess:y,isError:_,error:A,data:b}=Me({queryStartDate:i,queryEndDate:d},{refetchOnFocus:!0,refetchOnMountOrArgChange:!0,pollingInterval:X()?1e4:0}),h=S=>P(new Date(g),{days:1})<new Date(S);let v;y&&(v=n?b.filter(S=>S.maxAvailableTime>=n&&h(S.date)):b);let N="calendar spacing";return(s||l)&&(N="calendar spacing calendar__shift-right"),r("div",{className:"container__inner",children:[r("div",{className:N,children:[e(je,{}),r("div",{className:"calendar__inner",children:[e(Ze,{}),e(Ve,{isLoading:u,isFetching:p,isSuccess:y,existingDays:v,startDate:c,endDate:o})]}),t?e(Xe,{}):e(Je,{}),a?null:e(Ke,{})]}),_?e("p",{className:"badge badge--error",children:A==null?void 0:A.data}):null]})},aa=({startTime:a,endTime:n,isAvailable:t,className:s})=>{const i=D(),d=()=>{i(Oe(a)),i(Te())};return e("div",{className:"card__item",children:r("div",{className:"appointment__header",children:[e(J,{status:t?"available":"blocked"}),r("div",{className:"appointment__header-duration ",children:[r("span",{children:[a," - ",n]}),e(V,{isChecked:t,id:"st"+a,handleOnChange:d})]})]})})},ta=()=>{const a=D(),{specialistId:n}=f(B),{appointmentHours:t,canAddNewDays:s,selectedDays:i,maxAvailableTime:d,showAppointmentHours:c}=f(k),o=()=>{a(He())},g=()=>{a(Re()),a(Be())},[l,{isLoading:u}]=Le(),p=_=>{toast.error(_.error.data.message,{toastId:"errorCalendar"})},y=async()=>{const _=await l({specialistId:n,selectedDays:i,maxAvailableTime:d,appointmentHours:t});"error"in _?p(_):g()};return r("div",{className:`${c?"container__hidden open":"container__hidden"}`,children:[e(j,{onClick:o,title:"Orar"}),r("div",{className:"container__hidden-inner",children:[e("div",{className:"",children:s&&t.map(_=>e(aa,{startTime:_.startTime,endTime:_.endTime,isAvailable:_.isAvailable,className:"card__item"},_.startTime))}),e("div",{className:"container__footer",children:(i==null?void 0:i.length)&&(t==null?void 0:t.length)?e("button",{className:"button__default button--success",onClick:y,children:u?e(Fe,{}):e($e,{})}):null})]})]})},ra=()=>r(C,{children:[e(ea,{}),e(Ye,{}),e(ta,{})]});export{ra as default};
