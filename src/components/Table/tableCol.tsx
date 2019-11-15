import { Component, Vue, Inject, Prop, Watch } from 'vue-property-decorator';

@Component
export default class ZTableCol extends Vue {
  /* ************************ Props ************************* */
  @Prop({
    type: Number
  })
  private tableWidth!: number; // 表格宽度

  /* ************************ Inject ************************ */
  @Inject()
  private table!: any;

  /* ************************ Main ************************** */
  @Watch('tableWidth', { immediate: true, deep: true })
  private getWidth(val: number, oldVal: number) {
    console.log(val, oldVal);
  }

  private get getCOLs(): JSX.Element[] {
    return this.table.column.map((item: any) => <col style={{ width: item.width }} />);
  }

  /* ************************ Render ************************ */
  render() {
    // return <colgroup>{this.getCOLs}</colgroup>;
    return (
      <colgroup>
        <col style={{ width: '50px' }} />
        <col style={{ width: '50px' }} />
        <col style={{ width: '50px' }} />
        <col style={{ width: '100px' }} />
      </colgroup>
    );
  }
}
