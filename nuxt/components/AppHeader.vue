<template>
  <header class="site-header">
    <h1 class="site-header__title">
      <nuxt-link class="site-header__title__name" to="/over">
        <u>{{ $store.state.general.givenName }} {{ $store.state.general.familyName }}</u>
        <small class="site-header__title__name__jobtitle">
          {{ $store.state.general.jobTitle }}
        </small>
      </nuxt-link>
    </h1>
    <nav class="site-header__contact">
      <ul>
        <li>
          <a :href="'tel: ' + $store.state.general.telephone.replace(/ /g, '')">
            <i class="icon-telephone"></i>
            <u>{{ $store.state.general.telephone }}</u>
          </a>
        </li>
        <li>
          <a :href="'mailto: ' + $store.state.general.email">
            <i class="icon-envelope"></i>
            <u>{{ $store.state.general.email }}</u>
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
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.site-header {
  display: flex;
  padding: 0 0 0 3.8rem;
  background: #fff;
  font-size: var(--font--small);

  @media (min-width: 768px ) {
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    animation: SLIDE-NAV-IN 1.38s;
    transform: translate(0, 0);
    animation-timing-function: ease;
    will-change: opacity, transform;
    box-shadow: 0 0 1.6rem hsla(222,26%,61%,0.2);
  }

  @media (min-width: 992px) {
    display: flex;
    min-height: 7.3rem;
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
  align-self: center;
  font-size: inherit;
  font-weight: inherit;

  @media ( min-width: 568px ) {
    display: inline;
  }
}

.site-header__title__name {
  color: inherit;
  display: flex;
  align-items: center;
  line-height: 1.1;

  > u {
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: 262ms ease-out;
  }

  > small {
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
  margin: 0 0 0 1rem;
  color: hsla(222,16%,55%,1);
  font-size: inherit;
}

//
// Contact
//

.site-header__nav {
  flex: 1 1;

  justify-content: flex-end;

  margin: 0 0 0 1rem;
  color: hsla(222,16%,55%,1);

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

  display: flex;
  justify-content: flex-end;
  list-style: none;

  ul {
    display: flex;
    list-style: none;

    > li {
      display: flex;

      > a {
        display: flex;
        align-items: center;
        padding: .8rem 1.2rem 1rem .5rem;
        color: hsla(222, 100%, 61%, 1);
        font-size: var(--font-small);
        background: hsla(222, 100%, 98%, 0);
        transition: 262ms ease-out;

        > i { // .icon-*
          position: relative;
          top: 0.1rem;
          font-size: 2.8rem;
        }

        > u {
          text-decoration: none;
          line-height: 1.1;
          border-bottom: 1px solid hsla(222, 100%, 61%, 0.38);
          transition: 262ms ease-out;
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
