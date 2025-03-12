"use strict";(self.webpackChunkboxer=self.webpackChunkboxer||[]).push([[5379],{3922:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>h});const o=JSON.parse('{"id":"about-medpantry","title":"About MedPantry","description":"Sequence of events at MedPantry before the implementation of Boxer","source":"@site/docs/about-medpantry.md","sourceDirName":".","slug":"/about-medpantry","permalink":"/boxer-docs/docs/about-medpantry","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/about-medpantry.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Boxer Overview","permalink":"/boxer-docs/docs/intro"},"next":{"title":"Requirements and Inception","permalink":"/boxer-docs/docs/category/requirements-and-inception"}}');var i=t(4848),r=t(8453);const s={sidebar_position:2},a="About MedPantry",l={},h=[{value:"Sequence of events at MedPantry before the implementation of Boxer",id:"sequence-of-events-at-medpantry-before-the-implementation-of-boxer",level:2},{value:"Donations coming in",id:"donations-coming-in",level:4},{value:"Shopify orders coming in",id:"shopify-orders-coming-in",level:4},{value:"How we want to change the sequence of events",id:"how-we-want-to-change-the-sequence-of-events",level:2},{value:"Existing problems and our solutions",id:"existing-problems-and-our-solutions",level:2},{value:"Problem: Shopify is not being used properly",id:"problem-shopify-is-not-being-used-properly",level:4},{value:"Solution",id:"solution",level:4},{value:"Problem: too much reliance on the manager",id:"problem-too-much-reliance-on-the-manager",level:4},{value:"Solution",id:"solution-1",level:4},{value:"Problem: it is hard for volunteers to identify items that have been donated",id:"problem-it-is-hard-for-volunteers-to-identify-items-that-have-been-donated",level:4},{value:"Solution",id:"solution-2",level:4},{value:"Summary of Boxer",id:"summary-of-boxer",level:2}];function d(e){const n={em:"em",h1:"h1",h2:"h2",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"about-medpantry",children:"About MedPantry"})}),"\n",(0,i.jsx)(n.h2,{id:"sequence-of-events-at-medpantry-before-the-implementation-of-boxer",children:"Sequence of events at MedPantry before the implementation of Boxer"}),"\n",(0,i.jsx)(n.h4,{id:"donations-coming-in",children:"Donations coming in"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Medical supplies are donated to the MedPantry warehouse."}),"\n",(0,i.jsx)(n.li,{children:'Volunteers manually identify individual products and put them into their respective "pidgeon holes", also known as "first-sort boxes".'}),"\n",(0,i.jsx)(n.li,{children:'When enough items accumulate in the first-sort boxes, volunteers manually count items and group them into "packs of [number]".'}),"\n",(0,i.jsx)(n.li,{children:'The manager must manually identify a free "Baxter Box". This is where the items will be stored.'}),"\n",(0,i.jsx)(n.li,{children:"These grouped items are then stored into Baxter Boxes. Each Baxter Box has its own box number, ranging currently from 1 to 800. This box number is used to locate where the items are stored."}),"\n",(0,i.jsx)(n.li,{children:'The manager on duty updates the stock count on Shopify, and changes the "SKU" field to reflect which box number the item is being stored in.'}),"\n",(0,i.jsx)(n.li,{children:"The stored items are ready to be ordered from Shopify."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"shopify-orders-coming-in",children:"Shopify orders coming in"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The manager on duty identifies what orders have come in from Shopify."}),"\n",(0,i.jsx)(n.li,{children:'The manager checks where that item is stored by checking the "SKU" field.'}),"\n",(0,i.jsx)(n.li,{children:"The manager relays this information to the volunteer, who retrieves the item(s)."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"how-we-want-to-change-the-sequence-of-events",children:"How we want to change the sequence of events"}),"\n",(0,i.jsxs)(n.p,{children:["Instead of having first and second sort boxes, we will have only one container where incoming items are placed. ",(0,i.jsx)(n.em,{children:"Boxer"})," will be designed to track the exact quantity of items in these containers and will update the Shopify stock accordingly."]}),"\n",(0,i.jsxs)(n.p,{children:["Volunteers can scan items when they come in using ",(0,i.jsx)(n.em,{children:"Eagle"}),"'s technology, which will tell them exactly what item they have and what container it belongs in."]}),"\n",(0,i.jsx)(n.h2,{id:"existing-problems-and-our-solutions",children:"Existing problems and our solutions"}),"\n",(0,i.jsx)(n.h4,{id:"problem-shopify-is-not-being-used-properly",children:"Problem: Shopify is not being used properly"}),"\n",(0,i.jsx)(n.p,{children:'Shopify\'s "SKU" field should not be used to store the location of items in the physical warehouse.'}),"\n",(0,i.jsx)(n.p,{children:"Causes a lack of scalability as one item type cannot be stored in multiple Baxter Boxes."}),"\n",(0,i.jsx)(n.p,{children:"Instead, the SKU should be in immutable unique ID for each different item."}),"\n",(0,i.jsx)(n.h4,{id:"solution",children:"Solution"}),"\n",(0,i.jsx)(n.p,{children:"Give each different item its own SKU and store that SKU on Shopify."}),"\n",(0,i.jsx)(n.p,{children:"Boxer will store the location of all items and will know their corresponding SKUs."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h4,{id:"problem-too-much-reliance-on-the-manager",children:"Problem: too much reliance on the manager"}),"\n",(0,i.jsx)(n.p,{children:"The manager must manually identify free Baxter Boxes."}),"\n",(0,i.jsx)(n.p,{children:"The manager must constantly review what volunteers have packed and manually update the information on Shopify."}),"\n",(0,i.jsx)(n.p,{children:"The manager needs to tell volunteers what orders have come in and where to find the items."}),"\n",(0,i.jsx)(n.h4,{id:"solution-1",children:"Solution"}),"\n",(0,i.jsx)(n.p,{children:"Boxer keeps track of what items are being stored in which containers. Thus, it will automatically tell volunteers where to put items."}),"\n",(0,i.jsx)(n.p,{children:"When volunteers store items into containers, they can update the information on Boxer themselves. The storage updates are displayed on a log, which the manager can review. Boxer then updates the Shopify stock accordingly."}),"\n",(0,i.jsx)(n.p,{children:"Shopify orders that have come in are automatically displayed on Boxer, and volunteers are able to see exactly where to find the relevant items."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h4,{id:"problem-it-is-hard-for-volunteers-to-identify-items-that-have-been-donated",children:"Problem: it is hard for volunteers to identify items that have been donated"}),"\n",(0,i.jsx)(n.p,{children:"Many items are highly similar and are slight variants of each other. It's difficult and time-consuming to manually identify items."}),"\n",(0,i.jsx)(n.h4,{id:"solution-2",children:"Solution"}),"\n",(0,i.jsxs)(n.p,{children:["Volunteers will be able to use ",(0,i.jsx)(n.em,{children:"Eagle"}),"'s technology to scan item packaging to identify exactly which item they are stocking."]}),"\n",(0,i.jsx)(n.h2,{id:"summary-of-boxer",children:"Summary of Boxer"}),"\n",(0,i.jsx)(n.p,{children:"A 'virtual warehouse' system which identifies and manages the physical location of items."})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(6540);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);