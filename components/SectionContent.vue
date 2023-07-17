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
.content,
.content-container {
  max-width: calc(var(--width-narrow) + 8rem);
  margin: calc(10vh + 3.8rem) auto calc(10vh + 3.8rem) auto;

  @media (min-width: 568px) {
    padding: 0 4rem;
  }

  &.___compact-spacing-top {
    margin-top: 2rem;
  }

  &.___little-spacing-top {
    margin-top: 3.8rem;
  }

  &.___compact-spacing-bottom {
    margin-bottom: 2rem;
  }

  &.___little-spacing-bottom {
    margin-bottom: 3.8rem;
  }
}

.content {
  font-size: var(--font--medium--mobile);
  padding: 0 4rem;
  line-height: 162%;
  background: var(--color);

  &:empty {
    display: none;
  }

  @media (min-width: 768px) {
    font-size: var(--font--medium);
  }

  // inline

  a {
    color: #3874ff;
    text-decoration: underline;

    &.___block {
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.8rem;
      padding: 0.4rem 0;

      &.___big {
        font-size: var(--font--base);
      }

      > [class^="icon-"] {
        font-size: 162%;
        width: 2.8rem;
      }
    }
  }

  // blocks

  h1 {
    font-weight: 200;
    font-size: var(--font--x-large);
    text-indent: -2px;
    line-height: 100%;

    @media (min-width: 568px) {
      font-size: var(--font--xx-large);
    }
  }

  h2 {
    margin: 2.6rem 0 0 0;
    font-weight: 200;
    font-size: var(--font--large);
    line-height: 100%;

    + p {
      margin: 1rem 0 0 0;
    }
  }

  h3 {
    margin: 2.6rem 0 0 0;
    font-weight: 400;
    line-height: 100%;

    &.___text-inherit {
      font-size: inherit;
    }

    &.___little-margin-top {
      margin-top: 1rem;
    }

    &.___no-margin-after {
      + p {
        margin: 0.2rem 0 0 0;
      }
    }

    + p {
      margin: 1rem 0 0 0;
    }
  }

  h4,
  .content-h4 {
    margin: 2rem 0 0 0;
    font-size: 0.8em;

    + p {
      margin: 0.4rem 0 0 0;
    }
  }

  pre {
    background: #eee;
    overflow-x: scroll;
    font-size: 1.3rem;
  }

  p {
    margin: 2.6rem 0 0 0;

    &.___small-margin-top {
      margin-top: 1rem;
    }

    &.___text-small {
      font-size: 80%;
      line-height: 100%;
    }
  }

  ul {
    li {
      list-style: disc;
      margin: 0 0 0 2rem;
    }
  }

  .image.___left {
    float: left;
    width: 162px;
    margin-left: -16%;
    margin-top: 3.2rem;
    margin-right: 3.3rem;
    margin-bottom: 2rem;

    @media print {
      width: 126px;
    }

    > img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
}
</style>
