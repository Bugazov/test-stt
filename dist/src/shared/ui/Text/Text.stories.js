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
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';
export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(Text, __assign({}, args), void 0); };
export var Primary = Template.bind({});
Primary.args = {
    title: 'title Lorem Ipsum',
    text: 'Text',
};
export var onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'title Lorem Ipsum',
};
export var onlyText = Template.bind({});
onlyText.args = {
    text: 'Text',
};
export var PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'title Lorem Ipsum',
    text: 'Text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export var onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'title Lorem Ipsum',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
export var onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Text',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
export var Error = Template.bind({});
Error.args = {
    title: 'Title',
    text: 'Text',
    theme: TextTheme.ERROR,
};
export var SizeL = Template.bind({});
SizeL.args = {
    title: 'title Lorem Ipsum',
    text: 'Text',
    size: TextSize.L,
};
