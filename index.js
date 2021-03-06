module.exports = {
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'viralize-es6'
    ],
    rules: {
        'jsx-a11y/label-has-for': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react/jsx-filename-extension': 'off',
        'react/destructuring-assignment': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/state-in-constructor': 'off',
        'react/static-property-placement': 'off',
        indent: ['warn', 4, {
            SwitchCase: 1,
            ignoredNodes: [
                'JSXElement',
                'JSXElement > *',
                'JSXAttribute',
                'JSXIdentifier',
                'JSXNamespacedName',
                'JSXMemberExpression',
                'JSXSpreadAttribute',
                'JSXExpressionContainer',
                'JSXOpeningElement',
                'JSXClosingElement',
                'JSXText',
                'JSXEmptyExpression',
                'JSXSpreadChild',
                'JSXFragment',
                'JSXOpeningFragment',
                'JSXClosingFragment'
            ]
        }]
    }
};
