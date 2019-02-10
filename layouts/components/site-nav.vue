<template>
  <nav class="site-nav">
    <div class="site-nav__bg">

    </div>
    <div class="site-nav__nav">
      <ul>
        <li>
          <nuxt-link to="/over" class="nav-item">Ervaring</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/over" class="nav-item">Over</nuxt-link>
        </li>
        <li>
          <small class="nav-items-title">Diensten</small>
          <ul>
            <li>
              <nuxt-link to="/diensten" class="nav-item">Front-end as a service</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/diensten" class="nav-item">Security</nuxt-link>
              <ul>
                <li>
                  <nuxt-link to="/diensten" class="nav-item ___sub">Front-end checklist</nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.site-nav {

}

.site-nav__bg {
  position: fixed;
  z-index: 100;
  top: 62px;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.62;
  background: #fff;
}

.site-nav__nav {
  position: fixed;
  z-index: 100;
  top: 62px;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow-y: auto;
  margin: 0 62px 0 0;
  max-width: 382px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 10, 0.1);
}

//
//
//

.nav-items-title {
  display: block;
  margin-top: 1.6rem;
  padding: 0.3rem 2rem;
  color: #aaa;
  font-size: 1.2rem;
}

//
//
//

.nav-item {
  display: block;
  padding: 0.6rem 2rem;
  color: var(--c-m); // hsla(222, 100%, 61%, 1);
  font-size: 1.4rem;
  transition: 262ms ease-out;

  @media (min-widtH: 620px) {
    font-size: 1.6rem;
  }

  &.___sub {
    padding-left: 3rem;
  }

  &:hover {
    background: hsla(222, 100%, 98%, 1);
    transition: none;
  }
}
</style>
