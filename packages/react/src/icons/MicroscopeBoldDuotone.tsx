import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MicroscopeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MicroscopeBoldDuotone = memo(
  forwardRef<SVGSVGElement, MicroscopeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 8h-.5a6.5 6.5 0 1 0 0 13H6.03A8.5 8.5 0 0 1 11.5 6h.5zM19 17a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2z" />
        <path fill="currentColor" d="M20 21a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M16 1a4 4 0 0 1 4 4v5.75c0 1.16-.88 2.11-2 2.24V13a2 2 0 1 1-4 0v-.01a2.25 2.25 0 0 1-2-2.24V5a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v5.75q.02.23.25.25h3.5q.23-.02.25-.25V5a2 2 0 0 0-2-2" clipRule="evenodd" />
    </IconBase>
  ))
);

MicroscopeBoldDuotone.displayName = 'MicroscopeBoldDuotone';

export { MicroscopeBoldDuotone };
export type { MicroscopeBoldDuotoneProps };
