<<template>
    <div>
            <h1>ChildVue3</h1>
            <button @click="testrender()">11111</button>
        </div>
</template>
<<script>
export default {
    name:'child3',
    data:function () {
        return {
            level:[1,2,3,4,5]
        }
    },
    methods:{
        testrender:function () {
            alert('ok')
        }
    }
}
</script>
