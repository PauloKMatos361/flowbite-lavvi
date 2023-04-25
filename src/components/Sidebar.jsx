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
    <div className="w-fit h-full">
      <Sidebar aria-label="Sidebar with logo branding example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>

            <Sidebar.Collapse icon={HiOutlinePencil} label="Cadastro">
            <Sidebar.Item href="#" icon={HiOutlineBuildingLibrary}>
              Dados Bancários
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
              Dados Pessoais
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiIdentification}>
              Dados Pessoais
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
        <Sidebar.CTA>
      <div className="mb-3 flex items-center">
        <Badge color="warning">
          Beta
        </Badge>
        <button
          aria-label="Close"
          className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-blue-50 p-1 text-blue-900 hover:bg-blue-200 focus:ring-2 focus:ring-blue-400 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
          type="button"
        >
          <svg
            aria-hidden={true}
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <p className="mb-3 text-sm text-blue-900 dark:text-blue-400">
        Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.
      </p>
      <a
        className="text-sm text-blue-900 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        href="#"
      >
        Turn new navigation off
      </a>
    </Sidebar.CTA>
      </Sidebar>
    </div>
  );
}

export default SidebarMenu;
