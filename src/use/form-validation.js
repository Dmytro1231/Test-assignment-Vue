import { computed, watch } from "vue";
import * as yup from "yup";
import { useField, useForm } from "vee-validate";

export function formValidation(fn) {
  const { handleSubmit, isSubmitting, submitCount } = useForm();

  const { value: name, errorMessage: nError, handleBlur: nBlur } = useField(
    "name",
    yup
      .string()
      .required("Name shouldn't be empty")
      .max(30) //  .max(30, 'кастомная ошибка')
  );

  const { value: phone, errorMessage: pError, handleBlur: pBlur } = useField(
    "phone",
    yup
      .string()
      .trim()
      .required("Phone shouldn't be empty")
  );

  const { value: email, errorMessage: eError, handleBlur: eBlur } = useField(
    "email",
    yup
      .string()
      .trim()
      .required("Email shouldn't be empty")
      .email("You should enter a valid email")
  );

  const {
    value: checkbox,
    errorMessage: chboxError,
    handleBlur: chboxBlur,
  } = useField(
    "checkbox",
    yup.string()
    // .required() - в случае если нужно обязательный checkbox
  );

  // в случае если кликаем больше 3 раз кнопка disabled
  const tooManyAttempts = computed(() => submitCount.value >= 3);

  watch(tooManyAttempts, (val) => {
    if (val) {
      setTimeout(() => (submitCount.value = 0), 3500);
    }
  });

  const onSubmit = handleSubmit(fn);

  return {
    name,
    nError,
    nBlur,
    phone,
    pError,
    pBlur,
    email,
    eError,
    eBlur,
    checkbox,
    chboxError,
    chboxBlur,
    onSubmit,
    tooManyAttempts,
    isSubmitting,
  };
}
