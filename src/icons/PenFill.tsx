import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PenFillProps = Omit<IconBaseProps, 'children'>;

const PenFill = memo(
  forwardRef<SVGSVGElement, PenFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="pen-fill" {...props}>
      <path fill="currentColor" d="m18.32 11.24-9.79 9.79q-.16.16-.4.2l-5.5 1a.75.75 0 0 1-.87-.86l1-5.5.03-.12q.06-.15.18-.28l9.8-9.8zM18.25 1.87c1 0 2.03.35 2.78 1.1s1.1 1.78 1.1 2.78-.35 2.03-1.1 2.78l-1.3 1.3-5.55-5.57 1.29-1.29a4 4 0 0 1 2.78-1.1" />
    </IconBase>
  ))
);

PenFill.displayName = 'PenFill';

// Triple export pattern (lucide-react style)
export { PenFill, PenFill as PenFillIcon, PenFill as SiPenFill };
export type { PenFillProps };
