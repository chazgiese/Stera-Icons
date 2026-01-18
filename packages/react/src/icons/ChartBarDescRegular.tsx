import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartBarDescRegularProps = Omit<IconBaseProps, 'children'>;

const ChartBarDescRegular = memo(
  forwardRef<SVGSVGElement, ChartBarDescRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M7.75 3.25a2 2 0 0 1 2 2v2.07a2 2 0 0 1 .5-.07h3.5a2 2 0 0 1 2 2v2.07a2 2 0 0 1 .5-.07h3.5a2 2 0 0 1 2 2v6H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h.25v-14c0-1.1.9-2 2-2zm-3.5 1.5a.5.5 0 0 0-.5.5v14h4.5v-14a.5.5 0 0 0-.5-.5zm6 4a.5.5 0 0 0-.5.5v10h4.5v-10a.5.5 0 0 0-.5-.5zm6 4a.5.5 0 0 0-.5.5v6h4.5v-6a.5.5 0 0 0-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartBarDescRegular.displayName = 'ChartBarDescRegular';

export { ChartBarDescRegular };
export type { ChartBarDescRegularProps };
