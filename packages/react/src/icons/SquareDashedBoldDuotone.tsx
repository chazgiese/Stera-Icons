import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SquareDashedBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SquareDashedBoldDuotone = memo(
  forwardRef<SVGSVGElement, SquareDashedBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M3 16.5a1 1 0 0 1 1 1v.04C4 18.9 5.1 20 6.46 20h.04a1 1 0 1 1 0 2h-.04C4 22 2 20 2 17.54v-.04a1 1 0 0 1 1-1M21 16.5a1 1 0 0 1 1 1v.04C22 20 20 22 17.54 22h-.04a1 1 0 1 1 0-2h.04C18.9 20 20 18.9 20 17.54v-.04a1 1 0 0 1 1-1M6.5 2a1 1 0 0 1 0 2h-.04A2.46 2.46 0 0 0 4 6.46v.04a1 1 0 0 1-2 0v-.04C2 4 4 2 6.46 2zM17.54 2C20 2 22 4 22 6.46v.04a1 1 0 1 1-2 0v-.04C20 5.1 18.9 4 17.54 4h-.04a1 1 0 1 1 0-2z" />
        <path d="M14 20a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2zM3 9a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1M21 9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1M14 2a1 1 0 1 1 0 2h-4a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

SquareDashedBoldDuotone.displayName = 'SquareDashedBoldDuotone';

export { SquareDashedBoldDuotone };
export type { SquareDashedBoldDuotoneProps };
