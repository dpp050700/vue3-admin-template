<template>
  <div>
    {{ JSON.stringify(modelValue) }}
    <n-form :size="config.size" :inline="config.inline" :label-width="config.labelWidth" labelPlacement="left" :model="modelValue" :style="config.style">
      <n-form-item v-for="field in config.fields" :label="field.label" :path="field.path">
        <InputField v-if="field.type === FieldType.input" v-bind="field.fieldProps" v-model:value="modelValue[field.key]"/>
        <RadioField v-if="field.type === FieldType.radio" v-bind="field.fieldProps" v-model:value="modelValue[field.key]" :options="field.options"/>
        <CheckboxField v-if="field.type === FieldType.checkbox" v-bind="field.fieldProps" v-model:value="modelValue[field.key]" :options="field.options"/>
        <RateField v-if="field.type === FieldType.rate" v-bind="field.fieldProps" v-model:value="modelValue[field.key]"/>
        <SwitchField v-if="field.type === FieldType.switch" v-bind="field.fieldProps" v-model:value="modelValue[field.key]"/>
        <SelectField v-if="field.type === FieldType.select" v-bind="field.fieldProps" v-model:value="modelValue[field.key]"/>
        <InputNumberField v-if="field.type === FieldType.inputNumber" v-bind="field.fieldProps" v-model:value="modelValue[field.key]"/>
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
import {InputField, RadioField, CheckboxField, SwitchField, RateField, SelectField,InputNumberField} from './fields'
import {FieldType} from './enum/index'
// defineCustomFieldComponent
export default defineComponent({
  name:"",
  components: {InputField, RadioField, CheckboxField, SwitchField, RateField, SelectField,InputNumberField},
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
      FieldType
    }
  }
})
</script>