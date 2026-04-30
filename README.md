# Cyber Field Manual (CFM)

> Offline PWA-werkboek over cyber security & threat intelligence — gericht op het Nederlandse MKB.

**Live:** https://zero0f4.github.io/cyber-field-manual/

Geen tracking, geen analytics, geen cookies. Alles draait lokaal in je browser.

---

## Wat is het?

Een doorzoekbaar veldboek dat cyber-vakkennis **helder uitlegt** voor:

- Ondernemers, IT-coördinatoren en security-officers in het MKB
- Externe adviseurs en consultants
- Iedereen die de modellen achter de buzzwoorden wil begrijpen

Geen jargon-stortvloed: concepten in toegankelijke taal, gekoppeld aan de gangbare modellen (MITRE ATT&CK, Diamond, Kill Chains, NIS2-context).

## Inhoud — 32 pagina's in 7 secties

| Sectie | Pagina's |
|---|---|
| **Dreigingen** | Threat Actors · Aanvalstechnieken · Social Engineering · Insider Threat (MICE) |
| **Aanvalsmodellen** | Kill Chains (LM/Mandiant/Pols, per fase deepdive) · Diamond Model · MITRE ATT&CK + D3FEND |
| **Indicatoren & sharing** | IoC Types (Pyramid of Pain) · Source Evaluation (Admiralty) · TLP & PAP · STIX/TAXII/MISP |
| **Wetgeving & compliance** | NIS2 + Cyberbeveiligingswet · AVG/GDPR · DORA |
| **Verdediging** | Basismaatregelen MKB · Backup & Ransomware (3-2-1-1-0) · MFA & Identity · Cloud Security |
| **Incident & risico** | IR-proces & meldplichten · Risk Management · TPRM (leveranciers) |
| **Intel-proces** | Intel Cycle · Intel Types · Analysis Methods (ACH, F3EAD, SAT) · CTI Maturity |
| **Naslag** | Acroniemen (100+) · Glossary · Bronnen · Handleiding · Wijzigingsblad |

## Tech

- Vanilla HTML / JS / CSS — geen build-tools, geen frameworks
- Network-first service-worker (`cyber-field-manual-v7`)
- PWA-installeerbaar (iPad / Android / desktop)
- Werkt volledig offline na eerste bezoek
- ~32 statische HTML-pagina's, ~150KB totaal

## Lokaal draaien

```bash
git clone https://github.com/zero0f4/cyber-field-manual.git
cd cyber-field-manual
python3 -m http.server 8080
# open http://localhost:8080/home.html
```

Of installeer als PWA via Safari (iPad) → "Zet op beginscherm".

## Disclaimer

Deze tool is een **hulpmiddel**, geen formele bron. Frameworks (MITRE ATT&CK, D3FEND, FIRST, NATO STANAG) worden in eigen woorden samengevat — voor authoritatieve teksten zie de [Bronnen](https://zero0f4.github.io/cyber-field-manual/bronnen.html)-pagina.

De gebruiker is altijd zelf verantwoordelijk voor controle, toepassing en het inwinnen van professioneel advies. Geen aansprakelijkheid voor schade voortvloeiend uit gebruik.

## Licentie

MIT — zie [LICENSE](LICENSE).
