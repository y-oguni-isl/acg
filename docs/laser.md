# laser

Let $n$ be the number (or the number of upgrades bought) of lasers,

- if n = 1: $\sin(ax + bt) * \mathrm{smoothstep}(c, 0.0, |y|)$ （where a,b,c > 0 are constants, t is time, x is horizontal axis and y is vertical in the figure）

  ![](/docs/figures/laser.png)

- if $2 \le n \le 5$: 赤い光線をn本同時に表示
- if $6 \le n$: $n \le 5$ の場合の光線に加えて、中央に太さが (n - 5) に比例する白い光線を表示
