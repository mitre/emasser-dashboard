<template>
  <div>
    <notifications group='foo' />
    <notifications group='auth'/>
    <!-- Top Panel -->
    <div
      class='rounded-2xl py-6 px-20'
      :style='{
        backgroundImage: `linear-gradient(45deg, DarkCyan, DeepSkyBlue)`,
      }'
    >
      <div>
        <h1 class='font-medium text-center text-4xl'>eMASS REST API Dashboard</h1>
        <h3 class='font-bold text-right text-lg'>{{ version }}</h3>
      </div>
    </div>
    <!-- Server Settings -->
    <div class='min-h-full py-2 px-4 sm:px-6 lg:px-8 rounded-2xl mt-5'
       style='background-color: rgb(146 151 179 / 13%)'
    >
      <div>
        <h2 class='text-2xl font-medium py-2'>Server Settings</h2>
      </div>
       <section
        class='flex items-center justify-center md:px-8 py-2 pb-6 rounded-2xl'
        style='background-color: rgb(146 151 179 / 13%)'
      >
        <form  ref='form' name='contact' action=''  @submit.prevent='test_connection' >
          <div class='w-96'>
            <div class='flex mt-4 mb-3 px-2'>
              <url-icon />
              <!-- <label v-b-tooltip.hover title='The eMASS Uniform Resource Locator (URL) address' for='url' class='block pl-2'> eMASS Host URL </label> -->
              <label for='url' class='block pl-2'> eMASS Host URL </label>
            </div>
            <div class='mt-1'>
              <input id='emass_url' ref='emass_url' v-model='emass_url' name='emass_url' type='url' autocomplete='url' required='' placeholder='eMASS URL'
                class='text-black appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 sm:text-sm' />
            </div>

            <div class='flex mt-4 mb-3 px-2'>
              <uid-icon />
              <label v-b-tooltip.hover title='User Unique Identifier' for='userid' class='block pl-2' >User UID </label>
            </div>
            <div class='mt-1'>
              <input id='userid' name='userid' required='' placeholder='Use UID'
                class='text-black appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md '   />
            </div>

            <div class='flex mt-4 mb-3 px-2'>
              <api-key-icon />
              <label for='emass_apikey' class='block pl-2'>API Key </label>
            </div>
            <div class='mt-1'>
              <input id='emass_apikey' ref='emass_apikey' v-model='emass_apikey' name='emass_apikey' type='api_key' autocomplete='current-password' required='' placeholder='API Key'
                class='text-black appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
            </div>
          </div>         

          <div class='items-center justify-center mt-5  '>
            <!-- <input class='form-button' type='submit' value='Test Connection' /> -->
            <button type='submit'
              class='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              @click='test_connection()'
              >
              Test Connection
            </button>
          </div>
        </form>
      </section>

      <div class='items-center justify-center mt-5'>
        <div class='flex mt-4 mb-3 px-2'>
          <info-icon />
          <span class='flex items-center pl-2'>
            Configure the web browser with the eMASS certificate - import the certificate into the browser
          </span>
        </div>
      </div>     
    </div>

    <!-- OUtput Content -->
    <div
      class='font-normal rounded-2xl mt-5'
      style='background-color: rgb(146 151 179 / 13%)'
    >
      <section
        class='md:px-8 py-2 pb-6 rounded-2xl'
        style='background-color: rgb(146 151 179 / 13%)'
      >
        <h2 class='text-2xl font-medium'>Output Content</h2>    
        <div class='flex flex-wrap mt-4 pl-2 mb-4'>
          <div class='bg-black flex flex-col justify-center items-center space-y-4 w-screen h-32'>
            <span class='text-green-500 text-left inline-block dark:hidden'>
              <p> {{ output }} </p>
            </span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang='js'>
  import { TestApi } from '@mitre/emass_client'
  import { ApiConnection } from '../../api-connection/apiConnection'
  // import { SystemsApi } from '@mitre/emass_client'
  import UrlIcon from '../../components//dashboard//sidenavigation/icons/Url.vue'
  // import UidIcon from '../../components//dashboard//sidenavigation/icons/Uid.vue'
  import InfoIcon from '../../components//dashboard//sidenavigation/icons/Information.vue'
  import ApiKeyIcon from '../../components//dashboard//sidenavigation/icons/ApiKey.vue'


// const eMASS_Server = window.localStorage.getItem('eMASS_Server');
// if (eMASS_Server) {
//   // Then try parsing. On fail, clear and go null
//   try {
//     const emassServer = JSON.parse(eMASS_Server);
//   this.emass_url = emassServer.url;
//   this.emass_apikey = emassServer.apikey;
//   } catch (error) {
//     this.emass_url = '';
//     this.emass_apikey = '';
//   }
//   this.emass_url = eMASS_Server;
// } else {
//   this.emass_url = '';
//   this.emass_apikey = '';
// }


export default {
  components: {
    UrlIcon,
    // UidIcon,
    InfoIcon,
    ApiKeyIcon,
  },     
  props: {
    version: {
      type: String,
      default: 'v3.3',
    },
  },
  data() {
    return {
      // emass_url: (this.$cookiz.get('cookie-name').url === 'undefined')?'':this.$cookiz.get('cookie-name'),
      emass_url: this.emass_url,
      emass_apikey: this.emass_apikey,
      output: '',
    };
  },
  head: {
    title: 'Server Configurations'
  },
  methods: {
    submit() {
      this.$emit('submit', this.email)
    },
    say (message) {
      alert(message + ' is:' + this.emass_url)
      return false
    },
    async test_connection (e) {
      if (this.emass_url !== undefined && this.emass_url !== null) {
        const regex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/gm;
        // alert('URL is: ' + this.emass_url + ' is VALID : ' + this.emass_url.match(regex))
        if (!this.emass_url.match(regex)) {
          this.$notify({
            type: 'error',
            group: 'auth', 
            title: 'Invalid URL',
            text: 'The provided URL is malformed. Please review and update.',
          });
          return false;
        }         
      }

      const apiCxn = new ApiConnection(this.emass_url, 443, this.emass_apikey, false, false);
      const getTestApi = new TestApi(apiCxn.configuration, apiCxn.basePath, apiCxn.axiosInstances);
      await getTestApi.testConnection().then((data) => {
          this.output = JSON.stringify(data.data, null, 2)
      }).catch((error) => {this.output = error});

      // // Get System (testing)
      // const getSystems = new SystemsApi(apiCxn.configuration, apiCxn.basePath, apiCxn.axiosInstances);
      // // Order is important here
      // getSystems.getSystem(33,false,false).then((data) => {
      //   console.log(data.data);
      //   this.output = JSON.stringify(data.data, null, 2)
      // }).catch((error) => this.output = JSON.stringify(error, null, 2));
    },
  }
}

</script>