const useForm = (config, initFormData = {}) => {

  const formConfig = ref({ ...config })

  const getDefaultValueByFieldType = (type) => {
    if(type === 'input') return ''
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
          data[field.key] = value // TODO 根据 field 的类型默认赋值
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
          prev[item] =  formModel.value[field.key]
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

  return {
    formModel,
    formConfig,
    resetFormValue,
    setFormValue,
    getFormValue
  }
}

export default useForm