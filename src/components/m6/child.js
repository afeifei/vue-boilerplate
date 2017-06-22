/*! Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal)
* Licensed Under MIT (http://opensource.org/licenses/MIT)
*
* Vue 2 Loading Bar - Version 0.0.1
*
*/

module.exports = {
  name: 'LoadingBar',

  props: {
    id: String,
    customClass: String,
    progress: {
      type: Number,
      default: 0
    },
    onProgressDone: {
      type: Function,
      required: true
    }

  },

  data() {

    return {
      show: true
    }
  },

  render(h) {
    console.log('h= ', h);
    console.log('this= ',this);
    let {id, customClass, progress, onProgressDone} = this;
    this.clickBtn();
    return(
      <div id={id} class={customClass}>
        progress = {progress}
        <button class="pure-button" onClick={onProgressDone.bind(this, 123)}>点击我</button>
        {/*
          <button class="pure-button" onClick={onProgressDone}>点击我</button>
        */}
      </div>
    )
  },

  watch:{

  },

  methods: {
    clickBtn() {
      console.log('child click');
    }
  }
};
