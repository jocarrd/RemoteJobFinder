<template>
  <c-box mt="4vh" d="flex" p="8" w="100vw" h="100vh" flex-dir="column">
    <CHeading textAlign="center" mb="4"
      >Discover the best remote jobs to work from home.</CHeading
    >

    <c-flex align="center" justify="center" mt="8">
      <c-flex
        ><c-form-control is-required>
          <c-input
            width="30vw"
            v-model="location"
            placeholder="Location"
          /> </c-form-control
      ></c-flex>
      <c-flex
        ><c-form-control>
          <c-select
            width="10vw"
            id="country"
            placeholder="Role"
          /> </c-form-control
      ></c-flex>
      <c-flex ml="8px"
        ><c-button
          @click="submit"
          loading-text="Submitting"
          variant-color="blue"
          :isLoading="loading"
        >
          Find Job!
        </c-button></c-flex
      >
    </c-flex>
    <c-box mt="4vh" d="flex" w="auto" h="100vh" flex-dir="column">
      <c-text fontSize="xl" align="center">{{
        "Found " + jobs.length + " matching jobs"
      }}</c-text>
      <ul id="example-1">
        <div v-for="item in jobs" v-bind:key="item.id">
          <c-stack mt="8" mx="12vw" :spacing="5">
            <c-box
              class="jobContainer"
              rounded="lg"
              :p="5"
              shadow="md"
              border-width="1px"
            >
              <c-flex>
                <c-box mr="8"
                  ><img v-if="item.logo" :src="item.logo" />
                  <img
                    v-if="!item.logo"
                    src="https://pbs.twimg.com/profile_images/1410519199651348484/5wIFnWBg_200x200.jpg"
                /></c-box>
                <c-box>
                  <c-heading fontSize="2xl">{{ item?.role }}</c-heading>
                  <c-heading mt="4" fontSize="xl">{{
                    item?.company_name
                  }}</c-heading>

                  <c-tag
                    v-for="keyword in item.keywords"
                    mt="4"
                    variant-color="cyan"
                    v-bind:key="keyword"
                    mr="8px"
                  >
                    <c-tag-label>{{ keyword }}</c-tag-label>
                    <c-tag-icon icon="check" size="12px" />
                  </c-tag>

                  <c-tag
                    variant-color="red"
                    v-if="item.remote"
                    :key="item.remote"
                    variantColor="vue"
                  >
                    {{ "Remote" }}
                  </c-tag>
                </c-box>
              </c-flex>
            </c-box>
          </c-stack>
        </div>
      </ul>
    </c-box>
  </c-box>
</template>

<script>
import {
  CBox,
  CHeading,
  CFormControl,
  CButton,
  CFlex,
  CText,
  CStack,
  CTag,
  CTagIcon,
  CTagLabel,
  CInput,
  CSelect,
} from "@chakra-ui/vue";

import APIServices from "./services/APIServices";
export default {
  name: "App",
  components: {
    CBox,
    CHeading,
    CFormControl,
    CFlex,
    CButton,
    CText,
    CStack,
    CTag,
    CTagIcon,
    CTagLabel,
    CInput,
    CSelect,
  },
  methods: {
    submit() {
      this.loading = true;
      APIServices.finder(this.location).then((response) => {
        this.jobs = response.results;
        this.loading = false;
      });
    },
  },
  data() {
    return { jobs: {}, location: "London", loading: false };
  },

  created() {
    APIServices.finder("London").then((response) => {
      this.jobs = response.results;
    });
  },
};
</script>

<style>
img {
  object-fit: contain;
  height: 100%;
}

.jobContainer:hover {
  background-color: lightcyan;
}
</style>
