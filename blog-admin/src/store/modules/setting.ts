/*
 * @Description:
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-31 19:24:04
 * @LastEditors: Knight
 * @LastEditTime: 2021-01-31 22:18:40
 */
//import { filterMenu } from "../../utils/authority-utils";

export default {
    namespaced: true,
    state: {
        isMobile: false,
        pageMinHeight: 0,
        menuData: [],
        activatedFirst: undefined,
    },
    getters: {
        // menuData(state: { filterMenu: any; menuData: any[]; }, getters: any, rootState: { account: { permissions: any; roles: any; }; }) {
        //     if (state.filterMenu) {
        //         const { permissions, roles } = rootState.account;
        //         filterMenu(state.menuData, permissions, roles);
        //     }
        //     return state.menuData;
        // },
    },
    mutations: {

    },
};
