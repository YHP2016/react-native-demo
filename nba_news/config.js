'use strict'
let Service = {
  host:'http://localhost:7086', //服务器地址
  getNews: '/api/news',//获取新闻列表
  getNewsDetail : '/api/news/detail', //获取新闻详情页
  getTeams: '/api/teams',//获取新闻列表
  login: '/api/login',//登录
  register: '/api/register',//注册
};

module.exports = Service;
