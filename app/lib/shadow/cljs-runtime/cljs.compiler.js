import "./cljs_env.js";
goog.provide('cljs.compiler');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_source_map_data_gen_col_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv((function (xs,ns,_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(needle,cljs.compiler.get_first_ns_segment(ns))){
return cljs.core.reduced(needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__9690 = s;
var map__9690__$1 = cljs.core.__destructure_map(map__9690);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9690__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9690__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__9692 = info;
var map__9693 = G__9692;
var map__9693__$1 = cljs.core.__destructure_map(map__9693);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9693__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__9692__$1 = G__9692;
while(true){
var d__$2 = d__$1;
var map__9695 = G__9692__$1;
var map__9695__$1 = cljs.core.__destructure_map(map__9695);
var shadow__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9695__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$2)){
var G__10539 = (d__$2 + (1));
var G__10540 = shadow__$2;
d__$1 = G__10539;
G__9692__$1 = G__10540;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s).cljs$core$IHash$_hash$arity$1(null),cljs.compiler.shadow_depth(s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__9697){
var map__9698 = p__9697;
var map__9698__$1 = cljs.core.__destructure_map(map__9698);
var name_var = map__9698__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9698__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9698__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__9699 = info;
var map__9699__$1 = cljs.core.__destructure_map(map__9699);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9699__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9699__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__9701 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__9701) : cljs.compiler.munge.call(null,G__9701));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__9738 = arguments.length;
switch (G__9738) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
}));

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.impl.cljs_map_QMARK_(s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if((!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null)))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.compiler.hash_scope(s);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):(((!((renamed == null))))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = (function (){var fexpr__9754 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",(25),(1),(11790),(11790),new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__9754.cljs$core$IFn$_invoke$arity$1 ? fexpr__9754.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__9754.call(null,ss__$3));
})();
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
}));

(cljs.compiler.munge.cljs$lang$maxFixedArity = 2);

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__9755 = cp;
switch (G__9755) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.cljs$core$IFn$_invoke$arity$2("0000",unpadded.length);
return ["\\u",pad,cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__9756_10559 = cljs.core.seq(s);
var chunk__9757_10560 = null;
var count__9758_10561 = (0);
var i__9759_10562 = (0);
while(true){
if((i__9759_10562 < count__9758_10561)){
var c_10565 = chunk__9757_10560.cljs$core$IIndexed$_nth$arity$2(null,i__9759_10562);
sb.append(cljs.compiler.escape_char(c_10565));


var G__10568 = seq__9756_10559;
var G__10569 = chunk__9757_10560;
var G__10570 = count__9758_10561;
var G__10571 = (i__9759_10562 + (1));
seq__9756_10559 = G__10568;
chunk__9757_10560 = G__10569;
count__9758_10561 = G__10570;
i__9759_10562 = G__10571;
continue;
} else {
var temp__5804__auto___10572 = cljs.core.seq(seq__9756_10559);
if(temp__5804__auto___10572){
var seq__9756_10573__$1 = temp__5804__auto___10572;
if(cljs.core.chunked_seq_QMARK_(seq__9756_10573__$1)){
var c__5568__auto___10574 = cljs.core.chunk_first(seq__9756_10573__$1);
var G__10575 = cljs.core.chunk_rest(seq__9756_10573__$1);
var G__10576 = c__5568__auto___10574;
var G__10577 = cljs.core.count(c__5568__auto___10574);
var G__10578 = (0);
seq__9756_10559 = G__10575;
chunk__9757_10560 = G__10576;
count__9758_10561 = G__10577;
i__9759_10562 = G__10578;
continue;
} else {
var c_10579 = cljs.core.first(seq__9756_10573__$1);
sb.append(cljs.compiler.escape_char(c_10579));


var G__10580 = cljs.core.next(seq__9756_10573__$1);
var G__10581 = null;
var G__10582 = (0);
var G__10583 = (0);
seq__9756_10559 = G__10580;
chunk__9757_10560 = G__10581;
count__9758_10561 = G__10582;
i__9759_10562 = G__10583;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\""].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__9760 = cljs.core.get_global_hierarchy;
return (fexpr__9760.cljs$core$IFn$_invoke$arity$0 ? fexpr__9760.cljs$core$IFn$_invoke$arity$0() : fexpr__9760.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__9761_10585 = ast;
var map__9761_10586__$1 = cljs.core.__destructure_map(map__9761_10585);
var env_10587 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9761_10586__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_10587))){
var map__9762_10588 = env_10587;
var map__9762_10589__$1 = cljs.core.__destructure_map(map__9762_10588);
var line_10590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9762_10589__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_10591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9762_10589__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__9764 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__9766 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__9765 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__9765.cljs$core$IFn$_invoke$arity$1 ? fexpr__9765.cljs$core$IFn$_invoke$arity$1(G__9766) : fexpr__9765.call(null,G__9766));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__9764,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__9764;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_10590 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_10591)?(column_10591 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
}));
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__9779 = arguments.length;
switch (G__9779) {
case 0:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___10595 = arguments.length;
var i__5770__auto___10596 = (0);
while(true){
if((i__5770__auto___10596 < len__5769__auto___10595)){
args_arr__5794__auto__.push((arguments[i__5770__auto___10596]));

var G__10597 = (i__5770__auto___10596 + (1));
i__5770__auto___10596 = G__10597;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5795__auto__);

}
});

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.impl.cljs_map_QMARK_(a)){
cljs.compiler.emit(a);
} else {
if(cljs.analyzer.impl.cljs_seq_QMARK_(a)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,a);
} else {
if(typeof a === 'function'){
(a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null));
} else {
var s_10598 = (function (){var G__9781 = a;
if((!(typeof a === 'string'))){
return G__9781.toString();
} else {
return G__9781;
}
})();
var temp__5808__auto___10599 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5808__auto___10599 == null)){
} else {
var sm_data_10600 = temp__5808__auto___10599;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_10600,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__9770_SHARP_){
return (p1__9770_SHARP_ + s_10598.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_10598], 0));

}
}
}
}

return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__9795 = cljs.core.seq(xs);
var chunk__9796 = null;
var count__9797 = (0);
var i__9798 = (0);
while(true){
if((i__9798 < count__9797)){
var x = chunk__9796.cljs$core$IIndexed$_nth$arity$2(null,i__9798);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__10601 = seq__9795;
var G__10602 = chunk__9796;
var G__10603 = count__9797;
var G__10604 = (i__9798 + (1));
seq__9795 = G__10601;
chunk__9796 = G__10602;
count__9797 = G__10603;
i__9798 = G__10604;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__9795);
if(temp__5804__auto__){
var seq__9795__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9795__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__9795__$1);
var G__10605 = cljs.core.chunk_rest(seq__9795__$1);
var G__10606 = c__5568__auto__;
var G__10607 = cljs.core.count(c__5568__auto__);
var G__10608 = (0);
seq__9795 = G__10605;
chunk__9796 = G__10606;
count__9797 = G__10607;
i__9798 = G__10608;
continue;
} else {
var x = cljs.core.first(seq__9795__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__10609 = cljs.core.next(seq__9795__$1);
var G__10610 = null;
var G__10611 = (0);
var G__10612 = (0);
seq__9795 = G__10609;
chunk__9796 = G__10610;
count__9797 = G__10611;
i__9798 = G__10612;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq9773){
var G__9774 = cljs.core.first(seq9773);
var seq9773__$1 = cljs.core.next(seq9773);
var G__9775 = cljs.core.first(seq9773__$1);
var seq9773__$2 = cljs.core.next(seq9773__$1);
var G__9776 = cljs.core.first(seq9773__$2);
var seq9773__$3 = cljs.core.next(seq9773__$2);
var G__9777 = cljs.core.first(seq9773__$3);
var seq9773__$4 = cljs.core.next(seq9773__$3);
var G__9778 = cljs.core.first(seq9773__$4);
var seq9773__$5 = cljs.core.next(seq9773__$4);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9774,G__9775,G__9776,G__9777,G__9778,seq9773__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__9803){
var map__9804 = p__9803;
var map__9804__$1 = cljs.core.__destructure_map(map__9804);
var m = map__9804__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9804__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__9813 = arguments.length;
switch (G__9813) {
case 0:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___10616 = arguments.length;
var i__5770__auto___10617 = (0);
while(true){
if((i__5770__auto___10617 < len__5769__auto___10616)){
args_arr__5794__auto__.push((arguments[i__5770__auto___10617]));

var G__10618 = (i__5770__auto___10617 + (1));
i__5770__auto___10617 = G__10618;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5795__auto__);

}
});

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__9824_10619 = cljs.core.seq(xs);
var chunk__9825_10620 = null;
var count__9826_10621 = (0);
var i__9827_10622 = (0);
while(true){
if((i__9827_10622 < count__9826_10621)){
var x_10623 = chunk__9825_10620.cljs$core$IIndexed$_nth$arity$2(null,i__9827_10622);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_10623);


var G__10624 = seq__9824_10619;
var G__10625 = chunk__9825_10620;
var G__10626 = count__9826_10621;
var G__10627 = (i__9827_10622 + (1));
seq__9824_10619 = G__10624;
chunk__9825_10620 = G__10625;
count__9826_10621 = G__10626;
i__9827_10622 = G__10627;
continue;
} else {
var temp__5804__auto___10628 = cljs.core.seq(seq__9824_10619);
if(temp__5804__auto___10628){
var seq__9824_10629__$1 = temp__5804__auto___10628;
if(cljs.core.chunked_seq_QMARK_(seq__9824_10629__$1)){
var c__5568__auto___10630 = cljs.core.chunk_first(seq__9824_10629__$1);
var G__10631 = cljs.core.chunk_rest(seq__9824_10629__$1);
var G__10632 = c__5568__auto___10630;
var G__10633 = cljs.core.count(c__5568__auto___10630);
var G__10634 = (0);
seq__9824_10619 = G__10631;
chunk__9825_10620 = G__10632;
count__9826_10621 = G__10633;
i__9827_10622 = G__10634;
continue;
} else {
var x_10635 = cljs.core.first(seq__9824_10629__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_10635);


var G__10636 = cljs.core.next(seq__9824_10629__$1);
var G__10637 = null;
var G__10638 = (0);
var G__10639 = (0);
seq__9824_10619 = G__10636;
chunk__9825_10620 = G__10637;
count__9826_10621 = G__10638;
i__9827_10622 = G__10639;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln();
}));

/** @this {Function} */
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq9807){
var G__9808 = cljs.core.first(seq9807);
var seq9807__$1 = cljs.core.next(seq9807);
var G__9809 = cljs.core.first(seq9807__$1);
var seq9807__$2 = cljs.core.next(seq9807__$1);
var G__9810 = cljs.core.first(seq9807__$2);
var seq9807__$3 = cljs.core.next(seq9807__$2);
var G__9811 = cljs.core.first(seq9807__$3);
var seq9807__$4 = cljs.core.next(seq9807__$3);
var G__9812 = cljs.core.first(seq9807__$4);
var seq9807__$5 = cljs.core.next(seq9807__$4);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9808,G__9809,G__9810,G__9811,G__9812,seq9807__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__9829_10640 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__9830_10641 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__9831_10642 = true;
var _STAR_print_fn_STAR__temp_val__9832_10643 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__9831_10642);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__9832_10643);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__9830_10641);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__9829_10640);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__9833 = cljs.core.get_global_hierarchy;
return (fexpr__9833.cljs$core$IFn$_invoke$arity$0 ? fexpr__9833.cljs$core$IFn$_invoke$arity$0() : fexpr__9833.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.impl.cljs_seq_QMARK_(x)){
return (cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.core.record_QMARK_(x)){
var vec__9835 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9835,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9835,(1),null);
var G__9838 = ns;
var G__9839 = name;
var G__9840 = (function (){
var G__9841 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__9841) : cljs.compiler.emit_constant.call(null,G__9841));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__9838,G__9839,G__9840) : cljs.compiler.emit_record_value.call(null,G__9838,G__9839,G__9840));
} else {
if(cljs.analyzer.impl.cljs_map_QMARK_(x)){
var G__9842 = cljs.core.keys(x);
var G__9843 = cljs.core.vals(x);
var G__9844 = cljs.compiler.emit_constants_comma_sep;
var G__9845 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__9842,G__9843,G__9844,G__9845) : cljs.compiler.emit_map.call(null,G__9842,G__9843,G__9844,G__9845));
} else {
if(cljs.analyzer.impl.cljs_vector_QMARK_(x)){
return (cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.analyzer.impl.cljs_set_QMARK_(x)){
return (cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3(x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_) : cljs.compiler.emit_set.call(null,x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_));
} else {
return cljs.compiler.emit_constant_STAR_.cljs$core$IFn$_invoke$arity$1(x);

}
}
}
}
}
});
cljs.compiler.emit_constant = (function cljs$compiler$emit_constant(v){
var m = cljs.analyzer.elide_irrelevant_meta(cljs.core.meta(v));
if((!((cljs.core.seq(m) == null)))){
var G__9846 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__9847 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__9846,G__9847) : cljs.compiler.emit_with_meta.call(null,G__9846,G__9847));
} else {
return cljs.compiler.emit_constant_no_meta(v);
}
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(x)], 0))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("null");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("NaN");
} else {
if(cljs.core.not(isFinite(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((((x > (0)))?"Infinity":"-Infinity"));
} else {
if((((x === (0))) && ((((1) / x) < (0))))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(-0)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(",x,")");

}
}
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x)));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(x)?"true":"false"));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(new RegExp(\"\"))");
} else {
var vec__9850 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9850,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9850,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9850,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Keyword(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant((cljs.core.truth_(ns)?[ns,"/",name].join(''):name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(kw));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = (((!((ns == null))))?[ns,"/",name].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Symbol(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(symstr);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(sym));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(null);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
var temp__5802__auto__ = (function (){var and__5043__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__5043__auto__)){
var G__9863 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__9863) : x.call(null,G__9863));
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var value = temp__5802__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
var temp__5802__auto__ = (function (){var and__5043__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__5043__auto__)){
var G__9870 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__9870) : x.call(null,G__9870));
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var value = temp__5802__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constants_comma_sep = (function cljs$compiler$emit_constants_comma_sep(cs){
return (function (){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,m){
if(cljs.core.even_QMARK_(i)){
return cljs.compiler.emit_constant(m);
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(m);
}
}),cljs.compiler.comma_sep(cs)));
});
});
cljs.compiler.array_map_threshold = (8);
cljs.compiler.emit_inst = (function cljs$compiler$emit_inst(inst_ms){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("new Date(",inst_ms,")");
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emit_inst(date.getTime());
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_(items)){
var G__9882 = items;
var G__9883 = (function (p1__9881_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__9881_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__9882,G__9883) : cljs.compiler.emit_js_object.call(null,G__9882,G__9883));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__9885){
var map__9886 = p__9885;
var map__9886__$1 = cljs.core.__destructure_map(map__9886);
var ast = map__9886__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9886__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9886__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9886__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5802__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5802__auto__)){
var const_expr = temp__5802__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__9887 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__9887__$1 = cljs.core.__destructure_map(map__9887);
var cenv = map__9887__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9887__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name(var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__5045__auto__ = js_module_name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ast));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__9889 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var G__9890 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__9890) : cljs.compiler.es5_GT__EQ_.call(null,G__9890));
})();
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__5043__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__9889,cljs.analyzer.es5_allowed);
} else {
return G__9889;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__5045__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__9891 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__9891,reserved);
} else {
return G__9891;
}
})();
var env__9256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__9892_10655 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__9892_10656__$1 = (((G__9892_10655 instanceof cljs.core.Keyword))?G__9892_10655.fqn:null);
switch (G__9892_10656__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace(var_name))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"].",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default",cljs.core.name(var_name));
} else {
return and__5043__auto__;
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);
}

break;
default:
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);

}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"var","var",-769682797),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"binding","binding",539932593),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"local","local",-1497766724),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__9897){
var map__9898 = p__9897;
var map__9898__$1 = cljs.core.__destructure_map(map__9898);
var arg = map__9898__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9898__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9898__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9898__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9898__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__9899 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__9899__$1 = cljs.core.__destructure_map(map__9899);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9899__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__9256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__9900){
var map__9901 = p__9900;
var map__9901__$1 = cljs.core.__destructure_map(map__9901);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9901__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9901__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9901__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_((function (p1__9902_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__9902_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__9903 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__9903) : comma_sep.call(null,G__9903));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__9904 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__9904) : comma_sep.call(null,G__9904));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__9905){
var map__9906 = p__9905;
var map__9906__$1 = cljs.core.__destructure_map(map__9906);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9906__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9906__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9906__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__9256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.list(",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count(items);
if((cnt < (32))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentVector.fromArray([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], true)");
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__9913){
var map__9916 = p__9913;
var map__9916__$1 = cljs.core.__destructure_map(map__9916);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9916__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9916__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_((function (p1__9917_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__9917_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__9918 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__9918) : comma_sep.call(null,G__9918));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__9919){
var map__9920 = p__9919;
var map__9920__$1 = cljs.core.__destructure_map(map__9920);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9920__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9920__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5804__auto___10678 = cljs.core.seq(items);
if(temp__5804__auto___10678){
var items_10679__$1 = temp__5804__auto___10678;
var vec__9922_10680 = items_10679__$1;
var seq__9923_10681 = cljs.core.seq(vec__9922_10680);
var first__9924_10682 = cljs.core.first(seq__9923_10681);
var seq__9923_10683__$1 = cljs.core.next(seq__9923_10681);
var vec__9925_10684 = first__9924_10682;
var k_10685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9925_10684,(0),null);
var v_10686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9925_10684,(1),null);
var r_10687 = seq__9923_10683__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_10685),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_10686) : emit_js_object_val.call(null,v_10686)));

var seq__9929_10688 = cljs.core.seq(r_10687);
var chunk__9930_10689 = null;
var count__9931_10690 = (0);
var i__9932_10691 = (0);
while(true){
if((i__9932_10691 < count__9931_10690)){
var vec__9943_10692 = chunk__9930_10689.cljs$core$IIndexed$_nth$arity$2(null,i__9932_10691);
var k_10693__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9943_10692,(0),null);
var v_10694__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9943_10692,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_10693__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_10694__$1) : emit_js_object_val.call(null,v_10694__$1)));


var G__10695 = seq__9929_10688;
var G__10696 = chunk__9930_10689;
var G__10697 = count__9931_10690;
var G__10698 = (i__9932_10691 + (1));
seq__9929_10688 = G__10695;
chunk__9930_10689 = G__10696;
count__9931_10690 = G__10697;
i__9932_10691 = G__10698;
continue;
} else {
var temp__5804__auto___10699__$1 = cljs.core.seq(seq__9929_10688);
if(temp__5804__auto___10699__$1){
var seq__9929_10700__$1 = temp__5804__auto___10699__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9929_10700__$1)){
var c__5568__auto___10701 = cljs.core.chunk_first(seq__9929_10700__$1);
var G__10702 = cljs.core.chunk_rest(seq__9929_10700__$1);
var G__10703 = c__5568__auto___10701;
var G__10704 = cljs.core.count(c__5568__auto___10701);
var G__10705 = (0);
seq__9929_10688 = G__10702;
chunk__9930_10689 = G__10703;
count__9931_10690 = G__10704;
i__9932_10691 = G__10705;
continue;
} else {
var vec__9946_10706 = cljs.core.first(seq__9929_10700__$1);
var k_10707__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9946_10706,(0),null);
var v_10708__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9946_10706,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_10707__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_10708__$1) : emit_js_object_val.call(null,v_10708__$1)));


var G__10709 = cljs.core.next(seq__9929_10700__$1);
var G__10710 = null;
var G__10711 = (0);
var G__10712 = (0);
seq__9929_10688 = G__10709;
chunk__9930_10689 = G__10710;
count__9931_10690 = G__10711;
i__9932_10691 = G__10712;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_js_array = (function cljs$compiler$emit_js_array(items,comma_sep){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"]");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__9949){
var map__9950 = p__9949;
var map__9950__$1 = cljs.core.__destructure_map(map__9950);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9950__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9950__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9950__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__9951){
var map__9953 = p__9951;
var map__9953__$1 = cljs.core.__destructure_map(map__9953);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9953__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9953__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__9955){
var map__9956 = p__9955;
var map__9956__$1 = cljs.core.__destructure_map(map__9956);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9956__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__9957){
var map__9958 = p__9957;
var map__9958__$1 = cljs.core.__destructure_map(map__9958);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9958__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9958__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__9256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__9959 = cljs.analyzer.unwrap_quote(expr);
var map__9959__$1 = cljs.core.__destructure_map(map__9959);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9959__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9959__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9959__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__5045__auto__ = (function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842));
if(and__5043__auto__){
var and__5043__auto____$1 = form;
if(cljs.core.truth_(and__5043__auto____$1)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = (!((const_expr == null)));
if(and__5043__auto__){
return (cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.truthy_constant_QMARK_.call(null,const_expr));
} else {
return and__5043__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__9960 = cljs.analyzer.unwrap_quote(expr);
var map__9960__$1 = cljs.core.__destructure_map(map__9960);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9960__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9960__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9960__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__5045__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__5045__auto__){
return or__5045__auto__;
} else {
var and__5043__auto__ = (!((const_expr == null)));
if(and__5043__auto__){
return (cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.falsey_constant_QMARK_.call(null,const_expr));
} else {
return and__5043__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__5045__auto__ = (function (){var fexpr__9961 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__9961.cljs$core$IFn$_invoke$arity$1 ? fexpr__9961.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__9961.call(null,tag));
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__9962){
var map__9963 = p__9962;
var map__9963__$1 = cljs.core.__destructure_map(map__9963);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9963__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9963__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9963__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9963__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9963__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__5045__auto__ = unchecked;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(else$);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",((checked)?"cljs.core.truth_":null),"(",test,")?",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(",test,"){");
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(then,"} else {");

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(else$,"}");
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__9964){
var map__9965 = p__9964;
var map__9965__$1 = cljs.core.__destructure_map(map__9965);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9965__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9965__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9965__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9965__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function(){");
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",gs,";");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("switch (",v,") {");

var seq__9966_10714 = cljs.core.seq(nodes);
var chunk__9967_10715 = null;
var count__9968_10716 = (0);
var i__9969_10717 = (0);
while(true){
if((i__9969_10717 < count__9968_10716)){
var map__9985_10719 = chunk__9967_10715.cljs$core$IIndexed$_nth$arity$2(null,i__9969_10717);
var map__9985_10720__$1 = cljs.core.__destructure_map(map__9985_10719);
var ts_10721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9985_10720__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__9986_10722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9985_10720__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__9986_10723__$1 = cljs.core.__destructure_map(map__9986_10722);
var then_10724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9986_10723__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__9987_10725 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_10721));
var chunk__9988_10726 = null;
var count__9989_10727 = (0);
var i__9990_10728 = (0);
while(true){
if((i__9990_10728 < count__9989_10727)){
var test_10729 = chunk__9988_10726.cljs$core$IIndexed$_nth$arity$2(null,i__9990_10728);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_10729,":");


var G__10730 = seq__9987_10725;
var G__10731 = chunk__9988_10726;
var G__10732 = count__9989_10727;
var G__10733 = (i__9990_10728 + (1));
seq__9987_10725 = G__10730;
chunk__9988_10726 = G__10731;
count__9989_10727 = G__10732;
i__9990_10728 = G__10733;
continue;
} else {
var temp__5804__auto___10734 = cljs.core.seq(seq__9987_10725);
if(temp__5804__auto___10734){
var seq__9987_10735__$1 = temp__5804__auto___10734;
if(cljs.core.chunked_seq_QMARK_(seq__9987_10735__$1)){
var c__5568__auto___10736 = cljs.core.chunk_first(seq__9987_10735__$1);
var G__10737 = cljs.core.chunk_rest(seq__9987_10735__$1);
var G__10738 = c__5568__auto___10736;
var G__10739 = cljs.core.count(c__5568__auto___10736);
var G__10740 = (0);
seq__9987_10725 = G__10737;
chunk__9988_10726 = G__10738;
count__9989_10727 = G__10739;
i__9990_10728 = G__10740;
continue;
} else {
var test_10741 = cljs.core.first(seq__9987_10735__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_10741,":");


var G__10742 = cljs.core.next(seq__9987_10735__$1);
var G__10743 = null;
var G__10744 = (0);
var G__10745 = (0);
seq__9987_10725 = G__10742;
chunk__9988_10726 = G__10743;
count__9989_10727 = G__10744;
i__9990_10728 = G__10745;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_10724);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_10724);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__10746 = seq__9966_10714;
var G__10747 = chunk__9967_10715;
var G__10748 = count__9968_10716;
var G__10749 = (i__9969_10717 + (1));
seq__9966_10714 = G__10746;
chunk__9967_10715 = G__10747;
count__9968_10716 = G__10748;
i__9969_10717 = G__10749;
continue;
} else {
var temp__5804__auto___10750 = cljs.core.seq(seq__9966_10714);
if(temp__5804__auto___10750){
var seq__9966_10751__$1 = temp__5804__auto___10750;
if(cljs.core.chunked_seq_QMARK_(seq__9966_10751__$1)){
var c__5568__auto___10752 = cljs.core.chunk_first(seq__9966_10751__$1);
var G__10753 = cljs.core.chunk_rest(seq__9966_10751__$1);
var G__10754 = c__5568__auto___10752;
var G__10755 = cljs.core.count(c__5568__auto___10752);
var G__10756 = (0);
seq__9966_10714 = G__10753;
chunk__9967_10715 = G__10754;
count__9968_10716 = G__10755;
i__9969_10717 = G__10756;
continue;
} else {
var map__9991_10757 = cljs.core.first(seq__9966_10751__$1);
var map__9991_10758__$1 = cljs.core.__destructure_map(map__9991_10757);
var ts_10759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9991_10758__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__9992_10760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9991_10758__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__9992_10761__$1 = cljs.core.__destructure_map(map__9992_10760);
var then_10762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9992_10761__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__9993_10763 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_10759));
var chunk__9994_10764 = null;
var count__9995_10765 = (0);
var i__9996_10766 = (0);
while(true){
if((i__9996_10766 < count__9995_10765)){
var test_10768 = chunk__9994_10764.cljs$core$IIndexed$_nth$arity$2(null,i__9996_10766);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_10768,":");


var G__10769 = seq__9993_10763;
var G__10770 = chunk__9994_10764;
var G__10771 = count__9995_10765;
var G__10772 = (i__9996_10766 + (1));
seq__9993_10763 = G__10769;
chunk__9994_10764 = G__10770;
count__9995_10765 = G__10771;
i__9996_10766 = G__10772;
continue;
} else {
var temp__5804__auto___10773__$1 = cljs.core.seq(seq__9993_10763);
if(temp__5804__auto___10773__$1){
var seq__9993_10774__$1 = temp__5804__auto___10773__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9993_10774__$1)){
var c__5568__auto___10775 = cljs.core.chunk_first(seq__9993_10774__$1);
var G__10776 = cljs.core.chunk_rest(seq__9993_10774__$1);
var G__10777 = c__5568__auto___10775;
var G__10778 = cljs.core.count(c__5568__auto___10775);
var G__10779 = (0);
seq__9993_10763 = G__10776;
chunk__9994_10764 = G__10777;
count__9995_10765 = G__10778;
i__9996_10766 = G__10779;
continue;
} else {
var test_10780 = cljs.core.first(seq__9993_10774__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_10780,":");


var G__10781 = cljs.core.next(seq__9993_10774__$1);
var G__10782 = null;
var G__10783 = (0);
var G__10784 = (0);
seq__9993_10763 = G__10781;
chunk__9994_10764 = G__10782;
count__9995_10765 = G__10783;
i__9996_10766 = G__10784;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_10762);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_10762);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__10785 = cljs.core.next(seq__9966_10751__$1);
var G__10786 = null;
var G__10787 = (0);
var G__10788 = (0);
seq__9966_10714 = G__10785;
chunk__9967_10715 = G__10786;
count__9968_10716 = G__10787;
i__9969_10717 = G__10788;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",default$);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(default$);
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",gs,";})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__9997){
var map__9998 = p__9997;
var map__9998__$1 = cljs.core.__destructure_map(map__9998);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9998__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9998__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__10005 = env;
var G__10006 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__10005,G__10006) : cljs.compiler.resolve_type.call(null,G__10005,G__10006));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__10007 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10007,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10007,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__10002_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__10002_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__10002_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__10014 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__10014,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__10014;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__10017 = env;
var G__10018 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__10017,G__10018) : cljs.compiler.resolve_type.call(null,G__10017,G__10018));
})()),"="].join('');
} else {
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(t)))));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(ts),(1),(cljs.core.count(ts) - (1)));
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(ts__$1,/\|/);
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10019_SHARP_){
return cljs.compiler.resolve_type(env,p1__10019_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__10020 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__10021 = cljs.core.seq(vec__10020);
var first__10022 = cljs.core.first(seq__10021);
var seq__10021__$1 = cljs.core.next(seq__10021);
var p = first__10022;
var first__10022__$1 = cljs.core.first(seq__10021__$1);
var seq__10021__$2 = cljs.core.next(seq__10021__$1);
var ts = first__10022__$1;
var first__10022__$2 = cljs.core.first(seq__10021__$2);
var seq__10021__$3 = cljs.core.next(seq__10021__$2);
var n = first__10022__$2;
var xs = seq__10021__$3;
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p);
if(and__5043__auto__){
var and__5043__auto____$1 = ts;
if(cljs.core.truth_(and__5043__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__10023 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__10024 = cljs.core.seq(vec__10023);
var first__10025 = cljs.core.first(seq__10024);
var seq__10024__$1 = cljs.core.next(seq__10024);
var p = first__10025;
var first__10025__$1 = cljs.core.first(seq__10024__$1);
var seq__10024__$2 = cljs.core.next(seq__10024__$1);
var ts = first__10025__$1;
var xs = seq__10024__$2;
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p);
if(and__5043__auto__){
var and__5043__auto____$1 = ts;
if(cljs.core.truth_(and__5043__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
var G__10027 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__10026 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__10026.cljs$core$IFn$_invoke$arity$1 ? fexpr__10026.cljs$core$IFn$_invoke$arity$1(G__10027) : fexpr__10026.call(null,G__10027));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__10031 = arguments.length;
switch (G__10031) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(null,doc,jsdoc);
}));

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = (function cljs$compiler$print_comment_lines(e){
var vec__10059 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10029_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__10029_SHARP_);
} else {
return p1__10029_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__10061 = cljs.core.seq(vec__10059);
var first__10062 = cljs.core.first(seq__10061);
var seq__10061__$1 = cljs.core.next(seq__10061);
var x = first__10062;
var ys = seq__10061__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__10065 = cljs.core.seq(ys);
var chunk__10066 = null;
var count__10067 = (0);
var i__10068 = (0);
while(true){
if((i__10068 < count__10067)){
var next_line = chunk__10066.cljs$core$IIndexed$_nth$arity$2(null,i__10068);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__10803 = seq__10065;
var G__10804 = chunk__10066;
var G__10805 = count__10067;
var G__10806 = (i__10068 + (1));
seq__10065 = G__10803;
chunk__10066 = G__10804;
count__10067 = G__10805;
i__10068 = G__10806;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10065);
if(temp__5804__auto__){
var seq__10065__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10065__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__10065__$1);
var G__10807 = cljs.core.chunk_rest(seq__10065__$1);
var G__10808 = c__5568__auto__;
var G__10809 = cljs.core.count(c__5568__auto__);
var G__10810 = (0);
seq__10065 = G__10807;
chunk__10066 = G__10808;
count__10067 = G__10809;
i__10068 = G__10810;
continue;
} else {
var next_line = cljs.core.first(seq__10065__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__10812 = cljs.core.next(seq__10065__$1);
var G__10813 = null;
var G__10814 = (0);
var G__10815 = (0);
seq__10065 = G__10812;
chunk__10066 = G__10813;
count__10067 = G__10814;
i__10068 = G__10815;
continue;
}
} else {
return null;
}
}
break;
}
});
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

var seq__10073_10817 = cljs.core.seq(docs__$2);
var chunk__10074_10818 = null;
var count__10075_10819 = (0);
var i__10076_10820 = (0);
while(true){
if((i__10076_10820 < count__10075_10819)){
var e_10822 = chunk__10074_10818.cljs$core$IIndexed$_nth$arity$2(null,i__10076_10820);
if(cljs.core.truth_(e_10822)){
print_comment_lines(e_10822);
} else {
}


var G__10823 = seq__10073_10817;
var G__10824 = chunk__10074_10818;
var G__10825 = count__10075_10819;
var G__10826 = (i__10076_10820 + (1));
seq__10073_10817 = G__10823;
chunk__10074_10818 = G__10824;
count__10075_10819 = G__10825;
i__10076_10820 = G__10826;
continue;
} else {
var temp__5804__auto___10827 = cljs.core.seq(seq__10073_10817);
if(temp__5804__auto___10827){
var seq__10073_10828__$1 = temp__5804__auto___10827;
if(cljs.core.chunked_seq_QMARK_(seq__10073_10828__$1)){
var c__5568__auto___10830 = cljs.core.chunk_first(seq__10073_10828__$1);
var G__10831 = cljs.core.chunk_rest(seq__10073_10828__$1);
var G__10832 = c__5568__auto___10830;
var G__10833 = cljs.core.count(c__5568__auto___10830);
var G__10834 = (0);
seq__10073_10817 = G__10831;
chunk__10074_10818 = G__10832;
count__10075_10819 = G__10833;
i__10076_10820 = G__10834;
continue;
} else {
var e_10835 = cljs.core.first(seq__10073_10828__$1);
if(cljs.core.truth_(e_10835)){
print_comment_lines(e_10835);
} else {
}


var G__10836 = cljs.core.next(seq__10073_10828__$1);
var G__10837 = null;
var G__10838 = (0);
var G__10839 = (0);
seq__10073_10817 = G__10836;
chunk__10074_10818 = G__10837;
count__10075_10819 = G__10838;
i__10076_10820 = G__10839;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" */");
} else {
return null;
}
}));

(cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3);

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (((x === true) || (((x === false) || (typeof x === 'number'))))));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__5043__auto__ = cljs.core.some((function (p1__10112_SHARP_){
return goog.string.startsWith(p1__10112_SHARP_,"@define");
}),jsdoc);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = opts;
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__5043__auto____$2){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_(define)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([define], 0));
} else {
return null;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__10113){
var map__10114 = p__10113;
var map__10114__$1 = cljs.core.__destructure_map(map__10114);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10114__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10114__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10114__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10114__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10114__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10114__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10114__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10114__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10114__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10114__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__5045__auto__ = init;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(goog_define)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["@define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog_define),"}"].join('')], null):null),jsdoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)], 0)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(" = ",(function (){var temp__5802__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__5802__auto__)){
var define = temp__5802__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("; return (");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast], 0)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");})()");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(")");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__5043__auto__)){
return test;
} else {
return and__5043__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__10144){
var map__10145 = p__10144;
var map__10145__$1 = cljs.core.__destructure_map(map__10145);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10145__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10145__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10145__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__10148_10844 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__10149_10845 = null;
var count__10150_10846 = (0);
var i__10151_10847 = (0);
while(true){
if((i__10151_10847 < count__10150_10846)){
var vec__10172_10848 = chunk__10149_10845.cljs$core$IIndexed$_nth$arity$2(null,i__10151_10847);
var i_10849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10172_10848,(0),null);
var param_10850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10172_10848,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_10850);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__10851 = seq__10148_10844;
var G__10852 = chunk__10149_10845;
var G__10853 = count__10150_10846;
var G__10854 = (i__10151_10847 + (1));
seq__10148_10844 = G__10851;
chunk__10149_10845 = G__10852;
count__10150_10846 = G__10853;
i__10151_10847 = G__10854;
continue;
} else {
var temp__5804__auto___10855 = cljs.core.seq(seq__10148_10844);
if(temp__5804__auto___10855){
var seq__10148_10856__$1 = temp__5804__auto___10855;
if(cljs.core.chunked_seq_QMARK_(seq__10148_10856__$1)){
var c__5568__auto___10857 = cljs.core.chunk_first(seq__10148_10856__$1);
var G__10858 = cljs.core.chunk_rest(seq__10148_10856__$1);
var G__10859 = c__5568__auto___10857;
var G__10860 = cljs.core.count(c__5568__auto___10857);
var G__10861 = (0);
seq__10148_10844 = G__10858;
chunk__10149_10845 = G__10859;
count__10150_10846 = G__10860;
i__10151_10847 = G__10861;
continue;
} else {
var vec__10186_10862 = cljs.core.first(seq__10148_10856__$1);
var i_10863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10186_10862,(0),null);
var param_10864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10186_10862,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_10864);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__10865 = cljs.core.next(seq__10148_10856__$1);
var G__10866 = null;
var G__10867 = (0);
var G__10868 = (0);
seq__10148_10844 = G__10865;
chunk__10149_10845 = G__10866;
count__10150_10846 = G__10867;
i__10151_10847 = G__10868;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.first(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.rest(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__10191_10869 = cljs.core.seq(params);
var chunk__10192_10870 = null;
var count__10193_10871 = (0);
var i__10194_10872 = (0);
while(true){
if((i__10194_10872 < count__10193_10871)){
var param_10873 = chunk__10192_10870.cljs$core$IIndexed$_nth$arity$2(null,i__10194_10872);
cljs.compiler.emit(param_10873);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_10873,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__10875 = seq__10191_10869;
var G__10876 = chunk__10192_10870;
var G__10877 = count__10193_10871;
var G__10878 = (i__10194_10872 + (1));
seq__10191_10869 = G__10875;
chunk__10192_10870 = G__10876;
count__10193_10871 = G__10877;
i__10194_10872 = G__10878;
continue;
} else {
var temp__5804__auto___10879 = cljs.core.seq(seq__10191_10869);
if(temp__5804__auto___10879){
var seq__10191_10880__$1 = temp__5804__auto___10879;
if(cljs.core.chunked_seq_QMARK_(seq__10191_10880__$1)){
var c__5568__auto___10881 = cljs.core.chunk_first(seq__10191_10880__$1);
var G__10882 = cljs.core.chunk_rest(seq__10191_10880__$1);
var G__10883 = c__5568__auto___10881;
var G__10884 = cljs.core.count(c__5568__auto___10881);
var G__10885 = (0);
seq__10191_10869 = G__10882;
chunk__10192_10870 = G__10883;
count__10193_10871 = G__10884;
i__10194_10872 = G__10885;
continue;
} else {
var param_10886 = cljs.core.first(seq__10191_10880__$1);
cljs.compiler.emit(param_10886);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_10886,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__10887 = cljs.core.next(seq__10191_10880__$1);
var G__10888 = null;
var G__10889 = (0);
var G__10890 = (0);
seq__10191_10869 = G__10887;
chunk__10192_10870 = G__10888;
count__10193_10871 = G__10889;
i__10194_10872 = G__10890;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.seq(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__10210_10891 = cljs.core.seq(params);
var chunk__10211_10892 = null;
var count__10212_10893 = (0);
var i__10213_10894 = (0);
while(true){
if((i__10213_10894 < count__10212_10893)){
var param_10895 = chunk__10211_10892.cljs$core$IIndexed$_nth$arity$2(null,i__10213_10894);
cljs.compiler.emit(param_10895);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_10895,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__10896 = seq__10210_10891;
var G__10897 = chunk__10211_10892;
var G__10898 = count__10212_10893;
var G__10899 = (i__10213_10894 + (1));
seq__10210_10891 = G__10896;
chunk__10211_10892 = G__10897;
count__10212_10893 = G__10898;
i__10213_10894 = G__10899;
continue;
} else {
var temp__5804__auto___10901 = cljs.core.seq(seq__10210_10891);
if(temp__5804__auto___10901){
var seq__10210_10902__$1 = temp__5804__auto___10901;
if(cljs.core.chunked_seq_QMARK_(seq__10210_10902__$1)){
var c__5568__auto___10904 = cljs.core.chunk_first(seq__10210_10902__$1);
var G__10905 = cljs.core.chunk_rest(seq__10210_10902__$1);
var G__10906 = c__5568__auto___10904;
var G__10907 = cljs.core.count(c__5568__auto___10904);
var G__10908 = (0);
seq__10210_10891 = G__10905;
chunk__10211_10892 = G__10906;
count__10212_10893 = G__10907;
i__10213_10894 = G__10908;
continue;
} else {
var param_10909 = cljs.core.first(seq__10210_10902__$1);
cljs.compiler.emit(param_10909);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_10909,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__10910 = cljs.core.next(seq__10210_10902__$1);
var G__10911 = null;
var G__10912 = (0);
var G__10913 = (0);
seq__10210_10891 = G__10910;
chunk__10211_10892 = G__10911;
count__10212_10893 = G__10912;
i__10213_10894 = G__10913;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__10233 = cljs.core.seq(params);
var chunk__10234 = null;
var count__10235 = (0);
var i__10236 = (0);
while(true){
if((i__10236 < count__10235)){
var param = chunk__10234.cljs$core$IIndexed$_nth$arity$2(null,i__10236);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__10914 = seq__10233;
var G__10915 = chunk__10234;
var G__10916 = count__10235;
var G__10917 = (i__10236 + (1));
seq__10233 = G__10914;
chunk__10234 = G__10915;
count__10235 = G__10916;
i__10236 = G__10917;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10233);
if(temp__5804__auto__){
var seq__10233__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10233__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__10233__$1);
var G__10918 = cljs.core.chunk_rest(seq__10233__$1);
var G__10919 = c__5568__auto__;
var G__10920 = cljs.core.count(c__5568__auto__);
var G__10921 = (0);
seq__10233 = G__10918;
chunk__10234 = G__10919;
count__10235 = G__10920;
i__10236 = G__10921;
continue;
} else {
var param = cljs.core.first(seq__10233__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__10922 = cljs.core.next(seq__10233__$1);
var G__10923 = null;
var G__10924 = (0);
var G__10925 = (0);
seq__10233 = G__10922;
chunk__10234 = G__10923;
count__10235 = G__10924;
i__10236 = G__10925;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__10239){
var map__10240 = p__10239;
var map__10240__$1 = cljs.core.__destructure_map(map__10240);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10240__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10240__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10240__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10240__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10240__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10240__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__9256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"(");

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_(startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("var ",i," = 0, ",a," = new Array(arguments.length -  ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("while (",i," < ",a,".length) {",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__10243){
var map__10244 = p__10243;
var map__10244__$1 = cljs.core.__destructure_map(map__10244);
var f = map__10244__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10244__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10244__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10244__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10244__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10244__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10244__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10244__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10244__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__9256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_10929__$1 = (function (){var or__5045__auto__ = name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_10930 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_10929__$1);
var delegate_name_10931 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_10930),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_10931," = function (");

var seq__10245_10932 = cljs.core.seq(params);
var chunk__10246_10933 = null;
var count__10247_10934 = (0);
var i__10248_10935 = (0);
while(true){
if((i__10248_10935 < count__10247_10934)){
var param_10936 = chunk__10246_10933.cljs$core$IIndexed$_nth$arity$2(null,i__10248_10935);
cljs.compiler.emit(param_10936);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_10936,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__10937 = seq__10245_10932;
var G__10938 = chunk__10246_10933;
var G__10939 = count__10247_10934;
var G__10940 = (i__10248_10935 + (1));
seq__10245_10932 = G__10937;
chunk__10246_10933 = G__10938;
count__10247_10934 = G__10939;
i__10248_10935 = G__10940;
continue;
} else {
var temp__5804__auto___10941 = cljs.core.seq(seq__10245_10932);
if(temp__5804__auto___10941){
var seq__10245_10942__$1 = temp__5804__auto___10941;
if(cljs.core.chunked_seq_QMARK_(seq__10245_10942__$1)){
var c__5568__auto___10943 = cljs.core.chunk_first(seq__10245_10942__$1);
var G__10945 = cljs.core.chunk_rest(seq__10245_10942__$1);
var G__10946 = c__5568__auto___10943;
var G__10947 = cljs.core.count(c__5568__auto___10943);
var G__10948 = (0);
seq__10245_10932 = G__10945;
chunk__10246_10933 = G__10946;
count__10247_10934 = G__10947;
i__10248_10935 = G__10948;
continue;
} else {
var param_10949 = cljs.core.first(seq__10245_10942__$1);
cljs.compiler.emit(param_10949);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_10949,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__10950 = cljs.core.next(seq__10245_10942__$1);
var G__10951 = null;
var G__10952 = (0);
var G__10953 = (0);
seq__10245_10932 = G__10950;
chunk__10246_10933 = G__10951;
count__10247_10934 = G__10952;
i__10248_10935 = G__10953;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_10930," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_10955 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_10955,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_10931,".call(this,");

var seq__10251_10957 = cljs.core.seq(params);
var chunk__10252_10958 = null;
var count__10253_10959 = (0);
var i__10254_10960 = (0);
while(true){
if((i__10254_10960 < count__10253_10959)){
var param_10961 = chunk__10252_10958.cljs$core$IIndexed$_nth$arity$2(null,i__10254_10960);
cljs.compiler.emit(param_10961);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_10961,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__10962 = seq__10251_10957;
var G__10963 = chunk__10252_10958;
var G__10964 = count__10253_10959;
var G__10965 = (i__10254_10960 + (1));
seq__10251_10957 = G__10962;
chunk__10252_10958 = G__10963;
count__10253_10959 = G__10964;
i__10254_10960 = G__10965;
continue;
} else {
var temp__5804__auto___10966 = cljs.core.seq(seq__10251_10957);
if(temp__5804__auto___10966){
var seq__10251_10967__$1 = temp__5804__auto___10966;
if(cljs.core.chunked_seq_QMARK_(seq__10251_10967__$1)){
var c__5568__auto___10968 = cljs.core.chunk_first(seq__10251_10967__$1);
var G__10969 = cljs.core.chunk_rest(seq__10251_10967__$1);
var G__10970 = c__5568__auto___10968;
var G__10971 = cljs.core.count(c__5568__auto___10968);
var G__10972 = (0);
seq__10251_10957 = G__10969;
chunk__10252_10958 = G__10970;
count__10253_10959 = G__10971;
i__10254_10960 = G__10972;
continue;
} else {
var param_10973 = cljs.core.first(seq__10251_10967__$1);
cljs.compiler.emit(param_10973);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_10973,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__10974 = cljs.core.next(seq__10251_10967__$1);
var G__10975 = null;
var G__10976 = (0);
var G__10977 = (0);
seq__10251_10957 = G__10974;
chunk__10252_10958 = G__10975;
count__10253_10959 = G__10976;
i__10254_10960 = G__10977;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_10930,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_10930,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_10929__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_10930,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_10931,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_10930,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__10258){
var map__10259 = p__10258;
var map__10259__$1 = cljs.core.__destructure_map(map__10259);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10259__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10259__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10259__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10259__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10259__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10259__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10259__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10259__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__10255_SHARP_){
var and__5043__auto__ = p1__10255_SHARP_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__10255_SHARP_));
} else {
return and__5043__auto__;
}
}),recur_frames)], 0));
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(recur_params,(cljs.core.truth_((function (){var or__5045__auto__ = in_loop;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.seq(recur_params);
}
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loop_lets], 0)):null))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_10982__$1 = (function (){var or__5045__auto__ = name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_10983 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_10982__$1);
var maxparams_10984 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_10985 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_10983),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_10986 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__10256_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__10256_SHARP_)));
}),cljs.core.seq(mmap_10985));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_10983," = null;");

var seq__10260_10988 = cljs.core.seq(ms_10986);
var chunk__10261_10989 = null;
var count__10262_10990 = (0);
var i__10263_10991 = (0);
while(true){
if((i__10263_10991 < count__10262_10990)){
var vec__10270_10992 = chunk__10261_10989.cljs$core$IIndexed$_nth$arity$2(null,i__10263_10991);
var n_10993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10270_10992,(0),null);
var meth_10994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10270_10992,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_10993," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_10994))){
cljs.compiler.emit_variadic_fn_method(meth_10994);
} else {
cljs.compiler.emit_fn_method(meth_10994);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__10996 = seq__10260_10988;
var G__10997 = chunk__10261_10989;
var G__10998 = count__10262_10990;
var G__10999 = (i__10263_10991 + (1));
seq__10260_10988 = G__10996;
chunk__10261_10989 = G__10997;
count__10262_10990 = G__10998;
i__10263_10991 = G__10999;
continue;
} else {
var temp__5804__auto___11000 = cljs.core.seq(seq__10260_10988);
if(temp__5804__auto___11000){
var seq__10260_11002__$1 = temp__5804__auto___11000;
if(cljs.core.chunked_seq_QMARK_(seq__10260_11002__$1)){
var c__5568__auto___11003 = cljs.core.chunk_first(seq__10260_11002__$1);
var G__11004 = cljs.core.chunk_rest(seq__10260_11002__$1);
var G__11005 = c__5568__auto___11003;
var G__11006 = cljs.core.count(c__5568__auto___11003);
var G__11007 = (0);
seq__10260_10988 = G__11004;
chunk__10261_10989 = G__11005;
count__10262_10990 = G__11006;
i__10263_10991 = G__11007;
continue;
} else {
var vec__10276_11011 = cljs.core.first(seq__10260_11002__$1);
var n_11012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10276_11011,(0),null);
var meth_11013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10276_11011,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_11012," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_11013))){
cljs.compiler.emit_variadic_fn_method(meth_11013);
} else {
cljs.compiler.emit_fn_method(meth_11013);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__11014 = cljs.core.next(seq__10260_11002__$1);
var G__11015 = null;
var G__11016 = (0);
var G__11017 = (0);
seq__10260_10988 = G__11014;
chunk__10261_10989 = G__11015;
count__10262_10990 = G__11016;
i__10263_10991 = G__11017;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_10983," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_10984),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_10984)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_10984));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__10281_11018 = cljs.core.seq(ms_10986);
var chunk__10282_11019 = null;
var count__10283_11020 = (0);
var i__10284_11021 = (0);
while(true){
if((i__10284_11021 < count__10283_11020)){
var vec__10291_11022 = chunk__10282_11019.cljs$core$IIndexed$_nth$arity$2(null,i__10284_11021);
var n_11023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10291_11022,(0),null);
var meth_11024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10291_11022,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_11024))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_11025 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_11025," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_11027 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_11025," = new cljs.core.IndexedSeq(",a_11027,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_11023,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_10984)),(((cljs.core.count(maxparams_10984) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_11025,");"], 0));
} else {
var pcnt_11030 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_11024));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_11030,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_11023,".call(this",(((pcnt_11030 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_11030,maxparams_10984)),null,(1),null)),(2),null))),");");
}


var G__11034 = seq__10281_11018;
var G__11035 = chunk__10282_11019;
var G__11036 = count__10283_11020;
var G__11037 = (i__10284_11021 + (1));
seq__10281_11018 = G__11034;
chunk__10282_11019 = G__11035;
count__10283_11020 = G__11036;
i__10284_11021 = G__11037;
continue;
} else {
var temp__5804__auto___11038 = cljs.core.seq(seq__10281_11018);
if(temp__5804__auto___11038){
var seq__10281_11039__$1 = temp__5804__auto___11038;
if(cljs.core.chunked_seq_QMARK_(seq__10281_11039__$1)){
var c__5568__auto___11040 = cljs.core.chunk_first(seq__10281_11039__$1);
var G__11041 = cljs.core.chunk_rest(seq__10281_11039__$1);
var G__11042 = c__5568__auto___11040;
var G__11043 = cljs.core.count(c__5568__auto___11040);
var G__11044 = (0);
seq__10281_11018 = G__11041;
chunk__10282_11019 = G__11042;
count__10283_11020 = G__11043;
i__10284_11021 = G__11044;
continue;
} else {
var vec__10294_11045 = cljs.core.first(seq__10281_11039__$1);
var n_11046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10294_11045,(0),null);
var meth_11047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10294_11045,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_11047))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_11048 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_11048," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_11049 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_11048," = new cljs.core.IndexedSeq(",a_11049,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_11046,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_10984)),(((cljs.core.count(maxparams_10984) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_11048,");"], 0));
} else {
var pcnt_11050 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_11047));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_11050,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_11046,".call(this",(((pcnt_11050 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_11050,maxparams_10984)),null,(1),null)),(2),null))),");");
}


var G__11052 = cljs.core.next(seq__10281_11039__$1);
var G__11053 = null;
var G__11054 = (0);
var G__11055 = (0);
seq__10281_11018 = G__11052;
chunk__10282_11019 = G__11053;
count__10283_11020 = G__11054;
i__10284_11021 = G__11055;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_11056 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_10986)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_11056,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_10983,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_10983,".cljs$lang$applyTo = ",cljs.core.some((function (p1__10257_SHARP_){
var vec__10297 = p1__10257_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10297,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10297,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_10986),".cljs$lang$applyTo;");
} else {
}

var seq__10300_11057 = cljs.core.seq(ms_10986);
var chunk__10301_11058 = null;
var count__10302_11059 = (0);
var i__10303_11060 = (0);
while(true){
if((i__10303_11060 < count__10302_11059)){
var vec__10310_11061 = chunk__10301_11058.cljs$core$IIndexed$_nth$arity$2(null,i__10303_11060);
var n_11062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10310_11061,(0),null);
var meth_11063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10310_11061,(1),null);
var c_11064 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_11063));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_11063))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_10983,".cljs$core$IFn$_invoke$arity$variadic = ",n_11062,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_10983,".cljs$core$IFn$_invoke$arity$",c_11064," = ",n_11062,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__11065 = seq__10300_11057;
var G__11066 = chunk__10301_11058;
var G__11067 = count__10302_11059;
var G__11068 = (i__10303_11060 + (1));
seq__10300_11057 = G__11065;
chunk__10301_11058 = G__11066;
count__10302_11059 = G__11067;
i__10303_11060 = G__11068;
continue;
} else {
var temp__5804__auto___11069 = cljs.core.seq(seq__10300_11057);
if(temp__5804__auto___11069){
var seq__10300_11070__$1 = temp__5804__auto___11069;
if(cljs.core.chunked_seq_QMARK_(seq__10300_11070__$1)){
var c__5568__auto___11071 = cljs.core.chunk_first(seq__10300_11070__$1);
var G__11072 = cljs.core.chunk_rest(seq__10300_11070__$1);
var G__11073 = c__5568__auto___11071;
var G__11074 = cljs.core.count(c__5568__auto___11071);
var G__11075 = (0);
seq__10300_11057 = G__11072;
chunk__10301_11058 = G__11073;
count__10302_11059 = G__11074;
i__10303_11060 = G__11075;
continue;
} else {
var vec__10321_11076 = cljs.core.first(seq__10300_11070__$1);
var n_11077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10321_11076,(0),null);
var meth_11078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10321_11076,(1),null);
var c_11079 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_11078));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_11078))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_10983,".cljs$core$IFn$_invoke$arity$variadic = ",n_11077,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_10983,".cljs$core$IFn$_invoke$arity$",c_11079," = ",n_11077,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__11080 = cljs.core.next(seq__10300_11070__$1);
var G__11081 = null;
var G__11082 = (0);
var G__11083 = (0);
seq__10300_11057 = G__11080;
chunk__10301_11058 = G__11081;
count__10302_11059 = G__11082;
i__10303_11060 = G__11083;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_10983,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__10324){
var map__10325 = p__10324;
var map__10325__$1 = cljs.core.__destructure_map(map__10325);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10325__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10325__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10325__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__10328_11092 = cljs.core.seq(statements);
var chunk__10329_11093 = null;
var count__10330_11094 = (0);
var i__10331_11095 = (0);
while(true){
if((i__10331_11095 < count__10330_11094)){
var s_11096 = chunk__10329_11093.cljs$core$IIndexed$_nth$arity$2(null,i__10331_11095);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_11096);


var G__11102 = seq__10328_11092;
var G__11103 = chunk__10329_11093;
var G__11104 = count__10330_11094;
var G__11108 = (i__10331_11095 + (1));
seq__10328_11092 = G__11102;
chunk__10329_11093 = G__11103;
count__10330_11094 = G__11104;
i__10331_11095 = G__11108;
continue;
} else {
var temp__5804__auto___11109 = cljs.core.seq(seq__10328_11092);
if(temp__5804__auto___11109){
var seq__10328_11110__$1 = temp__5804__auto___11109;
if(cljs.core.chunked_seq_QMARK_(seq__10328_11110__$1)){
var c__5568__auto___11111 = cljs.core.chunk_first(seq__10328_11110__$1);
var G__11112 = cljs.core.chunk_rest(seq__10328_11110__$1);
var G__11113 = c__5568__auto___11111;
var G__11114 = cljs.core.count(c__5568__auto___11111);
var G__11115 = (0);
seq__10328_11092 = G__11112;
chunk__10329_11093 = G__11113;
count__10330_11094 = G__11114;
i__10331_11095 = G__11115;
continue;
} else {
var s_11117 = cljs.core.first(seq__10328_11110__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_11117);


var G__11118 = cljs.core.next(seq__10328_11110__$1);
var G__11119 = null;
var G__11120 = (0);
var G__11121 = (0);
seq__10328_11092 = G__11118;
chunk__10329_11093 = G__11119;
count__10330_11094 = G__11120;
i__10331_11095 = G__11121;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__10333){
var map__10334 = p__10333;
var map__10334__$1 = cljs.core.__destructure_map(map__10334);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10334__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10334__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10334__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10334__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10334__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__5045__auto__ = name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote(finally$)))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :const (:op (ana/unwrap-quote finally)))"].join('')));
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__10335,is_loop){
var map__10336 = p__10335;
var map__10336__$1 = cljs.core.__destructure_map(map__10336);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10336__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10336__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10336__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__10337_11125 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__10338_11126 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__10338_11126);

try{var seq__10339_11129 = cljs.core.seq(bindings);
var chunk__10340_11130 = null;
var count__10341_11131 = (0);
var i__10342_11132 = (0);
while(true){
if((i__10342_11132 < count__10341_11131)){
var map__10345_11133 = chunk__10340_11130.cljs$core$IIndexed$_nth$arity$2(null,i__10342_11132);
var map__10345_11134__$1 = cljs.core.__destructure_map(map__10345_11133);
var binding_11135 = map__10345_11134__$1;
var init_11136 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10345_11134__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_11135);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_11136,";");


var G__11137 = seq__10339_11129;
var G__11138 = chunk__10340_11130;
var G__11139 = count__10341_11131;
var G__11140 = (i__10342_11132 + (1));
seq__10339_11129 = G__11137;
chunk__10340_11130 = G__11138;
count__10341_11131 = G__11139;
i__10342_11132 = G__11140;
continue;
} else {
var temp__5804__auto___11141 = cljs.core.seq(seq__10339_11129);
if(temp__5804__auto___11141){
var seq__10339_11142__$1 = temp__5804__auto___11141;
if(cljs.core.chunked_seq_QMARK_(seq__10339_11142__$1)){
var c__5568__auto___11143 = cljs.core.chunk_first(seq__10339_11142__$1);
var G__11144 = cljs.core.chunk_rest(seq__10339_11142__$1);
var G__11145 = c__5568__auto___11143;
var G__11146 = cljs.core.count(c__5568__auto___11143);
var G__11147 = (0);
seq__10339_11129 = G__11144;
chunk__10340_11130 = G__11145;
count__10341_11131 = G__11146;
i__10342_11132 = G__11147;
continue;
} else {
var map__10347_11148 = cljs.core.first(seq__10339_11142__$1);
var map__10347_11149__$1 = cljs.core.__destructure_map(map__10347_11148);
var binding_11150 = map__10347_11149__$1;
var init_11151 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10347_11149__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_11150);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_11151,";");


var G__11155 = cljs.core.next(seq__10339_11142__$1);
var G__11156 = null;
var G__11157 = (0);
var G__11158 = (0);
seq__10339_11129 = G__11155;
chunk__10340_11130 = G__11156;
count__10341_11131 = G__11157;
i__10342_11132 = G__11158;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__10337_11125);
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__10348){
var map__10349 = p__10348;
var map__10349__$1 = cljs.core.__destructure_map(map__10349);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10349__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10349__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10349__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__5636__auto___11163 = cljs.core.count(exprs);
var i_11164 = (0);
while(true){
if((i_11164 < n__5636__auto___11163)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_11164) : temps.call(null,i_11164))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_11164) : exprs.call(null,i_11164)),";");

var G__11165 = (i_11164 + (1));
i_11164 = G__11165;
continue;
} else {
}
break;
}

var n__5636__auto___11166 = cljs.core.count(exprs);
var i_11167 = (0);
while(true){
if((i_11167 < n__5636__auto___11166)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_11167) : params.call(null,i_11167)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_11167) : temps.call(null,i_11167)),";");

var G__11168 = (i_11167 + (1));
i_11167 = G__11168;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__10350){
var map__10351 = p__10350;
var map__10351__$1 = cljs.core.__destructure_map(map__10351);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10351__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10351__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10351__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__10352_11169 = cljs.core.seq(bindings);
var chunk__10353_11170 = null;
var count__10354_11171 = (0);
var i__10355_11172 = (0);
while(true){
if((i__10355_11172 < count__10354_11171)){
var map__10359_11173 = chunk__10353_11170.cljs$core$IIndexed$_nth$arity$2(null,i__10355_11172);
var map__10359_11174__$1 = cljs.core.__destructure_map(map__10359_11173);
var binding_11175 = map__10359_11174__$1;
var init_11176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10359_11174__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_11175)," = ",init_11176,";");


var G__11177 = seq__10352_11169;
var G__11178 = chunk__10353_11170;
var G__11179 = count__10354_11171;
var G__11180 = (i__10355_11172 + (1));
seq__10352_11169 = G__11177;
chunk__10353_11170 = G__11178;
count__10354_11171 = G__11179;
i__10355_11172 = G__11180;
continue;
} else {
var temp__5804__auto___11181 = cljs.core.seq(seq__10352_11169);
if(temp__5804__auto___11181){
var seq__10352_11182__$1 = temp__5804__auto___11181;
if(cljs.core.chunked_seq_QMARK_(seq__10352_11182__$1)){
var c__5568__auto___11183 = cljs.core.chunk_first(seq__10352_11182__$1);
var G__11184 = cljs.core.chunk_rest(seq__10352_11182__$1);
var G__11185 = c__5568__auto___11183;
var G__11186 = cljs.core.count(c__5568__auto___11183);
var G__11187 = (0);
seq__10352_11169 = G__11184;
chunk__10353_11170 = G__11185;
count__10354_11171 = G__11186;
i__10355_11172 = G__11187;
continue;
} else {
var map__10360_11188 = cljs.core.first(seq__10352_11182__$1);
var map__10360_11189__$1 = cljs.core.__destructure_map(map__10360_11188);
var binding_11190 = map__10360_11189__$1;
var init_11191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10360_11189__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_11190)," = ",init_11191,";");


var G__11192 = cljs.core.next(seq__10352_11182__$1);
var G__11193 = null;
var G__11194 = (0);
var G__11195 = (0);
seq__10352_11169 = G__11192;
chunk__10353_11170 = G__11193;
count__10354_11171 = G__11194;
i__10355_11172 = G__11195;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__10363){
var map__10364 = p__10363;
var map__10364__$1 = cljs.core.__destructure_map(map__10364);
var expr = map__10364__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10364__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10364__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10364__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__5043__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = cljs.core.not(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__5043__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__5043__auto__ = protocol;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = tag;
if(cljs.core.truth_(and__5043__auto____$1)){
var or__5045__auto__ = (function (){var and__5043__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = protocol;
if(cljs.core.truth_(and__5043__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto____$2 = (function (){var or__5045__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__5043__auto____$2)){
var or__5045__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__5045__auto____$1){
return or__5045__auto____$1;
} else {
var and__5043__auto____$3 = (!(cljs.core.set_QMARK_(tag)));
if(and__5043__auto____$3){
var and__5043__auto____$4 = cljs.core.not((function (){var fexpr__10368 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__10368.cljs$core$IFn$_invoke$arity$1 ? fexpr__10368.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__10368.call(null,tag));
})());
if(and__5043__auto____$4){
var temp__5804__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tag,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true)));
if(cljs.core.truth_(temp__5804__auto__)){
var ps = temp__5804__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
}
} else {
return and__5043__auto____$2;
}
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})();
var first_arg_tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var opt_not_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_arg_tag,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__10369 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__10369.cljs$core$IFn$_invoke$arity$1 ? fexpr__10369.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__10369.call(null,first_arg_tag));
})())));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var ftag = cljs.analyzer.infer_tag(env,f);
var js_QMARK_ = (function (){var or__5045__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"js","js",-886355190,null));
if(or__5045__auto__){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null));
if(or__5045__auto____$1){
return or__5045__auto____$1;
} else {
return new cljs.core.Keyword(null,"foreign","foreign",990521149).cljs$core$IFn$_invoke$arity$1(info);
}
}
})();
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__5045__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__5045__auto__){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var temp__5804__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5804__auto__)){
var ns_str = temp__5804__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_(new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__5045__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),ftag);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote(f);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__10365 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return (arity > mfa);
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__10361_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__10361_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__10362_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__10362_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10365,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10365,(1),null);
var env__9256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(!(",cljs.core.first(args),"))");
} else {
if(opt_count_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("((",cljs.core.first(args),").length)");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_11210 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_11210,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_11212 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_11212,args)),(((mfa_11212 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_11212,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = js_QMARK_;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,"(",cljs.compiler.comma_sep(args),")");
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__5043__auto__)){
var G__10380 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__10379 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__10379.cljs$core$IFn$_invoke$arity$1 ? fexpr__10379.cljs$core$IFn$_invoke$arity$1(G__10380) : fexpr__10379.call(null,G__10380));
} else {
return and__5043__auto__;
}
})())){
var fprop_11214 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_11214," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_11214,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_11214," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_11214,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")");
}

}
}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__10381){
var map__10382 = p__10381;
var map__10382__$1 = cljs.core.__destructure_map(map__10382);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10382__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10382__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10382__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__10385){
var map__10386 = p__10385;
var map__10386__$1 = cljs.core.__destructure_map(map__10386);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10386__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10386__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10386__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(",target," = ",val,")");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.sublib_select = (function cljs$compiler$sublib_select(sublib){
if(cljs.core.truth_(sublib)){
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(sublib,/\./);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10387_SHARP_){
return ["['",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__10387_SHARP_),"']"].join('');
}),xs));
} else {
return null;
}
});
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
var vec__10391 = cljs.analyzer.lib_AMPERSAND_sublib(lib);
var lib_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10391,(0),null);
var sublib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10391,(1),null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib)," = goog.global",cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name((function (){var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib_SINGLEQUOTE_));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.name(lib_SINGLEQUOTE_));
}
})()),/\./))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.sublib_select(sublib),";"], 0));
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__10400 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__10400__$1 = cljs.core.__destructure_map(map__10400);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10400__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10400__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__10401 = options;
var map__10401__$1 = cljs.core.__destructure_map(map__10401);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10401__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10401__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10401__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__10402 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__10408 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__10408__$1 = cljs.core.__destructure_map(map__10408);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10408__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10408__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10402,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10402,(1),null);
var vec__10405 = (function (){var map__10409 = cljs.core.group_by(cljs.analyzer.goog_module_dep_QMARK_,libs_to_load);
var map__10409__$1 = cljs.core.__destructure_map(map__10409);
var goog_modules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10409__$1,true);
var libs_to_load__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10409__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog_modules,libs_to_load__$1], null);
})();
var goog_modules = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10405,(0),null);
var libs_to_load__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10405,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__10410_11233 = cljs.core.seq(libs_to_load__$1);
var chunk__10411_11234 = null;
var count__10412_11235 = (0);
var i__10413_11236 = (0);
while(true){
if((i__10413_11236 < count__10412_11235)){
var lib_11237 = chunk__10411_11234.cljs$core$IIndexed$_nth$arity$2(null,i__10413_11236);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_11237)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_11237),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_11237),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_11237),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_11237),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_11237,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_11237),"');");
}

}
}
}


var G__11240 = seq__10410_11233;
var G__11241 = chunk__10411_11234;
var G__11242 = count__10412_11235;
var G__11243 = (i__10413_11236 + (1));
seq__10410_11233 = G__11240;
chunk__10411_11234 = G__11241;
count__10412_11235 = G__11242;
i__10413_11236 = G__11243;
continue;
} else {
var temp__5804__auto___11244 = cljs.core.seq(seq__10410_11233);
if(temp__5804__auto___11244){
var seq__10410_11245__$1 = temp__5804__auto___11244;
if(cljs.core.chunked_seq_QMARK_(seq__10410_11245__$1)){
var c__5568__auto___11250 = cljs.core.chunk_first(seq__10410_11245__$1);
var G__11251 = cljs.core.chunk_rest(seq__10410_11245__$1);
var G__11252 = c__5568__auto___11250;
var G__11253 = cljs.core.count(c__5568__auto___11250);
var G__11254 = (0);
seq__10410_11233 = G__11251;
chunk__10411_11234 = G__11252;
count__10412_11235 = G__11253;
i__10413_11236 = G__11254;
continue;
} else {
var lib_11255 = cljs.core.first(seq__10410_11245__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_11255)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_11255),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_11255),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_11255),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_11255),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_11255,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_11255),"');");
}

}
}
}


var G__11262 = cljs.core.next(seq__10410_11245__$1);
var G__11263 = null;
var G__11264 = (0);
var G__11265 = (0);
seq__10410_11233 = G__11262;
chunk__10411_11234 = G__11263;
count__10412_11235 = G__11264;
i__10413_11236 = G__11265;
continue;
}
} else {
}
}
break;
}

var seq__10414_11266 = cljs.core.seq(node_libs);
var chunk__10415_11267 = null;
var count__10416_11268 = (0);
var i__10417_11269 = (0);
while(true){
if((i__10417_11269 < count__10416_11268)){
var lib_11271 = chunk__10415_11267.cljs$core$IIndexed$_nth$arity$2(null,i__10417_11269);
var vec__10424_11272 = cljs.analyzer.lib_AMPERSAND_sublib(lib_11271);
var lib_SINGLEQUOTE__11273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10424_11272,(0),null);
var sublib_11274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10424_11272,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_11271)," = require('",lib_SINGLEQUOTE__11273,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["')",cljs.compiler.sublib_select(sublib_11274),";"], 0));


var G__11277 = seq__10414_11266;
var G__11278 = chunk__10415_11267;
var G__11279 = count__10416_11268;
var G__11280 = (i__10417_11269 + (1));
seq__10414_11266 = G__11277;
chunk__10415_11267 = G__11278;
count__10416_11268 = G__11279;
i__10417_11269 = G__11280;
continue;
} else {
var temp__5804__auto___11281 = cljs.core.seq(seq__10414_11266);
if(temp__5804__auto___11281){
var seq__10414_11282__$1 = temp__5804__auto___11281;
if(cljs.core.chunked_seq_QMARK_(seq__10414_11282__$1)){
var c__5568__auto___11283 = cljs.core.chunk_first(seq__10414_11282__$1);
var G__11284 = cljs.core.chunk_rest(seq__10414_11282__$1);
var G__11285 = c__5568__auto___11283;
var G__11286 = cljs.core.count(c__5568__auto___11283);
var G__11287 = (0);
seq__10414_11266 = G__11284;
chunk__10415_11267 = G__11285;
count__10416_11268 = G__11286;
i__10417_11269 = G__11287;
continue;
} else {
var lib_11289 = cljs.core.first(seq__10414_11282__$1);
var vec__10427_11290 = cljs.analyzer.lib_AMPERSAND_sublib(lib_11289);
var lib_SINGLEQUOTE__11291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10427_11290,(0),null);
var sublib_11292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10427_11290,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_11289)," = require('",lib_SINGLEQUOTE__11291,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["')",cljs.compiler.sublib_select(sublib_11292),";"], 0));


var G__11294 = cljs.core.next(seq__10414_11282__$1);
var G__11295 = null;
var G__11296 = (0);
var G__11297 = (0);
seq__10414_11266 = G__11294;
chunk__10415_11267 = G__11295;
count__10416_11268 = G__11296;
i__10417_11269 = G__11297;
continue;
}
} else {
}
}
break;
}

var seq__10430_11298 = cljs.core.seq(goog_modules);
var chunk__10431_11299 = null;
var count__10432_11300 = (0);
var i__10433_11301 = (0);
while(true){
if((i__10433_11301 < count__10432_11300)){
var lib_11302 = chunk__10431_11299.cljs$core$IIndexed$_nth$arity$2(null,i__10433_11301);
var vec__10440_11303 = cljs.analyzer.lib_AMPERSAND_sublib(lib_11302);
var lib_SINGLEQUOTE__11304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10440_11303,(0),null);
var sublib_11305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10440_11303,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",lib_SINGLEQUOTE__11304,"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.scope(function(){");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_goog_module_lib.cljs$core$IFn$_invoke$arity$1(lib_11302)," = goog.module.get('",lib_SINGLEQUOTE__11304,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["')",cljs.compiler.sublib_select(sublib_11305),";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");


var G__11306 = seq__10430_11298;
var G__11307 = chunk__10431_11299;
var G__11308 = count__10432_11300;
var G__11309 = (i__10433_11301 + (1));
seq__10430_11298 = G__11306;
chunk__10431_11299 = G__11307;
count__10432_11300 = G__11308;
i__10433_11301 = G__11309;
continue;
} else {
var temp__5804__auto___11310 = cljs.core.seq(seq__10430_11298);
if(temp__5804__auto___11310){
var seq__10430_11311__$1 = temp__5804__auto___11310;
if(cljs.core.chunked_seq_QMARK_(seq__10430_11311__$1)){
var c__5568__auto___11312 = cljs.core.chunk_first(seq__10430_11311__$1);
var G__11313 = cljs.core.chunk_rest(seq__10430_11311__$1);
var G__11314 = c__5568__auto___11312;
var G__11315 = cljs.core.count(c__5568__auto___11312);
var G__11316 = (0);
seq__10430_11298 = G__11313;
chunk__10431_11299 = G__11314;
count__10432_11300 = G__11315;
i__10433_11301 = G__11316;
continue;
} else {
var lib_11317 = cljs.core.first(seq__10430_11311__$1);
var vec__10443_11318 = cljs.analyzer.lib_AMPERSAND_sublib(lib_11317);
var lib_SINGLEQUOTE__11319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10443_11318,(0),null);
var sublib_11320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10443_11318,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",lib_SINGLEQUOTE__11319,"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.scope(function(){");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_goog_module_lib.cljs$core$IFn$_invoke$arity$1(lib_11317)," = goog.module.get('",lib_SINGLEQUOTE__11319,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["')",cljs.compiler.sublib_select(sublib_11320),";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");


var G__11322 = cljs.core.next(seq__10430_11311__$1);
var G__11323 = null;
var G__11324 = (0);
var G__11325 = (0);
seq__10430_11298 = G__11322;
chunk__10431_11299 = G__11323;
count__10432_11300 = G__11324;
i__10433_11301 = G__11325;
continue;
}
} else {
}
}
break;
}

var seq__10446_11326 = cljs.core.seq(global_exports_libs);
var chunk__10447_11327 = null;
var count__10448_11328 = (0);
var i__10449_11329 = (0);
while(true){
if((i__10449_11329 < count__10448_11328)){
var lib_11330 = chunk__10447_11327.cljs$core$IIndexed$_nth$arity$2(null,i__10449_11329);
var map__10452_11331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(cljs.core.first(cljs.analyzer.lib_AMPERSAND_sublib(lib_11330))));
var map__10452_11332__$1 = cljs.core.__destructure_map(map__10452_11331);
var global_exports_11333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10452_11332__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_11333,lib_11330);


var G__11334 = seq__10446_11326;
var G__11335 = chunk__10447_11327;
var G__11336 = count__10448_11328;
var G__11337 = (i__10449_11329 + (1));
seq__10446_11326 = G__11334;
chunk__10447_11327 = G__11335;
count__10448_11328 = G__11336;
i__10449_11329 = G__11337;
continue;
} else {
var temp__5804__auto___11342 = cljs.core.seq(seq__10446_11326);
if(temp__5804__auto___11342){
var seq__10446_11343__$1 = temp__5804__auto___11342;
if(cljs.core.chunked_seq_QMARK_(seq__10446_11343__$1)){
var c__5568__auto___11344 = cljs.core.chunk_first(seq__10446_11343__$1);
var G__11345 = cljs.core.chunk_rest(seq__10446_11343__$1);
var G__11346 = c__5568__auto___11344;
var G__11347 = cljs.core.count(c__5568__auto___11344);
var G__11348 = (0);
seq__10446_11326 = G__11345;
chunk__10447_11327 = G__11346;
count__10448_11328 = G__11347;
i__10449_11329 = G__11348;
continue;
} else {
var lib_11349 = cljs.core.first(seq__10446_11343__$1);
var map__10453_11350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(cljs.core.first(cljs.analyzer.lib_AMPERSAND_sublib(lib_11349))));
var map__10453_11351__$1 = cljs.core.__destructure_map(map__10453_11350);
var global_exports_11352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10453_11351__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_11352,lib_11349);


var G__11357 = cljs.core.next(seq__10446_11343__$1);
var G__11358 = null;
var G__11359 = (0);
var G__11360 = (0);
seq__10446_11326 = G__11357;
chunk__10447_11327 = G__11358;
count__10448_11328 = G__11359;
i__10449_11329 = G__11360;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__10454){
var map__10455 = p__10454;
var map__10455__$1 = cljs.core.__destructure_map(map__10455);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10455__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10455__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10455__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10455__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10455__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10455__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10455__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__10456){
var map__10457 = p__10456;
var map__10457__$1 = cljs.core.__destructure_map(map__10457);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10457__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10457__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10457__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10457__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10457__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10457__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10457__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__10458){
var map__10459 = p__10458;
var map__10459__$1 = cljs.core.__destructure_map(map__10459);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10459__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10459__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10459__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10459__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10459__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__10460_11369 = cljs.core.seq(protocols);
var chunk__10461_11370 = null;
var count__10462_11371 = (0);
var i__10463_11372 = (0);
while(true){
if((i__10463_11372 < count__10462_11371)){
var protocol_11373 = chunk__10461_11370.cljs$core$IIndexed$_nth$arity$2(null,i__10463_11372);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_11373)),"}");


var G__11374 = seq__10460_11369;
var G__11375 = chunk__10461_11370;
var G__11376 = count__10462_11371;
var G__11377 = (i__10463_11372 + (1));
seq__10460_11369 = G__11374;
chunk__10461_11370 = G__11375;
count__10462_11371 = G__11376;
i__10463_11372 = G__11377;
continue;
} else {
var temp__5804__auto___11378 = cljs.core.seq(seq__10460_11369);
if(temp__5804__auto___11378){
var seq__10460_11379__$1 = temp__5804__auto___11378;
if(cljs.core.chunked_seq_QMARK_(seq__10460_11379__$1)){
var c__5568__auto___11380 = cljs.core.chunk_first(seq__10460_11379__$1);
var G__11381 = cljs.core.chunk_rest(seq__10460_11379__$1);
var G__11382 = c__5568__auto___11380;
var G__11383 = cljs.core.count(c__5568__auto___11380);
var G__11384 = (0);
seq__10460_11369 = G__11381;
chunk__10461_11370 = G__11382;
count__10462_11371 = G__11383;
i__10463_11372 = G__11384;
continue;
} else {
var protocol_11385 = cljs.core.first(seq__10460_11379__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_11385)),"}");


var G__11390 = cljs.core.next(seq__10460_11379__$1);
var G__11391 = null;
var G__11392 = (0);
var G__11393 = (0);
seq__10460_11369 = G__11390;
chunk__10461_11370 = G__11391;
count__10462_11371 = G__11392;
i__10463_11372 = G__11393;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__10464_11394 = cljs.core.seq(fields__$1);
var chunk__10465_11395 = null;
var count__10466_11396 = (0);
var i__10467_11397 = (0);
while(true){
if((i__10467_11397 < count__10466_11396)){
var fld_11398 = chunk__10465_11395.cljs$core$IIndexed$_nth$arity$2(null,i__10467_11397);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_11398," = ",fld_11398,";");


var G__11399 = seq__10464_11394;
var G__11400 = chunk__10465_11395;
var G__11401 = count__10466_11396;
var G__11402 = (i__10467_11397 + (1));
seq__10464_11394 = G__11399;
chunk__10465_11395 = G__11400;
count__10466_11396 = G__11401;
i__10467_11397 = G__11402;
continue;
} else {
var temp__5804__auto___11403 = cljs.core.seq(seq__10464_11394);
if(temp__5804__auto___11403){
var seq__10464_11404__$1 = temp__5804__auto___11403;
if(cljs.core.chunked_seq_QMARK_(seq__10464_11404__$1)){
var c__5568__auto___11405 = cljs.core.chunk_first(seq__10464_11404__$1);
var G__11406 = cljs.core.chunk_rest(seq__10464_11404__$1);
var G__11407 = c__5568__auto___11405;
var G__11408 = cljs.core.count(c__5568__auto___11405);
var G__11409 = (0);
seq__10464_11394 = G__11406;
chunk__10465_11395 = G__11407;
count__10466_11396 = G__11408;
i__10467_11397 = G__11409;
continue;
} else {
var fld_11410 = cljs.core.first(seq__10464_11404__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_11410," = ",fld_11410,";");


var G__11411 = cljs.core.next(seq__10464_11404__$1);
var G__11412 = null;
var G__11413 = (0);
var G__11414 = (0);
seq__10464_11394 = G__11411;
chunk__10465_11395 = G__11412;
count__10466_11396 = G__11413;
i__10467_11397 = G__11414;
continue;
}
} else {
}
}
break;
}

var seq__10468_11415 = cljs.core.seq(pmasks);
var chunk__10469_11416 = null;
var count__10470_11417 = (0);
var i__10471_11418 = (0);
while(true){
if((i__10471_11418 < count__10470_11417)){
var vec__10478_11419 = chunk__10469_11416.cljs$core$IIndexed$_nth$arity$2(null,i__10471_11418);
var pno_11420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10478_11419,(0),null);
var pmask_11421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10478_11419,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_11420,"$ = ",pmask_11421,";");


var G__11422 = seq__10468_11415;
var G__11423 = chunk__10469_11416;
var G__11424 = count__10470_11417;
var G__11425 = (i__10471_11418 + (1));
seq__10468_11415 = G__11422;
chunk__10469_11416 = G__11423;
count__10470_11417 = G__11424;
i__10471_11418 = G__11425;
continue;
} else {
var temp__5804__auto___11426 = cljs.core.seq(seq__10468_11415);
if(temp__5804__auto___11426){
var seq__10468_11428__$1 = temp__5804__auto___11426;
if(cljs.core.chunked_seq_QMARK_(seq__10468_11428__$1)){
var c__5568__auto___11429 = cljs.core.chunk_first(seq__10468_11428__$1);
var G__11431 = cljs.core.chunk_rest(seq__10468_11428__$1);
var G__11433 = c__5568__auto___11429;
var G__11434 = cljs.core.count(c__5568__auto___11429);
var G__11435 = (0);
seq__10468_11415 = G__11431;
chunk__10469_11416 = G__11433;
count__10470_11417 = G__11434;
i__10471_11418 = G__11435;
continue;
} else {
var vec__10481_11438 = cljs.core.first(seq__10468_11428__$1);
var pno_11439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10481_11438,(0),null);
var pmask_11440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10481_11438,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_11439,"$ = ",pmask_11440,";");


var G__11441 = cljs.core.next(seq__10468_11428__$1);
var G__11442 = null;
var G__11443 = (0);
var G__11444 = (0);
seq__10468_11415 = G__11441;
chunk__10469_11416 = G__11442;
count__10470_11417 = G__11443;
i__10471_11418 = G__11444;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__10484){
var map__10485 = p__10484;
var map__10485__$1 = cljs.core.__destructure_map(map__10485);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10485__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10485__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10485__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10485__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10485__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__10486_11450 = cljs.core.seq(protocols);
var chunk__10487_11451 = null;
var count__10488_11452 = (0);
var i__10489_11453 = (0);
while(true){
if((i__10489_11453 < count__10488_11452)){
var protocol_11454 = chunk__10487_11451.cljs$core$IIndexed$_nth$arity$2(null,i__10489_11453);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_11454)),"}");


var G__11455 = seq__10486_11450;
var G__11456 = chunk__10487_11451;
var G__11457 = count__10488_11452;
var G__11458 = (i__10489_11453 + (1));
seq__10486_11450 = G__11455;
chunk__10487_11451 = G__11456;
count__10488_11452 = G__11457;
i__10489_11453 = G__11458;
continue;
} else {
var temp__5804__auto___11459 = cljs.core.seq(seq__10486_11450);
if(temp__5804__auto___11459){
var seq__10486_11460__$1 = temp__5804__auto___11459;
if(cljs.core.chunked_seq_QMARK_(seq__10486_11460__$1)){
var c__5568__auto___11461 = cljs.core.chunk_first(seq__10486_11460__$1);
var G__11462 = cljs.core.chunk_rest(seq__10486_11460__$1);
var G__11463 = c__5568__auto___11461;
var G__11464 = cljs.core.count(c__5568__auto___11461);
var G__11465 = (0);
seq__10486_11450 = G__11462;
chunk__10487_11451 = G__11463;
count__10488_11452 = G__11464;
i__10489_11453 = G__11465;
continue;
} else {
var protocol_11466 = cljs.core.first(seq__10486_11460__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_11466)),"}");


var G__11467 = cljs.core.next(seq__10486_11460__$1);
var G__11468 = null;
var G__11469 = (0);
var G__11470 = (0);
seq__10486_11450 = G__11467;
chunk__10487_11451 = G__11468;
count__10488_11452 = G__11469;
i__10489_11453 = G__11470;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__10490_11472 = cljs.core.seq(fields__$1);
var chunk__10491_11473 = null;
var count__10492_11474 = (0);
var i__10493_11475 = (0);
while(true){
if((i__10493_11475 < count__10492_11474)){
var fld_11480 = chunk__10491_11473.cljs$core$IIndexed$_nth$arity$2(null,i__10493_11475);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_11480," = ",fld_11480,";");


var G__11481 = seq__10490_11472;
var G__11482 = chunk__10491_11473;
var G__11483 = count__10492_11474;
var G__11484 = (i__10493_11475 + (1));
seq__10490_11472 = G__11481;
chunk__10491_11473 = G__11482;
count__10492_11474 = G__11483;
i__10493_11475 = G__11484;
continue;
} else {
var temp__5804__auto___11485 = cljs.core.seq(seq__10490_11472);
if(temp__5804__auto___11485){
var seq__10490_11486__$1 = temp__5804__auto___11485;
if(cljs.core.chunked_seq_QMARK_(seq__10490_11486__$1)){
var c__5568__auto___11487 = cljs.core.chunk_first(seq__10490_11486__$1);
var G__11488 = cljs.core.chunk_rest(seq__10490_11486__$1);
var G__11489 = c__5568__auto___11487;
var G__11490 = cljs.core.count(c__5568__auto___11487);
var G__11491 = (0);
seq__10490_11472 = G__11488;
chunk__10491_11473 = G__11489;
count__10492_11474 = G__11490;
i__10493_11475 = G__11491;
continue;
} else {
var fld_11492 = cljs.core.first(seq__10490_11486__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_11492," = ",fld_11492,";");


var G__11493 = cljs.core.next(seq__10490_11486__$1);
var G__11494 = null;
var G__11495 = (0);
var G__11496 = (0);
seq__10490_11472 = G__11493;
chunk__10491_11473 = G__11494;
count__10492_11474 = G__11495;
i__10493_11475 = G__11496;
continue;
}
} else {
}
}
break;
}

var seq__10494_11497 = cljs.core.seq(pmasks);
var chunk__10495_11498 = null;
var count__10496_11499 = (0);
var i__10497_11500 = (0);
while(true){
if((i__10497_11500 < count__10496_11499)){
var vec__10504_11501 = chunk__10495_11498.cljs$core$IIndexed$_nth$arity$2(null,i__10497_11500);
var pno_11502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10504_11501,(0),null);
var pmask_11503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10504_11501,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_11502,"$ = ",pmask_11503,";");


var G__11505 = seq__10494_11497;
var G__11506 = chunk__10495_11498;
var G__11507 = count__10496_11499;
var G__11508 = (i__10497_11500 + (1));
seq__10494_11497 = G__11505;
chunk__10495_11498 = G__11506;
count__10496_11499 = G__11507;
i__10497_11500 = G__11508;
continue;
} else {
var temp__5804__auto___11509 = cljs.core.seq(seq__10494_11497);
if(temp__5804__auto___11509){
var seq__10494_11510__$1 = temp__5804__auto___11509;
if(cljs.core.chunked_seq_QMARK_(seq__10494_11510__$1)){
var c__5568__auto___11511 = cljs.core.chunk_first(seq__10494_11510__$1);
var G__11512 = cljs.core.chunk_rest(seq__10494_11510__$1);
var G__11513 = c__5568__auto___11511;
var G__11514 = cljs.core.count(c__5568__auto___11511);
var G__11515 = (0);
seq__10494_11497 = G__11512;
chunk__10495_11498 = G__11513;
count__10496_11499 = G__11514;
i__10497_11500 = G__11515;
continue;
} else {
var vec__10507_11520 = cljs.core.first(seq__10494_11510__$1);
var pno_11521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10507_11520,(0),null);
var pmask_11522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10507_11520,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_11521,"$ = ",pmask_11522,";");


var G__11523 = cljs.core.next(seq__10494_11510__$1);
var G__11524 = null;
var G__11525 = (0);
var G__11526 = (0);
seq__10494_11497 = G__11523;
chunk__10495_11498 = G__11524;
count__10496_11499 = G__11525;
i__10497_11500 = G__11526;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__10510){
var map__10511 = p__10510;
var map__10511__$1 = cljs.core.__destructure_map(map__10511);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10511__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10511__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10511__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10511__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10511__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"host-field","host-field",-72662140),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"host-call","host-call",1059629755),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__10512){
var map__10513 = p__10512;
var map__10513__$1 = cljs.core.__destructure_map(map__10513);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10513__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10513__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10513__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10513__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10513__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__5043__auto__ = code;
if(cljs.core.truth_(and__5043__auto__)){
return goog.string.startsWith(clojure.string.trim(code),"/*");
} else {
return and__5043__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__9256__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9256__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__10518 = cljs.core.seq(table);
var chunk__10519 = null;
var count__10520 = (0);
var i__10521 = (0);
while(true){
if((i__10521 < count__10520)){
var vec__10528 = chunk__10519.cljs$core$IIndexed$_nth$arity$2(null,i__10521);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10528,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10528,(1),null);
var ns_11532 = cljs.core.namespace(sym);
var name_11533 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__11534 = seq__10518;
var G__11535 = chunk__10519;
var G__11536 = count__10520;
var G__11537 = (i__10521 + (1));
seq__10518 = G__11534;
chunk__10519 = G__11535;
count__10520 = G__11536;
i__10521 = G__11537;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10518);
if(temp__5804__auto__){
var seq__10518__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10518__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__10518__$1);
var G__11538 = cljs.core.chunk_rest(seq__10518__$1);
var G__11539 = c__5568__auto__;
var G__11540 = cljs.core.count(c__5568__auto__);
var G__11541 = (0);
seq__10518 = G__11538;
chunk__10519 = G__11539;
count__10520 = G__11540;
i__10521 = G__11541;
continue;
} else {
var vec__10531 = cljs.core.first(seq__10518__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10531,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10531,(1),null);
var ns_11542 = cljs.core.namespace(sym);
var name_11543 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__11544 = cljs.core.next(seq__10518__$1);
var G__11545 = null;
var G__11546 = (0);
var G__11547 = (0);
seq__10518 = G__11544;
chunk__10519 = G__11545;
count__10520 = G__11546;
i__10521 = G__11547;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__10535 = arguments.length;
switch (G__10535) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.analyzer.get_externs():null));
}));

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq(cljs.core.keys(externs));
while(true){
if(ks){
var k_11549 = cljs.core.first(ks);
var vec__10536_11550 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_11549);
var top_11551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10536_11550,(0),null);
var prefix_SINGLEQUOTE__11552 = vec__10536_11550;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_11549)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__11552) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_11551)) || (cljs.core.contains_QMARK_(known_externs,top_11551)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__11552)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_11551);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__11552)),";");
}
} else {
}

var m_11553 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_11549);
if(cljs.core.empty_QMARK_(m_11553)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__11552,m_11553,top_level,known_externs);
}

var G__11554 = cljs.core.next(ks);
ks = G__11554;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=cljs.compiler.js.map
