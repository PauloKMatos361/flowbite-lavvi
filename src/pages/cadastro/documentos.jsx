import React, { useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import {
  Breadcrumb,
  Button,
  Card,
  Checkbox,
  Label,
  Modal,
  TextInput,
} from "flowbite-react";
import { HiHome, HiOutlineExclamationCircle } from "react-icons/hi";
import Image from "next/image";

function Documentos() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function onClose() {}
  function onClick() {
    console.log('oi')
    console.log(modalIsOpen)
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <MainLayout>
      <Breadcrumb className="bg-gray-50 py-3 px-5 dark:bg-gray-900">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item>Cadastro</Breadcrumb.Item>
        <Breadcrumb.Item>Documentos</Breadcrumb.Item>
      </Breadcrumb>
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <Card className="w-full px-4">
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Documentos
            </h1>
            
            <div className="flex justify-between w-full">
              <div className="">Imagem</div>
              <div className="">Status</div>
              <div className="">Data</div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="col-span-1">
                <div onClick={onClick} className="flex items-center justify-between">
                  <img
                    src="https://images.unsplash.com/photo-1515399127888-111111111111?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    width={100}
                    height={100}
                  />

                  <div>Não Entregue</div>
                  <div>02/06/2002</div>
                </div>
                
              </div>
            </div>
            
            
            
            
            <Modal show={modalIsOpen} dismissible={true} size="md" popup={true} onClose={onClose}>
              <Modal.Header />
              <Modal.Body>
                <Image width={340} height={300} src={`/public/modal.png`} />
                <Button onClick={onClick}>Fechar</Button>
              </Modal.Body>
            </Modal>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}

export default Documentos;
