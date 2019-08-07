<template>
  <el-card style="flex: 1">
    <div slot="header" class="clearfix">
      <span>ログイン</span>
    </div>
    <form>
      <LoginInfo :form-data="formData" />
      <LoginButtonSwitcher
        @on-click-resister="handleClickResister"
        @on-click-login="handleClickLogin"
      />
    </form>
  </el-card>
</template>

<script>
import { mapActions } from 'vuex';
import Cookies from 'universal-cookie';
import LoginInfo from '~/components/molecules/LoginInfo';
import LoginButtonSwitcher from '~/components/molecules/LoginButtonSwitcher';

export default {
  components: {
    LoginInfo, //: () => import('~/components/molecules/LoginInfo'),
    LoginButtonSwitcher, //: () => import('~/components/molecules/LoginButtonSwitcher'),
  },

  data() {
    return {
      formData: {
        id: '',
      },
    };
  },

  methods: {
    async handleClickResister() {
      const cookies = new Cookies();
      try {
        await this.register({ ...this.formData });
        this.$notify({
          type: 'success',
          title: 'アカウント作成完了',
          message: `${this.formData.id} として登録しました`,
          position: 'bottom-right',
          duration: 2000,
        });
        cookies.set('loginUser', JSON.stringify(this.loginUser));
        this.$emit('on-click-resister');
      } catch (e) {
        this.$notify.error({
          title: 'アカウント作成失敗',
          message: '既に登録されているか、不正なユーザー ID です',
          position: 'bottom-right',
          duration: 2000,
        });
      }
    },

    async handleClickLogin() {
      const cookies = new Cookies();
      try {
        await this.login({ ...this.formData });
        this.$notify({
          type: 'success',
          title: 'ログイン成功',
          message: `${this.formData.id} としてログインしました`,
          position: 'bottom-right',
          duration: 2000,
        });
        cookies.set('loginUser', JSON.stringify(this.loginUser));
        this.$emit('on-click-login');
      } catch (e) {
        this.$notify.error({
          title: 'ログイン失敗',
          message: '不正なユーザー ID です',
          position: 'bottom-right',
          duration: 2000,
        });
      }
    },
    ...mapActions('auth', ['login', 'register']),
  },
};
</script>
