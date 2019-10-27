<template>
  <div class="p-3 bill">
    <table class="table table-responsive-sm table-bordered cs-table-bill">
      <tr class="b-t b-l b-r b-b">
        <th rowspan="2" class="b-r b-t b-b b-l">Danh mục</th>
        <th colspan="2" class="b-b b-t b-r">Chỉ số</th>
        <th rowspan="2" class="b-r b-l b-t b-b">Chỉ số sử dụng</th>
        <th colspan="2" class="b-b b-t b-r">Đơn giá</th>
        <th rowspan="2" class="b-r b-l b-t b-b">Thành Tiền</th>
        <th rowspan="2" class="b-t b-r b-b">Ghi chú</th>
      </tr>
      <tr class="b-b">
        <th class="b-r b-b">Chỉ số cũ</th>
        <th class="b-b">Chỉ số mới</th>
        <th class="b-r b-b">DM</th>
        <th class="b-b">Ngoài DM</th>
      </tr>
      <tr>
        <td class="b-l b-r">Tiền Interner</td>
        <td class="b-r"></td>
        <td class="b-r"></td>
        <td class="b-r"></td>
        <td class="b-r"></td>
        <td class="b-r"></td>
        <td class="b-r">2.429.000</td>
        <td class="b-r"></td>
      </tr>
      <tr>
        <td class="b-l b-r">Tiền Nhà</td>
        <td class="b-r"></td>
        <td class="b-r"></td>
        <td class="b-r"></td>
        <td class="b-r"></td>
        <td class="b-r"></td>
        <td class="b-r">42.000.000</td>
        <td class="b-r">12 Tháng</td>
      </tr>
      <tr>
        <td class="b-l b-r">Phí giữ xe</td>
        <td class="b-r"></td>
        <td class="b-r"></td>
        <td class="b-r"></td>
        <td class="b-r"></td>
        <td class="b-r"></td>
        <td class="b-r">70.000</td>
        <td class="b-r"></td>
      </tr>
      <tr>
        <td class="b-l b-r">Tiền Điện</td>
        <td class="b-r">1.855</td>
        <td class="b-r">2.029</td>
        <td class="b-r">174</td>
        <td class="b-r">2.795.000</td>
        <td class="b-r">3.196.000</td>
        <td class="b-r">516.004</td>
        <td class="b-r"></td>
      </tr>
      <tr>
        <td class="b-l b-r">Tiền nước</td>
        <td class="b-r">183</td>
        <td class="b-r">186</td>
        <td class="b-r">3</td>
        <td class="b-r">9450</td>
        <td class="b-r">15.390</td>
        <td class="b-r">34.290</td>
        <td class="b-r"></td>
      </tr>
      <tr class="b-t b-b">
        <td class="font-weight-bold b-l b-r b-t b-b">Cộng</td>
        <td class="b-r b-t b-b"></td>
        <td class="b-r b-t b-b"></td>
        <td class="b-r b-t b-b"></td>
        <td class="b-r b-t b-b"></td>
        <td class="b-r b-t b-b"></td>
        <td class="font-weight-bold b-r b-t b-b">7249.294</td>
        <td class="b-r b-t b-t b-b"></td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss">
.bill {
  table {
    th,
    .font-weight-bold {
      font-weight: 500 !important;
    }
  }
}
</style>