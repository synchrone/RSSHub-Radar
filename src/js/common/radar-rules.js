export default {
    'bilibili.com': {
        _name: 'bilibili',
        www: [
            {
                title: 'Partition video',
                docs: 'https://docs.rsshub.app/en/social-media.html#bilibili',
                source: ['/v/*tpath', '/documentary', '/movie', '/tv'],
            },
            {
                title: 'Video reviews',
                docs: 'https://docs.rsshub.app/en/social-media.html#bilibili',
                source: '/video/:aid',
                target: (params) => `/bilibili/video/reply/${params.aid.replace('av', '')}`,
            },
            {
                title: 'Video barrage',
                docs: 'https://docs.rsshub.app/en/social-media.html#bilibili',
                source: '/video/:aid',
                target: (params, url) => {
                    const pid = new URL(url).searchParams.get('p');
                    return `/bilibili/video/danmaku/${params.aid.replace('av', '')}/${pid ? pid : 1}`;
                },
            },
            {
                title: 'Some drama',
                docs: 'https://docs.rsshub.app/en/social-media.html#bilibili',
                source: '/bangumi/media/:bid',
                target: (params) => `/bilibili/bangumi/media/${params.bid.replace('md', '')}`,
            },
        ],
        space: [
            {
                title: 'UP the active state',
                docs: 'https://docs.rsshub.app/en/social-media.html#bilibili',
                source: '/:uid',
                target: '/bilibili/user/dynamic/:uid',
            },
            {
                title: 'UP main contributor',
                docs: 'https://docs.rsshub.app/en/social-media.html#bilibili',
                source: '/:uid',
                target: '/bilibili/user/video/:uid',
            },
        ],
    },
    'weibo.com': {
        _name: '微博',
        '.': [
            {
                title: 'Blogger',
                docs: 'https://docs.rsshub.app/en/social-media.html#wei-bo',
                source: ['/u/:id', '/:id'],
                target: (params, url, document) => {
                    const uid = document && document.documentElement.innerHTML.match(/\$CONFIG\['oid']='(\d+)'/)[1];
                    return uid ? `/weibo/user/${uid}` : '';
                },
            },
            {
                title: 'Keywords',
                docs: 'https://docs.rsshub.app/en/social-media.html#wei-bo',
            },
            {
                title: 'Super Session',
                docs: 'https://docs.rsshub.app/en/social-media.html#wei-bo',
                source: '/p/:id/super_index',
                target: '/weibo/super_index/:id',
            },
        ],
        s: [
            {
                title: 'Hot search standings',
                docs: 'https://docs.rsshub.app/en/social-media.html#wei-bo',
                source: '/top/summary',
                target: '/weibo/search/hot',
            },
        ],
    },
    'pixiv.net': {
        _name: 'Pixiv',
        www: [
            {
                title: 'User collection',
                docs: 'https://docs.rsshub.app/en/social-media.html#pixiv',
                source: '/bookmark.php',
                target: (params, url) => `/pixiv/user/bookmarks/${new URL(url).searchParams.get('id')}`,
            },
            {
                title: 'User dynamic',
                docs: 'https://docs.rsshub.app/en/social-media.html#pixiv',
                source: '/member.php',
                target: (params, url) => `/pixiv/user/${new URL(url).searchParams.get('id')}`,
            },
            {
                title: 'Leaderboards',
                docs: 'https://docs.rsshub.app/en/social-media.html#pixiv',
                source: '/ranking.php',
            },
            {
                title: 'Keywords',
                docs: 'https://docs.rsshub.app/en/social-media.html#pixiv',
                source: '/search.php',
            },
            {
                title: 'Attention new works',
                docs: 'https://docs.rsshub.app/en/social-media.html#pixiv',
                source: '/bookmark_new_illust.php',
                target: '/pixiv/user/illustfollows',
            },
        ],
    },
    'twitter.com': {
        _name: 'Twitter',
        '.': [
            {
                title: 'User timeline',
                docs: 'https://docs.rsshub.app/en/social-media.html#twitter',
                source: '/:id',
                target: (params) => {
                    if (params.id !== 'home' && params.id !== 'explore' && params.id !== 'notifications' && params.id !== 'messages' && params.id !== 'explore' && params.id !== 'search') {
                        return '/twitter/user/:id';
                    }
                },
            },
            {
                title: 'User Following',
                docs: 'https://docs.rsshub.app/en/social-media.html#twitter',
                source: '/:id',
                target: (params) => {
                    if (params.id !== 'home' && params.id !== 'explore' && params.id !== 'notifications' && params.id !== 'messages' && params.id !== 'explore' && params.id !== 'search') {
                        return '/twitter/followings/:id';
                    }
                },
            },
            {
                title: 'User Likes',
                docs: 'https://docs.rsshub.app/en/social-media.html#twitter',
                source: '/:id',
                target: (params) => {
                    if (params.id !== 'home' && params.id !== 'explore' && params.id !== 'notifications' && params.id !== 'messages' && params.id !== 'explore' && params.id !== 'search') {
                        return '/twitter/likes/:id';
                    }
                },
            },
            {
                title: 'List timeline',
                docs: 'https://docs.rsshub.app/en/social-media.html#twitter',
                source: '/:id/lists/:name',
                target: (params) => {
                    if (params.id !== 'home' && params.id !== 'explore' && params.id !== 'notifications' && params.id !== 'messages' && params.id !== 'explore' && params.id !== 'search') {
                        return '/twitter/list/:id/:name';
                    }
                },
            },
            {
                title: 'Search results',
                docs: 'https://docs.rsshub.app/en/social-media.html#twitter',
                source: '/search',
                target: (params, url) => `/twitter/keyword/${new URL(url).searchParams.get('q')}`,
            },
        ],
    },
    'youtube.com': {
        _name: 'Youtube',
        www: [
            {
                title: 'User',
                docs: 'https://docs.rsshub.app/en/social-media.html#youtube',
                source: '/user/:username',
                target: '/youtube/user/:username',
            },
            {
                title: 'Channels',
                docs: 'https://docs.rsshub.app/en/social-media.html#youtube',
                source: '/channel/:id',
                target: '/youtube/channel/:id',
            },
            {
                title: 'Playlist',
                docs: 'https://docs.rsshub.app/en/social-media.html#youtube',
                source: '/playlist',
                target: (params, url) => `/youtube/playlist/${new URL(url).searchParams.get('list')}`,
            },
        ],
    },
    'github.com': {
        _name: 'GitHub',
        '.': [
            {
                title: 'User Repos',
                docs: 'https://docs.rsshub.app/en/programming.html#github',
                source: '/:user',
                target: '/github/repos/:user',
            },
            {
                title: 'User Followers',
                docs: 'https://docs.rsshub.app/en/programming.html#github',
                source: '/:user',
                target: '/github/user/followers/:user',
            },
            {
                title: 'Trending',
                docs: 'https://docs.rsshub.app/en/programming.html#github',
                source: '/trending',
                target: '/github/trending/:since',
            },
            {
                title: 'Repo Issues',
                docs: 'https://docs.rsshub.app/en/programming.html#github',
                source: ['/:user/:repo/issues', '/:user/:repo/issues/:id', '/:user/:repo'],
                target: '/github/issue/:user/:repo',
            },
            {
                title: 'Repo Pull Requests',
                docs: 'https://docs.rsshub.app/en/programming.html#github',
                source: ['/:user/:repo/pulls', '/:user/:repo/pulls/:id', '/:user/:repo'],
                target: '/github/pull/:user/:repo',
            },
            {
                title: 'Repo Stars',
                docs: 'https://docs.rsshub.app/en/programming.html#github',
                source: ['/:user/:repo/stargazers', '/:user/:repo'],
                target: '/github/stars/:user/:repo',
            },
            {
                title: 'Repo Branches',
                docs: 'https://docs.rsshub.app/en/programming.html#github',
                source: ['/:user/:repo/branches', '/:user/:repo'],
                target: '/github/branches/:user/:repo',
            },
            {
                title: 'Repo Commits',
                docs: 'https://docs.rsshub.app/en/programming.html#github',
                source: '/:user/:repo/blob/:branch/*filepath',
                target: '/github/file/:user/:repo/:branch/:filepath',
            },
            {
                title: "User's Starred Repositories",
                docs: 'https://docs.rsshub.app/en/programming.html#github',
                source: '/:user',
                target: '/github/starred_repos/:user',
            },
            {
                title: 'Repo Contributors',
                docs: 'https://docs.rsshub.app/en/programming.html#github',
                source: ['/:user/:repo/graphs/contributors', '/:user/:repo'],
                target: '/github/contributors/:user/:repo',
            },
        ],
    },
    'zhihu.com': {
        _name: '知乎',
        www: [
            {
                title: 'Favorites',
                docs: 'https://docs.rsshub.app/en/social-media.html#zhi-hu',
                source: '/collection/:id',
                target: '/zhihu/collection/:id',
            },
            {
                title: 'User dynamic',
                docs: 'https://docs.rsshub.app/en/social-media.html#zhi-hu',
                source: '/people/:id',
                target: '/zhihu/people/activities/:id',
            },
            {
                title: 'The user answer',
                docs: 'https://docs.rsshub.app/en/social-media.html#zhi-hu',
                source: '/people/:id/answers',
                target: '/zhihu/people/answers/:id',
            },
            {
                title: 'User ideas',
                docs: 'https://docs.rsshub.app/en/social-media.html#zhi-hu',
                source: '/people/:id/pins',
                target: '/zhihu/people/pins/:id',
            },
            {
                title: 'User articles',
                docs: 'https://docs.rsshub.app/en/social-media.html#zhi-hu',
                source: '/people/:id/posts',
                target: '/zhihu/people/posts/:id',
            },
            {
                title: 'Hot List',
                docs: 'https://docs.rsshub.app/en/social-media.html#zhi-hu',
                source: '/hot',
                target: '/zhihu/hotlist',
            },
            {
                title: 'Idea Hot List',
                docs: 'https://docs.rsshub.app/en/social-media.html#zhi-hu',
                target: '/zhihu/pin/hotlist',
            },
            {
                title: 'The problem',
                docs: 'https://docs.rsshub.app/en/social-media.html#zhi-hu',
                source: '/question/:questionId',
                target: '/zhihu/question/:questionId',
            },
            {
                title: 'Topic',
                docs: 'https://docs.rsshub.app/en/social-media.html#zhi-hu',
                source: '/topic/:topicId/:type',
                target: '/zhihu/topic/:topicId',
            },
            {
                title: 'New book',
                docs: 'https://docs.rsshub.app/en/social-media.html#zhi-hu',
                source: '/zhihu/bookstore/newest',
                target: '/zhihu/pin/hotlist',
            },
            {
                title: 'Idea-the 24-hour news summary',
                docs: 'https://docs.rsshub.app/en/social-media.html#zhi-hu',
                source: '/pin/special/972884951192113152',
                target: '/zhihu/pin/daily',
            },
            {
                title: 'Bookstore-weekly',
                docs: 'https://docs.rsshub.app/en/social-media.html#zhi-hu',
                source: '/pub/weekly',
                target: '/zhihu/weekly',
            },
        ],
        zhuanlan: [
            {
                title: 'Column',
                docs: 'https://docs.rsshub.app/en/social-media.html#zhi-hu',
                source: '/:id',
                target: '/zhihu/zhuanlan/:id',
            },
        ],
        daily: [
            {
                title: 'Daily',
                docs: 'https://docs.rsshub.app/en/social-media.html#zhi-hu',
                source: '',
                target: '/zhihu/daily',
            },
            {
                title: 'Daily',
                docs: 'https://docs.rsshub.app/en/social-media.html#zhi-hu',
                source: '/*tpath',
                target: '/zhihu/daily',
            },
        ],
    },
    'smzdm.com': {
        _name: '什么值得买',
        www: [
            {
                title: 'Leaderboards',
                docs: 'https://docs.rsshub.app/en/shopping.html#shen-me-zhi-de-mai',
                source: '/top',
            },
        ],
        search: [
            {
                title: 'Keywords',
                docs: 'https://docs.rsshub.app/en/shopping.html#shen-me-zhi-de-mai',
                source: '/',
                target: (params, url) => `/smzdm/keyword/${new URL(url).searchParams.get('s')}`,
            },
        ],
    },
    'rsshub.app': {
        _name: 'RSSHub',
        docs: [
            {
                title: 'There is a new route now.',
                docs: 'https://docs.rsshub.app/en/program-update.html#rsshub',
                source: ['', '/*tpath'],
                target: '/rsshub/routes',
            },
            {
                title: 'There is a new sponsor now.',
                docs: 'https://docs.rsshub.app/en/program-update.html#rsshub',
                source: ['', '/*tpath'],
                target: '/rsshub/sponsors',
            },
        ],
    },
    'ximalaya.com': {
        _name: '喜马拉雅',
        www: [
            {
                title: 'Album',
                docs: 'https://docs.rsshub.app/en/multimedia.html#xi-ma-la-ya',
                source: '/:type/:id',
                target: (params) => {
                    if (parseInt(params.id) + '' === params.id) {
                        return '/ximalaya/album/:id/';
                    }
                },
            },
        ],
    },
    'algocasts.io': {
        _name: 'AlgoCasts',
        '.': [
            {
                title: 'Video update',
                docs: 'https://docs.rsshub.app/en/programming.html#algocasts',
                source: '/episodes',
                target: '/algocasts',
            },
        ],
    },
    'soulapp.cn': {
        _name: 'Soul',
        '.': [
            {
                title: 'Instant update',
                docs: 'https://docs.rsshub.app/en/social-media.html#soul',
            },
        ],
    },
    'juejin.im': {
        _name: '掘金',
        '.': [
            {
                title: 'Column',
                docs: 'https://docs.rsshub.app/en/programming.html#jue-jin',
                source: '/user/:id/posts',
                target: '/juejin/posts/:id',
            },
        ],
    },
    'anime1.me': {
        _name: 'Anime1',
        '.': [
            {
                title: 'Animation',
                docs: 'https://docs.rsshub.app/en/anime.html#anime1',
                source: '/category/:time/:name',
                target: '/anime1/anime/:time/:name',
            },
            {
                title: 'Search',
                docs: 'https://docs.rsshub.app/en/anime.html#anime1',
                source: '/',
                target: (params, url) => {
                    const keyword = new URL(url).searchParams.get('s');
                    return keyword ? `/anime1/search/${keyword}` : '';
                },
            },
        ],
    },
    'instagram.com': {
        _name: 'Instagram',
        www: [
            {
                title: 'User feed',
                docs: 'https://docs.rsshub.app/en/social-media.html#instagram',
                source: '/:id',
                target: (params) => {
                    if (params.id !== 'explore' && params.id !== 'developer') {
                        return '/instagram/user/:id';
                    }
                },
            },
            {
                title: 'Tag feed',
                docs: 'https://docs.rsshub.app/en/social-media.html#instagram',
                source: '/explore/tags/:tag',
                target: '/instagram/tag/:tag',
            },
        ],
    },
    'swufe.edu.cn': {
        _name: '西南财经大学',
        it: [
            {
                title: 'Economic Information Engineering - notice',
                docs: 'https://docs.rsshub.app/en/university.html#xi-nan-cai-jing-da-xue',
                source: '/index/tzgg.htm',
                target: '/swufe/seie/tzgg',
            },
            {
                title: 'Economic Information Engineering - College news',
                docs: 'https://docs.rsshub.app/en/university.html#xi-nan-cai-jing-da-xue',
                source: '/index/xyxw.htm',
                target: '/swufe/seie/xyxw',
            },
        ],
    },
    'ishuhui.com': {
        _name: '鼠绘漫画',
        www: [
            {
                title: 'Mouse-drawn comics',
                docs: 'https://docs.rsshub.app/en/anime.html#shu-hui-man-hua',
                source: '/comics/anime/:id',
                target: '/shuhui/comics/:id',
            },
        ],
    },
    'haimaoba.com': {
        _name: '海猫吧',
        www: [
            {
                title: 'Comic update',
                docs: 'https://docs.rsshub.app/en/anime.html#hai-mao-ba',
                source: '/catalog/:id',
                target: '/haimaoba/:id',
            },
        ],
    },
    'pgyer.com': {
        _name: '蒲公英应用分发',
        www: [
            {
                title: 'app update',
                docs: 'https://docs.rsshub.app/en/program-update.html#pu-gong-ying-ying-yong-fen-fa',
                source: '/:app',
                target: '/pgyer/:app',
            },
        ],
    },
    'pianyuan.la': {
        _name: '片源网',
        '.': [
            {
                title: 'Movies and episodes',
                docs: 'https://docs.rsshub.app/en/multimedia.html#pian-yuan',
                source: '/',
            },
        ],
    },
    'sspai.com': {
        _name: '少数派',
        '.': [
            {
                title: 'Latest on the shelves of the paid column',
                docs: 'https://docs.rsshub.app/en/new-media.html#shao-shu-pai-sspai',
                source: '/series',
                target: '/sspai/series',
            },
            {
                title: 'Matrix',
                docs: 'https://docs.rsshub.app/en/new-media.html#shao-shu-pai-sspai',
                source: '/matrix',
                target: '/sspai/matrix',
            },
            {
                title: 'Column',
                docs: 'https://docs.rsshub.app/en/new-media.html#shao-shu-pai-sspai',
                source: '/column/:id',
                target: '/sspai/column/:id',
            },
            {
                title: 'The author of the published article',
                docs: 'https://docs.rsshub.app/en/new-media.html#shao-shu-pai-sspai',
                source: ['/user/:id/posts', '/user/:id/updates'],
                target: '/sspai/author/:id',
            },
            {
                title: 'Topic',
                docs: 'https://docs.rsshub.app/en/new-media.html#shao-shu-pai-sspai',
                source: '/topics',
                target: '/sspai/topics',
            },
            {
                title: 'The topic within the article update',
                docs: 'https://docs.rsshub.app/en/new-media.html#shao-shu-pai-sspai',
                source: '/topic/:id',
                target: '/sspai/topic/:id',
            },
        ],
        shortcuts: [
            {
                title: 'Shortcuts Gallery',
                docs: 'https://docs.rsshub.app/en/new-media.html#shao-shu-pai-sspai',
                source: ['', '/*tpath'],
                target: '/sspai/shortcuts',
            },
        ],
    },
    'baidu.com': {
        _name: '贴吧',
        tieba: [
            {
                title: 'Posts list',
                docs: 'https://docs.rsshub.app/en/bbs.html#tie-ba',
                source: 'f',
                target: (params, url) => {
                    const type = new URL(url).searchParams.get('tab');
                    if (!type || type === 'main') {
                        return `/tieba/forum/${new URL(url).searchParams.get('kw')}`;
                    }
                },
            },
            {
                title: 'Boutique posts',
                docs: 'https://docs.rsshub.app/en/bbs.html#tie-ba',
                source: 'f',
                target: (params, url) => {
                    const type = new URL(url).searchParams.get('tab');
                    if (type === 'good') {
                        return `/tieba/forum/good/${new URL(url).searchParams.get('kw')}`;
                    }
                },
            },
            {
                title: 'Posts dynamic',
                docs: 'https://docs.rsshub.app/en/bbs.html#tie-ba',
                source: '/p/:id',
                target: '/tieba/post/:id',
            },
            {
                title: 'Only to see the landlord',
                docs: 'https://docs.rsshub.app/en/bbs.html#tie-ba',
                source: '/p/:id',
                target: '/tieba/post/lz/:id',
            },
        ],
    },
    'wineyun.com': {
        _name: '酒云网',
        www: [
            {
                title: 'The latest goods',
                docs: 'https://docs.rsshub.app/en/other.html#jiu-yun-wang',
                source: ['/:category'],
                target: '/wineyun/:category',
            },
        ],
    },
    'epicgames.com': {
        _name: 'Epic Games',
        www: [
            {
                title: 'Weekly free games',
                docs: 'https://docs.rsshub.app/en/game.html#epicgames-freegame',
                source: '/store/zh-CN/free-games',
                target: '/epicgames/freegames',
            },
        ],
    },
    'docker.com': {
        _name: 'Docker',
        hub: [
            {
                title: 'The mirror there is a new Build',
                docs: 'https://docs.rsshub.app/en/program-update.html#docker-hub',
                source: ['/r/:owner/:image', '/r/:owner/:image/tags', '/_/:image'],
                target: (params) => `/dockerhub/build/${params.owner ? params.owner : 'library'}/${params.image}`,
            },
        ],
    },
    'nga.cn': {
        _name: 'NGA',
        bbs: [
            {
                title: 'Partition posts',
                docs: 'https://docs.rsshub.app/en/bbs.html#nga',
                source: '/thread.php',
                target: (params, url) => new URL(url).searchParams.get('fid') && `/nga/forum/${new URL(url).searchParams.get('fid')}`,
            },
            {
                title: 'Posts',
                docs: 'https://docs.rsshub.app/en/bbs.html#nga',
                source: '/read.php',
                target: (params, url) => new URL(url).searchParams.get('tid') && `/nga/post/${new URL(url).searchParams.get('tid')}`,
            },
        ],
    },
    'playstation.com': {
        _name: 'PlayStation',
        store: [
            {
                title: 'Game list',
                docs: 'https://docs.rsshub.app/en/game.html#playstation',
                source: '/zh-hans-hk/grid/:id/:page',
                target: '/ps/list/:id',
            },
            {
                title: 'Discount|price',
                docs: 'https://docs.rsshub.app/en/game.html#playstation',
                source: ['/:lang/product/:gridName'],
                target: '/ps/:lang/product/:gridName',
            },
        ],
        www: [
            {
                title: 'User trophies',
                docs: 'https://docs.rsshub.app/en/game.html#playstation',
            },
            {
                title: 'The system updates the record',
                docs: 'https://docs.rsshub.app/en/game.html#playstation',
            },
        ],
    },
    'monsterhunter.com': {
        _name: '怪物猎人世界',
        www: [
            {
                title: 'Update intelligence',
                docs: 'https://docs.rsshub.app/en/game.html#guai-wu-lie-ren-shi-jie',
                source: ['', '/*tpath'],
                target: '/mhw/update',
            },
            {
                title: 'Latest news',
                docs: 'https://docs.rsshub.app/en/game.html#guai-wu-lie-ren-shi-jie',
                source: ['', '/*tpath'],
                target: '/mhw/news',
            },
        ],
    },
    'vgtime.com': {
        _name: '游戏时光',
        www: [
            {
                title: 'News',
                docs: 'https://docs.rsshub.app/en/game.html#you-xi-shi-guang',
                source: '/topic/index.jhtml',
                target: '/vgtime/news',
            },
            {
                title: 'Games on sale table',
                docs: 'https://docs.rsshub.app/en/game.html#you-xi-shi-guang',
                source: '/game/release.jhtml',
                target: '/vgtime/release',
            },
            {
                title: 'Keywords information',
                docs: 'https://docs.rsshub.app/en/game.html#you-xi-shi-guang',
                source: '/search/list.jhtml',
                target: (params, url) => `/vgtime/keyword/${new URL(url).searchParams.get('keyword')}`,
            },
        ],
    },
    'bing.com': {
        _name: 'Bing',
        www: [
            {
                title: 'Daily Wallpaper',
                docs: 'https://docs.rsshub.app/en/picture.html#bing-bi-zhi',
                source: '',
                target: '/bing',
            },
        ],
    },
    'dcard.tw': {
        _name: 'Dcard',
        www: [
            {
                title: 'Home posts-latest',
                docs: 'https://docs.rsshub.app/en/bbs.html#dcard',
                source: '/f',
                target: '/dcard/posts/latest',
            },
            {
                title: 'Home posts-popular',
                docs: 'https://docs.rsshub.app/en/bbs.html#dcard',
                source: '/f',
                target: '/dcard/posts/popular',
            },
            {
                title: 'Plates posts-latest',
                docs: 'https://docs.rsshub.app/en/bbs.html#dcard',
                source: '/f/:section',
                target: '/dcard/:section/latest',
            },
            {
                title: 'Plates posts-popular',
                docs: 'https://docs.rsshub.app/en/bbs.html#dcard',
                source: '/f/:section',
                target: '/dcard/:section/popular',
            },
        ],
    },
    'wegene.com': {
        _name: 'WeGene',
        www: [
            {
                title: 'The most recent update',
                docs: 'https://docs.rsshub.app/en/other.html#wegene',
                source: '',
                target: '/wegene/newest',
            },
            {
                title: 'Section',
                docs: 'https://docs.rsshub.app/en/other.html#wegene',
                source: '/crowdsourcing',
                target: '/wegene/column/all/all',
            },
        ],
    },
    'qdaily.com': {
        _name: '好奇心日报',
        www: [
            {
                title: 'Tags',
                docs: 'https://docs.rsshub.app/en/new-media.html#hao-qi-xin-ri-bao',
                source: '/tags/:idd',
                target: (params) => `/qdaily/tag/${params.idd.replace('.html', '')}`,
            },
            {
                title: 'Section',
                docs: 'https://docs.rsshub.app/en/new-media.html#hao-qi-xin-ri-bao',
                source: '/special_columns/:idd',
                target: (params) => `/qdaily/column/${params.idd.replace('.html', '')}`,
            },
            {
                title: 'Classification',
                docs: 'https://docs.rsshub.app/en/new-media.html#hao-qi-xin-ri-bao',
                source: '/categories/:idd',
                target: (params) => `/qdaily/category/${params.idd.replace('.html', '')}`,
            },
        ],
    },

    '3ycy.com': {
        _name: '三界异次元 (Three Realms and Beyond)',
        www: [
            {
                title: 'The most recent update',
                docs: 'https://docs.rsshub.app/en/anime.html#san-jie-yi-ci-yuan',
                source: '/',
                target: '/3ycy/home',
            },
        ],
    },

    'emi-nitta.net': {
        _name: 'Emi Nitta',
        '.': [
            {
                title: 'The most recent update',
                docs: 'https://docs.rsshub.app/en/other.html#xin-tian-hui-hai-guan-fang-wang-zhan',
                source: '/updates',
                target: '/emi-nitta/updates',
            },
            {
                title: 'News',
                docs: 'https://docs.rsshub.app/en/other.html#xin-tian-hui-hai-guan-fang-wang-zhan',
                source: '/contents/news',
                target: '/emi-nitta/news',
            },
        ],
    },

    'alter-shanghai.cn': {
        _name: 'Alter',
        '.': [
            {
                title: 'News',
                docs: 'https://docs.rsshub.app/en/shopping.html#alter-zhong-guo',
                source: '/cn/news.html',
                target: '/alter-cn/news',
            },
        ],
    },

    'itslide.com': {
        _name: 'ITSlide',
        www: [
            {
                title: 'The latest',
                docs: 'https://docs.rsshub.app/en/programming.html#itslide',
                source: '/*',
                target: '/itslide/new',
            },
        ],
    },

    'leboncoin.fr': {
        _name: 'leboncoin',
        www: [
            {
                title: 'ads',
                docs: 'https://docs.rsshub.app/en/en/shopping.html#leboncoin',
                source: '/recherche',
                target: (params, url) => '/leboncoin/ad/' + url.split('?')[1],
            },
        ],
    },
    'yuancheng.work': {
        _name: '远程.work (remote work)',
        '.': [
            {
                title: 'Recruitment information',
                docs: 'https://docs.rsshub.app/en/other.html#yuan-cheng-work',
                source: '/:caty',
                target: (params, url) => {
                    if (!url) {
                        return '/remote-work';
                    }
                    return '/remote-work/' + /\w+-(\w+)-\w+/.exec(url)[1];
                },
            },
        ],
    },

    'chinatimes.com': {
        _name: '中時電子報',
        www: [
            {
                title: 'News',
                docs: 'https://docs.rsshub.app/en/traditional-media.html#zhong-shi-dian-zi-bao',
                source: '/:caty',
                target: (params) => '/chinatimes/' + params.caty,
            },
        ],
    },

    'ithome.com': {
        _name: 'IT 之家',
        it: [
            {
                title: 'IT information',
                docs: 'https://docs.rsshub.app/en/new-media.html#it-zhi-jia',
                source: '/',
                target: '/ithome/it',
            },
        ],
        soft: [
            {
                title: 'Software house',
                docs: 'https://docs.rsshub.app/en/new-media.html#it-zhi-jia',
                source: '/',
                target: '/ithome/soft',
            },
        ],
        win10: [
            {
                title: 'win10 House',
                docs: 'https://docs.rsshub.app/en/new-media.html#it-zhi-jia',
                source: '/',
                target: '/ithome/win10',
            },
        ],
        iphone: [
            {
                title: 'iphone home',
                docs: 'https://docs.rsshub.app/en/new-media.html#it-zhi-jia',
                source: '/',
                target: '/ithome/iphone',
            },
        ],
        ipad: [
            {
                title: 'ipad home',
                docs: 'https://docs.rsshub.app/en/new-media.html#it-zhi-jia',
                source: '/',
                target: '/ithome/ipad',
            },
        ],
        android: [
            {
                title: 'android home',
                docs: 'https://docs.rsshub.app/en/new-media.html#it-zhi-jia',
                source: '/',
                target: '/ithome/android',
            },
        ],
        digi: [
            {
                title: 'Digital home',
                docs: 'https://docs.rsshub.app/en/new-media.html#it-zhi-jia',
                source: '/',
                target: '/ithome/digi',
            },
        ],
        next: [
            {
                title: 'The era of intelligent',
                docs: 'https://docs.rsshub.app/en/new-media.html#it-zhi-jia',
                source: '/',
                target: '/ithome/next',
            },
        ],
    },

    'govopendata.com': {
        _name: 'Text version of the News Feed',
        cn: [
            {
                title: 'News feeds text version',
                docs: 'https://docs.rsshub.app/en/traditional-media.html#xin-wen-lian-bo-wen-zi-ban',
                source: '/xinwenlianbo',
                target: '/xinwenlianbo/index',
            },
        ],
    },

    'steampowered.com': {
        _name: 'Steam',
        store: [
            {
                title: 'search',
                docs: 'https://docs.rsshub.app/en/game.html#steam',
                source: '/search/',
                target: (params, url) => `/steam/search/${new URL(url).searchParams}`,
            },
            {
                title: 'news',
                docs: 'https://docs.rsshub.app/en/game.html#steam',
                source: '/news/',
                target: (params, url) => `/steam/news/${new URL(url).searchParams.get('appids')}`,
            },
        ],
    },
    'baijingapp.com': {
        _name: '白鲸出海',
        www: [
            {
                title: 'Article',
                docs: 'https://docs.rsshub.app/en/new-media.html#bai-jing-chu-hai',
                source: '',
                target: '/baijing',
            },
        ],
    },
    'xiaomi.cn': {
        _name: '小米社区',
        www: [
            {
                title: 'Circle',
                docs: 'https://docs.rsshub.app/en/bbs.html#xiao-mi-she-qu',
                source: '/board/:boardId',
                target: '/mi/bbs/board/:boardId',
            },
        ],
    },
    '163.com': {
        _name: '网易',
        ds: [
            {
                title: 'God',
                docs: 'https://docs.rsshub.app/en/game.html#wang-yi-da-shen',
                source: '/user/:id',
                target: '/netease/ds/:id',
            },
        ],
        open: [
            {
                title: 'Open class - excellent course',
                docs: 'https://docs.rsshub.app/en/study.html#wang-yi-gong-kai-ke',
                source: '/',
                target: '/open163/vip',
            },
            {
                title: 'Open course - the latest course',
                docs: 'https://docs.rsshub.app/en/study.html#wang-yi-gong-kai-ke',
                source: '/',
                target: '/open163/latest',
            },
        ],
    },
    'suzhou.gov.cn': {
        _name: '苏州市政府',
        www: [
            {
                title: 'Government news',
                docs: 'https://docs.rsshub.app/en/government.html#su-zhou-shi-ren-min-zheng-fu',
                source: '/szsrmzf/:uid/nav_list.shtml',
                target: '/gov/suzhou/news/:uid',
            },
        ],
    },
    'mqube.net': {
        _name: 'MQube',
        www: [
            {
                title: 'Total station last updated',
                docs: 'https://docs.rsshub.app/en/multimedia.html#mqube',
                source: '/',
                target: '/mqube/latest',
            },
            {
                title: 'Total station daily ranking',
                docs: 'https://docs.rsshub.app/en/multimedia.html#mqube',
                source: '/',
                target: '/mqube/top',
            },
            {
                title: 'Personal recently updated',
                docs: 'https://docs.rsshub.app/en/multimedia.html#mqube',
                source: '/user/:user',
                target: '/mqube/user/:user',
            },
            {
                title: 'The label recently updated',
                docs: 'https://docs.rsshub.app/en/multimedia.html#mqube',
                source: '/search/tag/:tag',
                target: '/mqube/tag/:tag',
            },
        ],
    },
    'nikkei.com': {
        _name: '日本経済新聞',
        www: [
            {
                title: 'ホ ー Rousseau PE ー JI',
                docs: 'https://docs.rsshub.app/en/traditional-media.html#ri-ben-jing-ji-xin-wen',
                source: '/',
                target: '/nikkei/index',
            },
        ],
    },
    'last.fm': {
        _name: 'Last.fm',
        www: [
            {
                title: 'The user to play the recording',
                docs: 'https://docs.rsshub.app/en/multimedia.html#last-fm',
                source: ['/user/:user', '/user/:user/*'],
                target: '/lastfm/recent/:user',
            },
            {
                title: 'Users Love record',
                docs: 'https://docs.rsshub.app/en/multimedia.html#last-fm',
                source: ['/user/:user', '/user/:user/*'],
                target: '/lastfm/loved/:user',
            },
            {
                title: 'Station Top the list',
                docs: 'https://docs.rsshub.app/en/multimedia.html#last-fm',
                source: '/charts',
                target: '/lastfm/top',
            },
        ],
    },
    'ddrk.me': {
        _name: '低端影视',
        www: [
            {
                title: 'Home',
                docs: 'https://docs.rsshub.app/en/multimedia.html#di-duan-ying-shi',
                source: '/',
                target: '/ddrk/index',
            },
            {
                title: 'Tags',
                docs: 'https://docs.rsshub.app/en/multimedia.html#di-duan-ying-shi',
                source: '/tag/:tag',
                target: '/ddrk/tag/:tag',
            },
            {
                title: 'Classification',
                docs: 'https://docs.rsshub.app/en/multimedia.html#di-duan-ying-shi',
                source: ['/category/:category', '/category/:uplevel/:category'],
                target: '/ddrk/category/:category',
            },
            {
                title: 'TV drama set update',
                docs: 'https://docs.rsshub.app/en/multimedia.html#di-duan-ying-shi',
                source: ['/:name', '/:name/:season'],
                target: (params) => {
                    if (params.name !== 'category' && params.name !== 'tag' && params.name !== 'ddrklogin' && params.name !== 'about' && params.name !== 'deleted') {
                        return `/ddrk/update/${params.name}${params.season ? '/' + params.season : ''}`;
                    }
                },
            },
        ],
    },
    'google.com': {
        _name: '谷歌',
        photos: [
            {
                title: 'Album',
                docs: 'https://docs.rsshub.app/en/picture.html#google-xiang-ce',
                source: '/share/*',
                target: (params, url, document) => {
                    const id = document && document.querySelector('html').innerHTML.match(/photos.app.goo.gl\/(.*?)"/)[1];
                    return id ? `/google/album/${id}` : '';
                },
            },
        ],
        sites: [
            {
                title: 'Sites',
                docs: 'https://docs.rsshub.app/en/blog.html#google-sites',
                source: ['/site/:id/*', '/site/:id'],
                target: '/google/sites/:id',
            },
        ],
    },
    'javlibrary.com': {
        _name: 'javlibrary',
        www: [
            {
                title: 'New topic',
                docs: 'https://docs.rsshub.app/en/multimedia.html#javlibrary',
                source: '/cn',
                target: '/javlibrary/videos/update',
            },
            {
                title: 'New release',
                docs: 'https://docs.rsshub.app/en/multimedia.html#javlibrary',
                source: '/cn',
                target: '/javlibrary/videos/newrelease',
            },
            {
                title: 'New added',
                docs: 'https://docs.rsshub.app/en/multimedia.html#javlibrary',
                source: '/cn',
                target: '/javlibrary/videos/newentries',
            },
            {
                title: 'Most wanted',
                docs: 'https://docs.rsshub.app/en/multimedia.html#javlibrary',
                source: '/cn',
                target: '/javlibrary/videos/mostwanted',
            },
            {
                title: 'High evaluation',
                docs: 'https://docs.rsshub.app/en/multimedia.html#javlibrary',
                source: '/cn',
                target: '/javlibrary/videos/bestrated',
            },
            {
                title: 'Best reviews',
                docs: 'https://docs.rsshub.app/en/multimedia.html#javlibrary',
                source: '/cn',
                target: '/javlibrary/bestreviews',
            },
            {
                title: 'Movie star',
                docs: 'https://docs.rsshub.app/en/multimedia.html#javlibrary',
                source: '/cn/vl_star.php',
                target: (params, url) => `/javlibrary/stars/${new URL(url).searchParams.get('s')}`,
            },
            {
                title: 'User articles',
                docs: 'https://docs.rsshub.app/en/multimedia.html#javlibrary',
                source: ['/cn/user.php', '/cn/userposts.php', '/cn/userwateched.php', '/cn/userowned.php', '/cn/userwanted.php'],
                target: (params, url) => `/javlibrary/users/${new URL(url).searchParams.get('u')}/userposts`,
            },
            {
                title: 'The user has',
                docs: 'https://docs.rsshub.app/en/multimedia.html#javlibrary',
                source: ['/cn/user.php', '/cn/userposts.php', '/cn/userwateched.php', '/cn/userowned.php', '/cn/userwanted.php'],
                target: (params, url) => `/javlibrary/users/${new URL(url).searchParams.get('u')}/userowned`,
            },
            {
                title: 'User seen',
                docs: 'https://docs.rsshub.app/en/multimedia.html#javlibrary',
                source: ['/cn/user.php', '/cn/userposts.php', '/cn/userwateched.php', '/cn/userowned.php', '/cn/userwanted.php'],
                target: (params, url) => `/javlibrary/users/${new URL(url).searchParams.get('u')}/userwatched`,
            },
            {
                title: 'The user wants to',
                docs: 'https://docs.rsshub.app/en/multimedia.html#javlibrary',
                source: ['/cn/user.php', '/cn/userposts.php', '/cn/userwateched.php', '/cn/userowned.php', '/cn/userwanted.php'],
                target: (params, url) => `/javlibrary/users/${new URL(url).searchParams.get('u')}/userwanted`,
            },
        ],
    },
    'qidian.com': {
        _name: '起点',
        book: [
            {
                title: 'Chapter',
                docs: 'https://docs.rsshub.app/en/reading.html#qi-dian',
                source: '/info/:id',
                target: '/qidian/chapter/:id',
            },
            {
                title: 'Discussion',
                docs: 'https://docs.rsshub.app/en/reading.html#qi-dian',
                source: '/info/:id',
                target: '/qidian/forum/:id',
            },
        ],
        www: [
            {
                title: 'Free',
                docs: 'https://docs.rsshub.app/en/reading.html#qi-dian',
                source: '/free',
                target: '/qidian/free',
            },
            {
                title: 'Girls free',
                docs: 'https://docs.rsshub.app/en/reading.html#qi-dian',
                source: '/mm/free',
                target: '/qidian/free/mm',
            },
        ],
    },
    'hackerone.com': {
        _name: 'HackerOne',
        '.': [
            {
                title: 'HackerOne Hacker Activity',
                docs: 'https://docs.rsshub.app/en/other.html#hackerone-hacker-activity',
                source: '/hacktivity',
                target: '/hackerone/hacktivity',
            },
        ],
    },
    'cowlevel.net': {
        _name: '奶牛关',
        '.': [
            {
                title: 'Elements of the article',
                docs: 'https://docs.rsshub.app/en/game.html#nai-niu-guan',
                source: ['/element/:id', '/element/:id/article'],
                target: '/cowlevel/element/:id',
            },
        ],
    },
    'beijing.gov.cn': {
        wjw: [
            {
                title: 'The Beijing Health Commission',
                docs: 'https://docs.rsshub.app/en/government.html#bei-jing-shi-wei-sheng-jian-kang-wei-yuan-hui',
                source: '/xwzx_20031/:caty',
                target: '/gov/beijing/mhc/:caty',
            },
        ],
    },
    'zju.edu.cn': {
        _name: '浙江大学',
        cst: [
            {
                title: 'Software Academy - Full notification',
                docs: 'https://docs.rsshub.app/en/university.html#zhe-jiang-da-xue',
                source: ['', '/*tpath'],
                target: '/zju/cst/0',
            },
            {
                title: 'Software College - admissions information',
                docs: 'https://docs.rsshub.app/en/university.html#zhe-jiang-da-xue',
                source: '/32178/list.htm',
                target: '/zju/cst/1',
            },
            {
                title: 'Software College - Academic Management',
                docs: 'https://docs.rsshub.app/en/university.html#zhe-jiang-da-xue',
                source: '/36216/list.htm',
                target: '/zju/cst/2',
            },
            {
                title: 'Software College - paper management',
                docs: 'https://docs.rsshub.app/en/university.html#zhe-jiang-da-xue',
                source: '/36217/list.htm',
                target: '/zju/cst/3',
            },
            {
                title: 'Software Academy - si administrative work',
                docs: 'https://docs.rsshub.app/en/university.html#zhe-jiang-da-xue',
                source: '/36192/list.htm',
                target: '/zju/cst/4',
            },
            {
                title: 'Software Academy - Award awards',
                docs: 'https://docs.rsshub.app/en/university.html#zhe-jiang-da-xue',
                source: '/36228/list.htm',
                target: '/zju/cst/5',
            },
            {
                title: 'Software College - internship employment',
                docs: 'https://docs.rsshub.app/en/university.html#zhe-jiang-da-xue',
                source: '/36193/list.htm',
                target: '/zju/cst/6',
            },
            {
                title: 'Software School - International Internship',
                docs: 'https://docs.rsshub.app/en/university.html#zhe-jiang-da-xue',
                source: '/36235/list.htm',
                target: '/zju/cst/7',
            },
            {
                title: 'Software Academy - national cooperation in scientific research',
                docs: 'https://docs.rsshub.app/en/university.html#zhe-jiang-da-xue',
                source: '/36194/list.htm',
                target: '/zju/cst/8',
            },
            {
                title: 'Software Academy - International Cooperation in scientific research',
                docs: 'https://docs.rsshub.app/en/university.html#zhe-jiang-da-xue',
                source: '/36246/list.htm',
                target: '/zju/cst/9',
            },
        ],
    },
    'kuaidi100.com': {
        _name: '快递100',
        '.': [
            {
                title: 'Courier tracking',
                docs: 'https://docs.rsshub.app/en/other.html#kuai-di-100',
                source: '/',
                target: (params, url, document) => {
                    const postid = document && document.querySelector('#postid').value;
                    const com = document && document.querySelector('#selectComBtn').childNodes[1].attributes[1].value;
                    if (com && com !== 'default' && postid) {
                        return `/kuaidi100/track/${com}/${postid}`;
                    }
                },
            },
            {
                title: 'Support the courier company list',
                docs: 'https://docs.rsshub.app/en/other.html#kuai-di-100',
                source: '/',
                target: '/kuaidi100/company',
            },
        ],
    },
    'hrbeu.edu.cn': {
        _name: '哈尔滨工程大学',
        yjsy: [
            {
                title: 'Graduate school - notice',
                docs: 'https://docs.rsshub.app/en/university.html#ha-er-bin-gong-cheng-da-xue',
                source: '/*',
                target: '/heu/yjsy/announcement',
            },
            {
                title: 'Graduate school - news',
                docs: 'https://docs.rsshub.app/en/university.html#ha-er-bin-gong-cheng-da-xue',
                source: '/*',
                target: '/heu/yjsy/news',
            },
            {
                title: 'Graduate School - National Public School Project',
                docs: 'https://docs.rsshub.app/en/university.html#ha-er-bin-gong-cheng-da-xue',
                source: '/*',
                target: '/heu/yjsy/gjgp',
            },
            {
                title: 'Graduate School - International Cooperation and Exchange project',
                docs: 'https://docs.rsshub.app/en/university.html#ha-er-bin-gong-cheng-da-xue',
                source: '/*',
                target: '/heu/yjsy/gjhz',
            },
        ],
        job: [
            {
                title: 'Employment services platform - Notification announcement',
                docs: 'https://docs.rsshub.app/en/university.html#ha-er-bin-gong-cheng-da-xue',
                source: '/*',
                target: '/heu/job/tzgg',
            },
        ],
        uae: [
            {
                title: 'Water acoustic Institute - News',
                docs: 'https://docs.rsshub.app/en/university.html#ha-er-bin-gong-cheng-da-xue',
                source: '/*',
                target: '/heu/shuisheng/xwdt',
            },
            {
                title: 'Graduate school - notice',
                docs: 'https://docs.rsshub.app/en/university.html#ha-er-bin-gong-cheng-da-xue',
                source: '/*',
                target: '/heu/shuisheng/tzgg',
            },
        ],
    },
    'gongxue.cn': {
        _name: '工学网',
        '.': [
            {
                title: 'News',
                docs: 'https://docs.rsshub.app/en/university.html#ha-er-bin-gong-cheng-da-xue',
                source: '/*',
                target: '/heu/gongxue/yw',
            },
            {
                title: 'Newsletter',
                docs: 'https://docs.rsshub.app/en/university.html#ha-er-bin-gong-cheng-da-xue',
                source: '/*',
                target: '/heu/gongxue/sx',
            },
        ],
    },
    'nsfc.gov.cn': {
        _name: '国家自然科学基金委员会',
        www: [
            {
                title: 'Fund news',
                docs: 'https://docs.rsshub.app/en/other.html#guo-jia-zi-ran-ke-xue-ji-jin-wei-yuan-hui',
                source: '/*',
                target: '/nsfc/news/jjyw',
            },
            {
                title: 'Notice',
                docs: 'https://docs.rsshub.app/en/other.html#guo-jia-zi-ran-ke-xue-ji-jin-wei-yuan-hui',
                source: '/*',
                target: '/nsfc/news/tzgg',
            },
            {
                title: 'The financing of the outcome',
                docs: 'https://docs.rsshub.app/en/other.html#guo-jia-zi-ran-ke-xue-ji-jin-wei-yuan-hui',
                source: '/*',
                target: '/nsfc/news/zzcg',
            },
            {
                title: 'Science Alert',
                docs: 'https://docs.rsshub.app/en/other.html#guo-jia-zi-ran-ke-xue-ji-jin-wei-yuan-hui',
                source: '/*',
                target: '/nsfc/news/kpkx',
            },
        ],
    },
    'japanpost.jp': {
        _name: '日本郵便',
        'trackings.post': [
            {
                title: 'Mail・charge composition の tracing',
                docs: 'https://docs.rsshub.app/en/other.html#ri-ben-you-bian',
                source: '/services/srv/search/direct',
                target: (params, url) => {
                    const reqCode = new URL(url).searchParams.get('reqCodeNo1').toUpperCase();
                    const locale = new URL(url).searchParams.get('locale').toLowerCase();
                    if ((reqCode.search(/^(?:\d{12}|[A-Z]{2}\d{9}[A-Z]{2})$/) === 0 && locale === 'ja') || locale === 'en') {
                        return `/japanpost/${reqCode}/${locale}`;
                    }
                },
            },
        ],
    },
    'apnews.com': {
        _name: 'AP News',
        '.': [
            {
                title: 'Topic',
                docs: 'https://docs.rsshub.app/en/traditional-media.html#ap-news',
                source: '/:topic',
                target: '/apnews/topics/:topic',
            },
        ],
    },
    'csc.edu.cn': {
        _name: '国家留学网',
        www: [
            {
                title: 'Selection notification',
                docs: 'https://docs.rsshub.app/en/other.html#guo-jia-liu-xue-wang',
                source: '/*',
                target: '/csc/notice/lxtz',
            },
            {
                title: 'Integrated project rubric',
                docs: 'https://docs.rsshub.app/en/other.html#guo-jia-liu-xue-wang',
                source: '/*',
                target: '/csc/notice/xmzl',
            },
            {
                title: 'FAQ',
                docs: 'https://docs.rsshub.app/en/other.html#guo-jia-liu-xue-wang',
                source: '/*',
                target: '/csc/notice/wtjd',
            },
            {
                title: 'Admission announcement',
                docs: 'https://docs.rsshub.app/en/other.html#guo-jia-liu-xue-wang',
                source: '/*',
                target: '/csc/notice/lqgg',
            },
        ],
    },
    'biquge5200.com': {
        www: [
            {
                title: 'The current novel',
                docs: 'https://docs.rsshub.app/en/reading.html#bi-qu-ge',
                source: '/:id',
                target: '/novel/biquge/:id',
            },
        ],
    },
    'matters.news': {
        _name: 'Matters',
        '.': [
            {
                title: 'The latest sort',
                docs: 'https://docs.rsshub.app/en/new-media.html#matters',
                source: '',
                target: '/matters/latest',
            },
            {
                title: 'Popular articles',
                docs: 'https://docs.rsshub.app/en/new-media.html#matters',
                source: '',
                target: '/matters/hot',
            },
            {
                title: 'Tags',
                docs: 'https://docs.rsshub.app/en/new-media.html#matters',
                source: '/tags/:tid',
                target: '/matters/tags/:tid',
            },
            {
                title: 'Author',
                docs: 'https://docs.rsshub.app/en/new-media.html#matters',
                source: ['/:id', '/:id/comments'],
                target: (params) => {
                    const uid = params.id.replace('@', '');
                    return uid ? `/matters/author/${uid}` : '';
                },
            },
        ],
    },
    'zhaishuyuan.com': {
        _name: '斋书苑',
        www: [
            {
                title: 'The latest Chapter',
                docs: 'https://docs.rsshub.app/en/reading.html#zhai-shu-yuan',
                source: ['/book/:id', '/read/:id'],
                target: '/novel/zhaishuyuan/:id',
            },
        ],
    },
    'hbut.edu.cn': {
        _name: '湖北工业大学',
        www: [
            {
                title: 'News Center',
                docs: 'http://docs.rsshub.app/university.html#hu-bei-gong-ye-da-xue',
                source: '/xwzx/:name',
                target: (params) => {
                    const type = params.name.replace('.htm', '');
                    return type ? `/hbut/news/${type}` : '/hbut/news/tzgg';
                },
            },
        ],
        jsjxy: [
            {
                title: 'News',
                docs: 'http://docs.rsshub.app/university.html#hu-bei-gong-ye-da-xue',
                source: '/index/xwdt.htm',
                target: '/hbut/cs/xwdt',
            },
            {
                title: 'Notice',
                docs: 'http://docs.rsshub.app/university.html#hu-bei-gong-ye-da-xue',
                source: '/index/tzgg.htm',
                target: '/hbut/cs/tzgg',
            },
            {
                title: 'Teaching information',
                docs: 'http://docs.rsshub.app/university.html#hu-bei-gong-ye-da-xue',
                source: '/jxxx.htm',
                target: '/hbut/cs/jxxx',
            },
            {
                title: 'Research dynamic',
                docs: 'http://docs.rsshub.app/university.html#hu-bei-gong-ye-da-xue',
                source: '/kxyj/kydt.htm',
                target: '/hbut/cs/kydt',
            },
            {
                title: 'Party building activities',
                docs: 'http://docs.rsshub.app/university.html#hu-bei-gong-ye-da-xue',
                source: '/djhd/djhd.htm',
                target: '/hbut/cs/djhd',
            },
        ],
    },
    'zcool.com.cn': {
        _name: '站酷',
        www: [
            {
                title: 'All of the recommended',
                docs: 'https://docs.rsshub.app/en/design.html#zhan-ku',
                source: '',
                target: '/zcool/recommenda/all',
            },
            {
                title: 'Home featured',
                docs: 'https://docs.rsshub.app/en/design.html#zhan-ku',
                source: '',
                target: '/zcool/recommenda/home',
            },
            {
                title: 'Edit recommend',
                docs: 'https://docs.rsshub.app/en/design.html#zhan-ku',
                source: '',
                target: '/zcool/recommenda/home',
            },
            {
                title: 'Article recommended',
                docs: 'https://docs.rsshub.app/en/design.html#zhan-ku',
                source: '',
                target: '/zcool/recommenda/article',
            },
            {
                title: 'Works list',
                docs: 'https://docs.rsshub.app/en/design.html#zhan-ku',
                source: '',
                target: '/zcool/top/design',
            },
            {
                title: 'The article list',
                docs: 'https://docs.rsshub.app/en/design.html#zhan-ku',
                source: '',
                target: '/zcool/top/article',
            },
            {
                title: 'The user works',
                docs: 'https://docs.rsshub.app/en/design.html#zhan-ku',
                source: ['/u/:id'],
                target: `/zcoo/user/:id`,
            },
        ],
    },
    't.me': {
        _name: 'Telegram',
        '.': [
            {
                title: 'Channels',
                docs: 'https://docs.rsshub.app/en/social-media.html#telegram',
                source: '/:username',
                target: (params, url, document) => {
                    const isChannel = document && document.querySelector('.tgme_action_button_label');
                    if (isChannel) {
                        return '/telegram/channel/:username';
                    }
                },
            },
            {
                title: 'Channels',
                docs: 'https://docs.rsshub.app/en/social-media.html#telegram',
                source: '/s/:username',
                target: '/telegram/channel/:username',
            },
        ],
    },
    'zhuixinfan.com': {
        _name: '追新番日剧站',
        '.': [
            {
                title: 'Update the list',
                docs: 'https://docs.rsshub.app/en/multimedia.html#zhui-xin-fan-ri-ju-zhan',
                source: ['/main.php'],
                target: '/zhuixinfan/list',
            },
        ],
    },
    'etoland.co.kr': {
        _name: 'eTOLAND',
        '.': [
            {
                title: 'Theme patch',
                docs: 'https://docs.rsshub.app/en/bbs.html#etoland',
                source: ['/bbs/board.php', '/plugin/mobile/board.php'],
                target: (params, url) => `/etoland/${new URL(url).searchParams.get('bo_table')}`,
            },
        ],
    },
    'qq.com': {
        _name: '微信',
        'mp.weixin': [
            {
                title: 'Public Number column',
                docs: 'https://docs.rsshub.app/en/new-media.html#gong-zhong-hao-lan-mu-fei-tui-song-li-shi-xiao-xi',
                source: '/mp/homepage',
                target: (params, url) => `/wechat/mp/homepage/${new URL(url).searchParams.get('__biz')}/${new URL(url).searchParams.get('hid')}/${new URL(url).searchParams.get('cid') ? new URL(url).searchParams.get('cid') : ''}`,
            },
        ],
    },
    'javbus.com': {
        _name: 'JavBus',
        www: [
            {
                title: 'Home',
                docs: 'https://docs.rsshub.app/en/multimedia.html#javbus',
                source: '/',
                target: '/javbus/home',
            },
            {
                title: 'Classification',
                docs: 'https://docs.rsshub.app/en/multimedia.html#javbus',
                source: '/genre/:gid',
                target: '/javbus/genre/:gid',
            },
            {
                title: 'Actor',
                docs: 'https://docs.rsshub.app/en/multimedia.html#javbus',
                source: '/star/:sid',
                target: '/javbus/star/:sid',
            },
            {
                title: 'Series',
                docs: 'https://docs.rsshub.app/en/multimedia.html#javbus',
                source: '/series/:seriesid',
                target: '/javbus/series/:seriesid',
            },
            {
                title: 'Home / infantry',
                docs: 'https://docs.rsshub.app/en/multimedia.html#javbus',
                source: '/uncensored',
                target: '/javbus/uncensored/home',
            },
            {
                title: 'Classification / infantry',
                docs: 'https://docs.rsshub.app/en/multimedia.html#javbus',
                source: '/uncensored/genre/:gid',
                target: '/javbus/uncensored/genre/:gid',
            },
            {
                title: 'Actors / infantry',
                docs: 'https://docs.rsshub.app/en/multimedia.html#javbus',
                source: '/uncensored/star/:sid',
                target: '/javbus/uncensored/star/:sid',
            },
            {
                title: 'Series / infantry',
                docs: 'https://docs.rsshub.app/en/multimedia.html#javbus',
                source: '/uncensored/series/:seriesid',
                target: '/javbus/uncensored/series/:seriesid',
            },
        ],
    },
    'javbus.one': {
        _name: 'JavBus',
        www: [
            {
                title: 'Home / continental gathering',
                docs: 'https://docs.rsshub.app/en/multimedia.html#javbus',
                source: '/',
                target: '/javbus/western/home',
            },
            {
                title: 'Category / continental-FY',
                docs: 'https://docs.rsshub.app/en/multimedia.html#javbus',
                source: '/genre/:gid',
                target: '/javbus/western/genre/:gid',
            },
            {
                title: 'The actor / continental gathering',
                docs: 'https://docs.rsshub.app/en/multimedia.html#javbus',
                source: '/star/:sid',
                target: '/javbus/western/star/:sid',
            },
            {
                title: 'Series / continental gathering',
                docs: 'https://docs.rsshub.app/en/multimedia.html#javbus',
                source: '/series/:seriesid',
                target: '/javbus/western/series/:seriesid',
            },
        ],
    },
    'sexinsex.net': {
        _name: 'sexinsex',
        '.': [
            {
                title: 'Partition posts',
                docs: 'https://docs.rsshub.app/en/multimedia.html#sexinsex',
                source: '/bbs/:path',
                target: (params, url) => {
                    let pid, typeid;
                    const static_matched = params.path.match(/forum-(\d+)-\d+.html/);
                    if (static_matched) {
                        pid = static_matched[1];
                    } else if (params.path === 'forumdisplay.php') {
                        pid = new URL(url).searchParams.get('fid');
                        typeid = new URL(url).searchParams.get('typeid');
                    } else {
                        return false;
                    }
                    return `/sexinsex/${pid}/${typeid ? typeid : ''}`;
                },
            },
        ],
    },
    't66y.com': {
        _name: '草榴社区',
        www: [
            {
                title: 'Partition posts',
                docs: 'https://docs.rsshub.app/en/multimedia.html#cao-liu-she-qu',
                source: '/thread0806.php',
                target: (params, url) => {
                    const id = new URL(url).searchParams.get('fid');
                    const type = new URL(url).searchParams.get('type');
                    return `/t66y/${id}/${type ? type : ''}`;
                },
            },
        ],
    },
    'umass.edu': {
        _name: 'UMASS Amherst',
        ece: [
            {
                title: 'ECE News',
                docs: 'http://docs.rsshub.app/en/university.html#umass-amherst',
                source: '/news',
                target: '/umass/amherst/ecenews',
            },
        ],
        'www.cics': [
            {
                title: 'CICS News',
                docs: 'http://docs.rsshub.app/en/university.html#umass-amherst',
                source: '/news',
                target: '/umass/amherst/csnews',
            },
        ],
    },
    'lofter.com': {
        _name: 'Lofter',
        www: [
            {
                title: 'Topic (tags)',
                docs: 'https://docs.rsshub.app/en/social-media.html#lofter',
                source: ['/tag/:name', '/tag/:name/:type'],
                target: (params) => `/lofter/tag/${params.name}/${params.type || ''}`,
            },
        ],
    },

    'yuque.com': {
        _name: '语雀',
        www: [
            {
                title: 'Knowledge base',
                docs: 'https://docs.rsshub.app/en/study.html#yu-que',
                source: ['/:space/:book'],
                target: (params, url, document) => {
                    const match = document.documentElement.innerHTML.match(/JSON\.parse\(decodeURIComponent\("(.*)"\)/);
                    if (match && match[1]) {
                        const dataStr = match[1];
                        try {
                            const appData = JSON.parse(decodeURIComponent(dataStr));
                            return `/yuque/doc/${appData.book.id}`;
                        } catch (e) {
                            // pass
                        }
                    }
                },
            },
        ],
    },
    'bjeea.com': {
        _name: '北京考试院',
        www: [
            {
                title: 'Home / notice',
                docs: 'https://docs.rsshub.app/en/government.html#bei-jing-jiao-yu-kao-shi-yuan',
                source: ['/html/bjeeagg'],
                target: '/gov/beijing/bjeea/bjeeagg',
            },
            {
                title: 'Home / audition policy',
                docs: 'https://docs.rsshub.app/en/government.html#bei-jing-jiao-yu-kao-shi-yuan',
                source: ['/html/zkzc'],
                target: '/gov/beijing/bjeea/zkzc',
            },
            {
                title: 'Home / self Express',
                docs: 'https://docs.rsshub.app/en/government.html#bei-jing-jiao-yu-kao-shi-yuan',
                source: ['/html/zkkd'],
                target: '/gov/beijing/bjeea/zkkd',
            },
        ],
    },
    'hk01.com': {
        _name: '香港01',
        www: [
            {
                title: 'The most Hit',
                docs: 'https://docs.rsshub.app/en/traditional-media.html#xiang-gang-01',
                source: ['/hot', '/'],
                target: '/hk01/hot',
            },
            {
                title: 'zone',
                docs: 'https://docs.rsshub.app/en/traditional-media.html#xiang-gang-01',
                source: '/zone/:id/:title',
                target: '/hk01/zone/:id',
            },
            {
                title: 'channel',
                docs: 'https://docs.rsshub.app/en/traditional-media.html#xiang-gang-01',
                source: '/channel/:id/:title',
                target: '/hk01/channel/:id',
            },
            {
                title: 'issue',
                docs: 'https://docs.rsshub.app/en/traditional-media.html#xiang-gang-01',
                source: '/issue/:id/:title',
                target: '/hk01/issue/:id',
            },
            {
                title: 'tag',
                docs: 'https://docs.rsshub.app/en/traditional-media.html#xiang-gang-01',
                source: '/tag/:id/:title',
                target: '/hk01/tag/:id',
            },
        ],
        ebook: [
            {
                title: 'The Hong Kong 01 of weekly',
                docs: 'https://docs.rsshub.app/en/traditional-media.html#xiang-gang-01',
                source: ['/', '/subscribe'],
                target: '/hk01/ebook',
            },
        ],
    },
    'douban.com': {
        _name: '豆瓣',
        www: [
            {
                title: 'The user of the broadcast',
                docs: 'https://docs.rsshub.app/en/social-media.html#dou-ban',
                source: '/people/:user/',
                target: (params, url, document) => {
                    const uid = document && document.querySelector('html').innerHTML.match(/"id":"([0-9]+)"/)[1];
                    return uid ? `/douban/people/${uid}/status` : '';
                },
            },
        ],
    },
};
