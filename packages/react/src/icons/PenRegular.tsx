import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PenRegularProps = Omit<IconBaseProps, 'children'>;

const PenRegular = memo(
  forwardRef<SVGSVGElement, PenRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18.25 1.87c1 0 2.03.35 2.78 1.1s1.1 1.78 1.1 2.78-.35 2.03-1.1 2.78l-12.5 12.5a.8.8 0 0 1-.46.22l-5 .5a.75.75 0 0 1-.82-.83l.5-5 .03-.12q.05-.2.19-.33l12.5-12.5a4 4 0 0 1 2.78-1.1M4.22 16.34l-.38 3.82 3.82-.38L17.44 10 14 6.56zM18.25 3.37c-.67 0-1.3.24-1.72.66L15.06 5.5l3.44 3.44 1.47-1.47c.42-.42.66-1.05.66-1.72s-.24-1.3-.66-1.72a2.4 2.4 0 0 0-1.72-.66" clipRule="evenodd" />
    </IconBase>
  ))
);

PenRegular.displayName = 'PenRegular';

// Triple export pattern (lucide-react style)
export { PenRegular, PenRegular as PenRegularIcon, PenRegular as SiPenRegular };
export type { PenRegularProps };
