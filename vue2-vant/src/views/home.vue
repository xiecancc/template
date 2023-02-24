<template>
  <div>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for="item in list" :key="item" :title="item" />
      </van-list>
    </van-pull-refresh>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import { GetList } from '@/api';
import tabBar from '@/components/tab-bar.vue';

export default {
  data() {
    return {
      list: [], // 列表数据源
      total: 0, // 列表总行数
      params: {
        page: 1, // 请求页面，默认第1页
        limit: 100, // 分页大小
      },
      loading: false, // 是否正在加载...
      finished: false, // 是否加载完成，没有更多
      refreshing: false, // 是否正在下拉刷新...
    };
  },
  methods: {
    getList() {
      // 如果是下拉刷新，则加载第1页并清空之前的数据
      if (this.refreshing) {
        this.list = []; // 清空之前的数据
        this.params.page = 1; // 将页面改为第1页
        this.refreshing = false;
      }
      // 请求数据
      GetList(this.params).then((data) => {
        // 合并原有数据和请求的新数据
        this.list = [...this.list, ...data.list];
        // 获取总行数
        this.total = data.total;

        // 修改加载状态为未加载
        this.loading = false;
        // 如果现有数据总数已经达到最大，则加载完成，没有更多数据了
        if (this.list.length == this.total) {
          // 加载完成，没有更多数据
          this.finished = true;
        } else {
          //否则，可以加载下一页
          this.params.page++;
        }
      });
    },
    // 加载更多数据
    onLoad() {
      this.getList();
    },
    // 下拉刷新
    onRefresh() {
      // 正在加载数据
      this.loading = true;
      // 当前状态设置为未加载完成
      this.finished = false;
      // 执行数据加载
      this.onLoad();
    },
  },
  components: {
    tabBar,
  },
};
</script>
