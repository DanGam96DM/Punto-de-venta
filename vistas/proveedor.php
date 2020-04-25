<?php
  require 'header.php'
?>
<!--Contenido-->
      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
        
        <!-- Main content -->
        <section class="content">
            <div class="row">
              <div class="col-md-12">
                  <div class="box">
                    <div class="box-header with-border">
                          <h1 class="box-title">Proveedor <button class="btn btn-success" onclick="mostrarform(true)"><i class="fa fa-plus-circle"></i> Agregar</button></h1>
                        <div class="box-tools pull-right">
                        </div>
                    </div>
                    <!-- /.box-header -->
                    <!-- centro -->
                    <div class="panel-body table-responsive" id="listadoregistros">
                        <table id="tbllistado" class="table table-striped table-bordered table-condensed table-hover">
                          <thead>
                            <th>opciones</th>
                            <th>Nombre</th>
                            <th>Tipo documento</th>
                            <th>Num documentoo</th>
                            <th>Telefono</th>
                            <th>Email</th>
                          </thead>
                          <tbody>

                          </tbody>
                          <footer>
                            <th>opciones</th>
                            <th>Nombre</th>
                            <th>Tipo documento</th>
                            <th>Num documentoo</th>
                            <th>Telefono</th>
                            <th>Email</th>
                          </footer>
                        </table>
                    </div>
                    <div class="panel-body" id="formularioregistros">
                        <form action="" name="formulario" id="formulario" method="POST">
                          <div class="form-group col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <label>Nombre</label>
                            <input type="hidden" name="idpersona" id="idpersona">
                            <input type="hidden" name="tipo_persona" id="tipo_persona" value="Proveedor">
                            <input type="text" class="form-control" name="nombre" id="nombre" maxlength="100" placeholder="Nombre" required>
                          </div>
                          <div class="form-group col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <label>Tipo Documento</label>
                            <select name="tipo_documento" id="tipo_documento" class="form-control selectpicker">
                                <option value="DPI">DPI</option>
                                <option value="Licencia">Licencia</option>
                                <option value="Fe de edad">Fe de edad</option>
                            </select>
                          </div>
                          <div class="form-group col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <label>Numero Documento</label>
                            <input type="text" name="num_documento" id="num_documento" class="form-control" maxlength="12" >
                          </div>
                          <div class="form-group col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <label>Direccion</label>
                            <input type="text" name="direccion" id="direccion" class="form-control" maxlength="70" >
                          </div>
                          <div class="form-group col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <label>Telefono</label>
                            <input type="text" name="telefono" id="telefono" class="form-control" maxlength="10" >
                          </div>
                          <div class="form-group col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <label>Email</label>
                            <input type="text" name="email" id="email" class="form-control" maxlength="50" >
                          </div>
                          <div class="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <button class="btn btn-primary" type="submit" id="btnGuardar"><i class="fa fa-save"></i> Guardar</button>
                            <button class="btn btn-danger" type="submit" onclick="cancelarform()"><i class="fa fa-arrow-circle-left"></i> Cancelar</button>
                          </div>
                        </form>
                    </div>
                    <!--Fin centro -->
                  </div><!-- /.box -->
              </div><!-- /.col -->
          </div><!-- /.row -->                
      </section><!-- /.content -->

    </div><!-- /.content-wrapper -->
  <!--Fin-Contenido-->
<?php
  require 'footer.php'
?>
<script type="text/javascript" src="scripts/proveedor.js"></script>
