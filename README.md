# Todo_Application

Todo List를 추가하고 저장할 수 있는 간단한 Todo Application입니다.

## 목차

1. [파일 구조 (File Structure)](#파일-구조-file-structure)
2. [예시 (Screenshot)](#예시-screenshot)
3. [기능 (Features)](#기능-features)
4. [설치 (Installation)](#설치-installation)
5. [실행 (Usage)](#실행-usage)

## 파일 구조 (File Structure)
```bash
project-root/
├── src/
│ ├── component/
│ │        ├── DoneList.jsx
│ │        ├── TodoInput.css
│ │        ├── TodoInput.jsx
│ │        ├── TodoItem.css
│ │        ├── TodoItem.jsx
│ │        └── TodoList.jsx
│ ├── hook/
│ │     └── useLocalStorage.jsx
│ ├── pages/
│ │     ├── MainPage.css
│ │     └── MainPage.jsx
│ ├── App.css
│ ├── App.js
│ └── index.js
├── package.json
└── README.md
```

## 예시 (Screenshot)

<img src="img/TodoListReactscreenshot.gif" width="720" height=auto/>

## 기능 (Features)
1. 상단 입력창에 Todo를 적은 후 [enter] 혹은 '+' 버튼을 누르면 하단 '~ing' 리스트에 추가됩니다.
2. '~ing' 리스트의 체크박스에 체크를 하면 'Done' 리스트로 이동합니다.
3. 'Done' 리스트에 있으나 미완료인 경우 체크를 해제하면 '~ing' 리스트로 다시 이동합니다.
4. '~ing' 리스트와 'Done' 리스트에서 '삭제'버튼을 누르면 리스트에서 삭제됩니다.
5. 작성된 모든 리스트들은 로컬 스토리지에 저장되며, 새로고침해도 유지됩니다.

## 설치 (Installation)
```bash
git clone https://github.com/PARK-SSOYEON/Todo_Aplication_React.git
cd repo
npm install
```

## 실행 (Usage)
```bash
npm start
```
