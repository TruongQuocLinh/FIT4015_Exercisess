const library = {
    Science: { total: 120, borrowed: 30 },
    Literature: { total: 80, borrowed: 25 },
    Math: { total: 100, borrowed: 10 },
    History: { total: 90, borrowed: 50 },
  };
  
  // Tính tổng số sách hiện có sẵn trong thư viện
  const totalAvailable = Object.values(library)
    .reduce((sum, book) => sum + (book.total - book.borrowed), 0);
  
  console.log("Tổng số sách có sẵn:", totalAvailable);
  
  // Tìm loại sách có tỷ lệ mượn cao nhất
  let highestCategory = "";
  let highestRate = 0;
  
  for (const [category, book] of Object.entries(library)) {
    const borrowRate = book.borrowed / book.total;
    if (borrowRate > highestRate) {
      highestRate = borrowRate;
      highestCategory = category;
    }
  }
  
  console.log("Loại sách có tỷ lệ mượn cao nhất:", highestCategory, "với tỷ lệ", highestRate.toFixed(2));
  