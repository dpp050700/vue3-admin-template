<template>
  <MeForm :model="formValue" :config="formConfig" v-model="formValue">
    <div>
      <n-button>提交</n-button>
    </div>
  </MeForm>
  <n-button @click="resetForm">重置表单</n-button>
</template>

<script>
import { defineComponent, ref } from 'vue';
import MeForm from '../../../components/me/form/index.vue'
import {NButton} from 'naive-ui'
export default defineComponent({
  components:{MeForm},
  setup(){
    const formValue = ref({
      'user.name': '112'
    })

    const formConfig = ref({
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
          value: ''
        }
      ]
    })

    const resetForm = () =>{
      formValue.value.userName = ''
    }

    return {
      formValue,
      formConfig,
      resetForm
    }
  }
})
</script>