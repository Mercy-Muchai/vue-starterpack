<template>
<div>
<input type="text" v-model="Subscribe"
v-on:keyUp="updateSub(newSubscribe)"/>
<h2> My name is {{Subscribe}} </h2>
</div>
</template>

<script>
import { mapState } from 'vuex'
import { UPDATE_SUB } from '@/store/actionTypes'

export default {
  name: 'Subscribe',
  computed: {
    ...mapState({
      Subscribe: state => state.Subscribe,
      message: 'message'
    })
  },
  methods: {
    updateSub () {
      this.$store.commit(UPDATE_SUB, this.newSubscribe)
    }
  },
  data () {
    return {
      Subscribe: 'New subscription'
    }
  }
}
</script>
