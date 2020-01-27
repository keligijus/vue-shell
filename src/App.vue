<template>
  <div>
    <template v-if="mountableComponents.length">
      <div v-for="component in mountableComponents" :key="component.id">
        <MountingPortal
          :mountTo="`#${component.id}`"
          append
          :to="component.name"
        >
          <component :is="component.name" :id="component.id" />
        </MountingPortal>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'vue-app',
  data() {
    return {
      mountableComponents: []
    };
  },
  mounted() {
    console.log('👋 Vue App mounted!');
  },
  methods: {
    mountVueComponentsViaDataAttributes() {
      this.mountableComponents = Array.from(
        document.querySelectorAll('[data-vue-component]')
      ).map(element => {
        return {
          id: element.id,
          name: element.dataset.vueComponent
        };
      });
    }
  }
};
</script>
