const user = [{
  url: '/api/auth/login',
  type: 'post',
  response() {
    return {
      "code": 0,
      "message": "OK",
      "data": {
          "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJyb2xlQ29kZXMiOlsiU1VQRVJfQURNSU4iLCJST0xFX1FBIl0sImN1cnJlbnRSb2xlQ29kZSI6IlNVUEVSX0FETUlOIiwiY2FwdGNoYSI6InNTVnciLCJpYXQiOjE3MTEwOTQ4NzJ9.zcZQuYa6sxyQDhZvQBvOnmOHXAvzBYdTnJN0BlMJLmk"
      },
    }
  }
},{
  url: '/api/user/detail',
  type: 'get',
  response() {
    return {
      "code": 0,
      "message": "OK",
      "data": {
          "id": 1,
          "username": "admin",
          "enable": true,
          "createTime": "2023-11-18T08:18:59.150Z",
          "updateTime": "2023-11-18T08:18:59.150Z",
          "profile": {
              "id": 1,
              "nickName": "Admin",
              "gender": null,
              "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80",
              "address": null,
              "email": null,
              "userId": 1
          },
          "roles": [
              {
                  "id": 1,
                  "code": "SUPER_ADMIN",
                  "name": "超级管理员",
                  "enable": true
              },
              {
                  "id": 2,
                  "code": "ROLE_QA",
                  "name": "质检员",
                  "enable": true
              }
          ],
          "currentRole": {
              "id": 1,
              "code": "SUPER_ADMIN",
              "name": "超级管理员",
              "enable": true
          }
      },
      "originUrl": "/user/detail"
  }
  }
},{
  url: '/api/role/permissions/tree',
  type: 'get',
  response() {
    return {
      "code": 0,
      "message": "OK",
      "data": [
          {
              "id": 2,
              "name": "系统管理",
              "code": "SysMgt",
              "type": "MENU",
              "parentId": null,
              "path": null,
              "redirect": null,
              "icon": "i-fe:grid",
              "component": null,
              "layout": null,
              "keepAlive": null,
              "method": null,
              "description": null,
              "show": true,
              "enable": true,
              "order": 2,
              "children": [
                 
                  {
                      "id": 4,
                      "name": "用户管理",
                      "code": "UserMgt",
                      "type": "MENU",
                      "parentId": 2,
                      "path": "/user",
                      "redirect": null,
                      "icon": "i-fe:user",
                      "component": "/src/views/user/index.vue",
                      "layout": null,
                      "keepAlive": true,
                      "method": null,
                      "description": null,
                      "show": true,
                      "enable": true,
                      "order": 3,
                      "children": [
                          {
                              "id": 13,
                              "name": "创建新用户",
                              "code": "AddUser",
                              "type": "BUTTON",
                              "parentId": 4,
                              "path": null,
                              "redirect": null,
                              "icon": null,
                              "component": null,
                              "layout": null,
                              "keepAlive": null,
                              "method": null,
                              "description": null,
                              "show": true,
                              "enable": true,
                              "order": 1
                          }
                      ]
                  }
              ]
          },
      ],
      "originUrl": "/role/permissions/tree"
  }
  }
},]

export default user