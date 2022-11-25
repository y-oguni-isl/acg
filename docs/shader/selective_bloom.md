# Selective Bloom
example code (https://threejs.org/examples/?q=bloom#webgl_postprocessing_unreal_bloom_selective) からコピペして、色の合成の式を a.rgba + b.rgba から (a.rgb + b.rgb * b.a, a.a) に修正した。
bloomさせるべきオブジェクトのみをレンダリングして、bloom pass に通して、すべてのオブジェクトをレンダリングした結果に加算する。

FIXME: たぶん元のコードではbloomの対象ではないオブジェクトを真っ黒に塗ることで、オブジェクトに隠れた物体は発光しないようにしているが、現状の実装ではそうではなく発光しないオブジェクトをすべて一時的に消しているため、光がオブジェクトを貫通する。
