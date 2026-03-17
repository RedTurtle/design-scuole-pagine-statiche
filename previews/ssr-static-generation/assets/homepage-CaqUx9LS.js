import"./elements-DaIs5-hU.js";import{f as e,r as a,a as r,s as h}from"./service-card-DTyukxBK.js";const g=`<template>
  <it-section class="service-section">
    <div class="container">
      <h2 class="service-section__title" data-tpl="titolo"></h2>
      <!-- data-cards: punto di iniezione per le card, gestito da servizio.js -->
      <div class="service-grid" data-cards></div>
    </div>
  </it-section>
</template>
`,z=`<template>
  <div class="pre-header" site-preheader>
    <a data-tpl="ministero" href="https://www.mim.gov.it/"> </a>
    <a data-tpl="areariservata" href="#"> </a>
  </div>
</template>
`,f=`<template>
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
`,_=`<template>
  <it-section class="hero" hero>
    <div class="container">
      <div class="denominazione" scuola>
        <h2 data-tpl="denominazione"></h2>
        <h1 data-tpl="nome"></h1>
        <h2 data-tpl="citta"></h2>
      </div>
      <div class="descrizione" scuola></div>
      <p data-tpl="descrizione"></p>
    </div>
    <p><a href="../index.html"> Scopri l'istituto </a></p>
  </it-section>
</template>
`,S=`<template>
  <it-section class="service-section">
    <div class="container">
      <h2 class="service-section__title" data-tpl="titoloSezione"></h2>

      <div class="percorsiDistudio">
        <h2 class="percorsi__title" data-tpl="titlePercorsi"></h2>
        <p class="percorsi__description" data-tpl="description1Percorsi"></p>
        <p class="percorsi__description" data-tpl="description2Percorsi"></p>
        <it-button variant="danger" type="button">
          <a href="#" data-tpl="testoLink1Percorsi"> </a>
        </it-button>
        <p><a class="percorsi__link" data-tpl="testoLink2Percorsi" href="#"> </a></p>
      </div>

      <div class="tipiScuole">
        <p data-tpl="infanzia"></p>
        <p data-tpl="descrizioneTipo1"></p>
        <p data-tpl="elementari"></p>
        <p data-tpl="descrizioneTipo2"></p>
        <p data-tpl="medie"></p>
      </div>

      <div class="progettiIstituto">
        <h2 class="progetti__title" data-tpl="titleProgetti"></h2>
        <p class="progetti__description" data-tpl="description1Progetti"></p>
        <p class="progetti__description" data-tpl="description2Progetti"></p>
        <p><a class="progetti__link" data-tpl="testolinkProgetti" href="#"> </a></p>
      </div>
      <div study-card></div>
    </div>
  </it-section>
</template>
`,y=`<template>
  <it-card class="study-card">
    <a data-tpl-href="url">
      <div class="study-card__body">
        <p class="study-card__title"><strong data-tpl="cardTitle"></strong></p>
        <p class="study-card__description" data-tpl="cardDescription"></p>
      </div>
    </a>
  </it-card>
</template>
`,P=`<template>
  <it-section class="service-section">
    <div class="container" circolari>
      <h2 class="service-section__title" data-tpl="titolo"></h2>
      <p class="service-section__description" data-tpl="descrizione"></p>
      <!-- data-cards: punto di iniezione per le card, gestito da servizio.js -->
      <div class="service-grid" circolari-data-cards></div>
    </div>

    <div class="container" servizi>
      <h2 class="service-section__title" data-tpl="titolo"></h2>
      <p class="service-section__description" data-tpl="descrizione"></p>
      <!-- data-cards: punto di iniezione per le card, gestito da servizio.js -->
      <div class="service-grid" circolari-data-cards></div>
    </div>
  </it-section>
</template>
`,C=`<template>
  <it-card>
    <a slot="title" href="#" data-tpl="title"> Titolo di test</a>
    <span slot="text" data-tpl="description"> </span>
    <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
  </it-card>
</template>
`,i={serviceSection:e(g),serviceCard:e(h),header:e(f),hero:e(_),preheader:e(z),study:e(S),studycards:e(y),circolariEServizi:e(P),circolariEServiziCards:e(C)};console.log(i);const L={ministero:"Ministero dell'Istruzione e del Merito",areariservata:"Accedi all'area riservata"},p={titolo:"In evidenza",cards:[{titolo:"Open day nella sede centrale",descrizione:"",url:"#"},{titolo:"Spettacolo finale per il corso di teatro per le primarie",descrizione:"Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.",url:"#"},{titolo:"Orientamento per le classi di terza media",descrizione:"Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.",url:"#"}]},H={scuola:{nome:"Liceo Scientifico Statale",denominazione:"Federico Hernandez",citta:"Livorno"}},T={scuola:{denominazione:"Istituto comprensivo",nome:"Federico Hernandez",citta:"Livorno",descrizione:' "Lo scopo della scuola è quello di trasformare gli specchi in finestre" '}},t={titoloSezione:"Studia con noi",percorsiDiStudio:{titlePercorsi:"I nostri percorsi di studio",description1Percorsi:"L'istituto offre diversi percorsi di studio pensati per accompagnare ogni studente nella propria crescita educativa",description2Percorsi:"Ogni indirizzo propone attività, metodologie e opportunità formative specifiche, così da rispondere ai diversi interessi, attitudini e obiettivi personali",testoLink1Percorsi:"Esplora le nostre offerte formative",testoLink2Percorsi:"Consulta il Piano di Offerta Formativa (PTOF)"},tipiScuole:{infanzia:"Scuola dell'infanzia",descrizioneTipo1:"Percorsi attivi: tempo ridotto, tempo pieno",elementari:"Scuola primaria",descrizioneTipo2:"Percorsi attivi: tempo normale, tempo pieno",medie:"Scuola secondaria di primo grado"},progettiIstituto:{titleProgetti:"I progetti dell'istituto",description1Progetti:"L'istituto promuove ogni anno un ampio programma di progetti e attività pensati per arricchire il percorso formativo degli studenti",description2Progetti:"Esperienze didattiche, laboratoriali e culturali si integrano alla vita scolastica per favorire partecipazione, crescita personale, inclusione e scoperta del territorio",testolinkProgetti:"Vai a tutti i progetti"},cards:[{title:"Uscite didattiche",description:"Esperienze fuori dall'aula",url:"#"},{title:"Corsi e certificazioni",description:"Attività pratiche e sperimentali",url:"#"},{title:"Progetti di orientamento",description:"Supporto alle scelte future",url:"#"},{title:"Laboratori didattici",description:"Attività pratiche e sperimentali",url:"#"},{title:"Gare e concorsi",description:"Sfide educative e creative",url:"#"},{title:"Progetti territorio e ambiente",description:"Scoperta e cura del territorio",url:"#"}]},u=a(i.serviceSection,{titolo:p.titolo}),I=u.querySelector("[data-cards]"),b=r(i.serviceCard,p.cards);I.appendChild(b);const o=document.getElementById("in-evidenza");o&&o.appendChild(u);const M=a(i.header,H.scuola),s=document.getElementById("main-header");s&&s.appendChild(M);const E=a(i.hero,T.scuola),c=document.getElementById("hero");c&&c.appendChild(E);const F=a(i.preheader,L),d=document.getElementById("site-preheader");d&&d.appendChild(F);const k={titoloSezione:t.titoloSezione,...t.percorsiDiStudio,...t.tipiScuole,...t.progettiIstituto},m=a(i.study,k),n=m.querySelector("[study-card]");console.log(n);r(i.studycards,t.cards);if(n){const v=r(i.studycards,t.cards);n.appendChild(v)}const l=document.getElementById("studia-con-noi");l&&l.appendChild(m);
