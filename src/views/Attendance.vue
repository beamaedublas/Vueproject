<template>
    <div class="attendance-view">
      <h2>Attendance Records</h2>
      <div class="attendance-container">
        <AttendanceCard v-for="attendance in attendances" :key="attendance.id" :attendance="attendance" />
      </div>
    </div>
  </template>
  
  <script setup>
  import AttendanceCard from '@/components/AttendanceCard.vue';
  
  const attendances = [
    {
      id: 1,
      event_name: 'Event A',
      student_name: 'John Doe',
      status: 'Present',
    },
    {
      id: 2,
      event_name: 'Event B',
      student_name: 'Jane Doe',
      status: 'Absent',
    },
    {
      id: 3,
      event_name: 'Event C',
      student_name: 'Alice Johnson',
      status: 'Present',
    },
    {
      id: 4,
      event_name: 'Event D',
      student_name: 'Bob Smith',
      status: 'Absent',
    },
    {
      id: 5,
      event_name: 'Event E',
      student_name: 'Eva White',
      status: 'Present',
    },
    {
      id: 6,
      event_name: 'Event F',
      student_name: 'Frank Brown',
      status: 'Absent',
    },
    {
      id: 7,
      event_name: 'Event G',
      student_name: 'Grace Miller',
      status: 'Present',
    },
    {
      id: 8,
      event_name: 'Event H',
      student_name: 'Harry Davis',
      status: 'Absent',
    },
    {
      id: 9,
      event_name: 'Event I',
      student_name: 'Ivy Robinson',
      status: 'Present',
    },
    {
      id: 10,
      event_name: 'Event J',
      student_name: 'Jack Anderson',
      status: 'Absent',
    },
    {
      id: 11,
      event_name: 'Event K',
      student_name: 'Kate Turner',
      status: 'Present',
    },
    {
      id: 12,
      event_name: 'Event L',
      student_name: 'Leo Garcia',
      status: 'Absent',
    },
    {
      id: 13,
      event_name: 'Event M',
      student_name: 'Mia Collins',
      status: 'Present',
    },
    {
      id: 14,
      event_name: 'Event N',
      student_name: 'Noah Adams',
      status: 'Absent',
    },
    {
      id: 15,
      event_name: 'Event O',
      student_name: 'Olivia Taylor',
      status: 'Present',
    },
    {
      id: 16,
      event_name: 'Event P',
      student_name: 'Peter Martinez',
      status: 'Absent',
    },
    {
      id: 17,
      event_name: 'Event Q',
      student_name: 'Quinn Scott',
      status: 'Present',
    },
    {
      id: 18,
      event_name: 'Event R',
      student_name: 'Ruby Hall',
      status: 'Absent',
    },
    {
      id: 19,
      event_name: 'Event S',
      student_name: 'Samuel Ward',
      status: 'Present',
    },
    {
      id: 20,
      event_name: 'Event T',
      student_name: 'Taylor Foster',
      status: 'Absent',
    },
  ];
  </script>
  
  <style scoped>
  .attendance-view {
    margin: 20px;
  }
  
  .attendance-container {
    display: flex;
    flex-wrap: wrap;
  }
  
  /* Add any additional styles as needed */
  </style>
  