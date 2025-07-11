<script setup lang="ts">
import { useTasksStore } from '@/stores/tasks'
import CustomImageSelector from '@/common/CustomImageSelector.vue'
import { reactive } from 'vue'
import { flowers } from '@/utils/flower.util'
import type { Task } from '@/types'

const defaultFlower = flowers[0] || ''
const maxLength = 100
const newTask = reactive<Pick<Task, 'title' | 'status' | 'selectedFlower'>>({
  title: '',
  status: '',
  selectedFlower: defaultFlower,
})

const addTask = () => {
  if (newTask.title.trim()) {
    tasks.addTask({ ...newTask })
    newTask.title = ''
    newTask.status = 'Just started!'
    newTask.selectedFlower = defaultFlower
  }
}

const checkLength = () => {
  if (newTask.title.length > maxLength) {
    newTask.title = newTask.title.slice(0, maxLength)
  }
}

const tasks = useTasksStore()
</script>

<template>
  <form class="form-container" @submit.prevent="addTask">
    <div class="form-header">
      <label for="task-title"></label>
      <input
        class="title-input"
        id="task-title"
        v-model="newTask.title"
        placeholder="Write your task"
        @input="checkLength"
      />
      <p class="title-input-length">{{ newTask.title.length }} / {{ maxLength }} characters</p>
    </div>
    <div class="form-footer">
      <div class="flower-selector">
        <CustomImageSelector
          v-model="newTask.selectedFlower"
          :options="flowers"
          label="Choose a flower:"
        />
      </div>
      <button class="pixel-button add"><img class="button-img" :src="'icons/add.png'" /></button>
    </div>
  </form>
</template>

<style scoped>
.form-container {
  box-sizing: border-box;
  background-color: var(--pixel-bg-container);
  border: 3px solid var(--pixel-border);
  box-shadow: var(--pixel-box-shadow);
  width: 600px;
  height: 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 20px 35px;
}

.form-header {
  width: 100%;
}

.title-input {
  width: 100%;
  font-family: var(--pixel-font);
  font-size: 12px;
  padding: 10px;
  border: 3px solid var(--pixel-border);
  background-color: var(--pixel-bg);
  box-shadow: var(--pixel-box-shadow);
}

.title-input:focus {
  outline: 1px solid var(--pixel-highlight);
}

.title-input-length {
  font-size: 12px;
  margin-bottom: 0;
}

.form-footer {
  width: 100%;
  display: flex;
  gap: 50px;
  justify-content: space-between;
  align-items: flex-end;
}

.task-selection-options {
  display: flex;
  gap: 50px;
  align-items: center;
}

@media (max-width: 768px) {
  .form-container {
    width: 500px;
  }
}

@media (max-width: 600px) {
  .form-container {
    width: 350px;
  }
}
</style>
