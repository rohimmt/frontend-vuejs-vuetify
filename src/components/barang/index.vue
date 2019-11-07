<template>
  <div class="list row">
    <div class="col-md-12">
      <v-data-table :headers="headers" :items="barang" :items-per-page="5" class="elevation-1">
        <template v-slot:item.action="{ item }">
          <v-icon class="mr-3" small>fas fa-edit</v-icon>
          <v-icon small @click="deleteItem(item)">fas fa-trash</v-icon>
        </template>
      </v-data-table>
    </div>

    <div class="col-md-12">
      <router-view @refreshData="refreshList"></router-view>
    </div>
  </div>
</template>
 
<script>
import http from "../../http-common";

export default {
  name: "list-barang",
  data() {
    return {
      headers: [
        { text: "KODE BARANG", value: "kode_barang" },
        { text: "NAMA BARANG", width: "40%", value: "nama_barang" },
        { text: "KATEGORI", value: "id_kategori" },
        { text: "STOK", value: "stok" },
        { text: "SATUAN", value: "satuan" },
        { text: "AKSI", value: "action", sortable: false }
      ],
      barang: []
    };
  },

  methods: {
    /* eslint-disable no-console */
    getBarang() {
      http
        .get("/barang")
        .then(response => {
          this.barang = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteItem(item) {
      // const index = this.barang.indexOf(item)
      confirm("Apakah anda yakin akan menghapus " + item.nama_barang + "?");
    },
    refreshList() {
      this.getBarang();
      console.log("tahuuu");
    }
    /* eslint-enable no-console */
  },
  mounted() {
    this.getBarang();
  }
};
</script>
 
