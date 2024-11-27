<template>
  <div class=''>
    <div v-for="(val, index) in imgs" :key="index">
      <img v-lazy="val" width="500" height="300" :data-src="val">
    </div>
  </div>
</template>

<script setup lang='ts'>
import { Directive } from 'vue';


// glob 懒加载  会进行代码分包
// eager: true 等于globEager  import xx form 'xxx'  需要.default

const imgList: Record<string, { default: string }> = import.meta.glob('@/assets/imgs/*.*', {
  eager: true
})

// console.log(imgList);

const imgs = Object.values(imgList).map(val => val.default)

// console.log(imgs);

const vLazy: Directive = async (el, binding) => {
  const def = await import('@/assets/vue.svg');
  el.src = def.default;
  // intersectionRatio 目标元素与其交叉区域的比例，值在 0 到 1 之间
  // isIntersecting  布尔值，指示目标元素是否与视口相交。
  const imgObserve = new IntersectionObserver(([{isIntersecting, intersectionRatio}]) => {
    if (intersectionRatio > 0 || isIntersecting) {
      el.src = binding.value
      imgObserve.unobserve(el);
    }
  })
  imgObserve.observe(el);
}






</script>

<style scoped lang='scss'></style>