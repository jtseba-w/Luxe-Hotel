fetch("https://script.google.com/macros/s/AKfycbx3Be-Lasth8k-xrnf-QKygsdy4-stjepFQ47vJ3e41nC5nPRWIb1PcH_DogNa75fcWYg/exec")
  .then(res => res.json())
  .then(data => {

      const menuMap = {};

      // Build lookup: "burger-1" → item data
      data.forEach(item => {
          const key = `${item.class}-${item.id}`;
          menuMap[key] = item;
      });

      // Fill HTML elements
      document.querySelectorAll("[class]").forEach(el => {

          const className = el.className.trim();  // e.g. burger-1-price
          const parts = className.split("-");     // ["burger","1","price"]

          if (parts.length !== 3) return;

          const [cls, id, field] = parts;
          const key = `${cls}-${id}`;

          const entry = menuMap[key];
          if (!entry) return;

          // field will match your column names exactly
          if (entry[field] !== undefined) {
              el.textContent = entry[field];
          }
      });
  })
  .catch(err => console.error("Menu failed:", err));
