triangle strip で、定期的に、各頂点の座標を2つ前のpolygonの対応する頂点の座標で置換して、先頭の2つの頂点の座標をairplaneの位置に合わせる。
そのgeometryに図1のようにUVを貼って、shaderで描画。

> ![](/docs/figures/contrail.png)\
> 図1: UV
