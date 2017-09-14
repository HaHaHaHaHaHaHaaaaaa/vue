<<template>
    <div>
    <Berlin :list="arr" />
    <input v-model="arr" />
    <www />
    <div>hello world</div>
    <button v-on:click="greet">点击事件</button>
      <button v-on:click="show = !show">
    Toggle
  </button>
  <transition name="slide-fade">
    <p v-if="show">hello1111</p>
  </transition>
    </div>
    
</template>
<script>
import  Berlin  from '../../components/Berlin.vue'
export default {
    name: 'child1',
    components: { Berlin },
    data: function() {
        return { show: true, arr:6666 }
    },
    methods: {
        greet: function() {
            alert('你好王柏林');
        }
    }
}

</script>
<<style>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  transform: translateX(10px);
  opacity: 0;
}
</style>


