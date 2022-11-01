import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from "@syncfusion/ej2-react-grids";

import {customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3x1'>
      <Header category="Page" title="Costumers" />
      <GridComponent id="gridcomp" dataSource={customersData} allowPaging allowSorting toolbar={["Search"]} width="auto">
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar]}/>
      </GridComponent>
    </div>
  )
}

export default Customers
