
<template>
  <p>
    <slot></slot>
  </p>
</template>

<script>
export default {

}
</script>

<style scoped>
  p {
    padding: 1.6rem 3.8rem;
    background: #ebf1ff;
    font-size: 1.6rem;
    border-radius: 0.4rem;
    max-width: calc(var(--max-width) - 62px);
    margin: 0 auto;
  }
</style>
