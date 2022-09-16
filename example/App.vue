<template>
  <WorkflowVue ref="workflowRef" main-height="calc(100vh - 45px)">
    <template #btn>
      <el-button size="small" @click="downloadConfig">下载</el-button>
      <el-button size="small" @click="saveConfig">保存</el-button>
    </template>
  </WorkflowVue>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import config from './config'
import WorkflowVue from '../packages'

const workflowRef = ref()

onMounted(() => {
  workflowRef.value?.setConfig(config)
})

const downloadConfig = () => {
  const dp = workflowRef.value?.getData()
  const str = JSON.stringify(dp, null, 2)
  const blob = new Blob([str])
  if ('download' in document.createElement('a')) { // 非IE下载
    const elink = document.createElement('a')
    elink.download = 'config.txt'
    elink.style.display = 'none'
    elink.href = URL.createObjectURL(blob)
    document.body.appendChild(elink)
    elink.click()
    URL.revokeObjectURL(elink.href) // 释放URL对象
    elink.remove()
  }
}

const saveConfig = () => {
  console.log(workflowRef.value?.getData())
}
</script>

<style lang="scss">
// 开始结束按钮
.icon-circle {
  border-radius: 50%;
  border: none;

  &.start {
    background: radial-gradient(circle at 70px 70px, #00B289, #eee);
  }

  &.end {
    background: radial-gradient(circle at 70px 70px, #FE6752, #eee);
  }
}
</style>
