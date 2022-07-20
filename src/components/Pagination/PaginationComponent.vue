<template>
  <div class="pagination">
    <a>&laquo;</a>
    <a v-on:click="paginate(1)">1</a>
    <a v-on:click="paginate(2)">2</a>
    <a v-on:click="paginate(3)">3</a>
    <a v-on:click="paginate(4)">4</a>
    <a v-on:click="paginate(5)">5</a>
    <a v-on:click="paginate(6)">6</a>
  </div>
</template>
<script>
export default {
  name: "PaginationComponent",
  props: {
    location: String,
    tech: String,
    paginate: Function,
  },
};
</script>
<style>
.pagination {
  display: inline-block;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}

.pagination a.active {
  background-color: #4caf50;
  color: white;
}

.pagination a:hover:not(.active) {
  background-color: #ddd;
}
</style>
