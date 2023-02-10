<template>
  <div>
    <div class="list-product mt-4 bg-white p-4">
      <table class="w-100">
        <tr>
          <th>Product Name</th>
          <th>Product Description</th>
          <th>Action</th>
        </tr>
        <tr v-for="(data, index) in productList" :key="index">
          <td>
            {{ data.productName }}
          </td>
          <td>
            {{ data.productDescription }}
          </td>
          <td style="width: 100px;">
            <button class="detail text-white w-100 mb-1" v-b-modal.modal-center>
              Detail
            </button>
            <div class="edit w-100 mb-1 text-center">
              <!-- <a :href="data._id" class="text-white">Edit</a> -->
              <a href="javascript:void(0)" class="text-white" @click="goTo(data)">Edit</a>
            </div>
            <button class="delete text-white w-100" @click="onDelete(data._id)">
              Delete
            </button>
          </td>
        </tr>
      </table>
    </div>
    <b-modal id="modal-center" hide-footer centered title="Detail">
      <p class="my-4 text-center">Detail Product</p>
    </b-modal>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    productList () {
      return this.$store.state.product.listProduct
    }
  },
  async mounted () {
    await this.$store.dispatch('product/listProduct')
  },
  methods: {
    goTo (data) {
      localStorage.setItem("data-product", JSON.stringify(data))
      const url = `/console/${data._id}`
      window.location.href = url
    },
    onDelete (id) {
      this.$swal({
        width: 500,
        padding: '2em',
        showCancelButton: 'Cancel',
        allowOutsideClick: false,
        title: 'Yakin ingin menghapus?',
        customClass: {
          container: 'alert-adult',
          actions: 'flex-nowrap w-full',
          confirmButton: 'w-5/12 btn-next',
          cancelButton: 'w-5/12 btn-back',
          image: 'my-0',
          title: 'pt-3 px-0 uppercase font-normal text-2xl text-blue-primary',
          popup: 'rounded-25'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch('product/deleteProduct', id)
            .then((res) => {
            this.$swal({
              title: 'Jadwal Terhapus',
              icon: 'success'
            }).then(() => {
              this.$store.dispatch('product/listProduct')
            })
          }).catch((err) => {
            throw new Error(err)
          })
        }
      })
    }
  }
}
</script>

<style lang="scss">
  .list-product {
    table {
      tr {
        th {
          margin-bottom: 10px;
          border-bottom: 2px solid #dddddd;
        }
        td {
          padding-bottom: 10px;
          .edit {
            border-radius: 4px;
            background: #04667c;
            border: 1px solid #04667c;
          }
          button {
            border-radius: 5px;
            &.delete {
              background: #cf0303;
              border: 1px solid #cf0303;
            }
            &.detail {
              background: #12d105;
              border: 1px solid #12d105;
            }
          }
        }
      }
    }
  }
</style>
