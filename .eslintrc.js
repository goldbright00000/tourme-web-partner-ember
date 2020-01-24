module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  env: {
    browser: true,
    es6:true
  },
  rules: {
  },
  globals:{
    moment:true,
    // ajaxRequestGet:true,
    // ajaxRequestA2sLoginEmail:true,
    // ajaxRequestA2sLoginUsername:true,
    humanizeDuration:true

  }
};
