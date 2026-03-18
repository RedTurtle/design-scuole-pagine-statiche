import"./elements-BvYYOFSp.js";import{f as t,r as e,a,s as k}from"./service-card-CUg_3cIW.js";const B=`<template>
  <it-section class="service-section">
    <div class="container">
      <h2 class="service-section__title" data-tpl="titolo"></h2>
      <!-- data-cards: punto di iniezione per le card, gestito da servizio.js -->
      <div class="service-grid" data-cards></div>
    </div>
  </it-section>
</template>
`,F=`<template>
  <div class="pre-header" site-preheader>
    <a data-tpl="ministero" href="https://www.mim.gov.it/"> </a>
    <a data-tpl="areariservata" href="#"> </a>
  </div>
</template>
`,D=`<template>
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
`,x=`<template>
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
`,A=`<template>
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
`,N=`<template>
  <it-card class="study-card">
    <a slot="title" data-tpl="title" data-tpl-href="url" href="#">Caricamento</a>
    <span slot="text" data-tpl="description"></span>
  </it-card>
</template>`,O=`<template>
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
</template>`,R=`<template> 
  <it-card>
    <a slot="title" data-tpl="title" href="#">Caricamento</a>
    <span slot="text" data-tpl="description">Caricamento</span>
    <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
  </it-card>
</template>`,Q=`<template>
  <div class="container" data-tpl="container">
	<h2 data-tpl="titolo" > </h2>
	<div class="service-grid" data-tpl="data-cards" ></div>
  </div>
</template>`,w=`<template>
  <it-card variant="inline-mini">
    <a slot="title" href="#" data-tpl="titolo"> </a>
    <p slot="description" data-tlp="descrizione"></p>
    <figure slot="image" class="figure img-full">
      <img
        src="https://placeholderimage.eu/api/city/800/600"
        alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
      />
    </figure>
  </it-card>
</template>
`,U=`<template>
  <div class="container" data-tpl="container">
	<h2 data-tpl="titolo"> </h2>
	<div class="service-grid" data-tpl="data-cards" ></div>
	<a href='#' > Esplora tutti i finanziamenti </a>
  </div>
</template>`,V=`<template> 
<it-card full-height="">
  <a slot="title" href="#" data-tpl="titolo">Titolo del contenuto</a>
  <figure slot="image" class="figure img-full">
    <img
      src="https://placeholderimage.eu/api/city/800/600"
      alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
    />
  </figure>
  <span slot="text" data-tpl="descrizione">
    Questo è un testo breve che riassume il contenuto della pagina di
    destinazione in massimo tre o quattro righe, senza troncamento.
  </span>
  <div slot="footer" class="it-card-taxonomy">
  </div>
</it-card>
</template>`,j=`<template>
<it-card>
  <a slot="title" href="#" data-tpl="titolo">Titolo del contenuto</a>
  <span slot="text" data-tpl="descrizione">
    Questo è un testo breve che riassume il contenuto della pagina di
    destinazione in massimo tre o quattro righe, senza troncamento.
  </span>
  <a slot="footer" href='#' class="it-card-link" data-tpl="link" > </a>
</it-card>
</template>`,G=`<template>
  <div class="container" data-tpl="container">
	<h2 data-tpl="titolo" > </h2>
	<div class="service-grid" data-tpl="data-cards" ></div>
  </div>
</template>`,i={serviceSection:t(B),serviceCard:t(k),header:t(D),hero:t(x),preheader:t(F),study:t(A),studycards:t(N),circolariEServizi:t(O),circolariEServiziCards:t(R),strumenti:t(Q),strumenticardsHTML:t(w),finanziamenti:t(U),finanziamentiCards:t(V),pubblicita:t(G),pubblicitacards:t(j)},J={ministero:"Ministero dell'Istruzione e del Merito",areariservata:"Accedi all'area riservata"},y={titolo:"In evidenza",cards:[{titolo:"Open day nella sede centrale",descrizione:"",url:"#"},{titolo:"Spettacolo finale per il corso di teatro per le primarie",descrizione:"Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.",url:"#"},{titolo:"Orientamento per le classi di terza media",descrizione:"Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.",url:"#"}]},K={scuola:{nome:"Liceo Scientifico Statale",denominazione:"Federico Hernandez",citta:"Livorno"}},W={scuola:{denominazione:"Istituto comprensivo",nome:"Federico Hernandez",citta:"Livorno",descrizione:' "Lo scopo della scuola è quello di trasformare gli specchi in finestre" '}},o={titoloSezione:"Studia con noi",percorsiDiStudio:{titlePercorsi:"I nostri percorsi di studio",description1Percorsi:"L'istituto offre diversi percorsi di studio pensati per accompagnare ogni studente nella propria crescita educativa",description2Percorsi:"Ogni indirizzo propone attività, metodologie e opportunità formative specifiche, così da rispondere ai diversi interessi, attitudini e obiettivi personali",testoLink1Percorsi:"Esplora le nostre offerte formative",testoLink2Percorsi:"Consulta il Piano di Offerta Formativa (PTOF)"},tipiScuole:{infanzia:"Scuola dell'infanzia",descrizioneTipo1:"Percorsi attivi: tempo ridotto, tempo pieno",elementari:"Scuola primaria",descrizioneTipo2:"Percorsi attivi: tempo normale, tempo pieno",medie:"Scuola secondaria di primo grado"},progettiIstituto:{titleProgetti:"I progetti dell'istituto",description1Progetti:"L'istituto promuove ogni anno un ampio programma di progetti e attività pensati per arricchire il percorso formativo degli studenti",description2Progetti:"Esperienze didattiche, laboratoriali e culturali si integrano alla vita scolastica per favorire partecipazione, crescita personale, inclusione e scoperta del territorio",testolinkProgetti:"Vai a tutti i progetti"},cards:[{title:"Uscite didattiche",description:"Esperienze fuori dall'aula",url:"#"},{title:"Corsi e certificazioni",description:"Attività pratiche e sperimentali",url:"#"},{title:"Progetti di orientamento",description:"Supporto alle scelte future",url:"#"},{title:"Laboratori didattici",description:"Attività pratiche e sperimentali",url:"#"},{title:"Gare e concorsi",description:"Sfide educative e creative",url:"#"},{title:"Progetti territorio e ambiente",description:"Scoperta e cura del territorio",url:"#"}]},n={circolari:{titolo:"Circolari",descrizione:"Le ultime circolari pubblicate",circolariDataCards:[{title:"titolo della 1 circolare",description:"contenuto della 1 circolare",data:"15 novembre 2025"},{title:"titolo della 2 circolare",description:"contenuto della 2 circolare",data:"22 dicembre 2025"},{title:"titolo della 3 circolare",description:"contenuto della 3 circolare",data:"5 gennaio 2026"},{title:"titolo della 4 circolare",description:"contenuto della 4 circolare",data:"30 marzo 2026"}]},Servizi:{titolo:"Servizi",descrizione:"I servizi offerti dalla nostra scuola",serviziDataCards:[{title:"Mensa",description:"Servizio che garantisce pasti equilibrati e controllati agli studenti, favorendo una corretta alimentazione durate la giornata scolastica",data:""},{title:"Piedibus",description:"Un percorso casa-scuola a piedi, organizzato e accompagnato da volontari, per promuovere sicurezza e mobilità sostenibile",data:""},{title:"Scuolabus",description:"Il servizio di trasporto dedicato che accompagna gli studenti da e verso la scuola in sicurezza, secondo orari e fermate predefinite",data:""},{title:"Doposcuola",description:"Attività pomeridiane di supporto allo studio e socializzazione, svolte in un ambiente educativo guidato da personale qualificato.",data:""}]}},P={titolo:"I nostri strumenti digitali",cards:[{titolo:"Scuola in Chiaro"},{titolo:"UNICA"},{titolo:"Registro elettronico"}]},L={titolo:"I nostri finanziamenti",cards:[{titolo:"PNRR Futura",descrizione:"Programma del PNRR per innovazione e digitalizzazione della scuola"},{titolo:"PON - Ricerca e innovazione 2014-2020",descrizione:"Fondi europei per progetti di ricerca e sviluppo nelle scuole"},{titolo:"PON inclusione",descrizione:"Programma europeo per il sostegno e l'inclusione sociale"}]},_={titolo:"Pubblicità legale e trasparenza",cards:[{titolo:"Albo online",descrizione:"Spazio in cui la scuola pubblica atti ufficiali, comunicazioni e documenti amministrativi con valore legale e sempre aggiornati",link:"Vai all'Albo online"},{titolo:"Amministrazione Trasparente",descrizione:"Portale dedicato alla pubblicazione di dati, documenti e informazioni sull'organizzazione e sull'attività dell'istituto, nel rispetto degli obblighi di trasparenza",link:"Vai alla sezione"}]},H=e(i.serviceSection,{titolo:y.titolo}),X=H.querySelector("[data-cards]"),Y=a(i.serviceCard,y.cards);X.appendChild(Y);const s=document.getElementById("in-evidenza");s&&s.appendChild(H);const Z=e(i.header,K.scuola),l=document.getElementById("main-header");l&&l.appendChild(Z);const $=e(i.hero,W.scuola),c=document.getElementById("hero");c&&c.appendChild($);const ii=e(i.preheader,J),d=document.getElementById("site-preheader");d&&d.appendChild(ii);const ti={titoloSezione:o.titoloSezione,...o.percorsiDiStudio,...o.tipiScuole,...o.progettiIstituto},T=e(i.study,ti),p=T.querySelector("[study-card]");a(i.studycards,o.cards);if(p){const q=a(i.studycards,o.cards);p.appendChild(q)}const m=document.getElementById("studia-con-noi");m&&m.appendChild(T);const ei={titolo:n.circolari.titolo,descrizione:n.circolari.descrizione,titoloServizi:n.Servizi.titolo,descrizioneServizi:n.Servizi.descrizione},r=e(i.circolariEServizi,ei),u=r.querySelector('[data-tpl="circolari-data-cards"]');u&&u.appendChild(a(i.circolariEServiziCards,n.circolari.circolariDataCards));const v=r.querySelector('[data-tpl="servizi-data-cards"]');v&&v.appendChild(a(i.circolariEServiziCards,n.Servizi.serviziDataCards));const z=document.getElementById("circolari-e-servizi");z&&z.appendChild(r);const I=e(i.strumenti,P),h=I.querySelector('[data-tpl="data-cards"]');h&&h.appendChild(a(i.strumenticardsHTML,P.cards));const g=document.getElementById("strumenti-digitali");g&&g.appendChild(I);const E=e(i.finanziamenti,L),f=E.querySelector('[data-tpl="data-cards"]');f&&f.appendChild(a(i.finanziamentiCards,L.cards));const C=document.getElementById("finanziamenti");C&&C.appendChild(E);const M=e(i.pubblicita,_),S=M.firstElementChild.querySelector('[data-tpl="data-cards"]');S&&S.appendChild(a(i.pubblicitacards,_.cards));const b=document.getElementById("trasparenza");b&&b.appendChild(M);
