<template>
    <div class="setting">
        <div class="title">Settings</div>
        <div class="content" v-loading="loading">
            <div v-if="!loading">
                <div class="subtitle">General</div>
                <div class="setting-item">
                    <div class="setting-name">Custom RSSHub domain name</div>
                    <div class="setting-input">
                        <el-input @change="saveConfig" v-model="config.rsshubDomain" placeholder="Please enter your RSSHub domain name, leave blank to use the official domain name"></el-input>
                    </div>
                    <template v-if="config.rsshubDomain !== defaultConfig.rsshubDomain">
                    <div class="setting-name">Access Key<a target="_blank" href="https://docs.rsshub.app/install/#fang-wen-kong-zhi-pei-zhi"><el-tooltip class="item" effect="dark" content="Only the instance has the access key enabled, you need to configure it, if you are not clear about the situation, please keep it closed" placement="top"><i class="el-icon-info"></i></el-tooltip></a></div>
                    <div class="setting-input">
                        <el-checkbox @change="saveConfig" v-model="config.rsshubAccessControl.enabled">On</el-checkbox>
                        <el-input @change="saveConfig" style="margin-left: 20px;" v-if="config.rsshubAccessControl.enabled" v-model="config.rsshubAccessControl.accessKey" placeholder="required, please enter Correct access key"></el-input>
                        <el-checkbox @change="saveConfig" style="margin-left: 20px;" v-if="config.rsshubAccessControl.enabled" v-model="config.rsshubAccessControl.useCode">Generate access code</el-checkbox>
                    </div>
                    </template>
                    <div class="setting-name" v-if="isChrome">shortcut key</div>
                    <div class="setting-input" v-if="isChrome">
                        <el-button size="medium" @click="toHotkey">Click here to set up</el-button>
                    </div>
                </div>
                <div class="subtitle">Rules update</div>
                <div class="setting-item">
                    <div class="setting-name" v-if="config.enableRemoteRules">It will update automatically, you can also</div>
                    <div class="setting-input" v-if="config.enableRemoteRules">
                        <el-button size="medium" @click="refreshRu" :disabled="refreshDisabled">{{ refreshDisabled ? 'Update in progress' : 'Update now' }}</el-button><el-progress :text-inside="true" :stroke-width="20" :percentage="percentage"></el-progress><span class="time">Updated {{ time }} ago. Next automatic update in {{ leftTime }}</span>
                    </div>
                    <div class="setting-name" v-if="!config.enableRemoteRules">Enable Remote Rules</div>
                </div>
                <div class="subtitle">One-click subscription</div>
                <div class="setting-item">
                    <div class="setting-name">Tiny Tiny RSS <a target="_blank" href="https://ttrss.henry.wang/zh/"><i class="el-icon-info"></i></a></div>
                    <div class="setting-input">
                        <el-checkbox @change="saveConfig" v-model="config.submitto.ttrss">Open</el-checkbox>
                        <el-input @change="saveConfig" style="margin-left: 20px;" v-if="config.submitto.ttrss" v-model="config.submitto.ttrssDomain" placeholder="required, please enter Your Tiny Tiny RSS address "></el-input>
                    </div>
                    <div class="setting-name">Miniflux <a target="_blank" href="https://miniflux.app"><i class="el-icon-info"></i></a></div>
                    <div class="setting-input">
                        <el-checkbox @change="saveConfig" v-model="config.submitto.miniflux">Open</el-checkbox>
                        <el-input @change="saveConfig" style="margin-left: 20px;" v-if="config.submitto.miniflux" v-model="config.submitto.minifluxDomain" placeholder="required, please enter Your Miniflux address"></el-input>
                    </div>
                    <div class="setting-name">FreshRSS <a target="_blank" href="https://freshrss.org"><i class="el-icon-info"></i></a></div>
                    <div class="setting-input">
                        <el-checkbox @change="saveConfig" v-model="config.submitto.freshrss">Open</el-checkbox>
                        <el-input @change="saveConfig" style="margin-left: 20px;" v-if="config.submitto.freshrss" v-model="config.submitto.freshrssDomain" placeholder="required, please enter Your FreshRSS address "></el-input>
                    </div>
                    <div class="setting-name">Feedly <a target="_blank" href="https://feedly.com/"><i class="el-icon-info"></i></a></div>
                    <div class="setting-input">
                        <el-checkbox @change="saveConfig" v-model="config.submitto.feedly">Open</el-checkbox>
                    </div>
                    <div class="setting-name">Inoreader <a target="_blank" href="https://www.inoreader.com/"><i class="el-icon-info"></i></a></div>
                    <div class="setting-input">
                        <el-checkbox @change="saveConfig" v-model="config.submitto.inoreader">Open</el-checkbox>
                    </div>
                    <div class="setting-name">Feedbin <a target="_blank" href="https://feedbin.com/"><i class="el-icon-info"></i></a></div>
                    <div class="setting-input">
                        <el-checkbox @change="saveConfig" v-model="config.submitto.feedbin">Open</el-checkbox>
                    </div>
                    <div class="setting-name">The Old Reader <a target="_blank" href="https://theoldreader.com/"><i class="el-icon-info"></i></a></div>
                    <div class="setting-input">
                        <el-checkbox @change="saveConfig" v-model="config.submitto.theoldreader">Open</el-checkbox>
                    </div>
                    <div class="setting-name">Feeds.Pub <a target="_blank" href="https://feeds.pub/"><i class="el-icon-info"></i></a></div>
                    <div class="setting-input">
                        <el-checkbox @change="saveConfig" v-model="config.submitto.feedspub">Open</el-checkbox>
                    </div>
                    <div class="setting-name">Local reader<el-tooltip class="item" effect="dark" content="Require reader support, such as Reeder, etc." placement="top"><i class="el-icon-info"></i></el-tooltip></div>
                    <div class="setting-input">
                        <el-checkbox @change="saveConfig" v-model="config.submitto.local">Open</el-checkbox>
                    </div>
                </div>
                <div class="subtitle"> Notifications and reminders </div>
                <div class="setting-item">
                    <div class="setting-name">Show tab RSS badge</div>
                    <div class="setting-input">
                        <el-checkbox @change="saveConfig" v-model="config.notice.badge">Open</el-checkbox>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getRulesDate, refreshRules } from '../../common/rules';
import { defaultConfig, getConfig, saveConfig } from '../../common/config';
import { secondToTime } from '../../common/utils';

export default {
    name: 'Setting',
    data: () => ({
        loading: true,
        defaultConfig,
        config: defaultConfig,
        time: '',
        leftTime: '',
        second: 0,
        refreshDisabled: false,
        isChrome: navigator.userAgent.indexOf('Chrome') !== -1,
    }),
    computed: {
        percentage: function () {
            return (this.second / this.config.refreshTimeout * 100).toFixed(2);
        },
    },
    created() {
        getConfig((config) => {
            this.config=config;
            this.loading=false;

            this.refreshTime();
        });
    },
    methods: {
        saveConfig() {
            saveConfig(this.config, () => {
                this.$message({
                    message: 'Saved',
                    type: 'success'
                });
            });
        },
        toHotkey() {
            chrome.tabs.create({
                url: 'chrome://extensions/shortcuts'
            });
        },
        refreshRu() {
            this.refreshDisabled=true;
            refreshRules(() => {
                this.second=0;
                this.time=secondToTime(this.second);
                this.leftTime=secondToTime(this.config.refreshTimeout - this.second);
                this.refreshDisabled=false;
            });
        },
        refreshTime() {
            getRulesDate((date) => {
                this.second=(+new Date - +date) / 1000;
                this.time=secondToTime(this.second);
                this.leftTime=secondToTime(this.config.refreshTimeout - this.second);
                setTimeout(() => {
                    this.refreshTime();
                }, 1000);
            });
        }
    }
}
</script>

<style lang="less" scoped>
.setting {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 10px;
}

.title {
    font-size: 25px;
    font-weight: bold;
    border-bottom: 1px solid #e6e6e6;
    padding-bottom: 10px;
    color: #f5712c;
}

.content {
    margin-top: 20px;
    margin-bottom: 30px;
    color: #222;
}

.subtitle {
    font-size: 20px;
    font-weight: bold;
    margin: 30px 0 15px;
}

.setting-name {
    font-size: 15px;
    margin: 15px 0 5px;
}

.setting-input {
    height: 40px;
    display: flex;
    align-items: center;
}

.el-button:focus {
    color: #606266;
    background: #fff;
    border: 1px solid #dcdfe6;
}

.el-button:hover {
    color: #f5712c;
    border-color: #fcd4c0;
    background-color: #fef1ea;
}

.el-icon-info {
    color: #777;
    margin-left: 2px;
}

.el-progress {
    width: 170px;
    margin: 0 20px;
}

.time {
    color: #606266;
    font-size: 14px;
}
</style>
