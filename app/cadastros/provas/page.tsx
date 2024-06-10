"use client";

import { ConfigProvider, Popconfirm, Space, Table } from "antd";
import AppBar from "../../components/app-bar";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import ptBR from "antd/lib/locale/pt_BR";

type ProvasProp = {
  key: string;
  name: string;
  materia: string;
  date: string;
  classes: string;
  situacao: string;
};

export default function Provas() {
  const [provas, setProvas] = useState<ProvasProp[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProvas();
  }, []);

  const columns = [
    {
      title: "Ação",
      key: "action",
      width: 160,
      render: () => (
        <Space size="middle">
          <a href="/cadastros/provas/editar">Editar</a>
          <Popconfirm
            title="Deletar Prova?"
            description="Tem certeza que deseja deletar esta prova?"
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
      title: "Matéria",
      dataIndex: "materia",
      key: "materia",
    },
    {
      title: "Data",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Turmas",
      dataIndex: "classes",
      key: "classes",
    },
    {
      title: "Situação",
      dataIndex: "situacao",
      key: "situacao",
    },
  ];

  const getProvas = async () => {
    const dataSource = [
      { key: "1", name: "2 Bim. Port. 1 Ano", materia: "Português", date: "20/Mai/2024", classes: "1 A, 1 B, 1 C, 1 D", situacao: "Aguardando notas" },
      { key: "1", name: "2 Bim. Port. 2 Ano", materia: "Português", date: "22/Mai/2024", classes: "2 A, 2 B, 2 C, 2 D", situacao: "Aguardando notas" },
      { key: "1", name: "2 Bim. Port. 3 Ano", materia: "Português", date: "23/Mai/2024", classes: "3 A, 3 B, 3 C, 3 D", situacao: "Aguardando notas" },
      { key: "1", name: "2 Bim. Mat. 1 Ano", materia: "Matemática", date: "21/Mai/2024", classes: "1 A, 1 B, 1 C, 1 D", situacao: "Aguardando notas" },
      { key: "1", name: "2 Bim. Mat. 2 Ano", materia: "Matemática", date: "20/Mai/2024", classes: "2 A, 2 B, 2 C, 2 D", situacao: "Aguardando notas" },
      { key: "1", name: "2 Bim. Mat. 3 Ano", materia: "Matemática", date: "24/Mai/2024", classes: "3 A, 3 B, 3 C, 3 D", situacao: "Aguardando notas" },
      { key: "1", name: "1 Bim. Port. 1 Ano", materia: "Português", date: "25/Mar/2024", classes: "1 A, 1 B, 1 C, 1 D", situacao: "Concluída" },
      { key: "1", name: "1 Bim. Port. 2 Ano", materia: "Português", date: "26/Mar/2024", classes: "2 A, 2 B, 2 C, 2 D", situacao: "Concluída" },
      { key: "1", name: "1 Bim. Port. 3 Ano", materia: "Português", date: "28/Mar/2024", classes: "3 A, 3 B, 3 C, 3 D", situacao: "Concluída" },
      { key: "1", name: "1 Bim. Mat. 1 Ano", materia: "Matemática", date: "27/Mar/2024", classes: "1 A, 1 B, 1 C, 1 D", situacao: "Concluída" },
      { key: "1", name: "1 Bim. Mat. 2 Ano", materia: "Matemática", date: "26/Mar/2024", classes: "2 A, 2 B, 2 C, 2 D", situacao: "Concluída" },
      { key: "1", name: "1 Bim. Mat. 3 Ano", materia: "Matemática", date: "25/Mar/2024", classes: "3 A, 3 B, 3 C, 3 D", situacao: "Concluída" },
      { key: "1", name: "1 Bim. Port. 1 Ano", materia: "Português", date: "27/Mar/2024", classes: "1 A, 1 B, 1 C, 1 D", situacao: "Concluída" },
      { key: "1", name: "1 Bim. Port. 2 Ano", materia: "Português", date: "26/Mar/2024", classes: "2 A, 2 B, 2 C, 2 D", situacao: "Concluída" },
      { key: "1", name: "1 Bim. Port. 3 Ano", materia: "Português", date: "28/Mar/2024", classes: "3 A, 3 B, 3 C, 3 D", situacao: "Concluída" },
      { key: "1", name: "1 Bim. Mat. 1 Ano", materia: "Matemática", date: "25/Mar/2024", classes: "1 A, 1 B, 1 C, 1 D", situacao: "Concluída" },
      { key: "1", name: "1 Bim. Mat. 2 Ano", materia: "Matemática", date: "26/Mar/2024", classes: "2 A, 2 B, 2 C, 2 D", situacao: "Concluída" },
      { key: "1", name: "1 Bim. Mat. 3 Ano", materia: "Matemática", date: "27/Mar/2024", classes: "3 A, 3 B, 3 C, 3 D", situacao: "Concluída" },
      { key: "1", name: "1 Bim. Port. 1 Ano", materia: "Português", date: "28/Mar/2024", classes: "1 A, 1 B, 1 C, 1 D", situacao: "Concluída" },
      { key: "1", name: "1 Bim. Port. 2 Ano", materia: "Português", date: "25/Mar/2024", classes: "2 A, 2 B, 2 C, 2 D", situacao: "Concluída" },
      { key: "1", name: "1 Bim. Port. 3 Ano", materia: "Português", date: "25/Mar/2024", classes: "3 A, 3 B, 3 C, 3 D", situacao: "Concluída" },
      { key: "1", name: "1 Bim. Mat. 1 Ano", materia: "Matemática", date: "25/Mar/2024", classes: "1 A, 1 B, 1 C, 1 D", situacao: "Concluída" },
      { key: "1", name: "1 Bim. Mat. 2 Ano", materia: "Matemática", date: "25/Mar/2024", classes: "2 A, 2 B, 2 C, 2 D", situacao: "Concluída" },
      { key: "1", name: "1 Bim. Mat. 3 Ano", materia: "Matemática", date: "25/Mar/2024", classes: "3 A, 3 B, 3 C, 3 D", situacao: "Concluída" },
      { key: "1", name: "1 Bim. Port. 1 Ano", materia: "Português", date: "25/Mar/2024", classes: "1 A, 1 B, 1 C, 1 D", situacao: "Concluída" },
      { key: "1", name: "1 Bim. Port. 2 Ano", materia: "Português", date: "25/Mar/2024", classes: "2 A, 2 B, 2 C, 2 D", situacao: "Concluída" },
      { key: "1", name: "1 Bim. Port. 3 Ano", materia: "Português", date: "25/Mar/2024", classes: "3 A, 3 B, 3 C, 3 D", situacao: "Concluída" },
      { key: "1", name: "1 Bim. Mat. 1 Ano", materia: "Matemática", date: "25/Mar/2024", classes: "1 A, 1 B, 1 C, 1 D", situacao: "Concluída" },
      { key: "1", name: "1 Bim. Mat. 2 Ano", materia: "Matemática", date: "25/Mar/2024", classes: "2 A, 2 B, 2 C, 2 D", situacao: "Concluída" },
      { key: "1", name: "1 Bim. Mat. 3 Ano", materia: "Matemática", date: "25/Mar/2024", classes: "3 A, 3 B, 3 C, 3 D", situacao: "Concluída" },
      { key: "1", name: "1 Bim. Port. 1 Ano", materia: "Português", date: "25/Mar/2024", classes: "1 A, 1 B, 1 C, 1 D", situacao: "Concluída" },
      { key: "1", name: "1 Bim. Port. 2 Ano", materia: "Português", date: "25/Mar/2024", classes: "2 A, 2 B, 2 C, 2 D", situacao: "Concluída" },
      { key: "1", name: "1 Bim. Port. 3 Ano", materia: "Português", date: "25/Mar/2024", classes: "3 A, 3 B, 3 C, 3 D", situacao: "Concluída" },
      { key: "1", name: "1 Bim. Mat. 1 Ano", materia: "Matemática", date: "25/Mar/2024", classes: "1 A, 1 B, 1 C, 1 D", situacao: "Concluída" },
      { key: "1", name: "1 Bim. Mat. 2 Ano", materia: "Matemática", date: "25/Mar/2024", classes: "2 A, 2 B, 2 C, 2 D", situacao: "Concluída" },
      { key: "1", name: "1 Bim. Mat. 3 Ano", materia: "Matemática", date: "25/Mar/2024", classes: "3 A, 3 B, 3 C, 3 D", situacao: "Concluída" },
    ];

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setProvas(dataSource);
    setLoading(false);
  };

  return (
    <main className="bg-secondary min-h-screen flex flex-col items-center">
      <AppBar />
      <div className="max-w-screen-lg flex-1 flex flex-col items-start justify-start pt-32 pb-7 w-full">
        <div className="flex flex-row items-center justify-between w-full mb-7">
          <h1 className="font-semibold text-2xl">Provas</h1>
          <a
            className="bg-primary-100 rounded-md text-white py-2 drop-shadow-md font-semibold transition-all hover:bg-primary-200 px-10"
            href="/cadastros/provas/novo"
          >
            Cadastrar Prova
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
          <Table style={{ width: "100%" }} dataSource={provas} columns={columns} loading={loading} />
        </ConfigProvider>
      </div>
      <Footer />
    </main>
  );
}
