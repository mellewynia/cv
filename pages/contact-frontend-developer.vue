
<template>
  <main>
    <nuxt-link to="/artikelen"></nuxt-link>
    <article>
      <div class="content ___little-spacing-bottom">
        <h1>
          Contact
        </h1>
        <h2>
          Melle Wijnia
        </h2>
        <p>
          <a class="___block" :href="'tel: ' + $store.state.general.telephone.replace(/ /g, '')">
            <i class="icon-telephone"></i>
            {{ $store.state.general.telephone }}
          </a>
          <a class="___block" :href="'mailto: ' + $store.state.general.email">
            <i class="icon-envelope"></i>
            {{ $store.state.general.email }}
          </a>
        </p>
        <p>
          <a class="___block" :href="$store.state.general.linkedin" target="_blank" title="“Join the great link”">
            <i class="icon-link"></i>
            LinkedIn
          </a>
          <a class="___block" :href="$store.state.general.github" target="_blank">
            <i class="icon-code"></i>
            Github
          </a>
        </p>
      </div>
      <div class="content ___little-spacing-top ___little-spacing-bottom">
        <h2>
          Bedrijfsgegevens
        </h2>
        <p>
          Ik ben Melle B.V.<br />
          KvK 75849844
        </p>
        <p>
          Swifterbantstraat 8<br />
          4012 ES KERK-AVAZAATH<br />
          <small>Dorp in de buurt van Utrecht</small>
        </p>
      </div>
      <!-- <div class="content-container">
        <div class="site-header__contact">
        </div>
      </div> -->
    </article>
    <section-content />
  </main>
</template>

<script>
import SectionContent from '~/components/SectionContent'

export default {
  components: {
    SectionContent
  },
  head () {
    return {
      title: 'Contact - Melle Wijnia'
    }
  }
}
</script>

<style lang="scss" scoped>

.site-header__contact {
  list-style: none;
  padding: 0.7rem 0 1rem 0;

  @media (min-width: 768px) {
    padding: 0;
  }

  ul {
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
        background: hsla(222, 100%, 96%, 1);
        transition: 262ms ease-out;
        font-size: var(--font--small);

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
</style>
