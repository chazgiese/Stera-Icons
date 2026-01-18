import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartBarXYBoldProps = Omit<IconBaseProps, 'children'>;

const ChartBarXYBold = memo(
  forwardRef<SVGSVGElement, ChartBarXYBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M2 3a1 1 0 0 1 1 1v14l.03.87q.04.06.1.1l.13.02L4 19h18a1 1 0 1 1 0 2H4q-.5 0-.9-.02a2 2 0 0 1-.87-.23 2.3 2.3 0 0 1-.98-.98c-.16-.3-.2-.6-.23-.87Q1 18.5 1 18V4a1 1 0 0 1 1-1" />
        <path fill="currentColor" d="M7 12a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1M11 5a1 1 0 0 1 1 1v11a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1M15 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1M19 7a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ChartBarXYBold.displayName = 'ChartBarXYBold';

export { ChartBarXYBold };
export type { ChartBarXYBoldProps };
