import { Component, Vue, Prop, Model, Watch } from 'vue-property-decorator';
import inputProps from './inputProps';

const baseInput = Vue.extend({
  props: {...inputProps},
  model: {
    prop: 'value',
    event: 'change.value',
  },
  data() {
    const { value, modelValue } = this.$props;
    return {
      stateValue: modelValue ? modelValue : value,
    }
  },
})

@Component
export default class ZInput extends baseInput {

  public mounted() {
    // console.log(this.$props);
  }

  // set input classnames
  public setInputClass() {
    const { $slots, $props } = this;
    return {
      [`z-input-${$props.size}`]: $props.size == 'default' ? '' : $props.size,
      'z-input-disabled': $props.disabled,
      'z-input-suffix': $props.suffixIcon || $slots.suffix || $props.clearable,
      'z-input-prefix': $props.prefixIcon || $slots.prefix
    };
  }

  // set icon classnames
  public setIconClass() {
    const { $props, $slots } = this;
    const prefix = $props.prefixIcon || $slots.prefix;
    return {
      [`z-input-icon-${$props.size}`]: prefix ? $props.size : '',
    }
  }

  // render prefixIcon or slot prefixIcon
  public renderPrefixIcon(): JSX.Element {
    const { $props, $slots } = this;
    const prefixIcon = $props.prefixIcon || $slots.prefix;
    if (prefixIcon) {
      return <span class={["z-input-prefix-icon"]}>
        <i class={["iconfont z-icon", $props.prefixIcon]}></i>
        {$slots.prefix}
      </span>
    }
    return null;
  }

  // render clear icon
  public renderClearIcon() {
    const { clearable, disabled } = this.$props;
    const { stateValue, handleClear } = this;
    // 不清空，禁用，值为空
    if (!clearable || disabled || stateValue === '' || stateValue === null || stateValue === undefined) {
      return null;
    }
    const clearIcon = <i class="iconfont zxclose z-icon z-input-clear-icon" onClick={handleClear}></i>;
    return clearIcon;
  }

  // suffix
  public renderSuffixIcon() {
    const { $props, $slots } = this;
    // $slots 直接渲染 $slots.suffix 否则 $props.suffixIcon
    // return $slots.suffix;
    return $slots.suffix ? $slots.suffix : <i class={["iconfont z-icon", $props.suffixIcon]}></i>
  }

  // render suffixIcon
  public renderSuffix() {
    const { $props, $slots, renderClearIcon, renderSuffixIcon } = this;
    const suffixClass = {
      "z-input-suffix-icon": true,
      "z-input-clear-icon": $props.clearable,
    }
    return <span class={suffixClass}>
        {renderClearIcon()}
        {renderSuffixIcon()}
      </span>
  }

  // handleInput
  public handleInput(e: any) {
    const value = e.target.value;
    this.$emit('input', value);
    this.stateValue = value;
  }

  // handleClear
  public handleClear(e: any) {
    this.stateValue = '';
    this.$emit('clear', e);
  }

  // render input
  public renderInput(): JSX.Element {
    const { stateValue, $props, handleInput } = this;
    return <input ref="input"
      value= {stateValue}
      disabled={$props.disabled}
      class={['z-input-inner']}
      placeholder={$props.placeholder}
      on-input={handleInput} />;
  }

  public render() {
    const { renderInput, renderPrefixIcon, renderSuffix, setInputClass } = this;
    return (
      <div class={["z-input", setInputClass()]}>
        {renderPrefixIcon()}
        {renderInput()}
        {renderSuffix()}
      </div>
    )
  }
}
