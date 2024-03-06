import { chakra, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import type { ColumnDef, SortingState } from "@tanstack/react-table";
import { flexRender, getCoreRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export type DataTableProps<Data extends object> = {
  data: Data[];
  columns: ColumnDef<Data, any>[];
};

export function DataTable<Data extends object>({ data, columns }: DataTableProps<Data>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <TableContainer>
      <Table>
        <Thead border={"none"}>
          {table.getHeaderGroups().map(headerGroup => (
            <Tr key={headerGroup.id} border="none">
              {headerGroup.headers.map((header, index) => {
                const { meta }: any = header.column.columnDef;
                return (
                  <Th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    isNumeric={meta?.isNumeric}
                    textAlign={meta?.align}
                    textTransform="none"
                    p={3}
                    background={"gray.98"}
                    border="1px solid #F7F8FA"
                    borderRadius={
                      index === 0 ? "8px 0 0 8px" : index + 1 === headerGroup.headers.length ? "0 8px 8px 0" : 0
                    }
                    mb={3}
                  >
                    <Text textStyle={"p"} fontWeight={700} color="#26334D">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </Text>

                    {header.column.getIsSorted() && (
                      <chakra.span pl="4">
                        {header.column.getIsSorted() ? (
                          header.column.getIsSorted() === "desc" ? (
                            <FaChevronDown aria-label="sorted descending" />
                          ) : (
                            <FaChevronUp aria-label="sorted ascending" />
                          )
                        ) : null}
                      </chakra.span>
                    )}
                  </Th>
                );
              })}
            </Tr>
          ))}
        </Thead>
        <Tbody border={"none"}>
          {table.getRowModel().rows.map(row => (
            <Tr key={row.id} border="none">
              {row.getVisibleCells().map((cell, index) => {
                const { meta }: any = cell.column.columnDef;
                return (
                  <Td
                    key={cell.id}
                    isNumeric={meta?.isNumeric}
                    px={3}
                    py={4}
                    textStyle={"p"}
                    fontWeight={500}
                    color={"#26334D"}
                    borderRadius={
                      index === 0 ? "8px 0 0 8px" : index + 1 === row.getVisibleCells().length ? "0 8px 8px 0" : 0
                    }
                    borderTop={"1px solid #EDEFF2"}
                    borderBottom={"1px solid #EDEFF2"}
                    borderLeft={index === 0 ? "1px solid #EDEFF2" : "none"}
                    borderRight={index + 1 === row.getVisibleCells().length ? "1px solid #EDEFF2" : "none"}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                );
              })}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
