### 规则生成器项目

> 为解决活动中规则经常变动，且规则文字通常较多带来活动接口的请求速度慢的问题，将规则部分单独拆分出来.

1.data.js中配置活动规则内容（运营通常通过word填写规则，通过word另存为html，复制body里面的内容到data.js）

``` javascript
module.exports = `<div class=WordSection1 style='layout-grid:15.6pt'>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><strong><span style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>预热日期：</span></strong><strong><span
lang=EN-US style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;
background:transparent;font-weight:normal'>4</span></strong><strong><span
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;background:
white;font-weight:normal'>月<span lang=EN-US>9</span>日<span lang=EN-US>-4</span>月<span
lang=EN-US>10</span>日（预热期间姐姐可提前准备活动舞蹈以及服装奥）</span></strong></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><strong><span style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>活动日期：</span></strong><span
lang=EN-US style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;
background:transparent'>4</span><span style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;
color:#FFF;background:transparent'>月<span lang=EN-US>11</span>日<span lang=EN-US>-4</span>月<span
lang=EN-US>16</span>日（活动进行时间）</span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><strong><span style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>活动玩法：</span></strong><span
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;background:
white'>活动期间友友们集齐<span lang=EN-US>12</span>块生日拼图就可在<span lang=EN-US>4</span>月<span
lang=EN-US>16</span>日当天领取生日大礼，一大波限量纪念版糖豆生日会礼物等你来拿！礼物有限先到先得！</span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><strong><span style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>获取拼图方法：</span></strong></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><span lang=EN-US style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>1</span><span
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;background:
white'>、每日登录签到后可获得一块拼图</span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><span lang=EN-US style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>2</span><span
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;background:
white'>、每日邀请一位好友打开糖豆<span lang=EN-US>APP</span>获得一块拼图</span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><span lang=EN-US style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>3</span><span
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;background:
white'>、活动期间每日上传秀舞，可获得两块拼图</span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><span lang=EN-US style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>4</span><span
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;background:
white'>、活动期间每日上传小视频，可获得一块拼图</span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><span lang=EN-US style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>5</span><span
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;background:
white'>、每日送出鲜花<span lang=EN-US>2</span>朵（限参与本活动视频，其他视频无效），可获得一块拼图</span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><span lang=EN-US style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>6</span><span
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;background:
white'>、每日作品获得<span lang=EN-US>20</span>位舞友送花（限参与本活动视频，其他视频无效），可获得一块拼图</span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><strong><span style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>礼物开抢时间为</span></strong><strong><span
lang=EN-US style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;
background:transparent'>4</span></strong><strong><span style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>月<span
lang=EN-US>16</span>日，集齐拼图的用户</span></strong></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><span style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>第一轮：<span
lang=EN-US>10</span>：<span lang=EN-US>00</span></span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><span style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>第二轮：<span
lang=EN-US>12</span>：<span lang=EN-US>00</span></span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><span style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>第三轮：<span
lang=EN-US>14</span>：<span lang=EN-US>00</span></span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><span style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>第四轮：<span
lang=EN-US>16</span>：<span lang=EN-US>00</span></span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><span style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>第五轮：<span
lang=EN-US>18</span>：<span lang=EN-US>00</span></span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><span style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>第六轮：<span
lang=EN-US>20</span>：<span lang=EN-US>00</span></span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><strong><span style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>秀舞<span
lang=EN-US>&amp;</span>小视频作品要求：</span></strong></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><span lang=EN-US style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>1</span><span
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;background:
white'>、如果你拍秀舞希望你<span lang=EN-US>&gt;&gt;</span>本人参加，舞姿优美，视频完整，原创或跟跳舞蹈皆可以，不限舞种，随意拍摄的画面不计入活动奥！</span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><span lang=EN-US style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>2</span><span
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;background:
white'>、如果你拍小视频希望你<span lang=EN-US>&gt;&gt;</span>本人参加，展示内容完整，舞蹈、手势舞或其他内容皆可以，随意拍摄的画面不计入活动奥！</span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><b><span style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>参与方式：</span></b></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><span lang=EN-US style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>1.</span><span
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;background:
white'>直接录制：活动页面中点击拍秀舞或发小视频录制舞蹈作品，发布时选择<b><span lang=EN-US>#4</span>周年生日<span
lang=EN-US>-</span>秀舞<span lang=EN-US>#</span>或<span lang=EN-US>#4</span>周年生日<span
lang=EN-US>-</span>小视频<span lang=EN-US>#</span>活动</b></span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><span lang=EN-US style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>2.</span><span
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;background:
white'>录制好的视频：可在电脑上传作品（上传网址：</span><span lang=EN-US style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#3B73AF;background:transparent'><a
href="http://uu.tangdou.com/"><span style='color:#3B73AF;text-decoration:none'>mp.tangdou.com</span></a></span><span
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;background:
white'>）或在手机<span lang=EN-US>app</span>中选择相册上传横版完整舞蹈视频，上传时需手动选择<b><span
lang=EN-US>#4</span>周年生日<span lang=EN-US>-</span>秀舞<span lang=EN-US>#</span>或<span
lang=EN-US>#4</span>周年生日<span lang=EN-US>-</span>小视频<span lang=EN-US>#</span></b>活动</span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><strong><span lang=EN-US
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;background:
white'>416</span></strong><strong><span style='font-size:10.5pt;font-family:
"微软雅黑",sans-serif;color:#FFF;background:transparent'>生日大礼包：</span></strong></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;text-indent:0cm;background:transparent'><span lang=EN-US
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF'>1.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span></span><span
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;background:
white'>集齐拼图的第</span><b><span lang=EN-US style='font-size:10.5pt;font-family:
"微软雅黑",sans-serif;color:#FFF;background:transparent'>416</span></b><b><span
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;background:
white'>、<span lang=EN-US>5416</span>、<span lang=EN-US>10416</span>、<span
lang=EN-US>20416</span>、<span lang=EN-US>30416</span>、<span lang=EN-US>40416</span></span></b><span
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;background:
white'>位舞友，奖励黄金玫瑰转运珠或者黄金金猪吊坠<span lang=EN-US>1</span>枚（随机送，不分先后）</span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;text-indent:0cm;background:transparent'><span lang=EN-US
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF'>2.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span></span><span
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;background:
white'>集齐<span lang=EN-US>12</span>块拼图有机会在<span lang=EN-US>4</span>月<span
lang=EN-US>16</span>日领取糖豆<span lang=EN-US>4</span>周年限量纪念版</span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><span lang=EN-US style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>&nbsp; &nbsp;</span><span
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;background:
white'>·背包（礼品总数<span lang=EN-US>300</span>份）</span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><span lang=EN-US style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>&nbsp; &nbsp;</span><span
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;background:
white'>·<span lang=EN-US>T</span>恤（礼品总数<span lang=EN-US>300</span>份）</span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><span lang=EN-US style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>&nbsp; &nbsp;</span><span
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;background:
white'>·丝巾（礼品总数<span lang=EN-US>100</span>份）</span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><span lang=EN-US style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>&nbsp; &nbsp;</span><span
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;background:
white'>·百花绿色蜂蜜（礼品总数<span lang=EN-US>152</span>份）<span lang=EN-US>&nbsp;</span></span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><span lang=EN-US style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>&nbsp; &nbsp;</span><span
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;background:
white'>·百瑞源月上兰山枸杞茶（礼品总数<span lang=EN-US>291</span>份）<span lang=EN-US>&nbsp;</span></span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><span lang=EN-US style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>&nbsp; &nbsp;</span><span
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;background:
white'>数量有限先到先得，送完为止</span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;text-indent:0cm;background:transparent'><span lang=EN-US
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF'>3.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span></span><span
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;background:
white'>参与<span lang=EN-US>#</span>糖豆<span lang=EN-US>4</span>周年生日会<span
lang=EN-US>#</span>活动，并上传作品的友友们可获得头像框（<span lang=EN-US>30</span>天有效期）</span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;text-indent:0cm;background:transparent'><span lang=EN-US
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF'>4.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span></span><span
lang=EN-US style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;
background:transparent'>4</span><span style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;
color:#FFF;background:transparent'>月<span lang=EN-US>16</span>日<span lang=EN-US>20</span>：<span
lang=EN-US>00</span>进入活动页面可获取<span lang=EN-US>4</span>周年定制勋章<span lang=EN-US>1</span>枚</span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;text-indent:0cm;background:transparent'><span lang=EN-US
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF'>5.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span></span><span
lang=EN-US style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;
background:transparent'>4</span><span style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;
color:#FFF;background:transparent'>月<span lang=EN-US>16</span>日<span lang=EN-US>20</span>：<span
lang=EN-US>00</span>进入活动页面可获取更多鲜花</span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><b><span style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>礼品发放：</span></b></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;line-height:150%;background:transparent'><span
style='font-size:10.5pt;line-height:150%;font-family:"微软雅黑",sans-serif;
color:#FFF;background:transparent'>当您领到礼物后，请及时关注糖豆<span lang=EN-US>App</span>中，我的消息→糖豆官方消息，打开发给您的链接，请在<span
lang=EN-US>4</span>月<span lang=EN-US>21</span>日前填写收货人信息（请仔细检查填写的信息，每人只可提交<span
lang=EN-US>1</span>次），待工作人员核实后，将于收货人信息采集结束后<span lang=EN-US>14</span>个工作日后发放礼物</span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><b><span style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>注意：</span></b><span
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;background:
white'>因个人原因没有及时填写信息的获奖者是以弃权处理，过期不再进行补发礼品！</span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><strong><span style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>其他注意事项：</span></strong></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><span lang=EN-US style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>1</span><span
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;background:
white'>、参与活动作品须画面清晰明亮，内容健康向上</span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><span lang=EN-US style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>2</span><span
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;background:
white'>、老视频重新上传不计入活动</span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><span lang=EN-US style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>3</span><span
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;background:
white'>、可同时多个作品参与活动</span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><span lang=EN-US style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>4</span><span
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;background:
white'>、好友通过邀请函当日首次打开<span lang=EN-US>APP</span>则视为邀请成功</span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><span lang=EN-US style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>5</span><span
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;background:
white'>、如遇无法参与活动，请把糖豆<span lang=EN-US>app</span>升级至最新版</span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><span lang=EN-US style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>6</span><span
style='font-size:10.5pt;font-family:"微软雅黑",sans-serif;color:#FFF;background:
white'>、活动咨询：<span lang=EN-US>QQ</span>群：<strong><span lang=EN-US
style='font-weight:normal'>119780675</span></strong></span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><span style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>本活动最终解释权归主办方所有</span></p>

<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;
margin-bottom:.0001pt;background:transparent'><span style='font-size:10.5pt;
font-family:"微软雅黑",sans-serif;color:#FFF;background:transparent'>本活动与<span
lang=EN-US>Apple Inc</span>无关</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

</div>`
```

2.修改index.js中要生成的名称`RULE_FILE_NAME`

3.然后执行如下命令

> npm start

4.拷贝打印网址到浏览器访问看是否正常

> Upload Complete : https://aimg.tangdou.com/cdn/activity/rules/test.json