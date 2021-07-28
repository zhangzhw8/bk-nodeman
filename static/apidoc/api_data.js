define({ "api": [
  {
    "type": "get",
    "url": "/ap/ap_is_using/",
    "title": "返回正在被使用的接入点",
    "name": "ap_is_using",
    "group": "Ap",
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/ap.py",
    "groupTitle": "Ap"
  },
  {
    "type": "POST",
    "url": "/ap/",
    "title": "新增接入点",
    "name": "create_ap",
    "group": "Ap",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>接入点名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "servers",
            "description": "<p>服务器列表</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "servers.inner_ip",
            "description": "<p>内网IP</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "servers.outer_ip",
            "description": "<p>外网IP</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "package_inner_url",
            "description": "<p>安装包内网地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "package_outer_url",
            "description": "<p>安装包外网地址</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "zk_hosts",
            "description": "<p>ZK服务器</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zk_hosts.zk_ip",
            "description": "<p>ZK IP地址</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "zk_hosts.port",
            "description": "<p>ZK端口</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zk_account",
            "description": "<p>ZK账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zk_password",
            "description": "<p>ZK密码</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "agent_config",
            "description": "<p>Agent配置信息</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "agent_config.linux",
            "description": "<p>Linux Agent配置信息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agent_config.linux.setup_path",
            "description": "<p>Linux Agent安装路径</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agent_config.linux.data_path",
            "description": "<p>Linux Agent数据文件路径</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agent_config.linux.run_path",
            "description": "<p>Linux Agent运行路径</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agent_config.linux.log_path",
            "description": "<p>Linux Agent日志文件路径</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "agent_config.windows",
            "description": "<p>Windows配置信息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agent_config.windows.setup_path",
            "description": "<p>Windows Agent安装路径</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agent_config.windows.data_path",
            "description": "<p>Windows Agent数据文件路径</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agent_config.windows.log_path",
            "description": "<p>Windows Agent日志文件路径</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>描述</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n    \"name\": \"接入点名称\",\n    \"zk_hosts\": [\n        {\n            \"zk_ip\": \"127.0.0.1\",\n            \"zk_port: 111,\n        },\n        {\n            \"zk_ip\": \"127.0.0.2\",\n            \"zk_port: 222,\n        }\n    ]\n    \"zk_user\": \"username\",\n    \"zk_password\": \"zk_password\",\n    \"servers\": [\n        {\n            \"inner_ip\": \"127.0.0.1\",\n            \"outer_ip\": \"127.0.0.2\"\n        }\n    ],\n    \"btfileserver\": [\n        {\n            \"inner_ip\": \"127.0.0.1\",\n            \"outer_ip\": \"127.0.0.2\"\n        }\n    ],\n    \"dataserver\": [\n        {\n            \"inner_ip\": \"127.0.0.1\",\n            \"outer_ip\": \"127.0.0.2\"\n        }\n    ],\n    \"taskserver\": [\n        {\n            \"inner_ip\": \"127.0.0.1\",\n            \"outer_ip\": \"127.0.0.2\"\n        }\n    ],\n    \"package_inner_url\": \"http://127.0.0.1/download/\",\n    \"package_outer_url\": \"http://127.0.0.2/download/\",\n    \"agent_config\": {\n        \"linux\": {\n            \"setup_path\": \"/usr/local/gse\",\n            \"data_path\": \"/usr/local/gse/data\",\n            \"run_path\": \"/usr/local/gse/run\",\n            \"log_path\": \"/usr/local/gse/log\"\n        },\n        \"windows\": {\n            \"setup_path\": \"/usr/local/gse\",\n            \"data_path\": \"/usr/local/gse/data\",\n            \"log_path\": \"/usr/local/gse/log\"\n        }\n    },\n    \"description\": \"描述\"\n}",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/ap.py",
    "groupTitle": "Ap"
  },
  {
    "type": "DELETE",
    "url": "/ap/{{pk}}/",
    "title": "删除接入点",
    "name": "delete_ap",
    "group": "Ap",
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/ap.py",
    "groupTitle": "Ap"
  },
  {
    "type": "POST",
    "url": "/ap/init_plugin/",
    "title": "初始化插件信息",
    "name": "init_plugin_data",
    "group": "Ap",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ap_id",
            "description": "<p>接入点ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/ap.py",
    "groupTitle": "Ap"
  },
  {
    "type": "GET",
    "url": "/ap/",
    "title": "查询接入点列表",
    "name": "list_ap",
    "group": "Ap",
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "[{\n    \"id\": 1,\n    \"name\": \"接入点名称\",\n    \"zk_hosts\": [\n        {\n            \"zk_ip\": \"127.0.0.1\",\n            \"zk_port: 111,\n        },\n        {\n            \"zk_ip\": \"127.0.0.2\",\n            \"zk_port: 222,\n        }\n    ]\n    \"zk_user\": \"username\",\n    \"zk_password\": \"zk_password\",\n    \"servers\": [\n        {\n            \"inner_ip\": \"127.0.0.1\",\n            \"outer_ip\": \"127.0.0.2\"\n        }\n    ],\n    \"package_inner_url\": \"http://127.0.0.1/download/\",\n    \"package_outer_url\": \"http://127.0.0.2/download/\",\n    \"agent_config\": {\n        \"linux\": {\n            \"setup_path\": \"/usr/local/gse\",\n            \"data_path\": \"/usr/local/gse/data\",\n            \"run_path\": \"/usr/local/gse/run\",\n            \"log_path\": \"/usr/local/gse/log\"\n        },\n        \"windows\": {\n            \"setup_path\": \"/usr/local/gse\",\n            \"data_path\": \"/usr/local/gse/data\",\n            \"log_path\": \"/usr/local/gse/log\"\n        }\n    },\n    \"description\": \"描述\"\n}]",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/ap.py",
    "groupTitle": "Ap"
  },
  {
    "type": "GET",
    "url": "/ap/{{pk}}/",
    "title": "查询接入点详情",
    "name": "retrieve_ap",
    "group": "Ap",
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"id\": 1,\n    \"name\": \"接入点名称\",\n    \"zk_hosts\": [\n        {\n            \"zk_ip\": \"127.0.0.1\",\n            \"zk_port: 111,\n        },\n        {\n            \"zk_ip\": \"127.0.0.2\",\n            \"zk_port: 222,\n        }\n    ]\n    \"zk_user\": \"username\",\n    \"zk_password\": \"zk_password\",\n    \"servers\": [\n        {\n            \"inner_ip\": \"127.0.0.1\",\n            \"outer_ip\": \"127.0.0.2\"\n        }\n    ],\n    \"package_inner_url\": \"http://127.0.0.1/download/\",\n    \"package_outer_url\": \"http://127.0.0.2/download/\",\n    \"agent_config\": {\n        \"linux\": {\n            \"setup_path\": \"/usr/local/gse\",\n            \"data_path\": \"/usr/local/gse/data\",\n            \"run_path\": \"/usr/local/gse/run\",\n            \"log_path\": \"/usr/local/gse/log\"\n        },\n        \"windows\": {\n            \"setup_path\": \"/usr/local/gse\",\n            \"data_path\": \"/usr/local/gse/data\",\n            \"log_path\": \"/usr/local/gse/log\"\n        }\n    },\n    \"description\": \"描述\"\n}",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/ap.py",
    "groupTitle": "Ap"
  },
  {
    "type": "POST",
    "url": "/ap/test/",
    "title": "接入点可用性测试",
    "name": "test_ap",
    "group": "Ap",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "servers",
            "description": "<p>服务器列表</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "servers.inner_ip",
            "description": "<p>内网IP</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "servers.outer_ip",
            "description": "<p>外网IP</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "package_inner_url",
            "description": "<p>安装包内网地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "package_outer_url",
            "description": "<p>安装包外网地址</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n    \"servers\": [\n        {\n            \"inner_ip\": \"127.0.0.1\",\n            \"outer_ip\": \"127.0.0.2\"\n        }\n    ],\n    \"package_inner_url\": \"http://127.0.0.1/download/\",\n    \"package_outer_url\": \"http://127.0.0.2/download/\"\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"test_result\": false,\n    \"test_logs\": [\n      {\n        \"log_level\": \"INFO\",\n        \"log\": \"检测 127.0.0.1 连接正常\"\n      },\n      {\n        \"log_level\": \"ERROR\",\n        \"log\": \"检测 127.0.0.1 下载失败\"\n      }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/ap.py",
    "groupTitle": "Ap"
  },
  {
    "type": "PUT",
    "url": "/ap/{{pk}}/",
    "title": "编辑接入点",
    "name": "update_ap",
    "group": "Ap",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>接入点名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "servers",
            "description": "<p>服务器列表</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "servers.inner_ip",
            "description": "<p>内网IP</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "servers.outer_ip",
            "description": "<p>外网IP</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "package_inner_url",
            "description": "<p>安装包内网地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "package_outer_url",
            "description": "<p>安装包外网地址</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "zk_hosts",
            "description": "<p>ZK服务器</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zk_hosts.zk_ip",
            "description": "<p>ZK IP地址</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "zk_hosts.port",
            "description": "<p>ZK端口</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zk_account",
            "description": "<p>ZK账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zk_password",
            "description": "<p>ZK密码</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "agent_config",
            "description": "<p>Agent配置信息</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "agent_config.linux",
            "description": "<p>Linux Agent配置信息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agent_config.linux.setup_path",
            "description": "<p>Linux Agent安装路径</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agent_config.linux.data_path",
            "description": "<p>Linux Agent数据文件路径</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agent_config.linux.run_path",
            "description": "<p>Linux Agent运行路径</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agent_config.linux.log_path",
            "description": "<p>Linux Agent日志文件路径</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "agent_config.windows",
            "description": "<p>Windows配置信息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agent_config.windows.setup_path",
            "description": "<p>Windows Agent安装路径</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agent_config.windows.data_path",
            "description": "<p>Windows Agent数据文件路径</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agent_config.windows.log_path",
            "description": "<p>Windows Agent日志文件路径</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>描述</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n    \"name\": \"接入点名称\",\n    \"servers\": [\n        {\n            \"inner_ip\": \"127.0.0.1\",\n            \"outer_ip\": \"127.0.0.2\"\n        }\n    ],\n    \"package_inner_url\": \"http://127.0.0.1/download/\",\n    \"package_outer_url\": \"http://127.0.0.2/download/\",\n    \"agent_config\": {\n        \"linux\": {\n            \"setup_path\": \"/usr/local/gse\",\n            \"data_path\": \"/usr/local/gse/data\",\n            \"run_path\": \"/usr/local/gse/run\",\n            \"log_path\": \"/usr/local/gse/log\"\n        },\n        \"windows\": {\n            \"setup_path\": \"/usr/local/gse\",\n            \"data_path\": \"/usr/local/gse/data\",\n            \"log_path\": \"/usr/local/gse/log\"\n        }\n    },\n    \"description\": \"描述\"\n}",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/ap.py",
    "groupTitle": "Ap"
  },
  {
    "type": "POST",
    "url": "/cloud/",
    "title": "创建云区域",
    "name": "create_cloud",
    "group": "Cloud",
    "description": "<p>ap_id==-1代表自动选择</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bk_cloud_name",
            "description": "<p>云区域名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isp",
            "description": "<p>云服务商</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "ap_id",
            "description": "<p>接入点ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n    \"bk_cloud_name\": \"云区域名称\",\n    \"isp\": \"tencent\",\n    \"ap_id\": 1,\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"bk_cloud_id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/cloud.py",
    "groupTitle": "Cloud"
  },
  {
    "type": "DELETE",
    "url": "/cloud/{{pk}}/",
    "title": "删除云区域",
    "name": "delete_cloud",
    "group": "Cloud",
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/cloud.py",
    "groupTitle": "Cloud"
  },
  {
    "type": "GET",
    "url": "/cloud/",
    "title": "查询云区域列表",
    "name": "list_cloud",
    "group": "Cloud",
    "description": "<p>ap_id==-1代表自动选择接入点</p>",
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "[\n    {\n        \"bk_cloud_id\": 1,\n        \"bk_cloud_name\": \"云区域名称\",\n        \"isp\": \"tencent\",\n        \"isp_name\": \"腾讯云\",\n        \"isp_icon\": \"base64\",\n        \"ap_id\": 1,\n        \"ap_name\": \"接入点名称\",\n        \"proxy_count\": 100,\n        \"node_count\": 200,\n        \"is_visible\": true\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/cloud.py",
    "groupTitle": "Cloud"
  },
  {
    "type": "GET",
    "url": "/cloud/{{pk}}/biz/",
    "title": "查询某主机服务信息",
    "name": "list_cloud_biz",
    "group": "Cloud",
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"data\": [\n        53\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/cloud.py",
    "groupTitle": "Cloud"
  },
  {
    "type": "GET",
    "url": "/cloud/{{pk}}/",
    "title": "查询云区域详情",
    "name": "retrieve_cloud",
    "group": "Cloud",
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"bk_cloud_id\": 1,\n    \"bk_cloud_name\": \"云区域名称\",\n    \"isp\": \"tencent\",\n    \"isp_name\": \"腾讯云\",\n    \"isp_icon\": \"\",\n    \"ap_id\": 1,\n    \"ap_name\": \"接入点名称\",\n    \"bk_biz_scope\": [1, 2, 3],\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/cloud.py",
    "groupTitle": "Cloud"
  },
  {
    "type": "PUT",
    "url": "/cloud/{{pk}}/",
    "title": "编辑云区域",
    "name": "update_cloud",
    "group": "Cloud",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bk_cloud_name",
            "description": "<p>云区域名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isp",
            "description": "<p>云服务商</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "ap_id",
            "description": "<p>接入点ID</p>"
          },
          {
            "group": "Parameter",
            "type": "List",
            "optional": false,
            "field": "bk_biz_scope",
            "description": "<p>业务范围</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n    \"bk_cloud_name\": \"云区域名称\",\n    \"isp\": \"tencent\",\n    \"ap_id\": 1,\n    \"bk_biz_scope\": [1, 2, 3]\n}",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/cloud.py",
    "groupTitle": "Cloud"
  },
  {
    "type": "POST",
    "url": "/v2/host/search/",
    "title": "查询主机列表",
    "name": "list_host",
    "group": "Host_v2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": true,
            "field": "bk_biz_id",
            "description": "<p>业务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": true,
            "field": "bk_host_id",
            "description": "<p>主机ID</p>"
          },
          {
            "group": "Parameter",
            "type": "List",
            "optional": true,
            "field": "conditions",
            "description": "<p>搜索条件，支持os_type, ip, status, version, bk_cloud_id, node_from <br> query: IP、操作系统、Agent状态、Agent版本、云区域 单/多模糊搜索 <br> topology: 拓扑搜索，传入bk_set_ids, bk_module_ids</p>"
          },
          {
            "group": "Parameter",
            "type": "List",
            "optional": true,
            "field": "nodes",
            "description": "<p>拓扑节点, 例如：[{&quot;bk_biz_id&quot;: 1, &quot;bk_inst_id&quot;: 10, &quot;bk_obj_id&quot;: &quot;module&quot;}, ...]</p>"
          },
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": true,
            "field": "exclude_hosts",
            "description": "<p>跨页全选排除主机</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "page",
            "description": "<p>当前页数，默认为<code>1</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "pagesize",
            "description": "<p>分页大小，默认为<code>10</code>，<code>-1</code> 表示跨页全选</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "agent_status_count",
            "description": "<p>仅返回Agent统计状态，默认<code>False</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"total\": 1,\n    \"list\": [\n        {\n            \"bk_cloud_id\": 1,\n            \"bk_cloud_name\": \"云区域名称\",\n            \"bk_biz_id\": 2,\n            \"bk_biz_name\": \"业务名称\",\n            \"bk_host_id\": 1,\n            \"os_type\": \"linux\",\n            \"inner_ip\": \"127.0.0.1\",\n            \"status\": \"RUNNING\",\n        }\n    ]\n}\n// 返回Agent状态信息\n{\n    \"total\": 22,        // 总数\n    \"RUNNING\": 10,      // 唯一表示正常的状态，异常Agent数 = result[\"total\"] - result[\"RUNNING\"]\n    \"UNKNOWN\": 2,\n    \"TERMINATED\": 2,\n    \"NOT_INSTALLED\": 4,\n    \"UNREGISTER\": 4\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/host_v2.py",
    "groupTitle": "Host_v2"
  },
  {
    "type": "POST",
    "url": "/v2/host/node_statistic/",
    "title": "统计给定拓扑节点的agent状态统计",
    "name": "node_statistic",
    "group": "Host_v2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "List",
            "optional": true,
            "field": "nodes",
            "description": "<p>拓扑节点, 例如：[{&quot;bk_biz_id&quot;: 1, &quot;bk_inst_id&quot;: 10, &quot;bk_obj_id&quot;: &quot;module&quot;}, ...]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回：",
          "content": "[\n    {\n        \"bk_biz_id\": 1,\n        \"bk_inst_id\": 10,\n        \"bk_obj_id\": \"module\",\n        \"agent_status_count\": {\n            \"total\": 22,        // 总数\n            \"RUNNING\": 10,      // 唯一表示正常的状态，异常Agent数 = result[\"total\"] - result[\"RUNNING\"]\n            \"TERMINATED\": 2,\n            \"NOT_INSTALLED\": 4,\n        }\n    },\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/host_v2.py",
    "groupTitle": "Host_v2"
  },
  {
    "type": "POST",
    "url": "/v2/host/agent_status/",
    "title": "统计给定拓扑节点的agent状态统计",
    "name": "nodes_agent_status",
    "group": "Host_v2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "List",
            "optional": true,
            "field": "nodes",
            "description": "<p>拓扑节点, 例如：[{&quot;bk_biz_id&quot;: 1, &quot;bk_inst_id&quot;: 10, &quot;bk_obj_id&quot;: &quot;module&quot;}, ...]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回：",
          "content": "[\n    {\n        \"bk_biz_id\": 1,\n        \"bk_inst_id\": 10,\n        \"bk_obj_id\": \"module\",\n        \"agent_status_count\": {\n            \"total\": 22,        // 总数\n            \"RUNNING\": 10,      // 唯一表示正常的状态，异常Agent数 = result[\"total\"] - result[\"RUNNING\"]\n            \"TERMINATED\": 2,\n            \"NOT_INSTALLED\": 4,\n        }\n    },\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/host_v2.py",
    "groupTitle": "Host_v2"
  },
  {
    "type": "POST",
    "url": "/host/search/",
    "title": "查询主机列表",
    "name": "list_host",
    "group": "Host",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": true,
            "field": "bk_biz_id",
            "description": "<p>业务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": true,
            "field": "bk_host_id",
            "description": "<p>主机ID</p>"
          },
          {
            "group": "Parameter",
            "type": "List",
            "optional": true,
            "field": "condition",
            "description": "<p>搜索条件，支持os_type, ip, status <br> version, bk_cloud_id, node_from 和 模糊搜索query</p>"
          },
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": true,
            "field": "exclude_hosts",
            "description": "<p>跨页全选排除主机</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "extra_data",
            "description": "<p>额外信息, 如 ['identity_info', 'job_result', 'topology']</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "pagesize",
            "description": "<p>分页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "only_ip",
            "description": "<p>只返回IP</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "running_count",
            "description": "<p>返回正在运行机器数量</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"total\": 188,\n    \"list\": [\n        {\n            \"bk_cloud_id\": 1,\n            \"bk_cloud_name\": \"云区域名称\",\n            \"bk_biz_id\": 2,\n            \"bk_biz_name\": \"业务名称\",\n            \"bk_host_id\": 1,\n            \"os_type\": \"linux\",\n            \"inner_ip\": \"127.0.0.1\",\n            \"outer_ip\": \"127.0.0.2\",\n            \"login_ip\": \"127.0.0.3\",\n            \"data_ip\": \"127.0.0.4\",\n            \"status\": \"RUNNING\",\n            \"version\": \"1.1.0\",\n            \"ap_id\": -1,\n            \"identity_info\": {},\n            \"job_result\": {\n                \"job_id\": 1,\n                \"status\": \"FAILED\",\n                \"current_step\": \"下载安装包\",\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/host.py",
    "groupTitle": "Host"
  },
  {
    "type": "POST",
    "url": "/host/remove_host/",
    "title": "移除主机",
    "description": "<p>成功删除的host_id会在返回结果的success字段中。<br> 如果需要删除的host_id不存在在数据库中，则会出现在fail字段中。<br> 非跨页全选仅需传bk_host_id，跨页全选则不需要传bk_host_id。<br> 此外：<br> 如果is_proxy为true，则只针对Proxy做删除；<br> 如果is_proxy为false，则只针对AGENT和PAGENT做删除。<br> bk_host_id，exclude_hosts 必填一个。<br> 若填写了 exclude_hosts ，则代表跨页全选模式。<br> 注意, 云区域ID、业务ID等筛选条件，仅在跨页全选模式下有效。<br></p>",
    "name": "remove_host",
    "group": "Host",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": true,
            "field": "bk_host_id",
            "description": "<p>主机ID列表</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_proxy",
            "description": "<p>是否针对Proxy的删除</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bk_biz_id",
            "description": "<p>业务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "List",
            "optional": true,
            "field": "conditions",
            "description": "<p>搜索条件，支持os_type, ip, status <br> version, bk_cloud_id, node_from 和 模糊搜索query</p>"
          },
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": true,
            "field": "exclude_hosts",
            "description": "<p>跨页全选排除主机</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"success\": [\n        6121\n    ],\n    \"fail\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/host.py",
    "groupTitle": "Host"
  },
  {
    "type": "GET",
    "url": "/host/biz_proxies/",
    "title": "查询业务下云区域的proxy集合",
    "name": "retrieve_biz_proxies",
    "group": "Host",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "bk_biz_id",
            "description": "<p>业务ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "[{\n    \"bk_cloud_id\": 1,\n    \"bk_host_id\": 1,\n    \"inner_ip\": \"127.0.0.1\",\n    \"outer_ip\": \"\",\n    \"login_ip\": null,\n    \"data_ip\": null,\n    \"bk_biz_id\": 1\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/host.py",
    "groupTitle": "Host"
  },
  {
    "type": "GET",
    "url": "/host/proxies/",
    "title": "查询云区域的proxy列表",
    "name": "retrieve_cloud_proxies",
    "group": "Host",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "bk_cloud_id",
            "description": "<p>云区域ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "[{\n    \"bk_cloud_id\": 1,\n    \"bk_host_id\": 1,\n    \"inner_ip\": \"127.0.0.1\",\n    \"outer_ip\": \"127.0.0.2\",\n    \"login_ip\": \"127.0.0.3\",\n    \"data_ip\": \"127.0.0.4\",\n    \"status\": \"RUNNING\",\n    \"version\": \"1.1.0\",\n\n    \"account\": \"root\",\n    \"auth_type\": \"PASSWORD\",\n    \"port\": 22,\n\n    \"ap_id\": 1,\n    \"ap_name\": \"接入点名称\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/host.py",
    "groupTitle": "Host"
  },
  {
    "type": "POST",
    "url": "/host/update_single/",
    "title": "更新主机信息",
    "name": "update_host",
    "group": "Host",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "bk_host_id",
            "description": "<p>主机ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "bk_cloud_id",
            "description": "<p>云区域ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "inner_ip",
            "description": "<p>内网IP</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "outer_ip",
            "description": "<p>外网IP</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "login_ip",
            "description": "<p>登录IP</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "data_ip",
            "description": "<p>数据IP</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "account",
            "description": "<p>账户名</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "ap_id",
            "description": "<p>接入点ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "port",
            "description": "<p>端口</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "auth_type",
            "description": "<p>认证类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/host.py",
    "groupTitle": "Host"
  },
  {
    "type": "POST",
    "url": "/job/{{pk}}/collect_log/",
    "title": "查询日志",
    "name": "collect_job_log",
    "group": "Job",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "job_id",
            "description": "<p>任务ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"celery_id\": \"c0072075-730b-461b-8c3e-1f00095b7348\"\n},",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/job.py",
    "groupTitle": "Job"
  },
  {
    "type": "GET",
    "url": "/job/{{pk}}/get_job_commands/",
    "title": "获取安装命令",
    "name": "get_job_commands",
    "group": "Job",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "job_id",
            "description": "<p>任务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bk_host_id",
            "description": "<p>主机ID，-1时返回每个云区域的安装命令</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    bk_cloud_id: {\n        'win_commands': '',\n        'pre_commands': '',\n        'run_commands': ''\n    }\n},",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/job.py",
    "groupTitle": "Job"
  },
  {
    "type": "GET",
    "url": "/job/{{pk}}/log/",
    "title": "查询日志",
    "name": "get_job_log",
    "group": "Job",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "job_id",
            "description": "<p>任务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "instance_id",
            "description": "<p>实例ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "重装、升级等请求参数",
          "content": "{\n    \"bk_host_id\": 1\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "[\n    {\n        \"step\": \"检查网络连通性\",\n        \"status\": \"success\",\n        \"log\": \"checking network……\\nok\"\n    },\n    {\n        \"step\": \"检查用户\",\n        \"status\": \"success\",\n        \"log\": \"checking user……\\nusername is root\\nok\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/job.py",
    "groupTitle": "Job"
  },
  {
    "type": "POST",
    "url": "/job/install/",
    "title": "安装类任务",
    "description": "<p>新安装Agent、新安装Proxy、重装、替换等操作</p>",
    "name": "install_job",
    "group": "Job",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "job_type",
            "description": "<p>任务类型</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "hosts",
            "description": "<p>主机信息</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "host.bk_cloud_id",
            "description": "<p>云区域ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "host.ap_id",
            "description": "<p>接入点ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "hosts.bk_host_id",
            "description": "<p>主机ID, 创建时可选, 更改时必选</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"Windows\"",
              "\"Linux\"",
              "\"AIX\""
            ],
            "optional": false,
            "field": "hosts.os_type",
            "description": "<p>操作系统类型</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hosts.bk_biz_id",
            "description": "<p>业务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hosts.inner_ip",
            "description": "<p>内网IP</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "hosts.outer_ip",
            "description": "<p>外网IP</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "hosts.login_ip",
            "description": "<p>登录IP</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "hosts.data_ip",
            "description": "<p>数据IP</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hosts.account",
            "description": "<p>账户名</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hosts.port",
            "description": "<p>端口</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hosts.auth_type",
            "description": "<p>认证类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "hosts.password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "hosts.key",
            "description": "<p>密钥</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "hosts.retention",
            "description": "<p>密码保留天数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "replace_host_id",
            "description": "<p>要替换的ProxyID，替换proxy时使用</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "安装请求参数",
          "content": "{\n    \"job_type\": \"INSTALL_AGENT\",\n    \"hosts\": [\n        {\n            \"bk_cloud_id\": 1,\n            \"ap_id\": 1,\n            \"bk_biz_id\": 2,\n            \"os_type\": \"Linux\",\n            \"inner_ip\": \"127.0.0.1\",\n            \"outer_ip\": \"127.0.0.2\",\n            \"login_ip\": \"127.0.0.3\",\n            \"data_ip\": \"127.0.0.4\",\n            \"account\": \"root\",\n            \"port\": 22,\n            \"auth_type\": \"PASSWORD\",\n            \"password\": \"password\",\n            \"key\": \"key\"\n        }\n    ],\n    \"retention\": 1,\n    \"replace_host_id\": 1\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"job_id\": 35,\n    \"ip_filter\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/job.py",
    "groupTitle": "Job"
  },
  {
    "type": "POST",
    "url": "/job/job_list/",
    "title": "查询任务列表",
    "name": "list_job",
    "group": "Job",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "List",
            "optional": false,
            "field": "job_id",
            "description": "<p>任务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "List",
            "optional": true,
            "field": "job_type",
            "description": "<p>任务类型</p>"
          },
          {
            "group": "Parameter",
            "type": "List",
            "optional": true,
            "field": "status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Parameter",
            "type": "List",
            "optional": true,
            "field": "created_by",
            "description": "<p>执行者</p>"
          },
          {
            "group": "Parameter",
            "type": "List",
            "optional": true,
            "field": "bk_biz_id",
            "description": "<p>业务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "pagesize",
            "description": "<p>分页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": true,
            "field": "sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "[\"total_count\"",
              "\"failed_count\"",
              "\"success_count\"]"
            ],
            "optional": true,
            "field": "sort.head",
            "description": "<p>排序字段</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "[\"ASC\"",
              "\"DEC\"]"
            ],
            "optional": true,
            "field": "sort.sort_type",
            "description": "<p>排序类型</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求例子:",
          "content": "{\n    \"page\": 1,\n    \"pagesize\": 20,\n    \"job_type\": [\"INSTALL_AGENT\"]\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"total\": 100,\n    \"list\": [\n        {\n            \"id\": 1,\n            \"job_type\": \"INSTALL_PROXY\",\n            \"job_type_display\": \"安装Proxy\",\n            \"creator\": \"admin\",\n            \"start_time\": \"2019-10-08 11:10:10\",\n            \"cost_time\": 120,\n            \"status\": \"RUNNING\",\n            \"bk_biz_scope_display\": [\"蓝鲸\", \"layman\"]\n            \"statistics\": {\n                \"success_count\": 200,\n                \"failed_count\": 100,\n                \"running_count\": 100,\n                \"total_count\": 100\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/job.py",
    "groupTitle": "Job"
  },
  {
    "type": "POST",
    "url": "/job/operate/",
    "title": "操作类任务",
    "description": "<p>用于只有bk_host_id参数的主机下线、重启等操作。<br> bk_host_id和exclude_hosts必填一个。<br> 若填写了 exclude_hosts ，则代表跨页全选模式。<br> 注意, 云区域ID、业务ID等筛选条件，仅在跨页全选模式下有效。<br></p>",
    "name": "operate_job",
    "group": "Job",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "job_type",
            "description": "<p>任务类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bk_biz_id",
            "description": "<p>业务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "List",
            "optional": true,
            "field": "conditions",
            "description": "<p>搜索条件，支持os_type, ip, status <br> version, bk_cloud_id, node_from 和 模糊搜索query</p>"
          },
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": true,
            "field": "exclude_hosts",
            "description": "<p>跨页全选排除主机</p>"
          },
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": true,
            "field": "bk_host_id",
            "description": "<p>主机ID 主机ID和跨页全选排除主机必选一个</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "安装请求参数",
          "content": "{\n    \"job_type\": \"RESTART_PROXY\",\n    \"bk_host_id\": [7731, 7732]\n}",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/job.py",
    "groupTitle": "Job"
  },
  {
    "type": "POST",
    "url": "/job/{{pk}}/details/",
    "title": "查询任务详情",
    "name": "retrieve_job",
    "group": "Job",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "List",
            "optional": true,
            "field": "conditions",
            "description": "<p>条件</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "pagesize",
            "description": "<p>分页大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"total\": 100,\n    \"list\": [\n        {\n            \"bk_host_id\": 1,\n            \"inner_ip\": \"127.0.0.1\",\n            \"bk_cloud_id\": 1,\n            \"bk_cloud_name\": \"云区域名称\",\n            \"bk_biz_id\": 2,\n            \"bk_biz_name\": \"业务名称\",\n            \"status\": \"RUNNING\",\n            \"status_display\": \"正在执行\"\n        }\n    ],\n    \"statistics\": {\n        \"success_count\": 200,\n        \"failed_count\": 100,\n        \"running_count\": 100,\n        \"total_count\": 100\n    },\n    \"status\": \"RUNNING\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/job.py",
    "groupTitle": "Job"
  },
  {
    "type": "POST",
    "url": "/job/{{pk}}/retry/",
    "title": "重试任务",
    "name": "retry_job",
    "group": "Job",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "instance_id_list",
            "description": "<p>主机ID列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "重装、升级等请求参数",
          "content": "{\n    \"instance_id_list\": [1, 2, 3]\n}",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/job.py",
    "groupTitle": "Job"
  },
  {
    "type": "POST",
    "url": "/job/{{pk}}/retry_node/",
    "title": "原子粒度重试任务",
    "name": "retry_node",
    "group": "Job",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "instance_id",
            "description": "<p>实例id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "重试时请求参数",
          "content": "{\n    \"instance_id\": host|instance|host|127.0.0.1-0-0\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"result\": true,\n    \"data\": {\n        \"retry_node_id\": \"6f48169ed1193574961757a57d03a778\",\n        \"retry_node_name\": \"安装\"\n    },\n    \"code\": 0,\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/job.py",
    "groupTitle": "Job"
  },
  {
    "type": "POST",
    "url": "/job/{{pk}}/revoke/",
    "title": "终止任务",
    "name": "revoke_job",
    "group": "Job",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "instance_id_list",
            "description": "<p>主机ID列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例",
          "content": "{\n    \"instance_id_list\": [1, 2, 3]\n}",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/job.py",
    "groupTitle": "Job"
  },
  {
    "type": "GET",
    "url": "/meta/filter_condition/",
    "title": "获取过滤条件",
    "name": "get_filter_condition",
    "group": "Meta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>支持: host, job, plugin</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "[\n    {\n        \"name\": \"操作系统\",\n        \"id\": \"os_type\",\n        \"children\": [\n            {\n                \"name\": \"Linux\",\n                \"id\": \"Linux\"\n            },\n            {\n                \"name\": \"Windows\",\n                \"id\": \"Windows\"\n            }\n        ]\n    },\n    {\n        \"name\": \"Agent状态\",\n        \"id\": \"version\",\n        \"children\": [\n            {\n                \"name\": \"正常\",\n                \"id\": \"RUNNING\"\n            },\n            {\n                \"name\": \"未知\",\n                \"id\": \"UNKNOWN\"\n            }\n        ]\n    }\n]",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/meta.py",
    "groupTitle": "Meta"
  },
  {
    "type": "POST",
    "url": "/meta/job_settings/",
    "title": "任务配置接口",
    "name": "job_settings",
    "group": "Meta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "install_p_agent_timeout",
            "description": "<p>安装P-Agent超时时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "install_agent_timeout",
            "description": "<p>安装Agent超时时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "install_proxy_timeout",
            "description": "<p>安装Proxy超时时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "install_download_limit_speed",
            "description": "<p>安装下载限速</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "parallel_install_number",
            "description": "<p>并行安装数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "node_man_log_level",
            "description": "<p>节点管理日志级别</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/meta.py",
    "groupTitle": "Meta"
  },
  {
    "type": "GET",
    "url": "/meta/global_settings/",
    "title": "查询全局配置",
    "name": "retrieve_global_settings",
    "group": "Meta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"isp\"",
              "\"job_settings\""
            ],
            "optional": false,
            "field": "key",
            "description": "<p>键值</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "[\n    {\n        \"isp\": \"tencent\",\n        \"isp_name\": \"腾讯云\",\n        \"isp_icon\": \"xxxx\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/meta.py",
    "groupTitle": "Meta"
  },
  {
    "type": "POST",
    "url": "/permission/fetch/",
    "title": "根据条件返回用户权限",
    "name": "fetch_permission",
    "group": "Permission",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "apply_info",
            "description": "<p>申请权限信息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"cloud_edit\"",
              "\"cloud_delete\"",
              "\"cloud_view\"",
              "\"cloud_create\"",
              "\"ap_create\"",
              "\"ap_delete\"",
              "\"ap_edit\""
            ],
            "optional": false,
            "field": "apply_info.action",
            "description": "<p>操作类型</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "apply_info.instance_id",
            "description": "<p>实例ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apply_info.instance_name",
            "description": "<p>实例名</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "[{\n    \"system\": \"节点管理\",\n    \"action\": \"编辑云区域\",\n    \"instance_id\": 11,\n    \"instance_name\": cloud_one,\n    \"apply_url\": \"https://xxx.com/.../\"\n}]",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/permission.py",
    "groupTitle": "Permission"
  },
  {
    "type": "GET",
    "url": "/permission/ap/",
    "title": "返回用户接入点权限",
    "name": "list_ap_permission",
    "group": "Permission",
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"edit_action\": [ap_ids],\n    \"delete_action\": [ap_ids],\n    \"create_action\": True or False\n}",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/permission.py",
    "groupTitle": "Permission"
  },
  {
    "type": "GET",
    "url": "/permission/cloud/",
    "title": "返回用户云区域的权限",
    "name": "list_cloud_permission",
    "group": "Permission",
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"edit_action\": [bk_cloud_ids],\n    \"delete_action\": [bk_cloud_ids],\n    \"create_action\": True or False,\n}",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/permission.py",
    "groupTitle": "Permission"
  },
  {
    "type": "GET",
    "url": "/permission/package/",
    "title": "返回用户插件包权限",
    "name": "list_package_permission",
    "group": "Permission",
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"import_action\": True or False,\n    \"operate_action\": [package_ids],\n}",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/permission.py",
    "groupTitle": "Permission"
  },
  {
    "type": "GET",
    "url": "/permission/plugin/",
    "title": "返回用户插件实例权限",
    "name": "list_plugin_instance_permission",
    "group": "Permission",
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"view_action\": [biz_ids],\n    \"operate_action\": [biz_ids],\n}",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/permission.py",
    "groupTitle": "Permission"
  },
  {
    "type": "GET",
    "url": "/permission/startegy/",
    "title": "返回用户部署策略权限",
    "name": "list_startegy_permission",
    "group": "Permission",
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"create_action\": [biz_ids],\n    \"view_action\": [biz_ids],\n    \"operate_action\":[startegy_ids],\n    \"range_select_action\": [startegy_ids],\n    \"delete_action\": [startegy_ids],\n}",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/permission.py",
    "groupTitle": "Permission"
  },
  {
    "type": "POST",
    "url": "/tjj/fetch_pwd/",
    "title": "查询支持铁将军的主机",
    "name": "fetch_pwd",
    "group": "Tjj",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "hosts",
            "description": "<p>主机IP</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n    \"hosts\": [\n        \"x.x.x.x\",\n        \"x.x.x.x\"\n    ]\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"result\": True,\n    \"code\": 0,\n    \"data\": {\n        \"success_ips\": [\"x.x.x.x\", \"x.x.x.x\"],\n        \"failed_ips\": {\n            \"x.x.x.x\": {\n                \"Code\": 6,\n                \"Message\": \"x.x.x.x不存在\",\n                \"Password\": \"\"\n            }\n        }\n    },\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/tjj.py",
    "groupTitle": "Tjj"
  },
  {
    "type": "POST",
    "url": "/plugin/create_export_task/",
    "title": "触发插件打包导出",
    "name": "create_export_plugin_task",
    "group": "backend_plugin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query_params",
            "description": "<p>插件信息，version, project, os[可选], cpu_arch[可选]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>插件类别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "creator",
            "description": "<p>创建者</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bk_app_code",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n    \"category\": \"gse_plugin\",\n    \"query_params\": {\n        \"project\": \"test_plugin\",\n        \"version\": \"1.0.0\"\n    },\n    \"creator\": \"test_person\",\n    \"bk_app_code\": \"bk_test_app\"\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"job_id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/plugin/views.py",
    "groupTitle": "backend_plugin"
  },
  {
    "type": "POST",
    "url": "/plugin/create_config_template/",
    "title": "创建配置模板",
    "name": "create_plugin_config_template",
    "group": "backend_plugin",
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/plugin/views.py",
    "groupTitle": "backend_plugin"
  },
  {
    "type": "POST",
    "url": "/plugin/create_register_task/",
    "title": "创建注册任务",
    "name": "create_register_task",
    "group": "backend_plugin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_name",
            "description": "<p>文件名</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_release",
            "description": "<p>是否已发布</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_template_load",
            "description": "<p>是否需要读取配置文件，缺省默认为<code>false</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_template_overwrite",
            "description": "<p>是否可以覆盖已经存在的配置文件，缺省默认为<code>false</code></p>"
          },
          {
            "group": "Parameter",
            "type": "List",
            "optional": true,
            "field": "select_pkg_abs_paths",
            "description": "<p>指定注册包相对路径列表，缺省默认全部导入</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n    \"file_name\": \"bkunifylogbeat-7.1.28.tgz\",\n    \"is_release\": True,\n    \"select_pkg_abs_paths\": [\"bkunifylogbeat_linux_x86_64/bkunifylogbeat\"]\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"job_id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/plugin/views.py",
    "groupTitle": "backend_plugin"
  },
  {
    "type": "POST",
    "url": "/plugin/delete/",
    "title": "删除插件",
    "name": "delete_plugin",
    "group": "backend_plugin",
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/plugin/views.py",
    "groupTitle": "backend_plugin"
  },
  {
    "type": "GET",
    "url": "/export/download/",
    "title": "下载导出的内容,此处不做实际的文件读取，将由nginx负责处理",
    "name": "download_content",
    "group": "backend_plugin",
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/plugin/views.py",
    "groupTitle": "backend_plugin"
  },
  {
    "type": "GET",
    "url": "/plugin/",
    "title": "插件列表",
    "name": "list_plugin",
    "group": "backend_plugin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>插件别名&amp;名称模糊搜索</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "simple_all",
            "description": "<p>返回全部数据（概要信息，<code>id</code>, <code>description</code>, <code>name</code>），默认<code>False</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "page",
            "description": "<p>当前页数，默认<code>1</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "pagesize",
            "description": "<p>分页大小，默认<code>10</code></p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": true,
            "field": "sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "[\"name\"",
              "\"category\"",
              "\"creator\"",
              "\"scenario\"",
              "\"description\"]"
            ],
            "optional": true,
            "field": "sort.head",
            "description": "<p>排序字段</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "[\"ASC\"",
              "\"DEC\"]"
            ],
            "optional": true,
            "field": "sort.sort_type",
            "description": "<p>排序类型</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"total\": 2,\n    \"list\": [\n        {\n            \"id\": 1,\n            \"description\": \"系统基础信息采集\",\n            \"name\": \"basereport\",\n            \"category\": \"官方插件\",\n            \"source_app_code\": \"bk_nodeman\",\n            \"scenario\": \"CMDB上的实时数据，蓝鲸监控里的主机监控，包含CPU，内存，磁盘等\",\n            \"deploy_type\": \"整包部署\"\n        },\n        {\n            \"id\": 2,\n            \"description\": \"监控采集器\",\n            \"name\": \"bkmonitorbeat\",\n            \"category\": \"第三方插件\",\n            \"source_app_code\": \"bk_monitor\",\n            \"scenario\": \"蓝鲸监控采集器，支持多种协议及多任务的采集，提供多种运行模式和热加载机制\",\n            \"deploy_type\": \"Agent自动部署\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/plugin/views.py",
    "groupTitle": "backend_plugin"
  },
  {
    "type": "POST",
    "url": "/plugin/package_status_operation/",
    "title": "插件包状态类操作",
    "name": "package_status_operation",
    "group": "backend_plugin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "operation",
            "description": "<p>状态操作 <code>release</code>-<code>上线</code>，<code>offline</code>-<code>下线</code> <code>ready</code>-<code>启用</code>，<code>stop</code>-<code>停用</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": true,
            "field": "id",
            "description": "<p>插件包id列表，<code>id</code>和（<code>name</code>, <code>version</code>）至少有一个</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>插件包名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "cpu_arch",
            "description": "<p>CPU类型，<code>x86</code> <code>x86_64</code> <code>powerpc</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "os",
            "description": "<p>系统类型，<code>linux</code> <code>windows</code> <code>aix</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "md5_list",
            "description": "<p>md5列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回操作成功的插件包id列表:",
          "content": "[1, 2, 4]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/plugin/views.py",
    "groupTitle": "backend_plugin"
  },
  {
    "type": "GET",
    "url": "/plugin/{{pk}}/history/",
    "title": "插件包历史",
    "name": "plugin_history",
    "group": "backend_plugin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "os",
            "description": "<p>系统类型，<code>windows</code> <code>linux</code> <code>aix</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "cpu_arch",
            "description": "<p>cpu位数，<code>x86</code> <code>x86_64</code> <code>powerpc</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": true,
            "field": "pkg_ids",
            "description": "<p>插件包id列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "[\n    {\n        \"id\": 1,\n        \"pkg_name\": \"basereport-1.0.tgz\",\n        \"project\": \"basereport\",\n        \"version\": \"1.0\",\n        \"pkg_size\": 4391830,\n        \"md5\": \"35bf230be9f3c1b878ef7665be34e14e\",\n        \"config_templates\": [\n            {\"name\": \"bkunifylogbeat.conf\", \"version\": \"1.0\", \"is_main\": false},\n            {\"name\": \"bkunifylogbeat1.conf\", \"version\": \"1.1\", \"is_main\": false},\n            {\"name\": \"bkunifylogbeat-main.config\", \"version\": \"0.1\", \"is_main\": true}\n        ],\n        \"pkg_mtime\": \"2019-11-25 21:58:30\",\n        \"creator\": \"test_person\",\n        \"is_ready\": True,\n        \"is_release_version\": True\n    },\n    {\n        \"id\": 2,\n        \"pkg_name\": \"basereport-1.1.tgz\",\n        \"module\": \"gse_plugin\"\n        \"project\": \"basereport\",\n        \"version\": \"1.1\",\n        \"os\": \"linux\",\n        \"cpu_arch\": \"x86\"\n        \"md5\": \"35bf230be9f3c1b878ef7665be34e14e\",\n        \"pkg_size\": 4391830,\n        \"config_templates\": [\n            {\"id\": 1, \"name\": \"child1.conf\", \"version\": \"1.0\", \"is_main\": false},\n            {\"id\": 2, \"name\": \"child2.conf\", \"version\": \"2.0\", \"is_main\": false},\n            {\"id\": 3, \"name\": \"bkunifylogbeat-main.config\", \"version\": \"0.2\", \"is_main\": true}\n        ],\n        \"pkg_mtime\": \"2019-11-25 22:01:30\",\n        \"creator\": \"test_person\",\n        \"is_ready\": True,\n        // 最新上传的包\n        \"is_newest\": True,\n        \"is_release_version\": True\n    },\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/plugin/views.py",
    "groupTitle": "backend_plugin"
  },
  {
    "type": "POST",
    "url": "/plugin/parse/",
    "title": "解析插件包",
    "name": "plugin_parse",
    "group": "backend_plugin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_name",
            "description": "<p>文件名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "is_update",
            "description": "<p>是否为更新校验，默认为<code>False</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n    \"file_name\": \"basereport-10.1.12.tgz\"\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "[\n    {\n        \"result\": True,\n        \"message\": \"新增插件\",\n        \"pkg_abs_path\": \"basereport_linux_x86_64/basereport\",\n        \"pkg_name\": \"basereport-10.1.12\",\n        \"project\": \"basereport\",\n        \"version\": \"10.1.12\",\n        \"category\": \"官方插件\",\n        \"config_templates\": [\n            {\"name\": \"child1.conf\", \"version\": \"1.0\", \"is_main\": false},\n            {\"name\": \"child2.conf\", \"version\": \"1.1\", \"is_main\": false},\n            {\"name\": \"basereport-main.config\", \"version\": \"0.1\", \"is_main\": true}\n        ],\n        \"os\": \"x86_64\",\n        \"cpu_arch\": \"linux\",\n        \"description\": \"高性能日志采集\"\n    },\n    {\n        \"result\": False,\n        \"message\": \"缺少project.yaml文件\",\n        \"pkg_abs_path\": \"external_bkmonitorbeat_windows_x32/bkmonitorbeat\",\n        \"pkg_name\": None,\n        \"project\": None,\n        \"version\": None,\n        \"category\": None,\n        \"config_templates\": [],\n        \"os\": \"x32\",\n        \"cpu_arch\": \"windows\",\n        \"description\": None\n    },\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/plugin/views.py",
    "groupTitle": "backend_plugin"
  },
  {
    "type": "POST",
    "url": "/plugin/plugin_status_operation/",
    "title": "插件状态类操作",
    "name": "plugin_status_operation",
    "group": "backend_plugin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "operation",
            "description": "<p>状态操作 <code>ready</code>-<code>启用</code>，<code>stop</code>-<code>停用</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": false,
            "field": "id",
            "description": "<p>插件id列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n    \"operation\": \"stop\",\n    \"id\": [1, 2]\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回操作成功的插件id列表:",
          "content": "[1, 2]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/plugin/views.py",
    "groupTitle": "backend_plugin"
  },
  {
    "type": "GET",
    "url": "/plugin/query_debug/",
    "title": "查询调试结果",
    "name": "query_debug",
    "group": "backend_plugin",
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/plugin/views.py",
    "groupTitle": "backend_plugin"
  },
  {
    "type": "GET",
    "url": "/plugin/query_export_task/",
    "title": "获取一个导出任务结果",
    "name": "query_export_plugin_task",
    "group": "backend_plugin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "job_id",
            "description": "<p>任务ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n    \"job_id\": 1\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"is_finish\": True,\n    \"is_failed\": False,\n    \"download_url\": \"http://127.0.0.1//backend/export/download/\",\n    \"error_message\": \"haha\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/plugin/views.py",
    "groupTitle": "backend_plugin"
  },
  {
    "type": "GET",
    "url": "/plugin/query_config_instance/",
    "title": "查询配置模板实例",
    "name": "query_plugin_config_instance",
    "group": "backend_plugin",
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/plugin/views.py",
    "groupTitle": "backend_plugin"
  },
  {
    "type": "GET",
    "url": "/plugin/query_config_template/",
    "title": "查询配置模板",
    "name": "query_plugin_config_template",
    "group": "backend_plugin",
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/plugin/views.py",
    "groupTitle": "backend_plugin"
  },
  {
    "type": "GET",
    "url": "/plugin/info/",
    "title": "查询插件信息",
    "name": "query_plugin_info",
    "group": "backend_plugin",
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/plugin/views.py",
    "groupTitle": "backend_plugin"
  },
  {
    "type": "GET",
    "url": "/plugin/query_register_task/",
    "title": "查询插件注册任务",
    "name": "query_register_task",
    "group": "backend_plugin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "job_id",
            "description": "<p>任务ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n    \"job_id\": 1\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"is_finish\": False,\n    \"status\": \"RUNNING\",\n    \"message\": \"~\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/plugin/views.py",
    "groupTitle": "backend_plugin"
  },
  {
    "type": "POST",
    "url": "/plugin/release/",
    "title": "发布（上线）插件包",
    "name": "release_package",
    "group": "backend_plugin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": true,
            "field": "id",
            "description": "<p>插件包id列表，<code>id</code>和（<code>name</code>, <code>version</code>）至少有一个</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>插件包名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "cpu_arch",
            "description": "<p>CPU类型，<code>x86</code> <code>x86_64</code> <code>powerpc</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "os",
            "description": "<p>系统类型，<code>linux</code> <code>windows</code> <code>aix</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "md5_list",
            "description": "<p>md5列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回上线的插件包id列表:",
          "content": "[1, 2, 4]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/plugin/views.py",
    "groupTitle": "backend_plugin"
  },
  {
    "type": "POST",
    "url": "/plugin/release_config_template/",
    "title": "发布配置模板",
    "name": "release_plugin_config_template",
    "group": "backend_plugin",
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/plugin/views.py",
    "groupTitle": "backend_plugin"
  },
  {
    "type": "POST",
    "url": "/plugin/render_config_template/",
    "title": "渲染配置模板",
    "name": "render_plugin_config_template",
    "group": "backend_plugin",
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/plugin/views.py",
    "groupTitle": "backend_plugin"
  },
  {
    "type": "GET",
    "url": "/plugin/{{pk}}/",
    "title": "插件详情",
    "name": "retrieve_plugin",
    "group": "backend_plugin",
    "parameter": {
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"id\": 1,\n    \"description\": \"系统基础信息采集\",\n    \"name\": \"basereport\",\n    \"category\": \"官方插件\",\n    \"source_app_code\": \"bk_nodeman\",\n    \"scenario\": \"CMDB上的实时数据，蓝鲸监控里的主机监控，包含CPU，内存，磁盘等\",\n    \"deploy_type\": \"整包部署\",\n    \"plugin_packages\": [\n        {\n            \"id\": 1,\n            \"pkg_name\": \"basereport-10.1.12.tgz\",\n            \"module\": \"gse_plugin\",\n            \"project\": \"basereport\",\n            \"version\": \"10.1.12\",\n            \"config_templates\": [\n                {\"id\": 1, \"name\": \"basereport.conf\", \"version\": \"10.1\", \"is_main\": true}\n            ],\n            \"os\": \"linux\",\n            \"cpu_arch\": \"x86_64\",\n            \"support_os_cpu\": \"linux_x86_64\",\n            \"pkg_mtime\": \"2019-11-25 21:58:30\",\n            \"creator\": \"test_person\",\n            \"is_ready\": True\n        },\n        {\n            \"id\": 2,\n            \"pkg_name\": \"bkmonitorbeat-1.7.1.tgz\",\n            \"module\": \"gse_plugin\",\n            \"project\": \"bkmonitorbeat\",\n            \"version\": \"1.7.1\",\n            \"config_templates\": [\n                {\"id\": 1, \"name\": \"child1.conf\", \"version\": \"1.0\", \"is_main\": false},\n                {\"id\": 2, \"name\": \"child2.conf\", \"version\": \"1.1\", \"is_main\": false},\n                {\"id\": 3, \"name\": \"bkmonitorbeat.conf\", \"version\": \"0.1\", \"is_main\": true}\n            ],\n            \"os\": \"windows\",\n            \"cpu_arch\": \"x86\",\n            \"support_os_cpu\": \"windows_x86\",\n            \"pkg_mtime\": \"2019-11-25 21:58:30\",\n            \"creator\": \"test_person\",\n            \"is_ready\": True\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/plugin/views.py",
    "groupTitle": "backend_plugin"
  },
  {
    "type": "POST",
    "url": "/plugin/start_debug/",
    "title": "开始调试",
    "name": "start_debug",
    "group": "backend_plugin",
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/plugin/views.py",
    "groupTitle": "backend_plugin"
  },
  {
    "type": "POST",
    "url": "/plugin/stop_debug/",
    "title": "停止调试",
    "name": "stop_debug",
    "group": "backend_plugin",
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/plugin/views.py",
    "groupTitle": "backend_plugin"
  },
  {
    "type": "POST",
    "url": "/package/upload/",
    "title": "上传文件接口",
    "name": "upload_file",
    "group": "backend_plugin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "module",
            "description": "<p>模块名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "md5",
            "description": "<p>前端计算的MD5</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_name",
            "description": "<p>文件名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_local_path",
            "description": "<p>Nginx上传路径</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_local_md5",
            "description": "<p>Nginx上传MD5</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n    \"module\": \"gse_plugin\",\n    \"md5\": \"354659a3d1d40d380db314ed53355fe5\",\n    \"file_name\": \"bkunifylogbeat-7.1.20.tgz\",\n    \"file_local_path\": \"/tmp/0/9/\"\n    \"file_local_md5\": \"354659a3d1d40d380db314ed53355fe5\",\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"result\": True,\n    \"message\": \"\",\n    \"code\": \"00\",\n    \"data\": {\n        \"id\": 21,  # 包上传记录ID\n        \"name\": \"test-0.01.tgz\",  # 包名\n        \"pkg_size\": \"23412434\",  # 单位byte\n    },\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/plugin/views.py",
    "groupTitle": "backend_plugin"
  },
  {
    "type": "GET",
    "url": "/choice/category/",
    "title": "查询类别列表",
    "name": "list_category",
    "group": "choice",
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": " [\n    {\n        \"id\": \"official\",\n        \"name\": \"官方插件\"\n    },\n    {\n        \"id\": \"external\",\n        \"name\": \"第三方插件\"\n    },\n    {\n        \"id\": \"scripts\",\n        \"name\": \"脚本插件\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/choice.py",
    "groupTitle": "choice"
  },
  {
    "type": "GET",
    "url": "/choice/job_type/",
    "title": "查询任务类型列表",
    "name": "list_job_type",
    "group": "choice",
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": " [\n    {\n        \"id\": \"INSTALL_PROXY\",\n        \"name\": \"安装 ProxyPROXY\"\n    },\n    {\n        \"id\": \"INSTALL_AGENT\",\n        \"name\": \"安装 AgentAGENT\"\n    },\n    {\n        \"id\": \"RESTART_PROXY\",\n        \"name\": \"重启 ProxyPROXY\"\n    },\n    ... ...\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/choice.py",
    "groupTitle": "choice"
  },
  {
    "type": "GET",
    "url": "/choice/op/",
    "title": "查询操作列表",
    "name": "list_op",
    "group": "choice",
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "[\n    {\n        \"id\": \"START\",\n        \"name\": \"启动\"\n    },\n    {\n        \"id\": \"STOP\",\n        \"name\": \"停止\"\n    },\n    ... ...\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/choice.py",
    "groupTitle": "choice"
  },
  {
    "type": "GET",
    "url": "/choice/os_type/",
    "title": "查询系统列表",
    "name": "list_os_type",
    "group": "choice",
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "[\n    {\n        \"id\": \"LINUX\",\n        \"name\": \"LINUX\"\n    },\n    {\n        \"id\": \"WINDOWS\",\n        \"name\": \"WINDOWS\"\n    },\n    {\n        \"id\": \"AIX\",\n        \"name\": \"AIX\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/choice.py",
    "groupTitle": "choice"
  },
  {
    "type": "GET",
    "url": "/cmdb/fetch_topo/",
    "title": "获得拓扑信息",
    "name": "fetch_topo",
    "group": "cmdb",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "bk_biz_id",
            "description": "<p>主机ID，可选不传业务返回所有业务topo</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"name\": \"蓝鲸\",\n    \"id\": 2,\n    \"biz_inst_id\": \"2-2\",\n    \"type\": \"biz\",\n    \"children\": [\n        {\n            \"name\": \"空闲机池\",\n            \"id\": 20,\n            \"biz_inst_id\": \"2-20\",\n            \"type\": \"set\",\n            \"children\": [\n                {\"id\": 3, \"name\": \"空闲机\", \"type\": \"module\", \"children\": []},\n                {\"id\": 4, \"name\": \"故障机\", \"type\": \"module\", \"children\": []},\n            ],\n        },\n        {\n            \"name\": \"Tun\",\n            \"id\": 10216,\n            \"biz_inst_id\": \"2-10216\",\n            \"type\": \"yun\",\n            \"children\": [\n                {\n                    \"name\": \"1\",\n                    \"id\": 128,\n                    \"biz_inst_id\": \"2-128\",\n                    \"type\": \"set\",\n                    \"children\": [{\"name\": \"job\", \"id\": 260, \"type\": \"module\", \"children\": []}],\n                }\n            ],\n        },\n    ],\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/cmdb.py",
    "groupTitle": "cmdb"
  },
  {
    "type": "GET",
    "url": "/cmdb/biz/",
    "title": "查询用户所有业务",
    "name": "retrieve_biz",
    "group": "cmdb",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"agent_view\"",
              "\"agent_operate\"",
              "\"proxy_operate\"",
              "\"plugin_view\"",
              "\"plugin_operate\"",
              "\"task_history_view\""
            ],
            "optional": false,
            "field": "action",
            "description": "<p>操作类型</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "[{\n    \"bk_biz_id\": \"50\",\n    \"bk_biz_name\": \"蓝鲸XX\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/cmdb.py",
    "groupTitle": "cmdb"
  },
  {
    "type": "GET",
    "url": "/cmdb/search_ip/",
    "title": "查询IP",
    "name": "search_ip",
    "group": "cmdb",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "kw",
            "description": "<p>搜索IP关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": true,
            "field": "bk_biz_ids",
            "description": "<p>业务ID列表，可不传业务，搜索用户所拥有权限的全部业务</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "pagesize",
            "description": "<p>分页大小</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数:",
          "content": "[{\n    \"kw\": \"p\"\n}]",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"total\": 2,\n    \"nodes\": [\n    {\n        \"bk_biz_id\": 14,\n        \"bk_host_id\": 221442,\n        \"bk_cloud_id\": 0,\n        \"inner_ip\": \"1.1.1.1\",\n        \"os_type\": \"LINUX\",\n        \"bk_cloud_name\": \"直连区域\",\n        \"status\": \"UNREGISTER\"\n    },\n    {\n        \"bk_biz_id\": 14,\n        \"bk_host_id\": 221430,\n        \"bk_cloud_id\": 0,\n        \"inner_ip\": \"2.2.2.2\",\n        \"os_type\": \"LINUX\",\n        \"bk_cloud_name\": \"直连区域\",\n        \"status\": \"UNREGISTER\"\n    }\n    ],\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/cmdb.py",
    "groupTitle": "cmdb"
  },
  {
    "type": "GET",
    "url": "/cmdb/search_topo/",
    "title": "查询拓扑",
    "name": "search_topo",
    "group": "cmdb",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "kw",
            "description": "<p>搜索关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": true,
            "field": "bk_biz_ids",
            "description": "<p>业务ID列表，可不传业务，搜索用户所拥有权限的全部业务</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "pagesize",
            "description": "<p>分页大小</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数:",
          "content": "[{\n    \"kw\": \"p\"\n}]",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"total\": 3,\n    \"nodes\": [\n        {\"name\": \"pbiz\", \"id\": 12, \"type\": \"biz\", \"path\": \"pbiz\"},\n        {\"name\": \"p2\", \"id\": 123, \"type\": \"set\", \"path\": \"pbiz / p2\"},\n        {\"name\": \"p4\", \"id\": 1324, \"type\": \"set\", \"path\": \"pbiz / p4\"},\n    ],\n    \"use_cache\": True\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/cmdb.py",
    "groupTitle": "cmdb"
  },
  {
    "type": "GET",
    "url": "/debug/fetch_hosts_by_subscription/",
    "title": "查询订阅任务下的主机",
    "name": "fetch_hosts_by_subscription",
    "group": "debug",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "subscription_id",
            "description": "<p>订阅任务ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"total\": 2,\n    \"list\": [\n        {\n            \"bk_host_id\": 9640,\n            \"bk_biz_id\": 6,\n            \"bk_cloud_id\": 0,\n            \"inner_ip\": \"127.0.0.1\",\n            \"os_type\": \"LINUX\",\n            \"node_type\": \"AGENT\",\n            \"plugin_status\": [\n                {\n                    \"name\": \"gseagent\",\n                    \"status\": \"UNKNOWN\",\n                    \"version\": \"\"\n                },\n                {\n                    \"name\": \"basereport\",\n                    \"status\": \"UNKNOWN\",\n                    \"version\": \"\"\n                },\n                {\n                    \"name\": \"bkmetricbeat\",\n                    \"status\": \"UNREGISTER\",\n                    \"version\": \"\"\n                },\n                ... ...\n            ]\n        },\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/debug.py",
    "groupTitle": "debug"
  },
  {
    "type": "GET",
    "url": "/debug/fetch_subscription_details/",
    "title": "查询订阅任务详情",
    "name": "fetch_subscription_details",
    "group": "debug",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "subscription_id",
            "description": "<p>订阅任务ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "[\n    {\n        \"task_id\": 497,\n        \"task_scope\": {\n            \"nodes\": [\n                {\n                    \"bk_host_id\": 9640\n                }\n            ],\n            \"bk_biz_id\": null,\n            \"node_type\": \"INSTANCE\",\n            \"object_type\": \"HOST\",\n            \"need_register\": false\n        },\n        \"task_actions\": {\n            \"host|instance|host|9640\": {\n                \"agent\": \"REINSTALL_AGENT\"\n            }\n        },\n        \"is_auto_trigger\": false,\n        \"create_time\": \"2020-07-29 16:35:41+0800\",\n        \"details\": \"https://__domain__/o/bk_nodeman/api/debug/\n                    get_task_detail?subscription_id=362&task_id=497\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/debug.py",
    "groupTitle": "debug"
  },
  {
    "type": "GET",
    "url": "/debug/fetch_subscriptions_by_host/",
    "title": "查询主机涉及到的所有订阅任务",
    "name": "fetch_subscriptions_by_host",
    "group": "debug",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "bk_host_id",
            "description": "<p>主机ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "[\n    364,\n    365\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/debug.py",
    "groupTitle": "debug"
  },
  {
    "type": "GET",
    "url": "/debug/fetch_task_details/",
    "title": "查询任务执行详情",
    "name": "fetch_task_details",
    "group": "debug",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "subscription_id",
            "description": "<p>订阅任务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "task_id",
            "description": "<p>任务ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "[\n    {\n        \"subscription_id\": 16,\n        \"task_id\": 26,\n        \"instance_id\": \"host|instance|host|1024\",\n        \"logs\": [\n            {\n                \"step\": \"选择接入点\",\n                \"status\": \"SUCCESS\",\n                \"log\": \"[2020-03-28 18:10:38 INFO] 开始选择接入点\\n[2020-03-28 18:10:38 INFO] 当前主机已分配接入点[默认接入点]\",\n                \"start_time\": \"2020-03-28 10:10:38\",\n                \"finish_time\": \"2020-03-28 10:10:38\"\n            },\n            {\n                \"step\": \"安装\",\n                \"status\": \"FAILED\",\n                \"log\": \"\",\n                \"start_time\": \"2020-03-28 10:10:38\",\n                \"finish_time\": \"2020-03-28 10:11:25\"\n            },\n            {\n                \"step\": \"查询Agent状态\",\n                \"status\": \"PENDING\",\n                \"log\": \"\",\n                \"start_time\": null,\n                \"finish_time\": null\n            },\n            {\n                \"step\": \"更新任务状态\",\n                \"status\": \"PENDING\",\n                \"log\": \"\",\n                \"start_time\": null,\n                \"finish_time\": null\n            }\n        ],\n        \"create_time\": \"2020-03-28 18:10:36+0800\",\n        \"update_time\": \"2020-03-28 18:10:36+0800\",\n        \"is_latest\": true\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/debug.py",
    "groupTitle": "debug"
  },
  {
    "type": "POST",
    "url": "/v2/plugin/create_export_task/",
    "title": "触发插件打包导出",
    "name": "create_export_plugin_task",
    "group": "plugin_v2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query_params",
            "description": "<p>插件信息，version, project, os[可选], cpu_arch[可选]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>插件类别</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n    \"category\": \"gse_plugin\",\n    \"query_params\": {\n        \"project\": \"test_plugin\",\n        \"version\": \"1.0.0\"\n    }\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"job_id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/plugin_v2.py",
    "groupTitle": "plugin_v2"
  },
  {
    "type": "POST",
    "url": "/v2/plugin/create_register_task/",
    "title": "创建注册任务",
    "name": "create_register_task",
    "group": "plugin_v2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_name",
            "description": "<p>文件名</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_release",
            "description": "<p>是否已发布</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_template_load",
            "description": "<p>是否需要读取配置文件，缺省默认为<code>false</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_template_overwrite",
            "description": "<p>是否可以覆盖已经存在的配置文件，缺省默认为<code>false</code></p>"
          },
          {
            "group": "Parameter",
            "type": "List",
            "optional": true,
            "field": "select_pkg_abs_paths",
            "description": "<p>指定注册包相对路径列表，缺省默认全部导入</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n    \"file_name\": \"bkunifylogbeat-7.1.28.tgz\",\n    \"is_release\": True,\n    \"select_pkg_abs_paths\": [\"bkunifylogbeat_linux_x86_64/bkunifylogbeat\"]\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"job_id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/plugin_v2.py",
    "groupTitle": "plugin_v2"
  },
  {
    "type": "POST",
    "url": "/v2/plugin/fetch_config_variables/",
    "title": "获取配置模板参数",
    "name": "fetch_config_variables",
    "group": "plugin_v2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": false,
            "field": "config_tpl_ids",
            "description": "<p>配置模板id列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n    \"config_tpl_ids\": [1, 2]\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "[\n    {\n        \"id\": 1,\n        \"name\": \"bkmonitorbeat.conf\",\n        \"version\": \"1.0.0\",\n        \"is_main\": true,\n        \"creator\": \"system\",\n        \"variables\": {\n            \"type\": \"object\",\n            \"properties\": {\n                \"tasks\": {\n                    \"title\": \"tasks\",\n                    \"type\": \"array\",\n                    \"items\": {\n                        \"title\": \"task\",\n                        \"type\": \"object\",\n                        \"properties\": {\n                            \"bk_biz_id\": {\n                                \"title\": \"bk_biz_id\",\n                                \"_required\": true,\n                                \"type\": \"any\"\n                            },\n                            \"task_list\": {\n                                \"title\": \"task_list\",\n                                \"type\": \"array\",\n                                \"items\": {\n                                    \"title\": \"task\",\n                                    \"type\": \"object\",\n                                    \"properties\": {\n                                        \"pattern\": {\n                                            \"title\": \"pattern\",\n                                            \"type\": \"string\",\n                                            \"_required\": true\n                                        },\n                                        \"name\": {\n                                            \"title\": \"name\",\n                                            \"_required\": true,\n                                            \"type\": \"any\"\n                                        }\n                                    }\n                                },\n                                \"_required\": true\n                            },\n                            \"labels\": {\n                                \"title\": \"labels\",\n                                \"type\": \"array\",\n                                \"items\": {\n                                    \"type\": \"any\"\n                                },\n                                \"_required\": true\n                            },\n                            \"task_id\": {\n                                \"title\": \"task_id\",\n                                \"_required\": true,\n                                \"type\": \"any\"\n                            },\n                            \"target\": {\n                                \"title\": \"target\",\n                                \"_required\": true,\n                                \"type\": \"any\"\n                            },\n                            \"dataid\": {\n                                \"title\": \"dataid\",\n                                \"_required\": true,\n                                \"type\": \"any\"\n                            },\n                            \"path_list\": {\n                                \"title\": \"path_list\",\n                                \"type\": \"array\",\n                                \"items\": {\n                                    \"title\": \"path\",\n                                    \"type\": \"any\"\n                                },\n                                \"_required\": true\n                            }\n                        }\n                    },\n                    \"_required\": true\n                },\n                \"config_name\": {\n                    \"title\": \"config_name\",\n                    \"default\": \"keyword_task\",\n                    \"type\": \"string\"\n                },\n                \"config_version\": {\n                    \"title\": \"config_version\",\n                    \"default\": \"1.1.1\",\n                    \"type\": \"string\"\n                }\n            }\n        }\n    },\n    {\n        \"id\": 2,\n        \"name\": \"bkmonitorbeat.conf\",\n        \"version\": \"1.0.0\",\n        \"is_main\": true,\n        \"creator\": \"system\",\n        \"variables\": {\n            \"type\": \"object\",\n            \"properties\": {\n                \"bk_biz_id\": {\n                    \"title\": \"bk_biz_id\",\n                    \"_required\": true,\n                    \"type\": \"any\"\n                },\n                \"labels\": {\n                    \"title\": \"labels\",\n                    \"type\": \"array\",\n                    \"items\": {\n                        \"type\": \"any\"\n                    },\n                    \"_required\": true\n                },\n                \"task_id\": {\n                    \"title\": \"task_id\",\n                    \"_required\": true,\n                    \"type\": \"any\"\n                },\n                \"config_version\": {\n                    \"title\": \"config_version\",\n                    \"_required\": true,\n                    \"type\": \"any\"\n                },\n                \"max_timeout\": {\n                    \"title\": \"max_timeout\",\n                    \"default\": 100,\n                    \"type\": \"number\"\n                },\n                \"dataid\": {\n                    \"title\": \"dataid\",\n                    \"_required\": true,\n                    \"type\": \"any\"\n                },\n                \"period\": {\n                    \"title\": \"period\",\n                    \"_required\": true,\n                    \"type\": \"any\"\n                },\n                \"min_period\": {\n                    \"title\": \"min_period\",\n                    \"default\": 3,\n                    \"type\": \"number\"\n                },\n                \"command\": {\n                    \"title\": \"command\",\n                    \"_required\": true,\n                    \"type\": \"any\"\n                },\n                \"timeout\": {\n                    \"title\": \"timeout\",\n                    \"default\": 60,\n                    \"type\": \"number\"\n                },\n                \"config_name\": {\n                    \"title\": \"config_name\",\n                    \"_required\": true,\n                    \"type\": \"any\"\n                }\n            }\n        }\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/plugin_v2.py",
    "groupTitle": "plugin_v2"
  },
  {
    "type": "POST",
    "url": "/v2/plugin/fetch_package_deploy_info/",
    "title": "获取插件包部署信息",
    "name": "fetch_package_deploy_info",
    "group": "plugin_v2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "projects",
            "description": "<p>插件名称列表</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "keys",
            "description": "<p>聚合关键字，可选：os/version/cpu_arch</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n    \"projects\": [\"bkmonitorbeat\", \"basereport\"],\n    \"keys\": [\"os\"]\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回操作成功的插件id列表:",
          "content": "{\n    \"basereport_linux\": {\"nodes_number\": 128025},\n    \"bkmonitorbeat_linux\": {\"nodes_number\": 128030},\n    \"basereport_windows\": {\"nodes_number\": 5},\n    \"bkmonitorbeat_windows\": {\"nodes_number\": 5},\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/plugin_v2.py",
    "groupTitle": "plugin_v2"
  },
  {
    "type": "GET",
    "url": "/v2/plugin/",
    "title": "插件列表",
    "name": "list_plugin",
    "group": "plugin_v2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>插件别名&amp;名称模糊搜索</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "simple_all",
            "description": "<p>返回全部数据（概要信息，<code>id</code>, <code>description</code>, <code>name</code>），默认<code>False</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "page",
            "description": "<p>当前页数，默认<code>1</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "pagesize",
            "description": "<p>分页大小，默认<code>10</code></p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": true,
            "field": "sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "[\"name\"",
              "\"category\"",
              "\"creator\"",
              "\"scenario\"",
              "\"description\"]"
            ],
            "optional": true,
            "field": "sort.head",
            "description": "<p>排序字段</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "[\"ASC\"",
              "\"DEC\"]"
            ],
            "optional": true,
            "field": "sort.sort_type",
            "description": "<p>排序类型</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"total\": 2,\n    \"list\": [\n        {\n            \"id\": 1,\n            \"description\": \"系统基础信息采集\",\n            \"name\": \"basereport\",\n            \"category\": \"官方插件\",\n            \"nodes_number\": 123,\n            \"source_app_code\": \"bk_nodeman\",\n            \"scenario\": \"CMDB上的实时数据，蓝鲸监控里的主机监控，包含CPU，内存，磁盘等\",\n            \"deploy_type\": \"整包部署\"\n        },\n        {\n            \"id\": 2,\n            \"description\": \"监控采集器\",\n            \"name\": \"bkmonitorbeat\",\n            \"category\": \"第三方插件\",\n            \"nodes_number\": 321,\n            \"source_app_code\": \"bk_monitor\",\n            \"scenario\": \"蓝鲸监控采集器，支持多种协议及多任务的采集，提供多种运行模式和热加载机制\",\n            \"deploy_type\": \"Agent自动部署\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/plugin_v2.py",
    "groupTitle": "plugin_v2"
  },
  {
    "type": "POST",
    "url": "/v2/plugin/list_plugin_host/",
    "title": "查询插件下主机",
    "name": "list_plugin_host",
    "group": "plugin_v2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "project",
            "description": "<p>插件名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": true,
            "field": "bk_biz_id",
            "description": "<p>业务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": true,
            "field": "bk_host_id",
            "description": "<p>主机ID</p>"
          },
          {
            "group": "Parameter",
            "type": "List",
            "optional": true,
            "field": "conditions",
            "description": "<p>搜索条件，支持os_type, ip, status, version, bk_cloud_id, node_from <br> query: IP、操作系统、Agent状态、Agent版本、云区域 单/多模糊搜索 <br> topology: 拓扑搜索，传入bk_set_ids, bk_module_ids</p>"
          },
          {
            "group": "Parameter",
            "type": "List",
            "optional": true,
            "field": "nodes",
            "description": "<p>拓扑节点, 例如：[{&quot;bk_biz_id&quot;: 1, &quot;bk_inst_id&quot;: 10, &quot;bk_obj_id&quot;: &quot;module&quot;}, ...]</p>"
          },
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": true,
            "field": "exclude_hosts",
            "description": "<p>跨页全选排除主机</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "page",
            "description": "<p>当前页数，默认为<code>1</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "pagesize",
            "description": "<p>分页大小，默认为<code>10</code>，<code>-1</code> 表示跨页全选</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n    \"description\": \"bkcloud\",\n}\n:param request:\n:return: {\n    \"total\": 1,\n    \"list\": [\n        {\n            \"bk_cloud_id\": 1,\n            \"bk_cloud_name\": \"云区域名称\",\n            \"bk_biz_id\": 2,\n            \"bk_biz_name\": \"业务名称\",\n            \"bk_host_id\": 1,\n            \"os_type\": \"linux\",\n            \"inner_ip\": \"127.0.0.1\",\n            \"status\": \"RUNNING\",\n            \"plugin_status\": {\n                \"test_plugin\": {\n                    \"version\": \"1.0.0\",\n                    \"status\": \"RUNNING\"\n                }\n            }\n        }\n    ]\n}",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/plugin_v2.py",
    "groupTitle": "plugin_v2"
  },
  {
    "type": "POST",
    "url": "/v2/plugin/operate/",
    "title": "插件操作",
    "name": "operate_plugin",
    "group": "plugin_v2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "plugin_name",
            "description": "<p>插件名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "job_type",
            "description": "<p>任务类型</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "scope",
            "description": "<p>操作范围</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "scope.object_type",
            "description": "<p>CMDB对象类型，可选 <code>SERVICE</code>, <code>HOST</code>，默认取<code>HOST</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scope.node_type",
            "description": "<p>CMDB节点类型，可选 <code>TOPO</code>, <code>INSTANCE</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "scope.nodes",
            "description": "<p>节点列表 <br/> // object_type=HOST &amp; node_type=TOPO <br/> <code>[{&quot;bk_biz_id&quot;: 1, &quot;bk_inst_id&quot;: 100, &quot;bk_obj_id&quot;: &quot;set&quot;}]</code> <br/> // object_type=HOST &amp; node_type=INSTANCE <br/> <code>[{&quot;bk_biz_id&quot;: 1, &quot;bk_host_id&quot;: 200}]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "steps",
            "description": "<p>插件安装列表，选择插件更新/安装时必填</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "steps.id",
            "description": "<p>插件名称，在一个列表中不允许重复</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "steps.type",
            "description": "<p>步骤类型，可选 <code>AGENT</code>, <code>PLUGIN</code>，默认是<code>PLUGIN</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "steps.configs",
            "description": "<p>步骤配置列表</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "steps.params",
            "description": "<p>步骤参数列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求例子:",
          "content": "{\n    \"name\": \"yunchao策略\",\n    \"scope\": {\n        \"object_type\": \"HOST\",\n        \"node_type\": \"TOPO\",\n        \"nodes\": [\n            {\"bk_biz_id\": 1, \"bk_inst_id\": 100, \"bk_obj_id\": \"set\"},\n            {\"bk_biz_id\": 2, \"bk_inst_id\": 10, \"bk_obj_id\": \"module\"}\n        ]\n    },\n    \"steps\": [\n        {\n            \"id\": \"yunchao\",\n            \"type\": \"PLUGIN\",\n            \"configs\": [\n                {\n                    \"cpu_arch\": \"x86_64\",\n                    \"os_type\": \"linux\",\n                    \"version\": \"1.0.1\",\n                    \"config_templates\": [\n                        {\"name\": \"bk.conf\", \"version\": \"*\", \"is_main\": True}\n                    ]\n                },\n                {\n                    \"cpu_arch\": \"x64\",\n                    \"os_type\": \"windows\",\n                    \"version\": \"1.0.2\",\n                    \"config_templates\": [\n                        {\"name\": \"bk.conf\", \"version\": \"*\"}\n                    ]\n                }\n            ],\n            \"params\": [\n                {\n                    \"cpu_arch\": \"x86_64\",\n                    \"os_type\": \"linux\",\n                    \"port_range\": \"9102,10000-10005,20103,30000-30100\",\n                    \"context\": {\n                        \"--web.listen-host\": \"127.0.0.1\",\n                        \"--web.listen-port\": \"{{ control_info.port }}\"\n                    }\n                },\n                {\n                    \"cpu_arch\": \"x64\",\n                    \"os_type\": \"windows\",\n                    \"port_range\": \"9102,10000-10005,20103,30000-30100\",\n                    \"context\": {\n                        \"--web.listen-host\": \"127.0.0.1\",\n                        \"--web.listen-port\": \"{{ control_info.port }}\"\n                    }\n                }\n            ]\n        }\n    ]\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回: 策略id",
          "content": "{\n    \"job_id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/plugin_v2.py",
    "groupTitle": "plugin_v2"
  },
  {
    "type": "POST",
    "url": "/v2/plugin/package_status_operation/",
    "title": "插件包状态类操作",
    "name": "package_status_operation",
    "group": "plugin_v2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "operation",
            "description": "<p>状态操作 <code>release</code>-<code>上线</code>，<code>offline</code>-<code>下线</code> <code>ready</code>-<code>启用</code>，<code>stop</code>-<code>停用</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": true,
            "field": "id",
            "description": "<p>插件包id列表，<code>id</code>和（<code>name</code>, <code>version</code>）至少有一个</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>插件包名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "cpu_arch",
            "description": "<p>CPU类型，<code>x86</code> <code>x86_64</code> <code>powerpc</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "os",
            "description": "<p>系统类型，<code>linux</code> <code>windows</code> <code>aix</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "md5_list",
            "description": "<p>md5列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回操作成功的插件包id列表:",
          "content": "[1, 2, 4]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/plugin_v2.py",
    "groupTitle": "plugin_v2"
  },
  {
    "type": "GET",
    "url": "/v2/plugin/{{pk}}/history/",
    "title": "插件包历史",
    "name": "plugin_history",
    "group": "plugin_v2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "os",
            "description": "<p>系统类型，<code>windows</code> <code>linux</code> <code>aix</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "cpu_arch",
            "description": "<p>cpu位数，<code>x86</code> <code>x86_64</code> <code>powerpc</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": true,
            "field": "pkg_ids",
            "description": "<p>插件包id列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "[\n    {\n        \"id\": 1,\n        \"pkg_name\": \"basereport-1.0.tgz\",\n        \"project\": \"basereport\",\n        \"version\": \"1.0\",\n        \"pkg_size\": 4391830,\n        \"md5\": \"35bf230be9f3c1b878ef7665be34e14e\",\n        \"nodes_number\": 1,\n        \"config_templates\": [\n            {\"id\": 1, \"name\": \"bkunifylogbeat.conf\", \"version\": \"1.0\", \"is_main\": false},\n            {\"id\": 2, \"name\": \"bkunifylogbeat1.conf\", \"version\": \"1.1\", \"is_main\": false},\n            {\"id\": 3, \"name\": \"bkunifylogbeat-main.config\", \"version\": \"0.1\", \"is_main\": true}\n        ],\n        \"pkg_mtime\": \"2019-11-25 21:58:30\",\n        \"is_ready\": True,\n        \"is_release_version\": True\n    },\n    {\n        \"id\": 2,\n        \"pkg_name\": \"basereport-1.1.tgz\",\n        \"project\": \"basereport\",\n        \"version\": \"1.1\",\n        \"md5\": \"35bf230be9f3c1b878ef7665be34e14e\",\n        \"nodes_number\": 1,\n        \"pkg_size\": 4391830,\n        \"config_templates\": [\n            {\"id\": 4, \"name\": \"child1.conf\", \"version\": \"1.0\", \"is_main\": false},\n            {\"id\": 5, \"name\": \"child2.conf\", \"version\": \"2.0\", \"is_main\": false},\n            {\"id\": 6, \"name\": \"bkunifylogbeat-main.config\", \"version\": \"0.2\", \"is_main\": true}\n        ],\n        \"pkg_mtime\": \"2019-11-25 22:01:30\",\n        \"is_ready\": True,\n        // 最新上传的包\n        \"is_newest\": True,\n        \"is_release_version\": True\n    },\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/plugin_v2.py",
    "groupTitle": "plugin_v2"
  },
  {
    "type": "POST",
    "url": "/v2/plugin/parse/",
    "title": "解析插件包",
    "name": "plugin_parse",
    "group": "plugin_v2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_name",
            "description": "<p>文件名</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n    \"file_name\": \"basereport-10.1.12.tgz\"\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "[\n    {\n        \"result\": True,\n        \"message\": \"新增插件\",\n        \"pkg_abs_path\": \"basereport_linux_x86_64/basereport\",\n        \"pkg_name\": \"basereport-10.1.12\",\n        \"project\": \"basereport\",\n        \"version\": \"10.1.12\",\n        \"category\": \"官方插件\",\n        \"config_templates\": [\n            {\"name\": \"child1.conf\", \"version\": \"1.0\", \"is_main\": false},\n            {\"name\": \"child2.conf\", \"version\": \"1.1\", \"is_main\": false},\n            {\"name\": \"basereport-main.config\", \"version\": \"0.1\", \"is_main\": true}\n        ],\n        \"os\": \"x86_64\",\n        \"cpu_arch\": \"linux\",\n        \"description\": \"高性能日志采集\"\n    },\n    {\n        \"result\": False,\n        \"message\": \"缺少project.yaml文件\",\n        \"pkg_abs_path\": \"external_bkmonitorbeat_windows_x32/bkmonitorbeat\",\n        \"pkg_name\": None,\n        \"project\": None,\n        \"version\": None,\n        \"category\": None,\n        \"config_templates\": [],\n        \"os\": \"x32\",\n        \"cpu_arch\": \"windows\",\n        \"description\": None\n    },\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/plugin_v2.py",
    "groupTitle": "plugin_v2"
  },
  {
    "type": "POST",
    "url": "/v2/plugin/plugin_status_operation/",
    "title": "插件状态类操作",
    "name": "plugin_status_operation",
    "group": "plugin_v2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "operation",
            "description": "<p>状态操作 <code>ready</code>-<code>启用</code>，<code>stop</code>-<code>停用</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": false,
            "field": "id",
            "description": "<p>插件id列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n    \"operation\": \"stop\",\n    \"id\": [1, 2]\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回操作成功的插件id列表:",
          "content": "[1, 2]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/plugin_v2.py",
    "groupTitle": "plugin_v2"
  },
  {
    "type": "POST",
    "url": "/v2/plugin/upload/",
    "title": "插件上传",
    "name": "plugin_upload",
    "group": "plugin_v2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "package_file",
            "description": "<p>插件压缩包</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "module",
            "description": "<p>插件类别，缺省默认为<code>gse_plugin</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"id\": 3,\n    \"name\": \"test_plugin-7.1.28.tgz\",\n    \"pkg_size\": 5587006\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/plugin_v2.py",
    "groupTitle": "plugin_v2"
  },
  {
    "type": "GET",
    "url": "/v2/plugin/query_export_task/",
    "title": "获取一个导出任务结果",
    "name": "query_export_plugin_task",
    "group": "plugin_v2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "job_id",
            "description": "<p>任务ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n    \"job_id\": 1\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"is_finish\": True,\n    \"is_failed\": False,\n    \"download_url\": \"http://127.0.0.1//backend/export/download/\",\n    \"error_message\": \"haha\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/plugin_v2.py",
    "groupTitle": "plugin_v2"
  },
  {
    "type": "GET",
    "url": "/v2/plugin/query_register_task/",
    "title": "查询插件注册任务",
    "name": "query_register_task",
    "group": "plugin_v2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "job_id",
            "description": "<p>任务ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n    \"job_id\": 1\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"is_finish\": False,\n    \"status\": \"RUNNING\",\n    \"message\": \"~\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/plugin_v2.py",
    "groupTitle": "plugin_v2"
  },
  {
    "type": "GET",
    "url": "/v2/plugin/{{pk}}/",
    "title": "插件详情",
    "name": "retrieve_plugin",
    "group": "plugin_v2",
    "parameter": {
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"id\": 1,\n    \"description\": \"系统基础信息采集\",\n    \"name\": \"basereport\",\n    \"category\": \"官方插件\",\n    \"source_app_code\": \"bk_nodeman\",\n    \"scenario\": \"CMDB上的实时数据，蓝鲸监控里的主机监控，包含CPU，内存，磁盘等\",\n    \"deploy_type\": \"整包部署\",\n    \"plugin_packages\": [\n        {\n            \"id\": 1,\n            \"pkg_name\": \"basereport-10.1.12.tgz\",\n            \"project\": \"basereport\",\n            \"version\": \"10.1.12\",\n            \"config_templates\": [\n                {\"id\": 1, \"name\": \"basereport.conf\", \"version\": \"10.1\", \"is_main\": true}\n            ],\n            \"os\": \"linux\",\n            \"cpu_arch\": \"x86_64\",\n            \"support_os_cpu\": \"linux_x86_64\",\n            \"pkg_mtime\": \"2019-11-25 21:58:30\",\n            \"is_ready\": True\n        },\n        {\n            \"id\": 2,\n            \"pkg_name\": \"bkmonitorbeat-1.7.1.tgz\",\n            \"project\": \"bkmonitorbeat\",\n            \"version\": \"1.7.1\",\n            \"config_templates\": [\n                {\"id\": 1, \"name\": \"child1.conf\", \"version\": \"1.0\", \"is_main\": false},\n                {\"id\": 2, \"name\": \"child2.conf\", \"version\": \"1.1\", \"is_main\": false},\n                {\"id\": 3, \"name\": \"bkmonitorbeat.conf\", \"version\": \"0.1\", \"is_main\": true}\n            ],\n            \"os\": \"windows\",\n            \"cpu_arch\": \"x86\",\n            \"support_os_cpu\": \"windows_x86\",\n            \"pkg_mtime\": \"2019-11-25 21:58:30\",\n            \"is_ready\": True\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/plugin_v2.py",
    "groupTitle": "plugin_v2"
  },
  {
    "type": "PUT",
    "url": "/v2/plugin/{{pk}}/",
    "title": "编辑插件",
    "name": "update_plugin",
    "group": "plugin_v2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>插件别名</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n    \"description\": \"bkcloud\",\n}",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/plugin_v2.py",
    "groupTitle": "plugin_v2"
  },
  {
    "type": "GET",
    "url": "/plugin/{{plugin_name}}/package/{{pk}}/",
    "title": "获取插件包信息",
    "name": "fetch_package_info",
    "group": "plugin",
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "[\n    {\n        \"package_id\": 1,\n        \"os_type\": \"Linux x64\",\n        \"version\": \"v2.4\",\n        \"status\": \"已上线\",\n        \"config_template_version\": \"2.3.4\",\n        \"updated_at\": \"2020-07-31 18:00:00\",\n        \"description\": \"我是版本描述\",\n        \"config_template\": [\n            {\n                \"name\": \"xx.xml\",\n                \"is_main\": True,\n                \"params\": {\n                    \"log_path\": \"/data/log/\"\n                }\n            }\n        ]\n    },\n    {\n        \"package_id\": 2,\n        \"os_type\": \"Linux x64\",\n        \"version\": \"v2.4\",\n        \"status\": \"已上线\",\n        \"config_template_version\": \"2.3.4\",\n        \"updated_at\": \"2020-07-31 18:00:00\",\n        \"description\": \"我是版本描述\",\n        \"config_template\": [\n            {\n                \"name\": \"xx.xml\",\n                \"is_main\": False,\n                \"params\": {\n                    \"log_path\": \"/data/log/\"\n                }\n            }\n        ]\n    },\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/plugin.py",
    "groupTitle": "plugin"
  },
  {
    "type": "GET",
    "url": "/plugin/{{plugin_name}}/package/fetch_version/",
    "title": "获取插件最新版本",
    "name": "fetch_version",
    "group": "plugin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "plugin_name",
            "description": "<p>插件名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "os_type",
            "description": "<p>系统类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "is_lastest",
            "description": "<p>是否最新版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数:",
          "content": "{\n    \"plugin_name\": \"basereport\",\n    \"cpu_arch\": \"x86_64\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "[\n    {\n        \"package_id\": 1,\n        \"os_type\": \"Linux x64\",\n        \"lastest_version\": \"v2.4\",\n        \"description\": \"我是版本描述\"\n    },\n    {\n        \"package_id\": 2,\n        \"os_type\": \"Linux x32\",\n        \"lastest_version\": \"v2.3\"，\n        \"description\": \"我是版本描述\"\n    }\n]\n[\n    {\n        \"package_id\": 1,\n        \"os_type\": \"Linux x64\",\n        \"version\": \"v2.4\",\n        \"status\": \"已上线\",\n        \"config_template_version\": \"2.3.4\",\n        \"updated_at\": \"2020-07-31 18:00:00\",\n        \"host_count\":10000,\n        \"description\": \"我是版本描述\"\n    },\n    {\n        \"package_id\": 2,\n        \"os_type\": \"Linux x64\",\n        \"version\": \"v2.4\",\n        \"status\": \"已上线\",\n        \"config_template_version\": \"2.3.4\",\n        \"updated_at\": \"2020-07-31 18:00:00\",\n        \"host_count\":10000,\n        \"description\": \"我是版本描述\"\n    },\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/plugin.py",
    "groupTitle": "plugin"
  },
  {
    "type": "POST",
    "url": "/plugin/search/",
    "title": "查询插件列表",
    "name": "list_host",
    "group": "plugin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": true,
            "field": "bk_biz_id",
            "description": "<p>业务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": true,
            "field": "bk_host_id",
            "description": "<p>主机ID</p>"
          },
          {
            "group": "Parameter",
            "type": "List",
            "optional": true,
            "field": "conditions",
            "description": "<p>搜索条件，支持os_type, ip, status <br> version, bk_cloud_id, node_from 和 模糊搜索query</p>"
          },
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": true,
            "field": "exclude_hosts",
            "description": "<p>跨页全选排除主机</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "pagesize",
            "description": "<p>分页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "only_ip",
            "description": "<p>只返回IP</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "detail",
            "description": "<p>是否为详情,为True显示主进程信息</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"total\": 2,\n    \"list\": [\n        {\n            \"status\": \"RUNNING\",\n            \"version\": \"1.6.2\",\n            \"bk_cloud_id\": 0,\n            \"bk_biz_id\": 2,\n            \"bk_host_id\": 15302,\n            \"node_type\": \"AGENT\",\n            \"os_type\": \"LINUX\",\n            \"inner_ip\": \"127.0.0.1\",\n            \"node_from\": \"NODE_MAN\",\n            \"status_display\": \"正常\",\n            \"bk_cloud_name\": \"直连区域\",\n            \"bk_biz_name\": \"蓝鲸\",\n            \"job_result\": {},\n            \"plugin_status\": [\n                [\n                    {\n                        \"name\": \"basereport\",\n                        \"subscription_statistics\": {\n                            \"running\": 1,\n                            \"unknown\": 0,\n                            \"terminated\": 1,\n                            \"not_installed\": 0\n                        },\n                        \"subscription_tasks\": [\n                            {\n                                \"id\": 8236,\n                                \"plugin_name\": \"basereport\",\n                                \"name\": \"--\",\n                                \"status\": \"RUNNING\",\n                                \"version\": \"1.2.3\",\n                                \"update_time\": \"2020-07-21 14:39:41+0800\",\n                                \"is_auto_trigger\": true,\n                                \"deploy_type\": \"自动\",\n                                \"config_template\": \"aa.conf\",\n                                \"config_template_version\": \"5.6.6\",\n                                \"install_path\": \"/a/b\"\n                            },\n                            {\n                                \"id\": 8237,\n                                \"plugin_name\": \"basereport\",\n                                \"name\": \"--\",\n                                \"status\": \"TERMINATED\",\n                                \"version\": \"1.2.4\",\n                                \"update_time\": \"2020-07-21 14:39:41+0800\",\n                                \"is_auto_trigger\": true,\n                                \"deploy_type\": \"手动\",\n                                \"config_template\": \"bb.conf\",\n                                \"config_template_version\": \"6.7.8\",\n                                \"install_path\": \"/data/inst/\"\n                            }\n                        ],\n                        \"status\": \"RUNNING\",\n                        \"deploy_type\": \"远程\",\n                        \"config_template\": \"ff.conf\",\n                        \"config_template_version\": \"9.9.9.\",\n                        \"install_path\": \"/f/\",\n                        \"version\": \"10.2.1\",\n                        \"host_id\": 15302,\n                        \"job_result\": {}\n                    },\n                    {\n                        \"name\": \"processbeat\",\n                        \"subscription_statistics\": {\n                            \"running\": 0,\n                            \"unknown\": 1,\n                            \"terminated\": 0,\n                            \"not_installed\": 0\n                        },\n                        \"subscription_tasks\": [\n                            {\n                                \"id\": 8291,\n                                \"plugin_name\": \"processbeat\",\n                                \"name\": \"--\",\n                                \"status\": \"UNKNOWN\",\n                                \"version\": \"1.0.1\",\n                                \"update_time\": \"2020-07-21 14:39:41+0800\",\n                                \"is_auto_trigger\": true,\n                                \"deploy_type\": \"自动\",\n                                \"config_template\": \"cc.conf\",\n                                \"config_template_version\": \"8.8.8\",\n                                \"install_path\": \"/c/d/\"\n                            }\n                        ],\n                        \"status\": \"RUNNING\",\n                        \"deploy_type\": \"自动\",\n                        \"config_template\": \"ffff.conf\",\n                        \"config_template_version\": \"0.2.3\",\n                        \"install_path\": \"/b/f\",\n                        \"version\": \"1.4.0\",\n                        \"host_id\": 15302,\n                        \"job_result\": {}\n                    }\n                ]\n            ],\n            \"operate_permission\": true,\n            \"update_time\": \"--\"\n        },\n        {\n            \"status\": \"RUNNING\",\n            \"version\": \"1.6.2\",\n            \"bk_cloud_id\": 0,\n            \"bk_biz_id\": 13,\n            \"bk_host_id\": 15272,\n            \"node_type\": \"AGENT\",\n            \"os_type\": \"LINUX\",\n            \"inner_ip\": \"127.0.0.1\",\n            \"node_from\": \"NODE_MAN\",\n            \"status_display\": \"正常\",\n            \"bk_cloud_name\": \"直连区域\",\n            \"bk_biz_name\": \"bcs测试\",\n            \"job_result\": {},\n            \"plugin_status\": [\n                [\n                    {\n                        \"name\": \"basereport\",\n                        \"subscription_statistics\": {},\n                        \"subscription_tasks\": {},\n                        \"status\": \"RUNNING\",\n                        \"deploy_type\": \"远程\",\n                        \"config_template\": \"ff.conf\",\n                        \"config_template_version\": \"9.9.9.\",\n                        \"install_path\": \"/f/\",\n                        \"version\": \"10.2.1\",\n                        \"host_id\": 15272,\n                        \"job_result\": {}\n                    },\n                    {\n                        \"name\": \"processbeat\",\n                        \"subscription_statistics\": {},\n                        \"subscription_tasks\": {},\n                        \"status\": \"RUNNING\",\n                        \"deploy_type\": \"自动\",\n                        \"config_template\": \"ffff.conf\",\n                        \"config_template_version\": \"0.2.3\",\n                        \"install_path\": \"/b/f\",\n                        \"version\": \"1.4.0\",\n                        \"host_id\": 15272,\n                        \"job_result\": {}\n                    }\n                ]\n            ],\n            \"operate_permission\": true,\n            \"update_time\": \"--\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/plugin.py",
    "groupTitle": "plugin"
  },
  {
    "type": "GET",
    "url": "/plugin/{{pk}}/package/",
    "title": "查询进程包列表,pk为具体进程名",
    "name": "list_package",
    "group": "plugin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "os",
            "description": "<p>系统类型</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "[\n        {\n            \"id\":2,\n            \"pkg_name\":\"basereport-10.1.12.tgz\",\n            \"version\":\"10.1.12\",\n            \"module\":\"gse_plugin\",\n            \"project\":\"basereport\",\n            \"pkg_size\":4561957,\n            \"pkg_path\":\"/data/bkee/miniweb/download/linux/x86_64\",\n            \"md5\":\"046779753b6709635db0c861a1b0020e\",\n            \"pkg_mtime\":\"2019-11-01 20:46:52.404139\",\n            \"pkg_ctime\":\"2019-11-01 20:46:52.404139\",\n            \"location\":\"http://x.x.x.x/download/linux/x86_64\",\n            \"os\":\"linux\",\n            \"cpu_arch\":\"x86_64\"\n        },\n        {\n            \"id\":1,\n            \"pkg_name\":\"basereport-10.1.9.tgz\",\n            \"version\":\"10.1.9\",\n            \"module\":\"gse_plugin\",\n            \"project\":\"basereport\",\n            \"pkg_size\":4562217,\n            \"pkg_path\":\"/data/bkee/miniweb/download/linux/x86_64\",\n            \"md5\":\"6fe084f450352b1fa598a41a72800bc8\",\n            \"pkg_mtime\":\"2019-08-26 19:17:56.905309\",\n            \"pkg_ctime\":\"2019-08-26 19:17:56.905309\",\n            \"location\":\"http://x.x.x.x/download/linux/x86_64\",\n            \"os\":\"linux\",\n            \"cpu_arch\":\"x86_64\"\n        }\n    ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/plugin.py",
    "groupTitle": "plugin"
  },
  {
    "type": "GET",
    "url": "/plugin/{{pk}}/process/",
    "title": "查询插件列表,pk为official, external 或 scripts",
    "name": "list_process",
    "group": "plugin",
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "[{\n    \"id\":14,\n    \"name\":\"bklogbeat\",\n    \"description\":\"windows日志文件采集\",\n    \"description_en\":\"Windows log collector\",\n    \"scenario\":\"数据平台，蓝鲸监控，日志检索等和日志相关的数据. 首次使用插件管理进行操作前，先到日志检索/数据平台等进行设置插件的功能项\",\n    \"scenario_en\":\"Log collection on data, bkmonitor, log-search apps\",\n    \"category\":\"official\",\n    \"config_file\":\"bklogbeat.conf\",\n    \"config_format\":\"yaml\",\n    \"use_db\":false,\n    \"is_binary\":true,\n    \"auto_launch\":false\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/plugin.py",
    "groupTitle": "plugin"
  },
  {
    "type": "POST",
    "url": "/plugin/process/status/",
    "title": "查询主机进程状态信息",
    "name": "list_process_status",
    "group": "plugin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": false,
            "field": "bk_host_ids",
            "description": "<p>主机ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\n    \"bk_host_ids\": [1,2]\n}",
          "type": "json"
        },
        {
          "title": "成功返回:",
          "content": "{\n    \"result\": true,\n    \"code\": 0,\n    \"message\": \"\"\n    \"data\": [\n        {\n            \"bk_host_id\": 1,\n            \"name\": \"gseagent\",\n            \"status\": \"RUNNING\",\n            \"version\": \"1.60.54\"\n        },\n        {\n            \"bk_host_id\": 2,\n            \"name\": \"gseagent\",\n            \"status\": \"RUNNING\",\n            \"version\": \"1.60.54\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/plugin.py",
    "groupTitle": "plugin"
  },
  {
    "type": "POST",
    "url": "/plugin/operate/",
    "title": "插件操作类任务",
    "description": "<p>用于插件的各类操作。<br> bk_host_id和exclude_hosts必填一个。<br> 若填写了 exclude_hosts ，则代表跨页全选模式。<br> 注意, 云区域ID、业务ID等筛选条件，仅在跨页全选模式下有效。<br></p>",
    "name": "operate_plugin",
    "group": "plugin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "job_type",
            "description": "<p>任务类型</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "plugin_params",
            "description": "<p>插件信息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "plugin_params.name",
            "description": "<p>插件名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "plugin_params.version",
            "description": "<p>插件版本</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "plugin_params.keep_config",
            "description": "<p>是否保留原有配置文件</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "plugin_params.no_restart",
            "description": "<p>是否仅更新文件，不重启进程</p>"
          },
          {
            "group": "Parameter",
            "type": "List",
            "optional": true,
            "field": "plugin_params_list",
            "description": "<p>插件信息列表，2.1.x 插件参数，用于支持批量操作，传参要求同 plugin_params</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bk_biz_id",
            "description": "<p>业务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "List",
            "optional": true,
            "field": "condition",
            "description": "<p>搜索条件，支持os_type, ip, status <br> version, bk_cloud_id, node_from 和 模糊搜索query</p>"
          },
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": true,
            "field": "exclude_hosts",
            "description": "<p>跨页全选排除主机</p>"
          },
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": true,
            "field": "bk_host_id",
            "description": "<p>主机ID 主机ID和跨页全选排除主机必选一个</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "安装请求参数",
          "content": "{\n    \"job_type\": \"START_PLUGIN\",\n    \"bk_host_id\": [7731, 7732],\n    \"plugin_params\": {\"name\": \"basereport\", \"version\": \"10.1.12\"},\n    \"plugin_params_list\": [\n        {\"name\": \"basereport\", \"version\": \"10.1.12\"},\n        {\"name\": \"bkunifylogbeat\", \"version\": \"7.1.32\"}\n    ]\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"basereport\": 1,\n    \"bkunifylogbeat\": 2\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/plugin.py",
    "groupTitle": "plugin"
  },
  {
    "type": "GET",
    "url": "/plugin/statistics/",
    "title": "获取插件统计数据",
    "description": "<p>根据业务、插件、版本等维度，统计插件在主机的安装数量</p>",
    "name": "plugin_statistics",
    "group": "plugin",
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "[\n    {\n        \"bk_biz_id\": 2,\n        \"plugin_name\": \"basereport\",\n        \"version\": \"1.2.3\",\n        \"host_count\": 1\n    },\n    {\n        \"bk_biz_id\": 2,\n        \"plugin_name\": \"processbeat\",\n        \"version\": \"10.1.2\",\n        \"host_count\": 2\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/plugin.py",
    "groupTitle": "plugin"
  },
  {
    "type": "POST",
    "url": "/policy/create_policy/",
    "title": "创建策略",
    "name": "create_policy",
    "group": "policy",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "scope",
            "description": "<p>策略范围</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "scope.object_type",
            "description": "<p>CMDB对象类型，可选 <code>SERVICE</code>, <code>HOST</code>，默认取<code>HOST</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scope.node_type",
            "description": "<p>CMDB节点类型，可选 <code>TOPO</code>, <code>INSTANCE</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "scope.nodes",
            "description": "<p>节点列表 <br/> // object_type=HOST &amp; node_type=TOPO <br/> <code>[{&quot;bk_biz_id&quot;: 1, &quot;bk_inst_id&quot;: 100, &quot;bk_obj_id&quot;: &quot;set&quot;}]</code> <br/> // object_type=HOST &amp; node_type=INSTANCE <br/> <code>[{&quot;bk_biz_id&quot;: 1, &quot;bk_host_id&quot;: 200}]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "steps",
            "description": "<p>插件安装列表</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "steps.id",
            "description": "<p>插件名称，在一个列表中不允许重复</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "steps.type",
            "description": "<p>步骤类型，可选 <code>AGENT</code>, <code>PLUGIN</code>，默认是<code>PLUGIN</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "steps.configs",
            "description": "<p>步骤配置列表</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "steps.params",
            "description": "<p>步骤参数列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求例子:",
          "content": "{\n    \"name\": \"yunchao策略\",\n    \"scope\": {\n        \"object_type\": \"HOST\",\n        \"node_type\": \"TOPO\",\n        \"nodes\": [\n            {\"bk_biz_id\": 1, \"bk_inst_id\": 100, \"bk_obj_id\": \"set\"},\n            {\"bk_biz_id\": 2, \"bk_inst_id\": 10, \"bk_obj_id\": \"module\"}\n        ]\n    },\n    \"steps\": [\n        {\n            \"id\": \"yunchao\",\n            \"type\": \"PLUGIN\",\n            \"configs\": [\n                {\n                    \"cpu_arch\": \"x86_64\",\n                    \"os_type\": \"linux\",\n                    \"version\": \"1.0.1\",\n                    \"config_templates\": [\n                        {\"name\": \"bk.conf\", \"version\": \"*\", \"is_main\": True}\n                    ]\n                },\n                {\n                    \"cpu_arch\": \"x64\",\n                    \"os_type\": \"windows\",\n                    \"version\": \"1.0.2\",\n                    \"config_templates\": [\n                        {\"name\": \"bk.conf\", \"version\": \"*\"}\n                    ]\n                }\n            ],\n            \"params\": [\n                {\n                    \"cpu_arch\": \"x86_64\",\n                    \"os_type\": \"linux\",\n                    \"port_range\": \"9102,10000-10005,20103,30000-30100\",\n                    \"context\": {\n                        \"--web.listen-host\": \"127.0.0.1\",\n                        \"--web.listen-port\": \"{{ control_info.port }}\"\n                    }\n                },\n                {\n                    \"cpu_arch\": \"x64\",\n                    \"os_type\": \"windows\",\n                    \"port_range\": \"9102,10000-10005,20103,30000-30100\",\n                    \"context\": {\n                        \"--web.listen-host\": \"127.0.0.1\",\n                        \"--web.listen-port\": \"{{ control_info.port }}\"\n                    }\n                }\n            ]\n        }\n    ]\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回: 策略id",
          "content": "{\n    \"job_id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/policy.py",
    "groupTitle": "policy"
  },
  {
    "type": "GET",
    "url": "/policy/fetch_common_variable/",
    "title": "获取公共变量",
    "name": "fetch_common_variable",
    "group": "policy",
    "parameter": {
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"linux\": [\n        {\n            \"key\": \"{{control_info.gse_agent_home}}\",\n            \"value\": \"/data/gse/home\",\n            \"description\": \"我是描述\"\n        },\n        {\n            \"key\": \"{{control_info.log_path}}\",\n            \"value\": \"/data/log\",\n            \"description\": \"我是描述\"\n        }\n    ],\n    \"windows\": [\n        {\n            \"key\": \"{{control_info.gse_agent_home}}\",\n            \"value\": \"\\\\data\\\\gse\\\\home\",\n            \"description\": \"我是描述\"\n        },\n        {\n            \"key\": \"{{control_info.log_path}}\",\n            \"value\": \"\\\\data\\\\log\",\n            \"description\": \"我是描述\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/policy.py",
    "groupTitle": "policy"
  },
  {
    "type": "POST",
    "url": "/policy/fetch_policy_topo/",
    "title": "插件策略拓扑",
    "name": "fetch_policy_topo",
    "group": "policy",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": true,
            "field": "bk_biz_ids",
            "description": "<p>业务ID列表, 不传取全业务</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "plugin_name",
            "description": "<p>插件名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "keyword",
            "description": "<p>关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_lazy",
            "description": "<p>是否采取懒加载策略（仅返回一级节点），默认为False</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "[\n    {\n        \"id\": \"basereport\",\n        \"name\": \"basereport\",\n        \"type\": \"plugin\",\n        \"children\": [{\"id\": 1140, \"name\": \"测试哈哈哈哈哈哈\", \"type\": \"policy\"}]\n    },\n    {\n        \"id\": \"bkmonitorbeat\",\n        \"name\": \"bkmonitorbeat\",\n        \"type\": \"plugin\",\n        \"children\": [{\"id\": 1146, \"name\": \"测试任务历史耗时\", \"type\": \"policy\"}]\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/policy.py",
    "groupTitle": "policy"
  },
  {
    "type": "GET",
    "url": "/policy/host_policy/",
    "title": "主机策略列表",
    "description": "<p>根据host_id查询对应的所有策略</p>",
    "name": "host_policy",
    "group": "policy",
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "[\n    {\n        \"name\": \"测试任务\",\n        \"plugin_name\": \"processbeat\",\n        \"auto_trigger\": true,\n        \"plugin_version\": \"1.0.1\",\n        \"status\": \"FAILED\",\n        \"update_time\": \"2020-08-28 15:00:12+0800\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/policy.py",
    "groupTitle": "policy"
  },
  {
    "type": "POST",
    "url": "/policy/search/",
    "title": "查询策略列表",
    "name": "list_policy",
    "group": "policy",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": true,
            "field": "bk_biz_ids",
            "description": "<p>业务ID列表, 不传取全业务</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "conditions",
            "description": "<p>查询条件</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "conditions.key",
            "description": "<p>查询关键字，<code>query</code>表示多字段模糊搜索，目前仅支持<code>name</code> <br/> <code>key</code>为<code>plugin_name</code>时表示对该字段的精确查找</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "conditions.value",
            "description": "<p>查询值，单值查询</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": true,
            "field": "sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "[\"name\"",
              "\"plugin_name\"",
              "\"creator\"",
              "\"update_time\"",
              "\"nodes_scope\"",
              "\"bk_biz_scope\"]"
            ],
            "optional": false,
            "field": "...",
            "description": "<p>[sort.head] 排序字段</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "[\"ASC\"",
              "\"DEC\"]"
            ],
            "optional": true,
            "field": "sort.sort_type",
            "description": "<p>排序类型</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "pagesize",
            "description": "<p>分页大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"total\": 10,\n    \"list\": [\n        {\n            \"id\": 1,\n            \"name\": \"日志采集\",\n            \"plugin_name\": \"basereport\",\n            \"nodes_scope\": {\n                \"host_count\": 99,\n                \"node_count\": 123,\n            },\n            \"bk_biz_scope\": [1, 2, 3],\n            \"operator\": \"admin\",\n            \"updated_at\": \"2020-07-26 19:17:56\",\n            \"need_to_upgrade\": True\n        },\n        {\n            \"id\": 2,\n            \"name\": \"cxx日志采集2\",\n            \"plugin_name\": \"cxxreport\",\n            \"nodes_scope\": {\n                \"host_count\": 80,\n                \"node_count\": 123,\n            },\n            \"bk_biz_scope\": [1, 2],\n            \"operator\": \"admin\",\n            \"updated_at\": \"2020-07-26 19:17:56\",\n            \"need_to_upgrade\": False\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/policy.py",
    "groupTitle": "policy"
  },
  {
    "type": "POST",
    "url": "/policy/migrate_preview/",
    "title": "策略执行预览（计算变更详情）",
    "name": "migrate_preview",
    "group": "policy",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "policy_id",
            "description": "<p>策略ID，<code>scope</code>、<code>policy_id</code>必须传入一个，同传时优先使用<code>policy_id</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "category",
            "description": "<p>订阅类型，可选 <code>policy</code>, <code>once</code>，默认取<code>policy</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "scope",
            "description": "<p>策略范围</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "scope.object_type",
            "description": "<p>CMDB对象类型，可选 <code>SERVICE</code>, <code>HOST</code>，默认取<code>HOST</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scope.node_type",
            "description": "<p>CMDB节点类型，可选 <code>TOPO</code>, <code>INSTANCE</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "scope.nodes",
            "description": "<p>节点列表 <br/> // object_type=HOST &amp; node_type=TOPO <br/> <code>[{&quot;bk_biz_id&quot;: 1, &quot;bk_inst_id&quot;: 100, &quot;bk_obj_id&quot;: &quot;set&quot;}]</code> <br/> // object_type=HOST &amp; node_type=INSTANCE <br/> <code>[{&quot;bk_biz_id&quot;: 1, &quot;bk_host_id&quot;: 200}]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "steps",
            "description": "<p>插件安装列表</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "steps.id",
            "description": "<p>插件名称，在一个列表中不允许重复</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "steps.type",
            "description": "<p>步骤类型，可选 <code>AGENT</code>, <code>PLUGIN</code>，默认是<code>PLUGIN</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "steps.configs",
            "description": "<p>步骤配置列表</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "steps.params",
            "description": "<p>步骤参数列表</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "[\n    {\n        \"action_id\": \"MAIN_INSTALL_PLUGIN\",\n        \"action_name\": \"安装插件\",\n        \"list\": [\n            {\n                \"ip\": \"127.0.0.1\",\n                \"bk_cloud_id\": 1,\n                \"bk_biz_id\": 2,\n                \"migrate_reason\": {\n                    \"migrate_type\": \"\",\n                    \"current_version\": \"10.7.32\",\n                    \"target_version\": \"10.7.33\"\n                },\n                \"bk_biz_name\": \"蓝鲸\",\n                \"bk_cloud_name\": \"云区域名称\"\n            }\n        ]\n    },\n    {\n        \"action_id\": \"MAIN_STOP_PLUGIN\",\n        \"action_name\": \"停止插件\",\n        \"list\": [\n            {\n                \"ip\": \"127.0.0.1\",\n                \"bk_cloud_id\": 0,\n                \"bk_biz_id\": 3,\n                \"migrate_reason\": {},\n                \"bk_biz_name\": \"job_test\",\n                \"bk_cloud_name\": \"直连区域\"\n            }\n        ]\n    },\n    {\n        \"action_id\": \"IGNORED\",\n        \"action_name\": \"IGNORED\",\n        \"list\": [\n            {\n                \"ip\": \"127.0.0.1\",\n                \"bk_biz_name\": null,\n                \"bk_cloud_id\": 0,\n                \"bk_cloud_name\": \"直连区域\",\n                \"msg\": \"当前部署策略(层级biz)已被策略[主机策略(ID:1057)](层级host)抑制\"\n            }\n        ]\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/policy.py",
    "groupTitle": "policy"
  },
  {
    "type": "GET",
    "url": "/policy/{{pk}}/",
    "title": "策略详细",
    "name": "policy_info",
    "group": "policy",
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"subscription_id\": 1,\n    \"name\": \"yunchao策略\",\n    \"plugin_info\": {\n        \"id\": 1,\n        \"name\": \"yunchao\",\n        \"description\": \"yunchao\",\n        \"source_app_code\": \"test_app\",\n        \"category\": \"官方插件\",\n        \"deploy_type\": \"整包部署\"\n    }\n    \"scope\": {\n        \"object_type\": \"HOST\",\n        \"node_type\": \"TOPO\",\n        \"nodes\": [\n            {\"bk_biz_id\": 1, \"bk_inst_id\": 100, \"bk_obj_id\": \"set\"},\n            {\"bk_biz_id\": 2, \"bk_inst_id\": 10, \"bk_obj_id\": \"module\"}\n        ]\n    },\n    \"steps\": [\n        {\n            \"id\": \"yunchao\",\n            \"type\": \"PLUGIN\",\n            \"configs\": [\n                {\n                    \"cpu_arch\": \"x86_64\",\n                    \"os_type\": \"linux\",\n                    \"version\": \"1.0.1\",\n                    \"nodes_number\": 10,\n                    \"config_templates\": [\n                        {\"name\": \"bk.conf\", \"version\": \"*\", \"is_main\": True}\n                    ]\n                },\n                {\n                    \"cpu_arch\": \"x64\",\n                    \"os_type\": \"windows\",\n                    \"version\": \"1.0.2\",\n                    \"nodes_number\": 15,\n                    \"config_templates\": [\n                        {\"name\": \"bk.conf\", \"version\": \"*\"}\n                    ]\n                }\n            ],\n            \"params\": [\n                {\n                    \"cpu_arch\": \"x86_64\",\n                    \"os_type\": \"linux\",\n                    \"port_range\": \"9102,10000-10005,20103,30000-30100\",\n                    \"context\": {\n                        \"--web.listen-host\": \"127.0.0.1\",\n                        \"--web.listen-port\": \"{{ control_info.port }}\"\n                    }\n                },\n                {\n                    \"cpu_arch\": \"x64\",\n                    \"os_type\": \"windows\",\n                    \"port_range\": \"9102,10000-10005,20103,30000-30100\",\n                    \"context\": {\n                        \"--web.listen-host\": \"127.0.0.1\",\n                        \"--web.listen-port\": \"{{ control_info.port }}\"\n                    }\n                }\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/policy.py",
    "groupTitle": "policy"
  },
  {
    "type": "POST",
    "url": "/policy/operate/",
    "title": "策略操作",
    "description": "<p>策略操作，停用/停用并删除/启用</p>",
    "name": "policy_operate",
    "group": "policy",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "policy_id",
            "description": "<p>策略ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "op_type",
            "description": "<p>策略操作类型 &quot;START&quot;, &quot;STOP&quot;, &quot;STOP_AND_DELETE&quot;, &quot;DELETE&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "only_disable",
            "description": "<p>仅停用策略，保持插件运行</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"job_id\": 1,\n    \"subscription_id\": 1,\n    \"task_id\": 2\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/policy.py",
    "groupTitle": "policy"
  },
  {
    "type": "POST",
    "url": "/policy/plugin_preselection/",
    "title": "plugin_preselection",
    "name": "policy_preselection",
    "group": "policy",
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/policy.py",
    "groupTitle": "policy"
  },
  {
    "type": "POST",
    "url": "/policy/selected_preview/",
    "title": "策略执行预览（预览所选范围）",
    "name": "policy_preview",
    "group": "policy",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "List",
            "optional": true,
            "field": "conditions",
            "description": "<p>搜索条件，支持os_type, ip, status, version, bk_cloud_id, node_from <br> query: IP、操作系统、Agent状态、Agent版本、云区域 单/多模糊搜索 <br> topology: 拓扑搜索，传入bk_set_ids, bk_module_ids</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "page",
            "description": "<p>当前页数，默认为<code>1</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "pagesize",
            "description": "<p>分页大小，默认为<code>10</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "policy_id",
            "description": "<p>策略ID，<code>scope</code>、<code>policy_id</code>必须传入一个，同传时优先使用<code>policy_id</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "with_hosts",
            "description": "<p>对于TOPO创建的订阅，with_hosts = <code>true</code>时顺带返回TOPO下所有主机的信息，默认是<code>true</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "scope",
            "description": "<p>策略范围</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "scope.object_type",
            "description": "<p>CMDB对象类型，可选 <code>SERVICE</code>, <code>HOST</code>，默认取<code>HOST</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scope.node_type",
            "description": "<p>CMDB节点类型，可选 <code>TOPO</code>, <code>INSTANCE</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "scope.nodes",
            "description": "<p>节点列表 <br/> // object_type=HOST &amp; node_type=TOPO <br/> <code>[{&quot;bk_biz_id&quot;: 1, &quot;bk_inst_id&quot;: 100, &quot;bk_obj_id&quot;: &quot;set&quot;}]</code> <br/> // object_type=HOST &amp; node_type=INSTANCE <br/> <code>[{&quot;bk_biz_id&quot;: 1, &quot;bk_host_id&quot;: 200}]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "steps",
            "description": "<p>插件安装列表</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "steps.id",
            "description": "<p>插件名称，在一个列表中不允许重复</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "steps.type",
            "description": "<p>步骤类型，可选 <code>AGENT</code>, <code>PLUGIN</code>，默认是<code>PLUGIN</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "steps.configs",
            "description": "<p>步骤配置列表</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "steps.params",
            "description": "<p>步骤参数列表</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    // 部署实例为TOPO时展示\n    \"nodes\": [\n        {\n            \"bk_biz_id\": 2,\n            \"bk_inst_id\": 10,\n            \"bk_obj_id\": \"custom\",\n            \"bk_inst_name\": \"自定义层级节点\"\n        },\n        {\n            \"bk_biz_id\": 3,\n            \"bk_inst_id\": 3,\n            \"bk_obj_id\": \"biz\"\n            \"bk_inst_name\": \"我是一个业务节点\"\n        }\n    ],\n    // with_hosts=true时展示\n    \"total\": 188,\n    \"list\": [\n        {\n            \"bk_host_id\": 1,\n            \"inner_ip\": \"127.0.0.1\",\n            \"bk_cloud_id\": 1,\n            \"bk_biz_id\": 1,\n            \"bk_cloud_name\": \"嘿嘿\",\n            \"bk_biz_name\": \"王者荣耀\",\n            \"os_type\": \"LINUX\",\n            \"cpu_arch\": \"x86\",\n            \"status\": \"RUNNING\",\n            \"current_version\": \"1.0.0\",\n            \"target_version\": \"2.0.0\"\n        },\n        {\n            \"bk_host_id\": 2,\n            \"inner_ip\": \"127.0.0.2\",\n            \"bk_cloud_id\": 2,\n            \"bk_biz_id\": 2,\n            \"bk_cloud_name\": \"哈哈\",\n            \"bk_biz_name\": \"和平精英\",\n            \"cpu_arch\": \"x86_64\",\n            \"os_type\": \"WINDOWS\",\n            \"status\": \"TERMINATED\",\n            \"current_version\": \"1.0.0\",\n            \"target_version\": \"2.0.0\"\n        },\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/policy.py",
    "groupTitle": "policy"
  },
  {
    "type": "POST",
    "url": "/policy/{{pk}}/run/",
    "title": "执行策略",
    "name": "run_policy",
    "group": "policy",
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"job_id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/policy.py",
    "groupTitle": "policy"
  },
  {
    "type": "POST",
    "url": "/policy/{{pk}}/update_policy/",
    "title": "更新策略",
    "name": "update_policy",
    "group": "policy",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "scope",
            "description": "<p>策略范围</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "scope.object_type",
            "description": "<p>CMDB对象类型，可选 <code>SERVICE</code>, <code>HOST</code>，默认取<code>HOST</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scope.node_type",
            "description": "<p>CMDB节点类型，可选 <code>TOPO</code>, <code>INSTANCE</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "scope.nodes",
            "description": "<p>节点列表 <br/> // object_type=HOST &amp; node_type=TOPO <br/> <code>[{&quot;bk_biz_id&quot;: 1, &quot;bk_inst_id&quot;: 100, &quot;bk_obj_id&quot;: &quot;set&quot;}]</code> <br/> // object_type=HOST &amp; node_type=INSTANCE <br/> <code>[{&quot;bk_biz_id&quot;: 1, &quot;bk_host_id&quot;: 200}]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "steps",
            "description": "<p>插件安装列表</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "steps.id",
            "description": "<p>插件名称，在一个列表中不允许重复</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "steps.type",
            "description": "<p>步骤类型，可选 <code>AGENT</code>, <code>PLUGIN</code>，默认是<code>PLUGIN</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "steps.configs",
            "description": "<p>步骤配置列表</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "steps.params",
            "description": "<p>步骤参数列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求例子:",
          "content": "{\n    \"name\": \"yunchao策略\",\n    \"scope\": {\n        \"object_type\": \"HOST\",\n        \"node_type\": \"TOPO\",\n        \"nodes\": [\n            {\"bk_biz_id\": 1, \"bk_inst_id\": 100, \"bk_obj_id\": \"set\"},\n            {\"bk_biz_id\": 2, \"bk_inst_id\": 10, \"bk_obj_id\": \"module\"}\n        ]\n    },\n    \"steps\": [\n        {\n            \"id\": \"yunchao\",\n            \"type\": \"PLUGIN\",\n            \"configs\": [\n                {\n                    \"cpu_arch\": \"x86_64\",\n                    \"os_type\": \"linux\",\n                    \"version\": \"1.0.1\",\n                    \"config_templates\": [\n                        {\"name\": \"bk.conf\", \"version\": \"*\", \"is_main\": True}\n                    ]\n                },\n                {\n                    \"cpu_arch\": \"x64\",\n                    \"os_type\": \"windows\",\n                    \"version\": \"1.0.2\",\n                    \"config_templates\": [\n                        {\"name\": \"bk.conf\", \"version\": \"*\"}\n                    ]\n                }\n            ],\n            \"params\": [\n                {\n                    \"cpu_arch\": \"x86_64\",\n                    \"os_type\": \"linux\",\n                    \"port_range\": \"9102,10000-10005,20103,30000-30100\",\n                    \"context\": {\n                        \"--web.listen-host\": \"127.0.0.1\",\n                        \"--web.listen-port\": \"{{ control_info.port }}\"\n                    }\n                },\n                {\n                    \"cpu_arch\": \"x64\",\n                    \"os_type\": \"windows\",\n                    \"port_range\": \"9102,10000-10005,20103,30000-30100\",\n                    \"context\": {\n                        \"--web.listen-host\": \"127.0.0.1\",\n                        \"--web.listen-port\": \"{{ control_info.port }}\"\n                    }\n                }\n            ]\n        }\n    ]\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"job_id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/policy.py",
    "groupTitle": "policy"
  },
  {
    "type": "PUT",
    "url": "/policy/{{pk}}/",
    "title": "编辑策略概要信息",
    "name": "update_policy_info",
    "group": "policy",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>策略名称</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n    \"name\": \"策略名称1\",\n}",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/policy.py",
    "groupTitle": "policy"
  },
  {
    "type": "GET",
    "url": "/policy/{{pk}}/upgrade_preview/",
    "title": "升级预览",
    "name": "upgrade_preview",
    "group": "policy",
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "[\n    {\n        \"cpu_arch\": \"x86\",\n        \"os\": \"linux\",\n        \"latest_version\": \"1.10.32\",\n        \"current_version_list\": [\n            {\n                \"cpu_arch\": \"x86\",\n                \"os\": \"linux\",\n                \"current_version\": \"1.10.32\",\n                \"nodes_number\": 1\n            },\n            {\n                \"cpu_arch\": \"x86\",\n                \"os\": \"linux\",\n                \"current_version\": \"1.11.35\",\n                \"nodes_number\": 3\n            }\n        ],\n        \"is_latest\": true\n    },\n    {\n        \"cpu_arch\": \"x86\",\n        \"os\": \"linux\",\n        \"latest_version\": \"1.10.32\",\n        \"current_version_list\": [\n            {\n                \"cpu_arch\": \"x86\",\n                \"os\": \"linux\",\n                \"current_version\": \"1.0.0\",\n                \"nodes_number\": 11\n            }\n        ],\n        \"is_latest\": false,\n        \"version_scenario\": \"processbeat: 主机进程信息采集器 - V1.10.32\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/node_man/views/policy.py",
    "groupTitle": "policy"
  },
  {
    "type": "POST",
    "url": "/subscription/cmdb_subscription/",
    "title": "接收cmdb事件回调",
    "name": "cmdb_subscription",
    "group": "subscription",
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/subscription/views.py",
    "groupTitle": "subscription"
  },
  {
    "type": "POST",
    "url": "/subscription/collect_task_result_detail/",
    "title": "采集任务执行详细结果",
    "name": "collect_subscription_task_result_detail",
    "group": "subscription",
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/subscription/views.py",
    "groupTitle": "subscription"
  },
  {
    "type": "POST",
    "url": "/subscription/create/",
    "title": "创建订阅",
    "name": "create_subscription",
    "group": "subscription",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "scope",
            "description": "<p>事件订阅监听的范围</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "scope.bk_biz_id",
            "description": "<p>业务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scope.object_type",
            "description": "<p>CMDB对象类型，可选 <code>SERVICE</code>, <code>HOST</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scope.node_type",
            "description": "<p>CMDB节点类型，可选 <code>TOPO</code>, <code>INSTANCE</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "scope.nodes",
            "description": "<p>节点列表，根据 <code>object_type</code> 和 <code>node_type</code> 的不同，其数据结构也有所差异</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "steps",
            "description": "<p>事件订阅触发的动作列表</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "steps.id",
            "description": "<p>步骤标识符，在一个列表中不允许重复</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "steps.type",
            "description": "<p>步骤类型，可选 <code>AGENT</code>, <code>PLUGIN</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "steps.config",
            "description": "<p>步骤配置</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "steps.params",
            "description": "<p>步骤参数</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "target_hosts",
            "description": "<p>需要下发的目标机器列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求例子:",
          "content": "{\n    // 订阅节点，根据 object_type 和 node_type 的不同组合，数据结构有所差异\n    \"scope\": {\n        \"bk_biz_id\": 2,\n        \"object_type\": \"SERVICE\",  // 可选 SERVICE - 服务，HOST - 主机\n        \"node_type\": \"TOPO\",  // 可选 TOPO - 拓扑，INSTANCE - 实例\n        \"nodes\": [\n            // SERVICE-INSTANCE\n            {\n               \"id\": 12\n            },\n            // HOST-TOPO\n            {\n                \"bk_inst_id\": 33,   // 节点实例ID\n                \"bk_obj_id\": \"module\",  // 节点对象ID\n            },\n            // HOST-INSTANCE\n            {\n                \"ip\": \"10.0.0.1\",\n                \"bk_cloud_id\": 0,\n                \"bk_supplier_id\": 0,\n            }\n        ]\n    },\n    // 下发的目标机器，可以不传，默认取cmdb_instance.host下面的机器信息\n    \"target_hosts\": [{\n        \"ip\": \"10.0.0.1\",\n        \"bk_cloud_id\": 0,\n        \"bk_supplier_id\": 0\n    }],\n    \"steps\": [\n        {\n            \"id\": \"mysql_exporter\",  // 步骤标识符，在一个列表中不允许重复\n            \"type\": \"PLUGIN\",   // 步骤类型\n            \"config\": {\n                \"plugin_name\": \"mysql_exporter\",\n                \"plugin_version\": \"2.3\",\n                \"config_templates\": [\n                    {\n                        \"name\": \"config.yaml\",\n                        \"version\": \"2\",\n                    },\n                    {\n                        \"name\": \"env.yaml\",\n                        \"version\": \"2\",\n                    }\n                ]\n            },\n            \"params\": {\n                \"port_range\": \"9102,10000-10005,20103,30000-30100\",\n                \"context\": {\n                  // 输入常量\n                  \"--web.listen-host\": \"127.0.0.1\",\n                  // 使用 {{ }} 的方式引用节点管理内置变量\n                  \"--web.listen-port\": \"{{ control_info.port }}\"\n                }\n            }\n        },\n        {\n            \"id\": \"bkmonitorbeat\",  // 步骤标识符，在一个列表中不允许重复\n            \"type\": \"PLUGIN\",   // 步骤类型\n            \"config\": {\n                \"plugin_name\": \"bkmonitorbeat\",\n                \"plugin_version\": \"1.7.0\",\n                \"config_templates\": [\n                    {\n                        \"name\": \"bkmonitorbeat_exporter.yaml\",\n                        \"version\": \"1\",\n                    },\n                ]\n            },\n            \"params\": {\n                \"context\": {\n                    \"metrics_url\": \"XXX\",\n                    // 以下为动态数组用法，用于渲染需要做循环的节点管理内置变量\n                    \"labels\": {\n                        \"$for\": \"cmdb_instance.scopes\",\n                        \"$item\": \"scope\",\n                        \"$body\": {\n                            \"bk_target_ip\": \"{{ cmdb_instance.host.bk_host_innerip }}\",\n                            \"bk_target_cloud_id\": \"{{ cmdb_instance.host.bk_cloud_id }}\",\n                            \"bk_target_topo_level\": \"{{ scope.bk_obj_id }}\",\n                            \"bk_target_topo_id\": \"{{ scope.bk_inst_id }}\",\n                            \"bk_target_service_category_id\": \"{{ cmdb_instance.service.service_category_id }}\",\n                            \"bk_target_service_instance_id\": \"{{ cmdb_instance.service.id }}\",\n                            \"bk_collect_config_id\": 1\n                        }\n                    }\n                }\n            }\n        }\n    ]\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"result\": true,\n    \"data\": {\n        \"subscription_id\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/subscription/views.py",
    "groupTitle": "subscription"
  },
  {
    "type": "POST",
    "url": "/subscription/delete/",
    "title": "删除订阅",
    "name": "delete_subscription",
    "group": "subscription",
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/subscription/views.py",
    "groupTitle": "subscription"
  },
  {
    "type": "POST",
    "url": "/subscription/fetch_commands/",
    "title": "返回安装命令",
    "name": "fetch_commands",
    "group": "subscription",
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/subscription/views.py",
    "groupTitle": "subscription"
  },
  {
    "type": "POST",
    "url": "/get_gse_config/",
    "title": "获取配置",
    "name": "get_gse_config",
    "group": "subscription",
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/views.py",
    "groupTitle": "subscription"
  },
  {
    "type": "POST",
    "url": "/subscription/search_deploy_policy/",
    "title": "查询策略列表",
    "name": "list_deploy_policy",
    "group": "subscription",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": true,
            "field": "bk_biz_ids",
            "description": "<p>业务ID列表, 不传取全业务</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "conditions",
            "description": "<p>查询条件</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "conditions.key",
            "description": "<p>查询关键字，<code>query</code>表示多字段模糊搜索，目前仅支持<code>name</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "conditions.value",
            "description": "<p>查询值，单值查询</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": true,
            "field": "sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "[\"name\"",
              "\"plugin_name\"",
              "\"creator\"",
              "\"update_time\"",
              "\"nodes_scope\"",
              "\"bk_biz_scope\"]"
            ],
            "optional": false,
            "field": "...",
            "description": "<p>[sort.head] 排序字段</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "[\"ASC\"",
              "\"DEC\"]"
            ],
            "optional": true,
            "field": "sort.sort_type",
            "description": "<p>排序类型</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "pagesize",
            "description": "<p>分页大小</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"total\": 10,\n    \"list\": [\n        {\n            \"id\": 1,\n            \"name\": \"日志采集\",\n            \"plugin_name\": \"basereport\",\n            \"nodes_scope\": {\n                \"host_count\": 99,\n                \"node_count\": 123,\n            }\n            \"bk_biz_scope\": [1, 2, 3]\n            \"operator\": \"admin\",\n            \"updated_at\": \"2020-07-26 19:17:56\"\n        },\n        {\n            \"id\": 2,\n            \"name\": \"日志采集2\",\n            \"plugin_name\": \"basereport\",\n            \"nodes_scope\": {\n                \"host_count\": 80,\n                \"node_count\": 123,\n            }\n            \"bk_biz_scope\": [1, 2]\n            \"operator\": \"admin\",\n            \"updated_at\": \"2020-07-26 19:17:56\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/subscription/views.py",
    "groupTitle": "subscription"
  },
  {
    "type": "GET",
    "url": "/subscription/query_host_policy/",
    "title": "获取主机策略列表",
    "name": "query_host_policy",
    "group": "subscription",
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/subscription/views.py",
    "groupTitle": "subscription"
  },
  {
    "type": "GET",
    "url": "/subscription/query_host_subscriptions/",
    "title": "获取主机订阅列表",
    "name": "query_host_subscription_ids",
    "group": "subscription",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bk_host_innerip",
            "description": "<p>内网IP</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "bk_cloud_id",
            "description": "<p>云区域ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "bk_host_id",
            "description": "<p>CMDB主机ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "source_type",
            "description": "<p>类型，可选[default, subscription]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "[\n    {\n    id: 817,\n    source_type: \"subscription\",\n    source_id: \"93\",\n    name: \"bkunifylogbeat\",\n    version: \"1.10.58\",\n    status: \"RUNNING\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/subscription/views.py",
    "groupTitle": "subscription"
  },
  {
    "type": "POST",
    "url": "/subscription/instance_status/",
    "title": "查询订阅运行状态",
    "name": "query_instance_status",
    "group": "subscription",
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "[\n  {\n    \"subscription_id\": 7057,\n    \"instances\": [\n      {\n        \"instance_id\": \"host|instance|host|617672\",\n        \"status\": \"SUCCESS\",\n        \"create_time\": \"2021-01-03 23:04:31+0800\",\n        \"host_statuses\": [\n          {\n            \"name\": \"bkmonitorbeat\",\n            \"status\": \"RUNNING\",\n            \"version\": \"1.10.67\"\n          }\n        ],\n        \"instance_info\": {\n              \"host\": {\n            \"bk_biz_id\": 100700,\n            \"bk_host_id\": 617672,\n            \"bk_biz_name\": \"GameMatrix\",\n            \"bk_cloud_id\": 0,\n            \"bk_host_name\": \"\",\n            \"bk_cloud_name\": \"云区域ID\",\n            \"bk_host_innerip\": \"127.0.0.1\",\n            \"bk_supplier_account\": \"tencent\"\n          },\n          \"service\": {\n\n          }\n        },\n        \"running_task\": {\n          \"id\": 1623916,\n          \"is_auto_trigger\": true,\n        },\n        \"last_task\": {\n          \"id\": 1623916\n        }\n      }\n    ]\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/subscription/views.py",
    "groupTitle": "subscription"
  },
  {
    "type": "POST",
    "url": "/report_log/",
    "title": "上报日志",
    "name": "report_log",
    "group": "subscription",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "request",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数",
          "content": "{\n    \"task_id\": \"node_id\",\n    \"token\": \"\",\n    \"logs\": [\n        {\n            \"timestamp\": \"1580870937\",\n            \"level\": \"INFO\",\n            \"step\": \"check_deploy_result\",\n            \"log\": \"gse agent has been deployed successfully\",\n            \"status\": \"DONE\"\n        }\n    ]\n}",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/views.py",
    "groupTitle": "subscription"
  },
  {
    "type": "POST",
    "url": "/subscription/retry_node/",
    "title": "重试原子",
    "name": "retry_node",
    "group": "subscription",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "instance_id",
            "description": "<p>实例id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "subscription_id",
            "description": "<p>订阅id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "重试时请求参数",
          "content": "{\n    \"instance_id\": host|instance|host|127.0.0.1-0-0\n    \"subscription_id\": 123\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"retry_node_id\": \"6f48169ed1193574961757a57d03a778\",\n    \"retry_node_name\": \"安装\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/subscription/views.py",
    "groupTitle": "subscription"
  },
  {
    "type": "POST",
    "url": "/subscription/retry/",
    "title": "重试失败的任务",
    "name": "retry_subscription",
    "group": "subscription",
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/subscription/views.py",
    "groupTitle": "subscription"
  },
  {
    "type": "POST",
    "url": "/subscription/revoke/",
    "title": "终止正在执行的任务",
    "name": "revoke_subscription",
    "group": "subscription",
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/subscription/views.py",
    "groupTitle": "subscription"
  },
  {
    "type": "POST",
    "url": "/subscription/run/",
    "title": "执行订阅",
    "name": "run_subscription",
    "group": "subscription",
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/subscription/views.py",
    "groupTitle": "subscription"
  },
  {
    "type": "GET",
    "url": "/subscription/search_plugin_policy/",
    "title": "获取插件策略信息",
    "name": "search_plugin_policy",
    "group": "subscription",
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/subscription/views.py",
    "groupTitle": "subscription"
  },
  {
    "type": "POST",
    "url": "/subscription/statistic/",
    "title": "统计订阅任务数据",
    "name": "statistic",
    "group": "subscription",
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/subscription/views.py",
    "groupTitle": "subscription"
  },
  {
    "type": "POST",
    "url": "/subscription/check_task_ready/",
    "title": "查询任务是否已准备完成",
    "name": "subscription_check_task_ready",
    "group": "subscription",
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/subscription/views.py",
    "groupTitle": "subscription"
  },
  {
    "type": "POST",
    "url": "/subscription/info/",
    "title": "订阅详情",
    "name": "subscription_info",
    "group": "subscription",
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/subscription/views.py",
    "groupTitle": "subscription"
  },
  {
    "type": "POST",
    "url": "/subscription/switch/",
    "title": "订阅启停",
    "name": "subscription_switch",
    "group": "subscription",
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/subscription/views.py",
    "groupTitle": "subscription"
  },
  {
    "type": "POST",
    "url": "/subscription/task_result/",
    "title": "任务执行结果",
    "name": "subscription_task_result",
    "group": "subscription",
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/subscription/views.py",
    "groupTitle": "subscription"
  },
  {
    "type": "POST",
    "url": "/subscription/task_result_detail/",
    "title": "任务执行详细结果",
    "name": "subscription_task_result_detail",
    "group": "subscription",
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/subscription/views.py",
    "groupTitle": "subscription"
  },
  {
    "type": "POST",
    "url": "/subscription/update/",
    "title": "更新订阅",
    "name": "update_subscription",
    "group": "subscription",
    "version": "0.0.0",
    "filename": "/data/landun/workspace/frontend_eslint_fix/apps/backend/subscription/views.py",
    "groupTitle": "subscription"
  }
] });
