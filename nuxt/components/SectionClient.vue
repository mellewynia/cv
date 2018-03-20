
<template>
  <article class="client">

    <ul class="references">
      <li v-for="(reference, i) of client.references" :key="i" class="reference">
        <a :href="reference.url">Referentie: {{ reference.name }} – {{ reference.jobTitle }}</a>
      </li>
    </ul>

    <h3 class="client__title">{{client.name}}</h3>

    <p class="client__meta">{{client.jobTitle}}</p>
    <p class="client__meta">

      <template>{{ client.date[0] }}-{{ client.date[1] + 1 }}</template>
      <span class="now" v-if="client.endDate === null">–HEDEN</span>
      <template v-else-if="client.endDate !== undefined">–{{ client.endDate[0] }}-{{ client.endDate[1] + 1 }}</template>

      <template v-if="client.location"> – {{ client.location }} </template>
      <template v-if="client.number_of_projects > 1"> – {{ client.number_of_projects }} projecten </template>

      <template v-for="(skill, i) of client.skills"><span :key="i" class="tag">{{ skill }}</span>&nbsp;</template>

      <a v-if="client.url" class="btn-goto" :href="client.url" target="_blank"><u>Website</u><i class="icon-link-out"></i></a>
    </p>

    <p class="client__description">
      {{client.body}}
    </p>

    <ul v-if="client.projects" class="client__projects">
      <li v-for="(project, i) of client.projects" :key="i" class="client-project">
        {{ project.name }}
        <a v-if="project.url" class="btn-goto" :href="project.url" target="_blank"><u>Website</u><i class="icon-link-out"></i></a>
        <template v-for="(skill, i) of project.skills"><span :key="i" class="tag">{{ skill }}</span>&nbsp;</template>
      </li>
    </ul>

  </article>
</template>

<script>
export default {
  props: ['client']
}
</script>

<style lang="scss">

.reference {
  margin: 0.6rem 0;
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: hsla(222, 16%, 55%, 1);

  > a {
    color: inherit;

    &:hover {
      color: hsla(222, 100%, 55%, 1);
    }
  }
}

.client {
  max-width: calc(var(--width-narrow) + 8rem);
  padding: 0 2.6rem;
  margin: calc(10vh + 3.8rem) auto calc(10vh + 3.8rem) auto;
  font-size: var(--font--medium--mobile);

  @media (min-width: 568px) {
    padding: 0 4rem;
  }

  @media (min-width: 768px) {
    font-size: var(--font--medium);
  }
}

.client__title {
  margin: 1.3rem 0 1.3rem 0;
  font-size: 1.7rem;
  font-weight: 400;
  line-height: 1.1;
  text-shadow: var(--text-shadow);

  @media (min-width: 768px) {
    margin-top: 0.4rem;
    font-size: 4.2rem;
    font-weight: 200;
    text-indent: -0.2rem;
  }
}

.client__description {
  margin: 1.6rem 0 0;
  line-height: 1.38;
}

.client__meta {
  line-height: 1.38;
  margin: 0.4rem 0;
  font-size: 1.2rem;

  span.now {
    color: hsl(222, 100%, 61%);
    animation: 1380ms linear NOW infinite;
  }

  @media (min-width: 768px) {
    font-size: inherit;
  }
}

.client__projects {
  margin: 1.3rem 0 1.3rem -2.2rem;

  @media (min-width: 568px) {
    margin: 0rem 0 1.6rem;
  }
}

.client-project {
  position: relative;
  padding: 2.8rem 0 0 0;

  &:before {
    content: '';
    position: absolute;
    top: 1.6rem;
    left: 0;
    right: 0;
    display: block;
    height: 0.1rem;
    background: hsla(222, 38%, 95%, 1);
  }
}

</style>
