# Vue와 Firebase로 모던웹사이트 만들기

# *프로젝트 셋업*
<details>
<summary>상세보기</summary>
<br>

## vue cli install
  - 명령어
    ```bash
    npm install -g @vue/cli
    ```

## vue project 생성

  - 명령어
    ```bash
    vue create {프로젝트명}
    ```

  - CLI 옵션 설정
    ```bash
    Vue CLI v5.0.8
    ? Please pick a preset:
      Default ([Vue 3] babel, eslint)
      Default ([Vue 2] babel, eslint)
    > Manually select features
    ```

    ```bash
    Vue CLI v5.0.8
    ? Please pick a preset: Manually select features
    ? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection, and
    <enter> to proceed)
    (*) Babel
    ( ) TypeScript
    ( ) Progressive Web App (PWA) Support
    (*) Router
    >(*) Vuex
    ( ) CSS Pre-processors
    (*) Linter / Formatter
    ( ) Unit Testing
    ( ) E2E Testing
    ``` 
    ```bash 
    Vue CLI v5.0.8
    ? Please pick a preset: Manually select features
    ? Check the features needed for your project: Babel, Router, Vuex, Linter
    ? Choose a version of Vue.js that you want to start the project with
      3.x
    > 2.x
    ```
    ```bash
    Vue CLI v5.0.8
    ? Please pick a preset: Manually select features
    ? Check the features needed for your project: Babel, Router, Vuex, Linter
    ? Choose a version of Vue.js that you want to start the project with 2.x
    ? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n) Y
    ```
    ```bash
    Vue CLI v5.0.8
    ? Please pick a preset: Manually select features
    ? Check the features needed for your project: Babel, Router, Vuex, Linter
    ? Choose a version of Vue.js that you want to start the project with 2.x
    ? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
    ? Pick a linter / formatter config:
      ESLint with error prevention only
      ESLint + Airbnb config
    > ESLint + Standard config
      ESLint + Prettier
    ```
    ```bash
    Vue CLI v5.0.8
    ? Please pick a preset: Manually select features
    ? Check the features needed for your project: Babel, Router, Vuex, Linter
    ? Choose a version of Vue.js that you want to start the project with 2.x
    ? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
    ? Pick a linter / formatter config: Standard
    ? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to
    proceed)
    >(*) Lint on save
    ( ) Lint and fix on commit
    ```
    ```bash
    Vue CLI v5.0.8
    ? Please pick a preset: Manually select features
    ? Check the features needed for your project: Babel, Router, Vuex, Linter
    ? Choose a version of Vue.js that you want to start the project with 2.x
    ? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
    ? Pick a linter / formatter config: Standard
    ? Pick additional lint features: Lint on save
    ? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
    > In dedicated config files
      In package.json
    ```
    ```bash
    Vue CLI v5.0.8
    ? Please pick a preset: Manually select features
    ? Check the features needed for your project: Babel, Router, Vuex, Linter
    ? Choose a version of Vue.js that you want to start the project with 2.x
    ? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
    ? Pick a linter / formatter config: Standard
    ? Pick additional lint features: Lint on save
    ? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
    ? Save this as a preset for future projects? (y/N) N
    ```
</details>
<br>


# *VSCODE Extension*
<details>
<summary>상세보기</summary>
<br>

### vetur
  - publisher: Pine Wu  
  vue.js 개발을 위한 확장으로 구문강조, 자동완성, Linting, 디버깅, 스니펫, Vuex 및 VueRouter   자동완성, 컴포넌트 및 템플릿 등을 지원해준다.
### TaskExplorer
  - publisher: Scott Meesseman  
  설치시 Explorer가 생기며, package.json에 등록된 npm script 명령등을 인식하여 해당 명령들을 클릭커블하게 실행시켜주는 기능을 제공한다. 
### vuetify-vscode
  - publisher: Vuetifyjs  
  Vuetiy에 대한 스니펫 지원
### Material Design Icons Intellisense(MDI)
  - publisher: Lukas Troyer  
  설치시 전용 Explorer가 생기며, MDI 아이콘에 대한 키워드 목록들을 지원해준다.
### ESLint
  - publisher: Microsoft
  - **Settings**
    - Commonly Used
      - Auto Save(자동 저장): onFocusChange (파일 등 포커스 변경시)
    - Extensions
      - ESLint
        - Eslint › autoFixOnSave
          저장시 문제가 발생하는 코드에 대해 자동으로 고쳐준다.
          - settings.json
            ```
            "editor.codeActionsOnSave": {
              "source.fixAll.eslint": true
            }
            ```
        - Eslint › Code Actions On Save: Rules
          특정 언어나 파일들에 대해 autoFixOnSave 활성화한다.
          - settings.json
            ```
            "eslint.validate": [
              {"language": "vue", "autoFix": true},
              {"language": "javascript", "autoFix": true},
              {"language": "html", "autoFix": true},
            ]
            ```

</details>
<br>

# *Vuetify 0.5v install*
<details>
<summary>펼치기/접기</summary>
<br>
  
  ```bash
  vue add vuetify@0.5
  ```

  ```
  ✔  Successfully installed plugin: vue-cli-plugin-vuetify

  ? Choose a preset:
  > Vuetify 2 - Configure Vue CLI (advanced)
    Vuetify 2 - Vue CLI (recommended)
    Vuetify 2 - Prototype (rapid development)
    Vuetify 3 - Vite (preview)
    Vuetify 3 - Vue CLI (preview)
  ```
  ```
  ? Use a pre-made template? (will replace App.vue and HelloWorld.vue) (Y/n) Y
  ```
  ```
  ? Use custom theme? (y/N) N
  ```
  ```
  ? Use custom properties (CSS variables)? N
  ```
  ```
  ? Select icon font
  > Material Design Icons
    Material Icons
    Font Awesome 5
    Font Awesome 4
  ```
  ```
  ? Use fonts as a dependency (for Electron or offline)? (y/N) N
  ```
  ```
  ? Use a-la-carte components? (Y/n) Y
  ```
  ```
  ? Select locale (Use arrow keys)
  > English 
    Estonian 
    Farsi 
    Finnish 
    Greek 
    French
    Croatian
  (Move up and down to reveal more choices)
  ```
</details>
<br>

# *템플릿*
<details>
<summary>상세보기</summary>
<br>

# 
  - 
    ```
    ```
</details>
<br>

