"use client";

import { Checkbox, Col, ConfigProvider, DatePicker, Row } from "antd";
import AppBar from "../../../components/app-bar";
import Footer from "../../../components/footer";
import type { GetProp } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import ptBR from "antd/lib/locale/pt_BR";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

const defaultCheckedList: CheckboxValueType[] = ["1A", "1B", "1C", "1D"];

dayjs.extend(customParseFormat);
const dateFormat = "DD/MM/YYYY";

export default function EditarProva() {
  const onChange: GetProp<typeof Checkbox.Group, "onChange"> = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  return (
    <main className="bg-secondary min-h-screen flex flex-col items-center">
      <AppBar />
      <div className="max-w-screen-md flex-1 flex flex-col items-start justify-start ">
        <div className="mt-32 mb-7 rounded-xl  w-full bg-white">
          <div className="flex flex-row items-center justify-center w-full mb-7 rounded-t-xl text-white bg-primary-100 px-4 py-7">
            <h1 className="font-semibold text-2xl">Editar Prova</h1>
          </div>
          <form className="flex flex-col w-full gap-5 px-20 py-3 pb-10">
            <label className="flex flex-col font-semibold gap-1">
              Nome
              <input
                className="border-gray-200 border rounded-md font-normal py-1 px-2 w-full placeholder:text-placeholder"
                placeholder="Digite o nome da prova..."
                type="name"
                value={"2 Bim. Port. 1 Ano"}
              />
            </label>
            <label className="flex flex-col font-semibold gap-1">
              Matéria
              <select className="border border-gray-200 font-normal rounded-md py-1 px-2 w-full placeholder:text-placeholder ">
                <option value="portugues">Português</option>
                <option value="matematica">Matemática</option>
              </select>
            </label>
            <label className="flex flex-col font-semibold gap-1">
              Data
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
                <DatePicker format={dateFormat} defaultValue={dayjs("20/05/2024", dateFormat)} />
              </ConfigProvider>
            </label>
            <label className="flex flex-col font-semibold gap-1">
              Turmas
              <Checkbox.Group style={{ width: "100%" }} onChange={onChange} defaultValue={defaultCheckedList}>
                <Row>
                  <Col span={6}>
                    <Checkbox value="1A">1 A</Checkbox>
                  </Col>
                  <Col span={6}>
                    <Checkbox value="1B">1 B</Checkbox>
                  </Col>
                  <Col span={6}>
                    <Checkbox value="1C">1 C</Checkbox>
                  </Col>
                  <Col span={6}>
                    <Checkbox value="1D">1 D</Checkbox>
                  </Col>
                  <Col span={6}>
                    <Checkbox value="2A">2 A</Checkbox>
                  </Col>
                  <Col span={6}>
                    <Checkbox value="2B">2 B</Checkbox>
                  </Col>
                  <Col span={6}>
                    <Checkbox value="2C">2 C</Checkbox>
                  </Col>
                  <Col span={6}>
                    <Checkbox value="2D">2 D</Checkbox>
                  </Col>
                  <Col span={6}>
                    <Checkbox value="3A">3 A</Checkbox>
                  </Col>
                  <Col span={6}>
                    <Checkbox value="3B">3 B</Checkbox>
                  </Col>
                  <Col span={6}>
                    <Checkbox value="3C">3 C</Checkbox>
                  </Col>
                  <Col span={6}>
                    <Checkbox value="3D">3 D</Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
            </label>
            <label className="flex flex-col font-semibold justify-between">
              Respostas
              <div className="flex flex-row gap-5 mt-1 mb-3">
                <div className="flex flex-col text-center text-sm mb-1">
                  1
                  <input value="E" type="text" maxLength={1} className="border border-gray-200 font-normal rounded-md h-7 w-10 text-center text-lg uppercase" />
                </div>
                <div className="flex flex-col text-center text-sm mb-1">
                  2
                  <input value="C" type="text" maxLength={1} className="border border-gray-200 font-normal rounded-md h-7 w-10 text-center text-lg uppercase" />
                </div>
                <div className="flex flex-col text-center text-sm mb-1">
                  3
                  <input value="B" type="text" maxLength={1} className="border border-gray-200 font-normal rounded-md h-7 w-10 text-center text-lg uppercase" />
                </div>
                <div className="flex flex-col text-center text-sm mb-1">
                  4
                  <input value="D" type="text" maxLength={1} className="border border-gray-200 font-normal rounded-md h-7 w-10 text-center text-lg uppercase" />
                </div>
                <div className="flex flex-col text-center text-sm mb-1">
                  5
                  <input value="A" type="text" maxLength={1} className="border border-gray-200 font-normal rounded-md h-7 w-10 text-center text-lg uppercase" />
                </div>
                <div className="flex flex-col text-center text-sm mb-1">
                  6
                  <input value="E" type="text" maxLength={1} className="border border-gray-200 font-normal rounded-md h-7 w-10 text-center text-lg uppercase" />
                </div>
                <div className="flex flex-col text-center text-sm mb-1">
                  7
                  <input value="C" type="text" maxLength={1} className="border border-gray-200 font-normal rounded-md h-7 w-10 text-center text-lg uppercase" />
                </div>
                <div className="flex flex-col text-center text-sm mb-1">
                  8
                  <input value="B" type="text" maxLength={1} className="border border-gray-200 font-normal rounded-md h-7 w-10 text-center text-lg uppercase" />
                </div>
                <div className="flex flex-col text-center text-sm mb-1">
                  9
                  <input value="B" type="text" maxLength={1} className="border border-gray-200 font-normal rounded-md h-7 w-10 text-center text-lg uppercase" />
                </div>
                <div className="flex flex-col text-center text-sm mb-1">
                  10
                  <input value="B" type="text" maxLength={1} className="border border-gray-200 font-normal rounded-md h-7 w-10 text-center text-lg uppercase" />
                </div>
              </div>
              <div className="flex flex-row gap-5 mt-1">
                <div className="flex flex-col text-center text-sm mb-1">
                  11
                  <input value="D" type="text" maxLength={1} className="border border-gray-200 font-normal rounded-md h-7 w-10 text-center text-lg uppercase" />
                </div>
                <div className="flex flex-col text-center text-sm mb-1">
                  12
                  <input value="C" type="text" maxLength={1} className="border border-gray-200 font-normal rounded-md h-7 w-10 text-center text-lg uppercase" />
                </div>
                <div className="flex flex-col text-center text-sm mb-1">
                  13
                  <input value="A" type="text" maxLength={1} className="border border-gray-200 font-normal rounded-md h-7 w-10 text-center text-lg uppercase" />
                </div>
                <div className="flex flex-col text-center text-sm mb-1">
                  14
                  <input value="E" type="text" maxLength={1} className="border border-gray-200 font-normal rounded-md h-7 w-10 text-center text-lg uppercase" />
                </div>
                <div className="flex flex-col text-center text-sm mb-1">
                  15
                  <input value="B" type="text" maxLength={1} className="border border-gray-200 font-normal rounded-md h-7 w-10 text-center text-lg uppercase" />
                </div>
                <div className="flex flex-col text-center text-sm mb-1">
                  16
                  <input value="D" type="text" maxLength={1} className="border border-gray-200 font-normal rounded-md h-7 w-10 text-center text-lg uppercase" />
                </div>
                <div className="flex flex-col text-center text-sm mb-1">
                  17
                  <input value="B" type="text" maxLength={1} className="border border-gray-200 font-normal rounded-md h-7 w-10 text-center text-lg uppercase" />
                </div>
                <div className="flex flex-col text-center text-sm mb-1">
                  18
                  <input value="A" type="text" maxLength={1} className="border border-gray-200 font-normal rounded-md h-7 w-10 text-center text-lg uppercase" />
                </div>
                <div className="flex flex-col text-center text-sm mb-1">
                  19
                  <input value="A" type="text" maxLength={1} className="border border-gray-200 font-normal rounded-md h-7 w-10 text-center text-lg uppercase" />
                </div>
                <div className="flex flex-col text-center text-sm mb-1">
                  20
                  <input value="C" type="text" maxLength={1} className="border border-gray-200 font-normal rounded-md h-7 w-10 text-center text-lg uppercase" />
                </div>
              </div>
            </label>
            <div className="flex flex-row justify-between gap-5">
              <a
                className="bg-primary-100 rounded-md text-white py-1 drop-shadow-md mt-3 font-semibold transition-all hover:bg-primary-200 px-7 cursor-pointer"
                type="submit"
              >
                Salvar
              </a>
              <a
                className="bg-white rounded-md text-primary-100 py-1 drop-shadow-md mt-3 font-semibold transition-all hover:bg-gray-100 px-7 mr-32 cursor-pointer"
                href="/cadastros/provas"
              >
                Cancelar
              </a>
              <a
                className="bg-red-500 rounded-md text-white py-1 drop-shadow-md mt-3 font-semibold transition-all hover:bg-red-800 px-7 cursor-pointer"
                type="submit"
              >
                Excluir
              </a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}
