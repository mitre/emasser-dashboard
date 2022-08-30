<template>
  <header class="h-16 md:h-20 items-center relative w-full z-10">
    <div
      class="
        flex flex-center flex-col
        h-full
        justify-center
        mx-auto
        px-3
        relative
      "
    >
      <div
        class="
          flex
          items-center
          pl-1
          relative
          w-full
          sm:ml-0 sm:pr-2
          lg:max-w-68
        "
      >
        <div class="container flex left-100 relative ">
          <!-- Center images on the search input-->
          <div
            class="
              group
              h-full
              hidden
              items-center
              relative
              w-full
              md:flex
              lg:w-15
            "
          >
            <!-- Search icon-->
            <svg
              class="
                absolute
                fill-current
                h-4
                hidden
                left-0
                ml-4
                pointer-events-none
                text-gray-500
                w-4
                group-hover:text-gray-400
                sm:block
              "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
              />
            </svg>
            <input
              type="text"
              class="
                bg-gray-100
                block
                leading-normal
                pl-10
                pr-4
                py-1.5
                ring-opacity-90
                rounded-2xl
                text-gray-400
                w-full
                focus:border-transparent
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
              placeholder="Search"
            />
            <div
              class="
                absolute
                border border-gray-300
                h-auto
                hidden
                mr-2
                px-2
                py-1
                right-0
                text-gray-400 text-xs
                rounded-2xl
                md:block
              "
            >
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TopNavigation',
  inject: ['toggle'],
}
</script>
