import {
    CheckIcon,
    XIcon,
    StarIcon,
    SortAscendingIcon,
    SortDescendingIcon,
    QuestionIcon,
} from "@phosphor-icons/react";
import { Button } from "@/Components/ui/button.jsx";
import { useState } from "react";

const SortableHeader = ({ column, title }) => {
    const isSorted = column.getIsSorted();

    return (
        <div className="flex items-start">
            <span>{title}</span>
            <Button
                variant="ghost"
                size="xs"
                onClick={() => column.toggleSorting(isSorted === "asc")}
            >
                Мой статус
                {isSorted === "asc" ? (
                    <SortAscendingIcon />
                ) : isSorted === "desc" ? (
                    <SortDescendingIcon />
                ) : (
                    <SortDescendingIcon />
                )}
            </Button>
        </div>
    );
};

const FavHeader = ({ column }) => {
    const isSorted = column.getIsSorted();

    const handleToggle = () => {
        if (isSorted) {
            column.clearSorting();
        } else {
            column.toggleSorting(true);
        }
    };
    return (
        <div className="flex items-center justify-center">
            <Button
                variant="ghost"
                size="icon-xs"
                className="p-0 m-0 h-8"
                onClick={handleToggle}
            >
                <StarIcon weight={isSorted ? "fill" : "regular"} />
            </Button>
        </div>
    );
};

const BooleanCell = ({ cell }) => (
    <div className="flex justify-center items-center">
        {cell.getValue() ? (
            <CheckIcon className="h-4 w-4 text-green-700" />
        ) : (
            <XIcon className="h-4 w-4 text-red-700" />
        )}
    </div>
);
const FavCell = ({ cell, row, table }) => {
    const isFav = Boolean(cell.getValue());

    const handleToggle = () => {
        table.options.meta?.toggleFavorite(row.original.id);
    };

    return (
        <div className="flex justify-center items-center text-secondary">
            <Button
                variant="ghost"
                size="icon-xs"
                className="p-0 m-0 h-8"
                onClick={handleToggle}
            >
                <StarIcon weight={isFav ? "fill" : "regular"} />
            </Button>
        </div>
    );
};
// const secondaryTextMeta = {
//     className: "text-secondary",
// };
const favColMeta = {
    className: "min-w-[40px] max-w-[40px] px-0 text-center",
};
const statusColMeta = {
    className: "min-w-[196px]",
};
const checkColMeta = {
    className: "w-[67px] min-w-[67px] max-w-[67px] px-0 text-center",
};

export const columns = [
    { accessorKey: "id", header: "#" },
    {
        accessorKey: "notification",
        header: FavHeader,
        cell: FavCell,
        meta: favColMeta
    },
    {
        accessorKey: "status",
        meta: statusColMeta,
        header: ({ column }) => <SortableHeader column={column} />,
    },
    { accessorKey: "company", header: "Компания" },
    { accessorKey: "name", header: "Стажировка" },
    { accessorKey: "opens", header: "Открытие" },
    { accessorKey: "closes", header: "Закрытие" },
    { accessorKey: "requirements", header: "Требования" },
    { accessorKey: "format", header: "Формат" },
    { accessorKey: "hours", header: "Часы" },
    { accessorKey: "duration", header: "Длительность" },
    { accessorKey: "stages", header: "Процесс подачи" },
    {
        accessorKey: "salary",
        header: "З/П",
        meta: checkColMeta,
        cell: BooleanCell,
    },
    {
        accessorKey: "resume",
        header: "Резюме",
        meta: checkColMeta,
        cell: BooleanCell,
    },
    {
        accessorKey: "cover_letter",
        header: "Письмо",
        meta: checkColMeta,
        cell: BooleanCell,
    },
];
