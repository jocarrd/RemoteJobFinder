<template>
  <div>
    <div v-for="item in jobs" v-bind:key="item.id">
      <c-stack mt="8" mx="12vw" :spacing="5">
        <c-box
          class="jobContainer"
          rounded="lg"
          :p="5"
          shadow="md"
          border-width="1px"
        >
          <c-flex class="flexJobContainer">
            <c-box mr="8"
              ><img
                v-if="item.logo"
                :src="item.logo"
                onError="this.src='https://cdn1.iconfinder.com/data/icons/social-media-2285/512/Colored_Facebook3_svg-200.png';" />
              <img
                v-if="!item.logo"
                src="https://pbs.twimg.com/profile_images/1410519199651348484/5wIFnWBg_200x200.jpg"
            /></c-box>
            <c-box>
              <c-link :href="item.url" is-external>
                <c-heading fontSize="2xl"
                  >{{ item?.role }} <c-icon name="info" mx="2px"
                /></c-heading>
              </c-link>

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
              <c-tag
                ml="2"
                variant-color="red"
                v-if="item.employment_type"
                :key="item.employement_type"
              >
                {{ item.employment_type }}
              </c-tag>
            </c-box>
          </c-flex>
        </c-box>
      </c-stack>
    </div>
  </div>
</template>
<script>
import {
  CStack,
  CTag,
  CTagIcon,
  CTagLabel,
  CLink,
  CIcon,
  CBox,
  CFlex,
  CHeading,
} from "@chakra-ui/vue";
export default {
  name: "ListJobs",
  components: {
    CStack,
    CTag,
    CTagIcon,
    CTagLabel,
    CLink,
    CIcon,
    CBox,
    CFlex,
    CHeading,
  },
  props: {
    jobs: [Array, Object],
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

@media screen and (max-width: 480px) {
  .flexJobContainer {
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
  .flexJobContainer :first-child {
    width: 100%;
    justify-content: center;
    align-content: center;
  }
}
</style>
