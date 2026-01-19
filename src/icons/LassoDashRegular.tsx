import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LassoDashRegularProps = Omit<IconBaseProps, 'children'>;

const LassoDashRegular = memo(
  forwardRef<SVGSVGElement, LassoDashRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="lasso-dash" {...props}>
      <path fill="currentColor" d="M12.8 20.14a.75.75 0 0 1 .26 1.48 13 13 0 0 1-2.03.17.75.75 0 0 1 0-1.5 9 9 0 0 0 1.78-.15M5.86 19.21a.75.75 0 0 1 1.04-.17q.7.5 1.54.8a.75.75 0 0 1-.52 1.41 8 8 0 0 1-1.89-1 .75.75 0 0 1-.17-1.04M16.84 18.55a.75.75 0 0 1 .85 1.23q-.82.56-1.76.98a.75.75 0 1 1-.6-1.37 9 9 0 0 0 1.5-.84M3.38 15.1c.39-.14.82.06.96.45q.3.86.78 1.6a.75.75 0 0 1-1.27.8 10 10 0 0 1-.92-1.89.75.75 0 0 1 .45-.96M19.61 15.33a.75.75 0 0 1 1.36.64q-.43.92-1.06 1.74a.75.75 0 0 1-1.19-.92q.54-.7.9-1.46M3.17 10.34c.41.06.7.44.64.85q-.06.42-.06.8 0 .47.03.92a.75.75 0 1 1-1.5.12q-.03-.5-.03-1.03 0-.51.07-1.02c.06-.41.44-.7.85-.64M20.7 10.26c.4-.1.8.16.9.57a7 7 0 0 1 .14 2.16.75.75 0 0 1-1.5-.1 7 7 0 0 0-.1-1.74c-.1-.4.16-.8.56-.9M9.5 7.81a.75.75 0 0 1 .74 1.3q-.41.24-.82.51a.75.75 0 0 1-.84-1.24q.46-.3.91-.57M4.35 6.47a.75.75 0 0 1 1.17.94 9 9 0 0 0-.93 1.41.75.75 0 0 1-1.33-.7q.45-.85 1.09-1.65M16.97 7.03a.75.75 0 0 1 .97-.43q1.11.43 1.97 1.22a.75.75 0 0 1-1.03 1.1q-.61-.6-1.48-.92a.75.75 0 0 1-.43-.97M14.62 6.14a.75.75 0 0 1 .1 1.5 9 9 0 0 0-1.85.33.75.75 0 1 1-.41-1.44 10 10 0 0 1 2.16-.39M8.17 3.43a.75.75 0 0 1 .67 1.35q-.8.4-1.47.88a.75.75 0 0 1-.88-1.22q.78-.55 1.68-1M11.88 2.26a.75.75 0 0 1 .24 1.48q-.43.07-.85.17a.75.75 0 0 1-.35-1.46z" />
    </IconBase>
  ))
);

LassoDashRegular.displayName = 'LassoDashRegular';

// Triple export pattern (lucide-react style)
export { LassoDashRegular, LassoDashRegular as LassoDashRegularIcon, LassoDashRegular as SiLassoDashRegular };
export type { LassoDashRegularProps };
