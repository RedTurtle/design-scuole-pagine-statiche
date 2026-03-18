import"./elements-BvYYOFSp.js";import{f as e,r,a as o,s as C}from"./service-card-CUg_3cIW.js";const _=`<template>
  <it-section class="service-section">
    <div class="container">
      <h2 class="service-section__title" data-tpl="titolo"></h2>
      <!-- data-cards: punto di iniezione per le card, gestito da servizio.js -->
      <div class="service-grid" data-cards></div>
    </div>
  </it-section>
</template>
`,y=`<template>
  <div class="pre-header" site-preheader>
    <a data-tpl="ministero" href="https://www.mim.gov.it/"> </a>
    <a data-tpl="areariservata" href="#"> </a>
  </div>
</template>
`,P=`<template>
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
`,L=`<template>
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
`,b=`<template>
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
`,H=`<template>
  <it-card class="study-card">
    <a slot="title" data-tpl="title" data-tpl-href="url" href="#">Caricamento</a>
    <span slot="text" data-tpl="description"></span>
  </it-card>
</template>`,E=`<template>
  <it-section class="service-section">
    <div class="container" data-tpl="circolari">
      <h2 class="service-section__title" data-tpl="titolo"></h2>
      <p class="service-section__description" data-tpl="descrizione"></p>
      <div class="service-grid" data-tpl="circolari-data-cards"></div>
    </div>
    <div class="container" data-tpl="servizi">
      <h2 class="service-section__title" data-tpl="titoloServizi"></h2>
      <p class="service-section__description" data-tpl="descrizioneServizi"></p>
      <div class="service-grid" data-tpl="servizi-data-cards"></div>
    </div>
  </it-section>
</template>`,I=`<template> 
  <it-card>
    <a slot="title" data-tpl="title" href="#">Caricamento</a>
    <span slot="text" data-tpl="description">Caricamento</span>
    <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
  </it-card>
</template>`,i={serviceSection:e(_),serviceCard:e(C),header:e(P),hero:e(L),preheader:e(y),study:e(b),studycards:e(H),circolariEServizi:e(E),circolariEServiziCards:e(I)},T={ministero:"Ministero dell'Istruzione e del Merito",areariservata:"Accedi all'area riservata"},h={titolo:"In evidenza",cards:[{titolo:"Open day nella sede centrale",descrizione:"",url:"#"},{titolo:"Spettacolo finale per il corso di teatro per le primarie",descrizione:"Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.",url:"#"},{titolo:"Orientamento per le classi di terza media",descrizione:"Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.",url:"#"}]},M={scuola:{nome:"Liceo Scientifico Statale",denominazione:"Federico Hernandez",citta:"Livorno"}},q={scuola:{denominazione:"Istituto comprensivo",nome:"Federico Hernandez",citta:"Livorno",descrizione:' "Lo scopo della scuola è quello di trasformare gli specchi in finestre" '}},t={titoloSezione:"Studia con noi",percorsiDiStudio:{titlePercorsi:"I nostri percorsi di studio",description1Percorsi:"L'istituto offre diversi percorsi di studio pensati per accompagnare ogni studente nella propria crescita educativa",description2Percorsi:"Ogni indirizzo propone attività, metodologie e opportunità formative specifiche, così da rispondere ai diversi interessi, attitudini e obiettivi personali",testoLink1Percorsi:"Esplora le nostre offerte formative",testoLink2Percorsi:"Consulta il Piano di Offerta Formativa (PTOF)"},tipiScuole:{infanzia:"Scuola dell'infanzia",descrizioneTipo1:"Percorsi attivi: tempo ridotto, tempo pieno",elementari:"Scuola primaria",descrizioneTipo2:"Percorsi attivi: tempo normale, tempo pieno",medie:"Scuola secondaria di primo grado"},progettiIstituto:{titleProgetti:"I progetti dell'istituto",description1Progetti:"L'istituto promuove ogni anno un ampio programma di progetti e attività pensati per arricchire il percorso formativo degli studenti",description2Progetti:"Esperienze didattiche, laboratoriali e culturali si integrano alla vita scolastica per favorire partecipazione, crescita personale, inclusione e scoperta del territorio",testolinkProgetti:"Vai a tutti i progetti"},cards:[{title:"Uscite didattiche",description:"Esperienze fuori dall'aula",url:"#"},{title:"Corsi e certificazioni",description:"Attività pratiche e sperimentali",url:"#"},{title:"Progetti di orientamento",description:"Supporto alle scelte future",url:"#"},{title:"Laboratori didattici",description:"Attività pratiche e sperimentali",url:"#"},{title:"Gare e concorsi",description:"Sfide educative e creative",url:"#"},{title:"Progetti territorio e ambiente",description:"Scoperta e cura del territorio",url:"#"}]},a={circolari:{titolo:"Circolari",descrizione:"Le ultime circolari pubblicate",circolariDataCards:[{title:"titolo della 1 circolare",description:"contenuto della 1 circolare",data:"15 novembre 2025"},{title:"titolo della 2 circolare",description:"contenuto della 2 circolare",data:"22 dicembre 2025"},{title:"titolo della 3 circolare",description:"contenuto della 3 circolare",data:"5 gennaio 2026"},{title:"titolo della 4 circolare",description:"contenuto della 4 circolare",data:"30 marzo 2026"}]},Servizi:{titolo:"Servizi",descrizione:"I servizi offerti dalla nostra scuola",serviziDataCards:[{title:"Mensa",description:"Servizio che garantisce pasti equilibrati e controllati agli studenti, favorendo una corretta alimentazione durate la giornata scolastica",data:""},{title:"Piedibus",description:"Un percorso casa-scuola a piedi, organizzato e accompagnato da volontari, per promuovere sicurezza e mobilità sostenibile",data:""},{title:"Scuolabus",description:"Il servizio di trasporto dedicato che accompagna gli studenti da e verso la scuola in sicurezza, secondo orari e fermate predefinite",data:""},{title:"Doposcuola",description:"Attività pomeridiane di supporto allo studio e socializzazione, svolte in un ambiente educativo guidato da personale qualificato.",data:""}]}},g=r(i.serviceSection,{titolo:h.titolo}),D=g.querySelector("[data-cards]"),F=o(i.serviceCard,h.cards);D.appendChild(F);const s=document.getElementById("in-evidenza");s&&s.appendChild(g);const k=r(i.header,M.scuola),c=document.getElementById("main-header");c&&c.appendChild(k);const B=r(i.hero,q.scuola),l=document.getElementById("hero");l&&l.appendChild(B);const x=r(i.preheader,T),d=document.getElementById("site-preheader");d&&d.appendChild(x);const O={titoloSezione:t.titoloSezione,...t.percorsiDiStudio,...t.tipiScuole,...t.progettiIstituto},f=r(i.study,O),p=f.querySelector("[study-card]");o(i.studycards,t.cards);if(p){const S=o(i.studycards,t.cards);p.appendChild(S)}const u=document.getElementById("studia-con-noi");u&&u.appendChild(f);const A={titolo:a.circolari.titolo,descrizione:a.circolari.descrizione,titoloServizi:a.Servizi.titolo,descrizioneServizi:a.Servizi.descrizione},n=r(i.circolariEServizi,A),v=n.querySelector('[data-tpl="circolari-data-cards"]');v&&v.appendChild(o(i.circolariEServiziCards,a.circolari.circolariDataCards));const m=n.querySelector('[data-tpl="servizi-data-cards"]');m&&m.appendChild(o(i.circolariEServiziCards,a.Servizi.serviziDataCards));const z=document.getElementById("circolari-e-servizi");z&&z.appendChild(n);
