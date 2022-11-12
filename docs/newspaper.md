# newspaper
モデルの頂点座標を編集して波立たせている。three.jsが提供するmaterialの vertex shader のみを変更できれば良かったが、できなさそうだった。もっとなめらかにアニメーションさせるためにblenderで頂点数を増やすといいかも。

![](/docs/figures/newspaper.png)

位置はこの関数で決定している。tが時刻、(x, y) が座標。
![](/docs/figures/newspaper_position.png)

https://www.desmos.com/calculator/jo2o64hrws
