import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="m15.74 4.87.01.13v14l-.01.13a.8.8 0 0 0-.21-.66l-1.28-1.28V6.8l1.28-1.28a.8.8 0 0 0 .2-.66" opacity={.4} />
        <path fill="currentColor" d="M14.47 4.47a.75.75 0 1 1 1.06 1.06L9.06 12l6.47 6.47a.75.75 0 1 1-1.06 1.06l-7-7a.75.75 0 0 1 0-1.06z" />
    </IconBase>
  ))
);

ChevronFullLeftRegularDuotone.displayName = 'ChevronFullLeftRegularDuotone';

export { ChevronFullLeftRegularDuotone };
export type { ChevronFullLeftRegularDuotoneProps };
