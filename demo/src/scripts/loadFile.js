//導入第一章的json檔案
export async function loadChapter1(filePath){
   const jsonFile = await fetch(filePath);
   const rawData = await jsonFile.json();
   rawData.sort(() => Math.random() - 0.5);
   const dataArr=rawData.slice(0, 5);
   return dataArr;


}


