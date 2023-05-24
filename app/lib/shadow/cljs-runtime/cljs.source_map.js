import "./cljs_env.js";
goog.provide('cljs.source_map');
goog.scope(function(){
  cljs.source_map.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__6945){
var vec__6946 = p__6945;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6946,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6946,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__6956 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6956,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6956,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6956,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6956,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6956,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(cljs.source_map.goog$module$goog$object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__5804__auto__)){
var name__$1 = temp__5804__auto__;
return (cljs.source_map.goog$module$goog$object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__6963 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6963,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6963,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6963,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6963,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6963,(4),null);
var vec__6966 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6966,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6966,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6966,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6966,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6966,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__5045__auto__ = col;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__5045__auto__ = name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__6978 = segmap;
var map__6978__$1 = cljs.core.__destructure_map(map__6978);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6978__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6978__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6978__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6978__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6978__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__6995 = arguments.length;
switch (G__6995) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(cljs.source_map.goog$module$goog$object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = cljs.source_map.goog$module$goog$object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__7004 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__8244 = cljs.core.next(segs__$1);
var G__8245 = nrelseg;
var G__8246 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__8244;
relseg__$1 = G__8245;
result__$1 = G__8246;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7004,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7004,(1),null);
var G__8247 = (gline + (1));
var G__8248 = cljs.core.next(lines__$1);
var G__8249 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__8250 = result__$1;
gline = G__8247;
lines__$1 = G__8248;
relseg = G__8249;
result = G__8250;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2);

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__7008 = segmap;
var map__7008__$1 = cljs.core.__destructure_map(map__7008);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7008__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7008__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7008__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7008__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7008__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__7007_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__7007_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__7011 = arguments.length;
switch (G__7011) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(cljs.source_map.goog$module$goog$object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = cljs.source_map.goog$module$goog$object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__7025 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__8255 = cljs.core.next(segs__$1);
var G__8256 = nrelseg;
var G__8257 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__8255;
relseg__$1 = G__8256;
result__$1 = G__8257;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7025,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7025,(1),null);
var G__8258 = (gline + (1));
var G__8259 = cljs.core.next(lines__$1);
var G__8260 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__8261 = result__$1;
gline = G__8258;
lines__$1 = G__8259;
relseg = G__8260;
result = G__8261;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode.cljs$lang$maxFixedArity = 2);

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__7031){
var vec__7032 = p__7031;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7032,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7032,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7032,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7032,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7032,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__7036){
var vec__7037 = p__7036;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7037,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7037,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7037,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7037,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7037,(4),null);
var seg = vec__7037;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__7040){
var vec__7041 = p__7040;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7041,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7041,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7041,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7041,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7041,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__5045__auto__ = name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return lname;
}
})()], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
}),cljs.core.PersistentVector.EMPTY,cols));
}),cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5802__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5802__auto__)){
var name = temp__5802__auto__;
var idx = (function (){var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(names__GT_idx),name);
if(cljs.core.truth_(temp__5802__auto____$1)){
var idx = temp__5802__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref(name_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});
var encode_cols = (function (infos,source_idx,line,col){
var seq__7055 = cljs.core.seq(infos);
var chunk__7056 = null;
var count__7057 = (0);
var i__7058 = (0);
while(true){
if((i__7058 < count__7057)){
var info = chunk__7056.cljs$core$IIndexed$_nth$arity$2(null,i__7058);
var segv_8265 = info__GT_segv(info,source_idx,line,col);
var gline_8266 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_8267 = cljs.core.count(cljs.core.deref(lines));
if((gline_8266 > (lc_8267 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__7055,chunk__7056,count__7057,i__7058,segv_8265,gline_8266,lc_8267,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_8266 - (lc_8267 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_8265], null));
});})(seq__7055,chunk__7056,count__7057,i__7058,segv_8265,gline_8266,lc_8267,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__7055,chunk__7056,count__7057,i__7058,segv_8265,gline_8266,lc_8267,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_8266], null),cljs.core.conj,segv_8265);
});})(seq__7055,chunk__7056,count__7057,i__7058,segv_8265,gline_8266,lc_8267,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__8268 = seq__7055;
var G__8269 = chunk__7056;
var G__8270 = count__7057;
var G__8271 = (i__7058 + (1));
seq__7055 = G__8268;
chunk__7056 = G__8269;
count__7057 = G__8270;
i__7058 = G__8271;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__7055);
if(temp__5804__auto__){
var seq__7055__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7055__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__7055__$1);
var G__8272 = cljs.core.chunk_rest(seq__7055__$1);
var G__8273 = c__5568__auto__;
var G__8274 = cljs.core.count(c__5568__auto__);
var G__8275 = (0);
seq__7055 = G__8272;
chunk__7056 = G__8273;
count__7057 = G__8274;
i__7058 = G__8275;
continue;
} else {
var info = cljs.core.first(seq__7055__$1);
var segv_8276 = info__GT_segv(info,source_idx,line,col);
var gline_8277 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_8278 = cljs.core.count(cljs.core.deref(lines));
if((gline_8277 > (lc_8278 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__7055,chunk__7056,count__7057,i__7058,segv_8276,gline_8277,lc_8278,info,seq__7055__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_8277 - (lc_8278 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_8276], null));
});})(seq__7055,chunk__7056,count__7057,i__7058,segv_8276,gline_8277,lc_8278,info,seq__7055__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__7055,chunk__7056,count__7057,i__7058,segv_8276,gline_8277,lc_8278,info,seq__7055__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_8277], null),cljs.core.conj,segv_8276);
});})(seq__7055,chunk__7056,count__7057,i__7058,segv_8276,gline_8277,lc_8278,info,seq__7055__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__8279 = cljs.core.next(seq__7055__$1);
var G__8280 = null;
var G__8281 = (0);
var G__8282 = (0);
seq__7055 = G__8279;
chunk__7056 = G__8280;
count__7057 = G__8281;
i__7058 = G__8282;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__7086_8283 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__7087_8284 = null;
var count__7088_8285 = (0);
var i__7089_8286 = (0);
while(true){
if((i__7089_8286 < count__7088_8285)){
var vec__7343_8287 = chunk__7087_8284.cljs$core$IIndexed$_nth$arity$2(null,i__7089_8286);
var source_idx_8288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7343_8287,(0),null);
var vec__7346_8289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7343_8287,(1),null);
var __8290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7346_8289,(0),null);
var lines_8291__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7346_8289,(1),null);
var seq__7349_8292 = cljs.core.seq(lines_8291__$1);
var chunk__7350_8293 = null;
var count__7351_8294 = (0);
var i__7352_8295 = (0);
while(true){
if((i__7352_8295 < count__7351_8294)){
var vec__7412_8296 = chunk__7350_8293.cljs$core$IIndexed$_nth$arity$2(null,i__7352_8295);
var line_8297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7412_8296,(0),null);
var cols_8298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7412_8296,(1),null);
var seq__7415_8299 = cljs.core.seq(cols_8298);
var chunk__7416_8300 = null;
var count__7417_8301 = (0);
var i__7418_8302 = (0);
while(true){
if((i__7418_8302 < count__7417_8301)){
var vec__7426_8303 = chunk__7416_8300.cljs$core$IIndexed$_nth$arity$2(null,i__7418_8302);
var col_8304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7426_8303,(0),null);
var infos_8305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7426_8303,(1),null);
encode_cols(infos_8305,source_idx_8288,line_8297,col_8304);


var G__8306 = seq__7415_8299;
var G__8307 = chunk__7416_8300;
var G__8308 = count__7417_8301;
var G__8309 = (i__7418_8302 + (1));
seq__7415_8299 = G__8306;
chunk__7416_8300 = G__8307;
count__7417_8301 = G__8308;
i__7418_8302 = G__8309;
continue;
} else {
var temp__5804__auto___8310 = cljs.core.seq(seq__7415_8299);
if(temp__5804__auto___8310){
var seq__7415_8311__$1 = temp__5804__auto___8310;
if(cljs.core.chunked_seq_QMARK_(seq__7415_8311__$1)){
var c__5568__auto___8312 = cljs.core.chunk_first(seq__7415_8311__$1);
var G__8313 = cljs.core.chunk_rest(seq__7415_8311__$1);
var G__8314 = c__5568__auto___8312;
var G__8315 = cljs.core.count(c__5568__auto___8312);
var G__8316 = (0);
seq__7415_8299 = G__8313;
chunk__7416_8300 = G__8314;
count__7417_8301 = G__8315;
i__7418_8302 = G__8316;
continue;
} else {
var vec__7429_8317 = cljs.core.first(seq__7415_8311__$1);
var col_8318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7429_8317,(0),null);
var infos_8319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7429_8317,(1),null);
encode_cols(infos_8319,source_idx_8288,line_8297,col_8318);


var G__8320 = cljs.core.next(seq__7415_8311__$1);
var G__8321 = null;
var G__8322 = (0);
var G__8323 = (0);
seq__7415_8299 = G__8320;
chunk__7416_8300 = G__8321;
count__7417_8301 = G__8322;
i__7418_8302 = G__8323;
continue;
}
} else {
}
}
break;
}


var G__8324 = seq__7349_8292;
var G__8325 = chunk__7350_8293;
var G__8326 = count__7351_8294;
var G__8327 = (i__7352_8295 + (1));
seq__7349_8292 = G__8324;
chunk__7350_8293 = G__8325;
count__7351_8294 = G__8326;
i__7352_8295 = G__8327;
continue;
} else {
var temp__5804__auto___8328 = cljs.core.seq(seq__7349_8292);
if(temp__5804__auto___8328){
var seq__7349_8329__$1 = temp__5804__auto___8328;
if(cljs.core.chunked_seq_QMARK_(seq__7349_8329__$1)){
var c__5568__auto___8330 = cljs.core.chunk_first(seq__7349_8329__$1);
var G__8331 = cljs.core.chunk_rest(seq__7349_8329__$1);
var G__8332 = c__5568__auto___8330;
var G__8333 = cljs.core.count(c__5568__auto___8330);
var G__8334 = (0);
seq__7349_8292 = G__8331;
chunk__7350_8293 = G__8332;
count__7351_8294 = G__8333;
i__7352_8295 = G__8334;
continue;
} else {
var vec__7432_8335 = cljs.core.first(seq__7349_8329__$1);
var line_8336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7432_8335,(0),null);
var cols_8337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7432_8335,(1),null);
var seq__7435_8338 = cljs.core.seq(cols_8337);
var chunk__7436_8339 = null;
var count__7437_8340 = (0);
var i__7438_8341 = (0);
while(true){
if((i__7438_8341 < count__7437_8340)){
var vec__7447_8342 = chunk__7436_8339.cljs$core$IIndexed$_nth$arity$2(null,i__7438_8341);
var col_8343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7447_8342,(0),null);
var infos_8344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7447_8342,(1),null);
encode_cols(infos_8344,source_idx_8288,line_8336,col_8343);


var G__8345 = seq__7435_8338;
var G__8346 = chunk__7436_8339;
var G__8347 = count__7437_8340;
var G__8348 = (i__7438_8341 + (1));
seq__7435_8338 = G__8345;
chunk__7436_8339 = G__8346;
count__7437_8340 = G__8347;
i__7438_8341 = G__8348;
continue;
} else {
var temp__5804__auto___8349__$1 = cljs.core.seq(seq__7435_8338);
if(temp__5804__auto___8349__$1){
var seq__7435_8350__$1 = temp__5804__auto___8349__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7435_8350__$1)){
var c__5568__auto___8351 = cljs.core.chunk_first(seq__7435_8350__$1);
var G__8352 = cljs.core.chunk_rest(seq__7435_8350__$1);
var G__8353 = c__5568__auto___8351;
var G__8354 = cljs.core.count(c__5568__auto___8351);
var G__8355 = (0);
seq__7435_8338 = G__8352;
chunk__7436_8339 = G__8353;
count__7437_8340 = G__8354;
i__7438_8341 = G__8355;
continue;
} else {
var vec__7451_8356 = cljs.core.first(seq__7435_8350__$1);
var col_8357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7451_8356,(0),null);
var infos_8358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7451_8356,(1),null);
encode_cols(infos_8358,source_idx_8288,line_8336,col_8357);


var G__8359 = cljs.core.next(seq__7435_8350__$1);
var G__8360 = null;
var G__8361 = (0);
var G__8362 = (0);
seq__7435_8338 = G__8359;
chunk__7436_8339 = G__8360;
count__7437_8340 = G__8361;
i__7438_8341 = G__8362;
continue;
}
} else {
}
}
break;
}


var G__8363 = cljs.core.next(seq__7349_8329__$1);
var G__8364 = null;
var G__8365 = (0);
var G__8366 = (0);
seq__7349_8292 = G__8363;
chunk__7350_8293 = G__8364;
count__7351_8294 = G__8365;
i__7352_8295 = G__8366;
continue;
}
} else {
}
}
break;
}


var G__8367 = seq__7086_8283;
var G__8368 = chunk__7087_8284;
var G__8369 = count__7088_8285;
var G__8370 = (i__7089_8286 + (1));
seq__7086_8283 = G__8367;
chunk__7087_8284 = G__8368;
count__7088_8285 = G__8369;
i__7089_8286 = G__8370;
continue;
} else {
var temp__5804__auto___8371 = cljs.core.seq(seq__7086_8283);
if(temp__5804__auto___8371){
var seq__7086_8372__$1 = temp__5804__auto___8371;
if(cljs.core.chunked_seq_QMARK_(seq__7086_8372__$1)){
var c__5568__auto___8373 = cljs.core.chunk_first(seq__7086_8372__$1);
var G__8374 = cljs.core.chunk_rest(seq__7086_8372__$1);
var G__8375 = c__5568__auto___8373;
var G__8376 = cljs.core.count(c__5568__auto___8373);
var G__8377 = (0);
seq__7086_8283 = G__8374;
chunk__7087_8284 = G__8375;
count__7088_8285 = G__8376;
i__7089_8286 = G__8377;
continue;
} else {
var vec__7459_8379 = cljs.core.first(seq__7086_8372__$1);
var source_idx_8380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7459_8379,(0),null);
var vec__7462_8381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7459_8379,(1),null);
var __8382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7462_8381,(0),null);
var lines_8383__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7462_8381,(1),null);
var seq__7468_8384 = cljs.core.seq(lines_8383__$1);
var chunk__7469_8385 = null;
var count__7470_8386 = (0);
var i__7471_8387 = (0);
while(true){
if((i__7471_8387 < count__7470_8386)){
var vec__7530_8389 = chunk__7469_8385.cljs$core$IIndexed$_nth$arity$2(null,i__7471_8387);
var line_8390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7530_8389,(0),null);
var cols_8391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7530_8389,(1),null);
var seq__7533_8393 = cljs.core.seq(cols_8391);
var chunk__7534_8394 = null;
var count__7535_8395 = (0);
var i__7536_8396 = (0);
while(true){
if((i__7536_8396 < count__7535_8395)){
var vec__7546_8397 = chunk__7534_8394.cljs$core$IIndexed$_nth$arity$2(null,i__7536_8396);
var col_8398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7546_8397,(0),null);
var infos_8399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7546_8397,(1),null);
encode_cols(infos_8399,source_idx_8380,line_8390,col_8398);


var G__8400 = seq__7533_8393;
var G__8401 = chunk__7534_8394;
var G__8402 = count__7535_8395;
var G__8403 = (i__7536_8396 + (1));
seq__7533_8393 = G__8400;
chunk__7534_8394 = G__8401;
count__7535_8395 = G__8402;
i__7536_8396 = G__8403;
continue;
} else {
var temp__5804__auto___8404__$1 = cljs.core.seq(seq__7533_8393);
if(temp__5804__auto___8404__$1){
var seq__7533_8405__$1 = temp__5804__auto___8404__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7533_8405__$1)){
var c__5568__auto___8406 = cljs.core.chunk_first(seq__7533_8405__$1);
var G__8408 = cljs.core.chunk_rest(seq__7533_8405__$1);
var G__8409 = c__5568__auto___8406;
var G__8410 = cljs.core.count(c__5568__auto___8406);
var G__8411 = (0);
seq__7533_8393 = G__8408;
chunk__7534_8394 = G__8409;
count__7535_8395 = G__8410;
i__7536_8396 = G__8411;
continue;
} else {
var vec__7563_8412 = cljs.core.first(seq__7533_8405__$1);
var col_8413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7563_8412,(0),null);
var infos_8414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7563_8412,(1),null);
encode_cols(infos_8414,source_idx_8380,line_8390,col_8413);


var G__8415 = cljs.core.next(seq__7533_8405__$1);
var G__8416 = null;
var G__8417 = (0);
var G__8418 = (0);
seq__7533_8393 = G__8415;
chunk__7534_8394 = G__8416;
count__7535_8395 = G__8417;
i__7536_8396 = G__8418;
continue;
}
} else {
}
}
break;
}


var G__8419 = seq__7468_8384;
var G__8420 = chunk__7469_8385;
var G__8421 = count__7470_8386;
var G__8422 = (i__7471_8387 + (1));
seq__7468_8384 = G__8419;
chunk__7469_8385 = G__8420;
count__7470_8386 = G__8421;
i__7471_8387 = G__8422;
continue;
} else {
var temp__5804__auto___8424__$1 = cljs.core.seq(seq__7468_8384);
if(temp__5804__auto___8424__$1){
var seq__7468_8426__$1 = temp__5804__auto___8424__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7468_8426__$1)){
var c__5568__auto___8427 = cljs.core.chunk_first(seq__7468_8426__$1);
var G__8428 = cljs.core.chunk_rest(seq__7468_8426__$1);
var G__8429 = c__5568__auto___8427;
var G__8430 = cljs.core.count(c__5568__auto___8427);
var G__8431 = (0);
seq__7468_8384 = G__8428;
chunk__7469_8385 = G__8429;
count__7470_8386 = G__8430;
i__7471_8387 = G__8431;
continue;
} else {
var vec__7577_8432 = cljs.core.first(seq__7468_8426__$1);
var line_8433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7577_8432,(0),null);
var cols_8434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7577_8432,(1),null);
var seq__7580_8435 = cljs.core.seq(cols_8434);
var chunk__7581_8436 = null;
var count__7582_8437 = (0);
var i__7583_8439 = (0);
while(true){
if((i__7583_8439 < count__7582_8437)){
var vec__7610_8442 = chunk__7581_8436.cljs$core$IIndexed$_nth$arity$2(null,i__7583_8439);
var col_8443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7610_8442,(0),null);
var infos_8444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7610_8442,(1),null);
encode_cols(infos_8444,source_idx_8380,line_8433,col_8443);


var G__8447 = seq__7580_8435;
var G__8448 = chunk__7581_8436;
var G__8449 = count__7582_8437;
var G__8450 = (i__7583_8439 + (1));
seq__7580_8435 = G__8447;
chunk__7581_8436 = G__8448;
count__7582_8437 = G__8449;
i__7583_8439 = G__8450;
continue;
} else {
var temp__5804__auto___8451__$2 = cljs.core.seq(seq__7580_8435);
if(temp__5804__auto___8451__$2){
var seq__7580_8452__$1 = temp__5804__auto___8451__$2;
if(cljs.core.chunked_seq_QMARK_(seq__7580_8452__$1)){
var c__5568__auto___8453 = cljs.core.chunk_first(seq__7580_8452__$1);
var G__8454 = cljs.core.chunk_rest(seq__7580_8452__$1);
var G__8455 = c__5568__auto___8453;
var G__8456 = cljs.core.count(c__5568__auto___8453);
var G__8457 = (0);
seq__7580_8435 = G__8454;
chunk__7581_8436 = G__8455;
count__7582_8437 = G__8456;
i__7583_8439 = G__8457;
continue;
} else {
var vec__7613_8458 = cljs.core.first(seq__7580_8452__$1);
var col_8459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7613_8458,(0),null);
var infos_8460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7613_8458,(1),null);
encode_cols(infos_8460,source_idx_8380,line_8433,col_8459);


var G__8461 = cljs.core.next(seq__7580_8452__$1);
var G__8462 = null;
var G__8463 = (0);
var G__8464 = (0);
seq__7580_8435 = G__8461;
chunk__7581_8436 = G__8462;
count__7582_8437 = G__8463;
i__7583_8439 = G__8464;
continue;
}
} else {
}
}
break;
}


var G__8465 = cljs.core.next(seq__7468_8426__$1);
var G__8466 = null;
var G__8467 = (0);
var G__8468 = (0);
seq__7468_8384 = G__8465;
chunk__7469_8385 = G__8466;
count__7470_8386 = G__8467;
i__7471_8387 = G__8468;
continue;
}
} else {
}
}
break;
}


var G__8469 = cljs.core.next(seq__7086_8372__$1);
var G__8470 = null;
var G__8471 = (0);
var G__8472 = (0);
seq__7086_8283 = G__8469;
chunk__7087_8284 = G__8470;
count__7088_8285 = G__8471;
i__7089_8286 = G__8472;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__7618 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__7044_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__7044_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__7045_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__7045_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7046_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__7046_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__7623 = G__7618;
cljs.source_map.goog$module$goog$object.set(G__7623,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__7623;
} else {
return G__7618;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__7627 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7627,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7627,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__7631 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7631,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7631,(1),null);
var G__8480 = cljs.core.next(col_map_seq);
var G__8481 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__7631,col,infos,vec__7627,line,col_map){
return (function (v,p__7634){
var map__7635 = p__7634;
var map__7635__$1 = cljs.core.__destructure_map(map__7635);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7635__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7635__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__7631,col,infos,vec__7627,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__8480;
new_cols = G__8481;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__8482 = cljs.core.next(line_map_seq);
var G__8483 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__8482;
new_lines = G__8483;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map());
var seq__7637_8484 = cljs.core.seq(reverse_map);
var chunk__7638_8485 = null;
var count__7639_8486 = (0);
var i__7640_8487 = (0);
while(true){
if((i__7640_8487 < count__7639_8486)){
var vec__7920_8489 = chunk__7638_8485.cljs$core$IIndexed$_nth$arity$2(null,i__7640_8487);
var line_8490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7920_8489,(0),null);
var columns_8491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7920_8489,(1),null);
var seq__7923_8493 = cljs.core.seq(columns_8491);
var chunk__7924_8494 = null;
var count__7925_8495 = (0);
var i__7926_8496 = (0);
while(true){
if((i__7926_8496 < count__7925_8495)){
var vec__8025_8497 = chunk__7924_8494.cljs$core$IIndexed$_nth$arity$2(null,i__7926_8496);
var column_8498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8025_8497,(0),null);
var column_info_8499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8025_8497,(1),null);
var seq__8028_8500 = cljs.core.seq(column_info_8499);
var chunk__8029_8501 = null;
var count__8030_8502 = (0);
var i__8031_8503 = (0);
while(true){
if((i__8031_8503 < count__8030_8502)){
var map__8044_8504 = chunk__8029_8501.cljs$core$IIndexed$_nth$arity$2(null,i__8031_8503);
var map__8044_8505__$1 = cljs.core.__destructure_map(map__8044_8504);
var gline_8506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8044_8505__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_8507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8044_8505__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_8508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8044_8505__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_8506], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__8028_8500,chunk__8029_8501,count__8030_8502,i__8031_8503,seq__7923_8493,chunk__7924_8494,count__7925_8495,i__7926_8496,seq__7637_8484,chunk__7638_8485,count__7639_8486,i__7640_8487,map__8044_8504,map__8044_8505__$1,gline_8506,gcol_8507,name_8508,vec__8025_8497,column_8498,column_info_8499,vec__7920_8489,line_8490,columns_8491,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_8507], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_8490,new cljs.core.Keyword(null,"col","col",-1959363084),column_8498,new cljs.core.Keyword(null,"name","name",1843675177),name_8508], null));
});})(seq__8028_8500,chunk__8029_8501,count__8030_8502,i__8031_8503,seq__7923_8493,chunk__7924_8494,count__7925_8495,i__7926_8496,seq__7637_8484,chunk__7638_8485,count__7639_8486,i__7640_8487,map__8044_8504,map__8044_8505__$1,gline_8506,gcol_8507,name_8508,vec__8025_8497,column_8498,column_info_8499,vec__7920_8489,line_8490,columns_8491,inverted))
,cljs.core.sorted_map()));


var G__8511 = seq__8028_8500;
var G__8512 = chunk__8029_8501;
var G__8513 = count__8030_8502;
var G__8514 = (i__8031_8503 + (1));
seq__8028_8500 = G__8511;
chunk__8029_8501 = G__8512;
count__8030_8502 = G__8513;
i__8031_8503 = G__8514;
continue;
} else {
var temp__5804__auto___8517 = cljs.core.seq(seq__8028_8500);
if(temp__5804__auto___8517){
var seq__8028_8518__$1 = temp__5804__auto___8517;
if(cljs.core.chunked_seq_QMARK_(seq__8028_8518__$1)){
var c__5568__auto___8519 = cljs.core.chunk_first(seq__8028_8518__$1);
var G__8520 = cljs.core.chunk_rest(seq__8028_8518__$1);
var G__8521 = c__5568__auto___8519;
var G__8522 = cljs.core.count(c__5568__auto___8519);
var G__8523 = (0);
seq__8028_8500 = G__8520;
chunk__8029_8501 = G__8521;
count__8030_8502 = G__8522;
i__8031_8503 = G__8523;
continue;
} else {
var map__8056_8524 = cljs.core.first(seq__8028_8518__$1);
var map__8056_8525__$1 = cljs.core.__destructure_map(map__8056_8524);
var gline_8526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8056_8525__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_8527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8056_8525__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_8528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8056_8525__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_8526], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__8028_8500,chunk__8029_8501,count__8030_8502,i__8031_8503,seq__7923_8493,chunk__7924_8494,count__7925_8495,i__7926_8496,seq__7637_8484,chunk__7638_8485,count__7639_8486,i__7640_8487,map__8056_8524,map__8056_8525__$1,gline_8526,gcol_8527,name_8528,seq__8028_8518__$1,temp__5804__auto___8517,vec__8025_8497,column_8498,column_info_8499,vec__7920_8489,line_8490,columns_8491,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_8527], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_8490,new cljs.core.Keyword(null,"col","col",-1959363084),column_8498,new cljs.core.Keyword(null,"name","name",1843675177),name_8528], null));
});})(seq__8028_8500,chunk__8029_8501,count__8030_8502,i__8031_8503,seq__7923_8493,chunk__7924_8494,count__7925_8495,i__7926_8496,seq__7637_8484,chunk__7638_8485,count__7639_8486,i__7640_8487,map__8056_8524,map__8056_8525__$1,gline_8526,gcol_8527,name_8528,seq__8028_8518__$1,temp__5804__auto___8517,vec__8025_8497,column_8498,column_info_8499,vec__7920_8489,line_8490,columns_8491,inverted))
,cljs.core.sorted_map()));


var G__8530 = cljs.core.next(seq__8028_8518__$1);
var G__8531 = null;
var G__8532 = (0);
var G__8533 = (0);
seq__8028_8500 = G__8530;
chunk__8029_8501 = G__8531;
count__8030_8502 = G__8532;
i__8031_8503 = G__8533;
continue;
}
} else {
}
}
break;
}


var G__8534 = seq__7923_8493;
var G__8535 = chunk__7924_8494;
var G__8536 = count__7925_8495;
var G__8537 = (i__7926_8496 + (1));
seq__7923_8493 = G__8534;
chunk__7924_8494 = G__8535;
count__7925_8495 = G__8536;
i__7926_8496 = G__8537;
continue;
} else {
var temp__5804__auto___8538 = cljs.core.seq(seq__7923_8493);
if(temp__5804__auto___8538){
var seq__7923_8539__$1 = temp__5804__auto___8538;
if(cljs.core.chunked_seq_QMARK_(seq__7923_8539__$1)){
var c__5568__auto___8540 = cljs.core.chunk_first(seq__7923_8539__$1);
var G__8541 = cljs.core.chunk_rest(seq__7923_8539__$1);
var G__8542 = c__5568__auto___8540;
var G__8543 = cljs.core.count(c__5568__auto___8540);
var G__8544 = (0);
seq__7923_8493 = G__8541;
chunk__7924_8494 = G__8542;
count__7925_8495 = G__8543;
i__7926_8496 = G__8544;
continue;
} else {
var vec__8058_8545 = cljs.core.first(seq__7923_8539__$1);
var column_8546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8058_8545,(0),null);
var column_info_8547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8058_8545,(1),null);
var seq__8061_8548 = cljs.core.seq(column_info_8547);
var chunk__8062_8549 = null;
var count__8063_8550 = (0);
var i__8064_8551 = (0);
while(true){
if((i__8064_8551 < count__8063_8550)){
var map__8078_8552 = chunk__8062_8549.cljs$core$IIndexed$_nth$arity$2(null,i__8064_8551);
var map__8078_8553__$1 = cljs.core.__destructure_map(map__8078_8552);
var gline_8554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8078_8553__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_8555 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8078_8553__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_8556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8078_8553__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_8554], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__8061_8548,chunk__8062_8549,count__8063_8550,i__8064_8551,seq__7923_8493,chunk__7924_8494,count__7925_8495,i__7926_8496,seq__7637_8484,chunk__7638_8485,count__7639_8486,i__7640_8487,map__8078_8552,map__8078_8553__$1,gline_8554,gcol_8555,name_8556,vec__8058_8545,column_8546,column_info_8547,seq__7923_8539__$1,temp__5804__auto___8538,vec__7920_8489,line_8490,columns_8491,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_8555], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_8490,new cljs.core.Keyword(null,"col","col",-1959363084),column_8546,new cljs.core.Keyword(null,"name","name",1843675177),name_8556], null));
});})(seq__8061_8548,chunk__8062_8549,count__8063_8550,i__8064_8551,seq__7923_8493,chunk__7924_8494,count__7925_8495,i__7926_8496,seq__7637_8484,chunk__7638_8485,count__7639_8486,i__7640_8487,map__8078_8552,map__8078_8553__$1,gline_8554,gcol_8555,name_8556,vec__8058_8545,column_8546,column_info_8547,seq__7923_8539__$1,temp__5804__auto___8538,vec__7920_8489,line_8490,columns_8491,inverted))
,cljs.core.sorted_map()));


var G__8558 = seq__8061_8548;
var G__8559 = chunk__8062_8549;
var G__8560 = count__8063_8550;
var G__8561 = (i__8064_8551 + (1));
seq__8061_8548 = G__8558;
chunk__8062_8549 = G__8559;
count__8063_8550 = G__8560;
i__8064_8551 = G__8561;
continue;
} else {
var temp__5804__auto___8563__$1 = cljs.core.seq(seq__8061_8548);
if(temp__5804__auto___8563__$1){
var seq__8061_8565__$1 = temp__5804__auto___8563__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8061_8565__$1)){
var c__5568__auto___8566 = cljs.core.chunk_first(seq__8061_8565__$1);
var G__8567 = cljs.core.chunk_rest(seq__8061_8565__$1);
var G__8568 = c__5568__auto___8566;
var G__8569 = cljs.core.count(c__5568__auto___8566);
var G__8570 = (0);
seq__8061_8548 = G__8567;
chunk__8062_8549 = G__8568;
count__8063_8550 = G__8569;
i__8064_8551 = G__8570;
continue;
} else {
var map__8080_8571 = cljs.core.first(seq__8061_8565__$1);
var map__8080_8572__$1 = cljs.core.__destructure_map(map__8080_8571);
var gline_8573 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8080_8572__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_8574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8080_8572__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_8575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8080_8572__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_8573], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__8061_8548,chunk__8062_8549,count__8063_8550,i__8064_8551,seq__7923_8493,chunk__7924_8494,count__7925_8495,i__7926_8496,seq__7637_8484,chunk__7638_8485,count__7639_8486,i__7640_8487,map__8080_8571,map__8080_8572__$1,gline_8573,gcol_8574,name_8575,seq__8061_8565__$1,temp__5804__auto___8563__$1,vec__8058_8545,column_8546,column_info_8547,seq__7923_8539__$1,temp__5804__auto___8538,vec__7920_8489,line_8490,columns_8491,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_8574], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_8490,new cljs.core.Keyword(null,"col","col",-1959363084),column_8546,new cljs.core.Keyword(null,"name","name",1843675177),name_8575], null));
});})(seq__8061_8548,chunk__8062_8549,count__8063_8550,i__8064_8551,seq__7923_8493,chunk__7924_8494,count__7925_8495,i__7926_8496,seq__7637_8484,chunk__7638_8485,count__7639_8486,i__7640_8487,map__8080_8571,map__8080_8572__$1,gline_8573,gcol_8574,name_8575,seq__8061_8565__$1,temp__5804__auto___8563__$1,vec__8058_8545,column_8546,column_info_8547,seq__7923_8539__$1,temp__5804__auto___8538,vec__7920_8489,line_8490,columns_8491,inverted))
,cljs.core.sorted_map()));


var G__8578 = cljs.core.next(seq__8061_8565__$1);
var G__8579 = null;
var G__8580 = (0);
var G__8581 = (0);
seq__8061_8548 = G__8578;
chunk__8062_8549 = G__8579;
count__8063_8550 = G__8580;
i__8064_8551 = G__8581;
continue;
}
} else {
}
}
break;
}


var G__8582 = cljs.core.next(seq__7923_8539__$1);
var G__8583 = null;
var G__8584 = (0);
var G__8585 = (0);
seq__7923_8493 = G__8582;
chunk__7924_8494 = G__8583;
count__7925_8495 = G__8584;
i__7926_8496 = G__8585;
continue;
}
} else {
}
}
break;
}


var G__8586 = seq__7637_8484;
var G__8587 = chunk__7638_8485;
var G__8588 = count__7639_8486;
var G__8589 = (i__7640_8487 + (1));
seq__7637_8484 = G__8586;
chunk__7638_8485 = G__8587;
count__7639_8486 = G__8588;
i__7640_8487 = G__8589;
continue;
} else {
var temp__5804__auto___8590 = cljs.core.seq(seq__7637_8484);
if(temp__5804__auto___8590){
var seq__7637_8591__$1 = temp__5804__auto___8590;
if(cljs.core.chunked_seq_QMARK_(seq__7637_8591__$1)){
var c__5568__auto___8592 = cljs.core.chunk_first(seq__7637_8591__$1);
var G__8593 = cljs.core.chunk_rest(seq__7637_8591__$1);
var G__8594 = c__5568__auto___8592;
var G__8595 = cljs.core.count(c__5568__auto___8592);
var G__8596 = (0);
seq__7637_8484 = G__8593;
chunk__7638_8485 = G__8594;
count__7639_8486 = G__8595;
i__7640_8487 = G__8596;
continue;
} else {
var vec__8089_8597 = cljs.core.first(seq__7637_8591__$1);
var line_8598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8089_8597,(0),null);
var columns_8599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8089_8597,(1),null);
var seq__8092_8600 = cljs.core.seq(columns_8599);
var chunk__8093_8601 = null;
var count__8094_8602 = (0);
var i__8095_8603 = (0);
while(true){
if((i__8095_8603 < count__8094_8602)){
var vec__8165_8604 = chunk__8093_8601.cljs$core$IIndexed$_nth$arity$2(null,i__8095_8603);
var column_8605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8165_8604,(0),null);
var column_info_8606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8165_8604,(1),null);
var seq__8168_8607 = cljs.core.seq(column_info_8606);
var chunk__8169_8608 = null;
var count__8170_8609 = (0);
var i__8171_8610 = (0);
while(true){
if((i__8171_8610 < count__8170_8609)){
var map__8186_8611 = chunk__8169_8608.cljs$core$IIndexed$_nth$arity$2(null,i__8171_8610);
var map__8186_8612__$1 = cljs.core.__destructure_map(map__8186_8611);
var gline_8613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8186_8612__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_8614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8186_8612__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_8615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8186_8612__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_8613], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__8168_8607,chunk__8169_8608,count__8170_8609,i__8171_8610,seq__8092_8600,chunk__8093_8601,count__8094_8602,i__8095_8603,seq__7637_8484,chunk__7638_8485,count__7639_8486,i__7640_8487,map__8186_8611,map__8186_8612__$1,gline_8613,gcol_8614,name_8615,vec__8165_8604,column_8605,column_info_8606,vec__8089_8597,line_8598,columns_8599,seq__7637_8591__$1,temp__5804__auto___8590,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_8614], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_8598,new cljs.core.Keyword(null,"col","col",-1959363084),column_8605,new cljs.core.Keyword(null,"name","name",1843675177),name_8615], null));
});})(seq__8168_8607,chunk__8169_8608,count__8170_8609,i__8171_8610,seq__8092_8600,chunk__8093_8601,count__8094_8602,i__8095_8603,seq__7637_8484,chunk__7638_8485,count__7639_8486,i__7640_8487,map__8186_8611,map__8186_8612__$1,gline_8613,gcol_8614,name_8615,vec__8165_8604,column_8605,column_info_8606,vec__8089_8597,line_8598,columns_8599,seq__7637_8591__$1,temp__5804__auto___8590,inverted))
,cljs.core.sorted_map()));


var G__8624 = seq__8168_8607;
var G__8625 = chunk__8169_8608;
var G__8626 = count__8170_8609;
var G__8627 = (i__8171_8610 + (1));
seq__8168_8607 = G__8624;
chunk__8169_8608 = G__8625;
count__8170_8609 = G__8626;
i__8171_8610 = G__8627;
continue;
} else {
var temp__5804__auto___8628__$1 = cljs.core.seq(seq__8168_8607);
if(temp__5804__auto___8628__$1){
var seq__8168_8629__$1 = temp__5804__auto___8628__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8168_8629__$1)){
var c__5568__auto___8630 = cljs.core.chunk_first(seq__8168_8629__$1);
var G__8632 = cljs.core.chunk_rest(seq__8168_8629__$1);
var G__8633 = c__5568__auto___8630;
var G__8634 = cljs.core.count(c__5568__auto___8630);
var G__8635 = (0);
seq__8168_8607 = G__8632;
chunk__8169_8608 = G__8633;
count__8170_8609 = G__8634;
i__8171_8610 = G__8635;
continue;
} else {
var map__8195_8636 = cljs.core.first(seq__8168_8629__$1);
var map__8195_8637__$1 = cljs.core.__destructure_map(map__8195_8636);
var gline_8638 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8195_8637__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_8639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8195_8637__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_8640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8195_8637__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_8638], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__8168_8607,chunk__8169_8608,count__8170_8609,i__8171_8610,seq__8092_8600,chunk__8093_8601,count__8094_8602,i__8095_8603,seq__7637_8484,chunk__7638_8485,count__7639_8486,i__7640_8487,map__8195_8636,map__8195_8637__$1,gline_8638,gcol_8639,name_8640,seq__8168_8629__$1,temp__5804__auto___8628__$1,vec__8165_8604,column_8605,column_info_8606,vec__8089_8597,line_8598,columns_8599,seq__7637_8591__$1,temp__5804__auto___8590,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_8639], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_8598,new cljs.core.Keyword(null,"col","col",-1959363084),column_8605,new cljs.core.Keyword(null,"name","name",1843675177),name_8640], null));
});})(seq__8168_8607,chunk__8169_8608,count__8170_8609,i__8171_8610,seq__8092_8600,chunk__8093_8601,count__8094_8602,i__8095_8603,seq__7637_8484,chunk__7638_8485,count__7639_8486,i__7640_8487,map__8195_8636,map__8195_8637__$1,gline_8638,gcol_8639,name_8640,seq__8168_8629__$1,temp__5804__auto___8628__$1,vec__8165_8604,column_8605,column_info_8606,vec__8089_8597,line_8598,columns_8599,seq__7637_8591__$1,temp__5804__auto___8590,inverted))
,cljs.core.sorted_map()));


var G__8641 = cljs.core.next(seq__8168_8629__$1);
var G__8642 = null;
var G__8643 = (0);
var G__8644 = (0);
seq__8168_8607 = G__8641;
chunk__8169_8608 = G__8642;
count__8170_8609 = G__8643;
i__8171_8610 = G__8644;
continue;
}
} else {
}
}
break;
}


var G__8645 = seq__8092_8600;
var G__8646 = chunk__8093_8601;
var G__8647 = count__8094_8602;
var G__8648 = (i__8095_8603 + (1));
seq__8092_8600 = G__8645;
chunk__8093_8601 = G__8646;
count__8094_8602 = G__8647;
i__8095_8603 = G__8648;
continue;
} else {
var temp__5804__auto___8649__$1 = cljs.core.seq(seq__8092_8600);
if(temp__5804__auto___8649__$1){
var seq__8092_8650__$1 = temp__5804__auto___8649__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8092_8650__$1)){
var c__5568__auto___8651 = cljs.core.chunk_first(seq__8092_8650__$1);
var G__8652 = cljs.core.chunk_rest(seq__8092_8650__$1);
var G__8653 = c__5568__auto___8651;
var G__8654 = cljs.core.count(c__5568__auto___8651);
var G__8655 = (0);
seq__8092_8600 = G__8652;
chunk__8093_8601 = G__8653;
count__8094_8602 = G__8654;
i__8095_8603 = G__8655;
continue;
} else {
var vec__8197_8656 = cljs.core.first(seq__8092_8650__$1);
var column_8657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8197_8656,(0),null);
var column_info_8658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8197_8656,(1),null);
var seq__8200_8659 = cljs.core.seq(column_info_8658);
var chunk__8201_8660 = null;
var count__8202_8661 = (0);
var i__8203_8662 = (0);
while(true){
if((i__8203_8662 < count__8202_8661)){
var map__8220_8663 = chunk__8201_8660.cljs$core$IIndexed$_nth$arity$2(null,i__8203_8662);
var map__8220_8664__$1 = cljs.core.__destructure_map(map__8220_8663);
var gline_8665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8220_8664__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_8666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8220_8664__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_8667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8220_8664__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_8665], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__8200_8659,chunk__8201_8660,count__8202_8661,i__8203_8662,seq__8092_8600,chunk__8093_8601,count__8094_8602,i__8095_8603,seq__7637_8484,chunk__7638_8485,count__7639_8486,i__7640_8487,map__8220_8663,map__8220_8664__$1,gline_8665,gcol_8666,name_8667,vec__8197_8656,column_8657,column_info_8658,seq__8092_8650__$1,temp__5804__auto___8649__$1,vec__8089_8597,line_8598,columns_8599,seq__7637_8591__$1,temp__5804__auto___8590,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_8666], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_8598,new cljs.core.Keyword(null,"col","col",-1959363084),column_8657,new cljs.core.Keyword(null,"name","name",1843675177),name_8667], null));
});})(seq__8200_8659,chunk__8201_8660,count__8202_8661,i__8203_8662,seq__8092_8600,chunk__8093_8601,count__8094_8602,i__8095_8603,seq__7637_8484,chunk__7638_8485,count__7639_8486,i__7640_8487,map__8220_8663,map__8220_8664__$1,gline_8665,gcol_8666,name_8667,vec__8197_8656,column_8657,column_info_8658,seq__8092_8650__$1,temp__5804__auto___8649__$1,vec__8089_8597,line_8598,columns_8599,seq__7637_8591__$1,temp__5804__auto___8590,inverted))
,cljs.core.sorted_map()));


var G__8672 = seq__8200_8659;
var G__8673 = chunk__8201_8660;
var G__8674 = count__8202_8661;
var G__8675 = (i__8203_8662 + (1));
seq__8200_8659 = G__8672;
chunk__8201_8660 = G__8673;
count__8202_8661 = G__8674;
i__8203_8662 = G__8675;
continue;
} else {
var temp__5804__auto___8676__$2 = cljs.core.seq(seq__8200_8659);
if(temp__5804__auto___8676__$2){
var seq__8200_8677__$1 = temp__5804__auto___8676__$2;
if(cljs.core.chunked_seq_QMARK_(seq__8200_8677__$1)){
var c__5568__auto___8678 = cljs.core.chunk_first(seq__8200_8677__$1);
var G__8679 = cljs.core.chunk_rest(seq__8200_8677__$1);
var G__8680 = c__5568__auto___8678;
var G__8681 = cljs.core.count(c__5568__auto___8678);
var G__8682 = (0);
seq__8200_8659 = G__8679;
chunk__8201_8660 = G__8680;
count__8202_8661 = G__8681;
i__8203_8662 = G__8682;
continue;
} else {
var map__8223_8683 = cljs.core.first(seq__8200_8677__$1);
var map__8223_8684__$1 = cljs.core.__destructure_map(map__8223_8683);
var gline_8685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8223_8684__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_8686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8223_8684__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_8687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8223_8684__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_8685], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__8200_8659,chunk__8201_8660,count__8202_8661,i__8203_8662,seq__8092_8600,chunk__8093_8601,count__8094_8602,i__8095_8603,seq__7637_8484,chunk__7638_8485,count__7639_8486,i__7640_8487,map__8223_8683,map__8223_8684__$1,gline_8685,gcol_8686,name_8687,seq__8200_8677__$1,temp__5804__auto___8676__$2,vec__8197_8656,column_8657,column_info_8658,seq__8092_8650__$1,temp__5804__auto___8649__$1,vec__8089_8597,line_8598,columns_8599,seq__7637_8591__$1,temp__5804__auto___8590,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_8686], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_8598,new cljs.core.Keyword(null,"col","col",-1959363084),column_8657,new cljs.core.Keyword(null,"name","name",1843675177),name_8687], null));
});})(seq__8200_8659,chunk__8201_8660,count__8202_8661,i__8203_8662,seq__8092_8600,chunk__8093_8601,count__8094_8602,i__8095_8603,seq__7637_8484,chunk__7638_8485,count__7639_8486,i__7640_8487,map__8223_8683,map__8223_8684__$1,gline_8685,gcol_8686,name_8687,seq__8200_8677__$1,temp__5804__auto___8676__$2,vec__8197_8656,column_8657,column_info_8658,seq__8092_8650__$1,temp__5804__auto___8649__$1,vec__8089_8597,line_8598,columns_8599,seq__7637_8591__$1,temp__5804__auto___8590,inverted))
,cljs.core.sorted_map()));


var G__8689 = cljs.core.next(seq__8200_8677__$1);
var G__8690 = null;
var G__8691 = (0);
var G__8692 = (0);
seq__8200_8659 = G__8689;
chunk__8201_8660 = G__8690;
count__8202_8661 = G__8691;
i__8203_8662 = G__8692;
continue;
}
} else {
}
}
break;
}


var G__8693 = cljs.core.next(seq__8092_8650__$1);
var G__8694 = null;
var G__8695 = (0);
var G__8696 = (0);
seq__8092_8600 = G__8693;
chunk__8093_8601 = G__8694;
count__8094_8602 = G__8695;
i__8095_8603 = G__8696;
continue;
}
} else {
}
}
break;
}


var G__8697 = cljs.core.next(seq__7637_8591__$1);
var G__8698 = null;
var G__8699 = (0);
var G__8700 = (0);
seq__7637_8484 = G__8697;
chunk__7638_8485 = G__8698;
count__7639_8486 = G__8699;
i__7640_8487 = G__8700;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});

//# sourceMappingURL=cljs.source_map.js.map
