<script setup>
import Header from "../components/Header.vue";
import AboutBanner from "../components/AboutBanner.vue";
import FooterVue from "../components/Footer.vue";
</script >
<template lang="">
  <Header />
  <AboutBanner />
  <section class="insurence-one-area section-gap">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 insurence-left">
          <img class="img-fluid img-one" src="img/insurence/i1.jpg" alt="" />
        </div>
        <div class="col-lg-6 insurence-right">
          <h6 class="text-uppercase">Need to know</h6>
          <h1>Insurance for journey</h1>
          <p>
            Here, I focus on a range of items and features that we use in life
            without giving them a second thought. such as Coca Cola. Dolor sit
            amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco.
          </p>
          <div class="list-wrap">
            <ul>
              <li>Strategic approach towards redesigning brand.</li>
              <li>
                logo design strategy ensures a perfectly crafted logo for your
                business.
              </li>
              <li>Branding that stands out in the crowd.</li>
              <li>Modern and evergreen logo for your business.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="insurence-two-area pb-120">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 insurence-left">
          <h6 class="text-uppercase">Need to know</h6>
          <h1>Insurance for journey</h1>
          <p>
            Here, I focus on a range of items and features that we use in life
            without giving them a second thought. such as Coca Cola. Dolor sit
            amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco.
          </p>
          <div class="list-wrap">
            <ul>
              <li>Strategic approach towards redesigning brand.</li>
              <li>
                logo design strategy ensures a perfectly crafted logo for your
                business.
              </li>
              <li>Branding that stands out in the crowd.</li>
              <li>Modern and evergreen logo for your business.</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 insurence-right">
          <img class="img-fluid img-two" src="img/insurence/i2.jpg" alt="" />
        </div>
      </div>
    </div>
  </section>

  <FooterVue />
</template>
<script>
export default {
    name: 'Insarance'
};
</script>
<style lang=""></style>
