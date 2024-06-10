"use client";

import { Checkbox, Col, Row } from "antd";
import AppBar from "../../../components/app-bar";
import Footer from "../../../components/footer";
import type { GetProp } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";

const defaultCheckedList: CheckboxValueType[] = ["1A", "1B", "1C", "1D", "2A", "2B", "2C", "2D"];

export default function EditarProfessor() {
  const onChange: GetProp<typeof Checkbox.Group, "onChange"> = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  return (
    <main className="bg-secondary min-h-screen flex flex-col items-center">
      <AppBar />
      <div className="max-w-screen-md flex-1 flex flex-col items-start justify-start ">
        <div className="mt-32 mb-7 rounded-xl  w-full bg-white">
          <div className="flex flex-row items-center justify-center w-full mb-7 rounded-t-xl text-white bg-primary-100 px-4 py-7">
            <h1 className="font-semibold text-2xl">Editar Professor</h1>
          </div>
          <form className="flex flex-col w-full gap-5 px-20 py-3 pb-10">
            <label className="flex flex-col font-semibold gap-1">
              Nome
              <input
                className="border-gray-200 border rounded-md font-normal py-1 px-2 w-full placeholder:text-placeholder"
                placeholder="Digite o nome do professor..."
                type="text"
                value={"Victor Costa"}
              />
            </label>
            <label className="flex flex-col font-semibold gap-1">
              Email
              <input
                className="border-gray-200 border rounded-md font-normal py-1 px-2 w-full placeholder:text-placeholder"
                placeholder="Digite o email do professor..."
                type="email"
                value={"victor.costa@outlook.com"}
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
            <div className="flex flex-row justify-between gap-5">
              <a
                className="bg-primary-100 rounded-md text-white py-1 drop-shadow-md mt-3 font-semibold transition-all hover:bg-primary-200 px-7 cursor-pointer"
                type="submit"
              >
                Salvar
              </a>
              <a
                className="bg-white rounded-md text-primary-100 py-1 drop-shadow-md mt-3 font-semibold transition-all hover:bg-gray-100 px-7 mr-32 cursor-pointer"
                href="/cadastros/professores"
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
