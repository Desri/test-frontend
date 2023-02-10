<template>
  <div>
    <div class="add-product mt-4 ">
      <div class="bg-white p-4 mb-4">
        <div class="heading mb-4">
          <h2 class="mb-0">
            Add Product
          </h2>
        </div>
        <div class="form">
          <div class="row">
            <div class="col-md-12">
              <b-form-group label="Product Name:" description="Nama product minimal 10 caracter">
                <b-form-input
                  id="input-1"
                  v-model="form.productName"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-4">
              <b-form-group label="Main Category:">
                <b-form-select
                  v-model="form.categoryId"
                  :options="mainCategory"
                  required
                ></b-form-select>
              </b-form-group>
            </div>
            <div class="col-md-4">
              <b-form-group label="Sub-Category 1:">
                <b-form-select
                  v-model="form.subCategory1"
                  :options="subCategory1"
                  required
                ></b-form-select>
              </b-form-group>
            </div>
            <div class="col-md-4">
              <b-form-group label="Sub-Category 2:">
                <b-form-select
                  v-model="form.subCategory2"
                  :options="subCategory2"
                  required
                ></b-form-select>
              </b-form-group>
            </div>
            <div class="col-md-6">
              <b-form-group label="Brand:">
                <b-form-select
                  v-model="form.brandId"
                  :options="brands"
                  required
                ></b-form-select>
              </b-form-group>
            </div>
            <div class="col-md-6">
              <b-form-group label="UOM:">
                <b-form-select
                  v-model="form.uomId"
                  :options="uom"
                  required
                ></b-form-select>
              </b-form-group>
            </div>
            <div class="col-md-12">
              <b-form-group label="Dimension:">
                <table>
                  <tr>
                    <th>Length (cm)</th>
                    <th>Width (cm)</th>
                    <th>Height (cm)</th>
                    <th>Weight (cm)</th>
                  </tr>
                  <tr>
                    <td>
                      <b-form-input
                        v-model="form.productLength"
                        type="text"
                        required
                      ></b-form-input>
                    </td>
                    <td>
                      <b-form-input
                        v-model="form.productWidth"
                        type="text"
                        required
                      ></b-form-input>
                    </td>
                    <td>
                      <b-form-input
                        v-model="form.productHeight"
                        type="text"
                        required
                      ></b-form-input>
                    </td>
                    <td>
                      <b-form-input
                        v-model="form.productWeight"
                        type="text"
                        required
                      ></b-form-input>
                    </td>
                  </tr>
                </table>
              </b-form-group>
            </div>
            <div class="col-md-12">
              <b-form-group label="Product Description:">
                <b-form-textarea
                  v-model="form.productDescription"
                  rows="5"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-fixed p-3 position-fixed text-right bg-white">
        <div class="box-btn-fixed">
          <b-button type="submit" variant="primary" @click="onSubmit()">Submit</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      form: {
        productName: '',
        categoryId: null,
        subCategory1: null,
        subCategory2: null,
        brandId: null,
        uomId: null,
        productLength: '',
        productWidth: '',
        productWidth: '',
        productHeight: '',
        productWeight: '',
        productDescription: ''
      },
      category: [
        { text: 'Choose...', value: null }, 'Finansial', 'Investasi', 'Teknologi', 'Kesehatan', 'Lifestyle', 'Internasional', 'Entrepreneur'
      ],
      mainCategory: [
        { value: null, text: 'Choose...' },
        { value: '1', text: 'Makanan' },
        { value: '2', text: 'Minuman' },
        { value: '3', text: 'Camilan' }
      ],
      subCategory1: [
        { value: null, text: 'Choose...' },
        { value: '1', text: 'Sub Category 1' },
        { value: '2', text: 'Sub Category 2' },
        { value: '3', text: 'Sub Category 3' }
      ],
      subCategory2: [
        { value: null, text: 'Choose...' },
        { value: '1', text: 'Sub Category 1' },
        { value: '2', text: 'Sub Category 2' },
        { value: '3', text: 'Sub Category 3' }
      ],
      brands: [
        { value: null, text: 'Choose...' },
        { value: '1', text: 'Aqua' },
        { value: '2', text: 'Teh Gelas' },
        { value: '3', text: 'Teh Botol Sosro' },
        { value: '4', text: 'Coca Cola' },
        { value: '5', text: 'Pocari Sweat' },
        { value: '6', text: 'Mizone' }
      ],
      uom: [
        { value: null, text: 'Choose...' },
        { value: '1', text: 'UOM 1' },
        { value: '2', text: 'UOM 2' },
        { value: '3', text: 'UOM 3' },
        { value: '4', text: 'UOM 4' },
        { value: '5', text: 'UOM 5' },
        { value: '6', text: 'UOM 6' }
      ]
    }
  },
  methods: {
    onSubmit () {
      this.$store.dispatch('product/addProduct', this.form)
      .then((res) => {
        if (res.success) {
          this.$swal({
            title: 'Product Added',
            icon: 'success'
          })
        }
      })
      .catch((err) => {
        console.log('Error', err)
      })
    }
  }
}
</script>

<style lang="scss">
  .add-product {
    legend {
      color: #505050;
      font-weight: 600;
      margin-bottom: 0px;
      padding-bottom: 3px;
    }
    input, select {
      height: 45px;
      font-size: 18px;
      &:focus {
        box-shadow: none;
      }
    }
    textarea {
      &:focus {
        box-shadow: none;
      }
    }
    table {
      width: 100%;
      tr {
        th {
          color: #505050;
        }
      }
    }
    .box-btn {
      border-radius: 10px;
      background: #ffffff;
    }
    .btn-fixed {
      bottom: 0;
      left: auto;
      right: auto;
      width: 1110px;
      max-width: 1140px;
      border-radius: 0px;
      border-top: 1px solid #e3e3e3;
      .box-btn-fixed {
        width: 100%;
        button {
          width: 140px;
          font-weight: 600;
          background: #5a7ee3;
          &:focus {
            box-shadow: none;
          }
        }
      }
    }
  }
</style>
