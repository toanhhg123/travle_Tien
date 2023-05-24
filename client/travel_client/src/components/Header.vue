<template lang="">
  <header id="header">
    <div class="header-top">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-sm-6 col-6 header-top-left">
            <ul>
              <li><a href="#">Visit Us</a></li>
              <li><a href="#">Buy Tickets</a></li>
            </ul>
          </div>
          <div class="col-lg-6 col-sm-6 col-6 header-top-right">
            <div class="header-social">
              <a href="#"><i class="fa fa-facebook"></i></a>
              <a href="#"><i class="fa fa-twitter"></i></a>
              <a href="#"><i class="fa fa-dribbble"></i></a>
              <a href="#"><i class="fa fa-behance"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container main-menu">
      <div class="row align-items-center justify-content-between d-flex">
        <div id="logo">
          <a href="index.html"><img src="/img/logo.png" alt="" title="" /></a>
        </div>
        <nav id="nav-menu-container">
          <ul class="nav-menu">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/travel">Travel</router-link></li>
            <li><router-link to="/hotel">Hotels</router-link></li>
            <li><router-link to="/insurance">Insurence</router-link></li>
            <li class="menu-has-children">
              <a href="">Blog</a>
              <ul>
                <li><a href="blog-home.html">Blog Home</a></li>
                <li><a href="blog-single.html">Blog Single</a></li>
              </ul>
            </li>
            <li class="menu-has-children">
              <a href="">Pages</a>
              <ul>
                <li><a href="elements.html">Elements</a></li>
                <li class="menu-has-children">
                  <a href="">Level 2 </a>
                  <ul>
                    <li><a href="#">Item One</a></li>
                    <li><a href="#">Item Two</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style lang=""></style>
