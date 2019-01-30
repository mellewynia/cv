<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.content {
  max-width: calc(var(--width-narrow) + 8rem);
  margin: calc(10vh + 3.8rem) auto calc(10vh + 3.8rem) auto;
  font-size: var(--font--medium--mobile);
  line-height: 162%;
  background: var(--color);

  @media (min-width: 568px) {
    padding: 0 4rem;
  }

  @media (min-width: 768px) {
    font-size: var(--font--medium);
  }

  // inline

  a {
    color: #3874ff;
    text-decoration: underline;
  }

  // blocks

  h1 {
    font-weight: 200;
    font-size: var(--font--xx-large);
    text-indent: -2px;
    line-height: 100%;
  }

  h2 {
    margin: 2.6rem 0 0 0;
    font-weight: 200;
    font-size: var(--font--large);
    text-indent: -2px;
    line-height: 100%;
  }

  p {
    margin: 2.6rem 0 0 0;
  }

  .image.___left {
    float: left;
    width: 50%;
    margin-left: -25%;
    margin-top: 3.2rem;
    margin-right: 3.3rem;
    margin-bottom: 2rem;

    > img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
}
</style>
