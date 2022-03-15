# -*- coding: utf-8 -*-
"""
TencentBlueKing is pleased to support the open source community by making 蓝鲸智云-节点管理(BlueKing-BK-NODEMAN) available.
Copyright (C) 2017-2022 THL A29 Limited, a Tencent company. All rights reserved.
Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
You may obtain a copy of the License at https://opensource.org/licenses/MIT
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
specific language governing permissions and limitations under the License.
"""
from apps.mock_data.common_unit import host
from apps.node_man import constants

# 操作类接口一般返回的是 task_id
OP_RESULT = {"task_id": "GSETASK:S:202111161138323563236795:143"}
AGENT_VERSION = "1.7.17"

GET_AGENT_ALIVE_STATUS_DATA = {
    f"{constants.DEFAULT_CLOUD}:{host.DEFAULT_IP}": {
        "ip": host.DEFAULT_IP,
        "bk_cloud_id": constants.DEFAULT_CLOUD,
        "bk_agent_alive": constants.BkAgentStatus.ALIVE.value,
    }
}

GET_AGENT_NOT_ALIVE_STATUS_DATA = {
    f"{constants.DEFAULT_CLOUD}:{host.DEFAULT_IP}": {
        "ip": host.DEFAULT_IP,
        "bk_cloud_id": constants.DEFAULT_CLOUD,
        "bk_agent_alive": constants.BkAgentStatus.NOT_ALIVE.value,
    }
}

GET_AGENT_INFO_DATA = {
    f"{constants.DEFAULT_CLOUD}:{host.DEFAULT_IP}": {
        "ip": host.DEFAULT_IP,
        "version": AGENT_VERSION,
        "bk_cloud_id": 0,
        "parent_ip": host.DEFAULT_IP,
        "parent_port": 50000,
    }
}

GET_PROC_OPERATE_RESULT = {
    f"{constants.DEFAULT_CLOUD}:{host.DEFAULT_IP}:nodeman:sub_870_host_1_host_exp002": {
        "content": '{\n   "value" : [\n      {\n         "funcID" : "",\n'
        '         "instanceID" : "",\n        '
        ' "procName" : "host_exp002",\n         "result" : "success",\n'
        '         "setupPath" : "/usr/local/gse/external_plugins/sub_870'
        '_host_1/host_exp002"\n      }\n   ]\n}\n',
        "error_code": 0,
        "error_msg": "success",
    }
}

GET_AGENT_STATE_LIST_DATA = [
    {
        "bk_agent_id": f"{constants.DEFAULT_CLOUD}:{host.DEFAULT_IP}",
        "bk_cloud_id": constants.DEFAULT_CLOUD,
        "version": AGENT_VERSION,
        "run_mode": 0,
        "status_code": constants.GseStatusCode.RUNNING.value,
    }
]

GET_AGENT_NOT_ALIVE_STATE_LIST_DATA = [
    {
        "bk_agent_id": f"{constants.DEFAULT_CLOUD}:{host.DEFAULT_IP}",
        "bk_cloud_id": constants.DEFAULT_CLOUD,
        "version": AGENT_VERSION,
        "run_mode": 0,
        "status_code": constants.GseStatusCode.STOPPED.value,
    }
]

GET_AGENT_INFO_LIST_DATA = [
    {
        "code": 0,
        "message": "OK",
        "bk_agent_id": f"{constants.DEFAULT_CLOUD}:{host.DEFAULT_IP}",
        "bk_cloud_id": constants.DEFAULT_CLOUD,
        "bk_host_ip": host.DEFAULT_IP,
        "bk_os_type": "linux",
        "report_time": 1632830304777,
        "parent_ip": host.DEFAULT_IP,
        "parent_port": 0,
        "version": AGENT_VERSION,
        "cpu_rate": 12.34,
        "mem_rate": 56.78,
        "start_time": 1632830300,
        "run_mode": 0,
        "status_code": constants.GseStatusCode.RUNNING.value,
        "status": "running",
        "last_status_code": constants.GseStatusCode.RUNNING.value,
        "last_status": "running",
        "remark": "",
    }
]
