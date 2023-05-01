import React from "react";
import MainLayout from "@/layouts/MainLayout";
import { Breadcrumb, Card, Label, TextInput } from "flowbite-react";
import { HiHome } from "react-icons/hi";

function DadosBancarios() {
  return (
    <MainLayout>
      <Breadcrumb className="bg-gray-50 py-3 px-5 dark:bg-gray-900">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item>Cadastro</Breadcrumb.Item>
        <Breadcrumb.Item>Dados Bancários</Breadcrumb.Item>
      </Breadcrumb>

      <div className="container px-4">
        <div className="flex flex-col items-center justify-center">
          <Card className="w-full mt-2">
            <h3 className="mb-4 text-xl font-bold dark:text-white">
              Dados Bancários
            </h3>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-12 grid grid-cols-1 gap-y-2 sm:col-span-6">
                  <Label htmlFor="first-name">Nome Completo</Label>
                  <TextInput
                    id="nome-completo"
                    name="nome-completo"
                    placeholder="Dino da Silva Sauro"
                    required
                  />
                </div>
                <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                  <Label htmlFor="agencia">Agência</Label>
                  <TextInput
                    id="agencia"
                    name="agencia"
                    placeholder="ex: 001"
                    required
                  />
                </div>
                <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                  <Label htmlFor="numero-conta">Número da Conta</Label>
                  <TextInput
                    id="numero-conta"
                    name="numero-conta"
                    placeholder="1234567-8"
                    required
                  />
                </div>
                <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                  <Label htmlFor="nome-favorecido">Nome Favorecido</Label>
                  <TextInput
                    id="nome-favorecido"
                    name="nome-favorecido"
                    placeholder="Nome de quem irá receber"
                    required
                  />
                </div>
                <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                  <Label htmlFor="cpf-cnpj">CPF ou CNPJ</Label>
                  <TextInput
                    id="cpf-cnpj"
                    name="cpf-cnpj"
                    placeholder="ex: 000.000.000-00"
                    required
                  />
                </div>
              </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}

export default DadosBancarios;
