"use client"

import { useState } from "react"
import { SiCheckCircleFill, SiCopy } from "stera-icons"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard"

const MANAGERS = [
  { id: "pnpm", command: "pnpm add stera-icons" },
  { id: "npm", command: "npm install stera-icons" },
  { id: "bun", command: "bun add stera-icons" },
  { id: "yarn", command: "yarn add stera-icons" },
] as const

type Manager = (typeof MANAGERS)[number]["id"]

export function InstallCommand() {
  const [manager, setManager] = useState<Manager>("pnpm")
  const { copied, copyToClipboard } = useCopyToClipboard()

  const active = MANAGERS.find((m) => m.id === manager) ?? MANAGERS[0]
  const isCopied = copied === active.id

  return (
    <Tabs
      value={manager}
      onValueChange={(value) => setManager(value as Manager)}
      className="gap-0 rounded-[20px] bg-surface-muted p-2"
    >
      <div className="flex items-center justify-between gap-2">
        <TabsList variant="inset" size="md">
          {MANAGERS.map((m) => (
            <TabsTrigger
              key={m.id}
              value={m.id}
              // Same selector as the md size typography, so cn() replaces it
              className="group-data-[size=md]/tabs-list:st-mono-md"
            >
              {m.id}
            </TabsTrigger>
          ))}
        </TabsList>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Copy install command"
                className="text-text-subtle"
                onClick={() => copyToClipboard(active.command, active.id)}
              />
            }
          >
            {isCopied ? <SiCheckCircleFill /> : <SiCopy />}
          </TooltipTrigger>
          <TooltipContent>{isCopied ? "Copied" : "Copy"}</TooltipContent>
        </Tooltip>
      </div>
      {MANAGERS.map((m) => (
        <TabsContent key={m.id} value={m.id}>
          <pre className="overflow-x-auto px-3 pt-4 pb-2">
            <code className="st-mono-md text-text" data-language="bash">
              {m.command}
            </code>
          </pre>
        </TabsContent>
      ))}
    </Tabs>
  )
}
