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
          key: 'age'
        },
        {
          type: 'radio', // input、number、money、date、daterange、step、custom...
          fieldProps: {
            
          }, // 组件参数
          labelWidth: 60,//number
          label: '性别',
          path: 'sex',
          deps: [], // TODO 联动字段
          key: 'sex',
          options: [{label: '男', value: '1'},{label:'女', value:'0'}],
          defaultValue :'1'
        },
        {
          type: 'checkbox', // input、number、money、date、daterange、step、custom...
          fieldProps: {
          }, // 组件参数
          labelWidth: 60,//number
          label: '爱好',
          path: 'love',
          deps: [], // TODO 联动字段
          key: 'love',
          options: [{label: '排球', value: '3'},{label: '乒乓球', value: '2'},{label: '篮球', value: '1'},{label:'足球', value:'0'}],
          defaultValue : ['2']
        },
        {
          type: 'rate', // input、number、money、date、daterange、step、custom...
          fieldProps: {
          }, // 组件参数
          labelWidth: 60,//number
          label: '评分',
          path: 'score',
          deps: [], // TODO 联动字段
          key: 'score',
          defaultValue: 0
        },
        {
          type: 'inputNumber', // input、number、money、date、daterange、step、custom...
          fieldProps: {
          }, // 组件参数
          labelWidth: 60,//number
          label: '个数',
          path: 'count',
          deps: [], // TODO 联动字段
          key: 'count',
          defaultValue: 10
        },
        {
          type: 'switch', // input、number、money、date、daterange、step、custom...
          fieldProps: {
          }, // 组件参数
          labelWidth: 60,//number
          label: '是否启用',
          path: 'enable',
          deps: [], // TODO 联动字段
          key: 'enable',
          defaultValue: true
        },

        {
          type: 'select', // input、number、money、date、daterange、step、custom...
          fieldProps: {
            options: [{label: '排球', value: '3'},{label: '乒乓球', value: '2'},{label: '篮球', value: '1'},{label:'足球', value:'0'}],
            style: {width: '200px'}
          }, // 组件参数
          labelWidth: 60,//number
          label: '爱好',
          path: 'select',
          deps: [], // TODO 联动字段
          key: 'select',
          defaultValue : ['2']
        },
      ],
      style: {'flex-wrap': 'wrap'}
    }, {user:{name:'11'}})
    const resetForm = () =>{
      resetFormValue()
    }

    const submitForm = () => {
      getFormValue()
    }

    const setForm = () => {
      setFormValue({user: {name: '本名杨不悔'}, sex: '0'})
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