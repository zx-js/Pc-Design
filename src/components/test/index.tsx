import { Component, Vue } from 'vue-property-decorator';

@Component
export default class test extends Vue {
    public msg: string = 'This is test page';
    public render(): any {
        return <h1 class="hello-world">{this.msg}</h1>;
    }
}
