export function validataName(name) {
    const regex = /^[\w\s\-,.ñÑáéíóúÁÉÍÓÚ]{3,50}$/;
    // Verificar que no sea null, undefined, o una cadena vacía, y que cumpla con el formato
    return typeof name === 'string' && name.trim() !== '' && regex.test(name);
}

export function validateCategory(categorySku) {
    // Asumiendo que el SKU es un número de 5 dígitos con ceros a la izquierda
    const regex = /^\d{5}$/;
    // Verificar que no sea null, undefined, o una cadena vacía, y que cumpla con el formato
    return typeof categorySku === 'string' && categorySku.trim() !== '' && regex.test(categorySku);
  }
  


export function validateDescription(description) {
    const regex = /^[\w\s.,\-\(\)¡!¿?ñÑáéíóúÁÉÍÓÚ]{10,200}$/;   
    // Verificar que no sea null, undefined, o una cadena vacía, y que cumpla con el formato
    return typeof description === 'string' && description.trim() !== '' && regex.test(description);
  }
  

export function validateBoolean(value) {
    return typeof value === 'boolean';
  }
  
  export function validatePrice(price) {
    // Asegúrate de convertir el valor a string para usar la expresión regular
    const regex = /^\d+$/;
    // Si el valor es un número, conviértelo a string para validarlo con la expresión regular
    const priceStr = typeof price === 'number' ? price.toString() : price;
  
    // Valida si el valor es un string o un número, y si es un número entero mayor que 0
    return (
      (typeof price === 'string' || typeof price === 'number') &&
      regex.test(priceStr) &&
      Number.isInteger(Number(price)) &&
      Number(price) > 0
    );
  }

  const validations = {
    name: {
      validate: validataName,
      message: 'Invalid product name: Must be between 3 and 50 characters and contain only letters, numbers, spaces, hyphens, commas, and periods'
    },
    category: {
      validate: validateCategory,
      message: 'Invalid category: Must be between 1 and 20 characters and contain only letters and spaces'
    },
    description: {
      validate: validateDescription,
      message: 'Invalid description: Must be between 10 and 200 characters and contain only letters, numbers, spaces, hyphens, commas, and periods'
    },
    price: {
      validate: validatePrice,
      message: 'Invalid price: Must be a positive integer'
    },
    featured: {
      validate: validateBoolean,
      message: 'Invalid boolean value for featured: Must be true or false'
    },
    stock: {
      validate: validateBoolean,
      message: 'Invalid boolean value for stock: Must be true or false'
    },
    visible: {
      validate: validateBoolean,
      message: 'Invalid boolean value for visible: Must be true or false'
    }
  };
  
  export function validateProduct(productData) {
    const errors = [];
  
    for (const [key, validation] of Object.entries(validations)) {
      if (!validation.validate(productData[key])) {
        errors.push({ field: key, message: validation.message });
      }
    }
  
    return errors;
  }
  