/*
 * @Author: your name
 * @Date: 2021-07-20 16:39:43
 * @LastEditTime: 2021-07-20 16:52:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \polymerize\src\locales\i18n.js
 */
import { createI18n } from 'vue-i18n' //引入vue-i18n组件
import messages from './index'
const language = (
  (navigator.language ? navigator.language : navigator.userLanguage) || "zh-chs").toLowerCase();
const i18n = createI18n({
  fallbackLocale: 'ch',
  globalInjection:true,
  legacy: false,
  locale: language.split("-")[0] || "zh-chs",
  messages,
});

export default i18n