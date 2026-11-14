import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "group/button font-mono border border-x rounded-lg inline-flex shrink-0 items-center justify-center bg-clip-padding whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                accent: 
                    "bg-primary border-0 text-foreground hover:bg-primary/98 active:bg-[color-mix(in_oklch,var(--text-primary),black_2%)]",
                outline:
                    "bg-transparent hover:text-secondary active:bg-foreground",
                disabled:
                    "bg-foreground opacity-50 disabled:pointer-events-none disabled:opacity-50 disabled:ring-0 disabled:outline-none aria-disabled:pointer-events-none aria-disabled:opacity-50 aria-disabled:ring-0",
                ghost:
                "bg-transparent border-0 text-secondary hover:text-primary hover:bg-foreground active:bg-primary/4"
            },
            size: {
                xs: "mono-sm gap-[4px] px-[12px] py-[6px] text-sm has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4 [&_svg:not([class*='size-'])]:size-4",
                sm: "mono-md gap-[6px] px-[14px] py-[7px] has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4 [&_svg:not([class*='size-'])]:size-4",
                lg: "mono-lg gap-[8px] px-[16px] py-[9px] has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4 [&_svg:not([class*='size-'])]:size-4.5",
                icon: "size-4",
                "icon-xs": "size-[32px] [&_svg:not([class*='size-'])]:size-4",
                "icon-sm": "size-[36px] [&_svg:not([class*='size-'])]:size-4",
                "icon-lg": "size-[42px] [&_svg:not([class*='size-'])]:size-4.5",
            },
            //поправить размеры//
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

function Button({
    className,
    variant = "default",
    size = "default",
    disabled = false,
    ...props
}) {
    return (
        <ButtonPrimitive
            data-slot="button"
            disabled={disabled}
            tabIndex={disabled ? -1 : props.tabIndex}
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    );
}
export { Button, buttonVariants };
