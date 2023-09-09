<template>
  <footer>
    <section class="footer-next">
      <div class="footer-next__center">
        <nuxt-link to="/">Diensten</nuxt-link>
        <nuxt-link to="/over">Over</nuxt-link>
        <nuxt-link to="/cv-frontend-developer">CV</nuxt-link>
        <nuxt-link to="/contact-frontend-developer">Contact</nuxt-link>
        <nuxt-link to="/artikelen">Artikelen</nuxt-link>
      </div>
    </section>
    <section class="meta">
      <span>© 2007–2023 Melle Wijnia</span>
      <nuxt-link to="disclaimer">Disclaimer</nuxt-link>
    </section>
  </footer>
</template>

<script>
</script>

<style lang="scss" scoped>
.footer-next {
  background: #f5f8ff;
  padding: 6.2rem 0;
  margin: 10vh 0 0;

  @media print {
    display: none;
  }
}

.footer-next__center {
  max-width: calc(var(--width-narrow) + 8rem);
  padding: 0 4rem;
  margin: auto auto;
  font-size: var(--font--medium--mobile);

  @media (min-width: 768px) {
    font-size: var(--font--medium);
  }

  > a {
    padding: 1rem 0;
    display: block;
    color: #000;
    border-top: 1px solid rgba(0,0,0,0.06);

    &:first-child {
      border-top: 0;
    }

    &:hover {
      text-decoration: underline;
    }

    &.nuxt-link-exact-active {
      text-decoration: underline;
    }
  }
}

.meta {
  padding: 1.2rem 2rem 1.2rem 3.8rem;
  font-size: var(--font--x-small);
  color: #b6bac3;

  @media print {
    display: none;
  }

  > span {
    margin: 0 1.2rem 0 0;
  }

  > a {
    color: inherit;
  }
}

</style>
