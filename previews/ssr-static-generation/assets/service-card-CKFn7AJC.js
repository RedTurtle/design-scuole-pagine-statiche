function i(a){return new DOMParser().parseFromString(a,"text/html").querySelector("template")}function o(a,r={}){const e=a.content.cloneNode(!0);for(const t of e.querySelectorAll("[data-tpl]")){const n=r[t.dataset.tpl];n!==void 0&&(t.textContent=n)}for(const t of e.querySelectorAll("[data-tpl-href]")){const n=r[t.dataset.tplHref];n!==void 0&&t.setAttribute("href",n)}return e}function l(a,r){const e=document.createDocumentFragment();for(const t of r)e.append(o(a,t));return e}const s=`<template>
<it-card variant="inline-mini" >
  <a slot="title" href="#" data-tpl="titolo"> </a>
  <p slot="description" data-tlp="descrizione"></p>
  <div slot="footer" class="it-card-taxonomy">
    <a href="#" class="it-card-category it-card-link">
      <span class="visually-hidden">Categoria correlata: </span>
      Categoria
    </a>
  </div>
  <time slot="footer" class="it-card-date" datetime="2026-04-22">
    22 aprile 2026
  </time>
  <figure slot="image" class="figure img-full">
    <img
      src="https://placeholderimage.eu/api/city/800/600"
      alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
    />
  </figure>
</it-card>
</template>

`;export{l as a,i as f,o as r,s};
