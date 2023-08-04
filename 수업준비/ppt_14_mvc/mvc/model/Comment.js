// 데이터베이스 선택~~~
exports.commentInfos = () => {
  // sql문 만들고,
  // sql문을 excute(실행) 시키는 코드들
  return [
    {
      id: 1,
      userId: "helloworld",
      date: "2022-10-31",
      comment: "안녕하세요^~^",
    },
    {
      id: 2,
      userId: "happy",
      date: "2022-11-01",
      comment: "반가워유",
    },
    {
      id: 3,
      userId: "lucky",
      date: "2022-11-02",
      comment: "오 신기하군",
    },
    {
      id: 4,
      userId: "bestpart",
      date: "2022-11-02",
      comment: "첫 댓글입니당ㅎㅎ",
    },
  ];
};
