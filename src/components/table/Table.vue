<template>
  <div class="cs-table">
    <b-table
      class="cs-content-table"
      :dark="dark"
      :hover="hover"
      :striped="striped"
      :bordered="bordered"
      :small="small"
      :fixed="fixed"
      responsive="sm"
      :items="items"
      :fields="settings.header || header"
      :current-page="currentPage"
      :per-page="perPage"
    >
      <template
        v-for="(item, index) in settings.columns || columns"
        :slot="item.key"
        slot-scope="data"
      >
        <div :key="index" v-if="item.actions" class="btn-group">
          <button v-for="(action, index) in item.actions" :key="index" v-html="action.content" :class="action.class" @click="action.onClick(data.item)"></button>
        </div>
        <div
          :key="index"
          v-html="item.render ? item.render(data.item) : data.item[item.key]"
          v-else
          @click="item.onClick ? item.onClick(data.item) : null"
        >{{data.item.render}}</div>
      </template>
    </b-table>
    <div class="cs-pagination">
      <b-pagination
        :total-rows="totalRows"
        :per-page="perPage"
        v-model="currentPage"
        prev-text="Prev"
        next-text="Next"
        ide-goto-end-buttons
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      currentPage: 1
    };
  },
  name: "magic-table",
  props: {
    columns: {
      type: [Array, Object],
      default: () => []
    },
    hover: {
      type: Boolean,
      default: true
    },
    striped: {
      type: Boolean,
      default: true
    },
    bordered: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    tableData: {
      type: [Array, Function],
      default: () => []
    },
    fields: {
      type: [Array, Object],
      default: () => []
    },
    perPage: {
      type: Number,
      default: 10
    },
    dark: {
      type: Boolean,
      default: false
    },
    settings: {
      type: [Array, Object],
      default: () => []
    }
  },

  computed: {
    items: function() {
      const items = this.tableData;
      return Array.isArray(items) ? items : items();
    },
    totalRows: function() {
      return this.getRowCount();
    },
    captions: function() {
      return this.fields;
    }
  },
  methods: {
    getRowCount: function() {
      return this.items.length;
    }
  }
};
</script>
