import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    app: {
      title: 'AI Model Manager',
      dashboard: 'Dashboard',
      models: 'AI Models',
      modelDetail: 'Model Detail',
      welcome: 'Welcome to the AI Model Manager Dashboard!',
      listModels: 'List of AI models will be shown here.',
      modelId: 'Model ID',
    },
  },
  vi: {
    app: {
      title: 'Quản lý Mô hình AI',
      dashboard: 'Trang chủ',
      models: 'Danh sách Mô hình AI',
      modelDetail: 'Chi tiết Mô hình',
      welcome: 'Chào mừng đến với trang Quản lý Mô hình AI!',
      listModels: 'Danh sách các mô hình AI sẽ được hiển thị tại đây.',
      modelId: 'Mã mô hình',
    },
  },
};

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

export default i18n;
