<template>
  <div class="root home">
    <section class="first">
      <div class="container">
        <div class="text">
          <h1>Culturen van overal ter wereld. Door de gehele geschiedenis </h1>
          <p>Maecenas nec odio et ante tincidunt tempus. Curabitur suscipit suscipit tellus. Aenean imperdiet. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Ut a nisl id ante tempus hendrerit.</p>
          <Button v-bind:href="buttonCont.link" v-bind:btnText="buttonCont.btnText"></Button>
        </div>
        <img class="rotating" src="@/assets/donut.svg" alt="donut chart">
      </div>
    </section>
    <section class="second">
      <div class="container">
        <div class="text">
          <p>Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
          <ul class="bullets">
            <li class="bullet"> Één van de oudste volkenkundige musea ter wereld.</li>
            <li class="bullet">Geschikt voor alle leeftijden.</li>
            <li class="bullet">Honderden verschillende nationaliteiten en culturen.</li>
            <li class="bullet">Een enorme collectie.</li>
          </ul>
        </div>
        <img src="@/assets/jpg/museum-front.jpg" alt="The front side of the museum Volkenkunde in Leiden">
      </div>
    </section>
  </div>

</template>

<script>
  import Button from './Button'

export default {
  name: 'Home',
  data () {
    return {
      // The link and btnTxt are passed to the props and into the component by stating them in the data function
      buttonCont: {
        link: '/visualisations',
        btnText: "Neem mij mee door de collecties"
      }
    }
  },
  components: {
    Button
  }
}
</script>

<style lang="scss" scoped>
  @import '../css/_main.scss';

  .first {
    background-color: $light-blue;
    padding-top: 2em;
    padding-bottom: 4em;

    .container {
      display: flex;
      justify-content: flex-start;

      .text {
        max-width: 450px;
        margin: auto 10vw auto 0;

        h1 {
          font-size: 200%;
          font-weight: lighter;
          margin-bottom: 20px;
        }

        p {
          margin-bottom: 20px;
        }
      }

      img {
        width: 350px;
      }
    }
  }

  .second {
    .container {
      display: flex;
      padding: 0;

      .text {
        width: 50%;
        padding-top: 3em;
        padding-left: 2em;
        padding-right: 2em;
        transform: translateY(-50px);
        background-color: #fff;

        p:first-of-type {
          font-family: 'Noto Serif', serif;
          margin-bottom: 30px;
        }

        ul {
          list-style-type: none;

          li {
            position: relative;
            margin: 5px 0 5px 30px;
            margin-left: 30px;
            line-height: 2;

            &:hover::before {
              animation: wiggle .5s;
            }

            &::before {
              display: inline-block;
              position: absolute;
              content: '';
              top: 3px;
              left: -35px;
              background-image: url('../assets/bullet.svg');
              background-repeat: no-repeat;
              background-position: center;
              background-size: 24px 24px;
              height: 28px;
              width: 28px;
            }
          }
        }
      }

      img {
        width: 50%;
      }
    }
  }

// animation for rotating
@-webkit-keyframes rotating {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {

    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.rotating {
  animation: rotating 40s linear infinite;
}

// animation for blurb wiggle
@keyframes wiggle {
  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(5px);
  }

  50% {
    transform: translateX(0);
  }

  75% {
    transform: translateX(5px);
  }

  100% {
    transform: translateX(0);
  }
}
</style>
