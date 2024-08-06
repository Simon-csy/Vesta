<template>
  <v-timeline align="start">
    <v-timeline-item
      v-for="(entry, i) in sortedTimelineData"
      :key="i"
      :dot-color="entry.color"
      size="small"
      :class="{'text-right': i % 2 !== 0, 'text-left': i % 2 === 0}"
    >
      <div>
        <span :class="`pt-1 headline font-weight-bold text-${entry.color}`">
          {{ formatDate(entry.start) }} ~ {{ formatDate(entry.end) }}
        </span>
        <span :class="`ml-2 headline font-weight-light text-${getSecondaryColor(entry.color)}`">
          {{ entry.game.name }}
        </span>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import { format } from 'date-fns';

export default {
  data() {
    return {
      timelineData: [],
      previousColor: null
    };
  },
  computed: {
    sortedTimelineData() {
      return [...this.timelineData].sort((a, b) => new Date(b.start) - new Date(a.start));
    }
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
          color: this.getRandomColor()
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
      while (newColor === this.previousColor) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
      }
      this.previousColor = newColor;
      return newColor;
    },
    getSecondaryColor(primaryColor) {
      const colorPairs = {
        red: 'blue',
        blue: 'green',
        green: 'orange',
        orange: 'purple',
        purple: 'red'
      };
      return colorPairs[primaryColor] || 'black';
    }
  }
}
</script>

<style scoped>
.text-right {
  text-align: right;
}
.text-left {
  text-align: left;
}
.ml-2 {
  margin-left: 8px;
}
</style>
