<template>
  <div
    v-if="showCookiePlate"
    class="app-cookie-plate"
  >
    <div class="app-cookie-plate__title">
      сайт использует cookie для персонализации сервисов и удобства
      пользователей.<br />
      <a
        href="/confidentiality.pdf"
        target="_blank"
        >политика использования cookie-файлов</a
      >.
    </div>

    <ui-button
      class="app-cookie-plate__button"
      type="filled"
      hover-theme="black"
      @click="acceptCookies"
    >
      принять и закрыть
    </ui-button>
  </div>
</template>

<script>
export default {
  name: "AppCookiePlate",
  data() {
    return {
      showCookiePlate: true,
    };
  },

  mounted() {
    this.checkCookieConsent();
  },

  methods: {
    acceptCookies() {
      this.setCookie("cookieConsent", "accepted", 365);
      this.showCookiePlate = false;
    },

    setCookie(name, value, days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = `expires=${date.toUTCString()}`;
      document.cookie = `${name}=${value};${expires};path=/`;
    },

    getCookie(name) {
      const cookieName = `${name}=`;
      const decodedCookie = decodeURIComponent(document.cookie);
      const cookieArray = decodedCookie.split(";");
      for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === " ") {
          cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
          return cookie.substring(cookieName.length, cookie.length);
        }
      }
      return "";
    },

    checkCookieConsent() {
      const cookieConsent = this.getCookie("cookieConsent");
      if (cookieConsent === "accepted") {
        this.showCookiePlate = false;
      }
    },
  },
};
</script>

<style lang="scss">
.app-cookie-plate {
  position: fixed;
  bottom: 32px;
  left: 0;
  z-index: 999999;
  padding: 14px 20px;
  background-color: $white;
  border-radius: 15px;

  &__title {
    font-weight: 900;
    font-size: 16px;
    line-height: 130%;

    @include tablet-max {
      font-size: 10px;
    }

    a {
      color: inherit;
    }
  }

  &__button {
    margin-top: 15px;

    @include tablet-max {
      margin-top: 5px;
    }
  }
}
</style>
