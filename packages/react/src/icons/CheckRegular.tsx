import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CheckRegularProps = Omit<IconBaseProps, 'children'>;

const CheckRegular = memo(
  forwardRef<SVGSVGElement, CheckRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M19.45 5.49a.75.75 0 0 1 1.1 1.02L10.02 17.8l-.32.33q-.16.17-.5.29-.44.12-.86-.06c-.21-.1-.35-.25-.45-.36q-.13-.16-.27-.37l-4.23-6.05a.75.75 0 0 1 1.22-.86l4.24 6.05.03.05.05-.04z" />
    </IconBase>
  ))
);

CheckRegular.displayName = 'CheckRegular';

export { CheckRegular };
export type { CheckRegularProps };
