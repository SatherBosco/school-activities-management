"use client";

import { ConfigProvider, Table, TableColumnsType } from "antd";
import AppBar from "../../components/app-bar";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import ptBR from "antd/lib/locale/pt_BR";

type NotasProp = {
  key: string;
  name: string;
  1?: string;
  2?: string;
  3?: string;
  4?: string;
  5?: string;
  6?: string;
  7?: string;
  8?: string;
  9?: string;
  10?: string;
  11?: string;
  12?: string;
  13?: string;
  14?: string;
  15?: string;
  16?: string;
  17?: string;
  18?: string;
  19?: string;
  20?: string;
};

export default function Lancar() {
  const [notas, setNotas] = useState<NotasProp[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProvas();
  }, []);

  const columns: TableColumnsType<NotasProp> = [
    {
      title: "Aluno",
      dataIndex: "name",
      key: "name",
      fixed: "left",
      width: 120,
    },
    {
      title: "1",
      dataIndex: "1",
      key: "1",
      align: "center",
      width: 40,
      render: (value) => (
        <input type="text" defaultValue={value} maxLength={1} className="border border-primary-100 rounded-md h-7 w-10 text-center text-lg uppercase" />
      ),
    },
    {
      title: "2",
      dataIndex: "2",
      key: "2",
      align: "center",
      width: 40,
      render: (value) => (
        <input type="text" defaultValue={value} maxLength={1} className="border border-primary-100 rounded-md px-3 h-7 w-10 text-center text-lg uppercase" />
      ),
    },
    {
      title: "3",
      dataIndex: "3",
      key: "3",
      align: "center",
      width: 40,
      render: (value) => (
        <input type="text" defaultValue={value} maxLength={1} className="border border-primary-100 rounded-md h-7 w-10 text-center text-lg uppercase" />
      ),
    },
    {
      title: "4",
      dataIndex: "4",
      key: "4",
      align: "center",
      width: 40,
      render: (value) => (
        <input type="text" defaultValue={value} maxLength={1} className="border border-primary-100 rounded-md h-7 w-10 text-center text-lg uppercase" />
      ),
    },
    {
      title: "5",
      dataIndex: "5",
      key: "5",
      align: "center",
      width: 40,
      render: (value) => (
        <input type="text" defaultValue={value} maxLength={1} className="border border-primary-100 rounded-md h-7 w-10 text-center text-lg uppercase" />
      ),
    },
    {
      title: "6",
      dataIndex: "6",
      key: "6",
      align: "center",
      width: 40,
      render: (value) => (
        <input type="text" defaultValue={value} maxLength={1} className="border border-primary-100 rounded-md h-7 w-10 text-center text-lg uppercase" />
      ),
    },
    {
      title: "7",
      dataIndex: "7",
      key: "7",
      align: "center",
      width: 40,
      render: (value) => (
        <input type="text" defaultValue={value} maxLength={1} className="border border-primary-100 rounded-md h-7 w-10 text-center text-lg uppercase" />
      ),
    },
    {
      title: "8",
      dataIndex: "8",
      key: "8",
      align: "center",
      width: 40,
      render: (value) => (
        <input type="text" defaultValue={value} maxLength={1} className="border border-primary-100 rounded-md h-7 w-10 text-center text-lg uppercase" />
      ),
    },
    {
      title: "9",
      dataIndex: "9",
      key: "9",
      align: "center",
      width: 40,
      render: (value) => (
        <input type="text" defaultValue={value} maxLength={1} className="border border-primary-100 rounded-md h-7 w-10 text-center text-lg uppercase" />
      ),
    },
    {
      title: "10",
      dataIndex: "10",
      key: "10",
      align: "center",
      width: 40,
      render: (value) => (
        <input type="text" defaultValue={value} maxLength={1} className="border border-primary-100 rounded-md h-7 w-10 text-center text-lg uppercase" />
      ),
    },
    {
      title: "11",
      dataIndex: "11",
      key: "11",
      align: "center",
      width: 40,
      render: (value) => (
        <input type="text" defaultValue={value} maxLength={1} className="border border-primary-100 rounded-md h-7 w-10 text-center text-lg uppercase" />
      ),
    },
    {
      title: "12",
      dataIndex: "12",
      key: "12",
      align: "center",
      width: 40,
      render: (value) => (
        <input type="text" defaultValue={value} maxLength={1} className="border border-primary-100 rounded-md h-7 w-10 text-center text-lg uppercase" />
      ),
    },
    {
      title: "13",
      dataIndex: "13",
      key: "13",
      align: "center",
      width: 40,
      render: (value) => (
        <input type="text" defaultValue={value} maxLength={1} className="border border-primary-100 rounded-md h-7 w-10 text-center text-lg uppercase" />
      ),
    },
    {
      title: "14",
      dataIndex: "14",
      key: "14",
      align: "center",
      width: 40,
      render: (value) => (
        <input type="text" defaultValue={value} maxLength={1} className="border border-primary-100 rounded-md h-7 w-10 text-center text-lg uppercase" />
      ),
    },
    {
      title: "15",
      dataIndex: "15",
      key: "15",
      align: "center",
      width: 40,
      render: (value) => (
        <input type="text" defaultValue={value} maxLength={1} className="border border-primary-100 rounded-md h-7 w-10 text-center text-lg uppercase" />
      ),
    },
    {
      title: "16",
      dataIndex: "16",
      key: "16",
      align: "center",
      width: 40,
      render: (value) => (
        <input type="text" defaultValue={value} maxLength={1} className="border border-primary-100 rounded-md h-7 w-10 text-center text-lg uppercase" />
      ),
    },
    {
      title: "17",
      dataIndex: "17",
      key: "17",
      align: "center",
      width: 40,
      render: (value) => (
        <input type="text" defaultValue={value} maxLength={1} className="border border-primary-100 rounded-md h-7 w-10 text-center text-lg uppercase" />
      ),
    },
    {
      title: "18",
      dataIndex: "18",
      key: "18",
      align: "center",
      width: 40,
      render: (value) => (
        <input type="text" defaultValue={value} maxLength={1} className="border border-primary-100 rounded-md h-7 w-10 text-center text-lg uppercase" />
      ),
    },
    {
      title: "19",
      dataIndex: "19",
      key: "19",
      align: "center",
      width: 40,
      render: (value) => (
        <input type="text" defaultValue={value} maxLength={1} className="border border-primary-100 rounded-md h-7 w-10 text-center text-lg uppercase" />
      ),
    },
    {
      title: "20",
      dataIndex: "20",
      key: "20",
      align: "center",
      width: 40,
      render: (value) => (
        <input type="text" defaultValue={value} maxLength={1} className="border border-primary-100 rounded-md h-7 w-10 text-center text-lg uppercase" />
      ),
    },
  ];

  const getProvas = async () => {
    const dataSource = [
      { key: "1", name: "Alice Martins" },
      { key: "3", name: "Ana Silva" },
      { key: "5", name: "André Araújo" },
      { key: "7", name: "Arthur Pereira" },
      { key: "9", name: "Beatriz Souza" },
      { key: "11", name: "Bernardo Costa" },
      { key: "13", name: "Bruno Cardoso" },
      { key: "15", name: "Camila Barros" },
      { key: "17", name: "Carolina Barros" },
      { key: "19", name: "Clara Gomes" },
      { key: "21", name: "Diego Ferreira" },
      { key: "23", name: "Enzo Almeida" },
      { key: "25", name: "Felipe Dias" },
      { key: "27", name: "Fernanda Araújo" },
      { key: "29", name: "Gabriel Souza" },
      { key: "31", name: "Gabriela Lima" },
      { key: "33", name: "Gustavo Lima" },
      { key: "35", name: "Henrique Gomes" },
      { key: "37", name: "Isabella Oliveira" },
      { key: "39", name: "Isadora Souza" },
      { key: "41", name: "Júlia Mendes" },
      { key: "43", name: "Laura Pereira" },
      { key: "45", name: "Leonardo Pereira" },
      { key: "47", name: "Lizzy Rodrigues" },
      { key: "49", name: "Lucas Oliveira" },
      { key: "51", name: "Luísa Costa" },
      { key: "53", name: "Marcos Barros" },
      { key: "55", name: "Mariana Lima" },
      { key: "57", name: "Marina Silva" },
      { key: "59", name: "Matheus Oliveira" },
      { key: "61", name: "Melissa Santos" },
      { key: "63", name: "Paulo Cardoso" },
      { key: "65", name: "Pedro Santos" },
      { key: "67", name: "Rafael Silva" },
      { key: "69", name: "Rebeca Ferreira" },
      { key: "71", name: "Sofia Pereira" },
      { key: "73", name: "Tomás Ferreira" },
      { key: "75", name: "Vanessa Dias" },
      { key: "77", name: "Vinicius Martins" },
      { key: "79", name: "Yago Rodrigues" },
    ];

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setNotas(dataSource);
    setLoading(false);
  };

  return (
    <main className="bg-secondary min-h-screen flex flex-col items-center">
      <AppBar />
      <div className="flex-1 flex flex-col items-start justify-start pt-32 pb-7 w-full px-14">
        <div className="flex flex-row items-center justify-between w-full mb-7">
          <div>
            <h1 className="font-semibold text-2xl">Lançar notas</h1>
            <p className="text-xs">2 Bim. Port. 1 Ano - Português (20/Mai/2024) - Turma: 1 A</p>
          </div>
          <div className="flex flex-row gap-5">
            <button className="bg-primary-100 rounded-md text-white py-2 drop-shadow-md font-semibold transition-all hover:bg-primary-200 px-10">
              Salvar Notas
            </button>
            <a
              className="bg-white rounded-md text-primary-100 py-2 drop-shadow-md font-semibold transition-all hover:bg-gray-100 px-10 cursor-pointer"
              href="/lancar-notas"
            >
              Cancelar
            </a>
          </div>
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
          <Table style={{ width: "100%" }} dataSource={notas} columns={columns} loading={loading} pagination={false} scroll={{ x: "100%", y: 500 }} />
        </ConfigProvider>
      </div>
      <Footer />
    </main>
  );
}
