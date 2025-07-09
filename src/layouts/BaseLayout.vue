<template>
  <div class="layout">
    <header class="header">
      <div class="logo-title">
        <img src="/logo.png" alt="Logo" class="logo" />
        <span class="app-title">{{ t('app.title') }}</span>
      </div>
      <div class="lang-switcher">
        <select v-model="lang">
          <option value="en">EN</option>
          <option value="vi">VI</option>
        </select>
      </div>
    </header>
    <div class="main">
      <aside :class="['sidebar', { collapsed: isSidebarCollapsed }]">
        <nav>
          <ul>
            <li>
              <router-link to="/">{{ t('app.dashboard') }}</router-link>
            </li>
            <li>
              <router-link to="/models">{{ t('app.models') }}</router-link>
            </li>
          </ul>
        </nav>
        <button
          class="sidebar-toggle"
          @click="isSidebarCollapsed = !isSidebarCollapsed"
        >
          <span v-if="isSidebarCollapsed">▶</span>
          <span v-else>◀</span>
        </button>
      </aside>
      <section class="content">
        <router-view />
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
const isSidebarCollapsed = ref(false);
const { locale, t } = useI18n();
const lang = ref(locale.value);
watch(lang, (val) => {
  locale.value = val;
});
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  min-width: 0;
  min-height: 0;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #22223b;
  color: #fff;
  padding: 0 1.5rem;
  height: 56px;
}
.logo-title {
  display: flex;
  align-items: center;
}
.logo {
  width: 32px;
  height: 32px;
  margin-right: 0.75rem;
}
.app-title {
  font-size: 1.25rem;
  font-weight: bold;
}
.lang-switcher select {
  background: #fff;
  color: #22223b;
  border-radius: 4px;
  border: none;
  padding: 0.25rem 0.5rem;
}
.main {
  display: flex;
  flex: 1;
  min-height: 0;
}
.sidebar {
  background: #4a4e69;
  color: #fff;
  width: 200px;
  min-width: 60px;
  transition: width 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.sidebar.collapsed {
  width: 60px;
}
.sidebar nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.sidebar nav ul li {
  padding: 1rem;
}
.sidebar nav ul li a {
  color: #fff;
  text-decoration: none;
  display: block;
}
.sidebar nav ul li a.router-link-exact-active {
  font-weight: bold;
  color: #f2e9e4;
}
.sidebar-toggle {
  background: none;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  margin: 0.5rem;
}
.content {
  flex: 1;
  background: #f2e9e4;
  padding: 1.5rem;
  overflow-y: auto;
  width: 100vw;
  min-width: 0;
}
@media (max-width: 768px) {
  .main {
    flex-direction: column;
  }
  .sidebar {
    position: absolute;
    z-index: 10;
    height: 100vh;
    left: 0;
    top: 56px;
    width: 160px;
    transform: translateX(-100%);
    transition: transform 0.2s;
  }
  .sidebar.collapsed {
    transform: translateX(0);
    width: 160px;
  }
  .content {
    padding: 1rem;
  }
}
</style>
