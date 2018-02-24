<template>
<div>
<input type="text" v-model="Subscribe"/>
<h2> My name is {{Subscribe}} </h2>
</div>
</template>

<script>
export default {
  name: 'Subscribe',
  data () {
    return {
      Subscribe: 'New subscription'
    }
  }
}
</script>
