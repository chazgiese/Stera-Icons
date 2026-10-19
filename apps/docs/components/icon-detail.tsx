'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import type { IconEntry } from '@/lib/types';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { getSVGData, downloadSVG, getSVGFilename } from '@/utils/svgExport';
import { getIconNames, getUsageSnippet } from '@/utils/iconCodeSnippets';
import { VariantGrid, VARIANTS, type VariantKey } from '@/components/variant-grid';
import { CodeSection } from '@/components/code-section';
import { Button } from '@/components/ui/button';
import { Chip } from '@/components/ui/chip';
import { useSetSearchQuery } from '@/components/search-provider';
import {
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { SiCopyDuotone, SiDownloadDuotone, SiCheckCircleFill, SiX } from 'stera-icons';

interface IconDetailProps {
  icon: IconEntry;
  // "drawer" must be rendered directly inside a DrawerPopup; it renders the
  // DrawerHeader (which titles the dialog) and the DrawerContent
  variant: 'page' | 'drawer';
  // Without a handler, tags link to the filtered icon grid
  onTagClick?: (tag: string) => void;
  // The icon variant selected when the detail first renders
  initialVariant?: VariantKey;
}

export function IconDetail({ icon, variant, onTagClick, initialVariant = 'regular' }: IconDetailProps) {
  const { copied, copyToClipboard, resetCopied } = useCopyToClipboard();
  const setQuery = useSetSearchQuery();
  const [selectedVariant, setSelectedVariant] = useState<VariantKey>(
    icon.variants[initialVariant] ? initialVariant : 'regular'
  );
  const gridRef = useRef<HTMLDivElement>(null);

  const { weight, duotone } = VARIANTS.find((v) => v.key === selectedVariant) ?? VARIANTS[0];
  const { prettyName, prefixedName } = getIconNames(icon, weight, duotone);
  const usageCode = getUsageSnippet(prefixedName);

  // The generator adds the icon's own name as a tag; it's already the title
  const tags = icon.tags.filter((tag) => tag !== icon.name);

  const handleGetSVGData = () =>
    getSVGData(
      gridRef.current?.querySelector('[aria-pressed="true"] svg'),
      prettyName,
      weight,
      duotone
    );
  const handleDownloadSVG = () => {
    const svgData = handleGetSVGData();
    const filename = getSVGFilename(icon.name, weight, duotone);
    downloadSVG(svgData, filename);
  };

  // A bare button inside the heading, so the title copies on click without
  // changing the heading's layout or its role as the dialog's name. The
  // tooltip is controlled, so it only appears as confirmation after a copy.
  // Escape and outside presses dismiss it early instead of being swallowed
  const title = (
    <Tooltip
      open={copied === 'name'}
      onOpenChange={(open, { reason }) => {
        if (!open && (reason === 'escape-key' || reason === 'outside-press')) resetCopied();
      }}
    >
      <TooltipTrigger
        render={
          <button
            type="button"
            className="outline-none transition-colors hover:text-text focus-visible:ring-3 focus-visible:ring-ring"
            onClick={() => copyToClipboard(prettyName, 'name')}
          />
        }
      >
        {prettyName}
      </TooltipTrigger>
      <TooltipContent side="bottom">Copied</TooltipContent>
    </Tooltip>
  );

  const actions = (
    <div className="flex items-center text-text-subtle bg-surface-muted rounded-full p-1">
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="ghost"
              size="icon"
              aria-label="Copy SVG"
              onClick={() => copyToClipboard(handleGetSVGData(), 'svg')}
            />
          }
        >
          {copied === 'svg' ? <SiCheckCircleFill /> : <SiCopyDuotone />}
        </TooltipTrigger>
        <TooltipContent>{copied === 'svg' ? 'Copied' : 'Copy SVG'}</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="ghost"
              size="icon"
              aria-label="Download SVG"
              onClick={handleDownloadSVG}
            />
          }
        >
          <SiDownloadDuotone />
        </TooltipTrigger>
        <TooltipContent>Download SVG</TooltipContent>
      </Tooltip>
      {variant === 'drawer' && (
        <DrawerClose render={<Button variant="ghost" size="icon" aria-label="Close" />}>
          <SiX />
        </DrawerClose>
      )}
    </div>
  );

  const body = (
    <>
      {/* Variants */}
      <VariantGrid
        ref={gridRef}
        icon={icon}
        selected={selectedVariant}
        onSelect={setSelectedVariant}
        // The page is wide enough to show all six in one row
        className={variant === 'page' ? 'sm:grid-cols-6' : undefined}
      />

      {/* Usage */}
      <CodeSection
        title="Usage"
        copyText={usageCode}
        copyId="usage"
        copied={copied}
        onCopy={copyToClipboard}
      >
        <span className="syntax-keyword">import</span>
        <span className="syntax-punctuation">{' { '}</span>
        <span className="syntax-component">{prefixedName}</span>
        <span className="syntax-punctuation">{' } '}</span>
        <span className="syntax-keyword">from</span>
        <span className="syntax-punctuation">{' '}</span>
        <span className="syntax-string">&apos;stera-icons&apos;</span>
        {'\n\n'}
        <span className="syntax-punctuation">{'<'}</span>
        <span className="syntax-component">{prefixedName}</span>
        <span className="syntax-punctuation">{' />'}</span>
      </CodeSection>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-x-1.5 gap-y-2">
          {tags.map((tag) =>
            onTagClick ? (
              <Chip key={tag} size="sm" className="bg-surface-muted st-body-md-compact text-text-subtle" onClick={() => onTagClick(tag)}>
                {tag}
              </Chip>
            ) : (
              <Chip
                key={tag}
                size="sm"
                nativeButton={false}
                render={<Link href="/" onClick={() => setQuery(tag)} />}
              >
                {tag}
              </Chip>
            )
          )}
        </div>
      )}
    </>
  );

  if (variant === 'drawer') {
    return (
      <>
        <DrawerHeader className="flex-row items-center gap-4 pl-5 pr-2.5 py-2.5">
          <DrawerTitle className="flex-1">{title}</DrawerTitle>
          {actions}
        </DrawerHeader>
        <DrawerContent className="px-5 pt-4 pb-5">
          <div className="flex flex-col gap-6">{body}</div>
        </DrawerContent>
      </>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4 pr-2.5 py-2.5">
        <h1 className="st-display-sm text-text flex-1">{title}</h1>
        {actions}
      </div>
      {body}
    </div>
  );
}
