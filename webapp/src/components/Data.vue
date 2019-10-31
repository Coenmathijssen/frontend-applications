 <template>
  <div class="root data">
    <h1>Filter op plek</h1>
    <div class="filter-container">
      <button class="filter" v-on:click="noFilter">All</button>
      <button class="filter" v-on:click="filterToEnggano">Enggano</button>
      <button class="filter" v-on:click="filterToAsmat">Asmat</button>
      <button ref="button" class="filter off" v-on:click="alfabeticalSort" v-bind:class="{ active: whichSort }">{{ alfabetical }}</button>
    </div>
    <div class="data-container">
      <article class="object" v-bind:key="data.id" v-for="data in filteredData">
        <div class="container">
          <img v-if="data.img.value" v-bind:src="data.img.value" v-bind:alt="data.img.alt">
        </div>
          <h1>{{ data.title.value }}</h1>
          <p>{{ data.placeName.value }}</p>
      </article>
    </div>
  </div>
 </template>
<script>
/*eslint 'no-console':0*/

export default {
  name: 'Data',
  data () {
    return {
      apiData: null, // The fetched data will be stored here
      filteredData: null, // The filtered data will be stored here and will change live in the template if changed
      whichSort: false, // WhichSort will be toggled to trigger alfabetical or reversed alfabetical with true or false
      alfabeticalReversed: 'Soorteer plaats omgekeerd alfabetisch', // Dynamic content of toggle
      alfabetical: 'Soorteer plaats alfabetisch' // Dynamic content of toggle
    }
  },
  // Fetching the data
  mounted () {
    let url = "https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-04/sparql"

    // Used SPARQL query. Ivo helped me a bit with this one
    const query = `
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
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
    } LIMIT 150
    `

    // The base of this code is Laurens. I changed it to suit my use case
    runQuery(url, query)
    var self = this
    function runQuery (url, query) {
      //Test if the endpoint is up and print result to page
      fetch(url)
      // Call the url with the query attached, output data
      fetch(url + '?query=' + encodeURIComponent(query) + '&format=json')
        .then(res => res.json())
        .then(json => {
          let fetchedData = json.results.bindings
          let apiData = json.results.bindings
          console.log('apiData: ', apiData)

          // Replace "http" in the img url to "https". Wiebe helped me with this code.
          fetchedData.forEach(function(i){
            i.img.value = i.img.value.replace("http", "https")
          })

          self.apiData = fetchedData
          self.filteredData = self.apiData
        })
    }
  },
  methods: {
    noFilter() {
      this.filteredData = this.apiData // When noFilter runs the filteredData will be equal to all fetched Data
    },
    // Will loop through all data and push all data with this exact placeName to the filteredData array. Filtered dataArray will then be stored in the data function, so it becomes available outside of this function
    filterToEnggano() {
      let filteredData = []
      this.apiData.forEach(function (data) {
        if(data.placeName.value === "Enggano (eiland)"){
          filteredData.push(data)
        }
      })
      this.filteredData = filteredData
    },
    // Will loop through all data and push all data with this exact placeName to the filteredData array. Filtered dataArray will then be stored in the data function, so it becomes available outside of this function
    filterToAsmat() {
      let filteredData = []
      this.apiData.forEach(function (data) {
        if(data.placeName.value === "Asmat (regentschap)"){
          filteredData.push(data)
        }
      })
      this.filteredData = filteredData
    },
    // whichSort boolean will be switched when the function runs. If it's true, the array of filteredData will be sorted alfabetically, if it's false it will be sorted reversed alfabetically.
    alfabeticalSort() {
      this.whichSort = !this.whichSort
      let filteredData = this.filteredData
      if(this.whichSort === true) {
        filteredData.sort((a, b) => (a.placeName.value > b.placeName.value) ? 1 : -1)
        // https://stackoverflow.com/questions/37465289/how-to-set-timeout-in-a-vuejs-method/37465651
        // The textContent will be changed to the corresponding data. Here a timer is applied so the button can first grow larger before adding more text.
        setTimeout(function() {
        this.$refs.button.textContent = this.alfabeticalReversed
      }.bind(this), 500)
      // whichSort boolean will be switched when the function runs. If it's true, the array of filteredData will be sorted alfabetically, if it's false it will be sorted reversed alfabetically.
      } else {
        this.$refs.button.textContent = this.alfabetical
        console.log(this.alfabetical)
        filteredData.sort((a, b) => (a.placeName.value < b.placeName.value) ? 1 : -1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../css/_main.scss';

  .root.data {
    padding-top: 20vh;
    background-color: $cream;
    min-height: 100vh;
  }

  h1:first-of-type {
    color: $green;
    text-align: center;
  }

  .filter-container {
    display: flex;
    justify-content: center;
    padding: 30px 0;

    button {
      background-color: $red;
      padding: 10px 20px;
      margin: 0 5px;
      border: none;
      border-radius: 8px;
      font-family: 'lato', arial, sans-serif;
      font-size: 1em;

      &:last-of-type {
        position: relative;
        padding-right: 50px;
        background-color: $green;
        color: #fff;
        width: 270px;
        transition: width .5s;

        &::after {
          display: inline-block;
          position: absolute;
          content: '';
          top: 0;
          right: 0;
          background-image: url('../assets/bullet.svg');
          background-color: white;
          background-repeat: no-repeat;
          background-position: center;
          background-size: 20px 20px;
          height: 35px;
          width: 35px;
          border: solid 2px $green;
          border-radius: 8px;
          transform: rotate(270deg);
          transition: all .5s;
        }
      }

      &:hover {
        cursor: pointer;
      }

      &:focus {
        outline: none;
      }
    }

    button.active {
      width: 352px;
      transition: all .5s;

      &:after {
        transform: rotate(90deg);
        transition: all .5s;
      }
    }
  }

  .data-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 40px;

    .object {
      position: relative;
      min-width: 500px;
      max-width: 30%;
      margin-bottom: 10vh;
      border-radius: 8px;

      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        max-height: 500px;

        img {
          display: block;
          position: relative;
          flex-shrink: 0;
          min-width: 100%;
          min-height: 100%
        }

      }

      h1 {
        text-align: left;
        position: absolute;
        background-color: $red;
        color: $black;
        bottom: 20px;
        left: 10px;
        padding: 3px 6px;
      }

      p {
        position: absolute;
        background-color: $light-blue;
        color: $black;
        bottom: -15px;
        left: 10px;
        padding: 3px 6px;
      }
    }
  }
</style>
