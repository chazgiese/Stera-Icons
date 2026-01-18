import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CopyFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CopyFillDuotone = memo(
  forwardRef<SVGSVGElement, CopyFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15.4 2q1.44-.01 2.38.05a5 5 0 0 1 1.76.44 4.5 4.5 0 0 1 1.97 1.97q.39.8.44 1.76.06.94.05 2.38v1.8q.01 1.44-.05 2.38a5 5 0 0 1-.44 1.76 4.5 4.5 0 0 1-1.97 1.97 5 5 0 0 1-1.76.44l-.8.04q.03-.7.02-1.59v-1.8q.01-1.44-.05-2.38a5 5 0 0 0-.44-1.76 4.5 4.5 0 0 0-1.97-1.97 5 5 0 0 0-1.76-.44Q11.84 7 10.4 7H8.6l-1.59.01.04-.79a5 5 0 0 1 .44-1.76 4.5 4.5 0 0 1 1.97-1.97 5 5 0 0 1 1.76-.44Q12.16 2 13.6 2z" opacity={.4} />
        <path fill="currentColor" d="M10.4 7q1.44-.01 2.38.05a5 5 0 0 1 1.76.44 4.5 4.5 0 0 1 1.97 1.97q.39.8.44 1.76.06.94.05 2.38v1.8q.01 1.44-.05 2.38a5 5 0 0 1-.44 1.76 4.5 4.5 0 0 1-1.97 1.97 5 5 0 0 1-1.76.44q-.94.06-2.38.05H8.6q-1.44.01-2.38-.05a5 5 0 0 1-1.76-.44 4.5 4.5 0 0 1-1.97-1.97 5 5 0 0 1-.44-1.76Q2 16.84 2 15.4v-1.8q-.01-1.44.05-2.38a5 5 0 0 1 .44-1.76 4.5 4.5 0 0 1 1.97-1.97 5 5 0 0 1 1.76-.44Q7.16 7 8.6 7z" />
    </IconBase>
  ))
);

CopyFillDuotone.displayName = 'CopyFillDuotone';

export { CopyFillDuotone };
export type { CopyFillDuotoneProps };
