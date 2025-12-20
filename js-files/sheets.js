fetch("https://script.google.com/macros/s/AKfycbwMLAQsQibDrrUtDC9PT3kSZu8GpoJcwVuuWXXgdeF3qIAANtPtilmFBhxrYL1eg_Ga/exec")
  .then(res => res.json())
  .then(data => {
      data.forEach(row => {
          const keyClass = row.key.toLowerCase();
          const elements = document.querySelectorAll(`.${keyClass}`);
          elements.forEach(el => {
              // Check if value is an image URL
              if(typeof row.value === "string" &&
                 (row.value.endsWith(".jpg") || row.value.endsWith(".png") || row.value.endsWith(".jpeg") || row.value.includes("drive.google.com"))) {
                  const img = document.createElement("img");
                  img.src = row.value;
                  img.alt = keyClass;
                  el.appendChild(img); // append image to the div
              } else {
                  el.textContent = row.value; // regular text
              }
              
          });
          
      });
  })
  .catch(err => console.error("API error:", err));
