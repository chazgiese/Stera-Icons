import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GridFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GridFillDuotone = memo(
  forwardRef<SVGSVGElement, GridFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="grid-fill-duotone" {...props}>
      <path d="M14.67 16.67V22H9.33v-5.33zM7.33 16.67V22q-.92.01-1.58-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 17.6 2 16.67zM22 16.67a21 21 0 0 1-.04 1.58 4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.66.04-1.58.04v-5.33zM22 14.67h-5.33V9.33H22zM2 9.33h5.33v5.34H2zM14.67 9.33v5.34H9.33V9.33zM16.67 2a21 21 0 0 1 1.58.04 4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.04.66.04 1.58h-5.33zM7.33 7.33H2q-.01-.92.04-1.58a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4A21 21 0 0 1 7.33 2zM14.67 2v5.33H9.33V2z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M9.33 7.33h5.34V2h2v5.33H22v2h-5.33v5.34H22v2h-5.33V22h-2v-5.33H9.33V22h-2v-5.33H2v-2h5.33V9.33H2v-2h5.33V2h2zm0 7.34h5.34V9.33H9.33z" clipRule="evenodd" />
    </IconBase>
  ))
);

GridFillDuotone.displayName = 'GridFillDuotone';

// Triple export pattern (lucide-react style)
export { GridFillDuotone, GridFillDuotone as GridFillDuotoneIcon, GridFillDuotone as SiGridFillDuotone };
export default GridFillDuotone;
export type { GridFillDuotoneProps };
