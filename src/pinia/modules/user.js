import { defineStore } from 'pinia';
import {
    getUserInfo as getUserInfoStorage,
    // setUserInfo as setUserInfoStorage,
} from '@/utils/webStorage';
import { getUserInfo as apiGetUserInfo } from '@/api/user';

import router from '@/router';
// import routes from '@/router/router.config';
// import { flattenTree } from '@/utils/dealData';

const useUserStore = defineStore('user', {
    state: () => ({
        userInfo: getUserInfoStorage(),
        buttons: [],
        routes: [],
    }),
    actions: {
        getUserInfo(isLocal) {
            return new Promise((resolve, reject) => {
                if (isLocal) {
                    // 本地模式下，不使用接口，直接记载本地路由
                    this.userInfo = {};
                    this.buttons = [];
                    // this.routes = [...routes];
                    // flattenTree(routes).forEach((item) => {
                    //     router.addRoute('layout', item);
                    // });
                    router.addRoute({
                        path: '/:pathMatch(.*)',
                        name: '404',
                        redirect: '/404',
                        component: () => import('@/views/Error/NotFound.vue'),
                    });
                    resolve();
                } else {
                    // 非本地模式下，通过接口获取路由权限
                    apiGetUserInfo().then((res) => {
                        this.userInfo = res.data.userInfo;
                        this.buttons = res.data.buttons;
                        this.routes = res.data.routes;
                        // flattenTree(routes).forEach((item) => {
                        //     router.addRoute('layout', item);
                        // });
                        router.addRoute({
                            path: '/:pathMatch(.*)',
                            name: '404',
                            redirect: '/404',
                            component: () =>
                                import('@/views/Error/NotFound.vue'),
                        });
                        resolve();
                    });
                }
            });
        },
        logout() {
            this.userInfo = {};
            this.buttons = [];
            this.routes = [];
            sessionStorage.clear();
            router.push('/login');
        },
    },
});

export default useUserStore;
