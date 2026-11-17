import React, { useState } from "react";

import {
    Star,
    RussianRuble,
    FileText,
    MailOpen,
    ChevronRight,
    Search,
    FunnelX
} from "lucide-react";

import { columns } from "@/components/ui/data-table/columns";
import { DataTable } from "@/components/ui/data-table/data-table";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { ToggleGroup, ToggleGroupItem } from "@/Components/ui/toggle-group";
import {
    Combobox,
    ComboboxChip,
    ComboboxChips,
    ComboboxChipsInput,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxItem,
    ComboboxList,
    ComboboxValue,
    useComboboxAnchor,
} from "@/components/ui/combobox";

const positions = [
    "Backend",
    "Frontend",
    "Mobile",
    "SysEng",
    "1C / ERP",
    "DS / ML / AI",
    "DBA / DE / DWH",
    "QA",
    "Infra & DevOps",
    "SysAdmin / Support",
    "Аналитика",
    "Дизайн",
    "Менеджмент",
    "Другое",
];

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

const stages = ["ОНТ", "HR", "ТЕХ", "ИР"];

export default function Catalog({ internships = mockData }) {
    const [selectedFormats, setSelectedFormats] = useState([]);
    const [selectedHours, setSelectedHours] = useState([]);
    const [selectedPositions, setSelectedPositions] = useState([]);
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

    const anchor = useComboboxAnchor();

    const resetFilters = () => {
        setSelectedFormats([]);
        setSelectedHours([]);
        setSelectedPositions([]);
    };

    return (
        <div className="mx-auto py-10 px-3">
            <div className="flex flex-row gap-4 mb-4 max-w-sm">
                <ButtonGroup className="border-b " orientation="horizontal">
                    <Input placeholder="Поиск" className="border-0 min-w-72" />
                    <Button variant="ghost" size="xs" aria-label="Search">
                        <Search className="stroke-[1.8px]"/>
                    </Button>
                </ButtonGroup>

                <Combobox
                    multiple
                    autoHighlight
                    items={positions}
                    value={selectedPositions}
                    onValueChange={setSelectedPositions}
                >
                    <ComboboxChips ref={anchor} className="w-full">
                        <ComboboxValue>
                            {(values) => (
                                <React.Fragment>
                                    {values.map((value) => (
                                        <ComboboxChip key={value}>
                                            {value}
                                        </ComboboxChip>
                                    ))}
                                    <ComboboxChipsInput placeholder="Позиция" />
                                </React.Fragment>
                            )}
                        </ComboboxValue>
                    </ComboboxChips>
                    <ComboboxContent anchor={anchor}>
                        <ComboboxEmpty>Ничего не найдено.</ComboboxEmpty>
                        <ComboboxList>
                            {(item) => (
                                <ComboboxItem key={item} value={item}>
                                    {item}
                                </ComboboxItem>
                            )}
                        </ComboboxList>
                    </ComboboxContent>
                </Combobox>

                <ToggleGroup
                    multiple
                    variant="outline"
                    value={selectedFormats}
                    spacing={0}
                    onValueChange={(value) => setSelectedFormats(value)}
                >
                    <ToggleGroupItem
                        value="office"
                        size="lg"
                        className="text-secondary bg-foreground hover:text-primary data-[state=on]:bg-foreground data-pressed:text-primary data-pressed:bg-background active:not-aria-[haspopup]:translate-y-px"
                    >
                        Офис
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="hybrid"
                        size="lg"
                        className="text-secondary bg-foreground hover:text-primary data-[state=on]:bg-foreground data-pressed:text-primary data-pressed:bg-background active:not-aria-[haspopup]:translate-y-px"
                    >
                        Гибрид
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="online"
                        size="lg"
                        className="text-secondary bg-foreground hover:text-primary data-[state=on]:bg-foreground data-pressed:text-primary data-pressed:bg-background active:not-aria-[haspopup]:translate-y-px"
                    >
                        Онлайн
                    </ToggleGroupItem>
                </ToggleGroup>

                <ToggleGroup
                    multiple
                    variant="outline"
                    spacing={0}
                    value={selectedHours}
                    onValueChange={(value) => setSelectedHours(value)}
                >
                    <ToggleGroupItem value="20-hours" size="lg">
                        20
                    </ToggleGroupItem>
                    <ToggleGroupItem value="30-hours" size="lg">
                        30
                    </ToggleGroupItem>
                    <ToggleGroupItem value="40-hours" size="lg">
                        40
                    </ToggleGroupItem>
                </ToggleGroup>

                <Button variant="outline" size="icon-sm" onClick={resetFilters}>
                    <FunnelX className="stroke-[1.8px]" />
                </Button>
            </div>
            {/* <DataTable
                columns={columns}
                data={data}
                meta={{ toggleFavorite }}
            /> */}
            <Card>
                <CardHeader>
                    <CardTitle>Альфа-Банк</CardTitle>
                    <CardDescription>Альфа-Будущее</CardDescription>
                    <CardAction>Card Action</CardAction>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap items-start gap-x-6">
                        <div className="flex flex-col gap-0.5">
                            <span className="mono-sm text-secondary">
                                ТРЕБОВАНИЯ
                            </span>
                            <span className="sans-md font-normal text-primary">
                                От 2-го курса
                            </span>
                        </div>

                        <div className="flex flex-col gap-0.5">
                            <span className="mono-sm text-secondary">
                                ФОРМАТ
                            </span>
                            <span className="sans-md font-normal text-primary">
                                Офис / Онлайн / Гибрид
                            </span>
                        </div>

                        <div className="flex flex-col gap-0.5">
                            <span className="mono-sm text-secondary">
                                ОТКРЫТИЕ
                            </span>
                            <span className="sans-md font-normal text-primary">
                                01.12.26
                            </span>
                        </div>

                        <div className="flex flex-col gap-0.5">
                            <span className="mono-sm text-secondary">
                                ЗАКРЫТИЕ
                            </span>
                            <span className="sans-md font-normal text-primary">
                                01.12.26
                            </span>
                        </div>

                        <div className="flex flex-col gap-0.5">
                            <span className="mono-sm text-secondary">ЧАСЫ</span>
                            <span className="sans-md font-normal text-primary">
                                30/40
                            </span>
                        </div>

                        <div className="flex flex-col gap-0.5">
                            <span className="mono-sm text-secondary">
                                ДЛИТЕЛЬНОСТЬ
                            </span>
                            <span className="sans-md font-normal text-primary">
                                12-24 месяцев
                            </span>
                        </div>

                        <div className="flex flex-col gap-0.5">
                            <span className="mono-sm text-secondary">
                                ПРОЦЕСС ПОДАЧИ
                            </span>
                            <div className="flex items-center gap-0.5">
                                {stages.map((stage, index) => (
                                    <React.Fragment key={stage}>
                                        <span
                                            tabIndex={0}
                                            className="sans-sm cursor-pointer rounded border bg-background px-0.5 py-0.5 text-primary transition-colors hover:border-primary"
                                        >
                                            {stage}
                                        </span>
                                        {index < stages.length - 1 && (
                                            <ChevronRight className="size-3.5 text-secondary" />
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-0.5">
                            <span className="mono-sm text-secondary">
                                УСЛОВИЯ
                            </span>
                            <div className="flex items-center gap-2.5 text-primary pt-0.5">
                                <span className="sans-sm cursor-pointer rounded border bg-background px-0.5 py-0.5 transition-colors hover:border-primary">
                                    <RussianRuble className="size-4 stroke-[1.8px]" />
                                </span>

                                <span className="sans-sm cursor-pointer rounded border bg-background px-0.5 py-0.5 transition-colors hover:border-primary">
                                    <FileText className="size-4 stroke-[1.8px]" />
                                </span>

                                <span className="sans-sm cursor-pointer rounded border bg-background px-0.5 py-0.5 transition-colors hover:border-primary">
                                    <MailOpen className="size-4 stroke-[1.8px]" />
                                </span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
