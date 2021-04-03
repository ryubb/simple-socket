# simple-socket

## What is this

@ryubb が npm のパッケージを有効活用するために試作したパッケージです。  
簡単な socket サーバーが立ち上がります。  
github packages に公開していますので、一般で利用することはできません。

## how to use

`$ npm install --dev @ryubb/simple-socket` or `$ yarn add --dev @ryubb/simple-socket`  
`$ simple-socket`

## learn more github packages

※ ここでは、作者である ryubb が github packages を学ぶために試したことを、メモ程度に記載します。  
詳細な解説は公式ドキュメント、もしくは Qiita 等の記事をご覧ください。

### publish

手順のみ

1. `$ npm login --scope=@ryubb --registry=https://npm.pkg.github.com`
2. `$ npm publish`

### install packages

.npmrc に registry の URL を記載してある。  
パッケージをインストールする際に、npm がこの registry URL を参照してインストールする。

また、scope 別に registry URL を切り替えることができる。  
`@scope:registry=hoge`とすることで、インストール時に scope があった場合に、npm が`hoge`を参照してインストールする。

registry URL の設定は若干注意が必要。  
scope なしの registry URL を設定してしまうと、インストール時に全てのパッケージが設定した registry URL を参照してしまう。  
パッケージの中に依存パッケージがあった場合にも同様に設定した registry URL を参照してしまう。  
registry によっては、存在しないパッケージを参照された場合に、npm packages にプロキシするような設定がされていることがあるが、  
github packages はそのような設定がされていない。  
つまり、github packages を registry URL に設定してしまった場合、依存先も含めて github packages に publish する必要がある。  
当該パッケージのみ github packages を、そのパッケージの依存パッケージは npm packages を参照して欲しい場合、
scope 付きの registry URL を設定して、scope なしの registry の設定は行わない。
