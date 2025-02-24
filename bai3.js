const students = [
    { name: 'Anna', scores: { math: 85, english: 78, science: 92 } },
    { name: 'Brian', scores: { math: 90, english: 88, science: 76 } },
    { name: 'Clara', scores: { math: 60, english: 70, science: 80 } },
  ];
  
  // Tính điểm trung bình và thêm vào đối tượng
  students.forEach(student => {
    const scores = Object.values(student.scores);
    const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    student.averageScore = parseFloat(average.toFixed(2));
  });
  
  // Tìm sinh viên có điểm trung bình cao nhất
  let topStudent = students.reduce((max, student) => student.averageScore > max.averageScore ? student : max);
  
  console.log("Sinh viên có điểm trung bình cao nhất là:", topStudent.name, `(${topStudent.averageScore})`);
  console.log(students);
  