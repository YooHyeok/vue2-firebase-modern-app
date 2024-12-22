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

# *Firebase 호스팅 설정*
<details>
<summary>상세보기</summary>
<br>

파이어베이스는 구글 서비스중 하나이므로 구글 계정이 있다면 바로 사용이 가능하다.  

1. ### 상단 우측의 `콘솔로 이동` 버튼을 클릭한다.  
2. ### 프로젝트 만들기 버튼을 클릭한다.  
3. ### 프로젝트 이름을 입력한 후 `계속` 버튼을 클릭한다.  
4. ### Firebase 프로젝트를 위한 Google 애널리틱스 OFF 후 `프로젝트 만들기` 버튼 클릭
5. ### 좌측 사이드바 - 빌드 아코디언 - `Hosting` 클릭
6. ### 시작하기 클릭
7. ### Firebase 호스팅 설정 시작
<details>
<summary>Firebase 호스팅 설정</summary>
<br>

a. Firebase CLI 설치  
   - 로컬에서 글로벌로 `npm install -g firebase-tools` 설치  

b. 프로젝트 초기화  
   - 프로젝트에서 firebase 로그인 `firebase login` 명령 실행

   - 프로젝트에서 firebase 초기화 `firebase init` 명령 실행  

      - Y 입력 - Enter
        ```bash
        ? Are you ready to proceed? (Y/n) Y - Yes
        ```

      - SpaceBar - Enter
        ```bash
        ? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)
        ( ) Realtime Database: Configure a security rules file for Realtime Database and (optionally) provision default instance
        ( ) Firestore: Configure security rules and indexes files for Firestore
        ( ) Functions: Configure a Cloud Functions directory and its files
        >(*) Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
        ( ) Hosting: Set up GitHub Action deploys
        ( ) Storage: Configure a security rules file for Cloud Storage
        ( ) Emulators: Set up local emulators for Firebase products
        (Move up and down to reveal more choices)
        ```
      - 기존 프로젝트 사용 옵션 선택 - Enter
        ``` 
        ?Please select an option
        > Use an existing project
        Create a new project
        Add Firebase to an existing Google Cloud Platform project
        Don't set up a default project
        ```
      - 호스팅 할 firebase 프로젝트 선택 - Enter
        ```
        ? Select a default Firebase project for this directory:
        jwitter-app (jwitter-app)
        > yoohyeok-ff0d0 (yoohyeok)
        ```
      - 웹 배포에 사용할 "공개 디렉토리" 지정 - dist 입력 후 Enter
        ```
        ? What do you want to use as your public directory? dist
        ```
      - SPA 작동을 위한 URL 리다이렉션 설정 여부 - y 입력 후 Enter
        ```
        ? Configure as a single-page app (rewrite all urls to /index.html)? (y/N) y
        ```
      - GitHub 자동 빌드 배포 여부 - N 입력후 Enter
        ```
        ? Set up automatic builds and deploys with GitHub? (y/N) N
        ```

  - 위 모든 과정이 종료되면 `.firebaserc` `firebase.json` 파일 2개가 새로 생성된다.    
      (configuration 관련 정보가 들어있다.)
  - 빌드 실행 `npm run build` 명령 입력
  
  c. dist 디렉토리 생성 확인 후 `firebase deploy` 명령 입력

  d. 빌드 및 배포 연동  script  
  - package.json  
    ```json
    {
      "scripts": {
        /* 생략 */
        "firbase:deploy": "vue-cli-service build && firbase deploy"
        /* 생략 */
      },
    }
    ```
    ```bash
    npm run firebase:deploye
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

