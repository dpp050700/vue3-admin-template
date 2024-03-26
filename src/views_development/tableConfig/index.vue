

<template>
  <CommonPage>
    <template #action>
      <n-button type="primary">
        <i class="i-material-symbols:add mr-4 text-18" />
        生成代码
      </n-button>
    </template>
    <AppCard bordered bg="#fafafc dark:black" class="mb-30 rounded-4">
      <div class="flex justify-end items-center p-16">
        <n-button attr-type="submit" class="ml-20" type="primary" @click="handleAddField()">
          <i class="i-fe:search mr-4" />
          添加字段
        </n-button>
      </div>
    </AppCard>

    <AppCard bordered bg="#fafafc dark:black" class="p-16">
      <NCard class="mb-10">11</NCard>
      <NCard>11</NCard>

      <div class="text-right mx-16">
        <n-button attr-type="submit" type="primary" @click="handleGenerateCode()">
          创建页面
        </n-button>
      </div>
    </AppCard>

    <!-- <MeCrud
      ref="$table"
      v-model:query-items="queryItems"
      :scroll-x="1200"
      :columns="columns"
      :get-data="api.read"
    >
      <MeQueryItem label="用户名" :label-width="50">
        <n-input
          v-model:value="queryItems.username"
          type="text"
          placeholder="请输入用户名"
          clearable
        />
      </MeQueryItem>

      <MeQueryItem label="性别" :label-width="50">
        <n-select v-model:value="queryItems.gender" clearable :options="genders" />
      </MeQueryItem>

      <MeQueryItem label="状态" :label-width="50">
        <n-select
          v-model:value="queryItems.enable"
          clearable
          :options="[
            { label: '启用', value: 1 },
            { label: '停用', value: 0 },
          ]"
        />
      </MeQueryItem>
    </MeCrud> -->

    <MeModal ref="modalRef" width="520px">
      <n-form
        ref="modalFormRef"
        label-placement="left"
        label-align="left"
        :label-width="200"
        :model="modalForm"
      >
        <n-form-item
          label="字段名称"
          path="fieldName"
        >
          <n-input v-model:value="modalForm.fieldName" />
        </n-form-item>

        <n-form-item
          label="字段名称"
          path="fieldKey"
        >
          <n-input v-model:value="modalForm.fieldKey" />
        </n-form-item>
        
        <n-form-item label="是否列表搜索项目" path="isSearch">
          <n-switch v-model:value="modalForm.enable">
            <template #checked>是</template>
            <template #unchecked>否</template>
          </n-switch>
        </n-form-item>
      </n-form>
    </MeModal>
  </CommonPage>
</template>

<script>
import {defineComponent} from 'vue'
import { NAvatar, NButton, NSwitch, NTag, NCard } from 'naive-ui'
import { formatDateTime } from '@/utils'
import { MeCrud, MeQueryItem, MeModal } from '@/components'
import { useCrud } from '@/composables'
import api from './api'
import {useModal, useForm} from '@/composables'

export default defineComponent({
  components:{MeCrud, MeQueryItem, MeModal, NAvatar, NButton, NSwitch, NTag},
  setup(){
    const [modalFormRef,modalForm] = useForm()
    const [modalRef, okLoading] = useModal()
    const handleGenerateCode = () => {
    }
    const handleAddField = () => {
      modalRef.value?.open({ action: 'add', title:'添加字段', row: {  } })
    }
    return {
      modalFormRef,modalForm,
      modalRef,
      handleGenerateCode,
      handleAddField
    }
  }
})
</script>
