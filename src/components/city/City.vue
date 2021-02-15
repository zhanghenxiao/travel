<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
    </div>
</template>

<script>
import cityHeader from './components/Header'
import citySearch from './components/Search'
export default {
    name: 'City',
    components: {
        cityHeader,
        citySearch
    },
    data() {
        return {
            
        };
    },
    mounted() {
        
    },
    methods: {
        
    },
};
</script>

<style lang="stylus" scoped>

</style>