import "./cljs_env.js";
goog.provide('testlib.core');
/**
 * Prints hello world to the console
 */
testlib.core.myfunc = (function testlib$core$myfunc(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["HELLO WORLD"], 0));
});
goog.exportSymbol('testlib.core.myfunc', testlib.core.myfunc);
/**
 * Adds two numbers together and returns the result
 *  `a` - number
 *  `b`- number
 *   
 */
testlib.core.myadd = (function testlib$core$myadd(a,b){
return (a + b);
});
goog.exportSymbol('testlib.core.myadd', testlib.core.myadd);
testlib.core.compile = (function testlib$core$compile(source_string){
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4(cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0(),source_string,"",(function (x){
return cljs.core.reset_BANG_(result,(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(x))?new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(x):new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(x)));
}));

return cljs.core.deref(result);
});
goog.exportSymbol('testlib.core.compile', testlib.core.compile);

//# sourceMappingURL=testlib.core.js.map
