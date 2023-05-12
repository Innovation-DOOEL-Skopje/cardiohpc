/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 3840.0, "minX": 0.0, "maxY": 4576.0, "series": [{"data": [[0.0, 3840.0], [0.1, 3840.0], [0.2, 3840.0], [0.3, 3840.0], [0.4, 3861.0], [0.5, 3861.0], [0.6, 3861.0], [0.7, 3910.0], [0.8, 3910.0], [0.9, 3910.0], [1.0, 3919.0], [1.1, 3919.0], [1.2, 3919.0], [1.3, 3919.0], [1.4, 3924.0], [1.5, 3924.0], [1.6, 3924.0], [1.7, 3926.0], [1.8, 3926.0], [1.9, 3926.0], [2.0, 3932.0], [2.1, 3932.0], [2.2, 3932.0], [2.3, 3932.0], [2.4, 3933.0], [2.5, 3933.0], [2.6, 3933.0], [2.7, 3947.0], [2.8, 3947.0], [2.9, 3947.0], [3.0, 3949.0], [3.1, 3949.0], [3.2, 3949.0], [3.3, 3949.0], [3.4, 3950.0], [3.5, 3950.0], [3.6, 3950.0], [3.7, 3967.0], [3.8, 3967.0], [3.9, 3967.0], [4.0, 3969.0], [4.1, 3969.0], [4.2, 3969.0], [4.3, 3969.0], [4.4, 3970.0], [4.5, 3970.0], [4.6, 3970.0], [4.7, 3972.0], [4.8, 3972.0], [4.9, 3972.0], [5.0, 3973.0], [5.1, 3973.0], [5.2, 3973.0], [5.3, 3973.0], [5.4, 3979.0], [5.5, 3979.0], [5.6, 3979.0], [5.7, 3980.0], [5.8, 3980.0], [5.9, 3980.0], [6.0, 3986.0], [6.1, 3986.0], [6.2, 3986.0], [6.3, 3986.0], [6.4, 3986.0], [6.5, 3986.0], [6.6, 3986.0], [6.7, 3987.0], [6.8, 3987.0], [6.9, 3987.0], [7.0, 3988.0], [7.1, 3988.0], [7.2, 3988.0], [7.3, 3988.0], [7.4, 3991.0], [7.5, 3991.0], [7.6, 3991.0], [7.7, 3994.0], [7.8, 3994.0], [7.9, 3994.0], [8.0, 3997.0], [8.1, 3997.0], [8.2, 3997.0], [8.3, 3997.0], [8.4, 4000.0], [8.5, 4000.0], [8.6, 4000.0], [8.7, 4001.0], [8.8, 4001.0], [8.9, 4001.0], [9.0, 4002.0], [9.1, 4002.0], [9.2, 4002.0], [9.3, 4002.0], [9.4, 4002.0], [9.5, 4002.0], [9.6, 4002.0], [9.7, 4002.0], [9.8, 4002.0], [9.9, 4002.0], [10.0, 4004.0], [10.1, 4004.0], [10.2, 4004.0], [10.3, 4004.0], [10.4, 4006.0], [10.5, 4006.0], [10.6, 4006.0], [10.7, 4007.0], [10.8, 4007.0], [10.9, 4007.0], [11.0, 4012.0], [11.1, 4012.0], [11.2, 4012.0], [11.3, 4012.0], [11.4, 4013.0], [11.5, 4013.0], [11.6, 4013.0], [11.7, 4015.0], [11.8, 4015.0], [11.9, 4015.0], [12.0, 4015.0], [12.1, 4018.0], [12.2, 4018.0], [12.3, 4018.0], [12.4, 4025.0], [12.5, 4025.0], [12.6, 4025.0], [12.7, 4027.0], [12.8, 4027.0], [12.9, 4027.0], [13.0, 4027.0], [13.1, 4030.0], [13.2, 4030.0], [13.3, 4030.0], [13.4, 4031.0], [13.5, 4031.0], [13.6, 4031.0], [13.7, 4036.0], [13.8, 4036.0], [13.9, 4036.0], [14.0, 4036.0], [14.1, 4036.0], [14.2, 4036.0], [14.3, 4036.0], [14.4, 4037.0], [14.5, 4037.0], [14.6, 4037.0], [14.7, 4038.0], [14.8, 4038.0], [14.9, 4038.0], [15.0, 4038.0], [15.1, 4039.0], [15.2, 4039.0], [15.3, 4039.0], [15.4, 4039.0], [15.5, 4039.0], [15.6, 4039.0], [15.7, 4045.0], [15.8, 4045.0], [15.9, 4045.0], [16.0, 4045.0], [16.1, 4048.0], [16.2, 4048.0], [16.3, 4048.0], [16.4, 4051.0], [16.5, 4051.0], [16.6, 4051.0], [16.7, 4054.0], [16.8, 4054.0], [16.9, 4054.0], [17.0, 4054.0], [17.1, 4054.0], [17.2, 4054.0], [17.3, 4054.0], [17.4, 4054.0], [17.5, 4054.0], [17.6, 4054.0], [17.7, 4056.0], [17.8, 4056.0], [17.9, 4056.0], [18.0, 4058.0], [18.1, 4058.0], [18.2, 4058.0], [18.3, 4058.0], [18.4, 4059.0], [18.5, 4059.0], [18.6, 4059.0], [18.7, 4061.0], [18.8, 4061.0], [18.9, 4061.0], [19.0, 4064.0], [19.1, 4064.0], [19.2, 4064.0], [19.3, 4064.0], [19.4, 4065.0], [19.5, 4065.0], [19.6, 4065.0], [19.7, 4071.0], [19.8, 4071.0], [19.9, 4071.0], [20.0, 4073.0], [20.1, 4073.0], [20.2, 4073.0], [20.3, 4073.0], [20.4, 4074.0], [20.5, 4074.0], [20.6, 4074.0], [20.7, 4075.0], [20.8, 4075.0], [20.9, 4075.0], [21.0, 4076.0], [21.1, 4076.0], [21.2, 4076.0], [21.3, 4076.0], [21.4, 4076.0], [21.5, 4076.0], [21.6, 4076.0], [21.7, 4077.0], [21.8, 4077.0], [21.9, 4077.0], [22.0, 4077.0], [22.1, 4077.0], [22.2, 4077.0], [22.3, 4077.0], [22.4, 4077.0], [22.5, 4077.0], [22.6, 4077.0], [22.7, 4078.0], [22.8, 4078.0], [22.9, 4078.0], [23.0, 4079.0], [23.1, 4079.0], [23.2, 4079.0], [23.3, 4079.0], [23.4, 4080.0], [23.5, 4080.0], [23.6, 4080.0], [23.7, 4081.0], [23.8, 4081.0], [23.9, 4081.0], [24.0, 4082.0], [24.1, 4082.0], [24.2, 4082.0], [24.3, 4082.0], [24.4, 4083.0], [24.5, 4083.0], [24.6, 4083.0], [24.7, 4083.0], [24.8, 4083.0], [24.9, 4083.0], [25.0, 4084.0], [25.1, 4084.0], [25.2, 4084.0], [25.3, 4084.0], [25.4, 4084.0], [25.5, 4084.0], [25.6, 4084.0], [25.7, 4084.0], [25.8, 4084.0], [25.9, 4084.0], [26.0, 4085.0], [26.1, 4085.0], [26.2, 4085.0], [26.3, 4085.0], [26.4, 4091.0], [26.5, 4091.0], [26.6, 4091.0], [26.7, 4092.0], [26.8, 4092.0], [26.9, 4092.0], [27.0, 4095.0], [27.1, 4095.0], [27.2, 4095.0], [27.3, 4095.0], [27.4, 4096.0], [27.5, 4096.0], [27.6, 4096.0], [27.7, 4097.0], [27.8, 4097.0], [27.9, 4097.0], [28.0, 4097.0], [28.1, 4097.0], [28.2, 4097.0], [28.3, 4097.0], [28.4, 4098.0], [28.5, 4098.0], [28.6, 4098.0], [28.7, 4098.0], [28.8, 4098.0], [28.9, 4098.0], [29.0, 4099.0], [29.1, 4099.0], [29.2, 4099.0], [29.3, 4099.0], [29.4, 4099.0], [29.5, 4099.0], [29.6, 4099.0], [29.7, 4100.0], [29.8, 4100.0], [29.9, 4100.0], [30.0, 4100.0], [30.1, 4100.0], [30.2, 4100.0], [30.3, 4100.0], [30.4, 4104.0], [30.5, 4104.0], [30.6, 4104.0], [30.7, 4105.0], [30.8, 4105.0], [30.9, 4105.0], [31.0, 4107.0], [31.1, 4107.0], [31.2, 4107.0], [31.3, 4107.0], [31.4, 4108.0], [31.5, 4108.0], [31.6, 4108.0], [31.7, 4111.0], [31.8, 4111.0], [31.9, 4111.0], [32.0, 4113.0], [32.1, 4113.0], [32.2, 4113.0], [32.3, 4113.0], [32.4, 4114.0], [32.5, 4114.0], [32.6, 4114.0], [32.7, 4114.0], [32.8, 4114.0], [32.9, 4114.0], [33.0, 4114.0], [33.1, 4114.0], [33.2, 4114.0], [33.3, 4114.0], [33.4, 4115.0], [33.5, 4115.0], [33.6, 4115.0], [33.7, 4115.0], [33.8, 4115.0], [33.9, 4115.0], [34.0, 4116.0], [34.1, 4116.0], [34.2, 4116.0], [34.3, 4116.0], [34.4, 4117.0], [34.5, 4117.0], [34.6, 4117.0], [34.7, 4117.0], [34.8, 4117.0], [34.9, 4117.0], [35.0, 4119.0], [35.1, 4119.0], [35.2, 4119.0], [35.3, 4119.0], [35.4, 4120.0], [35.5, 4120.0], [35.6, 4120.0], [35.7, 4120.0], [35.8, 4120.0], [35.9, 4120.0], [36.0, 4120.0], [36.1, 4120.0], [36.2, 4120.0], [36.3, 4120.0], [36.4, 4121.0], [36.5, 4121.0], [36.6, 4121.0], [36.7, 4121.0], [36.8, 4121.0], [36.9, 4121.0], [37.0, 4122.0], [37.1, 4122.0], [37.2, 4122.0], [37.3, 4122.0], [37.4, 4123.0], [37.5, 4123.0], [37.6, 4123.0], [37.7, 4124.0], [37.8, 4124.0], [37.9, 4124.0], [38.0, 4124.0], [38.1, 4124.0], [38.2, 4124.0], [38.3, 4124.0], [38.4, 4124.0], [38.5, 4124.0], [38.6, 4124.0], [38.7, 4125.0], [38.8, 4125.0], [38.9, 4125.0], [39.0, 4127.0], [39.1, 4127.0], [39.2, 4127.0], [39.3, 4127.0], [39.4, 4129.0], [39.5, 4129.0], [39.6, 4129.0], [39.7, 4130.0], [39.8, 4130.0], [39.9, 4130.0], [40.0, 4130.0], [40.1, 4130.0], [40.2, 4130.0], [40.3, 4130.0], [40.4, 4133.0], [40.5, 4133.0], [40.6, 4133.0], [40.7, 4133.0], [40.8, 4133.0], [40.9, 4133.0], [41.0, 4134.0], [41.1, 4134.0], [41.2, 4134.0], [41.3, 4134.0], [41.4, 4134.0], [41.5, 4134.0], [41.6, 4134.0], [41.7, 4135.0], [41.8, 4135.0], [41.9, 4135.0], [42.0, 4135.0], [42.1, 4135.0], [42.2, 4135.0], [42.3, 4135.0], [42.4, 4136.0], [42.5, 4136.0], [42.6, 4136.0], [42.7, 4138.0], [42.8, 4138.0], [42.9, 4138.0], [43.0, 4140.0], [43.1, 4140.0], [43.2, 4140.0], [43.3, 4140.0], [43.4, 4141.0], [43.5, 4141.0], [43.6, 4141.0], [43.7, 4142.0], [43.8, 4142.0], [43.9, 4142.0], [44.0, 4142.0], [44.1, 4142.0], [44.2, 4142.0], [44.3, 4142.0], [44.4, 4142.0], [44.5, 4142.0], [44.6, 4142.0], [44.7, 4144.0], [44.8, 4144.0], [44.9, 4144.0], [45.0, 4145.0], [45.1, 4145.0], [45.2, 4145.0], [45.3, 4145.0], [45.4, 4146.0], [45.5, 4146.0], [45.6, 4146.0], [45.7, 4148.0], [45.8, 4148.0], [45.9, 4148.0], [46.0, 4150.0], [46.1, 4150.0], [46.2, 4150.0], [46.3, 4150.0], [46.4, 4151.0], [46.5, 4151.0], [46.6, 4151.0], [46.7, 4153.0], [46.8, 4153.0], [46.9, 4153.0], [47.0, 4153.0], [47.1, 4153.0], [47.2, 4153.0], [47.3, 4153.0], [47.4, 4154.0], [47.5, 4154.0], [47.6, 4154.0], [47.7, 4154.0], [47.8, 4154.0], [47.9, 4154.0], [48.0, 4154.0], [48.1, 4154.0], [48.2, 4154.0], [48.3, 4154.0], [48.4, 4155.0], [48.5, 4155.0], [48.6, 4155.0], [48.7, 4156.0], [48.8, 4156.0], [48.9, 4156.0], [49.0, 4156.0], [49.1, 4156.0], [49.2, 4156.0], [49.3, 4156.0], [49.4, 4160.0], [49.5, 4160.0], [49.6, 4160.0], [49.7, 4160.0], [49.8, 4160.0], [49.9, 4160.0], [50.0, 4161.0], [50.1, 4161.0], [50.2, 4161.0], [50.3, 4161.0], [50.4, 4161.0], [50.5, 4161.0], [50.6, 4161.0], [50.7, 4162.0], [50.8, 4162.0], [50.9, 4162.0], [51.0, 4162.0], [51.1, 4162.0], [51.2, 4162.0], [51.3, 4162.0], [51.4, 4164.0], [51.5, 4164.0], [51.6, 4164.0], [51.7, 4164.0], [51.8, 4164.0], [51.9, 4164.0], [52.0, 4165.0], [52.1, 4165.0], [52.2, 4165.0], [52.3, 4165.0], [52.4, 4165.0], [52.5, 4165.0], [52.6, 4165.0], [52.7, 4165.0], [52.8, 4165.0], [52.9, 4165.0], [53.0, 4167.0], [53.1, 4167.0], [53.2, 4167.0], [53.3, 4167.0], [53.4, 4167.0], [53.5, 4167.0], [53.6, 4167.0], [53.7, 4169.0], [53.8, 4169.0], [53.9, 4169.0], [54.0, 4170.0], [54.1, 4170.0], [54.2, 4170.0], [54.3, 4170.0], [54.4, 4172.0], [54.5, 4172.0], [54.6, 4172.0], [54.7, 4172.0], [54.8, 4172.0], [54.9, 4172.0], [55.0, 4173.0], [55.1, 4173.0], [55.2, 4173.0], [55.3, 4173.0], [55.4, 4174.0], [55.5, 4174.0], [55.6, 4174.0], [55.7, 4174.0], [55.8, 4174.0], [55.9, 4174.0], [56.0, 4174.0], [56.1, 4174.0], [56.2, 4174.0], [56.3, 4174.0], [56.4, 4175.0], [56.5, 4175.0], [56.6, 4175.0], [56.7, 4176.0], [56.8, 4176.0], [56.9, 4176.0], [57.0, 4176.0], [57.1, 4176.0], [57.2, 4176.0], [57.3, 4176.0], [57.4, 4176.0], [57.5, 4176.0], [57.6, 4176.0], [57.7, 4178.0], [57.8, 4178.0], [57.9, 4178.0], [58.0, 4179.0], [58.1, 4179.0], [58.2, 4179.0], [58.3, 4179.0], [58.4, 4179.0], [58.5, 4179.0], [58.6, 4179.0], [58.7, 4180.0], [58.8, 4180.0], [58.9, 4180.0], [59.0, 4181.0], [59.1, 4181.0], [59.2, 4181.0], [59.3, 4181.0], [59.4, 4181.0], [59.5, 4181.0], [59.6, 4181.0], [59.7, 4181.0], [59.8, 4181.0], [59.9, 4181.0], [60.0, 4183.0], [60.1, 4183.0], [60.2, 4183.0], [60.3, 4183.0], [60.4, 4184.0], [60.5, 4184.0], [60.6, 4184.0], [60.7, 4185.0], [60.8, 4185.0], [60.9, 4185.0], [61.0, 4185.0], [61.1, 4187.0], [61.2, 4187.0], [61.3, 4187.0], [61.4, 4188.0], [61.5, 4188.0], [61.6, 4188.0], [61.7, 4190.0], [61.8, 4190.0], [61.9, 4190.0], [62.0, 4190.0], [62.1, 4190.0], [62.2, 4190.0], [62.3, 4190.0], [62.4, 4190.0], [62.5, 4190.0], [62.6, 4190.0], [62.7, 4192.0], [62.8, 4192.0], [62.9, 4192.0], [63.0, 4192.0], [63.1, 4192.0], [63.2, 4192.0], [63.3, 4192.0], [63.4, 4193.0], [63.5, 4193.0], [63.6, 4193.0], [63.7, 4194.0], [63.8, 4194.0], [63.9, 4194.0], [64.0, 4194.0], [64.1, 4194.0], [64.2, 4194.0], [64.3, 4194.0], [64.4, 4194.0], [64.5, 4194.0], [64.6, 4194.0], [64.7, 4197.0], [64.8, 4197.0], [64.9, 4197.0], [65.0, 4197.0], [65.1, 4197.0], [65.2, 4197.0], [65.3, 4197.0], [65.4, 4199.0], [65.5, 4199.0], [65.6, 4199.0], [65.7, 4200.0], [65.8, 4200.0], [65.9, 4200.0], [66.0, 4200.0], [66.1, 4202.0], [66.2, 4202.0], [66.3, 4202.0], [66.4, 4202.0], [66.5, 4202.0], [66.6, 4202.0], [66.7, 4205.0], [66.8, 4205.0], [66.9, 4205.0], [67.0, 4205.0], [67.1, 4206.0], [67.2, 4206.0], [67.3, 4206.0], [67.4, 4207.0], [67.5, 4207.0], [67.6, 4207.0], [67.7, 4207.0], [67.8, 4207.0], [67.9, 4207.0], [68.0, 4207.0], [68.1, 4207.0], [68.2, 4207.0], [68.3, 4207.0], [68.4, 4208.0], [68.5, 4208.0], [68.6, 4208.0], [68.7, 4208.0], [68.8, 4208.0], [68.9, 4208.0], [69.0, 4208.0], [69.1, 4209.0], [69.2, 4209.0], [69.3, 4209.0], [69.4, 4211.0], [69.5, 4211.0], [69.6, 4211.0], [69.7, 4211.0], [69.8, 4211.0], [69.9, 4211.0], [70.0, 4211.0], [70.1, 4212.0], [70.2, 4212.0], [70.3, 4212.0], [70.4, 4213.0], [70.5, 4213.0], [70.6, 4213.0], [70.7, 4214.0], [70.8, 4214.0], [70.9, 4214.0], [71.0, 4214.0], [71.1, 4214.0], [71.2, 4214.0], [71.3, 4214.0], [71.4, 4215.0], [71.5, 4215.0], [71.6, 4215.0], [71.7, 4216.0], [71.8, 4216.0], [71.9, 4216.0], [72.0, 4218.0], [72.1, 4218.0], [72.2, 4218.0], [72.3, 4218.0], [72.4, 4219.0], [72.5, 4219.0], [72.6, 4219.0], [72.7, 4221.0], [72.8, 4221.0], [72.9, 4221.0], [73.0, 4223.0], [73.1, 4223.0], [73.2, 4223.0], [73.3, 4223.0], [73.4, 4223.0], [73.5, 4223.0], [73.6, 4223.0], [73.7, 4224.0], [73.8, 4224.0], [73.9, 4224.0], [74.0, 4225.0], [74.1, 4225.0], [74.2, 4225.0], [74.3, 4225.0], [74.4, 4226.0], [74.5, 4226.0], [74.6, 4226.0], [74.7, 4228.0], [74.8, 4228.0], [74.9, 4228.0], [75.0, 4228.0], [75.1, 4228.0], [75.2, 4228.0], [75.3, 4228.0], [75.4, 4229.0], [75.5, 4229.0], [75.6, 4229.0], [75.7, 4229.0], [75.8, 4229.0], [75.9, 4229.0], [76.0, 4230.0], [76.1, 4230.0], [76.2, 4230.0], [76.3, 4230.0], [76.4, 4232.0], [76.5, 4232.0], [76.6, 4232.0], [76.7, 4234.0], [76.8, 4234.0], [76.9, 4234.0], [77.0, 4235.0], [77.1, 4235.0], [77.2, 4235.0], [77.3, 4235.0], [77.4, 4237.0], [77.5, 4237.0], [77.6, 4237.0], [77.7, 4237.0], [77.8, 4237.0], [77.9, 4237.0], [78.0, 4238.0], [78.1, 4238.0], [78.2, 4238.0], [78.3, 4238.0], [78.4, 4241.0], [78.5, 4241.0], [78.6, 4241.0], [78.7, 4242.0], [78.8, 4242.0], [78.9, 4242.0], [79.0, 4242.0], [79.1, 4242.0], [79.2, 4242.0], [79.3, 4242.0], [79.4, 4242.0], [79.5, 4242.0], [79.6, 4242.0], [79.7, 4242.0], [79.8, 4242.0], [79.9, 4242.0], [80.0, 4243.0], [80.1, 4243.0], [80.2, 4243.0], [80.3, 4243.0], [80.4, 4243.0], [80.5, 4243.0], [80.6, 4243.0], [80.7, 4243.0], [80.8, 4243.0], [80.9, 4243.0], [81.0, 4245.0], [81.1, 4245.0], [81.2, 4245.0], [81.3, 4245.0], [81.4, 4245.0], [81.5, 4245.0], [81.6, 4245.0], [81.7, 4245.0], [81.8, 4245.0], [81.9, 4245.0], [82.0, 4246.0], [82.1, 4246.0], [82.2, 4246.0], [82.3, 4246.0], [82.4, 4248.0], [82.5, 4248.0], [82.6, 4248.0], [82.7, 4249.0], [82.8, 4249.0], [82.9, 4249.0], [83.0, 4251.0], [83.1, 4251.0], [83.2, 4251.0], [83.3, 4251.0], [83.4, 4252.0], [83.5, 4252.0], [83.6, 4252.0], [83.7, 4253.0], [83.8, 4253.0], [83.9, 4253.0], [84.0, 4259.0], [84.1, 4259.0], [84.2, 4259.0], [84.3, 4259.0], [84.4, 4261.0], [84.5, 4261.0], [84.6, 4261.0], [84.7, 4261.0], [84.8, 4261.0], [84.9, 4261.0], [85.0, 4263.0], [85.1, 4263.0], [85.2, 4263.0], [85.3, 4263.0], [85.4, 4263.0], [85.5, 4263.0], [85.6, 4263.0], [85.7, 4264.0], [85.8, 4264.0], [85.9, 4264.0], [86.0, 4265.0], [86.1, 4265.0], [86.2, 4265.0], [86.3, 4265.0], [86.4, 4268.0], [86.5, 4268.0], [86.6, 4268.0], [86.7, 4269.0], [86.8, 4269.0], [86.9, 4269.0], [87.0, 4269.0], [87.1, 4269.0], [87.2, 4269.0], [87.3, 4269.0], [87.4, 4272.0], [87.5, 4272.0], [87.6, 4272.0], [87.7, 4272.0], [87.8, 4272.0], [87.9, 4272.0], [88.0, 4278.0], [88.1, 4278.0], [88.2, 4278.0], [88.3, 4278.0], [88.4, 4279.0], [88.5, 4279.0], [88.6, 4279.0], [88.7, 4280.0], [88.8, 4280.0], [88.9, 4280.0], [89.0, 4281.0], [89.1, 4281.0], [89.2, 4281.0], [89.3, 4281.0], [89.4, 4284.0], [89.5, 4284.0], [89.6, 4284.0], [89.7, 4285.0], [89.8, 4285.0], [89.9, 4285.0], [90.0, 4288.0], [90.1, 4288.0], [90.2, 4288.0], [90.3, 4288.0], [90.4, 4290.0], [90.5, 4290.0], [90.6, 4290.0], [90.7, 4293.0], [90.8, 4293.0], [90.9, 4293.0], [91.0, 4295.0], [91.1, 4295.0], [91.2, 4295.0], [91.3, 4295.0], [91.4, 4300.0], [91.5, 4300.0], [91.6, 4300.0], [91.7, 4300.0], [91.8, 4300.0], [91.9, 4300.0], [92.0, 4301.0], [92.1, 4301.0], [92.2, 4301.0], [92.3, 4301.0], [92.4, 4305.0], [92.5, 4305.0], [92.6, 4305.0], [92.7, 4310.0], [92.8, 4310.0], [92.9, 4310.0], [93.0, 4311.0], [93.1, 4311.0], [93.2, 4311.0], [93.3, 4311.0], [93.4, 4316.0], [93.5, 4316.0], [93.6, 4316.0], [93.7, 4329.0], [93.8, 4329.0], [93.9, 4329.0], [94.0, 4331.0], [94.1, 4331.0], [94.2, 4331.0], [94.3, 4331.0], [94.4, 4334.0], [94.5, 4334.0], [94.6, 4334.0], [94.7, 4353.0], [94.8, 4353.0], [94.9, 4353.0], [95.0, 4358.0], [95.1, 4358.0], [95.2, 4358.0], [95.3, 4358.0], [95.4, 4364.0], [95.5, 4364.0], [95.6, 4364.0], [95.7, 4373.0], [95.8, 4373.0], [95.9, 4373.0], [96.0, 4382.0], [96.1, 4382.0], [96.2, 4382.0], [96.3, 4382.0], [96.4, 4384.0], [96.5, 4384.0], [96.6, 4384.0], [96.7, 4390.0], [96.8, 4390.0], [96.9, 4390.0], [97.0, 4401.0], [97.1, 4401.0], [97.2, 4401.0], [97.3, 4401.0], [97.4, 4404.0], [97.5, 4404.0], [97.6, 4404.0], [97.7, 4414.0], [97.8, 4414.0], [97.9, 4414.0], [98.0, 4414.0], [98.1, 4414.0], [98.2, 4414.0], [98.3, 4414.0], [98.4, 4415.0], [98.5, 4415.0], [98.6, 4415.0], [98.7, 4443.0], [98.8, 4443.0], [98.9, 4443.0], [99.0, 4453.0], [99.1, 4453.0], [99.2, 4453.0], [99.3, 4453.0], [99.4, 4490.0], [99.5, 4490.0], [99.6, 4490.0], [99.7, 4576.0], [99.8, 4576.0], [99.9, 4576.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 3800.0, "maxY": 108.0, "series": [{"data": [[4100.0, 108.0], [4200.0, 77.0], [4300.0, 17.0], [4400.0, 8.0], [4500.0, 1.0], [3800.0, 2.0], [3900.0, 23.0], [4000.0, 64.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 300.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 300.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 300.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 5.5, "minX": 1.6830501E12, "maxY": 277.0, "series": [{"data": [[1.6830504E12, 5.5], [1.6830501E12, 277.0], [1.68305028E12, 104.0], [1.68305016E12, 226.0], [1.68305034E12, 42.0], [1.68305022E12, 166.5]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6830504E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 3840.0, "minX": 1.0, "maxY": 4576.0, "series": [{"data": [[2.0, 3926.0], [3.0, 4130.0], [4.0, 4142.0], [5.0, 4039.0], [6.0, 4242.0], [7.0, 4130.0], [8.0, 4295.0], [9.0, 4288.0], [10.0, 4174.0], [11.0, 4134.0], [12.0, 4174.0], [13.0, 4300.0], [14.0, 4202.0], [15.0, 4211.0], [16.0, 4225.0], [17.0, 4300.0], [18.0, 4241.0], [19.0, 4083.0], [20.0, 4117.0], [21.0, 4144.0], [22.0, 4075.0], [23.0, 4242.0], [24.0, 4002.0], [25.0, 4120.0], [26.0, 3986.0], [27.0, 4185.0], [28.0, 4064.0], [29.0, 4212.0], [30.0, 4230.0], [31.0, 4007.0], [33.0, 4051.0], [32.0, 4114.0], [35.0, 4036.0], [34.0, 4107.0], [37.0, 4197.0], [36.0, 4138.0], [39.0, 4113.0], [38.0, 4099.0], [41.0, 4235.0], [40.0, 4150.0], [43.0, 4108.0], [42.0, 4155.0], [45.0, 3979.0], [44.0, 4151.0], [47.0, 4076.0], [46.0, 4181.0], [49.0, 4084.0], [48.0, 4390.0], [51.0, 4124.0], [50.0, 3933.0], [53.0, 4243.0], [52.0, 4121.0], [55.0, 4223.0], [54.0, 4153.0], [57.0, 3861.0], [56.0, 4197.0], [59.0, 4078.0], [58.0, 4129.0], [61.0, 4015.0], [60.0, 4214.0], [63.0, 3994.0], [62.0, 4097.0], [67.0, 4165.0], [66.0, 4013.0], [65.0, 4414.0], [64.0, 4140.0], [71.0, 4170.0], [70.0, 4214.0], [69.0, 3997.0], [68.0, 4039.0], [75.0, 4245.0], [74.0, 4199.0], [73.0, 4114.0], [72.0, 4253.0], [79.0, 4290.0], [78.0, 4165.0], [77.0, 4373.0], [76.0, 3947.0], [83.0, 4208.0], [82.0, 4117.0], [81.0, 4142.0], [80.0, 4384.0], [87.0, 3840.0], [86.0, 4208.0], [85.0, 4145.0], [84.0, 4265.0], [91.0, 4073.0], [90.0, 4122.0], [89.0, 4243.0], [88.0, 4301.0], [95.0, 4237.0], [94.0, 4261.0], [93.0, 3973.0], [92.0, 4154.0], [99.0, 4079.0], [98.0, 4002.0], [97.0, 4284.0], [96.0, 4077.0], [103.0, 4285.0], [102.0, 4030.0], [101.0, 4154.0], [100.0, 4037.0], [107.0, 4153.0], [106.0, 4115.0], [105.0, 4085.0], [104.0, 4206.0], [111.0, 4098.0], [110.0, 4116.0], [109.0, 4081.0], [108.0, 4248.0], [115.0, 4135.0], [114.0, 4114.0], [113.0, 4228.0], [112.0, 4136.0], [119.0, 4134.0], [118.0, 3970.0], [117.0, 4259.0], [116.0, 4226.0], [123.0, 4141.0], [122.0, 4179.0], [121.0, 4100.0], [120.0, 4162.0], [127.0, 4173.0], [126.0, 4099.0], [125.0, 4133.0], [124.0, 4038.0], [135.0, 4004.0], [134.0, 4124.0], [133.0, 4252.0], [132.0, 4054.0], [131.0, 3972.0], [130.0, 3987.0], [129.0, 4172.0], [128.0, 4161.0], [143.0, 4115.0], [142.0, 4194.0], [141.0, 4263.0], [140.0, 4353.0], [139.0, 4181.0], [138.0, 4278.0], [137.0, 4080.0], [136.0, 4234.0], [151.0, 4180.0], [150.0, 4331.0], [149.0, 4190.0], [148.0, 4209.0], [147.0, 4268.0], [146.0, 4077.0], [145.0, 4174.0], [144.0, 4249.0], [159.0, 4125.0], [158.0, 4160.0], [157.0, 4207.0], [156.0, 4329.0], [155.0, 4135.0], [154.0, 4054.0], [153.0, 4205.0], [152.0, 4148.0], [167.0, 4272.0], [166.0, 4358.0], [165.0, 4156.0], [164.0, 4161.0], [163.0, 4269.0], [162.0, 4006.0], [161.0, 4364.0], [160.0, 3969.0], [175.0, 4048.0], [174.0, 3924.0], [173.0, 4059.0], [172.0, 4169.0], [171.0, 4192.0], [170.0, 4084.0], [169.0, 4056.0], [168.0, 3950.0], [183.0, 4002.0], [182.0, 4181.0], [181.0, 4263.0], [180.0, 4251.0], [179.0, 4098.0], [178.0, 4202.0], [177.0, 4164.0], [176.0, 4242.0], [191.0, 4084.0], [190.0, 4334.0], [189.0, 4190.0], [188.0, 3932.0], [187.0, 4224.0], [186.0, 3967.0], [185.0, 4096.0], [184.0, 4213.0], [199.0, 4243.0], [198.0, 4264.0], [197.0, 4219.0], [196.0, 4097.0], [195.0, 4175.0], [194.0, 4065.0], [193.0, 4184.0], [192.0, 4269.0], [207.0, 3980.0], [206.0, 4160.0], [205.0, 4083.0], [204.0, 4167.0], [203.0, 4215.0], [202.0, 4229.0], [201.0, 4071.0], [200.0, 4074.0], [215.0, 4229.0], [214.0, 4238.0], [213.0, 4200.0], [212.0, 4165.0], [211.0, 4316.0], [210.0, 4120.0], [209.0, 4105.0], [208.0, 4100.0], [223.0, 4054.0], [222.0, 4061.0], [221.0, 4246.0], [220.0, 4245.0], [219.0, 4228.0], [218.0, 4077.0], [217.0, 4311.0], [216.0, 4162.0], [231.0, 4156.0], [230.0, 3919.0], [229.0, 4211.0], [228.0, 4092.0], [227.0, 4207.0], [226.0, 4218.0], [225.0, 4187.0], [224.0, 4012.0], [239.0, 4178.0], [238.0, 4310.0], [237.0, 4025.0], [236.0, 4167.0], [235.0, 4036.0], [234.0, 4190.0], [233.0, 3991.0], [232.0, 4133.0], [247.0, 4404.0], [246.0, 4104.0], [245.0, 4172.0], [244.0, 4216.0], [243.0, 4001.0], [242.0, 4121.0], [241.0, 4111.0], [240.0, 4142.0], [255.0, 4221.0], [254.0, 4179.0], [253.0, 4127.0], [252.0, 4124.0], [251.0, 4095.0], [250.0, 4453.0], [249.0, 4443.0], [248.0, 4281.0], [270.0, 4192.0], [271.0, 4576.0], [269.0, 4490.0], [268.0, 3910.0], [267.0, 4245.0], [266.0, 4232.0], [265.0, 4401.0], [264.0, 4045.0], [263.0, 4031.0], [257.0, 3988.0], [256.0, 4176.0], [259.0, 4194.0], [258.0, 4154.0], [262.0, 3986.0], [261.0, 4119.0], [260.0, 4076.0], [286.0, 4293.0], [287.0, 4018.0], [285.0, 4242.0], [284.0, 4082.0], [283.0, 4261.0], [282.0, 4176.0], [281.0, 4176.0], [280.0, 4146.0], [279.0, 3949.0], [273.0, 4223.0], [272.0, 4414.0], [275.0, 4305.0], [274.0, 4207.0], [278.0, 4123.0], [277.0, 4091.0], [276.0, 4188.0], [296.0, 4120.0], [300.0, 4027.0], [299.0, 4415.0], [298.0, 4183.0], [297.0, 4193.0], [295.0, 4000.0], [294.0, 4194.0], [293.0, 4279.0], [292.0, 4164.0], [291.0, 4058.0], [290.0, 4237.0], [289.0, 4280.0], [288.0, 4272.0], [1.0, 4382.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[150.5, 4156.96666666667]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 84.33333333333333, "minX": 1.6830501E12, "maxY": 671.2833333333333, "series": [{"data": [[1.6830504E12, 104.88333333333334], [1.6830501E12, 493.03333333333336], [1.68305028E12, 639.7166666666667], [1.68305016E12, 576.9], [1.68305034E12, 660.9333333333333], [1.68305022E12, 671.2833333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6830504E12, 84.33333333333333], [1.6830501E12, 396.3666666666667], [1.68305028E12, 514.4333333333333], [1.68305016E12, 463.8333333333333], [1.68305034E12, 531.3], [1.68305022E12, 539.7333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6830504E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 4135.222222222222, "minX": 1.6830501E12, "maxY": 4181.510638297872, "series": [{"data": [[1.6830504E12, 4174.8], [1.6830501E12, 4181.510638297872], [1.68305028E12, 4145.754098360656], [1.68305016E12, 4161.909090909093], [1.68305034E12, 4135.222222222222], [1.68305022E12, 4164.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6830504E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 4135.095238095239, "minX": 1.6830501E12, "maxY": 4181.27659574468, "series": [{"data": [[1.6830504E12, 4174.8], [1.6830501E12, 4181.27659574468], [1.68305028E12, 4145.721311475409], [1.68305016E12, 4161.836363636364], [1.68305034E12, 4135.095238095239], [1.68305022E12, 4163.921875]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6830504E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.6, "minX": 1.6830501E12, "maxY": 2.191489361702127, "series": [{"data": [[1.6830504E12, 0.6], [1.6830501E12, 2.191489361702127], [1.68305028E12, 0.80327868852459], [1.68305016E12, 0.9818181818181816], [1.68305034E12, 0.8571428571428571], [1.68305022E12, 0.9062499999999998]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6830504E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 3840.0, "minX": 1.6830501E12, "maxY": 4576.0, "series": [{"data": [[1.6830504E12, 4382.0], [1.6830501E12, 4576.0], [1.68305028E12, 4384.0], [1.68305016E12, 4453.0], [1.68305034E12, 4414.0], [1.68305022E12, 4364.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6830504E12, 4373.3], [1.6830501E12, 4403.6], [1.68305028E12, 4280.2], [1.68305016E12, 4310.4], [1.68305034E12, 4242.6], [1.68305022E12, 4303.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6830504E12, 4382.0], [1.6830501E12, 4576.0], [1.68305028E12, 4384.0], [1.68305016E12, 4453.0], [1.68305034E12, 4414.0], [1.68305022E12, 4364.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6830504E12, 4382.0], [1.6830501E12, 4460.0], [1.68305028E12, 4299.9], [1.68305016E12, 4411.8], [1.68305034E12, 4300.0], [1.68305022E12, 4348.25]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6830504E12, 3926.0], [1.6830501E12, 3910.0], [1.68305028E12, 3840.0], [1.68305016E12, 3919.0], [1.68305034E12, 3861.0], [1.68305022E12, 3924.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6830504E12, 4158.0], [1.6830501E12, 4183.0], [1.68305028E12, 4142.0], [1.68305016E12, 4162.0], [1.68305034E12, 4134.0], [1.68305022E12, 4180.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6830504E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 4138.5, "minX": 1.0, "maxY": 4281.0, "series": [{"data": [[2.0, 4155.0], [4.0, 4138.5], [1.0, 4161.0], [5.0, 4281.0], [3.0, 4164.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 4138.5, "minX": 1.0, "maxY": 4281.0, "series": [{"data": [[2.0, 4155.0], [4.0, 4138.5], [1.0, 4161.0], [5.0, 4281.0], [3.0, 4164.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.1, "minX": 1.6830501E12, "maxY": 1.0666666666666667, "series": [{"data": [[1.6830504E12, 0.1], [1.6830501E12, 0.8], [1.68305028E12, 1.0666666666666667], [1.68305016E12, 1.0333333333333334], [1.68305034E12, 1.0], [1.68305022E12, 1.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6830504E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.6830501E12, "maxY": 1.0666666666666667, "series": [{"data": [[1.6830504E12, 0.16666666666666666], [1.6830501E12, 0.7833333333333333], [1.68305028E12, 1.0166666666666666], [1.68305016E12, 0.9166666666666666], [1.68305034E12, 1.05], [1.68305022E12, 1.0666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6830504E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.6830501E12, "maxY": 1.0666666666666667, "series": [{"data": [[1.6830504E12, 0.16666666666666666], [1.6830501E12, 0.7833333333333333], [1.68305028E12, 1.0166666666666666], [1.68305016E12, 0.9166666666666666], [1.68305034E12, 1.05], [1.68305022E12, 1.0666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6830504E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.6830501E12, "maxY": 1.0666666666666667, "series": [{"data": [[1.6830504E12, 0.16666666666666666], [1.6830501E12, 0.7833333333333333], [1.68305028E12, 1.0166666666666666], [1.68305016E12, 0.9166666666666666], [1.68305034E12, 1.05], [1.68305022E12, 1.0666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6830504E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

