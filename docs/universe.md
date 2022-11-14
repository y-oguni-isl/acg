# Universe

faceを反転させた巨大なboxに画面上の位置に依存して星を描画させる。
カメラの向きは考慮せずに、画面上のみで計算する。

![](/docs/figures/universe.png)

xyに位置、z軸に時刻を与える simplex noise を複数合成して作ったグラデーションと細かいノイズ（星）を掛けて（図1）、
下ほど横に引き伸ばされる、上から下に流れる白い細かいノイズ（埃、図2）を加算する。

NOTE: 下ほど横に引き伸ばすのは、そうしないと立体感が出ず、画像が流れているようにしか見えなかったため。

> ![](/docs/figures/universe1.png)
> 図1

> ![](/docs/figures/universe2.png)
> 図2
