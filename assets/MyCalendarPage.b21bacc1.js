import{a as e,F as D,r as x,u as C,j as r,e as Z,B as ee,i as Y,k as ae,l as $,b as f,m as T,n as k,o as te,p as se,q as ne,t as ie,v as H,w as R,x as re,y as ce,z as le,C as de,s as E,D as oe,N as j,h as ue,E as P,G,H as he,I as me,J as pe,K as _e,M as fe,O as W,P as Q,Q as q,R as U,T as ge,U as ye,V as ve,W as be,X as Ne,Y as B,Z as Ae,_ as De,$ as Ce,a0 as Se,a1 as we,a2 as Ie,a3 as ke,a4 as xe,a5 as Me,a6 as Oe,a7 as Te,a8 as Le,f as Fe,a9 as $e,aa as He,ab as Re,ac as Be}from"./index.d20a92f6.js";import{T as V}from"./ToggleButton.c0072ab3.js";import{O as Ee}from"./OptionSelectService.63d6dab5.js";const z=()=>e("div",{}),Pe=()=>e("div",{className:"calendar__date skeleton animate-pulse",children:" "}),qe=()=>e(D,{children:[...Array(30).keys()].map(a=>e(Pe,{},`date-${a}`))}),X=()=>{const[a,n]=x.exports.useState(!1),t=()=>{n(!0)},s=()=>{n(!1)};return x.exports.useEffect(()=>(window.addEventListener("focus",t),window.addEventListener("blur",s),()=>{window.removeEventListener("focus",t),window.removeEventListener("blur",s)}),[]),a},Ge=({appointment:a,date:n,status:t,setPresenceStatus:s})=>{const i=C(),[o,c]=x.exports.useState(!1),l=x.exports.useRef(),g=x.exports.useRef(),d=async p=>{var N,S;const v=await s({appointmentId:a._id,status:p,dayId:a.dayId});"error"in v&&i($({message:(S=(N=v==null?void 0:v.error)==null?void 0:N.data)==null?void 0:S.message,_id:a._id}))},{details:h}=a,{client:_,service:y,specialist:m}=h,A=new Date(n).getTimezoneOffset()*60*1e3,b=9e4;return new Date(n).getTime()+A+b,r(D,{children:[m?r("div",{className:"appointment__basic-info",children:[e("img",{className:"appointment__client-photo",src:`${Z.baseImgURL}/${_.photo}`}),r("div",{children:[e("h3",{className:"heading heading_ternary",children:_.name}),e("p",{children:y.name})]})]}):e(D,{children:r("div",{className:"",children:[e("h3",{className:"heading heading__ternary",children:y.name}),r("p",{children:[y.price," RON"]})]})}),t==="pending"?r("div",{className:"appointment__status-buttons",children:[e("button",{className:`button__default button--error${o?" slide__to-left":" hidden"}
            `,ref:g,onClick:()=>d("absent"),children:e(ee,{})}),e("button",{className:"button__round button--primary-dark",onClick:()=>c(p=>!p),children:e(Y,{className:o?"rotate__45":"rotate__0"})}),e("button",{className:`button__default button--success${o?" slide__to-right":" hidden"}
           `,ref:l,onClick:()=>d("present"),children:e(ae,{})})]}):null]})},We=({appointment:a,setShowMoreInfo:n,showMoreInfo:t,setIsAvailable:s,confirmAppointment:i,cancelAppointment:o})=>{const c=C(),{isAvailable:l,date:g,_id:d,details:h,endTime:_,status:y}=a,{service:m}=f(T),{selectedDayId:A}=f(k),b=async()=>{var w,I;const u=await s({appointmentId:d,dayId:a.dayId});"error"in u&&c($({message:(I=(w=u==null?void 0:u.error)==null?void 0:w.data)==null?void 0:I.message,_id:d}))},p=async()=>{var w,I,M,F;const u=await i({appointmentId:d,dayId:A,serviceId:m._id});"error"in u?c($({message:(I=(w=u==null?void 0:u.error)==null?void 0:w.data)==null?void 0:I.message,_id:d})):(console.log((F=(M=u==null?void 0:u.error)==null?void 0:M.data)==null?void 0:F.message),c(H(null)),c(R(0)))};let v=g.slice(11,16),N=_.slice(11,16);const S=()=>{c(ne(a._id)),n(u=>!u)},L=async()=>{var w,I,M,F;const u=await o({appointmentId:a._id,dayId:a.dayId});"error"in u?console.log((I=(w=u==null?void 0:u.error)==null?void 0:w.data)==null?void 0:I.message):console.log((F=(M=u==null?void 0:u.error)==null?void 0:M.data)==null?void 0:F.message)};let O;return m?O=e(D,{children:e("button",{className:"button__default button--primary-dark",onClick:p,children:e(ie,{})})}):h?O=e(D,{children:h!=null&&h.specialist?e(D,{children:e("button",{className:"button__round button--transparent",onClick:()=>S(),children:e(te,{})})}):e("button",{className:"button__square button--warn",onClick:L,children:e(se,{})})}):O=e(D,{children:e(V,{isChecked:a.isAvailable,dayId:a.dayId,id:a._id,handleOnChange:b})}),e(D,{children:r("div",{className:"appointment__header-duration",children:[r("p",{children:[e("span",{children:v}),y!=="available"?r(D,{children:[" - ",e("span",{children:N})]}):null]}),O]})})},Qe=({details:a,date:n,status:t})=>{const{service:s,client:i}=a,{present:o,absent:c,phone:l,title:g}=i,{description:d,price:h,duration:_}=s;return r("ul",{className:"spacing",children:[e("li",{className:"spacing",children:r("div",{children:[e("h3",{className:"heading heading__ternary",children:"Informatii Serviciu"}),e("p",{children:d}),r("div",{className:"flex",children:[r("p",{className:"badge badge--primary-light",children:[_," min"]}),r("p",{className:"badge badge--primary-light",children:[h," RON"]})]})]})}),r("li",{className:"",children:[e("h3",{className:"heading heading__ternary",children:"Informatii Client"}),r("div",{className:"flex",children:[e("p",{children:"Mobil:"}),e("p",{children:e("a",{href:`tel:${l}`,children:l})})]}),r("div",{className:"",children:[r("p",{children:["Prezente: ",o]}),r("p",{children:["Absente: ",c]})]})]})]})},J=({status:a})=>e("div",{className:`appointment__status-indicator appointment__status-${a}`}),ze=({appointment:a})=>{const n=C(),{errorInfo:t}=f(T),{details:s,status:i,date:o}=a,[c,l]=x.exports.useState(!1),[g]=re(),[d]=ce(),[h]=le(),[_]=de(),y=()=>{n($({message:"",_id:""}))};return r(D,{children:[a._id==(t==null?void 0:t._id)?e("p",{onClick:y,className:"badge badge--error",children:t.message}):null,i!=="reserved"?e("div",{className:"card__item",children:r("div",{className:"appointment__card-content",children:[r("div",{className:"appointment__header",children:[e(J,{status:i}),e(We,{cancelAppointment:_,confirmAppointment:d,setIsAvailable:h,appointment:a,setShowMoreInfo:l,showMoreInfo:c})]}),r("div",{className:"appointment__body spacing",children:[s!=null&&s.service?e(Ge,{setPresenceStatus:g,appointment:a,date:o,status:i}):null,(s==null?void 0:s.client)&&c?e(Qe,{details:s,date:o,status:i}):null]})]})}):null]})},Ye=()=>{const{selectedDayId:a,formatedDate:n,canAddNewDays:t,canSendAppointmentReq:s}=f(k),{service:i}=f(T);f(E);const o=C();X();const{isLoading:c,isSuccess:l,isError:g,error:d,isFetching:h,data:_}=oe({dayId:a},{refetchOnMountOrArgChange:!0,skip:!a});let y;if(l){const A=i?i.duration*6e4:0,b=i?_.filter(p=>p.isAvailable&&p.avbTime>=A):_;y=b!=null&&b.length?b.map(p=>e(ze,{appointment:p},p._id)):e("h2",{className:"heading",children:"Nu mai sunt ore disponibile"})}const m=()=>{o(P({id:null}))};return console.log(s,l,c),r("div",{className:a?"container__hidden open":"container__hidden close__left",children:[e(j,{onClick:m,title:n}),c||s?e(ue,{isFixed:!0,from:"Appointment List"}):null,e("div",{className:"container__hidden-inner",children:y})]})},K=(a,n)=>{let t;return(...s)=>{t&&clearTimeout(t),t=setTimeout(()=>{a(...s)},n)}},je=()=>{const a=C(),{referenceDate:n}=f(k),t=x.exports.useCallback(K(()=>a(fe(n)),300),[]),s=()=>{a(W(!0)),a(Q(q(n,{months:1}).getTime())),t()},i=()=>{a(W(!0)),a(Q(U(n,{months:1}).getTime())),t()};return r("div",{className:"calendar__navigation",children:[e(G,{className:"button__default button--empty",disabled:!0,onClick:s,children:e(he,{})}),e("div",{className:"calendar__month",children:me(n,"LLLL yyyy",{locale:pe})}),e(G,{className:"button__default button--empty",onClick:i,children:e(_e,{})})]})},Ue=({id:a,children:n,todayStyle:t,date:s,pendingStyle:i,selectedStyle:o,notAvailableStyle:c,pending:l,passedDayStyle:g})=>{const d=C(),{selectedDays:h,canAddNewDays:_}=f(k),{service:y,canSendAppointmentReq:m}=f(T),A=x.exports.useCallback(K(()=>{d(d(P({id:a,date:s})))},300),[]),b=()=>{if(_&&!i&&!y&&!g){const v=h.includes(s)?[...h.filter(N=>N!==s)]:[...h,s];d(ye(v))}else!_&&i&&(d(ve(!0)),A())},p=_?`cdu${t}${i}${o}${g}`:`cd${t}${i}${c}`;return r("div",{onClick:b,className:ge[p],children:[n,l?e("div",{className:"calendar__pending",children:l}):null]})},Ve=({existingDays:a,isLoading:n,isSuccess:t,isFetching:s})=>{const{today:i,selectedDays:o,startOfMonth:c,endOfMonth:l,canSendReq:g}=f(k),{maxAvailableTime:d}=f(T),h=new Date(c).getDay(),_=6-new Date(l).getDay(),y=be(l,c)+1,m=t&&a.map(p=>p.date.slice(0,10)),A=t&&Array.from({length:y}).map((p,v)=>{var u,w,I,M;const N=Ne(U(c,{days:v}),{representation:"date"}),S=q(new Date(i),{days:1})>new Date(N),L=m.indexOf(N),O={id:((u=a[L])==null?void 0:u._id)||v,date:N,passedDayStyle:S?"pd":"",todayStyle:N==new Date(i).toISOString().slice(0,10)?"t":"",pendingStyle:m.includes(N)?"p":"",selectedStyle:o.includes(N)?"s":"",notAvailableStyle:(w=a[L])!=null&&w.isAvailable?"":"na",dayMaxAvailableTime:((I=a[L])==null?void 0:I.maxAvailableTime)||0,pending:((M=a[L])==null?void 0:M.pending)||null,children:v+1};return e(Ue,{...O},O.id)});let b;return d?b=A.filter(p=>p.dayMaxAvailableTime>=d):b=A,r(D,{children:[Array.from({length:h}).map((p,v)=>e(z,{date:null},v)),t&&!g?b:e(qe,{}),Array.from({length:_}).map((p,v)=>e(z,{},v))]})},Xe=()=>{const a=C(),{startingHour:n,endingHour:t}=f(k);return e(D,{children:r("div",{className:"flex",children:[e("input",{className:"form__select",type:"time",id:"start-of-day",value:n,onChange:s=>a(B({startingHour:s.target.value,endingHour:t}))}),e("input",{className:"form__select",type:"time",id:"end-of-day",value:t,onChange:s=>a(B({endingHour:s.target.value,startingHour:n}))})]})})},Je=()=>{f(Ae);const{serviceId:a,maxAvailableTime:n}=f(T),t=C(),{isSuccess:s,data:i}=De(void 0,{refetchOnMountOrArgChange:!0,refetchOnFocus:!0}),o=l=>{const g=l.target.value;if(g){const d=i.filter(h=>h._id===g);t(H(d[0])),t(R(d[0].duration*6e4)),t(P({id:null,date:null}))}else t(H(null)),t(R(0))};let c;return s&&(c=i.map(l=>e(Ee,{service:l},l._id))),e(D,{children:r("select",{className:"form__select form__select-100",onChange:l=>o(l),name:"services",value:a,style:{gridColumn:"2 / 7"},children:[e("option",{value:"",children:"Alege serviciul"}),c]})})},Ke=()=>{const[a,n]=x.exports.useState(""),t=C(),{selectedDays:s,startingHour:i,endingHour:o,canAddNewDays:c}=f(k);return r("div",{className:"",children:[r("div",{className:"appointment__status-buttons",children:[e("button",{className:`button__default button--warn${c?" slide__to-left":" hidden"}
             `,onClick:()=>{n(""),t(Ie())},children:e(Ce,{})}),e("button",{className:`button__round${c?" button--primary-light":" button--primary-dark"}`,onClick:()=>{n(""),t(ke())},children:e(Y,{className:c?"rotate__45":"rotate__0"})}),e("button",{className:`button__default button--success${c?" slide__to-right":" hidden"}
           `,onClick:()=>{if(!s.length)return n("Selecteaza o zi din calendar");if(i>=o)return n("Ora de inchidere trebuie sa fie mai mare");n(""),t(B({startingHour:i,endingHour:o})),t(we(!0))},children:e(Se,{})})]}),a?e("p",{className:"badge badge--error center",children:a}):null]})},Ze=()=>{const{daysOfWeek:a}=f(k);return a.map((t,s)=>e(xe,{className:!s&&"calendar__first-weekday",children:t},s))},ea=()=>{C(),f(E);const{serviceId:a}=f(T),{maxAvailableTimeAllowed:n,canAddNewDays:t,selectedDayId:s,queryStartDate:i,queryEndDate:o,startDate:c,endDate:l,today:g,showAppointmentHours:d}=f(k),{isLoading:h,isFetching:_,isSuccess:y,isError:m,error:A,data:b}=Me({queryStartDate:i,queryEndDate:o},{refetchOnFocus:!0,refetchOnMountOrArgChange:!0,pollingInterval:X()?1e4:0}),p=S=>q(new Date(g),{days:1})<new Date(S);let v;y&&(v=n?b.filter(S=>S.maxAvailableTime>=n&&p(S.date)):b);let N="calendar spacing";return(s||d)&&(N="calendar spacing calendar__shift-right"),r("div",{className:"container__inner",children:[r("div",{className:N,children:[e(je,{}),r("div",{className:"calendar__inner",children:[e(Ze,{}),e(Ve,{isLoading:h,isFetching:_,isSuccess:y,existingDays:v,startDate:c,endDate:l})]}),t?e(Xe,{}):e(Je,{}),a?null:e(Ke,{})]}),m?e("p",{className:"badge badge--error",children:A==null?void 0:A.data}):null]})},aa=({startTime:a,endTime:n,isAvailable:t,className:s})=>{const i=C(),o=()=>{i(Oe(a)),i(Te())};return e("div",{className:"card__item",children:r("div",{className:"appointment__header",children:[e(J,{status:t?"available":"blocked"}),r("div",{className:"appointment__header-duration ",children:[r("span",{children:[a," - ",n]}),e(V,{isChecked:t,id:"st"+a,handleOnChange:o})]})]})})},ta=()=>{const a=C(),{specialistId:n}=f(E),{appointmentHours:t,canAddNewDays:s,selectedDays:i,maxAvailableTime:o,showAppointmentHours:c}=f(k),l=()=>{a(He())},g=()=>{a(Re()),a(Be())},[d,{isLoading:h}]=Le(),_=m=>{toast.error(m.error.data.message,{toastId:"errorCalendar"})},y=async()=>{const m=await d({specialistId:n,selectedDays:i,maxAvailableTime:o,appointmentHours:t});"error"in m?_(m):g()};return r("div",{className:`${c?"container__hidden open":"container__hidden"}`,children:[e(j,{onClick:l,title:"Orar"}),r("div",{className:"container__hidden-inner",children:[e("div",{className:"",children:s&&t.map(m=>e(aa,{startTime:m.startTime,endTime:m.endTime,isAvailable:m.isAvailable,className:"card__item"},m.startTime))}),e("div",{className:"container__footer",children:(i==null?void 0:i.length)&&(t==null?void 0:t.length)?e("button",{className:"button__default button--success",onClick:y,children:h?e(Fe,{}):e($e,{})}):null})]})]})},ra=()=>r(D,{children:[e(ea,{}),e(Ye,{}),e(ta,{})]});export{ra as default};
