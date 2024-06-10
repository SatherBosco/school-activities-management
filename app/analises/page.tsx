"use client";

import { ConfigProvider, DatePicker, Table, TableColumnsType } from "antd";
import AppBar from "../components/app-bar";
import Footer from "../components/footer";
import { PureComponent, useEffect, useState } from "react";
import ptBR from "antd/lib/locale/pt_BR";
import { message } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, Rectangle, Sector, Tooltip, XAxis, YAxis } from "recharts";

dayjs.extend(customParseFormat);
const dateFormat = "DD/MM/YYYY";

type AnalisesProp = {
  key: string;
  name: string;
  class: string;
  provaName: string;
  nAcertos: string;
  nota: string;
};

type PerTurmaProp = {
  class: string;
  nota: number;
};

type PerMateriaProp = {
  class: string;
  port: number;
  mat: number;
};

const dataPort = [
  { name: "0", value: 10 },
  { name: "1", value: 17 },
  { name: "2", value: 23 },
  { name: "3", value: 10 },
  { name: "4", value: 40 },
  { name: "5", value: 80 },
  { name: "6", value: 100 },
  { name: "7", value: 350 },
  { name: "8", value: 400 },
  { name: "9", value: 280 },
  { name: "10", value: 120 },
];

const dataMat = [
  { name: "0", value: 5 },
  { name: "1", value: 30 },
  { name: "2", value: 26 },
  { name: "3", value: 56 },
  { name: "4", value: 29 },
  { name: "5", value: 200 },
  { name: "6", value: 150 },
  { name: "7", value: 450 },
  { name: "8", value: 300 },
  { name: "9", value: 210 },
  { name: "10", value: 90 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-lg shadow-2xl px-5 py-2">
        <p className="font-light text-sm">
          <strong className="font-medium">Turma: </strong>
          {`${label}`}
        </p>
        <p className="font-light text-sm">
          <strong className="font-medium">Med. Nota: </strong>
          {`${payload[0].value.toFixed(1).replace(".", ",")}`}
        </p>
      </div>
    );
  }

  return null;
};

const CustomTooltipPerMat = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-lg shadow-2xl px-5 py-2">
        <p className="font-light text-sm">
          <strong className="font-medium">Turma: </strong>
          {`${label}`}
        </p>
        <p className="font-light text-sm">
          <strong className="font-medium">Med. Port.: </strong>
          {`${payload[0].value.toFixed(1).replace(".", ",")}`}
        </p>
        <p className="font-light text-sm">
          <strong className="font-medium">Med. Mat.: </strong>
          {`${payload[1].value.toFixed(1).replace(".", ",")}`}
        </p>
      </div>
    );
  }

  return null;
};

export default function Analises() {
  const [analises, setAnalises] = useState<AnalisesProp[]>([]);
  const [dataPerTurma, setDataPerTurma] = useState<PerTurmaProp[]>([]);
  const [dataPerMateria, setDataPerMateria] = useState<PerMateriaProp[]>([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const dataSource = [
        { key: "1", name: "Alice Martins", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,0" },
        { key: "2", name: "Amanda Dias", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "15/20", nota: "7,5" },
        { key: "3", name: "Ana Silva", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "20/20", nota: "10" },
        { key: "4", name: "Ana Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "17/20", nota: "8,5" },
        { key: "5", name: "André Araújo", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,0" },
        { key: "6", name: "Arthur Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "12/20", nota: "6,0" },
        { key: "7", name: "Arthur Pereira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "07/20", nota: "3,5" },
        { key: "8", name: "Beatriz Oliveira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "19/20", nota: "9,5" },
        { key: "9", name: "Beatriz Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "16/20", nota: "8,0" },
        { key: "10", name: "Bernardo Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "16/20", nota: "8,0" },
        { key: "11", name: "Bernardo Costa", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,0" },
        { key: "12", name: "Bruna Araújo", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "19/20", nota: "9,5" },
        { key: "13", name: "Bruno Cardoso", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "20/20", nota: "10" },
        { key: "14", name: "Bruno Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,0" },
        { key: "15", name: "Camila Barros", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "16", name: "Carlos Dias", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "17", name: "Carolina Barros", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "18", name: "Cauã Martins", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "19", name: "Clara Gomes", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "20", name: "David Santos", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "21", name: "Diego Ferreira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "22", name: "Eduardo Silva", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "23", name: "Enzo Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "24", name: "Erick Araújo", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "25", name: "Felipe Dias", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "26", name: "Felipe Lima", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "27", name: "Fernanda Araújo", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "28", name: "Gabriel Barros", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "29", name: "Gabriel Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "30", name: "Gabriela Ferreira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "31", name: "Gabriela Lima", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "32", name: "Giovanna Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "33", name: "Gustavo Lima", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "34", name: "Helena Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "35", name: "Henrique Gomes", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "36", name: "Igor Oliveira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "37", name: "Isabella Oliveira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "38", name: "Isabella Santos", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "39", name: "Isadora Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "40", name: "João Mendes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "41", name: "Júlia Mendes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "42", name: "Larissa Cardoso", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "43", name: "Laura Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "44", name: "Laura Santos", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "45", name: "Leonardo Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "46", name: "Letícia Cardoso", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "47", name: "Lizzy Rodrigues", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "48", name: "Lorena Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "49", name: "Lucas Oliveira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "50", name: "Lucas Souza", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "51", name: "Luísa Costa", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "52", name: "Manuela Oliveira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "53", name: "Marcos Barros", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "54", name: "Maria Mendes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "55", name: "Mariana Lima", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "56", name: "Marina Silva", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "57", name: "Marina Silva", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "58", name: "Matheus Mendes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "59", name: "Matheus Oliveira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "60", name: "Matheus Santos", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "61", name: "Melissa Santos", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "62", name: "Nicolas Rodrigues", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "63", name: "Paulo Cardoso", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "64", name: "Pedro Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "65", name: "Pedro Santos", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "66", name: "Rafael Silva", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "67", name: "Rafael Silva", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "68", name: "Rafaela Costa", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "69", name: "Rebeca Ferreira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "70", name: "Sofia Almeida", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "71", name: "Sofia Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "72", name: "Sophie Martins", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "73", name: "Tomás Ferreira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "74", name: "Valentina Rodrigues", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "75", name: "Vanessa Dias", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "76", name: "Victor Costa", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "77", name: "Vinicius Martins", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "78", name: "William Gomes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "79", name: "Yago Rodrigues", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "80", name: "Yasmin Gomes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "81", name: "Alice Martins", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "82", name: "Amanda Dias", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "83", name: "Ana Silva", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "84", name: "Ana Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "85", name: "André Araújo", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "86", name: "Arthur Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "87", name: "Arthur Pereira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "88", name: "Beatriz Oliveira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "89", name: "Beatriz Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "90", name: "Bernardo Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "91", name: "Bernardo Costa", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "92", name: "Bruna Araújo", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "93", name: "Bruno Cardoso", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "94", name: "Bruno Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "95", name: "Camila Barros", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "96", name: "Carlos Dias", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "97", name: "Carolina Barros", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "98", name: "Cauã Martins", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "99", name: "Clara Gomes", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "100", name: "David Santos", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "101", name: "Diego Ferreira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "102", name: "Eduardo Silva", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "103", name: "Enzo Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "104", name: "Erick Araújo", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "105", name: "Felipe Dias", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "106", name: "Felipe Lima", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "107", name: "Fernanda Araújo", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "108", name: "Gabriel Barros", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "109", name: "Gabriel Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "110", name: "Gabriela Ferreira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "111", name: "Gabriela Lima", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "112", name: "Giovanna Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "113", name: "Gustavo Lima", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "114", name: "Helena Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "115", name: "Henrique Gomes", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "116", name: "Igor Oliveira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "117", name: "Isabella Oliveira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "118", name: "Isabella Santos", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "119", name: "Isadora Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "120", name: "João Mendes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "121", name: "Júlia Mendes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "122", name: "Larissa Cardoso", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "123", name: "Laura Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "124", name: "Laura Santos", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "125", name: "Leonardo Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "126", name: "Letícia Cardoso", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "127", name: "Lizzy Rodrigues", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "128", name: "Lorena Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "129", name: "Lucas Oliveira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "130", name: "Lucas Souza", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "131", name: "Luísa Costa", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "132", name: "Manuela Oliveira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "133", name: "Marcos Barros", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "134", name: "Maria Mendes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "135", name: "Mariana Lima", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "136", name: "Marina Silva", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "137", name: "Marina Silva", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "138", name: "Matheus Mendes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "139", name: "Matheus Oliveira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "140", name: "Matheus Santos", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "141", name: "Melissa Santos", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "142", name: "Nicolas Rodrigues", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "143", name: "Paulo Cardoso", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "144", name: "Pedro Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "145", name: "Pedro Santos", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "146", name: "Rafael Silva", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "147", name: "Rafael Silva", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "148", name: "Rafaela Costa", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "149", name: "Rebeca Ferreira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "150", name: "Sofia Almeida", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "151", name: "Sofia Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "152", name: "Sophie Martins", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "153", name: "Tomás Ferreira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "154", name: "Valentina Rodrigues", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "155", name: "Vanessa Dias", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "156", name: "Victor Costa", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "157", name: "Vinicius Martins", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "158", name: "William Gomes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "159", name: "Yago Rodrigues", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "160", name: "Yasmin Gomes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "161", name: "Alice Martins", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "162", name: "Amanda Dias", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "163", name: "Ana Silva", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "164", name: "Ana Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "165", name: "André Araújo", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "166", name: "Arthur Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "167", name: "Arthur Pereira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "168", name: "Beatriz Oliveira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "169", name: "Beatriz Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "170", name: "Bernardo Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "171", name: "Bernardo Costa", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "172", name: "Bruna Araújo", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "173", name: "Bruno Cardoso", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "174", name: "Bruno Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "175", name: "Camila Barros", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "176", name: "Carlos Dias", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "177", name: "Carolina Barros", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "178", name: "Cauã Martins", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "179", name: "Clara Gomes", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "180", name: "David Santos", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "181", name: "Diego Ferreira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "182", name: "Eduardo Silva", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "183", name: "Enzo Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "184", name: "Erick Araújo", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "185", name: "Felipe Dias", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "186", name: "Felipe Lima", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "187", name: "Fernanda Araújo", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "188", name: "Gabriel Barros", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "189", name: "Gabriel Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "190", name: "Gabriela Ferreira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "191", name: "Gabriela Lima", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "192", name: "Giovanna Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "193", name: "Gustavo Lima", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "194", name: "Helena Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "195", name: "Henrique Gomes", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "196", name: "Igor Oliveira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "197", name: "Isabella Oliveira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "198", name: "Isabella Santos", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "199", name: "Isadora Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "200", name: "João Mendes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "201", name: "Júlia Mendes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "202", name: "Larissa Cardoso", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "203", name: "Laura Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "204", name: "Laura Santos", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "205", name: "Leonardo Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "206", name: "Letícia Cardoso", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "207", name: "Lizzy Rodrigues", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "208", name: "Lorena Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "209", name: "Lucas Oliveira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "210", name: "Lucas Souza", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "211", name: "Luísa Costa", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "212", name: "Manuela Oliveira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "213", name: "Marcos Barros", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "214", name: "Maria Mendes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "215", name: "Mariana Lima", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "216", name: "Marina Silva", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "217", name: "Marina Silva", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "218", name: "Matheus Mendes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "219", name: "Matheus Oliveira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "220", name: "Matheus Santos", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "221", name: "Melissa Santos", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "222", name: "Nicolas Rodrigues", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "223", name: "Paulo Cardoso", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "224", name: "Pedro Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "225", name: "Pedro Santos", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "226", name: "Rafael Silva", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "227", name: "Rafael Silva", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "228", name: "Rafaela Costa", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "229", name: "Rebeca Ferreira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "230", name: "Sofia Almeida", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "231", name: "Sofia Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "232", name: "Sophie Martins", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "233", name: "Tomás Ferreira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "234", name: "Valentina Rodrigues", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "235", name: "Vanessa Dias", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "236", name: "Victor Costa", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "237", name: "Vinicius Martins", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "238", name: "William Gomes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "239", name: "Yago Rodrigues", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "240", name: "Yasmin Gomes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "241", name: "Alice Martins", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "242", name: "Amanda Dias", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "243", name: "Ana Silva", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "244", name: "Ana Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "245", name: "André Araújo", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "246", name: "Arthur Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "247", name: "Arthur Pereira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "248", name: "Beatriz Oliveira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "249", name: "Beatriz Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "250", name: "Bernardo Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "251", name: "Bernardo Costa", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "252", name: "Bruna Araújo", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "253", name: "Bruno Cardoso", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "254", name: "Bruno Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "255", name: "Camila Barros", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "256", name: "Carlos Dias", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "257", name: "Carolina Barros", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "258", name: "Cauã Martins", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "259", name: "Clara Gomes", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "260", name: "David Santos", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "261", name: "Diego Ferreira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "262", name: "Eduardo Silva", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "263", name: "Enzo Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "264", name: "Erick Araújo", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "265", name: "Felipe Dias", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "266", name: "Felipe Lima", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "267", name: "Fernanda Araújo", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "268", name: "Gabriel Barros", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "269", name: "Gabriel Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "270", name: "Gabriela Ferreira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "271", name: "Gabriela Lima", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "272", name: "Giovanna Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "273", name: "Gustavo Lima", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "274", name: "Helena Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "275", name: "Henrique Gomes", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "276", name: "Igor Oliveira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "277", name: "Isabella Oliveira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "278", name: "Isabella Santos", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "279", name: "Isadora Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "280", name: "João Mendes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "281", name: "Júlia Mendes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "282", name: "Larissa Cardoso", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "283", name: "Laura Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "284", name: "Laura Santos", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "285", name: "Leonardo Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "286", name: "Letícia Cardoso", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "287", name: "Lizzy Rodrigues", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "288", name: "Lorena Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "289", name: "Lucas Oliveira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "290", name: "Lucas Souza", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "291", name: "Luísa Costa", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "292", name: "Manuela Oliveira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "293", name: "Marcos Barros", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "294", name: "Maria Mendes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "295", name: "Mariana Lima", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "296", name: "Marina Silva", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "297", name: "Marina Silva", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "298", name: "Matheus Mendes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "299", name: "Matheus Oliveira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "300", name: "Matheus Santos", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "301", name: "Melissa Santos", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "302", name: "Nicolas Rodrigues", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "303", name: "Paulo Cardoso", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "304", name: "Pedro Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "305", name: "Pedro Santos", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "306", name: "Rafael Silva", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "307", name: "Rafael Silva", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "308", name: "Rafaela Costa", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "309", name: "Rebeca Ferreira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "310", name: "Sofia Almeida", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "311", name: "Sofia Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "312", name: "Sophie Martins", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "313", name: "Tomás Ferreira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "314", name: "Valentina Rodrigues", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "315", name: "Vanessa Dias", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "316", name: "Victor Costa", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "317", name: "Vinicius Martins", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "318", name: "William Gomes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "319", name: "Yago Rodrigues", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "320", name: "Yasmin Gomes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "321", name: "Alice Martins", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "322", name: "Amanda Dias", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "323", name: "Ana Silva", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "324", name: "Ana Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "325", name: "André Araújo", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "326", name: "Arthur Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "327", name: "Arthur Pereira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "328", name: "Beatriz Oliveira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "329", name: "Beatriz Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "330", name: "Bernardo Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "331", name: "Bernardo Costa", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "332", name: "Bruna Araújo", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "333", name: "Bruno Cardoso", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "334", name: "Bruno Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "335", name: "Camila Barros", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "336", name: "Carlos Dias", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "337", name: "Carolina Barros", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "338", name: "Cauã Martins", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "339", name: "Clara Gomes", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "340", name: "David Santos", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "341", name: "Diego Ferreira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "342", name: "Eduardo Silva", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "343", name: "Enzo Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "344", name: "Erick Araújo", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "345", name: "Felipe Dias", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "346", name: "Felipe Lima", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "347", name: "Fernanda Araújo", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "348", name: "Gabriel Barros", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "349", name: "Gabriel Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "350", name: "Gabriela Ferreira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "351", name: "Gabriela Lima", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "352", name: "Giovanna Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "353", name: "Gustavo Lima", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "354", name: "Helena Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "355", name: "Henrique Gomes", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "356", name: "Igor Oliveira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "357", name: "Isabella Oliveira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "358", name: "Isabella Santos", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "359", name: "Isadora Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "360", name: "João Mendes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "361", name: "Júlia Mendes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "362", name: "Larissa Cardoso", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "363", name: "Laura Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "364", name: "Laura Santos", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "365", name: "Leonardo Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "366", name: "Letícia Cardoso", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "367", name: "Lizzy Rodrigues", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "368", name: "Lorena Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "369", name: "Lucas Oliveira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "370", name: "Lucas Souza", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "371", name: "Luísa Costa", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "372", name: "Manuela Oliveira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "373", name: "Marcos Barros", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "374", name: "Maria Mendes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "375", name: "Mariana Lima", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "376", name: "Marina Silva", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "377", name: "Marina Silva", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "378", name: "Matheus Mendes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "379", name: "Matheus Oliveira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "380", name: "Matheus Santos", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "381", name: "Melissa Santos", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "382", name: "Nicolas Rodrigues", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "383", name: "Paulo Cardoso", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "384", name: "Pedro Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "385", name: "Pedro Santos", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "386", name: "Rafael Silva", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "387", name: "Rafael Silva", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "388", name: "Rafaela Costa", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "389", name: "Rebeca Ferreira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "390", name: "Sofia Almeida", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "391", name: "Sofia Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "392", name: "Sophie Martins", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "393", name: "Tomás Ferreira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "394", name: "Valentina Rodrigues", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "395", name: "Vanessa Dias", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "396", name: "Victor Costa", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "397", name: "Vinicius Martins", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "398", name: "William Gomes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "399", name: "Yago Rodrigues", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "400", name: "Yasmin Gomes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "401", name: "Alice Martins", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "402", name: "Amanda Dias", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "403", name: "Ana Silva", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "404", name: "Ana Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "405", name: "André Araújo", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "406", name: "Arthur Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "407", name: "Arthur Pereira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "408", name: "Beatriz Oliveira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "409", name: "Beatriz Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "410", name: "Bernardo Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "411", name: "Bernardo Costa", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "412", name: "Bruna Araújo", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "413", name: "Bruno Cardoso", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "414", name: "Bruno Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "415", name: "Camila Barros", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "416", name: "Carlos Dias", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "417", name: "Carolina Barros", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "418", name: "Cauã Martins", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "419", name: "Clara Gomes", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "420", name: "David Santos", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "421", name: "Diego Ferreira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "422", name: "Eduardo Silva", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "423", name: "Enzo Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "424", name: "Erick Araújo", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "425", name: "Felipe Dias", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "426", name: "Felipe Lima", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "427", name: "Fernanda Araújo", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "428", name: "Gabriel Barros", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "429", name: "Gabriel Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "430", name: "Gabriela Ferreira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "431", name: "Gabriela Lima", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "432", name: "Giovanna Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "433", name: "Gustavo Lima", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "434", name: "Helena Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "435", name: "Henrique Gomes", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "436", name: "Igor Oliveira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "437", name: "Isabella Oliveira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "438", name: "Isabella Santos", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "439", name: "Isadora Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "440", name: "João Mendes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "441", name: "Júlia Mendes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "442", name: "Larissa Cardoso", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "443", name: "Laura Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "444", name: "Laura Santos", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "445", name: "Leonardo Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "446", name: "Letícia Cardoso", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "447", name: "Lizzy Rodrigues", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "448", name: "Lorena Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "449", name: "Lucas Oliveira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "450", name: "Lucas Souza", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "451", name: "Luísa Costa", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "452", name: "Manuela Oliveira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "453", name: "Marcos Barros", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "454", name: "Maria Mendes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "455", name: "Mariana Lima", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "456", name: "Marina Silva", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "457", name: "Marina Silva", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "458", name: "Matheus Mendes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "459", name: "Matheus Oliveira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "460", name: "Matheus Santos", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "461", name: "Melissa Santos", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "462", name: "Nicolas Rodrigues", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "463", name: "Paulo Cardoso", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "464", name: "Pedro Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "465", name: "Pedro Santos", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "466", name: "Rafael Silva", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "467", name: "Rafael Silva", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "468", name: "Rafaela Costa", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "469", name: "Rebeca Ferreira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "470", name: "Sofia Almeida", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "471", name: "Sofia Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "472", name: "Sophie Martins", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "473", name: "Tomás Ferreira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "474", name: "Valentina Rodrigues", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "475", name: "Vanessa Dias", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "476", name: "Victor Costa", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "477", name: "Vinicius Martins", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "478", name: "William Gomes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "479", name: "Yago Rodrigues", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "480", name: "Yasmin Gomes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "481", name: "Alice Martins", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "482", name: "Amanda Dias", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "483", name: "Ana Silva", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "484", name: "Ana Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "485", name: "André Araújo", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "486", name: "Arthur Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "487", name: "Arthur Pereira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "488", name: "Beatriz Oliveira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "489", name: "Beatriz Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "490", name: "Bernardo Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "491", name: "Bernardo Costa", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "492", name: "Bruna Araújo", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "493", name: "Bruno Cardoso", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "494", name: "Bruno Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "495", name: "Camila Barros", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "496", name: "Carlos Dias", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "497", name: "Carolina Barros", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "498", name: "Cauã Martins", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "499", name: "Clara Gomes", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "500", name: "David Santos", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "501", name: "Diego Ferreira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "502", name: "Eduardo Silva", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "503", name: "Enzo Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "504", name: "Erick Araújo", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "505", name: "Felipe Dias", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "506", name: "Felipe Lima", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "507", name: "Fernanda Araújo", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "508", name: "Gabriel Barros", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "509", name: "Gabriel Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "510", name: "Gabriela Ferreira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "511", name: "Gabriela Lima", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "512", name: "Giovanna Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "513", name: "Gustavo Lima", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "514", name: "Helena Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "515", name: "Henrique Gomes", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "516", name: "Igor Oliveira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "517", name: "Isabella Oliveira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "518", name: "Isabella Santos", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "519", name: "Isadora Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "520", name: "João Mendes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "521", name: "Júlia Mendes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "522", name: "Larissa Cardoso", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "523", name: "Laura Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "524", name: "Laura Santos", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "525", name: "Leonardo Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "526", name: "Letícia Cardoso", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "527", name: "Lizzy Rodrigues", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "528", name: "Lorena Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "529", name: "Lucas Oliveira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "530", name: "Lucas Souza", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "531", name: "Luísa Costa", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "532", name: "Manuela Oliveira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "533", name: "Marcos Barros", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "534", name: "Maria Mendes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "535", name: "Mariana Lima", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "536", name: "Marina Silva", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "537", name: "Marina Silva", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "538", name: "Matheus Mendes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "539", name: "Matheus Oliveira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "540", name: "Matheus Santos", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "541", name: "Melissa Santos", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "542", name: "Nicolas Rodrigues", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "543", name: "Paulo Cardoso", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "544", name: "Pedro Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "545", name: "Pedro Santos", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "546", name: "Rafael Silva", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "547", name: "Rafael Silva", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "548", name: "Rafaela Costa", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "549", name: "Rebeca Ferreira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "550", name: "Sofia Almeida", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "551", name: "Sofia Pereira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "552", name: "Sophie Martins", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "553", name: "Tomás Ferreira", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "554", name: "Valentina Rodrigues", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "555", name: "Vanessa Dias", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "556", name: "Victor Costa", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "557", name: "Vinicius Martins", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "558", name: "William Gomes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "559", name: "Yago Rodrigues", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "560", name: "Yasmin Gomes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "561", name: "Alice Martins", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "562", name: "Amanda Dias", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "563", name: "Ana Silva", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "564", name: "Ana Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "565", name: "André Araújo", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "566", name: "Arthur Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "567", name: "Arthur Pereira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "568", name: "Beatriz Oliveira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "569", name: "Beatriz Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "570", name: "Bernardo Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "571", name: "Bernardo Costa", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "572", name: "Bruna Araújo", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "573", name: "Bruno Cardoso", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "574", name: "Bruno Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "575", name: "Camila Barros", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "576", name: "Carlos Dias", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "577", name: "Carolina Barros", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "578", name: "Cauã Martins", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "579", name: "Clara Gomes", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "580", name: "David Santos", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "581", name: "Diego Ferreira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "582", name: "Eduardo Silva", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "583", name: "Enzo Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "584", name: "Erick Araújo", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "585", name: "Felipe Dias", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "586", name: "Felipe Lima", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "587", name: "Fernanda Araújo", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "588", name: "Gabriel Barros", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "589", name: "Gabriel Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "590", name: "Gabriela Ferreira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "591", name: "Gabriela Lima", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "592", name: "Giovanna Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "593", name: "Gustavo Lima", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "594", name: "Helena Almeida", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "595", name: "Henrique Gomes", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "596", name: "Igor Oliveira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "597", name: "Isabella Oliveira", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "598", name: "Isabella Santos", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "599", name: "Isadora Souza", class: "1 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
        { key: "600", name: "João Mendes", class: "2 A", provaName: "1 Bim. Port. 1 Ano", nAcertos: "18/20", nota: "9,5" },
      ];

      const dataPT = [
        {
          class: "1 A",
          nota: 9.5,
        },
        {
          class: "1 B",
          nota: 8.5,
        },
        {
          class: "1 C",
          nota: 7,
        },
        {
          class: "1 D",
          nota: 8,
        },
        {
          class: "2 A",
          nota: 9.5,
        },
        {
          class: "2 B",
          nota: 7.5,
        },
        {
          class: "2 C",
          nota: 6.5,
        },
        {
          class: "2 D",
          nota: 8.5,
        },
        {
          class: "3 A",
          nota: 7.0,
        },
        {
          class: "3 B",
          nota: 8,
        },
        {
          class: "3 C",
          nota: 9.5,
        },
        {
          class: "3 D",
          nota: 8.5,
        },
      ];

      setDataPerTurma(dataPT);

      const dataPM = [
        {
          class: "1 A",
          port: 9,
          mat: 10,
        },
        {
          class: "1 B",
          port: 8,
          mat: 9,
        },
        {
          class: "1 C",
          port: 9,
          mat: 5,
        },
        {
          class: "1 D",
          port: 6,
          mat: 10,
        },
        {
          class: "2 A",
          port: 9.5,
          mat: 9.5,
        },
        {
          class: "2 B",
          port: 8.5,
          mat: 6.5,
        },
        {
          class: "2 C",
          port: 5,
          mat: 8,
        },
        {
          class: "2 D",
          port: 7,
          mat: 10,
        },
        {
          class: "3 A",
          port: 8.5,
          mat: 5.5,
        },
        {
          class: "3 B",
          port: 6.5,
          mat: 9.5,
        },
        {
          class: "3 C",
          port: 9,
          mat: 10,
        },
        {
          class: "3 D",
          port: 7.5,
          mat: 9.5,
        },
      ];

      setDataPerMateria(dataPM);

      setAnalises(dataSource);

      message.destroy();
      message.success("Dados retornados!");
      setLoading(false);
    }, 1000);
  }, []);

  const columns: TableColumnsType<AnalisesProp> = [
    {
      title: "Aluno",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Turma",
      dataIndex: "class",
      key: "class",
    },
    {
      title: "Prova",
      dataIndex: "provaName",
      key: "provaName",
    },
    {
      title: "Nº de Acertos",
      dataIndex: "nAcertos",
      key: "nAcertos",
      width: 200,
    },
    {
      title: "Nota",
      dataIndex: "nota",
      key: "nota",
      width: 200,
    },
  ];

  if (!mounted) return <></>;

  return (
    <main className="bg-secondary min-h-screen flex flex-col items-center">
      <AppBar />
      <div className="flex-1 flex flex-col items-start justify-start pt-32 pb-7 w-full px-14">
        <div className="flex flex-row items-center justify-between w-full mb-7">
          <h1 className="font-semibold text-2xl">Análises</h1>
          <div className="flex flex-row gap-5">
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
              <div>
                <p className="text-xs">Data Inicial</p>
                <DatePicker format={dateFormat} defaultValue={dayjs("01/01/2024", dateFormat)} />
                <div className="h-4"></div>
                <p className="text-xs">Turma</p>
                <select className="border border-gray-200 font-light rounded-md py-1 px-2 w-full placeholder:text-placeholder ">
                  <option value="all">Todas</option>
                  <option value="1a">1 A</option>
                  <option value="1b">1 B</option>
                  <option value="1c">1 C</option>
                  <option value="1d">1 D</option>
                  <option value="2a">2 A</option>
                  <option value="2b">2 B</option>
                  <option value="2c">2 C</option>
                  <option value="2d">2 D</option>
                  <option value="3a">3 A</option>
                  <option value="3b">3 B</option>
                  <option value="3c">3 C</option>
                  <option value="3d">3 D</option>
                </select>
              </div>
              <div>
                <p className="text-xs">Data Final</p>
                <DatePicker format={dateFormat} defaultValue={dayjs("10/05/2024", dateFormat)} />
                <div className="h-4"></div>
                <p className="text-xs">Matéria</p>
                <select className="border border-gray-200 font-light rounded-md py-1 px-2 w-full placeholder:text-placeholder ">
                  <option value="all">Todas</option>
                  <option value="portugues">Português</option>
                  <option value="matematica">Matemática</option>
                </select>
              </div>
            </ConfigProvider>
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
          <Table style={{ width: "100%" }} dataSource={analises} columns={columns} loading={loading} />
        </ConfigProvider>

        <div className="h-16"></div>

        <div className="flex flex-row justify-between w-full bg-white rounded-xl py-7 px-5">
          <div className="flex flex-col items-center gap-10">
            <p className="font-medium text-base">Média de nota por Turma</p>
            <BarChart
              width={700}
              height={400}
              data={dataPerTurma}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <Bar dataKey="nota" name="Média das Notas" fill="#1FD6FF" activeBar={<Rectangle fill="#13A1C1" />} />
              <XAxis className="font-light text-sm" dataKey="class" />
              <YAxis className="font-light text-sm" type="number" domain={[0, 10]} />
              <Tooltip cursor={{ fill: "transparent" }} content={<CustomTooltip />} />
              <Legend />
            </BarChart>
          </div>

          <div className="flex flex-col items-center gap-10">
            <p className="font-medium text-base">Média de nota por Turma e Matéria</p>
            <BarChart
              width={700}
              height={400}
              data={dataPerMateria}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <Bar dataKey="port" name="Média das Notas Port." fill="#1FD6FF" activeBar={<Rectangle fill="#13A1C1" />} />
              <Bar dataKey="mat" name="Média das Notas Mat." fill="#AFF5FF" activeBar={<Rectangle fill="#13A1C1" />} />
              <XAxis className="font-light text-sm" dataKey="class" />
              <YAxis className="font-light text-sm" type="number" domain={[0, 10]} />
              <Tooltip cursor={{ fill: "transparent" }} content={<CustomTooltipPerMat />} />
              <Legend />
            </BarChart>
          </div>
        </div>

        <div className="h-16"></div>

        <div className="flex flex-row justify-between w-full bg-white rounded-xl py-7 px-5">
          <div className="flex flex-col items-center gap-10">
            <p className="font-medium text-base">Média de notas em Português</p>
            <PiePort />
          </div>

          <div className="flex flex-col items-center gap-10">
            <p className="font-medium text-base">Média de nota em Matemática</p>
            <PieMat />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, percent, value, payload } = props;

  return (
    <g>
      <text x={cx} y={cy} dy={-9} textAnchor="middle" fill={"#13A1C1"} className="font-medium text-lg">
        {`Nota: ${payload.name}`}
      </text>
      <text x={cx} y={cy} dy={11} textAnchor="middle" fill={"#13A1C1"}>
        Qtd.: {value}
      </text>
      <text x={cx} y={cy} dy={30} textAnchor="middle" fill={"#13A1C1"}>
        {`${(percent * 100).toFixed(2).replace(".", ",")}%`}
      </text>
      <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius} startAngle={startAngle} endAngle={endAngle} fill={"#13A1C1"} />
      <Sector cx={cx} cy={cy} startAngle={startAngle} endAngle={endAngle} innerRadius={outerRadius + 6} outerRadius={outerRadius + 10} fill={"#13A1C1"} />
    </g>
  );
};

class PiePort extends PureComponent {
  state = {
    activeIndex: 0,
  };

  onPieEnter = (_: any, index: number) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <PieChart width={700} height={400}>
        <Pie
          activeIndex={this.state.activeIndex}
          activeShape={renderActiveShape}
          data={dataPort}
          cx="50%"
          cy="50%"
          innerRadius={130}
          outerRadius={170}
          fill="#1FD6FF"
          dataKey="value"
          onMouseEnter={this.onPieEnter}
        />
      </PieChart>
    );
  }
}

class PieMat extends PureComponent {
  state = {
    activeIndex: 0,
  };

  onPieEnter = (_: any, index: number) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <PieChart width={700} height={400}>
        <Pie
          activeIndex={this.state.activeIndex}
          activeShape={renderActiveShape}
          data={dataMat}
          cx="50%"
          cy="50%"
          innerRadius={130}
          outerRadius={170}
          fill="#1FD6FF"
          dataKey="value"
          onMouseEnter={this.onPieEnter}
        />
      </PieChart>
    );
  }
}
