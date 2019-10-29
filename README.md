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

## Framework and API
1. For my project I used the VUE Javascript framework to render my pages. How to use:
- Clone my project by copying the link under the 'clone or download'-button. Now open your terminal, create and cd into a new directory and type the following command.

`git clone https://github.com/Coenmathijssen/frontend-applications.git`

- Run the following command to install all the necessery dependencies and devdependencies:
`npm install`
- Run the following code to run the webapp live through localhost on your computer. 
`npm run serve`
You can change these commands under the scripts object in the package.json file.

2. For my projects I used an API owned by the 'Stichting Nationaal Museum van Wereldculturen'. The API uses SPARQL to fetch and filter data from the API.
[Link to the used API](https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-04/sparql)

For my specific project, I used a SPARQL querry to get all the data containing keywords corresponding with the lifecycle. I used the following querry:

`PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX dc: <http://purl.org/dc/elements/1.1/>
    PREFIX dct: <http://purl.org/dc/terms/>
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
    PREFIX edm: <http://www.europeana.eu/schemas/edm/>
    PREFIX foaf: <http://xmlns.com/foaf/0.1/>
    SELECT * WHERE {
     ?cho dc:title ?title .
     ?cho edm:isShownBy ?img .
     OPTIONAL { ?cho dc:description ?desc .}
     FILTER (CONTAINS (?title, "overlijden") OR
             CONTAINS (?title, "dood") OR
             CONTAINS (?title, "sterfte") OR
             CONTAINS (?title, "ziekte") OR
             CONTAINS (?title, "begravenis") OR
             CONTAINS (?title, "begraven") OR
             CONTAINS (?desc, "dood")
     )
    } LIMIT 10`

## Credits
- Credits to Ivo for helping me write my SPARQL querry to fetch the correct data from the API
- Credits to Laurens for creating an VUE example to fetch data from the API
- Credits to Wiebe for helping me a little bit with DOM manipulation in VUE
