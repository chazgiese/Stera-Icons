import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TrendUpBoldProps = Omit<IconBaseProps, 'children'>;

const TrendUpBold = memo(
  forwardRef<SVGSVGElement, TrendUpBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M22.5 4a1 1 0 0 1 .94.67l.02.04.01.06.03.23v6a1 1 0 1 1-2 0V7.41l-7.8 7.8a1 1 0 0 1-1.4 0l-2.8-2.8-7.3 7.3a1 1 0 1 1-1.4-1.42l8-8 .07-.06a1 1 0 0 1 1.34.06L13 13.1 20.09 6H16.5a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

TrendUpBold.displayName = 'TrendUpBold';

export { TrendUpBold };
export type { TrendUpBoldProps };
