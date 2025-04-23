document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('customerName').value.trim();
    const coffee = document.getElementById('coffeeType').value;
    const quantity = parseInt(document.getElementById('quantity').value);
  
    if (!name || !coffee || quantity <= 0) {
      alert("لطفاً تمام فیلدها را به درستی پر کنید.");
      return;
    }
  
    // تابع تو در تو برای ساخت پیام سفارش
    function buildOrderMessage(coffeeType) {
      switch (coffeeType) {
        case 'espresso':
          return `${name} عزیز، شما ${quantity} عدد اسپرسو سفارش دادید.`;
        case 'latte':
          return `${name} عزیز، شما ${quantity} عدد لاته سفارش دادید.`;
        case 'cappuccino':
          return `${name} عزیز، شما ${quantity} عدد کاپوچینو سفارش دادید.`;
        default:
          return "نوع قهوه انتخاب نشده.";
      }
    }
  
    const message = buildOrderMessage(coffee);
    document.getElementById('orderResult').textContent = message;
  });
  