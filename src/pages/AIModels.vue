<template>
  <div>
    <h1>{{ $t('app.models') }}</h1>
    <div v-if="isLoading" class="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <table v-else class="models-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>{{ $t('app.models') }}</th>
          <th>{{ $t('app.modelDetail') }}</th>
          <th>Status</th>
          <th>Tags</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="model in models" :key="model.id">
          <td>{{ model.id }}</td>
          <td>{{ model.name }}</td>
          <td>
            <router-link :to="`/model/${model.id}`">{{
              $t('app.modelDetail')
            }}</router-link>
          </td>
          <td>{{ model.status }}</td>
          <td>{{ new Date(model.createdAt).toLocaleString() }}</td>
          <td>
            <span v-for="tag in model.tags" :key="tag" class="tag">{{
              tag
            }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const error = ref('');

const isLoading = computed(() => store.getters.isLoading);
const models = computed(() => store.getters.models);

onMounted(async () => {
  error.value = '';
  try {
    await store.dispatch('fetchModels');
  } catch (e) {
    error.value = 'Failed to load models.';
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
.models-table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}
.models-table th,
.models-table td {
  border: 1px solid #ddd;
  padding: 8px 12px;
  text-align: left;
}
.models-table th {
  background: #f2e9e4;
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
@media (max-width: 768px) {
  .models-table,
  .models-table thead,
  .models-table tbody,
  .models-table th,
  .models-table td,
  .models-table tr {
    display: block;
  }
  .models-table tr {
    margin-bottom: 1rem;
    border-bottom: 2px solid #eee;
  }
  .models-table td {
    border: none;
    position: relative;
    padding-left: 50%;
    min-height: 32px;
  }
  .models-table td:before {
    position: absolute;
    left: 8px;
    top: 8px;
    width: 45%;
    white-space: nowrap;
    font-weight: bold;
    color: #4a4e69;
    content: attr(data-label);
  }
}
</style>
