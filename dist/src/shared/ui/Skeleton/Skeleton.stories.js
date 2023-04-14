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
import { ThemeDecorator } from '../49-50/production-project-200b42dfc5bb601c5ca8beb553e026c377fbb2fb/src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../49-50/production-project-200b42dfc5bb601c5ca8beb553e026c377fbb2fb/src/app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';
export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(Skeleton, __assign({}, args), void 0); };
export var Normal = Template.bind({});
Normal.args = {
    width: '100%',
    height: 200,
};
export var Circle = Template.bind({});
Circle.args = {
    border: '50%',
    width: 100,
    height: 100,
};
export var NormalDark = Template.bind({});
NormalDark.args = {
    width: '100%',
    height: 200,
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];
export var CircleDark = Template.bind({});
CircleDark.args = {
    border: '50%',
    width: 100,
    height: 100,
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];