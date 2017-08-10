/*
	Routes 路由配置
*/
import React from 'react';
import { Router, hashHistory } from 'react-router';

const routes = {
  component: require('PAGES/Layouts').default,
  childRoutes: [{
      // 首页跳转
      path: '/',
      indexRoute: {
        onEnter: (nextState, replace) => replace('', 'home')
      },
    },
    // 首页
    {
      path: 'home',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/home').default)
        })
      }
    },
    //参考案例
    {
      path: 'userRegister',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/userRegister').default)
        })
      }
    },
    //账户功能个人
    {
      path: 'accountFunction/list',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/accountFunction/list').default)
        })
      }
    },
    //账户功能管理
    {
      path: 'accountFunction/list/Management',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/accountFunction/list/Management').default)
        })
      }
    },





    //账户查询个人
    {
      path: 'accountQuery/personal',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/accountQuery/personal').default)
        })
      }
    },
    //账户查询个人详情
    {
      path: 'accountQuery/personal/Detail',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/accountQuery/personal/Detail').default)
        })
      }
    },
    //账户查询企业
    {
      path: 'accountQuery/company',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/accountQuery/company').default)
        })
      }
    },
    //账户查询企业详情
    {
      path: 'accountQuery/company/Detail',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/accountQuery/company/Detail').default)
        })
      }
    },



    //渠道管理
    {
      path: 'channelManage/list',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/channelManage/list').default)
        })
      }
    },
    //渠道查看
    {
      path: 'channelManage/list/View',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/channelManage/list/View').default)
        })
      }
    },
    //渠道编辑1
    {
      path: 'channelManage/create/EditorSteps1',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/channelManage/create/EditorSteps1').default)
        })
      }
    },
    //渠道编辑2
    {
      path: 'channelManage/create/EditorSteps2',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/channelManage/create/EditorSteps2').default)
        })
      }
    },
    //渠道编辑3
    {
      path: 'channelManage/create/EditorSteps3',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/channelManage/create/EditorSteps3').default)
        })
      }
    },
    //渠道编辑4
    {
      path: 'channelManage/create/EditorSteps4',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/channelManage/create/EditorSteps4').default)
        })
      }
    },
    //渠道注册验证
    {
      path: 'channelManage/list/regValida',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/channelManage/list/regValida').default)
        })
      }
    },
    //渠道登录验证
    {
      path: 'channelManage/list/logValida',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/channelManage/list/logValida').default)
        })
      }
    },
    //渠道修改注册信息
    {
        path: 'channelManage/list/editorValida',
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('PAGES/channelManage/list/editorValida').default)
            })
        }
    },
    //渠道功能
    {
      path: 'channelManage/list/Feature',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/channelManage/list/Feature').default)
        })
      }
    },
    //服务管理
    {
      path: 'serviceManage/list',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/serviceManage/list').default)
        })
      }
    },
    //服务列表查看
    {
      path: 'serviceManage/list/View',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/serviceManage/list/View').default)
        })
      }
    },
    //服务步骤
    {
      path: 'serviceManage/guide/EditorSteps1',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/serviceManage/guide/EditorSteps1').default)
        })
      }
    },
    //服务步骤2
    {
      path: 'serviceManage/guide/EditorSteps2',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/serviceManage/guide/EditorSteps2').default)
        })
      }
    },
    //服务步骤3
    {
      path: 'serviceManage/guide/EditorSteps3',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/serviceManage/guide/EditorSteps3').default)
        })
      }
    },
    //服务管理内容
    {
      path: 'serviceManage/list/Feature',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/serviceManage/list/Feature').default)
        })
      }
    },

    //系统管理
    {
      path: 'systemManage/account',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/systemManage/account').default)
        })
      }
    },
    //系统管理/账户编辑
    {
      path: 'systemManage/account/accountEditor',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/systemManage/account/accountEditor').default)
        })
      }
    },
    //系统管理/账户创建
    {
      path: 'systemManage/account/accountCreate',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/systemManage/account/accountCreate').default)
        })
      }
    },
    //系统管理/账户重置密码
    {
      path: 'systemManage/account/accountRepassword',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/systemManage/account/accountRepassword').default)
        })
      }
    },

    //系统管理/角色管理
    {
      path: 'systemManage/role',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/systemManage/role').default)
        })
      }
    },
    //系统管理/角色查看
    {
      path: 'systemManage/role/roleView',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/systemManage/role/roleView').default)
        })
      }
    },
    //系统管理/角色编辑
    {
      path: 'systemManage/role/roleEditor',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/systemManage/role/roleEditor').default)
        })
      }
    },
    //系统管理/角色创建
    {
      path: 'systemManage/role/roleCreate',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/systemManage/role/roleCreate').default)
        })
      }
    },
    //系统管理/修改密码
    {
      path: 'systemManage/update',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/systemManage/update').default)
        })
      }
    },


    // 404
    {
      path: '*',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/404').default);
        });
      }
    }
  ]
};

export default <Router history = {hashHistory} routes = {routes} />;
