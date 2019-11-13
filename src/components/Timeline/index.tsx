import { Component, Vue, Prop, Provide } from 'vue-property-decorator';

@Component
export default class ZTimeline extends Vue {
    /**
     * @Param reverse {boolean} @Required false @Default -- @Options -- @Description 节点排序
     */
    @Prop({ type: Boolean, default: false }) private reverse?: boolean;

    @Provide()
    timeline = this;

    render() {
        let slots = this.$slots.default || [];

        if (this.reverse) {
            slots = slots.reverse();
        }

        return (
            <div class="z-timeline">
                <div class="z-timeline-inner">{slots}</div>
            </div>
        );
    }
}
