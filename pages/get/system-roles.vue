<template>
  <div class='h-screen' style='background-color: lightblue'>
    <loading :active.sync="isLoading" 
      :can-cancel="true" 
      :is-full-page="fullPage">
    </loading>
    <!-- Queries -->
    <div
      class="font-normal rounded-2xl mt-5 p-4"
      style="background-color: rgb(146 151 179 / 13%)"
      >
      <div  class="grid grid-cols-2 grid-rows-2 gap-4 grid-flow-col">
        <!-- Get System Roles -->
        <div
          class="p-4 rounded-3xl flex mt-4 mb-3 px-3"
          :style="{ backgroundColor: '#fee4cb', foregroundColor: '#00000'}"
        >
          <div class="bg-green-500 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md">Query</div>
          <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-500 bg-green-200 rounded-r-md truncate">
            <p class="text-black text-base font-bold opacity-70 p-3">Get System Roles</p>
            <div class="flex-shrink-0 pr-2">
              <button type="button" class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                @click='getSystemRoles()'
              >
                <QueryIcon class="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        <!-- Get Roles By Category -->
        <div
          class="p-4 rounded-3xl flex mt-4 mb-3 px-3"
          :style="{ backgroundColor: '#fee4cb', foregroundColor: '#00000'}"
        >
          <div class="bg-green-500 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md">Query</div>
          <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-500 bg-green-200 rounded-r-md truncate">
            <p class="text-black text-base font-bold opacity-70 p-3">Get Roles By Category</p>
            <div class="flex-shrink-0 pr-2">
              <button type="button" class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                @click='getSystemRolesByCat()'
              >
                <QueryIcon class="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        <!-- Get System by Type-->
        <div
          class="p-4 rounded-3xl flex mt-4 mb-3 px-3"
          :style="{ backgroundColor: '#fee4cb', foregroundColor: '#00000'}"
        >
          <div class="bg-blue-500 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md">FILTERED</div>
          <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-500 bg-blue-200 rounded-r-md truncate">
            <p class="text-black text-base font-bold opacity-70 p-3">Get Systems By Type</p>
            <div class="flex-shrink-0 pr-2">
              <button type="button" class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <QueryIcon class="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        <!-- Get Roles By Role-->
        <div
          class="p-4 rounded-3xl flex mt-4 mb-3 px-3 "
          :style="{ backgroundColor: '#fee4cb', foregroundColor: '#00000'}"
        >
          <div class="bg-blue-500 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md">FILTERED</div>
          <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-500 bg-blue-200 rounded-r-md truncate">
            <p class="text-black text-base font-bold opacity-70 p-3">Get Roles By Role</p>
            <div class="flex-shrink-0 pr-2">
              <button type="button" class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <QueryIcon class="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- OUtput Content -->
    <div
      class='font-normal rounded-2xl mt-4 md:px-8 py-2 pb-6 h-96'
      style='background-color: rgb(146 151 179 / 13%)'
    >
      <div>
        <h2 class='text-2xl font-medium py-2'>Query Results</h2>
      </div>
      <div class="flex flex-col flex-wrap mt-2 pl-2 h-max">
        <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table class="min-w-full divide-y divide-gray-300">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Role Category</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Role</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  <tr v-for="role in query_results" :key="role.systemName">
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ role.roleCategory }}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ role.role }}</td>
                    <!-- <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ system.registrationType }}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ system.name }}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ system.name }}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">THREE</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">FOUR</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">TWO</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">THREE</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">FOUR</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">TWO</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">THREE</td> -->
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> 
    </div>      

</div>
</template>

<script>
  import Loading from 'vue-loading-overlay';
  import 'vue-loading-overlay/dist/vue-loading.css';
  import { SystemRolesApi } from '@mitre/emass_client'
  import QueryIcon from '../../components//dashboard//sidenavigation/icons/Query.vue'
  import { ApiConnection } from '../../api-connection/apiConnection'

  export default {
    components: {
      QueryIcon,
      Loading,
    },
    data() {
      return {
        // emass_url: (this.$cookiz.get('cookie-name').url === 'undefined')?'':this.$cookiz.get('cookie-name'),
        emass_url: 'https://pilot-comm.emasstest.boozallencsn.com',
        emass_apikey: 'c1997ce5-57f3-479e-b21e-593657c60552',
        query_results: [{}],
        isLoading: false,
        fullPage: true
      };
    },

    head: {
      title: "System Roles"
    },
    methods: {
      async getSystemRoles (e) {
// alert('URL is: ' + this.emass_url + ' APYKEY : ' + this.emass_apikey)
        this.isLoading = true;
        this.query_results.length = 0;
        const apiCxn = new ApiConnection(this.emass_url, 443, this.emass_apikey, false, false);
        const getSystemRoles = new SystemRolesApi(apiCxn.configuration, apiCxn.basePath, apiCxn.axiosInstances);

        await getSystemRoles.getSystemRoles().then((data) => {
          // alert('GOT DATA')
          // console.log(data.data)
          // this.query_results.push({ systemId: data.data.systemId, policy: data.data.policy }
          data.data.data.forEach(element => {
            if(JSON.stringify(element) !== '{}') {
              this.query_results.push(element)
            }
          }); 
          // this.query_results.push(data.data.data[0]) 
          // console.log('query results: ' + JSON.stringify(this.query_results))
        }).catch((error) => console.error(error))
        this.isLoading = false;
      },
      async getSystemRolesByCat (e) {
// alert('URL is: ' + this.emass_url + ' APYKEY : ' + this.emass_apikey)
        this.isLoading = true;
        this.query_results.length = 0;
        const apiCxn = new ApiConnection(this.emass_url, 443, this.emass_apikey, false, false);
        const getSystemRoles = new SystemRolesApi(apiCxn.configuration, apiCxn.basePath, apiCxn.axiosInstances);
    
        // Order is important here
        // Parameters: roleCategory,role,policy,includeDecommissioned
        await getSystemRoles.getSystemRolesByCategoryId('CAC','IAO','',true).then((data) => {
          alert('GOT DATA')
          console.log(data.data)
          // this.query_results.push({ systemId: data.data.systemId, policy: data.data.policy } 
          data.data.data.forEach(element => {
             this.query_results.push(element)
          }); 
          // this.query_results.push(data.data.data[0]) 
          console.log('query results: ' + JSON.stringify(this.query_results))
        }).catch((error) => console.error(error))
        this.isLoading = false;
      }      
    }
  }
</script>
