"use client";

import { ConfigProvider, Popconfirm, Space, Table } from "antd";
import AppBar from "../../components/app-bar";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import ptBR from "antd/lib/locale/pt_BR";

type TurmasProp = {
  key: string;
  name: string;
  portProf: string;
  matProf: string;
  qtdAlunos: string;
};

export default function Turmas() {
  const [turmas, setTurmas] = useState<TurmasProp[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTurmas();
  }, []);

  const columns = [
    {
      title: "Ação",
      key: "action",
      width: 160,
      render: () => (
        <Space size="middle">
          <a href="/cadastros/turmas/editar">Editar</a>
          <Popconfirm
            title="Deletar Turma?"
            description="Tem certeza que deseja deletar esta turma?"
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
      title: "Turma",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Prof. Português",
      dataIndex: "portProf",
      key: "portProf",
    },
    {
      title: "Prof. Matemática",
      dataIndex: "matProf",
      key: "matProf",
    },
    {
      title: "Qtd. Alunos",
      dataIndex: "qtdAlunos",
      key: "qtdAlunos",
    },
  ];

  const getTurmas = async () => {
    const dataSource = [
      { key: "1", name: "1 A", portProf: "Victor Costa", matProf: "Melissa Santos", qtdAlunos: "40" },
      { key: "2", name: "1 B", portProf: "Victor Costa", matProf: "Melissa Santos", qtdAlunos: "38" },
      { key: "3", name: "1 C", portProf: "Victor Costa", matProf: "Melissa Santos", qtdAlunos: "42" },
      { key: "4", name: "1 D", portProf: "Victor Costa", matProf: "Melissa Santos", qtdAlunos: "40" },
      { key: "5", name: "2 A", portProf: "Victor Costa", matProf: "Melissa Santos", qtdAlunos: "41" },
      { key: "6", name: "2 B", portProf: "Victor Costa", matProf: "Melissa Santos", qtdAlunos: "39" },
      { key: "7", name: "2 C", portProf: "Victor Costa", matProf: "Melissa Santos", qtdAlunos: "40" },
      { key: "8", name: "2 D", portProf: "Victor Costa", matProf: "Melissa Santos", qtdAlunos: "39" },
      { key: "9", name: "3 A", portProf: "Gabriela Ferreira", matProf: "Melissa Santos", qtdAlunos: "41" },
      { key: "10", name: "3 B", portProf: "Gabriela Ferreira", matProf: "Melissa Santos", qtdAlunos: "42" },
      { key: "11", name: "3 C", portProf: "Gabriela Ferreira", matProf: "Melissa Santos", qtdAlunos: "39" },
      { key: "12", name: "3 D", portProf: "Gabriela Ferreira", matProf: "Melissa Santos", qtdAlunos: "40" },
    ];

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setTurmas(dataSource);
    setLoading(false);
  };

  return (
    <main className="bg-secondary min-h-screen flex flex-col items-center">
      <AppBar />
      <div className="max-w-screen-lg flex-1 flex flex-col items-start justify-start pt-32 pb-7 w-full">
        <div className="flex flex-row items-center justify-between w-full mb-7">
          <h1 className="font-semibold text-2xl">Turmas</h1>
          <a
            className="bg-primary-100 rounded-md text-white py-2 drop-shadow-md font-semibold transition-all hover:bg-primary-200 px-10"
            href="/cadastros/turmas/novo"
          >
            Cadastrar Turma
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
          <Table style={{ width: "100%" }} dataSource={turmas} columns={columns} loading={loading} />
        </ConfigProvider>
      </div>
      <Footer />
    </main>
  );
}
