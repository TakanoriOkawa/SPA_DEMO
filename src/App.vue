<template>
  <div id="app">
    <header class="header">
      <div class="header__logo">
        <img
          src="./assets/header_logo.png"
          alt="TryTechnology"
          class="header__logo__img"
        />
      </div>
      <div class="header__nav">
        <router-link class="header__nav__link" to="/">Home</router-link> |
        <router-link class="header__nav__link" to="/service"
          >Service</router-link
        >
        |
        <router-link class="header__nav__link" to="/about">About</router-link>
      </div>
    </header>

    <router-view />

    <footer class="footer">
      <div class="footer__nav">
        <router-link class="footer__nav__link" to="/">Home</router-link> |
        <router-link class="footer__nav__link" to="/service"
          >Service</router-link
        >
        |
        <router-link class="footer__nav__link" to="/about">About</router-link>
      </div>
      <p class="footer__copy">©︎ TryTechnology 2021- by takanori okawa</p>
    </footer>
  </div>
</template>
