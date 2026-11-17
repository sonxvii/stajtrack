import * as React from "react"
import { cn } from "cn"
import { Circle } from "lucide-react";


function Card({
  className,
  size = "default",
  ...props
}) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "group/card flex flex-col",
        "rounded-md border ring-1 ring-foreground/10",
      )}
      {...props}
    />
  )
}

function CardHeader({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header gap-1 px-3 py-3 border-b grid auto-rows-min",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "sans-md font-medium",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({
  className,
  children,
  ...props
}) {
  return (
    <div
      data-slot="card-description"
      className={cn("sans-md  flex items-center gap-2", className)}
      {...props}
    >
      <span>{children}</span>
      <Circle className="size-1.5 shrink-0 fill-emerald-500 text-emerald-500 animate-pulse" />
    </div>
  )
}

function CardAction({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-content"
      className={cn("bg-foreground px-3 py-3", className)}
      {...props}
    />
  )
}

function CardFooter({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center rounded-none border-t p-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
