"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { SiX } from "stera-icons"

type DrawerSide = "top" | "right" | "bottom" | "left"

const SIDE_TO_SWIPE_DIRECTION = {
  top: "up",
  right: "right",
  bottom: "down",
  left: "left",
} as const satisfies Record<DrawerSide, "up" | "right" | "down" | "left">

const DrawerContext = React.createContext<{ side: DrawerSide }>({ side: "right" })

function useDrawerSide() {
  return React.useContext(DrawerContext).side
}

function Drawer({
  side = "right",
  swipeDirection,
  ...props
}: DrawerPrimitive.Root.Props & { side?: DrawerSide }) {
  const value = React.useMemo(() => ({ side }), [side])
  return (
    <DrawerContext.Provider value={value}>
      <DrawerPrimitive.Root
        data-slot="drawer"
        swipeDirection={swipeDirection ?? SIDE_TO_SWIPE_DIRECTION[side]}
        {...props}
      />
    </DrawerContext.Provider>
  )
}

function DrawerTrigger({ ...props }: DrawerPrimitive.Trigger.Props) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

function DrawerClose({ ...props }: DrawerPrimitive.Close.Props) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

function DrawerPortal({ ...props }: DrawerPrimitive.Portal.Props) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

function DrawerBackdrop({
  className,
  ...props
}: DrawerPrimitive.Backdrop.Props) {
  return (
    <DrawerPrimitive.Backdrop
      data-slot="drawer-backdrop"
      className={cn(
        // Base
        "fixed inset-0 z-50 backdrop-blur-sm",
        // Blur
        "",
        // Swipe-driven opacity
        "opacity-[calc(1-var(--drawer-swipe-progress,0))]",
        // Open/close transition
        "transition-opacity duration-200 ease-out",
        "data-starting-style:opacity-0 data-ending-style:opacity-0",
        "data-swiping:duration-0",
        "data-ending-style:duration-[calc(var(--drawer-swipe-strength,1)*400ms)]",
        className
      )}
      {...props}
    />
  )
}

function DrawerViewport({
  className,
  ...props
}: DrawerPrimitive.Viewport.Props) {
  const side = useDrawerSide()
  return (
    <DrawerPrimitive.Viewport
      data-slot="drawer-viewport"
      data-side={side}
      className={cn(
        // Base
        // Base — no padding here; the gutter lives on the popup container so
        // the container sits flush against the screen edge.
        "fixed inset-0 z-50 flex",
        // Position by side
        "data-[side=right]:items-stretch data-[side=right]:justify-end",
        "data-[side=left]:items-stretch data-[side=left]:justify-start",
        "data-[side=top]:items-start",
        "data-[side=bottom]:items-end",
        className
      )}
      {...props}
    />
  )
}

function DrawerHandle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-handle"
      aria-hidden
      className={cn(
        // Generous grab zone that owns the touch gesture (so dragging snaps the
        // drawer instead of being claimed as a native scroll on touch devices)
        "flex w-full shrink-0 cursor-grab touch-none select-none justify-center py-2 active:cursor-grabbing",
        // Fade out when a nested drawer is open; restore during a swipe gesture
        "transition-opacity duration-200",
        "group-data-nested-drawer-open/drawer:opacity-0",
        "group-data-nested-drawer-swiping/drawer:opacity-100",
        className
      )}
      {...props}
    >
      <div className="h-1 w-12 rounded-full bg-surface-muted" />
    </div>
  )
}

// Panel sizing per side. Unprefixed so a plain consumer class (w-*, max-h-*)
// overrides it through tailwind-merge. The container hugs the panel, so sizes
// along the slide axis must be fixed or viewport-based (w-96, w-[75vw]) — a
// percentage has nothing definite to resolve against.
const PANEL_SIZE = {
  top: "max-h-[80vh] grow",
  right: "h-full w-[min(75vw,24rem)]",
  bottom: "max-h-[80vh] grow",
  left: "h-full w-[min(75vw,24rem)]",
} as const satisfies Record<DrawerSide, string>

// The drawer, batteries included — Portal + Backdrop + Viewport + Popup, plus
// the bottom-drawer handle and the corner close button. Mirrors the
// `DialogPopup` composite in dialog.tsx.
//
// Two layers: Base UI's Popup is an invisible container that sits flush against
// the screen edge and is the drag/transform target; the visible panel sits
// inside it. `className` styles the panel, every other prop goes to the
// container.
function DrawerPopup({
  className,
  children,
  showCloseButton = true,
  ...props
}: DrawerPrimitive.Popup.Props & {
  showCloseButton?: boolean
}) {
  const side = useDrawerSide()
  return (
    <DrawerPortal>
      <DrawerBackdrop />
      <DrawerViewport>
        <DrawerPrimitive.Popup
          data-slot="drawer-popup"
          data-side={side}
          className={cn(
            // Group
            "group/drawer",
            // Base — invisible; clicks in the gutter fall through to the
            // viewport and dismiss like any outside press.
            "pointer-events-none flex outline-none",
            // Gutter — the space that floats the panel off the screen edge.
            // Change it here; the animation doesn't need to know about it.
            "p-2",
            // Hug the panel along the slide axis, fill the other
            "data-[side=right]:h-full data-[side=right]:max-w-full",
            "data-[side=left]:h-full data-[side=left]:max-w-full",
            "data-[side=top]:w-full data-[side=top]:max-h-full data-[side=top]:flex-col",
            "data-[side=bottom]:w-full data-[side=bottom]:max-h-full data-[side=bottom]:flex-col",
            // Nested-drawer stacking variables (consumed by transform / height below)
            "[--peek:1rem] [--stack-step:0.05]",
            "[--stack-progress:clamp(0,var(--drawer-swipe-progress,0),1)]",
            "[--stack-scale-base:max(0,calc(1-(var(--nested-drawers,0)*var(--stack-step))))]",
            "[--stack-scale:calc(var(--stack-scale-base)+(var(--stack-step)*var(--stack-progress)))]",
            "[--stack-shrink:calc(1-var(--stack-scale))]",
            "[--stack-peek-offset:max(0px,calc((var(--nested-drawers,0)-var(--stack-progress))*var(--peek)))]",
            "[--stack-height:max(0px,var(--drawer-frontmost-height,var(--drawer-height,0px)))]",
            // Transform-origin per side (peek edge)
            "data-[side=right]:origin-[0%_50%]",
            "data-[side=left]:origin-[100%_50%]",
            "data-[side=top]:origin-[50%_0%]",
            "data-[side=bottom]:origin-[50%_100%]",
            // Swipe-driven + stacking transform per side
            "data-[side=right]:transform-[translateX(calc(var(--drawer-swipe-movement-x)-var(--stack-peek-offset)))_scale(var(--stack-scale))]",
            "data-[side=left]:transform-[translateX(calc(var(--drawer-swipe-movement-x)+var(--stack-peek-offset)))_scale(var(--stack-scale))]",
            "data-[side=top]:transform-[translateY(calc(var(--drawer-swipe-movement-y)+var(--stack-peek-offset)+(var(--stack-shrink)*var(--stack-height))))_scale(var(--stack-scale))]",
            "data-[side=bottom]:transform-[translateY(calc(var(--drawer-snap-point-offset,0px)+var(--drawer-swipe-movement-y)-var(--stack-peek-offset)-(var(--stack-shrink)*var(--stack-height))))_scale(var(--stack-scale))]",
            // Height clamp when nested (top/bottom — sides have fixed width)
            "data-[side=bottom]:data-nested-drawer-open:h-(--drawer-frontmost-height,var(--drawer-height))",
            "data-[side=top]:data-nested-drawer-open:h-(--drawer-frontmost-height,var(--drawer-height))",
            // Transition
            "transition-[transform,opacity,height] duration-450 ease-[cubic-bezier(0.32,0.72,0,1)] will-change-transform",
            "data-swiping:duration-0 data-swiping:select-none",
            "data-nested-drawer-swiping:duration-0",
            "data-ending-style:duration-[calc(var(--drawer-swipe-strength,1)*400ms)]",
            // Starting/ending — slide off-screen
            "data-[side=right]:data-starting-style:transform-[translateX(100%)] data-[side=right]:data-ending-style:transform-[translateX(100%)]",
            "data-[side=left]:data-starting-style:transform-[translateX(-100%)] data-[side=left]:data-ending-style:transform-[translateX(-100%)]",
            "data-[side=top]:data-starting-style:transform-[translateY(-100%)] data-[side=top]:data-ending-style:transform-[translateY(-100%)]",
            "data-[side=bottom]:data-starting-style:transform-[translateY(100%)] data-[side=bottom]:data-ending-style:transform-[translateY(100%)]"
          )}
          {...props}
        >
          <div
            data-slot="drawer-panel"
            data-side={side}
            className={cn(
              // Base — clips its contents; scrolling lives on DrawerContent
              // (Drawer.Content).
              "relative flex min-h-0 min-w-0 flex-col overflow-hidden rounded-xl bg-surface-subtle text-sm text-text",
              // Interactive only while open, so it goes inert during the exit
              "group-data-open/drawer:pointer-events-auto",
              // Sizing
              PANEL_SIZE[side],
              className
            )}
          >
            {side === "bottom" && <DrawerHandle />}
            {children}
            {showCloseButton && (
              <DrawerClose
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2.5 right-2.5 text-text-subtle"
                  />
                }
              >
                <SiX />
                <span className="sr-only">Close</span>
              </DrawerClose>
            )}
          </div>
        </DrawerPrimitive.Popup>
      </DrawerViewport>
    </DrawerPortal>
  )
}

// The scrollable region between DrawerHeader and DrawerFooter. Renders Base UI's
// Drawer.Content (`data-drawer-content`), which keeps the drawer draggable from
// the scroll edge while its content scrolls. Mirrors `DialogContent`.
function DrawerContent({ className, ...props }: DrawerPrimitive.Content.Props) {
  return (
    <DrawerPrimitive.Content
      data-slot="drawer-content"
      className={cn(
        "min-h-0 flex-1 overflow-y-auto overscroll-contain scroll-fade-t",
        className
      )}
      {...props}
    />
  )
}

function DrawerHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        // Base
        "flex flex-col p-4",
        // Sizing
        "gap-1.5",
        // Pad right when the corner close button (a direct child of the panel) is present
        "group-has-[>[data-slot=drawer-panel]>[data-slot=drawer-close]]/drawer:pr-14",
        // Fade out when a nested drawer is open; restore during a swipe gesture
        "transition-opacity duration-300",
        "group-data-nested-drawer-open/drawer:opacity-0",
        "group-data-nested-drawer-swiping/drawer:opacity-100",
        className
      )}
      {...props}
    />
  )
}

function DrawerFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn(
        // Base
        "flex p-4",
        // Position
        "mt-auto",
        // Sizing
        "gap-2 *:flex-1",
        // Fade out when a nested drawer is open; restore during a swipe gesture
        "transition-opacity duration-300",
        "group-data-nested-drawer-open/drawer:opacity-0",
        "group-data-nested-drawer-swiping/drawer:opacity-100",
        className
      )}
      {...props}
    />
  )
}

function DrawerTitle({ className, ...props }: DrawerPrimitive.Title.Props) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn(
        // Other
        "st-body-lg-strong text-text-subtle",
        className
      )}
      {...props}
    />
  )
}

function DrawerDescription({
  className,
  ...props
}: DrawerPrimitive.Description.Props) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn(
        // Other
        "text-sm text-text-subtle",
        className
      )}
      {...props}
    />
  )
}

// An invisible edge zone that opens the drawer when swiped from the screen edge.
// Base UI sets its own `touch-action`; position it yourself (e.g. fixed inset-y-0).
function DrawerSwipeArea({
  className,
  ...props
}: DrawerPrimitive.SwipeArea.Props) {
  return (
    <DrawerPrimitive.SwipeArea
      data-slot="drawer-swipe-area"
      className={cn(className)}
      {...props}
    />
  )
}

// App-level coordination: wrap your app in DrawerProvider, then DrawerIndent /
// DrawerIndentBackground react (via `data-active` + swipe CSS vars) when any
// drawer within the provider opens — enabling indent / parallax effects.
function DrawerProvider({ ...props }: DrawerPrimitive.Provider.Props) {
  return <DrawerPrimitive.Provider {...props} />
}

function DrawerIndent({ className, ...props }: DrawerPrimitive.Indent.Props) {
  return (
    <DrawerPrimitive.Indent
      data-slot="drawer-indent"
      className={cn(className)}
      {...props}
    />
  )
}

function DrawerIndentBackground({
  className,
  ...props
}: DrawerPrimitive.IndentBackground.Props) {
  return (
    <DrawerPrimitive.IndentBackground
      data-slot="drawer-indent-background"
      className={cn(className)}
      {...props}
    />
  )
}

// Imperative controller for detached triggers / programmatic open & close.
// NOTE: this is Base UI's `Drawer.Handle` (a controller). It is NOT the visual
// drag bar — that is the `DrawerHandle` component above.
const createDrawerHandle = DrawerPrimitive.createHandle

export {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerPortal,
  DrawerBackdrop,
  DrawerViewport,
  DrawerPopup,
  DrawerHandle,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerSwipeArea,
  DrawerProvider,
  DrawerIndent,
  DrawerIndentBackground,
  createDrawerHandle,
}
