import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock4RegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock4RegularDuotone = memo(
  forwardRef<SVGSVGElement, Clock4RegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 5.25c.41 0 .75.34.75.75v5.57l3.09 1.78a.75.75 0 1 1-.75 1.3l-3.46-2-.04-.02-.02-.01-.13-.13-.05-.06-.04-.06-.03-.06-.03-.07-.02-.07-.02-.17V6c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

Clock4RegularDuotone.displayName = 'Clock4RegularDuotone';

export { Clock4RegularDuotone };
export type { Clock4RegularDuotoneProps };
