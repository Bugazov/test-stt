var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useMemo, useRef, useState, } from 'react';
var AnimationContext = createContext({});
var getAsyncAnimationModules = function () { return Promise.all([
    import('@react-spring/web'),
    import('@use-gesture/react'),
]); };
export var useAnimationLibs = function () { return useContext(AnimationContext); };
export var AnimationProvider = function (_a) {
    var children = _a.children;
    var SpringRef = useRef();
    var GestureRef = useRef();
    var _b = useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    useEffect(function () {
        getAsyncAnimationModules().then(function (_a) {
            var Spring = _a[0], Gesture = _a[1];
            SpringRef.current = Spring;
            GestureRef.current = Gesture;
            setIsLoaded(true);
        });
    }, []);
    var defaultValue = useMemo(function () { return ({
        Gesture: GestureRef.current,
        Spring: SpringRef.current,
        isLoaded: isLoaded,
    }); }, [isLoaded]);
    return (_jsx(AnimationContext.Provider, __assign({ value: defaultValue }, { children: children }), void 0));
};
