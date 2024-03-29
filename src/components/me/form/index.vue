<template>
  <div>
    {{ JSON.stringify(modelValue) }}
    <n-form :size="config.size" :inline="config.inline" :label-width="config.labelWidth" labelPlacement="left" :model="modelValue">
      <n-form-item v-for="field in config.fields" :label="field.label" :path="field.path">
        <InputField v-if="field.type === 'input'" v-bind="field.fieldProps" v-model:value="modelValue[field.key]"/>
      </n-form-item>
      <n-form-item v-if="$slots.default">
        <slot />
      </n-form-item>
    </n-form>
  </div>
</template>

<script>
import {defineComponent, ref, watch} from 'vue'
import {NForm, NFormItem, NButton} from 'naive-ui'
import {InputField} from './fields'
// defineCustomFieldComponent
export default defineComponent({
  name:"",
  components: {InputField},
  props:{
    model: {
      type: Object,
      default: () => ({})
    },
    config: {
      type: Object,
      default: () => ({})
    },
    modelValue: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props){
    
    
    return {
      
    }
  }
})
</script>