import { defineStore } from 'pinia';
// import { getAppIsCollapse, setAppIsCollapse } from '@/utils/webStorage.js';

const useAppStore = defineStore('app', {
    state: () => {
        return {
            // isCollapse: getAppIsCollapse()
        };
    },
    actions: {
        toggleCollapse() {
            // this.isCollapse = !this.isCollapse;
            // setAppIsCollapse('isCollapse', this.isCollapse);
        },
    },
});

export default useAppStore;
