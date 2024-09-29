# Harry-Potter-Spell-Book-in-Javascript
Harry Potter Spell Book in Javascript


Ever thought of coding your very own *Harry Potter* spell book using JavaScript? 🌟 Well, I did just that, and here’s a quick breakdown of how I turned code into magic! 🔮

1. **Create a Spell Repository** 📚
   - We start by creating a collection (array) of spells, each having a name, type (charm, curse, etc.), and description. Think of this like your digital *Book of Spells* 📝.
   - Each spell is a simple object with three properties: `name`, `type`, and `description`.

2. **Build a Search System** 🔍
   - We capture user input from a search box and filter spells based on that input. This ensures users can search for their favorite spells as if they were browsing through the *Restricted Section* 🧙‍♂️.
   - The filter checks if a spell’s name contains the search term, and voila – a spell match appears!

3. **Display the Magic** 🧑‍💻
   - For each spell that matches the search, we dynamically generate HTML elements (using `createElement`) to display the spell’s name. But here's the trick: we hide the spell's *type* and *description*… for now 😉.
   - These details only reveal themselves *when clicked*. 🖱️ It’s like casting **Alohomora** on hidden information!

4. **Cast Your Clickable Spell** 🪄
   - By adding a click event listener to each spell, we toggle the hidden details (type and description) on and off. A simple `display: none` and `display: block` switch works like a charm here!
   - Click – it opens. Click again – it closes. Just like your magical spellbook revealing its secrets! 🔑


Demo - https://www.instagram.com/reel/DAd4q0py6_K/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==
