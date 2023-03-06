class ProductManager {

    static nroid = 1;

    constructor() {
        this.products = [];
    
    }

    addProduct(code, title,description,price, thumbnail,stock) {
        for(const element of this.products) {
            if(stock < 0 || price < 0 || code === `` || title === '' || description === '' || thumbnail === '') {
                return {error: 'No se pueden ingresar datos en blanco'}
            }
            else
            if(element.code === code) {
                return {error: 'Ese producto ya se encuentra ingresado'}
            }
        }
        let id = ProductManager.nroid++; 
        this.products.push({id,code,title,description,price,thumbnail,stock});
        return this.products;
    }

    getProducts() {
        return this.products;
    }

    getProductsById(id) {
        for(const element of this.products) {
            if(element.id === id) {
                let mensaje =`El producto identificado como: ${id} corresponde a "${element.title}"`;
                return mensaje
            }
        }
        let mensaje =`El producto identificado como: ${id} no corresponde a ningún producto`;
        return mensaje;
    }
}

const productManager = new ProductManager();

console.log('Muestro Lista Vacía');
console.log('**');
productManager.getProducts();
console.log('*******************************')
console.log('**');
console.log('** Agregamos un Registro sin información **');
console.log('**');
productManager.addProduct('', '', 0,'','',0,0);
console.log('**');
console.log('*******************************')
console.log('**');
console.log('** Agregamos el Primer producto **');
console.log('**');
console.log(`ID Autoincremental: ${ProductManager.nroid}`);
productManager.addProduct('A', 'Primer producto A', 'Es la descripción del Artículo A1',1000,'Imagen A1',4);
console.log(productManager.getProducts());
console.log(productManager);
console.log('*******************************')
console.log('**');
console.log('Mostramos artículo ingresado');
productManager.getProducts();
console.log('*******************************')
console.log('**');
console.log('Agregamos un segundo producto');
console.log(`ID Autoincremental: ${ProductManager.nroid}`);
productManager.addProduct('B', 'Segundo producto B', 'Es la descripción del Artículo B',3000,'Imagen B',8);
console.log(ProductManager.nroid);
console.log('*******************************')
console.log('**');
console.log('Agregamos un producto con datos en blanco');
productManager.addProduct('', '', 'Es la descripcion del Articulo', 2000, 'Imagen A2',8);
console.log('**');
console.log('*******************************')
console.log('**');
console.log('Agregamos un producto con codigo repetido');
productManager.addProduct('B', 'Tercer producto C', 'Es la descripción del Artículo C',6000,'Imagen C',38);

// Busco un producto que no existe
console.log('**');
console.log('*******************************')
console.log('**');
console.log('Buscamos el producto con ID:8');
console.log(productManager.getProductsById(8));

// Busco un producto por código
console.log('**');
console.log('*******************************')
console.log('**');
console.log('Buscamos el producto con ID:5');
productManager.getProductsById(2);
