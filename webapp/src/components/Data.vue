 <template>
  <div class="root data">
    <div class="data-container">
      <div class="object" v-bind:key="apiData.id" v-for="data in apiData">
          <img v-if="data.img.value" v-bind:src="data.img.value" v-bind:alt="data.img.alt">
          <p>{{ data.title.value }}</p>
      </div>
    </div>
  </div>
 </template>
<script>
export default {
  name: 'Data',
  props: {
    fetchedData: Object
  },
  data () {
    return {
      apiData: null
    }
  },
  // FETCH THE DATA
  mounted () {
    var url = "https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-04/sparql"

    //Note that the query is wrapped in es6 template strings to allow for easy copy pasting
    const query = `
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
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
    } LIMIT 10
    `
    runQuery(url, query)
    var self = this
    function runQuery (url, query) {
      //Test if the endpoint is up and print result to page
      // (you can improve this script by making the next part of this function wait for a succesful result)
      fetch(url)

      // .then(res => console.log('Status of API: ', res.status))
      // Call the url with the query attached, output data
      fetch(url + '?query=' + encodeURIComponent(query) + '&format=json')
        .then(res => res.json())
        .then(json => {
          // console.log(json)
          // console.table(json.results.bindings)
          var fetchedData = json.results.bindings
          console.log(fetchedData)

          // Replace "http" in the img url to "https"
          //
          // fetchedData is een variabele die het resultaat uit de api haalt,
          // dit doe ik voordat ik het aan het data element aan de pagina mee geef.
          fetchedData.forEach(function(i){
            i.img.value = i.img.value.replace("http", "https")
          })

          self.apiData = fetchedData
        })

        // Rewrite each result to be flat and only contain interesting values
        // .then (apiData => {
        //   console.log('apiData:', apiData)
        //   return apiData.map((apiData, index) => {
        //     return {
        //       //I've added an id value because that helps Vue distinguish different items later on
        //       id: index,
        //       url: apiData.obj.value,
        //       type: apiData.obj.type,
        //       //If you're confused about this next line, try experimentig with split+pop on a string
        //       // in your browser
        //       theme: apiData.obj.value.split(this.prefixes.nmvw).pop(),
        //       label: apiData.objLabel.value
        //     }
        //   })
        // })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../css/_main.scss';

  .data-container {
    display: flex;
    flex-wrap: wrap;

    .object {
      max-width: 33.3%;
      margin: 30px 0;

      img {
        position: relative;
        left: 50%;

        max-width: 33.3%;
        margin: 0 auto;
      }
    }
  }
</style>
