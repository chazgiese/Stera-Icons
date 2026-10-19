import { CodeBlock } from "@/components/code-block";
import { InstallCommand } from "@/components/install-command";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function DocsContent() {
  return (
    <>
      <section className="mb-10">
        <h2 className="st-heading-md text-text mb-4">Installation</h2>
        <InstallCommand />
      </section>

      <section className="mb-10">
        <h2 className="st-heading-md text-text mb-4">Quick Start</h2>
        <CodeBlock
          code={`import { SiHeart, SiHeartFill, SiHeartDuotone } from "stera-icons";

export function App() {
  return (
    <div>
      <SiHeart className="h-6 w-6" />
      <SiHeartFill className="h-8 w-8 text-red-500" />
      <SiHeartDuotone className="h-10 w-10" />
    </div>
  );
}`}
          language="tsx"
        />
      </section>

      <section className="mb-10">
        <h2 className="st-heading-md text-text mb-4">Variants</h2>
        <p className="st-body-md text-text-subtle mb-4">
          Every icon comes in 6 variants across 3 weights and 2 styles:
        </p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                Variant
              </TableHead>
              <TableHead>
                Suffix
              </TableHead>
              <TableHead>
                Example
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Regular</TableCell>
              <TableCell className="font-mono text-xs">(none)</TableCell>
              <TableCell className="font-mono text-xs">SiHeart</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Regular Duotone</TableCell>
              <TableCell className="font-mono text-xs">Duotone</TableCell>
              <TableCell className="font-mono text-xs">SiHeartDuotone</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bold</TableCell>
              <TableCell className="font-mono text-xs">Bold</TableCell>
              <TableCell className="font-mono text-xs">SiHeartBold</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bold Duotone</TableCell>
              <TableCell className="font-mono text-xs">BoldDuotone</TableCell>
              <TableCell className="font-mono text-xs">
                SiHeartBoldDuotone
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Fill</TableCell>
              <TableCell className="font-mono text-xs">Fill</TableCell>
              <TableCell className="font-mono text-xs">SiHeartFill</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Fill Duotone</TableCell>
              <TableCell className="font-mono text-xs">FillDuotone</TableCell>
              <TableCell className="font-mono text-xs">
                SiHeartFillDuotone
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      <section className="mb-10">
        <h2 className="st-heading-md text-text mb-4">Props</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                Prop
              </TableHead>
              <TableHead>
                Type
              </TableHead>
              <TableHead>
                Default
              </TableHead>
              <TableHead>
                Description
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-mono text-xs">className</TableCell>
              <TableCell className="font-mono text-xs">string</TableCell>
              <TableCell>—</TableCell>
              <TableCell>CSS class names applied to the SVG</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-xs">size</TableCell>
              <TableCell className="font-mono text-xs">
                number | string
              </TableCell>
              <TableCell>—</TableCell>
              <TableCell>
                Width and height of the SVG. Omit to size with CSS
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-xs">color</TableCell>
              <TableCell className="font-mono text-xs">string</TableCell>
              <TableCell className="font-mono text-xs">
                currentColor
              </TableCell>
              <TableCell>Fill color of the icon</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-xs">title</TableCell>
              <TableCell className="font-mono text-xs">string</TableCell>
              <TableCell>—</TableCell>
              <TableCell>
                Accessible name, rendered as a title element
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-xs">...rest</TableCell>
              <TableCell className="font-mono text-xs">
                SVGProps
              </TableCell>
              <TableCell>—</TableCell>
              <TableCell>
                All standard SVG attributes are forwarded
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      <section className="mb-10">
        <h2 className="st-heading-md text-text mb-4">Accessibility</h2>
        <p className="st-body-md text-text-subtle mb-4">
          Icons are decorative by default and hidden from assistive technology.
          To make an icon meaningful, give it a name with aria-label or title.
          For icon-only buttons, label the button instead.
        </p>
        <CodeBlock
          code={`<SiSearch />                     // decorative: aria-hidden="true"
<SiSearch aria-label="Search" /> // meaningful: role="img"

<button aria-label="Close">
  <SiX />
</button>`}
          language="tsx"
        />
      </section>

      <section className="mb-10">
        <h2 className="st-heading-md text-text mb-4">For LLMs</h2>
        <p className="st-body-md text-text-subtle">
          A usage guide for AI coding tools is available at{" "}
          <a href="/llms.txt" className="text-text underline">
            /llms.txt
          </a>
          . A full index of every icon name with tags is at{" "}
          <a href="/llms-full.txt" className="text-text underline">
            /llms-full.txt
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="st-heading-md text-text mb-4">Tree Shaking</h2>
        <p className="st-body-md text-text-subtle">
          Stera Icons supports tree shaking out of the box. Only the icons you
          import will be included in your final bundle. Each icon is individually
          exported, so your bundler can eliminate unused icons automatically.
        </p>
      </section>
    </>
  );
}
