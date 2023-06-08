function collectPuzzle(...puzzles) {
  // TODO: 在这里写入具体的实现逻辑
  let merge = new Set()
  for (let i = 0; i < puzzles.length; i++) {
    for (let j = 0; j < puzzles[i].length; j++) {
      merge.add(puzzles[i][j])
    }
  }
  return Array.from(merge)
}

// 检测需要，请勿删除
module.exports = collectPuzzle;
