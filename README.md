# インストール手順
- Node.js をインストール
    - 現在の開発環境のバージョンは 14.15.4 LTS
    - npm 6.14.4 が同梱している
- npm install

# 実行
- 開発環境
    ```
    npm run serve
    ```
- ビルド
    ```
    npm run build
    ```
- 本番環境
    ```
    node server.js
    ```

# Deploy
## Heroku
1. 以下の URL からダウンロードし、Heroku CLI をインストール
    ```
    https://devcenter.heroku.com/articles/heroku-cli#download-and-install
    ```
1. 以下のコマンドを実行し、heroku デプロイ用の Git リモートレポジトリを追加
    ```
    heroku git:remote -a [app-name]
    ```
    - heroku コマンドに Path が通っていない場合は、(一時的でよいので) コマンドがあるディレクトリに Path を通す
1. 以下のコマンドでデプロイ用のリモートレポジトリに push
    ```
    git push heroku master
    ```
## Google App Engine
### 実行
1. 以下のコマンドを実行
    ```
    gcloud app deploy
    ```
