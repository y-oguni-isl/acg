# Selective Bloom
example code (https://threejs.org/examples/?q=bloom#webgl_postprocessing_unreal_bloom_selective) からコピペして、色の合成の式を rgba <- col1.rgba + col2.rgba から rgba <- vec4(col1.rgb + col2.rgb * col2.a, col1.a) に修正した。
bloomさせるべきオブジェクト以外を真っ黒に塗りつぶしてレンダリングして、bloom pass に通して、すべてのオブジェクトをレンダリングした結果に加算する。
