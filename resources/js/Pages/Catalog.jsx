import { CaretRightIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { columns } from "@/components/ui/data-table/columns";
import { DataTable } from "@/components/ui/data-table/data-table";

const mockData = [
    {
        id: 1,
        notification: false,
        status: "Подано",
        company: "Яндекс",
        name: "Young & Yandex",
        opens: "01.11.2026",
        closes: "01.12.2026",
        requirements: "От 2-го курса",
        format: "Офис / Онлайн / Гибрид",
        hours: "20 / 30 / 40",
        duration: "6-9 месяцев",
        stages: "ОНТ → HR → ТЕХ → ИР",
        salary: true,
        resume: true,
        cover_letter: false,
    },
    {
        id: 2,
        notification: true,
        status: "Подано",
        company: "Лаборатория Касперского",
        name: "Young & Yandex",
        opens: "01.11.2026",
        closes: "01.12.2026",
        requirements: "От 2-го курса",
        format: "Офис / Онлайн / Гибрид",
        hours: "20 / 30 / 40",
        duration: "6-9 месяцев",
        stages: "ОНТ → HR → ТЕХ → ИР",
        salary: true,
        resume: true,
        cover_letter: false,
    },
];

export default function Catalog({ internships = mockData }) {
  return (
    <div className="w-full mx-auto py-10 px-3">
      <DataTable columns={columns} data={internships} />
    </div>
  );
}
