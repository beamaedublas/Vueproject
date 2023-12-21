<template>
  <div class="attendance-card">
    <div class="card-details">
      <div class="card-row">
        <span class="label">Event:</span>
        <span>{{ attendance.event_name }}</span>
      </div>
      <div class="card-row">
        <span class="label">Student:</span>
        <span>{{ attendance.student_name }}</span>
      </div>
      <div class="card-row">
        <span class="label">Status:</span>
        <span>{{ attendance.status }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  attendance: {
    event_name: String,
    student_name: String,
    status: String,
  },
});
</script>

<style scoped>
.attendance-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 300px;
  margin-bottom: 20px;
  margin-left: 10px;
}

.card-details {
  padding: 10px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.label {
  font-weight: bold;
  margin-right: 5px;
}
</style>
