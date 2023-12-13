import { defaultTheme, defineUserConfig } from 'vuepress';
import { NavItems4ZH } from './config/nav/zh';
import { SideItems4ZH } from './config/side/zh';

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Hello Front-End',
  description: '前端面试集',
  theme: defaultTheme({
    logo: null,
    logoDark: null,
    repo: `https://github.com/HduSy/2020-Front-end-Interview`,
    navbar: NavItems4ZH,
    sidebar: SideItems4ZH,
  }),
  plugins: []
})