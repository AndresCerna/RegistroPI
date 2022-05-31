
import React from "react";
import './Registro.css';

const Registro  = () => {
    
    
    
return (
  //--------Inicio del contenedor principal
<div class="main_container">
  <div class="">
    <div class="imagen">
      <div class="texto-titulo">Datos de registro {/**  */}
      </div>
    </div>
    <div class="form_container sombra">
      <form action="#" method="POST" class="formulario">
        <fieldset>
          <legend>Ingrese los datos correctos de su restaurante.</legend>
          <div class="">
            <div class="">
              <div class="contenedor-campos">
                <div class="campo">
                  <label for="name" class="campo__label">Nombre del Restaurante</label>
                  <input placeholder="Nombre Restaurante" type="text" name="name" class="campo__field" required></input>
                </div>

                <div class="campo file-select" >
                  <label for="image" class="campo__label">Logotipo Restaurante</label>
                  <input id="scr-file1" placeholder="Nombre Restaurante" type="file" accept="image/png,image/jpeg" name="image" class="file-select" aria-label="Archivo" required></input>
                </div>

                <div class="campo">
                  <label for="street-address" class="campo__label">Dirección</label>
                  <input placeholder="Dirección" type="text" name="street-address" id="street-address" autocomplete="street-address" class="campo__field" required/>
                </div>


                <div class="campo">
                  <label for="region" class="campo__label">Estado / Provincia</label>
                  <input placeholder="Estado/Provincia" type="text" name="region" id="region" list="items" class="campo__field" required/>
                  <datalist id="items">
                    <option>Aguascalientes</option>
                    <option>Baja California</option>
                    <option>Bajacalifornia Sur</option>
                    <option>Campeche</option>
                    <option>Coahuila</option>
                    <option>Colima</option>
                    <option>Chiapas</option>
                    <option>Chihuahua</option>
                    <option>Durango</option>
                    <option>Distrito Federal</option>
                    <option>Guanajuato</option>
                    <option>Guerrero</option>
                    <option>Hidalgo</option>
                    <option>Jalisco</option>
                    <option>México</option>
                    <option>Mihcoacán</option>
                    <option>Morelos</option>
                    <option>Nayarit</option>
                    <option>Nuevo León</option>
                    <option>Oaxaca</option>
                    <option>Puebla</option>
                    <option>Querétaro</option>
                    <option>Quintana Roo</option>
                    <option>San Luis Potosí</option>
                    <option>Sinaloa</option>
                    <option>Sonora</option>
                    <option>Tabasco</option>
                    <option>Tamaulipas</option>
                    <option>Tlaxcala</option>
                    <option>Veracruz</option>
                    <option>Yucatán</option>
                    <option>Zacatecas</option>

                  </datalist>
                </div>
          
                <div class="campo">
                  <label for="city" class="campo__label">Ciudad</label>
                  <input placeholder="Ciudad" type="text" name="city" id="city" autocomplete="address-level2" class="campo__field" required/>
                </div>

                <div class="campo">
                  <label for="postal-code" class="campo__label">Código Postal</label>
                  <input placeholder="Código Postal" type="text" name="postal-code" id="postal-code" autocomplete="postal-code" maxLength="5" class="campo__field" required/>
                </div>

                <div class="campo">
                  <label for="email" class="campo__label">Correo Eléctronico</label>
                  <input placeholder="e-mail" type="email" name="email" id="email" autocomplete="email" class="campo__field" required/>
                </div>
                
                <div class="campo">
                  <label for="password" class="campo__label">Contraseña</label>
                  <input placeholder="Contraseña" type="password" name="password" id="password" autocomplete="password" class="campo__field" required/>
                </div>

                <div class="campo">
                  <label for="r-password" class="campo__label">Repetir Contraseña</label>
                  <input placeholder="Repetir Contraseña" type="password" name="r-password" id="r-password" autocomplete="r-password" class="campo__field" required/>
                </div>

              </div>
            </div>
            <div class="alinear-derecha wrap flex">
              <button type="submit" class="boton">Avanzar</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
      <footer class="footer">Todos los derechos reservados 2022</footer>
  </div>
</div>
//----------Termina el contenedor principal
    );
}

export default Registro;