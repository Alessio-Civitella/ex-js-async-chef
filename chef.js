// In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). Questa funzione accetta un id di una ricetta e deve:
// Recuperare la ricetta da https://dummyjson.com/recipes/{id}
// Estrarre la proprietà userId dalla ricetta
// Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
// Restituire la data di nascita dello chef
// Note del docente
// Scrivi la funzione getChefBirthday(id), che deve:
// Essere asincrona (async).
// Utilizzare await per chiamare le API.
// Restituire una Promise con la data di nascita dello chef.
// Gestire gli errori con try/catch

const getChefBirthday = async (id) => {
    try {
        // Recupera la ricetta
        const response = await fetch(`https://dummyjson.com/recipes/${id}`);
        if (!response.ok) throw new Error("Errore nel recupero della ricetta");
        
        const recipe = await response.json();
        const userId = recipe.userId;
        if (!userId) throw new Error("userId non trovato nella ricetta");
        
        // Recupera le informazioni dello chef
        const response2 = await fetch(`https://dummyjson.com/users/${userId}`);
        if (!response2.ok) throw new Error("Errore nel recupero dello chef");
        
        const user = await response2.json();
        if (!user.birthDate) throw new Error("Data di nascita non disponibile");
        
        return user.birthDate;
    } catch (error) {
        console.error("Errore:", error.message);
        return null;
    }
};

// Esempio di utilizzo
getChefBirthday(2)
    .then((birthday) => console.log("Data di nascita dello chef:", birthday))
    .catch((error) => console.error("Errore nella funzione:", error));
