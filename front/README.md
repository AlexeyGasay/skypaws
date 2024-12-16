# SKYPAWS Docs

## Структура директории

### Каталоги Nuxt

#### Layouts

- лейауты

#### Components

- компоненты

#### Middleware

- промежуточное по для маршрутов

#### Plugins

- плагины например api или кастомные директивы

#### Assets

- ресурсы веб-сайта, которые будут обрабатываться инструментом сборки

### Каталоги Пользовательские

#### Components/Storybook
- Компоненты добавленные в Storybook

#### Store

- сторы vuex

#### Api

- эндпоинты api

#### Adapter

- функции для преобразований данных бэк-фронт

#### Tools

- общий код, который можно повторно использовать в проекте, не имеет зависимостей внутри проекта

## Конвенция

### Обязательная часть
- Использование <code>[BEM](https://ru.bem.info/methodology/css/)</code> для написания стилей
- Использование <code>[GitFlow](https://danielkummer.github.io/git-flow-cheatsheet/index.ru_RU.html)</code>, допустимые заголовки для коммитов:
  
    - feat:     A new feature.
    - fix:      A bug fix.
    - docs:     Documentation only changes.
    - style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
    - refactor: A code change that neither fixes a bug nor adds a feature.
    - test:     Adding missing tests or correcting existing ones.
    - chore:    Changes to the build process or auxiliary tools and libraries such as documentation generation.
    - perf:     A code change that improves performance.
    - ci:       Changes to your CI configuration files and scripts.
    - build:    Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm).
    - temp:     Temporary commit that won't be included in your CHANGELOG.
    - delete:   Delete some functional.
    - wip: Work in progress.


- префиксы для components

    - AppExample - чистые компоненты на пропсах
    - TheExample - контейнеры с логикой, состоянием и работой api
    - UiExample - базовые ui компоненты 

### Опциональная часть

- использовать jsDoc для типизации файлов каталогов

    - api
    - tools
    - store
    - plugins
    - adapters

## Инструменты

- axios - выборка данных

## Линтеры и их настройки
- Линтеры не отключаемы, не получится закоммитить пока не будут решены все 'Errors'
- 'Warnings' - допустимы

### Eslint
- order-in-components - выстраивает порядок секций в компоненте(name->components->props->emits->data...etc)
- attributes-order - выстраивает порядок атрибутов в template у блоков и компонентов(is->v-for->v-if...etc)


### Stylelint
- selector-class-pattern - следит за соблюдением BEM методологии

### Git-commit-msg-linter
- Выполняется перед коммитом 
- commitlinterrc - настройки для линтера