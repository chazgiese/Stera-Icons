import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LineWeightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineWeightBoldDuotone = memo(
  forwardRef<SVGSVGElement, LineWeightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19 6.75a2 2 0 0 1 2 2v1.5a2 2 0 0 1-2 2H5a2 2 0 0 1-1.99-1.8l-.01-.2v-1.5c0-1.1.9-2 2-2zm-14 3.5h14v-1.5H5z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M18.75 14c1.24 0 2.25 1 2.25 2.25v2.5c0 1.24-1 2.25-2.25 2.25H5.25C4.01 21 3 20 3 18.75v-2.5C3 15.01 4 14 5.25 14zm-13.5 2a.25.25 0 0 0-.25.25v2.5c0 .14.11.25.25.25h13.5q.23-.02.25-.25v-2.5a.25.25 0 0 0-.25-.25z" clipRule="evenodd" />
        <path fill="currentColor" d="M20 3a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

LineWeightBoldDuotone.displayName = 'LineWeightBoldDuotone';

export { LineWeightBoldDuotone };
export type { LineWeightBoldDuotoneProps };
