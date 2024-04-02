
<!-- {
  type: 'radio',
  fieldProps: {
  }, 
  labelWidth: 60,
  label: '年龄',
  path: 'age',
  deps: [],
  value: '',
  key: 'age',
  options: {label, value}[]
} -->


<template>
  <n-radio-group v-bind="$attrs">
    <n-radio v-for="item in options" :key="item.value" :value="item.value">
      {{ item.label }}
    </n-radio>
  </n-radio-group>
</template>
<script>
import { defineComponent, h, ref } from 'vue';
import { NRadio, NRadioGroup } from 'naive-ui';
export default defineComponent({
  props: {
    options: {
      type: Array,
      default: () => []
    }
  },
  setup(props, {expose}) {
    return {
    }
  }
})
</script>