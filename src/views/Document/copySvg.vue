<script setup lang="ts">

import { ContentWrap } from "@/components/ContentWrap";
import { ElDivider } from 'element-plus'

const documentData  = [
  {title: "步骤1", content: "创建好关联的元对象",strong: "注意：将顶栏所有关联的专辑放到一个元对象中，且改好 handle 便于识别", video: "https://cdn.shopify.com/videos/c/o/v/e36037abafd94ea3896cd1df0ccb8a84.mov"},
  {title: "步骤2", content: "将专辑全部打开，填入icon及元对象", video: "https://cdn.shopify.com/videos/c/o/v/837ef03eb7df446cbfb3b31c7f07db5e.mov"},
]
</script>

<template>
  <ContentWrap title="专辑顶部 icons 配置">
    <div v-for="item in documentData" :key="item.title">
      <h2>{{item.title}}</h2>
      <div>
        <div>{{item.content}}</div>
        <strong>{{item.strong}}</strong>
      </div>
      <video  controls class="ug-video">
        <source :src="item.video">
      </video>
      <ElDivider />
    </div>
  </ContentWrap>
</template>

<style scoped lang="less">
.ug-video {
  width: 400px;
  height: 300px;
}
</style>