export const capitalizeFirstLetter = (str) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  
  export const capitalizeAllWords = (str) => {
    if (!str) return str;
    return str
      .split(' ') // Dividimos la cadena en palabras
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalizamos cada palabra
      .join(' '); // Unimos las palabras de nuevo en una cadena
  };
  