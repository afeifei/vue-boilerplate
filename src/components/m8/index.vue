<template>
  <div class="block pure-form">
    <Navbar />

    <h2>自定义校验方法，initial: 初始化验证， delay: debounce 验证</h2>
    <div class="form-group" :class="{'has-error': errors.has('mobile') }" >
      mobile: <input v-validate.initial="{ rules: { required: true, mobile: true } }" data-vv-delay="50" type="text" name="mobile" v-model="mobile" @change="handleChange">
      <span v-show="errors.has('mobile')">{{ errors.first('mobile') }}</span>
    </div>

    <h2>正常</h2>
    <div class="form-group" :class="{'has-error': errors.has('username') }" >
      username: <input v-validate:username="'required|alpha_spaces'" type="text" name="username">
      <span v-show="errors.has('username')">{{ errors.first('username') }}</span>
    </div>

    <h2>表单验证(可以使用Scope进行区域化管理)</h2>
    <div>
      <form @submit.prevent="validateBeforeSubmit('form1')" data-vv-scope="form1">
          <div class="column is-12">
              <label class="label">Email</label>
              <p class="control has-icon has-icon-right">
                  <input name="email" v-model="email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('form1.email') }" type="text" placeholder="Email">
                  <i v-show="errors.has('form1.email')" class="fa fa-warning"></i>
                  <span v-show="errors.has('form1.email')" class="help is-danger">{{ errors.first('form1.email') }}</span>
              </p>
          </div>
          <div class="column is-12">
              <label class="label">Phone</label>
              <p class="control has-icon has-icon-right">
                  <input name="phone" v-model="phone" v-validate="'required|numeric'" :class="{'input': true, 'is-danger': errors.has('form1.phone') }" type="text" placeholder="Phone">
                  <i v-show="errors.has('form1.phone')" class="fa fa-warning"></i>
                  <span v-show="errors.has('form1.phone')" class="help is-danger">{{ errors.first('form1.phone') }}</span>
              </p>
          </div>
          <div class="column is-12">
              <label class="label">Website</label>
              <p class="control has-icon has-icon-right">
                  <input name="url" v-model="url" v-validate="'required|url'" :class="{'input': true, 'is-danger': errors.has('form1.url') }" type="text" placeholder="Website">
                  <i v-show="errors.has('form1.url')" class="fa fa-warning"></i>
                  <span v-show="errors.has('form1.url')" class="help is-danger">{{ errors.first('form1.url') }}</span>
              </p>
          </div>

          <div class="column is-12">
              <p class="control">
                  <button class="button is-primary pure-button" type="submit">Submit</button>
                  <button class="button is-primary pure-button" type="button" @click="errors.clear('form1')">Clear</button>
              </p>
          </div>
      </form>
    </div>

  </div>
</template>

<script>
import Navbar from 'components/common/navbar';

export default {
  name: 'M8Vue',
  components: {
    Navbar
  },
  data () {
    return {
      email: '',
      phone: '',
      url: ''
    }
  },
  methods: {
    handleChange: function () {
      console.log(this.$validator)
      console.log(this.errors);
    },

    validateBeforeSubmit(scope) {
      console.log(scope);
      this.$validator.validateAll(scope).then(() => {
          // eslint-disable-next-line
          console.log('From Submitted!');
      }).catch(() => {
          // eslint-disable-next-line
          console.log('Correct them errors!');
      });
    }
  },

  mounted() {

  },
  computed: {
    name() {
      return this.first_name + ' ' + this.last_name;
    }
  }
}
</script>

<style scoped>
  h2 {
    font-size: 24px;
    margin-top: 50px;
  }
</style>
