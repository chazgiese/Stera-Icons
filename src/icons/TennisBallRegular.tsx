import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TennisBallRegularProps = Omit<IconBaseProps, 'children'>;

const TennisBallRegular = memo(
  forwardRef<SVGSVGElement, TennisBallRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="tennis-ball" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5c-1.96 0-3.76.68-5.17 1.82a9.7 9.7 0 0 1 0 12.86 8.2 8.2 0 0 0 10.34 0 9.7 9.7 0 0 1 0-12.86A8.2 8.2 0 0 0 12 3.75M5.75 6.62a8.2 8.2 0 0 0 0 10.76 8.2 8.2 0 0 0 0-10.76m12.5 0a8.2 8.2 0 0 0 0 10.76 8.2 8.2 0 0 0 0-10.76" clipRule="evenodd" />
    </IconBase>
  ))
);

TennisBallRegular.displayName = 'TennisBallRegular';

// Triple export pattern (lucide-react style)
export { TennisBallRegular, TennisBallRegular as TennisBallRegularIcon, TennisBallRegular as SiTennisBallRegular };
export default TennisBallRegular;
export type { TennisBallRegularProps };
