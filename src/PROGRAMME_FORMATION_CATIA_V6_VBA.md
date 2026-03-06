# PROGRAMME DE FORMATION
# CATIA V6 — 3DEXPERIENCE Platform Automation (VBA)
# 4 jours | 28 heures

---

## Informations générales

| | |
|---|---|
| **Durée** | 4 jours (28 heures) |
| **Jours 1-3** | CATIA V6 Automation — VBA / VBScript / CATScript |
| **Jour 4** | Python pour l'Automation 3DEXPERIENCE |
| **Version** | 3DEXPERIENCE R2021x et supérieur |
| **Sources officielles** | VPLM Development Implementation Practices R2021x (Lesson 6) + DSYAutomation API R2026x |

---

## Objectifs pédagogiques

À l'issue de cette formation, les participants seront capables de :

- Comprendre l'architecture de la plateforme 3DEXPERIENCE et ses différences fondamentales avec CATIA V5
- Créer, éditer, déboguer et déployer des Macros VBA dans l'environnement 3DEXPERIENCE
- Maîtriser le modèle objet Automation : Application, Editor, Selection, Services PLM
- Rechercher, ouvrir et créer des données PLM par script (SearchService, PLMOpenService, PLMNewService)
- Naviguer dans une structure Produit (VPMReference / VPMInstance / Occurrences) par programmation
- Automatiser la création de géométrie : Sketch, Part Design (Pad, Pocket, Hole), GSD
- Concevoir des interfaces utilisateur (UserForms VBA) et les intégrer dans l'Action Bar
- Utiliser Python comme alternative à VBA pour l'automation 3DEXPERIENCE

---

## Public visé

- Développeurs d'applications CATIA passant de V5 à V6 / 3DEXPERIENCE
- Ingénieurs méthodes et automaticiens souhaitant exploiter l'API Automation V6
- Pilotes de site, administrateurs PLM ayant des besoins de scripting

---

## Prérequis

- Connaissances de base CATIA V6 / 3DEXPERIENCE (navigation, Part Design, Product Structure)
- Notions de programmation VBA ou VBScript (niveau débutant/intermédiaire)
- Une expérience CATIA V5 Automation est un plus mais n'est pas obligatoire

---

## Ressources et documentation

- **Doc officielle Dassault :** VPLM Development Implementation Practices R2021x — Lesson 6
- **API Reference complète :** DSYAutomation — 3DEXPERIENCE Native Apps Automation (R2026x)
- **Modules couvertes :** Infrastructure, Mechanical Modeler, Product, Part Design, Sketcher, Drafting, Server Access, Python

---

## Modalités d'évaluation

- Évaluations formatives par QCM après chaque module
- Travaux pratiques guidés simulant des cas réels métier
- Évaluation finale : développement d'une macro complète de bout en bout
- Attestation de formation nominative remise en fin de parcours
- Évaluation post-formation à 45 jours

---
---

# JOUR 1 — Plateforme 3DEXPERIENCE & Fondamentaux de l'Automation VBA
## Durée : 7 heures

---

### MODULE 1.1 — Écosystème 3DEXPERIENCE & Différences V5 → V6
**Durée :** 1h30 | Théorie

#### Objectifs
- Comprendre l'architecture de la plateforme 3DEXPERIENCE
- Identifier les différences fondamentales avec CATIA V5 pour l'automation

#### Contenu

**1.1.1 — Architecture 3DEXPERIENCE**
- Composants : 3DSpace (vault), 3DDashboard, Native Apps (CATIA)
- Modèle client-serveur vs. fichiers locaux en V5
- Concept PLM : Reference / Instance / RepReference / RepInstance
- Notion de session, d'éditeur, de base de données PLM

**1.1.2 — Tableau comparatif V5 → V6 (critique pour les migration)**

| Concept V5 | Équivalent V6 / 3DEXPERIENCE |
|---|---|
| `CATIA.Documents` | `SearchService` + `PLMOpenService` |
| `ActiveDocument` | `CATIA.ActiveEditor` |
| `PartDocument` | `Editor` → `ActiveObject` (Part) |
| `ProductDocument` | `Editor` → `PLMProductService` |
| `Documents.Open(path)` | `PLMOpenService.PLMOpen(oPLMEntity, oEditor)` |
| `Document.Save` | `PLMPropagateService.Save` |
| Fichiers `.CATPart`, `.CATProduct` | Objets PLM en base (VPMReference, VPMRepReference) |
| Macros stockées dans le Document | **Macro Libraries** stockées en base 3DSpace |
| `GetWorkbench()` | `GetService()` (session ou editor level) |
| Accès par chemin fichier | Accès par recherche PLM (V_Name, PLM_ExternalID) |

**1.1.3 — Le modèle de données PLM**
- `VPMReference` : définition du composant
- `VPMInstance` : instance du composant dans un assemblage
- `VPMRepReference` : pointeur vers la géométrie (3DShape)
- `VPMRepInstance` : instance de la représentation
- Modèle d'Occurrence (session) vs. modèle Instance/Reference (base)

#### Points clés à retenir
> En V6, il n'y a plus de fichiers locaux. Tout est en base PLM.
> Le concept `Document` V5 est remplacé par `Editor` + `PLMEntity`.

---

### MODULE 1.2 — Introduction à l'Automation 3DEXPERIENCE
**Durée :** 1h00 | Théorie

#### Objectifs
- Connaître les langages et outils disponibles
- Comprendre les définitions et concepts fondamentaux

#### Contenu

**1.2.1 — Définition de l'Automation**
- Automation = COM (Component Object Model) — héritage OLE Automation
- Une Macro = série de fonctions dans un langage de script, exécutée en une commande
- Promotion de la productivité : automatisation de tâches répétitives
- Exécution : `Tools > Macros...` ou raccourci `Alt+F8`

**1.2.2 — Langages disponibles dans 3DEXPERIENCE**

| Langage | Caractéristiques | Recommandation |
|---|---|---|
| **CATScript** | Version DS de VBScript, avec typage | Compatibilité V5, converti en VBScript à l'exécution |
| **MS VBScript** | Subset de Visual Basic, sans typage | **Recommandé par Dassault** (préféré à CATScript) |
| **VBA** | Visual Basic for Applications, Windows uniquement | Recommandé pour GUI, débogage, accès API COM |
| **VSTA** | .NET (C# ou VB.NET), Visual Studio | Pour développements complexes, UI avancées |
| **Python** | Python 3.10+ (Simulation Apps) | Jour 4 — alternatives modernes |

> **Règle Dassault :** VBScript est préféré à CATScript. VBA recommandé pour les interfaces graphiques.

**1.2.3 — Définitions essentielles**
- **Macro Library** : conteneur de macros, stocké en base 3DSpace comme objet PLM (= Macro Container = Macro Project)
- **VSTA Add-in** : macro au sens Microsoft, ajoute des fonctionnalités à CATIA
- **IDE** : Integrated Development Environment (= DTE : Design Time Environment)
- **3 types de librairies** :
  - PLM Directories → CATScript ou MS VBScript
  - PLM VBA Projects → VBA
  - PLM VSTA Projects → VB.NET ou C#

**1.2.4 — Périmètre applicatif**
- Large spectre d'applications couvertes : Part Design, GSD, Assembly, Drafting, FEA, OLP...
- Référencer : DSYAutomation — App Map pour la liste complète

---

### MODULE 1.3 — Environnement de Développement VBA
**Durée :** 2h30 | Théorie + Démonstration

#### Objectifs
- Savoir créer et gérer une Macro Library
- Maîtriser l'éditeur de macros et ses fonctionnalités
- Savoir enregistrer, exécuter et déboguer une macro

#### Contenu

**1.3.1 — Accès à l'environnement**
- Navigation : `Action Bar > Tools > Macros...` ou `Alt+F8`
- Dialog box Macros : liste des macros disponibles
- Paramètre de Préférences : éditeur par défaut, références externes COM

**1.3.2 — Création d'une Macro Library**
1. `Macros... > Macro Libraries...`
2. Sélectionner le type (PLM Directories / PLM VBA Project / PLM VSTA Project)
3. `Create new library` → nommer la librairie
4. Double-cliquer pour sélectionner comme librairie active
5. `Create` → créer une nouvelle macro dans cette librairie
6. Sélectionner le langage (MS VBScript, VBA, CATScript)

**1.3.3 — Fonctionnalités de l'éditeur de Macros**
- Sauvegarde de l'objet Macro en base
- Recherche par ligne / par texte
- **Insertion de code snippet** : capture interactive d'actions utilisateur
- **Object Browser** : navigation dans les librairies d'automation disponibles
- **Aide Automation** : lien vers la documentation des objets
- ⚠️ Les macros CATScript/VBScript ne peuvent PAS être exécutées en mode débogage

**1.3.4 — Enregistrement d'une Macro**
1. `Macros... > Start Recording...`
2. Sélectionner la Macro Library ou créer une nouvelle
3. Choisir le langage de scripting
4. Appuyer sur `Start` → effectuer les actions à enregistrer
5. `Stop Recording` pour terminer
- ⚠️ L'enregistreur ne capture pas toutes les séquences utilisateur

**1.3.5 — Création et exécution d'une macro VBA**
1. Créer une librairie de type `PLM VBA Project`
2. `Create` → type `MS VBA`
3. `Edit` → ouvre Microsoft Visual Basic Editor
4. Écrire le code, `Save`
5. Exécution :
   - Mode débogage depuis l'éditeur : `Run Sub` ou `F5`
   - Pas-à-pas : `F8` (visualisation des variables)

**1.3.6 — Différences CATScript vs MS VBScript**

```vba
' CATScript (avec typage)
Dim ActiveObject As AnyObject
Set ActiveObject = CATIA.ActiveEditor.ActiveObject

' MS VBScript (sans typage - recommandé)
Dim ActiveObject
Set ActiveObject = CATIA.ActiveEditor.ActiveObject
```

**1.3.7 — Export d'une Macro Library**
- Export en format 3DXML pour partage entre organisations
- Rechercher la Macro Library > Commande `Export`
- Utile pour déploiement et mise à jour

**1.3.8 — Ajout d'une Macro dans l'Action Bar (Icône personnalisée)**
1. Ouvrir le workbench cible
2. `Me Menu > Preferences > Customize`
3. Onglet `Sections` : créer une nouvelle section personnalisée
4. Onglet `Commands` : catégorie `Macros` → sélectionner la macro
5. `Show Properties...` : définir titre, alias, icône
6. `Add commands...` : ajouter dans la section personnalisée
7. Valider la présence dans l'Action Bar

---

### TP 1 — Première Macro : Sélection et Affichage d'Informations
**Durée :** 1h30 | Pratique guidée

#### Basé sur l'Exercice 13 du cours officiel Dassault (30 min de base, étendu)

**Objectif :** Créer un CATScript qui :
1. Sélectionne une Instance de l'arbre de spécifications
2. Récupère la Référence associée à l'Instance sélectionnée
3. Extrait le nom de l'Instance et le nom de révision de la Référence
4. Affiche ces informations dans un MsgBox

**Code de référence VBScript :**

```vb
Sub CATMain()
    Dim oEditor As Editor
    Set oEditor = CATIA.ActiveEditor

    Dim oSelection As Selection
    Set oSelection = oEditor.Selection

    ' Configurer le filtre de sélection
    Dim oInputObjectType(0)
    oInputObjectType(0) = "VPMInstance"

    Dim strStatus As String
    strStatus = oSelection.SelectElement(oInputObjectType, "Sélectionnez une Instance", False)

    If strStatus = "Normal" Then
        Dim oSelectedElement As SelectedElement
        Set oSelectedElement = oSelection.Item(1)

        Dim oVPMInstance As VPMInstance
        Set oVPMInstance = oSelectedElement.Value

        ' Récupérer la Référence
        Dim oVPMRef As VPMReference
        Set oVPMRef = oVPMInstance.ReferenceInstanceOf

        ' Afficher les informations
        Dim strInfo As String
        strInfo = "Instance : " & oVPMInstance.Name & vbCrLf
        strInfo = strInfo & "Référence : " & oVPMRef.GetAttributeValue("PLM_ExternalID") & vbCrLf
        strInfo = strInfo & "Révision : " & oVPMRef.GetAttributeValue("revision")

        MsgBox strInfo, vbExclamation + vbYesNo, "Informations Instance"
    End If
End Sub
```

**Exercice complémentaire :** Modifier la macro pour parcourir toutes les instances du niveau 1.

---
---

# JOUR 2 — Architecture Objet & Services PLM
## Durée : 7 heures

---

### MODULE 2.1 — Architecture du Modèle Objet
**Durée :** 2h00 | Théorie

#### Objectifs
- Comprendre les diagrammes objets et leur lecture
- Maîtriser les concepts d'Héritage et d'Agrégation
- Connaître les objets fondamentaux et leur hiérarchie

#### Contenu

**2.1.1 — Lecture des diagrammes objets**

| Représentation | Signification |
|---|---|
| Boîte bleue | Objet standard |
| Boîte jaune | Collection (contient d'autres objets) |
| Boîte violette | Objet abstrait (non instanciable directement) |
| Flèche pleine | Agrégation (contient) |
| Flèche creuse | Héritage (est une spécialisation de) |
| Symbole ▶ | Objet racine développé dans un autre diagramme |

**2.1.2 — Concepts fondamentaux**

- **Objet** : entité (boîte bleue) — ex. : Editor, Part, Sketch
- **Collection** : objet contenant d'autres objets (boîte jaune) — toujours nommée au pluriel (Editors, Bodies, Sketches)
  - Propriété `Count` : nombre d'éléments
  - Méthode `Item(index ou nom)` : accès à un élément (index commence à 1)
  - Méthodes `Add()` / `Remove()` selon les collections
- **Propriété** : caractéristique d'un objet (lecture ou lecture/écriture)
- **Méthode** : action demandée à un objet (Sub = sans retour, Function = avec retour)
- **Héritage** : spécialisation — un `Pad` hérite de `Prism`, qui hérite de `SketchBasedShape`
- **Agrégation** : composition — `Part` contient `Bodies`, qui contient `Sketches`

**2.1.3 — AnyObject : classe racine**

Tous les objets héritent de `AnyObject` :
- `Application` : application parente
- `Parent` : objet parent qui agrège cet objet
- `Name` : nom de l'objet (lecture/écriture)

**2.1.4 — Hiérarchie des objets fondamentaux**

```
Application (CATIA)
├── ActiveEditor        → Editor courant
├── Editors             → Collection d'Editor
├── ActiveWindow        → Fenêtre active
├── Windows             → Collection de Window
├── FileSystem          → Accès système de fichiers
├── GetSessionService() → Retourne un Service de session
│   ├── SearchService
│   ├── PLMOpenService
│   ├── PLMNewService
│   ├── PLMPropagateService
│   └── VisuServices
└── SettingControllers  → Contrôleurs de paramètres

Editor
├── ActiveObject        → Objet racine édité (Part, VPMReference, DrawingRoot...)
├── Selection           → Sélection courante dans cet éditeur
└── GetService()        → Service de niveau éditeur
    ├── PLMProductService
    ├── DrawingService
    └── VisuService (caméras...)
```

**Exemples de code VBA :**

```vba
' Accès à l'éditeur actif
Dim oEditor As Editor
Set oEditor = CATIA.ActiveEditor

' Accès à l'objet racine édité
Dim oActiveObject As AnyObject
Set oActiveObject = CATIA.ActiveEditor.ActiveObject

' Accès au nom via la propriété de base
Dim strName As String
strName = CATIA.ActiveEditor.ActiveObject.Name

' Raccourci de navigation chaînée
Dim strVPMRefName As String
strVPMRefName = CATIA.ActiveEditor.ActiveObject.Name
```

---

### MODULE 2.2 — Objet Application, Editor, Selection, Service
**Durée :** 1h30 | Théorie + Démonstration

#### Objectifs
- Maîtriser les 4 objets fondamentaux de l'infrastructure

#### Contenu

**2.2.1 — Application Object (CATIA)**

Objet racine unique, toujours nommé `CATIA`. Représente l'application et sa fenêtre principale.

```vba
' Propriétés principales
CATIA.ActiveEditor          ' Editor actif
CATIA.Editors               ' Collection de tous les Editors
CATIA.ActiveWindow          ' Fenêtre active
CATIA.Windows               ' Collection de fenêtres
CATIA.FileSystem            ' Accès aux fichiers
CATIA.Width / .Height       ' Dimensions de la fenêtre (pixels)
CATIA.LocalCache            ' Chemin du cache local

' Méthodes clés
CATIA.GetSessionService("NomService")   ' Service de niveau session
CATIA.StartCommand("NomCommande")       ' Lancement d'une commande interactive
CATIA.GetWorkbenchId()                  ' Workbench actif
CATIA.SetWorkbenchId("WorkbenchId")     ' Changer de workbench
```

**2.2.2 — Editor Object**

Contrôleur MVC — représente un éditeur ouvert. Fédère tous les objets éditables dans une même fenêtre.

```vba
Dim oEditor As Editor
Set oEditor = CATIA.ActiveEditor

' Propriétés
oEditor.ActiveObject    ' Objet racine (Part, VPMReference, DrawingRoot...)
oEditor.Selection       ' Sélection dans cet éditeur

' Méthode
oEditor.GetService("NomService")  ' Service de niveau éditeur
```

**2.2.3 — Selection Object**

Gestion des sélections utilisateur (souris) comme candidats à l'action script suivante.

```vba
Dim oSelection As Selection
Set oSelection = CATIA.ActiveEditor.Selection

' Configurer et lancer une sélection guidée
Dim oInputObjectType(0)
oInputObjectType(0) = "Body"
Dim strStatus As String
strStatus = oSelection.SelectElement(oInputObjectType, "Sélectionnez un Body", False)

' Récupérer l'élément sélectionné
Dim oSelectedElement As SelectedElement
Set oSelectedElement = oSelection.Item(1)

' Extraire l'objet réel
Dim oBody As Body
Set oBody = oSelectedElement.Value

' Propriétés de Selection
oSelection.Count        ' Nombre d'éléments sélectionnés
```

**2.2.4 — Service Object**

Objet abstrait — accès à des opérations indépendantes des objets édités.

Deux niveaux :
- **Session-level** : opérations s'appliquant à n'importe quel type PLM, sans éditeur actif requis
- **Editor-level** : opérations dédiées au type PLM de l'éditeur actif

```vba
' Service de session
Dim oVisuServices As VisuServices
Set oVisuServices = CATIA.GetSessionService("VisuServices")

Dim oSearchService As SearchService
Set oSearchService = CATIA.GetSessionService("Search")

' Service d'éditeur
Dim oDrawingService As DrawingService
Set oDrawingService = CATIA.ActiveEditor.GetService("CATDrawingService")

Dim oProductService As PLMProductService
Set oProductService = CATIA.ActiveEditor.GetService("PLMProductService")
```

---

### MODULE 2.3 — Services PLM : Recherche, Ouverture, Création, Sauvegarde
**Durée :** 2h00 | Théorie + Démonstration

#### Objectifs
- Maîtriser le cycle complet : Recherche → Ouverture → Modification → Sauvegarde
- Comprendre les attributs PLM

#### Contenu

**2.3.1 — SearchService & DatabaseSearch**

Remplace l'accès par chemin fichier de V5 :

```vba
' 1. Obtenir le SearchService
Dim oSearchService As SearchService
Set oSearchService = CATIA.GetSessionService("Search")

' 2. Configurer la recherche
Dim oDBSearch As DatabaseSearch
Set oDBSearch = oSearchService.DatabaseSearch
oDBSearch.BaseType = "VPMReference"      ' Type d'objet à rechercher
oDBSearch.AddEasyCriteria "PLM_ExternalID", "Moteur*"   ' Critère avec joker *
oDBSearch.AddEasyCriteria "revision", "A"               ' Critère supplémentaire

' 3. Lancer la recherche
oSearchService.Search

' 4. Exploiter les résultats (READ-ONLY)
Dim cPLMEntities As PLMEntities
Set cPLMEntities = oDBSearch.Results

MsgBox "Résultats trouvés : " & cPLMEntities.Count
MsgBox "Premier résultat : " & cPLMEntities.Item(1).GetAttributeValue("V_Name")

' ⚠️ ATTENTION : les résultats de recherche sont en LECTURE SEULE
' SetAttributeValue sur un résultat de recherche lèvera une erreur
```

**Attributs PLM courants :**

| Attribut | Description |
|---|---|
| `PLM_ExternalID` | Identifiant externe unique du composant |
| `V_Name` | Nom affiché du composant |
| `revision` | Révision (A, B, C...) |
| `V_description` | Description |

**2.3.2 — PLMOpenService : Ouverture de données**

```vba
Dim oPLMOpenService As PLMOpenService
Set oPLMOpenService = CATIA.GetSessionService("PLMOpenService")

' Ouvrir un objet PLM dans un éditeur
Dim oEditor As Editor
oPLMOpenService.PLMOpen oPLMEntity, oEditor

' oEditor contient maintenant l'éditeur avec l'objet ouvert
Dim oActiveObject As AnyObject
Set oActiveObject = oEditor.ActiveObject
```

**2.3.3 — PLMNewService : Création de nouveaux objets PLM**

```vba
Dim oNewService As PLMNewService
Set oNewService = CATIA.GetSessionService("PLMNewService")

' Créer un nouveau 3DShape
Dim oEditor3DShape As Editor
oNewService.PLMCreate "3DShape", oEditor3DShape

' Accéder à l'objet Part racine
Dim oPart As Part
Set oPart = oEditor3DShape.ActiveObject

' Accéder à la VPMRepReference parente
Dim oVPMRepRef As VPMRepReference
Set oVPMRepRef = oPart.Parent

' Lire un attribut PLM
MsgBox oVPMRepRef.GetAttributeValue("PLM_ExternalID")
```

**2.3.4 — PLMPropagateService : Sauvegarde**

```vba
' Sauvegarder en base de données
CATIA.GetSessionService("PLMPropagateService").Save
```

**2.3.5 — Navigation entre objets (modes)**

```vba
' Mode 1 — Navigation par propriété (le plus courant)
Dim oSelection As Selection
Set oSelection = CATIA.ActiveEditor.Selection

' Mode 2 — Navigation par Parent
Dim oEditor As Editor
Set oEditor = oSelection.Parent   ' remonte au parent

' Mode 3 — Navigation par GetItem (extensions)
Dim oKnowledge As KnowledgeObjects
Set oKnowledge = oPart.GetItem("KnowledgeObjects")

' Mode 4 — Recherche par nom dans le Part
Dim oSketch As Sketch
Set oSketch = oPart.FindObjectByName("Sketch.1")

Dim oPoint As Point2D
Set oPoint = oPart.FindObjectByName("Point.6")
```

---

### TP 2 — Workflow PLM Complet : Recherche → Ouverture → Lecture d'attributs
**Durée :** 1h30 | Pratique guidée

#### Basé sur l'Exercice 14 du cours officiel Dassault (étendu)

**Objectif :** Créer un CATScript qui :
1. Recherche un Product Reference par nom (InputBox)
2. L'ouvre dans un éditeur
3. Récupère le nom du Product actif depuis la session
4. Sauvegarde ce nom dans un fichier texte
5. Lance le Bloc-notes pour afficher le fichier créé

**Code de référence VBScript :**

```vb
Sub CATMain()
    On Error GoTo ErrorSub

    ' Étape 1 : Recherche
    Dim oSearchService As SearchService
    Set oSearchService = CATIA.GetSessionService("Search")

    Dim oDBSearch As DatabaseSearch
    Set oDBSearch = oSearchService.DatabaseSearch

    oDBSearch.BaseType = "VPMReference"
    Dim strName As String
    strName = InputBox("Nom du Product à rechercher (joker * autorisé)", "Recherche PLM")
    oDBSearch.AddEasyCriteria "PLM_ExternalID", strName

    oSearchService.Search

    Dim cResults As PLMEntities
    Set cResults = oDBSearch.Results

    If cResults.Count = 0 Then
        MsgBox "Aucun résultat trouvé.", vbExclamation
        GoTo EndSub
    End If

    ' Étape 2 : Ouverture
    Dim oPLMOpenService As PLMOpenService
    Set oPLMOpenService = CATIA.GetSessionService("PLMOpenService")

    Dim oEditor As Editor
    oPLMOpenService.PLMOpen cResults.Item(1), oEditor

    ' Étape 3 : Lecture
    Dim strProductName As String
    strProductName = oEditor.ActiveObject.Name

    ' Étape 4 : Sauvegarde dans fichier
    Dim sFilePath As String
    sFilePath = "C:\Temp\ProductName.txt"

    Dim iFile As Integer
    iFile = FreeFile
    Open sFilePath For Output As #iFile
    Print #iFile, "Product ouvert : " & strProductName
    Print #iFile, "Date : " & Now()
    Close #iFile

    ' Étape 5 : Lancer le Bloc-notes
    Shell "notepad.exe " & sFilePath, vbNormalFocus

    MsgBox "Terminé. Product : " & strProductName, vbInformation
    GoTo EndSub

ErrorSub:
    MsgBox "Erreur : " & Err.Description, vbCritical
EndSub:
End Sub
```

---
---

# JOUR 3 — Modélisateurs Applicatifs & Programmation Avancée
## Durée : 7 heures

---

### MODULE 3.1 — Modèle Produit VPM : Navigation et Assemblage
**Durée :** 2h00 | Théorie + Démonstration

#### Objectifs
- Maîtriser l'architecture Reference/Instance/Occurrence
- Naviguer dans une structure Produit par script
- Générer un BOM automatiquement

#### Contenu

**3.1.1 — Architecture du Modèle Produit (persistant en base)**

```
VPMReference (Produit Racine - Skateboard)
├── VPMInstance (Plateau)
│   └── VPMReference (Plateau)
│       └── VPMRepInstance (Plateau-Forme)
│           └── VPMRepReference → 3DShape (Part)
├── VPMInstance (Train avant)
│   └── VPMReference (Train)
│       ├── VPMInstance (Camion) → VPMReference → 3DShape
│       ├── VPMInstance (Roue Gauche) → VPMReference → 3DShape
│       └── VPMInstance (Roue Droite) → VPMReference [MÊME que Roue Gauche]
└── VPMInstance (Train arrière) → VPMReference [MÊME que Train avant]
```

**3.1.2 — Modèle d'Occurrence (session — non persistant)**

```
VPMRootOccurrence (Racine de l'occurrence)
└── VPMOccurrence (Occurrence d'une Instance)
    └── InstanceOccurrenceOf → VPMInstance
        └── ReferenceInstanceOf → VPMReference
```

**3.1.3 — Ouverture d'un Product Reference**

```vba
' Recherche
Dim oSearchService As SearchService
Set oSearchService = CATIA.GetSessionService("Search")
Dim oDBSearch As DatabaseSearch
Set oDBSearch = oSearchService.DatabaseSearch
oDBSearch.BaseType = "VPMReference"
oDBSearch.AddEasyCriteria "PLM_ExternalID", "Skateboard*"
oSearchService.Search

' Ouverture
Dim oPLMOpenService As PLMOpenService
Set oPLMOpenService = CATIA.GetSessionService("PLMOpenService")
Dim oProductEditor As Editor
oPLMOpenService.PLMOpen oDBSearch.Results.Item(1), oProductEditor

' Accès au modèle
Dim oProductService As PLMProductService
Set oProductService = oProductEditor.GetService("PLMProductService")

' Modèle d'occurrence
Dim oRootOcc As VPMRootOccurrence
Set oRootOcc = oProductService.RootOccurrence

' Référence racine via occurrence
Dim oRootRef As VPMReference
Set oRootRef = oRootOcc.ReferenceRootOccurrenceOf

' Références depuis contenu édité
Dim oPLMEntities As PLMEntities
Set oPLMEntities = oProductService.EditedContent
Dim oRootRefAlt As VPMReference
Set oRootRefAlt = oPLMEntities.Item(1)

' UI Active Object
Dim oUIActiveObj As VPMRootOccurrence
Set oUIActiveObj = oProductEditor.ActiveObject
```

**3.1.4 — Navigation récursive dans le Product (Reference/Instance)**

```vba
' Navigation de la structure complète
Sub NavigateProdReference(oProdRef As VPMReference, iDepth As Integer)
    Dim strIndent As String
    strIndent = Space(iDepth * 2)

    ' Afficher la référence courante
    MsgBox strIndent & "REF: " & oProdRef.GetAttributeValue("PLM_ExternalID")

    ' Naviguer les RepInstances (formes associées)
    Dim oRepInsts As VPMRepInstances
    Set oRepInsts = oProdRef.RepInstances
    Dim k As Integer
    For k = 1 To oRepInsts.Count
        Dim oRepRef As VPMRepReference
        Set oRepRef = oRepInsts.Item(k).ReferenceInstanceOf
        MsgBox strIndent & "  SHAPE: " & oRepRef.Name
    Next k

    ' Naviguer les Instances enfants (récursion)
    Dim oInstances As VPMInstances
    Set oInstances = oProdRef.Instances
    Dim i As Integer
    For i = 1 To oInstances.Count
        Dim oInstance As VPMInstance
        Set oInstance = oInstances.Item(i)
        Dim oChildRef As VPMReference
        Set oChildRef = oInstance.ReferenceInstanceOf
        NavigateProdReference oChildRef, iDepth + 1
    Next i
End Sub
```

**3.1.5 — Génération de BOM (Bill of Materials)**

```vba
' Identifier les feuilles (composants sans instances) et compter
Dim lstCompList(20) As String
Dim lstCompCount(20) As Integer
Dim iIndex As Integer

Sub GetLeafAndCount(oRef As VPMReference)
    If oRef.Instances.Count = 0 Then
        ' C'est une feuille (composant)
        Dim strID As String
        strID = oRef.GetAttributeValue("PLM_ExternalID")
        Dim bFound As Boolean
        bFound = False
        Dim g As Integer
        For g = 0 To iIndex - 1
            If lstCompList(g) = strID Then
                lstCompCount(g) = lstCompCount(g) + 1
                bFound = True
                Exit For
            End If
        Next g
        If Not bFound Then
            lstCompList(iIndex) = strID
            lstCompCount(iIndex) = 1
            iIndex = iIndex + 1
        End If
    End If
End Sub
```

---

### MODULE 3.2 — Modélisateur Mécanique : 3DShape, Sketcher, Part Design
**Durée :** 2h30 | Théorie + Démonstration

#### Objectifs
- Ouvrir et créer des 3DShape par script
- Créer des esquisses et éléments 2D
- Créer des features Part Design (Pad, Pocket, Hole)
- Utiliser la sélection graphique

#### Contenu

**3.2.1 — Ouverture d'un 3DShape existant**

```vba
' Rechercher une VPMRepReference (3DShape)
Dim oSearchService As SearchService
Set oSearchService = CATIA.GetSessionService("Search")
Dim oDBSearch As DatabaseSearch
Set oDBSearch = oSearchService.DatabaseSearch
oDBSearch.BaseType = "VPMRepReference"   ' Type pour 3DShape
oDBSearch.AddEasyCriteria "PLM_ExternalID", "Piece*"
oSearchService.Search

' Ouvrir
Dim oOpenService As PLMOpenService
Set oOpenService = CATIA.GetSessionService("PLMOpenService")
Dim oEditor3DShape As Editor
oOpenService.PLMOpen oDBSearch.Results.Item(1), oEditor3DShape

' Accéder à l'objet Part
Dim oPart As Part
Set oPart = oEditor3DShape.ActiveObject
```

**3.2.2 — Création d'un nouveau 3DShape**

```vba
Dim oNewService As PLMNewService
Set oNewService = CATIA.GetSessionService("PLMNewService")
Dim oEditor3DShape As Editor
oNewService.PLMCreate "3DShape", oEditor3DShape

Dim oPart As Part
Set oPart = oEditor3DShape.ActiveObject

' Accès à la VPMRepReference parente
Dim oRepRef As VPMRepReference
Set oRepRef = oPart.Parent
```

**3.2.3 — Hiérarchie du modèle Part**

```
Part
├── Bodies (collection)
│   └── Body (Body principal, Bodies supplémentaires)
│       ├── Sketches (collection)
│       │   └── Sketch
│       │       ├── Factory2D (usine de création 2D)
│       │       ├── GeometricElements (collection)
│       │       └── Constraints (collection)
│       └── Shapes (features)
│           ├── Pad, Pocket, Hole, Fillet...
├── HybridBodies (corps hybrides, GSD)
├── Relations (Knowledge)
└── ShapeFactory (usine de features Part Design)
```

**3.2.4 — Sketcher : Création d'une esquisse**

```vba
' Récupérer un Sketch existant par nom
Dim oBody As Body
Set oBody = oPart.Bodies.Item(1)
Dim oSketch As Sketch
Set oSketch = oBody.Sketches.Item("Sketch.1")  ' Par nom

' Cycle de vie d'une esquisse
Dim oFactory2D As Factory2D
Set oFactory2D = oSketch.OpenEdition()  ' Ouvrir l'édition

' Créer des éléments géométriques 2D
Dim oLine As Line2D
Set oLine = oFactory2D.CreateLine(0, 0, 100, 0)

Dim oCircle As Circle2D
Set oCircle = oFactory2D.CreateClosedCircle(50, 50, 30)

' Ajouter des contraintes
Dim oCst As Constraint
Set oCst = oSketch.Constraints.AddMonoEltCst(catCstTypeLength, oLine)

oSketch.CloseEdition()  ' Fermer l'édition — OBLIGATOIRE
```

**3.2.5 — Part Design : Création de features**

```vba
' Créer un Pad (extrusion positive)
Dim oPad As Pad
Set oPad = oPart.ShapeFactory.AddNewPad(oSketch, 50)   ' 50mm
oPad.Name = "Pad.Boitier"

' Créer un Pocket (extrusion négative)
Dim oPocket As Pocket
Set oPocket = oPart.ShapeFactory.AddNewPocket(oSketchCavite, 20)

' Propriétés d'un Prism (Pad/Pocket)
oPad.FirstLimit          ' Limite principale
oPad.SecondLimit         ' Deuxième limite
oPad.IsSymmetric         ' Symétrique ?
oPad.DirectionType       ' Type de direction (catPrismExtrusionNormal / catPrismExtrusionCustom)

' Créer un Hole (perçage)
Dim oHole As Hole
Set oHole = oPart.ShapeFactory.AddNewHole(...)

' Mettre à jour le Part — OBLIGATOIRE après modifications
oPart.Update()

' Sauvegarder
CATIA.GetSessionService("PLMPropagateService").Save
```

**3.2.6 — Sélection graphique et navigation**

```vba
' Sélection interactive d'un Body
Dim oSelection As Selection
Set oSelection = CATIA.ActiveEditor.Selection

Dim oInputObjectType(0)
oInputObjectType(0) = "Body"
Dim strStatus As String
strStatus = oSelection.SelectElement(oInputObjectType, "Sélectionnez un Body", False)

If strStatus = "Normal" Then
    Dim oBody As Body
    Set oBody = oSelection.Item(1).Value

    ' Navigation vers Part via Parent
    Dim oBodies As Bodies
    Set oBodies = oBody.Parent       ' Body.Parent = Bodies
    Dim oPart As Part
    Set oPart = oBodies.Parent       ' Bodies.Parent = Part

    ' Récupérer un Sketch par nom (InputBox)
    Dim strSketchName As String
    strSketchName = InputBox("Nom de l'esquisse à extruder ?", "Esquisse")
    Dim oSketch As Sketch
    Set oSketch = oBody.Sketches.Item(strSketchName)

    ' Créer le Pad
    Dim iPadLimit As Integer
    iPadLimit = CInt(InputBox("Hauteur du Pad (mm) ?", "Pad"))
    Dim oPad As Pad
    Set oPad = oPart.ShapeFactory.AddNewPad(oSketch, iPadLimit)
    oPart.Update()
End If
```

---

### MODULE 3.3 — Interface Utilisateur VBA & Intégrations
**Durée :** 1h00 | Théorie + Démonstration

#### Objectifs
- Créer des formulaires VBA (UserForms)
- Intégrer des macros dans l'Action Bar
- Comprendre l'intégration VBA ↔ EKL

#### Contenu

**3.3.1 — Interfaces graphiques (UserForms VBA)**

- VBA permet de créer des formulaires complets (IHM) — impossible avec CATScript/VBScript
- Composants disponibles : TextBox, ListBox, ComboBox, Button, Label, CheckBox...
- Accès depuis l'éditeur VBA : `Insert > UserForm`

```vba
' Lancer un formulaire depuis une macro
Sub CATMain()
    UserForm1.Show vbModeless  ' Affichage non-modal
End Sub

' Dans le UserForm
Private Sub btnValider_Click()
    Dim sNom As String
    sNom = txtNom.Text
    MsgBox "Valeur saisie : " & sNom
End Sub
```

**3.3.2 — VBA et appels externes**

```vba
' VBA peut être appelé depuis CATScript et VBScript
' VBA peut être appelé depuis EKL via CATScript/VBScript
' VBA peut exécuter des Actions EKL
' VBA peut lancer des fichiers externes et des commandes DOS

' Exemple : Lancer Notepad
Shell "notepad.exe C:\Temp\rapport.txt", vbNormalFocus
```

**3.3.3 — Ajout d'icônes et commandes personnalisées**

Rappel du Module 1.3.8 — procédure complète :
1. `Me Menu > Preferences > Customize`
2. Onglet Sections : nouvelle section
3. Onglet Commands : catégorie Macros
4. Propriétés : titre, alias, icône
5. Ajout dans la section custom

---

### TP 3 — Navigation Produit + Export XML
**Durée :** 1h00 | Pratique guidée

#### Basé sur les Exercices 16 et 17 du cours Dassault

**Exercice 16 : Navigation produit (30 min)**
- Créer une macro VBA qui navigue la structure Product
- Afficher la hiérarchie complète avec noms et révisions dans un MsgBox

**Exercice 17 : Export XML du BOM (30 min)**
- À partir de la navigation précédente, stocker la structure dans une Collection
- Créer une IHM (UserForm) avec :
  - ListBox : affichage de la collection
  - TextBox : nom de l'Occurrence racine
  - Bouton "..." : recherche du dossier de destination
  - Bouton "Générer XML" : créer et sauvegarder le fichier XML
- Exemple de structure XML généré :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BOM>
  <Component id="Skateboard" revision="A">
    <Component id="Plateau" revision="A" qty="1"/>
    <Component id="Train" revision="B" qty="2">
      <Component id="Camion" revision="A" qty="1"/>
      <Component id="Roue" revision="A" qty="2"/>
    </Component>
  </Component>
</BOM>
```

---

### TP 4 — Automatisation de la Création de Géométrie
**Durée :** 30 min | Pratique guidée

#### Basé sur l'Exercice 18 du cours Dassault

**Objectif :**
1. Créer une macro VBA pour automatiser la création d'un cylindre
2. Ajouter une section personnalisée dans l'Action Bar
3. Ajouter une commande "Créer Cylindre" qui :
   - Demande le Rayon (InputBox)
   - Demande la Hauteur (InputBox)
   - Crée une esquisse circulaire
   - Génère un Pad (cylindre)

---
---

# JOUR 4 — Python pour l'Automation CATIA V6
## Durée : 7 heures

---

### MODULE 4.1 — Introduction à Python dans 3DEXPERIENCE
**Durée :** 1h30 | Théorie

#### Objectifs
- Comprendre la place de Python dans l'écosystème 3DEXPERIENCE
- Connaître les différences fondamentales entre VBA et Python
- Configurer l'environnement Python

#### Contenu

**4.1.1 — Python dans 3DEXPERIENCE**

- Disponible depuis **R2017x** dans les Applications de Simulation
- Version recommandée : **Python 3.10** (versions 2.7 et 3.7 abandonnées)
- Même modèle objet que VBA — mêmes API, même hiérarchie
- Accès via commande `Tools > Python` dans les apps de simulation
- Configuration : `Preferences > Python Settings`
  - Python Installation (chemin vers l'interpréteur)
  - Library Path (PYTHONPATH pour modules personnalisés)
  - Editor Path (ex. PyCharm)

**4.1.2 — Import et accès à l'application**

```python
from com3dx import *
CATIA = get3dxClient()
ENUM = win32com.client.constants   # Pour les énumérations
```

**4.1.3 — Tableau comparatif VBA → Python**

| Aspect | VBA | Python |
|---|---|---|
| Sensibilité casse | Non | **Oui** |
| Déclaration variable | `Dim x As Type` | Aucune déclaration |
| Affectation objet | `Set x = objet` | `x = objet` (pas de Set) |
| Fin de bloc | `End If / End Sub` | Indentation |
| Définition fonction | `Sub...End Sub` | `def ...:` |
| Sortie de fonction | `Exit Sub` / `Exit Function` | `return` / `return valeur` |
| Boucle for each | `For Each x In coll...Next` | `for x in coll:` |
| Sortie de boucle | `Exit For` | `break` |
| Saut d'itération | `GoTo` | `continue` |
| Type chaîne | `String` / `CATBSTR` | `str` (unicode) |
| Type nombre | `double` | `float` |
| Tableau | `Array()` | Tuple `()` ou Liste `[]` |

**4.1.4 — Gestion des SafeArrays / tableaux**

| Opération | VBA | Python |
|---|---|---|
| Tableau en entrée/sortie | `ReDim arr(2)` + appel méthode | `arr = methode((0,0,0))` |
| Tableau en entrée | `Translate Array(10, 20, 30)` | `Translate((10, 20, 30))` |
| Propriété get tableau | `Dim pts()` + `pts = obj.Points` | `pts = obj.Points` |
| Propriété set tableau | `obj.Points = Array(1,2,3)` | `obj.Points = (1, 2, 3)` |

---

### MODULE 4.2 — Python Pratique : Même API, Autre Syntaxe
**Durée :** 2h00 | Théorie + Démonstration

#### Objectifs
- Transposer des scripts VBA en Python
- Accéder aux services PLM en Python

#### Contenu

**4.2.1 — Accès aux objets fondamentaux**

```python
from com3dx import *
CATIA = get3dxClient()

# Editor actif
oEditor = CATIA.ActiveEditor

# Objet racine actif
oActiveObject = CATIA.ActiveEditor.ActiveObject

# Service de session
oSearchService = CATIA.GetSessionService("Search")

# Service d'éditeur
oProductService = oEditor.GetService("PLMProductService")
```

**4.2.2 — Recherche et ouverture**

```python
from com3dx import *
CATIA = get3dxClient()

# SearchService
oSearchService = CATIA.GetSessionService("Search")
oDBSearch = oSearchService.DatabaseSearch
oDBSearch.BaseType = "VPMReference"
oDBSearch.AddEasyCriteria("PLM_ExternalID", "Moteur*")
oSearchService.Search

# Résultats
cResults = oDBSearch.Results
print(f"Résultats : {cResults.Count}")

# Ouverture
oPLMOpenService = CATIA.GetSessionService("PLMOpenService")
oEditor = oPLMOpenService.PLMOpen(cResults.Item(1))
```

**4.2.3 — Navigation produit**

```python
oProductService = oEditor.GetService("PLMProductService")
oRootOcc = oProductService.RootOccurrence
oRootRef = oRootOcc.ReferenceRootOccurrenceOf

def navigate(ref, depth=0):
    indent = "  " * depth
    print(f"{indent}REF: {ref.GetAttributeValue('PLM_ExternalID')}")

    # Représentations
    for k in range(1, ref.RepInstances.Count + 1):
        rep_ref = ref.RepInstances.Item(k).ReferenceInstanceOf
        print(f"{indent}  SHAPE: {rep_ref.Name}")

    # Instances enfants
    for i in range(1, ref.Instances.Count + 1):
        child_inst = ref.Instances.Item(i)
        child_ref = child_inst.ReferenceInstanceOf
        navigate(child_ref, depth + 1)

navigate(oRootRef)
```

**4.2.4 — Création de géométrie (Simulation context)**

```python
from com3dx import *
CATIA = get3dxClient()
ENUM = win32com.client.constants

# Accès à l'éditeur et aux services
myEditor = CATIA.ActiveEditor
myProdService = myEditor.GetService("PLMProductService")

# Contenu édité
myEntities = myProdService.EditedContent
myModel = myEntities.Item(1)

# Publications
myPublications = myModel.Publications
myPublication = myPublications.GetItem("BodyPublication")

# Créer une représentation FEM
myPrdRepFactory = myModel.GetItem("SimPrdRepFactory")
myRepRef = myPrdRepFactory.CreatePrdRep("FEM")

# Accès FEM Root
myFEMRoot = myRepRef.GetItem("SimFemRoot")
myFEMRoot.AddAssociatedRep(myPublication)

# Créer un maillage
myMeshSet = myFEMRoot.GetSet("SimNodesElements")
myMeshPart = myMeshSet.MeshParts.Add("CATFmtOctree3DRulesMesher")
myMeshPart.AddSupport(myPublication)
myMeshPart.Update
```

**4.2.5 — Vérification du type d'un objet**

```python
# Équivalent de TypeName() en VBA
print(typename(oEditor))         # → 'Editor'
print(typename(oActiveObject))   # → 'VPMRootOccurrence' ou 'Part'
```

---

### MODULE 4.3 — Cas d'Usage Python & Comparaison Stratégique
**Durée :** 2h00 | Théorie + Démonstration

#### Objectifs
- Identifier les cas où Python est préférable à VBA
- Intégrer Python avec des outils externes

#### Contenu

**4.3.1 — Quand choisir Python vs VBA ?**

| Critère | VBA | Python |
|---|---|---|
| Système d'exploitation | Windows uniquement | Multi-plateforme |
| GUI avancées | UserForms natifs | PyQt, Tkinter, etc. |
| Ecosystème bibliothèques | Limité | Très riche (pandas, numpy, requests...) |
| Intégration Excel/Office | Native via COM | xlrd, openpyxl |
| Appels API REST / Web Services | Possible mais complexe | `requests` — natif et simple |
| Débogage | IDE VBA intégré | PyCharm, VS Code |
| Contexte Simulation | Non recommandé | Recommandé (Dassault) |
| Courbe d'apprentissage | Familier pour les utilisateurs Office | Plus universelle |

**4.3.2 — Python + API REST (appel de services 3DEXPERIENCE)**

```python
import requests

# Authentification 3DSpace (exemple conceptuel)
session = requests.Session()
# ... (authentification 3DPassport)

# Appel d'un Web Service
response = session.get(
    "https://server/3dspace/resources/v1/modeler/dseng/dseng:Part",
    params={"$mask": "dskern:Mask.Default"},
    verify=False
)
data = response.json()
print(data)
```

**4.3.3 — Python + Excel (rapport automatique)**

```python
import openpyxl
from com3dx import *
CATIA = get3dxClient()

# Générer un rapport BOM dans Excel
wb = openpyxl.Workbook()
ws = wb.active
ws.title = "BOM"
ws.append(["Composant", "Révision", "Quantité"])

# ... (navigation produit)
# ws.append([nom, revision, count])

wb.save("C:/Temp/BOM_Export.xlsx")
print("Rapport Excel généré.")
```

**4.3.4 — Python + EKL (intégration avancée)**

```python
# Appel d'une librairie EKL depuis Python (via VBScript intermédiaire)
# Selon la documentation : Python → VBScript → EKL
# Cette intégration est supportée via l'architecture existante
```

---

### TP 5 — Script Python Équivalent à une Macro VBA
**Durée :** 1h30 | Pratique guidée

**Objectif :** Réécrire en Python la macro de navigation produit développée en Jour 3.

**Script Python à produire :**

```python
from com3dx import *

def main():
    CATIA = get3dxClient()

    # Recherche d'un Product
    oSearch = CATIA.GetSessionService("Search")
    oDB = oSearch.DatabaseSearch
    oDB.BaseType = "VPMReference"
    oDB.AddEasyCriteria("PLM_ExternalID", input("Nom du Product ? "))
    oSearch.Search

    results = oDB.Results
    if results.Count == 0:
        print("Aucun résultat.")
        return

    # Ouverture
    oOpen = CATIA.GetSessionService("PLMOpenService")
    oEditor = oOpen.PLMOpen(results.Item(1))

    oProductSvc = oEditor.GetService("PLMProductService")
    oRootOcc = oProductSvc.RootOccurrence
    oRootRef = oRootOcc.ReferenceRootOccurrenceOf

    # Navigation et BOM
    bom = {}

    def navigate(ref, depth=0):
        indent = "  " * depth
        name = ref.GetAttributeValue("PLM_ExternalID")
        print(f"{indent}{name}")

        if ref.Instances.Count == 0:
            bom[name] = bom.get(name, 0) + 1

        for i in range(1, ref.Instances.Count + 1):
            child = ref.Instances.Item(i).ReferenceInstanceOf
            navigate(child, depth + 1)

    navigate(oRootRef)

    print("\n=== BOM ===")
    for comp, qty in bom.items():
        print(f"{comp} : {qty}")

main()
```

---

### MODULE 4.4 — Récapitulatif et Bilan de la Formation
**Durée :** 30 min

#### Contenu
- Synthèse des 4 jours : points clés, pièges à éviter
- Comparatif final V5 vs V6 : tableau récapitulatif complet
- Roadmap d'apprentissage recommandée post-formation
- Ressources à consulter :
  - DSYAutomation (doc API officielle R2026x)
  - Portail CAA / 3DS Developer Community
  - Lesson 6 du cours VPLM Development Implementation Practices
- Questions / Réponses

---
---

# ANNEXES

## Annexe A — Tableau de Migration V5 → V6 Complet

| Objet/Méthode V5 | Objet/Méthode V6 | Notes |
|---|---|---|
| `CATIA.Documents` | `SearchService` | Recherche en base |
| `CATIA.ActiveDocument` | `CATIA.ActiveEditor` | |
| `Documents.Open(path)` | `PLMOpenService.PLMOpen(entity, editor)` | |
| `Document.Close()` | Fermeture via UI / editor | |
| `Document.Save()` / `Document.SaveAs()` | `PLMPropagateService.Save` | |
| `PartDocument` | `Editor` + `ActiveObject` → `Part` | |
| `ProductDocument` | `Editor` + `PLMProductService` | |
| `DrawingDocument` | `Editor` + `GetItem("DrawingRoot")` | |
| `Document.Selection` | `Editor.Selection` | |
| `Document.Cameras` | `Editor.GetService("VisuService").Cameras` | |
| `GetWorkbench()` | `GetService()` (Session ou Editor) | |
| `SendToService` | Supprimé — utiliser Export 3DXML | |
| Macros dans `.CATPart` | Macro Libraries en base 3DSpace | |
| Typage CATScript fort | VBScript sans typage (recommandé) | |

---

## Annexe B — Objets PLM Clés de l'API

### Infrastructure
| Objet | Description |
|---|---|
| `Application` (CATIA) | Racine — accès à tout |
| `Editor` | Contrôleur d'édition (remplace Document) |
| `Selection` | Gestion des sélections |
| `SelectedElement` | Élément sélectionné |
| `SearchService` | Recherche en base PLM |
| `DatabaseSearch` | Constructeur de requête |
| `PLMOpenService` | Ouverture d'objets PLM |
| `PLMNewService` | Création de nouveaux objets PLM |
| `PLMPropagateService` | Sauvegarde en base |
| `PLMEntity` | Objet PLM générique |
| `PLMEntities` | Collection de PLMEntity |

### Modèle Produit VPM
| Objet | Description |
|---|---|
| `VPMReference` | Définition d'un composant produit |
| `VPMInstance` | Instance d'un composant dans un assemblage |
| `VPMRepReference` | Pointeur vers la géométrie (3DShape) |
| `VPMRepInstance` | Instance de représentation |
| `VPMRootOccurrence` | Occurrence racine (modèle session) |
| `VPMOccurrence` | Occurrence d'une instance (modèle session) |
| `PLMProductService` | Services dédiés au modèle Produit |
| `VPMInstances` | Collection de VPMInstance |
| `VPMRepInstances` | Collection de VPMRepInstance |

### Modèle Mécanique / Part Design
| Objet | Description |
|---|---|
| `Part` | Objet racine d'un 3DShape |
| `Body` | Corps de Part Design |
| `Bodies` | Collection de Body |
| `Sketch` | Esquisse 2D |
| `Sketches` | Collection de Sketch |
| `Factory2D` | Usine de création géométrique 2D |
| `GeometricElements` | Collection d'éléments géométriques |
| `Constraints` | Collection de contraintes |
| `ShapeFactory` | Usine de features Part Design |
| `Pad` | Extrusion positive |
| `Pocket` | Extrusion négative |
| `Hole` | Perçage |
| `Prism` | Classe abstraite (Pad, Pocket) |

---

## Annexe C — Exercices Officiels Dassault (Référence)

| Exercice | Durée | Description |
|---|---|---|
| Ex. 13 | 30 min | CATScript : Sélection Instance, affichage détails (Jour 1 — TP1) |
| Ex. 14 | 45 min | CATScript : Récupérer nom Product, sauvegarder fichier (Jour 2 — TP2) |
| Ex. 15 | 45 min | EKL + VBScript : Récupérer nom d'une vue de Drawing |
| Ex. 16 | 30 min | VBA : Navigation structure Produit + affichage (Jour 3 — TP3) |
| Ex. 17 | 45 min | VBA : Export XML de la structure Produit + UI (Jour 3 — TP3) |
| Ex. 18 | 30 min | VBA : Automatisation création géométrie cylindre (Jour 3 — TP4) |

---

## Annexe D — Ressources et Documentation

### Documentation officielle
- **DSYAutomation** — 3DEXPERIENCE Native Apps Automation R2026x
  - `English/CAAScdInfInfrastructure/` : Infrastructure, Application, Editor, Services
  - `English/CAAScdProduct/` : Modèle Produit, VPM
  - `English/CAAScdMechMod/` : Modèle Mécanique, Part, Body
  - `English/CAAScdPriPartDesign/` : Part Design (Pad, Pocket, Hole...)
  - `English/CAAScdSkiSketcher/` : Sketcher
  - `English/CAAScdDriDrafting/` : Drafting
  - `English/CAAScdServerAccess/` : Services PLM (Search, Open, Save)
  - `English/CAAScdAdoption/` : Guide de migration V5 → V6
- **VPLM Development Implementation Practices R2021x** — Lesson 6 (pages 290-348)
- **3DS Developer Community** : portail CAA officiel

### Points d'accès dans 3DEXPERIENCE
- `Action Bar > Tools > Macros...` (ou Alt+F8)
- `Macros > Macro Libraries...`
- `Me Menu > Preferences > Customize`
- `Preferences > Python Settings`
