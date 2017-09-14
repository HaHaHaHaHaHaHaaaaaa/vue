<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-lg-12">
        <b-card header="<i class='fa fa-align-justify'></i> Simple Table">
          <table class="table">
            <thead>
              <tr>
                <th>序号</th>
                <th>姓名</th>
                <th>年龄</th>
                <th>详情</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in obj">
                <td >{{item.name}}</td>
                <td >{{item.name}}</td>
                <td >{{item.name}}</td>
                <td >{{item.name}}</td>
              </tr>
            </tbody>
          </table>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'wbl',
    data: function () {
      return {
        obj: [{
          name: 'wbl',
          age: '28'
        }, {
          name: 'wl',
          age: '123'
        }, {
          name: 'www',
          age: '228'
        }]
      }
    }
  }
</script>
