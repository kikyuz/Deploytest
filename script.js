function checkPassword() {
  const password = document.getElementById("password").value;
  const correctPassword = "123456"; // รหัสผ่านที่ตั้งไว้
  const message = document.getElementById("message");
  
  if (password === correctPassword) {
    // เปลี่ยนเส้นทางไปยังหน้าเซอร์ไพรส์
    window.location.href = "surprise.html"; // เปลี่ยนเป็น URL ของหน้าที่คุณต้องการ
  } else {
    message.textContent = "รหัสผ่านไม่ถูกต้อง ลองอีกครั้ง!";
    message.style.color = "red";
  }
}
