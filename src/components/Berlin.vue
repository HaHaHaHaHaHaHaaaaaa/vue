<<template>
    <div :style="cssobj">
        这是一个可复用组件:{{list}}
        </div>
</template>

<script>

export default {
    name: 'berlin',
    props: {
        list:Number
    },
    data: function() {
        return {
            cssobj: {
                'color': 'red',
                'fontsize': '16px'
            }
        }
    }
}
</script>
<style>

</style>
