<template>
  <div class="container">
    <StudentCard v-for="student in students" :key="student.id" :student="student" />
  </div>
</template>

<script setup>
import StudentCard from '../components/StudentCard.vue';

const students = [
  {
    "id": 1,
    "full_name": "John Doe",
    "year_level": "Junior",
    "address": "123 Main St"
  },
  {
    "id": 2,
    "full_name": "Jane Doe",
    "year_level": "Senior",
    "address": "456 Oak St"
  },
  {
    "id": 3,
    "full_name": "Bob Smith",
    "year_level": "Sophomore",
    "address": "789 Pine St"
  },
  {
    "id": 4,
    "full_name": "Alice Johnson",
    "year_level": "Freshman",
    "address": "101 Elm St"
  },
  {
    "id": 5,
    "full_name": "Charlie Brown",
    "year_level": "Senior",
    "address": "202 Maple St"
  },
  {
    "id": 6,
    "full_name": "Eva Davis",
    "year_level": "Junior",
    "address": "303 Cedar St"
  },
  {
    "id": 7,
    "full_name": "Frank White",
    "year_level": "Senior",
    "address": "404 Birch St"
  },
  {
    "id": 8,
    "full_name": "Grace Miller",
    "year_level": "Sophomore",
    "address": "505 Walnut St"
  },
  {
    "id": 9,
    "full_name": "Henry Turner",
    "year_level": "Freshman",
    "address": "606 Spruce St"
  },
  {
    "id": 10,
    "full_name": "Ivy Moore",
    "year_level": "Junior",
    "address": "707 Fir St"
  },
  {
    "id": 11,
    "full_name": "Jack Clark",
    "year_level": "Senior",
    "address": "808 Redwood St"
  },
  {
    "id": 12,
    "full_name": "Katie Scott",
    "year_level": "Sophomore",
    "address": "909 Cedar St"
  },
  {
    "id": 13,
    "full_name": "Liam Wilson",
    "year_level": "Freshman",
    "address": "1010 Elm St"
  },
  {
    "id": 14,
    "full_name": "Mia Taylor",
    "year_level": "Junior",
    "address": "1111 Maple St"
  },
  {
    "id": 15,
    "full_name": "Noah Anderson",
    "year_level": "Senior",
    "address": "1212 Pine St"
  },
  {
    "id": 16,
    "full_name": "Olivia Walker",
    "year_level": "Sophomore",
    "address": "1313 Birch St"
  }
 
  
];
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}
</style>
