"use client";

import { ConfigProvider, Popconfirm, Space, Table } from "antd";
import AppBar from "../../components/app-bar";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import ptBR from "antd/lib/locale/pt_BR";

type ProfessoresProp = {
  key: string;
  name: string;
  email: string;
  materia: string;
  classes: string;
};

export default function Professores() {
  const [professores, setProfessores] = useState<ProfessoresProp[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProfessores();
  }, []);

  const columns = [
    {
      title: "Ação",
      key: "action",
      width: 160,
      render: () => (
        <Space size="middle">
          <a href="/cadastros/professores/editar">Editar</a>
          <Popconfirm
            title="Deletar Professor?"
            description="Tem certeza que deseja deletar este professor?"
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
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Matéria",
      dataIndex: "materia",
      key: "materia",
    },
    {
      title: "Turmas",
      dataIndex: "classes",
      key: "classes",
    },
  ];

  const getProfessores = async () => {
    const dataSource = [
      {
        key: "1",
        name: "Melissa Santos",
        email: "melissa.santos@outlook.com",
        materia: "Matemática",
        classes: "1 A, 2 A, 3 A, 1 B, 2 B, 3 B, 1 C, 2 C, 3 C, 1 D, 2 D, 3 D",
      },
      { key: "2", name: "Victor Costa", email: "victor.costa@outlook.com", materia: "Português", classes: "1 A, 2 A, 1 B, 2 B, 1 C, 2 C, 1 D, 2 D" },
      { key: "3", name: "Gabriela Ferreira", email: "gabriela.ferreira@outlook.com", materia: "Português", classes: "3 A, 3 B, 3 C, 3 D" },
    ];

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setProfessores(dataSource);
    setLoading(false);
  };

  return (
    <main className="bg-secondary min-h-screen flex flex-col items-center">
      <AppBar />
      <div className="max-w-screen-lg flex-1 flex flex-col items-start justify-start pt-32 pb-7 w-full">
        <div className="flex flex-row items-center justify-between w-full mb-7">
          <h1 className="font-semibold text-2xl">Professores</h1>
          <a
            className="bg-primary-100 rounded-md text-white py-2 drop-shadow-md font-semibold transition-all hover:bg-primary-200 px-10"
            href="/cadastros/professores/novo"
          >
            Cadastrar Professor
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
          <Table style={{ width: "100%" }} dataSource={professores} columns={columns} loading={loading} />
        </ConfigProvider>
      </div>
      <Footer />
    </main>
  );
}
