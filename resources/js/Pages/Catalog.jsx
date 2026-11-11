import { CaretRightIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

export default function Catalog() {
    return (
        <div className="flex flex-wrap items-center gap-2 md:flex-row">
            <Button variant="outline" size="xs" data-icon="inline-end">
                Button
                <CaretRightIcon/>
            </Button>
        </div>
    );
}
