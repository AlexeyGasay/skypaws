export default (axios) => ({
  sendCode(type, params) {
    return axios.post(`/api/auth/code/${type}`, {
      key: params.key,
      captcha: params.captcha,
    });
  },

  codeValidate(params) {
    return axios.get(
      `/api/auth/code/validate?key=${params.key}&code=${params.code}`,
    );
  },

  signInByCode(params) {
    return axios.post("/api/auth/sign-in/by-code", {
      key: params.key,
      code: params.code,
    });
  },

  signInByPassword(params) {
    return axios.post("/api/auth/sign-in/by-password", {
      key: params.key,
      password: params.password,
    });
  },

  signUp(params) {
    return axios.post("/api/auth/sign-up", {
      name: params.name,
      phone: params.phone,
      password: params.password,
      passwordConfirmation: params.passwordConfirmation,
      code: params.code,
      email: params?.email,
      inn: params?.inn,
      mailingAgreement: params.mailingAgreement,
      birthdate: params.birthdate,
    });
  },

  sendUserPasswordRecoverCode(type, params) {
    return axios.post(`/api/user/password/code/${type}`, {
      key: params.key,
      captcha: params.captcha,
    });
  },

  userPasswordUpdate(params) {
    return axios.post("/api/user/password/update", params);
  },
});
