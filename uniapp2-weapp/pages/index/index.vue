<template>
  <view>

  </view>
</template>

<script>
  export default {
    data() {
      return {
        params: {
          page: 1, // 当前页码
          limit: 20, // 分页大小
          // 其他的参数  
        },
        list: [], // 列表数据
      }
    },
    methods: {
      // 获取列表数据
      getList() {
        uni.$http({
          url: "列表请求地址", // 请求地址
          data: {
            ...this.params
          }, // 请求参数
          method: "GET", // 请求方式
        }).then((data) => {
          // data服务器返回的数据
          // data.data => 获取的列表数据
          this.list = [...this.list, data.data]
        })
      }
    },
    created() {
      // 加载数据
      this.getList()
    },
    onPullDownRefresh() {
      // 加载第一页
      this.params.page = 1;
      this.list = [];

      // 重新请求数据
      this.getList()
    },
    onReachBottom() {
      // 有时需要判断最后一页 => 总页数
      // if(this.params.page > 总页数) return;

      // 加载下一页
      this.params.page++;
      // 重新请求数据
      this.getList()
    }
  }
</script>

<style lang="scss">
</style>
