<!-- App.vue -->
<template>
  <div>
    <v-card>
      <v-card-text>
        <h1 class="text-lg-right">직원 조회 사이트</h1>
      </v-card-text>
    </v-card>

    <v-container fluid class = "selectbar">
      <v-row>
        <v-col md="8">
          <v-combobox
            v-model="input"
            :itmes="items"
            label="부서번호 입력"
            multiple
            outlined
            dense
          >
          </v-combobox>
        </v-col>
        <v-col md="4">
          <v-btn @click="getData">
            조회
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    
    <v-container class="table">
     <v-data-table
            style="width: 50%"
            :headers="headers"
            :items="emps"
    ></v-data-table>
   </v-container>
  
  </div>
</template>

<script>
  import axios from 'axios';
  axios.defaults.withCredentials = true;

  export default {
    data () {
      return {
        keys: [10, 20, 30],
        input:'',
        
        //inputedDeptno:'',
        headers: [
        { text: '부서번호', value: 'deptno'},
        { text: '사원번호', value: 'empno' },
        { text: '사원이름', value: 'ename' },
        ],
        emp: {
          empno: "",
        },
        emps:[],
        items: ['10', '20', '30']

      }
    },
    cretaed() {
      this.getData();
    },
    methods: {
      getData() {
        let searchParam = Number(this.input);
        //console.log(searchParam)
        axios
          .get('/search', {
            params: {deptno: searchParam}
          })
          .then((res) => {
            //res.json();
            console.log(res);
            this.emps = res.data;
            //console.log(res.data);
            //this.emps = res.data.result;
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            console.log("final");
          })
      }
    }
  }
</script>

<style scoped>
.selectbar {
  margin-top: 25px;
  margin-left: 50px;
}

.table {
  margin-top: 25px;
  margin-left: 50px;
}

</style>
