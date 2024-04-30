<template>
  <v-timeline align="start">
    <v-timeline-item
      v-for="(year, i) in years"
      :key="i"
      :dot-color="year.color"
      size="small"
    >
      <template v-slot:opposite>
        <div
          :class="`pt-1 headline font-weight-bold text-${year.color}`"
          v-text="year.year"
        ></div>
      </template>
      <div>
        <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`">
          {{year.title}}
        </h2>
        <div>
          {{year.content}}
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>


<script>
// Vuetify
import 'vuetify/styles'

export default {
  data() {
    return {
      years: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('https://www.simonland.me/api/game', {
          mode: 'no-cors'
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data)
        this.years = data; // Assuming your API returns data in the same structure as your existing 'years' array
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }
  }
</script>

