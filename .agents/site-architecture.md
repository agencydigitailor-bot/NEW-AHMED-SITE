# Site-architectuur - AH Medische Dienstverlening (AHMD)

Dit document beschrijft de sitemap, URL-structuur, paginaspecificaties en navigatiestromen van de vernieuwde AHMD website.

## Pagina-hiërarchie

```
Homepage (/)
├── MESI mTABLET (/mtablet)
│   ├── ECG (/ecg)
│   ├── Enkel-arm Index (/abi)
│   ├── Bloeddrukmeting (/bloeddruk)
│   └── Spirometrie (/spirometrie)
├── Holter Monitoring (/holter)
├── Protocollen & App (/app)
├── Over Ons (/over-ons)
├── Documenten (/documenten)
└── Contact (/contact)
```

## URL Kaart Tabel

| Pagina | URL Pad | Ouderpagina | Locatie in Navigatie | Prioriteit |
|--------|---------|-------------|----------------------|------------|
| Homepage | `/` | — | Header (Logo) / Home | Kritiek |
| MESI mTABLET | `/mtablet` | Homepage | Header | Hoog |
| ECG | `/ecg` | MESI mTABLET | Contextueel (mTABLET / Footer) | Hoog |
| Enkel-arm Index (ABI) | `/abi` | MESI mTABLET | Contextueel (mTABLET / Footer) | Hoog |
| Bloeddrukmeting | `/bloeddruk` | MESI mTABLET | Contextueel (mTABLET / Footer) | Hoog |
| Spirometrie | `/spirometrie` | MESI mTABLET | Contextueel (mTABLET / Footer) | Hoog |
| Holter Monitoring | `/holter` | Homepage | Header | Hoog |
| Protocollen & App | `/app` | Homepage | Header | Medium |
| Over Ons | `/over-ons` | Homepage | Footer | Medium |
| Documenten | `/documenten` | Homepage | Footer | Medium |
| Contact | `/contact` | Homepage | Header & CTAs | Kritiek |

---

## Gedetailleerde Paginaspecificaties

### 1. Homepage (`/`)
* **Doel:** Direct communiceren van de drie hoofdpijlers van AHMD (mTABLET, Holter, App & Protocollen) en het genereren van contactaanvragen van huisartsen.
* **Primaire CTA:** "Contact Opnemen" of "Kies uw oplossing".
* **Kernsecties:** Hero/Waardepropositie, Oplossingenkiezer (mTABLET, Holter, App), Vertrouwensindicatoren (kwaliteitskeurmerken), en Footer CTA.

### 2. MESI mTABLET Concept (`/mtablet`)
* **Doel:** Uitleggen van het modulaire concept ("One core device. Infinite possibilities.") en de voordelen van training en protocollen op maat.
* **Layout & Structuur (o.b.v. slide-instructies):**
  - **Bovenkant:** Grote afbeelding van de mTABLET in het midden met de 4 modules eromheen. Korte uitleg en een kleinere video naast de tekst.
  - **Midden:** Toelichting op de servicevoordelen ("Training en protocollen op maat") met een foto van het team in actie.
  - **Productcatalogus (Scroll):** De 4 modules (ECG, Bloeddruk, EAI/ABI, Spirometrie) in een afwisselende links/rechts layout met korte opsommingen en een link naar de detailpagina ("Meer over...").
  - **Onderkant:** Een eenvoudige configurator-link ("Vraag informatie over je gewenste samenstelling") waarmee huisartsen hun gewenste combinatie van modules kunnen selecteren en een offerte aanvragen.
  - **Compliance Footer:** Subtiele vermelding van certificering (Klasse IIa medisch hulpmiddel, ISO 13485, MDR, AVG/GDPR compliant).

### 3. Diagnostiek Modules (Subpagina's van mTABLET)
* **ECG (`/ecg`):** Presentatie van het draadloze 12-kanaals ECG-apparaat met Glasgow interpretatie. Bevat onderaan een contactsectie, configurator-link en dwarsverwijzingen naar de overige modules (Bloeddruk, ABI, Spiro).
* **Enkel-arm Index (`/abi`):** Uitleg over de 1-minuut ABI meting via SmartArm™ detectie en het PADsense™-algoritme voor vroege opsporing van perifeer vaatlijden.
* **Bloeddrukmeting (`/bloeddruk`):** Toelichting op de mTABLET bloeddrukmodule, inclusief het 30-minuten protocol ter uitsluiting van witte-jassen hypertensie.
* **Spirometrie (`/spirometrie`):** Informatie over de draadloze spirometer voor COPD/astma diagnostiek, pre/post-mediciatie modi en kindvriendelijke animatie.

### 4. Holter Monitoring (`/holter`)
* **Doel:** De volledige Holter-aan-huis service presenteren zonder dat de praktijk hoeft te investeren in dure hardware.
* **Belangrijke Secties (o.b.v. slide-instructies):**
  - **Hero:** Aangepaste afbeelding die direct aansluit bij Holter-onderzoek.
  - **Waardevergelijkingstabel:** Duidelijke tabel die onze service (geen investering, plug & play, snelle uitslag < 48u, lichte comfort-recorders) afzet tegen de concurrentie/traditionele Holters (hoge kosten, software-installatie, trage analyse, zware apparaten).
  - **2-Video Strategie:** Eén video over het apparaat zelf en één video over ons service-werkproces.
  - **Recorder specificaties:** 7 dagen batterijduur, IP22 spatwaterdicht, 3-kanaals opname.
  - **Eenvoudig 4-stappenproces:** Plaatsing, Meting, Analyse en Resultaat.

### 5. Protocollen & App (`/app`)
* **Doel:** Het introduceren van de nieuwe AHMD App (in ontwikkeling) om de praktijkvoering en het apparaatbeheer te digitaliseren.
* **Drie Hoofdfuncties (o.b.v. slide-instructies):**
  - **1. Protocol Management:** Centraal beheer van praktijkprotocollen, toewijzen van eindverantwoordelijken en beheer van rechten (inzien, bewerken, verwijderen).
  - **2. Apparaatbeheer:** Overzicht van de inventaris, registratie van serienummers, aankoopdata en onderhoudsschema's.
  - **3. Actiepunten- & Vergaderapp (Binnenkort):** Online actiepunten toevoegen tijdens vergaderingen, automatische registratie en digitale notulen.

### 6. Over Ons (`/over-ons`)
* **Doel:** Vertrouwen opbouwen door de missie en kernwaarden (Innovatie, Kwaliteit, Service, Toegankelijkheid) van AHMD te belichten.

### 7. Documenten & Downloads (`/documenten`)
* **Doel:** Huisartsen voorzien van certificaten (Declaration of Conformity, ISO), brochures, en privacy/juridische documenten (AVG-overeenkomst).

### 8. Contact (`/contact`)
* **Doel:** Laagdrempelig contact leggen voor vragen of een demonstratie op locatie.
