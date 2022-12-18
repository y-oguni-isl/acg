import type { TutorialName, NewsName, ItemName } from "../../constants"

export default {
    "": "",
    "Enemy Stats": "敵のステータス",
    Upgrades: "アップグレード",
    Laser: "レーザー",
    Autopilot: "自動操縦",
    Hammer: "金槌",
    "ATK×2": "攻撃力×2",
    Vacuum: "アイテム回収",
    Missile: "ミサイル",
    placeholder4: "プレースホルダー4",
    placeholder5: "プレースホルダー5",
    placeholder6: "プレースホルダー6",
    Items: "アイテム",
    Food: "食料",
    Scrap: "スクラップ",
    Stages: "ステージ",
    Earth: "地球",
    Universe: "宇宙",
    Mothership: "敵拠点",
    Weather: "天候",
    Normal: "通常",
    Rain: "雨",
    "in < {{count}} min.": "残り{{count}}分以下",
    Bird: "野鳥",
    Explore: "探索",
    "Lv.": "Lv.",
    Next: "進む",
    Prev: "戻る",
    Settings: "設定",
    "Power Save Mode": "節電モード",
    enabled: "有効化",
    "FPS Counter": "FPSカウンター",
    Resolution: "解像度",
    Quality: "クオリティ",
    High: "高",
    Standard: "標準",
    "Display Language": "表示言語",
    "Reset Progress": "セーブデータを削除",
    Ammo: "弾薬",
    "Open Settings": "設定を表示",
    "Show Credit": "クレジットを表示",
    Tweet: "ツイート",
    Reset: "削除",
    Cancel: "キャンセル",
    Confirm: "確定",
    UFO: "UFO",
    "Weather Effect UFO": "天候操作UFO",
    Jamming: "ジャミング",
    Credits: "クレジット",
    "Are you sure you want to reset your save data?": "セーブデータを削除しますか？",
    Price: "価格",
    Damage: "攻撃力",
    Interval: "間隔",
    "Delete the save data and restart from the beginning.": "セーブデータを削除し、ゲームを初めからやり直します。",
    "Power Save Mode stops rendering the game,\nbut the game still runs in the background.": "パワーセーブモードはゲームのレンダリングを停止しますが、\nバックグラウンドでの動作は継続します。",
    "A FPS counter is added to the bottom-right\ncorner of the screen if enabled.": "有効化すると、FPSカウンターが画面の右下隅に追加されます。",
    "Choose a lower resolution\nif you're having performance issues.": "パフォーマンスの問題がある場合は、解像度を下げてください。",
    "Enemies in the next world will have 500x the HP and money.": "次の世界の敵は、HPとお金が500倍になります。",  // machine translation
    "You have reached the point of singularity and can transcended to a higher plane of existence.": "あなたは特異点に到達し、存在のより高い平面に超越することができます.",  // machine translation
    "Transcendence": "超越",
    "Show Bonus": "ボーナスを表示",
    "Transcending...": "超越...",
    "BGM Volume": "BGMの音量",
    "Choose a Display Language.": "表示言語を選択してください。",
    "Game Opened in Another Tab!": "ゲームが他のタブで開かれています！",
    "This game uses auto-save and will not function properly if it is open in multiple browser tabs. To avoid any issues, the game in this tab has been paused. Please close this tab and continue playing the game in the other tab.": "このゲームは自動セーブを採用しており、複数のブラウザタブで開かれると正しく機能しない可能性があります。問題を避けるため、このタブでのゲームは一時停止されました。このタブを閉じて、他のタブでゲームを続けてください。",
    "Resume the game on this tab": "このタブでゲームを再開する",
    "Loading models...": "モデルを読み込んでいます...",
    "Downloading {{filepath}} (pending)": "{{filepath}} をダウンロードしています (保留中)",
    "Downloading {{filepath}} ({{loaded}}/{{total}})": "{{filepath}} をダウンロードしています ({{loaded}}/{{total}})",
    ...{
        "flavorText-Food": "道中では、元気な食事を準備しておくのが良いです。\n食べ物は、新しい領域を探索するために必要なエネルギーを与えてくれます。",  // machine translation
        "flavorText-Scrap": "少しの工夫と多くのスクラップで、\n私たちは敵を倒すためのミサイルを作ることができます。",  // machine translation
    } satisfies Record<`flavorText-${ItemName}`, string>,
    ...{
        "tutorial-wasd": <>あなたはレーザービームを撃つ戦闘機パイロットです。この世界は平和なので、最初の任務は有害な鳥から農民を守ることです。コントロールは簡単で、<b><i class="ti ti-keyboard mr-1"></i>WASD</b>または画面の端を<b><i class="ti ti-hand-click mr-1"></i>押す</b>ことで移動してターゲットを照準することができます。</>,
        "tutorial-upgrade": <>あなたは今、飛行機の<b><i class="ti ti-chevrons-up mr-1"></i>アップグレード</b>を購入することができます！そのためには、画面の左上の<b>ボタンをクリック</b>してください。</>,
        "tutorial-nextStage": <>あなたは今、<b><i class="ti ti-map-2 mr-1"></i>次のステージ</b>に進むことができます！そのためには、画面の右上の<b>ボタンをクリック</b>してください。</>,
        "tutorial-backToPreviousStage": <>もしこのステージが<b>難しすぎる</b>と感じたら、前のステージに戻ってより多くのアップグレードを取得した後、<b>再度試してみてください</b>。</>,
        "tutorial-weatherEffect": <>特殊な装置を持っている<b><i class="ti ti-ufo mr-1"></i>UFO</b>を破壊する必要があります。これにより、<b>オートパイロット</b>システムに干渉する<b><i class="ti ti-cloud-rain mr-1"></i>環境効果</b>を止めることができます。</>,
    } satisfies Record<`tutorial-${TutorialName}`, preact.ComponentChildren>,
    ...{
        "news-aliensComing-headline": "地球を侵略する宇宙人がやってきます。",
        "news-aliensComing-text": "地球への侵略を企てている宇宙人がいると最近の報告では言われています。彼らに対抗して地球を守る準備をしなければなりません。宇宙人が地球を侵略しようとする理由はたくさんあります。地球は彼らが必要とする資源が豊富で、彼らは私たちを自分たちの種族の脅威と見なしているかもしれません。どんな理由があろうとも、私たちは彼らが地球を支配することを許してはいけません。彼らが来たときに戦う準備をしなければなりません。武器や防御を準備し、それらを使う方法をすべての人に教えなければなりません。必要ならば避難する準備もしなければなりません。宇宙人から地球を守ることが肝心です。彼らと戦う準備をし、勝つためなら何をしてもいいという意思を持たなければなりません。",
        "news-hammer-headline": "UFO研究者がハンマーを空中に浮かせるデバイスを開発",
        "news-hammer-text": "UFO研究者のチームは、ハンマーを空中に浮かせるデバイスを開発したと言います。チームは、このデバイスが「反重力」技術を使って実現していると言っています。このデバイスは、アルミチューブでできたフレームに、上部に磁石が取り付けられています。このデバイスはハンマーの上に置かれ、オンになると、磁石が磁場を作り、ハンマーを浮かせます。このデバイスは、最近数年間で話題になっているUFO研究者のチームが作った最新の発明です。チームは、人間が飛ぶことができると信じているデバイスを作ることを現在作業中だと言っています。",
        "news-ending1-headline": "科学者が高い世界へ移動する方法を見つけた",
        "news-ending1-text": "科学者はようやくシンギュラリティに到達し、その結果、高い世界へ移動することができました。この新しい世界には、この世界には存在しない存在がいます。この突破は、宇宙人の住処を侵略したことによって、科学者が彼らの技術にアクセスすることができた結果です。科学者は、この技術を使って新しい世界へ移動することができました。彼らは今、この世界を支配することを目指しています。この新しい世界の者たちは、これには満足していませんが、彼らは反撃しています。科学者は技術を使って反撃していますが、彼らは最終的にこの世界を支配することができると信じています。彼らは技術を使って軍隊を作り、この新しい世界の者たちと戦う準備をしています。科学者はこの世界を支配することを決意しており、勝つためなら何をしてもいいと考えています。",
    } satisfies Record<`news-${NewsName}-${"headline" | "text"}`, string>
}
