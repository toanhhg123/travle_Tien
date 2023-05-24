<script setup>
import Header from "../components/Header.vue";
import Banner from "../components/home/Banner.vue";
import PopularDestination from "../components/home/PopularDestination.vue";
import Footer from '../components/Footer.vue'
import PriceArea from '../components/home/PriceArea.vue'
import OtherIssuaArea from '../components/home/OtherIssuaArea.vue'
import HomeAbout from '../components/home/HomeAbout.vue'
import RecentBlog from '../components/home/RecentBlog.vue'
</script>
<template lang="">
  <Header />
  <Banner />
  <PopularDestination />
  <PriceArea />
  <OtherIssuaArea />
  <HomeAbout />
  <RecentBlog />
  <Footer />
</template>
<script>
export default {
  name: "Home",
};
</script>
<style lang=""></style>
