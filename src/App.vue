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
    data: () => ({
      years: [
        {
          title:'title1',
          color: 'cyan',
          year: '1960',
          content:'test1',
        },
        {
          title:'title2',
          color: 'green',
          year: '1970',
          content:'test1',
        },
        {
          title:'title3',
          color: 'pink',
          year: '1980',
          content:'test2',
        },
        {
          title:'title4',
          color: 'amber',
          year: '1990',
          content:'test3',
        },
        {
          title:'title5',
          color: 'orange',
          year: '2000',
          content:'test4',
        },
      ],
    }),
  }
</script>