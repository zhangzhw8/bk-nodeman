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
# Generated by Django 2.2.8 on 2021-03-10 02:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("node_man", "0029_auto_20210309_0916"),
    ]

    operations = [
        migrations.CreateModel(
            name="SubscriptionInstanceStatus",
            fields=[
                ("id", models.BigAutoField(primary_key=True, serialize=False)),
                ("subscription_instance_record_id", models.BigIntegerField(db_index=True, verbose_name="订阅实例ID")),
                (
                    "node_id",
                    models.CharField(blank=True, db_index=True, default="", max_length=50, verbose_name="Pipeline原子ID"),
                ),
                (
                    "status",
                    models.CharField(
                        choices=[
                            ("PENDING", "等待执行"),
                            ("RUNNING", "正在执行"),
                            ("SUCCESS", "执行成功"),
                            ("FAILED", "执行失败"),
                            ("PART_FAILED", "部分失败"),
                            ("TERMINATED", "已终止"),
                            ("REMOVED", "已移除"),
                        ],
                        default="RUNNING",
                        max_length=45,
                        verbose_name="任务状态",
                    ),
                ),
                ("log", models.TextField(verbose_name="日志内容")),
                ("update_time", models.DateTimeField(auto_now=True, db_index=True, verbose_name="更新时间")),
                ("create_time", models.DateTimeField(auto_now_add=True, db_index=True, verbose_name="创建时间")),
            ],
            options={
                "verbose_name": "订阅实例状态表",
                "verbose_name_plural": "订阅实例状态表",
            },
        ),
        migrations.AddField(
            model_name="subscriptioninstancerecord",
            name="start_pipeline_id",
            field=models.CharField(
                blank=True, db_index=True, default="", max_length=50, verbose_name="Start Pipeline ID"
            ),
        ),
        migrations.AddField(
            model_name="subscriptiontask",
            name="pipeline_id",
            field=models.CharField(blank=True, db_index=True, default="", max_length=50, verbose_name="Pipeline ID"),
        ),
    ]
