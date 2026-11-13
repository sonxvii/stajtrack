import { useState } from "react";

import { MagnifyingGlassIcon } from "@phosphor-icons/react";

import { columns } from "@/components/ui/data-table/columns";
import { DataTable } from "@/components/ui/data-table/data-table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { ToggleGroup, ToggleGroupItem } from "@/Components/ui/toggle-group";

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
        notification: false,
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
    const [selectedFormats, setSelectedFormats] = useState([]);
    const [data, setData] = useState(internships);

    const toggleFavorite = (id) => {
        setData((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, notification: !item.notification }
                    : item,
            ),
        );
    };
    return (
        <div className="mx-auto py-10 px-3">
            <div className="flex flex-row gap-4 mb-4 max-w-sm">
                <ButtonGroup className="border-b " orientation="horizontal">
                    <Input placeholder="Поиск" className="border-0 min-w-72" />
                    <Button variant="ghost" size="xs" aria-label="Search">
                        <MagnifyingGlassIcon />
                    </Button>
                </ButtonGroup>

                <ToggleGroup
                    multiple
                    variant="outline"
                    value={selectedFormats}
                    onValueChange={(value) => setSelectedFormats(value)}
                    className="gap-0"
                >
                    <ToggleGroupItem
                        value="office"
                        size="lg"
                        className="text-secondary hover:text-primary hover:bg-foreground data-[state=on]:bg-foreground data-pressed:text-primary data-pressed:border-primary active:not-aria-[haspopup]:translate-y-px"
                    >
                        Офис
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="hybrid"
                        size="lg"
                        className="text-secondary hover:text-primary hover:bg-foreground data-[state=on]:bg-foreground data-pressed:text-primary data-pressed:border-primary active:not-aria-[haspopup]:translate-y-px"
                    >
                        Гибрид
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="online"
                        size="lg"
                        className="text-secondary hover:text-primary hover:bg-foreground data-[state=on]:bg-foreground data-pressed:text-primary data-pressed:border-primary active:not-aria-[haspopup]:translate-y-px"
                    >
                        Онлайн
                    </ToggleGroupItem>
                    {/* поправить размеры по высоте */}
                </ToggleGroup>
            </div>
            <DataTable
                columns={columns}
                data={data}
                meta={{ toggleFavorite }}
            />
        </div>
    );
}
