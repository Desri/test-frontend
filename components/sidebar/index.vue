<template>
  <div>
    <b-sidebar visible id="sidebar" aria-label="Sidebar with custom footer" no-header shadow>
      <div class="p-3">
        <div class="head-sidebar pt-3 pb-5">
          <h4 id="sidebar-no-header-title">Logo</h4>
        </div>
        <nav class="mb-3">
          <b-nav vertical>
            <b-nav-item active href="/">Dashboard & Reporting</b-nav-item>
            <b-nav-item href="#">Client</b-nav-item>
            <b-nav-item href="#">Origin</b-nav-item>
            <b-nav-item href="/console/product">Product</b-nav-item>
            <b-nav-item href="/console/list-product">List Product</b-nav-item>
            <b-nav-item href="#">Inbound</b-nav-item>
            <b-nav-item href="#">Order</b-nav-item>
            <b-nav-item href="#">Configuration</b-nav-item>
          </b-nav>
        </nav>
      </div>
      <template #footer="{ hide }">
        <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
          <b-button variant="transparent" block class="text-white">Logout</b-button>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style lang="scss">
  #sidebar {
    nav {
      ul {
        li {
          border-bottom: 1px solid #dddddd;
          a {
            color: #505050;
            font-weight: 600;
            padding-top: 10px;
            padding-bottom: 10px;
          }
        }
      }
    }
  }
</style>
