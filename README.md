Data Visualisatie tech track - Coen Mathijssen - ID3
# The lifecycle in Indonesia
<img width="1280" alt="Screenshot 2019-10-29 at 12 01 25" src="https://user-images.githubusercontent.com/43337909/67764689-cc159080-fa4a-11e9-9c40-ca530c4bec89.png">


## Concept
For my concept I want to take the user through the full life-cycle of a native Indonesian through the years. In the data I found four main themes in life:
- Birth
- Becoming an ‘adult’ for men / fertility
- Marrying
- Death - burial / cremation / other rituals

I want to display these themes in the form of a lifecycle. When you click on one of these themes, the browser zooms in on the theme and displays the related subjects around that theme. When you click on a subject, you are able to see the corresponding objects. Secondly, there will be a timeline to see how these rituals change overtime. I’m also considering using a map to differentiate the areas in Indonesia. 

## Features 
- [vue router](https://github.com/Coenmathijssen/frontend-applications/wiki/vue-router)
- [sass](https://github.com/Coenmathijssen/frontend-applications/wiki/sass-loader-config)
- [filter en sort](https://github.com/Coenmathijssen/frontend-applications/wiki/Filteren-en-sorteren)
- [DOM manipulation](https://github.com/Coenmathijssen/frontend-applications/wiki/DOM-manipulatie)
- Data fetching and storing

## Built with
- [API](https://collectie.wereldculturen.nl/) - from the museum
- [SPARQL](https://www.w3.org/TR/rdf-sparql-query/) - Written language for API database
- [VueJS javascript framework](https://vuejs.org/) - A Javascript framework
- [webpack](https://webpack.js.org/) - For compiling and bundling my JS
- [Node](https://nodejs.org/en/) - For packages and isnstalls

## Install
1. For my project I used the VUE Javascript framework to render my pages. Clone my project by copying the link under the 'clone or download'-button. Now open your terminal, create and cd into a new directory and type the following command.

`git clone https://github.com/Coenmathijssen/frontend-applications.git`

2. Run the following command to install all the necessery dependencies and devdependencies:
`npm install`

3. Run the following code to run the webapp live through localhost on your computer. 
`npm run serve`
You can change these commands under the scripts object in the package.json file.

4. Go to the following URL's in the browser to access the local server
```
- Local:   http://localhost:8080/
- Network: http://172.16.1.175:8080/
```

## API JSON format
```
0: {
   cho: {
      type: "uri",
      value: "https://hdl.handle.net/20.500.11840/160928"
   },
   desc: {
      type: "literal",
      value: "Dit houten huispaneel is een van de weinige overgebleven tastbare voorwerpen van de koppensnellerspraktijken in Mentawai. Het beeldt een slachtoffer uit die gedood is bij een jacht. Het is gehakt uit tropisch hardhout, de details zijn met een mes uitgesneden. Het is onderdeel geweest in de achterste wand van de voorkamer in een uma (traditioneel familiehuis) in Taileleu in Zuid-Siberut. Reimar Schefold heeft het in 1967 verworven van de 60-jarige oude zoon van de maker, die vermoedde dat het paneel is gemaakt kort voordat hij geboren werd. Het originele huis was in verval geraakt en de zoon had het bewaard om het in een nieuw te bouwen uma te hergebruiken. Kinderen hadden er intussen meegespeeld, waardoor het oppervlak op verschillende plekken beschadigd is geraakt."
   },
   img: {
      type: "literal",
      value: "https://collectie.wereldculturen.nl/cc/imageproxy.ashx?server=localhost&port=17581&filename=images/Images/NMVW//7085-2_d056129.jpg"
   },
   place: {
    type: "uri",
    value: "https://hdl.handle.net/20.500.11840/termmaster19743"
   },
   placeName {
    type: "literal",
    value: "Siberut (eiland)"
   },
   title: {
      type: "literal",
      value: "Paneel",
      xml:lang: "ned"
   },
  1: {
    Same format
  }
```

## API and SPARQL
For my projects I used an API owned by the 'Stichting Nationaal Museum van Wereldculturen'. The API uses SPARQL to fetch and filter data from the API.
[Link to the used API](https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-04/sparql)

For my specific project, I used a SPARQL querry to get all the data containing keywords corresponding with the lifecycle. I used the following querry:

`PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX dc: <http://purl.org/dc/elements/1.1/>
    PREFIX dct: <http://purl.org/dc/terms/>
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
    PREFIX edm: <http://www.europeana.eu/schemas/edm/>
    PREFIX foaf: <http://xmlns.com/foaf/0.1/>
    SELECT * WHERE {


    <https://hdl.handle.net/20.500.11840/termmaster7745> skos:narrower* ?place .

     ?cho dc:title ?title .
     ?cho edm:isShownBy ?img .
     ?cho dct:spatial ?place .
     ?place skos:prefLabel ?placeName .
     ?cho dc:description ?desc .

     FILTER (CONTAINS (?title, "overlijden") OR
             CONTAINS (?title, "dood") OR
             CONTAINS (?title, "sterfte") OR
             CONTAINS (?title, "ziekte") OR
             CONTAINS (?title, "begravenis") OR
             CONTAINS (?title, "begraven") OR
             CONTAINS (?desc, "dood")
     )
     FILTER langMatches(lang(?title), "ned") # alleen Nederlandstalige cho's
    } LIMIT 150`
    
The SPARQL query fetches data which contain the keywords 'overlijden', 'dood', 'sterfte', etc. in the title. It will only fetch items with a dutch title and description. With the term master I make sure to only get data from Indonesia. I need all these items for my lifecycle.

## Credits
- Credits to Ivo for helping me write my SPARQL querry to fetch the correct data from the API
- Credits to Laurens for creating an VUE example to fetch data from the API
- Credits to Wiebe for helping me with DOM manipulation in VUE
- Credits to Roy for working together on filter and sort
