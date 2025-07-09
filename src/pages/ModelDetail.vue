<template>
  <div>
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else-if="model">
      <h1>{{ $t('app.modelDetail') }}</h1>
      <ul>
        <li>
          <strong>{{ $t('app.modelId') }}:</strong> {{ model.id }}
        </li>
        <li>
          <strong>{{ $t('app.models') }}:</strong> {{ model.name }}
        </li>
        <li><strong>Description:</strong> {{ model.description }}</li>
        <li><strong>Version:</strong> {{ model.version }}</li>
        <li><strong>Status:</strong> {{ model.status }}</li>
        <li>
          <strong>Created At:</strong>
          {{ new Date(model.createdAt).toLocaleString() }}
        </li>
        <li>
          <strong>Tags:</strong>
          <span v-for="tag in model.tags" :key="tag" class="tag">{{
            tag
          }}</span>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Model not found.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getModelById } from '@/utils/mockModels';

const route = useRoute();
const model = ref(null);
const loading = ref(true);
const error = ref('');

onMounted(async () => {
  loading.value = true;
  error.value = '';
  try {
    model.value = await getModelById(route.params.id);
    if (!model.value) error.value = 'Model not found.';
  } catch (e) {
    error.value = 'Failed to load model detail.';
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.loading {
  color: #4a4e69;
  font-weight: bold;
  margin: 1rem 0;
}
.error {
  color: #b00020;
  font-weight: bold;
  margin: 1rem 0;
}
.tag {
  display: inline-block;
  background: #4a4e69;
  color: #fff;
  border-radius: 4px;
  padding: 2px 8px;
  margin-right: 4px;
  font-size: 0.85em;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin-bottom: 8px;
}
</style>
