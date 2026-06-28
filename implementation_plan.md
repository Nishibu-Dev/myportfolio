# User Photo Integration Implementation Plan

ユーザー様自身の写真（`/Users/anna/Desktop/myportfolio` フォルダ内の22枚の写真）を分析・分類し、ホームページに掲載するための実装計画です。
元画像は非常にサイズが大きいため（最大90MB）、Web用にリサイズ・最適化した上で掲載します。

## User Review Required

> [!IMPORTANT]
> - **画像の最適化処理**: 元画像（PNG/JPG）を、Webの表示速度向上のため、macOS標準の画像処理ツール `sips` を使って「幅1600px、画質80%の軽量なJPEG」に自動変換します。元の高解像度写真には一切影響を与えません。
> - **自動ジャンル分類**: 各画像の内容をAIで解析し、「Landscape (風景)」「Portrait (人物)」「Street (ストリート)」などの適切なジャンルに分類します。分類結果はプログラムで管理するデータベース（`main.js`）に反映させます。
> - **各ジャンルTOP写真の選定**: 写真の構図、光、テーマ性をプロの視点から評価し、各ジャンルのTOP画面（インデックス）を飾るのに相応しい写真を1枚ずつ選定します。

## Open Questions

- 特になし（フィードバックがあれば、このプランを更新します）。

## Proposed Changes

### 1. 写真の分析と最適化プロセス

1. **一時的なサムネイル生成**:
   - `sips` コマンドを用い、すべての写真を幅400pxの軽量なプレビュー用JPEGに縮小し、一時フォルダ `/Users/anna/.gemini/antigravity/scratch/portfolio_temp` に出力します。
2. **画像分析とジャンル分類 (AI)**:
   - 軽量化したプレビュー画像をAIが順次確認し、以下の情報を作成します：
     - 被写体・テーマ（風景、ポートレート、スナップ、静物など）
     - 推奨ジャンル
     - 写真のクオリティ評価（TOP写真候補の選定）
3. **本番用画像の書き出し**:
   - 分類とファイル名（例: `landscape_1.jpg`, `portrait_top.jpg` など）が決定した後、`sips` で幅1600px、画質80%のJPEGに変換し、プロジェクトの `/Users/anna/.gemini/antigravity/scratch/portfolio/images/` フォルダに保存します。

---

### 2. コードの修正

#### [MODIFY] [main.js](file:///Users/anna/.gemini/antigravity/scratch/portfolio/main.js)
- `photoData` オブジェクトを、実際の写真ファイル（`landscape_top.jpg`, `landscape_1.jpg`, ...）のリスト、およびAIが画像の内容から付けた仮のタイトル・説明（撮影場所や被写体の特徴から推測）に更新します。

#### [MODIFY] [index.html](file:///Users/anna/.gemini/antigravity/scratch/portfolio/index.html)
- 分類されたジャンル構成（例: 新たに「Still Life」や「Nature」などが追加される場合はメニュー項目）を動的または静的に調整します。

---

## Verification Plan

### Automated Tests
- Python簡易サーバー [http://localhost:8000](http://localhost:8000) を再起動・稼働させた状態で、すべての写真がエラーなく表示されるかを確認します。
- ページの読み込みパフォーマンス（ファイルサイズが適切か）を確認します。

### Manual Verification
- ユーザーにブラウザで確認していただき、ジャンル分けおよびTOP写真の選定結果についてフィードバックを求めます。
