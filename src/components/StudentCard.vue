<template>
    <div class="student-card">
      <div class="card-details">
        <div class="card-row">
          <span class="label">Full Name:</span>
          <span class="student-full-name">{{ student.full_name }}</span>
        </div>
        <div class="card-row">
          <span class="label">Year Level:</span>
          <span class="student-year-level">{{ student.year_level }}</span>
        </div>
        <div class="card-row">
          <span class="label">Address:</span>
          <span class="student-address">{{ student.address }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    student: {
      full_name: String,
      year_level: String,
      address: String,
    },
  });
  </script>
  
  <style scoped>
  .student-card {
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
  
  .student-card:hover {
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
  
  .student-full-name {
    color: #4CAF50;
    font-weight: bold;
  }
  
  .student-year-level {
    color: #555;
  }
  
  .student-address {
    color: #555;
  }
  
  .label {
    font-weight: bold;
    margin-right: 5px;
  }
  </style>
  