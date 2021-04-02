<!--
 * @Description: Tag输入框
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-04-01 21:37:41
 * @LastEditors: Knight
 * @LastEditTime: 2021-04-02 17:48:34
-->
<template>
  <div @click="focusNewTag()">
    <span v-for="(tag, index) in innerTags"
          :key="index"
          :style="tag.color"
          class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full mr-1">
      {{ tag.value }}
    </span>
    <input v-if="!isLimit"
           ref="inputTag"
           :placeholder="!innerTags.length? placeholder : ''"
           type="text"
           v-model="newTag"
           @keydown.delete.stop="removeLastTag"
           @keydown="addNew"
           @blur="addNew"
           class="focus:outline-none text-sm text-black placeholder-gray-500" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, ref } from "vue";

export default defineComponent({
  name: "InputTag",
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: "",
    },
    addTagOnKeys: {
      type: Array,
      default: () => ["Enter", "Comma", "Tab"],
    },
    //失焦添加
    addTagOnBlur: {
      type: Boolean,
      default: false,
    },
    //限制长度
    limit: {
      type: Number,
      default: -1,
    },
  },
  setup(props, { emit }) {
    let newTag = ref("");
    let innerTags = reactive(
      props.value.map((value) => {
        return {
          color: randomRgbaColor(),
          value,
        };
      })
    );
    const inputTag = ref({});

    const isLimit = computed((): boolean => {
      return props.limit > 0 && Number(props.limit) === innerTags.length;
    });

    function randomRgbaColor(): string {
      //随机生成RGBA颜色
      const r = Math.floor(Math.random() * 256); //随机生成256以内r值
      const g = Math.floor(Math.random() * 256); //随机生成256以内g值
      const b = Math.floor(Math.random() * 256); //随机生成256以内b值
      return `background-color:rgb(${r},${g},${b},0.3);color:rgb(${r},${g},${b},0.8);`; //返回rgba(r,g,b,a)格式颜色
    }

    async function addNew(e: KeyboardEvent | FocusEvent): Promise<void> {
      const condition = [
        !e,
        !props.addTagOnKeys.includes((e as KeyboardEvent).code) &&
          (e.type !== "blur" || !props.addTagOnBlur),
        isLimit.value,
        !newTag.value,
      ];

      if (condition.includes(true)) {
        return;
      }

      if (innerTags.map(({ value }) => value).includes(newTag.value)) {
        newTag.value = "";
        return;
      }

      innerTags.push({ color: randomRgbaColor(), value: newTag.value });
      newTag.value = "";
      tagChange();
      e && e.preventDefault();
    }

    function focusNewTag(): void {
      if (!inputTag.value) return;
      (inputTag.value as HTMLInputElement).focus();
    }

    function remove(index: number): void {
      innerTags.splice(index, 1);
      tagChange();
    }

    function removeLastTag(): void {
      if (newTag.value) return;
      innerTags.pop();
      tagChange();
    }

    function tagChange(): void {
      const values = innerTags.map(({ value }) => value);
      emit("update:tags", values);
      emit("input", values);
    }

    return {
      addNew,
      focusNewTag,
      remove,
      removeLastTag,
      tagChange,
      isLimit,
      inputTag,
      newTag,
      innerTags,
    };
  },
});
</script>
<style lang="scss" scoped>
</style>