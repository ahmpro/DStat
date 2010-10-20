function code(){
    $("head").append("<script type='text/javascript' src='http://static.rslayers.com/rutrackerorg_resources/jquery.tablesorter.min.js'></script>");
    if (($("p.small b b").text()=="1")&&($(".topmenu b.med").eq(0).length==1)){
        $("div#main-nav td.nowrap").append(" | <a href='#' id='get_torrent_list'><b>Generate SeedingList</b></a>");
        $("a#get_torrent_list").click(function(){
            $("table.forumline tbody tr:not([id^='tr-'])").detach();
            $("body").append("<table id='torrent_table' class='tablesorter'><thead><th><a href='#' style='width: 10px; margin-right: 3px; height: 10px; float: left; text-decoration: none; display: block; background-color: #55F;' id='omenu'>&nbsp;</a>Total: <strong>0</strong></th><th>Seeds</th><th>Leechers</th><th>Size <strong>0&nbsp;GB</strong></th><th>Title</th></thead><tbody></tbody></table>");
            $("head").append("<style type='text/css'>table.tablesorter {color: #333;font: 8pt arial;background-color: #CDCDCD;margin:10px 0pt 15px;width: 100%;text-align: left;}table.tablesorter thead th.header {background-image: url('http://static.rslayers.com/rutrackerorg_resources/bg.gif');background-repeat: no-repeat;background-position: center right;cursor: pointer; backgroud-color:#E6EEEE;padding:2px 25px 2px 4px;background-color:#E6EEEE;}table.tablesorter thead th.headerSortUp {background-image: url('http://static.rslayers.com/rutrackerorg_resources/asc.gif');}table.tablesorter thead th.headerSortDown {background-image: url('http://static.rslayers.com/rutrackerorg_resources/desc.gif');}table.tablesorter thead tr th, table.tablesorter tfoot tr th {background-color: ##E6EEEE;border: 1px solid #FFF;font-size: 8pt;padding: 4px}table.tablesorter tbody td {color: #3D3D3D;padding: 4px;background-color: #FFF;vertical-align: top;}table.tablesorter tbody tr.odd td {background-color:#F0F0F6;}table.tablesorter thead th.headerSortDown, table.tablesorter thead th.headerSortUp {background-color: #8dbdd8;}        </style>");
            $("body").append("<div id='wait_load' style='position: absolute; top: 50%; left: 50%; text-align: center; height: 200px; width: 300px; margin-top: -100px; margin-left: -150px; border: 0pt none; font-size: 20pt;'><h1 style='font-size: 40pt;'>LOADING</h1><br><span>0/0</span></div>");
            /**/$("body").append("<div id='xmlarea' style='display:none;z-index:1001;position:fixed;top:10px;left:10px;'><textarea id='xml' cols='80' rows='16'></textarea><input type='button' value='Close'/></div><div id='openmenu' style='display:none;width:400px;height:100px;paddig:25px;background-color:#F3F3F3;z-index:1000;position:fixed;top:35px;left:55px;border:3px dashed;'><input type='button' id='gen_xml' value='Generate XML'/><br /><code>Seeds&nbsp;:</code><span style='font: arial, 6pt, bold'><input type='checkbox' id='filter_seeds_0' checked/>[0]<input type='checkbox' id='filter_seeds_12' checked/>[1-2]<input type='checkbox' id='filter_seeds_34' checked/>[3-4]<input type='checkbox' id='filter_seeds_5' checked/>[5]<input type='checkbox' id='filter_seeds_610' checked/>[6-10]<input type='checkbox' id='filter_seeds_11' checked/>[11+]</span><br /><code>Leechs:</code><span style='font: arial, 6pt, bold'><input type='checkbox' id='filter_leechers_0' checked/>[0]<input type='checkbox' id='filter_leechers_12' checked/>[1-2]<input type='checkbox' id='filter_leechers_34' checked/>[3-4]<input type='checkbox' id='filter_leechers_5' checked/>[5]<input type='checkbox' id='filter_leechers_610' checked/>[6-10]<input type='checkbox' id='filter_leechers_11' checked/>[11+]</span><br /><input type='button' id='filter_hideall' value='Hide all'/><input type='button' id='filter_showall' value='Show all'/></div>");
            function URLEncode (clearString) {var output = '';var x = 0;clearString = clearString.toString();var regex = /(^[a-zA-Z0-9_.]*)/;while (x < clearString.length) {var match = regex.exec(clearString.substr(x));if (match != null && match.length > 1 && match[1] != '') {output += match[1];x += match[1].length;} else {if (clearString[x] == ' ')output += '+';else {var charCode = clearString.charCodeAt(x);var hexVal = charCode.toString(16);output += '%' + ( hexVal.length < 2 ? '0' : '' ) + hexVal.toUpperCase();}x++;}}return output;}
            function filter(t,f,a){var r = false;if (f==0){r=parseInt($("td",a).eq(t).text())==0;}else if (f==12){r=((parseInt($("td",a).eq(t).text())>0)&&(parseInt($("td",a).eq(t).text())<3));}else if (f==34){r=((parseInt($("td",a).eq(t).text())>2)&&(parseInt($("td",a).eq(t).text())<5));}else if (f==5){r=parseInt($("td",a).eq(t).text())==5;}else if (f==610){r=((parseInt($("td",a).eq(t).text())>5)&&(parseInt($("td",a).eq(t).text())<11));}else if (f==11){r=parseInt($("td",a).eq(t).text())>10;}return r;}
            $("#openmenu").mouseleave(function(){$(this).hide();});
            $("#omenu").mouseover(function(){var off = $(this).offset(); $("#openmenu").css("top",off.top).css("left",off.left).show();});
            $("#gen_xml").click(function(){
                $("#xml").val("<?xml version='1.0' encoding='Windows-1251'?><torrents>");
                $("#torrent_table tbody tr:visible").each(function(){
                    var a = $(this);
                    var s = $("#xml").val()+"<t id='"+$("td a",a).eq(0).text()+"'><s>"+$("td",a).eq(1).text()+"</s><l>"+$("td",a).eq(2).text()+"</l><si>"+$("td",a).eq(3).text()+"</si><ti>"+URLEncode($("td a",a).eq(1).text())+"</ti></t>";
                    $("#xml").val(s);
                });
                $("#xml").val($("#xml").val()+"</torrents>");
                $("#xmlarea").show();
            });
            $("#xmlarea input").click(function(){$("#xmlarea").hide();});
            $("#filter_seeds_0").change(function(){var checked = $(this).attr('checked');var sel="";if (checked){sel="#torrent_table tbody tr:hidden"}else{sel="#torrent_table tbody tr:visible"}$(sel).each(function(){if (filter(1,0,$(this))){if (checked) {$(this).show();}else{$(this).hide();}}})})
            $("#filter_seeds_12").change(function(){var checked = $(this).attr('checked');var sel="";if (checked){sel="#torrent_table tbody tr:hidden"}else{sel="#torrent_table tbody tr:visible"}$(sel).each(function(){if (filter(1,12,$(this))){if (checked) {$(this).show();}else{$(this).hide();}}})})
            $("#filter_seeds_34").change(function(){var checked = $(this).attr('checked');var sel="";if (checked){sel="#torrent_table tbody tr:hidden"}else{sel="#torrent_table tbody tr:visible"}$(sel).each(function(){if (filter(1,34,$(this))){if (checked) {$(this).show();}else{$(this).hide();}}})})
            $("#filter_seeds_5").change(function(){var checked = $(this).attr('checked');var sel="";if (checked){sel="#torrent_table tbody tr:hidden"}else{sel="#torrent_table tbody tr:visible"}$(sel).each(function(){if (filter(1,5,$(this))){if (checked) {$(this).show();}else{$(this).hide();}}})})
            $("#filter_seeds_610").change(function(){var checked = $(this).attr('checked');var sel="";if (checked){sel="#torrent_table tbody tr:hidden"}else{sel="#torrent_table tbody tr:visible"}$(sel).each(function(){if (filter(1,610,$(this))){if (checked) {$(this).show();}else{$(this).hide();}}})})
            $("#filter_seeds_11").change(function(){var checked = $(this).attr('checked');var sel="";if (checked){sel="#torrent_table tbody tr:hidden"}else{sel="#torrent_table tbody tr:visible"}$(sel).each(function(){if (filter(1,11,$(this))){if (checked) {$(this).show();}else{$(this).hide();}}})})
            $("#filter_leechers_0").change(function(){var checked = $(this).attr('checked');var sel="";if (checked){sel="#torrent_table tbody tr:hidden"}else{sel="#torrent_table tbody tr:visible"}$(sel).each(function(){if (filter(2,0,$(this))){if (checked) {$(this).show();}else{$(this).hide();}}})})
            $("#filter_leechers_12").change(function(){var checked = $(this).attr('checked');var sel="";if (checked){sel="#torrent_table tbody tr:hidden"}else{sel="#torrent_table tbody tr:visible"}$(sel).each(function(){if (filter(2,12,$(this))){if (checked) {$(this).show();}else{$(this).hide();}}})})
            $("#filter_leechers_34").change(function(){var checked = $(this).attr('checked');var sel="";if (checked){sel="#torrent_table tbody tr:hidden"}else{sel="#torrent_table tbody tr:visible"}$(sel).each(function(){if (filter(2,34,$(this))){if (checked) {$(this).show();}else{$(this).hide();}}})})
            $("#filter_leechers_5").change(function(){var checked = $(this).attr('checked');var sel="";if (checked){sel="#torrent_table tbody tr:hidden"}else{sel="#torrent_table tbody tr:visible"}$(sel).each(function(){if (filter(2,5,$(this))){if (checked) {$(this).show();}else{$(this).hide();}}})})
            $("#filter_leechers_610").change(function(){var checked = $(this).attr('checked');var sel="";if (checked){sel="#torrent_table tbody tr:hidden"}else{sel="#torrent_table tbody tr:visible"}$(sel).each(function(){if (filter(2,610,$(this))){if (checked) {$(this).show();}else{$(this).hide();}}})})
            $("#filter_leechers_11").change(function(){var checked = $(this).attr('checked');var sel="";if (checked){sel="#torrent_table tbody tr:hidden"}else{sel="#torrent_table tbody tr:visible"}$(sel).each(function(){if (filter(2,11,$(this))){if (checked) {$(this).show();}else{$(this).hide();}}})})
            $("#filter_hideall").click(function(){$("#torrent_table tbody tr:visible").hide();$("#openmenu :checkbox").removeAttr("checked");});
            $("#filter_showall").click(function(){$("#torrent_table tbody tr:hidden").show();$("#openmenu :checkbox").attr("checked","true");});/**/
            $("table.forumline tbody tr[id^='tr-']").each(function(i){
                if ($("td.tCenter[class*='tCenter med']",$(this)).html().indexOf("&nbsp;")==-1){
                    $(this).detach();
                }
                else{
                    var id = $(this).attr("id").substr(3);
                    var seeds = $("span.seedmed b",$(this)).text();
                    var leech = $("span.leechmed b",$(this)).text();
                    if ($("div.small a",$(this)).length==1){
                        var s = $("div.small a",$(this)).html().split("&nbsp;");
                        var tmp = 0.0;
                        var size = parseFloat(s[0]);
                        var size_n = s[1];
                        s = $("#torrent_table thead th strong").html().split("&nbsp;");
                        if (size_n=="GB"){tmp = tmp + size*1024*1024;}
                        if (size_n=="MB"){tmp = tmp + size*1024;}
                        if (size_n=="KB"){tmp = tmp + size;}
                        var s0 = parseFloat(s[0]);
                        var s1 = s[1];
                        if (s1=="GB"){tmp = tmp + s0*1024*1024;}
                        if (s1=="MB"){tmp = tmp + s0*1024;}
                        if (s1=="KB"){tmp = tmp + s0;}
                        tmp = (tmp/1024/1024).toFixed(2);
                        s = $("#torrent_table thead th strong").html(tmp+"&nbsp;GB");
                        var title = $("a#tt-"+id,$(this)).text();
                        $("#torrent_table tbody").append("<tr><td><a href='http://dl.rutracker.org/forum/dl.php?t="+id+"' target='_blank'>"+id+"</a></td><td>"+seeds+"</td><td>"+leech+"</td><td>"+size+" "+size_n+"</td><td><a href='http://rutracker.org/forum/viewtopic.php?t="+id+"' target='_blank'>"+title+"</a></td></tr>");
                    }
                }
            });
            var index = 1;
            var pages = parseInt($("p.small b a").eq($("p.small b a").length-2).attr("href").substr(23+$("h1.maintitle a").attr("href").substr(18).length))/50;
            var one=true;$("#torrent_table").hide();$("div#body_container").hide();
            $("#wait_load span").html("1/"+pages);
            $("#wait_load").show();
            function loading(){
                $.get("http://rutracker.org/forum/viewforum.php",
                {
                    "f":$("h1.maintitle a").attr("href").substr(18),
                    "start":index*50
                },function(r){
                                        $("table.forumline tbody tr[id^='tr-']",r).each(function(){
                        if ($("td.tCenter[class*='tCenter med']",$(this)).html().indexOf("&nbsp;")!=-1){
                            var id = $(this).attr("id").substr(3);
                            var seeds = $("span.seedmed b",$(this)).text();
                            var leech = $("span.leechmed b",$(this)).text();
                            if ($("div.small a",$(this)).length==1){
                                var s = $("div.small a",$(this)).html().split("&nbsp;");
                                var tmp = 0.0;
                                var size = parseFloat(s[0]);
                                var size_n = s[1];
                                s = $("#torrent_table thead th strong").html().split("&nbsp;");
                                if (size_n=="GB"){tmp = tmp + size*1024*1024;}
                                if (size_n=="MB"){tmp = tmp + size*1024;}
                                if (size_n=="KB"){tmp = tmp + size;}
                                var s0 = parseFloat(s[0]);
                                var s1 = s[1];
                                if (s1=="GB"){tmp = tmp + s0*1024*1024;}
                                if (s1=="MB"){tmp = tmp + s0*1024;}
                                if (s1=="KB"){tmp = tmp + s0;}
                                tmp = (tmp/1024/1024).toFixed(2);
                                s = $("#torrent_table thead th strong").html(tmp+"&nbsp;GB");
                                var title = $("a#tt-"+id,$(this)).text();
                                $("#torrent_table tbody").append("<tr><td><a href='http://dl.rutracker.org/forum/dl.php?t="+id+"' target='_blank'>"+id+"</a></td><td>"+seeds+"</td><td>"+leech+"</td><td>"+size+" "+size_n+"</td><td><a href='http://rutracker.org/forum/viewtopic.php?t="+id+"' target='_blank'>"+title+"</a></td></tr>");
                            }
                        }
                    })
                });
            }
            $("a#get_torrent_list").ajaxComplete(function(request, settings){
                $("#wait_load span").html(index+"/"+pages);
                if (index<pages){setTimeout(loading,100);}
                else{if(one){gen();}}
                index++;
            });
            setTimeout(loading, 100);
            function gen(){
                one=false;
                $("#torrent_table").tablesorter({
                    sortList: [[1,0]],
                    headers:{
                        0:{sorter:false},
                        3:{sorter:'size'},
                        4:{sorter:false}
                    }
                });
                $.tablesorter.addParser({
                    id:'size',
                    is:function(s){return false;},
                    format:function(s){
                        var a=s.split(" ");vart=0;
                        if(a[1]=="GB"){t=a[0]*1024*1024;}
                        if(a[1]=="MB"){t=a[0]*1024;}
                        if(a[1]=="KB"){t=a[0];}
                        return t;
                    },
                    type: 'numeric'
                });
                $("#torrent_table").hide();function last(){
                    $("#wait_load").hide();
                    $("#torrent_table thead th strong").eq(0).text($("#torrent_table tbody tr").length);
                    $("#torrent_table").show();
                }
                setTimeout(last, 1000);
            }
        });
    }
}
