<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { ElButton, ElForm, ElFormItem, ElInput, ElMessage, ElTable, ElTableColumn, ElCheckbox } from 'element-plus'
import { useClipboard } from '@vueuse/core'
import Sortable from 'sortablejs'
import { sortBy, findIndex } from 'lodash'
import { Check, Delete, Edit, Message, Search, Star } from '@element-plus/icons-vue'
const { copy } = useClipboard()

const columns = ref([0, 1])
    const title = ref('')
    const show_self = ref(true)
    const tableData = reactive([
      {
        row_name: '',
        row_data: []
      }
    ])
    const tableInfo = reactive({
      row: 1,
      column: 3
    })

    const tableDataJson = computed(() => {
      console.log({
        title: title.value,
        products_info: tableData
      })
      return {
        show_self: show_self.value,
        title: title.value,
        products_info: tableData
      }
    })

    onMounted(() => {
      columnDrop()
    })

    const addRow = () => {
      tableData.push({
        row_name: '',
        row_data: []
      })
    }

    const addColumn = () => {
      columns.value.push(columns.value.length)
    }

    const deleteColumn = (index) => {
      columns.value.splice(index, 1)
      tableData.forEach((item) => {
        item.row_data.splice(index, 1)
      })
    }

    const deleteRow = (index) => {
      tableData.splice(index, 1)
    }

    const stringify = () => {
      const data = JSON.stringify(tableDataJson.value)
      console.log(JSON.stringify(tableDataJson.value))
      copy(data)
    }

    const columnDrop = () => {
      const el = document.querySelector('.el-table__header-wrapper tr')
      console.log(el, 'el')
      Sortable.create(el, {
        animation: 150,
        draggable: '.sortable-item',
        onEnd: (evt) => {
          console.log(evt)
          const { newIndex, oldIndex } = evt
          const temp = columns.value[oldIndex - 1]
          columns.value[oldIndex - 1] = columns.value[newIndex - 1]
          columns.value[newIndex - 1] = temp
          console.log(columns.value, 'ri')
          tableData.forEach((item) => {
            const temp = item.row_data[oldIndex - 1]
            item.row_data[oldIndex - 1] = item.row_data[newIndex - 1]
            item.row_data[newIndex - 1] = temp
          })
        }
      })
    }

    const handleChange = (value) => {
      console.log('change', value)
      show_self.value = !value
    }
</script>

<template>
  <ElButton
    @click="stringify"
    type="success"
    style="margin-bottom: 20px"
  >复制数据</ElButton>
  <ElCheckbox
    style="margin-left: 24px"
    @change="handleChange"
  >是否不展示当前商品数据</ElCheckbox>
  <ElInput
    v-model="title"
    placeholder="请输入标题"
    style="margin-bottom: 20px"
  ></ElInput>
  <div>
    <ElButton @click="addRow">添加行</ElButton>
    <ElButton @click="addColumn">添加列</ElButton>
  </div>
  <div>
    <ElTable
      :data="tableData"
      style="width: 100%"
    >
      <ElTableColumn
        :label="'对比标题'"
        width="180"
        key="slot"
      >
        <template #default="scope">
          <ElInput
            v-model="scope.row[`row_name`]"
            placeholder="请输入对比标题"
          ></ElInput>
        </template>
      </ElTableColumn>
      <template
        v-for="(item,index) in columns"
        :key="index"
      >
        <ElTableColumn
          :label="`列${item}`"
          width="180"
          class-name="sortable-item"
          :column-key="new Date().toDateString()"
          style="cursor: move!important;"
        >
          <template #header>
            <div style="display: flex;justify-content: space-between">
              <div>列{{ item + 1 }}</div>
              <div
                style="width: 24px;height: 24px;border-radius: 50%; border: 1px solid black;display: flex;justify-content: center;align-items: center;cursor: pointer"
                @click="deleteColumn"
              >X</div>
            </div>
          </template>
          <template #default="scope">
            <!--          <ElInput v-model="scope.row[`row_name`]" placeholder="请输入对比标题" v-if="index===1"></ElInput>-->
            <ElInput
              v-model="scope.row.row_data[index]"
              :placeholder="`请输入内容${item+1}`"
            ></ElInput>
          </template>
        </ElTableColumn>
      </template>
      <ElTableColumn
        label="操作"
        width="180"
      >
        <template #default="scope">
          <ElButton
            @click="deleteRow(scope.$index)"
            type="danger"
            size="small"
          >删除行</ElButton>
        </template>
      </ElTableColumn>
    </ElTable>
  </div>

</template>

<style>
.sortable-item {
  cursor: move !important;
}
</style>