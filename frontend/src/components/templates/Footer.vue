<template>
  <footer class="footer">
    <span>
      Copyright
      <strong>LGC</strong> 2026
    </span>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>
<style>
.footer {
  grid-area: footer;
  color: #333;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
}
</style>