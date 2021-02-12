 <template>
 <div>
     <h1>child组件</h1>
     <p>{{msg}}</p>
 </div>
   
 </template>
 
 <script>
 export default {
    //props: ['msg'],
     props:{
         //传入的类型必须是数字或者字符串类型
         // msg:[Number,String]
         msg: {
              // type: Number,
             // 必填项设置true 或false
             required: false,
             default: 'default value'
         }
     },
     data() {
         return {
             
         }
     }
 
 }
 </script>
 
<style lang="stylus" scoped>

</style>