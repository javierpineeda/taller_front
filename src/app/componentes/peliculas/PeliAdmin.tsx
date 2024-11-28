export const PeliAdmin = () => {
  
    return (
      <div className="container mt-4">
      {/* Texto Centrado */}
      <div className="text-center mb-4">
        <h3>Aquí puedes encontrar lo siguiente:</h3>
        <p>
          Las estadísticas de las películas, la puntuación, el año de salida y el dinero recaudado.
        </p>
      </div>

      {/* Título de la Sección */}
      <h2 className="text-center mb-4">Administrar Películas</h2>

      {/* Tabla de Películas */}
      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Código</th>
              <th>Nombre</th>
              <th>Puntuación</th>
              <th>Año de Salida</th>
              <th>Dinero Recaudado ($)</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Fila de Ejemplo 1 */}
            <tr>
              <td>1</td>
              <td>Misión Imposible</td>
              <td>8.5</td>
              <td>1996</td>
              <td>457,000,000</td>
              <td>
                <img
                  src="https://via.placeholder.com/100"
                  alt="Misión Imposible"
                  className="img-thumbnail"
                  style={{ width: "100px" }}
                />
              </td>
              <td>
                <button className="btn btn-primary btn-sm mr-2">
                  <i className="fas fa-edit"></i> Editar
                </button>
                <button className="btn btn-danger btn-sm">
                  <i className="fas fa-trash-alt"></i> Eliminar
                </button>
              </td>
            </tr>

            {/* Fila de Ejemplo 2 */}
            <tr>
              <td>2</td>
              <td>El Conjuro</td>
              <td>7.5</td>
              <td>2013</td>
              <td>319,000,000</td>
              <td>
                <img
                  src="https://via.placeholder.com/100"
                  alt="El Conjuro"
                  className="img-thumbnail"
                  style={{ width: "100px" }}
                />
              </td>
              <td>
                <button className="btn btn-primary btn-sm mr-2">
                  <i className="fas fa-edit"></i> Editar
                </button>
                <button className="btn btn-danger btn-sm">
                  <i className="fas fa-trash-alt"></i> Eliminar
                </button>
              </td>
            </tr>

            {/* Fila de Ejemplo 3 */}
            <tr>
              <td>3</td>
              <td>La La Land</td>
              <td>8.0</td>
              <td>2016</td>
              <td>446,000,000</td>
              <td>
                <img
                  src="https://via.placeholder.com/100"
                  alt="La La Land"
                  className="img-thumbnail"
                  style={{ width: "100px" }}
                />
              </td>
              <td>
                <button className="btn btn-primary btn-sm mr-2">
                  <i className="fas fa-edit"></i> Editar
                </button>
                <button className="btn btn-danger btn-sm">
                  <i className="fas fa-trash-alt"></i> Eliminar
                </button>
              </td>
            </tr>

            {/* Nueva Fila 4: Gladiador */}
            <tr>
              <td>4</td>
              <td>Gladiador</td>
              <td>8.5</td>
              <td>2000</td>
              <td>457,000,000</td>
              <td>
                <img
                  src="https://via.placeholder.com/100"
                  alt="Gladiador"
                  className="img-thumbnail"
                  style={{ width: "100px" }}
                />
              </td>
              <td>
                <button className="btn btn-primary btn-sm mr-2">
                  <i className="fas fa-edit"></i> Editar
                </button>
                <button className="btn btn-danger btn-sm">
                  <i className="fas fa-trash-alt"></i> Eliminar
                </button>
              </td>
            </tr>

            {/* Nueva Fila 5: Whiplash */}
            <tr>
              <td>5</td>
              <td>Whiplash</td>
              <td>8.5</td>
              <td>2014</td>
              <td>49,000,000</td>
              <td>
                <img
                  src="https://via.placeholder.com/100"
                  alt="Whiplash"
                  className="img-thumbnail"
                  style={{ width: "100px" }}
                />
              </td>
              <td>
                <button className="btn btn-primary btn-sm mr-2">
                  <i className="fas fa-edit"></i> Editar
                </button>
                <button className="btn btn-danger btn-sm">
                  <i className="fas fa-trash-alt"></i> Eliminar
                </button>
              </td>
            </tr>

            {/* Puedes agregar más filas según sea necesario */}
          </tbody>
        </table>
      </div>
    </div>
  );
    
  };
  