async function cargarCatalogo() {
    const respuesta = await fetch("catalogo.json");
    const productos = await respuesta.json();
    mostrarProductos(productos);
 }
 
 function mostrarProductos(productos) {
    const contenedor = document.getElementById("productos");
    contenedor.innerHTML = "";
 
    productos.forEach(producto => {
       const item = document.createElement("div");
       item.className = "producto";
       item.onclick = () => abrirModal(producto);
 
       item.innerHTML = `
          <h3>${producto.nombre}</h3>
          <p>Precio: $${producto.precio}</p>
       `;
 
       contenedor.appendChild(item);
    });
 }
 
 function filtrarCatalogo() {
    const categoria = document.getElementById("categoria").value;
 
    fetch("catalogo.json")
       .then(respuesta => respuesta.json())
       .then(productos => {
          const productosFiltrados = categoria
             ? productos.filter(p => p.categoria === categoria)
             : productos;
          mostrarProductos(productosFiltrados);
       });
 }
 
 function ordenarCatalogo() {
    const orden = document.getElementById("orden").value;
 
    fetch("catalogo.json")
       .then(respuesta => respuesta.json())
       .then(productos => {
          productos.sort((a, b) => {
             if (orden === "nombre") {
                return a.nombre.localeCompare(b.nombre);
             } else if (orden === "precio") {
                return a.precio - b.precio;
             }
          });
          mostrarProductos(productos);
       });
 }
 
 function abrirModal(producto) {
    document.getElementById("modalNombre").textContent = producto.nombre;
    document.getElementById("modalDescripcion").textContent = producto.descripcion;
    document.getElementById("modalPrecio").textContent = `$${producto.precio}`;
    document.getElementById("modal").style.display = "block";
 }
 
 function cerrarModal() {
    document.getElementById("modal").style.display = "none";
 }
 
 cargarCatalogo();
 