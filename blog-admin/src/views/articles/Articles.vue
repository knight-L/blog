<!--
 * @Description: 
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-31 18:50:01
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-16 20:11:38
-->
<template>
  <div style="background: rgb(255, 255, 255);padding: 24px;">
    <!-- <a-steps :current="current">
      <a-step v-for="item in steps"
              :key="item.title"
              :title="item.title" />
    </a-steps>
    <div class="steps-content">
      {{ steps[current].content }}
    </div>
    <div class="steps-action">
      <a-button v-if="current < steps.length - 1"
                type="primary"
                @click="next">下一步</a-button>
      <a-button v-if="current > 0"
                style="margin-left: 8px"
                @click="prev">上一步</a-button>
    </div> -->

    <a-form ref="formRef"
            :model="formState"
            :rules="rules"
            :label-col="{ span: 4 }"
            :wrapper-col="{ span: 14 }">
      <a-form-item ref="name"
                   label="标题"
                   name="name">
        <a-input v-model:value="formState.name" />
      </a-form-item>
      <a-form-item ref="name"
                   label="描述"
                   name="name">
        <a-input v-model:value="formState.name" />
      </a-form-item>
      <a-form-item ref="name"
                   label="封面"
                   name="name">
        <a-input v-model:value="formState.name" />
      </a-form-item>
      <a-form-item label="标签"
                   name="region">
        <a-select v-model:value="formState.region"
                  placeholder="please select your zone">
          <a-select-option value="shanghai">Zone one</a-select-option>
          <a-select-option value="beijing">Zone two</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="内容"
                   name="desc">
        <v-md-editor v-model="formState.desc"
                     height="400px"></v-md-editor>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-checkbox :checked="false">
          立即发布
        </a-checkbox>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary"
                  @click="onSubmit">创建</a-button>
        <!-- <a-button style="margin-left: 10px"
                  @click="resetForm">Reset</a-button> -->
      </a-form-item>
    </a-form>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { ref } from "vue";
import { ValidateErrorEntity } from "ant-design-vue/es/form/interface";

interface FormState {
  name: string;
  region: string | undefined;
  delivery: boolean;
  type: string[];
  resource: string;
  desc: string;
}

@Options({
  components: {},
})
export default class Articles extends Vue {
  private current = 0;
  private formRef = ref();
  public steps = [
    {
      title: "First",
      content: "First-content",
    },
    {
      title: "Second",
      content: "Second-content",
    },
    {
      title: "Last",
      content: "Last-content",
    },
  ];

  public formState = {
    name: "",
    region: undefined,
    date1: undefined,
    delivery: false,
    type: [],
    resource: "",
    desc: "",
  };

  public rules = {
    name: [
      {
        required: true,
        message: "Please input Activity name",
        trigger: "blur",
      },
      { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
    ],
    region: [
      {
        required: true,
        message: "Please select Activity zone",
        trigger: "change",
      },
    ],
    date1: [
      {
        required: true,
        message: "Please pick a date",
        trigger: "change",
        type: "object",
      },
    ],
    type: [
      {
        type: "array",
        required: true,
        message: "Please select at least one activity type",
        trigger: "change",
      },
    ],
    resource: [
      {
        required: true,
        message: "Please select activity resource",
        trigger: "change",
      },
    ],
    desc: [
      {
        required: true,
        message: "Please input activity form",
        trigger: "blur",
      },
    ],
  };

  //mounted(): void {}

  public onSubmit(): void {
    // console.log(this.formRef.$refs);
    // this.formRef.value
    //   .validate()
    //   .then(() => {
    //     console.log("values");
    //   })
    //   .catch((error: ValidateErrorEntity<FormState>) => {
    //     console.log("error", error);
    //   });
  }

  private next(): void {
    this.current++;
  }

  private prev(): void {
    this.current--;
  }
}
</script>
<style scoped lang="less">
</style>
