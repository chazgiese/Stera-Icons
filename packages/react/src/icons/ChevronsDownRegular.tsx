import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronsDownRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronsDownRegular = memo(
  forwardRef<SVGSVGElement, ChevronsDownRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18.47 12.47a.75.75 0 1 1 1.06 1.06l-7 7a.75.75 0 0 1-1.06 0l-7-7a.75.75 0 1 1 1.06-1.06L12 18.94z" />
        <path fill="currentColor" d="M18.47 4.47a.75.75 0 1 1 1.06 1.06l-7 7a.75.75 0 0 1-1.06 0l-7-7a.75.75 0 1 1 1.06-1.06L12 10.94z" />
    </IconBase>
  ))
);

ChevronsDownRegular.displayName = 'ChevronsDownRegular';

// Triple export pattern (lucide-react style)
export { ChevronsDownRegular, ChevronsDownRegular as ChevronsDownRegularIcon, ChevronsDownRegular as SiChevronsDownRegular };
export type { ChevronsDownRegularProps };
