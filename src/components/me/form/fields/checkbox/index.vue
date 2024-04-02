
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
  <n-checkbox-group v-bind="$attrs">
    <n-checkbox v-for="item in options" :key="item.value" :value="item.value" :label="item.label">
    </n-checkbox>
  </n-checkbox-group>
</template>
<script>
import { defineComponent, h, ref } from 'vue';
import { NCheckbox, NCheckboxGroup } from 'naive-ui';
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