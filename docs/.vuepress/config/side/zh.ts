import { SidebarConfigArray, SidebarConfigObject } from "vuepress";

export const SideItems4ZH: false | 'auto' | SidebarConfigArray | SidebarConfigObject = {
  '/javascript/': [
    {
      text: 'JavaScript',
      collapsible: false,
      children: [
        {
          text: '发布订阅模式JavaScript实现',
          link: '/javascript/发布订阅模式JavaScript实现.md'
        },
        {
          text: '防抖与节流',
          link: '/javascript/防抖与节流.md'
        },
      ]
    },
  ],
  '/vue/': [
    {
      text: 'Vue',
      children: [
        {
          text: '首页',
          link: '/vue/index.md'
        }
      ]
    }
  ]
}