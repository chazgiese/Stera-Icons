import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartAreaRegularProps = Omit<IconBaseProps, 'children'>;

const ChartAreaRegular = memo(
  forwardRef<SVGSVGElement, ChartAreaRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M21.97 4.47a.75.75 0 0 1 1.28.53v12.75a2 2 0 0 1-2 2H1.5a.75.75 0 0 1-.53-1.28l8-8 .11-.1a.75.75 0 0 1 .95.1L13 13.44zm-8.44 10.56c-.3.3-.77.3-1.06 0L9.5 12.06l-6.19 6.19h17.94a.5.5 0 0 0 .5-.5V6.81z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartAreaRegular.displayName = 'ChartAreaRegular';

export { ChartAreaRegular };
export type { ChartAreaRegularProps };
