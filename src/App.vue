<template>
  <div class="flex min-h-[100vh]">
    <div class="left-sidebar bg-gray-900 flex flex-col">
      <div class="heading p-8 bg-green-900">
        <h1 class="text-2xl text-green-200 text-center">
          Bea Mae Dublas
        </h1>
        <div class="text-xl text-gray-300 text-center">
          Final Project
        </div>
      </div>
      <nav class="nav-links">
        <!-- <a class="nav-link" :class="{ 'active': $route.path === '/' }"><RouterLink to="/">Home</RouterLink></a> -->
        <a class="nav-link" :class="{ 'active': $route.path === '/attendance' }"><RouterLink to="/attendance">Attendance</RouterLink></a>
        <a class="nav-link" :class="{ 'active': $route.path === '/event' }"><RouterLink to="/event">Event</RouterLink></a>
        <a class="nav-link" :class="{ 'active': $route.path === '/student' }"><RouterLink to="/student">Student</RouterLink></a>
      </nav>
      <div class="p-8 bg-gray-800 text-gray-500 text-center">
        This is a laboratory file 
        intended for training students
        in the use of VueJS 3 created by
        Benjie B. Lenteria for the 
        students of Mater Dei College <br />
        Copyright &copy; 2023.<br />All rights reversed.
      </div>
    </div>
    <div class="main-content bg-green-200 flex-1">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
.left-sidebar {
  width: 320px; 
  height: 90vh;
  overflow-y: auto;
}

.nav-links {
  flex:1;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
}

.nav-link {
  padding: 12px;
  background-color: #4a5568;
  color: #cbd5e0;
  text-decoration: none;
  border-bottom: 1px solid #2d3748;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #2d3748;
}

.active {
  background-color: #2d3748;
}


</style>

