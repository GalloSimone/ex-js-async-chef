
async function fetchJson(url) {
    const response = await fetch(url);
    return await response.json();
}

const getChefBirthday = async (id) => {
    let recipe
    try {
        recipe = await fetchJson(`https://dummyjson.com/recipes/${id}`);
    } catch (error) {
        throw new Error("Failed to fetch recipe");
        
    }

    let chef
     try {
        chef = await fetchJson(`https://dummyjson.com/users/${recipe.userId}`);
    
     } catch (error) {
        throw new Error("Failed to fetch chef");
     }
    

    return {
        ...recipe,
        chef:{
            firstName: chef.firstName,
            birthDate: chef.birthDate
        }
    };
}

(async () => {
    try {
         const birthday = await getChefBirthday(1);
          console.log("Chef's birthday:", birthday);
    } catch (error) {
        console.error(error);
    }finally{
        console.log("fine!");
        
    }
   
   
})();
