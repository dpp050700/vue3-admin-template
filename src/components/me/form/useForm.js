import {isRef, isReactive, toRaw} from 'vue'
const useForm = (config, initFormData = {}) => {

  const formConfig = ref({ ...config })

  const getDefaultValueByFieldType = (type) => {
    if(type === 'input') return ''
    if(type === 'radio') return ''
    if(type === 'rate') return null
    if(type === 'inputNumber') return null
    if(type === 'switch') return false
    if(type === 'checkbox') return []

    return null
  }

  const getFormModel = (formValue, fillDetault = false) => {
    const data = {}
    formConfig.value.fields.forEach(field => {
      let path = field.path
      let defaultValue = field.defaultValue
     
      if(typeof path === 'string') {
        path = field.path.split('.')
      }else if(Array.isArray(path)){
        throw new Error(`${field.label} 缺少 path 属性`)
      }

      path.reduce((prev, item, index) => {
        if(index === path.length - 1) {
          let value = prev[item]
          
          if(defaultValue !== undefined && value === undefined && fillDetault) {
            value = defaultValue
          }
          if(value === undefined) {
            value = getDefaultValueByFieldType(field.type)
          }
          data[field.key] = value
        }
        return prev[item] || {}
      }, formValue)
    })
    return data
  }

  const formModel = ref({...getFormModel(initFormData, true)})
  
  const setFormValue = (value) => {
    formModel.value = getFormModel(value)
  }

  const getFormValue = () => {
    let data = {}
    formConfig.value.fields.forEach(field => {
      let path = field.path
     
      if(typeof path === 'string') {
        path = field.path.split('.')
      }else if(Array.isArray(path)){
        throw new Error(`${field.label} 缺少 path 属性`)
      }

      console.log(path)

      path.reduce((prev, item, index) => {
        if(index === path.length - 1) {
          console.log(isReactive(formModel.value[field.key]))
          prev[item] = isReactive(formModel.value[field.key]) ? toRaw(formModel.value[field.key]) : formModel.value[field.key]// 判断是否是isReactive
        }else {
          if(prev[item] === undefined) {
            prev[item] = {}
          }
        }
        return prev[item]
      }, data)
    })
    console.log(data)
    return data
  }

  const resetFormValue = () => {
    formModel.value = getFormModel({})
  }

  // 单独设置某个字段的值
  const setFieldValue = () => {}

  // 更新某个表单项
  const updateField = () => {}

  // 更新所有的表单项目
  const updateFields = () => {}

  return {
    formModel,
    formConfig,
    resetFormValue,
    setFormValue,
    getFormValue
  }
}

export default useForm