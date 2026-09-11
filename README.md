# 송월 게임즈 · Songwol Games

타올 디펜스와 타올 서바이벌을 소개하는 정적 랜딩 페이지 허브입니다.  
빌드 도구 없이 HTML / CSS / JS만으로 동작합니다.

## 로컬에서 열기

1. 이 폴더(또는 zip 압축 해제본)에서 `index.html`을 찾습니다.
2. 브라우저로 `index.html`을 엽니다. (더블클릭 또는 파일 → 열기)
3. 또는 터미널에서:

```bash
# Python 3
python3 -m http.server 8080

# 그다음 브라우저에서 http://localhost:8080 접속
```

Google Fonts(Noto Sans KR, Outfit)는 CDN에서 불러오므로 인터넷 연결이 필요합니다.

## GitHub Pages에 올리기

zip을 풀면 `index.html`이 루트에 있도록 만든 경우:

1. GitHub에서 새 저장소를 만듭니다. (예: `songwol-games`)
2. 저장소 루트에 `index.html`, `styles.css`, `script.js`를 업로드(또는 push)합니다.
3. **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: `main` (또는 `master`), folder: **/ (root)**
4. 저장 후 몇 분 뒤 `https://<username>.github.io/<repo>/` 로 접속합니다.

이미 `songwol_games/` 폴더 안에 파일이 있다면, 그 폴더 내용을 저장소 **루트**로 옮기거나 Pages의 folder를 해당 경로로 지정하세요.

## Netlify에 올리기

### 드래그 앤 드롭

1. [Netlify Drop](https://app.netlify.com/drop) 에 접속합니다.
2. `index.html`이 포함된 폴더(또는 이 zip을 풀어 나온 루트)를 드래그합니다.
3. 배포 URL이 바로 생성됩니다.

### Git 연동

1. GitHub에 코드를 push합니다.
2. Netlify → **Add new site → Import an existing project**
3. 저장소를 선택하고 Build command는 비워 두고, Publish directory는 `.` (루트)로 둡니다.
4. Deploy 합니다.

## 게임 링크

| 게임 | 플레이 | GitHub |
|------|--------|--------|
| 타올 디펜스 | https://towelkun-defence.netlify.app/ | https://github.com/qwer123toy/towelkunDefence |
| 타올 서바이벌 | https://towel-survivor.netlify.app/ | https://github.com/qwer123toy/tower_survivor |

## 라이선스

랜딩 페이지 코드는 자유롭게 수정·배포해도 됩니다. 각 게임의 라이선스는 해당 저장소를 따릅니다.
