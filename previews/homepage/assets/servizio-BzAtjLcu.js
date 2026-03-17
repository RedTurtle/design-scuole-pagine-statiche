import"./elements-BvYYOFSp.js";import{f as e,s as r,r as a,a as s}from"./service-card-CUg_3cIW.js";const l=`<template>
  <header class="site-header">
    <div class="container-header-top" header>
      <a href="../index.html" class="school-logo" aria-label="Torna alla home">
        <div class="school-name">
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
`,c=`<template>
  <footer class="site-footer">
    <div class="container footer-body">
      <div class="footer-school">
        <div class="school-name">
          <span data-tpl="nome"></span>
          <strong data-tpl="denominazione"></strong>
          <span data-tpl="citta"></span>
        </div>
        <p class="footer-tagline">
          Idea e progetto di <a href="https://designers.italia.it">Designers Italia</a>
        </p>
      </div>
      <nav aria-label="Footer">
        <ul>
          <li><a href="#">Note legali</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Amministrazione trasparente</a></li>
          <li><a href="#">Dichiarazione di accessibilità</a></li>
        </ul>
      </nav>
    </div>
  </footer>
</template>
`,d=`<template>
  <nav class="breadcrumb" aria-label="breadcrumb">
    <div class="container">
      <ol>
        <li><a href="../index.html">Home</a></li>
        <li aria-current="page"><span data-tpl="pagina"></span></li>
      </ol>
    </div>
  </nav>
</template>
`,p=`<template>
  <section class="hero">
    <div class="container">
      <h1 data-tpl="titolo"></h1>
      <p data-tpl="descrizione"></p>
    </div>
  </section>
</template>
`,m=`<template>
  <it-section class="service-section">
    <div class="container">
      <h2 class="service-section__title" data-tpl="titolo"></h2>
      <!-- data-cards: punto di iniezione per le card, gestito da servizio.js -->
      <div class="service-grid" data-cards></div>
    </div>
  </it-section>
</template>
`,i={header:e(l),footer:e(c),breadcrumb:e(d),hero:e(p),serviceSection:e(m),serviceCard:e(r)},t={nome:"Liceo Scientifico Statale",denominazione:"Federigo Enriques",citta:"Livorno"},v=[{titolo:"Famiglie e studenti",cards:[{titolo:"Iscrizioni online",descrizione:"Procedura per l'iscrizione al primo anno",url:"#"},{titolo:"Pagamenti scolastici",descrizione:"Tasse, contributi e servizi vari",url:"#"},{titolo:"Colloqui genitori-docenti",descrizione:"Prenotazione colloqui individuali",url:"#"},{titolo:"Comunicazioni e circolari",descrizione:"Avvisi e comunicazioni della scuola",url:"#"},{titolo:"Registro elettronico",descrizione:"Accesso al registro voti e presenze",url:"#"}]},{titolo:"Personale scolastico",cards:[{titolo:"Gestione assenze",descrizione:"Richiesta e documentazione assenze",url:"#"},{titolo:"Certificati di servizio",descrizione:"Richiesta certificati di servizio",url:"#"},{titolo:"Modulistica interna",descrizione:"Moduli e documenti amministrativi",url:"#"},{titolo:"Supplenze",descrizione:"Gestione delle supplenze temporanee",url:"#"}]},{titolo:"Percorsi di studio",cards:[{titolo:"Piano di studi",descrizione:"Offerta formativa e materie per indirizzo",url:"#"},{titolo:"Orientamento",descrizione:"Attività di orientamento in entrata e in uscita",url:"#"},{titolo:"Libri di testo",descrizione:"Elenco adozioni librarie per anno scolastico",url:"#"}]}];document.getElementById("root-header").append(a(i.header,t));document.getElementById("root-breadcrumb").append(a(i.breadcrumb,{pagina:"Servizi"}));document.getElementById("root-hero").append(a(i.hero,{titolo:"Servizi",descrizione:"I servizi offerti dalla scuola dedicati a studenti, famiglie e personale scolastico."}));const u=document.getElementById("root-sections");for(const n of v){const o=a(i.serviceSection,{titolo:n.titolo});o.querySelector("[data-cards]").append(s(i.serviceCard,n.cards)),u.append(o)}document.getElementById("root-footer").append(a(i.footer,t));
