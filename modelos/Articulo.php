<?php
    require "../config/Conexion.php";
    Class Articulo
    {
        //implementa nuestro constructor
        public function __construct()
        {
            
        }
        //listar registros
        public function listar(){
            $sql="SELECT a.idarticulo, a.idcategoria, c.nombre as categoria,
                    a.codigo, a.nombre, a.stock, a.descripcion, a.imagen, a.condicion 
                    FROM articulo a INNER JOIN categoria c 
                    ON a.idcategoria = c.idcategoria";
            return ejecutarConsulta($sql);
        }
        //metodo para insertar registros
        public function insertar($idcategoria, $codigo, $nombre, $stock, $descripcion, $imagen){
            $sql="INSERT INTO articulo (idcategoria, codigo, nombre, stock, descripcion, imagen, condicion)
                    VALUES ('$idcategoria', '$codigo', '$nombre', '$stock', '$descripcion', '$imagen', '1')";
            return ejecutarConsulta($sql); 
        }
        //ver datos para editar registros
        public function mostrar($idarticulo){
            $sql="SELECT * FROM articulo WHERE idarticulo='$idarticulo'";
            return ejecutarConsultaSimpleFila($sql);
        }
        //metodo para editar registros
        public function editar($idarticulo, $idcategoria, $codigo, $nombre, $stock, $descripcion, $imagen){
            $sql="UPDATE articulo SET idcategoria='$idcategoria', codigo='$codigo', nombre='$nombre',stock='$stock', 
                    descripcion='$descripcion', imagen='$imagen'
                    WHERE idarticulo='$idarticulo'"; 
            return ejecutarConsulta($sql);
        }
        //desactivar registro
        public function desactivar($idarticulo){
            $sql="UPDATE articulo set condicion='0'
                    WHERE idarticulo='$idarticulo'";
            return ejecutarConsulta($sql);
        }
        //activar registro
        public function activar($idarticulo){
            $sql="UPDATE articulo set condicion='1'
                    WHERE idarticulo='$idarticulo'";
            return ejecutarConsulta($sql);
        }

    }
?>