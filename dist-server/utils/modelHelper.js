Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _default={process:function process(instance,req){return new Promise(function(resolve,reject){instance.getUpdateHandler(req).process(req.body,function(err){if(err)return reject(err);return resolve(instance);});});}};exports.default=_default;