<?php
class ChatBot {
    private $dbHost = "localhost";
    private $dbUsername = "root";
    private $dbPassword = "";
    private $dbName = "chat_bot";
    private $conn;
    private function connect() {
        $this->conn = mysqli_connect($this->dbHost, $this->dbUsername, $this->dbPassword, $this->dbName);
        if ($this->conn == true) {
            return $this->conn;
        } else {
            return false;
        }
    }
    
    public function getResponse($pergunta) {
        $response = [];
        if ($this->connect() == true) {
            $sql = mysqli_query($this->conn, "SELECT resposta FROM perguntas_respostas WHERE pergunta LIKE '%$pergunta%' LIMIT 2");
            if (mysqli_num_rows($sql) > 0) {
                $data = mysqli_fetch_assoc($sql);
                $response['response'] = $data['resposta'];
                $response['pergunta'] = $pergunta;
            } else {
                $response['error'] = "Peço desculpas..não entendi Meu nivel de informações ainda é limitado para entender perguntas do tipo " . " <span style='color:red;'> $pergunta </span> ". "para eu poder ajudar eu gostaria que você fosse mais específico! tente novamente!";
                $response['pergunta'] = $pergunta;
            }
        }
        return $response;
    }
}


?>
