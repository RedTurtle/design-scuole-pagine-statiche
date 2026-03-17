function m(t){return new DOMParser().parseFromString(t,"text/html").querySelector("template")}function d(t,n={}){const e=t.content.cloneNode(!0),r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT);let a;for(;a=r.nextNode();){const s=a.attributes;for(let i=0;i<s.length;i++){const{name:o,value:c}=s[i];if(!o.startsWith("data-tpl"))continue;const l=n[c];l!==void 0&&(o==="data-tpl"?a.textContent=l:a.setAttribute(o.slice(9),l))}}return e}function u(t,n){const e=document.createDocumentFragment();for(const r of n)e.append(d(t,r));return e}const p=`<template>
  <it-card variant="inline-mini">
    <a slot="title" href="#" data-tpl="titolo"> </a>
    <p slot="description" data-tlp="descrizione"></p>
    <div slot="footer" class="it-card-taxonomy">
      <a href="#" class="it-card-category it-card-link">
        <span class="visually-hidden">Categoria correlata: </span>
        Categoria
      </a>
    </div>
    <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
    <figure slot="image" class="figure img-full">
      <img
        src="https://placeholderimage.eu/api/city/800/600"
        alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
      />
    </figure>
  </it-card>
</template>
`;export{u as a,m as f,d as r,p as s};
