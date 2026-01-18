import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronsUpBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronsUpBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronsUpBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 11a1 1 0 0 1 .7.3l7 7a1 1 0 1 1-1.4 1.4L12 13.42l-6.3 6.3a1 1 0 1 1-1.4-1.42l7-7A1 1 0 0 1 12 11" opacity={.4} />
        <path fill="currentColor" d="M12 3a1 1 0 0 1 .7.3l7 7a1 1 0 1 1-1.4 1.4L12 5.42l-6.3 6.3a1 1 0 1 1-1.4-1.42l7-7A1 1 0 0 1 12 3" />
    </IconBase>
  ))
);

ChevronsUpBoldDuotone.displayName = 'ChevronsUpBoldDuotone';

export { ChevronsUpBoldDuotone };
export type { ChevronsUpBoldDuotoneProps };
