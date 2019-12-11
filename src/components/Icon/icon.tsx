import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Icon extends Vue {
  @Prop({
    type: String,
    default: ""
  })
  private type!: string;
  private get classes(): string {
    let className: string = "iconfont zxicon zx";
    return className + (this.type || "-loading");
  }
  render(): JSX.Element {
    const { classes, $slots } = this;
    return <i class={classes}>{$slots.default}</i>;
  }
}
