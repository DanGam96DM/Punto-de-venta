<?php
    require "../config/Conexion.php";
    Class Categoria
    {
        //implementa nuestro constructor
        public function __construct()
        {
            
        }
        //listar registros
        public function listar(){
            $sql="SELECT * FROM categoria";
            return ejecutarConsulta($sql);
        }
         //listar registros para los select
         public function select(){
            $sql="SELECT * FROM categoria WHERE condicion=1";
            return ejecutarConsulta($sql);
        }
        //metodo para insertar registros
        public function insertar($nombre, $descripcion){
            $sql="INSERT INTO categoria (nombre, descripcion, condicion)
                    VALUES ('$nombre', '$descripcion', '1')";
            return ejecutarConsulta($sql); 
        }
        //ver datos para editar registros
        public function mostrar($idcategoria){
            $sql="SELECT * FROM categoria WHERE idcategoria='$idcategoria'";
            return ejecutarConsultaSimpleFila($sql);
        }
        //metodo para editar registros
        public function editar($idcategoria, $nombre, $descripcion){
            $sql="UPDATE categoria SET nombre='$nombre', descripcion='$descripcion'
                    WHERE idcategoria='$idcategoria'"; 
            return ejecutarConsulta($sql);
        }
        //desactivar registro
        public function desactivar($idcategoria){
            $sql="UPDATE categoria set condicion='0'
                    WHERE idcategoria='$idcategoria'";
            return ejecutarConsulta($sql);
        }
        //activar registro
        public function activar($idcategoria){
            $sql="UPDATE categoria set condicion='1'
                    WHERE idcategoria='$idcategoria'";
            return ejecutarConsulta($sql);
        }

    }
?>