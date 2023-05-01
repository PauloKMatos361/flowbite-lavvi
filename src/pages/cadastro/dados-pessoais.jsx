import React from "react";
import MainLayout from "@/layouts/MainLayout";
import { HiHome } from "react-icons/hi";
import {
  Breadcrumb,
  Button,
  Card,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";

function DadosPessoais() {
  const orgaoEmissores = [
    {
      nome: "Secretaria de Segurança Pública",
      sigla: "SSP",
    },
    {
      nome: "Departamento de Trânsito",
      sigla: "Detran",
    },
    {
      nome: "Polícia Militar",
      sigla: "POM",
    },
    {
      nome: "Secretaria de Polícia Técnico-Científica",
      sigla: "SPTC",
    },
    {
      nome: "Fundo de Garantia do Tempo de Serviço",
      sigla: "FGTS",
    },
    {
      nome: "Ordem dos Advogados do Brasil",
      sigla: "OAB",
    },
    {
      nome: "Ministério do Trabalho e Emprego",
      sigla: "MTE",
    },
    {
      nome: "Cartório Civil",
      sigla: "CC",
    },
    {
      nome: "Departamento de Polícia Federal",
      sigla: "DPF",
    },
  ];

  const estadosCivis = [
    {
      nome: "Solteiro(a)",
    },
    {
      nome: "Casado(a)",
    },
    {
      nome: "Divorciado(a)",
    },
    {
      nome: "Viúvo(a)",
    },
    {
      nome: "União Estável",
    },
    {
      nome: "Separado(a) Judicialmente",
    },
  ];

  const estadosBrasileiros = [
    {
      nome: "Acre",
      uf: "AC",
    },
    {
      nome: "Alagoas",
      uf: "AL",
    },
    {
      nome: "Amapá",
      uf: "AP",
    },
    {
      nome: "Amazonas",
      uf: "AM",
    },
    {
      nome: "Bahia",
      uf: "BA",
    },
    {
      nome: "Ceará",
      uf: "CE",
    },
    {
      nome: "Distrito Federal",
      uf: "DF",
    },
    {
      nome: "Espírito Santo",
      uf: "ES",
    },
    {
      nome: "Goiás",
      uf: "GO",
    },
    {
      nome: "Maranhão",
      uf: "MA",
    },
    {
      nome: "Mato Grosso",
      uf: "MT",
    },
    {
      nome: "Mato Grosso do Sul",
      uf: "MS",
    },
    {
      nome: "Minas Gerais",
      uf: "MG",
    },
    {
      nome: "Pará",
      uf: "PA",
    },
    {
      nome: "Paraíba",
      uf: "PB",
    },
    {
      nome: "Paraná",
      uf: "PR",
    },
    {
      nome: "Pernambuco",
      uf: "PE",
    },
    {
      nome: "Piauí",
      uf: "PI",
    },
    {
      nome: "Rio de Janeiro",
      uf: "RJ",
    },
    {
      nome: "Rio Grande do Norte",
      uf: "RN",
    },
    {
      nome: "Rio Grande do Sul",
      uf: "RS",
    },
    {
      nome: "Rondônia",
      uf: "RO",
    },
    {
      nome: "Roraima",
      uf: "RR",
    },
    {
      nome: "Santa Catarina",
      uf: "SC",
    },
    {
      nome: "São Paulo",
      uf: "SP",
    },
    {
      nome: "Sergipe",
      uf: "SE",
    },
    {
      nome: "Tocantins",
      uf: "TO",
    },
  ];

  return (
    <MainLayout>
      <Breadcrumb className="bg-gray-50 py-3 px-5 dark:bg-gray-900">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item>Cadastro</Breadcrumb.Item>
        <Breadcrumb.Item>DadosPessoais</Breadcrumb.Item>
      </Breadcrumb>
      <div className="container px-4">
        <div className="flex flex-col items-center justify-center">
          <Card className="w-full mt-2">
            <h3 className="mb-4 text-xl text-center font-bold dark:text-white">
              Dados Pessoais
            </h3>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                <Label htmlFor="nome">Nome Completo</Label>
                <TextInput
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Digite seu nome Completo"
                />
              </div>
              <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                <Label htmlFor="sexo" value="Selecione seu Sexo" />
                <Select id="sexo" name="sexo" required={true}>
                  <option>Masculino</option>
                  <option>Feminino</option>
                  <option>Outro</option>
                </Select>
              </div>
              <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                <Label htmlFor="numeroCPF">CPF</Label>
                <TextInput
                  id="numeroCPF"
                  name="numeroCPF"
                  placeholder="Seu numero do CPF"
                  required
                />
              </div>
              <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                <Label htmlFor="numeroRG">RG</Label>
                <TextInput
                  id="numeroRG"
                  name="numeroRG"
                  placeholder="Número do RG"
                  required
                />
              </div>
              <div
                id="select-sex"
                className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3"
              >
                <Label
                  htmlFor="orgao-emitente-rg"
                  value="Órgão Emitente (RG)"
                />
                <Select
                  id="orgao-emitente-rg"
                  name="orgao-emitente-rg"
                  required={true}
                >
                  {orgaoEmissores.map((orgaoEmissor) => (
                    <option key={orgaoEmissor.sigla} value={orgaoEmissor.sigla}>
                      {orgaoEmissor.nome} - {orgaoEmissor.sigla}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                <Label htmlFor="data-emissao-rg">Data de Emissão (RG)</Label>
                <TextInput
                  id="data-emissao-rg"
                  name="data-emissao-rg"
                  placeholder="e.g., 15/08/1990"
                  required
                  type="date"
                />
              </div>
              <div
                id="estado-civil"
                className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3"
              >
                <Label htmlFor="estado-civil" value="Estado Civil" />
                <Select id="estado-civil" name="estado-civil" required={true}>
                  {estadosCivis.map((estadoCivil, index) => (
                    <option
                      key={`estado-civil-${index}`}
                      value={estadoCivil.nome}
                    >
                      {estadoCivil.nome}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                <Label htmlFor="quantidade-dependentes">
                  Quantidade de Dependentes
                </Label>
                <TextInput
                  id="quantidade-dependentes"
                  name="quantidade-dependentes"
                  placeholder="Ex: 1, 2, 3"
                  type="number"
                  required
                />
              </div>
              <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                <Label htmlFor="nome-mae">Nome da Mãe</Label>
                <TextInput
                  id="nome-mae"
                  name="nome-mae"
                  placeholder="Nome completo da Mãe"
                  required
                />
              </div>
              <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                <Label htmlFor="nome-pai">Nome do Pai</Label>
                <TextInput
                  id="nome-pai"
                  name="nome-pai"
                  placeholder="Nome completo do Pai"
                  required
                />
              </div>
              <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                <Label htmlFor="numero-telefone">Telefone</Label>
                <TextInput
                  id="numero-telefone"
                  name="numero-telefone"
                  placeholder="ex. +55 (31) 9999-8888"
                  required
                  type="tel"
                />
              </div>
              <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                <Label htmlFor="data-nascimento">Data de Nascimento</Label>
                <TextInput
                  id="data-nascimento"
                  name="data-nascimento"
                  placeholder="e.g., 15/08/1990"
                  required
                  type="date"
                />
              </div>
              <div
                id="uf-nascimento"
                className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3"
              >
                <Label htmlFor="uf-nascimento" value="UF Nascimento" />
                <Select id="uf-nascimento" name="uf-nascimento" required={true}>
                  {estadosBrasileiros.map((estado) => (
                    <option key={estado.uf} value={estado.nome}>
                      {estado.nome}
                    </option>
                  ))}
                </Select>
              </div>
              <div
                id="nascionalidade"
                className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3"
              >
                <Label htmlFor="nascionalidade" value="Nascionalidade" />
                <Select
                  id="nascionalidade"
                  name="nascionalidade"
                  required={true}
                >
                  <option value="brasileiro">Brasileiro</option>
                  <option value="estrangeiro">Estrangeiro</option>
                </Select>
              </div>
              <div
                id="cidade-nascimento"
                className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3"
              >
                <Label htmlFor="cidade-nascimento" value="Cidade" />
                <Select
                  id="cidade-nascimento"
                  name="cidade-nascimento"
                  required={true}
                >
                  <option value="Belo Horizonte">Belo Horizonte</option>
                  <option value="Sao Paulo">São Paulo</option>
                  <option value="Rio de Janeiro">Rio de Janeiro</option>
                </Select>
              </div>
              <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                <Label htmlFor="cep">CEP</Label>
                <TextInput
                  id="cep"
                  name="cep"
                  placeholder="01001-000"
                  required
                />
              </div>
              <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                <Label htmlFor="endereco">Endereço</Label>
                <TextInput
                  id="endereco"
                  name="endereco"
                  placeholder="Rua exemplo, 123"
                  required
                />
              </div>
              <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                <Label htmlFor="numero">Número</Label>
                <TextInput
                  id="numero"
                  name="numero"
                  placeholder="123"
                  required
                />
              </div>
              <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                <Label htmlFor="bairro">Bairro</Label>
                <TextInput
                  id="bairro"
                  name="bairro"
                  placeholder="Bairro exemplo"
                  required
                />
              </div>
              <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
                <Label htmlFor="complemento">Complemento</Label>
                <TextInput
                  id="complemento"
                  name="complemento"
                  placeholder="Apartamento 123"
                />
              </div>
            </div>
          </Card>

          <UltimasExperiencias />
        </div>
      </div>
    </MainLayout>
  );
}

const UltimasExperiencias = function () {
  return (
    <Card className="mt-2 w-full">
      <h3 className="text-xl font-bold dark:text-white">
        Últimas Experiencias
      </h3>
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
          <Label htmlFor="formacao-profissional">Formação Profissional</Label>
          <TextInput
            id="formacao-profissional"
            name="formacao-profissional"
            placeholder="Ex: Bacharel em Direito"
          />
        </div>
        <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
          <Label htmlFor="data-saida">Data da Saída</Label>
          <TextInput
            id="data-saida"
            name="data-saida"
            placeholder="e.g., 15/08/1990"
            required
            type="date"
          />
        </div>
        <div
          id="experiencia-profissional"
          className="col-span-12 grid grid-cols-1 gap-y-2 sm:col-span-3"
        >
          <Label
            htmlFor="experiencia-profissional"
            value="Experiência Profissional"
          />
          <Textarea
            id="experiencia-profissional"
            placeholder="Resuma brevemente sua experiêncial profissional..."
            required={true}
            rows={4}
          />
        </div>
        <div
          id="motivo-saida"
          className="col-span-12 grid grid-cols-1 gap-y-2 sm:col-span-3"
        >
          <Label
            htmlFor="motivo-saida"
            value="Motivo da Saída"
          />
          <Textarea
            id="motivo-saida"
            placeholder="Resuma brevemente sua o motivo da saída de sua última empresa..."
            required={true}
            rows={4}
          />
        </div>
        
      </div>
    </Card>
  );
};

export default DadosPessoais;
