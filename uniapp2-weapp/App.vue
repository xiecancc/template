<script>
  export default {
    onLaunch() {

    },
    onShow() {

    },
    onHide() {

    }
  }
</script>

<style lang="scss">
  /*每个页面公共css */
  @import '@/uni_modules/uni-scss/index.scss';

  /* #ifdef MP-WEIXIN */
  @import "/wxcomponents/vant/common/index.wxss";
  /* #endif */

  // 生成ellipsis-1至ellipsis-10
  @for $i from 1 through 10 {
    .ellipsis-#{$i} {
      @include ellipsis($i)
    }
  }

  uni-swiper {
    image {
      width: 100%;
    }
  }
</style>
