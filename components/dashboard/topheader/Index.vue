<template>
  <div>
    <div
      class="
        flex flex-wrap
        md:flex-nowrap
        items-center
        justify-between
        w-full
        rounded-2xl
        py-6
        px-20
      "
      :style="{
        backgroundImage: `linear-gradient(45deg, DarkCyan, DeepSkyBlue)`,
      }"
    >
      <div>
        <span class="inline-flex"> 
          <h2>Page:</h2>
          <h3 class="text-blue-800 m-0 font-medium text-lg"> {{ title }} </h3>
        </span>

        <div>
          <h1 class="m-0 font-medium text-center text-4xl">eMASS REST API Dashboard</h1>
          <h3 class="flex items-right m-0 font-medium text-lg">
            {{ version }}
        </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TopHeader',
    props: {
      title: {
        type: String,
        default: '',
      },
      version: {
        type: String,
        default: 'v3.3',
      }
    },
  };
</script>