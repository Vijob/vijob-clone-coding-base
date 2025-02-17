## React 19, Next 15 + TypeScript를 활용한 '일자리 상세' 페이지 클론 코딩 프로젝트

이 저장소는 Vijob 웹사이트의 '홈' 페이지와 '일자리 상세' 페이지를 클론 코딩을 위한 프로젝트입니다.

## 📌 주요 기능

<pre>
1. 홈 페이지
  - 카드 목록에 Infinite Scroll 기능 적용
  - 상세 페이지로 이동 후 돌아왔을 때, 목록 상태 유지
  - Mock 데이터를 사용하여 API 요청을 대체
2. 다국어 지원
  - 기본 언어: 한국어
  - Context API를 활용하여 언어 선택 기능 (번역본은 번역기나, AI를 활용하여 데이터를 만들어 사용)
3. 테스트 코드
  - Storybook을 사용하여 UI 컴포넌트 작성
  - Jest를 이용하여 테스트 코드 작성 (Given-When-Then 패턴)
</pre>


🛠️ 기술 스택

- Framework: Next.js 15 (App Router)
- Language: TypeScript
- State Management: Context API
- Styling: Tailwind CSS
- UI Library: Shadcn
- Testing: Jest, Storybook

## ⚙️ 설치 및 설정

- Node.js: v22.11.0 (권장)
- Yarn: v1.22.22 (권장)  
  <span style="color: red; font-size: 0.875rem">최소 버전은 확인되지 않았으므로, 권장 버전을 사용하는 것이 가장 안정적입니다.</span>

```bash
✅ **NextJS** 실행 방법  
# 프로젝트 클론
git clone https://github.com/k-min-ju/vijob-clone-coding-base.git
# 프로젝트 폴더로 이동
cd vijob-clone-coding
# 패키지 설치
yarn install
# 개발 서버 실행
yarn dev


✅ **Storybook** 실행 방법 
yarn storybook
  
✅ **Jest 테스트** 실행 방법
yarn test 또는 yarn test --watch  
```

## 📂 프로젝트 구조

<pre>
Root Dir
├── __mocks__/             ── Storybook 및 Jest 테스트를 위한 Mock Data 디렉토리
│   ├── **.ts              ── Storybook 및 Jest에서 사용하는 mock data
│   └── ...
├── __tests__/             ── Jest 테스트 코드 디렉토리
│   ├── Footer.test.tsx    ── Footer 컴포넌트 테스트 코드
│   ├── List.test.tsx      ── List 컴포넌트 테스트 코드
│   └── ...
├── public/                ── 🌎 정적 파일 (폰트, 이미지, CSS 관련 파일)
│   ├── fonts/             ── 웹 폰트 파일
│   ├── images/            ── UI 이미지 및 아이콘
│   ├── banners/           ── 배너 이미지
│   └── ...
├── src/                  ── Next.js 주요 코드 저장
│   ├── app/              ── Next.js `App Router` 구조
│   │   ├── [locale]/     ── 다국어 파라미터
│   │   │   ├── job/      ── `/[locale]/job` 관련 페이지
│   │   │   │   ├── page.tsx     ── 서버 컴포넌트
│   │   │   │   ├── Client.tsx   ── 클라이언트 컴포넌트
│   │   │   │   ├── types.ts     ── 페이지 내에서 사용하는 타입 정의
│   │   │   │   └── utils.ts     ── 페이지 내에서 사용하는 유틸 함수
│   ├── components/         ── UI 컴포넌트 모음
│   │   ├── job/            ── `job` 관련 재사용 가능한 컴포넌트
│   │   │   ├── **.tsx      ── 개별 컴포넌트 파일
│   │   │   └── ...
│   │   ├── layout/         ──  레이아웃 관련 컴포넌트
│   │   │   ├── Footer.tsx  
│   │   │   └── ...
│   │   ├── ui/             ── shadcn 기반 UI 컴포넌트
│   │   │   ├── Button.tsx
│   │   │   └── Input.tsx
│   │   │   └── ...
│   ├── configs/            ── 프로젝트 설정 관련 파일
│   │   ├── constants.ts    ── 상수 값 모음
│   │   └── ...
│   ├── data/             ── JSON 기반 데이터 (API mock 데이터 등)
│   │   ├── **.json       ── 테스트용 JSON 데이터
│   │   ├── footerMenu.ts ── 하단 메뉴 탭 JSON 데이터
│   │   └── ...
│   ├── stories/          ── Storybook 컴포넌트 문서
│   │   ├── **.tsx        ── Storybook에서 사용할 각 컴포넌트 스토리
│   │   └── ...
│   ├── types/            ── 공통 타입 및 타입 정의
│   │   ├── components.ts ── 공통 컴포넌트 타입
│   │   └── ...
└── ...
</pre>