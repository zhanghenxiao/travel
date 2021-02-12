<template>
    <div>
        <h1>home组件</h1>
        <p>动态组件及v-once</p>
        <!-- <child1 v-if="type==='child1'"></child1>
        <child2 v-if="type==='child2'"></child2> -->
        <component :is="type"></component>
        <button @click="change">切换</button>
    </div>
  
</template>

<script>
import child1 from './Child1'
import child2 from './Child2'
export default {
    data() {
        return {
          type: 'child1'  
        }
    },
    components: {
        child1,
        child2
    },
    methods: {
        change() {
            this.type = this.type ==='child1' ? 'child2' : 'child1'
        }
    }
}
</script>

<style lang="stylus">

</style>
