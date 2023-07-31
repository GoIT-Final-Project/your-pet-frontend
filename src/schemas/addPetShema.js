import * as Yup from "yup";

export const addPetShema = Yup.object().shape({
  //First Step
  //   categories: Yup.string()
  //     .oneOf(["your-pet", "sell", "lost-found", "in-good-hands"])
  //     .required(
  //       "Оберіть одну з категорій (sell, lost-found, for-free або my-pet)"
  //     ),
  //   name: Yup.string()
  //     .min(2, "Мінімум 2 символи")
  //     .max(16, "Максимум 16 символів")
  //     .required("Обовʼязкове поле"),
  //   type: Yup.string()
  //     .min(2, "Мінімум 2 символи")
  //     .max(16, "Максимум 16 символів")
  //     .required("Обовʼязкове поле"),

  //Third step
  //   sex: Yup.string()
  //     .oneOf(["male", "female"])
  //     .required("Оберіть один із типів (male або female)"),

  //   location: Yup.string()
  //     .matches(/^[A-Za-z0-9\s,.'-]+$/, "Некоректний формат (Місто)")
  //     .when("categories", {
  //       is: oneOf(["your-pet", "sell", "lost-found", "in-good-hands"]),
  //       then: ,
  //       otherwise: ,
  //     }),
  location: Yup.string().when("categories", {
    is: Yup.string().oneOf(["sell", "lost-found", "in-good-hands"]),
    then: Yup.string()
      .matches(/^[a-zA-Zа-яА-Я ]+$/)
      .required("required"),
  }),

  //   price: Yup.number().required("Обовʼязкове поле"),
  comments: Yup.string().max(120, "Максимум 120 символів"),

  //   date: Yup.date().required("Обовʼязкове поле"),
});

//   file: Yup.mixed()
//     .required("Обовʼязкове поле")
//     .test("fileSize", "Розмір файлу не повинен перевищувати 3 Мб", (value) => {
//       if (value) {
//         return value.size <= 3 * 1024 * 1024; // 3 Мб
//       }
//       return false;
//     }),

//   file: Yup.mixed().test("fileSize", "The file is too large", (value) => {
//     if (!value?.length) return true; // attachment is optional
//     return value[0].size <= 2000000;
//   }),
