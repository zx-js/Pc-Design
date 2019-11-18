import { Component, Vue, Prop, Provide } from 'vue-property-decorator';
import { VNode } from 'vue';

@Component
export default class ZTimeline extends Vue {
  @Prop({ type: Boolean, default: false }) private reverse?: boolean; // 节点排序

  @Provide()
  private timeline: Vue = this;

  render() {
    let slots: VNode[] = this.$slots.default || [];

    if (this.reverse) {
      slots = slots.reverse();
    }

    return (
      <div class="zx-timeline">
        <div class="zx-timeline-inner">{slots}</div>
      </div>
    );
  }
}
