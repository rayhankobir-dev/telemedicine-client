import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import MedicineList from "@/components/medicines/medicine-list";

function MedicinesPage() {
  return (
    <>
      <Breadcrumb className="py-1.5">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>Medicines</BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <MedicineList />
    </>
  );
}

export default MedicinesPage;
