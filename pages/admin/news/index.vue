<template>
  <t-card title="新闻管理" class="admin-news-card">
    <div class="toolbar">
      <t-button theme="primary" @click="goToEdit()">新增新闻</t-button>
    </div>
    <t-table :data="newsList" row-key="id" :columns="columns" bordered stripe>
      <template #operation="{ row }">
        <t-button size="small" @click="goToEdit(row.id)">编辑</t-button>
        <t-popconfirm content="确定删除该新闻吗？" @confirm="deleteNews(row.id)">
          <t-button size="small" theme="danger" variant="outline">删除</t-button>
        </t-popconfirm>
      </template>
    </t-table>
    <t-pagination
      v-model:current="page"
      v-model:page-size="pageSize"
      :total="total"
      show-jumper
      show-page-size
      class="mt-4"
    />
  </t-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { MessagePlugin } from 'tdesign-vue-next';

definePageMeta({ layout: 'admin' });

const router = useRouter();
const newsList = ref([
  // 示例数据，后续对接API
]);
const columns = [
  { colKey: 'title', title: '标题', width: 200 },
  { colKey: 'category', title: '分类', width: 120 },
  { colKey: 'summary', title: '摘要', width: 300 },
  { colKey: 'publishedAt', title: '发布时间', width: 160 },
  { colKey: 'operation', title: '操作', width: 160, cell: 'operation' },
];
const page = ref(1);
const pageSize = ref(10);
const total = ref(0);

function goToEdit(id?: number) {
  if (id) {
    router.push(`/admin/news/edit?id=${id}`);
  } else {
    router.push('/admin/news/edit');
  }
}
function deleteNews(id: number) {
  // TODO: 对接API删除
  MessagePlugin.success('删除成功（示例）');
}
</script>

<style scoped lang="less">
.admin-news-card {
  :deep(.t-card__header) {
    background: #ce8b00;
    color: #fff;
    font-size: 20px;
  }
}
.toolbar {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
}
</style> 