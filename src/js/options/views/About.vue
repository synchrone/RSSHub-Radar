<template>
    <div class="about">
        <el-main>
            <div class="title">About</div>
            <div class="content">
                <div class="tip">
                    <p>RSSHub Radar is a spin-off of <a target="_blank" href= "https://docs.rsshub.app">RSSHub</a> that helps you quickly discover and subscribe to RSS and RSSHub for your current site, and the project <a target="_blank" href="https://github.com/DIYgod/RSSHub-Radar">is open source</a> under the MIT license and is completely free to use, but as the project grows in size, it also needs to be funded to sustain its maintenance and development</p>
                    <p><i class="el-icon-trophy"></i>Sponsored development of RSSHub Radar: <a target="_blank" href= "https://docs.rsshub.app/support">https://docs.rsshub.app/support</a></p>
                    <p>&nbsp;</p>
                    <p>Update Log>: <a target="_blank" href= "https://github.com/DIYgod/RSSHub-Radar/releases">https://github.com/DIYgod/RSSHub-Radar/releases</a></p>
                    <p>Question Feedback: <a target="_blank" href= "https://github.com/DIYgod/RSSHub-radar/issues">https://github.com/DIYgod/RSSHub-radar/issues</a></p>
                    <p>GitHub: <a target="_blank" href= "https://github.com/DIYgod/RSSHub-Radar">https://github.com/DIYgod/RSSHub-Radar</a></p>
                    <p>RSSHub Document: <a target="_blank" href= "https://docs.rsshub.app">https://docs.rsshub.app</a></p>
                    <p>&nbsp;</p>
                    <p><b>Everything is possible with RSS</b></p>
                    <p><b>Made with <i style="color:#d43f57">♥</i> by <a target="_blank" href="https://diygod.me">DIYgod</a></b></p>
                </div>
            </div>
        </el-main>
    </div>
</template>

<script>
export default {
    name: 'About',
    data: () => ({
    }),
}
</script>

<style lang="less" scoped>
a {
    text-decoration: none;
    color: #f5712c;
}

.about {
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
</style>
