import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CrosshairRegularProps = Omit<IconBaseProps, 'children'>;

const CrosshairRegular = memo(
  forwardRef<SVGSVGElement, CrosshairRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25c.41 0 .75.34.75.75v2.29a7.75 7.75 0 0 1 6.96 6.96H22a.75.75 0 0 1 0 1.5h-2.29a7.75 7.75 0 0 1-6.96 6.96V22a.75.75 0 0 1-1.5 0v-2.29a7.75 7.75 0 0 1-6.96-6.96H2a.75.75 0 0 1 0-1.5h2.29a7.75 7.75 0 0 1 6.96-6.96V2c0-.41.34-.75.75-.75m-6.2 11.5a6.25 6.25 0 0 0 5.45 5.45v-5.45zm6.95 0v5.45a6.25 6.25 0 0 0 5.45-5.45zm0-1.5h5.45a6.25 6.25 0 0 0-5.45-5.45zm-1.5-5.45a6.25 6.25 0 0 0-5.45 5.45h5.45z" clipRule="evenodd" />
    </IconBase>
  ))
);

CrosshairRegular.displayName = 'CrosshairRegular';

export { CrosshairRegular };
export type { CrosshairRegularProps };
