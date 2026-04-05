# HTML Slide Starter

ブラウザで動く16:9 HTMLスライドの汎用テンプレート。
Claude Codeと組み合わせて、自分専用のスライド生成システムに育てていく。


## クイックスタート

1. `decks/01_sample/index.html` をブラウザで開く
2. 矢印キーでスライド操作、右下ボタンでフルスクリーン・PDF書き出し


## 自分のデザインに合わせる

1. `reference/` に参考スライドのスクリーンショットを20〜30枚入れる
   - ファイル名はスライド内容がわかる名前にする
2. Claude Codeに以下を指示:

```
slide-starter/ 以下のファイルを読み込んでください。
- CLAUDE.md, plan.md, README.md, design-guidelines.md, theme/sample.css

その上で reference/ フォルダ内の参考スライド画像を全て分析し、
以下を実行してください。

1. 参考スライド群に共通するデザイン上の特徴を抽出し、
   design-guidelines.md のデザイン原則として言語化する
2. 抽出した原則に基づいて theme/sample.css のCSS変数を更新する
3. 必要に応じて新しいスライドタイプやユーティリティクラスを追加し、
   CLAUDE.md も更新する
4. decks/01_sample/index.html をアップデートする

plan.md の「3層分離モデル」に従い、engine/ は絶対に編集しないこと。
```

3. `decks/01_sample/index.html` をブラウザで確認し、フィードバックで微調整


## 新しいスライドを作る

```
decks/
├── 01_sample/          ← サンプル（参考用に残す）
├── 02_product-launch/  ← 新しいデッキ
│   ├── draft.md        ← 構成Markdown
│   ├── index.html      ← 完成スライド
│   └── assets/         ← デッキ固有の画像
└── 03_quarterly/
    ├── draft.md
    └── index.html
```

1. 伝えたい内容のメモをClaude Codeに渡して構成Markdown（`draft.md`）を作成
2. 構成を確認したら「この構成をHTMLスライドに変換して」と指示
3. CLAUDE.mdの変換ルールに従ってスライドが生成される


## キーボードショートカット

| キー | 操作 |
|------|------|
| → / ↓ / Space | 次のスライド |
| ← / ↑ | 前のスライド |
| F | フルスクリーン切替 |


## PDF書き出し

- 右下の「PDF」ボタン、またはブラウザの印刷機能（Ctrl+P / Cmd+P）
- `?print-scale=120` でスケール調整可能


## 育て方

スライドを作るたびに気づきをシステムに反映する:

| 気づき | 反映先 |
|--------|--------|
| デザインの微調整 | `theme/sample.css` |
| 新しい図解パターン | `theme/sample.css` → `CLAUDE.md` に追記 |
| デザイン原則の変更 | `design-guidelines.md` |
| 変換ルールの改善 | `CLAUDE.md` |
| 構造の変更 | `plan.md` |
