<template>
  <div>
    <style>

      :root {
        --max-width: 95rem;
        --width-narrow: 62rem;

        --font--xx-small: 1.1rem;
        --font--x-small: 1.2rem;
        --font--small: 1.5rem;
        --font--medium--mobile: 1.5rem;
        --font--medium: 1.7rem;
        --font--large: 2.6rem;
        --font--x-large: 3.8rem;
        --font--xx-large: 6.2rem;

        --c-m: hsl(222, 100%, 61%);
        --c-m-bg: #f5f8ff;

        --text-shadow: 0.1rem 0.1rem 0 rgba(0, 0, 0, .16);
      }
    </style>
    <script src="https://unpkg.com/css-vars-ponyfill@1"></script>
    <script>cssVars({watch: true});</script>
    <site-header/>
    <nuxt/>
    <site-footer/>
  </div>
</template>

<script>
import SiteHeader from '~/layouts/components/site-header.vue'
import SiteFooter from '~/layouts/components/site-footer.vue'

export default {
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>

<style lang="scss">
@import '../static/css/fonts/open-sans';

html {
  font-family: "Open Sans Web", Calibri, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 10px;
  /* TODO
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  */
  box-sizing: border-box;

  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

body {
  padding-top: 9.2rem;
  overflow-x: hidden;

  @media (min-width: 768px) {
    padding-top: 7.3rem;
  }
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

.tag {
    padding: 0 0.4rem 0.1rem;
    border-radius: 0.3rem;
    font-size: 1.1rem;
    background: hsla(222, 0%, 97%, 1);
    color: hsla(222, 16%, 26%, 1);
    top: -0.1rem;
    position: relative;

    @media (min-width: 768px) {
        padding: 0.1rem 0.4rem 0.1rem;
        font-size: 1.2rem;
    }
}

.btn-goto {
    display: inline-block;
    position: relative;
    top: -0.2rem;
    margin: 0 0 0 0.5rem;
    color: hsla(222, 89%, 74%, 1);
    font-size: 1.2rem;
    transition: 162ms ease-out;

    > u {
        /* Used for text */
        display: inline-block;
        font-weight: 500;
        font-size: 1rem;
        line-height: 0.9;
        text-transform: uppercase;
        text-decoration: none;
        box-shadow: 0 1px 0 0 hsla(222, 100%, 61%, 0.38);
        transition: 162ms ease-out;
    }

    &:hover {
        color: hsla(222, 100%, 61%, 1);
        transition: none;

        > u {
            box-shadow: 0 1px 0 0 hsla(222, 100%, 61%, 1);
            transition: none;
        }
    }

    &:active {
        color: hsla(222, 100%, 50%, 1);
    }
}

@keyframes NOW {
  0% {
    opacity: 1;
  }
  6% {
    opacity: 0.9;
  }
  100% {
    opacity: 1;
  }
}

span.now {
  color: hsl(222, 100%, 61%);
  animation: 1380ms linear NOW infinite;
}

.cta-link {
  color: hsla(222, 100%, 61%, 1);

  > u {
    margin: 0 ;
    text-decoration: none;
    line-height: 1.1;
    border-bottom: 1px solid hsla(222, 100%, 61%, 0.38);
    font-size: var(--font--small);
    transition: 262ms ease-out;

    &.___tablet-plus {
      display: none;

      @media (min-width: 768px) {
        display: block;
      }
    }
  }

  &:hover {
    // background: hsla(222, 100%, 98%, 1);
    transition: none;

    > u {
        border-bottom: 1px solid hsla(222, 100%, 61%, 1);
        transition: none;
    }
  }

  &:active {
    // background: hsla(222, 100%, 96%, 1);
    color: hsla(222, 100%, 50%, 1);
    transition: none;
  }
}

p.meta-info {
  font-size: var(--font--x-small);
  color: hsla(222, 10%, 62%, 1);
}

</style>
