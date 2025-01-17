# -*- coding: utf-8 -*-
"""
TencentBlueKing is pleased to support the open source community by making 蓝鲸智云-节点管理(BlueKing-BK-NODEMAN) available.
Copyright (C) 2017-2021 THL A29 Limited, a Tencent company. All rights reserved.
Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
You may obtain a copy of the License at https://opensource.org/licenses/MIT
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
specific language governing permissions and limitations under the License.
"""
# Generated by Django 2.2.8 on 2020-09-17 03:32

import django_mysql.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("node_man", "0019_auto_20200831_2116"),
    ]

    operations = [
        migrations.AddField(
            model_name="subscription",
            name="bk_biz_scope",
            field=django_mysql.models.JSONField(default=list, verbose_name="业务范围"),
        ),
        migrations.AddField(
            model_name="subscription",
            name="category",
            field=models.CharField(blank=True, db_index=True, max_length=32, null=True, verbose_name="订阅类别"),
        ),
        migrations.AddField(
            model_name="subscription",
            name="plugin_name",
            field=models.CharField(blank=True, db_index=True, max_length=64, null=True, verbose_name="插件名称"),
        ),
    ]
