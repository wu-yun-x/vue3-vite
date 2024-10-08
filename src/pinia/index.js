// src/pinia/index.js
import { createPinia } from 'pinia';
import useAppStore from './modules/app';
import useUserStore from './modules/user';
// import useTagStore from './modules/tag'

const pinia = createPinia();

export { useAppStore, useUserStore };
export default pinia;
