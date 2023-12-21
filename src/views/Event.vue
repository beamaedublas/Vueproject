<template>
  <div class="container">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script setup>
import EventCard from '../components/EventCard.vue';

const events = [
  {
    "id": 1,
    "title": "Event A",
    "description": "Description for Event A",
    "date": "2023-01-01"
  },
  {
    "id": 2,
    "title": "Event B",
    "description": "Description for Event B",
    "date": "2023-02-01"
  },
  {
    "id": 3,
    "title": "Event C",
    "description": "Description for Event C",
    "date": "2023-03-01"
  },
  {
    "id": 4,
    "title": "Event D",
    "description": "Description for Event D",
    "date": "2023-04-01"
  },
  {
    "id": 5,
    "title": "Event E",
    "description": "Description for Event E",
    "date": "2023-05-01"
  },
  {
    "id": 6,
    "title": "Event F",
    "description": "Description for Event F",
    "date": "2023-06-01"
  },
  {
    "id": 7,
    "title": "Event G",
    "description": "Description for Event G",
    "date": "2023-07-01"
  },
  {
    "id": 8,
    "title": "Event H",
    "description": "Description for Event H",
    "date": "2023-08-01"
  },
  {
    "id": 9,
    "title": "Event I",
    "description": "Description for Event I",
    "date": "2023-09-01"
  },
  {
    "id": 10,
    "title": "Event J",
    "description": "Description for Event J",
    "date": "2023-10-01"
  },
  {
    "id": 11,
    "title": "Event K",
    "description": "Description for Event K",
    "date": "2023-11-01"
  },
 
  // Add more events as needed to make it a total of 20
 
  {
    "id": 20,
    "title": "Event T",
    "description": "Description for Event T",
    "date": "2024-08-01"
  }
];
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}
</style>
