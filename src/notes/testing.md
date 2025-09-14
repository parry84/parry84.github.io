---
title: Considerazioni epistemologiche sul software
slug: testing
dateCreated: 2025-09-14 20:51
dateUpdated: 2025-09-14 20:51
order: 9
visible: true
tags:
  - informatica
caption: Maurits Cornelis Escher, Belvedere, dettaglio. 1958
---

##

<span class="newthought">Il sogno</span> del filosofo è [la conoscenza assoluta](/notes/epistemologia/), il sogno dello sviluppatore è un programma infallibile. L’analogia tra _testing_ del software e il problema della conoscenza certa e – soprattutto nella prospettiva empirista – regge sorprendentemente bene.

In entrambi i casi, ciò che viene messo alla prova è la validità del sapere: sapere che il mondo sia fatto in un certo modo, sapere che il codice si comporti come promesso.

Ma cosa significa davvero _“sapere”_ che un software funziona? Con una certa leggerezza, si tende a dire: “Funziona: lo dimostrano i test”. Ma anche la Terra pareva stare ferma, finché un cambio di paradigma non ne rivelò il movimento.

## Il labirinto dell’empirismo

Testare un programma equivale a compiere esperimenti: ripetere osservazioni, constatare regolarità, accumulare conferme.

- _“Il sole è sorto ogni giorno finora, dunque sorgerà anche domani.”_
- _“La funzione ha dato esito corretto cento volte, dunque è corretta.”_

Eppure la regolarità non implica una necessità. Un domani il sole esaurirà la sua reazione nucleare e una procedura tradirà alla centounesima invocazione. Nell’impossibilità di compiere infinite prove, il sapere empirico rimane sospeso, mai definitivo. Ma qui viene in soccorso la lezione di Popper\cite{popper1934}:

1. È ragionevole “accontentarsi” di considerare un programma affidabile, non perché immune da difetti, ma poiché, in quanto testabile, si potrebbe in linea di principio [_falsificarne_ la correttezza](/notes/falsificazionismo/).
2. Ogni bug scoperto non è dunque una sconfitta, ma un progresso della correttezza.

La copertura del codice diviene allora una misura del grado di giustificazione “epistemica”: più casi osservati, più fiducia — ma mai certezza. Persino un esempio apparentemente innocente rivela, sotto i grandi numeri, i limiti della rappresentazione _floating point_. L’esperienza è una trascendenza delle certezze di ieri.

```haskell
isSquare :: Int -> Bool
isSquare n = (round root) ^ 2 == n
  where root = sqrt (fromIntegral n)
```

E vi sono i casi patologici, ad esempio gli eventi asincroni, dove l’indeterminazione non sarà mai azzerata da alcuna copertura, per quanto vasta, ma si rivela una condizione strutturale, quasi una metafora informatica della [meccanica quantistica](/notes/limiti/).

Occorre dunque vigilanza affinché questa percentuale non diventi un simulacro. L’interpretazione della probabilità è un terreno insidioso e quella _frequentista_[^1] mostra le sue lacune\cite{reichenbach1968}: qual è la probabilità che accada il Big Bang? Allo stesso modo un codice coperto al 99.9% potrebbe lasciar scoperto un caso fatale.

```haskell
invert :: Fractional a => a -> a
invert n = 1 / n

testInvert :: [Bool]
testInvert = [ x == (invert . invert) x | x <- [1..999999] ]
```

In assenza di strumenti infallibili, si ricorre allora alla soggettività. Quanto sarebbe disposto a scommettere un esperto sul buon funzionamento del sistema?

[^1]: Ossia, interpretare la probabilità come il limite della frequenza di un certo evento quando il numero delle prove tende a infinito

## Il sogno della verifica formale

Se l’empirismo si accontenta di osservare il comportamento del software, esiste un’altra via più ambiziosa: quella della verifica formale. Qui la conoscenza non si fonda sull’esperimento, ma sul puro ragionamento: è l’antico sogno dei razionalisti, da Platone a Leibniz. In questo caso, si parla di un _grado logico di conferma_[^2]: non più conferme induttive, ma inferenze dedotte all’interno di linguaggi formalizzati.

[^2]: cfr. Carnap

- Si descrive il comportamento atteso secondo un sistema di regole — logica temporale, calcolo dei predicati, modelli assiomatici.
- Si dimostra, come teorema, che un certo programma soddisfi determinate proprietà.

In linea di principio, dato un modello perfetto del software, si potrebbe assegnare a ogni bug una probabilità certa: da zero a uno, dall’impossibile al certo. Ma il modello stesso, per programmi poco più che banali, sarà nella pratica incompleto; e in ultima istanza, il fantasma dell’_halting problem_ incombe come un limite insormontabile: ci sono domande che nessuna specifica formale potrà mai decidere.

```idris
-- Funzione verificabile
invert : (n : Double) -> {auto prf : n /= 0} -> Double
invert n {prf} = 1 / n

-- Proprietà da verificare
doubleInvert : (x : Double) -> {auto prf : x /= 0} -> invert (invert x) = x
doubleInvert x {prf} = ?proof
```

E se il paradosso si manifesta in un ambito così ben delimitato, non potrà che emergere anche nel quadro più ampio: nel pensiero filosofico, ogni tentativo di fondare la conoscenza su basi puramente razionali — dalla teoria platonica delle idee, alla _monadologia_ di Leibniz, fino alla dialettica di Hegel — ha finito per infrangersi contro i margini del reale.

Nell’universo del software, lo sviluppatore si erge a demiurgo: un dio che forgia regole e mondi artificiali. Ma, quale divinità minore, la sua onniscienza è sovrastata dalla complessità. Ciò che egli crea non gli è mai del tutto trasparente.

## L’inganno degli specchi

Non esiste un test innocente. Come ci ricorda Quine\cite{quine1951}, ogni osservazione è, di per sé, gravata da un’interpretazione, ogni dato è un frammento che ha senso solo dentro un reticolo teorico. E così sono anche i nostri test: non misurano il “reale” del programma, ma il riflesso che ne abbiamo immaginato. Può accadere allora che le sue asserzioni, pur formalmente impeccabili, si rivelino compatibili soltanto con un modello fallace.

I _mock_ e gli _stub_, in questo scenario, sembrano creature di laboratorio: ipotesi travestite da realtà, condizioni fittizie accettate per comodità. Eppure, da un universo simulato non si possono trarre verità assolute. Ed ecco che riaffiora la vecchia domanda, con la sua ricorsione infinita: _quis custodiet ipsos custodes_? Quale test verifica la verità del test stesso?

Da qui l’invito alla sobrietà: i test dovrebbero essere semplici, quasi trasparenti. Il Rasoio di Occam viene in aiuto: non perché il semplice sia di per sè necessariamente il vero, ma perché, in quanto più semplicemente controllabile, è meno incline all’errore.

Come accade con una teoria scientifica consolidata, risulta faticoso rimettere in radicalmente in discussione un progetto software all’apparire delle prime anomalie. Solo laddove queste iniziano ad accumularsi sino a diventare insormontabili si giunge a una rottura, da cui ne deriva un cambio di paradigma. Questo fenomeno è stato analizzato da Thomas Khun\cite{kuhn1962}. Lakatos\cite{lakatos1978}, da parte sua, rincarerebbe: limitarsi alle definizioni ha la disdicevole conseguenza di incoraggiare come validi anche quei programmi scritti svogliatamente, che superano un insieme minimo di test, anch’essi redatti con superficialità. Ciò che conta la fecondità, la capacità di aprire nuove strade, di reggere il confronto con proposte concorrenti. Ed ecco che, di nuovo, riaffiora l’elemento umano.

## Quando serve, è valido

Per i pragmatisti come Peirce e James, la verità è ciò che orienta l’azione senza tradirla\cite{peirce1931}\cite{james1907}. Questa posizione trova una corrispondenza nell’evoluzionismo, dove lo sviluppo della conoscenza è informato alla conservazione della vita.

Nel software, questo significa che un programma acquista credibilità non per una presunta essenza metafisica, ma perché ha dimostrato la sua utilità nel mondo reale. Se funziona in condizioni concrete, se risolve i problemi per cui è stato sviluppato, allora è “valido” sufficientemente da meritare fiducia.

Questo suggerirebbe di concentrarsi sui test che intercettano aspetti pratici e vitali del sistema: quelli che garantiscono il comportamento utile, non quelli che inseguono sofismi o cavilli astratti. Ma soprattutto, incoraggia il riuso: ciò che ha affrontato battaglie resistendo, ha dimostrato il proprio valore e rappresenta un baluardo di affidabilità.

## Testare il sistema come rete

I test di integrazione non si accontentano di scrutare il singolo modulo come un’isola, ma osservano l’intera geografia: funzioni, servizi, interfacce, tutti intrecciati. Non è la singola pietra a reggere l’edificio, ma l’incastro delle pietre.

Qui il pensiero incontra l’olismo epistemologico: nessuna osservazione si applica a un enunciato isolato, ma sempre a un sistema teorico. Analogamente, un test di integrazione, supera le limitazioni legate alle assunzioni di un singolo test in isolamento.

Il medesimo concetto può essere metaforicamente fatto corrispondere alla _blockchain_: i blocchi più profondi, sepolti sotto strati di conferme, accumulano fiducia; quelli più recenti restano più fragili. Maggiori è la rete delle relazioni che un concetto, o una procedura, ha con il resto della realtà, maggiori, le possibilità per una lacuna di emergere.

## Trasparenza, leggibilità, fiducia

Secondo Popper il valore scientifico dell’affermazione esiste solo nella misura dell’intersoggettività. È il patto che trasforma la conoscenza privata in sapere condiviso. Anche nel software questo principio ritorna: un test criptico e confuso non genera fiducia; al contrario, un test chiaro, leggibile e replicabile diventa invece un linguaggio comune.

Carnap avrebbe sottolineato la necessità di protocolli di verifica\cite{carnap1934}. Non per uno sterile amore della forma, ma perché la forma riduce i malintesi, e i malintesi sono il nemico della collaborazione.

Queste discorso non deve orientare verso un relativismo o un postmodernismo radicale. Esiste una realtà oggettiva, un codice che funziona indipendentemente da chi lo osserva o dalle convenzioni che adottiamo per testarlo. L’intersoggettività non nega questa realtà, ma ci fornisce strumenti per avvicinarci a essa. La cortesia e alla chiarezza nel redigere i test non garantiscono di per sé la validità di un programma, ma rendono possibile cooperare per riconoscerla e valutarne la solidità.

## Quando il test inganna

Gettier dimostrò che possedere una credenza vera e giustificata non garantisce di possedere conoscenza\cite{gettier1963}: la verità può sussistere per pura coincidenza, e la giustificazione può essere illusoria.

Allo stesso modo, un programma che supera tutti i test potrebbe appartenere a questa regione paradossale: sembra funzionare, ma solo perché nessuno ha esercitato il caso che lo mette davvero alla prova. È un sapere apparente, un castello che regge finché il vento non cambia.

```haskell
-- Una funzione sbagliata che sembra giusta
isEven :: Int -> Bool
isEven n = True   -- sempre "vero"!

-- Test superficiale
-- it "riconosce 2 come pari" $
--     isEven 2 `shouldBe` True
```

Aumentare la copertura riduce le coincidenze “fortunate”, ma non le elimina. Come suggerirebbe Nozick\cite{nozick1981}, la conoscenza richiede non solo verità e giustificazione, ma anche una sensibilità ai mondi possibili: chiedersi se laddove le condizioni fossero state diverse, il nostro sistema se ne sarebbe accorto. I test, allora, dovrebbero essere costruiti in funzioni di queste ipotesi.

## Conclusione

Con Feyerabend\cite{feyerabend1975} l’ideale di una epistemologia pura implode. Egli nota come nessun metodo mai dominato a lungo la scienza; ogni regola, portata all’estremo, diventa una gabbia. Ma la sua provocazione – _“anything goes”_ – non è un invito al caos, ma un inno al pluralismo.

Nel software, questo si traduce in una pluralità di strumenti: test di unità, test di integrazione, _fuzzing_, _property-based testing_, test manuali. Ognuno ha i suoi limiti, ognuno la sua virtù. Affidarsi esclusivamente a uno solo è un rischio; mescolarli con giudizio è un atto di saggezza.

Non arriveremo mai a un assoluto, né la filosofia né l’ingegneria offrono porti sicuri. Ma un’esistenza lucida sa orientarsi nell’incertezza: non pretendere l’infallibilità, non rincorrere un’illusione di perfezione, bensì coltivare un’attenzione vigile, con l’umiltà di chi sa che il sapere – come il software – è sempre in versione provvisoria.

<bibliography>
@book{popper1934,
  title     = "Logik der Forschung",
  author    = "Popper, Karl",
  year      = 1934,
  publisher = "Julius Springer",
  isbn      = "3-1614-8410-X"
}
@book{reichenbach1968,
   title =     {The rise of scientific philosophy},
   author =    {Hans Reichenbach},
   publisher = {University of California Press},
   year =      {1968}
}
@book{carnap1934,
  author    = {Rudolf Carnap},
  title     = {Logische Syntax der Sprache},
  year      = {1934},
  publisher = {Springer},
  note      = {Trad. it. \emph{Sintassi logica del linguaggio}, Laterza, 1968}
}
@book{kuhn1962,
  author    = {Thomas S. Kuhn},
  title     = {The Structure of Scientific Revolutions},
  year      = {1962},
  publisher = {University of Chicago Press},
  note      = {Trad. it. \emph{La struttura delle rivoluzioni scientifiche}, Einaudi, 1969}
}
@book{lakatos1978,
  author    = {Imre Lakatos},
  title     = {The Methodology of Scientific Research Programmes},
  year      = {1978},
  publisher = {Cambridge University Press},
  note      = {Trad. it. \emph{La metodologia dei programmi di ricerca scientifici}, Il Saggiatore, 1985}
}
@article{quine1951,
  author    = {Willard Van Orman Quine},
  title     = {Two Dogmas of Empiricism},
  journal   = {The Philosophical Review},
  volume    = {60},
  number    = {1},
  pages     = {20--43},
  year      = {1951}
}
@book{peirce1931,
  author    = {Charles Sanders Peirce},
  title     = {Collected Papers of Charles Sanders Peirce},
  publisher = {Harvard University Press},
  year      = {1931--1958},
  editor    = {Charles Hartshorne and Paul Weiss and Arthur W. Burks}
}
@book{james1907,
  author    = {William James},
  title     = {Pragmatism: A New Name for Some Old Ways of Thinking},
  year      = {1907},
  publisher = {Longmans, Green and Co},
  note      = {Trad. it. \emph{Pragmatismo}, Laterza, 1968}
}
@article{gettier1963,
  author    = {Edmund L. Gettier},
  title     = {Is Justified True Belief Knowledge?},
  journal   = {Analysis},
  volume    = {23},
  number    = {6},
  pages     = {121--123},
  year      = {1963}
}
@book{nozick1981,
  author    = {Robert Nozick},
  title     = {Philosophical Explanations},
  publisher = {Harvard University Press},
  year      = {1981},
  note      = {Trad. it. \emph{Spiegazioni filosofiche}, Il Saggiatore, 1987}
}
@book{feyerabend1975,
  author    = {Paul Feyerabend},
  title     = {Against Method},
  year      = {1975},
  publisher = {New Left Books},
  note      = {Trad. it. \emph{Contro il metodo}, Feltrinelli, 1979}
}
</bibliography>
