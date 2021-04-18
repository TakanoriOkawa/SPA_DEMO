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
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/service">Service</router-link>
      </div>
    </header>
    <router-view />

    <footer class="footer">
      <p>©︎ TryTechnology 2021- by takanori okawa</p>
    </footer>
  </div>
</template>

<style lang="scss"></style>
