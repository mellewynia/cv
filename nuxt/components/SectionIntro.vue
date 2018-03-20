
<template>
  <section>
    <blockquote>
      <span class="plane"><i class="icon-plane"></i></span>
      <p>
        {{ $store.state.general.description }}
        <small>
          {{ $store.state.general.rate }}
          <span>{{ $store.state.general.availability }}</span>
          <span>{{ $store.state.general.availability_short_term }}</span>
        </small>
      </p>
    </blockquote>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

@keyframes SPANNING {
    0% {
        transform: translate(0vh, 0) skew(-34deg);
    }
    50% {
        transform: translate(50%, 0) skew(-34deg);
    }
    100% {
        transform: translate(0vh, 0) skew(-34deg);
    }
}

@keyframes PLANE {
  0% {
    transform: translate(0vh, 0) rotate(-6.2deg);
  }
  100% {
    transform: translate(200rem, -24rem) rotate(-7.2deg);
  }
}

.plane {
  display: none;

  @media (min-width: 360px) {
    display: block;
    position: absolute;
    top: 13.8vh;
    right: 48vw;
    color: #fff;
    transform: translate(200rem, -24rem) rotate(-7.2deg);
    animation: PLANE 600s ease-out;
    will-change: transform;
  }

  &::before {
    content: '';
    opacity: 0.12;
    display: block;
    position: absolute;
    top: 2.9rem;
    left: -38rem;
    right: 0.8rem;
    height: 0.4rem;
    background: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.2), rgba(255,255,255,0.3), rgba(255,255,255,0.5), rgba(255,255,255,0.2), #fff);
  }

  > .icon-plane {
    font-size: 1rem;
    opacity: 0.74;
  }
}

section {
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 6.2vh 4rem 2.2rem;
  color: #fff;
  // TODO: color: hsla($color-primary-hue, 10%, 98%, 1);
  font-size: 1.42rem;
  line-height: 1.38em;

  background-color: hsla(222, 100%, 61%, 1);
  background-image:
      linear-gradient(38deg, transparent, hsla(222, 100%, 62%, 0.1));

  @media (min-width: 768px) {
    font-size: 3.8rem;
    font-weight: 200;
    text-shadow: 0.1rem 0.1rem 0 rgba(0,0,0,.06);
  }

  // Two moving bars

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
  }

  &:before {
    width: 26vw;
    left: 10vw;
    background-image: linear-gradient(0deg, hsla(222, 100%, 55%, 0.1), hsla(222, 100%, 71%, 0.2)), radial-gradient(transparent, hsla(222, 100%, 74%, 0.06));
    transform: skew(-34deg);
    animation: SPANNING 60s infinite;
  }

  &:after {
    width: 38vw;
    left: 78vw;
    background-image: linear-gradient(0deg, hsla(222, 100%, 71%, 0.1), hsla(222, 100%, 55%, 0.2)), radial-gradient(transparent, hsla(222, 100%, 74%, 0.06));
    transform: skew(-34deg);
    animation: SPANNING 62s 4s infinite;
  }
}

blockquote {
}

blockquote > p {
  position: relative;
  z-index: 2;
  max-width: var(--max-width);
  transition: 262ms ease;
  will-change: height;

  @media (min-width: 360px) {
    margin: calc(16vh + 2.2rem) 0 0;
  }

  @media (min-width: 768px) {
    margin: calc(16vh + 2.2rem) auto calc(6.2vh + .6rem);
  }

  > small {
    display: block;
    color: #fff;
    font-size: var(--font--x-small);
    font-style: normal;
    letter-spacing: 0.025em;
    font-weight: 500;
    line-height: 1;

    > span {}

    @media (max-width: 767px) {
      position: relative;
      top: -0.3rem;
      margin: 1.9rem 0 0 0.2rem;

      > span {
        display: block;
        padding: 0.8rem 0 0 0;
      }

      > a {
        display: none;
      }
    }

    @media (min-width: 768px) {
      position: static;
      margin: 1.3rem 0 0 0.3rem;
      letter-spacing: 0.03em;

      > span {
        &:before {
          content: ' — ';
        }
      }

    }
  }
}

</style>
