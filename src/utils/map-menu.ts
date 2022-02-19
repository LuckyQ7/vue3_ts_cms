import type { RouteRecordRaw } from 'vue-router'
import type { IBreadcrumb } from '@/base-components/breadcrumb/types/index'
interface menus {
  type: number
  children: []
  url: string
}

function mapUserMenusToRoutes(userMenus: any): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  // 加载所有routes
  const allRoutes: RouteRecordRaw[] = []
  // webpack 递归查找 引入一个文件夹
  const routeFiles = require.context('../router/main', true, /\.ts/)
  // 所有文件路径
  const filepath = routeFiles.keys()
  // 取出所有映射
  filepath.map((file) => {
    const route = require('../router/main' + file.split('.')[1])
    allRoutes.push(route.default)
  })

  const _recurseGetRoute = (menus: menus[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((itme) => itme.path === menu.url)
        if (route) routes.push(route)
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)
  // 根据菜单获取需要routes
  return routes
}

export function pathMapToMenu(userMenus: any[], currentPath: string): any {
  const breadcrumbs: IBreadcrumb[] = []
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs.push({ name: menu.name, path: menu.url })
        breadcrumbs.push({ name: findMenu.name, path: findMenu.url })
        return breadcrumbs
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export default mapUserMenusToRoutes
