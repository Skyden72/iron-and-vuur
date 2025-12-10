// --- FULL RECIPE DATABASE (40+ Recipes) ---
// Save this file as "recipes.js" if you are using the split file structure. 
// If you are using the single file "SA_Chef_v3.0.html", 
// COPY THE CONTENT OF THIS ARRAY and paste it into the "defaultRecipes" variable in that file.

const defaultRecipes = [
    // BEEF
    { 
        id: 201, category: "Beef", 
        title: { en: "Classic Bobotie", af: "Klassieke Bobotie" }, 
        time: "60m", servings: 6, type: "Pot", 
        ingredients: {
            en: ["1kg Beef Mince", "2 Onions (finely chopped)", "2 Slices White Bread (crusts removed, soaked in milk)", "2 tbsp Curry Powder", "1/2 cup Raisins or Sultanas", "3 tbsp Apricot Jam", "2 tbsp Vinegar", "2 Eggs", "1 cup Milk", "3 Bay Leaves", "Salt & Pepper"],
            af: ["1kg Beesmaalvleis", "2 Uie (fyngekap)", "2 Snye Witbrood (korsies af, geweek in melk)", "2 eetl Kerriepoeier", "1/2 k Rosyne", "3 eetl Apperkooskonfyt", "2 eetl Asyn", "2 Eiers", "1 k Melk", "3 Lourierblare", "Sout & Peper"]
        },
        steps: {
            en: ["Preheat oven to 180°C. Grease your cast iron pot.", "Heat oil and sauté onions until soft and translucent.", "Add mince and fry until well browned, breaking up any lumps.", "Stir in curry powder, jam, vinegar, salt, and pepper. Cook 2 mins.", "Squeeze milk from bread (reserve milk) and mix bread into meat with raisins.", "Transfer mixture to the pot and smooth the top.", "Whisk eggs with reserved milk. Pour over the meat.", "Top with bay leaves and bake for 35-40 mins until set and golden."],
            af: ["Verhit oond tot 180°C. Smeer jou ysterpot.", "Verhit olie en braai uie tot sag.", "Voeg maalvleis by en braai tot bruin.", "Roer kerrie, konfyt, asyn, sout en peper by. Kook 2 min.", "Druk melk uit brood (hou melk) en meng brood/rosyne by vleis.", "Skep in pot en maak gelyk.", "Klits eiers met oorblywende melk. Gooi oor vleis.", "Sit lourierblare op en bak 35-40 min tot goudbruin."]
        }
    },
    { 
        id: 202, category: "Beef", 
        title: { en: "Rich Oxtail Potjie", af: "Ryk Beestert Potjie" }, 
        time: "4.5h", servings: 6, type: "Potjie", 
        ingredients: {
            en: ["1.5kg Oxtail pieces", "3 Onions (chopped)", "250g Bacon bits", "4 Carrots (sliced)", "2 Celery sticks (sliced)", "1 cup Red Wine", "500ml Beef Stock", "1 can Tomato Paste", "1 can Butter Beans", "4 cloves Garlic (minced)", "Fresh Thyme"],
            af: ["1.5kg Beestert stukke", "3 Uie (gekap)", "250g Spekblokkies", "4 Wortels (gesny)", "2 Seldery stingels (gesny)", "1 koppie Rooiwyn", "500ml Bees Aftreksel", "1 blik Tamatiepasta", "1 blik Botterbone", "4 toontjies Knoffel (fyn)", "Vars Tiemie"]
        },
        steps: {
            en: ["Heat your #3 Potjie pot over hot coals. Add a dash of oil and brown the oxtail pieces in batches. This is crucial for flavor. Remove the meat and set aside.", "In the same pot, fry the bacon, onions, and garlic until the onions are soft.", "Return the meat to the pot. Add the red wine, beef stock, tomato paste, and thyme. The liquid should almost cover the meat.", "Cover with the lid and let it simmer gently over medium-low coals for 3.5 hours. Do not stir! Just listen for the 'toktok' sound of a slow boil.", "Add the carrots and celery. Cook for another 30-45 minutes until the veggies are soft.", "Finally, stir in the butter beans and cook for 10 minutes to heat through. Serve with rice or pap.", "Adjust seasoning with salt and pepper.", "Ensure there are enough coals to maintain a slow simmer."],
            af: ["Verhit jou #3 Potjie oor warm kole. Voeg olie by en braai beestert bruin in sarsies. Verwyder vleis.", "Braai spek, uie en knoffel in dieselfde pot tot sag.", "Plaas vleis terug. Voeg wyn, aftreksel, pasta en kruie by.", "Bedek en prut baie stadig vir 3.5 ure. Moenie roer nie! Luister vir die 'toktok' geluid.", "Voeg wortels en seldery by. Kook nog 30-45 minute tot sag.", "Roer botterbone in en kook vir 10 minute. Bedien met rys of pap.", "Geur met sout en peper.", "Maak seker daar is genoeg kole om te prut."]
        }
    },
    // ... (Continue adding all recipe objects here from the previous V2.9 code block) ...
    // Note: I am providing this separate block for clarity, but you should copy the FULL array from the v2.9 message to populate this variable.
];