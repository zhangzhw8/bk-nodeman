<template>
  <article class="cloud-manager">
    <!--提示-->
    <section class="cloud-tips mb20">
      <tips :list="tipsList"></tips>
    </section>
    <!--内容区域-->
    <section class="cloud-content">
      <div class="content-header mb15">
        <div>
          <!--创建云区域-->
          <auth-component
            tag="div"
            :authorized="authority.create_action"
            :apply-info="[{ action: 'cloud_create' }]">
            <template slot-scope="{ disabled }">
              <bk-button
                theme="primary"
                :disabled="disabled"
                ext-cls="header-btn"
                @click="handleAddCloud">
                {{ $t("新建") }}
              </bk-button>
            </template>
          </auth-component>
          <bk-dropdown-menu
            class="ml10"
            ref="copyIpDropdown"
            trigger="click"
            font-size="medium"
            :disabled="!checkableRowsAll"
            @show="cpyDropdownShow = true"
            @hide="cpyDropdownShow = false">
            <bk-button class="dropdown-btn" slot="dropdown-trigger" :disabled="!checkableRowsAll">
              <span class="icon-down-wrapper">
                <span>{{ $t('复制') }}</span>
                <i :class="['bk-icon icon-angle-down', { 'icon-flip': cpyDropdownShow }]"></i>
              </span>
            </bk-button>
            <ul class="bk-dropdown-list" slot="dropdown-content">
              <li>
                <a :class="{ 'item-disabled': !hasSelectedRows }" @click.prevent.stop="handleCopyProxyIp('selected')">
                  {{ $t('勾选云区域的ProxyIP') }}
                </a>
              </li>
              <li>
                <a @click.prevent="handleCopyProxyIp('all')">{{ $t('所有云区域的ProxyIP') }}</a>
              </li>
            </ul>
          </bk-dropdown-menu>
        </div>
        <!--搜索云区域-->
        <bk-input
          :placeholder="$t('搜索名称')"
          right-icon="bk-icon icon-search"
          ext-cls="header-input"
          v-model.trim="searchValue"
          @change="handleValueChange">
        </bk-input>
      </div>

      <!--云区域列表-->
      <div class="content-table" v-bkloading="{ isLoading: loading }">
        <bk-table
          :class="`head-customize-table ${ fontSize }`"
          :max-height="windowHeight - 240"
          :pagination="pagination"
          :span-method="colspanHandle"
          :data="tableData"
          @page-change="handlePageChange"
          @page-limit-change="handlePageLimitChange">
          <bk-table-column
            key="selection"
            width="70"
            :render-header="renderSelectionHeader">
            <template #default="{ row }">
              <bk-checkbox
                :value="row.selected"
                :disabled="!row.proxyCount"
                @change="handleRowCheck(arguments, row)">
              </bk-checkbox>
            </template>
          </bk-table-column>
          <bk-table-column :label="$t('云区域名称')" prop="cloudNameCopy" sortable show-overflow-tooltip>
            <template #default="{ row }">
              <auth-component
                :class="{ 'text-btn': row.view }"
                :authorized="row.view"
                :apply-info="[{
                  action: 'cloud_view',
                  instance_id: row.bkCloudId,
                  instance_name: row.bkCloudName
                }]"
                @click="handleGotoDetail(row)">
                {{ row.bkCloudName }}
              </auth-component>
            </template>
          </bk-table-column>
          <bk-table-column :label="$t('云区域ID')" prop="bkCloudId"></bk-table-column>
          <bk-table-column align="right" width="55" :resizable="false">
            <template #default="{ row }">
              <img :src="`data:image/svg+xml;base64,${row.ispIcon}`" class="col-svg" v-if="row.ispIcon">
            </template>
          </bk-table-column>
          <bk-table-column :label="$t('云服务商')" prop="ispName" sortable show-overflow-tooltip>
            <template #default="{ row }">
              {{ row.ispName || '--' }}
            </template>
          </bk-table-column>
          <bk-table-column
            :label="$t('Proxy数量')"
            width="150"
            prop="proxyCount"
            align="right"
            :resizable="false"
            sortable>
            <template #default="{ row }">
              <auth-component
                v-if="row.proxyCount"
                class="auth-inline"
                tag="div"
                :authorized="row.view"
                :apply-info="[{
                  action: 'cloud_view',
                  instance_id: row.bkCloudId,
                  instance_name: row.bkCloudName
                }]">
                <template slot-scope="{ disabled }">
                  <bk-popover width="240" placement="top" :disabled="row.proxyCount !== 1">
                    <bk-button
                      ext-cls="col-btn"
                      theme="primary"
                      text
                      :disabled="disabled"
                      @click="handleGotoDetail(row)">
                      {{ row.proxyCount }}
                      <span v-if="row.proxyCount === 1" class="count-warning-text">!</span>
                    </bk-button>
                    <div slot="content">
                      {{ $t('proxy数量提示') }}
                    </div>
                  </bk-popover>
                </template>
              </auth-component>
              <auth-component
                v-else
                class="auth-inline"
                :authorized="!!proxyOperateList.length"
                :apply-info="[{ action: 'proxy_operate' }]">
                <template slot-scope="{ disabled }">
                  <span class="install-proxy" :disabled="disabled" v-bk-tooltips="$t('点击前往安装')">
                    <span @click="handleInstallProxy(row)">{{ $t('未安装') }}</span>
                    <span class="count-error-text">!</span>
                  </span>
                </template>
              </auth-component>
            </template>
          </bk-table-column>
          <bk-table-column :label="$t('节点数量')" prop="nodeCount" align="right" :resizable="false" sortable>
            <template #default="{ row }">
              <span v-if="row.nodeCount" class="text-btn" @click="handleGotoAgent(row)">{{ row.nodeCount }}</span>
              <span v-else>0</span>
            </template>
          </bk-table-column>
          <bk-table-column align="right" min-width="40"></bk-table-column>
          <bk-table-column :label="$t('接入点')" prop="apName" show-overflow-tooltip></bk-table-column>
          <bk-table-column
            prop="colspaOpera"
            :label="$t('操作')"
            :width="fontSize === 'large' ? 175 : 155"
            :resizable="false">
            <template #default="{ row }">
              <auth-component
                tag="div"
                :authorized="row.view && !!proxyOperateList.length"
                :apply-info="row.view ? [{ action: 'proxy_operate' }] : [
                  {
                    action: 'proxy_operate'
                  },
                  {
                    action: 'cloud_view',
                    instance_id: row.bkCloudId,
                    instance_name: row.bkCloudName
                  }
                ]">
                <template slot-scope="{ disabled }">
                  <bk-button
                    text
                    ext-cls="col-btn"
                    theme="primary"
                    :disabled="disabled"
                    @click="handleInstallProxy(row)">
                    {{ $t("Proxy安装") }}
                  </bk-button>
                </template>
              </auth-component>
              <auth-component
                class="auth-inline"
                tag="div"
                :authorized="row.edit"
                :apply-info="[{
                  action: 'cloud_edit',
                  instance_id: row.bkCloudId,
                  instance_name: row.bkCloudName
                }]">
                <template slot-scope="{ disabled }">
                  <bk-button
                    ext-cls="col-btn ml10"
                    theme="primary" text
                    :disabled="disabled"
                    @click="handleEdit(row)">
                    {{ $t("编辑") }}
                  </bk-button>
                </template>
              </auth-component>
              <auth-component
                class="auth-inline"
                tag="div"
                :authorized="row.delete"
                :apply-info="[{
                  action: 'cloud_delete',
                  instance_id: row.bkCloudId,
                  instance_name: row.bkCloudName
                }]">
                <template slot="default" slot-scope="{ disabled }">
                  <bk-popover :content="deleteTips" :disabled="!(row.proxyCount || row.nodeCount)" class="ml10">
                    <bk-button
                      ext-cls="col-btn"
                      :disabled="disabled || !!(row.proxyCount || row.nodeCount)"
                      theme="primary"
                      text
                      @click="handleDelete(row)">
                      {{ $t("删除") }}
                    </bk-button>
                  </bk-popover>
                </template>
              </auth-component>
            </template>
          </bk-table-column>
          <!--自定义字段显示列-->
          <bk-table-column
            key="setting"
            prop="colspaSetting"
            :render-header="renderHeader"
            width="42"
            :resizable="false">
          </bk-table-column>
        </bk-table>
      </div>
    </section>
  </article>
</template>
<script lang="ts">
import { Vue, Component, Prop, Ref } from 'vue-property-decorator';
import { MainStore, CloudStore } from '@/store/index';
import { IBkColumn } from '@/types';
import { ICloud } from '@/types/cloud/cloud';
import Tips from '@/components/common/tips.vue';
import ColumnSetting from '@/components/common/column-setting.vue';
import ColumnCheck from '@/views/agent/components/column-check.vue';
import { copyText, debounce } from '@/common/util';
import { CreateElement } from 'vue';

interface ICloudRow extends ICloud {
  selected: boolean
  cloudNameCopy?: string
}

@Component({
  name: 'cloud-manager',
  components: {
    Tips,
  },
})

export default class CloudManager extends Vue {
  @Prop({ type: Number, default: 0 }) private readonly id!: number; // 编辑ID

  @Ref('copyIpDropdown') private readonly copyIpDropdown!: any;

  // 提示信息
  private tipsList = [
    this.$t('云区域管理提示一'),
  ];
  // 表格属性
  private table: {
    list: ICloudRow[]
    data: ICloudRow[]
  } = {
    list: [],
    data: [],
  };
  private pagination = {
    current: 1,
    limit: 20,
    count: 0,
  };
  // 搜索值
  private searchValue = '';
  // 支持搜索的字段
  private searchParams = [
    'bkCloudName',
    'bkCloudId',
    'ispName',
    'apName',
  ];
  // 搜索防抖
  private handleValueChange() {}
  // 表格加载
  private loading = false;
  // 删除操作禁用提示
  private deleteTips = this.$t('删除禁用提示');
  private isSelectAllPages = false;
  private excludedRows: ICloudRow[] = [];
  private cpyDropdownShow = false;

  private get fontSize() {
    return MainStore.fontSize;
  }
  private get permissionSwitch() {
    return MainStore.permissionSwitch;
  }
  private get authority() {
    return CloudStore.authority;
  }
  private get tableData() {
    const { current, limit } = this.pagination;
    const start = (current - 1) * limit;
    return this.table.data.slice(start, start + limit);
  }
  private get proxyOperateList() {
    return this.authority.proxy_operate || [];
  }
  private get windowHeight() {
    return MainStore.windowHeight;
  }
  // 是否已选择
  private get hasSelectedRows() {
    return this.tableData.some(item => !!item.selected);
  }
  // 当前页可是否可全选
  private get checkableRows() {
    return this.tableData.some(item => !!item.proxyCount);
  }
  // 是否可跨页全选
  private get checkableRowsAll() {
    return this.table.data.some(item => !!item.proxyCount);
  }
  // 当前是否是半选状态
  private get indeterminate() {
    if (this.isSelectAllPages) {
      // 跨页全选半选状态
      return !this.isAllChecked && !!this.excludedRows.length;
    }
    return !this.isAllChecked && this.tableData.some(item => item.selected);
  }
  // 是当前否为全选
  private get isAllChecked() {
    if (this.isSelectAllPages) {
      // 标记删除的数组为空
      return !this.excludedRows.length;
    }
    return this.tableData.every(item => item.selected || !item.proxyCount)
      && !this.tableData.every(item => !item.proxyCount);
  }

  private created() {
    this.handleInit();
  }
  private mounted() {
    this.handleValueChange = debounce(300, this.handleSearch);
  }

  /**
   * 初始化
   */
  private async handleInit() {
    this.loading = true;
    const promiseAll = [CloudStore.getCloudList()];
    const [data] = await Promise.all(promiseAll);
    if (this.permissionSwitch) {
      data.sort((a, b) => Number(b.view) - Number(a.view));
    }
    // 利用组件自带的排序给云区域名称做一个不区分大小写的排序优化
    this.table.list = data.map((item: ICloud) => ({
      ...item,
      selected: false,
      cloudNameCopy: item.bkCloudName.toLocaleLowerCase(),
    }));
    this.handleSearch();
    this.loading = false;
  }
  /**
   * 前端搜索
   */
  private handleSearch() {
    this.table.list.forEach(item => item.selected = false);
    this.table.data = this.searchValue.length === 0
      ? this.table.list
      : this.table.list.filter((item: any) => this.searchParams.some((param) => {
        const value = this.searchValue.toLocaleLowerCase();
        return item[param] && ~(item[param]).toString().toLocaleLowerCase()
          .indexOf(value);
      }));
    this.pagination.current = 1;
    this.pagination.count = this.table.data.length;
  }
  /**
   * 编辑
   * @param {Object} row
   */
  private handleEdit(row: ICloud) {
    this.$router.push({
      name: 'addCloudManager',
      params: {
        id: `${row.bkCloudId}`,
        type: 'edit',
      },
    });
  }
  /**
   * 删除
   * @param {Object} row
   */
  private handleDelete(row: ICloud) {
    const deleteCloud = async (id: number) => {
      this.loading = true;
      const result = await CloudStore.deleteCloud(id);
      if (result) {
        this.$bkMessage({
          theme: 'success',
          message: this.$t('删除成功'),
        });
        this.handleInit();
      } else {
        this.loading = false;
      }
    };
    this.$bkInfo({
      title: this.$t('确定删除该云区域'),
      confirmFn: () => {
        deleteCloud(row.bkCloudId);
      },
    });
  }
  /**
   * 添加云区域
   */
  private handleAddCloud() {
    this.$router.push({
      name: 'addCloudManager',
      params: {
        type: 'add',
      },
    });
  }
  /**
   * 跳转详情
   * @param {Object} row
   */
  private handleGotoDetail(row: ICloud) {
    this.$router.push({
      name: 'cloudManagerDetail',
      params: {
        id: `${row.bkCloudId}`,
      },
    });
  }
  /**
   * 新增Proxy
   */
  private handleInstallProxy(row: ICloud) {
    this.$router.push({
      name: 'setupCloudManager',
      params: {
        type: 'create',
        id: `${row.bkCloudId}`,
      },
    });
  }
  /**
   * 自定义字段显示列
   * @param {createElement 函数} h 渲染函数
   */
  private renderHeader(h: CreateElement) {
    return h(ColumnSetting);
  }
  /**
   * 合并最后两列
   */
  private colspanHandle({ column }: { column: IBkColumn }) {
    if (column.property === 'colspaOpera') {
      return [1, 2];
    } if (column.property === 'colspaSetting') {
      return [0, 0];
    }
  }
  /**
   * 跳转agent并筛选出云区域
   */
  private handleGotoAgent(row: ICloud) {
    MainStore.setSelectedBiz([]);
    this.$router.push({
      name: 'agentStatus',
      params: {
        cloud: {
          id: row.bkCloudId,
          name: row.bkCloudName,
        },
        agentNum: `${row.nodeCount}`,
      },
    });
  }
  private handlePageChange(newPage: number) {
    this.pagination.current = newPage || 1;
  }
  private handlePageLimitChange(limit: number) {
    this.pagination.limit = limit || 20;
    this.handlePageChange(1);
  }
  private renderSelectionHeader(h: CreateElement) {
    return h(ColumnCheck, {
      ref: 'customSelectionHeader',
      props: {
        indeterminate: this.indeterminate,
        isAllChecked: this.isAllChecked,
        disabled: !this.checkableRows,
        disabledCheckAll: !this.checkableRowsAll,
      },
      on: {
        change: (value: boolean, type: string) => this.handleCheckAll(value, type),
      },
    });
  }
  private handleRowCheck(arg: boolean[], row: ICloudRow) {
    // 跨页全选采用标记删除法
    if (this.isSelectAllPages) {
      if (!arg[0]) {
        this.excludedRows.push(row);
      } else {
        const index = this.excludedRows.findIndex(item => item.bkCloudId === row.bkCloudId);
        if (index > -1) {
          this.excludedRows.splice(index, 1);
        }
      }
    }
    row.selected = !!arg[0];
  }
  private async handleCheckAll(value: boolean, type: string) {
    if (type === 'current' && !this.checkableRows) return;
    if (type === 'all' && !this.checkableRowsAll) return;
    // 跨页全选
    this.isSelectAllPages = value && type === 'all';
    // 删除标记数组
    this.excludedRows.splice(0, this.excludedRows.length);
    if (this.isSelectAllPages) {
      this.table.data.forEach((row) => {
        if (row.proxyCount) {
          row.selected = value;
        }
      });
    } else {
      this.tableData.forEach((row) => {
        if (row.proxyCount) {
          row.selected = value;
        }
      });
    }
  }
  private async handleCopyProxyIp(type: 'selected' | 'all') {
    if (type === 'selected' && !this.hasSelectedRows) return;
    if (type === 'all' && !this.checkableRowsAll) return;

    const rows = type === 'selected'
      ? this.table.data.filter(item => item.selected) : this.table.data.filter(item => !!item.proxyCount);
    const data: string[] = [];
    rows.forEach((item) => {
      data.push(...(item.proxies || []).map((proxy: Dictionary) => proxy.innerIp));
    });
    const checkedIpText = data.join('\n');
    if (!checkedIpText) return;
    const result = copyText(checkedIpText);
    if (result) {
      this.$bkMessage({ theme: 'success', message: this.$t('IP复制成功', { num: data.length }) });
    }
    this.copyIpDropdown.hide();
  }
}
</script>
<style lang="postcss" scoped>
@import "@/css/mixins/nodeman.css";
@import "@/css/variable.css";

>>> .bk-table-header th.is-right.is-sortable .cell {
  position: relative;
  left: 20px;
}
.cloud-manager {
  padding-bottom: 20px;
}
.content-header {
  @mixin layout-flex row, center, space-between;
  .header-btn {
    width: 120px;
  }
  .header-input {
    width: 500px;
  }
  .item-disabled {
    cursor: not-allowed;
    color: #c4c6cc;
    &:hover {
      background: transparent;
      color: #c4c6cc;
    }
  }
}
.content-table {
  .col-svg {
    margin-top: 5px;
    height: 20px;
    margin-right: -15px;
  }
  .col-btn {
    padding: 0;
    .count-warning-text {
      font-weight: 600;
      color: #ff9c01;
    }
  }
  .text-btn {
    color: #3a84ff;
    cursor: pointer;
    &[disabled] {
      color: #dcdee5;
    }
  }
  .auth-inline {
    display: inline;
  }
  .install-proxy {
    cursor: pointer;
    .count-error-text {
      font-weight: 600;
      color: #ea3636;
    }
    &:hover {
      color: #3a84ff;
    }
    &[disabled] {
      color: #dcdee5;
    }
  }
}
</style>
