<script lang="ts" setup>
const modelChecked = ref(false);
const eventChecked = ref(false);

function handleChange(e: boolean) {
  eventChecked.value = e;
}

watch(modelChecked, newVal => {
  console.log("isChecked: ", newVal);
});
</script>

<template>
  <e-h1 align="center" class="self-center mt-4">开关 / Switch</e-h1>
  <e-space :margin="[0, 16, 0, 16]" vertical class="mt-4">
    <e-space
      vertical
      padding="8"
      class="rounded-md border-1 border-solid border-[var(--arona-blue-6)] bg-[var(--arona-blue-1)]"
    >
      <e-h2>默认</e-h2>
      <span>
        <e-text>checked(model): {{ modelChecked }}</e-text>
        <e-text>checked(event): {{ eventChecked }}</e-text>
      </span>
      <e-space>
        <e-switch
          size="mini"
          v-model="modelChecked"
          @update:checked="handleChange"
        />
        <e-switch
          size="small"
          brand
          v-model="modelChecked"
          @update:checked="handleChange"
        />
        <e-switch
          size="medium"
          danger
          v-model="modelChecked"
          @update:checked="handleChange"
        />
        <e-switch
          size="large"
          success
          v-model="modelChecked"
          @update:checked="handleChange"
        />
        <e-switch
          size="large"
          warning
          v-model="modelChecked"
          @update:checked="handleChange"
        />
        <e-switch
          size="large"
          thumb-color="arona-blue-6"
          background-color="plana-pink-6"
          border-color="arona-blue-6"
          v-model="modelChecked"
          @update:checked="handleChange"
        />
        <e-switch
          size="large"
          :thumb-color="{
            from: 'var(--plana-pink-6)',
            to: 'var(--arona-blue-6)',
            deg: 45,
          }"
          :background-color="{
            from: 'var(--success-6)',
            to: 'var(--arona-blue-6)',
            deg: 45,
          }"
          v-model="modelChecked"
          @update:checked="handleChange"
        />
      </e-space>
      <e-space>
        <e-switch
          size="mini"
          checked
          v-model="modelChecked"
          @update:checked="handleChange"
        />
        <e-switch
          size="small"
          brand
          checked
          v-model="modelChecked"
          @update:checked="handleChange"
        />
        <e-switch
          size="medium"
          danger
          checked
          v-model="modelChecked"
          @update:checked="handleChange"
        />
        <e-switch
          size="large"
          success
          checked
          v-model="modelChecked"
          @update:checked="handleChange"
        />
        <e-switch
          size="large"
          warning
          checked
          v-model="modelChecked"
          @update:checked="handleChange"
        />
        <e-switch
          size="large"
          thumb-color="arona-blue-6"
          background-color="plana-pink-6"
          border-color="arona-blue-6"
          checked
          v-model="modelChecked"
          @update:checked="handleChange"
        />
        <e-switch
          size="large"
          :thumb-color="{
            from: 'var(--plana-pink-6)',
            to: 'var(--arona-blue-6)',
            deg: 45,
          }"
          :background-color="{
            from: 'var(--success-6)',
            to: 'var(--arona-blue-6)',
            deg: 45,
          }"
          checked
          v-model="modelChecked"
          @update:checked="handleChange"
        />
      </e-space>
      <e-space>
        <e-switch
          size="mini"
          disabled
          v-model="modelChecked"
          @update:checked="handleChange"
        />
        <e-switch
          size="small"
          brand
          disabled
          v-model="modelChecked"
          @update:checked="handleChange"
        />
        <e-switch
          size="medium"
          danger
          disabled
          v-model="modelChecked"
          @update:checked="handleChange"
        />
        <e-switch
          size="large"
          success
          disabled
          v-model="modelChecked"
          @update:checked="handleChange"
        />
        <e-switch
          size="large"
          warning
          disabled
          v-model="modelChecked"
          @update:checked="handleChange"
        />
        <e-switch
          size="large"
          thumb-color="arona-blue-6"
          background-color="plana-pink-6"
          disabled
          v-model="modelChecked"
          @update:checked="handleChange"
        />
        <e-switch
          size="large"
          :thumb-color="{
            from: 'var(--plana-pink-6)',
            to: 'var(--arona-blue-6)',
            deg: 45,
          }"
          disabled
          v-model="modelChecked"
          @update:checked="handleChange"
        />
      </e-space>
    </e-space>
  </e-space>
</template>

<style scoped lang="scss"></style>
