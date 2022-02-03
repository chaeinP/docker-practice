# base 이미지
FROM node

# 컨테이너 생성시 실행할 명령어
RUN mkdir server

# 컨테이너 생성시 명령어 실행 위치 지정
WORKDIR /server

# 컨테이너 생성시 로컬 파일들을 컨테이너로 복사
COPY . .

# 컨테이너 시작시 실행할 명령어
RUN npm i
CMD [ "npm", "start" ];

#docker build -t 이미지 이름 dockerfile경로
#docker run -it -p 8080:3030 --name 컨테이너이름 이미지이름
#localhost:8080으로 접속
