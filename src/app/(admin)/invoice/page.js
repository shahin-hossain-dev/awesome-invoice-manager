"use client";

import useDrawerOpenClose from "@/hooks/useDrawerOpen";
import Drawer from "../components/ui/Drawer";
import PageTopBar from "../components/partials/header/PageTopBar";
import CreateInvoice from "./_components/CreateInvoice";
import InvoiceList from "./_components/InvoiceList";
import { useRef, useState } from "react";
import InvoiceAction from "./_components/InvoiceAction";
import { useReactToPrint } from "react-to-print";
import InvoicePreview from "./_components/InvoicePreview";

const InvoicePage = () => {
  const { isDrawerOpen, handleDrawerOpen, handleDrawerClose } =
    useDrawerOpenClose();
  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isPreview, setIsPreview] = useState(false);
  const contentRef = useRef(null);
  const handlePrint = useReactToPrint({ contentRef });

  return (
    <div>
      <Drawer
        title={"Invoice"}
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        className={"!bg-main-background"}
      >
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
            <div className="lg:col-span-3">
              {isCreate && !isPreview && !isEdit && <CreateInvoice />}
              {isEdit && !isPreview && !isCreate && <CreateInvoice />}
              {isPreview && !isCreate && !isEdit && (
                <InvoicePreview contentRef={contentRef} />
              )}
              <div className="hidden">
                <InvoicePreview contentRef={contentRef} />
              </div>
            </div>
            <div className="lg:col-span-1">
              <InvoiceAction handlePrint={handlePrint} />
            </div>
          </div>
        </div>
      </Drawer>
      <PageTopBar
        buttonTitle={"Create Invoice"}
        onClick={handleDrawerOpen}
        setIsCreate={setIsCreate}
        setIsEdit={setIsEdit}
        setIsPreview={setIsPreview}
      />

      <div>
        <InvoiceList
          handleDrawerOpen={handleDrawerOpen}
          setIsEdit={setIsEdit}
          setIsPreview={setIsPreview}
          setIsCreate={setIsCreate}
        />
      </div>
    </div>
  );
};

export default InvoicePage;
