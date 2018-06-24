<template>
<div id="onlineEnergyMonitor">
    <div class="page-content-wrap chart_container">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                            <div class="wigit-title yellow-bg"></div>
                            <div class="iPanel wigit-panel">
                                <!-- 今日综合能源消费量 -->
                                <p class="wigit-text wigit-text1"></p>
                                <p class="wigit-value"><span id="el_energy" class="value"></span><span id="el_energy_title"></span></p>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                            <div class="wigit-title green-bg"></div>
                            <div class="iPanel wigit-panel">
                                <!-- 今日全市用电总量 -->
                                <p class="wigit-text wigit-text2"></p>
                                <p class="wigit-value"><span id="el_power" class="value"></span><span id="el_power_title"></span></p>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                            <div class="wigit-title cyan-bg"></div>
                            <div class="iPanel wigit-panel">
                                <!-- 今日全市用水总量 -->
                                <p class="wigit-text wigit-text3"></p>
                                <p class="wigit-value"><span id="el_water" class="value"></span><span id="el_water_title"></span></p>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                            <div class="wigit-title blue-bg"></div>
                            <div class="iPanel wigit-panel">
                                <!-- 今日全市蒸汽总量 -->
                                <p class="wigit-text wigit-text4"></p>
                                <p class="wigit-value"><span id="el_steam" class="value"></span><span id="el_steam_title"></span></p>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                            <div class="wigit-title purple-bg"></div>
                            <div class="iPanel wigit-panel">
                                <!-- 今日全市天然气总量 -->
                                <p class="wigit-text wigit-text5"></p>
                                <p class="wigit-value"><span id="el_gas" class="value"></span><span id="el_gas_title"></span></p>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                            <div class="wigit-title red-bg"></div>
                            <div class="iPanel wigit-panel">
                                <!-- 全市接入企业 -->
                                <p class="wigit-text wigit-text6"></p>
                                <p class="wigit-value"><span id="el_enterpriseSize" class="value"></span><span title="家">家</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="panel_title">
                                <div class="col-sm-4">
                                    <h4>能源趋势图</h4>
                                </div>
                                <div class="col-sm-8 clearfix">
                                    <div class="gap-btn-group pull-right bar-group" role="group">
                                        <div class="btn-group mr12">
                                            <button id="today" type="button" title="搜索" class="btn btn-outline btn-link active">
                                                <span>今日</span>
                                            </button>
                                            <button id="thismonth" type="button" title="搜索" class="btn btn-outline btn-link">
                                                <span>本月</span>
                                            </button>
                                        </div>
                                        <div class="btn-group" role="group">
                                            <select id="enengyType" class="form-control select iselect w180" name="isCapital"></select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="iPanel">
                                <div class="content">
                                    <h4 id="chart_title" class="title">能耗分布图</h4>
                                    <div class="chart-wrap">
                                        <div id="line_bar"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="panel_title" style="border-bottom: none;">
                                <div class="col-sm-4">
                                    <h4>本月综合能耗排名</h4>
                                </div>
                            </div>
                            <div class="iPanel single_table_panel">
                                <div class="content">
                                    <table id="TContact" data-height="559" data-mobile-responsive="true">
                                        <thead>
                                            <tr class="hidden-em">
                                                <th data-formatter="IndexFormatter">排名</th>
                                                <th data-field="name">企业名称</th>
                                                <th data-field="energy_total" data-align="right">综合能耗<span class="st">(吨标准煤)</span></th>
                                                <th data-field="power_total" data-align="right">用电总量<span class="st">(千瓦时)</span></th>
                                                <th data-field="water_total" data-align="right">用水总量<span class="st">(吨)</span></th>
                                                <th data-field="gas_total" data-align="right">蒸汽总量<span class="st">(万千焦耳)</span></th>
                                                <th data-field="steam_total" data-align="right">天然气总量<span class="st">(立方米)</span></th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</div>
</template>

