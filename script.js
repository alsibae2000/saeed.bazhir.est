// جافا سكريبت لإضافة إشعار بسيط عند إرسال النموذج
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // إلغاء الإرسال الافتراضي للنموذج
    alert('تم إرسال الرسالة بنجاح! سنعاود الاتصال بك قريبًا.');
});