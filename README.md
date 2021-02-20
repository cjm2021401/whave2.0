* # Whave 2.0

  Home-CCTV in Whale browser

  

  ## Whave 2.0이 무엇인가요?

  Whave 2.0은 NAVER Whale 브라우저 익스텐션 소프트웨어입니다.

  RTMP Protocol을 사용하여, 사용하지 않는 스마트폰 디바이스의 카메라 화면을 실시간으로 브라우저에서 시청 가능합니다.

  기존 별도 RTMP Publishing 어플을 사용한 1.0 버전에 비해 Serverless하게 구성하여 속도 및 안정성이 대폭 향상되었습니다.


  네이버 웨일 확장앱 콘테스트 2019(https://whale.naver.com/contest/) 최종 1위 당선작입니다.

  

  ## 사용방법

  #### 요구사항

  - 별도의 요구사항 존재하지 않음.

  

  #### manifest 설정

  ```json
  {
  	"manifest_version": 2,
  	"name": "[PLACE_EXTENSION_NAME]",
  	"version": "2.1.0",
  	"description": "[PLACE_YOUR_DESCRIPTION]",
  	"sidebar_action": {
  		"default_page": "index.html",
  		"default_icon": {
  			"16": "images/main.png"
  		},
  		"default_title": "[PLACE_TITLE_NAME]"
  	},
  	"content_security_policy": "script-src 'self' https://apis.google.com; object-src 'self'",
  	"permissions": [
  		"storage"
  	]
  }
  ```

  * manifest_version: 2 로 설정합니다.(2021.02.20 기준)

  * name: extension의 이름입니다.

  * version: extension의 버전코드입니다.

  * description: extension의 설명을 간략하게 작성해주세요.

  * sidebar_action

    > * default_page: 시스템 실행 시 초기 진입 페이지 입니다.
    > * default_icon: extension의 아이콘의 경로로 설정해주세요.

  * Default_title: 프로젝트 제목을 입력해주세요.
  * permissions: 해당 extension은 구동을 위해 storage access 권한을 필요로 합니다.

  ######

  ## 라이센스

  본 서비스에 사용된 오픈소스의 라이센스는 아래와 같습니다.

  - Bootstrap 4.3.1 (MIT)

  - jQuery 3.1.1 (MIT)

  - Video.js 7.6.5 (Apache 2.0)

  ## 문의

  필요에 따라 자유롭게 수정, 사용, 배포하셔도 됩니다.
  문의사항은 이메일(kuj0902@gmail.com)로 보내주시기 바랍니다.
