<template>
  <div>
    <loading :active.sync="isLoading" 
      :can-cancel="true" 
      :is-full-page="fullPage">
    </loading>

    <div
      class="font-normal rounded-2xl mt-5 p-4"
      style="background-color: rgb(146 151 179 / 13%)"
      >
    </div>    
  </div>
</template>

<script>

  export default {
    components: {

    },
    setup() {

    },
    data() {
      return {
        isLoading: false,
        fullPage: false
      };
    },
  }
</script>