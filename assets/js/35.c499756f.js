(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{199:function(e,t,a){"use strict";a.r(t);var s=a(20),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"ubuntu-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-server","aria-hidden":"true"}},[e._v("#")]),e._v(" Ubuntu Server")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#概要"}},[e._v("概要")])]),a("li",[a("a",{attrs:{href:"#node-js-8-x-npm-のインストール"}},[e._v("node.js 8.x & npm のインストール")])]),a("li",[a("a",{attrs:{href:"#elasticsearch"}},[e._v("Elasticsearch")])]),a("li",[a("a",{attrs:{href:"#mongodb"}},[e._v("MongoDB")])]),a("li",[a("a",{attrs:{href:"#growi"}},[e._v("GROWI")])]),a("li",[a("a",{attrs:{href:"#リバースプロキシの設定"}},[e._v("リバースプロキシの設定")])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"概要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概要","aria-hidden":"true"}},[e._v("#")]),e._v(" 概要")]),e._v(" "),a("p",[e._v("この章では Ubuntu Server 16.04 (Xenial) に GROWI をインストールする方法を紹介します。 14.04 や 18.04 は現在未検証です。")]),e._v(" "),a("p",[e._v("セットアップに必要となるソフトウェアは以下の通りです。")]),e._v(" "),a("ul",[a("li",[e._v("node.js 8.x (DO NOT USE 9.x)")]),e._v(" "),a("li",[e._v("npm 5.x or 6.x")]),e._v(" "),a("li",[e._v("yarn")]),e._v(" "),a("li",[e._v("MongoDB 3.x")]),e._v(" "),a("li",[e._v("(Option) Elasticsearch 5.x")]),e._v(" "),a("li",[e._v("(Option) systemd")]),e._v(" "),a("li",[e._v("(Option) Apache or nginx")])]),e._v(" "),a("p",[e._v("Option となっているものは必須ではありませんが、このドキュメントではこれらを全て利用し、全文検索可能な GROWI を Apache or nginx でリバースプロキシする環境を構築し、systemd でホスト起動と同時に起動させるところまでを扱います。")]),e._v(" "),a("h2",{attrs:{id:"node-js-8-x-npm-のインストール"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js-8-x-npm-のインストール","aria-hidden":"true"}},[e._v("#")]),e._v(" node.js 8.x & npm のインストール")]),e._v(" "),a("h3",{attrs:{id:"nodesource-repository-を利用する"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodesource-repository-を利用する","aria-hidden":"true"}},[e._v("#")]),e._v(" NodeSource repository を利用する")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://deb.nodesource.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://deb.nodesource.com/"),a("OutboundLink")],1),e._v(" から Node.js をインストールスクリプトを取得します。作業ディレクトリはホームディレクトリで作業します")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ cd ~\n$ curl -sL https://deb.nodesource.com/setup_8.x -o nodesource_setup.sh\n")])])]),a("p",[e._v("取得したスクリプトを実行します。")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo bash nodesource_setup.sh\n")])])]),a("p",[e._v("これで "),a("code",[e._v("apt-get")]),e._v(" 経由で node.js が取得できるようになったので、 "),a("code",[e._v("apt-get")]),e._v(" コマンドでインストールを行います。")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo apt-get install nodejs\n")])])]),a("p",[e._v("GROWI では yarn を用いたパッケージインストールを利用するため、ここで "),a("code",[e._v("yarn")]),e._v(" コマンドをインストールしておきます。")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo npm install -g yarn\n")])])]),a("p",[e._v("Node.js, npm, yarn のインストールが完了したら、インストールしたバージョンを確認しましょう。")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ nodejs -v\nv8.11.3\n$ npm -v\n5.6.0\n$ yarn -v\n1.9.2\n")])])]),a("h2",{attrs:{id:"elasticsearch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch","aria-hidden":"true"}},[e._v("#")]),e._v(" Elasticsearch")]),e._v(" "),a("h3",{attrs:{id:"インストール"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#インストール","aria-hidden":"true"}},[e._v("#")]),e._v(" インストール")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/deb.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("公式ページ"),a("OutboundLink")],1),e._v(" に従い、インストールを進めます。 ここでは Elasticsearch 5.x をインストールするために若干の修正をしています")]),e._v(" "),a("p",[e._v("まず、Elasticsearch を実行できるように JDK8 をインストールします。")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo apt-get install openjdk-8-jdk\n")])])]),a("p",[e._v("パッケージをインストールするために、Elasticsearch レポジトリの GPG キーを追加します。")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -\n")])])]),a("p",[e._v("https 経由で apt コマンドによるインストールを行うために、 "),a("code",[e._v("apt-transport-https")]),e._v(" パッケージをインストールします。")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo apt-get install apt-transport-https\n")])])]),a("p",[e._v("Elasticsearch のレポジトリを追加します。")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ echo "deb https://artifacts.elastic.co/packages/5.x/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-5.x.list\n')])])]),a("p",[e._v("これで、apt-get 経由で Elasticsearch がインストールできるようになったため、インストールを行います。")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo apt-get update && sudo apt-get install elasticsearch\n")])])]),a("p",[e._v("インストールが完了したら、Elasticsearch に割り当てるメモリを調整します。メモリの割り当ては個人ユースであれば 256MB で十分です。チーム規模、ページの量に応じて変更してください。")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo vim /etc/elasticsearch/jvm.options\n# 編集前\n-Xms1g\n-Xmx1g\n\n# 編集後\n-Xms256m\n-Xmx256m\n")])])]),a("p",[e._v("インストールが完了したら、 パッケージのバージョンを確認します。")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ dpkg -l | grep elasticsearch\nii  elasticsearch                    5.6.10                                     all          Elasticsearch is a distributed RESTful search engine built for the cloud. Reference documentation can be found at https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html and the 'Elasticsearch: The Definitive Guide' book can be found at https://www.elastic.co/guide/en/elasticsearch/guide/current/index.html\n")])])]),a("p",[a("code",[e._v("systemctl")]),e._v(" コマンドを使って、Elasticsearch を起動します。")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo systemctl start elasticsearch\n")])])]),a("p",[e._v("elsticsearch の自動起動設定を有効化します。")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo systemctl enable elasticsearch\n")])])]),a("p",[e._v("正常に起動しているか確認を行います。")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo systemctl status elasticsearch\n")])])]),a("h3",{attrs:{id:"growi-に必要な-elasticsearch-プラグインのインストール"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#growi-に必要な-elasticsearch-プラグインのインストール","aria-hidden":"true"}},[e._v("#")]),e._v(" GROWI に必要な Elasticsearch プラグインのインストール")]),e._v(" "),a("p",[e._v("以下の Elasticsearch plugin をインストールします")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-kuromoji.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Japanese (kuromoji) Analysis plugin"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-icu.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICU Analysis Plugin"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("まずは、Elasticsearch plugin をインストールするために利用するコマンドを検索します")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ dpkg -L elasticsearch | grep bin | grep plugin\n/usr/share/elasticsearch/bin/elasticsearch-plugin\n")])])]),a("p",[e._v("上記で出力されたコマンドを利用して、 analysis-kuromoji plugin と analysis-icu plugin をインストールします")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# analysis-kuromoji のインストール\n$ sudo /usr/share/elasticsearch/bin/elasticsearch-plugin install analysis-kuromoji\n\n# analysis-icu plugin のインストール\n$ sudo /usr/share/elasticsearch/bin/elasticsearch-plugin install analysis-icu\n")])])]),a("h2",{attrs:{id:"mongodb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb","aria-hidden":"true"}},[e._v("#")]),e._v(" MongoDB")]),e._v(" "),a("h3",{attrs:{id:"インストール-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#インストール-2","aria-hidden":"true"}},[e._v("#")]),e._v(" インストール")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.mongodb.com/v3.6/tutorial/install-mongodb-on-ubuntu/",target:"_blank",rel:"noopener noreferrer"}},[e._v("公式ページ"),a("OutboundLink")],1),e._v(" に従ってインストールを実施します。 バージョンは、MongoDB 3.6 です。")]),e._v(" "),a("p",[e._v("まずは、"),a("code",[e._v("apt")]),e._v(" のために public key をインポートします。")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5\n")])])]),a("p",[e._v("レポジトリの追加を行います。 ここでは Ubuntu 14.04 と Ubuntu 16.04 の例を記載しています。")]),e._v(" "),a("p",[a("strong",[e._v("Ubuntu 14.04")])]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list\n')])])]),a("p",[a("strong",[e._v("Ubuntu 16.04")])]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list\n')])])]),a("p",[e._v("レポジトリの追加まで完了したため、MongoDB のインストールを行います。")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo apt-get update && sudo apt-get install mongodb-server\n")])])]),a("p",[e._v("インストールが完了したら、 パッケージのバージョンを確認します。")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ii  mongodb-org                      3.6.6                                      amd64        MongoDB open source document-oriented database system (metapackage)\nii  mongodb-org-mongos               3.6.6                                      amd64        MongoDB sharded cluster query router\nii  mongodb-org-server               3.6.6                                      amd64        MongoDB database server\nii  mongodb-org-shell                3.6.6                                      amd64        MongoDB shell client\nii  mongodb-org-tools                3.6.6                                      amd64        MongoDB tools\n")])])]),a("p",[a("code",[e._v("systemctl")]),e._v(" コマンドを使って、MongoDB を起動します。")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo systemctl start mongod\n")])])]),a("p",[e._v("MongoDB の自動起動設定を有効化します。")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo systemctl enable mongod\n")])])]),a("p",[e._v("正常に起動しているか確認を行います。")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo systemctl status mongod\n")])])]),a("h2",{attrs:{id:"growi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#growi","aria-hidden":"true"}},[e._v("#")]),e._v(" GROWI")]),e._v(" "),a("h3",{attrs:{id:"インストール-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#インストール-3","aria-hidden":"true"}},[e._v("#")]),e._v(" インストール")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/weseek/growi",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/weseek/growi"),a("OutboundLink")],1),e._v(" からソースコードを取得し、"),a("a",{attrs:{href:"https://github.com/weseek/growi/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/weseek/growi/releases"),a("OutboundLink")],1),e._v(" にて、最新の安定版のバージョンを確認します。")]),e._v(" "),a("p",[e._v("ここでは "),a("code",[e._v("/opt/growi")]),e._v(" 配下にインストールする手順を記載しています。")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo mkdir -p /opt/\n$ cd /opt/\n$ sudo git clone https://github.com/weseek/growi /opt/growi\n$ cd /opt/growi\n\n# タグの確認\n$ sudo git tag -l\n...\nv3.1.7\nv3.1.8\nv3.1.8-RC\nv3.1.8-RC2\nv3.1.9\nv3.2.0-RC4\n...\n\n# RC がついていない最新版を利用\n$ sudo git checkout -b v3.1.9 refs/tags/v3.1.9\n")])])]),a("p",[e._v("ソースコードを clone した後に、"),a("code",[e._v("yarn")]),e._v(" コマンドを利用して、 GROWI に必要なパッケージをインストールします。")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ cd /opt/growi\n$ sudo yarn\n")])])]),a("h3",{attrs:{id:"起動確認"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#起動確認","aria-hidden":"true"}},[e._v("#")]),e._v(" 起動確認")]),e._v(" "),a("p",[e._v("パッケージのインストールが完了したら、起動確認を行います。")]),e._v(" "),a("p",[e._v("ここでは MongoDB と Elasticsearch が同一ホストで稼働していることを前提としています。")]),e._v(" "),a("p",[a("code",[e._v("MONGO_URI")]),e._v(" と "),a("code",[e._v("ELASTICSEARCH_URI")]),e._v(" は環境に合わせて適宜書き換えてください。")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo \\\nMONGO_URI=mongodb://localhost:27017/growi \\\nELASTICSEARCH_URI=http://localhost:9200/growi \\\nnpm start\n\n...\n# 以下のメッセージが表示されるまでしばらく待つ\n> growi@3.1.9 server:prod /opt/growi\n> env-cmd config/env.prod.js node app.js\n")])])]),a("p",[a("code",[e._v("http://<hostname or ip address>:3000/")]),e._v(" にアクセスし、初回セットアップ画面が表示されることを確認します。")]),e._v(" "),a("h3",{attrs:{id:"systemd-による自動起動の設定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#systemd-による自動起動の設定","aria-hidden":"true"}},[e._v("#")]),e._v(" systemd による自動起動の設定")]),e._v(" "),a("p",[e._v("「"),a("router-link",{attrs:{to:"./../admin-cookbook/launch-with-systemd.html"}},[e._v("systemd による自動起動")]),e._v("」を参照して下さい。")],1),e._v(" "),a("h2",{attrs:{id:"リバースプロキシの設定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#リバースプロキシの設定","aria-hidden":"true"}},[e._v("#")]),e._v(" リバースプロキシの設定")]),e._v(" "),a("p",[e._v("ここでは、起動した GROWI に対してリバースプロキシを行うための設定例を記載します。")]),e._v(" "),a("h3",{attrs:{id:"apache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache","aria-hidden":"true"}},[e._v("#")]),e._v(" Apache")]),e._v(" "),a("h4",{attrs:{id:"インストール-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#インストール-4","aria-hidden":"true"}},[e._v("#")]),e._v(" インストール")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo apt-get update && sudo apt-get -y install apache2\n")])])]),a("h4",{attrs:{id:"必要なモジュールの有効化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#必要なモジュールの有効化","aria-hidden":"true"}},[e._v("#")]),e._v(" 必要なモジュールの有効化")]),e._v(" "),a("p",[e._v("proxy, proxy_http, proxy_wstunnel module をインストールします")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo a2enmod proxy proxy_http proxy_wstunnel\n")])])]),a("h4",{attrs:{id:"リバースプロキシの設定例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#リバースプロキシの設定例","aria-hidden":"true"}},[e._v("#")]),e._v(" リバースプロキシの設定例")]),e._v(" "),a("p",[e._v("ここではリバースプロキシに関する箇所を抜粋して記載しています。")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<IfModule mod_ssl.c>\n  <VirtualHost _default_:443>\n    ...\n    ###\n    # reverse proxy to crowi\n    # Header に Host: example.com を追加するため\n    ProxyPreserveHost On\n    # HTTPS利用時: Header に x-forwarded-proto: https を追加するため\n    RequestHeader set x-forwarded-proto 'https'\n    # Apache では static assets で 304 が返らないことがあるので ETag を無効化する\n    <ifModule mod_headers.c>\n            Header unset ETag\n    </ifModule>\n    FileETag None\n\n    # socket.io の path を rewrite する\n    RewriteEngine On\n    RewriteCond %{REQUEST_URI}  ^/socket.io            [NC]\n    RewriteCond %{QUERY_STRING} transport=websocket    [NC]\n    RewriteRule /(.*) ws://localhost:3000/$1 [P,L]\n\n    ProxyPass / http://localhost:3000/\n    ProxyPassReverse / http://localhost:3000/\n    ...\n  </VirtualHost>\n</IfModule>\n")])])]),a("h4",{attrs:{id:"自動起動の設定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自動起動の設定","aria-hidden":"true"}},[e._v("#")]),e._v(" 自動起動の設定")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo systemctl enable apache2\n")])])]),a("h3",{attrs:{id:"nginx-のインストールと設定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-のインストールと設定","aria-hidden":"true"}},[e._v("#")]),e._v(" Nginx のインストールと設定")]),e._v(" "),a("h4",{attrs:{id:"インストール-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#インストール-5","aria-hidden":"true"}},[e._v("#")]),e._v(" インストール")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo apt-get update && sudo apt-get -y install nginx\n")])])]),a("h4",{attrs:{id:"リバースプロキシの設定例-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#リバースプロキシの設定例-2","aria-hidden":"true"}},[e._v("#")]),e._v(" リバースプロキシの設定例")]),e._v(" "),a("p",[e._v("ここでは HTTPS を利用する設定例を記載しています。 <server> など<>で囲まれている箇所は、適宜環境に合わせて設定してください。")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("upstream growi {\n    server localhost:3000;\n}\n\nmap $http_upgrade $connection_upgrade {\n    default Upgrade;\n    ''      close;\n}\n\nserver {\n    listen 443 ssl spdy;\n    server_name <server>;\n    ssl_certificate <cert_file>;\n    ssl_certificate_key <key_file>;\n\n    location / {\n        proxy_set_header Host $host;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header X-Forwarded-Port $server_port;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_pass http://growi;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection $connection_upgrade;\n        proxy_read_timeout 900s;\n    }\n}\n\nserver {\n    listen 80;\n    server_name <server>;\n    return 301 https://$server_name$request_uri;\n}\n")])])]),a("h4",{attrs:{id:"自動起動の設定-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自動起動の設定-2","aria-hidden":"true"}},[e._v("#")]),e._v(" 自動起動の設定")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo systemctl enable nginx\n")])])])])},[],!1,null,null,null);r.options.__file="ubuntu-server.md";t.default=r.exports}}]);