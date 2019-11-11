import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Ztag extends Vue {
    // tag大小
    @Prop({
        default: "large",
        type: String,
    }) public size!: string;
    // tag是否显示
    @Prop({
        default: true,
        type: Boolean,
    }) public isVisible?: boolean;
    // 是否显示删除按钮
    @Prop({
        default: true,
        type: Boolean,
    }) public isClose?: boolean;
    // 是否有边框
    @Prop({
        default: true,
        type: Boolean,
    }) public isBorder?: boolean;
    // 预设颜色
    @Prop({
        default: "",
        type: String,
    }) public color?: string;
    // 设置颜色类
    public setColorClass() {
        return `z-tag-${this.color}`
    }
    // 设置大小
    public setClass() {
        return `z-tag-${this.size}`;
    }
    // 设置显示或隐藏
    public setVisible() {
        return this.isVisible;
    }
    // 设置是否删除
    public setClose() {
        return this.isClose;
    }
    // 设置边框
    public setBorder() {
        const border = this.isBorder ? 'z-tag-border' : '';
        return border;
    }
    public renderIcon(): any {
        return this.setClose() ? (
            <i class="iconfont zxclose">X</i>
        ) : null;
    }
    public render(): any {
        return (
            <button class={['z-tag', 
                this.setClass(), 
                this.setColorClass(),
                this.setBorder()]}
                v-show={this.setVisible()}>
                tag666666
                {this.renderIcon()}
            </button>
        );
    }
}
