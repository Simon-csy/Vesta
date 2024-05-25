<template>
  <v-timeline align="start">
    <v-timeline-item
      v-for="(entry, i) in timelineData"
      :key="i"
      :dot-color="entry.color"
      size="small"
    >
      <template v-slot:opposite>
        <div :class="`pt-1 headline font-weight-bold text-${entry.color}`">
          {{ formatDate(entry.start) }} ~ {{ formatDate(entry.end) }}
        </div>
      </template>
      <div :class="['text-center']">
        <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${entry.color}`">
          {{ entry.game.name }}
        </h2>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import { format } from 'date-fns';

export default {
  data() {
    return {
      timelineData: [],  // Ensure timelineData is defined here
      previousColor: null
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('https://www.simonland.me/api/game');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        this.timelineData = data.map(item => ({
          start: item.start,
          end: item.end,
          game: item.game,
          color: this.getRandomColor()  // Assign a random color
        }));
        console.log('Mapped timelineData:', this.timelineData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    formatDate(dateString) {
      return format(new Date(dateString), 'yyyy-MM-dd');
    },
    getRandomColor() {
      const colors = ['red', 'blue', 'green', 'orange', 'purple'];
      let newColor = this.previousColor;
      // Keep selecting a random color until it's different from the previous one
      while (newColor === this.previousColor) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
      }
      this.previousColor = newColor;
      return newColor;
    },
    isLeftSide(entry) {
      // Return true if the entry should appear on the left side of the timeline
      // You can adjust the condition based on your specific criteria
      // For example, you might check if the entry index is even or odd
      // Here, I'll simply check if the entry index is divisible by 2
      return this.timelineData.indexOf(entry) % 2 === 0;
    }
  }
}
</script>

<style scoped>
.text-center {
  text-align: right;
}
</style>