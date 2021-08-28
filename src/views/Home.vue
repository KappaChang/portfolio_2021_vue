<template>
  <div class="home">
    <navigator />
    <div class="page">
      <router-view />
    </div>
    <bottomFooter />
  </div>
</template>

<script>
import navigator from '@/components/Navigator.vue'
import bottomFooter from '@/components/Footer.vue'
export default {
  name: 'Home',
  components: {
    navigator,
    bottomFooter
  },
  data() {
    return{

    }
  },
}

</script>
