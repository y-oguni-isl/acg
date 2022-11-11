# laser

本数n:
- n = 1: $\sin(ax + bt) * \mathrm{smoothstep}(c, 0.0, |y|)$ （a,b,c > 0 は定数、tは時間、xは図の横方向、yは図の縦方向）

  ![](/docs/figures/laser.png)

- 2 <= n <= 5: 赤い光線をn本同時に表示
- 6 <= n: n <= 5 の光線に加えて、中央に太さが (n - 5) に比例する白い光線を表示
