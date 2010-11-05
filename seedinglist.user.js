// ==UserScript==
// @name           rutrackerSeedingList
// @namespace      ahmpro@rslayers.com
// @version        0.2
// @source         http://ahmpro.net
// @description    Visit http://rutracker.org/forum/viewtopic.php?t=3180450 for more details.
// @include        http://rutracker.org/forum/viewforum.php?f=*
// @match          http://rutracker.org/forum/viewforum.php?f=*
// ==/UserScript==
function c(){
	function lll(){code();}
	$("head").append("<script type='text/javascript' src='http://static.rslayers.com/rutrackerorg_resources/jquery.tablesorter.min.js'></script>");
	$("head").append("<script type='text/javascript' src='http://static.rslayers.com/rutrackerorg_resources/seedinglist_all.js'></script>");
	window.setTimeout(lll,1000);
}c();