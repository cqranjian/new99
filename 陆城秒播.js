// 注入全局方法 (仅支持tvbox的js1以及c#版drpy的js0，暂不支持drpy官方py版本的js0)
// 注入全局方法 (仅支持tvbox的js1以及c#版drpy的js0，暂不支持drpy官方py版本的js0)
// 注入全局方法 (仅支持tvbox的js1以及c#版drpy的js0，暂不支持drpy官方py版本的js0)
getHeaders =函数（输入）{
    令 t =新日期(  ) 。获取时间(  )。到字符串（）；
	让标题= {
        '版本名称'：'1.0.6'，
        '版本代码'：'6'，
        'package_name' : 'com.app.nanguatv' ,
        '符号'：md5 （'c431ea542cee9679#uBFszdEM0oL0JRn@' +t ）。转为大写(  ) ,
        'imei' : 'c431ea542cee9679' ,
        ‘时间毫秒’：t，
        '用户代理'：'okhttp/4.6.0'
	} ;
	返回标头
}
	
变量规则= {
	title : '畅梦影视' ,
	主机: 'http://ys.changmengyun.com' ,
	homeUrl : '/api.php/provide/vod_rank?app=ylys&sort_type=month&imei=c431ea542cee9679&id=2&page=1' ,
    url: '/api.php/provide/vod_list?app=ylys&id=fyclassfyfilter&page=fypage&imei=c431ea542cee9679' ,
    detailUrl : '/api.php/provide/vod_detail?app=ylys&imei=c431ea542cee9679&id=fyid' ,
    searchUrl : '/api.php/provide/search_result_more?app=ylys&video_name=**&pageSize=20&tid=0&imei=c431ea542cee9679&page=fypage' ,
	可搜索：2 ,
	快速搜索：0，
	可过滤：1 ,
	filter_url: '&area={{fl.area}}&year={{fl.year}}&type={{fl.class}}&total={{fl.total 或 "状态"}}&order={{fl.by或“新上线”}}' ,'&area={{fl.area}}&year={{fl.year}}&type={{fl.class}}&total={{fl.total 或 "状态"}}&order={{fl.by或“新上线”}}' ,
    筛选：{
        港台剧地区value" : [ { "n" : "全部" , "v" : "年份" } , { "n" : "2023" , "v" : } , { "n" : "2022" , "v" : } , { "n" : "2021" , "v" : } , { "n" : "2020", "v" : } , { "n" :2023"2022"2021"2020""2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"10年代","v":"10年代"} , { "n" : "00 年代" , "v" : } , { "n" : "90 年代" , "v" : } , { "n" : "80 年代" " , "v" : } ] } , { "key" : "by" , "name" : "排序" , "value" : [ { "n": , "v" : } ,00年代"90年代"80年代"热播榜热播榜"{ "n" :好评榜 , "v" : } , { "n" : , "v" : } ] } ] ,好评榜"新上线新上线"
        "1":"class""类型""全部""类型""动作片""动作片""喜剧片""喜剧片""爱情片""爱情片""n" :科幻片 , "v" : } , { "n" : , "v" : } , { "n" : , " v" : } , { "n" : , "v" : } , { "n" : , "v" :} ] } , { "键" : ,科幻片"恐怖片恐怖片""战争片战争片"惊悚片惊悚片"area"name":"地区","全部""地区""华语""华语""香港地区""香港地区""美国""美国""欧洲""欧洲", { "n" :"韩国" , "v" : } , { "n" : , "v" : } , { "n" : , "v" : } , { "n" : , "v" : } , { "n" : , "v" : } , { "n" : ,"韩国""日本""日本""台湾地区""台湾地区""泰国""泰国""台湾地区""台湾地区""印度""v" : } , { "n" : , "v" : } ] } , { "key" : , "name" : , "value" : [ { "n" : , "v" : } , { "n" : , "v" :} , { "n" : , "v" :印度"其它其它""year""年份""全部""年份""2023""2023""2022""2022" } , { "n" :"2021" , "v" : } , { "n" : , "v" : } , { "n" : , "v" : } , { "n" : , "v" : } , { "n" :, "v" : } , { "n""2021""2020"2020""2019"2019""2018"2018""2017"2017":"2016" , "v" : } , { "n" : , "v" : } , { "n" : , "v" : } , { "n" : , "v" : } , { "n" : , "v" :} , { "n" : , "v" :2016""2015"2015""10年代"10年代""00年代"00年代""90年代"90年代""80年代"80年代" } ] } , { "key" :"by" , "name" :"排序" , "value" : [ { "n" :"热播榜" , "v" : } , { "n" : , "v" : } , { "n" : , "v" :} ] } ] ,"热播榜"好评榜好评榜""新上线"新上线"
        "4":[{"key":"class","name":"类型","value":[{"n":"全部","v" : } , { "n" : , "v" : } , { "n" : , "v" : } , { "n" : , "v" : } , { "n" : , "v" : } ] } ,{ "key" : , "name" : ,类型"国产漫国产漫"欧美漫欧美漫"日韩漫日韩漫"港台漫港台漫""area"地区"value" : [ { "n" :全部 , "v" : } , { "n" : , "v" : } , { "n" : , "v" : } , { "n" : , "v" : } , { "n" : ,"v" : } , { "n" :地区"中国大陆中国大陆"日本日本"韩国韩国"欧美欧美"其它", "v" : } ] } , { "key" : , "name" : , "value" : [ { "n" : , "v" : } , { "n" : , "v" : } , { "n" : , "v": } , { "n" : ,其它""year"年份全部年份"20232023"20222022"2021"v" : } , { "n" : , "v" : } , { "n" : , "v" : } , { "n" :，“v”： } { “n”：，“v”： }，{ “n”：，“v”： }，{2021"20202020"20192019"20182018",20172017"20162016"2015""10年代""10年代""00年代"00年代""90年代"90年代""80年代"80年代"by, "name" :排序 , "value" : [ { "n" :热播榜 , "v" : } , { "n" : , "v" : } ] } , { "key" : , "name" : , "value" : [ { "n" : ,"v" : } , { "n" :热播榜"新上线新上线"total状态全部状态"连载", "v" : } , { "n" : , "v" : } ] } ] ,连载"完结完结"
        "3":"class""类型""全部""类型""大陆""v""大陆"}{"n""港台""v""港台"}{"n""日韩""v""日韩"}{"n":"欧美","v":"欧美"}]},{"key":"地区","name":"地区","value":[{"n": "全部","v":"地区"},{"n":"内地","v":"内地"},{"n":"港台","v":"港台"} ,{"n":"日韩","v":"日韩"},{"n":"欧美","v":"欧美"},{"n":"其他","v “：”其它"}]},{"key":"年份","name":"年份","value":[{"n":"全部","v":"年份"},{"n" :"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"}, {"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":" 2018"},{"n": "2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015"," v":"2015"},{"n":"10 年代","v":"10 年代"},{"n":"00 年代","v":"00 年代"},{"n":"90 年代","v":"90 年代"},{"n":"80 年代","v":"80 年代"}]},{"key ":"by","name":"排序","value":[{"n":"热播榜","v":"热播榜"},{"n":"新上线" ,"v":"新上线"}]}],"3":[{"key":"class","name":"类型","value":[{"n":"全部","v":"类型"},{"n":"大陆","v":"大陆"},{"n":"港台","v":"港台"},{"n":"日韩","v":"日韩"},{"n" :欧美 , "v" : } ] } , { "key" : , "name" : , "value" : [ { "n" : , "v" : } , { "n" : , "v" : } , { "n" : ,"v" : } , { "n" :欧美""area"地区全部地区"内地内地"港台港台"日韩", "v" : } , { "n" : , "v" : } , { "n" : , "v" : } ] } , { "key" : , "name" : , "value" : [ { "n" : , "v" : } , { "n" : ,日韩"欧美欧美"其它其它""year""年份"全部年份"2023"v" : } , { "n" : , "v" : } , { "n" : , "v" : } , { "n" : , "v" : } , { "n" : , "v" : } , { "n": , "v" : } ,2023"20222022"20212021"20202020"20192019"20182018"{"n":"2017"v":"},{"n":"","v":"},{"n":"","v":"},{"n":"","v":"},{"n":"","v":"},{"n":"","v": } , { "n" : , "v" : } ] } , { "key" : , "name" : , "value" : [ { "n" : , "v" : } , { "n" : , "v" :} ] } ] ,90年代"80年代80年代"by排序热播榜热播榜"新上线新上线"
        "46":[{"key":"class","name":"类型","value":[{"n":"全部","v":"类型"},{"n": "日韩剧","v":"日韩剧"},{"n":"欧美剧","v":"欧美剧"},{"n":"海外剧","v":"海外剧"}]},{"key":"地区","name":"地区","value":[{"n":"全部","v":"地区"},{"n ":"韩国","v":"韩国"},{"n":"美剧","v":"美剧"},{"n":"日本","v":"日本"} ,{"n":"泰国","v":"泰国"},{"n":"英国","v":"英国"},{"n":"新加坡","v":"新加坡"},{"n":"其他","v":"其他"}]},{"key":"年份","name":"年份","value":[{"n ":"全部","v":"年份"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"} ,{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v": "2019"}, {"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016", "v":"2016"},{"n":"2015","v":"2015"},{"n":"10年代","v":"10 年代"},{"n":"00 年代","v":"00 年代"},{"n":"90 年代","v":"90 年代"},{"n" :"80年代","v":"80年代"}]},{"key":"by","name":"排序","value":[{"n":"热播榜" ,"v":"热播榜"},{"n":"悲伤榜","v":"悲伤榜"},{"n":"新上线","v":"新上线" }]}]"悲伤榜","v":"悲伤榜"},{"n":"新上线","v":"新上线"}]}]"悲伤榜","v":"悲伤榜"},{"n":"新上线","v":"新上线"}]}][ { "key" :"class" , "name" :"类型" , "value" : [ { "n" :全部 , "v" : } , { "n" : , "v" : } , { "n" : , "v" : } , { "n": , "v" : } ] }类型"日韩剧日韩剧"欧美剧欧美剧"海外剧海外剧", { "key" :area , "name" :地区 , "value" : [ { "n" :全部 , "v" : } , { "n" : , "v" : } , { "n" : , "v" : } , { "n" : ,"v" : } , { "n" :地区"韩国韩国"美剧美剧"日本日本"泰国","v":"泰国"},{"n":"英国","v":"英国"},{"n":"新加坡","v":"新加坡"},{"n":"其他","v":"其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v" : } , { "n" : , "v" : } , { "n" : , "v" : } , { "n" : , "v" : } , { "n" : , "v" : } , { "n": , "v" : } , {年份"20232023"20222022"20212021"20202020"20192019"20182018"20172017"20162016"20152015"10年代10年代"00年代00年代" }{ "n" : , "v" : } , { "n" : , "v" : } ] } , { " key" : , "name" : , "value" : [ { "n" : , "v" : } ,{ "n" : , "v" :90年代90年代"80年代80年代"by排序热播榜热播榜"好评榜好评榜"} , { "n" :新上线 , "v" : } ] } ]新上线"
    } ,},
	标题：{标题：{
		“用户代理”：“okhttp/4.6.0”
	} ,
	超时：5000，
	class_name :电视剧 , // /api.php/provide/home_nav
	class_url : ,2&1&4&3&46
	限制：20，
	play_parse：真，
	懒惰：js:
        try {
            function getvideo(url) {
                let jData = JSON.parse(request(url, {
                    headers: getHeaders(url)
                }));
                if (jData.code == 1) {
                    return jData.data.url
                } else {
                    return 'http://43.154.104.152:1234/jhapi/cs.php?url=' + url.split('=')[1]
                }
            }
            if (/,/.test(input)) {
                let mjurl = input.split(',')[1]
                let videoUrl = getvideo(mjurl);
                input = {
                    jx: 0,
                    url: videoUrl,
                    parse: 0,
                    header: JSON.stringify({
                        'user-agent': 'Lavf/58.12.100'
                    })
                }
            } else {
                let videoUrl = getvideo(input);
                if (/jhapi/.test(videoUrl)) {
                    videoUrl = getvideo(videoUrl);
                    input = {
                        jx: 0,
                        url: videoUrl,
                        parse: 0,
                        header: JSON.stringify({
                            'user-agent': 'Lavf/58.12.100'
                        })
                    }
                } else {
                    input = {
                        jx: 0,
                        url: videoUrl,
                        parse: 0
                    }
                }
            }
        } catch (e) {
            log(e.toString())
        }
	`,
	推荐:`js:
        var d = [];
        let html = request(input, {
            headers: getHeaders(input)
        });
        html = JSON.parse(html);
        html.forEach(function(it) {
            d.push({
                title: it.name,
                img: it.img,
                desc: it.remarks,
                url: it.id
            })
        });
        setResult(d);
    `,
	一级:`js:
		var d = [];
		let html = request(input, {
			headers: getHeaders(input)
		});
		html = JSON.parse(html);
		html.list.forEach(function(it) {
			d.push({
				title: it.name,
				img: it.img,
				desc: it.msg,
				url: it.id
			})
		});
		setResult(d);
	`,
	二级:`js:
        var d = [];
        VOD = {
            vod_id: input.split('id=')[1]
        };
        try {
            let html = request(input, {
                headers: getHeaders(input)
            });
            html = JSON.parse(html);
            let node = html.data;
            VOD = {
                vod_name: node['name'],
                vod_pic: node['img'],
                type_name: node['type'],
                vod_year: node['year'],
                vod_remarks: '更新至: ' + node['msg'] + ' / 评分: ' + node['score'],
                vod_content: node['info'].strip()
            };
            let episodes = node.player_info;
            let playMap = {};
            if (typeof play_url === 'undefined') {
                var play_url = ''
            }
            episodes.forEach(function(ep) {
                let playurls = ep['video_info'];
                playurls.forEach(function(playurl) {
                    let source = ep['show'];
                    if (!playMap.hasOwnProperty(source)) {
                        playMap[source] = []
                    }
                    playMap[source].append(playurl['name'].strip() + '$' + play_url + urlencode(playurl['url']))
                })
            });
            let playFrom = [];
            let playList = [];
            Object.keys(playMap)
                .forEach(function(key) {
                    playFrom.append(key);
                    playList.append(playMap[key].join('#'))
                });
            let vod_play_from = playFrom.join('$$$');
            let vod_play_url = playList.join('$$$');
            VOD['vod_play_from'] = vod_play_from;
            VOD['vod_play_url'] = vod_play_url
        } catch (e) {
            log('获取二级详情页发生错误:' + e.message)
        }
	`,
	搜索:`js:
        var d = [];
        let html = request(input, {
            headers: getHeaders(input)
        });
        html = JSON.parse(html);
        html.data.forEach(function(it) {
            d.push({
                title: it.video_name,
                img: it.img,
                desc: it.qingxidu + '/' + it.category,
                url: it.id,
                content: it.blurb
            })
        });
        setResult(d);
    `,
}
