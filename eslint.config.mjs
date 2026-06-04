// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    // Reglas Vue adicionales
    'vue/no-unused-components': 'warn',
    'vue/no-mutating-props': 'error',
    'vue/require-default-prop': 'warn',
    'vue/multi-word-component-names': 'off',
    'vue/attribute-hyphenation': ['error', 'never'],
    'vue/attributes-order': 'warn',
    'vue/quote-props': 'error',
    'vue/no-multiple-template-root': 'off',
    'vue/no-template-shadow': 'off',
    // Reglas Import
    /*  'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-named-default': 'error', */

    // Reglas de estilo generales
    'no-tabs': 'error',
    'array-callback-return': 'error',
    'no-await-in-loop': 'error',
    'no-constant-binary-expression': 'error',
    'no-duplicate-imports': ['error', { allowSeparateTypeImports: true }],
    'import/no-mutable-exports': 'error',
    'no-new-native-nonconstructor': 'error',
    'no-promise-executor-return': 'error',
    'no-self-compare': 'error',
    'no-template-curly-in-string': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable-loop': 'error',
    'no-unused-private-class-members': 'error',
    'no-use-before-define': ['error', { functions: false, classes: false }],
    'no-case-declarations': 'error',
    'no-class-assign': 'error',
    'no-const-assign': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-pattern': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-global-assign': 'error',
    'no-func-assign': 'error',
    // Configurar no-unused-vars para ser más permisivo con archivos de tipos
    'no-useless-catch': 'error',
    // reglas para ts
    '@typescript-eslint/no-unused-vars': 'off',
  }
})
