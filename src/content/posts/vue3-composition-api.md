# Why I Love Vue 3 Composition API

Moving from Vue 2's Options API to Vue 3's **Composition API** was a game changer for my frontend development workflow.

## The Problem with Options API

In complex components, logic was often split across `data`, `methods`, and `computed`. This made it hard to group related logic together.

## Enter Composition API

With `<script setup>`, code becomes much cleaner and logic is grouped by feature, not by option type.

```typescript
<script setup lang="ts">
import { ref, computed } from 'vue'

// Logic for Feature A
const count = ref(0)
const doubleCount = computed(() => count.value * 2)

function increment() {
  count.value++
}

// Logic for Feature B (can be easily extracted to a composable!)
const user = ref({ name: 'Shihao' })
</script>
```

## Benefits

1.  **Better Type Inference**: TypeScript support is first-class.
2.  **Logic Reuse**: Composables (`useFeature()`) replace Mixins.
3.  **Cleaner Code**: No more `this` context confusion.

I highly recommend all Vue developers to make the switch!
