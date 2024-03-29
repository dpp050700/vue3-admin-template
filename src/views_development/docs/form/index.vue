<template>
  <MeForm :config="formConfig" v-model="formModel">
    <div>
      <n-button>提交</n-button>
    </div>
  </MeForm>
  <n-button @click="resetForm">重置表单</n-button>
  <n-button @click="setForm">设置表单</n-button>
  <n-button @click="submitForm">获取表单</n-button>
</template>

<script>
import { defineComponent, ref } from 'vue';
import {MeForm} from '@/components'
import {NButton} from 'naive-ui'
export default defineComponent({
  components:{MeForm},
  setup(){
    const {useForm} = MeForm

    const {formModel,formConfig, setFormValue, resetFormValue, getFormValue} = useForm({
      inline: true,
      size: 'large',
      labelWidth: '100px',
      // TODO 同时设置 labelBlock 和 labelWidth 时需要警告
      labelBlock: false, // label 是否单独占一行
      fields: [
        {
          type: 'input', // input、number、money、date、daterange、step、custom...
          fieldProps: {
            placeholder: '请输入用户名',
            onUpdateValue: () => console.log('parent')
          }, // 组件参数
          labelWidth: 60,//number
          label: '用户名',
          path: 'user.name',
          deps: [], // TODO 联动字段
          value: '',
          key: 'userName',
          defaultValue: '2224445'
        },
        {
          type: 'input', // input、number、money、date、daterange、step、custom...
          fieldProps: {
            placeholder: '请输入年龄',
          }, // 组件参数
          labelWidth: 60,//number
          label: '年龄',
          path: 'age',
          deps: [], // TODO 联动字段
          value: '',
          key: 'age'
        }
      ]
    }, {user:{name:'11'}})
    const resetForm = () =>{
      resetFormValue()
    }

    const submitForm = () => {
      getFormValue()
    }

    const setForm = () => {
      setFormValue({user: {name: '本名杨不悔'}})
    }

    return {
      formModel,
      formConfig,
      setForm,
      resetForm,
      submitForm
    }
  }
})
</script>