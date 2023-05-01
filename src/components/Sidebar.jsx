import React from "react";
import { Sidebar, Badge } from "flowbite-react";
import {
  HiIdentification,
  HiUser,
  HiOutlinePencil,
  HiOutlineCurrencyDollar,
  HiBell,
  HiPresentationChartBar,
} from "react-icons/hi";
import {
  HiChatBubbleBottomCenterText,
  HiOutlineArrowTrendingUp,
  HiOutlineBuildingLibrary,
  HiOutlineBuildingOffice,
  HiOutlineClipboardDocumentList,
} from "react-icons/hi2";

function SidebarMenu() {
  return (
    <div className="w-fit">
      <Sidebar className='rounded-none'>
        <Sidebar.Items>
          <Sidebar.ItemGroup>

            <Sidebar.Collapse href="/cadastro" icon={HiOutlinePencil} label="Cadastro">
            <Sidebar.Item href="/cadastro/dados-bancarios" icon={HiOutlineBuildingLibrary}>
              Dados Bancários
            </Sidebar.Item>
            <Sidebar.Item href="/cadastro/dados-pessoais" icon={HiUser}>
              Dados Pessoais
            </Sidebar.Item>
            <Sidebar.Item href="/cadastro/documentos" icon={HiIdentification}>
              Documentos
            </Sidebar.Item>

            </Sidebar.Collapse>
            <Sidebar.Item href="#" icon={HiOutlineClipboardDocumentList}>
              Cadastro de clientes
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiChatBubbleBottomCenterText}>
              Régua de Comunicação
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiOutlineCurrencyDollar}>
              Incentivo
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiOutlineArrowTrendingUp}>
              Indicadores
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiOutlineBuildingOffice}>
              Empreendimentos
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiPresentationChartBar}>
              CRM
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiBell}>
              Recepção
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>

      </Sidebar>
    </div>
  );
}

export default SidebarMenu;
