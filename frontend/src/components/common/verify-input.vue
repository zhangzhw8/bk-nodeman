<template>
  <div @click="handleFocus" class="step-verify-input" :class="{ 'is-error': validator.show || proxyStatus }">
    <slot></slot>
    <!-- 冲突提示 -->
    <span
      class="error-top-tag"
      v-if="validator.show && validator.errTag && validator.content.indexOf($t('冲突reg')) !== -1">
      {{ $t('冲突') }}
    </span>
    <!-- 右侧提示 -->
    <span
      class="bk-icon icon-exclamation-circle-shape tooltips-icon"
      :style="iconOffsetStyle"
      v-else-if="validator.show && position === 'right'"
      v-bk-tooltips.right="validator">
    </span>
    <!-- 底部提示 -->
    <p class="bottom-text" v-else-if="validator.show && position === 'bottom'">{{ validator.content }}</p>
    <!-- Proxy校验提示 -->
    <bk-popover
      v-bind="{
        placement: 'top-end',
        delay: 275,
        tippyOptions: {
          boundary: 'window'
        },
        theme: 'light proxy-tips'
      }"
      v-else-if="proxyStatus && !validator.show">
      <span class="bk-icon icon-exclamation-circle-shape tooltips-icon proxy"></span>
      <template #content>
        <i18n :path="proxyStatus === 'no_proxy' ? 'Proxy未安装' : 'Proxy过期' " ref="content">
          <span class="btn" @click.stop="handleClick">{{ proxyStatus === 'no_proxy' ? $t('前往安装') : $t('前往更新') }}</span>
        </i18n>
      </template>
    </bk-popover>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { isEmpty } from '@/common/util';
import promiseSequence from '@/common/promise-sequence';

interface IValidator {
  show: boolean
  content: string
  errTag: boolean
}
interface IRule {
  regx?: string
  validator?: any
}
type IValue = string | number | boolean | Array<number | string>;

@Component({ name: 'step-verify-input' })

export default class StepVerifyInput extends Vue {
  @Prop({ type: [Number, String], default: 0 }) private readonly id!: string | number;
  @Prop({ type: Object, default: () => ({
    show: false,
    content: '',
    errTag: false,
  }) }) private readonly defaultValidator!: IValidator; // 默认值
  @Prop({ type: String, default: 'bottom' }) private readonly position!: string; // 校验位置
  @Prop({ type: Boolean, default: true }) private readonly required!: boolean; // 是否必填
  @Prop({ type: Array, default: () => ([]) }) private readonly rules!: IRule[]; // 校验规则
  @Prop({ type: String, default: '' }) private readonly proxyStatus!: string; // proxy过期校验
  @Prop({ type: [Number, String], default: '' }) private readonly iconOffset!: string | number; // icon 偏移

  private validator: IValidator = this.defaultValidator;
  private inputInstance: any = null;

  private get iconOffsetStyle() {
    return this.iconOffset ? { right: `${this.iconOffset}px` } : {};
  }

  private created() {
    this.$on('verify-registry', this.handleRegistry);
    this.$on('verify-remove', this.removeRegistry);
  }
  private mounted() {
    this.$off('verify-blur', this.validate);
    this.$off('verify-focus', this.handleFocus);

    this.$on('verify-blur', this.validate);
    this.$on('verify-focus', this.handleFocus);
  }
  private beforeDestroy() {
    this.inputInstance = null;
  }
  public handleFocus() {
    this.validator.content = '';
    this.validator.show = false;
  }
  public handleRegistry(instance: any) {
    this.inputInstance = instance;
  }
  public removeRegistry() {
    this.inputInstance = null;
  }
  public handleValidate(cb: Function) {
    if (!this.inputInstance) return false;
    this.validate(this.inputInstance.inputValue, cb);
  }
  public validate(value: IValue, cb: Function) {
    this.validator.show = false;
    this.validator.content = '';
    // 1. 必填项校验
    if (this.required && isEmpty(value)) {
      this.validator.show = true;
      this.validator.content = window.i18n.t('必填项');
      if (typeof cb === 'function') {
        cb(this.validator);
      }
      return false;
    }
    // 2. rules校验
    const promiseList: any[] = [];
    this.rules && this.rules.forEach((rule) => {
      promiseList.push(() => new Promise(async (resolve, reject) => {
        const result = await this.checkRule(rule, value);
        if (result) {
          resolve(rule);
        } else {
          reject(rule);
        }
      }));
    });
    promiseSequence(promiseList, () => {}).then(() => {
      this.validator.show = false;
      this.validator.content = '';
      if (typeof cb === 'function') {
        cb(this.validator);
      }
    })
      .catch((error: any) => {
        this.validator.show = true;
        this.validator.content = error.content ? error.content : '';
        if (typeof cb === 'function') {
          cb(this.validator);
        }
      });
  }
  public async checkRule(rule: IRule, value: IValue) {
    if (rule.regx && !isEmpty(value)) {
      return new RegExp(rule.regx).test(value as string);
    } if (rule.validator && typeof rule.validator === 'function') {
      const result = await rule.validator(value, this.id);
      return result;
    }
    return true;
  }
  public handleUpdateDefaultValidator() {
    this.validator = JSON.parse(JSON.stringify(this.defaultValidator));
  }
  @Emit('jump-proxy')
  public  handleClick() {}
}
</script>
<style lang="postcss" scoped>
  .step-verify-input {
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    .tooltips-icon {
      position: absolute;
      display: inline-block;
      right: 8px;
      outline: 0;
      font-size: 16px;
    }
    .proxy {
      top: -12px;
    }
    /deep/ .bk-select {
      width: 100%;
    }
  }
  .is-error {
    /deep/ {
      input[type=text],
      .bk-select,
      input[type=password],
      .bk-textarea-wrapper {
        border-color: #ff5656;
      }
      .input-type .input-text {
        border-color: #ff5656;
      }
      .ghost-input {
        border-color: #ff5656;
      }
    }
    .tooltips-icon {
      color: #ea3636;
      cursor: pointer;
    }
    .bottom-text {
      padding-top: 4px;
      color: #ea3636;
      font-size: 12px;
      line-height: 1;
    }
    .error-top-tag {
      position: absolute;
      right: -18px;
      top: -15px;
      display: inline-block;
      padding: 0 10px;
      height: 32px;
      line-height: 32px;
      font-size: 20px;
      border-radius: 4px;
      background: #ea3636;
      color: #fff;
      transform: scale(.5);
    }
  }
</style>
