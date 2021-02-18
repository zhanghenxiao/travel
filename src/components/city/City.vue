<template>
    <div>
        <city-header></city-header>
        <city-search :citylist='cities'></city-search>
        <city-list :hotlist='hotCities' :citylist='cities'></city-list>
        <city-alphabet :citylist='cities'></city-alphabet>
    </div>
</template>

<script>
import cityHeader from './components/Header'
import citySearch from './components/Search'
import cityList from './components/List'
import cityAlphabet from './components/Alphabet'
export default {
    name: 'City',
    components: {
        cityHeader,
        citySearch,
        cityList,
        cityAlphabet
    },
    data() {
        return {
            hotCities: [],
            cities: {},
            
        };
    },
    mounted() {
        this.getInfo()
       
    },
    methods: {
        async getInfo() {
            let {data:{data}} = await this.$http.get('/api/city.json')
            this.hotCities = data.hotCities
            this.cities = data.cities
        },
       
    },
    
};
</script>

<style lang="stylus" scoped>

</style>