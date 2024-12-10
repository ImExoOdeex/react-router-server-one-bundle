var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/.pnpm/react@19.0.0/node_modules/react/cjs/react.production.js
var require_react_production = __commonJS({
  "node_modules/.pnpm/react@19.0.0/node_modules/react/cjs/react.production.js"(exports) {
    "use strict";
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
    var REACT_PORTAL_TYPE = Symbol.for("react.portal");
    var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
    var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
    var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer");
    var REACT_CONTEXT_TYPE = Symbol.for("react.context");
    var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
    var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
    var REACT_MEMO_TYPE = Symbol.for("react.memo");
    var REACT_LAZY_TYPE = Symbol.for("react.lazy");
    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
    function getIteratorFn(maybeIterable) {
      if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
      maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
      return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    var ReactNoopUpdateQueue = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function() {
      },
      enqueueReplaceState: function() {
      },
      enqueueSetState: function() {
      }
    };
    var assign = Object.assign;
    var emptyObject = {};
    function Component(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    Component.prototype.isReactComponent = {};
    Component.prototype.setState = function(partialState, callback) {
      if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    Component.prototype.forceUpdate = function(callback) {
      this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    function ComponentDummy() {
    }
    ComponentDummy.prototype = Component.prototype;
    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
    pureComponentPrototype.constructor = PureComponent;
    assign(pureComponentPrototype, Component.prototype);
    pureComponentPrototype.isPureReactComponent = true;
    var isArrayImpl = Array.isArray;
    var ReactSharedInternals = { H: null, A: null, T: null, S: null };
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function ReactElement(type, key, self, source, owner, props) {
      self = props.ref;
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        ref: void 0 !== self ? self : null,
        props
      };
    }
    function cloneAndReplaceKey(oldElement, newKey) {
      return ReactElement(
        oldElement.type,
        newKey,
        void 0,
        void 0,
        void 0,
        oldElement.props
      );
    }
    function isValidElement(object) {
      return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function escape(key) {
      var escaperLookup = { "=": "=0", ":": "=2" };
      return "$" + key.replace(/[=:]/g, function(match) {
        return escaperLookup[match];
      });
    }
    var userProvidedKeyEscapeRegex = /\/+/g;
    function getElementKey(element, index) {
      return "object" === typeof element && null !== element && null != element.key ? escape("" + element.key) : index.toString(36);
    }
    function noop$1() {
    }
    function resolveThenable(thenable) {
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
        default:
          switch ("string" === typeof thenable.status ? thenable.then(noop$1, noop$1) : (thenable.status = "pending", thenable.then(
            function(fulfilledValue) {
              "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
            },
            function(error) {
              "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
            }
          )), thenable.status) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
          }
      }
      throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
      var type = typeof children;
      if ("undefined" === type || "boolean" === type) children = null;
      var invokeCallback = false;
      if (null === children) invokeCallback = true;
      else
        switch (type) {
          case "bigint":
          case "string":
          case "number":
            invokeCallback = true;
            break;
          case "object":
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = true;
                break;
              case REACT_LAZY_TYPE:
                return invokeCallback = children._init, mapIntoArray(
                  invokeCallback(children._payload),
                  array,
                  escapedPrefix,
                  nameSoFar,
                  callback
                );
            }
        }
      if (invokeCallback)
        return callback = callback(children), invokeCallback = "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar, isArrayImpl(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
          return c;
        })) : null != callback && (isValidElement(callback) && (callback = cloneAndReplaceKey(
          callback,
          escapedPrefix + (null == callback.key || children && children.key === callback.key ? "" : ("" + callback.key).replace(
            userProvidedKeyEscapeRegex,
            "$&/"
          ) + "/") + invokeCallback
        )), array.push(callback)), 1;
      invokeCallback = 0;
      var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
      if (isArrayImpl(children))
        for (var i = 0; i < children.length; i++)
          nameSoFar = children[i], type = nextNamePrefix + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
            nameSoFar,
            array,
            escapedPrefix,
            type,
            callback
          );
      else if (i = getIteratorFn(children), "function" === typeof i)
        for (children = i.call(children), i = 0; !(nameSoFar = children.next()).done; )
          nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
            nameSoFar,
            array,
            escapedPrefix,
            type,
            callback
          );
      else if ("object" === type) {
        if ("function" === typeof children.then)
          return mapIntoArray(
            resolveThenable(children),
            array,
            escapedPrefix,
            nameSoFar,
            callback
          );
        array = String(children);
        throw Error(
          "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
        );
      }
      return invokeCallback;
    }
    function mapChildren(children, func, context) {
      if (null == children) return children;
      var result = [], count = 0;
      mapIntoArray(children, result, "", "", function(child) {
        return func.call(context, child, count++);
      });
      return result;
    }
    function lazyInitializer(payload) {
      if (-1 === payload._status) {
        var ctor = payload._result;
        ctor = ctor();
        ctor.then(
          function(moduleObject) {
            if (0 === payload._status || -1 === payload._status)
              payload._status = 1, payload._result = moduleObject;
          },
          function(error) {
            if (0 === payload._status || -1 === payload._status)
              payload._status = 2, payload._result = error;
          }
        );
        -1 === payload._status && (payload._status = 0, payload._result = ctor);
      }
      if (1 === payload._status) return payload._result.default;
      throw payload._result;
    }
    var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
      if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
        var event = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
          error
        });
        if (!window.dispatchEvent(event)) return;
      } else if ("object" === typeof process && "function" === typeof process.emit) {
        process.emit("uncaughtException", error);
        return;
      }
      console.error(error);
    };
    function noop() {
    }
    exports.Children = {
      map: mapChildren,
      forEach: function(children, forEachFunc, forEachContext) {
        mapChildren(
          children,
          function() {
            forEachFunc.apply(this, arguments);
          },
          forEachContext
        );
      },
      count: function(children) {
        var n = 0;
        mapChildren(children, function() {
          n++;
        });
        return n;
      },
      toArray: function(children) {
        return mapChildren(children, function(child) {
          return child;
        }) || [];
      },
      only: function(children) {
        if (!isValidElement(children))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return children;
      }
    };
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
    exports.act = function() {
      throw Error("act(...) is not supported in production builds of React.");
    };
    exports.cache = function(fn) {
      return function() {
        return fn.apply(null, arguments);
      };
    };
    exports.cloneElement = function(element, config, children) {
      if (null === element || void 0 === element)
        throw Error(
          "The argument must be a React element, but you passed " + element + "."
        );
      var props = assign({}, element.props), key = element.key, owner = void 0;
      if (null != config)
        for (propName in void 0 !== config.ref && (owner = void 0), void 0 !== config.key && (key = "" + config.key), config)
          !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
      var propName = arguments.length - 2;
      if (1 === propName) props.children = children;
      else if (1 < propName) {
        for (var childArray = Array(propName), i = 0; i < propName; i++)
          childArray[i] = arguments[i + 2];
        props.children = childArray;
      }
      return ReactElement(element.type, key, void 0, void 0, owner, props);
    };
    exports.createContext = function(defaultValue) {
      defaultValue = {
        $$typeof: REACT_CONTEXT_TYPE,
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      };
      defaultValue.Provider = defaultValue;
      defaultValue.Consumer = {
        $$typeof: REACT_CONSUMER_TYPE,
        _context: defaultValue
      };
      return defaultValue;
    };
    exports.createElement = function(type, config, children) {
      var propName, props = {}, key = null;
      if (null != config)
        for (propName in void 0 !== config.key && (key = "" + config.key), config)
          hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config[propName]);
      var childrenLength = arguments.length - 2;
      if (1 === childrenLength) props.children = children;
      else if (1 < childrenLength) {
        for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)
          childArray[i] = arguments[i + 2];
        props.children = childArray;
      }
      if (type && type.defaultProps)
        for (propName in childrenLength = type.defaultProps, childrenLength)
          void 0 === props[propName] && (props[propName] = childrenLength[propName]);
      return ReactElement(type, key, void 0, void 0, null, props);
    };
    exports.createRef = function() {
      return { current: null };
    };
    exports.forwardRef = function(render) {
      return { $$typeof: REACT_FORWARD_REF_TYPE, render };
    };
    exports.isValidElement = isValidElement;
    exports.lazy = function(ctor) {
      return {
        $$typeof: REACT_LAZY_TYPE,
        _payload: { _status: -1, _result: ctor },
        _init: lazyInitializer
      };
    };
    exports.memo = function(type, compare) {
      return {
        $$typeof: REACT_MEMO_TYPE,
        type,
        compare: void 0 === compare ? null : compare
      };
    };
    exports.startTransition = function(scope) {
      var prevTransition = ReactSharedInternals.T, currentTransition = {};
      ReactSharedInternals.T = currentTransition;
      try {
        var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
        null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
        "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
      } catch (error) {
        reportGlobalError(error);
      } finally {
        ReactSharedInternals.T = prevTransition;
      }
    };
    exports.unstable_useCacheRefresh = function() {
      return ReactSharedInternals.H.useCacheRefresh();
    };
    exports.use = function(usable) {
      return ReactSharedInternals.H.use(usable);
    };
    exports.useActionState = function(action, initialState, permalink) {
      return ReactSharedInternals.H.useActionState(action, initialState, permalink);
    };
    exports.useCallback = function(callback, deps) {
      return ReactSharedInternals.H.useCallback(callback, deps);
    };
    exports.useContext = function(Context2) {
      return ReactSharedInternals.H.useContext(Context2);
    };
    exports.useDebugValue = function() {
    };
    exports.useDeferredValue = function(value, initialValue) {
      return ReactSharedInternals.H.useDeferredValue(value, initialValue);
    };
    exports.useEffect = function(create, deps) {
      return ReactSharedInternals.H.useEffect(create, deps);
    };
    exports.useId = function() {
      return ReactSharedInternals.H.useId();
    };
    exports.useImperativeHandle = function(ref, create, deps) {
      return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
    };
    exports.useInsertionEffect = function(create, deps) {
      return ReactSharedInternals.H.useInsertionEffect(create, deps);
    };
    exports.useLayoutEffect = function(create, deps) {
      return ReactSharedInternals.H.useLayoutEffect(create, deps);
    };
    exports.useMemo = function(create, deps) {
      return ReactSharedInternals.H.useMemo(create, deps);
    };
    exports.useOptimistic = function(passthrough, reducer) {
      return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
    };
    exports.useReducer = function(reducer, initialArg, init) {
      return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
    };
    exports.useRef = function(initialValue) {
      return ReactSharedInternals.H.useRef(initialValue);
    };
    exports.useState = function(initialState) {
      return ReactSharedInternals.H.useState(initialState);
    };
    exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
      return ReactSharedInternals.H.useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot
      );
    };
    exports.useTransition = function() {
      return ReactSharedInternals.H.useTransition();
    };
    exports.version = "19.0.0";
  }
});

// node_modules/.pnpm/react@19.0.0/node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/.pnpm/react@19.0.0/node_modules/react/cjs/react.development.js"(exports, module) {
    "use strict";
    "production" !== process.env.NODE_ENV && function() {
      function defineDeprecationWarning(methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              info[0],
              info[1]
            );
          }
        });
      }
      function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable)
          return null;
        maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
      }
      function warnNoop(publicInstance, callerName) {
        publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
        var warningKey = publicInstance + "." + callerName;
        didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          callerName,
          publicInstance
        ), didWarnStateUpdateForUnmountedComponent[warningKey] = true);
      }
      function Component(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      function ComponentDummy() {
      }
      function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        try {
          testStringCoercion(value);
          var JSCompiler_inline_result = false;
        } catch (e) {
          JSCompiler_inline_result = true;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            JSCompiler_inline_result$jscomp$0
          );
          return testStringCoercion(value);
        }
      }
      function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE$2 ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
        }
        if ("object" === typeof type)
          switch ("number" === typeof type.tag && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
              return type;
            case REACT_MEMO_TYPE:
              return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x) {
              }
          }
        return null;
      }
      function isValidElementType(type) {
        return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE$1 || void 0 !== type.getModuleId) ? true : false;
      }
      function disabledLog() {
      }
      function disableLogs() {
        if (0 === disabledDepth) {
          prevLog = console.log;
          prevInfo = console.info;
          prevWarn = console.warn;
          prevError = console.error;
          prevGroup = console.group;
          prevGroupCollapsed = console.groupCollapsed;
          prevGroupEnd = console.groupEnd;
          var props = {
            configurable: true,
            enumerable: true,
            value: disabledLog,
            writable: true
          };
          Object.defineProperties(console, {
            info: props,
            log: props,
            warn: props,
            error: props,
            group: props,
            groupCollapsed: props,
            groupEnd: props
          });
        }
        disabledDepth++;
      }
      function reenableLogs() {
        disabledDepth--;
        if (0 === disabledDepth) {
          var props = { configurable: true, enumerable: true, writable: true };
          Object.defineProperties(console, {
            log: assign({}, props, { value: prevLog }),
            info: assign({}, props, { value: prevInfo }),
            warn: assign({}, props, { value: prevWarn }),
            error: assign({}, props, { value: prevError }),
            group: assign({}, props, { value: prevGroup }),
            groupCollapsed: assign({}, props, { value: prevGroupCollapsed }),
            groupEnd: assign({}, props, { value: prevGroupEnd })
          });
        }
        0 > disabledDepth && console.error(
          "disabledDepth fell below zero. This is a bug in React. Please file an issue."
        );
      }
      function describeBuiltInComponentFrame(name) {
        if (void 0 === prefix)
          try {
            throw Error();
          } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || "";
            suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
          }
        return "\n" + prefix + name + suffix;
      }
      function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) return "";
        var frame = componentFrameCache.get(fn);
        if (void 0 !== frame) return frame;
        reentry = true;
        frame = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher = null;
        previousDispatcher = ReactSharedInternals.H;
        ReactSharedInternals.H = null;
        disableLogs();
        try {
          var RunInRootFrame = {
            DetermineComponentFrameRoot: function() {
              try {
                if (construct) {
                  var Fake = function() {
                    throw Error();
                  };
                  Object.defineProperty(Fake.prototype, "props", {
                    set: function() {
                      throw Error();
                    }
                  });
                  if ("object" === typeof Reflect && Reflect.construct) {
                    try {
                      Reflect.construct(Fake, []);
                    } catch (x) {
                      var control = x;
                    }
                    Reflect.construct(fn, [], Fake);
                  } else {
                    try {
                      Fake.call();
                    } catch (x$0) {
                      control = x$0;
                    }
                    fn.call(Fake.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (x$1) {
                    control = x$1;
                  }
                  (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {
                  });
                }
              } catch (sample) {
                if (sample && control && "string" === typeof sample.stack)
                  return [sample.stack, control.stack];
              }
              return [null, null];
            }
          };
          RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
          var namePropDescriptor = Object.getOwnPropertyDescriptor(
            RunInRootFrame.DetermineComponentFrameRoot,
            "name"
          );
          namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(
            RunInRootFrame.DetermineComponentFrameRoot,
            "name",
            { value: "DetermineComponentFrameRoot" }
          );
          var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
          if (sampleStack && controlStack) {
            var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
            for (_RunInRootFrame$Deter = namePropDescriptor = 0; namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes(
              "DetermineComponentFrameRoot"
            ); )
              namePropDescriptor++;
            for (; _RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes(
              "DetermineComponentFrameRoot"
            ); )
              _RunInRootFrame$Deter++;
            if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length)
              for (namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]; )
                _RunInRootFrame$Deter--;
            for (; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)
              if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
                  do
                    if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                      var _frame = "\n" + sampleLines[namePropDescriptor].replace(
                        " at new ",
                        " at "
                      );
                      fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                      "function" === typeof fn && componentFrameCache.set(fn, _frame);
                      return _frame;
                    }
                  while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
                }
                break;
              }
          }
        } finally {
          reentry = false, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;
        }
        sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
        "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
        return sampleLines;
      }
      function describeUnknownElementTypeFrameInDEV(type) {
        if (null == type) return "";
        if ("function" === typeof type) {
          var prototype = type.prototype;
          return describeNativeComponentFrame(
            type,
            !(!prototype || !prototype.isReactComponent)
          );
        }
        if ("string" === typeof type) return describeBuiltInComponentFrame(type);
        switch (type) {
          case REACT_SUSPENSE_TYPE:
            return describeBuiltInComponentFrame("Suspense");
          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame("SuspenseList");
        }
        if ("object" === typeof type)
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return type = describeNativeComponentFrame(type.render, false), type;
            case REACT_MEMO_TYPE:
              return describeUnknownElementTypeFrameInDEV(type.type);
            case REACT_LAZY_TYPE:
              prototype = type._payload;
              type = type._init;
              try {
                return describeUnknownElementTypeFrameInDEV(type(prototype));
              } catch (x) {
              }
          }
        return "";
      }
      function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
      }
      function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config, "key").get;
          if (getter && getter.isReactWarning) return false;
        }
        return void 0 !== config.key;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
        }
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      function ReactElement(type, key, self, source, owner, props) {
        self = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          props,
          _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
          enumerable: false,
          get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: null
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      function cloneAndReplaceKey(oldElement, newKey) {
        newKey = ReactElement(
          oldElement.type,
          newKey,
          void 0,
          void 0,
          oldElement._owner,
          oldElement.props
        );
        newKey._store.validated = oldElement._store.validated;
        return newKey;
      }
      function validateChildKeys(node, parentType) {
        if ("object" === typeof node && node && node.$$typeof !== REACT_CLIENT_REFERENCE) {
          if (isArrayImpl(node))
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              isValidElement(child) && validateExplicitKey(child, parentType);
            }
          else if (isValidElement(node))
            node._store && (node._store.validated = 1);
          else if (i = getIteratorFn(node), "function" === typeof i && i !== node.entries && (i = i.call(node), i !== node))
            for (; !(node = i.next()).done; )
              isValidElement(node.value) && validateExplicitKey(node.value, parentType);
        }
      }
      function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function validateExplicitKey(element, parentType) {
        if (element._store && !element._store.validated && null == element.key && (element._store.validated = 1, parentType = getCurrentComponentErrorInfo(parentType), !ownerHasKeyUseWarning[parentType])) {
          ownerHasKeyUseWarning[parentType] = true;
          var childOwner = "";
          element && null != element._owner && element._owner !== getOwner() && (childOwner = null, "number" === typeof element._owner.tag ? childOwner = getComponentNameFromType(element._owner.type) : "string" === typeof element._owner.name && (childOwner = element._owner.name), childOwner = " It was passed a child from " + childOwner + ".");
          var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
          ReactSharedInternals.getCurrentStack = function() {
            var stack = describeUnknownElementTypeFrameInDEV(element.type);
            prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
            return stack;
          };
          console.error(
            'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
            parentType,
            childOwner
          );
          ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
        }
      }
      function getCurrentComponentErrorInfo(parentType) {
        var info = "", owner = getOwner();
        owner && (owner = getComponentNameFromType(owner.type)) && (info = "\n\nCheck the render method of `" + owner + "`.");
        info || (parentType = getComponentNameFromType(parentType)) && (info = "\n\nCheck the top-level render call using <" + parentType + ">.");
        return info;
      }
      function escape(key) {
        var escaperLookup = { "=": "=0", ":": "=2" };
        return "$" + key.replace(/[=:]/g, function(match) {
          return escaperLookup[match];
        });
      }
      function getElementKey(element, index) {
        return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
      }
      function noop$1() {
      }
      function resolveThenable(thenable) {
        switch (thenable.status) {
          case "fulfilled":
            return thenable.value;
          case "rejected":
            throw thenable.reason;
          default:
            switch ("string" === typeof thenable.status ? thenable.then(noop$1, noop$1) : (thenable.status = "pending", thenable.then(
              function(fulfilledValue) {
                "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
              },
              function(error) {
                "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
              }
            )), thenable.status) {
              case "fulfilled":
                return thenable.value;
              case "rejected":
                throw thenable.reason;
            }
        }
        throw thenable;
      }
      function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if ("undefined" === type || "boolean" === type) children = null;
        var invokeCallback = false;
        if (null === children) invokeCallback = true;
        else
          switch (type) {
            case "bigint":
            case "string":
            case "number":
              invokeCallback = true;
              break;
            case "object":
              switch (children.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_PORTAL_TYPE:
                  invokeCallback = true;
                  break;
                case REACT_LAZY_TYPE:
                  return invokeCallback = children._init, mapIntoArray(
                    invokeCallback(children._payload),
                    array,
                    escapedPrefix,
                    nameSoFar,
                    callback
                  );
              }
          }
        if (invokeCallback) {
          invokeCallback = children;
          callback = callback(invokeCallback);
          var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
          isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
            return c;
          })) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(
            callback,
            escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(
              userProvidedKeyEscapeRegex,
              "$&/"
            ) + "/") + childKey
          ), "" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
          return 1;
        }
        invokeCallback = 0;
        childKey = "" === nameSoFar ? "." : nameSoFar + ":";
        if (isArrayImpl(children))
          for (var i = 0; i < children.length; i++)
            nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            );
        else if (i = getIteratorFn(children), "function" === typeof i)
          for (i === children.entries && (didWarnAboutMaps || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), didWarnAboutMaps = true), children = i.call(children), i = 0; !(nameSoFar = children.next()).done; )
            nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            );
        else if ("object" === type) {
          if ("function" === typeof children.then)
            return mapIntoArray(
              resolveThenable(children),
              array,
              escapedPrefix,
              nameSoFar,
              callback
            );
          array = String(children);
          throw Error(
            "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return invokeCallback;
      }
      function mapChildren(children, func, context) {
        if (null == children) return children;
        var result = [], count = 0;
        mapIntoArray(children, result, "", "", function(child) {
          return func.call(context, child, count++);
        });
        return result;
      }
      function lazyInitializer(payload) {
        if (-1 === payload._status) {
          var ctor = payload._result;
          ctor = ctor();
          ctor.then(
            function(moduleObject) {
              if (0 === payload._status || -1 === payload._status)
                payload._status = 1, payload._result = moduleObject;
            },
            function(error) {
              if (0 === payload._status || -1 === payload._status)
                payload._status = 2, payload._result = error;
            }
          );
          -1 === payload._status && (payload._status = 0, payload._result = ctor);
        }
        if (1 === payload._status)
          return ctor = payload._result, void 0 === ctor && console.error(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
            ctor
          ), "default" in ctor || console.error(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
            ctor
          ), ctor.default;
        throw payload._result;
      }
      function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
        );
        return dispatcher;
      }
      function noop() {
      }
      function enqueueTask(task) {
        if (null === enqueueTaskImpl)
          try {
            var requireString = ("require" + Math.random()).slice(0, 7);
            enqueueTaskImpl = (module && module[requireString]).call(
              module,
              "timers"
            ).setImmediate;
          } catch (_err) {
            enqueueTaskImpl = function(callback) {
              false === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = true, "undefined" === typeof MessageChannel && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var channel = new MessageChannel();
              channel.port1.onmessage = callback;
              channel.port2.postMessage(void 0);
            };
          }
        return enqueueTaskImpl(task);
      }
      function aggregateErrors(errors) {
        return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
      }
      function popActScope(prevActQueue, prevActScopeDepth) {
        prevActScopeDepth !== actScopeDepth - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        );
        actScopeDepth = prevActScopeDepth;
      }
      function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
        var queue = ReactSharedInternals.actQueue;
        if (null !== queue)
          if (0 !== queue.length)
            try {
              flushActQueue(queue);
              enqueueTask(function() {
                return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
              });
              return;
            } catch (error) {
              ReactSharedInternals.thrownErrors.push(error);
            }
          else ReactSharedInternals.actQueue = null;
        0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
      }
      function flushActQueue(queue) {
        if (!isFlushing) {
          isFlushing = true;
          var i = 0;
          try {
            for (; i < queue.length; i++) {
              var callback = queue[i];
              do {
                ReactSharedInternals.didUsePromise = false;
                var continuation = callback(false);
                if (null !== continuation) {
                  if (ReactSharedInternals.didUsePromise) {
                    queue[i] = callback;
                    queue.splice(0, i);
                    return;
                  }
                  callback = continuation;
                } else break;
              } while (1);
            }
            queue.length = 0;
          } catch (error) {
            queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
          } finally {
            isFlushing = false;
          }
        }
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
      Symbol.for("react.provider");
      var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
        isMounted: function() {
          return false;
        },
        enqueueForceUpdate: function(publicInstance) {
          warnNoop(publicInstance, "forceUpdate");
        },
        enqueueReplaceState: function(publicInstance) {
          warnNoop(publicInstance, "replaceState");
        },
        enqueueSetState: function(publicInstance) {
          warnNoop(publicInstance, "setState");
        }
      }, assign = Object.assign, emptyObject = {};
      Object.freeze(emptyObject);
      Component.prototype.isReactComponent = {};
      Component.prototype.setState = function(partialState, callback) {
        if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, partialState, callback, "setState");
      };
      Component.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
      };
      var deprecatedAPIs = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, fnName;
      for (fnName in deprecatedAPIs)
        deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
      ComponentDummy.prototype = Component.prototype;
      deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
      deprecatedAPIs.constructor = PureComponent;
      assign(deprecatedAPIs, Component.prototype);
      deprecatedAPIs.isPureReactComponent = true;
      var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"), ReactSharedInternals = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        isBatchingLegacy: false,
        didScheduleLegacyUpdate: false,
        didUsePromise: false,
        thrownErrors: [],
        getCurrentStack: null
      }, hasOwnProperty = Object.prototype.hasOwnProperty, REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"), disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
      disabledLog.__reactDisabledLog = true;
      var prefix, suffix, reentry = false;
      var componentFrameCache = new ("function" === typeof WeakMap ? WeakMap : Map)();
      var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
      var didWarnAboutElementRef = {};
      var ownerHasKeyUseWarning = {}, didWarnAboutMaps = false, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
        if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
          var event = new window.ErrorEvent("error", {
            bubbles: true,
            cancelable: true,
            message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
            error
          });
          if (!window.dispatchEvent(event)) return;
        } else if ("object" === typeof process && "function" === typeof process.emit) {
          process.emit("uncaughtException", error);
          return;
        }
        console.error(error);
      }, didWarnAboutMessageChannel = false, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = false, isFlushing = false, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
        queueMicrotask(function() {
          return queueMicrotask(callback);
        });
      } : enqueueTask;
      exports.Children = {
        map: mapChildren,
        forEach: function(children, forEachFunc, forEachContext) {
          mapChildren(
            children,
            function() {
              forEachFunc.apply(this, arguments);
            },
            forEachContext
          );
        },
        count: function(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        },
        toArray: function(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        },
        only: function(children) {
          if (!isValidElement(children))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return children;
        }
      };
      exports.Component = Component;
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.Profiler = REACT_PROFILER_TYPE;
      exports.PureComponent = PureComponent;
      exports.StrictMode = REACT_STRICT_MODE_TYPE;
      exports.Suspense = REACT_SUSPENSE_TYPE;
      exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
      exports.act = function(callback) {
        var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
        actScopeDepth++;
        var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = false;
        try {
          var result = callback();
        } catch (error) {
          ReactSharedInternals.thrownErrors.push(error);
        }
        if (0 < ReactSharedInternals.thrownErrors.length)
          throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        if (null !== result && "object" === typeof result && "function" === typeof result.then) {
          var thenable = result;
          queueSeveralMicrotasks(function() {
            didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          });
          return {
            then: function(resolve, reject) {
              didAwaitActCall = true;
              thenable.then(
                function(returnValue) {
                  popActScope(prevActQueue, prevActScopeDepth);
                  if (0 === prevActScopeDepth) {
                    try {
                      flushActQueue(queue), enqueueTask(function() {
                        return recursivelyFlushAsyncActWork(
                          returnValue,
                          resolve,
                          reject
                        );
                      });
                    } catch (error$2) {
                      ReactSharedInternals.thrownErrors.push(error$2);
                    }
                    if (0 < ReactSharedInternals.thrownErrors.length) {
                      var _thrownError = aggregateErrors(
                        ReactSharedInternals.thrownErrors
                      );
                      ReactSharedInternals.thrownErrors.length = 0;
                      reject(_thrownError);
                    }
                  } else resolve(returnValue);
                },
                function(error) {
                  popActScope(prevActQueue, prevActScopeDepth);
                  0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(
                    ReactSharedInternals.thrownErrors
                  ), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
                }
              );
            }
          };
        }
        var returnValue$jscomp$0 = result;
        popActScope(prevActQueue, prevActScopeDepth);
        0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
          didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), ReactSharedInternals.actQueue = null);
        if (0 < ReactSharedInternals.thrownErrors.length)
          throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        return {
          then: function(resolve, reject) {
            didAwaitActCall = true;
            0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
              return recursivelyFlushAsyncActWork(
                returnValue$jscomp$0,
                resolve,
                reject
              );
            })) : resolve(returnValue$jscomp$0);
          }
        };
      };
      exports.cache = function(fn) {
        return function() {
          return fn.apply(null, arguments);
        };
      };
      exports.cloneElement = function(element, config, children) {
        if (null === element || void 0 === element)
          throw Error(
            "The argument must be a React element, but you passed " + element + "."
          );
        var props = assign({}, element.props), key = element.key, owner = element._owner;
        if (null != config) {
          var JSCompiler_inline_result;
          a: {
            if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(
              config,
              "ref"
            ).get) && JSCompiler_inline_result.isReactWarning) {
              JSCompiler_inline_result = false;
              break a;
            }
            JSCompiler_inline_result = void 0 !== config.ref;
          }
          JSCompiler_inline_result && (owner = getOwner());
          hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
          for (propName in config)
            !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
        }
        var propName = arguments.length - 2;
        if (1 === propName) props.children = children;
        else if (1 < propName) {
          JSCompiler_inline_result = Array(propName);
          for (var i = 0; i < propName; i++)
            JSCompiler_inline_result[i] = arguments[i + 2];
          props.children = JSCompiler_inline_result;
        }
        props = ReactElement(element.type, key, void 0, void 0, owner, props);
        for (key = 2; key < arguments.length; key++)
          validateChildKeys(arguments[key], props.type);
        return props;
      };
      exports.createContext = function(defaultValue) {
        defaultValue = {
          $$typeof: REACT_CONTEXT_TYPE,
          _currentValue: defaultValue,
          _currentValue2: defaultValue,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        };
        defaultValue.Provider = defaultValue;
        defaultValue.Consumer = {
          $$typeof: REACT_CONSUMER_TYPE,
          _context: defaultValue
        };
        defaultValue._currentRenderer = null;
        defaultValue._currentRenderer2 = null;
        return defaultValue;
      };
      exports.createElement = function(type, config, children) {
        if (isValidElementType(type))
          for (var i = 2; i < arguments.length; i++)
            validateChildKeys(arguments[i], type);
        else {
          i = "";
          if (void 0 === type || "object" === typeof type && null !== type && 0 === Object.keys(type).length)
            i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
          if (null === type) var typeString = "null";
          else
            isArrayImpl(type) ? typeString = "array" : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE ? (typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : typeString = typeof type;
          console.error(
            "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
            typeString,
            i
          );
        }
        var propName;
        i = {};
        typeString = null;
        if (null != config)
          for (propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = true, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), hasValidKey(config) && (checkKeyStringCoercion(config.key), typeString = "" + config.key), config)
            hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config[propName]);
        var childrenLength = arguments.length - 2;
        if (1 === childrenLength) i.children = children;
        else if (1 < childrenLength) {
          for (var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)
            childArray[_i] = arguments[_i + 2];
          Object.freeze && Object.freeze(childArray);
          i.children = childArray;
        }
        if (type && type.defaultProps)
          for (propName in childrenLength = type.defaultProps, childrenLength)
            void 0 === i[propName] && (i[propName] = childrenLength[propName]);
        typeString && defineKeyPropWarningGetter(
          i,
          "function" === typeof type ? type.displayName || type.name || "Unknown" : type
        );
        return ReactElement(type, typeString, void 0, void 0, getOwner(), i);
      };
      exports.createRef = function() {
        var refObject = { current: null };
        Object.seal(refObject);
        return refObject;
      };
      exports.forwardRef = function(render) {
        null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : "function" !== typeof render ? console.error(
          "forwardRef requires a render function but was given %s.",
          null === render ? "null" : typeof render
        ) : 0 !== render.length && 2 !== render.length && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        );
        null != render && null != render.defaultProps && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render }, ownName;
        Object.defineProperty(elementType, "displayName", {
          enumerable: false,
          configurable: true,
          get: function() {
            return ownName;
          },
          set: function(name) {
            ownName = name;
            render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
          }
        });
        return elementType;
      };
      exports.isValidElement = isValidElement;
      exports.lazy = function(ctor) {
        return {
          $$typeof: REACT_LAZY_TYPE,
          _payload: { _status: -1, _result: ctor },
          _init: lazyInitializer
        };
      };
      exports.memo = function(type, compare) {
        isValidElementType(type) || console.error(
          "memo: The first argument must be a component. Instead received: %s",
          null === type ? "null" : typeof type
        );
        compare = {
          $$typeof: REACT_MEMO_TYPE,
          type,
          compare: void 0 === compare ? null : compare
        };
        var ownName;
        Object.defineProperty(compare, "displayName", {
          enumerable: false,
          configurable: true,
          get: function() {
            return ownName;
          },
          set: function(name) {
            ownName = name;
            type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
          }
        });
        return compare;
      };
      exports.startTransition = function(scope) {
        var prevTransition = ReactSharedInternals.T, currentTransition = {};
        ReactSharedInternals.T = currentTransition;
        currentTransition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
          null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
          "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
        } catch (error) {
          reportGlobalError(error);
        } finally {
          null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), ReactSharedInternals.T = prevTransition;
        }
      };
      exports.unstable_useCacheRefresh = function() {
        return resolveDispatcher().useCacheRefresh();
      };
      exports.use = function(usable) {
        return resolveDispatcher().use(usable);
      };
      exports.useActionState = function(action, initialState, permalink) {
        return resolveDispatcher().useActionState(
          action,
          initialState,
          permalink
        );
      };
      exports.useCallback = function(callback, deps) {
        return resolveDispatcher().useCallback(callback, deps);
      };
      exports.useContext = function(Context2) {
        var dispatcher = resolveDispatcher();
        Context2.$$typeof === REACT_CONSUMER_TYPE && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        );
        return dispatcher.useContext(Context2);
      };
      exports.useDebugValue = function(value, formatterFn) {
        return resolveDispatcher().useDebugValue(value, formatterFn);
      };
      exports.useDeferredValue = function(value, initialValue) {
        return resolveDispatcher().useDeferredValue(value, initialValue);
      };
      exports.useEffect = function(create, deps) {
        return resolveDispatcher().useEffect(create, deps);
      };
      exports.useId = function() {
        return resolveDispatcher().useId();
      };
      exports.useImperativeHandle = function(ref, create, deps) {
        return resolveDispatcher().useImperativeHandle(ref, create, deps);
      };
      exports.useInsertionEffect = function(create, deps) {
        return resolveDispatcher().useInsertionEffect(create, deps);
      };
      exports.useLayoutEffect = function(create, deps) {
        return resolveDispatcher().useLayoutEffect(create, deps);
      };
      exports.useMemo = function(create, deps) {
        return resolveDispatcher().useMemo(create, deps);
      };
      exports.useOptimistic = function(passthrough, reducer) {
        return resolveDispatcher().useOptimistic(passthrough, reducer);
      };
      exports.useReducer = function(reducer, initialArg, init) {
        return resolveDispatcher().useReducer(reducer, initialArg, init);
      };
      exports.useRef = function(initialValue) {
        return resolveDispatcher().useRef(initialValue);
      };
      exports.useState = function(initialState) {
        return resolveDispatcher().useState(initialState);
      };
      exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
        return resolveDispatcher().useSyncExternalStore(
          subscribe,
          getSnapshot,
          getServerSnapshot
        );
      };
      exports.useTransition = function() {
        return resolveDispatcher().useTransition();
      };
      exports.version = "19.0.0";
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }
});

// node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/.pnpm/react@19.0.0/node_modules/react/index.js"(exports, module) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module.exports = require_react_production();
    } else {
      module.exports = require_react_development();
    }
  }
});

// node_modules/.pnpm/turbo-stream@2.4.0/node_modules/turbo-stream/dist/utils.js
var require_utils = __commonJS({
  "node_modules/.pnpm/turbo-stream@2.4.0/node_modules/turbo-stream/dist/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createLineSplittingTransform = exports.Deferred = exports.TYPE_PREVIOUS_RESOLVED = exports.TYPE_URL = exports.TYPE_SYMBOL = exports.TYPE_SET = exports.TYPE_REGEXP = exports.TYPE_PROMISE = exports.TYPE_NULL_OBJECT = exports.TYPE_MAP = exports.TYPE_ERROR = exports.TYPE_DATE = exports.TYPE_BIGINT = exports.UNDEFINED = exports.POSITIVE_INFINITY = exports.NULL = exports.NEGATIVE_ZERO = exports.NEGATIVE_INFINITY = exports.NAN = exports.HOLE = void 0;
    exports.HOLE = -1;
    exports.NAN = -2;
    exports.NEGATIVE_INFINITY = -3;
    exports.NEGATIVE_ZERO = -4;
    exports.NULL = -5;
    exports.POSITIVE_INFINITY = -6;
    exports.UNDEFINED = -7;
    exports.TYPE_BIGINT = "B";
    exports.TYPE_DATE = "D";
    exports.TYPE_ERROR = "E";
    exports.TYPE_MAP = "M";
    exports.TYPE_NULL_OBJECT = "N";
    exports.TYPE_PROMISE = "P";
    exports.TYPE_REGEXP = "R";
    exports.TYPE_SET = "S";
    exports.TYPE_SYMBOL = "Y";
    exports.TYPE_URL = "U";
    exports.TYPE_PREVIOUS_RESOLVED = "Z";
    var Deferred = class {
      promise;
      resolve;
      reject;
      constructor() {
        this.promise = new Promise((resolve, reject) => {
          this.resolve = resolve;
          this.reject = reject;
        });
      }
    };
    exports.Deferred = Deferred;
    function createLineSplittingTransform() {
      const decoder = new TextDecoder();
      let leftover = "";
      return new TransformStream({
        transform(chunk, controller) {
          const str = decoder.decode(chunk, { stream: true });
          const parts = (leftover + str).split("\n");
          leftover = parts.pop() || "";
          for (const part of parts) {
            controller.enqueue(part);
          }
        },
        flush(controller) {
          if (leftover) {
            controller.enqueue(leftover);
          }
        }
      });
    }
    exports.createLineSplittingTransform = createLineSplittingTransform;
  }
});

// node_modules/.pnpm/turbo-stream@2.4.0/node_modules/turbo-stream/dist/flatten.js
var require_flatten = __commonJS({
  "node_modules/.pnpm/turbo-stream@2.4.0/node_modules/turbo-stream/dist/flatten.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.flatten = void 0;
    var utils_js_1 = require_utils();
    function flatten(input) {
      const { indices } = this;
      const existing = indices.get(input);
      if (existing)
        return [existing];
      if (input === void 0)
        return utils_js_1.UNDEFINED;
      if (input === null)
        return utils_js_1.NULL;
      if (Number.isNaN(input))
        return utils_js_1.NAN;
      if (input === Number.POSITIVE_INFINITY)
        return utils_js_1.POSITIVE_INFINITY;
      if (input === Number.NEGATIVE_INFINITY)
        return utils_js_1.NEGATIVE_INFINITY;
      if (input === 0 && 1 / input < 0)
        return utils_js_1.NEGATIVE_ZERO;
      const index = this.index++;
      indices.set(input, index);
      stringify.call(this, input, index);
      return index;
    }
    exports.flatten = flatten;
    function stringify(input, index) {
      const { deferred, plugins, postPlugins } = this;
      const str = this.stringified;
      const stack = [[input, index]];
      while (stack.length > 0) {
        const [input2, index2] = stack.pop();
        const partsForObj = (obj) => Object.keys(obj).map((k) => `"_${flatten.call(this, k)}":${flatten.call(this, obj[k])}`).join(",");
        let error = null;
        switch (typeof input2) {
          case "boolean":
          case "number":
          case "string":
            str[index2] = JSON.stringify(input2);
            break;
          case "bigint":
            str[index2] = `["${utils_js_1.TYPE_BIGINT}","${input2}"]`;
            break;
          case "symbol": {
            const keyFor = Symbol.keyFor(input2);
            if (!keyFor) {
              error = new Error("Cannot encode symbol unless created with Symbol.for()");
            } else {
              str[index2] = `["${utils_js_1.TYPE_SYMBOL}",${JSON.stringify(keyFor)}]`;
            }
            break;
          }
          case "object": {
            if (!input2) {
              str[index2] = `${utils_js_1.NULL}`;
              break;
            }
            const isArray = Array.isArray(input2);
            let pluginHandled = false;
            if (!isArray && plugins) {
              for (const plugin of plugins) {
                const pluginResult = plugin(input2);
                if (Array.isArray(pluginResult)) {
                  pluginHandled = true;
                  const [pluginIdentifier, ...rest] = pluginResult;
                  str[index2] = `[${JSON.stringify(pluginIdentifier)}`;
                  if (rest.length > 0) {
                    str[index2] += `,${rest.map((v) => flatten.call(this, v)).join(",")}`;
                  }
                  str[index2] += "]";
                  break;
                }
              }
            }
            if (!pluginHandled) {
              let result = isArray ? "[" : "{";
              if (isArray) {
                for (let i = 0; i < input2.length; i++)
                  result += (i ? "," : "") + (i in input2 ? flatten.call(this, input2[i]) : utils_js_1.HOLE);
                str[index2] = `${result}]`;
              } else if (input2 instanceof Date) {
                str[index2] = `["${utils_js_1.TYPE_DATE}",${input2.getTime()}]`;
              } else if (input2 instanceof URL) {
                str[index2] = `["${utils_js_1.TYPE_URL}",${JSON.stringify(input2.href)}]`;
              } else if (input2 instanceof RegExp) {
                str[index2] = `["${utils_js_1.TYPE_REGEXP}",${JSON.stringify(input2.source)},${JSON.stringify(input2.flags)}]`;
              } else if (input2 instanceof Set) {
                if (input2.size > 0) {
                  str[index2] = `["${utils_js_1.TYPE_SET}",${[...input2].map((val) => flatten.call(this, val)).join(",")}]`;
                } else {
                  str[index2] = `["${utils_js_1.TYPE_SET}"]`;
                }
              } else if (input2 instanceof Map) {
                if (input2.size > 0) {
                  str[index2] = `["${utils_js_1.TYPE_MAP}",${[...input2].flatMap(([k, v]) => [
                    flatten.call(this, k),
                    flatten.call(this, v)
                  ]).join(",")}]`;
                } else {
                  str[index2] = `["${utils_js_1.TYPE_MAP}"]`;
                }
              } else if (input2 instanceof Promise) {
                str[index2] = `["${utils_js_1.TYPE_PROMISE}",${index2}]`;
                deferred[index2] = input2;
              } else if (input2 instanceof Error) {
                str[index2] = `["${utils_js_1.TYPE_ERROR}",${JSON.stringify(input2.message)}`;
                if (input2.name !== "Error") {
                  str[index2] += `,${JSON.stringify(input2.name)}`;
                }
                str[index2] += "]";
              } else if (Object.getPrototypeOf(input2) === null) {
                str[index2] = `["${utils_js_1.TYPE_NULL_OBJECT}",{${partsForObj(input2)}}]`;
              } else if (isPlainObject(input2)) {
                str[index2] = `{${partsForObj(input2)}}`;
              } else {
                error = new Error("Cannot encode object with prototype");
              }
            }
            break;
          }
          default: {
            const isArray = Array.isArray(input2);
            let pluginHandled = false;
            if (!isArray && plugins) {
              for (const plugin of plugins) {
                const pluginResult = plugin(input2);
                if (Array.isArray(pluginResult)) {
                  pluginHandled = true;
                  const [pluginIdentifier, ...rest] = pluginResult;
                  str[index2] = `[${JSON.stringify(pluginIdentifier)}`;
                  if (rest.length > 0) {
                    str[index2] += `,${rest.map((v) => flatten.call(this, v)).join(",")}`;
                  }
                  str[index2] += "]";
                  break;
                }
              }
            }
            if (!pluginHandled) {
              error = new Error("Cannot encode function or unexpected type");
            }
          }
        }
        if (error) {
          let pluginHandled = false;
          if (postPlugins) {
            for (const plugin of postPlugins) {
              const pluginResult = plugin(input2);
              if (Array.isArray(pluginResult)) {
                pluginHandled = true;
                const [pluginIdentifier, ...rest] = pluginResult;
                str[index2] = `[${JSON.stringify(pluginIdentifier)}`;
                if (rest.length > 0) {
                  str[index2] += `,${rest.map((v) => flatten.call(this, v)).join(",")}`;
                }
                str[index2] += "]";
                break;
              }
            }
          }
          if (!pluginHandled) {
            throw error;
          }
        }
      }
    }
    var objectProtoNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
    function isPlainObject(thing) {
      const proto = Object.getPrototypeOf(thing);
      return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === objectProtoNames;
    }
  }
});

// node_modules/.pnpm/turbo-stream@2.4.0/node_modules/turbo-stream/dist/unflatten.js
var require_unflatten = __commonJS({
  "node_modules/.pnpm/turbo-stream@2.4.0/node_modules/turbo-stream/dist/unflatten.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.unflatten = void 0;
    var utils_js_1 = require_utils();
    var globalObj = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : void 0;
    function unflatten(parsed) {
      const { hydrated, values } = this;
      if (typeof parsed === "number")
        return hydrate.call(this, parsed);
      if (!Array.isArray(parsed) || !parsed.length)
        throw new SyntaxError();
      const startIndex = values.length;
      for (const value of parsed) {
        values.push(value);
      }
      hydrated.length = values.length;
      return hydrate.call(this, startIndex);
    }
    exports.unflatten = unflatten;
    function hydrate(index) {
      const { hydrated, values, deferred, plugins } = this;
      let result;
      const stack = [
        [
          index,
          (v) => {
            result = v;
          }
        ]
      ];
      let postRun = [];
      while (stack.length > 0) {
        const [index2, set] = stack.pop();
        switch (index2) {
          case utils_js_1.UNDEFINED:
            set(void 0);
            continue;
          case utils_js_1.NULL:
            set(null);
            continue;
          case utils_js_1.NAN:
            set(NaN);
            continue;
          case utils_js_1.POSITIVE_INFINITY:
            set(Infinity);
            continue;
          case utils_js_1.NEGATIVE_INFINITY:
            set(-Infinity);
            continue;
          case utils_js_1.NEGATIVE_ZERO:
            set(-0);
            continue;
        }
        if (hydrated[index2]) {
          set(hydrated[index2]);
          continue;
        }
        const value = values[index2];
        if (!value || typeof value !== "object") {
          hydrated[index2] = value;
          set(value);
          continue;
        }
        if (Array.isArray(value)) {
          if (typeof value[0] === "string") {
            const [type, b, c] = value;
            switch (type) {
              case utils_js_1.TYPE_DATE:
                set(hydrated[index2] = new Date(b));
                continue;
              case utils_js_1.TYPE_URL:
                set(hydrated[index2] = new URL(b));
                continue;
              case utils_js_1.TYPE_BIGINT:
                set(hydrated[index2] = BigInt(b));
                continue;
              case utils_js_1.TYPE_REGEXP:
                set(hydrated[index2] = new RegExp(b, c));
                continue;
              case utils_js_1.TYPE_SYMBOL:
                set(hydrated[index2] = Symbol.for(b));
                continue;
              case utils_js_1.TYPE_SET:
                const newSet = /* @__PURE__ */ new Set();
                hydrated[index2] = newSet;
                for (let i = 1; i < value.length; i++)
                  stack.push([
                    value[i],
                    (v) => {
                      newSet.add(v);
                    }
                  ]);
                set(newSet);
                continue;
              case utils_js_1.TYPE_MAP:
                const map = /* @__PURE__ */ new Map();
                hydrated[index2] = map;
                for (let i = 1; i < value.length; i += 2) {
                  const r = [];
                  stack.push([
                    value[i + 1],
                    (v) => {
                      r[1] = v;
                    }
                  ]);
                  stack.push([
                    value[i],
                    (k) => {
                      r[0] = k;
                    }
                  ]);
                  postRun.push(() => {
                    map.set(r[0], r[1]);
                  });
                }
                set(map);
                continue;
              case utils_js_1.TYPE_NULL_OBJECT:
                const obj = /* @__PURE__ */ Object.create(null);
                hydrated[index2] = obj;
                for (const key of Object.keys(b).reverse()) {
                  const r = [];
                  stack.push([
                    b[key],
                    (v) => {
                      r[1] = v;
                    }
                  ]);
                  stack.push([
                    Number(key.slice(1)),
                    (k) => {
                      r[0] = k;
                    }
                  ]);
                  postRun.push(() => {
                    obj[r[0]] = r[1];
                  });
                }
                set(obj);
                continue;
              case utils_js_1.TYPE_PROMISE:
                if (hydrated[b]) {
                  set(hydrated[index2] = hydrated[b]);
                } else {
                  const d = new utils_js_1.Deferred();
                  deferred[b] = d;
                  set(hydrated[index2] = d.promise);
                }
                continue;
              case utils_js_1.TYPE_ERROR:
                const [, message, errorType] = value;
                let error = errorType && globalObj && globalObj[errorType] ? new globalObj[errorType](message) : new Error(message);
                hydrated[index2] = error;
                set(error);
                continue;
              case utils_js_1.TYPE_PREVIOUS_RESOLVED:
                set(hydrated[index2] = hydrated[b]);
                continue;
              default:
                if (Array.isArray(plugins)) {
                  const r = [];
                  const vals = value.slice(1);
                  for (let i = 0; i < vals.length; i++) {
                    const v = vals[i];
                    stack.push([
                      v,
                      (v2) => {
                        r[i] = v2;
                      }
                    ]);
                  }
                  postRun.push(() => {
                    for (const plugin of plugins) {
                      const result2 = plugin(value[0], ...r);
                      if (result2) {
                        set(hydrated[index2] = result2.value);
                        return;
                      }
                    }
                    throw new SyntaxError();
                  });
                  continue;
                }
                throw new SyntaxError();
            }
          } else {
            const array = [];
            hydrated[index2] = array;
            for (let i = 0; i < value.length; i++) {
              const n = value[i];
              if (n !== utils_js_1.HOLE) {
                stack.push([
                  n,
                  (v) => {
                    array[i] = v;
                  }
                ]);
              }
            }
            set(array);
            continue;
          }
        } else {
          const object = {};
          hydrated[index2] = object;
          for (const key of Object.keys(value).reverse()) {
            const r = [];
            stack.push([
              value[key],
              (v) => {
                r[1] = v;
              }
            ]);
            stack.push([
              Number(key.slice(1)),
              (k) => {
                r[0] = k;
              }
            ]);
            postRun.push(() => {
              object[r[0]] = r[1];
            });
          }
          set(object);
          continue;
        }
      }
      while (postRun.length > 0) {
        postRun.pop()();
      }
      return result;
    }
  }
});

// node_modules/.pnpm/turbo-stream@2.4.0/node_modules/turbo-stream/dist/turbo-stream.js
var require_turbo_stream = __commonJS({
  "node_modules/.pnpm/turbo-stream@2.4.0/node_modules/turbo-stream/dist/turbo-stream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.encode = exports.decode = void 0;
    var flatten_js_1 = require_flatten();
    var unflatten_js_1 = require_unflatten();
    var utils_js_1 = require_utils();
    async function decode(readable, options) {
      const { plugins } = options ?? {};
      const done = new utils_js_1.Deferred();
      const reader = readable.pipeThrough((0, utils_js_1.createLineSplittingTransform)()).getReader();
      const decoder = {
        values: [],
        hydrated: [],
        deferred: {},
        plugins
      };
      const decoded = await decodeInitial.call(decoder, reader);
      let donePromise = done.promise;
      if (decoded.done) {
        done.resolve();
      } else {
        donePromise = decodeDeferred.call(decoder, reader).then(done.resolve).catch((reason) => {
          for (const deferred of Object.values(decoder.deferred)) {
            deferred.reject(reason);
          }
          done.reject(reason);
        });
      }
      return {
        done: donePromise.then(() => reader.closed),
        value: decoded.value
      };
    }
    exports.decode = decode;
    async function decodeInitial(reader) {
      const read = await reader.read();
      if (!read.value) {
        throw new SyntaxError();
      }
      let line;
      try {
        line = JSON.parse(read.value);
      } catch (reason) {
        throw new SyntaxError();
      }
      return {
        done: read.done,
        value: unflatten_js_1.unflatten.call(this, line)
      };
    }
    async function decodeDeferred(reader) {
      let read = await reader.read();
      while (!read.done) {
        if (!read.value)
          continue;
        const line = read.value;
        switch (line[0]) {
          case utils_js_1.TYPE_PROMISE: {
            const colonIndex = line.indexOf(":");
            const deferredId = Number(line.slice(1, colonIndex));
            const deferred = this.deferred[deferredId];
            if (!deferred) {
              throw new Error(`Deferred ID ${deferredId} not found in stream`);
            }
            const lineData = line.slice(colonIndex + 1);
            let jsonLine;
            try {
              jsonLine = JSON.parse(lineData);
            } catch (reason) {
              throw new SyntaxError();
            }
            const value = unflatten_js_1.unflatten.call(this, jsonLine);
            deferred.resolve(value);
            break;
          }
          case utils_js_1.TYPE_ERROR: {
            const colonIndex = line.indexOf(":");
            const deferredId = Number(line.slice(1, colonIndex));
            const deferred = this.deferred[deferredId];
            if (!deferred) {
              throw new Error(`Deferred ID ${deferredId} not found in stream`);
            }
            const lineData = line.slice(colonIndex + 1);
            let jsonLine;
            try {
              jsonLine = JSON.parse(lineData);
            } catch (reason) {
              throw new SyntaxError();
            }
            const value = unflatten_js_1.unflatten.call(this, jsonLine);
            deferred.reject(value);
            break;
          }
          default:
            throw new SyntaxError();
        }
        read = await reader.read();
      }
    }
    function encode(input, options) {
      const { plugins, postPlugins, signal } = options ?? {};
      const encoder = {
        deferred: {},
        index: 0,
        indices: /* @__PURE__ */ new Map(),
        stringified: [],
        plugins,
        postPlugins,
        signal
      };
      const textEncoder = new TextEncoder();
      let lastSentIndex = 0;
      const readable = new ReadableStream({
        async start(controller) {
          const id = flatten_js_1.flatten.call(encoder, input);
          if (Array.isArray(id)) {
            throw new Error("This should never happen");
          }
          if (id < 0) {
            controller.enqueue(textEncoder.encode(`${id}
`));
          } else {
            controller.enqueue(textEncoder.encode(`[${encoder.stringified.join(",")}]
`));
            lastSentIndex = encoder.stringified.length - 1;
          }
          const seenPromises = /* @__PURE__ */ new WeakSet();
          while (Object.keys(encoder.deferred).length > 0) {
            for (const [deferredId, deferred] of Object.entries(encoder.deferred)) {
              if (seenPromises.has(deferred))
                continue;
              seenPromises.add(encoder.deferred[Number(deferredId)] = raceSignal(deferred, encoder.signal).then((resolved) => {
                const id2 = flatten_js_1.flatten.call(encoder, resolved);
                if (Array.isArray(id2)) {
                  controller.enqueue(textEncoder.encode(`${utils_js_1.TYPE_PROMISE}${deferredId}:[["${utils_js_1.TYPE_PREVIOUS_RESOLVED}",${id2[0]}]]
`));
                  encoder.index++;
                  lastSentIndex++;
                } else if (id2 < 0) {
                  controller.enqueue(textEncoder.encode(`${utils_js_1.TYPE_PROMISE}${deferredId}:${id2}
`));
                } else {
                  const values = encoder.stringified.slice(lastSentIndex + 1).join(",");
                  controller.enqueue(textEncoder.encode(`${utils_js_1.TYPE_PROMISE}${deferredId}:[${values}]
`));
                  lastSentIndex = encoder.stringified.length - 1;
                }
              }, (reason) => {
                if (!reason || typeof reason !== "object" || !(reason instanceof Error)) {
                  reason = new Error("An unknown error occurred");
                }
                const id2 = flatten_js_1.flatten.call(encoder, reason);
                if (Array.isArray(id2)) {
                  controller.enqueue(textEncoder.encode(`${utils_js_1.TYPE_ERROR}${deferredId}:[["${utils_js_1.TYPE_PREVIOUS_RESOLVED}",${id2[0]}]]
`));
                  encoder.index++;
                  lastSentIndex++;
                } else if (id2 < 0) {
                  controller.enqueue(textEncoder.encode(`${utils_js_1.TYPE_ERROR}${deferredId}:${id2}
`));
                } else {
                  const values = encoder.stringified.slice(lastSentIndex + 1).join(",");
                  controller.enqueue(textEncoder.encode(`${utils_js_1.TYPE_ERROR}${deferredId}:[${values}]
`));
                  lastSentIndex = encoder.stringified.length - 1;
                }
              }).finally(() => {
                delete encoder.deferred[Number(deferredId)];
              }));
            }
            await Promise.race(Object.values(encoder.deferred));
          }
          await Promise.all(Object.values(encoder.deferred));
          controller.close();
        }
      });
      return readable;
    }
    exports.encode = encode;
    function raceSignal(promise, signal) {
      if (!signal)
        return promise;
      if (signal.aborted)
        return Promise.reject(signal.reason || new Error("Signal was aborted."));
      const abort = new Promise((resolve, reject) => {
        signal.addEventListener("abort", (event) => {
          reject(signal.reason || new Error("Signal was aborted."));
        });
        promise.then(resolve).catch(reject);
      });
      abort.catch(() => {
      });
      return Promise.race([abort, promise]);
    }
  }
});

// node_modules/.pnpm/cookie@1.0.2/node_modules/cookie/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/cookie@1.0.2/node_modules/cookie/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parse = parse;
    exports.serialize = serialize;
    var cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
    var cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
    var domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
    var pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
    var __toString = Object.prototype.toString;
    var NullObject = /* @__PURE__ */ (() => {
      const C = function() {
      };
      C.prototype = /* @__PURE__ */ Object.create(null);
      return C;
    })();
    function parse(str, options) {
      const obj = new NullObject();
      const len = str.length;
      if (len < 2)
        return obj;
      const dec = options?.decode || decode;
      let index = 0;
      do {
        const eqIdx = str.indexOf("=", index);
        if (eqIdx === -1)
          break;
        const colonIdx = str.indexOf(";", index);
        const endIdx = colonIdx === -1 ? len : colonIdx;
        if (eqIdx > endIdx) {
          index = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        const keyStartIdx = startIndex(str, index, eqIdx);
        const keyEndIdx = endIndex(str, eqIdx, keyStartIdx);
        const key = str.slice(keyStartIdx, keyEndIdx);
        if (obj[key] === void 0) {
          let valStartIdx = startIndex(str, eqIdx + 1, endIdx);
          let valEndIdx = endIndex(str, endIdx, valStartIdx);
          const value = dec(str.slice(valStartIdx, valEndIdx));
          obj[key] = value;
        }
        index = endIdx + 1;
      } while (index < len);
      return obj;
    }
    function startIndex(str, index, max) {
      do {
        const code = str.charCodeAt(index);
        if (code !== 32 && code !== 9)
          return index;
      } while (++index < max);
      return max;
    }
    function endIndex(str, index, min) {
      while (index > min) {
        const code = str.charCodeAt(--index);
        if (code !== 32 && code !== 9)
          return index + 1;
      }
      return min;
    }
    function serialize(name, val, options) {
      const enc = options?.encode || encodeURIComponent;
      if (!cookieNameRegExp.test(name)) {
        throw new TypeError(`argument name is invalid: ${name}`);
      }
      const value = enc(val);
      if (!cookieValueRegExp.test(value)) {
        throw new TypeError(`argument val is invalid: ${val}`);
      }
      let str = name + "=" + value;
      if (!options)
        return str;
      if (options.maxAge !== void 0) {
        if (!Number.isInteger(options.maxAge)) {
          throw new TypeError(`option maxAge is invalid: ${options.maxAge}`);
        }
        str += "; Max-Age=" + options.maxAge;
      }
      if (options.domain) {
        if (!domainValueRegExp.test(options.domain)) {
          throw new TypeError(`option domain is invalid: ${options.domain}`);
        }
        str += "; Domain=" + options.domain;
      }
      if (options.path) {
        if (!pathValueRegExp.test(options.path)) {
          throw new TypeError(`option path is invalid: ${options.path}`);
        }
        str += "; Path=" + options.path;
      }
      if (options.expires) {
        if (!isDate(options.expires) || !Number.isFinite(options.expires.valueOf())) {
          throw new TypeError(`option expires is invalid: ${options.expires}`);
        }
        str += "; Expires=" + options.expires.toUTCString();
      }
      if (options.httpOnly) {
        str += "; HttpOnly";
      }
      if (options.secure) {
        str += "; Secure";
      }
      if (options.partitioned) {
        str += "; Partitioned";
      }
      if (options.priority) {
        const priority = typeof options.priority === "string" ? options.priority.toLowerCase() : void 0;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError(`option priority is invalid: ${options.priority}`);
        }
      }
      if (options.sameSite) {
        const sameSite = typeof options.sameSite === "string" ? options.sameSite.toLowerCase() : options.sameSite;
        switch (sameSite) {
          case true:
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError(`option sameSite is invalid: ${options.sameSite}`);
        }
      }
      return str;
    }
    function decode(str) {
      if (str.indexOf("%") === -1)
        return str;
      try {
        return decodeURIComponent(str);
      } catch (e) {
        return str;
      }
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]";
    }
  }
});

// node_modules/.pnpm/set-cookie-parser@2.7.1/node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/.pnpm/set-cookie-parser@2.7.1/node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString(setCookieValue, options) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name = parsed.name;
      var value = parsed.value;
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      try {
        value = options.decodeValues ? decodeURIComponent(value) : value;
      } catch (e) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e
        );
      }
      var cookie = {
        name,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key === "expires") {
          cookie.expires = new Date(value2);
        } else if (key === "max-age") {
          cookie.maxAge = parseInt(value2, 10);
        } else if (key === "secure") {
          cookie.secure = true;
        } else if (key === "httponly") {
          cookie.httpOnly = true;
        } else if (key === "samesite") {
          cookie.sameSite = value2;
        } else if (key === "partitioned") {
          cookie.partitioned = true;
        } else {
          cookie[key] = value2;
        }
      });
      return cookie;
    }
    function parseNameValuePair(nameValuePairStr) {
      var name = "";
      var value = "";
      var nameValueArr = nameValuePairStr.split("=");
      if (nameValueArr.length > 1) {
        name = nameValueArr.shift();
        value = nameValueArr.join("=");
      } else {
        value = nameValuePairStr;
      }
      return { name, value };
    }
    function parse(input, options) {
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!input) {
        if (!options.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers) {
        if (typeof input.headers.getSetCookie === "function") {
          input = input.headers.getSetCookie();
        } else if (input.headers["set-cookie"]) {
          input = input.headers["set-cookie"];
        } else {
          var sch = input.headers[Object.keys(input.headers).find(function(key) {
            return key.toLowerCase() === "set-cookie";
          })];
          if (!sch && input.headers.cookie && !options.silent) {
            console.warn(
              "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
            );
          }
          input = sch;
        }
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      if (!options.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString(str, options);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString(str, options);
          cookies2[cookie.name] = cookie;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module.exports = parse;
    module.exports.parse = parse;
    module.exports.parseString = parseString;
    module.exports.splitCookiesString = splitCookiesString;
  }
});

// node_modules/.pnpm/react-router@7.0.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-router/dist/development/index.js
var require_development = __commonJS({
  "node_modules/.pnpm/react-router@7.0.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-router/dist/development/index.js"(exports, module) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var react_router_exports = {};
    __export2(react_router_exports, {
      Await: () => Await,
      BrowserRouter: () => BrowserRouter,
      Form: () => Form,
      HashRouter: () => HashRouter,
      IDLE_BLOCKER: () => IDLE_BLOCKER,
      IDLE_FETCHER: () => IDLE_FETCHER,
      IDLE_NAVIGATION: () => IDLE_NAVIGATION,
      Link: () => Link,
      Links: () => Links2,
      MemoryRouter: () => MemoryRouter,
      Meta: () => Meta2,
      NavLink: () => NavLink,
      Navigate: () => Navigate,
      NavigationType: () => Action,
      Outlet: () => Outlet2,
      PrefetchPageLinks: () => PrefetchPageLinks,
      Route: () => Route,
      Router: () => Router,
      RouterProvider: () => RouterProvider,
      Routes: () => Routes,
      Scripts: () => Scripts2,
      ScrollRestoration: () => ScrollRestoration2,
      ServerRouter: () => ServerRouter2,
      StaticRouter: () => StaticRouter,
      StaticRouterProvider: () => StaticRouterProvider,
      UNSAFE_DataRouterContext: () => DataRouterContext,
      UNSAFE_DataRouterStateContext: () => DataRouterStateContext,
      UNSAFE_ErrorResponseImpl: () => ErrorResponseImpl,
      UNSAFE_FetchersContext: () => FetchersContext,
      UNSAFE_FrameworkContext: () => FrameworkContext,
      UNSAFE_LocationContext: () => LocationContext,
      UNSAFE_NavigationContext: () => NavigationContext,
      UNSAFE_RemixErrorBoundary: () => RemixErrorBoundary,
      UNSAFE_RouteContext: () => RouteContext,
      UNSAFE_ServerMode: () => ServerMode,
      UNSAFE_SingleFetchRedirectSymbol: () => SingleFetchRedirectSymbol,
      UNSAFE_ViewTransitionContext: () => ViewTransitionContext,
      UNSAFE_createBrowserHistory: () => createBrowserHistory,
      UNSAFE_createClientRoutes: () => createClientRoutes,
      UNSAFE_createClientRoutesWithHMRRevalidationOptOut: () => createClientRoutesWithHMRRevalidationOptOut,
      UNSAFE_createRouter: () => createRouter,
      UNSAFE_decodeViaTurboStream: () => decodeViaTurboStream,
      UNSAFE_deserializeErrors: () => deserializeErrors2,
      UNSAFE_getPatchRoutesOnNavigationFunction: () => getPatchRoutesOnNavigationFunction,
      UNSAFE_getSingleFetchDataStrategy: () => getSingleFetchDataStrategy,
      UNSAFE_invariant: () => invariant,
      UNSAFE_mapRouteProperties: () => mapRouteProperties,
      UNSAFE_shouldHydrateRouteLoader: () => shouldHydrateRouteLoader,
      UNSAFE_useFogOFWarDiscovery: () => useFogOFWarDiscovery,
      UNSAFE_useScrollRestoration: () => useScrollRestoration,
      createBrowserRouter: () => createBrowserRouter,
      createCookie: () => createCookie,
      createCookieSessionStorage: () => createCookieSessionStorage,
      createHashRouter: () => createHashRouter,
      createMemoryRouter: () => createMemoryRouter,
      createMemorySessionStorage: () => createMemorySessionStorage,
      createPath: () => createPath,
      createRequestHandler: () => createRequestHandler2,
      createRoutesFromChildren: () => createRoutesFromChildren,
      createRoutesFromElements: () => createRoutesFromElements,
      createRoutesStub: () => createRoutesStub,
      createSearchParams: () => createSearchParams,
      createSession: () => createSession,
      createSessionStorage: () => createSessionStorage,
      createStaticHandler: () => createStaticHandler2,
      createStaticRouter: () => createStaticRouter,
      data: () => data,
      generatePath: () => generatePath,
      isCookie: () => isCookie,
      isRouteErrorResponse: () => isRouteErrorResponse2,
      isSession: () => isSession,
      matchPath: () => matchPath,
      matchRoutes: () => matchRoutes,
      parsePath: () => parsePath,
      redirect: () => redirect,
      redirectDocument: () => redirectDocument,
      renderMatches: () => renderMatches,
      replace: () => replace,
      resolvePath: () => resolvePath,
      unstable_HistoryRouter: () => HistoryRouter,
      unstable_setDevServerHooks: () => setDevServerHooks,
      unstable_usePrompt: () => usePrompt,
      useActionData: () => useActionData2,
      useAsyncError: () => useAsyncError,
      useAsyncValue: () => useAsyncValue,
      useBeforeUnload: () => useBeforeUnload,
      useBlocker: () => useBlocker,
      useFetcher: () => useFetcher,
      useFetchers: () => useFetchers,
      useFormAction: () => useFormAction,
      useHref: () => useHref,
      useInRouterContext: () => useInRouterContext,
      useLinkClickHandler: () => useLinkClickHandler,
      useLoaderData: () => useLoaderData2,
      useLocation: () => useLocation,
      useMatch: () => useMatch,
      useMatches: () => useMatches2,
      useNavigate: () => useNavigate,
      useNavigation: () => useNavigation,
      useNavigationType: () => useNavigationType,
      useOutlet: () => useOutlet,
      useOutletContext: () => useOutletContext,
      useParams: () => useParams2,
      useResolvedPath: () => useResolvedPath,
      useRevalidator: () => useRevalidator,
      useRouteError: () => useRouteError2,
      useRouteLoaderData: () => useRouteLoaderData,
      useRoutes: () => useRoutes,
      useSearchParams: () => useSearchParams,
      useSubmit: () => useSubmit,
      useViewTransitionState: () => useViewTransitionState
    });
    module.exports = __toCommonJS(react_router_exports);
    var Action = /* @__PURE__ */ ((Action2) => {
      Action2["Pop"] = "POP";
      Action2["Push"] = "PUSH";
      Action2["Replace"] = "REPLACE";
      return Action2;
    })(Action || {});
    var PopStateEventType = "popstate";
    function createMemoryHistory(options = {}) {
      let { initialEntries = ["/"], initialIndex, v5Compat = false } = options;
      let entries;
      entries = initialEntries.map(
        (entry2, index2) => createMemoryLocation(
          entry2,
          typeof entry2 === "string" ? null : entry2.state,
          index2 === 0 ? "default" : void 0
        )
      );
      let index = clampIndex(
        initialIndex == null ? entries.length - 1 : initialIndex
      );
      let action = "POP";
      let listener = null;
      function clampIndex(n) {
        return Math.min(Math.max(n, 0), entries.length - 1);
      }
      function getCurrentLocation() {
        return entries[index];
      }
      function createMemoryLocation(to, state = null, key) {
        let location = createLocation(
          entries ? getCurrentLocation().pathname : "/",
          to,
          state,
          key
        );
        warning(
          location.pathname.charAt(0) === "/",
          `relative pathnames are not supported in memory history: ${JSON.stringify(
            to
          )}`
        );
        return location;
      }
      function createHref2(to) {
        return typeof to === "string" ? to : createPath(to);
      }
      let history = {
        get index() {
          return index;
        },
        get action() {
          return action;
        },
        get location() {
          return getCurrentLocation();
        },
        createHref: createHref2,
        createURL(to) {
          return new URL(createHref2(to), "http://localhost");
        },
        encodeLocation(to) {
          let path = typeof to === "string" ? parsePath(to) : to;
          return {
            pathname: path.pathname || "",
            search: path.search || "",
            hash: path.hash || ""
          };
        },
        push(to, state) {
          action = "PUSH";
          let nextLocation = createMemoryLocation(to, state);
          index += 1;
          entries.splice(index, entries.length, nextLocation);
          if (v5Compat && listener) {
            listener({ action, location: nextLocation, delta: 1 });
          }
        },
        replace(to, state) {
          action = "REPLACE";
          let nextLocation = createMemoryLocation(to, state);
          entries[index] = nextLocation;
          if (v5Compat && listener) {
            listener({ action, location: nextLocation, delta: 0 });
          }
        },
        go(delta) {
          action = "POP";
          let nextIndex = clampIndex(index + delta);
          let nextLocation = entries[nextIndex];
          index = nextIndex;
          if (listener) {
            listener({ action, location: nextLocation, delta });
          }
        },
        listen(fn) {
          listener = fn;
          return () => {
            listener = null;
          };
        }
      };
      return history;
    }
    function createBrowserHistory(options = {}) {
      function createBrowserLocation(window2, globalHistory) {
        let { pathname, search, hash } = window2.location;
        return createLocation(
          "",
          { pathname, search, hash },
          // state defaults to `null` because `window.history.state` does
          globalHistory.state && globalHistory.state.usr || null,
          globalHistory.state && globalHistory.state.key || "default"
        );
      }
      function createBrowserHref(window2, to) {
        return typeof to === "string" ? to : createPath(to);
      }
      return getUrlBasedHistory(
        createBrowserLocation,
        createBrowserHref,
        null,
        options
      );
    }
    function createHashHistory(options = {}) {
      function createHashLocation(window2, globalHistory) {
        let {
          pathname = "/",
          search = "",
          hash = ""
        } = parsePath(window2.location.hash.substring(1));
        if (!pathname.startsWith("/") && !pathname.startsWith(".")) {
          pathname = "/" + pathname;
        }
        return createLocation(
          "",
          { pathname, search, hash },
          // state defaults to `null` because `window.history.state` does
          globalHistory.state && globalHistory.state.usr || null,
          globalHistory.state && globalHistory.state.key || "default"
        );
      }
      function createHashHref(window2, to) {
        let base = window2.document.querySelector("base");
        let href = "";
        if (base && base.getAttribute("href")) {
          let url = window2.location.href;
          let hashIndex = url.indexOf("#");
          href = hashIndex === -1 ? url : url.slice(0, hashIndex);
        }
        return href + "#" + (typeof to === "string" ? to : createPath(to));
      }
      function validateHashLocation(location, to) {
        warning(
          location.pathname.charAt(0) === "/",
          `relative pathnames are not supported in hash history.push(${JSON.stringify(
            to
          )})`
        );
      }
      return getUrlBasedHistory(
        createHashLocation,
        createHashHref,
        validateHashLocation,
        options
      );
    }
    function invariant(value, message) {
      if (value === false || value === null || typeof value === "undefined") {
        throw new Error(message);
      }
    }
    function warning(cond, message) {
      if (!cond) {
        if (typeof console !== "undefined") console.warn(message);
        try {
          throw new Error(message);
        } catch (e) {
        }
      }
    }
    function createKey() {
      return Math.random().toString(36).substring(2, 10);
    }
    function getHistoryState(location, index) {
      return {
        usr: location.state,
        key: location.key,
        idx: index
      };
    }
    function createLocation(current, to, state = null, key) {
      let location = {
        pathname: typeof current === "string" ? current : current.pathname,
        search: "",
        hash: "",
        ...typeof to === "string" ? parsePath(to) : to,
        state,
        // TODO: This could be cleaned up.  push/replace should probably just take
        // full Locations now and avoid the need to run through this flow at all
        // But that's a pretty big refactor to the current test suite so going to
        // keep as is for the time being and just let any incoming keys take precedence
        key: to && to.key || key || createKey()
      };
      return location;
    }
    function createPath({
      pathname = "/",
      search = "",
      hash = ""
    }) {
      if (search && search !== "?")
        pathname += search.charAt(0) === "?" ? search : "?" + search;
      if (hash && hash !== "#")
        pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
      return pathname;
    }
    function parsePath(path) {
      let parsedPath = {};
      if (path) {
        let hashIndex = path.indexOf("#");
        if (hashIndex >= 0) {
          parsedPath.hash = path.substring(hashIndex);
          path = path.substring(0, hashIndex);
        }
        let searchIndex = path.indexOf("?");
        if (searchIndex >= 0) {
          parsedPath.search = path.substring(searchIndex);
          path = path.substring(0, searchIndex);
        }
        if (path) {
          parsedPath.pathname = path;
        }
      }
      return parsedPath;
    }
    function getUrlBasedHistory(getLocation, createHref2, validateLocation, options = {}) {
      let { window: window2 = document.defaultView, v5Compat = false } = options;
      let globalHistory = window2.history;
      let action = "POP";
      let listener = null;
      let index = getIndex();
      if (index == null) {
        index = 0;
        globalHistory.replaceState({ ...globalHistory.state, idx: index }, "");
      }
      function getIndex() {
        let state = globalHistory.state || { idx: null };
        return state.idx;
      }
      function handlePop() {
        action = "POP";
        let nextIndex = getIndex();
        let delta = nextIndex == null ? null : nextIndex - index;
        index = nextIndex;
        if (listener) {
          listener({ action, location: history.location, delta });
        }
      }
      function push(to, state) {
        action = "PUSH";
        let location = createLocation(history.location, to, state);
        if (validateLocation) validateLocation(location, to);
        index = getIndex() + 1;
        let historyState = getHistoryState(location, index);
        let url = history.createHref(location);
        try {
          globalHistory.pushState(historyState, "", url);
        } catch (error) {
          if (error instanceof DOMException && error.name === "DataCloneError") {
            throw error;
          }
          window2.location.assign(url);
        }
        if (v5Compat && listener) {
          listener({ action, location: history.location, delta: 1 });
        }
      }
      function replace2(to, state) {
        action = "REPLACE";
        let location = createLocation(history.location, to, state);
        if (validateLocation) validateLocation(location, to);
        index = getIndex();
        let historyState = getHistoryState(location, index);
        let url = history.createHref(location);
        globalHistory.replaceState(historyState, "", url);
        if (v5Compat && listener) {
          listener({ action, location: history.location, delta: 0 });
        }
      }
      function createURL(to) {
        let base = window2.location.origin !== "null" ? window2.location.origin : window2.location.href;
        let href = typeof to === "string" ? to : createPath(to);
        href = href.replace(/ $/, "%20");
        invariant(
          base,
          `No window.location.(origin|href) available to create URL for href: ${href}`
        );
        return new URL(href, base);
      }
      let history = {
        get action() {
          return action;
        },
        get location() {
          return getLocation(window2, globalHistory);
        },
        listen(fn) {
          if (listener) {
            throw new Error("A history only accepts one active listener");
          }
          window2.addEventListener(PopStateEventType, handlePop);
          listener = fn;
          return () => {
            window2.removeEventListener(PopStateEventType, handlePop);
            listener = null;
          };
        },
        createHref(to) {
          return createHref2(window2, to);
        },
        createURL,
        encodeLocation(to) {
          let url = createURL(to);
          return {
            pathname: url.pathname,
            search: url.search,
            hash: url.hash
          };
        },
        push,
        replace: replace2,
        go(n) {
          return globalHistory.go(n);
        }
      };
      return history;
    }
    var immutableRouteKeys = /* @__PURE__ */ new Set([
      "lazy",
      "caseSensitive",
      "path",
      "id",
      "index",
      "children"
    ]);
    function isIndexRoute(route) {
      return route.index === true;
    }
    function convertRoutesToDataRoutes(routes2, mapRouteProperties2, parentPath = [], manifest = {}) {
      return routes2.map((route, index) => {
        let treePath = [...parentPath, String(index)];
        let id = typeof route.id === "string" ? route.id : treePath.join("-");
        invariant(
          route.index !== true || !route.children,
          `Cannot specify children on an index route`
        );
        invariant(
          !manifest[id],
          `Found a route id collision on id "${id}".  Route id's must be globally unique within Data Router usages`
        );
        if (isIndexRoute(route)) {
          let indexRoute = {
            ...route,
            ...mapRouteProperties2(route),
            id
          };
          manifest[id] = indexRoute;
          return indexRoute;
        } else {
          let pathOrLayoutRoute = {
            ...route,
            ...mapRouteProperties2(route),
            id,
            children: void 0
          };
          manifest[id] = pathOrLayoutRoute;
          if (route.children) {
            pathOrLayoutRoute.children = convertRoutesToDataRoutes(
              route.children,
              mapRouteProperties2,
              treePath,
              manifest
            );
          }
          return pathOrLayoutRoute;
        }
      });
    }
    function matchRoutes(routes2, locationArg, basename2 = "/") {
      return matchRoutesImpl(routes2, locationArg, basename2, false);
    }
    function matchRoutesImpl(routes2, locationArg, basename2, allowPartial) {
      let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
      let pathname = stripBasename(location.pathname || "/", basename2);
      if (pathname == null) {
        return null;
      }
      let branches = flattenRoutes(routes2);
      rankRouteBranches(branches);
      let matches = null;
      for (let i = 0; matches == null && i < branches.length; ++i) {
        let decoded = decodePath(pathname);
        matches = matchRouteBranch(
          branches[i],
          decoded,
          allowPartial
        );
      }
      return matches;
    }
    function convertRouteMatchToUiMatch(match, loaderData) {
      let { route, pathname, params } = match;
      return {
        id: route.id,
        pathname,
        params,
        data: loaderData[route.id],
        handle: route.handle
      };
    }
    function flattenRoutes(routes2, branches = [], parentsMeta = [], parentPath = "") {
      let flattenRoute = (route, index, relativePath) => {
        let meta2 = {
          relativePath: relativePath === void 0 ? route.path || "" : relativePath,
          caseSensitive: route.caseSensitive === true,
          childrenIndex: index,
          route
        };
        if (meta2.relativePath.startsWith("/")) {
          invariant(
            meta2.relativePath.startsWith(parentPath),
            `Absolute route path "${meta2.relativePath}" nested under path "${parentPath}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
          );
          meta2.relativePath = meta2.relativePath.slice(parentPath.length);
        }
        let path = joinPaths([parentPath, meta2.relativePath]);
        let routesMeta = parentsMeta.concat(meta2);
        if (route.children && route.children.length > 0) {
          invariant(
            // Our types know better, but runtime JS may not!
            // @ts-expect-error
            route.index !== true,
            `Index routes must not have child routes. Please remove all child routes from route path "${path}".`
          );
          flattenRoutes(route.children, branches, routesMeta, path);
        }
        if (route.path == null && !route.index) {
          return;
        }
        branches.push({
          path,
          score: computeScore(path, route.index),
          routesMeta
        });
      };
      routes2.forEach((route, index) => {
        if (route.path === "" || !route.path?.includes("?")) {
          flattenRoute(route, index);
        } else {
          for (let exploded of explodeOptionalSegments(route.path)) {
            flattenRoute(route, index, exploded);
          }
        }
      });
      return branches;
    }
    function explodeOptionalSegments(path) {
      let segments = path.split("/");
      if (segments.length === 0) return [];
      let [first, ...rest] = segments;
      let isOptional = first.endsWith("?");
      let required = first.replace(/\?$/, "");
      if (rest.length === 0) {
        return isOptional ? [required, ""] : [required];
      }
      let restExploded = explodeOptionalSegments(rest.join("/"));
      let result = [];
      result.push(
        ...restExploded.map(
          (subpath) => subpath === "" ? required : [required, subpath].join("/")
        )
      );
      if (isOptional) {
        result.push(...restExploded);
      }
      return result.map(
        (exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded
      );
    }
    function rankRouteBranches(branches) {
      branches.sort(
        (a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(
          a.routesMeta.map((meta2) => meta2.childrenIndex),
          b.routesMeta.map((meta2) => meta2.childrenIndex)
        )
      );
    }
    var paramRe = /^:[\w-]+$/;
    var dynamicSegmentValue = 3;
    var indexRouteValue = 2;
    var emptySegmentValue = 1;
    var staticSegmentValue = 10;
    var splatPenalty = -2;
    var isSplat = (s) => s === "*";
    function computeScore(path, index) {
      let segments = path.split("/");
      let initialScore = segments.length;
      if (segments.some(isSplat)) {
        initialScore += splatPenalty;
      }
      if (index) {
        initialScore += indexRouteValue;
      }
      return segments.filter((s) => !isSplat(s)).reduce(
        (score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue),
        initialScore
      );
    }
    function compareIndexes(a, b) {
      let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
      return siblings ? (
        // If two routes are siblings, we should try to match the earlier sibling
        // first. This allows people to have fine-grained control over the matching
        // behavior by simply putting routes with identical paths in the order they
        // want them tried.
        a[a.length - 1] - b[b.length - 1]
      ) : (
        // Otherwise, it doesn't really make sense to rank non-siblings by index,
        // so they sort equally.
        0
      );
    }
    function matchRouteBranch(branch, pathname, allowPartial = false) {
      let { routesMeta } = branch;
      let matchedParams = {};
      let matchedPathname = "/";
      let matches = [];
      for (let i = 0; i < routesMeta.length; ++i) {
        let meta2 = routesMeta[i];
        let end = i === routesMeta.length - 1;
        let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
        let match = matchPath(
          { path: meta2.relativePath, caseSensitive: meta2.caseSensitive, end },
          remainingPathname
        );
        let route = meta2.route;
        if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
          match = matchPath(
            {
              path: meta2.relativePath,
              caseSensitive: meta2.caseSensitive,
              end: false
            },
            remainingPathname
          );
        }
        if (!match) {
          return null;
        }
        Object.assign(matchedParams, match.params);
        matches.push({
          // TODO: Can this as be avoided?
          params: matchedParams,
          pathname: joinPaths([matchedPathname, match.pathname]),
          pathnameBase: normalizePathname(
            joinPaths([matchedPathname, match.pathnameBase])
          ),
          route
        });
        if (match.pathnameBase !== "/") {
          matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
        }
      }
      return matches;
    }
    function generatePath(originalPath, params = {}) {
      let path = originalPath;
      if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
        warning(
          false,
          `Route path "${path}" will be treated as if it were "${path.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${path.replace(/\*$/, "/*")}".`
        );
        path = path.replace(/\*$/, "/*");
      }
      const prefix = path.startsWith("/") ? "/" : "";
      const stringify = (p) => p == null ? "" : typeof p === "string" ? p : String(p);
      const segments = path.split(/\/+/).map((segment, index, array) => {
        const isLastSegment = index === array.length - 1;
        if (isLastSegment && segment === "*") {
          const star = "*";
          return stringify(params[star]);
        }
        const keyMatch = segment.match(/^:([\w-]+)(\??)$/);
        if (keyMatch) {
          const [, key, optional] = keyMatch;
          let param = params[key];
          invariant(optional === "?" || param != null, `Missing ":${key}" param`);
          return stringify(param);
        }
        return segment.replace(/\?$/g, "");
      }).filter((segment) => !!segment);
      return prefix + segments.join("/");
    }
    function matchPath(pattern2, pathname) {
      if (typeof pattern2 === "string") {
        pattern2 = { path: pattern2, caseSensitive: false, end: true };
      }
      let [matcher, compiledParams] = compilePath(
        pattern2.path,
        pattern2.caseSensitive,
        pattern2.end
      );
      let match = pathname.match(matcher);
      if (!match) return null;
      let matchedPathname = match[0];
      let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
      let captureGroups = match.slice(1);
      let params = compiledParams.reduce(
        (memo2, { paramName, isOptional }, index) => {
          if (paramName === "*") {
            let splatValue = captureGroups[index] || "";
            pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
          }
          const value = captureGroups[index];
          if (isOptional && !value) {
            memo2[paramName] = void 0;
          } else {
            memo2[paramName] = (value || "").replace(/%2F/g, "/");
          }
          return memo2;
        },
        {}
      );
      return {
        params,
        pathname: matchedPathname,
        pathnameBase,
        pattern: pattern2
      };
    }
    function compilePath(path, caseSensitive = false, end = true) {
      warning(
        path === "*" || !path.endsWith("*") || path.endsWith("/*"),
        `Route path "${path}" will be treated as if it were "${path.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${path.replace(/\*$/, "/*")}".`
      );
      let params = [];
      let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
        /\/:([\w-]+)(\?)?/g,
        (_, paramName, isOptional) => {
          params.push({ paramName, isOptional: isOptional != null });
          return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
        }
      );
      if (path.endsWith("*")) {
        params.push({ paramName: "*" });
        regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
      } else if (end) {
        regexpSource += "\\/*$";
      } else if (path !== "" && path !== "/") {
        regexpSource += "(?:(?=\\/|$))";
      } else {
      }
      let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
      return [matcher, params];
    }
    function decodePath(value) {
      try {
        return value.split("/").map((v) => decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
      } catch (error) {
        warning(
          false,
          `The URL path "${value}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${error}).`
        );
        return value;
      }
    }
    function stripBasename(pathname, basename2) {
      if (basename2 === "/") return pathname;
      if (!pathname.toLowerCase().startsWith(basename2.toLowerCase())) {
        return null;
      }
      let startIndex = basename2.endsWith("/") ? basename2.length - 1 : basename2.length;
      let nextChar = pathname.charAt(startIndex);
      if (nextChar && nextChar !== "/") {
        return null;
      }
      return pathname.slice(startIndex) || "/";
    }
    function resolvePath(to, fromPathname = "/") {
      let {
        pathname: toPathname,
        search = "",
        hash = ""
      } = typeof to === "string" ? parsePath(to) : to;
      let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
      return {
        pathname,
        search: normalizeSearch(search),
        hash: normalizeHash(hash)
      };
    }
    function resolvePathname(relativePath, fromPathname) {
      let segments = fromPathname.replace(/\/+$/, "").split("/");
      let relativeSegments = relativePath.split("/");
      relativeSegments.forEach((segment) => {
        if (segment === "..") {
          if (segments.length > 1) segments.pop();
        } else if (segment !== ".") {
          segments.push(segment);
        }
      });
      return segments.length > 1 ? segments.join("/") : "/";
    }
    function getInvalidPathError(char, field, dest, path) {
      return `Cannot include a '${char}' character in a manually specified \`to.${field}\` field [${JSON.stringify(
        path
      )}].  Please separate it out to the \`to.${dest}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
    }
    function getPathContributingMatches(matches) {
      return matches.filter(
        (match, index) => index === 0 || match.route.path && match.route.path.length > 0
      );
    }
    function getResolveToMatches(matches) {
      let pathMatches = getPathContributingMatches(matches);
      return pathMatches.map(
        (match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase
      );
    }
    function resolveTo(toArg, routePathnames, locationPathname, isPathRelative = false) {
      let to;
      if (typeof toArg === "string") {
        to = parsePath(toArg);
      } else {
        to = { ...toArg };
        invariant(
          !to.pathname || !to.pathname.includes("?"),
          getInvalidPathError("?", "pathname", "search", to)
        );
        invariant(
          !to.pathname || !to.pathname.includes("#"),
          getInvalidPathError("#", "pathname", "hash", to)
        );
        invariant(
          !to.search || !to.search.includes("#"),
          getInvalidPathError("#", "search", "hash", to)
        );
      }
      let isEmptyPath = toArg === "" || to.pathname === "";
      let toPathname = isEmptyPath ? "/" : to.pathname;
      let from;
      if (toPathname == null) {
        from = locationPathname;
      } else {
        let routePathnameIndex = routePathnames.length - 1;
        if (!isPathRelative && toPathname.startsWith("..")) {
          let toSegments = toPathname.split("/");
          while (toSegments[0] === "..") {
            toSegments.shift();
            routePathnameIndex -= 1;
          }
          to.pathname = toSegments.join("/");
        }
        from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
      }
      let path = resolvePath(to, from);
      let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
      let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
      if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
        path.pathname += "/";
      }
      return path;
    }
    var joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
    var normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
    var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
    var normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
    var DataWithResponseInit = class {
      constructor(data2, init) {
        this.type = "DataWithResponseInit";
        this.data = data2;
        this.init = init || null;
      }
    };
    function data(data2, init) {
      return new DataWithResponseInit(
        data2,
        typeof init === "number" ? { status: init } : init
      );
    }
    var redirect = (url, init = 302) => {
      let responseInit = init;
      if (typeof responseInit === "number") {
        responseInit = { status: responseInit };
      } else if (typeof responseInit.status === "undefined") {
        responseInit.status = 302;
      }
      let headers = new Headers(responseInit.headers);
      headers.set("Location", url);
      return new Response(null, {
        ...responseInit,
        headers
      });
    };
    var redirectDocument = (url, init) => {
      let response = redirect(url, init);
      response.headers.set("X-Remix-Reload-Document", "true");
      return response;
    };
    var replace = (url, init) => {
      let response = redirect(url, init);
      response.headers.set("X-Remix-Replace", "true");
      return response;
    };
    var ErrorResponseImpl = class {
      constructor(status, statusText, data2, internal = false) {
        this.status = status;
        this.statusText = statusText || "";
        this.internal = internal;
        if (data2 instanceof Error) {
          this.data = data2.toString();
          this.error = data2;
        } else {
          this.data = data2;
        }
      }
    };
    function isRouteErrorResponse2(error) {
      return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
    }
    var validMutationMethodsArr = [
      "POST",
      "PUT",
      "PATCH",
      "DELETE"
    ];
    var validMutationMethods = new Set(
      validMutationMethodsArr
    );
    var validRequestMethodsArr = [
      "GET",
      ...validMutationMethodsArr
    ];
    var validRequestMethods = new Set(validRequestMethodsArr);
    var redirectStatusCodes = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
    var redirectPreserveMethodStatusCodes = /* @__PURE__ */ new Set([307, 308]);
    var IDLE_NAVIGATION = {
      state: "idle",
      location: void 0,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0
    };
    var IDLE_FETCHER = {
      state: "idle",
      data: void 0,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0
    };
    var IDLE_BLOCKER = {
      state: "unblocked",
      proceed: void 0,
      reset: void 0,
      location: void 0
    };
    var ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
    var defaultMapRouteProperties = (route) => ({
      hasErrorBoundary: Boolean(route.hasErrorBoundary)
    });
    var TRANSITIONS_STORAGE_KEY = "remix-router-transitions";
    var ResetLoaderDataSymbol = Symbol("ResetLoaderData");
    function createRouter(init) {
      const routerWindow = init.window ? init.window : typeof window !== "undefined" ? window : void 0;
      const isBrowser2 = typeof routerWindow !== "undefined" && typeof routerWindow.document !== "undefined" && typeof routerWindow.document.createElement !== "undefined";
      invariant(
        init.routes.length > 0,
        "You must provide a non-empty routes array to createRouter"
      );
      let mapRouteProperties2 = init.mapRouteProperties || defaultMapRouteProperties;
      let manifest = {};
      let dataRoutes = convertRoutesToDataRoutes(
        init.routes,
        mapRouteProperties2,
        void 0,
        manifest
      );
      let inFlightDataRoutes;
      let basename2 = init.basename || "/";
      let dataStrategyImpl = init.dataStrategy || defaultDataStrategy;
      let patchRoutesOnNavigationImpl = init.patchRoutesOnNavigation;
      let future2 = {
        ...init.future
      };
      let unlistenHistory = null;
      let subscribers = /* @__PURE__ */ new Set();
      let savedScrollPositions2 = null;
      let getScrollRestorationKey2 = null;
      let getScrollPosition = null;
      let initialScrollRestored = init.hydrationData != null;
      let initialMatches = matchRoutes(dataRoutes, init.history.location, basename2);
      let initialErrors = null;
      if (initialMatches == null && !patchRoutesOnNavigationImpl) {
        let error = getInternalRouterError(404, {
          pathname: init.history.location.pathname
        });
        let { matches, route } = getShortCircuitMatches(dataRoutes);
        initialMatches = matches;
        initialErrors = { [route.id]: error };
      }
      if (initialMatches && !init.hydrationData) {
        let fogOfWar = checkFogOfWar(
          initialMatches,
          dataRoutes,
          init.history.location.pathname
        );
        if (fogOfWar.active) {
          initialMatches = null;
        }
      }
      let initialized;
      if (!initialMatches) {
        initialized = false;
        initialMatches = [];
        let fogOfWar = checkFogOfWar(
          null,
          dataRoutes,
          init.history.location.pathname
        );
        if (fogOfWar.active && fogOfWar.matches) {
          initialMatches = fogOfWar.matches;
        }
      } else if (initialMatches.some((m) => m.route.lazy)) {
        initialized = false;
      } else if (!initialMatches.some((m) => m.route.loader)) {
        initialized = true;
      } else {
        let loaderData = init.hydrationData ? init.hydrationData.loaderData : null;
        let errors = init.hydrationData ? init.hydrationData.errors : null;
        if (errors) {
          let idx = initialMatches.findIndex(
            (m) => errors[m.route.id] !== void 0
          );
          initialized = initialMatches.slice(0, idx + 1).every((m) => !shouldLoadRouteOnHydration(m.route, loaderData, errors));
        } else {
          initialized = initialMatches.every(
            (m) => !shouldLoadRouteOnHydration(m.route, loaderData, errors)
          );
        }
      }
      let router;
      let state = {
        historyAction: init.history.action,
        location: init.history.location,
        matches: initialMatches,
        initialized,
        navigation: IDLE_NAVIGATION,
        // Don't restore on initial updateState() if we were SSR'd
        restoreScrollPosition: init.hydrationData != null ? false : null,
        preventScrollReset: false,
        revalidation: "idle",
        loaderData: init.hydrationData && init.hydrationData.loaderData || {},
        actionData: init.hydrationData && init.hydrationData.actionData || null,
        errors: init.hydrationData && init.hydrationData.errors || initialErrors,
        fetchers: /* @__PURE__ */ new Map(),
        blockers: /* @__PURE__ */ new Map()
      };
      let pendingAction = "POP";
      let pendingPreventScrollReset = false;
      let pendingNavigationController;
      let pendingViewTransitionEnabled = false;
      let appliedViewTransitions = /* @__PURE__ */ new Map();
      let removePageHideEventListener = null;
      let isUninterruptedRevalidation = false;
      let isRevalidationRequired = false;
      let cancelledFetcherLoads = /* @__PURE__ */ new Set();
      let fetchControllers = /* @__PURE__ */ new Map();
      let incrementingLoadId = 0;
      let pendingNavigationLoadId = -1;
      let fetchReloadIds = /* @__PURE__ */ new Map();
      let fetchRedirectIds = /* @__PURE__ */ new Set();
      let fetchLoadMatches = /* @__PURE__ */ new Map();
      let activeFetchers = /* @__PURE__ */ new Map();
      let fetchersQueuedForDeletion = /* @__PURE__ */ new Set();
      let blockerFunctions = /* @__PURE__ */ new Map();
      let unblockBlockerHistoryUpdate = void 0;
      let pendingRevalidationDfd = null;
      function initialize() {
        unlistenHistory = init.history.listen(
          ({ action: historyAction, location, delta }) => {
            if (unblockBlockerHistoryUpdate) {
              unblockBlockerHistoryUpdate();
              unblockBlockerHistoryUpdate = void 0;
              return;
            }
            warning(
              blockerFunctions.size === 0 || delta != null,
              "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
            );
            let blockerKey = shouldBlockNavigation({
              currentLocation: state.location,
              nextLocation: location,
              historyAction
            });
            if (blockerKey && delta != null) {
              let nextHistoryUpdatePromise = new Promise((resolve) => {
                unblockBlockerHistoryUpdate = resolve;
              });
              init.history.go(delta * -1);
              updateBlocker(blockerKey, {
                state: "blocked",
                location,
                proceed() {
                  updateBlocker(blockerKey, {
                    state: "proceeding",
                    proceed: void 0,
                    reset: void 0,
                    location
                  });
                  nextHistoryUpdatePromise.then(() => init.history.go(delta));
                },
                reset() {
                  let blockers = new Map(state.blockers);
                  blockers.set(blockerKey, IDLE_BLOCKER);
                  updateState({ blockers });
                }
              });
              return;
            }
            return startNavigation(historyAction, location);
          }
        );
        if (isBrowser2) {
          restoreAppliedTransitions(routerWindow, appliedViewTransitions);
          let _saveAppliedTransitions = () => persistAppliedTransitions(routerWindow, appliedViewTransitions);
          routerWindow.addEventListener("pagehide", _saveAppliedTransitions);
          removePageHideEventListener = () => routerWindow.removeEventListener("pagehide", _saveAppliedTransitions);
        }
        if (!state.initialized) {
          startNavigation("POP", state.location, {
            initialHydration: true
          });
        }
        return router;
      }
      function dispose() {
        if (unlistenHistory) {
          unlistenHistory();
        }
        if (removePageHideEventListener) {
          removePageHideEventListener();
        }
        subscribers.clear();
        pendingNavigationController && pendingNavigationController.abort();
        state.fetchers.forEach((_, key) => deleteFetcher(key));
        state.blockers.forEach((_, key) => deleteBlocker(key));
      }
      function subscribe(fn) {
        subscribers.add(fn);
        return () => subscribers.delete(fn);
      }
      function updateState(newState, opts = {}) {
        state = {
          ...state,
          ...newState
        };
        let unmountedFetchers = [];
        let mountedFetchers = [];
        state.fetchers.forEach((fetcher, key) => {
          if (fetcher.state === "idle") {
            if (fetchersQueuedForDeletion.has(key)) {
              unmountedFetchers.push(key);
            } else {
              mountedFetchers.push(key);
            }
          }
        });
        [...subscribers].forEach(
          (subscriber) => subscriber(state, {
            deletedFetchers: unmountedFetchers,
            viewTransitionOpts: opts.viewTransitionOpts,
            flushSync: opts.flushSync === true
          })
        );
        unmountedFetchers.forEach((key) => deleteFetcher(key));
        mountedFetchers.forEach((key) => state.fetchers.delete(key));
      }
      function completeNavigation(location, newState, { flushSync } = {}) {
        let isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && location.state?._isRedirect !== true;
        let actionData;
        if (newState.actionData) {
          if (Object.keys(newState.actionData).length > 0) {
            actionData = newState.actionData;
          } else {
            actionData = null;
          }
        } else if (isActionReload) {
          actionData = state.actionData;
        } else {
          actionData = null;
        }
        let loaderData = newState.loaderData ? mergeLoaderData(
          state.loaderData,
          newState.loaderData,
          newState.matches || [],
          newState.errors
        ) : state.loaderData;
        let blockers = state.blockers;
        if (blockers.size > 0) {
          blockers = new Map(blockers);
          blockers.forEach((_, k) => blockers.set(k, IDLE_BLOCKER));
        }
        let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && location.state?._isRedirect !== true;
        if (inFlightDataRoutes) {
          dataRoutes = inFlightDataRoutes;
          inFlightDataRoutes = void 0;
        }
        if (isUninterruptedRevalidation) {
        } else if (pendingAction === "POP") {
        } else if (pendingAction === "PUSH") {
          init.history.push(location, location.state);
        } else if (pendingAction === "REPLACE") {
          init.history.replace(location, location.state);
        }
        let viewTransitionOpts;
        if (pendingAction === "POP") {
          let priorPaths = appliedViewTransitions.get(state.location.pathname);
          if (priorPaths && priorPaths.has(location.pathname)) {
            viewTransitionOpts = {
              currentLocation: state.location,
              nextLocation: location
            };
          } else if (appliedViewTransitions.has(location.pathname)) {
            viewTransitionOpts = {
              currentLocation: location,
              nextLocation: state.location
            };
          }
        } else if (pendingViewTransitionEnabled) {
          let toPaths = appliedViewTransitions.get(state.location.pathname);
          if (toPaths) {
            toPaths.add(location.pathname);
          } else {
            toPaths = /* @__PURE__ */ new Set([location.pathname]);
            appliedViewTransitions.set(state.location.pathname, toPaths);
          }
          viewTransitionOpts = {
            currentLocation: state.location,
            nextLocation: location
          };
        }
        updateState(
          {
            ...newState,
            // matches, errors, fetchers go through as-is
            actionData,
            loaderData,
            historyAction: pendingAction,
            location,
            initialized: true,
            navigation: IDLE_NAVIGATION,
            revalidation: "idle",
            restoreScrollPosition: getSavedScrollPosition(
              location,
              newState.matches || state.matches
            ),
            preventScrollReset,
            blockers
          },
          {
            viewTransitionOpts,
            flushSync: flushSync === true
          }
        );
        pendingAction = "POP";
        pendingPreventScrollReset = false;
        pendingViewTransitionEnabled = false;
        isUninterruptedRevalidation = false;
        isRevalidationRequired = false;
        pendingRevalidationDfd?.resolve();
        pendingRevalidationDfd = null;
      }
      async function navigate(to, opts) {
        if (typeof to === "number") {
          init.history.go(to);
          return;
        }
        let normalizedPath = normalizeTo(
          state.location,
          state.matches,
          basename2,
          to,
          opts?.fromRouteId,
          opts?.relative
        );
        let { path, submission, error } = normalizeNavigateOptions(
          false,
          normalizedPath,
          opts
        );
        let currentLocation = state.location;
        let nextLocation = createLocation(state.location, path, opts && opts.state);
        nextLocation = {
          ...nextLocation,
          ...init.history.encodeLocation(nextLocation)
        };
        let userReplace = opts && opts.replace != null ? opts.replace : void 0;
        let historyAction = "PUSH";
        if (userReplace === true) {
          historyAction = "REPLACE";
        } else if (userReplace === false) {
        } else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) {
          historyAction = "REPLACE";
        }
        let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : void 0;
        let flushSync = (opts && opts.flushSync) === true;
        let blockerKey = shouldBlockNavigation({
          currentLocation,
          nextLocation,
          historyAction
        });
        if (blockerKey) {
          updateBlocker(blockerKey, {
            state: "blocked",
            location: nextLocation,
            proceed() {
              updateBlocker(blockerKey, {
                state: "proceeding",
                proceed: void 0,
                reset: void 0,
                location: nextLocation
              });
              navigate(to, opts);
            },
            reset() {
              let blockers = new Map(state.blockers);
              blockers.set(blockerKey, IDLE_BLOCKER);
              updateState({ blockers });
            }
          });
          return;
        }
        await startNavigation(historyAction, nextLocation, {
          submission,
          // Send through the formData serialization error if we have one so we can
          // render at the right error boundary after we match routes
          pendingError: error,
          preventScrollReset,
          replace: opts && opts.replace,
          enableViewTransition: opts && opts.viewTransition,
          flushSync
        });
      }
      function revalidate() {
        if (!pendingRevalidationDfd) {
          pendingRevalidationDfd = createDeferred();
        }
        interruptActiveLoads();
        updateState({ revalidation: "loading" });
        let promise = pendingRevalidationDfd.promise;
        if (state.navigation.state === "submitting") {
          return promise;
        }
        if (state.navigation.state === "idle") {
          startNavigation(state.historyAction, state.location, {
            startUninterruptedRevalidation: true
          });
          return promise;
        }
        startNavigation(
          pendingAction || state.historyAction,
          state.navigation.location,
          {
            overrideNavigation: state.navigation,
            // Proxy through any rending view transition
            enableViewTransition: pendingViewTransitionEnabled === true
          }
        );
        return promise;
      }
      async function startNavigation(historyAction, location, opts) {
        pendingNavigationController && pendingNavigationController.abort();
        pendingNavigationController = null;
        pendingAction = historyAction;
        isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true;
        saveScrollPosition(state.location, state.matches);
        pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
        pendingViewTransitionEnabled = (opts && opts.enableViewTransition) === true;
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let loadingNavigation = opts && opts.overrideNavigation;
        let matches = matchRoutes(routesToUse, location, basename2);
        let flushSync = (opts && opts.flushSync) === true;
        let fogOfWar = checkFogOfWar(matches, routesToUse, location.pathname);
        if (fogOfWar.active && fogOfWar.matches) {
          matches = fogOfWar.matches;
        }
        if (!matches) {
          let { error, notFoundMatches, route } = handleNavigational404(
            location.pathname
          );
          completeNavigation(
            location,
            {
              matches: notFoundMatches,
              loaderData: {},
              errors: {
                [route.id]: error
              }
            },
            { flushSync }
          );
          return;
        }
        if (state.initialized && !isRevalidationRequired && isHashChangeOnly(state.location, location) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
          completeNavigation(location, { matches }, { flushSync });
          return;
        }
        pendingNavigationController = new AbortController();
        let request = createClientSideRequest(
          init.history,
          location,
          pendingNavigationController.signal,
          opts && opts.submission
        );
        let pendingActionResult;
        if (opts && opts.pendingError) {
          pendingActionResult = [
            findNearestBoundary(matches).route.id,
            { type: "error", error: opts.pendingError }
          ];
        } else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
          let actionResult = await handleAction(
            request,
            location,
            opts.submission,
            matches,
            fogOfWar.active,
            { replace: opts.replace, flushSync }
          );
          if (actionResult.shortCircuited) {
            return;
          }
          if (actionResult.pendingActionResult) {
            let [routeId, result] = actionResult.pendingActionResult;
            if (isErrorResult(result) && isRouteErrorResponse2(result.error) && result.error.status === 404) {
              pendingNavigationController = null;
              completeNavigation(location, {
                matches: actionResult.matches,
                loaderData: {},
                errors: {
                  [routeId]: result.error
                }
              });
              return;
            }
          }
          matches = actionResult.matches || matches;
          pendingActionResult = actionResult.pendingActionResult;
          loadingNavigation = getLoadingNavigation(location, opts.submission);
          flushSync = false;
          fogOfWar.active = false;
          request = createClientSideRequest(
            init.history,
            request.url,
            request.signal
          );
        }
        let {
          shortCircuited,
          matches: updatedMatches,
          loaderData,
          errors
        } = await handleLoaders(
          request,
          location,
          matches,
          fogOfWar.active,
          loadingNavigation,
          opts && opts.submission,
          opts && opts.fetcherSubmission,
          opts && opts.replace,
          opts && opts.initialHydration === true,
          flushSync,
          pendingActionResult
        );
        if (shortCircuited) {
          return;
        }
        pendingNavigationController = null;
        completeNavigation(location, {
          matches: updatedMatches || matches,
          ...getActionDataForCommit(pendingActionResult),
          loaderData,
          errors
        });
      }
      async function handleAction(request, location, submission, matches, isFogOfWar, opts = {}) {
        interruptActiveLoads();
        let navigation = getSubmittingNavigation(location, submission);
        updateState({ navigation }, { flushSync: opts.flushSync === true });
        if (isFogOfWar) {
          let discoverResult = await discoverRoutes(
            matches,
            location.pathname,
            request.signal
          );
          if (discoverResult.type === "aborted") {
            return { shortCircuited: true };
          } else if (discoverResult.type === "error") {
            let boundaryId = findNearestBoundary(discoverResult.partialMatches).route.id;
            return {
              matches: discoverResult.partialMatches,
              pendingActionResult: [
                boundaryId,
                {
                  type: "error",
                  error: discoverResult.error
                }
              ]
            };
          } else if (!discoverResult.matches) {
            let { notFoundMatches, error, route } = handleNavigational404(
              location.pathname
            );
            return {
              matches: notFoundMatches,
              pendingActionResult: [
                route.id,
                {
                  type: "error",
                  error
                }
              ]
            };
          } else {
            matches = discoverResult.matches;
          }
        }
        let result;
        let actionMatch = getTargetMatch(matches, location);
        if (!actionMatch.route.action && !actionMatch.route.lazy) {
          result = {
            type: "error",
            error: getInternalRouterError(405, {
              method: request.method,
              pathname: location.pathname,
              routeId: actionMatch.route.id
            })
          };
        } else {
          let results = await callDataStrategy(
            "action",
            state,
            request,
            [actionMatch],
            matches,
            null
          );
          result = results[actionMatch.route.id];
          if (request.signal.aborted) {
            return { shortCircuited: true };
          }
        }
        if (isRedirectResult(result)) {
          let replace2;
          if (opts && opts.replace != null) {
            replace2 = opts.replace;
          } else {
            let location2 = normalizeRedirectLocation(
              result.response.headers.get("Location"),
              new URL(request.url),
              basename2
            );
            replace2 = location2 === state.location.pathname + state.location.search;
          }
          await startRedirectNavigation(request, result, true, {
            submission,
            replace: replace2
          });
          return { shortCircuited: true };
        }
        if (isErrorResult(result)) {
          let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
          if ((opts && opts.replace) !== true) {
            pendingAction = "PUSH";
          }
          return {
            matches,
            pendingActionResult: [boundaryMatch.route.id, result]
          };
        }
        return {
          matches,
          pendingActionResult: [actionMatch.route.id, result]
        };
      }
      async function handleLoaders(request, location, matches, isFogOfWar, overrideNavigation, submission, fetcherSubmission, replace2, initialHydration, flushSync, pendingActionResult) {
        let loadingNavigation = overrideNavigation || getLoadingNavigation(location, submission);
        let activeSubmission = submission || fetcherSubmission || getSubmissionFromNavigation(loadingNavigation);
        let shouldUpdateNavigationState = !isUninterruptedRevalidation && !initialHydration;
        if (isFogOfWar) {
          if (shouldUpdateNavigationState) {
            let actionData = getUpdatedActionData(pendingActionResult);
            updateState(
              {
                navigation: loadingNavigation,
                ...actionData !== void 0 ? { actionData } : {}
              },
              {
                flushSync
              }
            );
          }
          let discoverResult = await discoverRoutes(
            matches,
            location.pathname,
            request.signal
          );
          if (discoverResult.type === "aborted") {
            return { shortCircuited: true };
          } else if (discoverResult.type === "error") {
            let boundaryId = findNearestBoundary(discoverResult.partialMatches).route.id;
            return {
              matches: discoverResult.partialMatches,
              loaderData: {},
              errors: {
                [boundaryId]: discoverResult.error
              }
            };
          } else if (!discoverResult.matches) {
            let { error, notFoundMatches, route } = handleNavigational404(
              location.pathname
            );
            return {
              matches: notFoundMatches,
              loaderData: {},
              errors: {
                [route.id]: error
              }
            };
          } else {
            matches = discoverResult.matches;
          }
        }
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(
          init.history,
          state,
          matches,
          activeSubmission,
          location,
          initialHydration === true,
          isRevalidationRequired,
          cancelledFetcherLoads,
          fetchersQueuedForDeletion,
          fetchLoadMatches,
          fetchRedirectIds,
          routesToUse,
          basename2,
          pendingActionResult
        );
        pendingNavigationLoadId = ++incrementingLoadId;
        if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
          let updatedFetchers2 = markFetchRedirectsDone();
          completeNavigation(
            location,
            {
              matches,
              loaderData: {},
              // Commit pending error if we're short circuiting
              errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? { [pendingActionResult[0]]: pendingActionResult[1].error } : null,
              ...getActionDataForCommit(pendingActionResult),
              ...updatedFetchers2 ? { fetchers: new Map(state.fetchers) } : {}
            },
            { flushSync }
          );
          return { shortCircuited: true };
        }
        if (shouldUpdateNavigationState) {
          let updates = {};
          if (!isFogOfWar) {
            updates.navigation = loadingNavigation;
            let actionData = getUpdatedActionData(pendingActionResult);
            if (actionData !== void 0) {
              updates.actionData = actionData;
            }
          }
          if (revalidatingFetchers.length > 0) {
            updates.fetchers = getUpdatedRevalidatingFetchers(revalidatingFetchers);
          }
          updateState(updates, { flushSync });
        }
        revalidatingFetchers.forEach((rf) => {
          abortFetcher(rf.key);
          if (rf.controller) {
            fetchControllers.set(rf.key, rf.controller);
          }
        });
        let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach((f) => abortFetcher(f.key));
        if (pendingNavigationController) {
          pendingNavigationController.signal.addEventListener(
            "abort",
            abortPendingFetchRevalidations
          );
        }
        let { loaderResults, fetcherResults } = await callLoadersAndMaybeResolveData(
          state,
          matches,
          matchesToLoad,
          revalidatingFetchers,
          request
        );
        if (request.signal.aborted) {
          return { shortCircuited: true };
        }
        if (pendingNavigationController) {
          pendingNavigationController.signal.removeEventListener(
            "abort",
            abortPendingFetchRevalidations
          );
        }
        revalidatingFetchers.forEach((rf) => fetchControllers.delete(rf.key));
        let redirect2 = findRedirect(loaderResults);
        if (redirect2) {
          await startRedirectNavigation(request, redirect2.result, true, {
            replace: replace2
          });
          return { shortCircuited: true };
        }
        redirect2 = findRedirect(fetcherResults);
        if (redirect2) {
          fetchRedirectIds.add(redirect2.key);
          await startRedirectNavigation(request, redirect2.result, true, {
            replace: replace2
          });
          return { shortCircuited: true };
        }
        let { loaderData, errors } = processLoaderData(
          state,
          matches,
          loaderResults,
          pendingActionResult,
          revalidatingFetchers,
          fetcherResults
        );
        if (initialHydration && state.errors) {
          errors = { ...state.errors, ...errors };
        }
        let updatedFetchers = markFetchRedirectsDone();
        let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
        let shouldUpdateFetchers = updatedFetchers || didAbortFetchLoads || revalidatingFetchers.length > 0;
        return {
          matches,
          loaderData,
          errors,
          ...shouldUpdateFetchers ? { fetchers: new Map(state.fetchers) } : {}
        };
      }
      function getUpdatedActionData(pendingActionResult) {
        if (pendingActionResult && !isErrorResult(pendingActionResult[1])) {
          return {
            [pendingActionResult[0]]: pendingActionResult[1].data
          };
        } else if (state.actionData) {
          if (Object.keys(state.actionData).length === 0) {
            return null;
          } else {
            return state.actionData;
          }
        }
      }
      function getUpdatedRevalidatingFetchers(revalidatingFetchers) {
        revalidatingFetchers.forEach((rf) => {
          let fetcher = state.fetchers.get(rf.key);
          let revalidatingFetcher = getLoadingFetcher(
            void 0,
            fetcher ? fetcher.data : void 0
          );
          state.fetchers.set(rf.key, revalidatingFetcher);
        });
        return new Map(state.fetchers);
      }
      async function fetch2(key, routeId, href, opts) {
        abortFetcher(key);
        let flushSync = (opts && opts.flushSync) === true;
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let normalizedPath = normalizeTo(
          state.location,
          state.matches,
          basename2,
          href,
          routeId,
          opts?.relative
        );
        let matches = matchRoutes(routesToUse, normalizedPath, basename2);
        let fogOfWar = checkFogOfWar(matches, routesToUse, normalizedPath);
        if (fogOfWar.active && fogOfWar.matches) {
          matches = fogOfWar.matches;
        }
        if (!matches) {
          setFetcherError(
            key,
            routeId,
            getInternalRouterError(404, { pathname: normalizedPath }),
            { flushSync }
          );
          return;
        }
        let { path, submission, error } = normalizeNavigateOptions(
          true,
          normalizedPath,
          opts
        );
        if (error) {
          setFetcherError(key, routeId, error, { flushSync });
          return;
        }
        let match = getTargetMatch(matches, path);
        let preventScrollReset = (opts && opts.preventScrollReset) === true;
        if (submission && isMutationMethod(submission.formMethod)) {
          await handleFetcherAction(
            key,
            routeId,
            path,
            match,
            matches,
            fogOfWar.active,
            flushSync,
            preventScrollReset,
            submission
          );
          return;
        }
        fetchLoadMatches.set(key, { routeId, path });
        await handleFetcherLoader(
          key,
          routeId,
          path,
          match,
          matches,
          fogOfWar.active,
          flushSync,
          preventScrollReset,
          submission
        );
      }
      async function handleFetcherAction(key, routeId, path, match, requestMatches, isFogOfWar, flushSync, preventScrollReset, submission) {
        interruptActiveLoads();
        fetchLoadMatches.delete(key);
        function detectAndHandle405Error(m) {
          if (!m.route.action && !m.route.lazy) {
            let error = getInternalRouterError(405, {
              method: submission.formMethod,
              pathname: path,
              routeId
            });
            setFetcherError(key, routeId, error, { flushSync });
            return true;
          }
          return false;
        }
        if (!isFogOfWar && detectAndHandle405Error(match)) {
          return;
        }
        let existingFetcher = state.fetchers.get(key);
        updateFetcherState(key, getSubmittingFetcher(submission, existingFetcher), {
          flushSync
        });
        let abortController = new AbortController();
        let fetchRequest = createClientSideRequest(
          init.history,
          path,
          abortController.signal,
          submission
        );
        if (isFogOfWar) {
          let discoverResult = await discoverRoutes(
            requestMatches,
            path,
            fetchRequest.signal
          );
          if (discoverResult.type === "aborted") {
            return;
          } else if (discoverResult.type === "error") {
            setFetcherError(key, routeId, discoverResult.error, { flushSync });
            return;
          } else if (!discoverResult.matches) {
            setFetcherError(
              key,
              routeId,
              getInternalRouterError(404, { pathname: path }),
              { flushSync }
            );
            return;
          } else {
            requestMatches = discoverResult.matches;
            match = getTargetMatch(requestMatches, path);
            if (detectAndHandle405Error(match)) {
              return;
            }
          }
        }
        fetchControllers.set(key, abortController);
        let originatingLoadId = incrementingLoadId;
        let actionResults = await callDataStrategy(
          "action",
          state,
          fetchRequest,
          [match],
          requestMatches,
          key
        );
        let actionResult = actionResults[match.route.id];
        if (fetchRequest.signal.aborted) {
          if (fetchControllers.get(key) === abortController) {
            fetchControllers.delete(key);
          }
          return;
        }
        if (fetchersQueuedForDeletion.has(key)) {
          if (isRedirectResult(actionResult) || isErrorResult(actionResult)) {
            updateFetcherState(key, getDoneFetcher(void 0));
            return;
          }
        } else {
          if (isRedirectResult(actionResult)) {
            fetchControllers.delete(key);
            if (pendingNavigationLoadId > originatingLoadId) {
              updateFetcherState(key, getDoneFetcher(void 0));
              return;
            } else {
              fetchRedirectIds.add(key);
              updateFetcherState(key, getLoadingFetcher(submission));
              return startRedirectNavigation(fetchRequest, actionResult, false, {
                fetcherSubmission: submission,
                preventScrollReset
              });
            }
          }
          if (isErrorResult(actionResult)) {
            setFetcherError(key, routeId, actionResult.error);
            return;
          }
        }
        let nextLocation = state.navigation.location || state.location;
        let revalidationRequest = createClientSideRequest(
          init.history,
          nextLocation,
          abortController.signal
        );
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let matches = state.navigation.state !== "idle" ? matchRoutes(routesToUse, state.navigation.location, basename2) : state.matches;
        invariant(matches, "Didn't find any matches after fetcher action");
        let loadId = ++incrementingLoadId;
        fetchReloadIds.set(key, loadId);
        let loadFetcher = getLoadingFetcher(submission, actionResult.data);
        state.fetchers.set(key, loadFetcher);
        let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(
          init.history,
          state,
          matches,
          submission,
          nextLocation,
          false,
          isRevalidationRequired,
          cancelledFetcherLoads,
          fetchersQueuedForDeletion,
          fetchLoadMatches,
          fetchRedirectIds,
          routesToUse,
          basename2,
          [match.route.id, actionResult]
        );
        revalidatingFetchers.filter((rf) => rf.key !== key).forEach((rf) => {
          let staleKey = rf.key;
          let existingFetcher2 = state.fetchers.get(staleKey);
          let revalidatingFetcher = getLoadingFetcher(
            void 0,
            existingFetcher2 ? existingFetcher2.data : void 0
          );
          state.fetchers.set(staleKey, revalidatingFetcher);
          abortFetcher(staleKey);
          if (rf.controller) {
            fetchControllers.set(staleKey, rf.controller);
          }
        });
        updateState({ fetchers: new Map(state.fetchers) });
        let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach((rf) => abortFetcher(rf.key));
        abortController.signal.addEventListener(
          "abort",
          abortPendingFetchRevalidations
        );
        let { loaderResults, fetcherResults } = await callLoadersAndMaybeResolveData(
          state,
          matches,
          matchesToLoad,
          revalidatingFetchers,
          revalidationRequest
        );
        if (abortController.signal.aborted) {
          return;
        }
        abortController.signal.removeEventListener(
          "abort",
          abortPendingFetchRevalidations
        );
        fetchReloadIds.delete(key);
        fetchControllers.delete(key);
        revalidatingFetchers.forEach((r) => fetchControllers.delete(r.key));
        let redirect2 = findRedirect(loaderResults);
        if (redirect2) {
          return startRedirectNavigation(
            revalidationRequest,
            redirect2.result,
            false,
            { preventScrollReset }
          );
        }
        redirect2 = findRedirect(fetcherResults);
        if (redirect2) {
          fetchRedirectIds.add(redirect2.key);
          return startRedirectNavigation(
            revalidationRequest,
            redirect2.result,
            false,
            { preventScrollReset }
          );
        }
        let { loaderData, errors } = processLoaderData(
          state,
          matches,
          loaderResults,
          void 0,
          revalidatingFetchers,
          fetcherResults
        );
        if (state.fetchers.has(key)) {
          let doneFetcher = getDoneFetcher(actionResult.data);
          state.fetchers.set(key, doneFetcher);
        }
        abortStaleFetchLoads(loadId);
        if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
          invariant(pendingAction, "Expected pending action");
          pendingNavigationController && pendingNavigationController.abort();
          completeNavigation(state.navigation.location, {
            matches,
            loaderData,
            errors,
            fetchers: new Map(state.fetchers)
          });
        } else {
          updateState({
            errors,
            loaderData: mergeLoaderData(
              state.loaderData,
              loaderData,
              matches,
              errors
            ),
            fetchers: new Map(state.fetchers)
          });
          isRevalidationRequired = false;
        }
      }
      async function handleFetcherLoader(key, routeId, path, match, matches, isFogOfWar, flushSync, preventScrollReset, submission) {
        let existingFetcher = state.fetchers.get(key);
        updateFetcherState(
          key,
          getLoadingFetcher(
            submission,
            existingFetcher ? existingFetcher.data : void 0
          ),
          { flushSync }
        );
        let abortController = new AbortController();
        let fetchRequest = createClientSideRequest(
          init.history,
          path,
          abortController.signal
        );
        if (isFogOfWar) {
          let discoverResult = await discoverRoutes(
            matches,
            path,
            fetchRequest.signal
          );
          if (discoverResult.type === "aborted") {
            return;
          } else if (discoverResult.type === "error") {
            setFetcherError(key, routeId, discoverResult.error, { flushSync });
            return;
          } else if (!discoverResult.matches) {
            setFetcherError(
              key,
              routeId,
              getInternalRouterError(404, { pathname: path }),
              { flushSync }
            );
            return;
          } else {
            matches = discoverResult.matches;
            match = getTargetMatch(matches, path);
          }
        }
        fetchControllers.set(key, abortController);
        let originatingLoadId = incrementingLoadId;
        let results = await callDataStrategy(
          "loader",
          state,
          fetchRequest,
          [match],
          matches,
          key
        );
        let result = results[match.route.id];
        if (fetchControllers.get(key) === abortController) {
          fetchControllers.delete(key);
        }
        if (fetchRequest.signal.aborted) {
          return;
        }
        if (fetchersQueuedForDeletion.has(key)) {
          updateFetcherState(key, getDoneFetcher(void 0));
          return;
        }
        if (isRedirectResult(result)) {
          if (pendingNavigationLoadId > originatingLoadId) {
            updateFetcherState(key, getDoneFetcher(void 0));
            return;
          } else {
            fetchRedirectIds.add(key);
            await startRedirectNavigation(fetchRequest, result, false, {
              preventScrollReset
            });
            return;
          }
        }
        if (isErrorResult(result)) {
          setFetcherError(key, routeId, result.error);
          return;
        }
        updateFetcherState(key, getDoneFetcher(result.data));
      }
      async function startRedirectNavigation(request, redirect2, isNavigation, {
        submission,
        fetcherSubmission,
        preventScrollReset,
        replace: replace2
      } = {}) {
        if (redirect2.response.headers.has("X-Remix-Revalidate")) {
          isRevalidationRequired = true;
        }
        let location = redirect2.response.headers.get("Location");
        invariant(location, "Expected a Location header on the redirect Response");
        location = normalizeRedirectLocation(
          location,
          new URL(request.url),
          basename2
        );
        let redirectLocation = createLocation(state.location, location, {
          _isRedirect: true
        });
        if (isBrowser2) {
          let isDocumentReload = false;
          if (redirect2.response.headers.has("X-Remix-Reload-Document")) {
            isDocumentReload = true;
          } else if (ABSOLUTE_URL_REGEX.test(location)) {
            const url = init.history.createURL(location);
            isDocumentReload = // Hard reload if it's an absolute URL to a new origin
            url.origin !== routerWindow.location.origin || // Hard reload if it's an absolute URL that does not match our basename
            stripBasename(url.pathname, basename2) == null;
          }
          if (isDocumentReload) {
            if (replace2) {
              routerWindow.location.replace(location);
            } else {
              routerWindow.location.assign(location);
            }
            return;
          }
        }
        pendingNavigationController = null;
        let redirectNavigationType = replace2 === true || redirect2.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH";
        let { formMethod, formAction, formEncType } = state.navigation;
        if (!submission && !fetcherSubmission && formMethod && formAction && formEncType) {
          submission = getSubmissionFromNavigation(state.navigation);
        }
        let activeSubmission = submission || fetcherSubmission;
        if (redirectPreserveMethodStatusCodes.has(redirect2.response.status) && activeSubmission && isMutationMethod(activeSubmission.formMethod)) {
          await startNavigation(redirectNavigationType, redirectLocation, {
            submission: {
              ...activeSubmission,
              formAction: location
            },
            // Preserve these flags across redirects
            preventScrollReset: preventScrollReset || pendingPreventScrollReset,
            enableViewTransition: isNavigation ? pendingViewTransitionEnabled : void 0
          });
        } else {
          let overrideNavigation = getLoadingNavigation(
            redirectLocation,
            submission
          );
          await startNavigation(redirectNavigationType, redirectLocation, {
            overrideNavigation,
            // Send fetcher submissions through for shouldRevalidate
            fetcherSubmission,
            // Preserve these flags across redirects
            preventScrollReset: preventScrollReset || pendingPreventScrollReset,
            enableViewTransition: isNavigation ? pendingViewTransitionEnabled : void 0
          });
        }
      }
      async function callDataStrategy(type, state2, request, matchesToLoad, matches, fetcherKey) {
        let results;
        let dataResults = {};
        try {
          results = await callDataStrategyImpl(
            dataStrategyImpl,
            type,
            state2,
            request,
            matchesToLoad,
            matches,
            fetcherKey,
            manifest,
            mapRouteProperties2
          );
        } catch (e) {
          matchesToLoad.forEach((m) => {
            dataResults[m.route.id] = {
              type: "error",
              error: e
            };
          });
          return dataResults;
        }
        for (let [routeId, result] of Object.entries(results)) {
          if (isRedirectDataStrategyResult(result)) {
            let response = result.result;
            dataResults[routeId] = {
              type: "redirect",
              response: normalizeRelativeRoutingRedirectResponse(
                response,
                request,
                routeId,
                matches,
                basename2
              )
            };
          } else {
            dataResults[routeId] = await convertDataStrategyResultToDataResult(
              result
            );
          }
        }
        return dataResults;
      }
      async function callLoadersAndMaybeResolveData(state2, matches, matchesToLoad, fetchersToLoad, request) {
        let loaderResultsPromise = callDataStrategy(
          "loader",
          state2,
          request,
          matchesToLoad,
          matches,
          null
        );
        let fetcherResultsPromise = Promise.all(
          fetchersToLoad.map(async (f) => {
            if (f.matches && f.match && f.controller) {
              let results = await callDataStrategy(
                "loader",
                state2,
                createClientSideRequest(init.history, f.path, f.controller.signal),
                [f.match],
                f.matches,
                f.key
              );
              let result = results[f.match.route.id];
              return { [f.key]: result };
            } else {
              return Promise.resolve({
                [f.key]: {
                  type: "error",
                  error: getInternalRouterError(404, {
                    pathname: f.path
                  })
                }
              });
            }
          })
        );
        let loaderResults = await loaderResultsPromise;
        let fetcherResults = (await fetcherResultsPromise).reduce(
          (acc, r) => Object.assign(acc, r),
          {}
        );
        return {
          loaderResults,
          fetcherResults
        };
      }
      function interruptActiveLoads() {
        isRevalidationRequired = true;
        fetchLoadMatches.forEach((_, key) => {
          if (fetchControllers.has(key)) {
            cancelledFetcherLoads.add(key);
          }
          abortFetcher(key);
        });
      }
      function updateFetcherState(key, fetcher, opts = {}) {
        state.fetchers.set(key, fetcher);
        updateState(
          { fetchers: new Map(state.fetchers) },
          { flushSync: (opts && opts.flushSync) === true }
        );
      }
      function setFetcherError(key, routeId, error, opts = {}) {
        let boundaryMatch = findNearestBoundary(state.matches, routeId);
        deleteFetcher(key);
        updateState(
          {
            errors: {
              [boundaryMatch.route.id]: error
            },
            fetchers: new Map(state.fetchers)
          },
          { flushSync: (opts && opts.flushSync) === true }
        );
      }
      function getFetcher(key) {
        activeFetchers.set(key, (activeFetchers.get(key) || 0) + 1);
        if (fetchersQueuedForDeletion.has(key)) {
          fetchersQueuedForDeletion.delete(key);
        }
        return state.fetchers.get(key) || IDLE_FETCHER;
      }
      function deleteFetcher(key) {
        let fetcher = state.fetchers.get(key);
        if (fetchControllers.has(key) && !(fetcher && fetcher.state === "loading" && fetchReloadIds.has(key))) {
          abortFetcher(key);
        }
        fetchLoadMatches.delete(key);
        fetchReloadIds.delete(key);
        fetchRedirectIds.delete(key);
        fetchersQueuedForDeletion.delete(key);
        cancelledFetcherLoads.delete(key);
        state.fetchers.delete(key);
      }
      function queueFetcherForDeletion(key) {
        let count = (activeFetchers.get(key) || 0) - 1;
        if (count <= 0) {
          activeFetchers.delete(key);
          fetchersQueuedForDeletion.add(key);
        } else {
          activeFetchers.set(key, count);
        }
        updateState({ fetchers: new Map(state.fetchers) });
      }
      function abortFetcher(key) {
        let controller = fetchControllers.get(key);
        if (controller) {
          controller.abort();
          fetchControllers.delete(key);
        }
      }
      function markFetchersDone(keys) {
        for (let key of keys) {
          let fetcher = getFetcher(key);
          let doneFetcher = getDoneFetcher(fetcher.data);
          state.fetchers.set(key, doneFetcher);
        }
      }
      function markFetchRedirectsDone() {
        let doneKeys = [];
        let updatedFetchers = false;
        for (let key of fetchRedirectIds) {
          let fetcher = state.fetchers.get(key);
          invariant(fetcher, `Expected fetcher: ${key}`);
          if (fetcher.state === "loading") {
            fetchRedirectIds.delete(key);
            doneKeys.push(key);
            updatedFetchers = true;
          }
        }
        markFetchersDone(doneKeys);
        return updatedFetchers;
      }
      function abortStaleFetchLoads(landedId) {
        let yeetedKeys = [];
        for (let [key, id] of fetchReloadIds) {
          if (id < landedId) {
            let fetcher = state.fetchers.get(key);
            invariant(fetcher, `Expected fetcher: ${key}`);
            if (fetcher.state === "loading") {
              abortFetcher(key);
              fetchReloadIds.delete(key);
              yeetedKeys.push(key);
            }
          }
        }
        markFetchersDone(yeetedKeys);
        return yeetedKeys.length > 0;
      }
      function getBlocker(key, fn) {
        let blocker = state.blockers.get(key) || IDLE_BLOCKER;
        if (blockerFunctions.get(key) !== fn) {
          blockerFunctions.set(key, fn);
        }
        return blocker;
      }
      function deleteBlocker(key) {
        state.blockers.delete(key);
        blockerFunctions.delete(key);
      }
      function updateBlocker(key, newBlocker) {
        let blocker = state.blockers.get(key) || IDLE_BLOCKER;
        invariant(
          blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked",
          `Invalid blocker state transition: ${blocker.state} -> ${newBlocker.state}`
        );
        let blockers = new Map(state.blockers);
        blockers.set(key, newBlocker);
        updateState({ blockers });
      }
      function shouldBlockNavigation({
        currentLocation,
        nextLocation,
        historyAction
      }) {
        if (blockerFunctions.size === 0) {
          return;
        }
        if (blockerFunctions.size > 1) {
          warning(false, "A router only supports one blocker at a time");
        }
        let entries = Array.from(blockerFunctions.entries());
        let [blockerKey, blockerFunction] = entries[entries.length - 1];
        let blocker = state.blockers.get(blockerKey);
        if (blocker && blocker.state === "proceeding") {
          return;
        }
        if (blockerFunction({ currentLocation, nextLocation, historyAction })) {
          return blockerKey;
        }
      }
      function handleNavigational404(pathname) {
        let error = getInternalRouterError(404, { pathname });
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let { matches, route } = getShortCircuitMatches(routesToUse);
        return { notFoundMatches: matches, route, error };
      }
      function enableScrollRestoration(positions, getPosition, getKey) {
        savedScrollPositions2 = positions;
        getScrollPosition = getPosition;
        getScrollRestorationKey2 = getKey || null;
        if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
          initialScrollRestored = true;
          let y = getSavedScrollPosition(state.location, state.matches);
          if (y != null) {
            updateState({ restoreScrollPosition: y });
          }
        }
        return () => {
          savedScrollPositions2 = null;
          getScrollPosition = null;
          getScrollRestorationKey2 = null;
        };
      }
      function getScrollKey(location, matches) {
        if (getScrollRestorationKey2) {
          let key = getScrollRestorationKey2(
            location,
            matches.map((m) => convertRouteMatchToUiMatch(m, state.loaderData))
          );
          return key || location.key;
        }
        return location.key;
      }
      function saveScrollPosition(location, matches) {
        if (savedScrollPositions2 && getScrollPosition) {
          let key = getScrollKey(location, matches);
          savedScrollPositions2[key] = getScrollPosition();
        }
      }
      function getSavedScrollPosition(location, matches) {
        if (savedScrollPositions2) {
          let key = getScrollKey(location, matches);
          let y = savedScrollPositions2[key];
          if (typeof y === "number") {
            return y;
          }
        }
        return null;
      }
      function checkFogOfWar(matches, routesToUse, pathname) {
        if (patchRoutesOnNavigationImpl) {
          if (!matches) {
            let fogMatches = matchRoutesImpl(
              routesToUse,
              pathname,
              basename2,
              true
            );
            return { active: true, matches: fogMatches || [] };
          } else {
            if (Object.keys(matches[0].params).length > 0) {
              let partialMatches = matchRoutesImpl(
                routesToUse,
                pathname,
                basename2,
                true
              );
              return { active: true, matches: partialMatches };
            }
          }
        }
        return { active: false, matches: null };
      }
      async function discoverRoutes(matches, pathname, signal) {
        if (!patchRoutesOnNavigationImpl) {
          return { type: "success", matches };
        }
        let partialMatches = matches;
        while (true) {
          let isNonHMR = inFlightDataRoutes == null;
          let routesToUse = inFlightDataRoutes || dataRoutes;
          let localManifest = manifest;
          try {
            await patchRoutesOnNavigationImpl({
              path: pathname,
              matches: partialMatches,
              patch: (routeId, children) => {
                if (signal.aborted) return;
                patchRoutesImpl(
                  routeId,
                  children,
                  routesToUse,
                  localManifest,
                  mapRouteProperties2
                );
              }
            });
          } catch (e) {
            return { type: "error", error: e, partialMatches };
          } finally {
            if (isNonHMR && !signal.aborted) {
              dataRoutes = [...dataRoutes];
            }
          }
          if (signal.aborted) {
            return { type: "aborted" };
          }
          let newMatches = matchRoutes(routesToUse, pathname, basename2);
          if (newMatches) {
            return { type: "success", matches: newMatches };
          }
          let newPartialMatches = matchRoutesImpl(
            routesToUse,
            pathname,
            basename2,
            true
          );
          if (!newPartialMatches || partialMatches.length === newPartialMatches.length && partialMatches.every(
            (m, i) => m.route.id === newPartialMatches[i].route.id
          )) {
            return { type: "success", matches: null };
          }
          partialMatches = newPartialMatches;
        }
      }
      function _internalSetRoutes(newRoutes) {
        manifest = {};
        inFlightDataRoutes = convertRoutesToDataRoutes(
          newRoutes,
          mapRouteProperties2,
          void 0,
          manifest
        );
      }
      function patchRoutes(routeId, children) {
        let isNonHMR = inFlightDataRoutes == null;
        let routesToUse = inFlightDataRoutes || dataRoutes;
        patchRoutesImpl(
          routeId,
          children,
          routesToUse,
          manifest,
          mapRouteProperties2
        );
        if (isNonHMR) {
          dataRoutes = [...dataRoutes];
          updateState({});
        }
      }
      router = {
        get basename() {
          return basename2;
        },
        get future() {
          return future2;
        },
        get state() {
          return state;
        },
        get routes() {
          return dataRoutes;
        },
        get window() {
          return routerWindow;
        },
        initialize,
        subscribe,
        enableScrollRestoration,
        navigate,
        fetch: fetch2,
        revalidate,
        // Passthrough to history-aware createHref used by useHref so we get proper
        // hash-aware URLs in DOM paths
        createHref: (to) => init.history.createHref(to),
        encodeLocation: (to) => init.history.encodeLocation(to),
        getFetcher,
        deleteFetcher: queueFetcherForDeletion,
        dispose,
        getBlocker,
        deleteBlocker,
        patchRoutes,
        _internalFetchControllers: fetchControllers,
        // TODO: Remove setRoutes, it's temporary to avoid dealing with
        // updating the tree while validating the update algorithm.
        _internalSetRoutes
      };
      return router;
    }
    function createStaticHandler(routes2, opts) {
      invariant(
        routes2.length > 0,
        "You must provide a non-empty routes array to createStaticHandler"
      );
      let manifest = {};
      let basename2 = (opts ? opts.basename : null) || "/";
      let mapRouteProperties2 = opts?.mapRouteProperties || defaultMapRouteProperties;
      let dataRoutes = convertRoutesToDataRoutes(
        routes2,
        mapRouteProperties2,
        void 0,
        manifest
      );
      async function query(request, {
        requestContext,
        skipLoaderErrorBubbling,
        dataStrategy
      } = {}) {
        let url = new URL(request.url);
        let method = request.method;
        let location = createLocation("", createPath(url), null, "default");
        let matches = matchRoutes(dataRoutes, location, basename2);
        if (!isValidMethod(method) && method !== "HEAD") {
          let error = getInternalRouterError(405, { method });
          let { matches: methodNotAllowedMatches, route } = getShortCircuitMatches(dataRoutes);
          return {
            basename: basename2,
            location,
            matches: methodNotAllowedMatches,
            loaderData: {},
            actionData: null,
            errors: {
              [route.id]: error
            },
            statusCode: error.status,
            loaderHeaders: {},
            actionHeaders: {}
          };
        } else if (!matches) {
          let error = getInternalRouterError(404, { pathname: location.pathname });
          let { matches: notFoundMatches, route } = getShortCircuitMatches(dataRoutes);
          return {
            basename: basename2,
            location,
            matches: notFoundMatches,
            loaderData: {},
            actionData: null,
            errors: {
              [route.id]: error
            },
            statusCode: error.status,
            loaderHeaders: {},
            actionHeaders: {}
          };
        }
        let result = await queryImpl(
          request,
          location,
          matches,
          requestContext,
          dataStrategy || null,
          skipLoaderErrorBubbling === true,
          null
        );
        if (isResponse(result)) {
          return result;
        }
        return { location, basename: basename2, ...result };
      }
      async function queryRoute(request, {
        routeId,
        requestContext,
        dataStrategy
      } = {}) {
        let url = new URL(request.url);
        let method = request.method;
        let location = createLocation("", createPath(url), null, "default");
        let matches = matchRoutes(dataRoutes, location, basename2);
        if (!isValidMethod(method) && method !== "HEAD" && method !== "OPTIONS") {
          throw getInternalRouterError(405, { method });
        } else if (!matches) {
          throw getInternalRouterError(404, { pathname: location.pathname });
        }
        let match = routeId ? matches.find((m) => m.route.id === routeId) : getTargetMatch(matches, location);
        if (routeId && !match) {
          throw getInternalRouterError(403, {
            pathname: location.pathname,
            routeId
          });
        } else if (!match) {
          throw getInternalRouterError(404, { pathname: location.pathname });
        }
        let result = await queryImpl(
          request,
          location,
          matches,
          requestContext,
          dataStrategy || null,
          false,
          match
        );
        if (isResponse(result)) {
          return result;
        }
        let error = result.errors ? Object.values(result.errors)[0] : void 0;
        if (error !== void 0) {
          throw error;
        }
        if (result.actionData) {
          return Object.values(result.actionData)[0];
        }
        if (result.loaderData) {
          return Object.values(result.loaderData)[0];
        }
        return void 0;
      }
      async function queryImpl(request, location, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch) {
        invariant(
          request.signal,
          "query()/queryRoute() requests must contain an AbortController signal"
        );
        try {
          if (isMutationMethod(request.method)) {
            let result2 = await submit(
              request,
              matches,
              routeMatch || getTargetMatch(matches, location),
              requestContext,
              dataStrategy,
              skipLoaderErrorBubbling,
              routeMatch != null
            );
            return result2;
          }
          let result = await loadRouteData(
            request,
            matches,
            requestContext,
            dataStrategy,
            skipLoaderErrorBubbling,
            routeMatch
          );
          return isResponse(result) ? result : {
            ...result,
            actionData: null,
            actionHeaders: {}
          };
        } catch (e) {
          if (isDataStrategyResult(e) && isResponse(e.result)) {
            if (e.type === "error") {
              throw e.result;
            }
            return e.result;
          }
          if (isRedirectResponse(e)) {
            return e;
          }
          throw e;
        }
      }
      async function submit(request, matches, actionMatch, requestContext, dataStrategy, skipLoaderErrorBubbling, isRouteRequest) {
        let result;
        if (!actionMatch.route.action && !actionMatch.route.lazy) {
          let error = getInternalRouterError(405, {
            method: request.method,
            pathname: new URL(request.url).pathname,
            routeId: actionMatch.route.id
          });
          if (isRouteRequest) {
            throw error;
          }
          result = {
            type: "error",
            error
          };
        } else {
          let results = await callDataStrategy(
            "action",
            request,
            [actionMatch],
            matches,
            isRouteRequest,
            requestContext,
            dataStrategy
          );
          result = results[actionMatch.route.id];
          if (request.signal.aborted) {
            throwStaticHandlerAbortedError(request, isRouteRequest);
          }
        }
        if (isRedirectResult(result)) {
          throw new Response(null, {
            status: result.response.status,
            headers: {
              Location: result.response.headers.get("Location")
            }
          });
        }
        if (isRouteRequest) {
          if (isErrorResult(result)) {
            throw result.error;
          }
          return {
            matches: [actionMatch],
            loaderData: {},
            actionData: { [actionMatch.route.id]: result.data },
            errors: null,
            // Note: statusCode + headers are unused here since queryRoute will
            // return the raw Response or value
            statusCode: 200,
            loaderHeaders: {},
            actionHeaders: {}
          };
        }
        let loaderRequest = new Request(request.url, {
          headers: request.headers,
          redirect: request.redirect,
          signal: request.signal
        });
        if (isErrorResult(result)) {
          let boundaryMatch = skipLoaderErrorBubbling ? actionMatch : findNearestBoundary(matches, actionMatch.route.id);
          let context2 = await loadRouteData(
            loaderRequest,
            matches,
            requestContext,
            dataStrategy,
            skipLoaderErrorBubbling,
            null,
            [boundaryMatch.route.id, result]
          );
          return {
            ...context2,
            statusCode: isRouteErrorResponse2(result.error) ? result.error.status : result.statusCode != null ? result.statusCode : 500,
            actionData: null,
            actionHeaders: {
              ...result.headers ? { [actionMatch.route.id]: result.headers } : {}
            }
          };
        }
        let context = await loadRouteData(
          loaderRequest,
          matches,
          requestContext,
          dataStrategy,
          skipLoaderErrorBubbling,
          null
        );
        return {
          ...context,
          actionData: {
            [actionMatch.route.id]: result.data
          },
          // action status codes take precedence over loader status codes
          ...result.statusCode ? { statusCode: result.statusCode } : {},
          actionHeaders: result.headers ? { [actionMatch.route.id]: result.headers } : {}
        };
      }
      async function loadRouteData(request, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch, pendingActionResult) {
        let isRouteRequest = routeMatch != null;
        if (isRouteRequest && !routeMatch?.route.loader && !routeMatch?.route.lazy) {
          throw getInternalRouterError(400, {
            method: request.method,
            pathname: new URL(request.url).pathname,
            routeId: routeMatch?.route.id
          });
        }
        let requestMatches = routeMatch ? [routeMatch] : pendingActionResult && isErrorResult(pendingActionResult[1]) ? getLoaderMatchesUntilBoundary(matches, pendingActionResult[0]) : matches;
        let matchesToLoad = requestMatches.filter(
          (m) => m.route.loader || m.route.lazy
        );
        if (matchesToLoad.length === 0) {
          return {
            matches,
            // Add a null for all matched routes for proper revalidation on the client
            loaderData: matches.reduce(
              (acc, m) => Object.assign(acc, { [m.route.id]: null }),
              {}
            ),
            errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? {
              [pendingActionResult[0]]: pendingActionResult[1].error
            } : null,
            statusCode: 200,
            loaderHeaders: {}
          };
        }
        let results = await callDataStrategy(
          "loader",
          request,
          matchesToLoad,
          matches,
          isRouteRequest,
          requestContext,
          dataStrategy
        );
        if (request.signal.aborted) {
          throwStaticHandlerAbortedError(request, isRouteRequest);
        }
        let context = processRouteLoaderData(
          matches,
          results,
          pendingActionResult,
          true,
          skipLoaderErrorBubbling
        );
        let executedLoaders = new Set(
          matchesToLoad.map((match) => match.route.id)
        );
        matches.forEach((match) => {
          if (!executedLoaders.has(match.route.id)) {
            context.loaderData[match.route.id] = null;
          }
        });
        return {
          ...context,
          matches
        };
      }
      async function callDataStrategy(type, request, matchesToLoad, matches, isRouteRequest, requestContext, dataStrategy) {
        let results = await callDataStrategyImpl(
          dataStrategy || defaultDataStrategy,
          type,
          null,
          request,
          matchesToLoad,
          matches,
          null,
          manifest,
          mapRouteProperties2,
          requestContext
        );
        let dataResults = {};
        await Promise.all(
          matches.map(async (match) => {
            if (!(match.route.id in results)) {
              return;
            }
            let result = results[match.route.id];
            if (isRedirectDataStrategyResult(result)) {
              let response = result.result;
              throw normalizeRelativeRoutingRedirectResponse(
                response,
                request,
                match.route.id,
                matches,
                basename2
              );
            }
            if (isResponse(result.result) && isRouteRequest) {
              throw result;
            }
            dataResults[match.route.id] = await convertDataStrategyResultToDataResult(result);
          })
        );
        return dataResults;
      }
      return {
        dataRoutes,
        query,
        queryRoute
      };
    }
    function getStaticContextFromError(routes2, context, error) {
      let newContext = {
        ...context,
        statusCode: isRouteErrorResponse2(error) ? error.status : 500,
        errors: {
          [context._deepestRenderedBoundaryId || routes2[0].id]: error
        }
      };
      return newContext;
    }
    function throwStaticHandlerAbortedError(request, isRouteRequest) {
      if (request.signal.reason !== void 0) {
        throw request.signal.reason;
      }
      let method = isRouteRequest ? "queryRoute" : "query";
      throw new Error(
        `${method}() call aborted without an \`AbortSignal.reason\`: ${request.method} ${request.url}`
      );
    }
    function isSubmissionNavigation(opts) {
      return opts != null && ("formData" in opts && opts.formData != null || "body" in opts && opts.body !== void 0);
    }
    function normalizeTo(location, matches, basename2, to, fromRouteId, relative) {
      let contextualMatches;
      let activeRouteMatch;
      if (fromRouteId) {
        contextualMatches = [];
        for (let match of matches) {
          contextualMatches.push(match);
          if (match.route.id === fromRouteId) {
            activeRouteMatch = match;
            break;
          }
        }
      } else {
        contextualMatches = matches;
        activeRouteMatch = matches[matches.length - 1];
      }
      let path = resolveTo(
        to ? to : ".",
        getResolveToMatches(contextualMatches),
        stripBasename(location.pathname, basename2) || location.pathname,
        relative === "path"
      );
      if (to == null) {
        path.search = location.search;
        path.hash = location.hash;
      }
      if ((to == null || to === "" || to === ".") && activeRouteMatch) {
        let nakedIndex = hasNakedIndexQuery(path.search);
        if (activeRouteMatch.route.index && !nakedIndex) {
          path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
        } else if (!activeRouteMatch.route.index && nakedIndex) {
          let params = new URLSearchParams(path.search);
          let indexValues = params.getAll("index");
          params.delete("index");
          indexValues.filter((v) => v).forEach((v) => params.append("index", v));
          let qs = params.toString();
          path.search = qs ? `?${qs}` : "";
        }
      }
      if (basename2 !== "/") {
        path.pathname = path.pathname === "/" ? basename2 : joinPaths([basename2, path.pathname]);
      }
      return createPath(path);
    }
    function normalizeNavigateOptions(isFetcher, path, opts) {
      if (!opts || !isSubmissionNavigation(opts)) {
        return { path };
      }
      if (opts.formMethod && !isValidMethod(opts.formMethod)) {
        return {
          path,
          error: getInternalRouterError(405, { method: opts.formMethod })
        };
      }
      let getInvalidBodyError = () => ({
        path,
        error: getInternalRouterError(400, { type: "invalid-body" })
      });
      let rawFormMethod = opts.formMethod || "get";
      let formMethod = rawFormMethod.toUpperCase();
      let formAction = stripHashFromPath(path);
      if (opts.body !== void 0) {
        if (opts.formEncType === "text/plain") {
          if (!isMutationMethod(formMethod)) {
            return getInvalidBodyError();
          }
          let text = typeof opts.body === "string" ? opts.body : opts.body instanceof FormData || opts.body instanceof URLSearchParams ? (
            // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
            Array.from(opts.body.entries()).reduce(
              (acc, [name, value]) => `${acc}${name}=${value}
`,
              ""
            )
          ) : String(opts.body);
          return {
            path,
            submission: {
              formMethod,
              formAction,
              formEncType: opts.formEncType,
              formData: void 0,
              json: void 0,
              text
            }
          };
        } else if (opts.formEncType === "application/json") {
          if (!isMutationMethod(formMethod)) {
            return getInvalidBodyError();
          }
          try {
            let json = typeof opts.body === "string" ? JSON.parse(opts.body) : opts.body;
            return {
              path,
              submission: {
                formMethod,
                formAction,
                formEncType: opts.formEncType,
                formData: void 0,
                json,
                text: void 0
              }
            };
          } catch (e) {
            return getInvalidBodyError();
          }
        }
      }
      invariant(
        typeof FormData === "function",
        "FormData is not available in this environment"
      );
      let searchParams;
      let formData;
      if (opts.formData) {
        searchParams = convertFormDataToSearchParams(opts.formData);
        formData = opts.formData;
      } else if (opts.body instanceof FormData) {
        searchParams = convertFormDataToSearchParams(opts.body);
        formData = opts.body;
      } else if (opts.body instanceof URLSearchParams) {
        searchParams = opts.body;
        formData = convertSearchParamsToFormData(searchParams);
      } else if (opts.body == null) {
        searchParams = new URLSearchParams();
        formData = new FormData();
      } else {
        try {
          searchParams = new URLSearchParams(opts.body);
          formData = convertSearchParamsToFormData(searchParams);
        } catch (e) {
          return getInvalidBodyError();
        }
      }
      let submission = {
        formMethod,
        formAction,
        formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
        formData,
        json: void 0,
        text: void 0
      };
      if (isMutationMethod(submission.formMethod)) {
        return { path, submission };
      }
      let parsedPath = parsePath(path);
      if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
        searchParams.append("index", "");
      }
      parsedPath.search = `?${searchParams}`;
      return { path: createPath(parsedPath), submission };
    }
    function getLoaderMatchesUntilBoundary(matches, boundaryId, includeBoundary = false) {
      let index = matches.findIndex((m) => m.route.id === boundaryId);
      if (index >= 0) {
        return matches.slice(0, includeBoundary ? index + 1 : index);
      }
      return matches;
    }
    function getMatchesToLoad(history, state, matches, submission, location, initialHydration, isRevalidationRequired, cancelledFetcherLoads, fetchersQueuedForDeletion, fetchLoadMatches, fetchRedirectIds, routesToUse, basename2, pendingActionResult) {
      let actionResult = pendingActionResult ? isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : pendingActionResult[1].data : void 0;
      let currentUrl = history.createURL(state.location);
      let nextUrl = history.createURL(location);
      let boundaryMatches = matches;
      if (initialHydration && state.errors) {
        boundaryMatches = getLoaderMatchesUntilBoundary(
          matches,
          Object.keys(state.errors)[0],
          true
        );
      } else if (pendingActionResult && isErrorResult(pendingActionResult[1])) {
        boundaryMatches = getLoaderMatchesUntilBoundary(
          matches,
          pendingActionResult[0]
        );
      }
      let actionStatus = pendingActionResult ? pendingActionResult[1].statusCode : void 0;
      let shouldSkipRevalidation = actionStatus && actionStatus >= 400;
      let navigationMatches = boundaryMatches.filter((match, index) => {
        let { route } = match;
        if (route.lazy) {
          return true;
        }
        if (route.loader == null) {
          return false;
        }
        if (initialHydration) {
          return shouldLoadRouteOnHydration(route, state.loaderData, state.errors);
        }
        if (isNewLoader(state.loaderData, state.matches[index], match)) {
          return true;
        }
        let currentRouteMatch = state.matches[index];
        let nextRouteMatch = match;
        return shouldRevalidateLoader(match, {
          currentUrl,
          currentParams: currentRouteMatch.params,
          nextUrl,
          nextParams: nextRouteMatch.params,
          ...submission,
          actionResult,
          actionStatus,
          defaultShouldRevalidate: shouldSkipRevalidation ? false : (
            // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
            isRevalidationRequired || currentUrl.pathname + currentUrl.search === nextUrl.pathname + nextUrl.search || // Search params affect all loaders
            currentUrl.search !== nextUrl.search || isNewRouteInstance(currentRouteMatch, nextRouteMatch)
          )
        });
      });
      let revalidatingFetchers = [];
      fetchLoadMatches.forEach((f, key) => {
        if (initialHydration || !matches.some((m) => m.route.id === f.routeId) || fetchersQueuedForDeletion.has(key)) {
          return;
        }
        let fetcherMatches = matchRoutes(routesToUse, f.path, basename2);
        if (!fetcherMatches) {
          revalidatingFetchers.push({
            key,
            routeId: f.routeId,
            path: f.path,
            matches: null,
            match: null,
            controller: null
          });
          return;
        }
        let fetcher = state.fetchers.get(key);
        let fetcherMatch = getTargetMatch(fetcherMatches, f.path);
        let shouldRevalidate = false;
        if (fetchRedirectIds.has(key)) {
          shouldRevalidate = false;
        } else if (cancelledFetcherLoads.has(key)) {
          cancelledFetcherLoads.delete(key);
          shouldRevalidate = true;
        } else if (fetcher && fetcher.state !== "idle" && fetcher.data === void 0) {
          shouldRevalidate = isRevalidationRequired;
        } else {
          shouldRevalidate = shouldRevalidateLoader(fetcherMatch, {
            currentUrl,
            currentParams: state.matches[state.matches.length - 1].params,
            nextUrl,
            nextParams: matches[matches.length - 1].params,
            ...submission,
            actionResult,
            actionStatus,
            defaultShouldRevalidate: shouldSkipRevalidation ? false : isRevalidationRequired
          });
        }
        if (shouldRevalidate) {
          revalidatingFetchers.push({
            key,
            routeId: f.routeId,
            path: f.path,
            matches: fetcherMatches,
            match: fetcherMatch,
            controller: new AbortController()
          });
        }
      });
      return [navigationMatches, revalidatingFetchers];
    }
    function shouldLoadRouteOnHydration(route, loaderData, errors) {
      if (route.lazy) {
        return true;
      }
      if (!route.loader) {
        return false;
      }
      let hasData = loaderData != null && loaderData[route.id] !== void 0;
      let hasError = errors != null && errors[route.id] !== void 0;
      if (!hasData && hasError) {
        return false;
      }
      if (typeof route.loader === "function" && route.loader.hydrate === true) {
        return true;
      }
      return !hasData && !hasError;
    }
    function isNewLoader(currentLoaderData, currentMatch, match) {
      let isNew = (
        // [a] -> [a, b]
        !currentMatch || // [a, b] -> [a, c]
        match.route.id !== currentMatch.route.id
      );
      let isMissingData = !currentLoaderData.hasOwnProperty(match.route.id);
      return isNew || isMissingData;
    }
    function isNewRouteInstance(currentMatch, match) {
      let currentPath = currentMatch.route.path;
      return (
        // param change for this match, /users/123 -> /users/456
        currentMatch.pathname !== match.pathname || // splat param changed, which is not present in match.path
        // e.g. /files/images/avatar.jpg -> files/finances.xls
        currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]
      );
    }
    function shouldRevalidateLoader(loaderMatch, arg) {
      if (loaderMatch.route.shouldRevalidate) {
        let routeChoice = loaderMatch.route.shouldRevalidate(arg);
        if (typeof routeChoice === "boolean") {
          return routeChoice;
        }
      }
      return arg.defaultShouldRevalidate;
    }
    function patchRoutesImpl(routeId, children, routesToUse, manifest, mapRouteProperties2) {
      let childrenToPatch;
      if (routeId) {
        let route = manifest[routeId];
        invariant(
          route,
          `No route found to patch children into: routeId = ${routeId}`
        );
        if (!route.children) {
          route.children = [];
        }
        childrenToPatch = route.children;
      } else {
        childrenToPatch = routesToUse;
      }
      let uniqueChildren = children.filter(
        (newRoute) => !childrenToPatch.some(
          (existingRoute) => isSameRoute(newRoute, existingRoute)
        )
      );
      let newRoutes = convertRoutesToDataRoutes(
        uniqueChildren,
        mapRouteProperties2,
        [routeId || "_", "patch", String(childrenToPatch?.length || "0")],
        manifest
      );
      childrenToPatch.push(...newRoutes);
    }
    function isSameRoute(newRoute, existingRoute) {
      if ("id" in newRoute && "id" in existingRoute && newRoute.id === existingRoute.id) {
        return true;
      }
      if (!(newRoute.index === existingRoute.index && newRoute.path === existingRoute.path && newRoute.caseSensitive === existingRoute.caseSensitive)) {
        return false;
      }
      if ((!newRoute.children || newRoute.children.length === 0) && (!existingRoute.children || existingRoute.children.length === 0)) {
        return true;
      }
      return newRoute.children.every(
        (aChild, i) => existingRoute.children?.some((bChild) => isSameRoute(aChild, bChild))
      );
    }
    async function loadLazyRouteModule(route, mapRouteProperties2, manifest) {
      if (!route.lazy) {
        return;
      }
      let lazyRoute = await route.lazy();
      if (!route.lazy) {
        return;
      }
      let routeToUpdate = manifest[route.id];
      invariant(routeToUpdate, "No route found in manifest");
      let routeUpdates = {};
      for (let lazyRouteProperty in lazyRoute) {
        let staticRouteValue = routeToUpdate[lazyRouteProperty];
        let isPropertyStaticallyDefined = staticRouteValue !== void 0 && // This property isn't static since it should always be updated based
        // on the route updates
        lazyRouteProperty !== "hasErrorBoundary";
        warning(
          !isPropertyStaticallyDefined,
          `Route "${routeToUpdate.id}" has a static property "${lazyRouteProperty}" defined but its lazy function is also returning a value for this property. The lazy route property "${lazyRouteProperty}" will be ignored.`
        );
        if (!isPropertyStaticallyDefined && !immutableRouteKeys.has(lazyRouteProperty)) {
          routeUpdates[lazyRouteProperty] = lazyRoute[lazyRouteProperty];
        }
      }
      Object.assign(routeToUpdate, routeUpdates);
      Object.assign(routeToUpdate, {
        // To keep things framework agnostic, we use the provided `mapRouteProperties`
        // function to set the framework-aware properties (`element`/`hasErrorBoundary`)
        // since the logic will differ between frameworks.
        ...mapRouteProperties2(routeToUpdate),
        lazy: void 0
      });
    }
    async function defaultDataStrategy({
      matches
    }) {
      let matchesToLoad = matches.filter((m) => m.shouldLoad);
      let results = await Promise.all(matchesToLoad.map((m) => m.resolve()));
      return results.reduce(
        (acc, result, i) => Object.assign(acc, { [matchesToLoad[i].route.id]: result }),
        {}
      );
    }
    async function callDataStrategyImpl(dataStrategyImpl, type, state, request, matchesToLoad, matches, fetcherKey, manifest, mapRouteProperties2, requestContext) {
      let loadRouteDefinitionsPromises = matches.map(
        (m) => m.route.lazy ? loadLazyRouteModule(m.route, mapRouteProperties2, manifest) : void 0
      );
      let dsMatches = matches.map((match, i) => {
        let loadRoutePromise = loadRouteDefinitionsPromises[i];
        let shouldLoad = matchesToLoad.some((m) => m.route.id === match.route.id);
        let resolve = async (handlerOverride) => {
          if (handlerOverride && request.method === "GET" && (match.route.lazy || match.route.loader)) {
            shouldLoad = true;
          }
          return shouldLoad ? callLoaderOrAction(
            type,
            request,
            match,
            loadRoutePromise,
            handlerOverride,
            requestContext
          ) : Promise.resolve({ type: "data", result: void 0 });
        };
        return {
          ...match,
          shouldLoad,
          resolve
        };
      });
      let results = await dataStrategyImpl({
        matches: dsMatches,
        request,
        params: matches[0].params,
        fetcherKey,
        context: requestContext
      });
      try {
        await Promise.all(loadRouteDefinitionsPromises);
      } catch (e) {
      }
      return results;
    }
    async function callLoaderOrAction(type, request, match, loadRoutePromise, handlerOverride, staticContext) {
      let result;
      let onReject;
      let runHandler = (handler2) => {
        let reject;
        let abortPromise = new Promise((_, r) => reject = r);
        onReject = () => reject();
        request.signal.addEventListener("abort", onReject);
        let actualHandler = (ctx) => {
          if (typeof handler2 !== "function") {
            return Promise.reject(
              new Error(
                `You cannot call the handler for a route which defines a boolean "${type}" [routeId: ${match.route.id}]`
              )
            );
          }
          return handler2(
            {
              request,
              params: match.params,
              context: staticContext
            },
            ...ctx !== void 0 ? [ctx] : []
          );
        };
        let handlerPromise = (async () => {
          try {
            let val = await (handlerOverride ? handlerOverride((ctx) => actualHandler(ctx)) : actualHandler());
            return { type: "data", result: val };
          } catch (e) {
            return { type: "error", result: e };
          }
        })();
        return Promise.race([handlerPromise, abortPromise]);
      };
      try {
        let handler2 = match.route[type];
        if (loadRoutePromise) {
          if (handler2) {
            let handlerError;
            let [value] = await Promise.all([
              // If the handler throws, don't let it immediately bubble out,
              // since we need to let the lazy() execution finish so we know if this
              // route has a boundary that can handle the error
              runHandler(handler2).catch((e) => {
                handlerError = e;
              }),
              loadRoutePromise
            ]);
            if (handlerError !== void 0) {
              throw handlerError;
            }
            result = value;
          } else {
            await loadRoutePromise;
            handler2 = match.route[type];
            if (handler2) {
              result = await runHandler(handler2);
            } else if (type === "action") {
              let url = new URL(request.url);
              let pathname = url.pathname + url.search;
              throw getInternalRouterError(405, {
                method: request.method,
                pathname,
                routeId: match.route.id
              });
            } else {
              return { type: "data", result: void 0 };
            }
          }
        } else if (!handler2) {
          let url = new URL(request.url);
          let pathname = url.pathname + url.search;
          throw getInternalRouterError(404, {
            pathname
          });
        } else {
          result = await runHandler(handler2);
        }
      } catch (e) {
        return { type: "error", result: e };
      } finally {
        if (onReject) {
          request.signal.removeEventListener("abort", onReject);
        }
      }
      return result;
    }
    async function convertDataStrategyResultToDataResult(dataStrategyResult) {
      let { result, type } = dataStrategyResult;
      if (isResponse(result)) {
        let data2;
        try {
          let contentType = result.headers.get("Content-Type");
          if (contentType && /\bapplication\/json\b/.test(contentType)) {
            if (result.body == null) {
              data2 = null;
            } else {
              data2 = await result.json();
            }
          } else {
            data2 = await result.text();
          }
        } catch (e) {
          return { type: "error", error: e };
        }
        if (type === "error") {
          return {
            type: "error",
            error: new ErrorResponseImpl(result.status, result.statusText, data2),
            statusCode: result.status,
            headers: result.headers
          };
        }
        return {
          type: "data",
          data: data2,
          statusCode: result.status,
          headers: result.headers
        };
      }
      if (type === "error") {
        if (isDataWithResponseInit(result)) {
          if (result.data instanceof Error) {
            return {
              type: "error",
              error: result.data,
              statusCode: result.init?.status
            };
          }
          result = new ErrorResponseImpl(
            result.init?.status || 500,
            void 0,
            result.data
          );
        }
        return {
          type: "error",
          error: result,
          statusCode: isRouteErrorResponse2(result) ? result.status : void 0
        };
      }
      if (isDataWithResponseInit(result)) {
        return {
          type: "data",
          data: result.data,
          statusCode: result.init?.status,
          headers: result.init?.headers ? new Headers(result.init.headers) : void 0
        };
      }
      return { type: "data", data: result };
    }
    function normalizeRelativeRoutingRedirectResponse(response, request, routeId, matches, basename2) {
      let location = response.headers.get("Location");
      invariant(
        location,
        "Redirects returned/thrown from loaders/actions must have a Location header"
      );
      if (!ABSOLUTE_URL_REGEX.test(location)) {
        let trimmedMatches = matches.slice(
          0,
          matches.findIndex((m) => m.route.id === routeId) + 1
        );
        location = normalizeTo(
          new URL(request.url),
          trimmedMatches,
          basename2,
          location
        );
        response.headers.set("Location", location);
      }
      return response;
    }
    function normalizeRedirectLocation(location, currentUrl, basename2) {
      if (ABSOLUTE_URL_REGEX.test(location)) {
        let normalizedLocation = location;
        let url = normalizedLocation.startsWith("//") ? new URL(currentUrl.protocol + normalizedLocation) : new URL(normalizedLocation);
        let isSameBasename = stripBasename(url.pathname, basename2) != null;
        if (url.origin === currentUrl.origin && isSameBasename) {
          return url.pathname + url.search + url.hash;
        }
      }
      return location;
    }
    function createClientSideRequest(history, location, signal, submission) {
      let url = history.createURL(stripHashFromPath(location)).toString();
      let init = { signal };
      if (submission && isMutationMethod(submission.formMethod)) {
        let { formMethod, formEncType } = submission;
        init.method = formMethod.toUpperCase();
        if (formEncType === "application/json") {
          init.headers = new Headers({ "Content-Type": formEncType });
          init.body = JSON.stringify(submission.json);
        } else if (formEncType === "text/plain") {
          init.body = submission.text;
        } else if (formEncType === "application/x-www-form-urlencoded" && submission.formData) {
          init.body = convertFormDataToSearchParams(submission.formData);
        } else {
          init.body = submission.formData;
        }
      }
      return new Request(url, init);
    }
    function convertFormDataToSearchParams(formData) {
      let searchParams = new URLSearchParams();
      for (let [key, value] of formData.entries()) {
        searchParams.append(key, typeof value === "string" ? value : value.name);
      }
      return searchParams;
    }
    function convertSearchParamsToFormData(searchParams) {
      let formData = new FormData();
      for (let [key, value] of searchParams.entries()) {
        formData.append(key, value);
      }
      return formData;
    }
    function processRouteLoaderData(matches, results, pendingActionResult, isStaticHandler = false, skipLoaderErrorBubbling = false) {
      let loaderData = {};
      let errors = null;
      let statusCode;
      let foundError = false;
      let loaderHeaders = {};
      let pendingError = pendingActionResult && isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : void 0;
      matches.forEach((match) => {
        if (!(match.route.id in results)) {
          return;
        }
        let id = match.route.id;
        let result = results[id];
        invariant(
          !isRedirectResult(result),
          "Cannot handle redirect results in processLoaderData"
        );
        if (isErrorResult(result)) {
          let error = result.error;
          if (pendingError !== void 0) {
            error = pendingError;
            pendingError = void 0;
          }
          errors = errors || {};
          if (skipLoaderErrorBubbling) {
            errors[id] = error;
          } else {
            let boundaryMatch = findNearestBoundary(matches, id);
            if (errors[boundaryMatch.route.id] == null) {
              errors[boundaryMatch.route.id] = error;
            }
          }
          if (!isStaticHandler) {
            loaderData[id] = ResetLoaderDataSymbol;
          }
          if (!foundError) {
            foundError = true;
            statusCode = isRouteErrorResponse2(result.error) ? result.error.status : 500;
          }
          if (result.headers) {
            loaderHeaders[id] = result.headers;
          }
        } else {
          loaderData[id] = result.data;
          if (result.statusCode && result.statusCode !== 200 && !foundError) {
            statusCode = result.statusCode;
          }
          if (result.headers) {
            loaderHeaders[id] = result.headers;
          }
        }
      });
      if (pendingError !== void 0 && pendingActionResult) {
        errors = { [pendingActionResult[0]]: pendingError };
        loaderData[pendingActionResult[0]] = void 0;
      }
      return {
        loaderData,
        errors,
        statusCode: statusCode || 200,
        loaderHeaders
      };
    }
    function processLoaderData(state, matches, results, pendingActionResult, revalidatingFetchers, fetcherResults) {
      let { loaderData, errors } = processRouteLoaderData(
        matches,
        results,
        pendingActionResult
      );
      revalidatingFetchers.forEach((rf) => {
        let { key, match, controller } = rf;
        let result = fetcherResults[key];
        invariant(result, "Did not find corresponding fetcher result");
        if (controller && controller.signal.aborted) {
          return;
        } else if (isErrorResult(result)) {
          let boundaryMatch = findNearestBoundary(state.matches, match?.route.id);
          if (!(errors && errors[boundaryMatch.route.id])) {
            errors = {
              ...errors,
              [boundaryMatch.route.id]: result.error
            };
          }
          state.fetchers.delete(key);
        } else if (isRedirectResult(result)) {
          invariant(false, "Unhandled fetcher revalidation redirect");
        } else {
          let doneFetcher = getDoneFetcher(result.data);
          state.fetchers.set(key, doneFetcher);
        }
      });
      return { loaderData, errors };
    }
    function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
      let mergedLoaderData = Object.entries(newLoaderData).filter(([, v]) => v !== ResetLoaderDataSymbol).reduce((merged, [k, v]) => {
        merged[k] = v;
        return merged;
      }, {});
      for (let match of matches) {
        let id = match.route.id;
        if (!newLoaderData.hasOwnProperty(id) && loaderData.hasOwnProperty(id) && match.route.loader) {
          mergedLoaderData[id] = loaderData[id];
        }
        if (errors && errors.hasOwnProperty(id)) {
          break;
        }
      }
      return mergedLoaderData;
    }
    function getActionDataForCommit(pendingActionResult) {
      if (!pendingActionResult) {
        return {};
      }
      return isErrorResult(pendingActionResult[1]) ? {
        // Clear out prior actionData on errors
        actionData: {}
      } : {
        actionData: {
          [pendingActionResult[0]]: pendingActionResult[1].data
        }
      };
    }
    function findNearestBoundary(matches, routeId) {
      let eligibleMatches = routeId ? matches.slice(0, matches.findIndex((m) => m.route.id === routeId) + 1) : [...matches];
      return eligibleMatches.reverse().find((m) => m.route.hasErrorBoundary === true) || matches[0];
    }
    function getShortCircuitMatches(routes2) {
      let route = routes2.length === 1 ? routes2[0] : routes2.find((r) => r.index || !r.path || r.path === "/") || {
        id: `__shim-error-route__`
      };
      return {
        matches: [
          {
            params: {},
            pathname: "",
            pathnameBase: "",
            route
          }
        ],
        route
      };
    }
    function getInternalRouterError(status, {
      pathname,
      routeId,
      method,
      type,
      message
    } = {}) {
      let statusText = "Unknown Server Error";
      let errorMessage = "Unknown @remix-run/router error";
      if (status === 400) {
        statusText = "Bad Request";
        if (method && pathname && routeId) {
          errorMessage = `You made a ${method} request to "${pathname}" but did not provide a \`loader\` for route "${routeId}", so there is no way to handle the request.`;
        } else if (type === "invalid-body") {
          errorMessage = "Unable to encode submission body";
        }
      } else if (status === 403) {
        statusText = "Forbidden";
        errorMessage = `Route "${routeId}" does not match URL "${pathname}"`;
      } else if (status === 404) {
        statusText = "Not Found";
        errorMessage = `No route matches URL "${pathname}"`;
      } else if (status === 405) {
        statusText = "Method Not Allowed";
        if (method && pathname && routeId) {
          errorMessage = `You made a ${method.toUpperCase()} request to "${pathname}" but did not provide an \`action\` for route "${routeId}", so there is no way to handle the request.`;
        } else if (method) {
          errorMessage = `Invalid request method "${method.toUpperCase()}"`;
        }
      }
      return new ErrorResponseImpl(
        status || 500,
        statusText,
        new Error(errorMessage),
        true
      );
    }
    function findRedirect(results) {
      let entries = Object.entries(results);
      for (let i = entries.length - 1; i >= 0; i--) {
        let [key, result] = entries[i];
        if (isRedirectResult(result)) {
          return { key, result };
        }
      }
    }
    function stripHashFromPath(path) {
      let parsedPath = typeof path === "string" ? parsePath(path) : path;
      return createPath({ ...parsedPath, hash: "" });
    }
    function isHashChangeOnly(a, b) {
      if (a.pathname !== b.pathname || a.search !== b.search) {
        return false;
      }
      if (a.hash === "") {
        return b.hash !== "";
      } else if (a.hash === b.hash) {
        return true;
      } else if (b.hash !== "") {
        return true;
      }
      return false;
    }
    function isDataStrategyResult(result) {
      return result != null && typeof result === "object" && "type" in result && "result" in result && (result.type === "data" || result.type === "error");
    }
    function isRedirectDataStrategyResult(result) {
      return isResponse(result.result) && redirectStatusCodes.has(result.result.status);
    }
    function isErrorResult(result) {
      return result.type === "error";
    }
    function isRedirectResult(result) {
      return (result && result.type) === "redirect";
    }
    function isDataWithResponseInit(value) {
      return typeof value === "object" && value != null && "type" in value && "data" in value && "init" in value && value.type === "DataWithResponseInit";
    }
    function isResponse(value) {
      return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
    }
    function isRedirectStatusCode(statusCode) {
      return redirectStatusCodes.has(statusCode);
    }
    function isRedirectResponse(result) {
      return isResponse(result) && isRedirectStatusCode(result.status) && result.headers.has("Location");
    }
    function isValidMethod(method) {
      return validRequestMethods.has(method.toUpperCase());
    }
    function isMutationMethod(method) {
      return validMutationMethods.has(method.toUpperCase());
    }
    function hasNakedIndexQuery(search) {
      return new URLSearchParams(search).getAll("index").some((v) => v === "");
    }
    function getTargetMatch(matches, location) {
      let search = typeof location === "string" ? parsePath(location).search : location.search;
      if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) {
        return matches[matches.length - 1];
      }
      let pathMatches = getPathContributingMatches(matches);
      return pathMatches[pathMatches.length - 1];
    }
    function getSubmissionFromNavigation(navigation) {
      let { formMethod, formAction, formEncType, text, formData, json } = navigation;
      if (!formMethod || !formAction || !formEncType) {
        return;
      }
      if (text != null) {
        return {
          formMethod,
          formAction,
          formEncType,
          formData: void 0,
          json: void 0,
          text
        };
      } else if (formData != null) {
        return {
          formMethod,
          formAction,
          formEncType,
          formData,
          json: void 0,
          text: void 0
        };
      } else if (json !== void 0) {
        return {
          formMethod,
          formAction,
          formEncType,
          formData: void 0,
          json,
          text: void 0
        };
      }
    }
    function getLoadingNavigation(location, submission) {
      if (submission) {
        let navigation = {
          state: "loading",
          location,
          formMethod: submission.formMethod,
          formAction: submission.formAction,
          formEncType: submission.formEncType,
          formData: submission.formData,
          json: submission.json,
          text: submission.text
        };
        return navigation;
      } else {
        let navigation = {
          state: "loading",
          location,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0
        };
        return navigation;
      }
    }
    function getSubmittingNavigation(location, submission) {
      let navigation = {
        state: "submitting",
        location,
        formMethod: submission.formMethod,
        formAction: submission.formAction,
        formEncType: submission.formEncType,
        formData: submission.formData,
        json: submission.json,
        text: submission.text
      };
      return navigation;
    }
    function getLoadingFetcher(submission, data2) {
      if (submission) {
        let fetcher = {
          state: "loading",
          formMethod: submission.formMethod,
          formAction: submission.formAction,
          formEncType: submission.formEncType,
          formData: submission.formData,
          json: submission.json,
          text: submission.text,
          data: data2
        };
        return fetcher;
      } else {
        let fetcher = {
          state: "loading",
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
          data: data2
        };
        return fetcher;
      }
    }
    function getSubmittingFetcher(submission, existingFetcher) {
      let fetcher = {
        state: "submitting",
        formMethod: submission.formMethod,
        formAction: submission.formAction,
        formEncType: submission.formEncType,
        formData: submission.formData,
        json: submission.json,
        text: submission.text,
        data: existingFetcher ? existingFetcher.data : void 0
      };
      return fetcher;
    }
    function getDoneFetcher(data2) {
      let fetcher = {
        state: "idle",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: data2
      };
      return fetcher;
    }
    function restoreAppliedTransitions(_window, transitions) {
      try {
        let sessionPositions = _window.sessionStorage.getItem(
          TRANSITIONS_STORAGE_KEY
        );
        if (sessionPositions) {
          let json = JSON.parse(sessionPositions);
          for (let [k, v] of Object.entries(json || {})) {
            if (v && Array.isArray(v)) {
              transitions.set(k, new Set(v || []));
            }
          }
        }
      } catch (e) {
      }
    }
    function persistAppliedTransitions(_window, transitions) {
      if (transitions.size > 0) {
        let json = {};
        for (let [k, v] of transitions) {
          json[k] = [...v];
        }
        try {
          _window.sessionStorage.setItem(
            TRANSITIONS_STORAGE_KEY,
            JSON.stringify(json)
          );
        } catch (error) {
          warning(
            false,
            `Failed to save applied view transitions in sessionStorage (${error}).`
          );
        }
      }
    }
    function createDeferred() {
      let resolve;
      let reject;
      let promise = new Promise((res, rej) => {
        resolve = async (val) => {
          res(val);
          try {
            await promise;
          } catch (e) {
          }
        };
        reject = async (error) => {
          rej(error);
          try {
            await promise;
          } catch (e) {
          }
        };
      });
      return {
        promise,
        //@ts-ignore
        resolve,
        //@ts-ignore
        reject
      };
    }
    var React3 = __toESM2(require_react());
    var React = __toESM2(require_react());
    var DataRouterContext = React.createContext(null);
    DataRouterContext.displayName = "DataRouter";
    var DataRouterStateContext = React.createContext(null);
    DataRouterStateContext.displayName = "DataRouterState";
    var ViewTransitionContext = React.createContext({
      isTransitioning: false
    });
    ViewTransitionContext.displayName = "ViewTransition";
    var FetchersContext = React.createContext(
      /* @__PURE__ */ new Map()
    );
    FetchersContext.displayName = "Fetchers";
    var AwaitContext = React.createContext(null);
    AwaitContext.displayName = "Await";
    var NavigationContext = React.createContext(
      null
    );
    NavigationContext.displayName = "Navigation";
    var LocationContext = React.createContext(
      null
    );
    LocationContext.displayName = "Location";
    var RouteContext = React.createContext({
      outlet: null,
      matches: [],
      isDataRoute: false
    });
    RouteContext.displayName = "Route";
    var RouteErrorContext = React.createContext(null);
    RouteErrorContext.displayName = "RouteError";
    var React2 = __toESM2(require_react());
    var ENABLE_DEV_WARNINGS = true;
    function useHref(to, { relative } = {}) {
      invariant(
        useInRouterContext(),
        // TODO: This error is probably because they somehow have 2 versions of the
        // router loaded. We can help them understand how to avoid that.
        `useHref() may be used only in the context of a <Router> component.`
      );
      let { basename: basename2, navigator: navigator2 } = React2.useContext(NavigationContext);
      let { hash, pathname, search } = useResolvedPath(to, { relative });
      let joinedPathname = pathname;
      if (basename2 !== "/") {
        joinedPathname = pathname === "/" ? basename2 : joinPaths([basename2, pathname]);
      }
      return navigator2.createHref({ pathname: joinedPathname, search, hash });
    }
    function useInRouterContext() {
      return React2.useContext(LocationContext) != null;
    }
    function useLocation() {
      invariant(
        useInRouterContext(),
        // TODO: This error is probably because they somehow have 2 versions of the
        // router loaded. We can help them understand how to avoid that.
        `useLocation() may be used only in the context of a <Router> component.`
      );
      return React2.useContext(LocationContext).location;
    }
    function useNavigationType() {
      return React2.useContext(LocationContext).navigationType;
    }
    function useMatch(pattern2) {
      invariant(
        useInRouterContext(),
        // TODO: This error is probably because they somehow have 2 versions of the
        // router loaded. We can help them understand how to avoid that.
        `useMatch() may be used only in the context of a <Router> component.`
      );
      let { pathname } = useLocation();
      return React2.useMemo(
        () => matchPath(pattern2, decodePath(pathname)),
        [pathname, pattern2]
      );
    }
    var navigateEffectWarning = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
    function useIsomorphicLayoutEffect(cb) {
      let isStatic = React2.useContext(NavigationContext).static;
      if (!isStatic) {
        React2.useLayoutEffect(cb);
      }
    }
    function useNavigate() {
      let { isDataRoute } = React2.useContext(RouteContext);
      return isDataRoute ? useNavigateStable() : useNavigateUnstable();
    }
    function useNavigateUnstable() {
      invariant(
        useInRouterContext(),
        // TODO: This error is probably because they somehow have 2 versions of the
        // router loaded. We can help them understand how to avoid that.
        `useNavigate() may be used only in the context of a <Router> component.`
      );
      let dataRouterContext = React2.useContext(DataRouterContext);
      let { basename: basename2, navigator: navigator2 } = React2.useContext(NavigationContext);
      let { matches } = React2.useContext(RouteContext);
      let { pathname: locationPathname } = useLocation();
      let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
      let activeRef = React2.useRef(false);
      useIsomorphicLayoutEffect(() => {
        activeRef.current = true;
      });
      let navigate = React2.useCallback(
        (to, options = {}) => {
          warning(activeRef.current, navigateEffectWarning);
          if (!activeRef.current) return;
          if (typeof to === "number") {
            navigator2.go(to);
            return;
          }
          let path = resolveTo(
            to,
            JSON.parse(routePathnamesJson),
            locationPathname,
            options.relative === "path"
          );
          if (dataRouterContext == null && basename2 !== "/") {
            path.pathname = path.pathname === "/" ? basename2 : joinPaths([basename2, path.pathname]);
          }
          (!!options.replace ? navigator2.replace : navigator2.push)(
            path,
            options.state,
            options
          );
        },
        [
          basename2,
          navigator2,
          routePathnamesJson,
          locationPathname,
          dataRouterContext
        ]
      );
      return navigate;
    }
    var OutletContext = React2.createContext(null);
    function useOutletContext() {
      return React2.useContext(OutletContext);
    }
    function useOutlet(context) {
      let outlet = React2.useContext(RouteContext).outlet;
      if (outlet) {
        return /* @__PURE__ */ React2.createElement(OutletContext.Provider, { value: context }, outlet);
      }
      return outlet;
    }
    function useParams2() {
      let { matches } = React2.useContext(RouteContext);
      let routeMatch = matches[matches.length - 1];
      return routeMatch ? routeMatch.params : {};
    }
    function useResolvedPath(to, { relative } = {}) {
      let { matches } = React2.useContext(RouteContext);
      let { pathname: locationPathname } = useLocation();
      let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
      return React2.useMemo(
        () => resolveTo(
          to,
          JSON.parse(routePathnamesJson),
          locationPathname,
          relative === "path"
        ),
        [to, routePathnamesJson, locationPathname, relative]
      );
    }
    function useRoutes(routes2, locationArg) {
      return useRoutesImpl(routes2, locationArg);
    }
    function useRoutesImpl(routes2, locationArg, dataRouterState, future2) {
      invariant(
        useInRouterContext(),
        // TODO: This error is probably because they somehow have 2 versions of the
        // router loaded. We can help them understand how to avoid that.
        `useRoutes() may be used only in the context of a <Router> component.`
      );
      let { navigator: navigator2 } = React2.useContext(NavigationContext);
      let { matches: parentMatches } = React2.useContext(RouteContext);
      let routeMatch = parentMatches[parentMatches.length - 1];
      let parentParams = routeMatch ? routeMatch.params : {};
      let parentPathname = routeMatch ? routeMatch.pathname : "/";
      let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
      let parentRoute = routeMatch && routeMatch.route;
      if (ENABLE_DEV_WARNINGS) {
        let parentPath = parentRoute && parentRoute.path || "";
        warningOnce(
          parentPathname,
          !parentRoute || parentPath.endsWith("*") || parentPath.endsWith("*?"),
          `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${parentPathname}" (under <Route path="${parentPath}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${parentPath}"> to <Route path="${parentPath === "/" ? "*" : `${parentPath}/*`}">.`
        );
      }
      let locationFromContext = useLocation();
      let location;
      if (locationArg) {
        let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
        invariant(
          parentPathnameBase === "/" || parsedLocationArg.pathname?.startsWith(parentPathnameBase),
          `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${parentPathnameBase}" but pathname "${parsedLocationArg.pathname}" was given in the \`location\` prop.`
        );
        location = parsedLocationArg;
      } else {
        location = locationFromContext;
      }
      let pathname = location.pathname || "/";
      let remainingPathname = pathname;
      if (parentPathnameBase !== "/") {
        let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
        let segments = pathname.replace(/^\//, "").split("/");
        remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
      }
      let matches = matchRoutes(routes2, { pathname: remainingPathname });
      if (ENABLE_DEV_WARNINGS) {
        warning(
          parentRoute || matches != null,
          `No routes matched location "${location.pathname}${location.search}${location.hash}" `
        );
        warning(
          matches == null || matches[matches.length - 1].route.element !== void 0 || matches[matches.length - 1].route.Component !== void 0 || matches[matches.length - 1].route.lazy !== void 0,
          `Matched leaf route at location "${location.pathname}${location.search}${location.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
        );
      }
      let renderedMatches = _renderMatches(
        matches && matches.map(
          (match) => Object.assign({}, match, {
            params: Object.assign({}, parentParams, match.params),
            pathname: joinPaths([
              parentPathnameBase,
              // Re-encode pathnames that were decoded inside matchRoutes
              navigator2.encodeLocation ? navigator2.encodeLocation(match.pathname).pathname : match.pathname
            ]),
            pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
              parentPathnameBase,
              // Re-encode pathnames that were decoded inside matchRoutes
              navigator2.encodeLocation ? navigator2.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
            ])
          })
        ),
        parentMatches,
        dataRouterState,
        future2
      );
      if (locationArg && renderedMatches) {
        return /* @__PURE__ */ React2.createElement(
          LocationContext.Provider,
          {
            value: {
              location: {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
                ...location
              },
              navigationType: "POP"
              /* Pop */
            }
          },
          renderedMatches
        );
      }
      return renderedMatches;
    }
    function DefaultErrorComponent() {
      let error = useRouteError2();
      let message = isRouteErrorResponse2(error) ? `${error.status} ${error.statusText}` : error instanceof Error ? error.message : JSON.stringify(error);
      let stack = error instanceof Error ? error.stack : null;
      let lightgrey = "rgba(200,200,200, 0.5)";
      let preStyles = { padding: "0.5rem", backgroundColor: lightgrey };
      let codeStyles = { padding: "2px 4px", backgroundColor: lightgrey };
      let devInfo = null;
      if (ENABLE_DEV_WARNINGS) {
        console.error(
          "Error handled by React Router default ErrorBoundary:",
          error
        );
        devInfo = /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), /* @__PURE__ */ React2.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ React2.createElement("code", { style: codeStyles }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ React2.createElement("code", { style: codeStyles }, "errorElement"), " prop on your route."));
      }
      return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ React2.createElement("h3", { style: { fontStyle: "italic" } }, message), stack ? /* @__PURE__ */ React2.createElement("pre", { style: preStyles }, stack) : null, devInfo);
    }
    var defaultErrorElement = /* @__PURE__ */ React2.createElement(DefaultErrorComponent, null);
    var RenderErrorBoundary = class extends React2.Component {
      constructor(props) {
        super(props);
        this.state = {
          location: props.location,
          revalidation: props.revalidation,
          error: props.error
        };
      }
      static getDerivedStateFromError(error) {
        return { error };
      }
      static getDerivedStateFromProps(props, state) {
        if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
          return {
            error: props.error,
            location: props.location,
            revalidation: props.revalidation
          };
        }
        return {
          error: props.error !== void 0 ? props.error : state.error,
          location: state.location,
          revalidation: props.revalidation || state.revalidation
        };
      }
      componentDidCatch(error, errorInfo) {
        console.error(
          "React Router caught the following error during render",
          error,
          errorInfo
        );
      }
      render() {
        return this.state.error !== void 0 ? /* @__PURE__ */ React2.createElement(RouteContext.Provider, { value: this.props.routeContext }, /* @__PURE__ */ React2.createElement(
          RouteErrorContext.Provider,
          {
            value: this.state.error,
            children: this.props.component
          }
        )) : this.props.children;
      }
    };
    function RenderedRoute({ routeContext, match, children }) {
      let dataRouterContext = React2.useContext(DataRouterContext);
      if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
        dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
      }
      return /* @__PURE__ */ React2.createElement(RouteContext.Provider, { value: routeContext }, children);
    }
    function _renderMatches(matches, parentMatches = [], dataRouterState = null, future2 = null) {
      if (matches == null) {
        if (!dataRouterState) {
          return null;
        }
        if (dataRouterState.errors) {
          matches = dataRouterState.matches;
        } else if (parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
          matches = dataRouterState.matches;
        } else {
          return null;
        }
      }
      let renderedMatches = matches;
      let errors = dataRouterState?.errors;
      if (errors != null) {
        let errorIndex = renderedMatches.findIndex(
          (m) => m.route.id && errors?.[m.route.id] !== void 0
        );
        invariant(
          errorIndex >= 0,
          `Could not find a matching route for errors on route IDs: ${Object.keys(
            errors
          ).join(",")}`
        );
        renderedMatches = renderedMatches.slice(
          0,
          Math.min(renderedMatches.length, errorIndex + 1)
        );
      }
      let renderFallback = false;
      let fallbackIndex = -1;
      if (dataRouterState) {
        for (let i = 0; i < renderedMatches.length; i++) {
          let match = renderedMatches[i];
          if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
            fallbackIndex = i;
          }
          if (match.route.id) {
            let { loaderData, errors: errors2 } = dataRouterState;
            let needsToRunLoader = match.route.loader && !loaderData.hasOwnProperty(match.route.id) && (!errors2 || errors2[match.route.id] === void 0);
            if (match.route.lazy || needsToRunLoader) {
              renderFallback = true;
              if (fallbackIndex >= 0) {
                renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
              } else {
                renderedMatches = [renderedMatches[0]];
              }
              break;
            }
          }
        }
      }
      return renderedMatches.reduceRight((outlet, match, index) => {
        let error;
        let shouldRenderHydrateFallback = false;
        let errorElement = null;
        let hydrateFallbackElement = null;
        if (dataRouterState) {
          error = errors && match.route.id ? errors[match.route.id] : void 0;
          errorElement = match.route.errorElement || defaultErrorElement;
          if (renderFallback) {
            if (fallbackIndex < 0 && index === 0) {
              warningOnce(
                "route-fallback",
                false,
                "No `HydrateFallback` element provided to render during initial hydration"
              );
              shouldRenderHydrateFallback = true;
              hydrateFallbackElement = null;
            } else if (fallbackIndex === index) {
              shouldRenderHydrateFallback = true;
              hydrateFallbackElement = match.route.hydrateFallbackElement || null;
            }
          }
        }
        let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
        let getChildren = () => {
          let children;
          if (error) {
            children = errorElement;
          } else if (shouldRenderHydrateFallback) {
            children = hydrateFallbackElement;
          } else if (match.route.Component) {
            children = /* @__PURE__ */ React2.createElement(match.route.Component, null);
          } else if (match.route.element) {
            children = match.route.element;
          } else {
            children = outlet;
          }
          return /* @__PURE__ */ React2.createElement(
            RenderedRoute,
            {
              match,
              routeContext: {
                outlet,
                matches: matches2,
                isDataRoute: dataRouterState != null
              },
              children
            }
          );
        };
        return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /* @__PURE__ */ React2.createElement(
          RenderErrorBoundary,
          {
            location: dataRouterState.location,
            revalidation: dataRouterState.revalidation,
            component: errorElement,
            error,
            children: getChildren(),
            routeContext: { outlet: null, matches: matches2, isDataRoute: true }
          }
        ) : getChildren();
      }, null);
    }
    function getDataRouterConsoleError(hookName) {
      return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function useDataRouterContext(hookName) {
      let ctx = React2.useContext(DataRouterContext);
      invariant(ctx, getDataRouterConsoleError(hookName));
      return ctx;
    }
    function useDataRouterState(hookName) {
      let state = React2.useContext(DataRouterStateContext);
      invariant(state, getDataRouterConsoleError(hookName));
      return state;
    }
    function useRouteContext(hookName) {
      let route = React2.useContext(RouteContext);
      invariant(route, getDataRouterConsoleError(hookName));
      return route;
    }
    function useCurrentRouteId(hookName) {
      let route = useRouteContext(hookName);
      let thisRoute = route.matches[route.matches.length - 1];
      invariant(
        thisRoute.route.id,
        `${hookName} can only be used on routes that contain a unique "id"`
      );
      return thisRoute.route.id;
    }
    function useRouteId() {
      return useCurrentRouteId(
        "useRouteId"
        /* UseRouteId */
      );
    }
    function useNavigation() {
      let state = useDataRouterState(
        "useNavigation"
        /* UseNavigation */
      );
      return state.navigation;
    }
    function useRevalidator() {
      let dataRouterContext = useDataRouterContext(
        "useRevalidator"
        /* UseRevalidator */
      );
      let state = useDataRouterState(
        "useRevalidator"
        /* UseRevalidator */
      );
      return React2.useMemo(
        () => ({
          async revalidate() {
            await dataRouterContext.router.revalidate();
          },
          state: state.revalidation
        }),
        [dataRouterContext.router, state.revalidation]
      );
    }
    function useMatches2() {
      let { matches, loaderData } = useDataRouterState(
        "useMatches"
        /* UseMatches */
      );
      return React2.useMemo(
        () => matches.map((m) => convertRouteMatchToUiMatch(m, loaderData)),
        [matches, loaderData]
      );
    }
    function useLoaderData2() {
      let state = useDataRouterState(
        "useLoaderData"
        /* UseLoaderData */
      );
      let routeId = useCurrentRouteId(
        "useLoaderData"
        /* UseLoaderData */
      );
      return state.loaderData[routeId];
    }
    function useRouteLoaderData(routeId) {
      let state = useDataRouterState(
        "useRouteLoaderData"
        /* UseRouteLoaderData */
      );
      return state.loaderData[routeId];
    }
    function useActionData2() {
      let state = useDataRouterState(
        "useActionData"
        /* UseActionData */
      );
      let routeId = useCurrentRouteId(
        "useLoaderData"
        /* UseLoaderData */
      );
      return state.actionData ? state.actionData[routeId] : void 0;
    }
    function useRouteError2() {
      let error = React2.useContext(RouteErrorContext);
      let state = useDataRouterState(
        "useRouteError"
        /* UseRouteError */
      );
      let routeId = useCurrentRouteId(
        "useRouteError"
        /* UseRouteError */
      );
      if (error !== void 0) {
        return error;
      }
      return state.errors?.[routeId];
    }
    function useAsyncValue() {
      let value = React2.useContext(AwaitContext);
      return value?._data;
    }
    function useAsyncError() {
      let value = React2.useContext(AwaitContext);
      return value?._error;
    }
    var blockerId = 0;
    function useBlocker(shouldBlock) {
      let { router, basename: basename2 } = useDataRouterContext(
        "useBlocker"
        /* UseBlocker */
      );
      let state = useDataRouterState(
        "useBlocker"
        /* UseBlocker */
      );
      let [blockerKey, setBlockerKey] = React2.useState("");
      let blockerFunction = React2.useCallback(
        (arg) => {
          if (typeof shouldBlock !== "function") {
            return !!shouldBlock;
          }
          if (basename2 === "/") {
            return shouldBlock(arg);
          }
          let { currentLocation, nextLocation, historyAction } = arg;
          return shouldBlock({
            currentLocation: {
              ...currentLocation,
              pathname: stripBasename(currentLocation.pathname, basename2) || currentLocation.pathname
            },
            nextLocation: {
              ...nextLocation,
              pathname: stripBasename(nextLocation.pathname, basename2) || nextLocation.pathname
            },
            historyAction
          });
        },
        [basename2, shouldBlock]
      );
      React2.useEffect(() => {
        let key = String(++blockerId);
        setBlockerKey(key);
        return () => router.deleteBlocker(key);
      }, [router]);
      React2.useEffect(() => {
        if (blockerKey !== "") {
          router.getBlocker(blockerKey, blockerFunction);
        }
      }, [router, blockerKey, blockerFunction]);
      return blockerKey && state.blockers.has(blockerKey) ? state.blockers.get(blockerKey) : IDLE_BLOCKER;
    }
    function useNavigateStable() {
      let { router } = useDataRouterContext(
        "useNavigate"
        /* UseNavigateStable */
      );
      let id = useCurrentRouteId(
        "useNavigate"
        /* UseNavigateStable */
      );
      let activeRef = React2.useRef(false);
      useIsomorphicLayoutEffect(() => {
        activeRef.current = true;
      });
      let navigate = React2.useCallback(
        async (to, options = {}) => {
          warning(activeRef.current, navigateEffectWarning);
          if (!activeRef.current) return;
          if (typeof to === "number") {
            router.navigate(to);
          } else {
            await router.navigate(to, { fromRouteId: id, ...options });
          }
        },
        [router, id]
      );
      return navigate;
    }
    var alreadyWarned = {};
    function warningOnce(key, cond, message) {
      if (!cond && !alreadyWarned[key]) {
        alreadyWarned[key] = true;
        warning(false, message);
      }
    }
    var alreadyWarned2 = {};
    function warnOnce(condition, message) {
      if (!condition && !alreadyWarned2[message]) {
        alreadyWarned2[message] = true;
        console.warn(message);
      }
    }
    var ENABLE_DEV_WARNINGS2 = true;
    function mapRouteProperties(route) {
      let updates = {
        // Note: this check also occurs in createRoutesFromChildren so update
        // there if you change this -- please and thank you!
        hasErrorBoundary: route.hasErrorBoundary || route.ErrorBoundary != null || route.errorElement != null
      };
      if (route.Component) {
        if (ENABLE_DEV_WARNINGS2) {
          if (route.element) {
            warning(
              false,
              "You should not include both `Component` and `element` on your route - `Component` will be used."
            );
          }
        }
        Object.assign(updates, {
          element: React3.createElement(route.Component),
          Component: void 0
        });
      }
      if (route.HydrateFallback) {
        if (ENABLE_DEV_WARNINGS2) {
          if (route.hydrateFallbackElement) {
            warning(
              false,
              "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
            );
          }
        }
        Object.assign(updates, {
          hydrateFallbackElement: React3.createElement(route.HydrateFallback),
          HydrateFallback: void 0
        });
      }
      if (route.ErrorBoundary) {
        if (ENABLE_DEV_WARNINGS2) {
          if (route.errorElement) {
            warning(
              false,
              "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
            );
          }
        }
        Object.assign(updates, {
          errorElement: React3.createElement(route.ErrorBoundary),
          ErrorBoundary: void 0
        });
      }
      return updates;
    }
    function createMemoryRouter(routes2, opts) {
      return createRouter({
        basename: opts?.basename,
        future: opts?.future,
        history: createMemoryHistory({
          initialEntries: opts?.initialEntries,
          initialIndex: opts?.initialIndex
        }),
        hydrationData: opts?.hydrationData,
        routes: routes2,
        mapRouteProperties,
        dataStrategy: opts?.dataStrategy,
        patchRoutesOnNavigation: opts?.patchRoutesOnNavigation
      }).initialize();
    }
    var Deferred = class {
      constructor() {
        this.status = "pending";
        this.promise = new Promise((resolve, reject) => {
          this.resolve = (value) => {
            if (this.status === "pending") {
              this.status = "resolved";
              resolve(value);
            }
          };
          this.reject = (reason) => {
            if (this.status === "pending") {
              this.status = "rejected";
              reject(reason);
            }
          };
        });
      }
    };
    function RouterProvider({
      router,
      flushSync: reactDomFlushSyncImpl
    }) {
      let [state, setStateImpl] = React3.useState(router.state);
      let [pendingState, setPendingState] = React3.useState();
      let [vtContext, setVtContext] = React3.useState({
        isTransitioning: false
      });
      let [renderDfd, setRenderDfd] = React3.useState();
      let [transition, setTransition] = React3.useState();
      let [interruption, setInterruption] = React3.useState();
      let fetcherData = React3.useRef(/* @__PURE__ */ new Map());
      let setState = React3.useCallback(
        (newState, { deletedFetchers, flushSync, viewTransitionOpts }) => {
          deletedFetchers.forEach((key) => fetcherData.current.delete(key));
          newState.fetchers.forEach((fetcher, key) => {
            if (fetcher.data !== void 0) {
              fetcherData.current.set(key, fetcher.data);
            }
          });
          warnOnce(
            flushSync === false || reactDomFlushSyncImpl != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
          );
          let isViewTransitionAvailable = router.window != null && router.window.document != null && typeof router.window.document.startViewTransition === "function";
          warnOnce(
            viewTransitionOpts == null || isViewTransitionAvailable,
            "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
          );
          if (!viewTransitionOpts || !isViewTransitionAvailable) {
            if (reactDomFlushSyncImpl && flushSync) {
              reactDomFlushSyncImpl(() => setStateImpl(newState));
            } else {
              React3.startTransition(() => setStateImpl(newState));
            }
            return;
          }
          if (reactDomFlushSyncImpl && flushSync) {
            reactDomFlushSyncImpl(() => {
              if (transition) {
                renderDfd && renderDfd.resolve();
                transition.skipTransition();
              }
              setVtContext({
                isTransitioning: true,
                flushSync: true,
                currentLocation: viewTransitionOpts.currentLocation,
                nextLocation: viewTransitionOpts.nextLocation
              });
            });
            let t = router.window.document.startViewTransition(() => {
              reactDomFlushSyncImpl(() => setStateImpl(newState));
            });
            t.finished.finally(() => {
              reactDomFlushSyncImpl(() => {
                setRenderDfd(void 0);
                setTransition(void 0);
                setPendingState(void 0);
                setVtContext({ isTransitioning: false });
              });
            });
            reactDomFlushSyncImpl(() => setTransition(t));
            return;
          }
          if (transition) {
            renderDfd && renderDfd.resolve();
            transition.skipTransition();
            setInterruption({
              state: newState,
              currentLocation: viewTransitionOpts.currentLocation,
              nextLocation: viewTransitionOpts.nextLocation
            });
          } else {
            setPendingState(newState);
            setVtContext({
              isTransitioning: true,
              flushSync: false,
              currentLocation: viewTransitionOpts.currentLocation,
              nextLocation: viewTransitionOpts.nextLocation
            });
          }
        },
        [router.window, reactDomFlushSyncImpl, transition, renderDfd]
      );
      React3.useLayoutEffect(() => router.subscribe(setState), [router, setState]);
      React3.useEffect(() => {
        if (vtContext.isTransitioning && !vtContext.flushSync) {
          setRenderDfd(new Deferred());
        }
      }, [vtContext]);
      React3.useEffect(() => {
        if (renderDfd && pendingState && router.window) {
          let newState = pendingState;
          let renderPromise = renderDfd.promise;
          let transition2 = router.window.document.startViewTransition(async () => {
            React3.startTransition(() => setStateImpl(newState));
            await renderPromise;
          });
          transition2.finished.finally(() => {
            setRenderDfd(void 0);
            setTransition(void 0);
            setPendingState(void 0);
            setVtContext({ isTransitioning: false });
          });
          setTransition(transition2);
        }
      }, [pendingState, renderDfd, router.window]);
      React3.useEffect(() => {
        if (renderDfd && pendingState && state.location.key === pendingState.location.key) {
          renderDfd.resolve();
        }
      }, [renderDfd, transition, state.location, pendingState]);
      React3.useEffect(() => {
        if (!vtContext.isTransitioning && interruption) {
          setPendingState(interruption.state);
          setVtContext({
            isTransitioning: true,
            flushSync: false,
            currentLocation: interruption.currentLocation,
            nextLocation: interruption.nextLocation
          });
          setInterruption(void 0);
        }
      }, [vtContext.isTransitioning, interruption]);
      let navigator2 = React3.useMemo(() => {
        return {
          createHref: router.createHref,
          encodeLocation: router.encodeLocation,
          go: (n) => router.navigate(n),
          push: (to, state2, opts) => router.navigate(to, {
            state: state2,
            preventScrollReset: opts?.preventScrollReset
          }),
          replace: (to, state2, opts) => router.navigate(to, {
            replace: true,
            state: state2,
            preventScrollReset: opts?.preventScrollReset
          })
        };
      }, [router]);
      let basename2 = router.basename || "/";
      let dataRouterContext = React3.useMemo(
        () => ({
          router,
          navigator: navigator2,
          static: false,
          basename: basename2
        }),
        [router, navigator2, basename2]
      );
      return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement(DataRouterContext.Provider, { value: dataRouterContext }, /* @__PURE__ */ React3.createElement(DataRouterStateContext.Provider, { value: state }, /* @__PURE__ */ React3.createElement(FetchersContext.Provider, { value: fetcherData.current }, /* @__PURE__ */ React3.createElement(ViewTransitionContext.Provider, { value: vtContext }, /* @__PURE__ */ React3.createElement(
        Router,
        {
          basename: basename2,
          location: state.location,
          navigationType: state.historyAction,
          navigator: navigator2
        },
        /* @__PURE__ */ React3.createElement(
          MemoizedDataRoutes,
          {
            routes: router.routes,
            future: router.future,
            state
          }
        )
      ))))), null);
    }
    var MemoizedDataRoutes = React3.memo(DataRoutes);
    function DataRoutes({
      routes: routes2,
      future: future2,
      state
    }) {
      return useRoutesImpl(routes2, void 0, state, future2);
    }
    function MemoryRouter({
      basename: basename2,
      children,
      initialEntries,
      initialIndex
    }) {
      let historyRef = React3.useRef();
      if (historyRef.current == null) {
        historyRef.current = createMemoryHistory({
          initialEntries,
          initialIndex,
          v5Compat: true
        });
      }
      let history = historyRef.current;
      let [state, setStateImpl] = React3.useState({
        action: history.action,
        location: history.location
      });
      let setState = React3.useCallback(
        (newState) => {
          React3.startTransition(() => setStateImpl(newState));
        },
        [setStateImpl]
      );
      React3.useLayoutEffect(() => history.listen(setState), [history, setState]);
      return /* @__PURE__ */ React3.createElement(
        Router,
        {
          basename: basename2,
          children,
          location: state.location,
          navigationType: state.action,
          navigator: history
        }
      );
    }
    function Navigate({
      to,
      replace: replace2,
      state,
      relative
    }) {
      invariant(
        useInRouterContext(),
        // TODO: This error is probably because they somehow have 2 versions of
        // the router loaded. We can help them understand how to avoid that.
        `<Navigate> may be used only in the context of a <Router> component.`
      );
      let { static: isStatic } = React3.useContext(NavigationContext);
      warning(
        !isStatic,
        `<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`
      );
      let { matches } = React3.useContext(RouteContext);
      let { pathname: locationPathname } = useLocation();
      let navigate = useNavigate();
      let path = resolveTo(
        to,
        getResolveToMatches(matches),
        locationPathname,
        relative === "path"
      );
      let jsonPath = JSON.stringify(path);
      React3.useEffect(() => {
        navigate(JSON.parse(jsonPath), { replace: replace2, state, relative });
      }, [navigate, jsonPath, relative, replace2, state]);
      return null;
    }
    function Outlet2(props) {
      return useOutlet(props.context);
    }
    function Route(_props) {
      invariant(
        false,
        `A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`
      );
    }
    function Router({
      basename: basenameProp = "/",
      children = null,
      location: locationProp,
      navigationType = "POP",
      navigator: navigator2,
      static: staticProp = false
    }) {
      invariant(
        !useInRouterContext(),
        `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`
      );
      let basename2 = basenameProp.replace(/^\/*/, "/");
      let navigationContext = React3.useMemo(
        () => ({
          basename: basename2,
          navigator: navigator2,
          static: staticProp,
          future: {}
        }),
        [basename2, navigator2, staticProp]
      );
      if (typeof locationProp === "string") {
        locationProp = parsePath(locationProp);
      }
      let {
        pathname = "/",
        search = "",
        hash = "",
        state = null,
        key = "default"
      } = locationProp;
      let locationContext = React3.useMemo(() => {
        let trailingPathname = stripBasename(pathname, basename2);
        if (trailingPathname == null) {
          return null;
        }
        return {
          location: {
            pathname: trailingPathname,
            search,
            hash,
            state,
            key
          },
          navigationType
        };
      }, [basename2, pathname, search, hash, state, key, navigationType]);
      warning(
        locationContext != null,
        `<Router basename="${basename2}"> is not able to match the URL "${pathname}${search}${hash}" because it does not start with the basename, so the <Router> won't render anything.`
      );
      if (locationContext == null) {
        return null;
      }
      return /* @__PURE__ */ React3.createElement(NavigationContext.Provider, { value: navigationContext }, /* @__PURE__ */ React3.createElement(LocationContext.Provider, { children, value: locationContext }));
    }
    function Routes({
      children,
      location
    }) {
      return useRoutes(createRoutesFromChildren(children), location);
    }
    function Await({
      children,
      errorElement,
      resolve
    }) {
      return /* @__PURE__ */ React3.createElement(AwaitErrorBoundary, { resolve, errorElement }, /* @__PURE__ */ React3.createElement(ResolveAwait, null, children));
    }
    var AwaitErrorBoundary = class extends React3.Component {
      constructor(props) {
        super(props);
        this.state = { error: null };
      }
      static getDerivedStateFromError(error) {
        return { error };
      }
      componentDidCatch(error, errorInfo) {
        console.error(
          "<Await> caught the following error during render",
          error,
          errorInfo
        );
      }
      render() {
        let { children, errorElement, resolve } = this.props;
        let promise = null;
        let status = 0;
        if (!(resolve instanceof Promise)) {
          status = 1;
          promise = Promise.resolve();
          Object.defineProperty(promise, "_tracked", { get: () => true });
          Object.defineProperty(promise, "_data", { get: () => resolve });
        } else if (this.state.error) {
          status = 2;
          let renderError = this.state.error;
          promise = Promise.reject().catch(() => {
          });
          Object.defineProperty(promise, "_tracked", { get: () => true });
          Object.defineProperty(promise, "_error", { get: () => renderError });
        } else if (resolve._tracked) {
          promise = resolve;
          status = "_error" in promise ? 2 : "_data" in promise ? 1 : 0;
        } else {
          status = 0;
          Object.defineProperty(resolve, "_tracked", { get: () => true });
          promise = resolve.then(
            (data2) => Object.defineProperty(resolve, "_data", { get: () => data2 }),
            (error) => Object.defineProperty(resolve, "_error", { get: () => error })
          );
        }
        if (status === 2 && !errorElement) {
          throw promise._error;
        }
        if (status === 2) {
          return /* @__PURE__ */ React3.createElement(AwaitContext.Provider, { value: promise, children: errorElement });
        }
        if (status === 1) {
          return /* @__PURE__ */ React3.createElement(AwaitContext.Provider, { value: promise, children });
        }
        throw promise;
      }
    };
    function ResolveAwait({
      children
    }) {
      let data2 = useAsyncValue();
      let toRender = typeof children === "function" ? children(data2) : children;
      return /* @__PURE__ */ React3.createElement(React3.Fragment, null, toRender);
    }
    function createRoutesFromChildren(children, parentPath = []) {
      let routes2 = [];
      React3.Children.forEach(children, (element, index) => {
        if (!React3.isValidElement(element)) {
          return;
        }
        let treePath = [...parentPath, index];
        if (element.type === React3.Fragment) {
          routes2.push.apply(
            routes2,
            createRoutesFromChildren(element.props.children, treePath)
          );
          return;
        }
        invariant(
          element.type === Route,
          `[${typeof element.type === "string" ? element.type : element.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
        );
        invariant(
          !element.props.index || !element.props.children,
          "An index route cannot have child routes."
        );
        let route = {
          id: element.props.id || treePath.join("-"),
          caseSensitive: element.props.caseSensitive,
          element: element.props.element,
          Component: element.props.Component,
          index: element.props.index,
          path: element.props.path,
          loader: element.props.loader,
          action: element.props.action,
          hydrateFallbackElement: element.props.hydrateFallbackElement,
          HydrateFallback: element.props.HydrateFallback,
          errorElement: element.props.errorElement,
          ErrorBoundary: element.props.ErrorBoundary,
          hasErrorBoundary: element.props.hasErrorBoundary === true || element.props.ErrorBoundary != null || element.props.errorElement != null,
          shouldRevalidate: element.props.shouldRevalidate,
          handle: element.props.handle,
          lazy: element.props.lazy
        };
        if (element.props.children) {
          route.children = createRoutesFromChildren(
            element.props.children,
            treePath
          );
        }
        routes2.push(route);
      });
      return routes2;
    }
    var createRoutesFromElements = createRoutesFromChildren;
    function renderMatches(matches) {
      return _renderMatches(matches);
    }
    var React10 = __toESM2(require_react());
    var defaultMethod = "get";
    var defaultEncType = "application/x-www-form-urlencoded";
    function isHtmlElement(object) {
      return object != null && typeof object.tagName === "string";
    }
    function isButtonElement(object) {
      return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
    }
    function isFormElement(object) {
      return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
    }
    function isInputElement(object) {
      return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
    }
    function isModifiedEvent(event) {
      return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
    }
    function shouldProcessLinkClick(event, target) {
      return event.button === 0 && // Ignore everything but left clicks
      (!target || target === "_self") && // Let browser handle "target=_blank" etc.
      !isModifiedEvent(event);
    }
    function createSearchParams(init = "") {
      return new URLSearchParams(
        typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo2, key) => {
          let value = init[key];
          return memo2.concat(
            Array.isArray(value) ? value.map((v) => [key, v]) : [[key, value]]
          );
        }, [])
      );
    }
    function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
      let searchParams = createSearchParams(locationSearch);
      if (defaultSearchParams) {
        defaultSearchParams.forEach((_, key) => {
          if (!searchParams.has(key)) {
            defaultSearchParams.getAll(key).forEach((value) => {
              searchParams.append(key, value);
            });
          }
        });
      }
      return searchParams;
    }
    var _formDataSupportsSubmitter = null;
    function isFormDataSubmitterSupported() {
      if (_formDataSupportsSubmitter === null) {
        try {
          new FormData(
            document.createElement("form"),
            // @ts-expect-error if FormData supports the submitter parameter, this will throw
            0
          );
          _formDataSupportsSubmitter = false;
        } catch (e) {
          _formDataSupportsSubmitter = true;
        }
      }
      return _formDataSupportsSubmitter;
    }
    var supportedFormEncTypes = /* @__PURE__ */ new Set([
      "application/x-www-form-urlencoded",
      "multipart/form-data",
      "text/plain"
    ]);
    function getFormEncType(encType) {
      if (encType != null && !supportedFormEncTypes.has(encType)) {
        warning(
          false,
          `"${encType}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${defaultEncType}"`
        );
        return null;
      }
      return encType;
    }
    function getFormSubmissionInfo(target, basename2) {
      let method;
      let action;
      let encType;
      let formData;
      let body;
      if (isFormElement(target)) {
        let attr = target.getAttribute("action");
        action = attr ? stripBasename(attr, basename2) : null;
        method = target.getAttribute("method") || defaultMethod;
        encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
        formData = new FormData(target);
      } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
        let form = target.form;
        if (form == null) {
          throw new Error(
            `Cannot submit a <button> or <input type="submit"> without a <form>`
          );
        }
        let attr = target.getAttribute("formaction") || form.getAttribute("action");
        action = attr ? stripBasename(attr, basename2) : null;
        method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
        encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
        formData = new FormData(form, target);
        if (!isFormDataSubmitterSupported()) {
          let { name, type, value } = target;
          if (type === "image") {
            let prefix = name ? `${name}.` : "";
            formData.append(`${prefix}x`, "0");
            formData.append(`${prefix}y`, "0");
          } else if (name) {
            formData.append(name, value);
          }
        }
      } else if (isHtmlElement(target)) {
        throw new Error(
          `Cannot submit element that is not <form>, <button>, or <input type="submit|image">`
        );
      } else {
        method = defaultMethod;
        action = null;
        encType = defaultEncType;
        body = target;
      }
      if (formData && encType === "text/plain") {
        body = formData;
        formData = void 0;
      }
      return { action, method: method.toLowerCase(), encType, formData, body };
    }
    var React9 = __toESM2(require_react());
    function invariant2(value, message) {
      if (value === false || value === null || typeof value === "undefined") {
        throw new Error(message);
      }
    }
    async function loadRouteModule(route, routeModulesCache) {
      if (route.id in routeModulesCache) {
        return routeModulesCache[route.id];
      }
      try {
        let routeModule = await import(
          /* @vite-ignore */
          /* webpackIgnore: true */
          route.module
        );
        routeModulesCache[route.id] = routeModule;
        return routeModule;
      } catch (error) {
        console.error(
          `Error loading route module \`${route.module}\`, reloading page...`
        );
        console.error(error);
        if (window.__reactRouterContext && window.__reactRouterContext.isSpaMode && // @ts-expect-error
        void 0) {
          throw error;
        }
        window.location.reload();
        return new Promise(() => {
        });
      }
    }
    function getKeyedLinksForMatches(matches, routeModules, manifest) {
      let descriptors = matches.map((match) => {
        let module2 = routeModules[match.route.id];
        let route = manifest.routes[match.route.id];
        return [
          route && route.css ? route.css.map((href) => ({ rel: "stylesheet", href })) : [],
          module2?.links?.() || []
        ];
      }).flat(2);
      let preloads = getCurrentPageModulePreloadHrefs(matches, manifest);
      return dedupeLinkDescriptors(descriptors, preloads);
    }
    async function prefetchStyleLinks(route, routeModule) {
      if (!route.css && !routeModule.links || !isPreloadSupported()) return;
      let descriptors = [];
      if (route.css) {
        descriptors.push(...route.css.map((href) => ({ rel: "stylesheet", href })));
      }
      if (routeModule.links) {
        descriptors.push(...routeModule.links());
      }
      if (descriptors.length === 0) return;
      let styleLinks = [];
      for (let descriptor of descriptors) {
        if (!isPageLinkDescriptor(descriptor) && descriptor.rel === "stylesheet") {
          styleLinks.push({
            ...descriptor,
            rel: "preload",
            as: "style"
          });
        }
      }
      let matchingLinks = styleLinks.filter(
        (link) => (!link.media || window.matchMedia(link.media).matches) && !document.querySelector(`link[rel="stylesheet"][href="${link.href}"]`)
      );
      await Promise.all(matchingLinks.map(prefetchStyleLink));
    }
    async function prefetchStyleLink(descriptor) {
      return new Promise((resolve) => {
        let link = document.createElement("link");
        Object.assign(link, descriptor);
        function removeLink() {
          if (document.head.contains(link)) {
            document.head.removeChild(link);
          }
        }
        link.onload = () => {
          removeLink();
          resolve();
        };
        link.onerror = () => {
          removeLink();
          resolve();
        };
        document.head.appendChild(link);
      });
    }
    function isPageLinkDescriptor(object) {
      return object != null && typeof object.page === "string";
    }
    function isHtmlLinkDescriptor(object) {
      if (object == null) {
        return false;
      }
      if (object.href == null) {
        return object.rel === "preload" && typeof object.imageSrcSet === "string" && typeof object.imageSizes === "string";
      }
      return typeof object.rel === "string" && typeof object.href === "string";
    }
    async function getKeyedPrefetchLinks(matches, manifest, routeModules) {
      let links2 = await Promise.all(
        matches.map(async (match) => {
          let route = manifest.routes[match.route.id];
          if (route) {
            let mod = await loadRouteModule(route, routeModules);
            return mod.links ? mod.links() : [];
          }
          return [];
        })
      );
      return dedupeLinkDescriptors(
        links2.flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet" || link.rel === "preload").map(
          (link) => link.rel === "stylesheet" ? { ...link, rel: "prefetch", as: "style" } : { ...link, rel: "prefetch" }
        )
      );
    }
    function getNewMatchesForLinks(page, nextMatches, currentMatches, manifest, location, mode) {
      let isNew = (match, index) => {
        if (!currentMatches[index]) return true;
        return match.route.id !== currentMatches[index].route.id;
      };
      let matchPathChanged = (match, index) => {
        return (
          // param change, /users/123 -> /users/456
          currentMatches[index].pathname !== match.pathname || // splat param changed, which is not present in match.path
          // e.g. /files/images/avatar.jpg -> files/finances.xls
          currentMatches[index].route.path?.endsWith("*") && currentMatches[index].params["*"] !== match.params["*"]
        );
      };
      if (mode === "assets") {
        return nextMatches.filter(
          (match, index) => isNew(match, index) || matchPathChanged(match, index)
        );
      }
      if (mode === "data") {
        return nextMatches.filter((match, index) => {
          let manifestRoute = manifest.routes[match.route.id];
          if (!manifestRoute || !manifestRoute.hasLoader) {
            return false;
          }
          if (isNew(match, index) || matchPathChanged(match, index)) {
            return true;
          }
          if (match.route.shouldRevalidate) {
            let routeChoice = match.route.shouldRevalidate({
              currentUrl: new URL(
                location.pathname + location.search + location.hash,
                window.origin
              ),
              currentParams: currentMatches[0]?.params || {},
              nextUrl: new URL(page, window.origin),
              nextParams: match.params,
              defaultShouldRevalidate: true
            });
            if (typeof routeChoice === "boolean") {
              return routeChoice;
            }
          }
          return true;
        });
      }
      return [];
    }
    function getModuleLinkHrefs(matches, manifestPatch) {
      return dedupeHrefs(
        matches.map((match) => {
          let route = manifestPatch.routes[match.route.id];
          if (!route) return [];
          let hrefs = [route.module];
          if (route.imports) {
            hrefs = hrefs.concat(route.imports);
          }
          return hrefs;
        }).flat(1)
      );
    }
    function getCurrentPageModulePreloadHrefs(matches, manifest) {
      return dedupeHrefs(
        matches.map((match) => {
          let route = manifest.routes[match.route.id];
          if (!route) return [];
          let hrefs = [route.module];
          if (route.imports) {
            hrefs = hrefs.concat(route.imports);
          }
          return hrefs;
        }).flat(1)
      );
    }
    function dedupeHrefs(hrefs) {
      return [...new Set(hrefs)];
    }
    function sortKeys(obj) {
      let sorted = {};
      let keys = Object.keys(obj).sort();
      for (let key of keys) {
        sorted[key] = obj[key];
      }
      return sorted;
    }
    function dedupeLinkDescriptors(descriptors, preloads) {
      let set = /* @__PURE__ */ new Set();
      let preloadsSet = new Set(preloads);
      return descriptors.reduce((deduped, descriptor) => {
        let alreadyModulePreload = preloads && !isPageLinkDescriptor(descriptor) && descriptor.as === "script" && descriptor.href && preloadsSet.has(descriptor.href);
        if (alreadyModulePreload) {
          return deduped;
        }
        let key = JSON.stringify(sortKeys(descriptor));
        if (!set.has(key)) {
          set.add(key);
          deduped.push({ key, link: descriptor });
        }
        return deduped;
      }, []);
    }
    var _isPreloadSupported;
    function isPreloadSupported() {
      if (_isPreloadSupported !== void 0) {
        return _isPreloadSupported;
      }
      let el = document.createElement("link");
      _isPreloadSupported = el.relList.supports("preload");
      el = null;
      return _isPreloadSupported;
    }
    var ESCAPE_LOOKUP = {
      "&": "\\u0026",
      ">": "\\u003e",
      "<": "\\u003c",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029"
    };
    var ESCAPE_REGEX = /[&><\u2028\u2029]/g;
    function escapeHtml(html) {
      return html.replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
    }
    function createHtml(html) {
      return { __html: html };
    }
    var React4 = __toESM2(require_react());
    var import_turbo_stream = require_turbo_stream();
    async function createRequestInit(request) {
      let init = { signal: request.signal };
      if (request.method !== "GET") {
        init.method = request.method;
        let contentType = request.headers.get("Content-Type");
        if (contentType && /\bapplication\/json\b/.test(contentType)) {
          init.headers = { "Content-Type": contentType };
          init.body = JSON.stringify(await request.json());
        } else if (contentType && /\btext\/plain\b/.test(contentType)) {
          init.headers = { "Content-Type": contentType };
          init.body = await request.text();
        } else if (contentType && /\bapplication\/x-www-form-urlencoded\b/.test(contentType)) {
          init.body = new URLSearchParams(await request.text());
        } else {
          init.body = await request.formData();
        }
      }
      return init;
    }
    var SingleFetchRedirectSymbol = Symbol("SingleFetchRedirect");
    function StreamTransfer({
      context,
      identifier,
      reader,
      textDecoder,
      nonce
    }) {
      if (!context.renderMeta || !context.renderMeta.didRenderScripts) {
        return null;
      }
      if (!context.renderMeta.streamCache) {
        context.renderMeta.streamCache = {};
      }
      let { streamCache } = context.renderMeta;
      let promise = streamCache[identifier];
      if (!promise) {
        promise = streamCache[identifier] = reader.read().then((result) => {
          streamCache[identifier].result = {
            done: result.done,
            value: textDecoder.decode(result.value, { stream: true })
          };
        }).catch((e) => {
          streamCache[identifier].error = e;
        });
      }
      if (promise.error) {
        throw promise.error;
      }
      if (promise.result === void 0) {
        throw promise;
      }
      let { done, value } = promise.result;
      let scriptTag = value ? /* @__PURE__ */ React4.createElement(
        "script",
        {
          nonce,
          dangerouslySetInnerHTML: {
            __html: `window.__reactRouterContext.streamController.enqueue(${escapeHtml(
              JSON.stringify(value)
            )});`
          }
        }
      ) : null;
      if (done) {
        return /* @__PURE__ */ React4.createElement(React4.Fragment, null, scriptTag, /* @__PURE__ */ React4.createElement(
          "script",
          {
            nonce,
            dangerouslySetInnerHTML: {
              __html: `window.__reactRouterContext.streamController.close();`
            }
          }
        ));
      } else {
        return /* @__PURE__ */ React4.createElement(React4.Fragment, null, scriptTag, /* @__PURE__ */ React4.createElement(React4.Suspense, null, /* @__PURE__ */ React4.createElement(
          StreamTransfer,
          {
            context,
            identifier: identifier + 1,
            reader,
            textDecoder,
            nonce
          }
        )));
      }
    }
    function getSingleFetchDataStrategy(manifest, routeModules, getRouter) {
      return async ({ request, matches, fetcherKey }) => {
        if (request.method !== "GET") {
          return singleFetchActionStrategy(request, matches);
        }
        if (fetcherKey) {
          return singleFetchLoaderFetcherStrategy(request, matches);
        }
        return singleFetchLoaderNavigationStrategy(
          manifest,
          routeModules,
          getRouter(),
          request,
          matches
        );
      };
    }
    async function singleFetchActionStrategy(request, matches) {
      let actionMatch = matches.find((m) => m.shouldLoad);
      invariant2(actionMatch, "No action match found");
      let actionStatus = void 0;
      let result = await actionMatch.resolve(async (handler2) => {
        let result2 = await handler2(async () => {
          let url = singleFetchUrl(request.url);
          let init = await createRequestInit(request);
          let { data: data2, status } = await fetchAndDecode(url, init);
          actionStatus = status;
          return unwrapSingleFetchResult(
            data2,
            actionMatch.route.id
          );
        });
        return result2;
      });
      if (isResponse(result.result) || isRouteErrorResponse2(result.result)) {
        return { [actionMatch.route.id]: result };
      }
      return {
        [actionMatch.route.id]: {
          type: result.type,
          result: data(result.result, actionStatus)
        }
      };
    }
    async function singleFetchLoaderNavigationStrategy(manifest, routeModules, router, request, matches) {
      let routesParams = /* @__PURE__ */ new Set();
      let foundOptOutRoute = false;
      let routeDfds = matches.map(() => createDeferred2());
      let routesLoadedPromise = Promise.all(routeDfds.map((d) => d.promise));
      let singleFetchDfd = createDeferred2();
      let url = stripIndexParam(singleFetchUrl(request.url));
      let init = await createRequestInit(request);
      let results = {};
      let resolvePromise = Promise.all(
        matches.map(
          async (m, i) => m.resolve(async (handler2) => {
            routeDfds[i].resolve();
            let manifestRoute = manifest.routes[m.route.id];
            if (!m.shouldLoad) {
              if (!router.state.initialized) {
                return;
              }
              if (m.route.id in router.state.loaderData && manifestRoute && manifestRoute.hasLoader && routeModules[m.route.id]?.shouldRevalidate) {
                foundOptOutRoute = true;
                return;
              }
            }
            if (manifestRoute && manifestRoute.hasClientLoader) {
              if (manifestRoute.hasLoader) {
                foundOptOutRoute = true;
              }
              try {
                let result = await fetchSingleLoader(
                  handler2,
                  url,
                  init,
                  m.route.id
                );
                results[m.route.id] = { type: "data", result };
              } catch (e) {
                results[m.route.id] = { type: "error", result: e };
              }
              return;
            }
            if (manifestRoute && manifestRoute.hasLoader) {
              routesParams.add(m.route.id);
            }
            try {
              let result = await handler2(async () => {
                let data2 = await singleFetchDfd.promise;
                return unwrapSingleFetchResults(data2, m.route.id);
              });
              results[m.route.id] = {
                type: "data",
                result
              };
            } catch (e) {
              results[m.route.id] = {
                type: "error",
                result: e
              };
            }
          })
        )
      );
      await routesLoadedPromise;
      if ((!router.state.initialized || routesParams.size === 0) && !window.__reactRouterHdrActive) {
        singleFetchDfd.resolve({});
      } else {
        try {
          if (foundOptOutRoute && routesParams.size > 0) {
            url.searchParams.set(
              "_routes",
              matches.filter((m) => routesParams.has(m.route.id)).map((m) => m.route.id).join(",")
            );
          }
          let data2 = await fetchAndDecode(url, init);
          singleFetchDfd.resolve(data2.data);
        } catch (e) {
          singleFetchDfd.reject(e);
        }
      }
      await resolvePromise;
      return results;
    }
    async function singleFetchLoaderFetcherStrategy(request, matches) {
      let fetcherMatch = matches.find((m) => m.shouldLoad);
      invariant2(fetcherMatch, "No fetcher match found");
      let result = await fetcherMatch.resolve(async (handler2) => {
        let url = stripIndexParam(singleFetchUrl(request.url));
        let init = await createRequestInit(request);
        return fetchSingleLoader(handler2, url, init, fetcherMatch.route.id);
      });
      return { [fetcherMatch.route.id]: result };
    }
    function fetchSingleLoader(handler2, url, init, routeId) {
      return handler2(async () => {
        let singleLoaderUrl = new URL(url);
        singleLoaderUrl.searchParams.set("_routes", routeId);
        let { data: data2 } = await fetchAndDecode(singleLoaderUrl, init);
        return unwrapSingleFetchResults(data2, routeId);
      });
    }
    function stripIndexParam(url) {
      let indexValues = url.searchParams.getAll("index");
      url.searchParams.delete("index");
      let indexValuesToKeep = [];
      for (let indexValue of indexValues) {
        if (indexValue) {
          indexValuesToKeep.push(indexValue);
        }
      }
      for (let toKeep of indexValuesToKeep) {
        url.searchParams.append("index", toKeep);
      }
      return url;
    }
    function singleFetchUrl(reqUrl) {
      let url = typeof reqUrl === "string" ? new URL(
        reqUrl,
        // This can be called during the SSR flow via PrefetchPageLinksImpl so
        // don't assume window is available
        typeof window === "undefined" ? "server://singlefetch/" : window.location.origin
      ) : reqUrl;
      if (url.pathname === "/") {
        url.pathname = "_root.data";
      } else {
        url.pathname = `${url.pathname.replace(/\/$/, "")}.data`;
      }
      return url;
    }
    async function fetchAndDecode(url, init) {
      let res = await fetch(url, init);
      if (res.status === 404 && !res.headers.has("X-Remix-Response")) {
        throw new ErrorResponseImpl(404, "Not Found", true);
      }
      invariant2(res.body, "No response body to decode");
      try {
        let decoded = await decodeViaTurboStream(res.body, window);
        return { status: res.status, data: decoded.value };
      } catch (e) {
        throw new Error("Unable to decode turbo-stream response");
      }
    }
    function decodeViaTurboStream(body, global2) {
      return (0, import_turbo_stream.decode)(body, {
        plugins: [
          (type, ...rest) => {
            if (type === "SanitizedError") {
              let [name, message, stack] = rest;
              let Constructor = Error;
              if (name && name in global2 && typeof global2[name] === "function") {
                Constructor = global2[name];
              }
              let error = new Constructor(message);
              error.stack = stack;
              return { value: error };
            }
            if (type === "ErrorResponse") {
              let [data2, status, statusText] = rest;
              return {
                value: new ErrorResponseImpl(status, statusText, data2)
              };
            }
            if (type === "SingleFetchRedirect") {
              return { value: { [SingleFetchRedirectSymbol]: rest[0] } };
            }
            if (type === "SingleFetchClassInstance") {
              return { value: rest[0] };
            }
            if (type === "SingleFetchFallback") {
              return { value: void 0 };
            }
          }
        ]
      });
    }
    function unwrapSingleFetchResults(results, routeId) {
      let redirect2 = results[SingleFetchRedirectSymbol];
      if (redirect2) {
        return unwrapSingleFetchResult(redirect2, routeId);
      }
      return results[routeId] !== void 0 ? unwrapSingleFetchResult(results[routeId], routeId) : null;
    }
    function unwrapSingleFetchResult(result, routeId) {
      if ("error" in result) {
        throw result.error;
      } else if ("redirect" in result) {
        let headers = {};
        if (result.revalidate) {
          headers["X-Remix-Revalidate"] = "yes";
        }
        if (result.reload) {
          headers["X-Remix-Reload-Document"] = "yes";
        }
        if (result.replace) {
          headers["X-Remix-Replace"] = "yes";
        }
        return redirect(result.redirect, { status: result.status, headers });
      } else if ("data" in result) {
        return result.data;
      } else {
        throw new Error(`No response found for routeId "${routeId}"`);
      }
    }
    function createDeferred2() {
      let resolve;
      let reject;
      let promise = new Promise((res, rej) => {
        resolve = async (val) => {
          res(val);
          try {
            await promise;
          } catch (e) {
          }
        };
        reject = async (error) => {
          rej(error);
          try {
            await promise;
          } catch (e) {
          }
        };
      });
      return {
        promise,
        //@ts-ignore
        resolve,
        //@ts-ignore
        reject
      };
    }
    var React8 = __toESM2(require_react());
    var React7 = __toESM2(require_react());
    var React5 = __toESM2(require_react());
    var RemixErrorBoundary = class extends React5.Component {
      constructor(props) {
        super(props);
        this.state = { error: props.error || null, location: props.location };
      }
      static getDerivedStateFromError(error) {
        return { error };
      }
      static getDerivedStateFromProps(props, state) {
        if (state.location !== props.location) {
          return { error: props.error || null, location: props.location };
        }
        return { error: props.error || state.error, location: state.location };
      }
      render() {
        if (this.state.error) {
          return /* @__PURE__ */ React5.createElement(
            RemixRootDefaultErrorBoundary,
            {
              error: this.state.error,
              isOutsideRemixApp: true
            }
          );
        } else {
          return this.props.children;
        }
      }
    };
    function RemixRootDefaultErrorBoundary({
      error,
      isOutsideRemixApp
    }) {
      console.error(error);
      let heyDeveloper = /* @__PURE__ */ React5.createElement(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `
        console.log(
          "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
        );
      `
          }
        }
      );
      if (isRouteErrorResponse2(error)) {
        return /* @__PURE__ */ React5.createElement(BoundaryShell, { title: "Unhandled Thrown Response!" }, /* @__PURE__ */ React5.createElement("h1", { style: { fontSize: "24px" } }, error.status, " ", error.statusText), heyDeveloper);
      }
      let errorInstance;
      if (error instanceof Error) {
        errorInstance = error;
      } else {
        let errorString = error == null ? "Unknown Error" : typeof error === "object" && "toString" in error ? error.toString() : JSON.stringify(error);
        errorInstance = new Error(errorString);
      }
      return /* @__PURE__ */ React5.createElement(
        BoundaryShell,
        {
          title: "Application Error!",
          isOutsideRemixApp
        },
        /* @__PURE__ */ React5.createElement("h1", { style: { fontSize: "24px" } }, "Application Error"),
        /* @__PURE__ */ React5.createElement(
          "pre",
          {
            style: {
              padding: "2rem",
              background: "hsla(10, 50%, 50%, 0.1)",
              color: "red",
              overflow: "auto"
            }
          },
          errorInstance.stack
        ),
        heyDeveloper
      );
    }
    function BoundaryShell({
      title,
      renderScripts,
      isOutsideRemixApp,
      children
    }) {
      let { routeModules } = useFrameworkContext();
      if (routeModules.root?.Layout && !isOutsideRemixApp) {
        return children;
      }
      return /* @__PURE__ */ React5.createElement("html", { lang: "en" }, /* @__PURE__ */ React5.createElement("head", null, /* @__PURE__ */ React5.createElement("meta", { charSet: "utf-8" }), /* @__PURE__ */ React5.createElement(
        "meta",
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1,viewport-fit=cover"
        }
      ), /* @__PURE__ */ React5.createElement("title", null, title)), /* @__PURE__ */ React5.createElement("body", null, /* @__PURE__ */ React5.createElement("main", { style: { fontFamily: "system-ui, sans-serif", padding: "2rem" } }, children, renderScripts ? /* @__PURE__ */ React5.createElement(Scripts2, null) : null)));
    }
    var React6 = __toESM2(require_react());
    function RemixRootDefaultHydrateFallback() {
      return /* @__PURE__ */ React6.createElement(BoundaryShell, { title: "Loading...", renderScripts: true }, /* @__PURE__ */ React6.createElement(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `
              console.log(
                "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this " +
                "when your app is loading JS modules and/or running \`clientLoader\` " +
                "functions. Check out https://remix.run/route/hydrate-fallback " +
                "for more information."
              );
            `
          }
        }
      ));
    }
    function groupRoutesByParentId(manifest) {
      let routes2 = {};
      Object.values(manifest).forEach((route) => {
        if (route) {
          let parentId = route.parentId || "";
          if (!routes2[parentId]) {
            routes2[parentId] = [];
          }
          routes2[parentId].push(route);
        }
      });
      return routes2;
    }
    function getRouteComponents(route, routeModule, isSpaMode2) {
      let Component4 = getRouteModuleComponent(routeModule);
      let HydrateFallback = routeModule.HydrateFallback && (!isSpaMode2 || route.id === "root") ? routeModule.HydrateFallback : route.id === "root" ? RemixRootDefaultHydrateFallback : void 0;
      let ErrorBoundary3 = routeModule.ErrorBoundary ? routeModule.ErrorBoundary : route.id === "root" ? () => /* @__PURE__ */ React7.createElement(RemixRootDefaultErrorBoundary, { error: useRouteError2() }) : void 0;
      if (route.id === "root" && routeModule.Layout) {
        return {
          ...Component4 ? {
            element: /* @__PURE__ */ React7.createElement(routeModule.Layout, null, /* @__PURE__ */ React7.createElement(Component4, null))
          } : { Component: Component4 },
          ...ErrorBoundary3 ? {
            errorElement: /* @__PURE__ */ React7.createElement(routeModule.Layout, null, /* @__PURE__ */ React7.createElement(ErrorBoundary3, null))
          } : { ErrorBoundary: ErrorBoundary3 },
          ...HydrateFallback ? {
            hydrateFallbackElement: /* @__PURE__ */ React7.createElement(routeModule.Layout, null, /* @__PURE__ */ React7.createElement(HydrateFallback, null))
          } : { HydrateFallback }
        };
      }
      return { Component: Component4, ErrorBoundary: ErrorBoundary3, HydrateFallback };
    }
    function createServerRoutes(manifest, routeModules, future2, isSpaMode2, parentId = "", routesByParentId = groupRoutesByParentId(manifest), spaModeLazyPromise = Promise.resolve({ Component: () => null })) {
      return (routesByParentId[parentId] || []).map((route) => {
        let routeModule = routeModules[route.id];
        invariant2(
          routeModule,
          "No `routeModule` available to create server routes"
        );
        let dataRoute = {
          ...getRouteComponents(route, routeModule, isSpaMode2),
          caseSensitive: route.caseSensitive,
          id: route.id,
          index: route.index,
          path: route.path,
          handle: routeModule.handle,
          // For SPA Mode, all routes are lazy except root.  However we tell the
          // router root is also lazy here too since we don't need a full
          // implementation - we just need a `lazy` prop to tell the RR rendering
          // where to stop which is always at the root route in SPA mode
          lazy: isSpaMode2 ? () => spaModeLazyPromise : void 0,
          // For partial hydration rendering, we need to indicate when the route
          // has a loader/clientLoader, but it won't ever be called during the static
          // render, so just give it a no-op function so we can render down to the
          // proper fallback
          loader: route.hasLoader || route.hasClientLoader ? () => null : void 0
          // We don't need action/shouldRevalidate on these routes since they're
          // for a static render
        };
        let children = createServerRoutes(
          manifest,
          routeModules,
          future2,
          isSpaMode2,
          route.id,
          routesByParentId,
          spaModeLazyPromise
        );
        if (children.length > 0) dataRoute.children = children;
        return dataRoute;
      });
    }
    function createClientRoutesWithHMRRevalidationOptOut(needsRevalidation, manifest, routeModulesCache, initialState, future2, isSpaMode2) {
      return createClientRoutes(
        manifest,
        routeModulesCache,
        initialState,
        isSpaMode2,
        "",
        groupRoutesByParentId(manifest),
        needsRevalidation
      );
    }
    function preventInvalidServerHandlerCall(type, route, isSpaMode2) {
      if (isSpaMode2) {
        let fn2 = type === "action" ? "serverAction()" : "serverLoader()";
        let msg2 = `You cannot call ${fn2} in SPA Mode (routeId: "${route.id}")`;
        console.error(msg2);
        throw new ErrorResponseImpl(400, "Bad Request", new Error(msg2), true);
      }
      let fn = type === "action" ? "serverAction()" : "serverLoader()";
      let msg = `You are trying to call ${fn} on a route that does not have a server ${type} (routeId: "${route.id}")`;
      if (type === "loader" && !route.hasLoader || type === "action" && !route.hasAction) {
        console.error(msg);
        throw new ErrorResponseImpl(400, "Bad Request", new Error(msg), true);
      }
    }
    function noActionDefinedError(type, routeId) {
      let article = type === "clientAction" ? "a" : "an";
      let msg = `Route "${routeId}" does not have ${article} ${type}, but you are trying to submit to it. To fix this, please add ${article} \`${type}\` function to the route`;
      console.error(msg);
      throw new ErrorResponseImpl(405, "Method Not Allowed", new Error(msg), true);
    }
    function createClientRoutes(manifest, routeModulesCache, initialState, isSpaMode2, parentId = "", routesByParentId = groupRoutesByParentId(manifest), needsRevalidation) {
      return (routesByParentId[parentId] || []).map((route) => {
        let routeModule = routeModulesCache[route.id];
        function fetchServerHandler(singleFetch) {
          invariant2(
            typeof singleFetch === "function",
            "No single fetch function available for route handler"
          );
          return singleFetch();
        }
        function fetchServerLoader(singleFetch) {
          if (!route.hasLoader) return Promise.resolve(null);
          return fetchServerHandler(singleFetch);
        }
        function fetchServerAction(singleFetch) {
          if (!route.hasAction) {
            throw noActionDefinedError("action", route.id);
          }
          return fetchServerHandler(singleFetch);
        }
        async function prefetchStylesAndCallHandler(handler2) {
          let cachedModule = routeModulesCache[route.id];
          let linkPrefetchPromise = cachedModule ? prefetchStyleLinks(route, cachedModule) : Promise.resolve();
          try {
            return handler2();
          } finally {
            await linkPrefetchPromise;
          }
        }
        let dataRoute = {
          id: route.id,
          index: route.index,
          path: route.path
        };
        if (routeModule) {
          Object.assign(dataRoute, {
            ...dataRoute,
            ...getRouteComponents(route, routeModule, isSpaMode2),
            handle: routeModule.handle,
            shouldRevalidate: getShouldRevalidateFunction(
              routeModule,
              route.id,
              needsRevalidation
            )
          });
          let hasInitialData = initialState && initialState.loaderData && route.id in initialState.loaderData;
          let initialData = hasInitialData ? initialState?.loaderData?.[route.id] : void 0;
          let hasInitialError = initialState && initialState.errors && route.id in initialState.errors;
          let initialError = hasInitialError ? initialState?.errors?.[route.id] : void 0;
          let isHydrationRequest = needsRevalidation == null && (routeModule.clientLoader?.hydrate === true || !route.hasLoader);
          dataRoute.loader = async ({ request, params }, singleFetch) => {
            try {
              let result = await prefetchStylesAndCallHandler(async () => {
                invariant2(
                  routeModule,
                  "No `routeModule` available for critical-route loader"
                );
                if (!routeModule.clientLoader) {
                  if (isSpaMode2) return null;
                  return fetchServerLoader(singleFetch);
                }
                return routeModule.clientLoader({
                  request,
                  params,
                  async serverLoader() {
                    preventInvalidServerHandlerCall("loader", route, isSpaMode2);
                    if (isHydrationRequest) {
                      if (hasInitialData) {
                        return initialData;
                      }
                      if (hasInitialError) {
                        throw initialError;
                      }
                    }
                    return fetchServerLoader(singleFetch);
                  }
                });
              });
              return result;
            } finally {
              isHydrationRequest = false;
            }
          };
          dataRoute.loader.hydrate = shouldHydrateRouteLoader(
            route,
            routeModule,
            isSpaMode2
          );
          dataRoute.action = ({ request, params }, singleFetch) => {
            return prefetchStylesAndCallHandler(async () => {
              invariant2(
                routeModule,
                "No `routeModule` available for critical-route action"
              );
              if (!routeModule.clientAction) {
                if (isSpaMode2) {
                  throw noActionDefinedError("clientAction", route.id);
                }
                return fetchServerAction(singleFetch);
              }
              return routeModule.clientAction({
                request,
                params,
                async serverAction() {
                  preventInvalidServerHandlerCall("action", route, isSpaMode2);
                  return fetchServerAction(singleFetch);
                }
              });
            });
          };
        } else {
          if (!route.hasClientLoader) {
            dataRoute.loader = ({ request }, singleFetch) => prefetchStylesAndCallHandler(() => {
              if (isSpaMode2) return Promise.resolve(null);
              return fetchServerLoader(singleFetch);
            });
          }
          if (!route.hasClientAction) {
            dataRoute.action = ({ request }, singleFetch) => prefetchStylesAndCallHandler(() => {
              if (isSpaMode2) {
                throw noActionDefinedError("clientAction", route.id);
              }
              return fetchServerAction(singleFetch);
            });
          }
          dataRoute.lazy = async () => {
            let mod = await loadRouteModuleWithBlockingLinks(
              route,
              routeModulesCache
            );
            let lazyRoute = { ...mod };
            if (mod.clientLoader) {
              let clientLoader = mod.clientLoader;
              lazyRoute.loader = (args, singleFetch) => clientLoader({
                ...args,
                async serverLoader() {
                  preventInvalidServerHandlerCall("loader", route, isSpaMode2);
                  return fetchServerLoader(singleFetch);
                }
              });
            }
            if (mod.clientAction) {
              let clientAction = mod.clientAction;
              lazyRoute.action = (args, singleFetch) => clientAction({
                ...args,
                async serverAction() {
                  preventInvalidServerHandlerCall("action", route, isSpaMode2);
                  return fetchServerAction(singleFetch);
                }
              });
            }
            return {
              ...lazyRoute.loader ? { loader: lazyRoute.loader } : {},
              ...lazyRoute.action ? { action: lazyRoute.action } : {},
              hasErrorBoundary: lazyRoute.hasErrorBoundary,
              shouldRevalidate: getShouldRevalidateFunction(
                lazyRoute,
                route.id,
                needsRevalidation
              ),
              handle: lazyRoute.handle,
              // No need to wrap these in layout since the root route is never
              // loaded via route.lazy()
              Component: lazyRoute.Component,
              ErrorBoundary: lazyRoute.ErrorBoundary
            };
          };
        }
        let children = createClientRoutes(
          manifest,
          routeModulesCache,
          initialState,
          isSpaMode2,
          route.id,
          routesByParentId,
          needsRevalidation
        );
        if (children.length > 0) dataRoute.children = children;
        return dataRoute;
      });
    }
    function getShouldRevalidateFunction(route, routeId, needsRevalidation) {
      if (needsRevalidation) {
        return wrapShouldRevalidateForHdr(
          routeId,
          route.shouldRevalidate,
          needsRevalidation
        );
      }
      if (route.shouldRevalidate) {
        let fn = route.shouldRevalidate;
        return (opts) => fn({ ...opts, defaultShouldRevalidate: true });
      }
      return route.shouldRevalidate;
    }
    function wrapShouldRevalidateForHdr(routeId, routeShouldRevalidate, needsRevalidation) {
      let handledRevalidation = false;
      return (arg) => {
        if (!handledRevalidation) {
          handledRevalidation = true;
          return needsRevalidation.has(routeId);
        }
        return routeShouldRevalidate ? routeShouldRevalidate(arg) : arg.defaultShouldRevalidate;
      };
    }
    async function loadRouteModuleWithBlockingLinks(route, routeModules) {
      let routeModule = await loadRouteModule(route, routeModules);
      await prefetchStyleLinks(route, routeModule);
      return {
        Component: getRouteModuleComponent(routeModule),
        ErrorBoundary: routeModule.ErrorBoundary,
        clientAction: routeModule.clientAction,
        clientLoader: routeModule.clientLoader,
        handle: routeModule.handle,
        links: routeModule.links,
        meta: routeModule.meta,
        shouldRevalidate: routeModule.shouldRevalidate
      };
    }
    function getRouteModuleComponent(routeModule) {
      if (routeModule.default == null) return void 0;
      let isEmptyObject = typeof routeModule.default === "object" && Object.keys(routeModule.default).length === 0;
      if (!isEmptyObject) {
        return routeModule.default;
      }
    }
    function shouldHydrateRouteLoader(route, routeModule, isSpaMode2) {
      return isSpaMode2 && route.id !== "root" || routeModule.clientLoader != null && (routeModule.clientLoader.hydrate === true || route.hasLoader !== true);
    }
    var nextPaths = /* @__PURE__ */ new Set();
    var discoveredPathsMaxSize = 1e3;
    var discoveredPaths = /* @__PURE__ */ new Set();
    var URL_LIMIT = 7680;
    function isFogOfWarEnabled(isSpaMode2) {
      return !isSpaMode2;
    }
    function getPartialManifest(manifest, router) {
      let routeIds = new Set(router.state.matches.map((m) => m.route.id));
      let segments = router.state.location.pathname.split("/").filter(Boolean);
      let paths = ["/"];
      segments.pop();
      while (segments.length > 0) {
        paths.push(`/${segments.join("/")}`);
        segments.pop();
      }
      paths.forEach((path) => {
        let matches = matchRoutes(router.routes, path, router.basename);
        if (matches) {
          matches.forEach((m) => routeIds.add(m.route.id));
        }
      });
      let initialRoutes = [...routeIds].reduce(
        (acc, id) => Object.assign(acc, { [id]: manifest.routes[id] }),
        {}
      );
      return {
        ...manifest,
        routes: initialRoutes
      };
    }
    function getPatchRoutesOnNavigationFunction(manifest, routeModules, isSpaMode2, basename2) {
      if (!isFogOfWarEnabled(isSpaMode2)) {
        return void 0;
      }
      return async ({ path, patch }) => {
        if (discoveredPaths.has(path)) {
          return;
        }
        await fetchAndApplyManifestPatches(
          [path],
          manifest,
          routeModules,
          isSpaMode2,
          basename2,
          patch
        );
      };
    }
    function useFogOFWarDiscovery(router, manifest, routeModules, isSpaMode2) {
      React8.useEffect(() => {
        if (!isFogOfWarEnabled(isSpaMode2) || navigator.connection?.saveData === true) {
          return;
        }
        function registerElement(el) {
          let path = el.tagName === "FORM" ? el.getAttribute("action") : el.getAttribute("href");
          if (!path) {
            return;
          }
          let url = new URL(path, window.location.origin);
          if (!discoveredPaths.has(url.pathname)) {
            nextPaths.add(url.pathname);
          }
        }
        async function fetchPatches() {
          let lazyPaths = Array.from(nextPaths.keys()).filter((path) => {
            if (discoveredPaths.has(path)) {
              nextPaths.delete(path);
              return false;
            }
            return true;
          });
          if (lazyPaths.length === 0) {
            return;
          }
          try {
            await fetchAndApplyManifestPatches(
              lazyPaths,
              manifest,
              routeModules,
              isSpaMode2,
              router.basename,
              router.patchRoutes
            );
          } catch (e) {
            console.error("Failed to fetch manifest patches", e);
          }
        }
        document.body.querySelectorAll("a[data-discover], form[data-discover]").forEach((el) => registerElement(el));
        fetchPatches();
        let debouncedFetchPatches = debounce(fetchPatches, 100);
        function isElement(node) {
          return node.nodeType === Node.ELEMENT_NODE;
        }
        let observer = new MutationObserver((records) => {
          let elements = /* @__PURE__ */ new Set();
          records.forEach((r) => {
            [r.target, ...r.addedNodes].forEach((node) => {
              if (!isElement(node)) return;
              if (node.tagName === "A" && node.getAttribute("data-discover")) {
                elements.add(node);
              } else if (node.tagName === "FORM" && node.getAttribute("data-discover")) {
                elements.add(node);
              }
              if (node.tagName !== "A") {
                node.querySelectorAll("a[data-discover], form[data-discover]").forEach((el) => elements.add(el));
              }
            });
          });
          elements.forEach((el) => registerElement(el));
          debouncedFetchPatches();
        });
        observer.observe(document.documentElement, {
          subtree: true,
          childList: true,
          attributes: true,
          attributeFilter: ["data-discover", "href", "action"]
        });
        return () => observer.disconnect();
      }, [isSpaMode2, manifest, routeModules, router]);
    }
    async function fetchAndApplyManifestPatches(paths, manifest, routeModules, isSpaMode2, basename2, patchRoutes) {
      let manifestPath = `${basename2 != null ? basename2 : "/"}/__manifest`.replace(
        /\/+/g,
        "/"
      );
      let url = new URL(manifestPath, window.location.origin);
      paths.sort().forEach((path) => url.searchParams.append("p", path));
      url.searchParams.set("version", manifest.version);
      if (url.toString().length > URL_LIMIT) {
        nextPaths.clear();
        return;
      }
      let res = await fetch(url);
      if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
      } else if (res.status >= 400) {
        throw new Error(await res.text());
      }
      let serverPatches = await res.json();
      let knownRoutes = new Set(Object.keys(manifest.routes));
      let patches = Object.values(serverPatches).reduce((acc, route) => {
        if (route && !knownRoutes.has(route.id)) {
          acc[route.id] = route;
        }
        return acc;
      }, {});
      Object.assign(manifest.routes, patches);
      paths.forEach((p) => addToFifoQueue(p, discoveredPaths));
      let parentIds = /* @__PURE__ */ new Set();
      Object.values(patches).forEach((patch) => {
        if (patch && (!patch.parentId || !patches[patch.parentId])) {
          parentIds.add(patch.parentId);
        }
      });
      parentIds.forEach(
        (parentId) => patchRoutes(
          parentId || null,
          createClientRoutes(patches, routeModules, null, isSpaMode2, parentId)
        )
      );
    }
    function addToFifoQueue(path, queue) {
      if (queue.size >= discoveredPathsMaxSize) {
        let first = queue.values().next().value;
        queue.delete(first);
      }
      queue.add(path);
    }
    function debounce(callback, wait) {
      let timeoutId;
      return (...args) => {
        window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => callback(...args), wait);
      };
    }
    function useDataRouterContext2() {
      let context = React9.useContext(DataRouterContext);
      invariant2(
        context,
        "You must render this element inside a <DataRouterContext.Provider> element"
      );
      return context;
    }
    function useDataRouterStateContext() {
      let context = React9.useContext(DataRouterStateContext);
      invariant2(
        context,
        "You must render this element inside a <DataRouterStateContext.Provider> element"
      );
      return context;
    }
    var FrameworkContext = React9.createContext(void 0);
    FrameworkContext.displayName = "FrameworkContext";
    function useFrameworkContext() {
      let context = React9.useContext(FrameworkContext);
      invariant2(
        context,
        "You must render this element inside a <HydratedRouter> element"
      );
      return context;
    }
    function usePrefetchBehavior(prefetch, theirElementProps) {
      let frameworkContext = React9.useContext(FrameworkContext);
      let [maybePrefetch, setMaybePrefetch] = React9.useState(false);
      let [shouldPrefetch, setShouldPrefetch] = React9.useState(false);
      let { onFocus, onBlur, onMouseEnter, onMouseLeave, onTouchStart } = theirElementProps;
      let ref = React9.useRef(null);
      React9.useEffect(() => {
        if (prefetch === "render") {
          setShouldPrefetch(true);
        }
        if (prefetch === "viewport") {
          let callback = (entries) => {
            entries.forEach((entry2) => {
              setShouldPrefetch(entry2.isIntersecting);
            });
          };
          let observer = new IntersectionObserver(callback, { threshold: 0.5 });
          if (ref.current) observer.observe(ref.current);
          return () => {
            observer.disconnect();
          };
        }
      }, [prefetch]);
      React9.useEffect(() => {
        if (maybePrefetch) {
          let id = setTimeout(() => {
            setShouldPrefetch(true);
          }, 100);
          return () => {
            clearTimeout(id);
          };
        }
      }, [maybePrefetch]);
      let setIntent = () => {
        setMaybePrefetch(true);
      };
      let cancelIntent = () => {
        setMaybePrefetch(false);
        setShouldPrefetch(false);
      };
      if (!frameworkContext) {
        return [false, ref, {}];
      }
      if (prefetch !== "intent") {
        return [shouldPrefetch, ref, {}];
      }
      return [
        shouldPrefetch,
        ref,
        {
          onFocus: composeEventHandlers(onFocus, setIntent),
          onBlur: composeEventHandlers(onBlur, cancelIntent),
          onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
          onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
          onTouchStart: composeEventHandlers(onTouchStart, setIntent)
        }
      ];
    }
    function composeEventHandlers(theirHandler, ourHandler) {
      return (event) => {
        theirHandler && theirHandler(event);
        if (!event.defaultPrevented) {
          ourHandler(event);
        }
      };
    }
    function getActiveMatches(matches, errors, isSpaMode2) {
      if (isSpaMode2 && !isHydrated) {
        return [matches[0]];
      }
      if (errors) {
        let errorIdx = matches.findIndex((m) => errors[m.route.id] !== void 0);
        return matches.slice(0, errorIdx + 1);
      }
      return matches;
    }
    function Links2() {
      let { isSpaMode: isSpaMode2, manifest, routeModules, criticalCss } = useFrameworkContext();
      let { errors, matches: routerMatches } = useDataRouterStateContext();
      let matches = getActiveMatches(routerMatches, errors, isSpaMode2);
      let keyedLinks = React9.useMemo(
        () => getKeyedLinksForMatches(matches, routeModules, manifest),
        [matches, routeModules, manifest]
      );
      return /* @__PURE__ */ React9.createElement(React9.Fragment, null, criticalCss ? /* @__PURE__ */ React9.createElement("style", { dangerouslySetInnerHTML: { __html: criticalCss } }) : null, keyedLinks.map(
        ({ key, link }) => isPageLinkDescriptor(link) ? /* @__PURE__ */ React9.createElement(PrefetchPageLinks, { key, ...link }) : /* @__PURE__ */ React9.createElement("link", { key, ...link })
      ));
    }
    function PrefetchPageLinks({
      page,
      ...dataLinkProps
    }) {
      let { router } = useDataRouterContext2();
      let matches = React9.useMemo(
        () => matchRoutes(router.routes, page, router.basename),
        [router.routes, page, router.basename]
      );
      if (!matches) {
        console.warn(`Tried to prefetch ${page} but no routes matched.`);
        return null;
      }
      return /* @__PURE__ */ React9.createElement(PrefetchPageLinksImpl, { page, matches, ...dataLinkProps });
    }
    function useKeyedPrefetchLinks(matches) {
      let { manifest, routeModules } = useFrameworkContext();
      let [keyedPrefetchLinks, setKeyedPrefetchLinks] = React9.useState([]);
      React9.useEffect(() => {
        let interrupted = false;
        void getKeyedPrefetchLinks(matches, manifest, routeModules).then(
          (links2) => {
            if (!interrupted) {
              setKeyedPrefetchLinks(links2);
            }
          }
        );
        return () => {
          interrupted = true;
        };
      }, [matches, manifest, routeModules]);
      return keyedPrefetchLinks;
    }
    function PrefetchPageLinksImpl({
      page,
      matches: nextMatches,
      ...linkProps
    }) {
      let location = useLocation();
      let { manifest, routeModules } = useFrameworkContext();
      let { loaderData, matches } = useDataRouterStateContext();
      let newMatchesForData = React9.useMemo(
        () => getNewMatchesForLinks(
          page,
          nextMatches,
          matches,
          manifest,
          location,
          "data"
        ),
        [page, nextMatches, matches, manifest, location]
      );
      let newMatchesForAssets = React9.useMemo(
        () => getNewMatchesForLinks(
          page,
          nextMatches,
          matches,
          manifest,
          location,
          "assets"
        ),
        [page, nextMatches, matches, manifest, location]
      );
      let dataHrefs = React9.useMemo(() => {
        if (page === location.pathname + location.search + location.hash) {
          return [];
        }
        let routesParams = /* @__PURE__ */ new Set();
        let foundOptOutRoute = false;
        nextMatches.forEach((m) => {
          let manifestRoute = manifest.routes[m.route.id];
          if (!manifestRoute || !manifestRoute.hasLoader) {
            return;
          }
          if (!newMatchesForData.some((m2) => m2.route.id === m.route.id) && m.route.id in loaderData && routeModules[m.route.id]?.shouldRevalidate) {
            foundOptOutRoute = true;
          } else if (manifestRoute.hasClientLoader) {
            foundOptOutRoute = true;
          } else {
            routesParams.add(m.route.id);
          }
        });
        if (routesParams.size === 0) {
          return [];
        }
        let url = singleFetchUrl(page);
        if (foundOptOutRoute && routesParams.size > 0) {
          url.searchParams.set(
            "_routes",
            nextMatches.filter((m) => routesParams.has(m.route.id)).map((m) => m.route.id).join(",")
          );
        }
        return [url.pathname + url.search];
      }, [
        loaderData,
        location,
        manifest,
        newMatchesForData,
        nextMatches,
        page,
        routeModules
      ]);
      let moduleHrefs = React9.useMemo(
        () => getModuleLinkHrefs(newMatchesForAssets, manifest),
        [newMatchesForAssets, manifest]
      );
      let keyedPrefetchLinks = useKeyedPrefetchLinks(newMatchesForAssets);
      return /* @__PURE__ */ React9.createElement(React9.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ React9.createElement("link", { key: href, rel: "prefetch", as: "fetch", href, ...linkProps })), moduleHrefs.map((href) => /* @__PURE__ */ React9.createElement("link", { key: href, rel: "modulepreload", href, ...linkProps })), keyedPrefetchLinks.map(({ key, link }) => (
        // these don't spread `linkProps` because they are full link descriptors
        // already with their own props
        /* @__PURE__ */ React9.createElement("link", { key, ...link })
      )));
    }
    function Meta2() {
      let { isSpaMode: isSpaMode2, routeModules } = useFrameworkContext();
      let {
        errors,
        matches: routerMatches,
        loaderData
      } = useDataRouterStateContext();
      let location = useLocation();
      let _matches = getActiveMatches(routerMatches, errors, isSpaMode2);
      let error = null;
      if (errors) {
        error = errors[_matches[_matches.length - 1].route.id];
      }
      let meta2 = [];
      let leafMeta = null;
      let matches = [];
      for (let i = 0; i < _matches.length; i++) {
        let _match = _matches[i];
        let routeId = _match.route.id;
        let data2 = loaderData[routeId];
        let params = _match.params;
        let routeModule = routeModules[routeId];
        let routeMeta = [];
        let match = {
          id: routeId,
          data: data2,
          meta: [],
          params: _match.params,
          pathname: _match.pathname,
          handle: _match.route.handle,
          error
        };
        matches[i] = match;
        if (routeModule?.meta) {
          routeMeta = typeof routeModule.meta === "function" ? routeModule.meta({
            data: data2,
            params,
            location,
            matches,
            error
          }) : Array.isArray(routeModule.meta) ? [...routeModule.meta] : routeModule.meta;
        } else if (leafMeta) {
          routeMeta = [...leafMeta];
        }
        routeMeta = routeMeta || [];
        if (!Array.isArray(routeMeta)) {
          throw new Error(
            "The route at " + _match.route.path + " returns an invalid value. All route meta functions must return an array of meta objects.\n\nTo reference the meta function API, see https://remix.run/route/meta"
          );
        }
        match.meta = routeMeta;
        matches[i] = match;
        meta2 = [...routeMeta];
        leafMeta = meta2;
      }
      return /* @__PURE__ */ React9.createElement(React9.Fragment, null, meta2.flat().map((metaProps) => {
        if (!metaProps) {
          return null;
        }
        if ("tagName" in metaProps) {
          let { tagName, ...rest } = metaProps;
          if (!isValidMetaTag(tagName)) {
            console.warn(
              `A meta object uses an invalid tagName: ${tagName}. Expected either 'link' or 'meta'`
            );
            return null;
          }
          let Comp = tagName;
          return /* @__PURE__ */ React9.createElement(Comp, { key: JSON.stringify(rest), ...rest });
        }
        if ("title" in metaProps) {
          return /* @__PURE__ */ React9.createElement("title", { key: "title" }, String(metaProps.title));
        }
        if ("charset" in metaProps) {
          metaProps.charSet ?? (metaProps.charSet = metaProps.charset);
          delete metaProps.charset;
        }
        if ("charSet" in metaProps && metaProps.charSet != null) {
          return typeof metaProps.charSet === "string" ? /* @__PURE__ */ React9.createElement("meta", { key: "charSet", charSet: metaProps.charSet }) : null;
        }
        if ("script:ld+json" in metaProps) {
          try {
            let json = JSON.stringify(metaProps["script:ld+json"]);
            return /* @__PURE__ */ React9.createElement(
              "script",
              {
                key: `script:ld+json:${json}`,
                type: "application/ld+json",
                dangerouslySetInnerHTML: { __html: json }
              }
            );
          } catch (err) {
            return null;
          }
        }
        return /* @__PURE__ */ React9.createElement("meta", { key: JSON.stringify(metaProps), ...metaProps });
      }));
    }
    function isValidMetaTag(tagName) {
      return typeof tagName === "string" && /^(meta|link)$/.test(tagName);
    }
    var isHydrated = false;
    function Scripts2(props) {
      let { manifest, serverHandoffString, isSpaMode: isSpaMode2, renderMeta } = useFrameworkContext();
      let { router, static: isStatic, staticContext } = useDataRouterContext2();
      let { matches: routerMatches } = useDataRouterStateContext();
      let enableFogOfWar = isFogOfWarEnabled(isSpaMode2);
      if (renderMeta) {
        renderMeta.didRenderScripts = true;
      }
      let matches = getActiveMatches(routerMatches, null, isSpaMode2);
      React9.useEffect(() => {
        isHydrated = true;
      }, []);
      let initialScripts = React9.useMemo(() => {
        let streamScript = "window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());";
        let contextScript = staticContext ? `window.__reactRouterContext = ${serverHandoffString};${streamScript}` : " ";
        let routeModulesScript = !isStatic ? " " : `${manifest.hmr?.runtime ? `import ${JSON.stringify(manifest.hmr.runtime)};` : ""}${!enableFogOfWar ? `import ${JSON.stringify(manifest.url)}` : ""};
${matches.map(
          (match, index) => `import * as route${index} from ${JSON.stringify(
            manifest.routes[match.route.id].module
          )};`
        ).join("\n")}
  ${enableFogOfWar ? (
          // Inline a minimal manifest with the SSR matches
          `window.__reactRouterManifest = ${JSON.stringify(
            getPartialManifest(manifest, router),
            null,
            2
          )};`
        ) : ""}
  window.__reactRouterRouteModules = {${matches.map((match, index) => `${JSON.stringify(match.route.id)}:route${index}`).join(",")}};

import(${JSON.stringify(manifest.entry.module)});`;
        return /* @__PURE__ */ React9.createElement(React9.Fragment, null, /* @__PURE__ */ React9.createElement(
          "script",
          {
            ...props,
            suppressHydrationWarning: true,
            dangerouslySetInnerHTML: createHtml(contextScript),
            type: void 0
          }
        ), /* @__PURE__ */ React9.createElement(
          "script",
          {
            ...props,
            suppressHydrationWarning: true,
            dangerouslySetInnerHTML: createHtml(routeModulesScript),
            type: "module",
            async: true
          }
        ));
      }, []);
      let routePreloads = matches.map((match) => {
        let route = manifest.routes[match.route.id];
        return route ? (route.imports || []).concat([route.module]) : [];
      }).flat(1);
      let preloads = isHydrated ? [] : manifest.entry.imports.concat(routePreloads);
      return isHydrated ? null : /* @__PURE__ */ React9.createElement(React9.Fragment, null, !enableFogOfWar ? /* @__PURE__ */ React9.createElement(
        "link",
        {
          rel: "modulepreload",
          href: manifest.url,
          crossOrigin: props.crossOrigin
        }
      ) : null, /* @__PURE__ */ React9.createElement(
        "link",
        {
          rel: "modulepreload",
          href: manifest.entry.module,
          crossOrigin: props.crossOrigin
        }
      ), dedupe(preloads).map((path) => /* @__PURE__ */ React9.createElement(
        "link",
        {
          key: path,
          rel: "modulepreload",
          href: path,
          crossOrigin: props.crossOrigin
        }
      )), initialScripts);
    }
    function dedupe(array) {
      return [...new Set(array)];
    }
    function mergeRefs(...refs) {
      return (value) => {
        refs.forEach((ref) => {
          if (typeof ref === "function") {
            ref(value);
          } else if (ref != null) {
            ref.current = value;
          }
        });
      };
    }
    var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
    try {
      if (isBrowser) {
        window.__reactRouterVersion = "7.0.2";
      }
    } catch (e) {
    }
    function createBrowserRouter(routes2, opts) {
      return createRouter({
        basename: opts?.basename,
        future: opts?.future,
        history: createBrowserHistory({ window: opts?.window }),
        hydrationData: opts?.hydrationData || parseHydrationData(),
        routes: routes2,
        mapRouteProperties,
        dataStrategy: opts?.dataStrategy,
        patchRoutesOnNavigation: opts?.patchRoutesOnNavigation,
        window: opts?.window
      }).initialize();
    }
    function createHashRouter(routes2, opts) {
      return createRouter({
        basename: opts?.basename,
        future: opts?.future,
        history: createHashHistory({ window: opts?.window }),
        hydrationData: opts?.hydrationData || parseHydrationData(),
        routes: routes2,
        mapRouteProperties,
        dataStrategy: opts?.dataStrategy,
        patchRoutesOnNavigation: opts?.patchRoutesOnNavigation,
        window: opts?.window
      }).initialize();
    }
    function parseHydrationData() {
      let state = window?.__staticRouterHydrationData;
      if (state && state.errors) {
        state = {
          ...state,
          errors: deserializeErrors(state.errors)
        };
      }
      return state;
    }
    function deserializeErrors(errors) {
      if (!errors) return null;
      let entries = Object.entries(errors);
      let serialized = {};
      for (let [key, val] of entries) {
        if (val && val.__type === "RouteErrorResponse") {
          serialized[key] = new ErrorResponseImpl(
            val.status,
            val.statusText,
            val.data,
            val.internal === true
          );
        } else if (val && val.__type === "Error") {
          if (val.__subType) {
            let ErrorConstructor = window[val.__subType];
            if (typeof ErrorConstructor === "function") {
              try {
                let error = new ErrorConstructor(val.message);
                error.stack = "";
                serialized[key] = error;
              } catch (e) {
              }
            }
          }
          if (serialized[key] == null) {
            let error = new Error(val.message);
            error.stack = "";
            serialized[key] = error;
          }
        } else {
          serialized[key] = val;
        }
      }
      return serialized;
    }
    function BrowserRouter({
      basename: basename2,
      children,
      window: window2
    }) {
      let historyRef = React10.useRef();
      if (historyRef.current == null) {
        historyRef.current = createBrowserHistory({ window: window2, v5Compat: true });
      }
      let history = historyRef.current;
      let [state, setStateImpl] = React10.useState({
        action: history.action,
        location: history.location
      });
      let setState = React10.useCallback(
        (newState) => {
          React10.startTransition(() => setStateImpl(newState));
        },
        [setStateImpl]
      );
      React10.useLayoutEffect(() => history.listen(setState), [history, setState]);
      return /* @__PURE__ */ React10.createElement(
        Router,
        {
          basename: basename2,
          children,
          location: state.location,
          navigationType: state.action,
          navigator: history
        }
      );
    }
    function HashRouter({ basename: basename2, children, window: window2 }) {
      let historyRef = React10.useRef();
      if (historyRef.current == null) {
        historyRef.current = createHashHistory({ window: window2, v5Compat: true });
      }
      let history = historyRef.current;
      let [state, setStateImpl] = React10.useState({
        action: history.action,
        location: history.location
      });
      let setState = React10.useCallback(
        (newState) => {
          React10.startTransition(() => setStateImpl(newState));
        },
        [setStateImpl]
      );
      React10.useLayoutEffect(() => history.listen(setState), [history, setState]);
      return /* @__PURE__ */ React10.createElement(
        Router,
        {
          basename: basename2,
          children,
          location: state.location,
          navigationType: state.action,
          navigator: history
        }
      );
    }
    function HistoryRouter({
      basename: basename2,
      children,
      history
    }) {
      let [state, setStateImpl] = React10.useState({
        action: history.action,
        location: history.location
      });
      let setState = React10.useCallback(
        (newState) => {
          React10.startTransition(() => setStateImpl(newState));
        },
        [setStateImpl]
      );
      React10.useLayoutEffect(() => history.listen(setState), [history, setState]);
      return /* @__PURE__ */ React10.createElement(
        Router,
        {
          basename: basename2,
          children,
          location: state.location,
          navigationType: state.action,
          navigator: history
        }
      );
    }
    HistoryRouter.displayName = "unstable_HistoryRouter";
    var ABSOLUTE_URL_REGEX2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
    var Link = React10.forwardRef(
      function LinkWithRef({
        onClick,
        discover = "render",
        prefetch = "none",
        relative,
        reloadDocument,
        replace: replace2,
        state,
        target,
        to,
        preventScrollReset,
        viewTransition,
        ...rest
      }, forwardedRef) {
        let { basename: basename2 } = React10.useContext(NavigationContext);
        let isAbsolute = typeof to === "string" && ABSOLUTE_URL_REGEX2.test(to);
        let absoluteHref;
        let isExternal = false;
        if (typeof to === "string" && isAbsolute) {
          absoluteHref = to;
          if (isBrowser) {
            try {
              let currentUrl = new URL(window.location.href);
              let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
              let path = stripBasename(targetUrl.pathname, basename2);
              if (targetUrl.origin === currentUrl.origin && path != null) {
                to = path + targetUrl.search + targetUrl.hash;
              } else {
                isExternal = true;
              }
            } catch (e) {
              warning(
                false,
                `<Link to="${to}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
              );
            }
          }
        }
        let href = useHref(to, { relative });
        let [shouldPrefetch, prefetchRef, prefetchHandlers] = usePrefetchBehavior(
          prefetch,
          rest
        );
        let internalOnClick = useLinkClickHandler(to, {
          replace: replace2,
          state,
          target,
          preventScrollReset,
          relative,
          viewTransition
        });
        function handleClick(event) {
          if (onClick) onClick(event);
          if (!event.defaultPrevented) {
            internalOnClick(event);
          }
        }
        let link = (
          // eslint-disable-next-line jsx-a11y/anchor-has-content
          /* @__PURE__ */ React10.createElement(
            "a",
            {
              ...rest,
              ...prefetchHandlers,
              href: absoluteHref || href,
              onClick: isExternal || reloadDocument ? onClick : handleClick,
              ref: mergeRefs(forwardedRef, prefetchRef),
              target,
              "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
            }
          )
        );
        return shouldPrefetch && !isAbsolute ? /* @__PURE__ */ React10.createElement(React10.Fragment, null, link, /* @__PURE__ */ React10.createElement(PrefetchPageLinks, { page: href })) : link;
      }
    );
    Link.displayName = "Link";
    var NavLink = React10.forwardRef(
      function NavLinkWithRef({
        "aria-current": ariaCurrentProp = "page",
        caseSensitive = false,
        className: classNameProp = "",
        end = false,
        style: styleProp,
        to,
        viewTransition,
        children,
        ...rest
      }, ref) {
        let path = useResolvedPath(to, { relative: rest.relative });
        let location = useLocation();
        let routerState = React10.useContext(DataRouterStateContext);
        let { navigator: navigator2, basename: basename2 } = React10.useContext(NavigationContext);
        let isTransitioning = routerState != null && // Conditional usage is OK here because the usage of a data router is static
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useViewTransitionState(path) && viewTransition === true;
        let toPathname = navigator2.encodeLocation ? navigator2.encodeLocation(path).pathname : path.pathname;
        let locationPathname = location.pathname;
        let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
        if (!caseSensitive) {
          locationPathname = locationPathname.toLowerCase();
          nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
          toPathname = toPathname.toLowerCase();
        }
        if (nextLocationPathname && basename2) {
          nextLocationPathname = stripBasename(nextLocationPathname, basename2) || nextLocationPathname;
        }
        const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
        let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
        let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
        let renderProps = {
          isActive,
          isPending,
          isTransitioning
        };
        let ariaCurrent = isActive ? ariaCurrentProp : void 0;
        let className;
        if (typeof classNameProp === "function") {
          className = classNameProp(renderProps);
        } else {
          className = [
            classNameProp,
            isActive ? "active" : null,
            isPending ? "pending" : null,
            isTransitioning ? "transitioning" : null
          ].filter(Boolean).join(" ");
        }
        let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
        return /* @__PURE__ */ React10.createElement(
          Link,
          {
            ...rest,
            "aria-current": ariaCurrent,
            className,
            ref,
            style,
            to,
            viewTransition
          },
          typeof children === "function" ? children(renderProps) : children
        );
      }
    );
    NavLink.displayName = "NavLink";
    var Form = React10.forwardRef(
      ({
        discover = "render",
        fetcherKey,
        navigate,
        reloadDocument,
        replace: replace2,
        state,
        method = defaultMethod,
        action,
        onSubmit,
        relative,
        preventScrollReset,
        viewTransition,
        ...props
      }, forwardedRef) => {
        let submit = useSubmit();
        let formAction = useFormAction(action, { relative });
        let formMethod = method.toLowerCase() === "get" ? "get" : "post";
        let isAbsolute = typeof action === "string" && ABSOLUTE_URL_REGEX2.test(action);
        let submitHandler = (event) => {
          onSubmit && onSubmit(event);
          if (event.defaultPrevented) return;
          event.preventDefault();
          let submitter = event.nativeEvent.submitter;
          let submitMethod = submitter?.getAttribute("formmethod") || method;
          submit(submitter || event.currentTarget, {
            fetcherKey,
            method: submitMethod,
            navigate,
            replace: replace2,
            state,
            relative,
            preventScrollReset,
            viewTransition
          });
        };
        return /* @__PURE__ */ React10.createElement(
          "form",
          {
            ref: forwardedRef,
            method: formMethod,
            action: formAction,
            onSubmit: reloadDocument ? onSubmit : submitHandler,
            ...props,
            "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
          }
        );
      }
    );
    Form.displayName = "Form";
    function ScrollRestoration2({
      getKey,
      storageKey,
      ...props
    }) {
      let remixContext = React10.useContext(FrameworkContext);
      let { basename: basename2 } = React10.useContext(NavigationContext);
      let location = useLocation();
      let matches = useMatches2();
      useScrollRestoration({ getKey, storageKey });
      let ssrKey = React10.useMemo(
        () => {
          if (!remixContext || !getKey) return null;
          let userKey = getScrollRestorationKey(
            location,
            matches,
            basename2,
            getKey
          );
          return userKey !== location.key ? userKey : null;
        },
        // Nah, we only need this the first time for the SSR render
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
      );
      if (!remixContext || remixContext.isSpaMode) {
        return null;
      }
      let restoreScroll = ((storageKey2, restoreKey) => {
        if (!window.history.state || !window.history.state.key) {
          let key = Math.random().toString(32).slice(2);
          window.history.replaceState({ key }, "");
        }
        try {
          let positions = JSON.parse(sessionStorage.getItem(storageKey2) || "{}");
          let storedY = positions[restoreKey || window.history.state.key];
          if (typeof storedY === "number") {
            window.scrollTo(0, storedY);
          }
        } catch (error) {
          console.error(error);
          sessionStorage.removeItem(storageKey2);
        }
      }).toString();
      return /* @__PURE__ */ React10.createElement(
        "script",
        {
          ...props,
          suppressHydrationWarning: true,
          dangerouslySetInnerHTML: {
            __html: `(${restoreScroll})(${JSON.stringify(
              storageKey || SCROLL_RESTORATION_STORAGE_KEY
            )}, ${JSON.stringify(ssrKey)})`
          }
        }
      );
    }
    ScrollRestoration2.displayName = "ScrollRestoration";
    function getDataRouterConsoleError2(hookName) {
      return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function useDataRouterContext3(hookName) {
      let ctx = React10.useContext(DataRouterContext);
      invariant(ctx, getDataRouterConsoleError2(hookName));
      return ctx;
    }
    function useDataRouterState2(hookName) {
      let state = React10.useContext(DataRouterStateContext);
      invariant(state, getDataRouterConsoleError2(hookName));
      return state;
    }
    function useLinkClickHandler(to, {
      target,
      replace: replaceProp,
      state,
      preventScrollReset,
      relative,
      viewTransition
    } = {}) {
      let navigate = useNavigate();
      let location = useLocation();
      let path = useResolvedPath(to, { relative });
      return React10.useCallback(
        (event) => {
          if (shouldProcessLinkClick(event, target)) {
            event.preventDefault();
            let replace2 = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
            navigate(to, {
              replace: replace2,
              state,
              preventScrollReset,
              relative,
              viewTransition
            });
          }
        },
        [
          location,
          navigate,
          path,
          replaceProp,
          state,
          target,
          to,
          preventScrollReset,
          relative,
          viewTransition
        ]
      );
    }
    function useSearchParams(defaultInit) {
      warning(
        typeof URLSearchParams !== "undefined",
        `You cannot use the \`useSearchParams\` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.`
      );
      let defaultSearchParamsRef = React10.useRef(createSearchParams(defaultInit));
      let hasSetSearchParamsRef = React10.useRef(false);
      let location = useLocation();
      let searchParams = React10.useMemo(
        () => (
          // Only merge in the defaults if we haven't yet called setSearchParams.
          // Once we call that we want those to take precedence, otherwise you can't
          // remove a param with setSearchParams({}) if it has an initial value
          getSearchParamsForLocation(
            location.search,
            hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current
          )
        ),
        [location.search]
      );
      let navigate = useNavigate();
      let setSearchParams = React10.useCallback(
        (nextInit, navigateOptions) => {
          const newSearchParams = createSearchParams(
            typeof nextInit === "function" ? nextInit(searchParams) : nextInit
          );
          hasSetSearchParamsRef.current = true;
          navigate("?" + newSearchParams, navigateOptions);
        },
        [navigate, searchParams]
      );
      return [searchParams, setSearchParams];
    }
    var fetcherId = 0;
    var getUniqueFetcherId = () => `__${String(++fetcherId)}__`;
    function useSubmit() {
      let { router } = useDataRouterContext3(
        "useSubmit"
        /* UseSubmit */
      );
      let { basename: basename2 } = React10.useContext(NavigationContext);
      let currentRouteId = useRouteId();
      return React10.useCallback(
        async (target, options = {}) => {
          let { action, method, encType, formData, body } = getFormSubmissionInfo(
            target,
            basename2
          );
          if (options.navigate === false) {
            let key = options.fetcherKey || getUniqueFetcherId();
            await router.fetch(key, currentRouteId, options.action || action, {
              preventScrollReset: options.preventScrollReset,
              formData,
              body,
              formMethod: options.method || method,
              formEncType: options.encType || encType,
              flushSync: options.flushSync
            });
          } else {
            await router.navigate(options.action || action, {
              preventScrollReset: options.preventScrollReset,
              formData,
              body,
              formMethod: options.method || method,
              formEncType: options.encType || encType,
              replace: options.replace,
              state: options.state,
              fromRouteId: currentRouteId,
              flushSync: options.flushSync,
              viewTransition: options.viewTransition
            });
          }
        },
        [router, basename2, currentRouteId]
      );
    }
    function useFormAction(action, { relative } = {}) {
      let { basename: basename2 } = React10.useContext(NavigationContext);
      let routeContext = React10.useContext(RouteContext);
      invariant(routeContext, "useFormAction must be used inside a RouteContext");
      let [match] = routeContext.matches.slice(-1);
      let path = { ...useResolvedPath(action ? action : ".", { relative }) };
      let location = useLocation();
      if (action == null) {
        path.search = location.search;
        let params = new URLSearchParams(path.search);
        let indexValues = params.getAll("index");
        let hasNakedIndexParam = indexValues.some((v) => v === "");
        if (hasNakedIndexParam) {
          params.delete("index");
          indexValues.filter((v) => v).forEach((v) => params.append("index", v));
          let qs = params.toString();
          path.search = qs ? `?${qs}` : "";
        }
      }
      if ((!action || action === ".") && match.route.index) {
        path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
      }
      if (basename2 !== "/") {
        path.pathname = path.pathname === "/" ? basename2 : joinPaths([basename2, path.pathname]);
      }
      return createPath(path);
    }
    function useFetcher({
      key
    } = {}) {
      let { router } = useDataRouterContext3(
        "useFetcher"
        /* UseFetcher */
      );
      let state = useDataRouterState2(
        "useFetcher"
        /* UseFetcher */
      );
      let fetcherData = React10.useContext(FetchersContext);
      let route = React10.useContext(RouteContext);
      let routeId = route.matches[route.matches.length - 1]?.route.id;
      invariant(fetcherData, `useFetcher must be used inside a FetchersContext`);
      invariant(route, `useFetcher must be used inside a RouteContext`);
      invariant(
        routeId != null,
        `useFetcher can only be used on routes that contain a unique "id"`
      );
      let defaultKey = React10.useId();
      let [fetcherKey, setFetcherKey] = React10.useState(key || defaultKey);
      if (key && key !== fetcherKey) {
        setFetcherKey(key);
      }
      React10.useEffect(() => {
        router.getFetcher(fetcherKey);
        return () => router.deleteFetcher(fetcherKey);
      }, [router, fetcherKey]);
      let load = React10.useCallback(
        async (href, opts) => {
          invariant(routeId, "No routeId available for fetcher.load()");
          await router.fetch(fetcherKey, routeId, href, opts);
        },
        [fetcherKey, routeId, router]
      );
      let submitImpl = useSubmit();
      let submit = React10.useCallback(
        async (target, opts) => {
          await submitImpl(target, {
            ...opts,
            navigate: false,
            fetcherKey
          });
        },
        [fetcherKey, submitImpl]
      );
      let FetcherForm = React10.useMemo(() => {
        let FetcherForm2 = React10.forwardRef(
          (props, ref) => {
            return /* @__PURE__ */ React10.createElement(Form, { ...props, navigate: false, fetcherKey, ref });
          }
        );
        FetcherForm2.displayName = "fetcher.Form";
        return FetcherForm2;
      }, [fetcherKey]);
      let fetcher = state.fetchers.get(fetcherKey) || IDLE_FETCHER;
      let data2 = fetcherData.get(fetcherKey);
      let fetcherWithComponents = React10.useMemo(
        () => ({
          Form: FetcherForm,
          submit,
          load,
          ...fetcher,
          data: data2
        }),
        [FetcherForm, submit, load, fetcher, data2]
      );
      return fetcherWithComponents;
    }
    function useFetchers() {
      let state = useDataRouterState2(
        "useFetchers"
        /* UseFetchers */
      );
      return Array.from(state.fetchers.entries()).map(([key, fetcher]) => ({
        ...fetcher,
        key
      }));
    }
    var SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
    var savedScrollPositions = {};
    function getScrollRestorationKey(location, matches, basename2, getKey) {
      let key = null;
      if (getKey) {
        if (basename2 !== "/") {
          key = getKey(
            {
              ...location,
              pathname: stripBasename(location.pathname, basename2) || location.pathname
            },
            matches
          );
        } else {
          key = getKey(location, matches);
        }
      }
      if (key == null) {
        key = location.key;
      }
      return key;
    }
    function useScrollRestoration({
      getKey,
      storageKey
    } = {}) {
      let { router } = useDataRouterContext3(
        "useScrollRestoration"
        /* UseScrollRestoration */
      );
      let { restoreScrollPosition, preventScrollReset } = useDataRouterState2(
        "useScrollRestoration"
        /* UseScrollRestoration */
      );
      let { basename: basename2 } = React10.useContext(NavigationContext);
      let location = useLocation();
      let matches = useMatches2();
      let navigation = useNavigation();
      React10.useEffect(() => {
        window.history.scrollRestoration = "manual";
        return () => {
          window.history.scrollRestoration = "auto";
        };
      }, []);
      usePageHide(
        React10.useCallback(() => {
          if (navigation.state === "idle") {
            let key = getScrollRestorationKey(location, matches, basename2, getKey);
            savedScrollPositions[key] = window.scrollY;
          }
          try {
            sessionStorage.setItem(
              storageKey || SCROLL_RESTORATION_STORAGE_KEY,
              JSON.stringify(savedScrollPositions)
            );
          } catch (error) {
            warning(
              false,
              `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${error}).`
            );
          }
          window.history.scrollRestoration = "auto";
        }, [navigation.state, getKey, basename2, location, matches, storageKey])
      );
      if (typeof document !== "undefined") {
        React10.useLayoutEffect(() => {
          try {
            let sessionPositions = sessionStorage.getItem(
              storageKey || SCROLL_RESTORATION_STORAGE_KEY
            );
            if (sessionPositions) {
              savedScrollPositions = JSON.parse(sessionPositions);
            }
          } catch (e) {
          }
        }, [storageKey]);
        React10.useLayoutEffect(() => {
          let disableScrollRestoration = router?.enableScrollRestoration(
            savedScrollPositions,
            () => window.scrollY,
            getKey ? (location2, matches2) => getScrollRestorationKey(location2, matches2, basename2, getKey) : void 0
          );
          return () => disableScrollRestoration && disableScrollRestoration();
        }, [router, basename2, getKey]);
        React10.useLayoutEffect(() => {
          if (restoreScrollPosition === false) {
            return;
          }
          if (typeof restoreScrollPosition === "number") {
            window.scrollTo(0, restoreScrollPosition);
            return;
          }
          if (location.hash) {
            let el = document.getElementById(
              decodeURIComponent(location.hash.slice(1))
            );
            if (el) {
              el.scrollIntoView();
              return;
            }
          }
          if (preventScrollReset === true) {
            return;
          }
          window.scrollTo(0, 0);
        }, [location, restoreScrollPosition, preventScrollReset]);
      }
    }
    function useBeforeUnload(callback, options) {
      let { capture } = options || {};
      React10.useEffect(() => {
        let opts = capture != null ? { capture } : void 0;
        window.addEventListener("beforeunload", callback, opts);
        return () => {
          window.removeEventListener("beforeunload", callback, opts);
        };
      }, [callback, capture]);
    }
    function usePageHide(callback, options) {
      let { capture } = options || {};
      React10.useEffect(() => {
        let opts = capture != null ? { capture } : void 0;
        window.addEventListener("pagehide", callback, opts);
        return () => {
          window.removeEventListener("pagehide", callback, opts);
        };
      }, [callback, capture]);
    }
    function usePrompt({
      when,
      message
    }) {
      let blocker = useBlocker(when);
      React10.useEffect(() => {
        if (blocker.state === "blocked") {
          let proceed = window.confirm(message);
          if (proceed) {
            setTimeout(blocker.proceed, 0);
          } else {
            blocker.reset();
          }
        }
      }, [blocker, message]);
      React10.useEffect(() => {
        if (blocker.state === "blocked" && !when) {
          blocker.reset();
        }
      }, [blocker, when]);
    }
    function useViewTransitionState(to, opts = {}) {
      let vtContext = React10.useContext(ViewTransitionContext);
      invariant(
        vtContext != null,
        "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
      );
      let { basename: basename2 } = useDataRouterContext3(
        "useViewTransitionState"
        /* useViewTransitionState */
      );
      let path = useResolvedPath(to, { relative: opts.relative });
      if (!vtContext.isTransitioning) {
        return false;
      }
      let currentPath = stripBasename(vtContext.currentLocation.pathname, basename2) || vtContext.currentLocation.pathname;
      let nextPath = stripBasename(vtContext.nextLocation.pathname, basename2) || vtContext.nextLocation.pathname;
      return matchPath(path.pathname, nextPath) != null || matchPath(path.pathname, currentPath) != null;
    }
    var React11 = __toESM2(require_react());
    function StaticRouter({
      basename: basename2,
      children,
      location: locationProp = "/"
    }) {
      if (typeof locationProp === "string") {
        locationProp = parsePath(locationProp);
      }
      let action = "POP";
      let location = {
        pathname: locationProp.pathname || "/",
        search: locationProp.search || "",
        hash: locationProp.hash || "",
        state: locationProp.state != null ? locationProp.state : null,
        key: locationProp.key || "default"
      };
      let staticNavigator = getStatelessNavigator();
      return /* @__PURE__ */ React11.createElement(
        Router,
        {
          basename: basename2,
          children,
          location,
          navigationType: action,
          navigator: staticNavigator,
          static: true
        }
      );
    }
    function StaticRouterProvider({
      context,
      router,
      hydrate = true,
      nonce
    }) {
      invariant(
        router && context,
        "You must provide `router` and `context` to <StaticRouterProvider>"
      );
      let dataRouterContext = {
        router,
        navigator: getStatelessNavigator(),
        static: true,
        staticContext: context,
        basename: context.basename || "/"
      };
      let fetchersContext = /* @__PURE__ */ new Map();
      let hydrateScript = "";
      if (hydrate !== false) {
        let data2 = {
          loaderData: context.loaderData,
          actionData: context.actionData,
          errors: serializeErrors(context.errors)
        };
        let json = htmlEscape(JSON.stringify(JSON.stringify(data2)));
        hydrateScript = `window.__staticRouterHydrationData = JSON.parse(${json});`;
      }
      let { state } = dataRouterContext.router;
      return /* @__PURE__ */ React11.createElement(React11.Fragment, null, /* @__PURE__ */ React11.createElement(DataRouterContext.Provider, { value: dataRouterContext }, /* @__PURE__ */ React11.createElement(DataRouterStateContext.Provider, { value: state }, /* @__PURE__ */ React11.createElement(FetchersContext.Provider, { value: fetchersContext }, /* @__PURE__ */ React11.createElement(ViewTransitionContext.Provider, { value: { isTransitioning: false } }, /* @__PURE__ */ React11.createElement(
        Router,
        {
          basename: dataRouterContext.basename,
          location: state.location,
          navigationType: state.historyAction,
          navigator: dataRouterContext.navigator,
          static: dataRouterContext.static
        },
        /* @__PURE__ */ React11.createElement(
          DataRoutes2,
          {
            routes: router.routes,
            future: router.future,
            state
          }
        )
      ))))), hydrateScript ? /* @__PURE__ */ React11.createElement(
        "script",
        {
          suppressHydrationWarning: true,
          nonce,
          dangerouslySetInnerHTML: { __html: hydrateScript }
        }
      ) : null);
    }
    function DataRoutes2({
      routes: routes2,
      future: future2,
      state
    }) {
      return useRoutesImpl(routes2, void 0, state, future2);
    }
    function serializeErrors(errors) {
      if (!errors) return null;
      let entries = Object.entries(errors);
      let serialized = {};
      for (let [key, val] of entries) {
        if (isRouteErrorResponse2(val)) {
          serialized[key] = { ...val, __type: "RouteErrorResponse" };
        } else if (val instanceof Error) {
          serialized[key] = {
            message: val.message,
            __type: "Error",
            // If this is a subclass (i.e., ReferenceError), send up the type so we
            // can re-create the same type during hydration.
            ...val.name !== "Error" ? {
              __subType: val.name
            } : {}
          };
        } else {
          serialized[key] = val;
        }
      }
      return serialized;
    }
    function getStatelessNavigator() {
      return {
        createHref,
        encodeLocation,
        push(to) {
          throw new Error(
            `You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)})\` somewhere in your app.`
          );
        },
        replace(to) {
          throw new Error(
            `You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)}, { replace: true })\` somewhere in your app.`
          );
        },
        go(delta) {
          throw new Error(
            `You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${delta})\` somewhere in your app.`
          );
        },
        back() {
          throw new Error(
            `You cannot use navigator.back() on the server because it is a stateless environment.`
          );
        },
        forward() {
          throw new Error(
            `You cannot use navigator.forward() on the server because it is a stateless environment.`
          );
        }
      };
    }
    function createStaticHandler2(routes2, opts) {
      return createStaticHandler(routes2, {
        ...opts,
        mapRouteProperties
      });
    }
    function createStaticRouter(routes2, context, opts = {}) {
      let manifest = {};
      let dataRoutes = convertRoutesToDataRoutes(
        routes2,
        mapRouteProperties,
        void 0,
        manifest
      );
      let matches = context.matches.map((match) => {
        let route = manifest[match.route.id] || match.route;
        return {
          ...match,
          route
        };
      });
      let msg = (method) => `You cannot use router.${method}() on the server because it is a stateless environment`;
      return {
        get basename() {
          return context.basename;
        },
        get future() {
          return {
            ...opts?.future
          };
        },
        get state() {
          return {
            historyAction: "POP",
            location: context.location,
            matches,
            loaderData: context.loaderData,
            actionData: context.actionData,
            errors: context.errors,
            initialized: true,
            navigation: IDLE_NAVIGATION,
            restoreScrollPosition: null,
            preventScrollReset: false,
            revalidation: "idle",
            fetchers: /* @__PURE__ */ new Map(),
            blockers: /* @__PURE__ */ new Map()
          };
        },
        get routes() {
          return dataRoutes;
        },
        get window() {
          return void 0;
        },
        initialize() {
          throw msg("initialize");
        },
        subscribe() {
          throw msg("subscribe");
        },
        enableScrollRestoration() {
          throw msg("enableScrollRestoration");
        },
        navigate() {
          throw msg("navigate");
        },
        fetch() {
          throw msg("fetch");
        },
        revalidate() {
          throw msg("revalidate");
        },
        createHref,
        encodeLocation,
        getFetcher() {
          return IDLE_FETCHER;
        },
        deleteFetcher() {
          throw msg("deleteFetcher");
        },
        dispose() {
          throw msg("dispose");
        },
        getBlocker() {
          return IDLE_BLOCKER;
        },
        deleteBlocker() {
          throw msg("deleteBlocker");
        },
        patchRoutes() {
          throw msg("patchRoutes");
        },
        _internalFetchControllers: /* @__PURE__ */ new Map(),
        _internalSetRoutes() {
          throw msg("_internalSetRoutes");
        }
      };
    }
    function createHref(to) {
      return typeof to === "string" ? to : createPath(to);
    }
    function encodeLocation(to) {
      let href = typeof to === "string" ? to : createPath(to);
      href = href.replace(/ $/, "%20");
      let encoded = ABSOLUTE_URL_REGEX3.test(href) ? new URL(href) : new URL(href, "http://localhost");
      return {
        pathname: encoded.pathname,
        search: encoded.search,
        hash: encoded.hash
      };
    }
    var ABSOLUTE_URL_REGEX3 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
    var ESCAPE_LOOKUP2 = {
      "&": "\\u0026",
      ">": "\\u003e",
      "<": "\\u003c",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029"
    };
    var ESCAPE_REGEX2 = /[&><\u2028\u2029]/g;
    function htmlEscape(str) {
      return str.replace(ESCAPE_REGEX2, (match) => ESCAPE_LOOKUP2[match]);
    }
    var React12 = __toESM2(require_react());
    function ServerRouter2({
      context,
      url,
      abortDelay,
      nonce
    }) {
      if (typeof url === "string") {
        url = new URL(url);
      }
      let { manifest, routeModules, criticalCss, serverHandoffString } = context;
      let routes2 = createServerRoutes(
        manifest.routes,
        routeModules,
        context.future,
        context.isSpaMode
      );
      context.staticHandlerContext.loaderData = {
        ...context.staticHandlerContext.loaderData
      };
      for (let match of context.staticHandlerContext.matches) {
        let routeId = match.route.id;
        let route = routeModules[routeId];
        let manifestRoute = context.manifest.routes[routeId];
        if (route && manifestRoute && shouldHydrateRouteLoader(manifestRoute, route, context.isSpaMode) && (route.HydrateFallback || !manifestRoute.hasLoader)) {
          delete context.staticHandlerContext.loaderData[routeId];
        }
      }
      let router = createStaticRouter(routes2, context.staticHandlerContext);
      return /* @__PURE__ */ React12.createElement(React12.Fragment, null, /* @__PURE__ */ React12.createElement(
        FrameworkContext.Provider,
        {
          value: {
            manifest,
            routeModules,
            criticalCss,
            serverHandoffString,
            future: context.future,
            isSpaMode: context.isSpaMode,
            serializeError: context.serializeError,
            abortDelay,
            renderMeta: context.renderMeta
          }
        },
        /* @__PURE__ */ React12.createElement(RemixErrorBoundary, { location: router.state.location }, /* @__PURE__ */ React12.createElement(
          StaticRouterProvider,
          {
            router,
            context: context.staticHandlerContext,
            hydrate: false
          }
        ))
      ), context.serverHandoffStream ? /* @__PURE__ */ React12.createElement(React12.Suspense, null, /* @__PURE__ */ React12.createElement(
        StreamTransfer,
        {
          context,
          identifier: 0,
          reader: context.serverHandoffStream.getReader(),
          textDecoder: new TextDecoder(),
          nonce
        }
      )) : null);
    }
    var React13 = __toESM2(require_react());
    function createRoutesStub(routes2, context = {}) {
      return function RoutesTestStub({
        initialEntries,
        initialIndex,
        hydrationData,
        future: future2
      }) {
        let routerRef = React13.useRef();
        let remixContextRef = React13.useRef();
        if (routerRef.current == null) {
          remixContextRef.current = {
            future: {},
            manifest: {
              routes: {},
              entry: { imports: [], module: "" },
              url: "",
              version: ""
            },
            routeModules: {},
            isSpaMode: false
          };
          let patched = processRoutes(
            // @ts-expect-error loader/action context types don't match :/
            convertRoutesToDataRoutes(routes2, (r) => r),
            context,
            remixContextRef.current.manifest,
            remixContextRef.current.routeModules
          );
          routerRef.current = createMemoryRouter(patched, {
            initialEntries,
            initialIndex,
            hydrationData
          });
        }
        return /* @__PURE__ */ React13.createElement(FrameworkContext.Provider, { value: remixContextRef.current }, /* @__PURE__ */ React13.createElement(RouterProvider, { router: routerRef.current }));
      };
    }
    function processRoutes(routes2, context, manifest, routeModules, parentId) {
      return routes2.map((route) => {
        if (!route.id) {
          throw new Error(
            "Expected a route.id in @remix-run/testing processRoutes() function"
          );
        }
        let { loader, action } = route;
        let newRoute = {
          id: route.id,
          path: route.path,
          index: route.index,
          Component: route.Component,
          HydrateFallback: route.HydrateFallback,
          ErrorBoundary: route.ErrorBoundary,
          action: action ? (args) => action({ ...args, context }) : void 0,
          loader: loader ? (args) => loader({ ...args, context }) : void 0,
          handle: route.handle,
          shouldRevalidate: route.shouldRevalidate
        };
        let entryRoute = {
          id: route.id,
          path: route.path,
          index: route.index,
          parentId,
          hasAction: route.action != null,
          hasLoader: route.loader != null,
          // When testing routes, you should just be stubbing loader/action, not
          // trying to re-implement the full loader/clientLoader/SSR/hydration flow.
          // That is better tested via E2E tests.
          hasClientAction: false,
          hasClientLoader: false,
          hasErrorBoundary: route.ErrorBoundary != null,
          module: "build/stub-path-to-module.js"
          // any need for this?
        };
        manifest.routes[newRoute.id] = entryRoute;
        routeModules[route.id] = {
          default: route.Component || Outlet2,
          ErrorBoundary: route.ErrorBoundary || void 0,
          handle: route.handle,
          links: route.links,
          meta: route.meta,
          shouldRevalidate: route.shouldRevalidate
        };
        if (route.children) {
          newRoute.children = processRoutes(
            route.children,
            context,
            manifest,
            routeModules,
            newRoute.id
          );
        }
        return newRoute;
      });
    }
    var import_cookie = require_dist();
    var encoder = new TextEncoder();
    var sign = async (value, secret) => {
      let data2 = encoder.encode(value);
      let key = await createKey2(secret, ["sign"]);
      let signature = await crypto.subtle.sign("HMAC", key, data2);
      let hash = btoa(String.fromCharCode(...new Uint8Array(signature))).replace(
        /=+$/,
        ""
      );
      return value + "." + hash;
    };
    var unsign = async (cookie, secret) => {
      let index = cookie.lastIndexOf(".");
      let value = cookie.slice(0, index);
      let hash = cookie.slice(index + 1);
      let data2 = encoder.encode(value);
      let key = await createKey2(secret, ["verify"]);
      let signature = byteStringToUint8Array(atob(hash));
      let valid = await crypto.subtle.verify("HMAC", key, signature, data2);
      return valid ? value : false;
    };
    var createKey2 = async (secret, usages) => crypto.subtle.importKey(
      "raw",
      encoder.encode(secret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      usages
    );
    function byteStringToUint8Array(byteString) {
      let array = new Uint8Array(byteString.length);
      for (let i = 0; i < byteString.length; i++) {
        array[i] = byteString.charCodeAt(i);
      }
      return array;
    }
    var createCookie = (name, cookieOptions = {}) => {
      let { secrets = [], ...options } = {
        path: "/",
        sameSite: "lax",
        ...cookieOptions
      };
      warnOnceAboutExpiresCookie(name, options.expires);
      return {
        get name() {
          return name;
        },
        get isSigned() {
          return secrets.length > 0;
        },
        get expires() {
          return typeof options.maxAge !== "undefined" ? new Date(Date.now() + options.maxAge * 1e3) : options.expires;
        },
        async parse(cookieHeader, parseOptions) {
          if (!cookieHeader) return null;
          let cookies = (0, import_cookie.parse)(cookieHeader, { ...options, ...parseOptions });
          if (name in cookies) {
            let value = cookies[name];
            if (typeof value === "string" && value !== "") {
              let decoded = await decodeCookieValue(value, secrets);
              return decoded;
            } else {
              return "";
            }
          } else {
            return null;
          }
        },
        async serialize(value, serializeOptions) {
          return (0, import_cookie.serialize)(
            name,
            value === "" ? "" : await encodeCookieValue(value, secrets),
            {
              ...options,
              ...serializeOptions
            }
          );
        }
      };
    };
    var isCookie = (object) => {
      return object != null && typeof object.name === "string" && typeof object.isSigned === "boolean" && typeof object.parse === "function" && typeof object.serialize === "function";
    };
    async function encodeCookieValue(value, secrets) {
      let encoded = encodeData(value);
      if (secrets.length > 0) {
        encoded = await sign(encoded, secrets[0]);
      }
      return encoded;
    }
    async function decodeCookieValue(value, secrets) {
      if (secrets.length > 0) {
        for (let secret of secrets) {
          let unsignedValue = await unsign(value, secret);
          if (unsignedValue !== false) {
            return decodeData(unsignedValue);
          }
        }
        return null;
      }
      return decodeData(value);
    }
    function encodeData(value) {
      return btoa(myUnescape(encodeURIComponent(JSON.stringify(value))));
    }
    function decodeData(value) {
      try {
        return JSON.parse(decodeURIComponent(myEscape(atob(value))));
      } catch (error) {
        return {};
      }
    }
    function myEscape(value) {
      let str = value.toString();
      let result = "";
      let index = 0;
      let chr, code;
      while (index < str.length) {
        chr = str.charAt(index++);
        if (/[\w*+\-./@]/.exec(chr)) {
          result += chr;
        } else {
          code = chr.charCodeAt(0);
          if (code < 256) {
            result += "%" + hex(code, 2);
          } else {
            result += "%u" + hex(code, 4).toUpperCase();
          }
        }
      }
      return result;
    }
    function hex(code, length) {
      let result = code.toString(16);
      while (result.length < length) result = "0" + result;
      return result;
    }
    function myUnescape(value) {
      let str = value.toString();
      let result = "";
      let index = 0;
      let chr, part;
      while (index < str.length) {
        chr = str.charAt(index++);
        if (chr === "%") {
          if (str.charAt(index) === "u") {
            part = str.slice(index + 1, index + 5);
            if (/^[\da-f]{4}$/i.exec(part)) {
              result += String.fromCharCode(parseInt(part, 16));
              index += 5;
              continue;
            }
          } else {
            part = str.slice(index, index + 2);
            if (/^[\da-f]{2}$/i.exec(part)) {
              result += String.fromCharCode(parseInt(part, 16));
              index += 2;
              continue;
            }
          }
        }
        result += chr;
      }
      return result;
    }
    function warnOnceAboutExpiresCookie(name, expires) {
      warnOnce(
        !expires,
        `The "${name}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`
      );
    }
    function createEntryRouteModules(manifest) {
      return Object.keys(manifest).reduce((memo2, routeId) => {
        let route = manifest[routeId];
        if (route) {
          memo2[routeId] = route.module;
        }
        return memo2;
      }, {});
    }
    var ServerMode = /* @__PURE__ */ ((ServerMode2) => {
      ServerMode2["Development"] = "development";
      ServerMode2["Production"] = "production";
      ServerMode2["Test"] = "test";
      return ServerMode2;
    })(ServerMode || {});
    function isServerMode(value) {
      return value === "development" || value === "production" || value === "test";
    }
    function sanitizeError(error, serverMode) {
      if (error instanceof Error && serverMode !== "development") {
        let sanitized = new Error("Unexpected Server Error");
        sanitized.stack = void 0;
        return sanitized;
      }
      return error;
    }
    function sanitizeErrors(errors, serverMode) {
      return Object.entries(errors).reduce((acc, [routeId, error]) => {
        return Object.assign(acc, { [routeId]: sanitizeError(error, serverMode) });
      }, {});
    }
    function serializeError(error, serverMode) {
      let sanitized = sanitizeError(error, serverMode);
      return {
        message: sanitized.message,
        stack: sanitized.stack
      };
    }
    function serializeErrors2(errors, serverMode) {
      if (!errors) return null;
      let entries = Object.entries(errors);
      let serialized = {};
      for (let [key, val] of entries) {
        if (isRouteErrorResponse2(val)) {
          serialized[key] = { ...val, __type: "RouteErrorResponse" };
        } else if (val instanceof Error) {
          let sanitized = sanitizeError(val, serverMode);
          serialized[key] = {
            message: sanitized.message,
            stack: sanitized.stack,
            __type: "Error",
            // If this is a subclass (i.e., ReferenceError), send up the type so we
            // can re-create the same type during hydration.  This will only apply
            // in dev mode since all production errors are sanitized to normal
            // Error instances
            ...sanitized.name !== "Error" ? {
              __subType: sanitized.name
            } : {}
          };
        } else {
          serialized[key] = val;
        }
      }
      return serialized;
    }
    function matchServerRoutes(routes2, pathname, basename2) {
      let matches = matchRoutes(
        routes2,
        pathname,
        basename2
      );
      if (!matches) return null;
      return matches.map((match) => ({
        params: match.params,
        pathname: match.pathname,
        route: match.route
      }));
    }
    async function callRouteHandler(handler2, args) {
      let result = await handler2({
        request: stripRoutesParam(stripIndexParam2(args.request)),
        params: args.params,
        context: args.context
      });
      if (isDataWithResponseInit(result) && result.init && result.init.status && isRedirectStatusCode(result.init.status)) {
        throw new Response(null, result.init);
      }
      return result;
    }
    function stripIndexParam2(request) {
      let url = new URL(request.url);
      let indexValues = url.searchParams.getAll("index");
      url.searchParams.delete("index");
      let indexValuesToKeep = [];
      for (let indexValue of indexValues) {
        if (indexValue) {
          indexValuesToKeep.push(indexValue);
        }
      }
      for (let toKeep of indexValuesToKeep) {
        url.searchParams.append("index", toKeep);
      }
      let init = {
        method: request.method,
        body: request.body,
        headers: request.headers,
        signal: request.signal
      };
      if (init.body) {
        init.duplex = "half";
      }
      return new Request(url.href, init);
    }
    function stripRoutesParam(request) {
      let url = new URL(request.url);
      url.searchParams.delete("_routes");
      let init = {
        method: request.method,
        body: request.body,
        headers: request.headers,
        signal: request.signal
      };
      if (init.body) {
        init.duplex = "half";
      }
      return new Request(url.href, init);
    }
    function invariant3(value, message) {
      if (value === false || value === null || typeof value === "undefined") {
        console.error(
          "The following error is a bug in React Router; please open an issue! https://github.com/remix-run/react-router/issues/new/choose"
        );
        throw new Error(message);
      }
    }
    function groupRoutesByParentId2(manifest) {
      let routes2 = {};
      Object.values(manifest).forEach((route) => {
        if (route) {
          let parentId = route.parentId || "";
          if (!routes2[parentId]) {
            routes2[parentId] = [];
          }
          routes2[parentId].push(route);
        }
      });
      return routes2;
    }
    function createRoutes(manifest, parentId = "", routesByParentId = groupRoutesByParentId2(manifest)) {
      return (routesByParentId[parentId] || []).map((route) => ({
        ...route,
        children: createRoutes(manifest, route.id, routesByParentId)
      }));
    }
    function createStaticHandlerDataRoutes(manifest, future2, parentId = "", routesByParentId = groupRoutesByParentId2(manifest)) {
      return (routesByParentId[parentId] || []).map((route) => {
        let commonRoute = {
          // Always include root due to default boundaries
          hasErrorBoundary: route.id === "root" || route.module.ErrorBoundary != null,
          id: route.id,
          path: route.path,
          // Need to use RR's version in the param typed here to permit the optional
          // context even though we know it'll always be provided in remix
          loader: route.module.loader ? async (args) => {
            if (args.request.headers.has("X-React-Router-Prerender-Data")) {
              const preRenderedData = args.request.headers.get(
                "X-React-Router-Prerender-Data"
              );
              let encoded = preRenderedData ? decodeURI(preRenderedData) : preRenderedData;
              invariant3(encoded, "Missing prerendered data for route");
              let uint8array = new TextEncoder().encode(encoded);
              let stream = new ReadableStream({
                start(controller) {
                  controller.enqueue(uint8array);
                  controller.close();
                }
              });
              let decoded = await decodeViaTurboStream(stream, global);
              let data2 = decoded.value;
              invariant3(
                data2 && route.id in data2,
                "Unable to decode prerendered data"
              );
              let result = data2[route.id];
              invariant3("data" in result, "Unable to process prerendered data");
              return result.data;
            }
            let val = await callRouteHandler(route.module.loader, args);
            return val;
          } : void 0,
          action: route.module.action ? (args) => callRouteHandler(route.module.action, args) : void 0,
          handle: route.module.handle
        };
        return route.index ? {
          index: true,
          ...commonRoute
        } : {
          caseSensitive: route.caseSensitive,
          children: createStaticHandlerDataRoutes(
            manifest,
            future2,
            route.id,
            routesByParentId
          ),
          ...commonRoute
        };
      });
    }
    var ESCAPE_LOOKUP3 = {
      "&": "\\u0026",
      ">": "\\u003e",
      "<": "\\u003c",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029"
    };
    var ESCAPE_REGEX3 = /[&><\u2028\u2029]/g;
    function escapeHtml2(html) {
      return html.replace(ESCAPE_REGEX3, (match) => ESCAPE_LOOKUP3[match]);
    }
    function createServerHandoffString(serverHandoff) {
      return escapeHtml2(JSON.stringify(serverHandoff));
    }
    var globalDevServerHooksKey = "__reactRouterDevServerHooks";
    function setDevServerHooks(devServerHooks) {
      globalThis[globalDevServerHooksKey] = devServerHooks;
    }
    function getDevServerHooks() {
      return globalThis[globalDevServerHooksKey];
    }
    var import_turbo_stream2 = require_turbo_stream();
    var import_set_cookie_parser = require_set_cookie();
    function getDocumentHeaders(build, context) {
      let boundaryIdx = context.errors ? context.matches.findIndex((m) => context.errors[m.route.id]) : -1;
      let matches = boundaryIdx >= 0 ? context.matches.slice(0, boundaryIdx + 1) : context.matches;
      let errorHeaders;
      if (boundaryIdx >= 0) {
        let { actionHeaders, actionData, loaderHeaders, loaderData } = context;
        context.matches.slice(boundaryIdx).some((match) => {
          let id = match.route.id;
          if (actionHeaders[id] && (!actionData || !actionData.hasOwnProperty(id))) {
            errorHeaders = actionHeaders[id];
          } else if (loaderHeaders[id] && !loaderData.hasOwnProperty(id)) {
            errorHeaders = loaderHeaders[id];
          }
          return errorHeaders != null;
        });
      }
      return matches.reduce((parentHeaders, match, idx) => {
        let { id } = match.route;
        let route = build.routes[id];
        invariant3(route, `Route with id "${id}" not found in build`);
        let routeModule = route.module;
        let loaderHeaders = context.loaderHeaders[id] || new Headers();
        let actionHeaders = context.actionHeaders[id] || new Headers();
        let includeErrorHeaders = errorHeaders != null && idx === matches.length - 1;
        let includeErrorCookies = includeErrorHeaders && errorHeaders !== loaderHeaders && errorHeaders !== actionHeaders;
        if (routeModule.headers == null) {
          let headers2 = new Headers(parentHeaders);
          if (includeErrorCookies) {
            prependCookies(errorHeaders, headers2);
          }
          prependCookies(actionHeaders, headers2);
          prependCookies(loaderHeaders, headers2);
          return headers2;
        }
        let headers = new Headers(
          routeModule.headers ? typeof routeModule.headers === "function" ? routeModule.headers({
            loaderHeaders,
            parentHeaders,
            actionHeaders,
            errorHeaders: includeErrorHeaders ? errorHeaders : void 0
          }) : routeModule.headers : void 0
        );
        if (includeErrorCookies) {
          prependCookies(errorHeaders, headers);
        }
        prependCookies(actionHeaders, headers);
        prependCookies(loaderHeaders, headers);
        prependCookies(parentHeaders, headers);
        return headers;
      }, new Headers());
    }
    function prependCookies(parentHeaders, childHeaders) {
      let parentSetCookieString = parentHeaders.get("Set-Cookie");
      if (parentSetCookieString) {
        let cookies = (0, import_set_cookie_parser.splitCookiesString)(parentSetCookieString);
        cookies.forEach((cookie) => {
          childHeaders.append("Set-Cookie", cookie);
        });
      }
    }
    var SINGLE_FETCH_REDIRECT_STATUS = 202;
    function getSingleFetchDataStrategy2({
      isActionDataRequest,
      loadRouteIds
    } = {}) {
      return async ({ request, matches }) => {
        if (isActionDataRequest && request.method === "GET") {
          return {};
        }
        let matchesToLoad = loadRouteIds ? matches.filter((m) => loadRouteIds.includes(m.route.id)) : matches;
        let results = await Promise.all(
          matchesToLoad.map((match) => match.resolve())
        );
        return results.reduce(
          (acc, result, i) => Object.assign(acc, { [matchesToLoad[i].route.id]: result }),
          {}
        );
      };
    }
    async function singleFetchAction(build, serverMode, staticHandler, request, handlerUrl, loadContext, handleError) {
      try {
        let handlerRequest = new Request(handlerUrl, {
          method: request.method,
          body: request.body,
          headers: request.headers,
          signal: request.signal,
          ...request.body ? { duplex: "half" } : void 0
        });
        let result = await staticHandler.query(handlerRequest, {
          requestContext: loadContext,
          skipLoaderErrorBubbling: true,
          dataStrategy: getSingleFetchDataStrategy2({
            isActionDataRequest: true
          })
        });
        if (isResponse(result)) {
          return {
            result: getSingleFetchRedirect(
              result.status,
              result.headers,
              build.basename
            ),
            headers: result.headers,
            status: SINGLE_FETCH_REDIRECT_STATUS
          };
        }
        let context = result;
        let headers = getDocumentHeaders(build, context);
        if (isRedirectStatusCode(context.statusCode) && headers.has("Location")) {
          return {
            result: getSingleFetchRedirect(
              context.statusCode,
              headers,
              build.basename
            ),
            headers,
            status: SINGLE_FETCH_REDIRECT_STATUS
          };
        }
        if (context.errors) {
          Object.values(context.errors).forEach((err) => {
            if (!isRouteErrorResponse2(err) || err.error) {
              handleError(err);
            }
          });
          context.errors = sanitizeErrors(context.errors, serverMode);
        }
        let singleFetchResult;
        if (context.errors) {
          singleFetchResult = { error: Object.values(context.errors)[0] };
        } else {
          singleFetchResult = { data: Object.values(context.actionData || {})[0] };
        }
        return {
          result: singleFetchResult,
          headers,
          status: context.statusCode
        };
      } catch (error) {
        handleError(error);
        return {
          result: { error },
          headers: new Headers(),
          status: 500
        };
      }
    }
    async function singleFetchLoaders(build, serverMode, staticHandler, request, handlerUrl, loadContext, handleError) {
      try {
        let handlerRequest = new Request(handlerUrl, {
          headers: request.headers,
          signal: request.signal
        });
        let loadRouteIds = new URL(request.url).searchParams.get("_routes")?.split(",") || void 0;
        let result = await staticHandler.query(handlerRequest, {
          requestContext: loadContext,
          skipLoaderErrorBubbling: true,
          dataStrategy: getSingleFetchDataStrategy2({
            loadRouteIds
          })
        });
        if (isResponse(result)) {
          return {
            result: {
              [SingleFetchRedirectSymbol]: getSingleFetchRedirect(
                result.status,
                result.headers,
                build.basename
              )
            },
            headers: result.headers,
            status: SINGLE_FETCH_REDIRECT_STATUS
          };
        }
        let context = result;
        let headers = getDocumentHeaders(build, context);
        if (isRedirectStatusCode(context.statusCode) && headers.has("Location")) {
          return {
            result: {
              [SingleFetchRedirectSymbol]: getSingleFetchRedirect(
                context.statusCode,
                headers,
                build.basename
              )
            },
            headers,
            status: SINGLE_FETCH_REDIRECT_STATUS
          };
        }
        if (context.errors) {
          Object.values(context.errors).forEach((err) => {
            if (!isRouteErrorResponse2(err) || err.error) {
              handleError(err);
            }
          });
          context.errors = sanitizeErrors(context.errors, serverMode);
        }
        let results = {};
        let loadedMatches = loadRouteIds ? context.matches.filter(
          (m) => m.route.loader && loadRouteIds.includes(m.route.id)
        ) : context.matches;
        loadedMatches.forEach((m) => {
          let { id } = m.route;
          if (context.errors && context.errors.hasOwnProperty(id)) {
            results[id] = { error: context.errors[id] };
          } else if (context.loaderData.hasOwnProperty(id)) {
            results[id] = { data: context.loaderData[id] };
          }
        });
        return {
          result: results,
          headers,
          status: context.statusCode
        };
      } catch (error) {
        handleError(error);
        return {
          result: { root: { error } },
          headers: new Headers(),
          status: 500
        };
      }
    }
    function getSingleFetchRedirect(status, headers, basename2) {
      let redirect2 = headers.get("Location");
      if (basename2) {
        redirect2 = stripBasename(redirect2, basename2) || redirect2;
      }
      return {
        redirect: redirect2,
        status,
        revalidate: (
          // Technically X-Remix-Revalidate isn't needed here - that was an implementation
          // detail of ?_data requests as our way to tell the front end to revalidate when
          // we didn't have a response body to include that information in.
          // With single fetch, we tell the front end via this revalidate boolean field.
          // However, we're respecting it for now because it may be something folks have
          // used in their own responses
          // TODO(v3): Consider removing or making this official public API
          headers.has("X-Remix-Revalidate") || headers.has("Set-Cookie")
        ),
        reload: headers.has("X-Remix-Reload-Document"),
        replace: headers.has("X-Remix-Replace")
      };
    }
    function encodeViaTurboStream(data2, requestSignal, streamTimeout, serverMode) {
      let controller = new AbortController();
      let timeoutId = setTimeout(
        () => controller.abort(new Error("Server Timeout")),
        typeof streamTimeout === "number" ? streamTimeout : 4950
      );
      requestSignal.addEventListener("abort", () => clearTimeout(timeoutId));
      return (0, import_turbo_stream2.encode)(data2, {
        signal: controller.signal,
        plugins: [
          (value) => {
            if (value instanceof Error) {
              let { name, message, stack } = serverMode === "production" ? sanitizeError(value, serverMode) : value;
              return ["SanitizedError", name, message, stack];
            }
            if (value instanceof ErrorResponseImpl) {
              let { data: data3, status, statusText } = value;
              return ["ErrorResponse", data3, status, statusText];
            }
            if (value && typeof value === "object" && SingleFetchRedirectSymbol in value) {
              return ["SingleFetchRedirect", value[SingleFetchRedirectSymbol]];
            }
          }
        ],
        postPlugins: [
          (value) => {
            if (!value) return;
            if (typeof value !== "object") return;
            return [
              "SingleFetchClassInstance",
              Object.fromEntries(Object.entries(value))
            ];
          },
          () => ["SingleFetchFallback"]
        ]
      });
    }
    function derive(build, mode) {
      let routes2 = createRoutes(build.routes);
      let dataRoutes = createStaticHandlerDataRoutes(build.routes, build.future);
      let serverMode = isServerMode(mode) ? mode : "production";
      let staticHandler = createStaticHandler(dataRoutes, {
        basename: build.basename
      });
      let errorHandler2 = build.entry.module.handleError || ((error, { request }) => {
        if (serverMode !== "test" && !request.signal.aborted) {
          console.error(
            // @ts-expect-error This is "private" from users but intended for internal use
            isRouteErrorResponse2(error) && error.error ? error.error : error
          );
        }
      });
      return {
        routes: routes2,
        dataRoutes,
        serverMode,
        staticHandler,
        errorHandler: errorHandler2
      };
    }
    var createRequestHandler2 = (build, mode) => {
      let _build;
      let routes2;
      let serverMode;
      let staticHandler;
      let errorHandler2;
      return async function requestHandler(request, loadContext = {}) {
        _build = typeof build === "function" ? await build() : build;
        if (typeof build === "function") {
          let derived = derive(_build, mode);
          routes2 = derived.routes;
          serverMode = derived.serverMode;
          staticHandler = derived.staticHandler;
          errorHandler2 = derived.errorHandler;
        } else if (!routes2 || !serverMode || !staticHandler || !errorHandler2) {
          let derived = derive(_build, mode);
          routes2 = derived.routes;
          serverMode = derived.serverMode;
          staticHandler = derived.staticHandler;
          errorHandler2 = derived.errorHandler;
        }
        let url = new URL(request.url);
        let params = {};
        let handleError = (error) => {
          if (mode === "development") {
            getDevServerHooks()?.processRequestError?.(error);
          }
          errorHandler2(error, {
            context: loadContext,
            params,
            request
          });
        };
        let manifestUrl = `${_build.basename ?? "/"}/__manifest`.replace(
          /\/+/g,
          "/"
        );
        if (url.pathname === manifestUrl) {
          try {
            let res = await handleManifestRequest(_build, routes2, url);
            return res;
          } catch (e) {
            handleError(e);
            return new Response("Unknown Server Error", { status: 500 });
          }
        }
        let matches = matchServerRoutes(routes2, url.pathname, _build.basename);
        if (matches && matches.length > 0) {
          Object.assign(params, matches[0].params);
        }
        let response;
        if (url.pathname.endsWith(".data")) {
          let handlerUrl = new URL(request.url);
          handlerUrl.pathname = handlerUrl.pathname.replace(/\.data$/, "").replace(/^\/_root$/, "/");
          let singleFetchMatches = matchServerRoutes(
            routes2,
            handlerUrl.pathname,
            _build.basename
          );
          response = await handleSingleFetchRequest(
            serverMode,
            _build,
            staticHandler,
            request,
            handlerUrl,
            loadContext,
            handleError
          );
          if (_build.entry.module.handleDataRequest) {
            response = await _build.entry.module.handleDataRequest(response, {
              context: loadContext,
              params: singleFetchMatches ? singleFetchMatches[0].params : {},
              request
            });
            if (isRedirectResponse(response)) {
              let result = getSingleFetchRedirect(
                response.status,
                response.headers,
                _build.basename
              );
              if (request.method === "GET") {
                result = {
                  [SingleFetchRedirectSymbol]: result
                };
              }
              let headers = new Headers(response.headers);
              headers.set("Content-Type", "text/x-script");
              return new Response(
                encodeViaTurboStream(
                  result,
                  request.signal,
                  _build.entry.module.streamTimeout,
                  serverMode
                ),
                {
                  status: SINGLE_FETCH_REDIRECT_STATUS,
                  headers
                }
              );
            }
          }
        } else if (matches && matches[matches.length - 1].route.module.default == null && matches[matches.length - 1].route.module.ErrorBoundary == null) {
          response = await handleResourceRequest(
            serverMode,
            staticHandler,
            matches.slice(-1)[0].route.id,
            request,
            loadContext,
            handleError
          );
        } else {
          let criticalCss = mode === "development" ? await getDevServerHooks()?.getCriticalCss?.(_build, url.pathname) : void 0;
          response = await handleDocumentRequest(
            serverMode,
            _build,
            staticHandler,
            request,
            loadContext,
            handleError,
            criticalCss
          );
        }
        if (request.method === "HEAD") {
          return new Response(null, {
            headers: response.headers,
            status: response.status,
            statusText: response.statusText
          });
        }
        return response;
      };
    };
    async function handleManifestRequest(build, routes2, url) {
      let patches = {};
      if (url.searchParams.has("p")) {
        for (let path of url.searchParams.getAll("p")) {
          let matches = matchServerRoutes(routes2, path, build.basename);
          if (matches) {
            for (let match of matches) {
              let routeId = match.route.id;
              let route = build.assets.routes[routeId];
              if (route) {
                patches[routeId] = route;
              }
            }
          }
        }
        return Response.json(patches, {
          headers: {
            "Cache-Control": "public, max-age=31536000, immutable"
          }
        });
      }
      return new Response("Invalid Request", { status: 400 });
    }
    async function handleSingleFetchRequest(serverMode, build, staticHandler, request, handlerUrl, loadContext, handleError) {
      let { result, headers, status } = request.method !== "GET" ? await singleFetchAction(
        build,
        serverMode,
        staticHandler,
        request,
        handlerUrl,
        loadContext,
        handleError
      ) : await singleFetchLoaders(
        build,
        serverMode,
        staticHandler,
        request,
        handlerUrl,
        loadContext,
        handleError
      );
      let resultHeaders = new Headers(headers);
      resultHeaders.set("X-Remix-Response", "yes");
      if (status === 304) {
        return new Response(null, { status: 304, headers: resultHeaders });
      }
      resultHeaders.set("Content-Type", "text/x-script");
      return new Response(
        encodeViaTurboStream(
          result,
          request.signal,
          build.entry.module.streamTimeout,
          serverMode
        ),
        {
          status: status || 200,
          headers: resultHeaders
        }
      );
    }
    async function handleDocumentRequest(serverMode, build, staticHandler, request, loadContext, handleError, criticalCss) {
      let context;
      try {
        context = await staticHandler.query(request, {
          requestContext: loadContext
        });
      } catch (error) {
        handleError(error);
        return new Response(null, { status: 500 });
      }
      if (isResponse(context)) {
        return context;
      }
      let headers = getDocumentHeaders(build, context);
      if (context.statusCode === 304) {
        return new Response(null, { status: 304, headers });
      }
      if (context.errors) {
        Object.values(context.errors).forEach((err) => {
          if (!isRouteErrorResponse2(err) || err.error) {
            handleError(err);
          }
        });
        context.errors = sanitizeErrors(context.errors, serverMode);
      }
      let state = {
        loaderData: context.loaderData,
        actionData: context.actionData,
        errors: serializeErrors2(context.errors, serverMode)
      };
      let entryContext = {
        manifest: build.assets,
        routeModules: createEntryRouteModules(build.routes),
        staticHandlerContext: context,
        criticalCss,
        serverHandoffString: createServerHandoffString({
          basename: build.basename,
          criticalCss,
          future: build.future,
          isSpaMode: build.isSpaMode
        }),
        serverHandoffStream: encodeViaTurboStream(
          state,
          request.signal,
          build.entry.module.streamTimeout,
          serverMode
        ),
        renderMeta: {},
        future: build.future,
        isSpaMode: build.isSpaMode,
        serializeError: (err) => serializeError(err, serverMode)
      };
      let handleDocumentRequestFunction = build.entry.module.default;
      try {
        return await handleDocumentRequestFunction(
          request,
          context.statusCode,
          headers,
          entryContext,
          loadContext
        );
      } catch (error) {
        handleError(error);
        let errorForSecondRender = error;
        if (isResponse(error)) {
          try {
            let data2 = await unwrapResponse(error);
            errorForSecondRender = new ErrorResponseImpl(
              error.status,
              error.statusText,
              data2
            );
          } catch (e) {
          }
        }
        context = getStaticContextFromError(
          staticHandler.dataRoutes,
          context,
          errorForSecondRender
        );
        if (context.errors) {
          context.errors = sanitizeErrors(context.errors, serverMode);
        }
        let state2 = {
          loaderData: context.loaderData,
          actionData: context.actionData,
          errors: serializeErrors2(context.errors, serverMode)
        };
        entryContext = {
          ...entryContext,
          staticHandlerContext: context,
          serverHandoffString: createServerHandoffString({
            basename: build.basename,
            future: build.future,
            isSpaMode: build.isSpaMode
          }),
          serverHandoffStream: encodeViaTurboStream(
            state2,
            request.signal,
            build.entry.module.streamTimeout,
            serverMode
          ),
          renderMeta: {}
        };
        try {
          return await handleDocumentRequestFunction(
            request,
            context.statusCode,
            headers,
            entryContext,
            loadContext
          );
        } catch (error2) {
          handleError(error2);
          return returnLastResortErrorResponse(error2, serverMode);
        }
      }
    }
    async function handleResourceRequest(serverMode, staticHandler, routeId, request, loadContext, handleError) {
      try {
        let response = await staticHandler.queryRoute(request, {
          routeId,
          requestContext: loadContext
        });
        invariant3(
          isResponse(response),
          "Expected a Response to be returned from resource route handler"
        );
        return response;
      } catch (error) {
        if (isResponse(error)) {
          error.headers.set("X-Remix-Catch", "yes");
          return error;
        }
        if (isRouteErrorResponse2(error)) {
          if (error) {
            handleError(error);
          }
          return errorResponseToJson(error, serverMode);
        }
        handleError(error);
        return returnLastResortErrorResponse(error, serverMode);
      }
    }
    function errorResponseToJson(errorResponse, serverMode) {
      return Response.json(
        serializeError(
          // @ts-expect-error This is "private" from users but intended for internal use
          errorResponse.error || new Error("Unexpected Server Error"),
          serverMode
        ),
        {
          status: errorResponse.status,
          statusText: errorResponse.statusText,
          headers: {
            "X-Remix-Error": "yes"
          }
        }
      );
    }
    function returnLastResortErrorResponse(error, serverMode) {
      let message = "Unexpected Server Error";
      if (serverMode !== "production") {
        message += `

${String(error)}`;
      }
      return new Response(message, {
        status: 500,
        headers: {
          "Content-Type": "text/plain"
        }
      });
    }
    function unwrapResponse(response) {
      let contentType = response.headers.get("Content-Type");
      return contentType && /\bapplication\/json\b/.test(contentType) ? response.body == null ? null : response.json() : response.text();
    }
    function flash(name) {
      return `__flash_${name}__`;
    }
    var createSession = (initialData = {}, id = "") => {
      let map = new Map(Object.entries(initialData));
      return {
        get id() {
          return id;
        },
        get data() {
          return Object.fromEntries(map);
        },
        has(name) {
          return map.has(name) || map.has(flash(name));
        },
        get(name) {
          if (map.has(name)) return map.get(name);
          let flashName = flash(name);
          if (map.has(flashName)) {
            let value = map.get(flashName);
            map.delete(flashName);
            return value;
          }
          return void 0;
        },
        set(name, value) {
          map.set(name, value);
        },
        flash(name, value) {
          map.set(flash(name), value);
        },
        unset(name) {
          map.delete(name);
        }
      };
    };
    var isSession = (object) => {
      return object != null && typeof object.id === "string" && typeof object.data !== "undefined" && typeof object.has === "function" && typeof object.get === "function" && typeof object.set === "function" && typeof object.flash === "function" && typeof object.unset === "function";
    };
    function createSessionStorage({
      cookie: cookieArg,
      createData,
      readData,
      updateData,
      deleteData
    }) {
      let cookie = isCookie(cookieArg) ? cookieArg : createCookie(cookieArg?.name || "__session", cookieArg);
      warnOnceAboutSigningSessionCookie(cookie);
      return {
        async getSession(cookieHeader, options) {
          let id = cookieHeader && await cookie.parse(cookieHeader, options);
          let data2 = id && await readData(id);
          return createSession(data2 || {}, id || "");
        },
        async commitSession(session, options) {
          let { id, data: data2 } = session;
          let expires = options?.maxAge != null ? new Date(Date.now() + options.maxAge * 1e3) : options?.expires != null ? options.expires : cookie.expires;
          if (id) {
            await updateData(id, data2, expires);
          } else {
            id = await createData(data2, expires);
          }
          return cookie.serialize(id, options);
        },
        async destroySession(session, options) {
          await deleteData(session.id);
          return cookie.serialize("", {
            ...options,
            maxAge: void 0,
            expires: /* @__PURE__ */ new Date(0)
          });
        }
      };
    }
    function warnOnceAboutSigningSessionCookie(cookie) {
      warnOnce(
        cookie.isSigned,
        `The "${cookie.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://remix.run/utils/cookies#signing-cookies for more information.`
      );
    }
    function createCookieSessionStorage({ cookie: cookieArg } = {}) {
      let cookie = isCookie(cookieArg) ? cookieArg : createCookie(cookieArg?.name || "__session", cookieArg);
      warnOnceAboutSigningSessionCookie(cookie);
      return {
        async getSession(cookieHeader, options) {
          return createSession(
            cookieHeader && await cookie.parse(cookieHeader, options) || {}
          );
        },
        async commitSession(session, options) {
          let serializedCookie = await cookie.serialize(session.data, options);
          if (serializedCookie.length > 4096) {
            throw new Error(
              "Cookie length will exceed browser maximum. Length: " + serializedCookie.length
            );
          }
          return serializedCookie;
        },
        async destroySession(_session, options) {
          return cookie.serialize("", {
            ...options,
            maxAge: void 0,
            expires: /* @__PURE__ */ new Date(0)
          });
        }
      };
    }
    function createMemorySessionStorage({ cookie } = {}) {
      let map = /* @__PURE__ */ new Map();
      return createSessionStorage({
        cookie,
        async createData(data2, expires) {
          let id = Math.random().toString(36).substring(2, 10);
          map.set(id, { data: data2, expires });
          return id;
        },
        async readData(id) {
          if (map.has(id)) {
            let { data: data2, expires } = map.get(id);
            if (!expires || expires > /* @__PURE__ */ new Date()) {
              return data2;
            }
            if (expires) map.delete(id);
          }
          return null;
        },
        async updateData(id, data2, expires) {
          map.set(id, { data: data2, expires });
        },
        async deleteData(id) {
          map.delete(id);
        }
      });
    }
    function deserializeErrors2(errors) {
      if (!errors) return null;
      let entries = Object.entries(errors);
      let serialized = {};
      for (let [key, val] of entries) {
        if (val && val.__type === "RouteErrorResponse") {
          serialized[key] = new ErrorResponseImpl(
            val.status,
            val.statusText,
            val.data,
            val.internal === true
          );
        } else if (val && val.__type === "Error") {
          if (val.__subType) {
            let ErrorConstructor = window[val.__subType];
            if (typeof ErrorConstructor === "function") {
              try {
                let error = new ErrorConstructor(val.message);
                error.stack = val.stack;
                serialized[key] = error;
              } catch (e) {
              }
            }
          }
          if (serialized[key] == null) {
            let error = new Error(val.message);
            error.stack = val.stack;
            serialized[key] = error;
          }
        } else {
          serialized[key] = val;
        }
      }
      return serialized;
    }
  }
});

// node_modules/.pnpm/react@19.0.0/node_modules/react/cjs/react-jsx-runtime.production.js
var require_react_jsx_runtime_production = __commonJS({
  "node_modules/.pnpm/react@19.0.0/node_modules/react/cjs/react-jsx-runtime.production.js"(exports) {
    "use strict";
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
    var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
    function jsxProd(type, config, maybeKey) {
      var key = null;
      void 0 !== maybeKey && (key = "" + maybeKey);
      void 0 !== config.key && (key = "" + config.key);
      if ("key" in config) {
        maybeKey = {};
        for (var propName in config)
          "key" !== propName && (maybeKey[propName] = config[propName]);
      } else maybeKey = config;
      config = maybeKey.ref;
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        ref: void 0 !== config ? config : null,
        props: maybeKey
      };
    }
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsx = jsxProd;
    exports.jsxs = jsxProd;
  }
});

// node_modules/.pnpm/react@19.0.0/node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/.pnpm/react@19.0.0/node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    "production" !== process.env.NODE_ENV && function() {
      function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE$2 ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
        }
        if ("object" === typeof type)
          switch ("number" === typeof type.tag && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
              return type;
            case REACT_MEMO_TYPE:
              return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x) {
              }
          }
        return null;
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        try {
          testStringCoercion(value);
          var JSCompiler_inline_result = false;
        } catch (e) {
          JSCompiler_inline_result = true;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            JSCompiler_inline_result$jscomp$0
          );
          return testStringCoercion(value);
        }
      }
      function disabledLog() {
      }
      function disableLogs() {
        if (0 === disabledDepth) {
          prevLog = console.log;
          prevInfo = console.info;
          prevWarn = console.warn;
          prevError = console.error;
          prevGroup = console.group;
          prevGroupCollapsed = console.groupCollapsed;
          prevGroupEnd = console.groupEnd;
          var props = {
            configurable: true,
            enumerable: true,
            value: disabledLog,
            writable: true
          };
          Object.defineProperties(console, {
            info: props,
            log: props,
            warn: props,
            error: props,
            group: props,
            groupCollapsed: props,
            groupEnd: props
          });
        }
        disabledDepth++;
      }
      function reenableLogs() {
        disabledDepth--;
        if (0 === disabledDepth) {
          var props = { configurable: true, enumerable: true, writable: true };
          Object.defineProperties(console, {
            log: assign({}, props, { value: prevLog }),
            info: assign({}, props, { value: prevInfo }),
            warn: assign({}, props, { value: prevWarn }),
            error: assign({}, props, { value: prevError }),
            group: assign({}, props, { value: prevGroup }),
            groupCollapsed: assign({}, props, { value: prevGroupCollapsed }),
            groupEnd: assign({}, props, { value: prevGroupEnd })
          });
        }
        0 > disabledDepth && console.error(
          "disabledDepth fell below zero. This is a bug in React. Please file an issue."
        );
      }
      function describeBuiltInComponentFrame(name) {
        if (void 0 === prefix)
          try {
            throw Error();
          } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || "";
            suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
          }
        return "\n" + prefix + name + suffix;
      }
      function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) return "";
        var frame = componentFrameCache.get(fn);
        if (void 0 !== frame) return frame;
        reentry = true;
        frame = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher = null;
        previousDispatcher = ReactSharedInternals.H;
        ReactSharedInternals.H = null;
        disableLogs();
        try {
          var RunInRootFrame = {
            DetermineComponentFrameRoot: function() {
              try {
                if (construct) {
                  var Fake = function() {
                    throw Error();
                  };
                  Object.defineProperty(Fake.prototype, "props", {
                    set: function() {
                      throw Error();
                    }
                  });
                  if ("object" === typeof Reflect && Reflect.construct) {
                    try {
                      Reflect.construct(Fake, []);
                    } catch (x) {
                      var control = x;
                    }
                    Reflect.construct(fn, [], Fake);
                  } else {
                    try {
                      Fake.call();
                    } catch (x$0) {
                      control = x$0;
                    }
                    fn.call(Fake.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (x$1) {
                    control = x$1;
                  }
                  (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {
                  });
                }
              } catch (sample) {
                if (sample && control && "string" === typeof sample.stack)
                  return [sample.stack, control.stack];
              }
              return [null, null];
            }
          };
          RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
          var namePropDescriptor = Object.getOwnPropertyDescriptor(
            RunInRootFrame.DetermineComponentFrameRoot,
            "name"
          );
          namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(
            RunInRootFrame.DetermineComponentFrameRoot,
            "name",
            { value: "DetermineComponentFrameRoot" }
          );
          var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
          if (sampleStack && controlStack) {
            var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
            for (_RunInRootFrame$Deter = namePropDescriptor = 0; namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes(
              "DetermineComponentFrameRoot"
            ); )
              namePropDescriptor++;
            for (; _RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes(
              "DetermineComponentFrameRoot"
            ); )
              _RunInRootFrame$Deter++;
            if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length)
              for (namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]; )
                _RunInRootFrame$Deter--;
            for (; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)
              if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
                  do
                    if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                      var _frame = "\n" + sampleLines[namePropDescriptor].replace(
                        " at new ",
                        " at "
                      );
                      fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                      "function" === typeof fn && componentFrameCache.set(fn, _frame);
                      return _frame;
                    }
                  while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
                }
                break;
              }
          }
        } finally {
          reentry = false, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;
        }
        sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
        "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
        return sampleLines;
      }
      function describeUnknownElementTypeFrameInDEV(type) {
        if (null == type) return "";
        if ("function" === typeof type) {
          var prototype = type.prototype;
          return describeNativeComponentFrame(
            type,
            !(!prototype || !prototype.isReactComponent)
          );
        }
        if ("string" === typeof type) return describeBuiltInComponentFrame(type);
        switch (type) {
          case REACT_SUSPENSE_TYPE:
            return describeBuiltInComponentFrame("Suspense");
          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame("SuspenseList");
        }
        if ("object" === typeof type)
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return type = describeNativeComponentFrame(type.render, false), type;
            case REACT_MEMO_TYPE:
              return describeUnknownElementTypeFrameInDEV(type.type);
            case REACT_LAZY_TYPE:
              prototype = type._payload;
              type = type._init;
              try {
                return describeUnknownElementTypeFrameInDEV(type(prototype));
              } catch (x) {
              }
          }
        return "";
      }
      function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
      }
      function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config, "key").get;
          if (getter && getter.isReactWarning) return false;
        }
        return void 0 !== config.key;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
        }
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      function ReactElement(type, key, self, source, owner, props) {
        self = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          props,
          _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
          enumerable: false,
          get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: null
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self) {
        if ("string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE$1 || void 0 !== type.getModuleId)) {
          var children = config.children;
          if (void 0 !== children)
            if (isStaticChildren)
              if (isArrayImpl(children)) {
                for (isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)
                  validateChildKeys(children[isStaticChildren], type);
                Object.freeze && Object.freeze(children);
              } else
                console.error(
                  "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
                );
            else validateChildKeys(children, type);
        } else {
          children = "";
          if (void 0 === type || "object" === typeof type && null !== type && 0 === Object.keys(type).length)
            children += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
          null === type ? isStaticChildren = "null" : isArrayImpl(type) ? isStaticChildren = "array" : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE ? (isStaticChildren = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />", children = " Did you accidentally export a JSX literal instead of a component?") : isStaticChildren = typeof type;
          console.error(
            "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
            isStaticChildren,
            children
          );
        }
        if (hasOwnProperty.call(config, "key")) {
          children = getComponentNameFromType(type);
          var keys = Object.keys(config).filter(function(k) {
            return "key" !== k;
          });
          isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
          didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error(
            'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
            isStaticChildren,
            children,
            keys,
            children
          ), didWarnAboutKeySpread[children + isStaticChildren] = true);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
          maybeKey = {};
          for (var propName in config)
            "key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(
          maybeKey,
          "function" === typeof type ? type.displayName || type.name || "Unknown" : type
        );
        return ReactElement(type, children, self, source, getOwner(), maybeKey);
      }
      function validateChildKeys(node, parentType) {
        if ("object" === typeof node && node && node.$$typeof !== REACT_CLIENT_REFERENCE) {
          if (isArrayImpl(node))
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              isValidElement(child) && validateExplicitKey(child, parentType);
            }
          else if (isValidElement(node))
            node._store && (node._store.validated = 1);
          else if (null === node || "object" !== typeof node ? i = null : (i = MAYBE_ITERATOR_SYMBOL && node[MAYBE_ITERATOR_SYMBOL] || node["@@iterator"], i = "function" === typeof i ? i : null), "function" === typeof i && i !== node.entries && (i = i.call(node), i !== node))
            for (; !(node = i.next()).done; )
              isValidElement(node.value) && validateExplicitKey(node.value, parentType);
        }
      }
      function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function validateExplicitKey(element, parentType) {
        if (element._store && !element._store.validated && null == element.key && (element._store.validated = 1, parentType = getCurrentComponentErrorInfo(parentType), !ownerHasKeyUseWarning[parentType])) {
          ownerHasKeyUseWarning[parentType] = true;
          var childOwner = "";
          element && null != element._owner && element._owner !== getOwner() && (childOwner = null, "number" === typeof element._owner.tag ? childOwner = getComponentNameFromType(element._owner.type) : "string" === typeof element._owner.name && (childOwner = element._owner.name), childOwner = " It was passed a child from " + childOwner + ".");
          var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
          ReactSharedInternals.getCurrentStack = function() {
            var stack = describeUnknownElementTypeFrameInDEV(element.type);
            prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
            return stack;
          };
          console.error(
            'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
            parentType,
            childOwner
          );
          ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
        }
      }
      function getCurrentComponentErrorInfo(parentType) {
        var info = "", owner = getOwner();
        owner && (owner = getComponentNameFromType(owner.type)) && (info = "\n\nCheck the render method of `" + owner + "`.");
        info || (parentType = getComponentNameFromType(parentType)) && (info = "\n\nCheck the top-level render call using <" + parentType + ">.");
        return info;
      }
      var React = require_react(), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
      Symbol.for("react.provider");
      var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, assign = Object.assign, REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"), isArrayImpl = Array.isArray, disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
      disabledLog.__reactDisabledLog = true;
      var prefix, suffix, reentry = false;
      var componentFrameCache = new ("function" === typeof WeakMap ? WeakMap : Map)();
      var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), specialPropKeyWarningShown;
      var didWarnAboutElementRef = {};
      var didWarnAboutKeySpread = {}, ownerHasKeyUseWarning = {};
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.jsx = function(type, config, maybeKey, source, self) {
        return jsxDEVImpl(type, config, maybeKey, false, source, self);
      };
      exports.jsxs = function(type, config, maybeKey, source, self) {
        return jsxDEVImpl(type, config, maybeKey, true, source, self);
      };
    }();
  }
});

// node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module.exports = require_react_jsx_runtime_production();
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// server/server.ts
import { availableParallelism } from "os";

// node_modules/.pnpm/hono@4.6.13/node_modules/hono/dist/utils/body.js
var parseBody = async (request, options = /* @__PURE__ */ Object.create(null)) => {
  const { all = false, dot = false } = options;
  const headers = request instanceof HonoRequest ? request.raw.headers : request.headers;
  const contentType = headers.get("Content-Type");
  if (contentType?.startsWith("multipart/form-data") || contentType?.startsWith("application/x-www-form-urlencoded")) {
    return parseFormData(request, { all, dot });
  }
  return {};
};
async function parseFormData(request, options) {
  const formData = await request.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
function convertFormDataToBodyData(formData, options) {
  const form = /* @__PURE__ */ Object.create(null);
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  if (options.dot) {
    Object.entries(form).forEach(([key, value]) => {
      const shouldParseDotValues = key.includes(".");
      if (shouldParseDotValues) {
        handleParsingNestedValues(form, key, value);
        delete form[key];
      }
    });
  }
  return form;
}
var handleParsingAllValues = (form, key, value) => {
  if (form[key] !== void 0) {
    if (Array.isArray(form[key])) {
      ;
      form[key].push(value);
    } else {
      form[key] = [form[key], value];
    }
  } else {
    form[key] = value;
  }
};
var handleParsingNestedValues = (form, key, value) => {
  let nestedForm = form;
  const keys = key.split(".");
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) {
      nestedForm[key2] = value;
    } else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        nestedForm[key2] = /* @__PURE__ */ Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
};

// node_modules/.pnpm/hono@4.6.13/node_modules/hono/dist/utils/url.js
var splitPath = (path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
};
var splitRoutingPath = (routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
};
var extractGroupsFromPath = (path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match, index) => {
    const mark = `@${index}`;
    groups.push([mark, match]);
    return mark;
  });
  return { groups, path };
};
var replaceGroupMarks = (paths, groups) => {
  for (let i = groups.length - 1; i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1; j >= 0; j--) {
      if (paths[j].includes(mark)) {
        paths[j] = paths[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
};
var patternCache = {};
var getPattern = (label) => {
  if (label === "*") {
    return "*";
  }
  const match = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match) {
    if (!patternCache[label]) {
      if (match[2]) {
        patternCache[label] = [label, match[1], new RegExp("^" + match[2] + "$")];
      } else {
        patternCache[label] = [label, match[1], true];
      }
    }
    return patternCache[label];
  }
  return null;
};
var tryDecode = (str, decoder) => {
  try {
    return decoder(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match) => {
      try {
        return decoder(match);
      } catch {
        return match;
      }
    });
  }
};
var tryDecodeURI = (str) => tryDecode(str, decodeURI);
var getPath = (request) => {
  const url = request.url;
  const start = url.indexOf("/", 8);
  let i = start;
  for (; i < url.length; i++) {
    const charCode = url.charCodeAt(i);
    if (charCode === 37) {
      const queryIndex = url.indexOf("?", i);
      const path = url.slice(start, queryIndex === -1 ? void 0 : queryIndex);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63) {
      break;
    }
  }
  return url.slice(start, i);
};
var getPathNoStrict = (request) => {
  const result = getPath(request);
  return result.length > 1 && result.at(-1) === "/" ? result.slice(0, -1) : result;
};
var mergePath = (...paths) => {
  let p = "";
  let endsWithSlash = false;
  for (let path of paths) {
    if (p.at(-1) === "/") {
      p = p.slice(0, -1);
      endsWithSlash = true;
    }
    if (path[0] !== "/") {
      path = `/${path}`;
    }
    if (path === "/" && endsWithSlash) {
      p = `${p}/`;
    } else if (path !== "/") {
      p = `${p}${path}`;
    }
    if (path === "/" && p === "") {
      p = "/";
    }
  }
  return p;
};
var checkOptionalParameter = (path) => {
  if (!path.match(/\:.+\?$/)) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v, i, a) => a.indexOf(v) === i);
};
var _decodeURI = (value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return value.indexOf("%") !== -1 ? decodeURIComponent_(value) : value;
};
var _getQueryParam = (url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf(`?${key}`, 8);
    if (keyIndex2 === -1) {
      keyIndex2 = url.indexOf(`&${key}`, 8);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return void 0;
    }
  }
  const results = {};
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) {
        results[name] = [];
      }
      ;
      results[name].push(value);
    } else {
      results[name] ??= value;
    }
  }
  return key ? results[key] : results;
};
var getQueryParam = _getQueryParam;
var getQueryParams = (url, key) => {
  return _getQueryParam(url, key, true);
};
var decodeURIComponent_ = decodeURIComponent;

// node_modules/.pnpm/hono@4.6.13/node_modules/hono/dist/request.js
var tryDecodeURIComponent = (str) => tryDecode(str, decodeURIComponent_);
var HonoRequest = class {
  raw;
  #validatedData;
  #matchResult;
  routeIndex = 0;
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path;
    this.#matchResult = matchResult;
    this.#validatedData = {};
  }
  param(key) {
    return key ? this.#getDecodedParam(key) : this.#getAllDecodedParams();
  }
  #getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex][1][key];
    const param = this.#getParamValue(paramKey);
    return param ? /\%/.test(param) ? tryDecodeURIComponent(param) : param : void 0;
  }
  #getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.#getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value && typeof value === "string") {
        decoded[key] = /\%/.test(value) ? tryDecodeURIComponent(value) : value;
      }
    }
    return decoded;
  }
  #getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name.toLowerCase()) ?? void 0;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    return this.bodyCache.parsedBody ??= await parseBody(this, options);
  }
  #cachedBody = (key) => {
    const { bodyCache, raw: raw2 } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) {
      return cachedBody;
    }
    const anyCachedKey = Object.keys(bodyCache)[0];
    if (anyCachedKey) {
      return bodyCache[anyCachedKey].then((body) => {
        if (anyCachedKey === "json") {
          body = JSON.stringify(body);
        }
        return new Response(body)[key]();
      });
    }
    return bodyCache[key] = raw2[key]();
  };
  json() {
    return this.#cachedBody("json");
  }
  text() {
    return this.#cachedBody("text");
  }
  arrayBuffer() {
    return this.#cachedBody("arrayBuffer");
  }
  blob() {
    return this.#cachedBody("blob");
  }
  formData() {
    return this.#cachedBody("formData");
  }
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
};

// node_modules/.pnpm/hono@4.6.13/node_modules/hono/dist/utils/html.js
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw = (value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
};
var resolveCallback = async (str, phase, preserveCallbacks, context, buffer) => {
  if (typeof str === "object" && !(str instanceof String)) {
    if (!(str instanceof Promise)) {
      str = str.toString();
    }
    if (str instanceof Promise) {
      str = await str;
    }
  }
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context }))).then(
    (res) => Promise.all(
      res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context, buffer))
    ).then(() => buffer[0])
  );
  if (preserveCallbacks) {
    return raw(await resStr, callbacks);
  } else {
    return resStr;
  }
};

// node_modules/.pnpm/hono@4.6.13/node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setHeaders = (headers, map = {}) => {
  for (const key of Object.keys(map)) {
    headers.set(key, map[key]);
  }
  return headers;
};
var Context = class {
  #rawRequest;
  #req;
  env = {};
  #var;
  finalized = false;
  error;
  #status = 200;
  #executionCtx;
  #headers;
  #preparedHeaders;
  #res;
  #isFresh = true;
  #layout;
  #renderer;
  #notFoundHandler;
  #matchResult;
  #path;
  constructor(req, options) {
    this.#rawRequest = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      this.#notFoundHandler = options.notFoundHandler;
      this.#path = options.path;
      this.#matchResult = options.matchResult;
    }
  }
  get req() {
    this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult);
    return this.#req;
  }
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  get res() {
    this.#isFresh = false;
    return this.#res ||= new Response("404 Not Found", { status: 404 });
  }
  set res(_res) {
    this.#isFresh = false;
    if (this.#res && _res) {
      try {
        for (const [k, v] of this.#res.headers.entries()) {
          if (k === "content-type") {
            continue;
          }
          if (k === "set-cookie") {
            const cookies = this.#res.headers.getSetCookie();
            _res.headers.delete("set-cookie");
            for (const cookie of cookies) {
              _res.headers.append("set-cookie", cookie);
            }
          } else {
            _res.headers.set(k, v);
          }
        }
      } catch (e) {
        if (e instanceof TypeError && e.message.includes("immutable")) {
          this.res = new Response(_res.body, {
            headers: _res.headers,
            status: _res.status
          });
          return;
        } else {
          throw e;
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  render = (...args) => {
    this.#renderer ??= (content) => this.html(content);
    return this.#renderer(...args);
  };
  setLayout = (layout) => this.#layout = layout;
  getLayout = () => this.#layout;
  setRenderer = (renderer) => {
    this.#renderer = renderer;
  };
  header = (name, value, options) => {
    if (value === void 0) {
      if (this.#headers) {
        this.#headers.delete(name);
      } else if (this.#preparedHeaders) {
        delete this.#preparedHeaders[name.toLocaleLowerCase()];
      }
      if (this.finalized) {
        this.res.headers.delete(name);
      }
      return;
    }
    if (options?.append) {
      if (!this.#headers) {
        this.#isFresh = false;
        this.#headers = new Headers(this.#preparedHeaders);
        this.#preparedHeaders = {};
      }
      this.#headers.append(name, value);
    } else {
      if (this.#headers) {
        this.#headers.set(name, value);
      } else {
        this.#preparedHeaders ??= {};
        this.#preparedHeaders[name.toLowerCase()] = value;
      }
    }
    if (this.finalized) {
      if (options?.append) {
        this.res.headers.append(name, value);
      } else {
        this.res.headers.set(name, value);
      }
    }
  };
  status = (status) => {
    this.#isFresh = false;
    this.#status = status;
  };
  set = (key, value) => {
    this.#var ??= /* @__PURE__ */ new Map();
    this.#var.set(key, value);
  };
  get = (key) => {
    return this.#var ? this.#var.get(key) : void 0;
  };
  get var() {
    if (!this.#var) {
      return {};
    }
    return Object.fromEntries(this.#var);
  }
  #newResponse(data, arg, headers) {
    if (this.#isFresh && !headers && !arg && this.#status === 200) {
      return new Response(data, {
        headers: this.#preparedHeaders
      });
    }
    if (arg && typeof arg !== "number") {
      const header = new Headers(arg.headers);
      if (this.#headers) {
        this.#headers.forEach((v, k) => {
          if (k === "set-cookie") {
            header.append(k, v);
          } else {
            header.set(k, v);
          }
        });
      }
      const headers2 = setHeaders(header, this.#preparedHeaders);
      return new Response(data, {
        headers: headers2,
        status: arg.status ?? this.#status
      });
    }
    const status = typeof arg === "number" ? arg : this.#status;
    this.#preparedHeaders ??= {};
    this.#headers ??= new Headers();
    setHeaders(this.#headers, this.#preparedHeaders);
    if (this.#res) {
      this.#res.headers.forEach((v, k) => {
        if (k === "set-cookie") {
          this.#headers?.append(k, v);
        } else {
          this.#headers?.set(k, v);
        }
      });
      setHeaders(this.#headers, this.#preparedHeaders);
    }
    headers ??= {};
    for (const [k, v] of Object.entries(headers)) {
      if (typeof v === "string") {
        this.#headers.set(k, v);
      } else {
        this.#headers.delete(k);
        for (const v2 of v) {
          this.#headers.append(k, v2);
        }
      }
    }
    return new Response(data, {
      status,
      headers: this.#headers
    });
  }
  newResponse = (...args) => this.#newResponse(...args);
  body = (data, arg, headers) => {
    return typeof arg === "number" ? this.#newResponse(data, arg, headers) : this.#newResponse(data, arg);
  };
  text = (text, arg, headers) => {
    if (!this.#preparedHeaders) {
      if (this.#isFresh && !headers && !arg) {
        return new Response(text);
      }
      this.#preparedHeaders = {};
    }
    this.#preparedHeaders["content-type"] = TEXT_PLAIN;
    return typeof arg === "number" ? this.#newResponse(text, arg, headers) : this.#newResponse(text, arg);
  };
  json = (object, arg, headers) => {
    const body = JSON.stringify(object);
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "application/json; charset=UTF-8";
    return typeof arg === "number" ? this.#newResponse(body, arg, headers) : this.#newResponse(body, arg);
  };
  html = (html, arg, headers) => {
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "text/html; charset=UTF-8";
    if (typeof html === "object") {
      return resolveCallback(html, HtmlEscapedCallbackPhase.Stringify, false, {}).then((html2) => {
        return typeof arg === "number" ? this.#newResponse(html2, arg, headers) : this.#newResponse(html2, arg);
      });
    }
    return typeof arg === "number" ? this.#newResponse(html, arg, headers) : this.#newResponse(html, arg);
  };
  redirect = (location, status) => {
    this.#headers ??= new Headers();
    this.#headers.set("Location", String(location));
    return this.newResponse(null, status ?? 302);
  };
  notFound = () => {
    this.#notFoundHandler ??= () => new Response();
    return this.#notFoundHandler(this);
  };
};

// node_modules/.pnpm/hono@4.6.13/node_modules/hono/dist/compose.js
var compose = (middleware, onError, onNotFound) => {
  return (context, next) => {
    let index = -1;
    const isContext = context instanceof Context;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler2;
      if (middleware[i]) {
        handler2 = middleware[i][0][0];
        if (isContext) {
          context.req.routeIndex = i;
        }
      } else {
        handler2 = i === middleware.length && next || void 0;
      }
      if (!handler2) {
        if (isContext && context.finalized === false && onNotFound) {
          res = await onNotFound(context);
        }
      } else {
        try {
          res = await handler2(context, () => {
            return dispatch(i + 1);
          });
        } catch (err) {
          if (err instanceof Error && isContext && onError) {
            context.error = err;
            res = await onError(err, context);
            isError = true;
          } else {
            throw err;
          }
        }
      }
      if (res && (context.finalized === false || isError)) {
        context.res = res;
      }
      return context;
    }
  };
};

// node_modules/.pnpm/hono@4.6.13/node_modules/hono/dist/router.js
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = class extends Error {
};

// node_modules/.pnpm/hono@4.6.13/node_modules/hono/dist/hono-base.js
var COMPOSED_HANDLER = Symbol("composedHandler");
var notFoundHandler = (c) => {
  return c.text("404 Not Found", 404);
};
var errorHandler = (err, c) => {
  if ("getResponse" in err) {
    return err.getResponse();
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
};
var Hono = class {
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  router;
  getPath;
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.#addRoute(method, this.#path, args1);
        }
        args.forEach((handler2) => {
          this.#addRoute(method, this.#path, handler2);
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      for (const p of [path].flat()) {
        this.#path = p;
        for (const m of [method].flat()) {
          handlers.map((handler2) => {
            this.#addRoute(m.toUpperCase(), this.#path, handler2);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler2) => {
        this.#addRoute(METHOD_NAME_ALL, this.#path, handler2);
      });
      return this;
    };
    const strict = options.strict ?? true;
    delete options.strict;
    Object.assign(this, options);
    this.getPath = strict ? options.getPath ?? getPath : getPathNoStrict;
  }
  #clone() {
    const clone = new Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.routes = this.routes;
    return clone;
  }
  #notFoundHandler = notFoundHandler;
  errorHandler = errorHandler;
  route(path, app) {
    const subApp = this.basePath(path);
    app.routes.map((r) => {
      let handler2;
      if (app.errorHandler === errorHandler) {
        handler2 = r.handler;
      } else {
        handler2 = async (c, next) => (await compose([], app.errorHandler)(c, () => r.handler(c, next))).res;
        handler2[COMPOSED_HANDLER] = r.handler;
      }
      subApp.#addRoute(r.method, r.path, handler2);
    });
    return this;
  }
  basePath(path) {
    const subApp = this.#clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  onError = (handler2) => {
    this.errorHandler = handler2;
    return this;
  };
  notFound = (handler2) => {
    this.#notFoundHandler = handler2;
    return this;
  };
  mount(path, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") {
        optionHandler = options;
      } else {
        optionHandler = options.optionHandler;
        replaceRequest = options.replaceRequest;
      }
    }
    const getOptions = optionHandler ? (c) => {
      const options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext = void 0;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      return [c.env, executionContext];
    };
    replaceRequest ||= (() => {
      const mergedPath = mergePath(this._basePath, path);
      const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        const url = new URL(request.url);
        url.pathname = url.pathname.slice(pathPrefixLength) || "/";
        return new Request(url, request);
      };
    })();
    const handler2 = async (c, next) => {
      const res = await applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
      if (res) {
        return res;
      }
      await next();
    };
    this.#addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler2);
    return this;
  }
  #addRoute(method, path, handler2) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = { path, method, handler: handler2 };
    this.router.add(method, path, [handler2, r]);
    this.routes.push(r);
  }
  #handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  #dispatch(request, executionCtx, env, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.#dispatch(request, executionCtx, env, "GET")))();
    }
    const path = this.getPath(request, { env });
    const matchResult = this.router.match(method, path);
    const c = new Context(request, {
      path,
      matchResult,
      env,
      executionCtx,
      notFoundHandler: this.#notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.#notFoundHandler(c);
        });
      } catch (err) {
        return this.#handleError(err, c);
      }
      return res instanceof Promise ? res.then(
        (resolved) => resolved || (c.finalized ? c.res : this.#notFoundHandler(c))
      ).catch((err) => this.#handleError(err, c)) : res ?? this.#notFoundHandler(c);
    }
    const composed = compose(matchResult[0], this.errorHandler, this.#notFoundHandler);
    return (async () => {
      try {
        const context = await composed(c);
        if (!context.finalized) {
          throw new Error(
            "Context is not finalized. Did you forget to return a Response object or `await next()`?"
          );
        }
        return context.res;
      } catch (err) {
        return this.#handleError(err, c);
      }
    })();
  }
  fetch = (request, ...rest) => {
    return this.#dispatch(request, rest[1], rest[0], request.method);
  };
  request = (input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) {
      return this.fetch(requestInit ? new Request(input, requestInit) : input, Env, executionCtx);
    }
    input = input.toString();
    return this.fetch(
      new Request(
        /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`,
        requestInit
      ),
      Env,
      executionCtx
    );
  };
  fire = () => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.#dispatch(event.request, event, void 0, event.request.method));
    });
  };
};

// node_modules/.pnpm/hono@4.6.13/node_modules/hono/dist/router/reg-exp-router/node.js
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = Symbol();
var regExpMetaChars = new Set(".\\+*[^]$()");
function compareKey(a, b) {
  if (a.length === 1) {
    return b.length === 1 ? a < b ? -1 : 1 : -1;
  }
  if (b.length === 1) {
    return 1;
  }
  if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b === ONLY_WILDCARD_REG_EXP_STR || b === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
}
var Node2 = class {
  #index;
  #varIndex;
  #children = /* @__PURE__ */ Object.create(null);
  insert(tokens, index, paramMap, context, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.#index !== void 0) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.#index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern2 = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern2) {
      const name = pattern2[1];
      let regexpStr = pattern2[2] || LABEL_REG_EXP_STR;
      if (name && pattern2[2]) {
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.#children[regexpStr];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k) => k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[regexpStr] = new Node2();
        if (name !== "") {
          node.#varIndex = context.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, node.#varIndex]);
      }
    } else {
      node = this.#children[token];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k) => k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[token] = new Node2();
      }
    }
    node.insert(restTokens, index, paramMap, context, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.#children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.#children[k];
      return (typeof c.#varIndex === "number" ? `(${k})@${c.#varIndex}` : regExpMetaChars.has(k) ? `\\${k}` : k) + c.buildRegExpStr();
    });
    if (typeof this.#index === "number") {
      strList.unshift(`#${this.#index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
};

// node_modules/.pnpm/hono@4.6.13/node_modules/hono/dist/router/reg-exp-router/trie.js
var Trie = class {
  #context = { varIndex: 0 };
  #root = new Node2();
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0; ; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1; j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.#root.insert(tokens, index, paramAssoc, this.#context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.#root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (handlerIndex !== void 0) {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (paramIndex !== void 0) {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
};

// node_modules/.pnpm/hono@4.6.13/node_modules/hono/dist/router/reg-exp-router/router.js
var emptyParam = [];
var nullMatcher = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
function buildWildcardRegExp(path) {
  return wildcardRegExpCache[path] ??= new RegExp(
    path === "*" ? "" : `^${path.replace(
      /\/\*$|([.\\+*[^\]$()])/g,
      (_, metaChar) => metaChar ? `\\${metaChar}` : "(?:|/.*)"
    )}$`
  );
}
function clearWildcardRegExpCache() {
  wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
}
function buildMatcherFromPreprocessedRoutes(routes2) {
  const trie = new Trie();
  const handlerData = [];
  if (routes2.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes2.map(
    (route) => [!/\*|\/:/.test(route[0]), ...route]
  ).sort(
    ([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length
  );
  const staticMap = /* @__PURE__ */ Object.create(null);
  for (let i = 0, j = -1, len = routesWithStaticPathFlag.length; i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h]) => [h, /* @__PURE__ */ Object.create(null)]), emptyParam];
    } else {
      j++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie.insert(path, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = handlers.map(([h, paramCount]) => {
      const paramIndexMap = /* @__PURE__ */ Object.create(null);
      paramCount -= 1;
      for (; paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i = 0, len = handlerData.length; i < len; i++) {
    for (let j = 0, len2 = handlerData[i].length; j < len2; j++) {
      const map = handlerData[i][j]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k = 0, len3 = keys.length; k < len3; k++) {
        map[keys[k]] = paramReplacementMap[map[keys[k]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
}
function findMiddleware(middleware, path) {
  if (!middleware) {
    return void 0;
  }
  for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) {
    if (buildWildcardRegExp(k).test(path)) {
      return [...middleware[k]];
    }
  }
  return void 0;
}
var RegExpRouter = class {
  name = "RegExpRouter";
  #middleware;
  #routes;
  constructor() {
    this.#middleware = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
    this.#routes = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
  }
  add(method, path, handler2) {
    const middleware = this.#middleware;
    const routes2 = this.#routes;
    if (!middleware || !routes2) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (!middleware[method]) {
      ;
      [middleware, routes2].forEach((handlerMap) => {
        handlerMap[method] = /* @__PURE__ */ Object.create(null);
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p) => {
          handlerMap[method][p] = [...handlerMap[METHOD_NAME_ALL][p]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m) => {
          middleware[m][path] ||= findMiddleware(middleware[m], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
        });
      } else {
        middleware[method][path] ||= findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
      }
      Object.keys(middleware).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(middleware[m]).forEach((p) => {
            re.test(p) && middleware[m][p].push([handler2, paramCount]);
          });
        }
      });
      Object.keys(routes2).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(routes2[m]).forEach(
            (p) => re.test(p) && routes2[m][p].push([handler2, paramCount])
          );
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i = 0, len = paths.length; i < len; i++) {
      const path2 = paths[i];
      Object.keys(routes2).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          routes2[m][path2] ||= [
            ...findMiddleware(middleware[m], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ];
          routes2[m][path2].push([handler2, paramCount - len + i + 1]);
        }
      });
    }
  }
  match(method, path) {
    clearWildcardRegExpCache();
    const matchers = this.#buildAllMatchers();
    this.match = (method2, path2) => {
      const matcher = matchers[method2] || matchers[METHOD_NAME_ALL];
      const staticMatch = matcher[2][path2];
      if (staticMatch) {
        return staticMatch;
      }
      const match = path2.match(matcher[0]);
      if (!match) {
        return [[], emptyParam];
      }
      const index = match.indexOf("", 1);
      return [matcher[1][index], match];
    };
    return this.match(method, path);
  }
  #buildAllMatchers() {
    const matchers = /* @__PURE__ */ Object.create(null);
    Object.keys(this.#routes).concat(Object.keys(this.#middleware)).forEach((method) => {
      matchers[method] ||= this.#buildMatcher(method);
    });
    this.#middleware = this.#routes = void 0;
    return matchers;
  }
  #buildMatcher(method) {
    const routes2 = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.#middleware, this.#routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute ||= true;
        routes2.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes2.push(
          ...Object.keys(r[METHOD_NAME_ALL]).map((path) => [path, r[METHOD_NAME_ALL][path]])
        );
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes2);
    }
  }
};

// node_modules/.pnpm/hono@4.6.13/node_modules/hono/dist/router/smart-router/router.js
var SmartRouter = class {
  name = "SmartRouter";
  #routers = [];
  #routes = [];
  constructor(init) {
    this.#routers = init.routers;
  }
  add(method, path, handler2) {
    if (!this.#routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.#routes.push([method, path, handler2]);
  }
  match(method, path) {
    if (!this.#routes) {
      throw new Error("Fatal error");
    }
    const routers = this.#routers;
    const routes2 = this.#routes;
    const len = routers.length;
    let i = 0;
    let res;
    for (; i < len; i++) {
      const router = routers[i];
      try {
        for (let i2 = 0, len2 = routes2.length; i2 < len2; i2++) {
          router.add(...routes2[i2]);
        }
        res = router.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router.match.bind(router);
      this.#routers = [router];
      this.#routes = void 0;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.#routes || this.#routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.#routers[0];
  }
};

// node_modules/.pnpm/hono@4.6.13/node_modules/hono/dist/router/trie-router/node.js
var Node3 = class {
  #methods;
  #children;
  #patterns;
  #order = 0;
  #params = /* @__PURE__ */ Object.create(null);
  constructor(method, handler2, children) {
    this.#children = children || /* @__PURE__ */ Object.create(null);
    this.#methods = [];
    if (method && handler2) {
      const m = /* @__PURE__ */ Object.create(null);
      m[method] = { handler: handler2, possibleKeys: [], score: 0 };
      this.#methods = [m];
    }
    this.#patterns = [];
  }
  insert(method, path, handler2) {
    this.#order = ++this.#order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const p = parts[i];
      if (Object.keys(curNode.#children).includes(p)) {
        curNode = curNode.#children[p];
        const pattern22 = getPattern(p);
        if (pattern22) {
          possibleKeys.push(pattern22[1]);
        }
        continue;
      }
      curNode.#children[p] = new Node3();
      const pattern2 = getPattern(p);
      if (pattern2) {
        curNode.#patterns.push(pattern2);
        possibleKeys.push(pattern2[1]);
      }
      curNode = curNode.#children[p];
    }
    const m = /* @__PURE__ */ Object.create(null);
    const handlerSet = {
      handler: handler2,
      possibleKeys: possibleKeys.filter((v, i, a) => a.indexOf(v) === i),
      score: this.#order
    };
    m[method] = handlerSet;
    curNode.#methods.push(m);
    return curNode;
  }
  #getHandlerSets(node, method, nodeParams, params) {
    const handlerSets = [];
    for (let i = 0, len = node.#methods.length; i < len; i++) {
      const m = node.#methods[i];
      const handlerSet = m[method] || m[METHOD_NAME_ALL];
      const processedSet = {};
      if (handlerSet !== void 0) {
        handlerSet.params = /* @__PURE__ */ Object.create(null);
        for (let i2 = 0, len2 = handlerSet.possibleKeys.length; i2 < len2; i2++) {
          const key = handlerSet.possibleKeys[i2];
          const processed = processedSet[handlerSet.score];
          handlerSet.params[key] = params[key] && !processed ? params[key] : nodeParams[key] ?? params[key];
          processedSet[handlerSet.score] = true;
        }
        handlerSets.push(handlerSet);
      }
    }
    return handlerSets;
  }
  search(method, path) {
    const handlerSets = [];
    this.#params = /* @__PURE__ */ Object.create(null);
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    for (let i = 0, len = parts.length; i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length; j < len2; j++) {
        const node = curNodes[j];
        const nextNode = node.#children[part];
        if (nextNode) {
          nextNode.#params = node.#params;
          if (isLast) {
            if (nextNode.#children["*"]) {
              handlerSets.push(
                ...this.#getHandlerSets(
                  nextNode.#children["*"],
                  method,
                  node.#params,
                  /* @__PURE__ */ Object.create(null)
                )
              );
            }
            handlerSets.push(
              ...this.#getHandlerSets(nextNode, method, node.#params, /* @__PURE__ */ Object.create(null))
            );
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = node.#patterns.length; k < len3; k++) {
          const pattern2 = node.#patterns[k];
          const params = { ...node.#params };
          if (pattern2 === "*") {
            const astNode = node.#children["*"];
            if (astNode) {
              handlerSets.push(
                ...this.#getHandlerSets(astNode, method, node.#params, /* @__PURE__ */ Object.create(null))
              );
              tempNodes.push(astNode);
            }
            continue;
          }
          if (part === "") {
            continue;
          }
          const [key, name, matcher] = pattern2;
          const child = node.#children[key];
          const restPathString = parts.slice(i).join("/");
          if (matcher instanceof RegExp && matcher.test(restPathString)) {
            params[name] = restPathString;
            handlerSets.push(...this.#getHandlerSets(child, method, node.#params, params));
            continue;
          }
          if (matcher === true || matcher.test(part)) {
            params[name] = part;
            if (isLast) {
              handlerSets.push(...this.#getHandlerSets(child, method, params, node.#params));
              if (child.#children["*"]) {
                handlerSets.push(
                  ...this.#getHandlerSets(child.#children["*"], method, params, node.#params)
                );
              }
            } else {
              child.#params = params;
              tempNodes.push(child);
            }
          }
        }
      }
      curNodes = tempNodes;
    }
    if (handlerSets.length > 1) {
      handlerSets.sort((a, b) => {
        return a.score - b.score;
      });
    }
    return [handlerSets.map(({ handler: handler2, params }) => [handler2, params])];
  }
};

// node_modules/.pnpm/hono@4.6.13/node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = class {
  name = "TrieRouter";
  #node;
  constructor() {
    this.#node = new Node3();
  }
  add(method, path, handler2) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (let i = 0, len = results.length; i < len; i++) {
        this.#node.insert(method, results[i], handler2);
      }
      return;
    }
    this.#node.insert(method, path, handler2);
  }
  match(method, path) {
    return this.#node.search(method, path);
  }
};

// node_modules/.pnpm/hono@4.6.13/node_modules/hono/dist/hono.js
var Hono2 = class extends Hono {
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter(), new TrieRouter()]
    });
  }
};

// server/app.ts
import { serveStatic } from "@hono/node-server/serve-static";

// node_modules/.pnpm/hono@4.6.13/node_modules/hono/dist/helper/factory/index.js
var Factory = class {
  initApp;
  constructor(init) {
    this.initApp = init?.initApp;
  }
  createApp = () => {
    const app = new Hono2();
    if (this.initApp) {
      this.initApp(app);
    }
    return app;
  };
  createMiddleware = (middleware) => middleware;
  createHandlers = (...handlers) => {
    return handlers.filter((handler2) => handler2 !== void 0);
  };
};
var createFactory = (init) => new Factory(init);
var createMiddleware = (middleware) => createFactory().createMiddleware(middleware);

// server/handler.ts
var import_react_router = __toESM(require_development(), 1);
function handler({
  mode,
  build,
  getLoadContext
}) {
  return createMiddleware(async (c) => {
    const requestHandler = (0, import_react_router.createRequestHandler)(build, mode);
    const loadContext = getLoadContext?.(c);
    return await requestHandler(
      c.req.raw,
      loadContext instanceof Promise ? await loadContext : loadContext
    );
  });
}

// build/server/index.js
var server_exports = {};
__export(server_exports, {
  assets: () => serverManifest,
  assetsBuildDirectory: () => assetsBuildDirectory,
  basename: () => basename,
  entry: () => entry,
  future: () => future,
  isSpaMode: () => isSpaMode,
  publicPath: () => publicPath,
  routes: () => routes
});
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react_router2 = __toESM(require_development(), 1);
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";

// node_modules/.pnpm/isbot@5.1.17/node_modules/isbot/index.mjs
var fullPattern = " daum[ /]| deusu/| yadirectfetcher|(?:^|[^g])news(?!sapphire)|(?<! (?:channel/|google/))google(?!(app|/google| pixel))|(?<! cu)bots?(?:\\b|_)|(?<!(?:lib))http|(?<![hg]m)score|@[a-z][\\w-]+\\.|\\(\\)|\\.com\\b|\\btime/|^<|^[\\w \\.\\-\\(?:\\):]+(?:/v?\\d+(?:\\.\\d+)?(?:\\.\\d{1,10})*?)?(?:,|$)|^[^ ]{50,}$|^\\d+\\b|^\\w*search\\b|^\\w+/[\\w\\(\\)]*$|^active|^ad muncher|^amaya|^avsdevicesdk/|^biglotron|^bot|^bw/|^clamav[ /]|^client/|^cobweb/|^custom|^ddg[_-]android|^discourse|^dispatch/\\d|^downcast/|^duckduckgo|^facebook|^getright/|^gozilla/|^hobbit|^hotzonu|^hwcdn/|^jeode/|^jetty/|^jigsaw|^microsoft bits|^movabletype|^mozilla/5\\.0\\s[a-z\\.-]+$|^mozilla/\\d\\.\\d \\(compatible;?\\)$|^mozilla/\\d\\.\\d \\w*$|^navermailapp|^netsurf|^offline|^owler|^php|^postman|^python|^rank|^read|^reed|^rest|^rss|^snapchat|^space bison|^svn|^swcd |^taringa|^thumbor/|^track|^valid|^w3c|^webbandit/|^webcopier|^wget|^whatsapp|^wordpress|^xenu link sleuth|^yahoo|^yandex|^zdm/\\d|^zoom marketplace/|^{{.*}}$|adscanner/|analyzer|archive|ask jeeves/teoma|bit\\.ly/|bluecoat drtr|browsex|burpcollaborator|capture|catch|check\\b|checker|chrome-lighthouse|chromeframe|classifier|cloudflare|convertify|crawl|cypress/|dareboost|datanyze|dejaclick|detect|dmbrowser|download|evc-batch/|exaleadcloudview|feed|firephp|functionize|gomezagent|headless|httrack|hubspot marketing grader|hydra|ibisbrowser|images|infrawatch|insight|inspect|iplabel|ips-agent|java(?!;)|jsjcw_scanner|library|linkcheck|mail\\.ru/|manager|measure|neustar wpm|node|nutch|offbyone|optimize|pageburst|pagespeed|parser|perl|phantomjs|pingdom|powermarks|preview|proxy|ptst[ /]\\d|reputation|resolver|retriever|rexx;|rigor|rss\\b|scanner\\.|scrape|server|sogou|sparkler/|speedcurve|spider|splash|statuscake|supercleaner|synapse|synthetic|tools|torrent|trace|transcoder|url|virtuoso|wappalyzer|webglance|webkit2png|whatcms/|zgrab";
var naivePattern = /bot|crawl|http|lighthouse|scan|search|spider/i;
var pattern;
function getPattern2() {
  if (pattern instanceof RegExp) {
    return pattern;
  }
  try {
    pattern = new RegExp(fullPattern, "i");
  } catch (error) {
    pattern = naivePattern;
  }
  return pattern;
}
function isbot(userAgent) {
  return Boolean(userAgent) && getPattern2().test(userAgent);
}

// build/server/index.js
var import_react = __toESM(require_react(), 1);
import { renderToPipeableStream } from "react-dom/server";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react_router2.ServerRouter,
        {
          context: routerContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
var entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: (0, import_react_router2.useParams)(),
      loaderData: (0, import_react_router2.useLoaderData)(),
      actionData: (0, import_react_router2.useActionData)(),
      matches: (0, import_react_router2.useMatches)()
    };
    return (0, import_react.createElement)(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: (0, import_react_router2.useParams)(),
      loaderData: (0, import_react_router2.useLoaderData)(),
      actionData: (0, import_react_router2.useActionData)(),
      error: (0, import_react_router2.useRouteError)()
    };
    return (0, import_react.createElement)(ErrorBoundary3, props);
  };
}
var stylesheet = "/assets/app-Ckulty-W.css";
var links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}, {
  rel: "stylesheet",
  href: stylesheet
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
    lang: "en",
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", {
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_router2.Meta, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_router2.Links, {})]
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
      children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_router2.ScrollRestoration, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_router2.Scripts, {})]
    })]
  });
}
var root = withComponentProps(function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_router2.Outlet, {});
});
var ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if ((0, import_react_router2.isRouteErrorResponse)(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
      children: message
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
      children: details
    }), stack]
  });
});
var route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
var logoDark = "/assets/logo-dark-pX2395Y0.svg";
var logoLight = "/assets/logo-light-CVbx2LBR.svg";
function Welcome() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { className: "flex items-center justify-center pt-16 pb-4", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex-1 flex flex-col items-center gap-16 min-h-0", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", { className: "flex flex-col items-center gap-9", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "w-[500px] max-w-[100vw] p-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "img",
        {
          src: logoLight,
          alt: "React Router",
          className: "block w-full dark:hidden"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "img",
        {
          src: logoDark,
          alt: "React Router",
          className: "hidden w-full dark:block"
        }
      )
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "max-w-[300px] w-full space-y-6 px-4", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", { className: "rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "leading-6 text-gray-700 dark:text-gray-200 text-center", children: "What's next?" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: resources.map(({ href, text, icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "a",
        {
          className: "group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500",
          href,
          target: "_blank",
          rel: "noreferrer",
          children: [
            icon,
            text
          ]
        }
      ) }, href)) })
    ] }) })
  ] }) });
}
var resources = [
  {
    href: "https://reactrouter.com/docs",
    text: "React Router Docs",
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        className: "stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            d: "M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16.9853 11.2645 19.0485 15.889 17.4688 17.4688ZM2.53132 17.4688C0.951566 15.8891 3.01483 11.2645 7.13974 7.13963C11.2647 3.01471 15.8892 0.951453 17.469 2.53121C19.0487 4.11096 16.9854 8.73551 12.8605 12.8604C8.73562 16.9853 4.11107 19.0486 2.53132 17.4688Z",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        )
      }
    )
  },
  {
    href: "https://rmx.as/discord",
    text: "Join Discord",
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "20",
        viewBox: "0 0 24 20",
        fill: "none",
        className: "stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            d: "M15.0686 1.25995L14.5477 1.17423L14.2913 1.63578C14.1754 1.84439 14.0545 2.08275 13.9422 2.31963C12.6461 2.16488 11.3406 2.16505 10.0445 2.32014C9.92822 2.08178 9.80478 1.84975 9.67412 1.62413L9.41449 1.17584L8.90333 1.25995C7.33547 1.51794 5.80717 1.99419 4.37748 2.66939L4.19 2.75793L4.07461 2.93019C1.23864 7.16437 0.46302 11.3053 0.838165 15.3924L0.868838 15.7266L1.13844 15.9264C2.81818 17.1714 4.68053 18.1233 6.68582 18.719L7.18892 18.8684L7.50166 18.4469C7.96179 17.8268 8.36504 17.1824 8.709 16.4944L8.71099 16.4904C10.8645 17.0471 13.128 17.0485 15.2821 16.4947C15.6261 17.1826 16.0293 17.8269 16.4892 18.4469L16.805 18.8725L17.3116 18.717C19.3056 18.105 21.1876 17.1751 22.8559 15.9238L23.1224 15.724L23.1528 15.3923C23.5873 10.6524 22.3579 6.53306 19.8947 2.90714L19.7759 2.73227L19.5833 2.64518C18.1437 1.99439 16.6386 1.51826 15.0686 1.25995ZM16.6074 10.7755L16.6074 10.7756C16.5934 11.6409 16.0212 12.1444 15.4783 12.1444C14.9297 12.1444 14.3493 11.6173 14.3493 10.7877C14.3493 9.94885 14.9378 9.41192 15.4783 9.41192C16.0471 9.41192 16.6209 9.93851 16.6074 10.7755ZM8.49373 12.1444C7.94513 12.1444 7.36471 11.6173 7.36471 10.7877C7.36471 9.94885 7.95323 9.41192 8.49373 9.41192C9.06038 9.41192 9.63892 9.93712 9.6417 10.7815C9.62517 11.6239 9.05462 12.1444 8.49373 12.1444Z",
            strokeWidth: "1.5"
          }
        )
      }
    )
  }
];
function meta({}) {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
var home = withComponentProps(function Home() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Welcome, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
        children: "Hello World"
      })
    })]
  });
});
var route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
var serverManifest = { "entry": { "module": "/assets/entry.client-C1wptIQo.js", "imports": ["/assets/chunk-D52XG6IA-C_PBXKmx.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-BzWzJtAM.js", "imports": ["/assets/chunk-D52XG6IA-C_PBXKmx.js", "/assets/with-props-B1Bv_2nK.js"], "css": [] }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/home-TQI9O4ue.js", "imports": ["/assets/with-props-B1Bv_2nK.js", "/assets/chunk-D52XG6IA-C_PBXKmx.js"], "css": [] } }, "url": "/assets/manifest-54583f29.js", "version": "54583f29" };
var assetsBuildDirectory = "build/client";
var basename = "/";
var future = { "unstable_optimizeDeps": false };
var isSpaMode = false;
var publicPath = "/";
var entry = { module: entryServer };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};

// server/app.ts
var App2 = class extends Hono2 {
  constructor() {
    super();
  }
  async initialize() {
    this.use("*", serveStatic({
      root: "./build/client"
    }));
    let finalBuild = server_exports;
    if (process.env.NODE_ENV === "development") {
      finalBuild = await import("virtual:remix/server-build");
    }
    this.use(
      "*",
      handler({
        build: finalBuild,
        mode: process.env.NODE_ENV
      })
    );
  }
};

// server/server.ts
import { serve } from "@hono/node-server";
import cluster from "cluster";
if (cluster.isPrimary) {
  for (let i = 0; i < availableParallelism(); i++) {
    const worker = cluster.fork();
    worker.on("online", () => {
      console.log(`${i} Worker ${worker.process.pid} started`);
    });
  }
} else {
  const app = new App2();
  app.initialize().then(() => {
    serve({
      port: 3e3,
      fetch: app.fetch
    });
    console.log(`Server started on port 3000`);
  });
}
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-router/dist/development/index.js:
  (**
   * react-router v7.0.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=server.js.map