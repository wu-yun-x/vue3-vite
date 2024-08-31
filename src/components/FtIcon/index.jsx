import { h, resolveComponent, defineComponent } from 'vue';

const ElementPlusIcon = (name, size, color, className) => (
    <el-icon class={[className, 'ft-icon']} size={size} color={color}>
        {h(resolveComponent(name))}
    </el-icon>
);
// 传统的使用方式，i标签+class名
const OtherIcon = (name, size, color, className) => (
    <i
        class={[className, `ft-icon ${name}`]}
        style={`font-size:${size}; color: ${color};vertical-align: middle;`}
    ></i>
);

export default defineComponent({
    name: 'FtIcon', // 组件名：关键点，引用的组件名都是来自这里
    props: {
        name: {
            // icon的名称，elementPlus的前加el-icon
            type: String,
            required: true,
        },
        size: {
            // 字体大小
            type: String,
            default: '',
        },
        color: {
            // 字体颜色
            type: String,
            default: '',
        },
        class: {
            // 附加class
            type: String,
            default: '',
        },
    },
    setup(props) {
        if (props.name.indexOf('el-icon') === 0) {
            return () =>
                ElementPlusIcon(
                    props.name.split('el-icon ')[1],
                    props.size,
                    props.color,
                    props.class,
                );
        } else {
            return () =>
                OtherIcon(props.name, props.size, props.color, props.class);
        }
    },
});
