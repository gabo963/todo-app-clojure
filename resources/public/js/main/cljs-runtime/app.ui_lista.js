goog.provide('app.ui_lista');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('app.mutations');
goog.require('app.ui_todo');
app.ui_lista.delete_todo_BANG_ = (function app$ui_lista$delete_todo_BANG_(this$,list_id,todo_id){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50310 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lista","id","lista/id",-1285810479),list_id,new cljs.core.Keyword("todo","id","todo/id",-1375661554),todo_id], null);
return (app.mutations.todo_delete.cljs$core$IFn$_invoke$arity$1 ? app.mutations.todo_delete.cljs$core$IFn$_invoke$arity$1(G__50310) : app.mutations.todo_delete.call(null,G__50310));
})()], null));
});
app.ui_lista.ui_todo = (function app$ui_lista$ui_todo(this$,list_id,todo){
var G__50311 = (function (){var G__50312 = todo;
var G__50313 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onDelete","onDelete",1331388507),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app.ui_lista.delete_todo_BANG_,this$,list_id)], null);
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__50312,G__50313) : com.fulcrologic.fulcro.components.computed.call(null,G__50312,G__50313));
})();
return (app.ui_todo.ui_todo.cljs$core$IFn$_invoke$arity$1 ? app.ui_todo.ui_todo.cljs$core$IFn$_invoke$arity$1(G__50311) : app.ui_todo.ui_todo.call(null,G__50311));
});

var options__46503__auto___50320 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui_lista$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lista","id","lista/id",-1285810479),new cljs.core.Keyword("lista","name","lista/name",1611084718),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lista","todos","lista/todos",531969415),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.ui_todo.Todo)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$ui_lista$ident_STAR_(this$,p__50315){
var map__50316 = p__50315;
var map__50316__$1 = (((((!((map__50316 == null))))?(((((map__50316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50316):map__50316);
var props = map__50316__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50316__$1,new cljs.core.Keyword("lista","id","lista/id",-1285810479));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50316__$1,new cljs.core.Keyword("lista","name","lista/name",1611084718));
var todos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50316__$1,new cljs.core.Keyword("lista","todos","lista/todos",531969415));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lista","id","lista/id",-1285810479),new cljs.core.Keyword("lista","id","lista/id",-1285810479).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$ui_lista$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("lista","id","lista/id",-1285810479),new cljs.core.Keyword("param","id","param/id",-1272524377),new cljs.core.Keyword("lista","name","lista/name",1611084718),new cljs.core.Keyword("param","name","param/name",1598843068),new cljs.core.Keyword("lista","todos","lista/todos",531969415),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(2)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(3)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lista","todos","lista/todos",531969415),app.ui_todo.Todo], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui_lista$render_Lista(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__50318 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__50318__$1 = (((((!((map__50318 == null))))?(((((map__50318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50318):map__50318);
var props = map__50318__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50318__$1,new cljs.core.Keyword("lista","id","lista/id",-1285810479));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50318__$1,new cljs.core.Keyword("lista","name","lista/name",1611084718));
var todos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50318__$1,new cljs.core.Keyword("lista","todos","lista/todos",531969415));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,"'s Todos"], null),null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h2",({}),"Todos:"]),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__50318,map__50318__$1,props,id,name,todos){
return (function (p1__50314_SHARP_){
return app.ui_lista.ui_todo(this$,id,p1__50314_SHARP_);
});})(map__50318,map__50318__$1,props,id,name,todos))
,todos)], null),null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["button",({"className": "ui button"}),"Add item"])], null),new cljs.core.Keyword(null,".ui.segment",".ui.segment",1759947126));
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui_lista !== 'undefined') && (typeof app.ui_lista.Lista !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui_lista.Lista = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__46503__auto___50320,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui_lista.Lista,new cljs.core.Keyword("app.ui-lista","Lista","app.ui-lista/Lista",-263560242),options__46503__auto___50320);
app.ui_lista.ui_lista = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.ui_lista.Lista,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("lista","id","lista/id",-1285810479)], null));

//# sourceMappingURL=app.ui_lista.js.map