# 컨벤션

### 1. Git Workflow

1. 기본 브랜치: main
2. 기능 개발은 반드시 새로운 브랜치에서 진행합니다.
   - 규칙: feature/기능명, bugfix/이슈번호, refactor/내용
   - 예시: feature/login, bugfix/1234, refactor/project-structure
3. 병합(Merge): PR(Pull Request)로 진행하며, 코드 리뷰 후 main에 병합합니다.
4. 환경변수 변경 시
   - 백엔드/프론트 모두 운영서버와 개발서버가 구분되므로, 환경변수가 필요할 때는 반드시 담당자에게 문의해 주세요.
   - 프론트엔드는 .env를 사용하여 API 요청 주소를 설정하며, 다른 방법이 더 적합하다면 협의 후 적용합니다.

---

### 2. Code Style

1. CSS
   - CSS Module(`.module.css`)을 사용하여 스타일을 컴포넌트 단위로 캡슐화합니다.
   - 공통 스타일은 `src/assets/css/style.module.css`에 작성합니다.
   - 공용 변수는 `src/assets/css/setting/_vars.css`에 정의합니다.
2. 컴포넌트
   - 파일명은 PascalCase로 작성합니다. (`MyComponent.jsx`)
   - 컴포넌트별로 `.jsx`와 `.module.css`를 같은 폴더에 두어 캡슐화합니다.
   - 공통 UI 컴포넌트는 `src/components/` 아래에 모아둡니다. (예: `footer/`, `groupCard/`, `header/`)
3. 페이지
   - 라우팅 단위의 화면은 `src/pages/`에 작성합니다.
   - 페이지명은 소문자+카멜케이스로 폴더를 만들고, 그 안에 `.jsx`와 `.module.css`를 함께 작성합니다. (예: `newEventPage/NewEventPage.jsx`, `NewEventPage.module.css`)
