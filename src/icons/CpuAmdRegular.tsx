import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CpuAmdRegularProps = Omit<IconBaseProps, 'children'>;

const CpuAmdRegular = memo(
  forwardRef<SVGSVGElement, CpuAmdRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="cpu-amd" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.5 6.75q.51 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.36.02.88v3.17q.02.4-.06.78a2 2 0 0 1-.23.58q-.21.32-.52.59l-1.82 1.82c-.2.2-.37.38-.6.52a2 2 0 0 1-.57.23q-.37.07-.78.06H9.5q-.52 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.37-.02-.88v-5q0-.52.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.36-.02.88-.02zm-5 1.5-.76.01a1 1 0 0 0-.22.04.5.5 0 0 0-.22.22l-.04.22-.01.76v5l.01.76.04.22q.08.15.22.22l.22.04.76.01h3.17l.43-.01.14-.06c.04-.02.07-.05.32-.3l1.82-1.82c.25-.25.28-.28.3-.32l.06-.14.01-.43V9.5l-.01-.76a1 1 0 0 0-.04-.22.5.5 0 0 0-.22-.22 1 1 0 0 0-.22-.04l-.76-.01z" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M16 1.25c.41 0 .75.34.75.75v1.36q.77.1 1.4.4c.9.46 1.63 1.19 2.08 2.08q.32.65.41 1.41H22a.75.75 0 0 1 0 1.5h-1.26l.01 1.65v.85H22a.75.75 0 0 1 0 1.5h-1.25v.85l-.01 1.65H22a.75.75 0 0 1 0 1.5h-1.36q-.1.77-.4 1.4a4.8 4.8 0 0 1-2.08 2.08q-.64.32-1.41.41V22a.75.75 0 0 1-1.5 0v-1.26l-1.65.01h-.85V22a.75.75 0 0 1-1.5 0v-1.25h-.85l-1.65-.01V22a.75.75 0 0 1-1.5 0v-1.36q-.78-.1-1.4-.4a4.8 4.8 0 0 1-2.08-2.08 4 4 0 0 1-.41-1.41H2a.75.75 0 0 1 0-1.5h1.26l-.01-1.65v-.85H2a.75.75 0 0 1 0-1.5h1.25v-.85l.01-1.65H2a.75.75 0 0 1 0-1.5h1.36q.1-.78.4-1.4a4.8 4.8 0 0 1 2.08-2.08q.65-.32 1.41-.41V2a.75.75 0 0 1 1.5 0v1.26l1.65-.01h.85V2a.75.75 0 0 1 1.5 0v1.25h.85l1.65.01V2c0-.41.34-.75.75-.75m-5.6 3.5c-1.13 0-1.94 0-2.57.05s-1 .15-1.3.3q-.94.5-1.43 1.42c-.15.3-.25.7-.3 1.31-.05.63-.05 1.44-.05 2.57v3.2c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h3.2c1.13 0 1.94 0 2.57-.05s1-.15 1.3-.3q.94-.5 1.43-1.42c.15-.3.25-.7.3-1.31.05-.63.05-1.44.05-2.57v-3.2c0-1.13 0-1.94-.05-2.57s-.15-1-.3-1.3q-.5-.94-1.42-1.43c-.3-.15-.7-.25-1.31-.3-.63-.05-1.44-.05-2.57-.05z" clipRule="evenodd" />
    </IconBase>
  ))
);

CpuAmdRegular.displayName = 'CpuAmdRegular';

// Triple export pattern (lucide-react style)
export { CpuAmdRegular, CpuAmdRegular as CpuAmdRegularIcon, CpuAmdRegular as SiCpuAmdRegular };
export default CpuAmdRegular;
export type { CpuAmdRegularProps };
