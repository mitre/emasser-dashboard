<template>
  <router-link :to="to">
    <span
      class="flex items-center justify-start my-1 p-3 text-white w-full"
      :class="
        $route.path === to &&
        'border-white lg:border-red-300 border-l-4 lg:border-l-0 lg:border-r-4'
      "
    >
      <span>
        <slot />
      </span>
      <span class="mx-4 text-sm">
        {{ title }}
      </span>
    </span>
  </router-link>
</template>

<script>
export default {
  name: 'SidenavItem',
  props: {
    to: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
