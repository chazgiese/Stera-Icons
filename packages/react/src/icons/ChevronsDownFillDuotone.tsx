import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronsDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronsDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronsDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M17.94 3.94a1.5 1.5 0 1 1 2.12 2.12l-7 7a1.5 1.5 0 0 1-2.12 0l-7-7a1.5 1.5 0 1 1 2.12-2.12L12 9.88z" opacity={.4} />
        <path fill="currentColor" d="M17.94 11.94a1.5 1.5 0 1 1 2.12 2.12l-7 7a1.5 1.5 0 0 1-2.12 0l-7-7a1.5 1.5 0 1 1 2.12-2.12L12 17.88z" />
    </IconBase>
  ))
);

ChevronsDownFillDuotone.displayName = 'ChevronsDownFillDuotone';

export { ChevronsDownFillDuotone };
export type { ChevronsDownFillDuotoneProps };
