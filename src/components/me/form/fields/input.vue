<template>
  <NInput v-bind="$attrs" />
</template>
<script>
import { defineComponent, h, ref } from 'vue';
import { NInput } from 'naive-ui';
export default defineComponent({
  setup(props, {expose}) {
    const value = ref()

    const setValue = (value) => {
      value.value = value
    }
   
    expose({setValue})

    return {
      value,
    }
  }
})
</script>