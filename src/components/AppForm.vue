<template>
  <form class="form" @submit.prevent="onSubmit">
    <input
      :class="['form-control', { invalid: nError }]"
      type="text"
      placeholder="Name"
      v-model="name"
      @blur="nBlur"
      @keypress="isLetter($event)"
    />
    <small v-if="nError" class="error">{{ nError }}</small>
    <input
      :class="['form-control', { invalid: pError }]"
      type="tel"
      placeholder="Phone"
      v-model="phone"
      @blur="tBlur"
      v-phone
    />
    <small v-if="pError" class="error">{{ pError }}</small>
    <input
      :class="['form-control', { invalid: eError }]"
      type="email"
      placeholder="E-mail"
      v-model="email"
      @blur="eBlur"
    />
    <small v-if="eError" class="error">{{ eError }}</small>
    <div class="allow-checkbox">
      <input
        :class="['form-control', { invalid: chboxError }]"
        id="confirm"
        type="checkbox"
        v-model="checkbox"
        @blur="chboxBlur"
      />
      <label class="confirm" for="confirm"
        >I agree the processing of personal data</label
      >
      <small v-if="chboxError" class="error">{{ chboxError }}</small>
    </div>
    <button
      class="btn"
      type="submit"
      :disabled="isSubmitting || tooManyAttempts"
    >
      <a name="contact">Get in touch</a>
    </button>
    <div class="text-danger" v-if="tooManyAttempts">
      Too many attempts to login
    </div>
  </form>
</template>

<script>
import { formValidation } from "../use/form-validation";
import axios from "axios";
import { useStore } from "vuex";

export default {
  setup() {
    const url = "http://httpbin.org/post";
    const store = useStore();
    const submit = (values) => {
      axios
        .post(url, {
          values,
        })
        .then((response) => {
          console.log(response);
          store.dispatch("setMessage", {
            type: "primary",
          });
        })
        .catch((e) => {
          store.dispatch("setMessage", {
            value: e.message,
            type: "danger",
          });
        });
      console.log("this is submit values", values);
      // submit данные
    };

    const isLetter = (e) => {
      let char = String.fromCharCode(e.keyCode);
      if (/^[a-zA-Z\s,А-Яа-яЁё\s]+$/.test(char)) return true;
      else e.preventDefault();
      // проверка на буквы русские,английские
    };

    return { ...formValidation(submit), isLetter };
  },
  // директива на валидацию телефона
  directives: {
    phone: {
      mounted(el) {
        el.oninput = function (e) {
          if (!e.isTrusted) {
            return;
          }

          const x = this.value
            .replace(/\D/g, "")
            .match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})/);

          if (!x[2] && x[1] !== "") {
            this.value = x[1] === "+380" ? x[1] : "+380" + x[1];
          } else {
            this.value = !x[3]
              ? x[1] + x[2]
              : x[1] + "(" + x[2] + ") " + x[3] + (x[4] ? "-" + x[4] : "");
          }
        };
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "SuisseIntl-SemiBold";
  src: local("SuisseIntl-SemiBold"), local("SuisseIntl-SemiBold"),
    url("~@/fonts/SuisseIntl-SemiBold.woff") format("woff"),
    url("~@/fonts/SuisseIntl-SemiBold.woff2") format("woff2");
  font-weight: 300;
  font-style: normal;
}
.form {
  max-width: 540px;
  display: flex;
  flex-direction: column;
  .form-control {
    border: none;
    border-bottom: 1px solid black;
    color: black;
    font-size: 18px;
    margin-bottom: 22px;
    padding-bottom: 15px;
    outline: none;
    background: none;
    &:active {
      border-bottom-color: #fff;
    }
    &:last-child {
      margin-bottom: 15px;
    }
    &:active::placeholder {
      color: #fff;
    }
    &::placeholder {
      font-size: 18px;
      color: black;
    }
    // red border input
    &.invalid {
      border-color: #e53935;
    }
  }
  // error message
  .error {
    color: #e53935;
    margin-bottom: 12px;
  }
  // btn styling
  .btn {
    background-color: rgb(38, 38, 38);
    color: #fff;
    text-align: center;
    outline: none;
    cursor: pointer;
    border: none;
    width: 279px;
    height: 83px;
    font-size: 11px;
    font-weight: bold;
    text-transform: uppercase;
    line-height: 6.577;
    font-family: "SuisseIntl-SemiBold", sans-serif;
    letter-spacing: 1.5px;
    padding-left: 5px;
    padding-bottom: 5px;
    &:hover {
      box-shadow: 1px 1px #53ea93, 2px 2px #53ea93, 3px 3px #53ea93,
        4px 4px #53ea93, 5px 5px #53ea93, 6px 6px #53ea93, 7px 7px #53ea93;
      -webkit-transform: translateX(-7px);
      transform: translateX(-7px);
    }
    &:disabled {
      cursor: not-allowed;
      opacity: 1 !important;
      background: #eee !important;
      border-color: #ddd !important;
      color: #999 !important;
    }
  }
  .text-danger {
    color: #e53935;
    margin-top: 10px;
  }
  .allow-checkbox {
    display: flex;
    align-items: baseline;
    margin-bottom: 40px;
    input {
      margin-right: 15px;
    }
    .confirm {
      font-size: 18px;
      color: #fff;
      margin-left: 5px;
    }
    // styling checkbox input
    input[type="checkbox"]:checked + label::after {
      content: "";
      position: absolute;
      width: 1.2ex;
      height: 0.4ex;
      background: rgba(0, 0, 0, 0);
      top: 0.9ex;
      left: 0.2ex;
      border: 2px solid #1a1a1a;
      border-top: none;
      border-right: none;
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      transform: rotate(-55deg);
    }
    input[type="checkbox"] {
      line-height: 2.1ex;
    }
    input[type="radio"],
    input[type="checkbox"] {
      position: absolute;
      left: -999em;
    }

    input[type="checkbox"] + label {
      position: relative;
      overflow: hidden;
      cursor: pointer;
    }
    input[type="checkbox"] + label::before {
      content: "";
      display: inline-block;
      vertical-align: -15%;
      width: 15px;
      height: 15px;
      background-color: white;
      border: 1px solid rgb(166, 166, 166);
      border-radius: 4px;
      margin-right: 0.5em;
    }
  }
}
@media (max-width: 605px) {
  .form-control {
    width: 90% !important;
  }
}
@media (max-width: 480px) {
  .btn {
    width: 210px !important;
    height: 50px !important;
    padding-bottom: 0 !important;
    padding-left: 0 !important;
    line-height: initial !important;
  }
}
</style>