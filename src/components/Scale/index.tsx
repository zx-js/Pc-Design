/*
 * @abstract:
 * @version:
 * @Author: wpp
 * @Date: 2019-11-08 11:48:49
 * @LastEditors: wpp
 * @LastEditTime: 2019-11-19 12:04:50
 */
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class ZScale extends Vue {
  public moveLock: boolean = false;
  public downLock: boolean = false;
  public scaleBox: any = null;
  public cursorChange = {
    left: false,
    bottom: false,
    right: false,
    top: false,
    rightBottom: false
  };

  public moveSize: any = {
    x: 0,
    y: 0
  };

  public scaleSize = {
    w: 0,
    h: 0
  };

  public scleboxSize = {
    width: 0,
    height: 0
  };

  get scaleComputedStyle() {
    const style: any = {
      width: this.scaleSize.w + 'px',
      height: this.scaleSize.h + 'px'
    };
    if (this.cursorChange.rightBottom) {
      style.cursor = 'se-resize';
    } else if (this.cursorChange.right) {
      style.cursor = 'e-resize';
    } else if (this.cursorChange.left) {
      style.cursor = 'w-resize';
    } else if (this.cursorChange.top) {
      style.cursor = 'n-resize';
    } else if (this.cursorChange.bottom) {
      style.cursor = 's-resize';
    }
    return style;
  }

  public mounted() {
    this.scaleBox = this.$refs.scaleBox;
    this.$nextTick(() => {
      this.scaleSize = {
        w: 80,
        h: 80
      };
    });
  }

  public mouseEnterFn(e: any) {
    this.moveLock = true;
    window.onmousemove = this.mouseMoveFn;
    window.onmouseup = this.mouseUpFn;
  }

  public mouseLeaveFn(e: any) {
    this.moveLock = false;
  }

  public mouseMoveFn(e: any) {
    if (!this.downLock) {
      this.setCursorFn(e);
    } else {
      this.setBoxScale(e);
    }
  }

  public setCursorFn(e: any) {
    if (!this.moveLock) {
      return false;
    }
    const limit = 5;
    const xjLimit = 7;
    // 右下角
    if (e.offsetX > (this.scaleBox.offsetWidth - xjLimit) && e.offsetY > (this.scaleBox.offsetHeight - xjLimit)) {
      this.cursorChange.rightBottom = true;
    } else {
      this.cursorChange.rightBottom = false;
    }
    // 左边框
    if (this.yArrange(e.offsetX, this.scaleBox.offsetWidth, limit)) {
      this.cursorChange.left = false;
    } else {
      this.cursorChange.left = false;
    }
    // 右边框
    if (this.jArrange(e.offsetX, this.scaleBox.offsetWidth, limit)) {
      this.cursorChange.right = true;
    } else {
      this.cursorChange.right = false;
    }
    // 下边框
    if (this.jArrange(e.offsetY, this.scaleBox.offsetHeight, limit)) {
      this.cursorChange.bottom = true;
    } else {
      this.cursorChange.bottom = false;
    }
    // 上边框
    if (this.yArrange(e.offsetY, this.scaleBox.offsetHeight, limit)) {
      this.cursorChange.top = false;
    } else {
      this.cursorChange.top = false;
    }
  }

  public setBoxScale(e: any) {
    if (this.cursorChange.right) {
      const size = e.clientX - this.moveSize.x + this.scleboxSize.width;
      const parentWidth = this.scaleBox.parentNode.offsetWidth;
      if (size > parentWidth) {
        this.scaleSize.w = parentWidth;
      } else if (size <= this.scleboxSize.width) {
        this.scaleSize.w = this.scleboxSize.width;
      } else {
        this.scaleSize.w = size;
      }
    }
    if (this.cursorChange.bottom) {
      const size = e.clientY - this.moveSize.y + this.scleboxSize.height;
      const parentHeight = this.scaleBox.parentNode.offsetHeight;
      if (size > parentHeight) {
        this.scaleSize.h = parentHeight;
      } else if (size <= this.scleboxSize.height) {
        this.scaleSize.h = this.scleboxSize.height;
      } else {
        this.scaleSize.h = size;
      }
    }
  }

  public mouseDownFn(e: any) {
    this.downLock = true;
    document.body.style.userSelect = 'none';
    this.moveSize.x = e.clientX;
    this.moveSize.y = e.clientY;
    this.scleboxSize.width = this.scaleBox.offsetWidth;
    this.scleboxSize.height = this.scaleBox.offsetHeight;
  }

  public mouseUpFn(e: any) {
    this.downLock = false;
    document.body.style.userSelect = 'auto';
  }

  public yArrange(clientSize: number, boxSize: number, limit: number) {
    const size = boxSize - clientSize;
    if (size > boxSize - limit && size < boxSize + limit) {
      return true;
    } else {
      return false;
    }
  }

  public jArrange(clientSize: number, boxSize: number, limit: number) {
    const size = boxSize - clientSize;
    if (size > 0 && size < limit) {
      return true;
    } else {
      return false;
    }
  }
  
  public xjArrange(clientSize: number, boxSize: number, limit: number) {
    const size = boxSize - clientSize;
    if (size > 0 && size < limit) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const slotText = this.$slots.default ||
      <div class="zx-scale-item"></div>;
    return <div
      ref="scaleBox"
      class='zx-scale-main'
      style={this.scaleComputedStyle}
      on-mouseenter={this.mouseEnterFn}
      on-mouseleave={this.mouseLeaveFn}
      on-mousedown={this.mouseDownFn}
    >
      {slotText}
    </div>;
  }
}
