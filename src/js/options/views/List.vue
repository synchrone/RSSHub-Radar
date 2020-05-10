<template>
    <div class="list">
        <el-main>
            <div class="title">List of rules</div>
            <div class="tip">
                <p>For more rules support, <a target="_blank" href="https://docs.rsshub.app/en/joinus/#submit-new-rsshub-radar-rule">join us</a>!</p>
                <p>{{ time }} since last update</p>
            </div>
            <div class="content" v-loading="loading">
                <el-collapse accordion>
                    <el-collapse-item v-for="(rule, domain) in rules" :key="domain" :title="rule._name + ' - ' + domain">
                        <div v-for="(subrule, subdomain) in rule" v-if="subdomain[0] !== '_'" :key="subdomain">
                            <p v-for="subsubrule in subrule" :key="subsubrule.title">
                                <a target="_blank" :href="subsubrule.docs">{{ subsubrule.title }}</a>
                            </p>
                        </div>
                    </el-collapse-item>
                </el-collapse>
                <div class="debug">
                    <div class="tip">
                        <p>Here for rules debugging in development, non-combatants should evacuate quickly</p>
                        <p>Edit content may be overwritten at any time by auto-update rules, so make sure you have a local backup</p>
                        <p>Using Settings - Update Now You can restore remote rules immediately</p>
                    </div>
                    <el-input
                        type="textarea"
                        :rows="100"
                        placeholder="Please enter content"
                        v-model="rulesText"
                        @change="updateRules">
                    </el-input>
                </div>
            </div>
        </el-main>
    </div>
</template>

<script>
import { getRules, getRulesDate, updateRules } from '../../common/rules';
import { secondToTime, commandSandbox } from '../../common/utils';

export default {
    name: 'List',
    data: () => ({
        loading: true,
        rules: {},
        time: '',
        rulesText: '',
    }),
    created() {
        getRulesDate((date) => {
            let second = (+new Date - +date) / 1000;
            this.time = secondToTime(second);
            this.refreshTime();
        });
        getRules((rules) => {
            this.rulesText = rules;
            commandSandbox('getList', {
                rules,
            }, (rules) => {
                this.rules = rules;
                this.loading = false;
            });
        });
    },
    methods: {
        refreshTime() {
            getRulesDate((date) => {
                this.time = secondToTime((+new Date - +date) / 1000);
                setTimeout(() => {
                    this.refreshTime();
                }, 1000);
            });
        },
        updateRules() {
            updateRules(this.rulesText, () => {
                this.$message({
                    message: 'Saved',
                    type: 'success'
                });
            });
        },
    }
}
</script>

<style lang="less" scoped>
a {
    text-decoration: none;
    color: #f5712c;
}

.list {
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

.tip {
    font-size: 14px;
    margin: 20px 0;
    color: #555;
}

.content {
    margin-top: 20px;
    color: #222;
}

.debug {
    margin: 200px 0;
}
</style>
