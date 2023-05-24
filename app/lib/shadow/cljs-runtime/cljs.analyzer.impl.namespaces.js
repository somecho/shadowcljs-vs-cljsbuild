import "./cljs_env.js";
goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__6263 = libspec;
var seq__6264 = cljs.core.seq(vec__6263);
var first__6265 = cljs.core.first(seq__6264);
var seq__6264__$1 = cljs.core.next(seq__6264);
var lib = first__6265;
var spec = seq__6264__$1;
var libspec__$1 = vec__6263;
var vec__6266 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6266,(0),null);
var vec__6269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6266,(1),null);
var seq__6270 = cljs.core.seq(vec__6269);
var first__6271 = cljs.core.first(seq__6270);
var seq__6270__$1 = cljs.core.next(seq__6270);
var _ = first__6271;
var first__6271__$1 = cljs.core.first(seq__6270__$1);
var seq__6270__$2 = cljs.core.next(seq__6270__$1);
var alias = first__6271__$1;
var post_spec = seq__6270__$2;
var post = vec__6269;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__6277 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__6277,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__6277;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__6278 = cljs.core.seq(new_as_aliases);
var chunk__6279 = null;
var count__6280 = (0);
var i__6281 = (0);
while(true){
if((i__6281 < count__6280)){
var vec__6291 = chunk__6279.cljs$core$IIndexed$_nth$arity$2(null,i__6281);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6291,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6291,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__6352 = seq__6278;
var G__6353 = chunk__6279;
var G__6354 = count__6280;
var G__6355 = (i__6281 + (1));
seq__6278 = G__6352;
chunk__6279 = G__6353;
count__6280 = G__6354;
i__6281 = G__6355;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__6278);
if(temp__5804__auto__){
var seq__6278__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6278__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__6278__$1);
var G__6356 = cljs.core.chunk_rest(seq__6278__$1);
var G__6357 = c__5568__auto__;
var G__6358 = cljs.core.count(c__5568__auto__);
var G__6359 = (0);
seq__6278 = G__6356;
chunk__6279 = G__6357;
count__6280 = G__6358;
i__6281 = G__6359;
continue;
} else {
var vec__6296 = cljs.core.first(seq__6278__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6296,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6296,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__6360 = cljs.core.next(seq__6278__$1);
var G__6361 = null;
var G__6362 = (0);
var G__6363 = (0);
seq__6278 = G__6360;
chunk__6279 = G__6361;
count__6280 = G__6362;
i__6281 = G__6363;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__6301 = arguments.length;
switch (G__6301) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__6314 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__6314__$1 = cljs.core.__destructure_map(map__6314);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6314__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6314__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__6319 = ret__$1;
var G__6319__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__6319,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__6319);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__6319__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__6319__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__6323,p__6324){
var map__6329 = p__6323;
var map__6329__$1 = cljs.core.__destructure_map(map__6329);
var ret__$1 = map__6329__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6329__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__6330 = p__6324;
var seq__6331 = cljs.core.seq(vec__6330);
var first__6332 = cljs.core.first(seq__6331);
var seq__6331__$1 = cljs.core.next(seq__6331);
var spec_key = first__6332;
var libspecs = seq__6331__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__6335 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__6335__$1 = cljs.core.__destructure_map(map__6335);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6335__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6335__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__6336 = ret__$1;
var G__6336__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__6336,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__6336);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__6336__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__6336__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
