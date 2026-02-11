import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GridFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GridFillDuotone = memo(
  forwardRef<SVGSVGElement, GridFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="grid-fill-duotone" {...props}>
      <path d="M13.92 15.42v3.83h-3.84v-3.83zM8.58 15.42v3.83q-.71 0-1.22-.04a3 3 0 0 1-1.1-.26 2.8 2.8 0 0 1-1.21-1.2 3 3 0 0 1-.26-1.11l-.04-1.22zM19.25 15.42q0 .71-.04 1.22a3 3 0 0 1-.26 1.1q-.4.8-1.2 1.21a3 3 0 0 1-1.11.26l-1.22.04v-3.83zM8.58 10.08v3.84H4.75v-3.84zM13.92 10.08v3.84h-3.84v-3.84zM19.25 10.08v3.84h-3.83v-3.84zM8.58 8.58H4.75q0-.71.04-1.22c.05-.53.13-.86.26-1.1q.4-.8 1.2-1.21a3 3 0 0 1 1.11-.26l1.22-.04zM13.92 4.75v3.83h-3.84V4.75zM15.42 4.75q.72 0 1.22.04c.53.05.86.13 1.1.26q.8.4 1.21 1.2c.13.25.21.58.26 1.11l.04 1.22h-3.83z" opacity={0.4} />
        <path fillRule="evenodd" d="M14.64 3.25h.05q1.24-.01 2.07.05.93.06 1.67.41c.8.41 1.45 1.06 1.86 1.86.25.5.36 1.04.41 1.67q.06.83.05 2.07v5.38q.01 1.24-.05 2.07a4 4 0 0 1-.41 1.67c-.41.8-1.06 1.45-1.86 1.86-.5.25-1.04.36-1.67.41q-.83.06-2.07.05H9.31q-1.24.01-2.07-.05a4 4 0 0 1-1.67-.41 4.3 4.3 0 0 1-1.86-1.86 4 4 0 0 1-.41-1.67q-.06-.83-.05-2.07V9.31q-.01-1.24.05-2.07.06-.93.41-1.67c.41-.8 1.06-1.45 1.86-1.86.5-.25 1.04-.36 1.67-.41a27 27 0 0 1 2.07-.05h5.33m-4.56 16h3.84v-3.83h-3.84zm-5.33-3.83q0 .71.04 1.22c.05.53.13.86.26 1.1q.4.8 1.2 1.21c.25.13.58.21 1.11.26l1.22.04v-3.83zm10.67 3.83q.71 0 1.22-.04a3 3 0 0 0 1.1-.26q.8-.4 1.21-1.2c.13-.25.21-.58.26-1.11l.04-1.22h-3.83zM4.75 13.92h3.83v-3.84H4.75zm5.33 0h3.84v-3.84h-3.84zm5.34 0h3.83v-3.84h-3.83zM8.58 4.75q-.71 0-1.22.04a3 3 0 0 0-1.1.26q-.8.4-1.21 1.2a3 3 0 0 0-.26 1.11l-.04 1.22h3.83zm1.5 3.83h3.84V4.75h-3.84zm5.34 0h3.83q0-.71-.04-1.22a3 3 0 0 0-.26-1.1 2.8 2.8 0 0 0-1.2-1.21 3 3 0 0 0-1.11-.26l-1.22-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

GridFillDuotone.displayName = 'GridFillDuotone';

// Triple export pattern (lucide-react style)
export { GridFillDuotone, GridFillDuotone as GridFillDuotoneIcon, GridFillDuotone as SiGridFillDuotone };
export default GridFillDuotone;
export type { GridFillDuotoneProps };
