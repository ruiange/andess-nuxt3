<template>
  <t-card :title="editForm.id ? '编辑新闻' : '新增新闻'" class="admin-news-card">
    <t-form :data="editForm" label-width="80px" layout="vertical" class="edit-form">
      <t-form-item label="标题" name="title" required>
        <t-input v-model="editForm.title" placeholder="请输入新闻标题" />
      </t-form-item>
      <t-form-item label="摘要" name="summary">
        <t-textarea v-model="editForm.summary" placeholder="请输入新闻摘要" />
      </t-form-item>
      <t-form-item label="分类" name="category">
        <t-select v-model="editForm.category" :options="categoryOptions" placeholder="请选择分类" />
      </t-form-item>
      <t-form-item label="封面图片" name="image">
        <t-input v-model="editForm.image" placeholder="图片URL" />
      </t-form-item>
      <t-form-item label="标签" name="tags">
        <t-tag-input v-model="editForm.tags" placeholder="输入标签后回车" />
      </t-form-item>
      <t-form-item label="内容" name="content" required>
        <t-rich-text-editor v-model="editForm.content" placeholder="请输入新闻内容" />
      </t-form-item>
      <t-form-item>
        <t-button theme="primary" @click="saveNews">保存</t-button>
        <t-button variant="outline" class="ml-2" @click="goBack">返回</t-button>
      </t-form-item>
    </t-form>
  </t-card>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { MessagePlugin } from 'tdesign-vue-next';
// @ts-ignore
import { TRichTextEditor } from 'tdesign-vue-next';

definePageMeta({ layout: 'admin' });

const router = useRouter();
const route = useRoute();
const editForm = reactive({
  id: undefined,
  title: '',
  summary: '',
  category: '',
  image: '',
  tags: [],
  content: '',
});
const categoryOptions = [
  { label: '公司新闻', value: '公司新闻' },
  { label: '行业资讯', value: '行业资讯' },
  { label: '技术动态', value: '技术动态' },
  { label: '媒体报道', value: '媒体报道' },
];

onMounted(() => {
  // 如果有id参数，加载新闻详情（后续对接API）
  const id = route.query.id;
  if (id) {
    // TODO: 加载新闻详情
    // Object.assign(editForm, ...)
  }
});

function saveNews() {
  // TODO: 对接API保存
  MessagePlugin.success('保存成功（示例）');
  goBack();
}
function goBack() {
  router.push('/admin/news');
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
.edit-form {
  max-width: 700px;
  margin: 0 auto;
}
</style> 