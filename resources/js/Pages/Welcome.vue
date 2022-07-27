<template>
    <div class="banner-image">
        <div class="cover">
            <h1>Welcome</h1>
            <p>Coming soon!</p>

            <div class="timer">
                <div class="timer-digit">
                    <p>{{ days }}</p>
                    <p>Days</p>
                </div>
                <div class="timer-digit">
                    <p>{{ hours }}</p>
                    <p>Hours</p>
                </div>
                <div class="timer-digit">
                    <p>{{ minutes }}</p>
                    <p>Minutes</p>
                </div>
                <div class="timer-digit">
                    <p>{{ seconds }}</p>
                    <p>Seconds</p>
                </div>
            </div>
            <div class="social">
                <a class="social-icon" href="https://linkedin.com" >
                    <img src="/storage/icons/linked-in.png" alt="">
                </a>
                <a class="social-icon" href="https://facebook.com" >
                    <img src="/storage/icons/facebook.png" alt="">
                </a>
                <a class="social-icon" href="https://twitter.com" >
                    <img src="/storage/icons/twitter.png" alt="">
                </a>
                <a class="social-icon" href="https://instagram.com" >
                    <img src="/storage/icons/ig.png" alt="">
                </a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "welcome",
    data(){
      return {
          days:0,
          hours:0,
          minutes:0,
          seconds:0
      }
    },
    methods: {
        counter() {
            // Set the date we're counting down to
            let countDownDate = new Date("Aug 10, 2022 12:00:00").getTime();


            // Update the count down every 1 second
            let x = setInterval(() => {

                // Get today's date and time
                let now = new Date().getTime();

                // Find the distance between now and the count down date
                let distance = countDownDate - now;

                // Time calculations for days, hours, minutes and seconds
                this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
                this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

                if ( distance < 0 ) {
                    clearInterval(x);
                    document.getElementById("demo").innerHTML = "EXPIRED";
                }

                // console.log(this.seconds)
            }, 1000);


        }
    },
    mounted() {
        this.counter();
    }
}


</script>

<style scoped lang="scss">
.banner-image {
  width: 100vw;
  height: 100vh;
  background-image: url("/storage/app/public/background.webp");
  background-repeat: no-repeat;
  object-fit: cover;
  background-size: 100vmax 100vmax;

  .cover {
    width: 100%;
    height: 100%;
    background-color: rgba(21, 21, 21, 0.68);
    display: flex;
    align-items: center;
    flex-direction: column;

    .timer {
      max-width: 550px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-bottom: 30px;

      & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: white;
        border-radius: 50%;
        border: 1px solid white;
        width: 80px;
        height: 80px;
        margin: 5px;

        p:first-of-type {
          font-size: 1.5em;
        }

        p:last-of-type {
          font-size: 0.8em;
        }
      }
    }

    .social {
      width: 300px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .social-icon {
        border-radius: 50%;
        padding: 4px;
        width: 30px;
        height: 30px;
        border: 1px solid white;
      }
    }
  }
}

.cover {
  h1 {
    font-size: 1.7em;
    color: white;
    margin-top: 100px;
    margin-bottom: 20px;
  }

  h1 ~ p {
    font-size: 1.4em;
    color: white;
    margin-bottom: 50px;
  }
;
}
</style>