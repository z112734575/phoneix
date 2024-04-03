<template>
  <ContentWrap title="生成预售信息">
    <ElButton
      type="success"
      @click="copyData"
    >复制代码</ElButton>
    <ElForm labelPosition="top">
      <ElFormItem label="预售信息类型">
        <el-radio
          v-model="dynamicValidateForm.radio"
          label="1"
        >商品预售</el-radio>
        <el-radio
          v-model="dynamicValidateForm.radio"
          label="2"
        >商品缺货</el-radio>
      </ElFormItem>
      <ElFormItem label="预售信息标题">
        <ElInput v-model="dynamicValidateForm.title" />
      </ElFormItem>
      <ElFormItem label="预售信息描述">
        <ElInput v-model="dynamicValidateForm.description" />
      </ElFormItem>
      <div
        v-for="(info, index) in dynamicValidateForm.presaleData"
        :key="index"
        class="flex gap-10"
      >
        <ElFormItem
          :label="'进度文案' + (index + 1)"
          class="items-start"
        >
          <ElInput v-model="info.text" />
        </ElFormItem>
        <ElFormItem :label="'进度时间' + (index + 1)">
          <ElInput v-model="info.date" />
        </ElFormItem>
      </div>
      <ElFormItem label="进度控制">
        <el-steps
          :active="dynamicValidateForm.progress"
          finish-status="success"
          style="width: 100%;"
        >
          <el-step
            title="步骤 1"
            @click="dynamicValidateForm.progress = 1"
          ></el-step>
          <el-step
            title="步骤 2"
            @click="dynamicValidateForm.progress = 2"
          ></el-step>
          <el-step
            title="步骤 3"
            @click="dynamicValidateForm.progress = 3"
          ></el-step>
        </el-steps>
      </ElFormItem>
    </ElForm>
  </ContentWrap>
</template>
  
  <script setup>
import { ref, reactive } from 'vue'
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElMessage,
  ElSteps,
  ElStep,
  ElRadio
} from 'element-plus'
import { Delete, EditPen } from '@element-plus/icons-vue'
import { ContentWrap } from '@/components/ContentWrap'
import Editor from '@tinymce/tinymce-vue'
import { useClipboard } from '@vueuse/core'

const { copy } = useClipboard()

const content = ref('<p>Hello, world!</p>')
const click = () => {
  console.log(dynamicValidateForm)
}
const formRef = ref(null)

const dynamicValidateForm = reactive({
  presaleData: [
    {
      text: '',
      date: ''
    },
    {
      text: '',
      date: ''
    },
    {
      text: '',
      date: ''
    }
  ],
  title: '',
  description: '',
  progress: 1,
  radio: '1'
})
const copyData = () => {
  copy(
    JSON.stringify({
      ...dynamicValidateForm,
      presaleData: dynamicValidateForm.presaleData.filter((item) => item.text || item.date)
    })
  )
  ElMessage({
    message: '复制成功！',
    type: 'success'
  })
}
</script>
  