<template>
  <header>
    <div class="site-header">
      <!-- TODO
      <button @click="toggleSiteNav()">
        Menu
      </button>
      -->
      <h1 class="site-header__title">
        <nuxt-link class="site-header__title__name" to="/">
          <u>{{ $store.state.general.givenName }} {{ $store.state.general.familyName }}</u>
          <small class="site-header__title__name__jobtitle">
            {{ $store.state.general.jobTitle }}
          </small>
          <span class="site-header__title__name__update">— laatst geüpdatet op {{ $store.state.dateUpdate[2] }}-{{ $store.state.dateUpdate[1] + 1 }}-{{ $store.state.dateUpdate[0] }}</span>
        </nuxt-link>
      </h1>
      <nav class="site-header__contact">
        <ul>
          <li>
            <a :href="'tel: ' + $store.state.general.telephone.replace(/ /g, '')">
              <i class="icon-telephone"></i>
              {{ $store.state.general.telephone }}
            </a>
          </li>
          <li>
            <a :href="'mailto: ' + $store.state.general.email">
              <i class="icon-envelope"></i>
              <u class="___tablet-plus">{{ $store.state.general.email }}</u>
            </a>
          </li>
          <li>
            <a :href="$store.state.general.linkedin" target="_blank" title="“Join the great link”">
              <i class="icon-link"></i>
            </a>
          </li>
          <li>
            <a :href="$store.state.general.github" target="_blank">
              <i class="icon-code"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <site-nav v-if="siteNavOpen" />
  </header>
</template>

<script>
import SiteNav from '~/layouts/components/site-nav'

export default {
  components: { SiteNav },
  data () {
    return {
      siteNavOpen: false
    }
  },
  methods: {
    toggleSiteNav () {
      console.log(!this.siteNavOpen)
      this.siteNavOpen = !this.siteNavOpen
    }
  }
}
</script>

<style lang="scss" scoped>

.site-header {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  padding: 1.1rem 0 0 4rem;
  background: #fff;
  box-shadow: 0 0 1.6rem hsla(222,26%,61%,0.2);
  font-size: var(--font--small);
  will-change: opacity, transform;
  height: 10rem;

  @media (min-width: 768px ) {
    display: flex;
    padding: 1.2rem 2rem 0 3.8rem;
    animation: SLIDE-NAV-IN 1.38s;
    transform: translate(0, 0);
    animation-timing-function: ease;
    height: 7.3rem;
  }

  @media (min-width: 992px) {
    height: 7.3rem;
    font-size: var(--font--medium);
  }

  @supports ( backdrop-filter: blur(5px) ) {
    backdrop-filter: blur(5px);
    background: rgba(255, 255, 255, 0.97);
  }
}

//
// Title
//

.site-header__title {
  position: relative;
  align-self: center;
  font-size: inherit;
  font-weight: inherit;

  @media ( min-width: 568px ) {
    display: inline;
  }
}

.site-header__title__name {
  color: inherit;
  align-items: center;
  line-height: 1.1;
  padding: 1.6rem 0;

  @media (min-width: 1024px) {
    display: flex;
  }

  > u {
    display: block;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: 262ms ease-out;
  }

  > small {
    display: block;
    border-bottom: 1px solid transparent;
  }

  &:hover {
    transition: none;

    > u {
        border-bottom-color: #999;
        transition: none;
    }
  }

  &:active {
    transition: none;

    > u {
        border-bottom-color: #000;
        transition: none;
    }
  }
}

.site-header__title__name__jobtitle {
  color: hsla(222, 16%, 55%, 1);
  font-size: var(--font--xx-small);

  @media (min-width: 1024px) {
    margin-left: 1.4rem;
    font-size: var(--font--medium);
  }
}

.site-header__title__name__update {
  display: none;
  opacity: 0.62;
  position: absolute;
  top: 0.1rem;
  right: 0;
  font-size: var(--font--xx-small);
  color: #7a859f;

  @media (min-width: 1024px) {
    display: block;
  }
}

//
// Contact
//

@keyframes SLIDE-NAV-IN {
    0% {
        transform: translate(0, -100%);
    }
    16% {
        transform: translate(0, -100%);
    }
    100% {
        transform: translate(0, 0);
    }
}

.site-header__nav {
  flex: 1 1;

  justify-content: flex-end;

  margin: 0 0 0 1rem;
  color: hsla(222,16%,55%,1);

  animation: SLIDE-NAV-IN 1.38s;

  ul {
    display: flex;
    justify-content: flex-end;
    list-style: none;

    li {

    }
  }
}

.site-header__contact {
  flex: 1 1 auto;

  list-style: none;
  padding: 0.7rem 0 1rem 0;

  @media (min-width: 768px) {
    padding: 0;
    display: flex;
    justify-content: flex-end;
  }

  ul {
    display: flex;
    list-style: none;

    > li {
      display: flex;

      > a {
        display: flex;
        align-items: center;
        margin: 1px 0.3rem 0 0;
        padding: .6rem .6rem 0.6rem .6rem;
        border-radius: 2rem;
        color: hsla(222, 100%, 61%, 1);
        font-size: var(--font-small);
        background: hsla(222, 100%, 96%, 1);
        transition: 262ms ease-out;

        @media (min-width: 768px) {
          margin: 1px 0 0 0;
          border-radius: 0;
          padding: .8rem .9rem 1rem .9rem;
          background: hsla(222, 100%, 98%, 0);
        }

        > i { // .icon-*
          position: relative;
          top: -0.1rem;
          font-size: 2.8rem;
        }

        > u {
          margin: 0 0 0 .3rem;
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
          background: hsla(222, 100%, 98%, 1);
          transition: none;

          > u {
              border-bottom: 1px solid hsla(222, 100%, 61%, 1);
              transition: none;
          }
        }

        &:active {
          background: hsla(222, 100%, 96%, 1);
          color: hsla(222, 100%, 50%, 1);
          transition: none;
        }
      }
    }
  }
}

.site-header-nav__item {

}

.site-header-nav__item__link {

}

</style>
