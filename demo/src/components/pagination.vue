<template>
    <ul class="pagination justify-content-center" style="margin:20px 0">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
    
</template>



<script>
document.addEventListener("DOMContentLoaded", function() {
    const pagination = document.getElementById("pagination");
    const pageLinks = pagination.querySelectorAll(".page-item");

    pageLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();  // 防止默認行為（如跳轉到 href）

            // 移除所有項目的 active 類
            pageLinks.forEach(item => item.classList.remove("active"));

            // 將 active 類添加到點擊的項目上
            this.classList.add("active");

            // 這裡可以觸發其他行為，如加載對應頁面的內容
            const pageNumber = this.textContent.trim();
            console.log("Loading content for page:", pageNumber);
            // 在這裡根據 pageNumber 加載對應的內容
        });
    });
});


</script>



<style>

</style>   