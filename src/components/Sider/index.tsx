import { Vue, Component } from 'vue-property-decorator';
@Component
export default class MtSider extends Vue {
    public msg: string = 'This is sider box';
    render() {
        return <div>{this.msg}</div>;
    }
}
