<template>
  <b-row>
    <b-col cols="10">
      <b-card
        header-tag="header"
        footer-tag="footer"
        class="card-accent-success"
        header="header"
        footer="footer"
      >
        <div slot="header">
          <i class="icons cui-pencil mr-2"></i>
          <b>{{caption}}</b>
        </div>
        <div slot="footer">
          <button class="btn btn-primary mr-2">
            <i class="icon-check"></i>
            OK
          </button>
          <button class="btn btn-danger">
            <i class="icon-ban"></i>
            Hủy bỏ
          </button>
        </div>
        <div>
          <div :key="index" v-for="(item, index) of itemSource" class="form-group row">
            <div class="cs-label col-md-3 control-label text-right">{{item.lable}} :</div>
            <div class="col-md-9">
              <!-- Input -->

              <!-- textarea -->
              <textarea v-if="item.type=='textarea'" class="form-control" v-model="item.value">{{item.value}}</textarea>

              <!-- select -->
              <select v-else-if="item.type=='select'">
                <option value="1">1</option>
              </select>

              <!-- select -->
              <div v-else-if="item.type=='checkbox'">
                 <c-switch class="mx-1" color="success" checked variant="pill" />
              </div>

              <!-- Date -->
              <date-picker
                v-else-if="item.type=='date'"
                v-model="item.value"
                :placeholder="item.placeholder"
                :name="item.name"
                :input-class="'form-control'"
                :format="'dd/MM/yyyy'"
                :readonly="false"
                :calendar-class="'cs-date-picker'"
                :value="current"
                :use-utc="true"
              ></date-picker>

              <!-- Date -->
              <input
                v-else-if="item.type=='number'"
                v-model="item.value"
                class="form-control"
                type="number"
                :placeholder="item.placeholder"
                :name="item.name"
                value="item.value"
              />

              <!-- Input -->
              <input
                v-else
                v-model="item.value"
                class="form-control"
                type
                :placeholder="item.placeholder"
                :name="item.name"
                value="item.value"
              />
              <!-- Message -->
            </div>
          </div>
        </div>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
import DatePicker from "vuejs-datepicker";
import { Switch as cSwitch } from '@coreui/vue'
export default {
  props: ["itemSource", "caption"],
  name: "Csform",
  components: {
    DatePicker,
    cSwitch
  },
  data() {
    return {
      current: new Date()
    };
  }
};
</script>

