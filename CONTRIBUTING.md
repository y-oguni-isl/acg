# 3Dモデル
モデルの検索は https://sketchfab.com/search?features=downloadable&licenses=322a749bcfa841b29dff1e8a1bb74b0b&licenses=7c23a1ba438d4306920229c12afcb5f9&licenses=b9ddc40b93e34cdca1fc152f39b9f375&type=models 等でする。ライセンスにNDがついていないほうが良さそう。Free3D (https://free3d.com/) はライセンスの説明がないため避けたほうがいい。
モデルサイズはできれば500KB以下、最大でも5MB以下が良い。GitHub Pages 上で、3MBで読み込みに1秒前後かかる。

viteは public/ を最上位のディレクトリとして扱う (https://vitejs.dev/guide/assets.html#the-public-directory) ため、public/models/model.glb は models/model.glb として参照できる。

# 座標系
横がz、奥がx
TODO: 分かりやすい座標系に直せるなら直したい

# チート
store を window のプロパティに設定してあり、dev tools の console から呼び出して状態を上書きできる。

```typescript
store.setState({ money: 100 })
```
