import"./elements-BvYYOFSp.js";import{f as e,r as a,a as c}from"./templates-_zCjRqNr.js";const l=`<template>
  <it-section class="service-section">
    <div class="container">
      
      <h2 class="service-section__title" data-tpl="titolo"></h2>
      <!-- data-cards: punto di iniezione per le card, gestito da servizio.js -->
      <div class="service-grid" data-cards></div>
    </div>
  </it-section>
</template>
`,d=`<template id="service-card">
  <it-card class="service-card">
    <a data-tpl-href="url">
      <div class="service-card__body">
        <p class="service-card__title"><strong data-tpl="titolo"></strong></p>
        <p class="service-card__description" data-tpl="descrizione"></p>
      </div>
    </it-card>
  </article>
</template>
`,m=`<template>
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
`,p=`<template>
  <it-section class="hero" hero>
    <div class="container">
      <div class="denominazione" scuola >
        <h2 data-tpl="denominazione"> </h2>
       <h1 data-tpl="nome"></h1>
       <h2 data-tpl="citta" > </h2>
      </div>
       <div class="descrizione" scuola ></div>
      <p data-tpl="descrizione"></p>
    </div>
  </it-section>
</template>
`,n={serviceSection:e(l),serviceCard:e(d),header:e(m),hero:e(p)},r={titolo:"In evidenza",cards:[{titolo:"Open day nella sede centrale",descrizione:"",url:"#"},{titolo:"Spettacolo finale per il corso di teatro per le primarie",descrizione:"Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.",url:"#"},{titolo:"Orientamento per le classi di terza media",descrizione:"Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.",url:"#"}]},h={scuola:{nome:"Liceo Scientifico Statale",denominazione:"Federico Hernandez",citta:"Livorno"}},v={scuola:{denominazione:"Istituto comprensivo",nome:"Federico Hernandez",citta:"Livorno",descrizione:"Lo scopo della scuola è quello di trasformare gli specchi in finestre"}},s=a(n.serviceSection,{titolo:r.titolo}),u=s.querySelector("[data-cards]"),z=c(n.serviceCard,r.cards);u.appendChild(z);const i=document.getElementById("in-evidenza");i&&i.appendChild(s);const g=a(n.header,h.scuola),t=document.getElementById("main-header");t&&t.appendChild(g);const f=a(n.hero,v.scuola),o=document.getElementById("hero");o&&o.appendChild(f);
