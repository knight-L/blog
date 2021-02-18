/*
 * @Description:
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-31 22:11:23
 * @LastEditors: Knight
 * @LastEditTime: 2021-01-31 22:21:50
 */
/**
//  * 判断是否有路由的权限
//  * @param authority 路由权限配置
//  * @param permissions 用户权限集合
//  * @returns {boolean|*}
//  */
// function hasPermission(authority: any, permissions: any[]) {
//     let required = "*";
//     if (typeof authority === "string") {
//         required = authority;
//     } else if (typeof authority === "object") {
//         required = authority.permission;
//     }
//     return (
//         required === "*" ||
//         (permissions &&
//             permissions.findIndex(
//                 (item) => item === required || item.id === required
//             ) !== -1)
//     );
// }

// /**
//  * 判断是否有路由需要的角色
//  * @param authority 路由权限配置
//  * @param roles 用户角色集合
//  */
// function hasRole(authority: any, roles: any) {
//     let required = undefined;
//     if (typeof authority === "object") {
//         required = authority.role;
//     }
//     return authority === "*" || hasAnyRole(required, roles);
// }

// /**
//  * 判断是否有需要的任意一个角色
//  * @param required {String | Array[String]} 需要的角色，可以是单个角色或者一个角色数组
//  * @param roles 拥有的角色
//  * @returns {boolean}
//  */
// function hasAnyRole(required: any[], roles: any[]) {
//     if (!required) {
//         return false;
//     } else if (Array.isArray(required)) {
//         return (
//             roles.findIndex((role: { id: any; }) => {
//                 return (
//                     required.findIndex((item) => item === role || item === role.id) !== -1
//                 );
//             }) !== -1
//         );
//     } else {
//         return (
//             roles.findIndex((role: { id: any; }) => role === required || role.id === required) !==
//             -1
//         );
//     }
// }

// /**
//  * 路由权限校验
//  * @param route 路由
//  * @param permissions 用户权限集合
//  * @param roles 用户角色集合
//  * @returns {boolean}
//  */
// function hasAuthority(route: { meta: { pAuthorities: any; authority: any; }; }, permissions: any[], roles: any) {
//     const authorities = [...route.meta.pAuthorities, route.meta.authority];
//     for (let authority of authorities) {
//         if (!hasPermission(authority, permissions) && !hasRole(authority, roles)) {
//             return false;
//         }
//     }
//     return true;
// }

// /**
//  * 根据权限配置过滤菜单数据
//  * @param menuData
//  * @param permissions
//  * @param roles
//  */
// function filterMenu(menuData: any[], permissions: any, roles: any) {
//     menuData.forEach((menu: any) => {
//         if (menu.meta && menu.meta.invisible === undefined) {
//             menu.meta.invisible = !hasAuthority(menu, permissions, roles);
//             if (menu.children && menu.children.length > 0) {
//                 filterMenu(menu.children, permissions, roles);
//             }
//         }
//     });
// }

// export { filterMenu, hasAuthority };