const generateBalanceSheet = async () => {
    try {
      const expenses = await Expense.find();
      const users = await User.find(); 
      const balanceSheet = [];
  
      for (const expense of expenses) {
        const userId = expense.userId;
        const user = users.find((user) => user._id === userId);
        if (!user) {
          console.error(`User not found for expense ${expense._id}`);
          continue;
        }
        const userName = user.name;
        const amount = expense.amount;
        const splitMethod = expense.splitMethod; 
  
    
      }
    } catch (error) {
      console.error('Error generating balance sheet:', error);
    }
  };