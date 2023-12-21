<template>
  <div class="event-card">
    <div class="card-details">
      <div class="card-row">
        <span class="label">Title:</span>
        <span class="event-title">{{ event.title }}</span>
      </div>
      <div class="card-row">
        <span class="label">Description:</span>
        <span class="event-description">{{ event.description }}</span>
      </div>
      <div class="card-row">
        <span class="label">Date:</span>
        <span class="event-date">{{ event.date }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  event: {
    title: String,
    description: String,
    date: String,
  },
});
</script>

<style scoped>
.event-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 300px;
  margin-bottom: 20px;
  margin-left: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.event-card:hover {
  transform: translateY(-5px);
}

.card-details {
  padding: 15px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.event-title {
  color: #4CAF50;
  font-weight: bold;
}

.event-description {
  color: #555;
}

.event-date {
  color: #555;
}

.label {
  font-weight: bold;
  margin-right: 5px;
}
</style>
