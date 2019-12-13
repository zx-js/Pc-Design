import { Component, Vue, Provide, Emit } from 'vue-property-decorator';

/*************************** Props ****************************/
const BaseProps = Vue.extend({
  props: {
    // 标题
    title: {
      required: false,
      type: String,
      default() {
        return 'aaa';
      }
    }
  },
  data() {
    return {
      a: 'a'
    };
  }
});

@Component
export default class ZSelectOption extends BaseProps {
  /* ************************ Provide ************************ */
  @Provide()
  private selectOption: Vue = this;

  /* ************************ Main *************************** */

  @Emit('change')
  private change(e: MouseEvent): MouseEvent {
    return e;
  }

  private aa: string = 'aa';

  /* ************************ Render ************************* */
  render() {
    return (
      <div class="z-select-option">
        <span>select option</span>
      </div>
    );
  }
}
