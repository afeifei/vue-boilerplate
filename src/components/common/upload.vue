<template>
  <div class="vue-upload clearfix" :class="uploadUniqueId">
    <div class="upload-content fl">
        <div class="clearfix">
            <img src="/static/img/common/loading.gif" class="upload-icon">
            <input class="upload-filename fl" value="" readonly="readonly" />
            <div class="fl upload-inst"
              :data-wrap-file="uploadWrapFile"
              :data-wrap-progress="uploadWrapProgress"
              :data-wrap-result="uploadWrapResult"
              :data-server="uploadServer"
              :data-accept-ext="uploadFileExt"
              :data-accept-title="uploadFileTitle"
              :data-accept-mine="uploadFileMine"
              :data-file-size="uploadFileSize"
              :data-file-val="uploadFileVal"
              :data-auto="auto"
              :data-multiple="multiple"
              :data-file-num-limit="fileNumLimitComputed"
              :data-chunked="chunked"
            >
              <i class="fa fa-upload" aria-hidden="true"></i>浏览文件
            </div>
        </div>
        <div class="clearfix">
            <div class="upload-process"></div>
            <div class="upload-result"></div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UploadVue',
    props: {
      auto: {type: Boolean, default: true},
      multiple: {type:Boolean, default: false},
      fileNumLimit: {type: Number, default: 1},
      chunked: {type: Boolean, default: false},

      uploadId: {type: String, required: true},
      uploadServer: {type: String, required: true},
      uploadFileExt: {type: String, required: true, default: 'bmp,png,jpg,jpeg,gif'},
      uploadFileMine: {type: String, required: true, default: 'image/bmp,image/png,image/jpg,image/jpeg,image/gif'},
      uploadFileTitle: {type: String, required: true, default: '图片'},
      uploadFileSize: {type: Number, default: 5 * 1024 *1024},
      uploadFileVal: {type: String, default: 'img'},

      // event callback
      uploadStart: {type: Function, default: function() {}},
      stopUpload: {type: Function, default: function() {}},
      uploadSuccess: {type: Function, default: function(/*wfile, data*/) {}},
      uploadComplete: {type: Function, default: function() {}},
      uploadFinished: {type: Function, default: function() {}},
      uploadError: {type: Function, default: function(/*wfile, errmsg*/) {}},
      uploadProgress: {type: Function, default: function(/*wfile, percent*/) {}},
    },
    computed: {
      fileNumLimitComputed: function() {
        // 不指定multiple个数默认10个
        if(this.multiple && this.fileNumLimit === 1) {
          return 10;
        }
      },
      uploadWrapFile: function() {
        return `.${this.uploadUniqueId} .upload-filename`;
      },
      uploadWrapProgress: function() {
        return `.${this.uploadUniqueId} .upload-process`;
      },
      uploadWrapResult: function() {
        return `.${this.uploadUniqueId} .upload-result`;
      },
      uploadInstDom: function() {
        return `.${this.uploadUniqueId} .upload-inst`;
      }
    },
    data() {
      let uuid = this.uploadId || `upload${parseInt((+new Date()).toString().substr(7), 10)}`;
      return {
        uploaderInst: null,
        uploadUniqueId: uuid
      }
    },
    mounted() {
      this.$nextTick(function () {
        this.uploaderInst = $.uploader(this.uploadInstDom, {
          uploadStart:    this.uploadStart,
          stopUpload:     this.stopUpload,
          uploadSuccess:  this.uploadSuccess,
          uploadComplete: this.uploadComplete,
          uploadFinished: this.uploadFinished,
          uploadError:    this.uploadError,
          uploadProgress: this.uploadProgress,
        });
      })
    }
  }
</script>

/*<style scoped>

</style>*/
