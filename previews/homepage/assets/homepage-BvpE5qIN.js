import"./elements-BvYYOFSp.js";import{f as a,r as n,a as l}from"./templates-_zCjRqNr.js";const d=`<template>
  <it-section class="service-section">
    <div class="container" style="background-color: yellow;">
      
      <h2 class="service-section__title" data-tpl="titolo"></h2>
      <!-- data-cards: punto di iniezione per le card, gestito da servizio.js -->
      <div class="service-grid" data-cards></div>
    </div>
  </it-section>
</template>
`,m=`<template id="service-card">
  <it-card class="service-card">
    <a data-tpl-href="url">
      <div class="service-card__body">
        <p class="service-card__title"><strong data-tpl="titolo"></strong></p>
        <p class="service-card__description" data-tpl="descrizione"></p>
      </div>
    </it-card>
  </article>
</template>
`,p=`<template>
  <header site-header>
    <div class="container header-top">
      <a href="../index.html" class="school-logo" aria-label="Torna alla home">
        <div class="school-name" school-name>
          <span data-tpl="nome"></span>
          <strong data-tpl="denominazione"></strong>
          <span data-tpl="citta"></span>
        </div>
      </a>
      <nav class="main-nav" aria-label="Principale">
        <ul>
          <li><a href="../index.html">Home</a></li>
          <li><a href="#">Scuola</a></li>
          <li><a href="servizio.html" aria-current="page">Servizi</a></li>
          <li><a href="#">Novità</a></li>
          <li><a href="#">Didattica</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
`,e={serviceSection:a(d),serviceCard:a(m),header:a(p)},o={titolo:"In evidenza",cards:[{titolo:"Open day nella sede centrale",descrizione:"",url:"#"},{titolo:"Spettacolo finale per il corso di teatro per le primarie",descrizione:"Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.",url:"#"},{titolo:"Orientamento per le classi di terza media",descrizione:"Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.",url:"#"}]},r={scuola:{nome:"Liceo C. Lorenzini",denominazione:"",citta:"Pescia (PT)"}};document.getElementById("main-header");document.getElementById("in-evidenza");const s=n(e.serviceSection,{titolo:o.titolo}),c=n(e.header,{nome:r.scuola.nome}),h=s.querySelector("[data-cards]"),v=c.querySelector("[school-name]"),u=l(e.serviceCard,o.cards),z=n(e.header,r.scuola);h.appendChild(u);v.appendChild(z);const i=document.getElementById("in-evidenza"),t=document.getElementById("main-header");i&&i.appendChild(s);t&&t.appendChild(c);
