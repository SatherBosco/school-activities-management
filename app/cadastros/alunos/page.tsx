"use client";

import { ConfigProvider, Popconfirm, Space, Table } from "antd";
import AppBar from "../../components/app-bar";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import ptBR from "antd/lib/locale/pt_BR";

type AlunosProp = {
  key: string;
  name: string;
  class: string;
};

export default function Alunos() {
  const [alunos, setAlunos] = useState<AlunosProp[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAlunos();
  }, []);

  const columns = [
    {
      title: "Ação",
      key: "action",
      width: 160,
      render: () => (
        <Space size="middle">
          <a href="/cadastros/alunos/editar">Editar</a>
          <Popconfirm
            title="Deletar Aluno?"
            description="Tem certeza que deseja deletar este aluno?"
            onConfirm={() => {}}
            onCancel={() => {}}
            okText="Sim"
            cancelText="Não"
          >
            <a style={{ color: "red" }}>Deletar</a>
          </Popconfirm>
        </Space>
      ),
    },
    {
      title: "Nome",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Turma",
      dataIndex: "class",
      key: "class",
    },
  ];

  const getAlunos = async () => {
    const dataSource = [
      { key: "1", name: "Alice Martins", class: "1 A" },
      { key: "2", name: "Amanda Dias", class: "1 A" },
      { key: "3", name: "Ana Silva", class: "1 A" },
      { key: "4", name: "Ana Souza", class: "1 A" },
      { key: "5", name: "André Araújo", class: "1 A" },
      { key: "6", name: "Arthur Almeida", class: "1 A" },
      { key: "7", name: "Arthur Pereira", class: "1 A" },
      { key: "8", name: "Beatriz Oliveira", class: "1 A" },
      { key: "9", name: "Beatriz Souza", class: "1 A" },
      { key: "10", name: "Bernardo Almeida", class: "1 A" },
      { key: "11", name: "Bernardo Costa", class: "1 A" },
      { key: "12", name: "Bruna Araújo", class: "1 A" },
      { key: "13", name: "Bruno Cardoso", class: "1 A" },
      { key: "14", name: "Bruno Souza", class: "1 A" },
      { key: "15", name: "Camila Barros", class: "1 A" },
      { key: "16", name: "Carlos Dias", class: "1 A" },
      { key: "17", name: "Carolina Barros", class: "1 A" },
      { key: "18", name: "Cauã Martins", class: "1 A" },
      { key: "19", name: "Clara Gomes", class: "1 A" },
      { key: "20", name: "David Santos", class: "1 A" },
      { key: "21", name: "Diego Ferreira", class: "1 A" },
      { key: "22", name: "Eduardo Silva", class: "1 A" },
      { key: "23", name: "Enzo Almeida", class: "1 A" },
      { key: "24", name: "Erick Araújo", class: "1 A" },
      { key: "25", name: "Felipe Dias", class: "1 A" },
      { key: "26", name: "Felipe Lima", class: "1 A" },
      { key: "27", name: "Fernanda Araújo", class: "1 A" },
      { key: "28", name: "Gabriel Barros", class: "1 A" },
      { key: "29", name: "Gabriel Souza", class: "1 A" },
      { key: "30", name: "Gabriela Ferreira", class: "1 A" },
      { key: "31", name: "Gabriela Lima", class: "1 A" },
      { key: "32", name: "Giovanna Almeida", class: "1 A" },
      { key: "33", name: "Gustavo Lima", class: "1 A" },
      { key: "34", name: "Helena Almeida", class: "1 A" },
      { key: "35", name: "Henrique Gomes", class: "1 A" },
      { key: "36", name: "Igor Oliveira", class: "1 A" },
      { key: "37", name: "Isabella Oliveira", class: "1 A" },
      { key: "38", name: "Isabella Santos", class: "1 A" },
      { key: "39", name: "Isadora Souza", class: "1 A" },
      { key: "40", name: "João Mendes", class: "2 A" },
      { key: "41", name: "Júlia Mendes", class: "2 A" },
      { key: "42", name: "Larissa Cardoso", class: "2 A" },
      { key: "43", name: "Laura Pereira", class: "2 A" },
      { key: "44", name: "Laura Santos", class: "2 A" },
      { key: "45", name: "Leonardo Pereira", class: "2 A" },
      { key: "46", name: "Letícia Cardoso", class: "2 A" },
      { key: "47", name: "Lizzy Rodrigues", class: "2 A" },
      { key: "48", name: "Lorena Pereira", class: "2 A" },
      { key: "49", name: "Lucas Oliveira", class: "2 A" },
      { key: "50", name: "Lucas Souza", class: "2 A" },
      { key: "51", name: "Luísa Costa", class: "2 A" },
      { key: "52", name: "Manuela Oliveira", class: "2 A" },
      { key: "53", name: "Marcos Barros", class: "2 A" },
      { key: "54", name: "Maria Mendes", class: "2 A" },
      { key: "55", name: "Mariana Lima", class: "2 A" },
      { key: "56", name: "Marina Silva", class: "2 A" },
      { key: "57", name: "Marina Silva", class: "2 A" },
      { key: "58", name: "Matheus Mendes", class: "2 A" },
      { key: "59", name: "Matheus Oliveira", class: "2 A" },
      { key: "60", name: "Matheus Santos", class: "2 A" },
      { key: "61", name: "Melissa Santos", class: "2 A" },
      { key: "62", name: "Nicolas Rodrigues", class: "2 A" },
      { key: "63", name: "Paulo Cardoso", class: "2 A" },
      { key: "64", name: "Pedro Pereira", class: "2 A" },
      { key: "65", name: "Pedro Santos", class: "2 A" },
      { key: "66", name: "Rafael Silva", class: "2 A" },
      { key: "67", name: "Rafael Silva", class: "2 A" },
      { key: "68", name: "Rafaela Costa", class: "2 A" },
      { key: "69", name: "Rebeca Ferreira", class: "2 A" },
      { key: "70", name: "Sofia Almeida", class: "2 A" },
      { key: "71", name: "Sofia Pereira", class: "2 A" },
      { key: "72", name: "Sophie Martins", class: "2 A" },
      { key: "73", name: "Tomás Ferreira", class: "2 A" },
      { key: "74", name: "Valentina Rodrigues", class: "2 A" },
      { key: "75", name: "Vanessa Dias", class: "2 A" },
      { key: "76", name: "Victor Costa", class: "2 A" },
      { key: "77", name: "Vinicius Martins", class: "2 A" },
      { key: "78", name: "William Gomes", class: "2 A" },
      { key: "79", name: "Yago Rodrigues", class: "2 A" },
      { key: "80", name: "Yasmin Gomes", class: "2 A" },
      { key: "81", name: "Alice Martins", class: "1 A" },
      { key: "82", name: "Amanda Dias", class: "1 A" },
      { key: "83", name: "Ana Silva", class: "1 A" },
      { key: "84", name: "Ana Souza", class: "1 A" },
      { key: "85", name: "André Araújo", class: "1 A" },
      { key: "86", name: "Arthur Almeida", class: "1 A" },
      { key: "87", name: "Arthur Pereira", class: "1 A" },
      { key: "88", name: "Beatriz Oliveira", class: "1 A" },
      { key: "89", name: "Beatriz Souza", class: "1 A" },
      { key: "90", name: "Bernardo Almeida", class: "1 A" },
      { key: "91", name: "Bernardo Costa", class: "1 A" },
      { key: "92", name: "Bruna Araújo", class: "1 A" },
      { key: "93", name: "Bruno Cardoso", class: "1 A" },
      { key: "94", name: "Bruno Souza", class: "1 A" },
      { key: "95", name: "Camila Barros", class: "1 A" },
      { key: "96", name: "Carlos Dias", class: "1 A" },
      { key: "97", name: "Carolina Barros", class: "1 A" },
      { key: "98", name: "Cauã Martins", class: "1 A" },
      { key: "99", name: "Clara Gomes", class: "1 A" },
      { key: "100", name: "David Santos", class: "1 A" },
      { key: "101", name: "Diego Ferreira", class: "1 A" },
      { key: "102", name: "Eduardo Silva", class: "1 A" },
      { key: "103", name: "Enzo Almeida", class: "1 A" },
      { key: "104", name: "Erick Araújo", class: "1 A" },
      { key: "105", name: "Felipe Dias", class: "1 A" },
      { key: "106", name: "Felipe Lima", class: "1 A" },
      { key: "107", name: "Fernanda Araújo", class: "1 A" },
      { key: "108", name: "Gabriel Barros", class: "1 A" },
      { key: "109", name: "Gabriel Souza", class: "1 A" },
      { key: "110", name: "Gabriela Ferreira", class: "1 A" },
      { key: "111", name: "Gabriela Lima", class: "1 A" },
      { key: "112", name: "Giovanna Almeida", class: "1 A" },
      { key: "113", name: "Gustavo Lima", class: "1 A" },
      { key: "114", name: "Helena Almeida", class: "1 A" },
      { key: "115", name: "Henrique Gomes", class: "1 A" },
      { key: "116", name: "Igor Oliveira", class: "1 A" },
      { key: "117", name: "Isabella Oliveira", class: "1 A" },
      { key: "118", name: "Isabella Santos", class: "1 A" },
      { key: "119", name: "Isadora Souza", class: "1 A" },
      { key: "120", name: "João Mendes", class: "2 A" },
      { key: "121", name: "Júlia Mendes", class: "2 A" },
      { key: "122", name: "Larissa Cardoso", class: "2 A" },
      { key: "123", name: "Laura Pereira", class: "2 A" },
      { key: "124", name: "Laura Santos", class: "2 A" },
      { key: "125", name: "Leonardo Pereira", class: "2 A" },
      { key: "126", name: "Letícia Cardoso", class: "2 A" },
      { key: "127", name: "Lizzy Rodrigues", class: "2 A" },
      { key: "128", name: "Lorena Pereira", class: "2 A" },
      { key: "129", name: "Lucas Oliveira", class: "2 A" },
      { key: "130", name: "Lucas Souza", class: "2 A" },
      { key: "131", name: "Luísa Costa", class: "2 A" },
      { key: "132", name: "Manuela Oliveira", class: "2 A" },
      { key: "133", name: "Marcos Barros", class: "2 A" },
      { key: "134", name: "Maria Mendes", class: "2 A" },
      { key: "135", name: "Mariana Lima", class: "2 A" },
      { key: "136", name: "Marina Silva", class: "2 A" },
      { key: "137", name: "Marina Silva", class: "2 A" },
      { key: "138", name: "Matheus Mendes", class: "2 A" },
      { key: "139", name: "Matheus Oliveira", class: "2 A" },
      { key: "140", name: "Matheus Santos", class: "2 A" },
      { key: "141", name: "Melissa Santos", class: "2 A" },
      { key: "142", name: "Nicolas Rodrigues", class: "2 A" },
      { key: "143", name: "Paulo Cardoso", class: "2 A" },
      { key: "144", name: "Pedro Pereira", class: "2 A" },
      { key: "145", name: "Pedro Santos", class: "2 A" },
      { key: "146", name: "Rafael Silva", class: "2 A" },
      { key: "147", name: "Rafael Silva", class: "2 A" },
      { key: "148", name: "Rafaela Costa", class: "2 A" },
      { key: "149", name: "Rebeca Ferreira", class: "2 A" },
      { key: "150", name: "Sofia Almeida", class: "2 A" },
      { key: "151", name: "Sofia Pereira", class: "2 A" },
      { key: "152", name: "Sophie Martins", class: "2 A" },
      { key: "153", name: "Tomás Ferreira", class: "2 A" },
      { key: "154", name: "Valentina Rodrigues", class: "2 A" },
      { key: "155", name: "Vanessa Dias", class: "2 A" },
      { key: "156", name: "Victor Costa", class: "2 A" },
      { key: "157", name: "Vinicius Martins", class: "2 A" },
      { key: "158", name: "William Gomes", class: "2 A" },
      { key: "159", name: "Yago Rodrigues", class: "2 A" },
      { key: "160", name: "Yasmin Gomes", class: "2 A" },
      { key: "161", name: "Alice Martins", class: "1 A" },
      { key: "162", name: "Amanda Dias", class: "1 A" },
      { key: "163", name: "Ana Silva", class: "1 A" },
      { key: "164", name: "Ana Souza", class: "1 A" },
      { key: "165", name: "André Araújo", class: "1 A" },
      { key: "166", name: "Arthur Almeida", class: "1 A" },
      { key: "167", name: "Arthur Pereira", class: "1 A" },
      { key: "168", name: "Beatriz Oliveira", class: "1 A" },
      { key: "169", name: "Beatriz Souza", class: "1 A" },
      { key: "170", name: "Bernardo Almeida", class: "1 A" },
      { key: "171", name: "Bernardo Costa", class: "1 A" },
      { key: "172", name: "Bruna Araújo", class: "1 A" },
      { key: "173", name: "Bruno Cardoso", class: "1 A" },
      { key: "174", name: "Bruno Souza", class: "1 A" },
      { key: "175", name: "Camila Barros", class: "1 A" },
      { key: "176", name: "Carlos Dias", class: "1 A" },
      { key: "177", name: "Carolina Barros", class: "1 A" },
      { key: "178", name: "Cauã Martins", class: "1 A" },
      { key: "179", name: "Clara Gomes", class: "1 A" },
      { key: "180", name: "David Santos", class: "1 A" },
      { key: "181", name: "Diego Ferreira", class: "1 A" },
      { key: "182", name: "Eduardo Silva", class: "1 A" },
      { key: "183", name: "Enzo Almeida", class: "1 A" },
      { key: "184", name: "Erick Araújo", class: "1 A" },
      { key: "185", name: "Felipe Dias", class: "1 A" },
      { key: "186", name: "Felipe Lima", class: "1 A" },
      { key: "187", name: "Fernanda Araújo", class: "1 A" },
      { key: "188", name: "Gabriel Barros", class: "1 A" },
      { key: "189", name: "Gabriel Souza", class: "1 A" },
      { key: "190", name: "Gabriela Ferreira", class: "1 A" },
      { key: "191", name: "Gabriela Lima", class: "1 A" },
      { key: "192", name: "Giovanna Almeida", class: "1 A" },
      { key: "193", name: "Gustavo Lima", class: "1 A" },
      { key: "194", name: "Helena Almeida", class: "1 A" },
      { key: "195", name: "Henrique Gomes", class: "1 A" },
      { key: "196", name: "Igor Oliveira", class: "1 A" },
      { key: "197", name: "Isabella Oliveira", class: "1 A" },
      { key: "198", name: "Isabella Santos", class: "1 A" },
      { key: "199", name: "Isadora Souza", class: "1 A" },
      { key: "200", name: "João Mendes", class: "2 A" },
      { key: "201", name: "Júlia Mendes", class: "2 A" },
      { key: "202", name: "Larissa Cardoso", class: "2 A" },
      { key: "203", name: "Laura Pereira", class: "2 A" },
      { key: "204", name: "Laura Santos", class: "2 A" },
      { key: "205", name: "Leonardo Pereira", class: "2 A" },
      { key: "206", name: "Letícia Cardoso", class: "2 A" },
      { key: "207", name: "Lizzy Rodrigues", class: "2 A" },
      { key: "208", name: "Lorena Pereira", class: "2 A" },
      { key: "209", name: "Lucas Oliveira", class: "2 A" },
      { key: "210", name: "Lucas Souza", class: "2 A" },
      { key: "211", name: "Luísa Costa", class: "2 A" },
      { key: "212", name: "Manuela Oliveira", class: "2 A" },
      { key: "213", name: "Marcos Barros", class: "2 A" },
      { key: "214", name: "Maria Mendes", class: "2 A" },
      { key: "215", name: "Mariana Lima", class: "2 A" },
      { key: "216", name: "Marina Silva", class: "2 A" },
      { key: "217", name: "Marina Silva", class: "2 A" },
      { key: "218", name: "Matheus Mendes", class: "2 A" },
      { key: "219", name: "Matheus Oliveira", class: "2 A" },
      { key: "220", name: "Matheus Santos", class: "2 A" },
      { key: "221", name: "Melissa Santos", class: "2 A" },
      { key: "222", name: "Nicolas Rodrigues", class: "2 A" },
      { key: "223", name: "Paulo Cardoso", class: "2 A" },
      { key: "224", name: "Pedro Pereira", class: "2 A" },
      { key: "225", name: "Pedro Santos", class: "2 A" },
      { key: "226", name: "Rafael Silva", class: "2 A" },
      { key: "227", name: "Rafael Silva", class: "2 A" },
      { key: "228", name: "Rafaela Costa", class: "2 A" },
      { key: "229", name: "Rebeca Ferreira", class: "2 A" },
      { key: "230", name: "Sofia Almeida", class: "2 A" },
      { key: "231", name: "Sofia Pereira", class: "2 A" },
      { key: "232", name: "Sophie Martins", class: "2 A" },
      { key: "233", name: "Tomás Ferreira", class: "2 A" },
      { key: "234", name: "Valentina Rodrigues", class: "2 A" },
      { key: "235", name: "Vanessa Dias", class: "2 A" },
      { key: "236", name: "Victor Costa", class: "2 A" },
      { key: "237", name: "Vinicius Martins", class: "2 A" },
      { key: "238", name: "William Gomes", class: "2 A" },
      { key: "239", name: "Yago Rodrigues", class: "2 A" },
      { key: "240", name: "Yasmin Gomes", class: "2 A" },
      { key: "241", name: "Alice Martins", class: "1 A" },
      { key: "242", name: "Amanda Dias", class: "1 A" },
      { key: "243", name: "Ana Silva", class: "1 A" },
      { key: "244", name: "Ana Souza", class: "1 A" },
      { key: "245", name: "André Araújo", class: "1 A" },
      { key: "246", name: "Arthur Almeida", class: "1 A" },
      { key: "247", name: "Arthur Pereira", class: "1 A" },
      { key: "248", name: "Beatriz Oliveira", class: "1 A" },
      { key: "249", name: "Beatriz Souza", class: "1 A" },
      { key: "250", name: "Bernardo Almeida", class: "1 A" },
      { key: "251", name: "Bernardo Costa", class: "1 A" },
      { key: "252", name: "Bruna Araújo", class: "1 A" },
      { key: "253", name: "Bruno Cardoso", class: "1 A" },
      { key: "254", name: "Bruno Souza", class: "1 A" },
      { key: "255", name: "Camila Barros", class: "1 A" },
      { key: "256", name: "Carlos Dias", class: "1 A" },
      { key: "257", name: "Carolina Barros", class: "1 A" },
      { key: "258", name: "Cauã Martins", class: "1 A" },
      { key: "259", name: "Clara Gomes", class: "1 A" },
      { key: "260", name: "David Santos", class: "1 A" },
      { key: "261", name: "Diego Ferreira", class: "1 A" },
      { key: "262", name: "Eduardo Silva", class: "1 A" },
      { key: "263", name: "Enzo Almeida", class: "1 A" },
      { key: "264", name: "Erick Araújo", class: "1 A" },
      { key: "265", name: "Felipe Dias", class: "1 A" },
      { key: "266", name: "Felipe Lima", class: "1 A" },
      { key: "267", name: "Fernanda Araújo", class: "1 A" },
      { key: "268", name: "Gabriel Barros", class: "1 A" },
      { key: "269", name: "Gabriel Souza", class: "1 A" },
      { key: "270", name: "Gabriela Ferreira", class: "1 A" },
      { key: "271", name: "Gabriela Lima", class: "1 A" },
      { key: "272", name: "Giovanna Almeida", class: "1 A" },
      { key: "273", name: "Gustavo Lima", class: "1 A" },
      { key: "274", name: "Helena Almeida", class: "1 A" },
      { key: "275", name: "Henrique Gomes", class: "1 A" },
      { key: "276", name: "Igor Oliveira", class: "1 A" },
      { key: "277", name: "Isabella Oliveira", class: "1 A" },
      { key: "278", name: "Isabella Santos", class: "1 A" },
      { key: "279", name: "Isadora Souza", class: "1 A" },
      { key: "280", name: "João Mendes", class: "2 A" },
      { key: "281", name: "Júlia Mendes", class: "2 A" },
      { key: "282", name: "Larissa Cardoso", class: "2 A" },
      { key: "283", name: "Laura Pereira", class: "2 A" },
      { key: "284", name: "Laura Santos", class: "2 A" },
      { key: "285", name: "Leonardo Pereira", class: "2 A" },
      { key: "286", name: "Letícia Cardoso", class: "2 A" },
      { key: "287", name: "Lizzy Rodrigues", class: "2 A" },
      { key: "288", name: "Lorena Pereira", class: "2 A" },
      { key: "289", name: "Lucas Oliveira", class: "2 A" },
      { key: "290", name: "Lucas Souza", class: "2 A" },
      { key: "291", name: "Luísa Costa", class: "2 A" },
      { key: "292", name: "Manuela Oliveira", class: "2 A" },
      { key: "293", name: "Marcos Barros", class: "2 A" },
      { key: "294", name: "Maria Mendes", class: "2 A" },
      { key: "295", name: "Mariana Lima", class: "2 A" },
      { key: "296", name: "Marina Silva", class: "2 A" },
      { key: "297", name: "Marina Silva", class: "2 A" },
      { key: "298", name: "Matheus Mendes", class: "2 A" },
      { key: "299", name: "Matheus Oliveira", class: "2 A" },
      { key: "300", name: "Matheus Santos", class: "2 A" },
      { key: "301", name: "Melissa Santos", class: "2 A" },
      { key: "302", name: "Nicolas Rodrigues", class: "2 A" },
      { key: "303", name: "Paulo Cardoso", class: "2 A" },
      { key: "304", name: "Pedro Pereira", class: "2 A" },
      { key: "305", name: "Pedro Santos", class: "2 A" },
      { key: "306", name: "Rafael Silva", class: "2 A" },
      { key: "307", name: "Rafael Silva", class: "2 A" },
      { key: "308", name: "Rafaela Costa", class: "2 A" },
      { key: "309", name: "Rebeca Ferreira", class: "2 A" },
      { key: "310", name: "Sofia Almeida", class: "2 A" },
      { key: "311", name: "Sofia Pereira", class: "2 A" },
      { key: "312", name: "Sophie Martins", class: "2 A" },
      { key: "313", name: "Tomás Ferreira", class: "2 A" },
      { key: "314", name: "Valentina Rodrigues", class: "2 A" },
      { key: "315", name: "Vanessa Dias", class: "2 A" },
      { key: "316", name: "Victor Costa", class: "2 A" },
      { key: "317", name: "Vinicius Martins", class: "2 A" },
      { key: "318", name: "William Gomes", class: "2 A" },
      { key: "319", name: "Yago Rodrigues", class: "2 A" },
      { key: "320", name: "Yasmin Gomes", class: "2 A" },
      { key: "321", name: "Alice Martins", class: "1 A" },
      { key: "322", name: "Amanda Dias", class: "1 A" },
      { key: "323", name: "Ana Silva", class: "1 A" },
      { key: "324", name: "Ana Souza", class: "1 A" },
      { key: "325", name: "André Araújo", class: "1 A" },
      { key: "326", name: "Arthur Almeida", class: "1 A" },
      { key: "327", name: "Arthur Pereira", class: "1 A" },
      { key: "328", name: "Beatriz Oliveira", class: "1 A" },
      { key: "329", name: "Beatriz Souza", class: "1 A" },
      { key: "330", name: "Bernardo Almeida", class: "1 A" },
      { key: "331", name: "Bernardo Costa", class: "1 A" },
      { key: "332", name: "Bruna Araújo", class: "1 A" },
      { key: "333", name: "Bruno Cardoso", class: "1 A" },
      { key: "334", name: "Bruno Souza", class: "1 A" },
      { key: "335", name: "Camila Barros", class: "1 A" },
      { key: "336", name: "Carlos Dias", class: "1 A" },
      { key: "337", name: "Carolina Barros", class: "1 A" },
      { key: "338", name: "Cauã Martins", class: "1 A" },
      { key: "339", name: "Clara Gomes", class: "1 A" },
      { key: "340", name: "David Santos", class: "1 A" },
      { key: "341", name: "Diego Ferreira", class: "1 A" },
      { key: "342", name: "Eduardo Silva", class: "1 A" },
      { key: "343", name: "Enzo Almeida", class: "1 A" },
      { key: "344", name: "Erick Araújo", class: "1 A" },
      { key: "345", name: "Felipe Dias", class: "1 A" },
      { key: "346", name: "Felipe Lima", class: "1 A" },
      { key: "347", name: "Fernanda Araújo", class: "1 A" },
      { key: "348", name: "Gabriel Barros", class: "1 A" },
      { key: "349", name: "Gabriel Souza", class: "1 A" },
      { key: "350", name: "Gabriela Ferreira", class: "1 A" },
      { key: "351", name: "Gabriela Lima", class: "1 A" },
      { key: "352", name: "Giovanna Almeida", class: "1 A" },
      { key: "353", name: "Gustavo Lima", class: "1 A" },
      { key: "354", name: "Helena Almeida", class: "1 A" },
      { key: "355", name: "Henrique Gomes", class: "1 A" },
      { key: "356", name: "Igor Oliveira", class: "1 A" },
      { key: "357", name: "Isabella Oliveira", class: "1 A" },
      { key: "358", name: "Isabella Santos", class: "1 A" },
      { key: "359", name: "Isadora Souza", class: "1 A" },
      { key: "360", name: "João Mendes", class: "2 A" },
      { key: "361", name: "Júlia Mendes", class: "2 A" },
      { key: "362", name: "Larissa Cardoso", class: "2 A" },
      { key: "363", name: "Laura Pereira", class: "2 A" },
      { key: "364", name: "Laura Santos", class: "2 A" },
      { key: "365", name: "Leonardo Pereira", class: "2 A" },
      { key: "366", name: "Letícia Cardoso", class: "2 A" },
      { key: "367", name: "Lizzy Rodrigues", class: "2 A" },
      { key: "368", name: "Lorena Pereira", class: "2 A" },
      { key: "369", name: "Lucas Oliveira", class: "2 A" },
      { key: "370", name: "Lucas Souza", class: "2 A" },
      { key: "371", name: "Luísa Costa", class: "2 A" },
      { key: "372", name: "Manuela Oliveira", class: "2 A" },
      { key: "373", name: "Marcos Barros", class: "2 A" },
      { key: "374", name: "Maria Mendes", class: "2 A" },
      { key: "375", name: "Mariana Lima", class: "2 A" },
      { key: "376", name: "Marina Silva", class: "2 A" },
      { key: "377", name: "Marina Silva", class: "2 A" },
      { key: "378", name: "Matheus Mendes", class: "2 A" },
      { key: "379", name: "Matheus Oliveira", class: "2 A" },
      { key: "380", name: "Matheus Santos", class: "2 A" },
      { key: "381", name: "Melissa Santos", class: "2 A" },
      { key: "382", name: "Nicolas Rodrigues", class: "2 A" },
      { key: "383", name: "Paulo Cardoso", class: "2 A" },
      { key: "384", name: "Pedro Pereira", class: "2 A" },
      { key: "385", name: "Pedro Santos", class: "2 A" },
      { key: "386", name: "Rafael Silva", class: "2 A" },
      { key: "387", name: "Rafael Silva", class: "2 A" },
      { key: "388", name: "Rafaela Costa", class: "2 A" },
      { key: "389", name: "Rebeca Ferreira", class: "2 A" },
      { key: "390", name: "Sofia Almeida", class: "2 A" },
      { key: "391", name: "Sofia Pereira", class: "2 A" },
      { key: "392", name: "Sophie Martins", class: "2 A" },
      { key: "393", name: "Tomás Ferreira", class: "2 A" },
      { key: "394", name: "Valentina Rodrigues", class: "2 A" },
      { key: "395", name: "Vanessa Dias", class: "2 A" },
      { key: "396", name: "Victor Costa", class: "2 A" },
      { key: "397", name: "Vinicius Martins", class: "2 A" },
      { key: "398", name: "William Gomes", class: "2 A" },
      { key: "399", name: "Yago Rodrigues", class: "2 A" },
      { key: "400", name: "Yasmin Gomes", class: "2 A" },
      { key: "401", name: "Alice Martins", class: "1 A" },
      { key: "402", name: "Amanda Dias", class: "1 A" },
      { key: "403", name: "Ana Silva", class: "1 A" },
      { key: "404", name: "Ana Souza", class: "1 A" },
      { key: "405", name: "André Araújo", class: "1 A" },
      { key: "406", name: "Arthur Almeida", class: "1 A" },
      { key: "407", name: "Arthur Pereira", class: "1 A" },
      { key: "408", name: "Beatriz Oliveira", class: "1 A" },
      { key: "409", name: "Beatriz Souza", class: "1 A" },
      { key: "410", name: "Bernardo Almeida", class: "1 A" },
      { key: "411", name: "Bernardo Costa", class: "1 A" },
      { key: "412", name: "Bruna Araújo", class: "1 A" },
      { key: "413", name: "Bruno Cardoso", class: "1 A" },
      { key: "414", name: "Bruno Souza", class: "1 A" },
      { key: "415", name: "Camila Barros", class: "1 A" },
      { key: "416", name: "Carlos Dias", class: "1 A" },
      { key: "417", name: "Carolina Barros", class: "1 A" },
      { key: "418", name: "Cauã Martins", class: "1 A" },
      { key: "419", name: "Clara Gomes", class: "1 A" },
      { key: "420", name: "David Santos", class: "1 A" },
      { key: "421", name: "Diego Ferreira", class: "1 A" },
      { key: "422", name: "Eduardo Silva", class: "1 A" },
      { key: "423", name: "Enzo Almeida", class: "1 A" },
      { key: "424", name: "Erick Araújo", class: "1 A" },
      { key: "425", name: "Felipe Dias", class: "1 A" },
      { key: "426", name: "Felipe Lima", class: "1 A" },
      { key: "427", name: "Fernanda Araújo", class: "1 A" },
      { key: "428", name: "Gabriel Barros", class: "1 A" },
      { key: "429", name: "Gabriel Souza", class: "1 A" },
      { key: "430", name: "Gabriela Ferreira", class: "1 A" },
      { key: "431", name: "Gabriela Lima", class: "1 A" },
      { key: "432", name: "Giovanna Almeida", class: "1 A" },
      { key: "433", name: "Gustavo Lima", class: "1 A" },
      { key: "434", name: "Helena Almeida", class: "1 A" },
      { key: "435", name: "Henrique Gomes", class: "1 A" },
      { key: "436", name: "Igor Oliveira", class: "1 A" },
      { key: "437", name: "Isabella Oliveira", class: "1 A" },
      { key: "438", name: "Isabella Santos", class: "1 A" },
      { key: "439", name: "Isadora Souza", class: "1 A" },
      { key: "440", name: "João Mendes", class: "2 A" },
      { key: "441", name: "Júlia Mendes", class: "2 A" },
      { key: "442", name: "Larissa Cardoso", class: "2 A" },
      { key: "443", name: "Laura Pereira", class: "2 A" },
      { key: "444", name: "Laura Santos", class: "2 A" },
      { key: "445", name: "Leonardo Pereira", class: "2 A" },
      { key: "446", name: "Letícia Cardoso", class: "2 A" },
      { key: "447", name: "Lizzy Rodrigues", class: "2 A" },
      { key: "448", name: "Lorena Pereira", class: "2 A" },
      { key: "449", name: "Lucas Oliveira", class: "2 A" },
      { key: "450", name: "Lucas Souza", class: "2 A" },
      { key: "451", name: "Luísa Costa", class: "2 A" },
      { key: "452", name: "Manuela Oliveira", class: "2 A" },
      { key: "453", name: "Marcos Barros", class: "2 A" },
      { key: "454", name: "Maria Mendes", class: "2 A" },
      { key: "455", name: "Mariana Lima", class: "2 A" },
      { key: "456", name: "Marina Silva", class: "2 A" },
      { key: "457", name: "Marina Silva", class: "2 A" },
      { key: "458", name: "Matheus Mendes", class: "2 A" },
      { key: "459", name: "Matheus Oliveira", class: "2 A" },
      { key: "460", name: "Matheus Santos", class: "2 A" },
      { key: "461", name: "Melissa Santos", class: "2 A" },
      { key: "462", name: "Nicolas Rodrigues", class: "2 A" },
      { key: "463", name: "Paulo Cardoso", class: "2 A" },
      { key: "464", name: "Pedro Pereira", class: "2 A" },
      { key: "465", name: "Pedro Santos", class: "2 A" },
      { key: "466", name: "Rafael Silva", class: "2 A" },
      { key: "467", name: "Rafael Silva", class: "2 A" },
      { key: "468", name: "Rafaela Costa", class: "2 A" },
      { key: "469", name: "Rebeca Ferreira", class: "2 A" },
      { key: "470", name: "Sofia Almeida", class: "2 A" },
      { key: "471", name: "Sofia Pereira", class: "2 A" },
      { key: "472", name: "Sophie Martins", class: "2 A" },
      { key: "473", name: "Tomás Ferreira", class: "2 A" },
      { key: "474", name: "Valentina Rodrigues", class: "2 A" },
      { key: "475", name: "Vanessa Dias", class: "2 A" },
      { key: "476", name: "Victor Costa", class: "2 A" },
      { key: "477", name: "Vinicius Martins", class: "2 A" },
      { key: "478", name: "William Gomes", class: "2 A" },
      { key: "479", name: "Yago Rodrigues", class: "2 A" },
      { key: "480", name: "Yasmin Gomes", class: "2 A" },
      { key: "481", name: "Alice Martins", class: "1 A" },
      { key: "482", name: "Amanda Dias", class: "1 A" },
      { key: "483", name: "Ana Silva", class: "1 A" },
      { key: "484", name: "Ana Souza", class: "1 A" },
      { key: "485", name: "André Araújo", class: "1 A" },
      { key: "486", name: "Arthur Almeida", class: "1 A" },
      { key: "487", name: "Arthur Pereira", class: "1 A" },
      { key: "488", name: "Beatriz Oliveira", class: "1 A" },
      { key: "489", name: "Beatriz Souza", class: "1 A" },
      { key: "490", name: "Bernardo Almeida", class: "1 A" },
      { key: "491", name: "Bernardo Costa", class: "1 A" },
      { key: "492", name: "Bruna Araújo", class: "1 A" },
      { key: "493", name: "Bruno Cardoso", class: "1 A" },
      { key: "494", name: "Bruno Souza", class: "1 A" },
      { key: "495", name: "Camila Barros", class: "1 A" },
      { key: "496", name: "Carlos Dias", class: "1 A" },
      { key: "497", name: "Carolina Barros", class: "1 A" },
      { key: "498", name: "Cauã Martins", class: "1 A" },
      { key: "499", name: "Clara Gomes", class: "1 A" },
      { key: "500", name: "David Santos", class: "1 A" },
      { key: "501", name: "Diego Ferreira", class: "1 A" },
      { key: "502", name: "Eduardo Silva", class: "1 A" },
      { key: "503", name: "Enzo Almeida", class: "1 A" },
      { key: "504", name: "Erick Araújo", class: "1 A" },
      { key: "505", name: "Felipe Dias", class: "1 A" },
      { key: "506", name: "Felipe Lima", class: "1 A" },
      { key: "507", name: "Fernanda Araújo", class: "1 A" },
      { key: "508", name: "Gabriel Barros", class: "1 A" },
      { key: "509", name: "Gabriel Souza", class: "1 A" },
      { key: "510", name: "Gabriela Ferreira", class: "1 A" },
      { key: "511", name: "Gabriela Lima", class: "1 A" },
      { key: "512", name: "Giovanna Almeida", class: "1 A" },
      { key: "513", name: "Gustavo Lima", class: "1 A" },
      { key: "514", name: "Helena Almeida", class: "1 A" },
      { key: "515", name: "Henrique Gomes", class: "1 A" },
      { key: "516", name: "Igor Oliveira", class: "1 A" },
      { key: "517", name: "Isabella Oliveira", class: "1 A" },
      { key: "518", name: "Isabella Santos", class: "1 A" },
      { key: "519", name: "Isadora Souza", class: "1 A" },
      { key: "520", name: "João Mendes", class: "2 A" },
      { key: "521", name: "Júlia Mendes", class: "2 A" },
      { key: "522", name: "Larissa Cardoso", class: "2 A" },
      { key: "523", name: "Laura Pereira", class: "2 A" },
      { key: "524", name: "Laura Santos", class: "2 A" },
      { key: "525", name: "Leonardo Pereira", class: "2 A" },
      { key: "526", name: "Letícia Cardoso", class: "2 A" },
      { key: "527", name: "Lizzy Rodrigues", class: "2 A" },
      { key: "528", name: "Lorena Pereira", class: "2 A" },
      { key: "529", name: "Lucas Oliveira", class: "2 A" },
      { key: "530", name: "Lucas Souza", class: "2 A" },
      { key: "531", name: "Luísa Costa", class: "2 A" },
      { key: "532", name: "Manuela Oliveira", class: "2 A" },
      { key: "533", name: "Marcos Barros", class: "2 A" },
      { key: "534", name: "Maria Mendes", class: "2 A" },
      { key: "535", name: "Mariana Lima", class: "2 A" },
      { key: "536", name: "Marina Silva", class: "2 A" },
      { key: "537", name: "Marina Silva", class: "2 A" },
      { key: "538", name: "Matheus Mendes", class: "2 A" },
      { key: "539", name: "Matheus Oliveira", class: "2 A" },
      { key: "540", name: "Matheus Santos", class: "2 A" },
      { key: "541", name: "Melissa Santos", class: "2 A" },
      { key: "542", name: "Nicolas Rodrigues", class: "2 A" },
      { key: "543", name: "Paulo Cardoso", class: "2 A" },
      { key: "544", name: "Pedro Pereira", class: "2 A" },
      { key: "545", name: "Pedro Santos", class: "2 A" },
      { key: "546", name: "Rafael Silva", class: "2 A" },
      { key: "547", name: "Rafael Silva", class: "2 A" },
      { key: "548", name: "Rafaela Costa", class: "2 A" },
      { key: "549", name: "Rebeca Ferreira", class: "2 A" },
      { key: "550", name: "Sofia Almeida", class: "2 A" },
      { key: "551", name: "Sofia Pereira", class: "2 A" },
      { key: "552", name: "Sophie Martins", class: "2 A" },
      { key: "553", name: "Tomás Ferreira", class: "2 A" },
      { key: "554", name: "Valentina Rodrigues", class: "2 A" },
      { key: "555", name: "Vanessa Dias", class: "2 A" },
      { key: "556", name: "Victor Costa", class: "2 A" },
      { key: "557", name: "Vinicius Martins", class: "2 A" },
      { key: "558", name: "William Gomes", class: "2 A" },
      { key: "559", name: "Yago Rodrigues", class: "2 A" },
      { key: "560", name: "Yasmin Gomes", class: "2 A" },
      { key: "561", name: "Alice Martins", class: "1 A" },
      { key: "562", name: "Amanda Dias", class: "1 A" },
      { key: "563", name: "Ana Silva", class: "1 A" },
      { key: "564", name: "Ana Souza", class: "1 A" },
      { key: "565", name: "André Araújo", class: "1 A" },
      { key: "566", name: "Arthur Almeida", class: "1 A" },
      { key: "567", name: "Arthur Pereira", class: "1 A" },
      { key: "568", name: "Beatriz Oliveira", class: "1 A" },
      { key: "569", name: "Beatriz Souza", class: "1 A" },
      { key: "570", name: "Bernardo Almeida", class: "1 A" },
      { key: "571", name: "Bernardo Costa", class: "1 A" },
      { key: "572", name: "Bruna Araújo", class: "1 A" },
      { key: "573", name: "Bruno Cardoso", class: "1 A" },
      { key: "574", name: "Bruno Souza", class: "1 A" },
      { key: "575", name: "Camila Barros", class: "1 A" },
      { key: "576", name: "Carlos Dias", class: "1 A" },
      { key: "577", name: "Carolina Barros", class: "1 A" },
      { key: "578", name: "Cauã Martins", class: "1 A" },
      { key: "579", name: "Clara Gomes", class: "1 A" },
      { key: "580", name: "David Santos", class: "1 A" },
      { key: "581", name: "Diego Ferreira", class: "1 A" },
      { key: "582", name: "Eduardo Silva", class: "1 A" },
      { key: "583", name: "Enzo Almeida", class: "1 A" },
      { key: "584", name: "Erick Araújo", class: "1 A" },
      { key: "585", name: "Felipe Dias", class: "1 A" },
      { key: "586", name: "Felipe Lima", class: "1 A" },
      { key: "587", name: "Fernanda Araújo", class: "1 A" },
      { key: "588", name: "Gabriel Barros", class: "1 A" },
      { key: "589", name: "Gabriel Souza", class: "1 A" },
      { key: "590", name: "Gabriela Ferreira", class: "1 A" },
      { key: "591", name: "Gabriela Lima", class: "1 A" },
      { key: "592", name: "Giovanna Almeida", class: "1 A" },
      { key: "593", name: "Gustavo Lima", class: "1 A" },
      { key: "594", name: "Helena Almeida", class: "1 A" },
      { key: "595", name: "Henrique Gomes", class: "1 A" },
      { key: "596", name: "Igor Oliveira", class: "1 A" },
      { key: "597", name: "Isabella Oliveira", class: "1 A" },
      { key: "598", name: "Isabella Santos", class: "1 A" },
      { key: "599", name: "Isadora Souza", class: "1 A" },
      { key: "600", name: "João Mendes", class: "2 A" },
    ];

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setAlunos(dataSource);
    setLoading(false);
  };

  return (
    <main className="bg-secondary min-h-screen flex flex-col items-center">
      <AppBar />
      <div className="max-w-screen-lg flex-1 flex flex-col items-start justify-start pt-32 pb-7 w-full">
        <div className="flex flex-row items-center justify-between w-full mb-7">
          <h1 className="font-semibold text-2xl">Alunos</h1>
          <a
            className="bg-primary-100 rounded-md text-white py-2 drop-shadow-md font-semibold transition-all hover:bg-primary-200 px-10"
            href="/cadastros/alunos/novo"
          >
            Cadastrar Aluno
          </a>
        </div>
        <ConfigProvider
          theme={{
            components: {
              Table: {
                headerColor: "white",
                headerBg: "#1FD6FF",
              },
            },
          }}
          locale={ptBR}
        >
          <Table style={{ width: "100%" }} dataSource={alunos} columns={columns} loading={loading} />
        </ConfigProvider>
      </div>
      <Footer />
    </main>
  );
}
